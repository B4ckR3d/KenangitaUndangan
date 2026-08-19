"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  Palette,
  CheckCircle2,
  Sparkles,
  ExternalLink,
  Plus,
  Edit,
  Trash2,
  Search,
  Filter,
  X,
  Save,
  Eye,
  Check,
  Loader2,
} from "lucide-react";

interface CategoryItem {
  id: number;
  name: string;
}

interface ThemeItem {
  id: number;
  nama_theme: string;
  kode_theme: string;
  category_id?: number | null;
  status: number;
  category?: CategoryItem | null;
}

export default function TampilanPage() {
  const [currentUser, setCurrentUser] = useState<{ role?: string } | null>(null);
  const [themes, setThemes] = useState<ThemeItem[]>([]);
  const [categories, setCategories] = useState<CategoryItem[]>([]);
  const [activeTheme, setActiveTheme] = useState<string>("hwflower");
  const [userSlug, setUserSlug] = useState<string>("demo");
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  // Modal Add / Edit State (Admin Only)
  const [modalOpen, setModalOpen] = useState(false);
  const [editingTheme, setEditingTheme] = useState<ThemeItem | null>(null);
  const [formData, setFormData] = useState({
    nama_theme: "",
    kode_theme: "",
    category_id: 1,
    status: 1,
  });
  const [formLoading, setFormLoading] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);

  // Interactive Preview Modal State
  const [previewModalTheme, setPreviewModalTheme] = useState<string | null>(null);

  const fetchThemes = async () => {
    try {
      setLoading(true);
      const [authRes, themesRes] = await Promise.all([
        fetch("/api/auth/me", { credentials: "include" }),
        fetch("/api/themes", { credentials: "include" }),
      ]);

      const authData = await authRes.json();
      if (authData.authenticated && authData.user) {
        setCurrentUser(authData.user);
        setUserSlug(authData.user.slug || "demo");
        if (authData.user.theme) setActiveTheme(authData.user.theme);
      }

      const data = await themesRes.json();
      if (data.success) {
        setThemes(data.themes || []);
        setCategories(data.categories || []);
        if (data.activeTheme) setActiveTheme(data.activeTheme);
      }
    } catch (err) {
      console.error("Load themes error:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchThemes();
  }, []);

  const [subModalOpen, setSubModalOpen] = useState(false);
  const [targetThemeName, setTargetThemeName] = useState<string>("");

  const handleApplyTheme = async (themeName: string) => {
    try {
      const res = await fetch("/api/themes", {
        method: "PUT",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          themeCodeToApply: themeName,
        }),
      });
      const data = await res.json();
      if ((res.status === 402 || data.requiresSubscription) && currentUser?.role !== "admin") {
        setTargetThemeName(themeName);
        setSubModalOpen(true);
        return;
      }
      if (data.success) {
        setActiveTheme(themeName);
        setSuccessMessage(`Tema "${themeName}" berhasil diterapkan dan terkoneksi langsung ke undangan Anda (/u/${userSlug})!`);
        setTimeout(() => setSuccessMessage(null), 5000);
      }
    } catch (err) {
      console.error("Apply theme error:", err);
    }
  };

  const openAddModal = () => {
    setEditingTheme(null);
    setFormData({
      nama_theme: "",
      kode_theme: `T${Date.now().toString().slice(-4)}`,
      category_id: categories[0]?.id || 1,
      status: 1,
    });
    setFormError(null);
    setModalOpen(true);
  };

  const openEditModal = (theme: ThemeItem) => {
    setEditingTheme(theme);
    setFormData({
      nama_theme: theme.nama_theme,
      kode_theme: theme.kode_theme,
      category_id: theme.category_id || 1,
      status: theme.status,
    });
    setFormError(null);
    setModalOpen(true);
  };

  const handleSaveTheme = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormLoading(true);
    setFormError(null);

    try {
      if (editingTheme) {
        const res = await fetch("/api/themes", {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            id: editingTheme.id,
            nama_theme: formData.nama_theme,
            kode_theme: formData.kode_theme,
            category_id: formData.category_id,
            status: formData.status,
          }),
        });
        const data = await res.json();
        if (!res.ok) throw new Error(data.error || "Gagal memperbarui tema");
        setSuccessMessage(`Tema "${formData.nama_theme}" berhasil diperbarui!`);
      } else {
        const res = await fetch("/api/themes", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });
        const data = await res.json();
        if (!res.ok) throw new Error(data.error || "Gagal menambahkan tema");
        setSuccessMessage(`Tema baru "${formData.nama_theme}" berhasil ditambahkan!`);
      }

      fetchThemes();
      setModalOpen(false);
      setTimeout(() => setSuccessMessage(null), 4000);
    } catch (err: any) {
      setFormError(err.message || "Terjadi kesalahan saat menyimpan tema");
    } finally {
      setFormLoading(false);
    }
  };

  const handleDeleteTheme = async (id: number, name: string) => {
    if (!confirm(`Hapus tema "${name}" dari database?`)) return;

    try {
      const res = await fetch(`/api/themes?id=${id}`, {
        method: "DELETE",
      });
      const data = await res.json();
      if (!res.ok) {
        alert(data.error || "Gagal menghapus tema");
        return;
      }
      setSuccessMessage(`Tema "${name}" berhasil dihapus.`);
      fetchThemes();
      setTimeout(() => setSuccessMessage(null), 4000);
    } catch (err) {
      console.error("Delete theme error:", err);
    }
  };

  const filteredThemes = themes.filter((t) => {
    const matchesSearch =
      t.nama_theme?.toLowerCase().includes(search.toLowerCase()) ||
      t.kode_theme?.toLowerCase().includes(search.toLowerCase());

    const matchesCat =
      selectedCategory === "all" ||
      String(t.category_id) === String(selectedCategory);

    return matchesSearch && matchesCat;
  });

  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-slate-800 pb-6">
        <div>
          <div className="flex items-center gap-3 mb-1">
            <div className="p-2.5 rounded-2xl bg-gradient-to-tr from-rose-500 to-pink-500 text-white shadow-lg shadow-rose-500/20">
              <Palette className="w-6 h-6" />
            </div>
            <h1 className="text-2xl font-extrabold text-white tracking-tight">
              Katalog & Pilihan Tema Undangan
            </h1>
          </div>
          <p className="text-slate-400 text-sm">
            {currentUser?.role === "admin"
              ? "Pratinjau tampilan tema, ganti tema aktif undangan, atau modifikasi dan tambahkan tema baru."
              : "Pratinjau tampilan tema dan pilih tema terbaik untuk website undangan pernikahan Anda."}
          </p>
        </div>

        {currentUser?.role === "admin" && (
          <button
            onClick={openAddModal}
            className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-600 hover:to-pink-700 text-white text-sm font-bold shadow-lg shadow-rose-500/25 transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            <Plus className="w-4 h-4" /> Tambah Tema Baru
          </button>
        )}
      </div>

      {/* Success Notification Alert */}
      {successMessage && (
        <div className="p-4 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-xs font-semibold flex items-center gap-2.5 shadow-lg animate-in fade-in duration-300">
          <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
          <span>{successMessage}</span>
        </div>
      )}

      {/* Filter & Search Bar */}
      <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4 shadow-md">
        <div className="relative w-full md:w-80">
          <Search className="w-4 h-4 text-slate-500 absolute left-3.5 top-3" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Cari nama atau kode tema..."
            className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-10 pr-4 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-rose-500"
          />
        </div>

        <div className="flex items-center gap-3 w-full md:w-auto">
          <div className="flex items-center gap-2">
            <Filter className="w-3.5 h-3.5 text-slate-400" />
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-slate-300 focus:outline-none focus:border-rose-500"
            >
              <option value="all">Semua Kategori ({themes.length})</option>
              {categories.map((c) => (
                <option key={c.id} value={c.id}>
                  {c.name}
                </option>
              ))}
            </select>
          </div>

          <span className="text-xs text-slate-400 font-mono bg-slate-950 px-3 py-2 rounded-xl border border-slate-800">
            Tema Aktif Anda: <strong className="text-rose-400 font-bold capitalize">{activeTheme}</strong>
          </span>
        </div>
      </div>

      {/* Themes Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {loading ? (
          <div className="col-span-full py-16 text-center text-slate-500 text-xs font-mono flex items-center justify-center gap-2">
            <Loader2 className="w-4 h-4 animate-spin text-rose-400" /> Memuat daftar tema undangan...
          </div>
        ) : filteredThemes.length === 0 ? (
          <div className="col-span-full py-16 text-center text-slate-500 text-xs">
            Tidak ada tema yang cocok dengan filter pencarian.
          </div>
        ) : (
          filteredThemes.map((theme) => {
            const isCurrentActive = activeTheme.toLowerCase() === theme.nama_theme.toLowerCase();
            const previewImgSrc = `/assets/themes/${theme.nama_theme}/preview.png`;

            return (
              <div
                key={theme.id}
                className={`p-5 rounded-3xl bg-slate-900/90 border transition-all flex flex-col justify-between group shadow-xl ${
                  isCurrentActive
                    ? "border-rose-500 ring-2 ring-rose-500/30 shadow-2xl shadow-rose-500/10"
                    : "border-slate-800 hover:border-slate-700"
                }`}
              >
                {/* 1. RECTANGULAR PREVIEW IMAGE CONTAINER */}
                <div
                  onClick={() => setPreviewModalTheme(theme.nama_theme)}
                  className="relative aspect-[16/10] w-full rounded-2xl bg-slate-950 border border-slate-800 overflow-hidden mb-4 group/img cursor-pointer"
                  title="Klik untuk melihat preview interaktif"
                >
                  {/* Active Status Badge */}
                  {isCurrentActive && (
                    <div className="absolute top-3 left-3 z-20">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500 text-white text-[10px] font-extrabold uppercase shadow-lg shadow-emerald-500/30 backdrop-blur-md">
                        <Check className="w-3 h-3" /> Tema Aktif
                      </span>
                    </div>
                  )}

                  {/* Theme Preview Image */}
                  <img
                    src={previewImgSrc}
                    alt={theme.nama_theme}
                    onError={(e) => {
                      (e.target as HTMLElement).style.display = "none";
                    }}
                    className="w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-500"
                  />

                  {/* Hover Overlay with Preview Trigger */}
                  <div className="absolute inset-0 bg-slate-950/70 opacity-0 group-hover/img:opacity-100 transition-opacity flex flex-col items-center justify-center gap-2 p-4 z-20 backdrop-blur-xs">
                    <span className="px-4 py-2 rounded-xl bg-rose-500 text-white font-bold text-xs shadow-lg flex items-center gap-2">
                      <Eye className="w-4 h-4" />
                      <span>Preview Tema Interaktif</span>
                    </span>
                  </div>
                </div>

                {/* 2. CARD METADATA */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-extrabold text-white text-base capitalize truncate">
                        {theme.nama_theme}
                      </h3>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-xs font-mono font-bold text-slate-400">{theme.kode_theme}</span>
                        <span className="px-2 py-0.5 rounded-md bg-slate-800 text-slate-300 text-[10px] font-semibold">
                          {theme.category?.name || "Koleksi"}
                        </span>
                      </div>
                    </div>

                    {/* Edit & Delete Action Icons (Admin Only) */}
                    {currentUser?.role === "admin" && (
                      <div className="flex items-center gap-1.5">
                        <button
                          onClick={() => openEditModal(theme)}
                          className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
                          title="Modif / Edit Tema"
                        >
                          <Edit className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => handleDeleteTheme(theme.id, theme.nama_theme)}
                          className="p-2 rounded-xl bg-slate-800 hover:bg-rose-500/20 text-slate-400 hover:text-rose-400 transition-colors"
                          title="Hapus Tema"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    )}
                  </div>

                  {/* 3. BUTTONS: PREVIEW TEMA & TERAPKAN TEMA */}
                  <div className="grid grid-cols-2 gap-2 pt-2 border-t border-slate-800/80">
                    {/* Preview Button */}
                    <Link
                      href={`/u/${userSlug}?theme=${encodeURIComponent(theme.nama_theme)}`}
                      target="_blank"
                      className="py-2.5 px-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold text-center flex items-center justify-center gap-1.5 transition-colors border border-slate-700"
                    >
                      <Eye className="w-3.5 h-3.5 text-rose-400" />
                      <span>Preview Tema</span>
                      <ExternalLink className="w-3 h-3 text-slate-500" />
                    </Link>

                    {/* Apply Button */}
                    <button
                      onClick={() => handleApplyTheme(theme.nama_theme)}
                      className={`py-2.5 px-3 rounded-xl font-bold text-xs shadow-md flex items-center justify-center gap-1.5 transition-all ${
                        isCurrentActive
                          ? "bg-emerald-500 text-white cursor-default"
                          : "bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-600 hover:to-pink-700 text-white"
                      }`}
                    >
                      {isCurrentActive ? (
                        <>
                          <CheckCircle2 className="w-3.5 h-3.5" /> Digunakan
                        </>
                      ) : (
                        <>
                          <Sparkles className="w-3.5 h-3.5" /> Terapkan
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>

      {/* 4. MODAL ADD / EDIT THEME (Admin Only) */}
      {currentUser?.role === "admin" && modalOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl max-w-md w-full p-6 sm:p-8 shadow-2xl relative">
            <button
              onClick={() => setModalOpen(false)}
              className="absolute top-6 right-6 p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-all"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="mb-6">
              <h2 className="text-xl font-bold text-white flex items-center gap-2.5">
                {editingTheme ? <Edit className="w-5 h-5 text-purple-400" /> : <Plus className="w-5 h-5 text-rose-500" />}
                {editingTheme ? "Modifikasi / Edit Tema" : "Tambah Tema Baru"}
              </h2>
              <p className="text-slate-400 text-xs mt-1">
                {editingTheme
                  ? `Ubah konfigurasi dan kode untuk tema "${editingTheme.nama_theme}"`
                  : "Daftarkan tema undangan baru ke database SQLite"}
              </p>
            </div>

            {formError && (
              <div className="mb-4 p-3 rounded-xl bg-rose-500/15 border border-rose-500/30 text-rose-300 text-xs">
                {formError}
              </div>
            )}

            <form onSubmit={handleSaveTheme} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                  Nama Tema (Slug / Folder)
                </label>
                <input
                  type="text"
                  required
                  value={formData.nama_theme}
                  onChange={(e) => setFormData({ ...formData, nama_theme: e.target.value.toLowerCase().replace(/\s+/g, "-") })}
                  placeholder="contoh: hwflower, luxury-gold"
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-rose-500 font-mono"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                  Kode Tema
                </label>
                <input
                  type="text"
                  required
                  value={formData.kode_theme}
                  onChange={(e) => setFormData({ ...formData, kode_theme: e.target.value.toUpperCase() })}
                  placeholder="contoh: A001, LUX01"
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-rose-500 font-mono"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                  Kategori Tema
                </label>
                <select
                  value={formData.category_id}
                  onChange={(e) => setFormData({ ...formData, category_id: parseInt(e.target.value, 10) })}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-rose-500"
                >
                  {categories.map((c) => (
                    <option key={c.id} value={c.id}>
                      {c.name}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                  Status
                </label>
                <select
                  value={formData.status}
                  onChange={(e) => setFormData({ ...formData, status: parseInt(e.target.value, 10) })}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-rose-500"
                >
                  <option value={1}>Aktif (Tersedia di Katalog)</option>
                  <option value={0}>Nonaktif (Disembunyikan)</option>
                </select>
              </div>

              <div className="pt-4 border-t border-slate-800 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setModalOpen(false)}
                  className="px-4 py-2 rounded-xl bg-slate-800 text-slate-300 text-xs font-semibold"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  disabled={formLoading}
                  className="px-5 py-2 rounded-xl bg-gradient-to-r from-rose-500 to-pink-600 text-white text-xs font-bold shadow-lg shadow-rose-500/20 flex items-center gap-2"
                >
                  <Save className="w-4 h-4" />
                  {formLoading ? "Menyimpan..." : editingTheme ? "Simpan Perubahan" : "Tambahkan Tema"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* 5. MODAL INTERACTIVE PREVIEW TEMA */}
      {previewModalTheme && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto">
          <div className="relative flex flex-col items-center w-full max-w-lg">
            {/* Top Toolbar */}
            <div className="flex items-center justify-between w-full mb-3 px-2">
              <div className="flex items-center gap-2 text-sm font-bold text-white">
                <Eye className="w-4 h-4 text-rose-400" />
                <span>Pratinjau Tema: </span>
                <span className="capitalize text-rose-400 font-extrabold">{previewModalTheme}</span>
              </div>
              <div className="flex items-center gap-2">
                <Link
                  href={`/u/${userSlug}?theme=${encodeURIComponent(previewModalTheme)}`}
                  target="_blank"
                  className="px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold flex items-center gap-1 transition-colors border border-slate-700"
                >
                  <span>Buka Tab Penuh</span>
                  <ExternalLink className="w-3 h-3" />
                </Link>
                <button
                  onClick={() => setPreviewModalTheme(null)}
                  className="p-1.5 rounded-full bg-slate-800 hover:bg-slate-700 text-white transition-colors"
                  title="Tutup Preview"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Interactive Preview Container Frame */}
            <div className="w-full h-[640px] rounded-3xl bg-slate-900 border-4 border-slate-800 shadow-2xl relative overflow-hidden flex flex-col">
              <iframe
                src={`/u/${userSlug}?theme=${encodeURIComponent(previewModalTheme)}`}
                className="w-full h-full border-none bg-slate-950"
                title={`Preview ${previewModalTheme}`}
              />
            </div>
          </div>
        </div>
      )}

      {/* 6. MODAL SUBSCRIPTION REQUIRED PROMPT */}
      {subModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-800 w-full max-w-md rounded-3xl p-6 sm:p-8 space-y-5 relative shadow-2xl text-center">
            <button
              onClick={() => setSubModalOpen(false)}
              className="absolute top-6 right-6 text-slate-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="w-16 h-16 rounded-3xl bg-rose-500/15 text-rose-400 border border-rose-500/30 flex items-center justify-center mx-auto shadow-lg shadow-rose-500/20">
              <Sparkles className="w-8 h-8" />
            </div>

            <div className="space-y-2">
              <h2 className="text-xl font-bold text-white">Aktifkan Paket Langganan</h2>
              <p className="text-xs text-slate-300 leading-relaxed">
                Untuk menerapkan tema <strong className="text-rose-400 font-mono capitalize">&quot;{targetThemeName}&quot;</strong> pada link undangan Anda, silakan aktifkan paket langganan terlebih dahulu melalui pembayaran QRIS otomatis.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 text-left space-y-2 text-xs text-slate-400">
              <div className="flex items-center gap-2 text-white font-medium">
                <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Bebas ganti 57+ pilihan tema eksklusif</span>
              </div>
              <div className="flex items-center gap-2 text-white font-medium">
                <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Buku tamu, amplop QRIS &amp; galeri foto aktif</span>
              </div>
              <div className="flex items-center gap-2 text-white font-medium">
                <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Verifikasi instan via KlikQRIS</span>
              </div>
            </div>

            <div className="flex gap-3 pt-2">
              <button
                type="button"
                onClick={() => setSubModalOpen(false)}
                className="flex-1 py-3 rounded-xl border border-slate-800 bg-slate-950 text-slate-400 text-xs font-bold"
              >
                Nanti Saja
              </button>
              <Link
                href="/dashboard/langganan"
                className="flex-1 py-3 rounded-xl bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-600 hover:to-pink-700 text-white text-xs font-bold shadow-lg shadow-rose-500/25 flex items-center justify-center gap-1.5"
              >
                <span>Pilih Paket Sekarang</span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
