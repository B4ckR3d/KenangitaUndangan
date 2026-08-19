"use client";

import { useEffect, useState } from "react";
import { Calendar, Plus, MapPin, CheckCircle2, AlertCircle, Edit, Trash2, Loader2, X } from "lucide-react";

interface AcaraItem {
  id_acara: number;
  nama_acara: string;
  tgl_acara: string;
  waktu_mulai: string;
  waktu_akhir: string;
  tempat_acara: string;
  alamat_acara: string;
  maps: string;
  set_countdown?: string;
}

export default function AcaraPage() {
  const [acaraList, setAcaraList] = useState<AcaraItem[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [editingItem, setEditingItem] = useState<AcaraItem | null>(null);
  const [formData, setFormData] = useState({
    nama_acara: "",
    tgl_acara: "",
    waktu_mulai: "08:00",
    waktu_akhir: "10:00",
    tempat_acara: "",
    alamat_acara: "",
    maps: "",
    set_countdown: "N",
  });
  const [loading, setLoading] = useState(false);
  const [fetching, setFetching] = useState(true);
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const loadAcara = async () => {
    try {
      setFetching(true);
      const res = await fetch("/api/acara", { credentials: "include" });
      const data = await res.json();
      if (data.success) {
        setAcaraList(data.acara || []);
      } else if (res.status === 401) {
        setError("Sesi login Anda berakhir. Silakan login kembali.");
      }
    } catch (err) {
      console.error("Load Acara error:", err);
    } finally {
      setFetching(false);
    }
  };

  useEffect(() => {
    loadAcara();
  }, []);

  const openAddModal = () => {
    setEditingItem(null);
    setFormData({
      nama_acara: "Akad Nikah",
      tgl_acara: "",
      waktu_mulai: "08:00",
      waktu_akhir: "10:00",
      tempat_acara: "",
      alamat_acara: "",
      maps: "",
      set_countdown: "N",
    });
    setError(null);
    setShowModal(true);
  };

  const openEditModal = (item: AcaraItem) => {
    setEditingItem(item);
    setFormData({
      nama_acara: item.nama_acara,
      tgl_acara: item.tgl_acara || "",
      waktu_mulai: item.waktu_mulai || "08:00",
      waktu_akhir: item.waktu_akhir || "10:00",
      tempat_acara: item.tempat_acara || "",
      alamat_acara: item.alamat_acara || "",
      maps: item.maps || "",
      set_countdown: item.set_countdown || "N",
    });
    setError(null);
    setShowModal(true);
  };

  const handleSaveAcara = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      if (editingItem) {
        const res = await fetch("/api/acara", {
          method: "PUT",
          credentials: "include",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ ...formData, id_acara: editingItem.id_acara }),
        });
        const data = await res.json();
        if (!res.ok) throw new Error(data.error || "Gagal memperbarui acara");
        setSuccess("Jadwal acara berhasil diperbarui!");
      } else {
        const res = await fetch("/api/acara", {
          method: "POST",
          credentials: "include",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });
        const data = await res.json();
        if (!res.ok) throw new Error(data.error || "Gagal menambahkan acara");
        setSuccess("Jadwal acara baru berhasil ditambahkan!");
      }

      setShowModal(false);
      loadAcara();
      setTimeout(() => setSuccess(null), 3500);
    } catch (err: any) {
      setError(err?.message || "Terjadi kesalahan saat menyimpan acara");
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteAcara = async (id: number) => {
    if (!confirm("Hapus jadwal acara ini?")) return;
    try {
      const res = await fetch(`/api/acara?id=${id}`, { method: "DELETE", credentials: "include" });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Gagal menghapus acara");
      setSuccess("Jadwal acara berhasil dihapus");
      loadAcara();
      setTimeout(() => setSuccess(null), 3500);
    } catch (err: any) {
      alert(err?.message || "Gagal menghapus acara");
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between border-b border-slate-800 pb-5">
        <div>
          <h1 className="text-2xl font-bold text-white flex items-center gap-3">
            <Calendar className="w-6 h-6 text-rose-500" /> Jadwal & Lokasi Acara
          </h1>
          <p className="text-slate-400 text-sm mt-1">
            Kelola rincian Akad Nikah, Resepsi, tanggal, jam, dan petunjuk lokasi Google Maps.
          </p>
        </div>
        <button
          onClick={openAddModal}
          className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-600 hover:to-pink-700 text-white font-bold text-xs shadow-lg shadow-rose-500/20 flex items-center gap-2 transition-all"
        >
          <Plus className="w-4 h-4" /> Tambah Jadwal Acara
        </button>
      </div>

      {success && (
        <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold flex items-center gap-2">
          <CheckCircle2 className="w-5 h-5" /> {success}
        </div>
      )}

      {/* Cards List */}
      {fetching ? (
        <div className="p-12 text-center text-slate-500 text-xs flex items-center justify-center gap-2">
          <Loader2 className="w-4 h-4 animate-spin text-rose-400" /> Memuat jadwal acara...
        </div>
      ) : acaraList.length === 0 ? (
        <div className="p-12 text-center text-slate-500 text-xs border border-dashed border-slate-800 rounded-3xl">
          Belum ada jadwal acara. Klik tombol &quot;Tambah Jadwal Acara&quot; di atas.
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {acaraList.map((item) => (
            <div key={item.id_acara} className="p-6 rounded-3xl bg-slate-900 border border-slate-800 space-y-3 relative group">
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase tracking-wider font-bold text-rose-400 bg-rose-500/10 px-3 py-1 rounded-full">
                  {item.nama_acara}
                </span>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono text-slate-400">{item.tgl_acara || "Belum ada tanggal"}</span>
                  <button
                    onClick={() => openEditModal(item)}
                    className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
                    title="Edit Acara"
                  >
                    <Edit className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={() => handleDeleteAcara(item.id_acara)}
                    className="p-1.5 rounded-lg bg-slate-800 hover:bg-rose-500/20 text-slate-400 hover:text-rose-400 transition-colors"
                    title="Hapus Acara"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              <h3 className="text-lg font-bold text-white">{item.tempat_acara || "Tempat belum diatur"}</h3>
              <p className="text-xs text-slate-400 flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-rose-400 shrink-0" /> {item.alamat_acara || "Alamat belum diatur"}
              </p>
              <p className="text-xs font-semibold text-slate-300">
                Waktu: {item.waktu_mulai} - {item.waktu_akhir} WIB
              </p>

              {item.maps && (
                <a
                  href={item.maps}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block text-xs font-semibold text-rose-400 hover:underline pt-2"
                >
                  Lihat di Google Maps →
                </a>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Modal Add / Edit Acara */}
      {showModal && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-800 w-full max-w-lg rounded-3xl p-6 space-y-4 relative">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-6 right-6 text-slate-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            <h2 className="text-lg font-bold text-white">
              {editingItem ? "Edit Jadwal Acara" : "Tambah Acara Baru"}
            </h2>

            {error && (
              <div className="p-3 rounded-xl bg-rose-500/15 border border-rose-500/30 text-rose-300 text-xs">
                {error}
              </div>
            )}

            <form onSubmit={handleSaveAcara} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1">Nama Acara</label>
                <input
                  type="text"
                  required
                  value={formData.nama_acara}
                  onChange={(e) => setFormData({ ...formData, nama_acara: e.target.value })}
                  placeholder="Contoh: Akad Nikah / Resepsi"
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2 text-sm text-white focus:outline-none focus:border-rose-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">Tanggal</label>
                  <input
                    type="date"
                    value={formData.tgl_acara}
                    onChange={(e) => setFormData({ ...formData, tgl_acara: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2 text-sm text-white focus:outline-none focus:border-rose-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">Waktu Mulai - Selesai</label>
                  <div className="grid grid-cols-2 gap-2">
                    <input
                      type="text"
                      required
                      value={formData.waktu_mulai}
                      onChange={(e) => setFormData({ ...formData, waktu_mulai: e.target.value })}
                      placeholder="08:00"
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-rose-500"
                    />
                    <input
                      type="text"
                      required
                      value={formData.waktu_akhir}
                      onChange={(e) => setFormData({ ...formData, waktu_akhir: e.target.value })}
                      placeholder="10:00"
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-rose-500"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1">Nama Tempat / Gedung</label>
                <input
                  type="text"
                  value={formData.tempat_acara}
                  onChange={(e) => setFormData({ ...formData, tempat_acara: e.target.value })}
                  placeholder="Contoh: Masjid Agung / Kediaman Mempelai Wanita"
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2 text-sm text-white focus:outline-none focus:border-rose-500"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1">Alamat Lengkap</label>
                <textarea
                  rows={2}
                  value={formData.alamat_acara}
                  onChange={(e) => setFormData({ ...formData, alamat_acara: e.target.value })}
                  placeholder="Masukkan alamat tempat acara"
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2 text-sm text-white focus:outline-none focus:border-rose-500"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1">Link / URL Google Maps (Opsional)</label>
                <input
                  type="text"
                  value={formData.maps}
                  onChange={(e) => setFormData({ ...formData, maps: e.target.value })}
                  placeholder="https://maps.app.goo.gl/..."
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2 text-sm text-white focus:outline-none focus:border-rose-500"
                />
              </div>

              <div className="flex gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="flex-1 py-2.5 rounded-xl border border-slate-800 bg-slate-950 text-slate-400 text-xs font-bold"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  disabled={loading}
                  className="flex-1 py-2.5 rounded-xl bg-gradient-to-r from-rose-500 to-pink-600 text-white text-xs font-bold shadow-lg shadow-rose-500/20"
                >
                  {loading ? "Menyimpan..." : editingItem ? "Simpan Perubahan" : "Tambah Acara"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
