"use client";

import { motion } from "framer-motion";
import { Trees, Calendar, MapPin, Send, Music, Compass, CheckCircle2 } from "lucide-react";
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

export default function RusticTheme({ comments, onAddComment }: ThemeTemplateProps) {
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
    <div className="min-h-screen bg-stone-950 text-stone-200 font-sans relative pb-24 selection:bg-amber-600 selection:text-white">
      {/* Music Control */}
      <button
        onClick={() => setIsPlaying(!isPlaying)}
        className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-amber-600 text-white flex items-center justify-center shadow-2xl shadow-amber-600/40 hover:scale-110 transition-all"
        title="Musik Rustic"
      >
        <Music className={`w-5 h-5 ${isPlaying ? "animate-spin" : ""}`} />
      </button>

      {/* Hero Section */}
      <header className="relative pt-24 pb-20 text-center overflow-hidden border-b border-stone-800/80 bg-[radial-gradient(circle_at_50%_30%,rgba(217,119,6,0.15),transparent_60%)]">
        <div className="max-w-xl mx-auto px-6 relative z-10">
          <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-amber-600/10 border border-amber-600/30 text-amber-500 flex items-center justify-center">
            <Trees className="w-8 h-8" />
          </div>

          <span className="block text-xs uppercase tracking-widest font-bold text-amber-500 font-mono">
            🌿 Rustic Botanical Wedding
          </span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-6xl font-extrabold text-stone-100 mt-4 tracking-tight font-serif"
          >
            Romeo & Juliet
          </motion.h1>

          <p className="text-stone-400 text-sm mt-4 italic font-serif max-w-md mx-auto">
            &quot;Dua jiwa dengan satu pikiran, dua hati yang berdetak sebagai satu.&quot;
          </p>

          <div className="mt-8 inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-stone-900 border border-amber-600/30 text-xs font-semibold text-amber-400">
            <Calendar className="w-4 h-4 text-amber-500" /> Sabtu, 26 Desember 2026
          </div>
        </div>
      </header>

      {/* Mempelai Section */}
      <section className="py-20 max-w-3xl mx-auto px-6 text-center">
        <h2 className="text-xs uppercase tracking-widest font-bold text-amber-500 font-mono mb-12">
          Mempelai Pengantin
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 rounded-3xl bg-stone-900 border border-stone-800 shadow-xl">
            <h3 className="text-2xl font-bold text-stone-100 font-serif">Romeo Montague</h3>
            <p className="text-xs font-semibold text-amber-500 mt-1">Putra Pertama dari</p>
            <p className="text-stone-400 text-sm mt-3 leading-relaxed">
              Bpk. Lord Montague & Ibu Lady Montague
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-stone-900 border border-stone-800 shadow-xl">
            <h3 className="text-2xl font-bold text-stone-100 font-serif">Juliet Capulet</h3>
            <p className="text-xs font-semibold text-amber-500 mt-1">Putri Kedua dari</p>
            <p className="text-stone-400 text-sm mt-3 leading-relaxed">
              Bpk. Lord Capulet & Ibu Lady Capulet
            </p>
          </div>
        </div>
      </section>

      {/* Event Section */}
      <section className="py-16 bg-stone-900/50 border-y border-stone-800">
        <div className="max-w-xl mx-auto px-6 text-center">
          <h2 className="text-xs uppercase tracking-widest font-bold text-amber-500 font-mono mb-8">
            Acara & Lokasi
          </h2>

          <div className="p-8 rounded-3xl bg-stone-900 border border-amber-600/30">
            <h3 className="text-xl font-bold text-stone-100 mb-2 font-serif">Akad & Resepsi Pernikahan</h3>
            <p className="text-stone-400 text-sm mb-6">Waktu: 09:00 WIB - Selesai</p>
            <div className="p-4 rounded-2xl bg-stone-950 border border-stone-800 text-stone-300 text-sm leading-relaxed mb-6">
              <MapPin className="w-5 h-5 text-amber-500 mx-auto mb-2" />
              Gedung Outdoor Garden Jakarta<br />
              Jl. Jendral Sudirman No. 1, Jakarta Selatan
            </div>

            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs shadow-lg shadow-amber-600/20 transition-all"
            >
              Google Maps Lokasi <Compass className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Guestbook */}
      <section className="py-20 max-w-xl mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-bold text-stone-100 font-serif">Buku Tamu & Ucapan</h2>
          <p className="text-stone-400 text-sm mt-1">Sampaikan pesan kehangatan untuk kedua mempelai</p>
        </div>

        {submitted && (
          <div className="mb-6 p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5" /> Terima kasih! Pesan Anda telah terkirim.
          </div>
        )}

        <form onSubmit={handleSubmit} className="p-6 rounded-3xl bg-stone-900 border border-stone-800 mb-10 space-y-4">
          <div>
            <label className="block text-xs font-bold text-stone-300 uppercase tracking-wider mb-2">Nama Anda</label>
            <input
              type="text"
              required
              value={namaKomen}
              onChange={(e) => setNamaKomen(e.target.value)}
              placeholder="Contoh: Budi & Keluarga"
              className="w-full bg-stone-950 border border-stone-800 rounded-xl px-4 py-3 text-sm text-stone-100 focus:outline-none focus:border-amber-600"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-stone-300 uppercase tracking-wider mb-2">Pesan Ucapan</label>
            <textarea
              required
              rows={4}
              value={isiKomen}
              onChange={(e) => setIsiKomen(e.target.value)}
              placeholder="Tulis ucapan..."
              className="w-full bg-stone-950 border border-stone-800 rounded-xl px-4 py-3 text-sm text-stone-100 focus:outline-none focus:border-amber-600"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs shadow-lg shadow-amber-600/20 transition-all flex items-center justify-center gap-2"
          >
            Kirim Ucapan <Send className="w-4 h-4" />
          </button>
        </form>

        <div className="space-y-4">
          {comments.map((c) => (
            <div key={c.id_komen} className="p-5 rounded-2xl bg-stone-900 border border-stone-800">
              <div className="flex items-center justify-between mb-2">
                <span className="font-bold text-sm text-amber-500">{c.nama_komen}</span>
                <span className="text-xs text-stone-500">{new Date(c.created_at).toLocaleDateString("id-ID")}</span>
              </div>
              <p className="text-stone-300 text-sm leading-relaxed">{c.isi_komen}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
