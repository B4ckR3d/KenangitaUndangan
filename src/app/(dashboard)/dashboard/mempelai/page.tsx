"use client";

import { useEffect, useState, useRef } from "react";
import {
  Users2,
  Save,
  CheckCircle2,
  AlertTriangle,
  Loader2,
  Upload,
  User,
  Heart,
  Camera,
  Image as ImageIcon,
} from "lucide-react";

export default function MempelaiPage() {
  const [formData, setFormData] = useState({
    nama_pria: "",
    nama_panggilan_pria: "",
    nama_ayah_pria: "",
    nama_ibu_pria: "",
    nama_wanita: "",
    nama_panggilan_wanita: "",
    nama_ayah_wanita: "",
    nama_ibu_wanita: "",
  });

  const [photos, setPhotos] = useState({
    foto_pria: "/assets/users/c5e3c1770e6ccad8326111fb0d58267e/groom.png",
    foto_wanita: "/assets/users/c5e3c1770e6ccad8326111fb0d58267e/bride.png",
    foto_sampul: "/assets/users/c5e3c1770e6ccad8326111fb0d58267e/kita.png",
  });

  const [uploading, setUploading] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [fetching, setFetching] = useState(true);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const groomInputRef = useRef<HTMLInputElement>(null);
  const brideInputRef = useRef<HTMLInputElement>(null);
  const coverInputRef = useRef<HTMLInputElement>(null);

  const loadMempelai = async () => {
    try {
      setFetching(true);
      const res = await fetch("/api/mempelai", { credentials: "include" });
      const data = await res.json();
      if (data.success && data.mempelai) {
        setFormData({
          nama_pria: data.mempelai.nama_pria || "",
          nama_panggilan_pria: data.mempelai.nama_panggilan_pria || "",
          nama_ayah_pria: data.mempelai.nama_ayah_pria || "",
          nama_ibu_pria: data.mempelai.nama_ibu_pria || "",
          nama_wanita: data.mempelai.nama_wanita || "",
          nama_panggilan_wanita: data.mempelai.nama_panggilan_wanita || "",
          nama_ayah_wanita: data.mempelai.nama_ayah_wanita || "",
          nama_ibu_wanita: data.mempelai.nama_ibu_wanita || "",
        });
      }
      if (data.photos) {
        setPhotos({
          foto_pria: data.photos.foto_pria || photos.foto_pria,
          foto_wanita: data.photos.foto_wanita || photos.foto_wanita,
          foto_sampul: data.photos.foto_sampul || photos.foto_sampul,
        });
      }
    } catch (err) {
      console.error("Load Mempelai error:", err);
    } finally {
      setFetching(false);
    }
  };

  useEffect(() => {
    loadMempelai();
  }, []);

  const handlePhotoUpload = async (e: React.ChangeEvent<HTMLInputElement>, type: "mempelai_pria" | "mempelai_wanita" | "sampul") => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(type);
    setError(null);

    try {
      const uploadData = new FormData();
      uploadData.append("file", file);
      uploadData.append("folder", type);

      const res = await fetch("/api/upload", {
        method: "POST",
        credentials: "include",
        body: uploadData,
      });

      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.error || "Gagal mengunggah foto");
      }

      if (type === "mempelai_pria") {
        setPhotos((prev) => ({ ...prev, foto_pria: data.url }));
      } else if (type === "mempelai_wanita") {
        setPhotos((prev) => ({ ...prev, foto_wanita: data.url }));
      } else if (type === "sampul") {
        setPhotos((prev) => ({ ...prev, foto_sampul: data.url }));
      }

      setSuccess(true);
      setTimeout(() => setSuccess(false), 3000);
    } catch (err: any) {
      setError(err?.message || "Terjadi kesalahan saat mengunggah foto");
    } finally {
      setUploading(null);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);
    setError(null);

    try {
      const res = await fetch("/api/mempelai", {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          foto_pria: photos.foto_pria,
          foto_wanita: photos.foto_wanita,
          foto_sampul: photos.foto_sampul,
        }),
      });
      const data = await res.json();

      if (!res.ok) throw new Error(data.error || "Gagal menyimpan data mempelai");

      setSuccess(true);
      setTimeout(() => setSuccess(false), 3000);
    } catch (err: unknown) {
      if (err instanceof Error) setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const isParentsIncomplete =
    !formData.nama_ayah_pria ||
    !formData.nama_ibu_pria ||
    !formData.nama_ayah_wanita ||
    !formData.nama_ibu_wanita;

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-slate-800 pb-5">
        <div>
          <h1 className="text-2xl font-bold text-white flex items-center gap-3">
            <Users2 className="w-6 h-6 text-rose-500" /> Data & Foto Mempelai
          </h1>
          <p className="text-slate-400 text-sm mt-1">
            Kelola profil pengantin pria, pengantin wanita, dan foto sampul utama yang otomatis tampil di seluruh tema undangan Anda.
          </p>
        </div>
      </div>

      {isParentsIncomplete && (
        <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold flex items-start gap-3 shadow-md">
          <AlertTriangle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
          <div className="space-y-1">
            <p className="font-bold text-amber-200">Data Orang Tua Masih Perlu Dilengkapi</p>
            <p className="text-slate-300 text-[11px] font-normal leading-relaxed">
              Nama lengkap mempelai sudah terisi otomatis. Lengkapi nama Ayah &amp; Ibu kedua mempelai di bawah ini agar tercantum rapi di dalam teks akad dan resepsi.
            </p>
          </div>
        </div>
      )}

      {success && (
        <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold flex items-center gap-2">
          <CheckCircle2 className="w-5 h-5" /> Data dan foto mempelai berhasil disimpan!
        </div>
      )}

      {error && (
        <div className="p-4 rounded-2xl bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs font-semibold flex items-center gap-2">
          <AlertTriangle className="w-5 h-5" /> {error}
        </div>
      )}

      {fetching ? (
        <div className="p-16 text-center text-slate-500 text-xs flex items-center justify-center gap-2">
          <Loader2 className="w-4 h-4 animate-spin text-rose-400" /> Memuat data mempelai...
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* FOTO SAMPUL / COVER UTAMA */}
          <div className="p-6 rounded-3xl bg-slate-900 border border-slate-800 shadow-xl space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-base font-bold text-white flex items-center gap-2">
                  <ImageIcon className="w-5 h-5 text-rose-500" /> Foto Sampul &amp; Banner Utama (Cover Pasangan)
                </h2>
                <p className="text-xs text-slate-400 mt-0.5">
                  Foto ini ditampilkan pada halaman depan/amplop pembuka undangan dan banner hero tema.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-6 pt-2">
              <div className="w-full sm:w-48 h-36 rounded-2xl overflow-hidden bg-slate-950 border border-slate-800 relative group shrink-0">
                <img
                  src={photos.foto_sampul}
                  alt="Foto Sampul"
                  className="w-full h-full object-cover"
                  onError={(e: any) => {
                    e.currentTarget.src = "/assets/users/c5e3c1770e6ccad8326111fb0d58267e/kita.png";
                  }}
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Camera className="w-6 h-6 text-white" />
                </div>
              </div>

              <div className="space-y-2 flex-1">
                <input
                  type="file"
                  ref={coverInputRef}
                  onChange={(e) => handlePhotoUpload(e, "sampul")}
                  accept="image/png,image/jpeg,image/webp,image/jpg"
                  className="hidden"
                />
                <button
                  type="button"
                  onClick={() => coverInputRef.current?.click()}
                  disabled={uploading === "sampul"}
                  className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white text-xs font-bold border border-slate-700 transition-all flex items-center gap-2"
                >
                  {uploading === "sampul" ? (
                    <Loader2 className="w-4 h-4 animate-spin text-rose-400" />
                  ) : (
                    <Upload className="w-4 h-4 text-rose-400" />
                  )}
                  <span>{uploading === "sampul" ? "Mengunggah..." : "Upload Foto Sampul Baru (PC/HP)"}</span>
                </button>
                <p className="text-[11px] text-slate-500">
                  Format disarankan: JPG/PNG/WEBP (Rasio landscape atau portrait resolusi tinggi, maks 10MB).
                </p>
              </div>
            </div>
          </div>

          {/* GRID MEMPELAI PRIA & WANITA */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* MEMPELAI PRIA */}
            <div className="p-6 rounded-3xl bg-slate-900 border border-slate-800 shadow-xl space-y-6">
              <div className="flex items-center gap-3 border-b border-slate-800/80 pb-4">
                <div className="w-10 h-10 rounded-2xl bg-blue-500/15 text-blue-400 border border-blue-500/30 flex items-center justify-center shrink-0">
                  <User className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-base font-bold text-white">Profil Mempelai Pria (Groom)</h2>
                  <p className="text-xs text-slate-400">Informasi dan foto calon pengantin pria</p>
                </div>
              </div>

              {/* Upload Foto Pria */}
              <div className="flex items-center gap-5 p-4 rounded-2xl bg-slate-950/60 border border-slate-800/80">
                <div className="w-20 h-20 rounded-2xl overflow-hidden bg-slate-900 border border-slate-700 relative shrink-0">
                  <img
                    src={photos.foto_pria}
                    alt="Mempelai Pria"
                    className="w-full h-full object-cover"
                    onError={(e: any) => {
                      e.currentTarget.src = "/assets/users/c5e3c1770e6ccad8326111fb0d58267e/groom.png";
                    }}
                  />
                </div>
                <div className="space-y-1.5 flex-1">
                  <input
                    type="file"
                    ref={groomInputRef}
                    onChange={(e) => handlePhotoUpload(e, "mempelai_pria")}
                    accept="image/png,image/jpeg,image/webp,image/jpg"
                    className="hidden"
                  />
                  <button
                    type="button"
                    onClick={() => groomInputRef.current?.click()}
                    disabled={uploading === "mempelai_pria"}
                    className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white text-xs font-bold border border-slate-700 transition-all flex items-center gap-2"
                  >
                    {uploading === "mempelai_pria" ? (
                      <Loader2 className="w-3.5 h-3.5 animate-spin text-blue-400" />
                    ) : (
                      <Upload className="w-3.5 h-3.5 text-blue-400" />
                    )}
                    <span>{uploading === "mempelai_pria" ? "Mengunggah..." : "Ganti Foto Pria"}</span>
                  </button>
                  <p className="text-[10px] text-slate-500">Foto portrait/persegi pengantin pria.</p>
                </div>
              </div>

              {/* Form Input Pria */}
              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                    Nama Lengkap Pria <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.nama_pria}
                    onChange={(e) => setFormData({ ...formData, nama_pria: e.target.value })}
                    placeholder="contoh: Raden Mas Danang, S.T."
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                    Nama Panggilan Pria <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.nama_panggilan_pria}
                    onChange={(e) => setFormData({ ...formData, nama_panggilan_pria: e.target.value })}
                    placeholder="contoh: Danang"
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-blue-500"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                      Nama Ayah Pria
                    </label>
                    <input
                      type="text"
                      value={formData.nama_ayah_pria}
                      onChange={(e) => setFormData({ ...formData, nama_ayah_pria: e.target.value })}
                      placeholder="contoh: Bpk. H. Bambang"
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                      Nama Ibu Pria
                    </label>
                    <input
                      type="text"
                      value={formData.nama_ibu_pria}
                      onChange={(e) => setFormData({ ...formData, nama_ibu_pria: e.target.value })}
                      placeholder="contoh: Ibu Hj. Sri Rahayu"
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-blue-500"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* MEMPELAI WANITA */}
            <div className="p-6 rounded-3xl bg-slate-900 border border-slate-800 shadow-xl space-y-6">
              <div className="flex items-center gap-3 border-b border-slate-800/80 pb-4">
                <div className="w-10 h-10 rounded-2xl bg-pink-500/15 text-pink-400 border border-pink-500/30 flex items-center justify-center shrink-0">
                  <Heart className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-base font-bold text-white">Profil Mempelai Wanita (Bride)</h2>
                  <p className="text-xs text-slate-400">Informasi dan foto calon pengantin wanita</p>
                </div>
              </div>

              {/* Upload Foto Wanita */}
              <div className="flex items-center gap-5 p-4 rounded-2xl bg-slate-950/60 border border-slate-800/80">
                <div className="w-20 h-20 rounded-2xl overflow-hidden bg-slate-900 border border-slate-700 relative shrink-0">
                  <img
                    src={photos.foto_wanita}
                    alt="Mempelai Wanita"
                    className="w-full h-full object-cover"
                    onError={(e: any) => {
                      e.currentTarget.src = "/assets/users/c5e3c1770e6ccad8326111fb0d58267e/bride.png";
                    }}
                  />
                </div>
                <div className="space-y-1.5 flex-1">
                  <input
                    type="file"
                    ref={brideInputRef}
                    onChange={(e) => handlePhotoUpload(e, "mempelai_wanita")}
                    accept="image/png,image/jpeg,image/webp,image/jpg"
                    className="hidden"
                  />
                  <button
                    type="button"
                    onClick={() => brideInputRef.current?.click()}
                    disabled={uploading === "mempelai_wanita"}
                    className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white text-xs font-bold border border-slate-700 transition-all flex items-center gap-2"
                  >
                    {uploading === "mempelai_wanita" ? (
                      <Loader2 className="w-3.5 h-3.5 animate-spin text-pink-400" />
                    ) : (
                      <Upload className="w-3.5 h-3.5 text-pink-400" />
                    )}
                    <span>{uploading === "mempelai_wanita" ? "Mengunggah..." : "Ganti Foto Wanita"}</span>
                  </button>
                  <p className="text-[10px] text-slate-500">Foto portrait/persegi pengantin wanita.</p>
                </div>
              </div>

              {/* Form Input Wanita */}
              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                    Nama Lengkap Wanita <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.nama_wanita}
                    onChange={(e) => setFormData({ ...formData, nama_wanita: e.target.value })}
                    placeholder="contoh: Siti Nurhaliza, S.Pd."
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-pink-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                    Nama Panggilan Wanita <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.nama_panggilan_wanita}
                    onChange={(e) => setFormData({ ...formData, nama_panggilan_wanita: e.target.value })}
                    placeholder="contoh: Siti"
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-pink-500"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                      Nama Ayah Wanita
                    </label>
                    <input
                      type="text"
                      value={formData.nama_ayah_wanita}
                      onChange={(e) => setFormData({ ...formData, nama_ayah_wanita: e.target.value })}
                      placeholder="contoh: Bpk. H. Suryanto"
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-pink-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                      Nama Ibu Wanita
                    </label>
                    <input
                      type="text"
                      value={formData.nama_ibu_wanita}
                      onChange={(e) => setFormData({ ...formData, nama_ibu_wanita: e.target.value })}
                      placeholder="contoh: Ibu Hj. Nurma"
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-pink-500"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Action Button */}
          <div className="flex justify-end pt-2">
            <button
              type="submit"
              disabled={loading}
              className="px-8 py-3.5 rounded-2xl bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-600 hover:to-pink-700 text-white font-bold text-sm shadow-xl shadow-rose-500/25 transition-all hover:scale-[1.02] active:scale-[0.98] flex items-center gap-2"
            >
              {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
              <span>Simpan Perubahan Mempelai</span>
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
