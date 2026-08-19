"use client";

import LegacyPhpThemeContainer from "./LegacyPhpThemeContainer";

interface CommentItem {
  id_komen: number;
  nama_komen: string;
  isi_komen: string;
  created_at: string;
}

interface ThemeProps {
  themeName: string;
  comments: CommentItem[];
  onAddComment: (nama: string, isi: string) => Promise<void>;
}

export default function ThemeRenderer({ themeName }: ThemeProps) {
  return (
    <LegacyPhpThemeContainer
      themeName={themeName}
      namaPria="Romeo Montague"
      namaWanita="Juliet Capulet"
      namaAyahPria="Lord Montague"
      namaIbuPria="Lady Montague"
      namaAyahWanita="Lord Capulet"
      namaIbuWanita="Lady Capulet"
      tanggalAcara="Sabtu, 26 Desember 2026"
      waktuAcara="09:00 WIB - Selesai"
      tempatAcara="Gedung Grand Ballroom Jakarta"
      alamatAcara="Jl. Jendral Sudirman No. 1, Jakarta Selatan"
      guestName="Tamu Undangan Spesial"
    />
  );
}
