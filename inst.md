# 📖 Panduan Instalasi & Manajemen Tema Undangan (Kenangita.id)

Dokumen ini berisi panduan lengkap mengenai instalasi proyek, konfigurasi database, serta langkah-langkah menambahkan, memodifikasi, dan membuat tema undangan digital baru menggunakan AI image generation.

---

## 🚀 1. Panduan Instalasi Proyek (Installation Guide)

### Prasyarat Sistem
* **Node.js**: Versi 18.x atau lebih baru (Disarankan v20+ atau v24+)
* **NPM**: Versi 9+
* **Sistem Operasi**: Windows, macOS, atau Linux

---

### Langkah Instalasi Cepat

1. **Clone / Buka Direktori Proyek**:
   ```bash
   cd undangan-next
   ```

2. **Install Dependensi Proyek**:
   ```bash
   npm install
   ```

3. **Konfigurasi Environment (`.env`)**:
   Pastikan file `.env` di root direktori memiliki konfigurasi berikut:
   ```env
   DATABASE_URL="file:./dev.db"
   JWT_SECRET="super-secret-key-kenangita-production-2026"
   ```

4. **Inisialisasi & Seeding Database SQLite**:
   ```bash
   # Sinkronisasi skema database ke SQLite dev.db
   npm run db:push

   # Mengisi data awal (pengguna, admin, tema, mempelai, acara, paket)
   npm run db:seed
   ```

5. **Menjalankan Server Pengembangan (Dev Server)**:
   ```bash
   npm run dev
   ```
   Aplikasi akan berjalan di: **[http://localhost:3000](http://localhost:3000)**.

6. **Build untuk Produksi**:
   ```bash
   npm run build
   npm start
   ```

---

## 🎨 2. Struktur Folder Tema (Theme Structure)

Sistem tema diatur secara modular pada direktori berikut:

```text
undangan-next/
├── public/
│   ├── themes/                              <-- File Template HTML/PHP Tema
│   │   ├── arabian.php
│   │   ├── greenflower.php
│   │   ├── hwflower.php
│   │   ├── royal-gold.php                   <-- Contoh Template Hasil AI Generation
│   │   ├── rustic.php
│   │   ├── watercolor1.php ... watercolor5.php
│   │   └── ... (27+ tema bawaan)
│   │
│   └── assets/
│       └── themes/                          <-- Aset Visual Setiap Tema
│           ├── royal-gold/
│           │   ├── preview.png              <-- Thumbnail kartu preview (Rasio 16:10 / 4:3)
│           │   ├── css/style.css            <-- Stylesheet tema
│           │   └── img/top_flower.png       <-- Ornamen dekorasi emas AI
│           ├── greenflower/
│           ├── hwflower/
│           └── ...
│
├── src/
│   ├── lib/
│   │   └── themeEngine.ts                   <-- Engine perender template dinamis
│   ├── app/
│   │   ├── (dashboard)/dashboard/tampilan/  <-- Modul Ganti, Tambah & Modif Tema
│   │   ├── (store)/themes/                  <-- Katalog Tema Publik
│   │   └── u/[slug]/                        <-- Halaman Live Preview Undangan
```

---

## 🤖 3. Cara Membuat Tema Baru dengan AI Gambar (Gemini Image Generation)

Anda dapat membuat tema baru dari gambar AI dengan langkah-langkah berikut (Contoh: Tema **`royal-gold`**):

1. **Generate Gambar Thumbnail & Ornamen Menggunakan AI**:
   - Gambar Preview Kartu (`preview.png`): Rasio 4:3 atau 16:10 dengan prompt desain UI tema undangan (misal: *Luxury royal gold wedding invitation on dark obsidian*).
   - Gambar Ornamen Bunga/Emas (`top_flower.png`): Ornamen simetris foil emas untuk header sampul dan kartu.

2. **Simpan Aset ke Folder Tema**:
   - `public/assets/themes/<nama_tema>/preview.png`
   - `public/assets/themes/<nama_tema>/img/top_flower.png`
   - `public/assets/themes/<nama_tema>/css/style.css`

3. **Buat Template di `public/themes/<nama_tema>.php`**:
   - Hubungkan CSS, ornamen gambar, dan tag placeholder dinamis data mempelai & acara.

4. **Daftarkan Tema ke Database**:
   - Buka menu **[http://localhost:3000/dashboard/tampilan](http://localhost:3000/dashboard/tampilan)** dan klik **"+ Tambah Tema Baru"**.

---

## ➕ 4. Cara Menambahkan Tema Baru secara Manual

1. **Siapkan Folder Aset**: Buat folder `public/assets/themes/<nama_tema>/` dengan file `preview.png`, `css/`, dan `img/`.
2. **Buat File Template**: Buat `public/themes/<nama_tema>.php`.
3. **Placeholder Standar yang Didukung**:
   - Judul Mempelai: `<?= $nama_lengkap_pria ?>` & `<?= $nama_lengkap_wanita ?>`
   - Panggilan: `<?= $nama_panggilan_pria ?>` & `<?= $nama_panggilan_wanita ?>`
   - Orang Tua: `Putra Bpk <?= $nama_ayah_pria ?> dan Ibu <?= $nama_ibu_pria ?>`
   - Nama Tamu: `<?= esc($invite) ?>`
   - Tanggal & Waktu: `<?= $tgl_acara ?>` / `<?= $clock ?>`
   - Salam Pembuka: `<?= $salam_pembuka ?>`
   - Tombol Buka: Elemen dengan id `#buka-undangan` atau `#over-lay-welcome`.
4. **Daftarkan di Dashboard**: Klik **"+ Tambah Tema Baru"** pada menu Ganti Tema di Dashboard.

---

## 📋 5. Daftar 27 Tema yang Tersedia

| No | Nama Tema | Kode | Kategori | Fitur Utama |
| :---: | :--- | :---: | :--- | :--- |
| 1 | `sakura-castle` | `A034` | Romantic Sakura | **Hasil Kloning (kitaberdua.com)**: Pastel pink cherry blossom, fairy tale castle & dove motif |
| 2 | `purple-flowers` | `A033` | Floral / Lavender | **Hasil Kloning (kitaberdua.com)**: Lavender botanical watercolor wreath & indigo aesthetic |
| 3 | `wayang-gold` | `A032` | Adat Jawa Royal | **Hasil Desain Gambar**: Midnight navy with gold foil Gunungan Wayang & baroque corners |
| 4 | `blue-hydrangea` | `A031` | Floral Watercolor | **Hasil Desain Gambar**: Botanical blue hydrangea & eucalyptus wreath |
| 5 | `royal-gold` | `A030` | Luxury Royal | **Hasil AI**: Dark Obsidian & Gold Foil luxury typography |
| 6 | `greenflower` | `A001` | Floral | Botanical floral, music, tab navigation, RSVP |
| 7 | `hwflower` | `A002` | Floral | Rose floral, countdown timer, digital gift |
| 8 | `arabian` | `A003` | Islamic | Moroccan gold arch, Islamic calligraphy, bismillah |
| 9 | `rustic` | `A004` | Rustic | Warm amber botanical, love story timeline |
| 10 | `blueroses` | `A005` | Floral | Elegant blue pastel roses theme |
| 11 | `redroses` | `A006` | Floral | Romantic red roses aesthetics |
| 12 | `tealflower` | `A007` | Floral | Modern teal floral bouquet |
| 13 | `prettyflower` | `A008` | Floral | Soft blush floral wedding |
| 14 | `purpleflower` | `A009` | Floral | Lavender purple floral accents |
| 15 | `sketchflower` | `A010` | Art | Hand-drawn floral illustrations |
| 16 | `radiantyellow` | `A011` | Modern | Bright golden yellow theme |
| 17 | `radiantdark` | `A012` | Dark Mode | Obsidian luxury dark palette |
| 18 | `watercolor1` | `A013` | Watercolor | Pastel watercolor splash design |
| 19 | `watercolor2` | `A014` | Watercolor | Soft romantic watercolor |
| 20 | `watercolor3` | `A015` | Watercolor | Ocean breeze watercolor |
| 21 | `watercolor4` | `A016` | Watercolor | Sunset gold watercolor |
| 22 | `watercolor5` | `A017` | Watercolor | Minimalist floral watercolor |
| 23 | `islamic1` | `A018` | Islamic | Traditional Islamic wedding design |
| 24 | `vintage-islamic` | `A019` | Islamic | Classic vintage Islamic ornamentation |
| 25 | `mandala` | `A020` | Geometric | Sacred mandala ornaments |
| 26 | `tapis` | `A021` | Adat/Etnik | Traditional Indonesian ethnic motifs |
| 27 | `twelve` | `A022` | Modern | Fullscreen swipe story invitation |
| 28 | `beautiful-floral` | `A023` | Floral | Blossom flower garden layout |
| 29 | `jellyblack` | `A024` | Minimalist | Dark aesthetic minimalist card |
| 30 | `base` | `A025` | Standard | Clean standard starter template |
| 31 | `floral` | `A026` | Floral | Classic floral pattern |

---

## 💡 6. Kredensial Login & Link Uji Coba

* **Portal Login**: [http://localhost:3000/login](http://localhost:3000/login)
* **Dokumentasi Akun**: [cred.md](file:///d:/Lambordi/GITHUB/undangan-next/cred.md)
* **Live Test Tema Kloning (Sakura Castle - kitaberdua.com)**: [http://localhost:3000/u/demo?theme=sakura-castle](http://localhost:3000/u/demo?theme=sakura-castle)
* **Live Test Tema Kloning (Purple Flowers - kitaberdua.com)**: [http://localhost:3000/u/demo?theme=purple-flowers](http://localhost:3000/u/demo?theme=purple-flowers)
* **Live Test Tema Baru (Wayang Gold - Etnik Jawa)**: [http://localhost:3000/u/demo?theme=wayang-gold](http://localhost:3000/u/demo?theme=wayang-gold)
* **Live Test Tema Baru (Blue Hydrangea)**: [http://localhost:3000/u/demo?theme=blue-hydrangea](http://localhost:3000/u/demo?theme=blue-hydrangea)
* **Live Test Tema Baru (Royal Gold)**: [http://localhost:3000/u/demo?theme=royal-gold](http://localhost:3000/u/demo?theme=royal-gold)
* **Live Test Greenflower**: [http://localhost:3000/u/demo?theme=greenflower](http://localhost:3000/u/demo?theme=greenflower)
* **Live Test HW Flower**: [http://localhost:3000/u/demo?theme=hwflower](http://localhost:3000/u/demo?theme=hwflower)
* **Live Test Arabian**: [http://localhost:3000/u/demo?theme=arabian](http://localhost:3000/u/demo?theme=arabian)
