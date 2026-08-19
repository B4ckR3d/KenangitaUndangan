"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  Users,
  Shield,
  ShieldCheck,
  UserPlus,
  Search,
  Filter,
  CheckCircle2,
  XCircle,
  Edit,
  Trash2,
  Lock,
  Mail,
  Phone,
  User,
  Sparkles,
  X,
  Save,
  Check,
  ExternalLink,
  Crown,
  Heart,
  Eye,
  EyeOff,
} from "lucide-react";

interface UserItem {
  id: number;
  username: string;
  email: string;
  hp: string;
  role: string;
  status: number;
  permissions: string;
  id_unik: string;
  created_at: string;
  mempelai_info?: string;
  domain?: string | null;
  paket_name?: string;
}

const ALL_PERMISSIONS = [
  { id: "manage_users", label: "Kelola Pengguna", desc: "Tambah, edit, dan atur hak akses pengguna" },
  { id: "manage_themes", label: "Kelola Tema", desc: "Kelola daftar dan kategori tema undangan" },
  { id: "manage_settings", label: "Pengaturan Sistem", desc: "Konfigurasi gateway & harga paket" },
  { id: "edit_mempelai", label: "Data Mempelai", desc: "Edit data pengantin pria & wanita" },
  { id: "edit_acara", label: "Jadwal Acara", desc: "Edit waktu, tempat, dan peta akad/resepsi" },
  { id: "edit_gallery", label: "Album Foto", desc: "Upload dan kelola galeri foto" },
  { id: "edit_cerita", label: "Cerita Cinta", desc: "Edit perjalanan cinta mempelai" },
  { id: "edit_rekening", label: "Amplop & Bank", desc: "Kelola nomor rekening & QRIS" },
  { id: "edit_tamu", label: "Kelola Tamu", desc: "Generate link undangan tamu WA" },
];

export default function UsersManagementPage() {
  const [users, setUsers] = useState<UserItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [roleFilter, setRoleFilter] = useState("all");
  const [statusFilter, setStatusFilter] = useState("all");

  // Modal State
  const [modalOpen, setModalOpen] = useState(false);
  const [editingUser, setEditingUser] = useState<UserItem | null>(null);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    hp: "",
    password: "",
    role: "user",
    status: 1,
    selectedPermissions: [] as string[],
  });
  const [showModalPassword, setShowModalPassword] = useState(false);
  const [formLoading, setFormLoading] = useState(false);
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);

  const [authDenied, setAuthDenied] = useState(false);

  const fetchUsers = async () => {
    try {
      setLoading(true);
      const res = await fetch("/api/admin/users", { credentials: "include" });
      const data = await res.json();
      if (!res.ok || !data.success) {
        if (res.status === 403 || res.status === 401) {
          setAuthDenied(true);
        }
        return;
      }
      setUsers(data.users);
    } catch (err) {
      console.error("Fetch users error:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const openAddModal = () => {
    setEditingUser(null);
    setFormData({
      username: "",
      email: "",
      hp: "",
      password: "",
      role: "user",
      status: 1,
      selectedPermissions: ["edit_mempelai", "edit_acara", "edit_gallery", "edit_cerita", "edit_rekening", "edit_tamu"],
    });
    setMessage(null);
    setModalOpen(true);
  };

  const openEditModal = (u: UserItem) => {
    setEditingUser(u);
    let parsedPerms: string[] = [];
    if (u.permissions === "all" || u.permissions?.includes("manage_all")) {
      parsedPerms = ALL_PERMISSIONS.map((p) => p.id);
    } else if (u.permissions) {
      try {
        parsedPerms = JSON.parse(u.permissions);
      } catch {
        parsedPerms = u.permissions.split(",").map((s) => s.trim());
      }
    }

    setFormData({
      username: u.username,
      email: u.email,
      hp: u.hp === "-" ? "" : u.hp || "",
      password: "",
      role: u.role || "user",
      status: u.status,
      selectedPermissions: parsedPerms,
    });
    setMessage(null);
    setModalOpen(true);
  };

  const togglePermission = (permId: string) => {
    setFormData((prev) => {
      const exists = prev.selectedPermissions.includes(permId);
      const newPerms = exists
        ? prev.selectedPermissions.filter((p) => p !== permId)
        : [...prev.selectedPermissions, permId];
      return { ...prev, selectedPermissions: newPerms };
    });
  };

  const selectAllPermissions = () => {
    setFormData((prev) => ({
      ...prev,
      selectedPermissions: ALL_PERMISSIONS.map((p) => p.id),
    }));
  };

  const clearAllPermissions = () => {
    setFormData((prev) => ({
      ...prev,
      selectedPermissions: [],
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormLoading(true);
    setMessage(null);

    const isAll = formData.selectedPermissions.length === ALL_PERMISSIONS.length;
    const permissionsPayload = isAll ? "all" : formData.selectedPermissions.join(",");

    try {
      if (editingUser) {
        const res = await fetch("/api/admin/users", {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            id: editingUser.id,
            username: formData.username,
            email: formData.email,
            hp: formData.hp,
            password: formData.password || undefined,
            role: formData.role,
            status: formData.status,
            permissions: permissionsPayload,
          }),
        });
        const data = await res.json();
        if (!res.ok) throw new Error(data.error || "Gagal memperbarui pengguna");

        setMessage({ type: "success", text: "Pengguna berhasil diperbarui!" });
        fetchUsers();
        setTimeout(() => setModalOpen(false), 1000);
      } else {
        if (!formData.password) {
          throw new Error("Password wajib diisi untuk pengguna baru");
        }
        const res = await fetch("/api/admin/users", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            username: formData.username,
            email: formData.email,
            hp: formData.hp,
            password: formData.password,
            role: formData.role,
            status: formData.status,
            permissions: permissionsPayload,
          }),
        });
        const data = await res.json();
        if (!res.ok) throw new Error(data.error || "Gagal membuat pengguna baru");

        setMessage({ type: "success", text: "Pengguna baru berhasil ditambahkan!" });
        fetchUsers();
        setTimeout(() => setModalOpen(false), 1000);
      }
    } catch (err: unknown) {
      if (err instanceof Error) {
        setMessage({ type: "error", text: err.message });
      } else {
        setMessage({ type: "error", text: "Terjadi kesalahan server" });
      }
    } finally {
      setFormLoading(false);
    }
  };

  const handleDelete = async (id: number, username: string) => {
    if (!confirm(`Yakin ingin menghapus pengguna "${username}"?`)) return;

    try {
      const res = await fetch(`/api/admin/users?id=${id}`, {
        method: "DELETE",
      });
      const data = await res.json();
      if (!res.ok) {
        alert(data.error || "Gagal menghapus pengguna");
        return;
      }
      fetchUsers();
    } catch (err) {
      console.error("Delete user error:", err);
    }
  };

  const filteredUsers = users.filter((u) => {
    const matchesSearch =
      u.username?.toLowerCase().includes(search.toLowerCase()) ||
      u.email?.toLowerCase().includes(search.toLowerCase()) ||
      u.hp?.toLowerCase().includes(search.toLowerCase()) ||
      u.mempelai_info?.toLowerCase().includes(search.toLowerCase()) ||
      u.domain?.toLowerCase().includes(search.toLowerCase());

    const matchesRole = roleFilter === "all" || u.role === roleFilter;
    const matchesStatus =
      statusFilter === "all" ||
      (statusFilter === "active" && u.status === 1) ||
      (statusFilter === "inactive" && u.status === 0);

    return matchesSearch && matchesRole && matchesStatus;
  });

  const totalUsers = users.length;
  const totalAdmin = users.filter((u) => u.role === "admin" || u.role === "superadmin").length;
  const totalActive = users.filter((u) => u.status === 1).length;

  const renderRoleBadge = (role: string) => {
    switch (role) {
      case "superadmin":
      case "admin":
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-[10px] font-extrabold uppercase tracking-wider bg-purple-500/15 text-purple-300 border border-purple-500/30">
            <ShieldCheck className="w-3 h-3" /> Administrator
          </span>
        );
      case "vip":
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-[10px] font-extrabold uppercase tracking-wider bg-amber-500/15 text-amber-300 border border-amber-500/30">
            <Crown className="w-3 h-3" /> VIP Diamond
          </span>
        );
      case "demo":
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-[10px] font-extrabold uppercase tracking-wider bg-blue-500/15 text-blue-300 border border-blue-500/30">
            <Sparkles className="w-3 h-3" /> Akun Demo
          </span>
        );
      default:
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-[10px] font-extrabold uppercase tracking-wider bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">
            <User className="w-3 h-3" /> Pengguna
          </span>
        );
    }
  };

  if (authDenied) {
    return (
      <div className="p-8 max-w-lg mx-auto text-center space-y-4 my-12 bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl">
        <div className="w-16 h-16 rounded-2xl bg-rose-500/15 border border-rose-500/30 text-rose-400 mx-auto flex items-center justify-center">
          <Shield className="w-8 h-8" />
        </div>
        <h2 className="text-xl font-bold text-white">Akses Ditolak (Khusus Administrator)</h2>
        <p className="text-slate-400 text-xs leading-relaxed">
          Halaman manajemen pengguna hanya dapat diakses oleh akun Super Administrator sistem Kenangita.
        </p>
        <Link
          href="/dashboard"
          className="inline-block px-6 py-2.5 rounded-xl bg-gradient-to-r from-rose-500 to-pink-600 text-white font-bold text-xs shadow-lg shadow-rose-500/20"
        >
          Kembali ke Overview Dashboard
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-slate-800 pb-6">
        <div>
          <div className="flex items-center gap-3 mb-1">
            <div className="p-2.5 rounded-2xl bg-gradient-to-tr from-purple-600 to-indigo-600 text-white shadow-lg shadow-purple-500/20">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h1 className="text-2xl font-extrabold text-white tracking-tight">
              Manajemen Pengguna & Role Permission
            </h1>
          </div>
          <p className="text-slate-400 text-sm">
            Semua pengguna dari database terdaftar di sini. Anda dapat mengubah role, hak akses fitur, dan status akun secara real-time.
          </p>
        </div>

        <button
          onClick={openAddModal}
          className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-600 hover:to-pink-700 text-white text-sm font-bold shadow-lg shadow-rose-500/25 transition-all hover:scale-[1.02] active:scale-[0.98]"
        >
          <UserPlus className="w-4 h-4" /> Tambah Pengguna Baru
        </button>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        <div className="p-6 rounded-3xl bg-slate-900/90 border border-slate-800 flex items-center justify-between shadow-lg">
          <div>
            <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Total Semua Pengguna</p>
            <h3 className="text-3xl font-extrabold text-white mt-1">{totalUsers}</h3>
          </div>
          <div className="w-12 h-12 rounded-2xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center text-rose-400">
            <Users className="w-6 h-6" />
          </div>
        </div>

        <div className="p-6 rounded-3xl bg-slate-900/90 border border-slate-800 flex items-center justify-between shadow-lg">
          <div>
            <p className="text-xs font-bold text-purple-400 uppercase tracking-wider">Total Administrator</p>
            <h3 className="text-3xl font-extrabold text-purple-300 mt-1">{totalAdmin}</h3>
          </div>
          <div className="w-12 h-12 rounded-2xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400">
            <Shield className="w-6 h-6" />
          </div>
        </div>

        <div className="p-6 rounded-3xl bg-slate-900/90 border border-slate-800 flex items-center justify-between shadow-lg">
          <div>
            <p className="text-xs font-bold text-emerald-400 uppercase tracking-wider">Pengguna Aktif</p>
            <h3 className="text-3xl font-extrabold text-emerald-300 mt-1">{totalActive}</h3>
          </div>
          <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
            <CheckCircle2 className="w-6 h-6" />
          </div>
        </div>
      </div>

      {/* Filter & Search Bar */}
      <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4 shadow-md">
        <div className="relative w-full md:w-80">
          <Search className="w-4 h-4 text-slate-500 absolute left-3.5 top-3" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Cari nama mempelai, username, email..."
            className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-10 pr-4 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-rose-500"
          />
        </div>

        <div className="flex items-center gap-3 w-full md:w-auto">
          <div className="flex items-center gap-2">
            <Filter className="w-3.5 h-3.5 text-slate-400" />
            <select
              value={roleFilter}
              onChange={(e) => setRoleFilter(e.target.value)}
              className="bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-slate-300 focus:outline-none focus:border-rose-500"
            >
              <option value="all">Semua Role</option>
              <option value="admin">Administrator</option>
              <option value="user">User / Pengantin</option>
              <option value="vip">VIP Diamond</option>
              <option value="demo">Demo</option>
            </select>
          </div>

          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-slate-300 focus:outline-none focus:border-rose-500"
          >
            <option value="all">Semua Status</option>
            <option value="active">Aktif</option>
            <option value="inactive">Nonaktif</option>
          </select>
        </div>
      </div>

      {/* User Table */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden shadow-xl">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs text-slate-300">
            <thead className="bg-slate-950 text-slate-400 uppercase tracking-wider border-b border-slate-800">
              <tr>
                <th className="p-4 pl-6">Pengguna & Akun</th>
                <th className="p-4">Data Mempelai / Undangan</th>
                <th className="p-4">Role Sistem</th>
                <th className="p-4">Hak Akses Fitur</th>
                <th className="p-4">Status</th>
                <th className="p-4 pr-6 text-right">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/80">
              {loading ? (
                <tr>
                  <td colSpan={6} className="p-8 text-center text-slate-500">
                    Memuat daftar pengguna dari database SQLite...
                  </td>
                </tr>
              ) : filteredUsers.length === 0 ? (
                <tr>
                  <td colSpan={6} className="p-8 text-center text-slate-500">
                    Tidak ada pengguna yang cocok dengan filter pencarian.
                  </td>
                </tr>
              ) : (
                filteredUsers.map((u) => {
                  const isAllPerms = u.permissions === "all" || u.permissions?.includes("manage_all");
                  return (
                    <tr key={u.id} className="hover:bg-slate-800/40 transition-colors">
                      {/* Pengguna & Akun Info */}
                      <td className="p-4 pl-6">
                        <div className="flex items-center gap-3">
                          <div
                            className={`w-10 h-10 rounded-2xl flex items-center justify-center font-bold text-sm text-white shadow-md shrink-0 ${
                              u.role === "admin"
                                ? "bg-gradient-to-tr from-purple-600 to-indigo-600"
                                : u.role === "vip"
                                ? "bg-gradient-to-tr from-amber-500 to-orange-600"
                                : "bg-gradient-to-tr from-rose-500 to-pink-500"
                            }`}
                          >
                            {u.username?.charAt(0).toUpperCase()}
                          </div>
                          <div>
                            <div className="font-bold text-white text-sm flex items-center gap-2">
                              {u.username}
                              <span className="text-[10px] text-slate-500 font-mono">#{u.id}</span>
                            </div>
                            <div className="text-slate-400 text-xs font-mono">{u.email}</div>
                            {u.hp && u.hp !== "-" && (
                              <div className="text-[11px] text-slate-500 flex items-center gap-1 mt-0.5">
                                <Phone className="w-3 h-3 text-slate-600" /> {u.hp}
                              </div>
                            )}
                          </div>
                        </div>
                      </td>

                      {/* Mempelai & Web Info */}
                      <td className="p-4">
                        <div className="space-y-1">
                          <div className="font-semibold text-slate-200 flex items-center gap-1.5">
                            <Heart className="w-3.5 h-3.5 text-rose-400" />
                            <span>{u.mempelai_info}</span>
                          </div>
                          {u.domain && (
                            <Link
                              href={`/u/${u.domain}`}
                              target="_blank"
                              className="inline-flex items-center gap-1 text-[11px] text-rose-400 hover:underline font-mono"
                            >
                              <span>/u/{u.domain}</span>
                              <ExternalLink className="w-3 h-3" />
                            </Link>
                          )}
                          <div className="text-[10px] text-slate-500">
                            Paket: <span className="text-slate-300 font-medium">{u.paket_name}</span>
                          </div>
                        </div>
                      </td>

                      {/* Role */}
                      <td className="p-4">
                        {renderRoleBadge(u.role)}
                      </td>

                      {/* Hak Akses / Permissions */}
                      <td className="p-4">
                        <div className="space-y-1 max-w-xs">
                          {isAllPerms ? (
                            <span className="inline-block px-2.5 py-0.5 rounded-lg bg-emerald-500/15 text-emerald-300 text-[10px] font-semibold border border-emerald-500/20">
                              ★ Semua Fitur Diizinkan
                            </span>
                          ) : (
                            <div className="flex flex-wrap gap-1">
                              {u.permissions?.split(",").map((p) => (
                                <span
                                  key={p}
                                  className="px-1.5 py-0.5 rounded bg-slate-800 text-slate-300 text-[10px]"
                                >
                                  {p.replace("edit_", "").replace("manage_", "")}
                                </span>
                              ))}
                            </div>
                          )}
                        </div>
                      </td>

                      {/* Status */}
                      <td className="p-4">
                        {u.status === 1 ? (
                          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 font-bold text-[10px]">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" /> Aktif
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-rose-500/15 border border-rose-500/30 text-rose-400 font-bold text-[10px]">
                            <span className="w-1.5 h-1.5 rounded-full bg-rose-400" /> Nonaktif
                          </span>
                        )}
                      </td>

                      {/* Aksi */}
                      <td className="p-4 pr-6 text-right space-x-2">
                        <button
                          onClick={() => openEditModal(u)}
                          className="px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold inline-flex items-center gap-1.5 transition-colors border border-slate-700"
                        >
                          <Edit className="w-3.5 h-3.5 text-purple-400" /> Edit User & Role
                        </button>

                        {u.id !== 999 && (
                          <button
                            onClick={() => handleDelete(u.id, u.username)}
                            className="p-1.5 rounded-xl text-slate-500 hover:text-rose-400 hover:bg-rose-500/10 transition-colors"
                            title="Hapus Pengguna"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        )}
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal Tambah / Edit Pengguna */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative my-8">
            <button
              onClick={() => setModalOpen(false)}
              className="absolute top-6 right-6 p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-all"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="mb-6">
              <h2 className="text-xl font-bold text-white flex items-center gap-2.5">
                {editingUser ? <Edit className="w-5 h-5 text-purple-400" /> : <UserPlus className="w-5 h-5 text-rose-500" />}
                {editingUser ? "Edit Pengguna, Role & Hak Akses" : "Tambah Pengguna Baru"}
              </h2>
              <p className="text-slate-400 text-xs mt-1">
                {editingUser
                  ? `Mengatur data, role, password, dan permission untuk "${editingUser.username}"`
                  : "Buat akun pengguna baru dan tentukan role serta hak akses fiturnya"}
              </p>
            </div>

            {message && (
              <div
                className={`mb-6 p-4 rounded-2xl text-xs font-medium flex items-center gap-3 ${
                  message.type === "success"
                    ? "bg-emerald-500/15 border border-emerald-500/30 text-emerald-300"
                    : "bg-rose-500/15 border border-rose-500/30 text-rose-300"
                }`}
              >
                {message.type === "success" ? <CheckCircle2 className="w-4 h-4" /> : <XCircle className="w-4 h-4" />}
                <span>{message.text}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Username */}
                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                    Username
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-500 absolute left-3.5 top-3" />
                    <input
                      type="text"
                      required
                      value={formData.username}
                      onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                      placeholder="Username akun"
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-10 pr-4 py-2.5 text-xs text-white focus:outline-none focus:border-rose-500"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                    Email
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-slate-500 absolute left-3.5 top-3" />
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="contoh@gmail.com"
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-10 pr-4 py-2.5 text-xs text-white focus:outline-none focus:border-rose-500"
                    />
                  </div>
                </div>

                {/* No HP */}
                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                    No. WhatsApp / HP
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-500 absolute left-3.5 top-3" />
                    <input
                      type="text"
                      value={formData.hp}
                      onChange={(e) => setFormData({ ...formData, hp: e.target.value })}
                      placeholder="08123456789"
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-10 pr-4 py-2.5 text-xs text-white focus:outline-none focus:border-rose-500"
                    />
                  </div>
                </div>

                {/* Password */}
                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                    {editingUser ? "Password Baru (Opsional)" : "Password Akun"}
                  </label>
                  <div className="relative">
                    <Lock className="w-4 h-4 text-slate-500 absolute left-3.5 top-3" />
                    <input
                      type={showModalPassword ? "text" : "password"}
                      value={formData.password}
                      onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                      placeholder={editingUser ? "Kosongkan jika tidak diganti" : "Minimal 6 karakter"}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-10 pr-10 py-2.5 text-xs text-white focus:outline-none focus:border-rose-500"
                    />
                    <button
                      type="button"
                      onClick={() => setShowModalPassword(!showModalPassword)}
                      className="absolute right-3.5 top-2.5 text-slate-500 hover:text-slate-300 transition-colors focus:outline-none"
                      title={showModalPassword ? "Sembunyikan password" : "Tampilkan password"}
                    >
                      {showModalPassword ? (
                        <EyeOff className="w-4 h-4 text-rose-400" />
                      ) : (
                        <Eye className="w-4 h-4" />
                      )}
                    </button>
                  </div>
                </div>

                {/* Role Selector */}
                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                    Pilih Role Pengguna
                  </label>
                  <select
                    value={formData.role}
                    onChange={(e) => {
                      const newRole = e.target.value;
                      setFormData({
                        ...formData,
                        role: newRole,
                        selectedPermissions:
                          newRole === "admin"
                            ? ALL_PERMISSIONS.map((p) => p.id)
                            : formData.selectedPermissions,
                      });
                    }}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-rose-500"
                  >
                    <option value="user">User Biasa (Pembuat Undangan)</option>
                    <option value="admin">Administrator (Akses Penuh / Pengelola)</option>
                    <option value="vip">VIP Member (Diamond Package)</option>
                    <option value="demo">Demo Account</option>
                  </select>
                </div>

                {/* Status */}
                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                    Status Akun
                  </label>
                  <select
                    value={formData.status}
                    onChange={(e) => setFormData({ ...formData, status: parseInt(e.target.value, 10) })}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-rose-500"
                  >
                    <option value={1}>Aktif (Dapat Login & Akses Dashboard)</option>
                    <option value={0}>Nonaktif (Diblokir / Suspend)</option>
                  </select>
                </div>
              </div>

              {/* Granular Permissions Section */}
              <div className="pt-4 border-t border-slate-800">
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <h3 className="text-xs font-bold text-slate-200 uppercase tracking-wider">
                      Hak Akses Fitur (Permissions)
                    </h3>
                    <p className="text-slate-400 text-[11px]">
                      Pilih fitur apa saja yang diizinkan untuk diakses oleh role pengguna ini.
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={selectAllPermissions}
                      className="px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-[10px] font-semibold"
                    >
                      Pilih Semua
                    </button>
                    <button
                      type="button"
                      onClick={clearAllPermissions}
                      className="px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 text-[10px]"
                    >
                      Hapus Semua
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 max-h-56 overflow-y-auto pr-1">
                  {ALL_PERMISSIONS.map((perm) => {
                    const isSelected = formData.selectedPermissions.includes(perm.id);
                    return (
                      <div
                        key={perm.id}
                        onClick={() => togglePermission(perm.id)}
                        className={`p-3 rounded-2xl border cursor-pointer transition-all flex items-start gap-3 select-none ${
                          isSelected
                            ? "bg-purple-950/20 border-purple-500/40 text-white"
                            : "bg-slate-950/60 border-slate-800 text-slate-400 hover:border-slate-700"
                        }`}
                      >
                        <div
                          className={`w-4 h-4 rounded-md mt-0.5 flex items-center justify-center shrink-0 border transition-colors ${
                            isSelected
                              ? "bg-purple-600 border-purple-500 text-white"
                              : "border-slate-700 bg-slate-900"
                          }`}
                        >
                          {isSelected && <Check className="w-3 h-3" />}
                        </div>
                        <div>
                          <div className="text-xs font-bold">{perm.label}</div>
                          <div className="text-[10px] text-slate-500 leading-tight">{perm.desc}</div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Submit Buttons */}
              <div className="pt-4 border-t border-slate-800 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setModalOpen(false)}
                  className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-bold transition-all"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  disabled={formLoading}
                  className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-600 hover:to-pink-700 text-white text-xs font-bold shadow-lg shadow-rose-500/20 flex items-center gap-2"
                >
                  <Save className="w-4 h-4" />
                  {formLoading ? "Menyimpan..." : editingUser ? "Simpan Perubahan" : "Buat Pengguna"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
