"use client";

import { useEffect, useState } from "react";

interface LegacyPhpThemeProps {
  themeName: string;
  namaPria?: string;
  namaWanita?: string;
  namaAyahPria?: string;
  namaIbuPria?: string;
  namaAyahWanita?: string;
  namaIbuWanita?: string;
  tanggalAcara?: string;
  waktuAcara?: string;
  tempatAcara?: string;
  alamatAcara?: string;
  guestName?: string;
}

export default function LegacyPhpThemeContainer({
  themeName,
  namaPria = "Romeo Montague",
  namaWanita = "Juliet Capulet",
  namaAyahPria = "Lord Montague",
  namaIbuPria = "Lady Montague",
  namaAyahWanita = "Lord Capulet",
  namaIbuWanita = "Lady Capulet",
  tanggalAcara = "2026-12-26",
  waktuAcara = "09:00 WIB",
  tempatAcara = "Gedung Grand Ballroom Jakarta",
  alamatAcara = "Jl. Jendral Sudirman No. 1, Jakarta Selatan",
  guestName = "Tamu Undangan",
}: LegacyPhpThemeProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showOverlay, setShowOverlay] = useState(true);

  const key = (themeName || "arabian").toLowerCase();

  // Load Theme CSS dynamically
  useEffect(() => {
    const cssPath = `/assets/themes/${key}/themes-rsvp/sw-vendor-v2/${key}/${key}.css`;
    const fontAwesomePath = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css";
    const bootstrapCss = "https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css";

    const linkBoot = document.createElement("link");
    linkBoot.rel = "stylesheet";
    linkBoot.href = bootstrapCss;
    document.head.appendChild(linkBoot);

    const linkFa = document.createElement("link");
    linkFa.rel = "stylesheet";
    linkFa.href = fontAwesomePath;
    document.head.appendChild(linkFa);

    const linkTheme = document.createElement("link");
    linkTheme.rel = "stylesheet";
    linkTheme.href = cssPath;
    document.head.appendChild(linkTheme);

    return () => {
      document.head.removeChild(linkBoot);
      document.head.removeChild(linkFa);
      document.head.removeChild(linkTheme);
    };
  }, [key]);

  const handleOpenInvitation = () => {
    setShowOverlay(false);
    setIsPlaying(true);
  };

  return (
    <div className="legacy-theme-wrapper text-slate-100 font-sans min-h-screen relative bg-slate-950">
      {/* Audio Player */}
      {isPlaying && (
        <audio autoPlay loop src="/assets/base/musik.mp3" />
      )}

      {/* Overlay Welcome Screen (Sama persis dengan arabian.php line 48) */}
      {showOverlay && (
        <div
          id="over-lay-welcome"
          onClick={handleOpenInvitation}
          className="fixed inset-0 z-50 bg-black/90 text-white flex flex-col items-center justify-center p-6 text-center cursor-pointer backdrop-blur-md"
        >
          <div className="max-w-md mx-auto space-y-4">
            <div className="w-16 h-16 rounded-full bg-amber-500/20 border-2 border-amber-500/50 flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-amber-400">🕌</span>
            </div>
            <h2 className="text-xl font-bold text-amber-300 uppercase tracking-widest font-serif">
              Undangan Pernikahan
            </h2>
            <h1 className="text-3xl font-extrabold text-white">
              {namaPria} & {namaWanita}
            </h1>
            <p className="text-xs text-slate-300 leading-relaxed pt-2">
              Kepada Yth: <br />
              <strong className="text-amber-400 text-base">{guestName}</strong>
            </p>
            <p className="text-xs text-slate-400 pt-4">
              Gunakan browser Chrome / Safari agar website tampil sempurna.<br />
              <strong>KETUK UNTUK BUKA UNDANGAN</strong>
            </p>
          </div>
        </div>
      )}

      {/* Floating Bottom Menu Bar (Sama persis dengan arabian.php line 85) */}
      <div className="navbar-mobile text-center fixed bottom-0 left-0 right-0 z-40 bg-slate-950/90 border-t border-amber-900/40 py-2">
        <ul className="flex items-center justify-around text-xs font-semibold text-amber-200 max-w-lg mx-auto">
          <li>
            <a href="#home" className="flex flex-col items-center gap-1 hover:text-amber-400">
              <i className="fa fa-home text-base"></i>
              <span>Home</span>
            </a>
          </li>
          <li>
            <a href="#mempelai" className="flex flex-col items-center gap-1 hover:text-amber-400">
              <i className="fa fa-user text-base"></i>
              <span>Mempelai</span>
            </a>
          </li>
          <li>
            <a href="#resepsi" className="flex flex-col items-center gap-1 hover:text-amber-400">
              <i className="fa fa-cutlery text-base"></i>
              <span>Resepsi</span>
            </a>
          </li>
          <li>
            <a href="#ucapan" className="flex flex-col items-center gap-1 hover:text-amber-400">
              <i className="fa fa-comment text-base"></i>
              <span>Ucapan</span>
            </a>
          </li>
        </ul>
      </div>

      {/* Section 1: Home Cover (Sama persis dengan arabian.php line 111) */}
      <section id="home" className="min-h-screen flex flex-col items-center justify-center text-center p-6 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-950 via-slate-950 to-black border-b border-amber-900/30">
        <div className="max-w-xl mx-auto space-y-6">
          <p className="text-amber-400 text-lg font-serif font-bold">بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ</p>
          <span className="text-xs uppercase tracking-widest text-amber-300 font-mono block">The Wedding of</span>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-amber-100 font-serif tracking-wider">
            {namaPria} & {namaWanita}
          </h1>
          <div className="p-4 rounded-2xl bg-amber-950/30 border border-amber-500/30">
            <p className="text-xs text-amber-200 font-serif italic">
              &quot;Dan di antara tanda-tanda kebesaran-Nya ialah Dia menciptakan untukmu isteri-isteri dari jenismu sendiri...&quot;
            </p>
            <span className="text-xs font-bold text-amber-400 block mt-1">(QS. Ar-Rum: 21)</span>
          </div>
          <div className="inline-block px-6 py-2.5 rounded-full bg-amber-500/20 border border-amber-500/50 text-xs font-bold text-amber-300 font-mono">
            🗓️ {tanggalAcara}
          </div>
        </div>
      </section>

      {/* Section 2: Mempelai (Sama persis dengan arabian.php line 126) */}
      <section id="mempelai" className="py-24 px-6 text-center max-w-3xl mx-auto space-y-12">
        <div className="space-y-2">
          <span className="text-xs uppercase tracking-widest font-bold text-amber-400 font-mono">Assalamu’alaikum Wr. Wb.</span>
          <h2 className="text-2xl font-bold text-amber-200 font-serif">Mempelai Pengantin</h2>
          <p className="text-xs text-slate-400">Dengan memohon rahmat dan ridho Allah SWT, kami mengundang Anda pada pernikahan kami:</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 rounded-3xl bg-amber-950/20 border border-amber-500/30 shadow-2xl">
            <h3 className="text-2xl font-bold text-amber-200 font-serif">{namaPria}</h3>
            <p className="text-xs text-amber-400 mt-1 font-semibold">Putra Pertama dari</p>
            <p className="text-slate-300 text-sm mt-2 leading-relaxed">
              Bpk. {namaAyahPria} & Ibu {namaIbuPria}
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-amber-950/20 border border-amber-500/30 shadow-2xl">
            <h3 className="text-2xl font-bold text-amber-200 font-serif">{namaWanita}</h3>
            <p className="text-xs text-amber-400 mt-1 font-semibold">Putri Kedua dari</p>
            <p className="text-slate-300 text-sm mt-2 leading-relaxed">
              Bpk. {namaAyahWanita} & Ibu {namaIbuWanita}
            </p>
          </div>
        </div>
      </section>

      {/* Section 3: Resepsi & Tempat (Sama persis dengan arabian.php line 160) */}
      <section id="resepsi" className="py-20 bg-amber-950/30 border-y border-amber-900/40 text-center px-6">
        <div className="max-w-xl mx-auto space-y-6">
          <span className="text-xs uppercase tracking-widest font-bold text-amber-400 font-mono">Waktu & Tempat</span>
          <h2 className="text-2xl font-bold text-amber-200 font-serif">Akad & Resepsi Pernikahan</h2>

          <div className="p-8 rounded-3xl bg-black/60 border border-amber-500/30 space-y-4">
            <p className="text-xs font-bold text-amber-400">Pukul {waktuAcara}</p>
            <h4 className="text-lg font-bold text-white">{tempatAcara}</h4>
            <p className="text-slate-400 text-xs">{alamatAcara}</p>
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noreferrer"
              className="inline-block px-6 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 text-xs font-bold shadow-lg transition-all"
            >
              Buka Google Maps
            </a>
          </div>
        </div>
      </section>

      {/* Section 4: Ucapan & Buku Tamu (Sama persis dengan arabian.php line 269) */}
      <section id="ucapan" className="py-24 px-6 text-center max-w-xl mx-auto space-y-8">
        <h2 className="text-2xl font-bold text-amber-200 font-serif">Beri Ucapan / Doa</h2>
        <div className="p-6 rounded-3xl bg-black/60 border border-amber-500/30 space-y-4 text-left">
          <div>
            <label className="block text-xs font-bold text-amber-400 mb-1">Nama</label>
            <input
              type="text"
              placeholder="Nama Anda"
              defaultValue={guestName}
              className="w-full bg-amber-950/40 border border-amber-900/60 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-amber-500"
            />
          </div>
          <div>
            <label className="block text-xs font-bold text-amber-400 mb-1">Pesan Ucapan</label>
            <textarea
              rows={4}
              placeholder="Tulis ucapan selamat..."
              className="w-full bg-amber-950/40 border border-amber-900/60 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-amber-500"
            />
          </div>
          <button
            type="button"
            className="w-full py-3 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-xs shadow-lg transition-all"
          >
            Kirim Ucapan
          </button>
        </div>

        <div className="pt-8 text-slate-400 text-xs space-y-2">
          <p>Terima kasih Telah Mengunjungi Web Undangan Kami</p>
          <h3 className="text-lg font-bold text-amber-200 font-serif">{namaPria} & {namaWanita}</h3>
        </div>
      </section>
    </div>
  );
}
