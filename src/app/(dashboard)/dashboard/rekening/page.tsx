"use client";

import { useEffect, useState, useRef } from "react";
import {
  CreditCard,
  Plus,
  Save,
  CheckCircle2,
  Trash2,
  Loader2,
  AlertCircle,
  QrCode,
  Upload,
  Image as ImageIcon,
  X,
} from "lucide-react";

interface RekeningItem {
  id?: number;
  nama_bank: string;
  no_rekening: string;
  nama_pemilik: string;
  qrcode_bank?: string;
}

const BANK_OPTIONS = [
  // Bank Populer
  { group: "Bank Nasional", value: "BCA", label: "Bank BCA" },
  { group: "Bank Nasional", value: "Mandiri", label: "Bank Mandiri" },
  { group: "Bank Nasional", value: "BNI", label: "Bank BNI" },
  { group: "Bank Nasional", value: "BRI", label: "Bank BRI" },
  { group: "Bank Nasional", value: "BSI", label: "Bank Syariah Indonesia (BSI)" },
  { group: "Bank Nasional", value: "CIMB Niaga", label: "CIMB Niaga" },
  { group: "Bank Nasional", value: "Permata", label: "Permata Bank" },
  { group: "Bank Nasional", value: "Danamon", label: "Bank Danamon" },
  { group: "Bank Nasional", value: "BTN", label: "Bank BTN" },
  { group: "Bank Nasional", value: "Bank Mega", label: "Bank Mega" },
  { group: "Bank Nasional", value: "OCBC", label: "OCBC NISP" },

  // Bank Digital
  { group: "Bank Digital", value: "Bank Jago", label: "Bank Jago" },
  { group: "Bank Digital", value: "SeaBank", label: "SeaBank" },
  { group: "Bank Digital", value: "blu by BCA", label: "blu by BCA Digital" },
  { group: "Bank Digital", value: "Allo Bank", label: "Allo Bank" },
  { group: "Bank Digital", value: "Neo Bank", label: "Bank Neo Commerce (BNC)" },

  // E-Wallet & QRIS
  { group: "E-Wallet & QRIS", value: "QRIS", label: "QRIS (Semua Pembayaran)" },
  { group: "E-Wallet & QRIS", value: "DANA", label: "DANA" },
  { group: "E-Wallet & QRIS", value: "OVO", label: "OVO" },
  { group: "E-Wallet & QRIS", value: "GoPay", label: "GoPay" },
  { group: "E-Wallet & QRIS", value: "ShopeePay", label: "ShopeePay" },
  { group: "E-Wallet & QRIS", value: "LinkAja", label: "LinkAja" },
];

export default function RekeningPage() {
  const [rekeningList, setRekeningList] = useState<RekeningItem[]>([]);
  const [loading, setLoading] = useState(false);
  const [fetching, setFetching] = useState(true);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [uploadingIndex, setUploadingIndex] = useState<number | null>(null);

  const loadRekening = async () => {
    try {
      setFetching(true);
      const res = await fetch("/api/rekening", { credentials: "include" });
      const data = await res.json();
      if (data.success) {
        setRekeningList(data.rekeningList || []);
      } else if (res.status === 401) {
        setError("Sesi login Anda telah berakhir. Silakan login kembali.");
      }
    } catch (err) {
      console.error("Load Rekening error:", err);
    } finally {
      setFetching(false);
    }
  };

  useEffect(() => {
    loadRekening();
  }, []);

  const handleAddBank = () => {
    setRekeningList([
      ...rekeningList,
      {
        nama_bank: "BCA",
        no_rekening: "",
        nama_pemilik: "",
        qrcode_bank: "",
      },
    ]);
  };

  const handleRemoveBank = (index: number) => {
    setRekeningList(rekeningList.filter((_, i) => i !== index));
  };

  const handleQrisUpload = async (index: number, e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploadingIndex(index);
    setError(null);

    try {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("folder", "qris");

      const res = await fetch("/api/upload", {
        method: "POST",
        credentials: "include",
        body: formData,
      });
      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.error || "Gagal mengunggah barcode QRIS");
      }

      const newList = [...rekeningList];
      newList[index].qrcode_bank = data.url;
      setRekeningList(newList);
    } catch (err: any) {
      setError(err?.message || "Gagal mengunggah file QRIS");
    } finally {
      setUploadingIndex(null);
    }
  };

  const handleSave = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/rekening", {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ rekeningList }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Gagal menyimpan rekening");

      setSuccess(true);
      if (data.rekeningList) setRekeningList(data.rekeningList);
      setTimeout(() => setSuccess(false), 3500);
    } catch (err: any) {
      setError(err?.message || "Terjadi kesalahan saat menyimpan rekening");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between border-b border-slate-800 pb-5">
        <div>
          <h1 className="text-2xl font-bold text-white flex items-center gap-3">
            <CreditCard className="w-6 h-6 text-rose-500" /> Amplop Digital & QRIS
          </h1>
          <p className="text-slate-400 text-sm mt-1">
            Kelola nomor rekening bank, dompet digital (E-Wallet), dan upload barcode QRIS untuk menerima kado/amplop dari tamu.
          </p>
        </div>

        <button
          onClick={handleAddBank}
          className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-600 hover:to-pink-700 text-white font-bold text-xs flex items-center gap-2 shadow-lg shadow-rose-500/20 transition-all"
        >
          <Plus className="w-4 h-4" /> Tambah Rekening / QRIS
        </button>
      </div>

      {success && (
        <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold flex items-center gap-2">
          <CheckCircle2 className="w-5 h-5" /> Data rekening dan QRIS berhasil disimpan!
        </div>
      )}

      {error && (
        <div className="p-4 rounded-2xl bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs font-semibold flex items-center gap-2">
          <AlertCircle className="w-5 h-5" /> {error}
        </div>
      )}

      {fetching ? (
        <div className="p-12 text-center text-slate-500 text-xs flex items-center justify-center gap-2">
          <Loader2 className="w-4 h-4 animate-spin text-rose-400" /> Memuat data rekening...
        </div>
      ) : rekeningList.length === 0 ? (
        <div className="p-12 text-center text-slate-500 text-xs border border-dashed border-slate-800 rounded-3xl space-y-2">
          <p className="font-semibold text-slate-300">Belum ada rekening atau QRIS yang ditambahkan.</p>
          <p className="text-slate-500">Klik tombol <strong>&quot;Tambah Rekening / QRIS&quot;</strong> di atas untuk mempermudah tamu mengirim amplop digital.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {rekeningList.map((item, idx) => {
            const isQris = item.nama_bank === "QRIS";

            return (
              <div key={idx} className="p-6 rounded-3xl bg-slate-900 border border-slate-800 space-y-4 shadow-lg">
                <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                  <span className="text-xs font-bold text-rose-400 flex items-center gap-1.5">
                    {isQris ? <QrCode className="w-4 h-4 text-rose-400" /> : <CreditCard className="w-4 h-4 text-rose-400" />}
                    <span>Rekening / E-Wallet #{idx + 1}</span>
                  </span>
                  <button
                    onClick={() => handleRemoveBank(idx)}
                    className="text-slate-500 hover:text-rose-400 transition-colors p-1"
                    title="Hapus Rekening"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">
                    Pilihan Bank / Dompet Digital
                  </label>
                  <select
                    value={item.nama_bank}
                    onChange={(e) => {
                      const newList = [...rekeningList];
                      newList[idx].nama_bank = e.target.value;
                      setRekeningList(newList);
                    }}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-rose-500"
                  >
                    <optgroup label="Bank Nasional">
                      {BANK_OPTIONS.filter((b) => b.group === "Bank Nasional").map((b) => (
                        <option key={b.value} value={b.value}>
                          {b.label}
                        </option>
                      ))}
                    </optgroup>
                    <optgroup label="Bank Digital">
                      {BANK_OPTIONS.filter((b) => b.group === "Bank Digital").map((b) => (
                        <option key={b.value} value={b.value}>
                          {b.label}
                        </option>
                      ))}
                    </optgroup>
                    <optgroup label="E-Wallet & QRIS">
                      {BANK_OPTIONS.filter((b) => b.group === "E-Wallet & QRIS").map((b) => (
                        <option key={b.value} value={b.value}>
                          {b.label}
                        </option>
                      ))}
                    </optgroup>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">
                    {isQris ? "Keterangan / Merchant ID" : "Nomor Rekening / No. HP E-Wallet"}
                  </label>
                  <input
                    type="text"
                    value={item.no_rekening}
                    onChange={(e) => {
                      const newList = [...rekeningList];
                      newList[idx].no_rekening = e.target.value;
                      setRekeningList(newList);
                    }}
                    placeholder={isQris ? "Contoh: NMID / Nama Merchant QRIS" : "Contoh: 1234567890"}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2 text-sm text-white focus:outline-none focus:border-rose-500 font-mono"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">Atas Nama (Pemilik Rekening / Merchant)</label>
                  <input
                    type="text"
                    value={item.nama_pemilik}
                    onChange={(e) => {
                      const newList = [...rekeningList];
                      newList[idx].nama_pemilik = e.target.value;
                      setRekeningList(newList);
                    }}
                    placeholder="Contoh: Raden Wijaya / Toko Pengantin"
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2 text-sm text-white focus:outline-none focus:border-rose-500"
                  />
                </div>

                {/* Upload Gambar QRIS dari File Lokal PC / HP */}
                <div className="pt-2 border-t border-slate-800/80">
                  <label className="block text-xs font-bold text-slate-300 mb-2 flex items-center justify-between">
                    <span>Gambar Barcode QRIS (Opsional)</span>
                    {item.qrcode_bank && (
                      <span className="text-[10px] text-emerald-400 font-semibold">Tersimpan</span>
                    )}
                  </label>

                  {item.qrcode_bank ? (
                    <div className="relative p-2 rounded-2xl bg-slate-950 border border-slate-800 flex items-center justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <img
                          src={item.qrcode_bank}
                          alt="QRIS"
                          className="w-12 h-12 object-contain rounded-lg border border-slate-800 bg-white p-1"
                        />
                        <div className="text-[11px] text-slate-400">
                          <p className="text-white font-medium">Barcode QRIS Terupload</p>
                          <p className="text-[10px] text-slate-500 truncate max-w-[160px]">{item.qrcode_bank}</p>
                        </div>
                      </div>

                      <button
                        type="button"
                        onClick={() => {
                          const newList = [...rekeningList];
                          newList[idx].qrcode_bank = "";
                          setRekeningList(newList);
                        }}
                        className="p-1.5 rounded-lg text-slate-400 hover:text-rose-400 transition-colors"
                        title="Hapus Gambar QRIS"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  ) : (
                    <label className="flex items-center justify-center gap-2 p-3 rounded-2xl border border-dashed border-slate-700 hover:border-rose-500/60 bg-slate-950/60 hover:bg-slate-950 cursor-pointer transition-all text-xs text-slate-400 hover:text-white">
                      <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => handleQrisUpload(idx, e)}
                        className="hidden"
                      />
                      {uploadingIndex === idx ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin text-rose-400" />
                          <span>Mengunggah QRIS...</span>
                        </>
                      ) : (
                        <>
                          <Upload className="w-4 h-4 text-rose-400" />
                          <span>Upload Gambar QRIS dari PC / HP</span>
                        </>
                      )}
                    </label>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}

      {rekeningList.length > 0 && (
        <button
          onClick={handleSave}
          disabled={loading}
          className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-600 hover:to-pink-700 text-white font-bold text-sm shadow-lg shadow-rose-500/25 transition-all flex items-center gap-2"
        >
          <Save className="w-4 h-4" /> {loading ? "Menyimpan..." : "Simpan Pengaturan Rekening & QRIS"}
        </button>
      )}
    </div>
  );
}
