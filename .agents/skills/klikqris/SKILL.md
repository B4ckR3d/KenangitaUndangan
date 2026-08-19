---
name: klikqris
description: Panduan lengkap dan implementasi integrasi Payment Gateway KlikQRIS (Dynamic QRIS, Webhook security & signature validation, Status check, Snap Popup Modal, History, dan Withdrawal API) untuk TypeScript, Next.js, dan Node.js. Trigger saat user menyebut "klikqris", "qris", "payment gateway qris", "webhook qris", atau integrasi pembayaran QRIS.
---

# KlikQRIS Payment Gateway Integration Guide

Standar implementasi, arsitektur, dan keamanan untuk mengintegrasikan Payment Gateway **KlikQRIS** (Dynamic QRIS, Webhook Callback, Manual Check, Snap Modal, dan Withdrawal tracking).

---

## 🔑 1. Environment & Kredensial API

Simpan kredensial di `.env` (jangan commit ke repository):

```env
KLIKQRIS_BASE_URL=https://klikqris.com/api
KLIKQRIS_API_KEY=your_x_api_key_here
KLIKQRIS_MERCHANT_ID=your_id_merchant_here
NEXT_PUBLIC_APP_URL=https://yourdomain.com
```

### Required Request Headers
Setiap request ke API KlikQRIS wajib menyertakan header:
* `Content-Type: application/json`
* `x-api-key: <KLIKQRIS_API_KEY>`
* `id_merchant: <KLIKQRIS_MERCHANT_ID>`

---

## 🛠️ 2. Core Service Helper (`lib/klikqris.ts`)

```typescript
// lib/klikqris.ts

const BASE_URL = process.env.KLIKQRIS_BASE_URL || 'https://klikqris.com/api';
const API_KEY = process.env.KLIKQRIS_API_KEY!;
const MERCHANT_ID = process.env.KLIKQRIS_MERCHANT_ID!;

export interface CreateQrisRequest {
  order_id: string;
  amount: number;
  keterangan?: string;
  callback_url?: string;
}

export interface CreateQrisResponseData {
  order_id: string;
  nama_toko: string;
  tanggal: string;
  notifwa: number;
  mdr: string;
  redirect_url: string;
  amount_uniq: string;
  amount: string;
  total_amount: string; // Angka tagihan akhir (termasuk kode unik)
  status: 'PENDING' | 'SUCCESS' | 'EXPIRED';
  notified_expired: number;
  qris_url: string | null;
  expired_at: string;
  paid_at: string | null;
  signature: string; // Simpan di database untuk validasi webhook
  keterangan: string;
  expired_menit: string;
  created_at: string;
  updated_at: string;
  qris_image: string; // Data URL Base64 image
}

export interface KlikQrisApiResponse<T> {
  status: boolean;
  message?: string;
  data: T;
}

export interface KlikQrisWebhookPayload {
  order_id: string;
  status: 'PAID' | 'EXPIRED' | 'SUCCESS';
  amount: number;
  total_amount: number;
  payment_date?: string;
  created_at: string;
  updated_at: string;
  keterangan?: string;
  direct_url?: string;
  signature: string;
}

/**
 * 1. Membuat Transaksi QRIS Dinamis
 */
export async function createQrisTransaction(params: CreateQrisRequest): Promise<CreateQrisResponseData> {
  const payload = {
    order_id: params.order_id,
    id_merchant: MERCHANT_ID,
    amount: Math.round(params.amount),
    keterangan: params.keterangan || `Invoice #${params.order_id}`,
    callback_url: params.callback_url || `${process.env.NEXT_PUBLIC_APP_URL}/api/payment/webhook`,
  };

  const response = await fetch(`${BASE_URL}/qris/create`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': API_KEY,
      'id_merchant': MERCHANT_ID,
    },
    body: JSON.stringify(payload),
    cache: 'no-store',
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`KlikQRIS Create Error (${response.status}): ${errorText}`);
  }

  const result: KlikQrisApiResponse<CreateQrisResponseData> = await response.json();
  if (!result.status || !result.data) {
    throw new Error(result.message || 'Gagal membuat tagihan QRIS');
  }

  return result.data;
}

/**
 * 2. Cek Status Transaksi Secara Manual
 */
export async function checkQrisStatus(orderId: string): Promise<CreateQrisResponseData> {
  const response = await fetch(`${BASE_URL}/qris/status/${encodeURIComponent(orderId)}`, {
    method: 'GET',
    headers: {
      'x-api-key': API_KEY,
      'id_merchant': MERCHANT_ID,
    },
    cache: 'no-store',
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`KlikQRIS Status Error (${response.status}): ${errorText}`);
  }

  const result: KlikQrisApiResponse<CreateQrisResponseData> = await response.json();
  return result.data;
}

/**
 * 3. Mengambil Histori Transaksi (Paginated)
 */
export async function getQrisHistory(page = 1) {
  const response = await fetch(`${BASE_URL}/qris/history?page=${page}`, {
    method: 'GET',
    headers: {
      'x-api-key': API_KEY,
      'id_merchant': MERCHANT_ID,
    },
    cache: 'no-store',
  });

  return await response.json();
}

/**
 * 4. Melacak Status Withdrawal (Pencairan Dana)
 */
export async function getWithdrawalOrders(params?: {
  status?: 'success' | 'pending';
  order_id?: string;
  start_date?: string;
  end_date?: string;
  limit?: number;
}) {
  const query = new URLSearchParams();
  if (params?.status) query.append('status', params.status);
  if (params?.order_id) query.append('order_id', params.order_id);
  if (params?.start_date) query.append('start_date', params.start_date);
  if (params?.end_date) query.append('end_date', params.end_date);
  if (params?.limit) query.append('limit', params.limit.toString());

  const url = `${BASE_URL}/withdraw/orders${query.toString() ? `?${query.toString()}` : ''}`;
  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'x-api-key': API_KEY,
      'id_merchant': MERCHANT_ID,
    },
    cache: 'no-store',
  });

  return await response.json();
}
```

---

## ⚡ 3. API Route: Create Transaction (`app/api/payment/create/route.ts`)

```typescript
import { NextRequest, NextResponse } from 'next/server';
import { createQrisTransaction } from '@/lib/klikqris';
import { prisma } from '@/lib/prisma';

export async function POST(req: NextRequest) {
  try {
    const { orderId, amount, note } = await req.json();

    if (!orderId || !amount) {
      return NextResponse.json({ error: 'orderId dan amount wajib diisi' }, { status: 400 });
    }

    // 1. Panggil API KlikQRIS
    const qrisData = await createQrisTransaction({
      order_id: orderId,
      amount: Number(amount),
      keterangan: note,
    });

    // 2. Simpan transaksi di database (termasuk signature & total_amount)
    await prisma.transaction.create({
      data: {
        orderId: qrisData.order_id,
        amount: Number(qrisData.amount),
        totalAmount: Number(qrisData.total_amount), // Wajib tampilkan total_amount ke user (karena ada kode unik)
        status: 'PENDING',
        qrisUrl: qrisData.qris_url,
        qrisImage: qrisData.qris_image,
        signature: qrisData.signature, // Disimpan untuk validasi webhook double-security
        expiredAt: new Date(qrisData.expired_at),
      },
    });

    return NextResponse.json({
      success: true,
      data: {
        orderId: qrisData.order_id,
        totalAmount: qrisData.total_amount,
        qrisImage: qrisData.qris_image,
        qrisUrl: qrisData.qris_url,
        signature: qrisData.signature,
        expiredAt: qrisData.expired_at,
      },
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message || 'Internal Server Error' }, { status: 500 });
  }
}
```

---

## 🛡️ 4. API Route: Webhook Handler (`app/api/payment/webhook/route.ts`)

> [!IMPORTANT]
> **Aturan Wajib Webhook KlikQRIS**:
> 1. **Response HTTP 200 OK**: Wajib selalu mengembalikan 200 OK agar KlikQRIS tidak mengulang notifikasi.
> 2. **Double Security (Signature Matching)**: Bandingkan `signature` yang diterima dengan `signature` tersimpan di database saat pembuatan transaksi.
> 3. **Idempotency (Cegah Eksekusi Ganda)**: Hanya proses status `PAID` jika transaksi di database masih berstatus `PENDING` atau `EXPIRED`. Abaikan jika sudah `PAID` / `SUCCESS`.

```typescript
import { NextRequest, NextResponse } from 'next/server';
import { KlikQrisWebhookPayload } from '@/lib/klikqris';
import { prisma } from '@/lib/prisma';

export async function POST(req: NextRequest) {
  try {
    const payload: KlikQrisWebhookPayload = await req.json();

    const { order_id, status, signature, total_amount, payment_date } = payload;

    if (!order_id || !signature) {
      return NextResponse.json({ message: 'Invalid payload' }, { status: 200 });
    }

    // 1. Cari transaksi di Database
    const existingTransaction = await prisma.transaction.findUnique({
      where: { orderId: order_id },
    });

    if (!existingTransaction) {
      console.warn(`[Webhook KlikQRIS] Transaksi tidak ditemukan: ${order_id}`);
      return NextResponse.json({ message: 'Transaction not found' }, { status: 200 });
    }

    // 2. Double Security: Validasi Signature
    if (existingTransaction.signature !== signature) {
      console.error(`[Webhook KlikQRIS] Fake webhook detected! Invalid signature for ${order_id}`);
      return NextResponse.json({ message: 'Signature mismatch' }, { status: 200 });
    }

    // 3. Tangani Perubahan Status Transaksi
    if (status === 'PAID' || status === 'SUCCESS') {
      // Cegah eksekusi / pengiriman ganda jika transaksi sudah diproses sebelumnya
      if (existingTransaction.status === 'PAID' || existingTransaction.status === 'SUCCESS') {
        return NextResponse.json({ message: 'Already processed' }, { status: 200 });
      }

      // Update transaksi & kirim produk ke pelanggan dalam satu transaksi database
      await prisma.$transaction(async (tx) => {
        await tx.transaction.update({
          where: { orderId: order_id },
          data: {
            status: 'PAID',
            paidAt: payment_date ? new Date(payment_date) : new Date(),
          },
        });

        // Contoh: Aktifkan langganan / kirim undangan / update status user
        // await tx.user.update({ ... });
      });

      console.log(`[Webhook KlikQRIS] Transaksi ${order_id} BERHASIL dibayar.`);
    } else if (status === 'EXPIRED') {
      if (existingTransaction.status === 'PENDING') {
        await prisma.transaction.update({
          where: { orderId: order_id },
          data: { status: 'EXPIRED' },
        });
        console.log(`[Webhook KlikQRIS] Transaksi ${order_id} KADALUARSA.`);
      }
    }

    // Selalu respon HTTP 200 OK
    return NextResponse.json({ status: true, message: 'Webhook processed' }, { status: 200 });
  } catch (error) {
    console.error('[Webhook KlikQRIS Error]:', error);
    // Tetap kembalikan 200 OK ke KlikQRIS server
    return NextResponse.json({ status: false, error: 'Internal Error' }, { status: 200 });
  }
}
```

---

## 🎨 5. Frontend Integration

### A. Tampilan QRIS Dinamis Standar (Base64 / Image)
Pastikan user mentransfer persis sesuai `total_amount` (karena ada kode unik otomatis):

```tsx
'use client';

interface QrisDisplayProps {
  orderId: string;
  totalAmount: number;
  qrisImage: string; // data:image/png;base64,...
  expiredAt: string;
}

export function QrisDisplay({ orderId, totalAmount, qrisImage, expiredAt }: QrisDisplayProps) {
  return (
    <div className="flex flex-col items-center rounded-2xl bg-white p-6 shadow-md border text-neutral-900 max-w-sm mx-auto text-center">
      <h3 className="text-lg font-bold">Scan QRIS untuk Bayar</h3>
      <p className="text-xs text-neutral-500 mb-2">Order ID: {orderId}</p>

      {/* Gambar QRIS Base64 */}
      <div className="my-3 p-2 bg-white rounded-xl border border-neutral-200">
        <img src={qrisImage} alt="QRIS Code" className="w-56 h-56 object-contain" />
      </div>

      <div className="bg-amber-50 border border-amber-200 rounded-xl p-3 w-full my-2 text-left">
        <p className="text-xs text-amber-800 font-medium">Total yang Wajib Ditransfer:</p>
        <p className="text-2xl font-black text-amber-900">
          Rp {Number(totalAmount).toLocaleString('id-ID')}
        </p>
        <p className="text-[11px] text-amber-700 mt-1">
          *Termasuk kode unik agar verifikasi otomatis realtime.
        </p>
      </div>

      <p className="text-xs text-neutral-400 mt-2">
        Berlaku hingga: {new Date(expiredAt).toLocaleTimeString('id-ID')} WIB
      </p>
    </div>
  );
}
```

---

### B. Popup Snap Payment Modal (Overlay di Website)

Jika ingin pelanggan menyelesaikan pembayaran secara overlay modal tanpa reload/redirect:

```html
<!-- Tombol Bayar dengan data-signature dari response API /qris/create -->
<button 
  id="btnPay" 
  data-signature="SIGNATURE_DARI_RESPONSE_API" 
  class="btn btn-primary"
>
  Bayar Sekarang
</button>

<!-- Script Snap Payment KlikQRIS -->
<script>
  var script = document.createElement('script');
  script.src = "https://klikqris.com/js/payment-snap.js?t=" + new Date().getTime();
  document.body.appendChild(script);
</script>
```

---

## 📌 Checklist Praktis Integrasi KlikQRIS

- [ ] Pastikan `KLIKQRIS_API_KEY` dan `KLIKQRIS_MERCHANT_ID` terpasang di `.env`.
- [ ] Simpan field `signature` saat pembuatan invoice (`/qris/create`).
- [ ] Tampilkan `total_amount` (bukan nominal awal `amount`) pada UI pelanggan.
- [ ] Buat Webhook endpoint dengan validasi `signature` yang cocok.
- [ ] Lindungi Webhook dengan idempotency check (jangan kirim produk 2 kali).
- [ ] Kembalikan HTTP `200 OK` pada webhook response.
