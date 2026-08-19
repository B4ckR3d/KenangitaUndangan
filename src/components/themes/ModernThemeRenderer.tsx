"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Heart,
  Calendar,
  Clock,
  MapPin,
  Music,
  Volume2,
  VolumeX,
  Copy,
  Check,
  Send,
  Sparkles,
  Users,
  BookOpen,
  Gift,
  MessageSquare,
  ExternalLink,
  ChevronDown,
  Mail,
  ShieldAlert,
} from "lucide-react";

interface CommentItem {
  id_komen: number;
  nama_komen: string;
  isi_komen: string;
  created_at: string;
}

interface AcaraItem {
  id_acara: number;
  nama_acara: string;
  tgl_acara?: string | null;
  waktu_mulai: string;
  waktu_akhir: string;
  tempat_acara: string;
  alamat_acara: string;
  maps?: string | null;
  set_countdown?: string | null;
}

interface CeritaItem {
  id: number;
  tanggal_cerita: string;
  judul_cerita: string;
  isi_cerita: string;
}

interface RekeningItem {
  id: number;
  nama_bank?: string | null;
  no_rekening?: string | null;
  nama_pemilik?: string | null;
  qrcode_bank?: string | null;
}

interface MempelaiData {
  nama_pria: string;
  nama_panggilan_pria: string;
  nama_ayah_pria: string;
  nama_ibu_pria: string;
  nama_wanita: string;
  nama_panggilan_wanita: string;
  nama_ayah_wanita: string;
  nama_ibu_wanita: string;
}

interface ModernThemeProps {
  themeCode: string;
  guestName: string;
  data: {
    userId: number;
    mempelai: MempelaiData;
    acaraList: AcaraItem[];
    ceritaList: CeritaItem[];
    rekeningList: RekeningItem[];
    quote: string;
    quoteSource: string;
    komenList: CommentItem[];
    salamPembuka: string;
  };
}

export default function ModernThemeRenderer({
  themeCode = "hwflower",
  guestName = "Tamu Undangan",
  data,
}: ModernThemeProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [comments, setComments] = useState<CommentItem[]>(data.komenList || []);
  const [namaKomen, setNamaKomen] = useState(guestName !== "Tamu Undangan" ? guestName : "");
  const [isiKomen, setIsiKomen] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [copiedBankId, setCopiedBankId] = useState<number | null>(null);

  // Countdown timer state
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // Calculate target date from acara
  useEffect(() => {
    const targetDate = new Date("2026-12-26T09:00:00").getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleOpenInvitation = () => {
    setIsOpen(true);
    setIsPlaying(true);
  };

  const handleCopyRekening = (id: number, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedBankId(id);
    setTimeout(() => setCopiedBankId(null), 2000);
  };

  const handleAddComment = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!namaKomen || !isiKomen) return;
    setSubmitting(true);

    try {
      const res = await fetch("/api/comments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id_user: data.userId || 1,
          nama_komen: namaKomen,
          isi_komen: isiKomen,
        }),
      });
      const resData = await res.json();
      if (resData.success && resData.comment) {
        setComments([resData.comment, ...comments]);
        setIsiKomen("");
      }
    } catch (err) {
      console.error("Comment submit error:", err);
    } finally {
      setSubmitting(false);
    }
  };

  // Determine theme theme styling profile
  const isArabian = ["arabian", "islamic1", "vintage-islamic"].includes(themeCode.toLowerCase());
  const isRustic = ["rustic", "jellyblack", "mandala"].includes(themeCode.toLowerCase());
  const isTealOrBlue = ["tealflower", "blueroses", "watercolor1", "watercolor2"].includes(themeCode.toLowerCase());

  const themeClasses = isArabian
    ? "from-amber-950/40 via-stone-950 to-slate-950 text-amber-100"
    : isRustic
    ? "from-stone-900 via-stone-950 to-black text-stone-200"
    : isTealOrBlue
    ? "from-teal-950/30 via-slate-950 to-black text-teal-100"
    : "from-rose-950/40 via-slate-950 to-stone-950 text-rose-100"; // default hwflower / floral

  const accentColor = isArabian
    ? "text-amber-400"
    : isRustic
    ? "text-amber-500"
    : isTealOrBlue
    ? "text-teal-400"
    : "text-rose-400";

  const buttonAccent = isArabian
    ? "bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 shadow-amber-500/30"
    : isRustic
    ? "bg-gradient-to-r from-amber-600 to-stone-700 hover:from-amber-700 hover:to-stone-800 text-white shadow-amber-600/30"
    : isTealOrBlue
    ? "bg-gradient-to-r from-teal-500 to-emerald-600 hover:from-teal-600 hover:to-emerald-700 text-white shadow-teal-500/30"
    : "bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-600 hover:to-pink-700 text-white shadow-rose-500/30";

  const cardBorder = isArabian
    ? "border-amber-500/30 bg-amber-950/20"
    : isRustic
    ? "border-stone-800 bg-stone-900/60"
    : isTealOrBlue
    ? "border-teal-500/20 bg-teal-950/20"
    : "border-rose-500/25 bg-rose-950/20";

  return (
    <div className={`min-h-screen bg-gradient-to-b ${themeClasses} font-serif relative overflow-x-hidden selection:bg-rose-500 selection:text-white`}>
      {/* Background Audio */}
      {isPlaying && (
        <audio autoPlay loop src="/assets/musik/musik.mp3" />
      )}

      {/* Floating Audio Control Button */}
      {isOpen && (
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className={`fixed top-6 right-6 z-40 w-11 h-11 rounded-full ${buttonAccent} flex items-center justify-center shadow-xl hover:scale-110 transition-all`}
          title={isPlaying ? "Matikan Musik" : "Putar Musik"}
        >
          {isPlaying ? <Volume2 className="w-5 h-5 animate-pulse" /> : <VolumeX className="w-5 h-5" />}
        </button>
      )}

      {/* 1. COVER / WELCOME OVERLAY SCREEN */}
      <AnimatePresence>
        {!isOpen && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, y: -80 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="fixed inset-0 z-50 bg-slate-950/95 backdrop-blur-2xl flex flex-col items-center justify-center p-6 text-center text-white"
          >
            {/* Background glowing aura */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(244,63,94,0.22),transparent_70%)] pointer-events-none" />

            <div className="max-w-md w-full mx-auto relative z-10 space-y-6">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="w-20 h-20 mx-auto rounded-3xl bg-rose-500/15 border-2 border-rose-500/40 flex items-center justify-center shadow-2xl shadow-rose-500/30"
              >
                <Heart className="w-10 h-10 text-rose-400 fill-rose-400/30 animate-pulse" />
              </motion.div>

              <div>
                <p className="text-xs uppercase tracking-[0.3em] font-sans font-bold text-rose-300">
                  The Wedding of
                </p>
                <h1 className="text-4xl sm:text-5xl font-extrabold text-white mt-3 tracking-wide">
                  {data.mempelai.nama_pria} & {data.mempelai.nama_wanita}
                </h1>
              </div>

              {/* Guest Invitation Box */}
              <div className="p-6 rounded-3xl bg-slate-900/80 border border-slate-800 shadow-2xl backdrop-blur-xl space-y-2">
                <p className="text-xs text-slate-400 font-sans">Kepada Yth. Bapak/Ibu/Saudara(i):</p>
                <h3 className="text-xl font-bold text-rose-400 font-sans">{guestName}</h3>
                <p className="text-[11px] text-slate-400 leading-relaxed font-sans pt-1">
                  Tanpa mengurangi rasa hormat, kami mengundang Anda untuk hadir di momen bahagia kami.
                </p>
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleOpenInvitation}
                className={`w-full py-4 rounded-2xl ${buttonAccent} font-sans font-extrabold text-sm shadow-2xl flex items-center justify-center gap-2.5 transition-all`}
              >
                <Mail className="w-5 h-5" />
                <span>Buka Undangan</span>
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 2. MAIN INVITATION CONTENT (RENDERED WHEN OPEN) */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative z-10 pb-28"
        >
          {/* Hero Section */}
          <section id="home" className="min-h-screen flex flex-col items-center justify-center text-center px-6 py-20 relative">
            <div className="max-w-2xl mx-auto space-y-6">
              <span className="inline-block text-xs uppercase tracking-[0.3em] font-sans font-extrabold px-4 py-1.5 rounded-full bg-rose-500/10 border border-rose-500/30 text-rose-300">
                Walimatul &apos;Ursy
              </span>

              <h1 className="text-5xl sm:text-7xl font-extrabold text-white tracking-tight leading-tight">
                {data.mempelai.nama_pria} <br />
                <span className={`text-3xl sm:text-4xl ${accentColor} font-serif italic`}>&</span> <br />
                {data.mempelai.nama_wanita}
              </h1>

              <div className="max-w-lg mx-auto p-6 rounded-3xl bg-slate-900/60 border border-slate-800 backdrop-blur-md">
                <p className="text-xs sm:text-sm leading-relaxed text-slate-300 italic">
                  &quot;{data.quote}&quot;
                </p>
                <span className={`block text-xs font-bold ${accentColor} mt-3 font-sans`}>
                  — {data.quoteSource}
                </span>
              </div>

              {/* Live Countdown Timer */}
              <div className="pt-6">
                <p className="text-xs uppercase font-sans font-bold tracking-widest text-slate-400 mb-4">
                  Menghitung Hari Bahagia
                </p>
                <div className="grid grid-cols-4 gap-3 max-w-sm mx-auto font-sans">
                  <div className={`p-3 rounded-2xl ${cardBorder} border`}>
                    <span className="block text-2xl sm:text-3xl font-extrabold text-white">{timeLeft.days}</span>
                    <span className="text-[10px] text-slate-400 font-bold uppercase">Hari</span>
                  </div>
                  <div className={`p-3 rounded-2xl ${cardBorder} border`}>
                    <span className="block text-2xl sm:text-3xl font-extrabold text-white">{timeLeft.hours}</span>
                    <span className="text-[10px] text-slate-400 font-bold uppercase">Jam</span>
                  </div>
                  <div className={`p-3 rounded-2xl ${cardBorder} border`}>
                    <span className="block text-2xl sm:text-3xl font-extrabold text-white">{timeLeft.minutes}</span>
                    <span className="text-[10px] text-slate-400 font-bold uppercase">Menit</span>
                  </div>
                  <div className={`p-3 rounded-2xl ${cardBorder} border`}>
                    <span className="block text-2xl sm:text-3xl font-extrabold text-white">{timeLeft.seconds}</span>
                    <span className="text-[10px] text-slate-400 font-bold uppercase">Detik</span>
                  </div>
                </div>
              </div>
            </div>

            <a href="#mempelai" className="absolute bottom-8 text-slate-500 animate-bounce">
              <ChevronDown className="w-6 h-6" />
            </a>
          </section>

          {/* Mempelai Section */}
          <section id="mempelai" className="py-24 px-6 max-w-4xl mx-auto text-center">
            <div className="mb-14">
              <h2 className="text-xs uppercase tracking-[0.25em] font-sans font-bold text-rose-400 mb-2">
                Pasangan Mempelai
              </h2>
              <h3 className="text-3xl sm:text-4xl font-extrabold text-white">
                Maha Suci Allah yang Menciptakan Makhluk-Nya Berpasang-pasangan
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 font-sans">
              {/* Mempelai Pria */}
              <div className={`p-8 rounded-3xl ${cardBorder} border shadow-2xl space-y-4 hover:border-rose-500/40 transition-all`}>
                <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-tr from-rose-500 to-pink-500 flex items-center justify-center text-3xl font-extrabold text-white shadow-xl shadow-rose-500/20">
                  {data.mempelai.nama_pria.charAt(0)}
                </div>
                <h4 className="text-2xl font-extrabold text-white font-serif">{data.mempelai.nama_pria}</h4>
                <p className="text-xs text-rose-300 font-semibold">({data.mempelai.nama_panggilan_pria})</p>
                <div className="text-xs text-slate-300 space-y-1 pt-2">
                  <p className="text-slate-400">Putra Tercinta dari Pasangan:</p>
                  <p className="font-bold text-white text-sm">
                    Bpk. {data.mempelai.nama_ayah_pria} & Ibu {data.mempelai.nama_ibu_pria}
                  </p>
                </div>
              </div>

              {/* Mempelai Wanita */}
              <div className={`p-8 rounded-3xl ${cardBorder} border shadow-2xl space-y-4 hover:border-rose-500/40 transition-all`}>
                <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-tr from-pink-500 to-rose-600 flex items-center justify-center text-3xl font-extrabold text-white shadow-xl shadow-pink-500/20">
                  {data.mempelai.nama_wanita.charAt(0)}
                </div>
                <h4 className="text-2xl font-extrabold text-white font-serif">{data.mempelai.nama_wanita}</h4>
                <p className="text-xs text-rose-300 font-semibold">({data.mempelai.nama_panggilan_wanita})</p>
                <div className="text-xs text-slate-300 space-y-1 pt-2">
                  <p className="text-slate-400">Putri Tercinta dari Pasangan:</p>
                  <p className="font-bold text-white text-sm">
                    Bpk. {data.mempelai.nama_ayah_wanita} & Ibu {data.mempelai.nama_ibu_wanita}
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Jadwal Acara Section */}
          <section id="acara" className="py-24 px-6 max-w-4xl mx-auto text-center">
            <div className="mb-14">
              <h2 className="text-xs uppercase tracking-[0.25em] font-sans font-bold text-rose-400 mb-2">
                Rangkaian Acara
              </h2>
              <h3 className="text-3xl sm:text-4xl font-extrabold text-white">
                Waktu & Tempat Pelaksanaan
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 font-sans">
              {data.acaraList.map((acara, idx) => (
                <div key={acara.id_acara || idx} className={`p-8 rounded-3xl ${cardBorder} border shadow-2xl space-y-5 text-left`}>
                  <div className="flex items-center justify-between">
                    <span className="px-3.5 py-1 rounded-full bg-rose-500/20 text-rose-300 text-xs font-extrabold uppercase tracking-wider">
                      {acara.nama_acara}
                    </span>
                    <Calendar className="w-5 h-5 text-rose-400" />
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <Clock className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                      <div>
                        <div className="font-bold text-white text-sm">{acara.tgl_acara || "Sabtu, 26 Desember 2026"}</div>
                        <div className="text-xs text-slate-400">Pukul {acara.waktu_mulai} - {acara.waktu_akhir} WIB</div>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <MapPin className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                      <div>
                        <div className="font-bold text-white text-sm">{acara.tempat_acara}</div>
                        <div className="text-xs text-slate-400 leading-relaxed">{acara.alamat_acara}</div>
                      </div>
                    </div>
                  </div>

                  <a
                    href={acara.maps || "https://maps.google.com"}
                    target="_blank"
                    className={`inline-flex items-center justify-center gap-2 w-full py-3 rounded-xl ${buttonAccent} text-xs font-bold shadow-lg transition-all`}
                  >
                    <MapPin className="w-4 h-4" />
                    <span>Petunjuk Lokasi (Google Maps)</span>
                  </a>
                </div>
              ))}
            </div>
          </section>

          {/* Cerita Cinta (Love Story) Section */}
          {data.ceritaList && data.ceritaList.length > 0 && (
            <section id="cerita" className="py-24 px-6 max-w-3xl mx-auto text-center font-sans">
              <div className="mb-14">
                <h2 className="text-xs uppercase tracking-[0.25em] font-bold text-rose-400 mb-2">
                  Perjalanan Cinta
                </h2>
                <h3 className="text-3xl sm:text-4xl font-extrabold text-white font-serif">
                  Kisah Kasih Kami
                </h3>
              </div>

              <div className="space-y-6 text-left">
                {data.ceritaList.map((c, index) => (
                  <div key={c.id || index} className={`p-6 rounded-3xl ${cardBorder} border shadow-xl relative pl-8`}>
                    <div className="absolute -left-3 top-6 w-6 h-6 rounded-full bg-rose-500 text-white flex items-center justify-center font-bold text-xs shadow-lg">
                      {index + 1}
                    </div>
                    <span className="text-xs font-bold text-rose-400 font-mono">{c.tanggal_cerita}</span>
                    <h4 className="text-lg font-bold text-white mt-1 font-serif">{c.judul_cerita}</h4>
                    <p className="text-xs text-slate-300 leading-relaxed mt-2">{c.isi_cerita}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Amplop Digital & Rekening Section */}
          {data.rekeningList && data.rekeningList.length > 0 && (
            <section id="hadiah" className="py-24 px-6 max-w-3xl mx-auto text-center font-sans">
              <div className="mb-14">
                <h2 className="text-xs uppercase tracking-[0.25em] font-bold text-rose-400 mb-2">
                  Amplop Digital
                </h2>
                <h3 className="text-3xl sm:text-4xl font-extrabold text-white font-serif">
                  Tanda Kasih & Hadiah
                </h3>
                <p className="text-xs text-slate-400 mt-2 max-w-md mx-auto">
                  Doa restu Anda merupakan karunia terindah bagi kami. Bagi yang ingin memberikan tanda kasih secara digital, dapat melalui rekening berikut:
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {data.rekeningList.map((rek, i) => (
                  <div key={rek.id || i} className={`p-6 rounded-3xl ${cardBorder} border shadow-2xl text-left space-y-3`}>
                    <div className="flex items-center justify-between">
                      <span className="font-extrabold text-sm text-white tracking-wider uppercase">{rek.nama_bank || "BANK"}</span>
                      <Gift className="w-5 h-5 text-rose-400" />
                    </div>
                    <div>
                      <span className="text-xs text-slate-400">Nomor Rekening:</span>
                      <div className="text-lg font-mono font-bold text-rose-300">{rek.no_rekening}</div>
                      <div className="text-xs text-slate-300">a.n. {rek.nama_pemilik}</div>
                    </div>
                    <button
                      type="button"
                      onClick={() => handleCopyRekening(rek.id, rek.no_rekening || "")}
                      className="w-full py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-xs font-bold text-slate-200 border border-slate-700 flex items-center justify-center gap-2 transition-all"
                    >
                      {copiedBankId === rek.id ? (
                        <>
                          <Check className="w-4 h-4 text-emerald-400" /> Tersalin ke Clipboard
                        </>
                      ) : (
                        <>
                          <Copy className="w-4 h-4" /> Salin Nomor Rekening
                        </>
                      )}
                    </button>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Buku Tamu & Ucapan Section */}
          <section id="ucapan" className="py-24 px-6 max-w-3xl mx-auto font-sans">
            <div className="text-center mb-12">
              <h2 className="text-xs uppercase tracking-[0.25em] font-bold text-rose-400 mb-2">
                Buku Tamu Digital
              </h2>
              <h3 className="text-3xl sm:text-4xl font-extrabold text-white font-serif">
                Ucapan & Doa Restu
              </h3>
            </div>

            {/* Comment Submission Form */}
            <form onSubmit={handleAddComment} className={`p-6 sm:p-8 rounded-3xl ${cardBorder} border shadow-2xl space-y-4 mb-10`}>
              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                  Nama Anda
                </label>
                <input
                  type="text"
                  required
                  value={namaKomen}
                  onChange={(e) => setNamaKomen(e.target.value)}
                  placeholder="Nama Anda"
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-rose-500"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                  Doa & Ucapan Hangat
                </label>
                <textarea
                  required
                  rows={3}
                  value={isiKomen}
                  onChange={(e) => setIsiKomen(e.target.value)}
                  placeholder="Tuliskan ucapan selamat dan doa untuk kedua mempelai..."
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-rose-500 resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={submitting}
                className={`w-full py-3 rounded-xl ${buttonAccent} text-xs font-bold shadow-lg flex items-center justify-center gap-2 transition-all`}
              >
                <Send className="w-4 h-4" />
                <span>{submitting ? "Mengirimkan Doa..." : "Kirimkan Ucapan & Doa Restu"}</span>
              </button>
            </form>

            {/* Live Comments Feed */}
            <div className="space-y-3 max-h-96 overflow-y-auto pr-1">
              {comments.length === 0 ? (
                <p className="text-slate-500 text-xs text-center py-6">Belum ada ucapan. Jadilah yang pertama memberikan doa restu!</p>
              ) : (
                comments.map((c) => (
                  <div key={c.id_komen} className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800/80 space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-xs text-rose-300">{c.nama_komen}</span>
                      <span className="text-[10px] text-slate-500 font-mono">
                        {new Date(c.created_at).toLocaleDateString("id-ID")}
                      </span>
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed">{c.isi_komen}</p>
                  </div>
                ))
              )}
            </div>
          </section>

          {/* Protokol Kesehatan Section */}
          <section className="py-12 px-6 max-w-3xl mx-auto text-center font-sans">
            <div className={`p-6 rounded-3xl bg-slate-950/60 border border-slate-800 shadow-xl space-y-4`}>
              <div className="flex items-center justify-center gap-2 text-rose-400">
                <ShieldAlert className="w-5 h-5" />
                <h4 className="font-bold text-xs uppercase tracking-wider text-white">Protokol Kesehatan</h4>
              </div>
              <p className="text-[11px] text-slate-400 leading-relaxed max-w-md mx-auto">
                Demi kenyamanan bersama, para tamu undangan dihimbau untuk tetap menjaga kebersihan dan protokol kesehatan selama acara berlangsung.
              </p>
            </div>
          </section>

          {/* Floating Bottom Navigation Bar */}
          <nav className="fixed bottom-4 left-1/2 -translate-x-1/2 z-40 bg-slate-950/90 border border-slate-800 backdrop-blur-xl px-4 py-2 rounded-full shadow-2xl flex items-center gap-4 text-slate-400 font-sans text-xs">
            <a href="#home" className="hover:text-rose-400 transition-colors p-1" title="Home">
              <Heart className="w-4 h-4" />
            </a>
            <a href="#mempelai" className="hover:text-rose-400 transition-colors p-1" title="Mempelai">
              <Users className="w-4 h-4" />
            </a>
            <a href="#acara" className="hover:text-rose-400 transition-colors p-1" title="Acara">
              <Calendar className="w-4 h-4" />
            </a>
            <a href="#cerita" className="hover:text-rose-400 transition-colors p-1" title="Cerita">
              <BookOpen className="w-4 h-4" />
            </a>
            <a href="#hadiah" className="hover:text-rose-400 transition-colors p-1" title="Amplop">
              <Gift className="w-4 h-4" />
            </a>
            <a href="#ucapan" className="hover:text-rose-400 transition-colors p-1" title="Ucapan">
              <MessageSquare className="w-4 h-4" />
            </a>
          </nav>
        </motion.div>
      )}
    </div>
  );
}
