"use client";

import { useEffect, useState } from "react";
import { BookOpen, Plus, Save, Trash2, CheckCircle2, Loader2, AlertCircle } from "lucide-react";

interface StoryItem {
  id?: number;
  judul_cerita: string;
  tanggal_cerita: string;
  isi_cerita: string;
}

export default function CeritaPage() {
  const [stories, setStories] = useState<StoryItem[]>([]);
  const [loading, setLoading] = useState(false);
  const [fetching, setFetching] = useState(true);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const loadStories = async () => {
    try {
      setFetching(true);
      const res = await fetch("/api/cerita", { credentials: "include" });
      const data = await res.json();
      if (data.success) {
        setStories(data.ceritaList || []);
      } else if (res.status === 401) {
        setError("Sesi login Anda telah berakhir. Silakan login kembali.");
      }
    } catch (err) {
      console.error("Load Cerita error:", err);
    } finally {
      setFetching(false);
    }
  };

  useEffect(() => {
    loadStories();
  }, []);

  const handleAddStory = () => {
    setStories([
      ...stories,
      {
        judul_cerita: "",
        tanggal_cerita: "",
        isi_cerita: "",
      },
    ]);
  };

  const handleRemoveStory = (index: number) => {
    setStories(stories.filter((_, i) => i !== index));
  };

  const handleSave = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/cerita", {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ceritaList: stories }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Gagal menyimpan cerita");

      setSuccess(true);
      if (data.ceritaList) setStories(data.ceritaList);
      setTimeout(() => setSuccess(false), 3500);
    } catch (err: any) {
      setError(err?.message || "Terjadi kesalahan saat menyimpan cerita");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between border-b border-slate-800 pb-5">
        <div>
          <h1 className="text-2xl font-bold text-white flex items-center gap-3">
            <BookOpen className="w-6 h-6 text-rose-500" /> Cerita Cinta (Love Story)
          </h1>
          <p className="text-slate-400 text-sm mt-1">
            Bagikan momen manis perjalanan cinta Anda bersama pasangan kepada para tamu undangan.
          </p>
        </div>

        <button
          onClick={handleAddStory}
          className="px-5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-200 font-bold text-xs flex items-center gap-2 transition-all"
        >
          <Plus className="w-4 h-4 text-rose-400" /> Tambah Momen
        </button>
      </div>

      {success && (
        <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold flex items-center gap-2">
          <CheckCircle2 className="w-5 h-5" /> Kisah cinta berhasil disimpan!
        </div>
      )}

      {error && (
        <div className="p-4 rounded-2xl bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs font-semibold flex items-center gap-2">
          <AlertCircle className="w-5 h-5" /> {error}
        </div>
      )}

      {fetching ? (
        <div className="p-12 text-center text-slate-500 text-xs flex items-center justify-center gap-2">
          <Loader2 className="w-4 h-4 animate-spin text-rose-400" /> Memuat cerita cinta...
        </div>
      ) : stories.length === 0 ? (
        <div className="p-12 text-center text-slate-500 text-xs border border-dashed border-slate-800 rounded-3xl">
          Belum ada momen cerita. Klik &quot;Tambah Momen&quot; untuk menuliskan kisah cinta Anda.
        </div>
      ) : (
        <div className="space-y-6">
          {stories.map((story, idx) => (
            <div key={idx} className="p-6 rounded-3xl bg-slate-900 border border-slate-800 space-y-4">
              <div className="flex items-center justify-between border-b border-slate-800/80 pb-3">
                <span className="text-xs font-bold text-rose-400">Kisah #{idx + 1}</span>
                <button
                  onClick={() => handleRemoveStory(idx)}
                  className="text-slate-500 hover:text-rose-400 transition-colors"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">Judul Momen</label>
                  <input
                    type="text"
                    value={story.judul_cerita}
                    onChange={(e) => {
                      const newStories = [...stories];
                      newStories[idx].judul_cerita = e.target.value;
                      setStories(newStories);
                    }}
                    placeholder="Contoh: Awal Bertemu / Lamaran"
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-rose-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">Tanggal / Tahun</label>
                  <input
                    type="text"
                    value={story.tanggal_cerita}
                    onChange={(e) => {
                      const newStories = [...stories];
                      newStories[idx].tanggal_cerita = e.target.value;
                      setStories(newStories);
                    }}
                    placeholder="Contoh: 14 Januari 2024"
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-rose-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1">Cerita Singkat</label>
                <textarea
                  rows={3}
                  value={story.isi_cerita}
                  onChange={(e) => {
                    const newStories = [...stories];
                    newStories[idx].isi_cerita = e.target.value;
                    setStories(newStories);
                  }}
                  placeholder="Tuliskan kisah perjalanan cinta Anda di sini..."
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-rose-500"
                />
              </div>
            </div>
          ))}
        </div>
      )}

      {stories.length > 0 && (
        <button
          onClick={handleSave}
          disabled={loading}
          className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-600 hover:to-pink-700 text-white font-bold text-sm shadow-lg shadow-rose-500/25 transition-all flex items-center gap-2"
        >
          <Save className="w-4 h-4" /> {loading ? "Menyimpan..." : "Simpan Semua Cerita"}
        </button>
      )}
    </div>
  );
}
