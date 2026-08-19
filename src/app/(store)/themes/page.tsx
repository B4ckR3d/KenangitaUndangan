"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  ExternalLink,
  Sparkles,
  Filter,
  Eye,
  Heart,
} from "lucide-react";

interface CategoryItem {
  id: number;
  name: string;
  slug: string;
}

interface ThemeItem {
  id: number;
  nama_theme: string;
  kode_theme: string;
  category_id: number;
  category?: CategoryItem | null;
}

export default function ThemesPublicPage() {
  const [themes, setThemes] = useState<ThemeItem[]>([]);
  const [categories, setCategories] = useState<CategoryItem[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadThemes() {
      try {
        setLoading(true);
        const res = await fetch("/api/themes");
        const data = await res.json();
        if (data.success) {
          setThemes(data.themes || []);
          setCategories(data.categories || []);
        }
      } catch (err) {
        console.error("Error loading themes:", err);
      } finally {
        setLoading(false);
      }
    }
    loadThemes();
  }, []);

  const filteredThemes = selectedCategory
    ? themes.filter((t) => t.category_id === selectedCategory)
    : themes;

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans">
      {/* Top Header */}
      <header className="border-b border-slate-800 bg-slate-900/60 backdrop-blur-xl sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 text-sm font-semibold text-slate-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Kembali ke Beranda
          </Link>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-rose-500 flex items-center justify-center shadow-lg shadow-rose-500/20">
              <Heart className="w-4 h-4 text-white fill-white" />
            </div>
            <span className="text-lg font-extrabold text-white">
              Kenangita<span className="text-rose-500"> Themes</span>
            </span>
          </div>
          <Link
            href="/login"
            className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-600 hover:to-pink-700 text-white text-xs font-bold transition-all shadow-md shadow-rose-500/20"
          >
            Buat Undangan Saya
          </Link>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-12 space-y-10">
        {/* Banner Section */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs uppercase tracking-widest font-extrabold text-rose-400 bg-rose-500/10 border border-rose-500/30 px-3.5 py-1.5 rounded-full">
            Katalog Desain Premium
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Pilihan Tema Undangan Digital
          </h1>
          <p className="text-slate-400 text-sm">
            Semua tema didesain responsif, dilengkapi musik romantis, countdown timer, peta lokasi, dan buku tamu online.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-2xl bg-slate-900 border border-slate-800 shadow-md">
          <div className="flex items-center gap-2 text-slate-300 text-xs font-bold uppercase tracking-wider">
            <Filter className="w-4 h-4 text-rose-400" /> Filter Kategori:
          </div>

          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedCategory(null)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                selectedCategory === null
                  ? "bg-rose-500 text-white shadow-lg shadow-rose-500/30"
                  : "bg-slate-950 border border-slate-800 text-slate-400 hover:border-slate-700 hover:text-white"
              }`}
            >
              Semua ({themes.length})
            </button>
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  selectedCategory === cat.id
                    ? "bg-rose-500 text-white shadow-lg shadow-rose-500/30"
                    : "bg-slate-950 border border-slate-800 text-slate-400 hover:border-slate-700 hover:text-white"
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        {/* Theme Cards Grid - Clean Rectangular View */}
        {loading ? (
          <div className="text-center py-24 text-slate-400">
            <Sparkles className="w-8 h-8 text-rose-500 animate-spin mx-auto mb-4" />
            <p className="text-xs font-mono">Memuat Galeri Tema...</p>
          </div>
        ) : filteredThemes.length === 0 ? (
          <div className="text-center py-24 text-slate-400">
            <p className="text-xs">Belum ada tema pada kategori ini.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredThemes.map((theme) => {
              const previewImgSrc = `/assets/themes/${theme.nama_theme}/preview.png`;

              return (
                <div
                  key={theme.id}
                  className="p-5 rounded-3xl bg-slate-900/90 border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between group shadow-xl hover:shadow-2xl"
                >
                  {/* Rectangular Image Preview */}
                  <Link
                    href={`/u/demo?theme=${encodeURIComponent(theme.nama_theme)}`}
                    target="_blank"
                    className="relative aspect-[16/10] w-full rounded-2xl bg-slate-950 border border-slate-800 overflow-hidden mb-4 group/img block"
                  >
                    <img
                      src={previewImgSrc}
                      alt={theme.nama_theme}
                      onError={(e) => {
                        (e.target as HTMLElement).style.display = "none";
                      }}
                      className="w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-500"
                    />

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-slate-950/70 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center p-4 z-20 backdrop-blur-xs">
                      <span className="px-4 py-2 rounded-xl bg-rose-500 text-white font-bold text-xs shadow-lg flex items-center gap-2">
                        <Eye className="w-4 h-4" />
                        <span>Preview Tema Live</span>
                      </span>
                    </div>
                  </Link>

                  {/* Metadata & Actions */}
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-extrabold text-white text-base capitalize truncate group-hover:text-rose-400 transition-colors">
                        {theme.nama_theme}
                      </h3>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-xs font-mono font-bold text-slate-400">{theme.kode_theme}</span>
                        <span className="px-2 py-0.5 rounded-md bg-slate-800 text-slate-300 text-[10px] font-semibold">
                          {theme.category?.name || "Premium"}
                        </span>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-2 pt-2 border-t border-slate-800/80">
                      <Link
                        href={`/u/demo?theme=${encodeURIComponent(theme.nama_theme)}`}
                        target="_blank"
                        className="py-2.5 px-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold text-center flex items-center justify-center gap-1.5 transition-colors border border-slate-700"
                      >
                        <Eye className="w-3.5 h-3.5 text-rose-400" />
                        <span>Preview Tema</span>
                        <ExternalLink className="w-3 h-3 text-slate-500" />
                      </Link>

                      <Link
                        href="/login"
                        className="py-2.5 px-3 rounded-xl bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-600 hover:to-pink-700 text-white text-xs font-bold text-center shadow-lg shadow-rose-500/20 transition-all flex items-center justify-center gap-1.5"
                      >
                        <Sparkles className="w-3.5 h-3.5" />
                        <span>Gunakan</span>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </main>
    </div>
  );
}
