"use client";

import { useEffect, useState } from "react";
import { UserCheck, Plus, Copy, Trash2, CheckCircle2, Loader2, AlertCircle } from "lucide-react";

interface TamuItem {
  id_tamu: number;
  nama_tamu: string;
  almt_tamu: string;
}

export default function TamuPage() {
  const [tamuList, setTamuList] = useState<TamuItem[]>([]);
  const [userSlug, setUserSlug] = useState("demo");
  const [namaTamu, setNamaTamu] = useState("");
  const [almtTamu, setAlmtTamu] = useState("");
  const [loading, setLoading] = useState(false);
  const [fetching, setFetching] = useState(true);
  const [copiedId, setCopiedId] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);

  const loadTamu = async () => {
    try {
      setFetching(true);
      const [authRes, tamuRes] = await Promise.all([
        fetch("/api/auth/me", { credentials: "include" }),
        fetch("/api/tamu", { credentials: "include" }),
      ]);

      const authData = await authRes.json();
      if (authData.authenticated && authData.user) {
        setUserSlug(authData.user.slug || "demo");
      }

      const data = await tamuRes.json();
      if (data.success) {
        setTamuList(data.tamu || []);
      } else if (tamuRes.status === 401) {
        setError("Sesi login Anda telah berakhir. Silakan login kembali.");
      }
    } catch (err) {
      console.error("Load Tamu error:", err);
    } finally {
      setFetching(false);
    }
  };

  useEffect(() => {
    loadTamu();
  }, []);

  const handleAddTamu = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!namaTamu) return;
    setLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/tamu", {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nama_tamu: namaTamu, almt_tamu: almtTamu }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Gagal menambahkan tamu");

      setTamuList([data.tamu, ...tamuList]);
      setNamaTamu("");
      setAlmtTamu("");
    } catch (err: any) {
      setError(err?.message || "Terjadi kesalahan saat menambahkan tamu");
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteTamu = async (id: number) => {
    try {
      const res = await fetch(`/api/tamu?id=${id}`, { method: "DELETE", credentials: "include" });
      const data = await res.json();
      if (data.success) {
        setTamuList(tamuList.filter((t) => t.id_tamu !== id));
      }
    } catch (err) {
      console.error("Delete Tamu error:", err);
    }
  };

  const copyLink = (tamu: TamuItem) => {
    const url = `${window.location.origin}/u/${userSlug}?to=${encodeURIComponent(tamu.nama_tamu)}`;
    navigator.clipboard.writeText(url);
    setCopiedId(tamu.id_tamu);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between border-b border-slate-800 pb-5">
        <div>
          <h1 className="text-2xl font-bold text-white flex items-center gap-3">
            <UserCheck className="w-6 h-6 text-rose-500" /> Kelola Daftar Tamu & Link Undangan
          </h1>
          <p className="text-slate-400 text-sm mt-1">
            Buat link undangan khusus dengan nama tamu (misal: <i>to=Budi+Sutrisno</i>) untuk dibagikan via WhatsApp.
          </p>
        </div>
      </div>

      {error && (
        <div className="p-4 rounded-2xl bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs font-semibold flex items-center gap-2">
          <AlertCircle className="w-5 h-5" /> {error}
        </div>
      )}

      {/* Form Add Tamu */}
      <form onSubmit={handleAddTamu} className="p-6 rounded-3xl bg-slate-900 border border-slate-800 space-y-4">
        <h2 className="text-sm font-bold text-rose-400 uppercase tracking-wider">Tambah Tamu Undangan Baru</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-slate-300 mb-1">Nama Tamu</label>
            <input
              type="text"
              required
              value={namaTamu}
              onChange={(e) => setNamaTamu(e.target.value)}
              placeholder="Contoh: Bpk. H. Ahmad & Keluarga"
              className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-rose-500"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-300 mb-1">Alamat / Keterangan (Opsional)</label>
            <input
              type="text"
              value={almtTamu}
              onChange={(e) => setAlmtTamu(e.target.value)}
              placeholder="Contoh: Jakarta / Teman Kantor"
              className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-rose-500"
            />
          </div>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-600 hover:to-pink-700 text-white font-bold text-xs shadow-lg shadow-rose-500/20 flex items-center gap-2 transition-all"
        >
          <Plus className="w-4 h-4" /> {loading ? "Menyimpan..." : "Tambah Tamu"}
        </button>
      </form>

      {/* Tamu List Table */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden shadow-xl">
        {fetching ? (
          <div className="p-12 text-center text-slate-500 text-xs flex items-center justify-center gap-2">
            <Loader2 className="w-4 h-4 animate-spin text-rose-400" /> Memuat daftar tamu...
          </div>
        ) : (
          <table className="w-full text-left text-sm text-slate-300">
            <thead className="bg-slate-950 text-slate-400 text-xs uppercase tracking-wider border-b border-slate-800">
              <tr>
                <th className="p-4 pl-6">Nama Tamu</th>
                <th className="p-4">Alamat / Kota</th>
                <th className="p-4">Link Undangan WA</th>
                <th className="p-4 pr-6 text-right">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800">
              {tamuList.length === 0 ? (
                <tr>
                  <td colSpan={4} className="p-8 text-center text-slate-500 text-xs">
                    Belum ada daftar tamu untuk undangan Anda. Tambahkan nama tamu di form atas.
                  </td>
                </tr>
              ) : (
                tamuList.map((tamu) => (
                  <tr key={tamu.id_tamu} className="hover:bg-slate-800/40 transition-colors">
                    <td className="p-4 pl-6 font-bold text-white">{tamu.nama_tamu}</td>
                    <td className="p-4 text-slate-400">{tamu.almt_tamu || "-"}</td>
                    <td className="p-4 font-mono text-xs text-rose-400 truncate max-w-xs">
                      /u/{userSlug}?to={encodeURIComponent(tamu.nama_tamu)}
                    </td>
                    <td className="p-4 pr-6 text-right space-x-2">
                      <button
                        onClick={() => copyLink(tamu)}
                        className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold inline-flex items-center gap-1.5 transition-colors"
                      >
                        {copiedId === tamu.id_tamu ? (
                          <>
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Copied!
                          </>
                        ) : (
                          <>
                            <Copy className="w-3.5 h-3.5" /> Salin Link
                          </>
                        )}
                      </button>

                      <button
                        onClick={() => handleDeleteTamu(tamu.id_tamu)}
                        className="p-1.5 rounded-lg text-slate-500 hover:text-rose-400 transition-colors"
                        title="Hapus Tamu"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
