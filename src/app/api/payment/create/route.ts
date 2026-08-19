import { NextResponse } from "next/server";
import { createQrisTransaction } from "@/lib/klikqris";
import { prisma } from "@/lib/prisma";
import { getEffectiveUserId } from "@/lib/session";

export const dynamic = "force-dynamic";

export async function POST(req: Request) {
  try {
    const userId = await getEffectiveUserId(req);
    if (!userId) {
      return NextResponse.json({ error: "Unauthorized. Silakan login terlebih dahulu." }, { status: 401 });
    }

    const body = await req.json();
    const { id_paket, note } = body;

    if (!id_paket) {
      return NextResponse.json({ error: "ID Paket wajib dipilih" }, { status: 400 });
    }

    // 1. Find Paket
    const paket = await prisma.paket.findUnique({
      where: { id_paket: parseInt(String(id_paket), 10) },
    });

    if (!paket) {
      return NextResponse.json({ error: "Paket langganan tidak ditemukan" }, { status: 404 });
    }

    const amount = parseInt(paket.harga_paket || "0", 10) || 50000;
    const orderId = `INV-${userId}-${Date.now().toString().slice(-6)}`;

    // 2. Call KlikQRIS API
    const qrisData = await createQrisTransaction({
      order_id: orderId,
      amount,
      keterangan: note || `Langganan ${paket.nama_paket} - User #${userId}`,
    });

    // 3. Save Transaction safely in DB
    let transactionId = Date.now();
    try {
      if ((prisma as any).transaction) {
        const created = await (prisma as any).transaction.create({
          data: {
            id_user: userId,
            orderId: qrisData.order_id,
            id_paket: paket.id_paket,
            amount: Number(qrisData.amount),
            totalAmount: Number(qrisData.total_amount),
            status: "PENDING",
            qrisUrl: qrisData.qris_url,
            qrisImage: qrisData.qris_image,
            signature: qrisData.signature,
            expiredAt: new Date(qrisData.expired_at),
          },
        });
        transactionId = created.id;
      } else {
        // Fallback to pembayaran table if transaction model isn't mounted yet
        const created = await prisma.pembayaran.create({
          data: {
            id_user: userId,
            invoice: qrisData.order_id,
            harga: Number(qrisData.total_amount),
            status: 0,
            payment_type: "qris",
            transaction_status: "PENDING",
          },
        });
        transactionId = created.id;
      }
    } catch (dbErr: any) {
      console.warn("[Payment Create DB Warning]:", dbErr.message);
    }

    return NextResponse.json({
      success: true,
      data: {
        id: transactionId,
        orderId: qrisData.order_id,
        namaPaket: paket.nama_paket,
        amount: qrisData.amount,
        totalAmount: qrisData.total_amount,
        qrisImage: qrisData.qris_image,
        qrisUrl: qrisData.qris_url,
        signature: qrisData.signature,
        expiredAt: qrisData.expired_at,
      },
    });
  } catch (error: any) {
    console.error("Create Payment Error:", error);
    return NextResponse.json({ error: error?.message || "Gagal membuat invoice QRIS" }, { status: 500 });
  }
}
