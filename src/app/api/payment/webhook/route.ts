import { NextResponse } from "next/server";
import { KlikQrisWebhookPayload } from "@/lib/klikqris";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

export async function POST(req: Request) {
  try {
    const payload: KlikQrisWebhookPayload = await req.json();
    const { order_id, status, signature, payment_date } = payload;

    if (!order_id || !signature) {
      return NextResponse.json({ message: "Invalid payload" }, { status: 200 });
    }

    // 1. Cari transaksi di Database
    let existingTransaction: any = null;
    if ((prisma as any).transaction) {
      existingTransaction = await (prisma as any).transaction.findUnique({
        where: { orderId: order_id },
      });
    }

    if (!existingTransaction) {
      console.warn(`[Webhook KlikQRIS] Transaksi tidak ditemukan: ${order_id}`);
      return NextResponse.json({ message: "Transaction not found" }, { status: 200 });
    }

    // 2. Double Security: Validasi Signature
    if (existingTransaction.signature && existingTransaction.signature !== signature) {
      console.error(`[Webhook KlikQRIS] Fake webhook detected! Invalid signature for ${order_id}`);
      return NextResponse.json({ message: "Signature mismatch" }, { status: 200 });
    }

    // 3. Tangani Perubahan Status Transaksi
    if (status === "PAID" || status === "SUCCESS") {
      // Idempotency: Cegah eksekusi ganda jika transaksi sudah diproses sebelumnya
      if (existingTransaction.status === "PAID" || existingTransaction.status === "SUCCESS") {
        return NextResponse.json({ message: "Already processed" }, { status: 200 });
      }

      if ((prisma as any).transaction) {
        await (prisma as any).transaction.update({
          where: { orderId: order_id },
          data: {
            status: "PAID",
            paidAt: payment_date ? new Date(payment_date) : new Date(),
          },
        });
      }

      // Activate User Order
      await prisma.order.updateMany({
        where: { id_user: existingTransaction.id_user },
        data: {
          status: 1,
          id_paket: existingTransaction.id_paket || 1,
        },
      });

      console.log(`[Webhook KlikQRIS] Transaksi ${order_id} BERHASIL dibayar & paket diaktifkan.`);
    } else if (status === "EXPIRED") {
      if (existingTransaction.status === "PENDING" && (prisma as any).transaction) {
        await (prisma as any).transaction.update({
          where: { orderId: order_id },
          data: { status: "EXPIRED" },
        });
        console.log(`[Webhook KlikQRIS] Transaksi ${order_id} KADALUARSA.`);
      }
    }

    // Selalu respon HTTP 200 OK ke KlikQRIS
    return NextResponse.json({ status: true, message: "Webhook processed successfully" }, { status: 200 });
  } catch (error) {
    console.error("[Webhook KlikQRIS Error]:", error);
    // Tetap kembalikan 200 OK ke KlikQRIS server
    return NextResponse.json({ status: false, error: "Internal Error" }, { status: 200 });
  }
}
