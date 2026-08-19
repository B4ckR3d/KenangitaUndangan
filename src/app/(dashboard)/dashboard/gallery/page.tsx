"use client";

import { useEffect, useState, useRef } from "react";
import {
  Image as ImageIcon,
  Upload,
  Trash2,
  Sparkles,
  Loader2,
  AlertCircle,
  CheckCircle2,
  Plus,
  X,
  FileImage,
  UploadCloud,
  Eye,
  Video,
  User,
  Heart,
  Layers,
} from "lucide-react";
import { compressImageFile } from "@/lib/imageCompressor";

interface AlbumItem {
  id?: number;
  album: string;
}

export default function GalleryPage() {
  const [activeTab, setActiveTab] = useState<"album" | "mempelai" | "video">("album");
  const [photos, setPhotos] = useState<AlbumItem[]>([]);
  const [mempelaiPhotos, setMempelaiPhotos] = useState({
    foto_pria: "/assets/users/c5e3c1770e6ccad8326111fb0d58267e/groom.png",
    foto_wanita: "/assets/users/c5e3c1770e6ccad8326111fb0d58267e/bride.png",
    foto_sampul: "/assets/users/c5e3c1770e6ccad8326111fb0d58267e/kita.png",
    video: "",
  });

  const [loading, setLoading] = useState(false);
  const [uploadingType, setUploadingType] = useState<string | null>(null);
  const [fetching, setFetching] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [lightboxUrl, setLightboxUrl] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const fileInputRef = useRef<HTMLInputElement>(null);
  const groomInputRef = useRef<HTMLInputElement>(null);
  const brideInputRef = useRef<HTMLInputElement>(null);
  const coverInputRef = useRef<HTMLInputElement>(null);

  const loadData = async () => {
    try {
      setFetching(true);
      const [galleryRes, mempelaiRes] = await Promise.all([
        fetch("/api/gallery", { credentials: "include" }),
        fetch("/api/mempelai", { credentials: "include" }),
      ]);

      const galleryData = await galleryRes.json();
      const mempelaiData = await mempelaiRes.json();

      if (galleryData.success) {
        setPhotos(galleryData.albums || []);
      }
      if (mempelaiData.photos) {
        setMempelaiPhotos({
          foto_pria: mempelaiData.photos.foto_pria || mempelaiPhotos.foto_pria,
          foto_wanita: mempelaiData.photos.foto_wanita || mempelaiPhotos.foto_wanita,
          foto_sampul: mempelaiData.photos.foto_sampul || mempelaiPhotos.foto_sampul,
          video: mempelaiData.photos.video || "",
        });
      }
    } catch (err) {
      console.error("Load Gallery error:", err);
    } finally {
      setFetching(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  // Handle Upload Album Photo
  const handleUploadPhoto = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedFile) {
      setError("Silakan pilih file foto dari PC/HP terlebih dahulu");
      return;
    }

    setUploadingType("album");
    setError(null);

    try {
      const optimizedFile = await compressImageFile(selectedFile);
      const formData = new FormData();
      formData.append("file", optimizedFile);
      formData.append("folder", "gallery");

      const uploadRes = await fetch("/api/upload", {
        method: "POST",
        credentials: "include",
        body: formData,
      });
      const uploadData = await uploadRes.json();

      if (!uploadRes.ok || !uploadData.success) {
        throw new Error(uploadData.error || "Gagal mengunggah foto");
      }

      setSuccess("Foto berhasil diunggah dan ditambahkan ke galeri album!");
      setSelectedFile(null);
      setPreviewUrl(null);
      setShowModal(false);
      loadData();
      setTimeout(() => setSuccess(null), 3500);
    } catch (err: any) {
      setError(err?.message || "Terjadi kesalahan saat mengunggah foto");
    } finally {
      setUploadingType(null);
    }
  };

  // Handle Direct Upload for Groom, Bride, Cover with Instant Optimistic Preview
  const handleSingleUpload = async (e: React.ChangeEvent<HTMLInputElement>, type: "mempelai_pria" | "mempelai_wanita" | "sampul") => {
    const file = e.target.files?.[0];
    if (!file) return;

    // 1. Instant Optimistic Preview (0ms visual feedback)
    const localBlobUrl = URL.createObjectURL(file);
    if (type === "mempelai_pria") {
      setMempelaiPhotos((prev) => ({ ...prev, foto_pria: localBlobUrl }));
    } else if (type === "mempelai_wanita") {
      setMempelaiPhotos((prev) => ({ ...prev, foto_wanita: localBlobUrl }));
    } else if (type === "sampul") {
      setMempelaiPhotos((prev) => ({ ...prev, foto_sampul: localBlobUrl }));
    }

    setUploadingType(type);
    setError(null);

    try {
      const optimizedFile = await compressImageFile(file);
      const uploadData = new FormData();
      uploadData.append("file", optimizedFile);
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

      const cacheBustUrl = `${data.url}?v=${Date.now()}`;
      if (type === "mempelai_pria") {
        setMempelaiPhotos((prev) => ({ ...prev, foto_pria: cacheBustUrl }));
      } else if (type === "mempelai_wanita") {
        setMempelaiPhotos((prev) => ({ ...prev, foto_wanita: cacheBustUrl }));
      } else if (type === "sampul") {
        setMempelaiPhotos((prev) => ({ ...prev, foto_sampul: cacheBustUrl }));
      }

      setSuccess("Foto berhasil diperbarui dan diterapkan ke seluruh tema!");
      setTimeout(() => setSuccess(null), 3500);
    } catch (err: any) {
      setError(err?.message || "Terjadi kesalahan saat mengunggah foto");
      // Reload on failure to restore true state
      loadData();
    } finally {
      setUploadingType(null);
    }
  };

  // Delete Album Photo
  const handleDeletePhoto = async (id?: number) => {
    if (!id) return;
    if (!confirm("Apakah Anda yakin ingin menghapus foto ini dari galeri?")) return;

    try {
      const res = await fetch(`/api/gallery?id=${id}`, {
        method: "DELETE",
        credentials: "include",
      });
      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.error || "Gagal menghapus foto");
      }

      setPhotos(photos.filter((p) => p.id !== id));
      setSuccess("Foto galeri berhasil dihapus");
      setTimeout(() => setSuccess(null), 3000);
    } catch (err: any) {
      setError(err?.message || "Gagal menghapus foto");
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-slate-800 pb-5">
        <div>
          <h1 className="text-2xl font-bold text-white flex items-center gap-3">
            <ImageIcon className="w-6 h-6 text-rose-500" /> Galeri Foto &amp; Momen Bahagia
          </h1>
          <p className="text-slate-400 text-sm mt-1">
            Kelola foto album prewedding, foto mempelai, dan cover utama yang otomatis disinkronkan ke seluruh 57+ tema undangan.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex items-center gap-1 bg-slate-900 border border-slate-800 p-1 rounded-2xl shrink-0">
          <button
            onClick={() => setActiveTab("album")}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
              activeTab === "album"
                ? "bg-rose-500 text-white shadow-md shadow-rose-500/20"
                : "text-slate-400 hover:text-white"
            }`}
          >
            <Layers className="w-3.5 h-3.5" /> Album Prewedding ({photos.length})
          </button>
          <button
            onClick={() => setActiveTab("mempelai")}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
              activeTab === "mempelai"
                ? "bg-rose-500 text-white shadow-md shadow-rose-500/20"
                : "text-slate-400 hover:text-white"
            }`}
          >
            <User className="w-3.5 h-3.5" /> Foto Utama &amp; Pasangan
          </button>
        </div>
      </div>

      {success && (
        <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold flex items-center gap-2 animate-in fade-in">
          <CheckCircle2 className="w-5 h-5" /> {success}
        </div>
      )}

      {error && (
        <div className="p-4 rounded-2xl bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs font-semibold flex items-center gap-2">
          <AlertCircle className="w-5 h-5" /> {error}
        </div>
      )}

      {fetching ? (
        <div className="p-16 text-center text-slate-500 text-xs flex items-center justify-center gap-2">
          <Loader2 className="w-4 h-4 animate-spin text-rose-400" /> Memuat data galeri...
        </div>
      ) : activeTab === "album" ? (
        /* TAB 1: ALBUM PREWEDDING */
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-6 rounded-3xl bg-slate-900 border border-slate-800 shadow-xl">
            <div className="space-y-1">
              <h2 className="text-base font-bold text-white flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-rose-400" /> Galeri Foto Prewedding ({photos.length} Foto Tersimpan)
              </h2>
              <p className="text-xs text-slate-400">
                Foto-foto ini akan tampil rapi dalam tata letak galeri lightbox di halaman undangan para tamu.
              </p>
            </div>
            <button
              onClick={() => {
                setSelectedFile(null);
                setPreviewUrl(null);
                setShowModal(true);
              }}
              className="px-5 py-3 rounded-2xl bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-600 hover:to-pink-700 text-white text-xs font-bold shadow-lg shadow-rose-500/25 flex items-center justify-center gap-2 transition-all hover:scale-[1.02] active:scale-[0.98] shrink-0"
            >
              <Plus className="w-4 h-4" /> Upload Foto Baru dari PC/HP
            </button>
          </div>

          {/* Grid Photos */}
          {photos.length === 0 ? (
            <div className="p-16 text-center rounded-3xl border-2 border-dashed border-slate-800 bg-slate-900/40 space-y-4">
              <div className="w-16 h-16 rounded-full bg-rose-500/10 text-rose-400 flex items-center justify-center mx-auto">
                <ImageIcon className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-base font-bold text-white">Belum Ada Foto Prewedding</h3>
                <p className="text-xs text-slate-400 mt-1 max-w-md mx-auto">
                  Unggah momen foto prewedding atau foto kenangan terbaik Anda bersama pasangan untuk mempercantik tampilan undangan.
                </p>
              </div>
              <button
                onClick={() => setShowModal(true)}
                className="px-6 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs border border-slate-700 transition-all inline-flex items-center gap-2"
              >
                <Plus className="w-4 h-4 text-rose-400" /> Mulai Unggah Foto
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {photos.map((item, index) => {
                const imgSource = item.album.startsWith("/") || item.album.startsWith("http")
                  ? item.album
                  : `/assets/users/c5e3c1770e6ccad8326111fb0d58267e/${item.album}.png`;

                return (
                  <div
                    key={item.id || index}
                    className="group relative rounded-2xl overflow-hidden bg-slate-900 border border-slate-800 aspect-square shadow-lg hover:border-slate-700 transition-all"
                  >
                    <img
                      src={imgSource}
                      alt={`Foto Album ${index + 1}`}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      onError={(e: any) => {
                        e.currentTarget.src = "/assets/users/c5e3c1770e6ccad8326111fb0d58267e/kita.png";
                      }}
                    />

                    {/* Overlay Action Buttons */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-between p-3">
                      <button
                        onClick={() => setLightboxUrl(imgSource)}
                        className="p-2 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-white text-xs backdrop-blur-sm transition-colors"
                        title="Lihat Pratinjau Full"
                      >
                        <Eye className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleDeletePhoto(item.id)}
                        className="p-2 rounded-xl bg-rose-500/80 hover:bg-rose-600 text-white text-xs backdrop-blur-sm transition-colors"
                        title="Hapus Foto"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>

                    <div className="absolute top-2 left-2 px-2 py-0.5 rounded-full bg-black/60 backdrop-blur-sm text-[10px] font-bold text-white">
                      #{index + 1}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      ) : (
        /* TAB 2: FOTO UTAMA & MEMPELAI */
        <div className="space-y-6">
          {/* FOTO SAMPUL / COVER PASANGAN */}
          <div className="p-6 rounded-3xl bg-slate-900 border border-slate-800 shadow-xl space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-base font-bold text-white flex items-center gap-2">
                  <Heart className="w-5 h-5 text-rose-500" /> Foto Sampul &amp; Cover Pasangan (Hero / Kita)
                </h2>
                <p className="text-xs text-slate-400 mt-0.5">
                  Foto utama berdua yang tampil di cover depan pembuka amplop dan banner tema undangan.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-6 pt-2">
              <div className="w-full sm:w-56 h-40 rounded-2xl overflow-hidden bg-slate-950 border border-slate-800 relative shrink-0">
                <img
                  src={mempelaiPhotos.foto_sampul}
                  alt="Foto Sampul"
                  className="w-full h-full object-cover transition-opacity duration-300"
                  onError={(e: any) => {
                    e.currentTarget.src = "/assets/users/c5e3c1770e6ccad8326111fb0d58267e/kita.png";
                  }}
                />

                {/* Uploading Overlay */}
                {uploadingType === "sampul" && (
                  <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-xs flex flex-col items-center justify-center gap-2 z-20 animate-in fade-in">
                    <Loader2 className="w-7 h-7 animate-spin text-rose-500" />
                    <span className="text-[11px] font-bold text-white tracking-tight">Menyimpan Foto...</span>
                  </div>
                )}
              </div>
              <div className="space-y-2 flex-1">
                <input
                  type="file"
                  ref={coverInputRef}
                  onChange={(e) => handleSingleUpload(e, "sampul")}
                  accept="image/png,image/jpeg,image/webp,image/jpg"
                  className="hidden"
                />
                <button
                  type="button"
                  onClick={() => coverInputRef.current?.click()}
                  disabled={uploadingType === "sampul"}
                  className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white text-xs font-bold border border-slate-700 transition-all flex items-center gap-2 disabled:opacity-60"
                >
                  {uploadingType === "sampul" ? (
                    <Loader2 className="w-4 h-4 animate-spin text-rose-400" />
                  ) : (
                    <Upload className="w-4 h-4 text-rose-400" />
                  )}
                  <span>{uploadingType === "sampul" ? "Mengunggah Sampul..." : "Upload Foto Sampul Baru (PC/HP)"}</span>
                </button>
                <p className="text-[11px] text-slate-500">
                  Gunakan foto resolusi tinggi bersama pasangan (Landscape / Portrait).
                </p>
              </div>
            </div>
          </div>

          {/* GRID MEMPELAI PRIA & WANITA */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Foto Pria */}
            <div className="p-6 rounded-3xl bg-slate-900 border border-slate-800 shadow-xl space-y-4">
              <div className="flex items-center gap-3 border-b border-slate-800/80 pb-3">
                <User className="w-5 h-5 text-blue-400" />
                <h3 className="text-sm font-bold text-white">Foto Mempelai Pria (Groom)</h3>
              </div>
              <div className="flex items-center gap-5">
                <div className="w-24 h-24 rounded-2xl overflow-hidden bg-slate-950 border border-slate-800 relative shrink-0">
                  <img
                    src={mempelaiPhotos.foto_pria}
                    alt="Mempelai Pria"
                    className="w-full h-full object-cover transition-opacity duration-300"
                    onError={(e: any) => {
                      e.currentTarget.src = "/assets/users/c5e3c1770e6ccad8326111fb0d58267e/groom.png";
                    }}
                  />

                  {/* Uploading Overlay */}
                  {uploadingType === "mempelai_pria" && (
                    <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-xs flex flex-col items-center justify-center gap-1.5 z-20 animate-in fade-in">
                      <Loader2 className="w-6 h-6 animate-spin text-blue-400" />
                      <span className="text-[9px] font-bold text-white">Menyimpan...</span>
                    </div>
                  )}
                </div>
                <div className="space-y-2 flex-1">
                  <input
                    type="file"
                    ref={groomInputRef}
                    onChange={(e) => handleSingleUpload(e, "mempelai_pria")}
                    accept="image/png,image/jpeg,image/webp,image/jpg"
                    className="hidden"
                  />
                  <button
                    type="button"
                    onClick={() => groomInputRef.current?.click()}
                    disabled={uploadingType === "mempelai_pria"}
                    className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white text-xs font-bold border border-slate-700 transition-all flex items-center gap-2 disabled:opacity-60"
                  >
                    {uploadingType === "mempelai_pria" ? (
                      <Loader2 className="w-3.5 h-3.5 animate-spin text-blue-400" />
                    ) : (
                      <Upload className="w-3.5 h-3.5 text-blue-400" />
                    )}
                    <span>{uploadingType === "mempelai_pria" ? "Mengunggah..." : "Ganti Foto Pria"}</span>
                  </button>
                  <p className="text-[10px] text-slate-500">Otomatis disinkronkan ke seluruh tema.</p>
                </div>
              </div>
            </div>

            {/* Foto Wanita */}
            <div className="p-6 rounded-3xl bg-slate-900 border border-slate-800 shadow-xl space-y-4">
              <div className="flex items-center gap-3 border-b border-slate-800/80 pb-3">
                <Heart className="w-5 h-5 text-pink-400" />
                <h3 className="text-sm font-bold text-white">Foto Mempelai Wanita (Bride)</h3>
              </div>
              <div className="flex items-center gap-5">
                <div className="w-24 h-24 rounded-2xl overflow-hidden bg-slate-950 border border-slate-800 relative shrink-0">
                  <img
                    src={mempelaiPhotos.foto_wanita}
                    alt="Mempelai Wanita"
                    className="w-full h-full object-cover transition-opacity duration-300"
                    onError={(e: any) => {
                      e.currentTarget.src = "/assets/users/c5e3c1770e6ccad8326111fb0d58267e/bride.png";
                    }}
                  />

                  {/* Uploading Overlay */}
                  {uploadingType === "mempelai_wanita" && (
                    <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-xs flex flex-col items-center justify-center gap-1.5 z-20 animate-in fade-in">
                      <Loader2 className="w-6 h-6 animate-spin text-pink-400" />
                      <span className="text-[9px] font-bold text-white">Menyimpan...</span>
                    </div>
                  )}
                </div>
                <div className="space-y-2 flex-1">
                  <input
                    type="file"
                    ref={brideInputRef}
                    onChange={(e) => handleSingleUpload(e, "mempelai_wanita")}
                    accept="image/png,image/jpeg,image/webp,image/jpg"
                    className="hidden"
                  />
                  <button
                    type="button"
                    onClick={() => brideInputRef.current?.click()}
                    disabled={uploadingType === "mempelai_wanita"}
                    className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white text-xs font-bold border border-slate-700 transition-all flex items-center gap-2 disabled:opacity-60"
                  >
                    {uploadingType === "mempelai_wanita" ? (
                      <Loader2 className="w-3.5 h-3.5 animate-spin text-pink-400" />
                    ) : (
                      <Upload className="w-3.5 h-3.5 text-pink-400" />
                    )}
                    <span>{uploadingType === "mempelai_wanita" ? "Mengunggah..." : "Ganti Foto Wanita"}</span>
                  </button>
                  <p className="text-[10px] text-slate-500">Otomatis disinkronkan ke seluruh tema.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* MODAL UPLOAD FOTO ALBUM */}
      {showModal && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-800 w-full max-w-md rounded-3xl p-6 sm:p-8 space-y-5 relative shadow-2xl">
            <button
              onClick={() => {
                setShowModal(false);
                setSelectedFile(null);
                setPreviewUrl(null);
              }}
              className="absolute top-6 right-6 text-slate-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            <div>
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <UploadCloud className="w-5 h-5 text-rose-500" /> Unggah Foto ke Galeri
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Pilih foto kenangan atau prewedding dari penyimpanan PC/Laptop/HP Anda.
              </p>
            </div>

            <form onSubmit={handleUploadPhoto} className="space-y-5">
              {/* Dropzone Container */}
              <div
                onClick={() => fileInputRef.current?.click()}
                className="border-2 border-dashed border-slate-700 hover:border-rose-500/60 rounded-2xl p-6 text-center cursor-pointer transition-all bg-slate-950/50 hover:bg-slate-950 flex flex-col items-center justify-center min-h-[160px]"
              >
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (file) {
                      setSelectedFile(file);
                      setPreviewUrl(URL.createObjectURL(file));
                    }
                  }}
                  accept="image/png,image/jpeg,image/webp,image/jpg"
                  className="hidden"
                />

                {previewUrl ? (
                  <div className="relative w-full max-h-48 overflow-hidden rounded-xl">
                    <img src={previewUrl} alt="Preview Upload" className="w-full h-auto object-contain mx-auto" />
                  </div>
                ) : (
                  <>
                    <Upload className="w-8 h-8 text-slate-400 mb-2" />
                    <p className="text-xs font-bold text-slate-200">Klik untuk memilih file foto</p>
                    <p className="text-[11px] text-slate-500 mt-1">Mendukung format JPG, PNG, WEBP (Maksimal 12MB)</p>
                  </>
                )}
              </div>

              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => {
                    setShowModal(false);
                    setSelectedFile(null);
                    setPreviewUrl(null);
                  }}
                  className="flex-1 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold text-xs transition-colors"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  disabled={uploading || !selectedFile}
                  className="flex-1 py-3 rounded-xl bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-600 hover:to-pink-700 text-white font-bold text-xs shadow-lg shadow-rose-500/25 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {uploading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Upload className="w-4 h-4" />}
                  <span>{uploading ? "Mengunggah..." : "Simpan Foto"}</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* LIGHTBOX MODAL */}
      {lightboxUrl && (
        <div
          onClick={() => setLightboxUrl(null)}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 cursor-zoom-out"
        >
          <div className="relative max-w-4xl max-h-[90vh] rounded-2xl overflow-hidden shadow-2xl">
            <button
              onClick={() => setLightboxUrl(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-black/60 text-white hover:bg-black/90 transition-colors z-10"
            >
              <X className="w-5 h-5" />
            </button>
            <img src={lightboxUrl} alt="Preview Foto" className="w-full h-auto max-h-[85vh] object-contain rounded-xl" />
          </div>
        </div>
      )}
    </div>
  );
}
