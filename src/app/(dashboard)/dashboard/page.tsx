"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  Users,
  MessageSquare,
  Calendar,
  ExternalLink,
  Sparkles,
  UserCheck,
  Copy,
  Check,
  Share2,
  Palette,
  Image as ImageIcon,
  Heart,
  ArrowUpRight,
  Clock,
} from "lucide-react";

interface CommentItem {
  id_komen: number;
  nama_komen: string;
  isi_komen: string;
  created_at: string;
}

export default function DashboardOverviewPage() {
  const [comments, setComments] = useState<CommentItem[]>([]);
  const [userSlug, setUserSlug] = useState("demo");
  const [weddingDate, setWeddingDate] = useState("Belum diatur");
  const [totalGuests, setTotalGuests] = useState(0);
  const [loading, setLoading] = useState(true);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    async function loadData() {
      try {
        setLoading(true);
        // 1. Get user session
        const authRes = await fetch("/api/auth/me", { credentials: "include" });
        const authData = await authRes.json();
        if (authData.authenticated && authData.user) {
          setUserSlug(authData.user.slug || "demo");
        }

        // 2. Fetch comments, acara, and guest stats
        const [commRes, acaraRes, tamuRes] = await Promise.all([
          fetch("/api/comments", { credentials: "include" }),
          fetch("/api/acara", { credentials: "include" }),
          fetch("/api/tamu", { credentials: "include" }),
        ]);

        if (commRes.ok) {
          const commData = await commRes.json();
          if (commData.success) setComments(commData.comments || []);
        }

        if (acaraRes.ok) {
          const acaraData = await acaraRes.json();
          if (acaraData.success && acaraData.acara && acaraData.acara.length > 0) {
            const firstDate = acaraData.acara[0].tgl_acara;
            if (firstDate) setWeddingDate(firstDate);
          }
        }

        if (tamuRes.ok) {
          const tamuData = await tamuRes.json();
          if (tamuData.success && tamuData.tamu) {
            setTotalGuests(tamuData.tamu.length);
          }
        }
      } catch (err) {
        console.error("Error loading dashboard data:", err);
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, []);

  const handleCopyLink = () => {
    const fullUrl = `${window.location.origin}/u/${userSlug}`;
    navigator.clipboard.writeText(fullUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleShareWa = () => {
    const fullUrl = `${window.location.origin}/u/${userSlug}`;
    const text = encodeURIComponent(
      `Halo! Kami mengundang Anda ke acara pernikahan kami. Buka tautan undangan digital kami di: ${fullUrl}`
    );
    window.open(`https://api.whatsapp.com/send?text=${text}`, "_blank");
  };

  return (
    <div className="space-y-6 md:space-y-8">
      
      {/* 1. Header Banner & Link Sharing Card */}
      <div className="p-5 md:p-6 rounded-3xl bg-gradient-to-br from-slate-900 via-slate-900/90 to-slate-950 border border-slate-800 shadow-xl space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="p-1.5 rounded-xl bg-rose-500/10 text-rose-400 border border-rose-500/20">
                <Sparkles className="w-4 h-4" />
              </span>
              <h1 className="text-xl md:text-2xl font-black text-white tracking-tight">
                Dashboard Undangan
              </h1>
            </div>
            <p className="text-slate-400 text-xs md:text-sm">
              Kelola data mempelai, buku tamu, RSVP, dan pantau doa restu secara real-time.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <Link
              href={`/u/${userSlug}`}
              target="_blank"
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-2xl bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-600 hover:to-pink-700 text-white text-xs font-bold shadow-lg shadow-rose-500/20 active:scale-95 transition-all"
            >
              <span>Buka Live</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* Live URL Pill Box */}
        <div className="pt-3 border-t border-slate-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-slate-950/60 p-3 rounded-2xl border">
          <div className="flex items-center gap-2 text-xs truncate">
            <span className="text-slate-500 font-medium shrink-0">Link Undangan:</span>
            <span className="font-mono text-rose-400 font-bold truncate">/u/{userSlug}</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyLink}
              className="flex-1 sm:flex-none flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 active:scale-95 text-slate-200 text-xs font-semibold border border-slate-700 transition-all"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? "Tersalin!" : "Salin Link"}</span>
            </button>
            <button
              onClick={handleShareWa}
              className="flex-1 sm:flex-none flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-400 active:scale-95 text-xs font-bold border border-emerald-500/30 transition-all"
            >
              <Share2 className="w-3.5 h-3.5" />
              <span>Share WA</span>
            </button>
          </div>
        </div>
      </div>

      {/* 2. Mobile Bento Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
        <Link
          href="/dashboard/tamu"
          className="p-5 rounded-3xl bg-slate-900/90 hover:bg-slate-900 border border-slate-800/90 hover:border-rose-500/40 flex items-center justify-between shadow-lg active:scale-[0.98] transition-all group"
        >
          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-2xl bg-rose-500/10 border border-rose-500/20 text-rose-400 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
              <UserCheck className="w-6 h-6" />
            </div>
            <div>
              <span className="text-2xl font-black text-white">{totalGuests}</span>
              <p className="text-slate-400 text-xs mt-0.5 font-medium">Tamu Terdaftar</p>
            </div>
          </div>
          <ArrowUpRight className="w-4 h-4 text-slate-600 group-hover:text-rose-400 transition-colors" />
        </Link>

        <div className="p-5 rounded-3xl bg-slate-900/90 border border-slate-800/90 flex items-center gap-3.5 shadow-lg">
          <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
            <MessageSquare className="w-6 h-6" />
          </div>
          <div>
            <span className="text-2xl font-black text-white">{comments.length}</span>
            <p className="text-slate-400 text-xs mt-0.5 font-medium">Ucapan & Restu</p>
          </div>
        </div>

        <Link
          href="/dashboard/acara"
          className="p-5 rounded-3xl bg-slate-900/90 hover:bg-slate-900 border border-slate-800/90 hover:border-amber-500/40 flex items-center justify-between shadow-lg active:scale-[0.98] transition-all group"
        >
          <div className="flex items-center gap-3.5 truncate">
            <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
              <Calendar className="w-6 h-6" />
            </div>
            <div className="truncate">
              <span className="text-base md:text-lg font-black text-white truncate block">
                {weddingDate}
              </span>
              <p className="text-slate-400 text-xs mt-0.5 font-medium">Tanggal Acara</p>
            </div>
          </div>
          <ArrowUpRight className="w-4 h-4 text-slate-600 group-hover:text-amber-400 transition-colors shrink-0" />
        </Link>
      </div>

      {/* 3. Quick Action Buttons (Touch Friendly) */}
      <div>
        <h2 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 px-1">
          Aksi Cepat Undangan
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          <Link
            href="/dashboard/tamu"
            className="p-3.5 bg-slate-900/80 hover:bg-slate-800 border border-slate-800 rounded-2xl flex flex-col items-center justify-center gap-1.5 active:scale-95 transition-all text-center group"
          >
            <div className="w-9 h-9 rounded-xl bg-rose-500/10 text-rose-400 flex items-center justify-center group-hover:scale-110 transition-transform">
              <UserCheck className="w-4 h-4" />
            </div>
            <span className="text-xs font-bold text-slate-200">Kelola Tamu</span>
            <span className="text-[10px] text-slate-400">Buku Tamu & RSVP</span>
          </Link>

          <Link
            href="/dashboard/tampilan"
            className="p-3.5 bg-slate-900/80 hover:bg-slate-800 border border-slate-800 rounded-2xl flex flex-col items-center justify-center gap-1.5 active:scale-95 transition-all text-center group"
          >
            <div className="w-9 h-9 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Palette className="w-4 h-4" />
            </div>
            <span className="text-xs font-bold text-slate-200">Ganti Tema</span>
            <span className="text-[10px] text-slate-400">Desain & Warna</span>
          </Link>

          <Link
            href="/dashboard/gallery"
            className="p-3.5 bg-slate-900/80 hover:bg-slate-800 border border-slate-800 rounded-2xl flex flex-col items-center justify-center gap-1.5 active:scale-95 transition-all text-center group"
          >
            <div className="w-9 h-9 rounded-xl bg-teal-500/10 text-teal-400 flex items-center justify-center group-hover:scale-110 transition-transform">
              <ImageIcon className="w-4 h-4" />
            </div>
            <span className="text-xs font-bold text-slate-200">Album Foto</span>
            <span className="text-[10px] text-slate-400">Galeri Prewedding</span>
          </Link>

          <Link
            href="/dashboard/mempelai"
            className="p-3.5 bg-slate-900/80 hover:bg-slate-800 border border-slate-800 rounded-2xl flex flex-col items-center justify-center gap-1.5 active:scale-95 transition-all text-center group"
          >
            <div className="w-9 h-9 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Heart className="w-4 h-4" />
            </div>
            <span className="text-xs font-bold text-slate-200">Data Pengantin</span>
            <span className="text-[10px] text-slate-400">Profil & Orang Tua</span>
          </Link>
        </div>
      </div>

      {/* 4. Live Guestbook & Doa Restu Feed */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-5 md:p-6 shadow-xl space-y-4">
        <div className="flex items-center justify-between pb-3 border-b border-slate-800">
          <div className="flex items-center gap-2">
            <MessageSquare className="w-4 h-4 text-rose-400" />
            <h2 className="text-sm md:text-base font-bold text-white">
              Buku Tamu & Ucapan Masuk
            </h2>
          </div>
          <span className="text-[10px] md:text-xs text-emerald-400 font-mono flex items-center gap-1.5 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" /> Live Synced
          </span>
        </div>

        {loading ? (
          <p className="text-slate-400 text-xs py-8 text-center">Memuat ucapan...</p>
        ) : comments.length === 0 ? (
          <div className="text-center py-8 space-y-2">
            <div className="w-10 h-10 rounded-2xl bg-slate-800 flex items-center justify-center mx-auto text-slate-500">
              <MessageSquare className="w-5 h-5" />
            </div>
            <p className="text-slate-400 text-xs">Belum ada ucapan dari tamu pada undangan Anda.</p>
          </div>
        ) : (
          <div className="space-y-3 max-h-96 overflow-y-auto pr-1">
            {comments.map((komen) => (
              <div
                key={komen.id_komen}
                className="p-3.5 md:p-4 rounded-2xl bg-slate-950 border border-slate-800/80 space-y-1.5 hover:border-slate-700 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-xl bg-gradient-to-tr from-rose-500/30 to-pink-500/30 border border-rose-500/40 text-rose-300 font-bold text-xs flex items-center justify-center">
                      {komen.nama_komen.charAt(0).toUpperCase()}
                    </div>
                    <span className="font-bold text-xs md:text-sm text-slate-100">
                      {komen.nama_komen}
                    </span>
                  </div>
                  <span className="text-[10px] text-slate-500 flex items-center gap-1 font-mono">
                    <Clock className="w-3 h-3" />
                    {new Date(komen.created_at).toLocaleDateString("id-ID", {
                      day: "numeric",
                      month: "short",
                    })}
                  </span>
                </div>
                <p className="text-slate-300 text-xs leading-relaxed pl-9">
                  {komen.isi_komen}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>

    </div>
  );
}

