"use client";

import { useEffect, useState } from "react";
import {
  Settings,
  Save,
  CheckCircle2,
  Lock,
  User,
  Mail,
  Phone,
  Loader2,
  AlertCircle,
  MessageSquare,
  Globe,
  ShieldCheck,
  Package,
} from "lucide-react";

export default function PengaturanPage() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    hp: "",
    slug: "",
    role: "user",
    passwordLama: "",
    passwordBaru: "",
    salam_pembuka: "",
    salam_wa_atas: "",
    salam_wa_bawah: "",
  });
  const [fetching, setFetching] = useState(true);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadPengaturan() {
      try {
        setFetching(true);
        const res = await fetch("/api/pengaturan", { credentials: "include" });
        const data = await res.json();
        if (data.success) {
          setFormData({
            username: data.profile?.username || "",
            email: data.profile?.email || "",
            hp: data.profile?.hp || "",
            slug: data.order?.domain || "",
            role: data.profile?.role || "user",
            passwordLama: "",
            passwordBaru: "",
            salam_pembuka: data.data?.salam_pembuka || "",
            salam_wa_atas: data.data?.salam_wa_atas || "",
            salam_wa_bawah: data.data?.salam_wa_bawah || "",
          });
        } else if (res.status === 401) {
          setError("Sesi login Anda telah berakhir. Silakan login kembali.");
        }
      } catch (err) {
        console.error("Load Pengaturan error:", err);
      } finally {
        setFetching(false);
      }
    }
    loadPengaturan();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);

    try {
      const res = await fetch("/api/pengaturan", {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();

      if (!res.ok) throw new Error(data.error || "Gagal menyimpan pengaturan");

      setSuccess("Pengaturan akun dan undangan berhasil diperbarui!");
      setFormData((prev) => ({
        ...prev,
        passwordLama: "",
        passwordBaru: "",
      }));
      setTimeout(() => setSuccess(null), 4000);
    } catch (err: any) {
      setError(err?.message || "Terjadi kesalahan saat menyimpan pengaturan");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between border-b border-slate-800 pb-5">
        <div>
          <h1 className="text-2xl font-bold text-white flex items-center gap-3">
            <Settings className="w-6 h-6 text-rose-500" /> Pengaturan Akun & Profil Undangan
          </h1>
          <p className="text-slate-400 text-sm mt-1">
            Informasi awal yang Anda daftarkan tercantum di sini. Anda dapat mengubah data profil, kata sandi, dan teks salam pembuka.
          </p>
        </div>
      </div>

      {success && (
        <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold flex items-center gap-2">
          <CheckCircle2 className="w-5 h-5" /> {success}
        </div>
      )}

      {error && (
        <div className="p-4 rounded-2xl bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs font-semibold flex items-center gap-2">
          <AlertCircle className="w-5 h-5" /> {error}
        </div>
      )}

      {fetching ? (
        <div className="p-12 text-center text-slate-500 text-xs flex items-center justify-center gap-2">
          <Loader2 className="w-4 h-4 animate-spin text-rose-400" /> Memuat pengaturan akun...
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="p-6 md:p-8 rounded-3xl bg-slate-900 border border-slate-800 space-y-6 max-w-3xl shadow-xl">
          {/* Card Info Pendaftaran Awal */}
          <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-3">
            <h3 className="text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" /> Status Akun & Subfolder Undangan
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="flex items-center gap-2 text-slate-400">
                <Globe className="w-3.5 h-3.5 text-rose-400 shrink-0" />
                <span>Link Undangan: </span>
                <strong className="text-white font-mono">/u/{formData.slug || "demo"}</strong>
              </div>
              <div className="flex items-center gap-2 text-slate-400">
                <Package className="w-3.5 h-3.5 text-rose-400 shrink-0" />
                <span>Status Role: </span>
                <span className="text-emerald-400 font-bold uppercase">{formData.role}</span>
              </div>
            </div>
          </div>

          {/* Bagian Akun */}
          <div className="space-y-4">
            <h2 className="text-sm font-bold text-rose-400 uppercase tracking-wider flex items-center gap-2">
              <User className="w-4 h-4" /> Data Profil Pendaftaran
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-300 mb-2">Username Terdaftar</label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-500 absolute left-4 top-3" />
                  <input
                    type="text"
                    required
                    value={formData.username}
                    onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-11 pr-4 py-2.5 text-sm text-white focus:outline-none focus:border-rose-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 mb-2">Email Terdaftar (OTP)</label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-slate-500 absolute left-4 top-3" />
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-11 pr-4 py-2.5 text-sm text-white focus:outline-none focus:border-rose-500"
                  />
                </div>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-300 mb-2">Nomor WhatsApp Terdaftar</label>
              <div className="relative">
                <Phone className="w-4 h-4 text-slate-500 absolute left-4 top-3" />
                <input
                  type="text"
                  value={formData.hp}
                  onChange={(e) => setFormData({ ...formData, hp: e.target.value })}
                  placeholder="08123456789"
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-11 pr-4 py-2.5 text-sm text-white focus:outline-none focus:border-rose-500 font-mono"
                />
              </div>
            </div>
          </div>

          {/* Bagian Salam Undangan */}
          <div className="pt-6 border-t border-slate-800 space-y-4">
            <h2 className="text-sm font-bold text-rose-400 uppercase tracking-wider flex items-center gap-2">
              <MessageSquare className="w-4 h-4" /> Kustomisasi Salam Pembuka Undangan
            </h2>

            <div>
              <label className="block text-xs font-bold text-slate-300 mb-2">Teks Salam Pembuka Web</label>
              <textarea
                rows={3}
                value={formData.salam_pembuka}
                onChange={(e) => setFormData({ ...formData, salam_pembuka: e.target.value })}
                placeholder="Assalamu'alaikum Warahmatullahi Wabarakatuh..."
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-rose-500 leading-relaxed"
              />
            </div>
          </div>

          {/* Bagian Keamanan Password */}
          <div className="pt-6 border-t border-slate-800 space-y-4">
            <h2 className="text-sm font-bold text-rose-400 uppercase tracking-wider flex items-center gap-2">
              <Lock className="w-4 h-4" /> Ganti Kata Sandi (Opsional)
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-300 mb-2">Password Saat Ini</label>
                <div className="relative">
                  <Lock className="w-4 h-4 text-slate-500 absolute left-4 top-3" />
                  <input
                    type="password"
                    placeholder="Ketik password lama"
                    value={formData.passwordLama}
                    onChange={(e) => setFormData({ ...formData, passwordLama: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-11 pr-4 py-2.5 text-sm text-white focus:outline-none focus:border-rose-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 mb-2">Password Baru</label>
                <div className="relative">
                  <Lock className="w-4 h-4 text-slate-500 absolute left-4 top-3" />
                  <input
                    type="password"
                    placeholder="Minimal 6 karakter"
                    value={formData.passwordBaru}
                    onChange={(e) => setFormData({ ...formData, passwordBaru: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-11 pr-4 py-2.5 text-sm text-white focus:outline-none focus:border-rose-500"
                  />
                </div>
              </div>
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-600 hover:to-pink-700 text-white font-bold text-sm shadow-lg shadow-rose-500/25 transition-all flex items-center gap-2"
          >
            <Save className="w-4 h-4" /> {loading ? "Menyimpan..." : "Simpan Pengaturan Akun"}
          </button>
        </form>
      )}
    </div>
  );
}
