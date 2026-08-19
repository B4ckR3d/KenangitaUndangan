"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  Heart,
  Lock,
  Mail,
  ArrowRight,
  AlertCircle,
  Eye,
  EyeOff,
  User,
  Phone,
  Sparkles,
  CheckCircle2,
  Globe,
  Palette,
  Loader2,
  RefreshCw,
  X,
  ShieldCheck,
  ChevronRight,
  ChevronLeft,
} from "lucide-react";

interface ThemeItem {
  id: number;
  nama_theme: string;
  kode_theme: string;
  category?: { name: string; slug: string } | null;
}

export default function LoginPage() {
  const router = useRouter();

  // Active Tab: 'login' | 'register'
  const [activeTab, setActiveTab] = useState<"login" | "register">("login");

  // Login State
  const [loginMode, setLoginMode] = useState<"password" | "otp">("password");
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  // Register Form State
  const [registerStep, setRegisterStep] = useState<1 | 2 | 3>(1);
  const [regEmail, setRegEmail] = useState("");
  const [regUsername, setRegUsername] = useState("");
  const [regPassword, setRegPassword] = useState("");
  const [regConfirmPassword, setRegConfirmPassword] = useState("");
  const [showRegPassword, setShowRegPassword] = useState(false);
  const [regHp, setRegHp] = useState("");

  // Mempelai State
  const [namaPria, setNamaPria] = useState("");
  const [panggilanPria, setPanggilanPria] = useState("");
  const [namaWanita, setNamaWanita] = useState("");
  const [panggilanWanita, setPanggilanWanita] = useState("");

  // Slug & Theme Selection State
  const [slug, setSlug] = useState("");
  const [isSlugChecking, setIsSlugChecking] = useState(false);
  const [slugAvailable, setSlugAvailable] = useState<boolean | null>(null);
  const [slugError, setSlugError] = useState<string | null>(null);
  const [selectedTheme, setSelectedTheme] = useState("hwflower");
  const [themesList, setThemesList] = useState<ThemeItem[]>([]);
  const [loadingThemes, setLoadingThemes] = useState(false);

  // OTP Modal State
  const [showOtpModal, setShowOtpModal] = useState(false);
  const [otpAction, setOtpAction] = useState<"register" | "login">("register");
  const [otpTargetEmail, setOtpTargetEmail] = useState("");
  const [otpCode, setOtpCode] = useState(["", "", "", "", "", ""]);
  const [otpResendCooldown, setOtpResendCooldown] = useState(60);
  const [otpLoading, setOtpLoading] = useState(false);
  const [otpFeedbackMessage, setOtpFeedbackMessage] = useState<string | null>(null);
  const otpInputRefs = useRef<(HTMLInputElement | null)[]>([]);

  // General Status
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  // Load available themes from API
  useEffect(() => {
    async function fetchThemes() {
      setLoadingThemes(true);
      try {
        const res = await fetch("/api/themes");
        if (res.ok) {
          const data = await res.json();
          if (data.themes && data.themes.length > 0) {
            setThemesList(data.themes);
            setSelectedTheme(data.themes[0].nama_theme || "hwflower");
          }
        }
      } catch (err) {
        console.error("Failed to load themes:", err);
      } finally {
        setLoadingThemes(false);
      }
    }
    fetchThemes();
  }, []);

  // Auto-generate suggested slug when bride/groom names change
  useEffect(() => {
    if (panggilanPria && panggilanWanita && !slug) {
      const generated = `${panggilanPria}-${panggilanWanita}`
        .toLowerCase()
        .replace(/[^a-z0-9-]/g, "")
        .replace(/-+/g, "-");
      setSlug(generated);
    }
  }, [panggilanPria, panggilanWanita, slug]);

  // Debounced check slug availability
  useEffect(() => {
    if (!slug || slug.length < 3) {
      setSlugAvailable(null);
      setSlugError(null);
      return;
    }

    const timer = setTimeout(async () => {
      setIsSlugChecking(true);
      try {
        const res = await fetch(
          `/api/auth/check-slug?slug=${encodeURIComponent(slug)}`
        );
        const data = await res.json();
        if (data.available) {
          setSlugAvailable(true);
          setSlugError(null);
        } else {
          setSlugAvailable(false);
          setSlugError(data.error || "Subfolder tidak tersedia");
        }
      } catch {
        setSlugAvailable(null);
      } finally {
        setIsSlugChecking(false);
      }
    }, 450);

    return () => clearTimeout(timer);
  }, [slug]);

  // OTP Timer Countdown
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (showOtpModal && otpResendCooldown > 0) {
      timer = setInterval(() => {
        setOtpResendCooldown((prev) => prev - 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [showOtpModal, otpResendCooldown]);

  // Helper safe JSON fetch
  const safeFetchJson = async (url: string, options: RequestInit) => {
    const res = await fetch(url, options);
    let data: any = {};
    try {
      const text = await res.text();
      data = text ? JSON.parse(text) : {};
    } catch {
      data = { error: "Respon server tidak valid" };
    }
    return { ok: res.ok, status: res.status, data };
  };

  // Handle Standard Login
  const handleLoginSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);
    setLoading(true);

    try {
      if (loginMode === "password") {
        const { ok, data } = await safeFetchJson("/api/auth/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ identifier, password }),
        });

        if (!ok) {
          throw new Error(data.error || "Gagal masuk ke akun");
        }

        setSuccess("Login berhasil! Mengarahkan ke dashboard...");
        setTimeout(() => {
          router.push("/dashboard");
          router.refresh();
        }, 600);
      } else {
        // OTP Login request
        if (!identifier.includes("@")) {
          throw new Error("Masukkan alamat email yang valid untuk login dengan OTP");
        }

        const { ok, data } = await safeFetchJson("/api/auth/otp/send", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            action: "login",
            email: identifier.trim(),
          }),
        });

        if (!ok) {
          throw new Error(data.error || "Gagal mengirim kode OTP");
        }

        setOtpAction("login");
        setOtpTargetEmail(identifier.trim());
        setOtpCode(["", "", "", "", "", ""]);
        setOtpResendCooldown(60);
        setOtpFeedbackMessage(data.message || "Kode OTP telah dikirim ke email");
        setShowOtpModal(true);
      }
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Terjadi kesalahan saat proses login");
      }
    } finally {
      setLoading(false);
    }
  };

  // Handle Registration - Trigger OTP Send
  const handleRegisterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    // Validation
    if (!regEmail || !regUsername || !regPassword) {
      setError("Email, username, dan password wajib diisi");
      setRegisterStep(1);
      return;
    }

    if (regPassword.length < 6) {
      setError("Password minimal terdiri dari 6 karakter");
      setRegisterStep(1);
      return;
    }

    if (regPassword !== regConfirmPassword) {
      setError("Konfirmasi password tidak cocok");
      setRegisterStep(1);
      return;
    }

    if (!namaPria || !panggilanPria || !namaWanita || !panggilanWanita) {
      setError("Silakan lengkapi data kedua calon mempelai");
      setRegisterStep(2);
      return;
    }

    if (!slug) {
      setError("Silakan tentukan nama subfolder / tautan undangan");
      setRegisterStep(3);
      return;
    }

    if (slugAvailable === false) {
      setError("Subfolder yang dipilih sudah digunakan. Silakan gunakan nama lain.");
      setRegisterStep(3);
      return;
    }

    setLoading(true);

    const payload = {
      username: regUsername.trim(),
      email: regEmail.toLowerCase().trim(),
      password: regPassword,
      hp: regHp.trim(),
      slug: slug.toLowerCase().trim(),
      theme: selectedTheme,
      mempelai: {
        nama_pria: namaPria.trim(),
        nama_panggilan_pria: panggilanPria.trim(),
        nama_wanita: namaWanita.trim(),
        nama_panggilan_wanita: panggilanWanita.trim(),
      },
    };

    try {
      const { ok, data } = await safeFetchJson("/api/auth/otp/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          action: "register",
          email: regEmail.toLowerCase().trim(),
          username: regUsername.trim(),
          slug: slug.toLowerCase().trim(),
          payload,
        }),
      });

      if (!ok) {
        throw new Error(data.error || "Gagal mengirim kode OTP pendaftaran");
      }

      setOtpAction("register");
      setOtpTargetEmail(regEmail.toLowerCase().trim());
      setOtpCode(["", "", "", "", "", ""]);
      setOtpResendCooldown(60);
      setOtpFeedbackMessage(data.message || "Kode OTP telah dikirim ke email");
      setShowOtpModal(true);
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Terjadi kesalahan saat memulai pendaftaran");
      }
    } finally {
      setLoading(false);
    }
  };

  // Handle OTP Code Change
  const handleOtpDigitChange = (index: number, val: string) => {
    const cleanVal = val.replace(/[^0-9]/g, "");
    const newCode = [...otpCode];

    if (cleanVal.length > 1) {
      // Paste handling
      const digits = cleanVal.slice(0, 6).split("");
      for (let i = 0; i < 6; i++) {
        newCode[i] = digits[i] || "";
      }
      setOtpCode(newCode);
      const nextIndex = Math.min(digits.length, 5);
      otpInputRefs.current[nextIndex]?.focus();
      return;
    }

    newCode[index] = cleanVal;
    setOtpCode(newCode);

    if (cleanVal && index < 5) {
      otpInputRefs.current[index + 1]?.focus();
    }
  };

  // Handle OTP Input Keydown (Backspace)
  const handleOtpKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === "Backspace" && !otpCode[index] && index > 0) {
      otpInputRefs.current[index - 1]?.focus();
    }
  };

  // Handle OTP Resend
  const handleResendOtp = async () => {
    if (otpResendCooldown > 0) return;
    setOtpLoading(true);
    setError(null);

    try {
      const { ok, data } = await safeFetchJson("/api/auth/otp/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          action: otpAction,
          email: otpTargetEmail,
          username: regUsername,
          slug,
        }),
      });

      if (!ok) {
        throw new Error(data.error || "Gagal mengirim ulang OTP");
      }

      setOtpResendCooldown(60);
      setOtpFeedbackMessage("Kode OTP baru berhasil dikirim!");
    } catch (err: any) {
      setError(err?.message || "Gagal mengirim ulang OTP");
    } finally {
      setOtpLoading(false);
    }
  };

  // Handle OTP Verify & Complete Setup
  const handleVerifyOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    const fullCode = otpCode.join("");
    if (fullCode.length !== 6) {
      setError("Masukkan 6 digit kode OTP secara lengkap");
      return;
    }

    setOtpLoading(true);
    setError(null);

    const payload =
      otpAction === "register"
        ? {
            username: regUsername.trim(),
            email: regEmail.toLowerCase().trim(),
            password: regPassword,
            hp: regHp.trim(),
            slug: slug.toLowerCase().trim(),
            theme: selectedTheme,
            mempelai: {
              nama_pria: namaPria.trim(),
              nama_panggilan_pria: panggilanPria.trim(),
              nama_wanita: namaWanita.trim(),
              nama_panggilan_wanita: panggilanWanita.trim(),
            },
          }
        : undefined;

    try {
      const { ok, data } = await safeFetchJson("/api/auth/otp/verify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: otpTargetEmail,
          code: fullCode,
          action: otpAction,
          payload,
        }),
      });

      if (!ok) {
        throw new Error(data.error || "Verifikasi OTP gagal");
      }

      setShowOtpModal(false);
      setSuccess(
        otpAction === "register"
          ? "🎉 Selamat! Undangan dan akun Anda siap. Mengarahkan ke dashboard..."
          : "Login berhasil! Mengarahkan ke dashboard..."
      );

      setTimeout(() => {
        router.push("/dashboard");
        router.refresh();
      }, 800);
    } catch (err: any) {
      setError(err?.message || "Terjadi kesalahan saat memverifikasi OTP");
    } finally {
      setOtpLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex items-center justify-center p-4 md:p-6 relative overflow-x-hidden font-sans">
      {/* Dynamic Background Gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(244,63,94,0.14),transparent_60%)] pointer-events-none" />
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-rose-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-pink-600/15 rounded-full blur-3xl pointer-events-none" />

      <div className="w-full max-w-xl relative z-10 my-8">
        {/* Brand Header */}
        <div className="text-center mb-6">
          <Link href="/" className="inline-flex items-center gap-3 group mb-3">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-rose-500 via-pink-500 to-rose-600 flex items-center justify-center shadow-xl shadow-rose-500/30 group-hover:scale-105 transition-all">
              <Heart className="w-6 h-6 text-white fill-white" />
            </div>
            <span className="text-3xl font-extrabold bg-gradient-to-r from-white via-slate-100 to-slate-400 bg-clip-text text-transparent">
              Kenangita<span className="text-rose-500">.id</span>
            </span>
          </Link>
          <h2 className="text-2xl font-bold text-white tracking-tight">
            {activeTab === "login" ? "Portal Masuk Sistem" : "Buat Undangan Digital"}
          </h2>
          <p className="text-slate-400 text-xs md:text-sm mt-1">
            {activeTab === "login"
              ? "Masuk untuk mengelola undangan & sistem Anda"
              : "Daftar instan, pilih tema, dan aktifkan undangan digital Anda"}
          </p>
        </div>

        {/* Top Tab Switcher */}
        <div className="p-1.5 bg-slate-900/90 border border-slate-800 rounded-2xl flex items-center mb-6 shadow-xl backdrop-blur-md">
          <button
            type="button"
            onClick={() => {
              setActiveTab("login");
              setError(null);
              setSuccess(null);
            }}
            className={`flex-1 py-2.5 rounded-xl font-bold text-xs transition-all flex items-center justify-center gap-2 ${
              activeTab === "login"
                ? "bg-gradient-to-r from-rose-500 to-pink-600 text-white shadow-lg shadow-rose-500/25"
                : "text-slate-400 hover:text-white"
            }`}
          >
            <Lock className="w-4 h-4" /> Masuk Akun
          </button>
          <button
            type="button"
            onClick={() => {
              setActiveTab("register");
              setError(null);
              setSuccess(null);
            }}
            className={`flex-1 py-2.5 rounded-xl font-bold text-xs transition-all flex items-center justify-center gap-2 ${
              activeTab === "register"
                ? "bg-gradient-to-r from-rose-500 to-pink-600 text-white shadow-lg shadow-rose-500/25"
                : "text-slate-400 hover:text-white"
            }`}
          >
            <Sparkles className="w-4 h-4 text-rose-300" /> Buat Undangan Baru
          </button>
        </div>

        {/* Global Feedback Banner */}
        {error && (
          <div className="mb-6 p-4 rounded-2xl bg-rose-500/15 border border-rose-500/30 text-rose-300 text-xs font-medium flex items-center gap-3 animate-in fade-in duration-200">
            <AlertCircle className="w-5 h-5 shrink-0 text-rose-400" />
            <span>{error}</span>
          </div>
        )}

        {success && (
          <div className="mb-6 p-4 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-xs font-medium flex items-center gap-3 animate-in fade-in duration-200">
            <CheckCircle2 className="w-5 h-5 shrink-0 text-emerald-400" />
            <span>{success}</span>
          </div>
        )}

        {/* Main Card Container */}
        <div className="bg-slate-900/90 backdrop-blur-xl border border-slate-800 rounded-3xl p-6 md:p-8 shadow-2xl shadow-black/60">
          {/* ========================================================= */}
          {/* TAB 1: LOGIN FLOW */}
          {/* ========================================================= */}
          {activeTab === "login" && (
            <div className="space-y-6">
              {/* Login Method Sub-Toggle */}
              <div className="flex items-center justify-end">
                <button
                  type="button"
                  onClick={() => {
                    setLoginMode(loginMode === "password" ? "otp" : "password");
                    setError(null);
                  }}
                  className="text-xs font-semibold text-rose-400 hover:text-rose-300 transition-colors flex items-center gap-1.5"
                >
                  <Mail className="w-3.5 h-3.5" />
                  {loginMode === "password"
                    ? "Masuk dengan Kode OTP Email"
                    : "Masuk dengan Password"}
                </button>
              </div>

              <form onSubmit={handleLoginSubmit} className="space-y-5">
                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                    {loginMode === "password" ? "Email atau Username" : "Alamat Email Terdaftar"}
                  </label>
                  <div className="relative">
                    <Mail className="w-5 h-5 text-slate-500 absolute left-4 top-3.5" />
                    <input
                      type={loginMode === "otp" ? "email" : "text"}
                      required
                      value={identifier}
                      onChange={(e) => setIdentifier(e.target.value)}
                      placeholder={
                        loginMode === "password"
                          ? "Masukkan email atau username"
                          : "contoh: user@gmail.com"
                      }
                      className="w-full bg-slate-950/80 border border-slate-800 rounded-xl pl-12 pr-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-rose-500 focus:ring-1 focus:ring-rose-500 transition-all"
                    />
                  </div>
                </div>

                {loginMode === "password" && (
                  <div>
                    <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                      Password
                    </label>
                    <div className="relative">
                      <Lock className="w-5 h-5 text-slate-500 absolute left-4 top-3.5" />
                      <input
                        type={showPassword ? "text" : "password"}
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Masukkan password Anda"
                        className="w-full bg-slate-950/80 border border-slate-800 rounded-xl pl-12 pr-12 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-rose-500 focus:ring-1 focus:ring-rose-500 transition-all"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-4 top-3.5 text-slate-500 hover:text-slate-300 transition-colors focus:outline-none"
                      >
                        {showPassword ? (
                          <EyeOff className="w-5 h-5 text-rose-400" />
                        ) : (
                          <Eye className="w-5 h-5" />
                        )}
                      </button>
                    </div>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-rose-500 via-rose-600 to-pink-600 hover:from-rose-600 hover:to-pink-700 text-white font-bold text-sm shadow-xl shadow-rose-500/25 transition-all flex items-center justify-center gap-2 hover:scale-[1.01] active:scale-[0.99] disabled:opacity-50"
                >
                  {loading ? (
                    <span className="flex items-center gap-2">
                      <Loader2 className="w-4 h-4 animate-spin" /> Memverifikasi...
                    </span>
                  ) : loginMode === "password" ? (
                    <>
                      <span>Masuk ke Dashboard</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  ) : (
                    <>
                      <span>Kirim Kode OTP Masuk</span>
                      <Mail className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            </div>
          )}

          {/* ========================================================= */}
          {/* TAB 2: REGISTER / CREATE INVITATION FLOW */}
          {/* ========================================================= */}
          {activeTab === "register" && (
            <div className="space-y-6">
              {/* Step Progression Indicators */}
              <div className="grid grid-cols-3 gap-2 border-b border-slate-800 pb-5">
                <button
                  type="button"
                  onClick={() => setRegisterStep(1)}
                  className={`p-2.5 rounded-xl text-left transition-all ${
                    registerStep === 1
                      ? "bg-rose-500/10 border border-rose-500/30 text-rose-400"
                      : "bg-slate-950/40 border border-slate-800/60 text-slate-500"
                  }`}
                >
                  <span className="block text-[10px] font-extrabold uppercase tracking-wider">
                    Langkah 1
                  </span>
                  <span className="text-xs font-bold text-slate-200">Akun & Kontak</span>
                </button>

                <button
                  type="button"
                  onClick={() => setRegisterStep(2)}
                  className={`p-2.5 rounded-xl text-left transition-all ${
                    registerStep === 2
                      ? "bg-rose-500/10 border border-rose-500/30 text-rose-400"
                      : "bg-slate-950/40 border border-slate-800/60 text-slate-500"
                  }`}
                >
                  <span className="block text-[10px] font-extrabold uppercase tracking-wider">
                    Langkah 2
                  </span>
                  <span className="text-xs font-bold text-slate-200">Data Mempelai</span>
                </button>

                <button
                  type="button"
                  onClick={() => setRegisterStep(3)}
                  className={`p-2.5 rounded-xl text-left transition-all ${
                    registerStep === 3
                      ? "bg-rose-500/10 border border-rose-500/30 text-rose-400"
                      : "bg-slate-950/40 border border-slate-800/60 text-slate-500"
                  }`}
                >
                  <span className="block text-[10px] font-extrabold uppercase tracking-wider">
                    Langkah 3
                  </span>
                  <span className="text-xs font-bold text-slate-200">Subfolder & Tema</span>
                </button>
              </div>

              <form onSubmit={handleRegisterSubmit} className="space-y-5">
                {/* STEP 1: AKUN & KONTAK */}
                {registerStep === 1 && (
                  <div className="space-y-4 animate-in fade-in duration-200">
                    <div>
                      <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                        Alamat Email (Wajib untuk OTP)
                      </label>
                      <div className="relative">
                        <Mail className="w-5 h-5 text-slate-500 absolute left-4 top-3.5" />
                        <input
                          type="email"
                          required
                          value={regEmail}
                          onChange={(e) => setRegEmail(e.target.value)}
                          placeholder="contoh: calonpengantin@gmail.com"
                          className="w-full bg-slate-950/80 border border-slate-800 rounded-xl pl-12 pr-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-rose-500 focus:ring-1 focus:ring-rose-500"
                        />
                      </div>
                      <p className="text-[11px] text-slate-500 mt-1">
                        Kode verifikasi OTP akan dikirimkan ke alamat email ini via Resend.
                      </p>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                        Username
                      </label>
                      <div className="relative">
                        <User className="w-5 h-5 text-slate-500 absolute left-4 top-3.5" />
                        <input
                          type="text"
                          required
                          value={regUsername}
                          onChange={(e) => setRegUsername(e.target.value)}
                          placeholder="Pilih username unik"
                          className="w-full bg-slate-950/80 border border-slate-800 rounded-xl pl-12 pr-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-rose-500 focus:ring-1 focus:ring-rose-500"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                          Password
                        </label>
                        <div className="relative">
                          <Lock className="w-5 h-5 text-slate-500 absolute left-4 top-3.5" />
                          <input
                            type={showRegPassword ? "text" : "password"}
                            required
                            value={regPassword}
                            onChange={(e) => setRegPassword(e.target.value)}
                            placeholder="Minimal 6 karakter"
                            className="w-full bg-slate-950/80 border border-slate-800 rounded-xl pl-12 pr-10 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-rose-500"
                          />
                          <button
                            type="button"
                            onClick={() => setShowRegPassword(!showRegPassword)}
                            className="absolute right-3 top-3.5 text-slate-500 hover:text-slate-300"
                          >
                            {showRegPassword ? (
                              <EyeOff className="w-4 h-4 text-rose-400" />
                            ) : (
                              <Eye className="w-4 h-4" />
                            )}
                          </button>
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                          Ulangi Password
                        </label>
                        <div className="relative">
                          <Lock className="w-5 h-5 text-slate-500 absolute left-4 top-3.5" />
                          <input
                            type={showRegPassword ? "text" : "password"}
                            required
                            value={regConfirmPassword}
                            onChange={(e) => setRegConfirmPassword(e.target.value)}
                            placeholder="Ketik ulang password"
                            className="w-full bg-slate-950/80 border border-slate-800 rounded-xl pl-12 pr-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-rose-500"
                          />
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                        Nomor WhatsApp (Opsional)
                      </label>
                      <div className="relative">
                        <Phone className="w-5 h-5 text-slate-500 absolute left-4 top-3.5" />
                        <input
                          type="tel"
                          value={regHp}
                          onChange={(e) => setRegHp(e.target.value)}
                          placeholder="contoh: 08123456789"
                          className="w-full bg-slate-950/80 border border-slate-800 rounded-xl pl-12 pr-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-rose-500"
                        />
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={() => {
                        if (!regEmail || !regUsername || !regPassword) {
                          setError("Lengkapi email, username, dan password terlebih dahulu");
                          return;
                        }
                        if (regPassword !== regConfirmPassword) {
                          setError("Konfirmasi password tidak cocok");
                          return;
                        }
                        setError(null);
                        setRegisterStep(2);
                      }}
                      className="w-full py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs flex items-center justify-center gap-2 transition-all mt-4"
                    >
                      <span>Lanjut ke Data Mempelai</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                )}

                {/* STEP 2: DATA MEMPELAI */}
                {registerStep === 2 && (
                  <div className="space-y-4 animate-in fade-in duration-200">
                    <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800/80 space-y-3">
                      <div className="flex items-center gap-2 text-rose-400 font-bold text-xs uppercase tracking-wider border-b border-slate-800/60 pb-2">
                        <span>🤵 Mempelai Pria</span>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div>
                          <label className="block text-[11px] font-semibold text-slate-400 mb-1">
                            Nama Lengkap Pria
                          </label>
                          <input
                            type="text"
                            required
                            value={namaPria}
                            onChange={(e) => setNamaPria(e.target.value)}
                            placeholder="Contoh: Raden Wijaya"
                            className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-rose-500"
                          />
                        </div>
                        <div>
                          <label className="block text-[11px] font-semibold text-slate-400 mb-1">
                            Nama Panggilan Pria
                          </label>
                          <input
                            type="text"
                            required
                            value={panggilanPria}
                            onChange={(e) => setPanggilanPria(e.target.value)}
                            placeholder="Contoh: Raden"
                            className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-rose-500"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800/80 space-y-3">
                      <div className="flex items-center gap-2 text-rose-400 font-bold text-xs uppercase tracking-wider border-b border-slate-800/60 pb-2">
                        <span>👰 Mempelai Wanita</span>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div>
                          <label className="block text-[11px] font-semibold text-slate-400 mb-1">
                            Nama Lengkap Wanita
                          </label>
                          <input
                            type="text"
                            required
                            value={namaWanita}
                            onChange={(e) => setNamaWanita(e.target.value)}
                            placeholder="Contoh: Gayatri Rajapatni"
                            className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-rose-500"
                          />
                        </div>
                        <div>
                          <label className="block text-[11px] font-semibold text-slate-400 mb-1">
                            Nama Panggilan Wanita
                          </label>
                          <input
                            type="text"
                            required
                            value={panggilanWanita}
                            onChange={(e) => setPanggilanWanita(e.target.value)}
                            placeholder="Contoh: Gayatri"
                            className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-rose-500"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 pt-2">
                      <button
                        type="button"
                        onClick={() => setRegisterStep(1)}
                        className="py-3 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold text-xs flex items-center gap-1.5 transition-all"
                      >
                        <ChevronLeft className="w-4 h-4" /> Kembali
                      </button>
                      <button
                        type="button"
                        onClick={() => {
                          if (!namaPria || !panggilanPria || !namaWanita || !panggilanWanita) {
                            setError("Lengkapi nama lengkap dan panggilan kedua mempelai");
                            return;
                          }
                          setError(null);
                          setRegisterStep(3);
                        }}
                        className="flex-1 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs flex items-center justify-center gap-2 transition-all"
                      >
                        <span>Lanjut ke Subfolder & Tema</span>
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                )}

                {/* STEP 3: SUBFOLDER & TEMA */}
                {registerStep === 3 && (
                  <div className="space-y-5 animate-in fade-in duration-200">
                    {/* Subfolder / Slug Selector */}
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider">
                          Pilih Subfolder / Alamat URL Undangan
                        </label>
                        {isSlugChecking && (
                          <span className="text-[10px] text-slate-400 flex items-center gap-1">
                            <Loader2 className="w-3 h-3 animate-spin text-rose-400" /> Memeriksa...
                          </span>
                        )}
                        {!isSlugChecking && slugAvailable === true && (
                          <span className="text-[10px] text-emerald-400 font-bold flex items-center gap-1">
                            <CheckCircle2 className="w-3.5 h-3.5" /> Tersedia
                          </span>
                        )}
                        {!isSlugChecking && slugAvailable === false && (
                          <span className="text-[10px] text-rose-400 font-bold flex items-center gap-1">
                            <AlertCircle className="w-3.5 h-3.5" /> Tidak Tersedia
                          </span>
                        )}
                      </div>

                      <div className="flex items-center rounded-xl border border-slate-800 bg-slate-950/90 overflow-hidden focus-within:border-rose-500 focus-within:ring-1 focus-within:ring-rose-500 transition-all">
                        <span className="px-3.5 py-3 text-xs font-mono text-slate-400 bg-slate-900 border-r border-slate-800 select-none flex items-center gap-1.5">
                          <Globe className="w-3.5 h-3.5 text-rose-400" />
                          kenangita.id/u/
                        </span>
                        <input
                          type="text"
                          required
                          value={slug}
                          onChange={(e) =>
                            setSlug(
                              e.target.value
                                .toLowerCase()
                                .replace(/[^a-z0-9-]/g, "")
                            )
                          }
                          placeholder="nama-subfolder"
                          className="flex-1 bg-transparent px-3 py-3 text-xs text-white placeholder-slate-600 focus:outline-none font-mono"
                        />
                      </div>
                      {slugError && (
                        <p className="text-[11px] text-rose-400 mt-1">{slugError}</p>
                      )}
                      <p className="text-[11px] text-slate-500 mt-1">
                        Tautan ini akan langsung aktif setelah verifikasi OTP selesai.
                      </p>
                    </div>

                    {/* Theme Selector */}
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
                          <Palette className="w-3.5 h-3.5 text-rose-400" /> Pilih Desain Tema
                        </label>
                        <span className="text-[10px] text-slate-400 font-mono">
                          Tema Aktif: <strong className="text-rose-400">{selectedTheme}</strong>
                        </span>
                      </div>

                      {loadingThemes ? (
                        <div className="p-6 text-center text-xs text-slate-500 bg-slate-950/60 rounded-2xl">
                          <Loader2 className="w-5 h-5 animate-spin mx-auto text-rose-400 mb-2" />
                          Memuat koleksi tema...
                        </div>
                      ) : (
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 max-h-52 overflow-y-auto pr-1 p-1">
                          {themesList.slice(0, 18).map((theme) => {
                            const isSelected = selectedTheme === theme.nama_theme;
                            return (
                              <button
                                key={theme.id}
                                type="button"
                                onClick={() => setSelectedTheme(theme.nama_theme)}
                                className={`p-3 rounded-2xl border text-left transition-all relative overflow-hidden flex flex-col justify-between ${
                                  isSelected
                                    ? "bg-rose-500/20 border-rose-500 shadow-md shadow-rose-500/20"
                                    : "bg-slate-950/70 border-slate-800 hover:border-slate-700"
                                }`}
                              >
                                {isSelected && (
                                  <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-rose-500 animate-ping" />
                                )}
                                <div>
                                  <span className="text-[9px] font-mono uppercase px-1.5 py-0.5 rounded bg-slate-800 text-rose-300">
                                    {theme.kode_theme || "TEMA"}
                                  </span>
                                  <h4 className="font-bold text-xs text-white capitalize mt-1.5 truncate">
                                    {theme.nama_theme.replace(/-/g, " ")}
                                  </h4>
                                </div>
                                <span className="text-[10px] text-slate-400 mt-2 block capitalize truncate">
                                  {theme.category?.name || "Mobile"}
                                </span>
                              </button>
                            );
                          })}
                        </div>
                      )}
                    </div>

                    <div className="flex items-center gap-3 pt-2">
                      <button
                        type="button"
                        onClick={() => setRegisterStep(2)}
                        className="py-3 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold text-xs flex items-center gap-1.5 transition-all"
                      >
                        <ChevronLeft className="w-4 h-4" /> Kembali
                      </button>

                      <button
                        type="submit"
                        disabled={loading || slugAvailable === false}
                        className="flex-1 py-3.5 rounded-xl bg-gradient-to-r from-rose-500 via-rose-600 to-pink-600 hover:from-rose-600 hover:to-pink-700 text-white font-bold text-sm shadow-xl shadow-rose-500/25 transition-all flex items-center justify-center gap-2 hover:scale-[1.01] active:scale-[0.99] disabled:opacity-50"
                      >
                        {loading ? (
                          <span className="flex items-center gap-2">
                            <Loader2 className="w-4 h-4 animate-spin" /> Mengirim OTP...
                          </span>
                        ) : (
                          <>
                            <Sparkles className="w-4 h-4 text-rose-200" />
                            <span>Kirim OTP & Buat Undangan</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                )}
              </form>
            </div>
          )}
        </div>
      </div>

      {/* ========================================================= */}
      {/* MODAL / DIALOG: OTP EMAIL VERIFICATION */}
      {/* ========================================================= */}
      {showOtpModal && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200">
          <div className="w-full max-w-md bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8 shadow-2xl relative shadow-black/80">
            {/* Close Modal Button */}
            <button
              type="button"
              onClick={() => setShowOtpModal(false)}
              className="absolute top-5 right-5 text-slate-500 hover:text-slate-300 p-1 rounded-lg hover:bg-slate-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="text-center mb-6">
              <div className="w-14 h-14 rounded-2xl bg-rose-500/10 border border-rose-500/30 text-rose-400 flex items-center justify-center mx-auto mb-3 shadow-lg shadow-rose-500/20">
                <ShieldCheck className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-white">Verifikasi Kode OTP</h3>
              <p className="text-slate-400 text-xs mt-1.5 leading-relaxed">
                Kami telah mengirimkan 6 digit kode verifikasi ke alamat email:
                <br />
                <strong className="text-rose-400 font-mono">{otpTargetEmail}</strong>
              </p>
            </div>

            {otpFeedbackMessage && (
              <div className="mb-5 p-3 rounded-xl bg-slate-950 border border-slate-800 text-center text-[11px] text-rose-300">
                {otpFeedbackMessage}
              </div>
            )}

            {error && (
              <div className="mb-5 p-3 rounded-xl bg-rose-500/15 border border-rose-500/30 text-rose-300 text-xs font-medium flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{error}</span>
              </div>
            )}

            <form onSubmit={handleVerifyOtp} className="space-y-6">
              {/* 6-Digit Inputs */}
              <div className="flex items-center justify-center gap-2 sm:gap-3">
                {otpCode.map((digit, i) => (
                  <input
                    key={i}
                    ref={(el) => {
                      otpInputRefs.current[i] = el;
                    }}
                    type="text"
                    inputMode="numeric"
                    maxLength={1}
                    value={digit}
                    onChange={(e) => handleOtpDigitChange(i, e.target.value)}
                    onKeyDown={(e) => handleOtpKeyDown(i, e)}
                    className="w-11 h-13 sm:w-12 sm:h-14 bg-slate-950 border-2 border-slate-800 focus:border-rose-500 focus:ring-1 focus:ring-rose-500 rounded-xl text-center text-xl sm:text-2xl font-bold text-white transition-all focus:outline-none"
                    autoFocus={i === 0}
                  />
                ))}
              </div>

              {/* Action Buttons */}
              <button
                type="submit"
                disabled={otpLoading || otpCode.join("").length !== 6}
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-rose-500 via-rose-600 to-pink-600 hover:from-rose-600 hover:to-pink-700 text-white font-bold text-sm shadow-xl shadow-rose-500/25 transition-all flex items-center justify-center gap-2 disabled:opacity-50 hover:scale-[1.01] active:scale-[0.99]"
              >
                {otpLoading ? (
                  <span className="flex items-center gap-2">
                    <Loader2 className="w-4 h-4 animate-spin" /> Memverifikasi...
                  </span>
                ) : (
                  <>
                    <span>Verifikasi & Aktifkan</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>

              {/* Resend Timer */}
              <div className="text-center pt-1">
                {otpResendCooldown > 0 ? (
                  <p className="text-xs text-slate-500">
                    Kirim ulang kode dalam{" "}
                    <strong className="text-rose-400 font-mono">{otpResendCooldown}s</strong>
                  </p>
                ) : (
                  <button
                    type="button"
                    onClick={handleResendOtp}
                    disabled={otpLoading}
                    className="text-xs font-bold text-rose-400 hover:text-rose-300 transition-colors inline-flex items-center gap-1.5"
                  >
                    <RefreshCw className="w-3.5 h-3.5" /> Kirim Ulang Kode OTP
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
