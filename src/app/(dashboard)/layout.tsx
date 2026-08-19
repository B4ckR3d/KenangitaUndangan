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
  Menu,
  X,
  Plus,
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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

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
    <div className="min-h-screen w-full bg-slate-950 text-slate-100 font-sans flex flex-col md:flex-row overflow-x-hidden">
      
      {/* ========================================================================= */}
      {/* 1. MOBILE TOP APP BAR (Only on Mobile screens < md)                       */}
      {/* ========================================================================= */}
      <header className="md:hidden fixed top-0 left-0 right-0 h-16 z-40 bg-slate-950/85 backdrop-blur-xl border-b border-slate-800/80 px-4 flex items-center justify-between">
        <Link href="/dashboard" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-rose-500 to-pink-500 flex items-center justify-center shadow-md shadow-rose-500/30">
            <Heart className="w-4 h-4 text-white fill-white" />
          </div>
          <span className="text-base font-extrabold text-white">
            Kenangita<span className="text-rose-500">.id</span>
          </span>
        </Link>

        <div className="flex items-center gap-2">
          <Link
            href={`/u/${previewSlug}`}
            target="_blank"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs font-bold active:scale-95 transition-all"
          >
            <span>Live</span>
            <ExternalLink className="w-3 h-3" />
          </Link>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Mobile Menu"
            className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 active:scale-90 transition-transform"
          >
            {mobileMenuOpen ? <X className="w-5 h-5 text-rose-400" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* ========================================================================= */}
      {/* 2. MOBILE SLIDE-OVER DRAWER (Sheet)                                       */}
      {/* ========================================================================= */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-50 flex">
          {/* Backdrop */}
          <div
            onClick={() => setMobileMenuOpen(false)}
            className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm transition-opacity"
          />

          {/* Drawer Content */}
          <div className="relative w-4/5 max-w-xs bg-slate-900 border-r border-slate-800 h-full flex flex-col justify-between p-5 z-10 shadow-2xl animate-in slide-in-from-left duration-200">
            <div>
              {/* Header inside drawer */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-rose-500 to-pink-500 flex items-center justify-center shadow-md">
                    <Heart className="w-4 h-4 text-white fill-white" />
                  </div>
                  <span className="font-extrabold text-sm text-white">Menu Undangan</span>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1 rounded-lg text-slate-400 hover:text-white"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* User badge inside drawer */}
              {currentUser && (
                <div className="my-3 p-2.5 rounded-2xl bg-slate-950 border border-slate-800 flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-xl bg-rose-500 text-white font-bold text-xs flex items-center justify-center shrink-0">
                    {currentUser.username?.charAt(0).toUpperCase() || <User className="w-3.5 h-3.5" />}
                  </div>
                  <div className="truncate">
                    <div className="font-bold text-xs text-white truncate">{currentUser.username}</div>
                    <div className="text-[10px] text-slate-400 truncate">{currentUser.email}</div>
                  </div>
                </div>
              )}

              {/* Nav List */}
              <div className="space-y-1 mt-2 max-h-[calc(100vh-280px)] overflow-y-auto pr-1">
                {visibleNavItems.map((item) => {
                  const isActive = pathname === item.href;
                  const Icon = item.icon;
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-semibold transition-all ${
                        isActive
                          ? "bg-rose-500 text-white font-bold shadow-md shadow-rose-500/20"
                          : "text-slate-300 hover:bg-slate-800"
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <Icon className="w-4 h-4 shrink-0" />
                        <span>{item.label}</span>
                      </div>
                      {item.adminOnly && (
                        <span className="px-1.5 py-0.5 rounded text-[8px] bg-purple-500/20 text-purple-300 font-bold">
                          ADMIN
                        </span>
                      )}
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Bottom Actions inside drawer */}
            <div className="pt-4 border-t border-slate-800 space-y-2">
              <Link
                href={`/u/${previewSlug}`}
                target="_blank"
                className="flex items-center justify-between w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-200 text-xs font-bold"
              >
                <span>Preview Undangan</span>
                <ExternalLink className="w-3.5 h-3.5 text-rose-400" />
              </Link>
              <button
                onClick={handleLogout}
                className="flex items-center gap-2 w-full px-3.5 py-2.5 rounded-xl bg-rose-500/10 text-rose-400 text-xs font-bold"
              >
                <LogOut className="w-4 h-4" />
                <span>Keluar (Logout)</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 3. DESKTOP PINNED SIDEBAR (Hidden on Mobile < md)                          */}
      {/* ========================================================================= */}
      <aside className="hidden md:flex md:w-64 md:h-screen md:sticky md:top-0 border-r border-slate-800 bg-slate-900/90 backdrop-blur-xl flex-col justify-between shrink-0 select-none z-30">
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

      {/* ========================================================================= */}
      {/* 4. MAIN CONTENT AREA (Responsive Padding for Mobile Top & Bottom Nav)      */}
      {/* ========================================================================= */}
      <main className="flex-1 w-full min-h-screen pt-20 pb-28 px-4 md:pt-8 md:pb-8 md:px-8 max-w-7xl mx-auto overflow-y-auto">
        {children}
      </main>

      {/* ========================================================================= */}
      {/* 5. STICKY MOBILE BOTTOM NAVIGATION BAR (Thumb Zone Optimized)              */}
      {/* ========================================================================= */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 h-16 bg-slate-950/90 backdrop-blur-xl border-t border-slate-800/90 px-4 flex items-center justify-around z-40 shadow-2xl">
        <Link
          href="/dashboard"
          className={`flex flex-col items-center gap-1 text-[10px] transition-colors ${
            pathname === "/dashboard" ? "text-rose-400 font-bold" : "text-slate-400 hover:text-slate-200"
          }`}
        >
          <LayoutDashboard className="w-4 h-4" />
          <span>Beranda</span>
        </Link>

        <Link
          href="/dashboard/mempelai"
          className={`flex flex-col items-center gap-1 text-[10px] transition-colors ${
            pathname === "/dashboard/mempelai" ? "text-rose-400 font-bold" : "text-slate-400 hover:text-slate-200"
          }`}
        >
          <Users2 className="w-4 h-4" />
          <span>Mempelai</span>
        </Link>

        {/* Elevated Center Action (Preview Undangan Live) */}
        <Link
          href={`/u/${previewSlug}`}
          target="_blank"
          aria-label="Buka Live Undangan"
          className="w-12 h-12 -mt-6 rounded-full bg-gradient-to-tr from-rose-500 to-pink-600 text-white flex items-center justify-center shadow-lg shadow-rose-500/40 border-4 border-slate-950 active:scale-90 transition-transform font-bold"
        >
          <ExternalLink className="w-5 h-5 stroke-[2.5]" />
        </Link>

        <Link
          href="/dashboard/tamu"
          className={`flex flex-col items-center gap-1 text-[10px] transition-colors ${
            pathname === "/dashboard/tamu" ? "text-rose-400 font-bold" : "text-slate-400 hover:text-slate-200"
          }`}
        >
          <UserCheck className="w-4 h-4" />
          <span>Tamu</span>
        </Link>

        <button
          onClick={() => setMobileMenuOpen(true)}
          className={`flex flex-col items-center gap-1 text-[10px] transition-colors ${
            mobileMenuOpen ? "text-rose-400 font-bold" : "text-slate-400 hover:text-slate-200"
          }`}
        >
          <Menu className="w-4 h-4" />
          <span>Lainnya</span>
        </button>
      </nav>

    </div>
  );
}
