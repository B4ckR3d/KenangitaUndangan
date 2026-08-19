# 💍 Kenangita.id - Platform Undangan Digital Modern (Fullstack Next.js + PHP Theme Engine)

Aplikasi Web Undangan Digital modern berbasis **Fullstack TypeScript (Next.js App Router)** yang terintegrasi dengan **Prisma 7 ORM**, **Tailwind CSS**, **Framer Motion**, **JWT Authentication**, dan **PHP Direct Theme Engine** untuk merender tema undangan pernikahan secara 100% presisi.

---

## 🛠️ Teknologi & Stack Utama

- **Frontend & App Router**: Next.js 16 (App Router), TypeScript, Tailwind CSS, Framer Motion, Lucide Icons.
- **Backend & Database**: Next.js API Routes, Prisma ORM, SQLite (`dev.db`).
- **Autentikasi**: JWT (JSON Web Tokens), Password Hashing (MD5), OTP Email Verification (Resend), HTTP-Only Cookies.
- **Engine Tema**: PHP Direct Template Renderer (menjalankan berkas `.php` tema dari `public/themes/` secara otomatis 100% presisi).

---

## 🚀 Panduan Instalasi Lokal (Development)

### Prasyarat
- **Node.js**: v18.x atau v20.x+ LTS
- **NPM**: Versi 9+

### Langkah-Langkah Instalasi

1. **Clone Repositori & Pindah ke Folder `undangan-next`**:
   ```bash
   cd undangan-next
   ```

2. **Install Dependency**:
   ```bash
   npm install
   ```

3. **Konfigurasi Berkas `.env`**:
   Buat atau perbarui file `.env` di folder `undangan-next`:
   ```env
   DATABASE_URL="file:./dev.db"
   JWT_SECRET="super-secret-key-kenangita-2026"
   NEXT_PUBLIC_APP_URL="http://localhost:3000"
   RESEND_API_KEY="your_resend_api_key"
   RESEND_FROM_EMAIL="Kenangita <support@kenangita.id>"
   ```

4. **Sinkronisasi & Seeding Database**:
   ```bash
   npx prisma db push
   npm run db:seed
   ```

5. **Jalankan Server Development**:
   ```bash
   npm run dev
   ```
   Aplikasi akan aktif di **[http://localhost:3000](http://localhost:3000)**.

---

## 👑 Akun Sample untuk Pengujian Login

Buka halaman login di **[http://localhost:3000/login](http://localhost:3000/login)**:

| Peran (Role) | Tab Login | Email / Username | Password |
|---|---|---|---|
| **Administrator** | Administrator | `admin@kenangita.id` | `vincenzo` |
| **User (Mempelai)** | Pengguna | `demo` *(atau `demo@gmail.com`)* | `123456` |

---

## 🌐 Rute Utama Aplikasi

- **Landing Page**: `http://localhost:3000/`
- **Katalog Tema**: `http://localhost:3000/themes`
- **Halaman Login & Register**: `http://localhost:3000/login`
- **Dashboard Overview**: `http://localhost:3000/dashboard`
- **Data Mempelai**: `http://localhost:3000/dashboard/mempelai`
- **Jadwal & Lokasi Acara**: `http://localhost:3000/dashboard/acara`
- **Album Foto**: `http://localhost:3000/dashboard/gallery`
- **Cerita Cinta**: `http://localhost:3000/dashboard/cerita`
- **Amplop Digital**: `http://localhost:3000/dashboard/rekening`
- **Kelola Tamu & WA Link**: `http://localhost:3000/dashboard/tamu`
- **Pilih Tema**: `http://localhost:3000/dashboard/tampilan`
- **Pengaturan Akun**: `http://localhost:3000/dashboard/pengaturan`
- **Web Undangan Tamu**: `http://localhost:3000/u/demo`

---

## 📄 Lisensi
Hak Cipta © 2026 Kenangita.id. Dibuat dengan Fullstack Next.js & TypeScript.
