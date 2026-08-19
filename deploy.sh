#!/bin/bash
set -e

echo "🚀 Memulai proses deployment..."

# 1. Tarik pembaruan kode terbaru dari Git
echo "📥 Menarik kode terbaru dari Git..."
git pull origin main

# 2. Install dependensi baru jika ada
echo "📦 Menginstall dependensi..."
npm install --prefer-offline

# 3. Sinkronisasi database
echo "🗄️ Sinkronisasi skema database..."
npx prisma db push

# 4. Build aplikasi Next.js
echo "🏗️ Membangun aplikasi Next.js untuk produksi..."
npm run build

# 5. Reload proses di PM2
echo "⚡ Memuat ulang proses di PM2..."
pm2 reload ecosystem.config.js --update-env

echo "✅ Deployment selesai dengan sukses!"
