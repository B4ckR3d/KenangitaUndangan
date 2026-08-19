"use client";

import { motion } from "framer-motion";
import { Moon, Calendar, MapPin, Send, Music, Compass, Heart, CheckCircle2 } from "lucide-react";
import { useState } from "react";

interface CommentItem {
  id_komen: number;
  nama_komen: string;
  isi_komen: string;
  created_at: string;
}

interface ThemeTemplateProps {
  comments: CommentItem[];
  onAddComment: (nama: string, isi: string) => Promise<void>;
}

export default function ArabianTheme({ comments, onAddComment }: ThemeTemplateProps) {
  const [namaKomen, setNamaKomen] = useState("");
  const [isiKomen, setIsiKomen] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!namaKomen || !isiKomen) return;
    await onAddComment(namaKomen, isiKomen);
    setNamaKomen("");
    setIsiKomen("");
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-950 via-stone-950 to-black text-amber-100 font-serif relative pb-24 selection:bg-amber-500 selection:text-slate-950">
      {/* Background Music Toggle */}
      <button
        onClick={() => setIsPlaying(!isPlaying)}
        className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-amber-500 text-slate-950 flex items-center justify-center shadow-2xl shadow-amber-500/40 hover:scale-110 transition-all font-sans font-bold"
        title="Putar Musik Arabian"
      >
        <Music className={`w-5 h-5 ${isPlaying ? "animate-spin" : ""}`} />
      </button>

      {/* Hero Header with Dome Ornaments */}
      <header className="relative pt-24 pb-20 text-center overflow-hidden border-b border-amber-900/40">
        <div className="max-w-xl mx-auto px-6 relative z-10">
          <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-amber-500/10 border-2 border-amber-500/40 flex items-center justify-center shadow-2xl shadow-amber-500/20">
            <Moon className="w-10 h-10 text-amber-400 fill-amber-400/20" />
          </div>

          <p className="text-xl font-bold text-amber-400 font-sans tracking-wide">
            بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ
          </p>

          <span className="block text-xs uppercase tracking-widest font-sans text-amber-300/80 mt-4">
            Walimatul &apos;Ursy (Pernikahan Islami)
          </span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-6xl font-extrabold text-amber-200 mt-6 tracking-wider font-serif"
          >
            Romeo & Juliet
          </motion.h1>

          <div className="my-8 p-6 rounded-3xl bg-amber-950/30 border border-amber-500/30 backdrop-blur-md">
            <p className="text-xs text-amber-200/90 leading-relaxed font-sans italic">
              &quot;Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung dan merasa tenteram kepadanya...&quot;
            </p>
            <span className="block text-xs font-bold text-amber-400 mt-2 font-sans">(QS. Ar-Rum: 21)</span>
          </div>

          <div className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-amber-500/20 border border-amber-500/50 text-xs font-bold text-amber-300 font-sans">
            <Calendar className="w-4 h-4 text-amber-400" /> Sabtu, 26 Desember 2026
          </div>
        </div>
      </header>

      {/* Mempelai Section */}
      <section className="py-20 max-w-3xl mx-auto px-6 text-center">
        <h2 className="text-xs uppercase tracking-widest font-bold text-amber-400 font-sans mb-12">
          🕌 Pasangan Mempelai
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 font-sans">
          <div className="p-8 rounded-3xl bg-amber-950/20 border border-amber-500/30 shadow-2xl shadow-amber-950/50">
            <h3 className="text-2xl font-bold text-amber-200">Romeo Montague</h3>
            <p className="text-xs text-amber-400 mt-1 font-semibold">Putra Pertama dari</p>
            <p className="text-amber-100/80 text-sm mt-3 leading-relaxed">
              Bpk. Lord Montague & Ibu Lady Montague
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-amber-950/20 border border-amber-500/30 shadow-2xl shadow-amber-950/50">
            <h3 className="text-2xl font-bold text-amber-200">Juliet Capulet</h3>
            <p className="text-xs text-amber-400 mt-1 font-semibold">Putri Kedua dari</p>
            <p className="text-amber-100/80 text-sm mt-3 leading-relaxed">
              Bpk. Lord Capulet & Ibu Lady Capulet
            </p>
          </div>
        </div>
      </section>

      {/* Event Details Section */}
      <section className="py-16 bg-amber-950/30 border-y border-amber-900/50 font-sans">
        <div className="max-w-xl mx-auto px-6 text-center">
          <h2 className="text-xs uppercase tracking-widest font-bold text-amber-400 mb-8">
            Waktu & Tempat Syukuran
          </h2>

          <div className="p-8 rounded-3xl bg-black/60 border border-amber-500/30">
            <h3 className="text-xl font-bold text-amber-200 mb-2">Akad & Resepsi Pernikahan</h3>
            <p className="text-amber-400/80 text-xs font-semibold mb-6">Pukul 09:00 WIB - Selesai</p>
            <div className="p-4 rounded-2xl bg-amber-950/40 border border-amber-900/60 text-amber-100 text-sm leading-relaxed mb-6">
              <MapPin className="w-5 h-5 text-amber-400 mx-auto mb-2" />
              Gedung Grand Ballroom Jakarta<br />
              Jl. Jendral Sudirman No. 1, Jakarta Selatan
            </div>

            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-xs shadow-lg shadow-amber-500/20 transition-all"
            >
              Google Maps Peta Lokasi <Compass className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Guestbook Section */}
      <section className="py-20 max-w-xl mx-auto px-6 font-sans">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-bold text-amber-200">Buku Tamu & Doa Restu</h2>
          <p className="text-amber-400/80 text-xs mt-1">Kirimkan doa keberkahan untuk kedua mempelai</p>
        </div>

        {submitted && (
          <div className="mb-6 p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5" /> Terima kasih atas doa dan ucapannya!
          </div>
        )}

        <form onSubmit={handleSubmit} className="p-6 rounded-3xl bg-black/60 border border-amber-500/30 mb-10 space-y-4">
          <div>
            <label className="block text-xs font-bold text-amber-300 uppercase tracking-wider mb-2">Nama Tamu</label>
            <input
              type="text"
              required
              value={namaKomen}
              onChange={(e) => setNamaKomen(e.target.value)}
              placeholder="Contoh: Bpk. Ahmad & Keluarga"
              className="w-full bg-amber-950/40 border border-amber-900/60 rounded-xl px-4 py-3 text-sm text-amber-100 focus:outline-none focus:border-amber-500"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-amber-300 uppercase tracking-wider mb-2">Doa & Ucapan Restu</label>
            <textarea
              required
              rows={4}
              value={isiKomen}
              onChange={(e) => setIsiKomen(e.target.value)}
              placeholder="Tuliskan ucapan keberkahan..."
              className="w-full bg-amber-950/40 border border-amber-900/60 rounded-xl px-4 py-3 text-sm text-amber-100 focus:outline-none focus:border-amber-500"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-xs shadow-lg shadow-amber-500/20 transition-all flex items-center justify-center gap-2"
          >
            Kirim Doa Restu <Send className="w-4 h-4" />
          </button>
        </form>

        {/* Comments List */}
        <div className="space-y-4">
          {comments.map((c) => (
            <div key={c.id_komen} className="p-5 rounded-2xl bg-amber-950/20 border border-amber-900/40">
              <div className="flex items-center justify-between mb-2">
                <span className="font-bold text-sm text-amber-300">{c.nama_komen}</span>
                <span className="text-xs text-amber-500/70">{new Date(c.created_at).toLocaleDateString("id-ID")}</span>
              </div>
              <p className="text-amber-100/90 text-sm leading-relaxed">{c.isi_komen}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
