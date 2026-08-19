"use client";

import { useEffect, useState } from "react";
import {
  Sparkles,
  CheckCircle2,
  AlertCircle,
  CreditCard,
  QrCode,
  ShieldCheck,
  Zap,
  Crown,
  Check,
  Plus,
  Edit2,
  Trash2,
  Loader2,
  X,
  RefreshCw,
  Clock,
  ExternalLink,
  Sliders,
} from "lucide-react";

interface PaketItem {
  id_paket: number;
  nama_paket: string;
  harga_paket: string;
  masa_aktif: number;
  deskripsi?: string;
  features: string[];
}

interface PaymentModalData {
  orderId: string;
  namaPaket: string;
  amount: string;
  totalAmount: string;
  qrisImage: string;
  qrisUrl?: string;
  expiredAt: string;
}

export default function LanggananPage() {
  const [pakets, setPakets] = useState<PaketItem[]>([]);
  const [currentOrder, setCurrentOrder] = useState<any>(null);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [activePaketId, setActivePaketId] = useState<number | null>(null);
  const [currentUser, setCurrentUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [creatingPayment, setCreatingPayment] = useState<number | null>(null);
  const [paymentData, setPaymentData] = useState<PaymentModalData | null>(null);
  const [checkingStatus, setCheckingStatus] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);

  // Admin states
  const [adminTab, setAdminTab] = useState<"catalog" | "manage">("catalog");
  const [editingPaket, setEditingPaket] = useState<PaketItem | null>(null);
  const [showEditModal, setShowEditModal] = useState(false);
  const [paketForm, setPaketForm] = useState({
    nama_paket: "",
    harga_paket: "",
    masa_aktif: 60,
    deskripsi: "",
    featuresStr: "",
  });
  const [savingPaket, setSavingPaket] = useState(false);

  const loadData = async () => {
    try {
      setLoading(true);
      const [authRes, paketRes] = await Promise.all([
        fetch("/api/auth/me", { credentials: "include" }),
        fetch("/api/pakets", { credentials: "include" }),
      ]);

      const authData = await authRes.json();
      if (authData.authenticated && authData.user) {
        setCurrentUser(authData.user);
      }

      const paketData = await paketRes.json();
      if (paketData.success) {
        setPakets(paketData.pakets || []);
        setCurrentOrder(paketData.currentOrder);
        setIsSubscribed(paketData.isSubscribed);
        setActivePaketId(paketData.activePaketId);
      }
    } catch (err) {
      console.error("Load Langganan Error:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  // Handle auto polling when payment modal is open
  useEffect(() => {
    if (!paymentData || paymentSuccess) return;

    const interval = setInterval(async () => {
      try {
        const res = await fetch(`/api/payment/status?orderId=${paymentData.orderId}`, {
          credentials: "include",
        });
        const data = await res.json();
        if (data.success && data.status === "PAID") {
          setPaymentSuccess(true);
          setIsSubscribed(true);
          loadData();
          clearInterval(interval);
        }
      } catch (err) {
        console.error("Auto check status error:", err);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [paymentData, paymentSuccess]);

  // Initiate QRIS Payment via KlikQRIS
  const handleBuyPaket = async (paket: PaketItem) => {
    setCreatingPayment(paket.id_paket);
    setError(null);

    try {
      const res = await fetch("/api/payment/create", {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id_paket: paket.id_paket }),
      });
      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.error || "Gagal membuat invoice QRIS");
      }

      setPaymentData(data.data);
      setPaymentSuccess(false);
    } catch (err: any) {
      setError(err?.message || "Terjadi kesalahan saat memproses pembayaran");
    } finally {
      setCreatingPayment(null);
    }
  };

  const [syncingPayment, setSyncingPayment] = useState(false);

  // Manual sync all payments with KlikQRIS
  const handleSyncPayment = async () => {
    setSyncingPayment(true);
    setError(null);
    setSuccessMsg(null);

    try {
      const res = await fetch("/api/payment/status", { credentials: "include" });
      const data = await res.json();

      await loadData();

      if (data.status === "PAID" || data.isSubscribed) {
        setSuccessMsg("Pembayaran terverifikasi! Paket langganan Anda aktif.");
      } else {
        setSuccessMsg("Pemeriksaan selesai. Status pembayaran telah diperbarui secara realtime dari KlikQRIS.");
      }
      setTimeout(() => setSuccessMsg(null), 5000);
    } catch (err: any) {
      setError(err?.message || "Gagal menyinkronkan status pembayaran");
    } finally {
      setSyncingPayment(false);
    }
  };

  // Manual check status
  const handleManualCheckStatus = async () => {
    if (!paymentData) return;
    setCheckingStatus(true);
    setError(null);

    try {
      const res = await fetch(`/api/payment/status?orderId=${paymentData.orderId}`, {
        credentials: "include",
      });
      const data = await res.json();

      if (data.success && data.status === "PAID") {
        setPaymentSuccess(true);
        setIsSubscribed(true);
        loadData();
      } else {
        alert("Pembayaran belum terdeteksi. Silakan transfer tepat sesuai total nominal dan scan barcode QRIS.");
      }
    } catch (err: any) {
      alert(err?.message || "Gagal memeriksa status pembayaran");
    } finally {
      setCheckingStatus(false);
    }
  };

  // Admin Actions: Open Edit
  const openEditModal = (paket?: PaketItem) => {
    if (paket) {
      setEditingPaket(paket);
      setPaketForm({
        nama_paket: paket.nama_paket,
        harga_paket: paket.harga_paket,
        masa_aktif: paket.masa_aktif,
        deskripsi: paket.deskripsi || "",
        featuresStr: paket.features.join("\n"),
      });
    } else {
      setEditingPaket(null);
      setPaketForm({
        nama_paket: "",
        harga_paket: "50000",
        masa_aktif: 60,
        deskripsi: "",
        featuresStr: "Masa Aktif 60 Hari\nBebas Akses Semua Tema\nBuku Tamu Digital",
      });
    }
    setShowEditModal(true);
  };

  // Admin Actions: Save
  const handleSavePaket = async (e: React.FormEvent) => {
    e.preventDefault();
    setSavingPaket(true);

    try {
      const features = paketForm.featuresStr
        .split("\n")
        .map((f) => f.trim())
        .filter(Boolean);

      const payload = {
        nama_paket: paketForm.nama_paket,
        harga_paket: paketForm.harga_paket,
        masa_aktif: paketForm.masa_aktif,
        deskripsi: paketForm.deskripsi,
        features,
      };

      if (editingPaket) {
        const res = await fetch("/api/pakets", {
          method: "PUT",
          credentials: "include",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ ...payload, id_paket: editingPaket.id_paket }),
        });
        const data = await res.json();
        if (!res.ok) throw new Error(data.error || "Gagal memperbarui paket");
        setSuccessMsg("Paket berhasil diperbarui!");
      } else {
        const res = await fetch("/api/pakets", {
          method: "POST",
          credentials: "include",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
        const data = await res.json();
        if (!res.ok) throw new Error(data.error || "Gagal menambahkan paket");
        setSuccessMsg("Paket baru berhasil ditambahkan!");
      }

      setShowEditModal(false);
      loadData();
      setTimeout(() => setSuccessMsg(null), 3500);
    } catch (err: any) {
      alert(err?.message || "Gagal menyimpan paket");
    } finally {
      setSavingPaket(false);
    }
  };

  // Admin Actions: Delete
  const handleDeletePaket = async (id_paket: number) => {
    if (!confirm("Hapus paket langganan ini?")) return;
    try {
      const res = await fetch(`/api/pakets?id=${id_paket}`, {
        method: "DELETE",
        credentials: "include",
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Gagal menghapus paket");
      setSuccessMsg("Paket berhasil dihapus");
      loadData();
      setTimeout(() => setSuccessMsg(null), 3500);
    } catch (err: any) {
      alert(err?.message || "Gagal menghapus paket");
    }
  };

  const isAdmin = currentUser?.role === "admin";

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-slate-800 pb-5">
        <div>
          <h1 className="text-2xl font-bold text-white flex items-center gap-3">
            <Sparkles className="w-6 h-6 text-rose-500" /> Paket & Langganan Undangan
          </h1>
          <p className="text-slate-400 text-sm mt-1">
            Pilih paket langganan terbaik untuk mengaktifkan seluruh fitur premium dan bebas ganti tema undangan Anda.
          </p>
        </div>

        {/* Tab switch for Admin */}
        {isAdmin && (
          <div className="flex items-center gap-2 bg-slate-900 border border-slate-800 p-1 rounded-2xl">
            <button
              onClick={() => setAdminTab("catalog")}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                adminTab === "catalog"
                  ? "bg-rose-500 text-white shadow-md shadow-rose-500/20"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              Tampilan Pengguna
            </button>
            <button
              onClick={() => setAdminTab("manage")}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                adminTab === "manage"
                  ? "bg-rose-500 text-white shadow-md shadow-rose-500/20"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <Sliders className="w-3.5 h-3.5" /> Konfigurasi Admin
            </button>
          </div>
        )}
      </div>

      {successMsg && (
        <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold flex items-center gap-2">
          <CheckCircle2 className="w-5 h-5" /> {successMsg}
        </div>
      )}

      {error && (
        <div className="p-4 rounded-2xl bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs font-semibold flex items-center gap-2">
          <AlertCircle className="w-5 h-5" /> {error}
        </div>
      )}

      {/* Status Langganan Saat Ini (User View) */}
      {adminTab === "catalog" && (
        <div className="p-6 rounded-3xl bg-gradient-to-r from-slate-900 via-slate-900/90 to-slate-950 border border-slate-800 shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex items-start sm:items-center gap-4">
            <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 ${
              isSubscribed ? "bg-emerald-500/15 text-emerald-400 border border-emerald-500/30" : "bg-amber-500/15 text-amber-400 border border-amber-500/30"
            }`}>
              {isSubscribed ? <Crown className="w-6 h-6" /> : <Clock className="w-6 h-6" />}
            </div>
            <div>
              <div className="flex items-center gap-2.5">
                <span className="text-xs uppercase tracking-wider text-slate-400 font-semibold">Status Langganan Anda</span>
                <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-bold ${
                  isSubscribed ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30" : "bg-amber-500/20 text-amber-300 border border-amber-500/30"
                }`}>
                  {isSubscribed ? "AKTIF (PREMIUM)" : "BELUM AKTIF / TRIAL"}
                </span>
              </div>
              <p className="text-white text-base font-bold mt-1">
                {isSubscribed
                  ? `Undangan Anda aktif dengan paket ${pakets.find(p => p.id_paket === activePaketId)?.nama_paket || "Premium"}`
                  : "Aktifkan paket Anda untuk bebas memilih tema dan membagikan undangan tanpa batasan."}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={handleSyncPayment}
              disabled={syncingPayment}
              className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white text-xs font-bold border border-slate-700 transition-all flex items-center gap-2 shadow-sm"
              title="Periksa konfirmasi pembayaran QRIS ke server KlikQRIS secara realtime"
            >
              <RefreshCw className={`w-3.5 h-3.5 text-rose-400 ${syncingPayment ? "animate-spin" : ""}`} />
              <span>{syncingPayment ? "Memeriksa Status..." : "Cek Status Pembayaran Real-time"}</span>
            </button>

            <div className="text-right hidden lg:block pl-2 border-l border-slate-800">
              <span className="text-[11px] text-slate-500 block">Metode Pembayaran</span>
              <span className="text-xs text-rose-400 font-mono font-bold flex items-center gap-1">
                <QrCode className="w-3.5 h-3.5" /> Instant Dynamic QRIS
              </span>
            </div>
          </div>
        </div>
      )}

      {/* Loading state */}
      {loading ? (
        <div className="p-16 text-center text-slate-500 text-xs flex items-center justify-center gap-2">
          <Loader2 className="w-4 h-4 animate-spin text-rose-400" /> Memuat daftar paket...
        </div>
      ) : adminTab === "catalog" ? (
        /* USER VIEW: Kartu Paket, Harga, dan Kelengkapan Fitur */
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pakets.map((paket) => {
            const isCurrent = activePaketId === paket.id_paket && isSubscribed;
            const isPopular = paket.nama_paket.toLowerCase().includes("gold") || paket.nama_paket.toLowerCase().includes("diamond");
            const priceNum = parseInt(paket.harga_paket, 10) || 0;

            return (
              <div
                key={paket.id_paket}
                className={`relative rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 ${
                  isPopular
                    ? "bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 border-2 border-rose-500/50 shadow-2xl shadow-rose-500/10"
                    : "bg-slate-900 border border-slate-800 shadow-xl hover:border-slate-700"
                }`}
              >
                {isPopular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-rose-500 to-pink-600 text-white font-bold text-[10px] uppercase tracking-wider shadow-md shadow-rose-500/30">
                    Paling Populer
                  </div>
                )}

                <div className="space-y-5">
                  <div className="border-b border-slate-800 pb-5">
                    <h3 className="text-lg font-bold text-white flex items-center justify-between">
                      <span>{paket.nama_paket}</span>
                      <Zap className={`w-5 h-5 ${isPopular ? "text-rose-400" : "text-slate-500"}`} />
                    </h3>
                    <p className="text-xs text-slate-400 mt-1 min-h-[32px]">
                      {paket.deskripsi || `Paket undangan pernikahan lengkap untuk masa aktif ${paket.masa_aktif} hari.`}
                    </p>

                    <div className="mt-4 flex items-baseline gap-1">
                      <span className="text-xs text-slate-400 font-mono">Rp</span>
                      <span className="text-3xl font-black text-white tracking-tight">
                        {priceNum.toLocaleString("id-ID")}
                      </span>
                      <span className="text-xs text-slate-500 font-medium">/ paket</span>
                    </div>
                  </div>

                  {/* Kelengkapan Fitur (Feature Checklist) */}
                  <div className="space-y-3">
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      Kelengkapan Fitur:
                    </p>
                    <ul className="space-y-2.5">
                      {paket.features.map((feature, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2.5 text-xs text-slate-300">
                          <div className="w-4 h-4 rounded-full bg-rose-500/15 text-rose-400 flex items-center justify-center shrink-0 mt-0.5 border border-rose-500/30">
                            <Check className="w-2.5 h-2.5 stroke-[3]" />
                          </div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-8">
                  <button
                    onClick={() => handleBuyPaket(paket)}
                    disabled={creatingPayment === paket.id_paket}
                    className={`w-full py-3.5 rounded-2xl font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-lg ${
                      isCurrent
                        ? "bg-slate-800 text-emerald-400 border border-emerald-500/30 cursor-default"
                        : isPopular
                        ? "bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-600 hover:to-pink-700 text-white shadow-rose-500/25"
                        : "bg-slate-800 hover:bg-slate-700 text-white border border-slate-700"
                    }`}
                  >
                    {creatingPayment === paket.id_paket ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" /> Menyiapkan QRIS...
                      </>
                    ) : isCurrent ? (
                      <>
                        <CheckCircle2 className="w-4 h-4" /> Paket Aktif Saat Ini
                      </>
                    ) : (
                      <>
                        <QrCode className="w-4 h-4" /> Bayar Sekarang via QRIS
                      </>
                    )}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        /* ADMIN VIEW: Konfigurasi Harga, Fitur, & Detail List */
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-lg font-bold text-white">Kelola Daftar Paket Undangan</h2>
              <p className="text-xs text-slate-400">Atur harga, masa aktif, dan kelengkapan list fitur untuk setiap paket.</p>
            </div>

            <button
              onClick={() => openEditModal()}
              className="px-4 py-2 rounded-xl bg-gradient-to-r from-rose-500 to-pink-600 text-white font-bold text-xs flex items-center gap-1.5 shadow-lg shadow-rose-500/20"
            >
              <Plus className="w-4 h-4" /> Tambah Paket Baru
            </button>
          </div>

          <div className="grid grid-cols-1 gap-4">
            {pakets.map((paket) => (
              <div
                key={paket.id_paket}
                className="p-6 rounded-3xl bg-slate-900 border border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-md"
              >
                <div className="space-y-2 max-w-xl">
                  <div className="flex items-center gap-3">
                    <h3 className="text-base font-bold text-white">{paket.nama_paket}</h3>
                    <span className="px-2.5 py-0.5 rounded-full bg-rose-500/10 text-rose-400 border border-rose-500/20 text-xs font-mono font-bold">
                      Rp {parseInt(paket.harga_paket, 10).toLocaleString("id-ID")}
                    </span>
                    <span className="text-xs text-slate-400 font-mono">
                      Masa Aktif: {paket.masa_aktif} Hari
                    </span>
                  </div>

                  <p className="text-xs text-slate-400">{paket.deskripsi || "Tanpa deskripsi"}</p>

                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {paket.features.map((feat, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded-lg bg-slate-950 border border-slate-800 text-[11px] text-slate-300 font-medium"
                      >
                        ✓ {feat}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <button
                    onClick={() => openEditModal(paket)}
                    className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold flex items-center gap-1.5 border border-slate-700 transition-colors"
                  >
                    <Edit2 className="w-3.5 h-3.5 text-rose-400" /> Edit Detail & Fitur
                  </button>
                  <button
                    onClick={() => handleDeletePaket(paket.id_paket)}
                    className="p-2 rounded-xl bg-rose-500/10 hover:bg-rose-500/20 text-rose-400 border border-rose-500/30 transition-colors"
                    title="Hapus Paket"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Info KlikQRIS API Settings */}
          <div className="p-6 rounded-3xl bg-slate-950 border border-slate-800 space-y-3">
            <h3 className="text-sm font-bold text-white flex items-center gap-2">
              <QrCode className="w-4 h-4 text-rose-400" /> Integrasi Payment Gateway KlikQRIS
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Sistem pembayaran otomatis terintegrasi dengan Dynamic QRIS KlikQRIS. Kredensial API Key dan Merchant ID dikonfigurasi melalui file <code className="text-rose-400 font-mono">.env</code> (<code className="text-slate-300 font-mono">KLIKQRIS_API_KEY</code> &amp; <code className="text-slate-300 font-mono">KLIKQRIS_MERCHANT_ID</code>).
            </p>
          </div>
        </div>
      )}

      {/* MODAL PEMBAYARAN KLIKQRIS (Dynamic QRIS) */}
      {paymentData && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-800 w-full max-w-md rounded-3xl p-6 sm:p-8 space-y-5 relative shadow-2xl">
            <button
              onClick={() => setPaymentData(null)}
              className="absolute top-6 right-6 text-slate-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            {paymentSuccess ? (
              <div className="py-8 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center mx-auto animate-bounce">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Pembayaran Berhasil!</h3>
                  <p className="text-xs text-slate-400 mt-1">
                    Paket <strong>{paymentData.namaPaket}</strong> Anda kini telah aktif. Anda dapat langsung menerapkan tema dan menggunakan seluruh fitur premium.
                  </p>
                </div>
                <button
                  onClick={() => setPaymentData(null)}
                  className="px-8 py-3 rounded-xl bg-gradient-to-r from-rose-500 to-pink-600 text-white font-bold text-xs shadow-lg shadow-rose-500/25"
                >
                  Selesai &amp; Buka Dashboard
                </button>
              </div>
            ) : (
              <>
                <div className="text-center space-y-1">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-rose-400">
                    Tagihan Pembayaran QRIS
                  </span>
                  <h2 className="text-lg font-bold text-white">Scan Barcode untuk Membayar</h2>
                  <p className="text-xs text-slate-400">
                    Order ID: <span className="font-mono text-slate-300">{paymentData.orderId}</span> ({paymentData.namaPaket})
                  </p>
                </div>

                {/* QRIS Image Container */}
                <div className="p-4 rounded-2xl bg-white border border-slate-200 flex items-center justify-center max-w-[260px] mx-auto shadow-md">
                  <img
                    src={paymentData.qrisImage}
                    alt="QRIS Barcode"
                    className="w-full h-auto object-contain rounded-lg"
                  />
                </div>

                {/* Amount Display */}
                <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-200 space-y-1">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-400">Nominal Wajib Ditransfer:</span>
                    <span className="text-[10px] text-amber-300 font-semibold">*Termasuk Kode Unik</span>
                  </div>
                  <p className="text-2xl font-black text-white font-mono tracking-tight">
                    Rp {parseInt(paymentData.totalAmount, 10).toLocaleString("id-ID")}
                  </p>
                  <p className="text-[11px] text-slate-400">
                    Transfer persis sesuai digit di atas melalui aplikasi BCA, Mandiri, BRI, GoPay, OVO, ShopeePay, DANA, dll.
                  </p>
                </div>

                {/* Action buttons */}
                <div className="space-y-2 pt-2">
                  <button
                    onClick={handleManualCheckStatus}
                    disabled={checkingStatus}
                    className="w-full py-3 rounded-xl bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-600 hover:to-pink-700 text-white font-bold text-xs shadow-lg shadow-rose-500/25 flex items-center justify-center gap-2"
                  >
                    {checkingStatus ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" /> Memeriksa Status...
                      </>
                    ) : (
                      <>
                        <RefreshCw className="w-4 h-4" /> Cek Status Pembayaran
                      </>
                    )}
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}

      {/* MODAL ADMIN: Tambah / Edit Paket */}
      {showEditModal && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-800 w-full max-w-lg rounded-3xl p-6 sm:p-8 space-y-4 relative shadow-2xl">
            <button
              onClick={() => setShowEditModal(false)}
              className="absolute top-6 right-6 text-slate-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <Sliders className="w-5 h-5 text-rose-500" />
              <span>{editingPaket ? "Edit Paket Langganan" : "Tambah Paket Baru"}</span>
            </h2>

            <form onSubmit={handleSavePaket} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1">Nama Paket</label>
                <input
                  type="text"
                  required
                  value={paketForm.nama_paket}
                  onChange={(e) => setPaketForm({ ...paketForm, nama_paket: e.target.value })}
                  placeholder="Contoh: Gold / Diamond"
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-rose-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">Harga (Rupiah)</label>
                  <input
                    type="number"
                    required
                    value={paketForm.harga_paket}
                    onChange={(e) => setPaketForm({ ...paketForm, harga_paket: e.target.value })}
                    placeholder="70000"
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-rose-500 font-mono"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">Masa Aktif (Hari)</label>
                  <input
                    type="number"
                    required
                    value={paketForm.masa_aktif}
                    onChange={(e) => setPaketForm({ ...paketForm, masa_aktif: parseInt(e.target.value, 10) || 60 })}
                    placeholder="60"
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-rose-500 font-mono"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1">Deskripsi Singkat</label>
                <input
                  type="text"
                  value={paketForm.deskripsi}
                  onChange={(e) => setPaketForm({ ...paketForm, deskripsi: e.target.value })}
                  placeholder="Contoh: Paket terbaik untuk pernikahan intim & elegan"
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-rose-500"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1">
                  Kelengkapan Fitur (1 Baris = 1 Fitur)
                </label>
                <textarea
                  rows={5}
                  value={paketForm.featuresStr}
                  onChange={(e) => setPaketForm({ ...paketForm, featuresStr: e.target.value })}
                  placeholder="Bebas Akses Semua Tema&#10;Buku Tamu Digital&#10;Galeri Foto Prewedding"
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-rose-500 leading-relaxed font-sans"
                />
              </div>

              <div className="flex gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setShowEditModal(false)}
                  className="flex-1 py-2.5 rounded-xl border border-slate-800 bg-slate-950 text-slate-400 text-xs font-bold"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  disabled={savingPaket}
                  className="flex-1 py-2.5 rounded-xl bg-gradient-to-r from-rose-500 to-pink-600 text-white text-xs font-bold shadow-lg shadow-rose-500/20"
                >
                  {savingPaket ? "Menyimpan..." : "Simpan Paket"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
