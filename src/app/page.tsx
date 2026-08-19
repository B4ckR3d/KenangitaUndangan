"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Sparkles, Heart, Smartphone, ShieldCheck, Palette, ArrowRight, CheckCircle } from "lucide-react";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-rose-500 selection:text-white font-sans">
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-rose-500 to-pink-500 flex items-center justify-center shadow-lg shadow-rose-500/30 group-hover:scale-105 transition-transform">
              <Heart className="w-5 h-5 text-white fill-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
              Kenangita<span className="text-rose-500">.id</span>
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
            <Link href="/" className="hover:text-rose-400 transition-colors">Beranda</Link>
            <Link href="/themes" className="hover:text-rose-400 transition-colors">Katalog Tema</Link>
            <Link href="#fitur" className="hover:text-rose-400 transition-colors">Fitur Unggulan</Link>
            <Link href="#harga" className="hover:text-rose-400 transition-colors">Paket Harga</Link>
          </div>

          <div className="flex items-center gap-4">
            <Link
              href="/login"
              className="px-5 py-2.5 rounded-xl border border-slate-700 bg-slate-900/50 hover:bg-slate-800 text-sm font-semibold text-slate-200 transition-all hover:border-slate-600"
            >
              Masuk
            </Link>
            <Link
              href="/login"
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-600 hover:to-pink-700 text-sm font-semibold text-white shadow-lg shadow-rose-500/25 transition-all hover:scale-105 active:scale-95"
            >
              Buat Undangan
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-36 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(244,63,94,0.15),transparent_50%)]" />
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-rose-500/30 bg-rose-500/10 text-rose-300 text-xs font-semibold uppercase tracking-wider mb-8"
          >
            <Sparkles className="w-4 h-4 text-rose-400" />
            Platform Undangan Digital No. 1 di Indonesia
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white max-w-4xl mx-auto leading-tight"
          >
            Berbagi Undangan Pernikahan Menjadi{" "}
            <span className="bg-gradient-to-r from-rose-400 via-pink-400 to-amber-300 bg-clip-text text-transparent">
              Mewah & Elegan
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto font-normal leading-relaxed"
          >
            Buat dan bagikan web undangan pernikahan berbasis Next.js modern dengan animasi halus, musik favorit, RSVP otomatis, dan amplop digital dalam hitungan menit.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-4"
          >
            <Link
              href="/themes"
              className="px-8 py-4 rounded-2xl bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-600 hover:to-pink-700 text-white font-bold text-base shadow-xl shadow-rose-500/30 transition-all hover:scale-105 flex items-center gap-3"
            >
              Lihat Katalog Tema <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/u/demo"
              className="px-8 py-4 rounded-2xl bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-200 font-semibold text-base transition-all hover:bg-slate-800"
            >
              Coba Live Demo
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="fitur" className="py-24 bg-slate-900/50 border-y border-slate-800/60 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Mengapa Memilih Kenangita?</h2>
            <p className="mt-4 text-slate-400">Solusi undangan pernikahan digital serba instan, hemat biaya, dan responsif di semua perangkat mobile.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Palette,
                title: "Desain Premium & Variatif",
                desc: "Puluhan pilihan tema undangan eksklusif dengan estetika modern, warna harmonis, dan animasi yang memukau.",
              },
              {
                icon: Smartphone,
                title: "Responsif Perangkat Mobile",
                desc: "Tampilan otomatis menyesuaikan layar smartphone tamu tanpa patah atau membuat HP terasa berat.",
              },
              {
                icon: ShieldCheck,
                title: "Buku Tamu & RSVP Real-time",
                desc: "Dapatkan pesan ucapan, doa resto, dan konfirmasi kehadiran tamu secara langsung di dashboard Anda.",
              },
            ].map((fitur, idx) => (
              <div key={idx} className="p-8 rounded-3xl bg-slate-900 border border-slate-800 hover:border-rose-500/50 transition-all group">
                <div className="w-14 h-14 rounded-2xl bg-rose-500/10 text-rose-400 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-rose-500 group-hover:text-white transition-all">
                  <fitur.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{fitur.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{fitur.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="harga" className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Paket Harga Spesial</h2>
            <p className="mt-4 text-slate-400">Tanpa biaya tersembunyi. Pilih paket sesuai kebutuhan pesta pernikahan Anda.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="p-8 rounded-3xl bg-slate-900 border border-slate-800 flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 bg-slate-800 px-3 py-1 rounded-full">Paket Basic</span>
                <h3 className="text-3xl font-extrabold text-white mt-4">Rp 49.000</h3>
                <p className="text-slate-400 text-sm mt-2">Cocok untuk acara intim dan terbatas</p>
                <ul className="mt-8 space-y-4 text-sm text-slate-300">
                  <li className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-rose-400" /> Aktif Selamanya</li>
                  <li className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-rose-400" /> Bebas Pilih 5 Tema Basic</li>
                  <li className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-rose-400" /> Buku Tamu & RSVP</li>
                  <li className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-rose-400" /> Navigasi Petunjuk Lokasi Maps</li>
                </ul>
              </div>
              <Link href="/login" className="mt-8 w-full py-3.5 rounded-xl border border-slate-700 bg-slate-800 hover:bg-slate-700 text-white font-semibold text-center transition-all">Pilih Paket Basic</Link>
            </div>

            <div className="p-8 rounded-3xl bg-gradient-to-b from-rose-950/60 to-slate-900 border-2 border-rose-500 flex flex-col justify-between relative overflow-hidden shadow-2xl shadow-rose-500/10">
              <div className="absolute top-4 right-4 bg-rose-500 text-white text-xs font-bold uppercase px-3 py-1 rounded-full">Paling Populer</div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-rose-400 bg-rose-500/20 px-3 py-1 rounded-full">Paket Premium</span>
                <h3 className="text-3xl font-extrabold text-white mt-4">Rp 99.000</h3>
                <p className="text-slate-300 text-sm mt-2">Fitur paling lengkap tanpa batas</p>
                <ul className="mt-8 space-y-4 text-sm text-slate-200">
                  <li className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-rose-400" /> Semua Fitur Paket Basic</li>
                  <li className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-rose-400" /> Akses Semua Tema Eksklusif</li>
                  <li className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-rose-400" /> Background Musik Bebas Pilih</li>
                  <li className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-rose-400" /> Fitur Amplop Digital / Rekening Bank</li>
                </ul>
              </div>
              <Link href="/login" className="mt-8 w-full py-3.5 rounded-xl bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-600 hover:to-pink-700 text-white font-bold text-center shadow-lg shadow-rose-500/25 transition-all">Pilih Paket Premium</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-slate-800 text-center text-sm text-slate-500">
        <p>© 2026 Kenangita.id - Platform Undangan Digital Indonesia (Fullstack Next.js App).</p>
      </footer>
    </div>
  );
}
