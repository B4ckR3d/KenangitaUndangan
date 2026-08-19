"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  Heart,
  LayoutDashboard,
  Users2,
  Calendar,
  Image as ImageIcon,
  BookOpen,
  CreditCard,
  UserCheck,
  Palette,
  Settings,
  LogOut,
  ExternalLink,
  ShieldCheck,
  User,
  Sparkles,
} from "lucide-react";

const navItems = [
  { href: "/dashboard", label: "Overview", icon: LayoutDashboard },
  { href: "/dashboard/mempelai", label: "Data Mempelai", icon: Users2 },
  { href: "/dashboard/acara", label: "Jadwal Acara", icon: Calendar },
  { href: "/dashboard/gallery", label: "Album Foto", icon: ImageIcon },
  { href: "/dashboard/cerita", label: "Cerita Cinta", icon: BookOpen },
  { href: "/dashboard/rekening", label: "Amplop & Bank", icon: CreditCard },
  { href: "/dashboard/tamu", label: "Kelola Tamu", icon: UserCheck },
  { href: "/dashboard/tampilan", label: "Ganti Tema", icon: Palette },
  { href: "/dashboard/pengaturan", label: "Pengaturan", icon: Settings },
  { href: "/dashboard/langganan", label: "Paket & Langganan", icon: Sparkles },
  { href: "/dashboard/users", label: "Kelola Pengguna", icon: ShieldCheck, adminOnly: true },
];

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const router = useRouter();
  const [currentUser, setCurrentUser] = useState<{
    id?: number;
    username?: string;
    email?: string;
    role?: string;
    slug?: string;
  } | null>(null);

  useEffect(() => {
    async function loadUser() {
      try {
        const res = await fetch("/api/auth/me", { credentials: "include" });
        const data = await res.json();
        if (data.authenticated && data.user) {
          setCurrentUser(data.user);
        }
      } catch (err) {
        console.error("Load user error:", err);
      }
    }
    loadUser();
  }, []);

  const handleLogout = () => {
    document.cookie = "token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT";
    router.push("/login");
  };

  const previewSlug = currentUser?.slug || "demo";

  // Filter out admin-only items if user is not admin
  const visibleNavItems = navItems.filter((item) => {
    if (item.adminOnly) {
      return currentUser?.role === "admin";
    }
    return true;
  });

  return (
    <div className="h-screen w-screen bg-slate-950 text-slate-100 font-sans flex overflow-hidden">
      {/* Pinned Left Sidebar */}
      <aside className="w-64 h-screen border-r border-slate-800 bg-slate-900/90 backdrop-blur-xl flex flex-col justify-between shrink-0 select-none z-30">
        {/* Top Header & Profile */}
        <div className="p-5 pb-2 shrink-0 border-b border-slate-800/60">
          <Link href="/" className="flex items-center gap-3 mb-4 px-1 group">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-rose-500 to-pink-500 flex items-center justify-center shadow-lg shadow-rose-500/30 group-hover:scale-105 transition-transform">
              <Heart className="w-5 h-5 text-white fill-white" />
            </div>
            <span className="text-xl font-extrabold text-white">
              Kenangita<span className="text-rose-500">.id</span>
            </span>
          </Link>

          {/* User Profile Info Card */}
          {currentUser && (
            <div className="p-2.5 rounded-2xl bg-slate-950/80 border border-slate-800/80 flex items-center gap-2.5">
              <div
                className={`w-8 h-8 rounded-xl flex items-center justify-center font-bold text-xs text-white shadow-md shrink-0 ${
                  currentUser.role === "admin"
                    ? "bg-gradient-to-tr from-purple-600 to-indigo-600"
                    : "bg-gradient-to-tr from-rose-500 to-pink-500"
                }`}
              >
                {currentUser.username?.charAt(0).toUpperCase() || <User className="w-3.5 h-3.5" />}
              </div>
              <div className="overflow-hidden min-w-0">
                <div className="font-bold text-xs text-white truncate flex items-center gap-1.5">
                  <span className="truncate">{currentUser.username}</span>
                  {currentUser.role === "admin" && (
                    <span className="px-1 py-0.2 rounded bg-purple-500/20 text-purple-300 text-[8px] font-extrabold shrink-0">
                      ADMIN
                    </span>
                  )}
                </div>
                <div className="text-[10px] text-slate-400 truncate">{currentUser.email}</div>
              </div>
            </div>
          )}
        </div>

        {/* Scrollable Navigation Menu */}
        <div className="flex-1 overflow-y-auto px-4 py-3 space-y-1">
          {visibleNavItems.map((item) => {
            const isActive = pathname === item.href;
            const Icon = item.icon;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center justify-between px-3 py-2 rounded-xl text-xs font-semibold transition-all ${
                  isActive
                    ? "bg-rose-500 text-white font-bold shadow-md shadow-rose-500/20"
                    : "text-slate-400 hover:bg-slate-800 hover:text-white"
                }`}
              >
                <div className="flex items-center gap-2.5 truncate">
                  <Icon className="w-4 h-4 shrink-0" />
                  <span className="truncate">{item.label}</span>
                </div>
                {item.adminOnly && (
                  <span className="px-1.5 py-0.5 rounded text-[8px] bg-purple-500/20 text-purple-300 font-bold shrink-0">
                    ADMIN
                  </span>
                )}
              </Link>
            );
          })}
        </div>

        {/* Pinned Bottom Left Footer */}
        <div className="shrink-0 p-4 border-t border-slate-800 bg-slate-950/95 space-y-2 shadow-2xl">
          <Link
            href={`/u/${previewSlug}`}
            target="_blank"
            className="flex items-center justify-between w-full px-3.5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 text-xs font-bold transition-all border border-slate-800 hover:border-rose-500/30 group"
          >
            <div className="flex flex-col text-left truncate">
              <span className="group-hover:text-rose-400 transition-colors">Preview Undangan</span>
              <span className="text-[9px] text-slate-500 font-mono truncate">/u/{previewSlug}</span>
            </div>
            <ExternalLink className="w-3.5 h-3.5 text-rose-400 group-hover:translate-x-0.5 transition-transform shrink-0" />
          </Link>

          <button
            onClick={handleLogout}
            className="flex items-center gap-2.5 w-full px-3.5 py-2.5 rounded-xl bg-slate-900/60 hover:bg-rose-500/10 border border-slate-800/80 hover:border-rose-500/30 text-slate-400 hover:text-rose-400 transition-all text-xs font-semibold text-left"
          >
            <LogOut className="w-4 h-4 shrink-0" />
            <span>Keluar (Logout)</span>
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 h-screen overflow-y-auto p-6 md:p-8 max-w-7xl">
        {children}
      </main>
    </div>
  );
}
