"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Users, MessageSquare, Calendar, ExternalLink, Sparkles, UserCheck } from "lucide-react";

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

  return (
    <div className="space-y-8">
      {/* Header Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-slate-800 pb-6">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="p-1.5 rounded-lg bg-rose-500/10 text-rose-400">
              <Sparkles className="w-5 h-5" />
            </span>
            <h1 className="text-2xl font-extrabold text-white tracking-tight">
              Overview Dashboard
            </h1>
          </div>
          <p className="text-slate-400 text-sm">
            Pantau statistik ucapan tamu, buku tamu, dan status pernikahan Anda.
          </p>
        </div>

        <Link
          href={`/u/${userSlug}`}
          target="_blank"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-600 hover:to-pink-700 text-white text-xs font-bold shadow-lg shadow-rose-500/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
        >
          <span>Buka Undangan Live</span>
          <ExternalLink className="w-4 h-4" />
        </Link>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div className="p-6 rounded-3xl bg-slate-900/90 border border-slate-800 flex items-center gap-4 shadow-lg">
          <div className="w-12 h-12 rounded-2xl bg-rose-500/10 border border-rose-500/20 text-rose-400 flex items-center justify-center">
            <UserCheck className="w-6 h-6" />
          </div>
          <div>
            <span className="text-2xl font-extrabold text-white">{totalGuests}</span>
            <p className="text-slate-400 text-xs mt-0.5">Total Tamu Undangan</p>
          </div>
        </div>

        <div className="p-6 rounded-3xl bg-slate-900/90 border border-slate-800 flex items-center gap-4 shadow-lg">
          <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center">
            <MessageSquare className="w-6 h-6" />
          </div>
          <div>
            <span className="text-2xl font-extrabold text-white">{comments.length}</span>
            <p className="text-slate-400 text-xs mt-0.5">Ucapan & Doa Restu</p>
          </div>
        </div>

        <div className="p-6 rounded-3xl bg-slate-900/90 border border-slate-800 flex items-center gap-4 shadow-lg">
          <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center">
            <Calendar className="w-6 h-6" />
          </div>
          <div>
            <span className="text-2xl font-extrabold text-white truncate block max-w-[150px]">{weddingDate}</span>
            <p className="text-slate-400 text-xs mt-0.5">Tanggal Acara Utama</p>
          </div>
        </div>
      </div>

      {/* Live Guestbook Table */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-xl">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-bold text-white flex items-center gap-2">
            <MessageSquare className="w-5 h-5 text-rose-400" /> Digital Guestbook (Ucapan Terbaru)
          </h2>
          <span className="text-xs text-emerald-400 font-mono flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" /> SQLite Database Synced
          </span>
        </div>

        {loading ? (
          <p className="text-slate-400 text-sm py-8 text-center">Memuat ucapan...</p>
        ) : comments.length === 0 ? (
          <p className="text-slate-400 text-sm py-8 text-center">Belum ada ucapan dari tamu pada undangan Anda.</p>
        ) : (
          <div className="space-y-4 max-h-96 overflow-y-auto pr-1">
            {comments.map((komen) => (
              <div key={komen.id_komen} className="p-4 rounded-2xl bg-slate-950 border border-slate-800/80">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-bold text-sm text-rose-300">{komen.nama_komen}</span>
                  <span className="text-xs text-slate-500">{new Date(komen.created_at).toLocaleDateString("id-ID")}</span>
                </div>
                <p className="text-slate-300 text-sm leading-relaxed">{komen.isi_komen}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
