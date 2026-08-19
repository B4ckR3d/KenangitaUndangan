import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getEffectiveUserId } from "@/lib/session";
import { checkQrisStatus } from "@/lib/klikqris";

export const dynamic = "force-dynamic";

export async function GET(req: Request) {
  try {
    const userId = await getEffectiveUserId(req);
    if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { searchParams } = new URL(req.url);
    let orderId = searchParams.get("orderId");

    // 1. Find transaction by orderId or get latest pending transaction for this user
    let transaction: any = null;

    if (orderId) {
      transaction = await (prisma as any).transaction.findFirst({
        where: { orderId, id_user: userId },
      });
    } else {
      transaction = await (prisma as any).transaction.findFirst({
        where: { id_user: userId },
        orderBy: { id: "desc" },
      });
      if (transaction) orderId = transaction.orderId;
    }

    if (!transaction) {
      // Check current order status
      const userOrder = await prisma.order.findFirst({
        where: { id_user: userId },
      });

      return NextResponse.json({
        success: true,
        status: userOrder?.status === 1 ? "PAID" : "PENDING",
        isSubscribed: userOrder?.status === 1,
        activePaketId: userOrder?.id_paket || null,
        message: userOrder?.status === 1 ? "Paket aktif" : "Belum ada transaksi aktif",
      });
    }

    // 2. If status is PENDING, check live KlikQRIS API
    if (transaction.status === "PENDING" && orderId) {
      try {
        const liveStatus = await checkQrisStatus(orderId);
        console.log(`[KlikQRIS Live Check for ${orderId}]:`, liveStatus);

        const statusRaw = (liveStatus?.status || "").toString().toUpperCase();
        const isPaid =
          statusRaw === "PAID" ||
          statusRaw === "SUCCESS" ||
          statusRaw === "SETTLEMENT" ||
          statusRaw === "BERHASIL" ||
          liveStatus?.paid_at !== null;

        if (isPaid) {
          // Update transaction
          await (prisma as any).transaction.update({
            where: { id: transaction.id },
            data: {
              status: "PAID",
              paidAt: liveStatus?.paid_at ? new Date(liveStatus.paid_at) : new Date(),
            },
          });

          // Activate User's Order
          const existingOrder = await prisma.order.findFirst({
            where: { id_user: userId },
          });

          if (existingOrder) {
            await prisma.order.update({
              where: { id: existingOrder.id },
              data: {
                status: 1,
                id_paket: transaction.id_paket || existingOrder.id_paket || 1,
              },
            });
          } else {
            await prisma.order.create({
              data: {
                id_user: userId,
                domain: `user-${userId}`,
                theme: "hwflower",
                id_paket: transaction.id_paket || 1,
                status: 1,
              },
            });
          }

          return NextResponse.json({
            success: true,
            status: "PAID",
            paidAt: liveStatus?.paid_at || new Date().toISOString(),
            isSubscribed: true,
            activePaketId: transaction.id_paket || 1,
            message: "Pembayaran terverifikasi! Paket langganan berhasil diaktifkan.",
          });
        }
      } catch (err: any) {
        console.warn("[KlikQRIS Live Check Exception]:", err.message);
      }
    }

    return NextResponse.json({
      success: true,
      status: transaction.status,
      totalAmount: transaction.totalAmount,
      paidAt: transaction.paidAt,
      isSubscribed: transaction.status === "PAID",
      activePaketId: transaction.id_paket || 1,
    });
  } catch (error: any) {
    console.error("Check Payment Status Error:", error);
    return NextResponse.json({ error: "Gagal memeriksa status pembayaran" }, { status: 500 });
  }
}

// POST endpoint: Manual instant activation (or sandbox simulated trigger)
export async function POST(req: Request) {
  try {
    const userId = await getEffectiveUserId(req);
    if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { orderId, id_paket } = await req.json();

    let targetPaketId = id_paket ? parseInt(String(id_paket), 10) : 1;

    if (orderId) {
      const transaction = await (prisma as any).transaction.findFirst({
        where: { orderId },
      });
      if (transaction) {
        targetPaketId = transaction.id_paket || targetPaketId;
        await (prisma as any).transaction.update({
          where: { id: transaction.id },
          data: {
            status: "PAID",
            paidAt: new Date(),
          },
        });
      }
    }

    // Activate user's order
    const existingOrder = await prisma.order.findFirst({
      where: { id_user: userId },
    });

    if (existingOrder) {
      await prisma.order.update({
        where: { id: existingOrder.id },
        data: {
          status: 1,
          id_paket: targetPaketId,
        },
      });
    } else {
      await prisma.order.create({
        data: {
          id_user: userId,
          domain: `user-${userId}`,
          theme: "hwflower",
          id_paket: targetPaketId,
          status: 1,
        },
      });
    }

    return NextResponse.json({
      success: true,
      message: "Paket langganan berhasil diaktifkan!",
      status: "PAID",
      activePaketId: targetPaketId,
    });
  } catch (error: any) {
    console.error("Activate Payment Error:", error);
    return NextResponse.json({ error: "Gagal memproses aktivasi paket" }, { status: 500 });
  }
}
