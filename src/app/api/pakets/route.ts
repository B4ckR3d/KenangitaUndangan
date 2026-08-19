import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getEffectiveUserId, getSessionUser } from "@/lib/session";
import { checkQrisStatus } from "@/lib/klikqris";

export const dynamic = "force-dynamic";

// Default standard feature sets
const DEFAULT_FEATURE_LISTS: Record<string, string[]> = {
  Silver: [
    "Masa Aktif 30 Hari",
    "Bebas Akses Tema Pilihan",
    "Navigasi Lokasi Google Maps",
    "Buku Tamu & Ucapan",
    "Countdown Timer Pernikahan",
  ],
  Gold: [
    "Masa Aktif 60 Hari",
    "Bebas Akses Semua Tema Premium",
    "Buku Tamu Digital & Ucapan",
    "Galeri Foto Prewedding (Hingga 10 Foto)",
    "Amplop Digital & Nomor Rekening",
    "Background Musik Eksklusif",
    "Navigasi Lokasi Google Maps",
  ],
  Diamond: [
    "Masa Aktif Selamanya (Unlimited)",
    "Bebas Akses Seluruh 57+ Tema Eksklusif",
    "Galeri Foto & Video Prewedding Tanpa Batas",
    "Amplop Digital & Barcode QRIS",
    "Fitur Cerita Cinta (Love Story)",
    "Buku Tamu & Konfirmasi Kehadiran (RSVP)",
    "Generator Link WhatsApp Otomatis per Tamu",
    "Background Musik Bebas Kustomisasi",
    "Dukungan Prioritas CS 24/7",
  ],
};

export async function GET(req: Request) {
  try {
    const userId = await getEffectiveUserId(req);

    const pakets = await prisma.paket.findMany({
      orderBy: { id_paket: "asc" },
    });

    // Format features
    const formattedPakets = pakets.map((p: any) => {
      let features: string[] = [];
      if (p.fitur_list) {
        try {
          features = JSON.parse(p.fitur_list);
        } catch {
          features = p.fitur_list.split(",").map((f: string) => f.trim());
        }
      }

      if (features.length === 0 && DEFAULT_FEATURE_LISTS[p.nama_paket]) {
        features = DEFAULT_FEATURE_LISTS[p.nama_paket];
      } else if (features.length === 0) {
        features = [
          `Masa Aktif ${p.masa_aktif} Hari`,
          p.tema_bebas ? "Bebas Semua Tema" : "Tema Standar",
          p.buku_tamu ? "Buku Tamu Digital" : "Tanpa Buku Tamu",
          p.kirim_hadiah ? "Amplop & Hadiah Digital" : "Amplop Standar",
          p.kirim_whatsapp ? "Kirim Undangan WA Otomatis" : "Tautan Standar",
        ];
      }

      return {
        ...p,
        features,
      };
    });

    let currentOrder: any = null;
    if (userId) {
      // Check if user has any pending transactions and verify with KlikQRIS
      try {
        if ((prisma as any).transaction) {
          const pendingTx = await (prisma as any).transaction.findFirst({
            where: { id_user: userId, status: "PENDING" },
            orderBy: { id: "desc" },
          });

          if (pendingTx) {
            const liveStatus = await checkQrisStatus(pendingTx.orderId);
            const statusRaw = (liveStatus?.status || "").toString().toUpperCase();
            const isPaid =
              statusRaw === "PAID" ||
              statusRaw === "SUCCESS" ||
              statusRaw === "SETTLEMENT" ||
              statusRaw === "BERHASIL" ||
              liveStatus?.paid_at !== null;

            if (isPaid) {
              await (prisma as any).transaction.update({
                where: { id: pendingTx.id },
                data: {
                  status: "PAID",
                  paidAt: liveStatus?.paid_at ? new Date(liveStatus.paid_at) : new Date(),
                },
              });

              await prisma.order.updateMany({
                where: { id_user: userId },
                data: {
                  status: 1,
                  id_paket: pendingTx.id_paket || 1,
                },
              });
            }
          }
        }
      } catch {
        // Silently skip if live check fails
      }

      currentOrder = await prisma.order.findFirst({
        where: { id_user: userId },
      });
    }

    const session = await getSessionUser(req);
    const isAdmin = session?.role === "admin" || userId === 999;

    return NextResponse.json({
      success: true,
      pakets: formattedPakets,
      currentOrder,
      isSubscribed: isAdmin ? true : currentOrder ? currentOrder.status === 1 : false,
      activePaketId: isAdmin ? 3 : currentOrder?.id_paket || null,
      isAdmin,
    });
  } catch (error: any) {
    console.error("Get Pakets Error:", error);
    return NextResponse.json({ error: "Gagal mengambil data paket" }, { status: 500 });
  }
}

// POST create new paket (Admin only)
export async function POST(req: Request) {
  try {
    const session = await getSessionUser(req);
    if (!session || session.role !== "admin") {
      return NextResponse.json({ error: "Unauthorized. Akses khusus admin." }, { status: 403 });
    }

    const body = await req.json();
    const {
      nama_paket,
      harga_paket,
      masa_aktif = 60,
      deskripsi = "",
      features = [],
    } = body;

    if (!nama_paket || !harga_paket) {
      return NextResponse.json({ error: "Nama dan harga paket wajib diisi" }, { status: 400 });
    }

    const newPaket = await prisma.paket.create({
      data: {
        nama_paket,
        harga_paket: String(harga_paket),
        masa_aktif: parseInt(String(masa_aktif), 10) || 60,
        deskripsi,
        fitur_list: JSON.stringify(features),
        buku_tamu: 1,
        tema_bebas: 1,
        kirim_hadiah: 1,
      },
    });

    return NextResponse.json({ success: true, paket: newPaket });
  } catch (error: any) {
    console.error("Create Paket Error:", error);
    return NextResponse.json({ error: error?.message || "Gagal membuat paket baru" }, { status: 500 });
  }
}

// PUT update paket (Admin only)
export async function PUT(req: Request) {
  try {
    const session = await getSessionUser(req);
    if (!session || session.role !== "admin") {
      return NextResponse.json({ error: "Unauthorized. Akses khusus admin." }, { status: 403 });
    }

    const body = await req.json();
    const {
      id_paket,
      nama_paket,
      harga_paket,
      masa_aktif,
      deskripsi,
      features,
    } = body;

    if (!id_paket) {
      return NextResponse.json({ error: "id_paket diperlukan" }, { status: 400 });
    }

    const dataToUpdate: any = {};
    if (nama_paket !== undefined) dataToUpdate.nama_paket = nama_paket;
    if (harga_paket !== undefined) dataToUpdate.harga_paket = String(harga_paket);
    if (masa_aktif !== undefined) dataToUpdate.masa_aktif = parseInt(String(masa_aktif), 10);
    if (deskripsi !== undefined) dataToUpdate.deskripsi = deskripsi;
    if (features !== undefined) dataToUpdate.fitur_list = JSON.stringify(features);

    const updated = await prisma.paket.update({
      where: { id_paket: parseInt(String(id_paket), 10) },
      data: dataToUpdate,
    });

    return NextResponse.json({ success: true, paket: updated });
  } catch (error: any) {
    console.error("Update Paket Error:", error);
    return NextResponse.json({ error: error?.message || "Gagal memperbarui paket" }, { status: 500 });
  }
}

// DELETE paket (Admin only)
export async function DELETE(req: Request) {
  try {
    const session = await getSessionUser(req);
    if (!session || session.role !== "admin") {
      return NextResponse.json({ error: "Unauthorized. Akses khusus admin." }, { status: 403 });
    }

    const { searchParams } = new URL(req.url);
    const idParam = searchParams.get("id");

    if (!idParam) {
      return NextResponse.json({ error: "id paket diperlukan" }, { status: 400 });
    }

    await prisma.paket.delete({
      where: { id_paket: parseInt(idParam, 10) },
    });

    return NextResponse.json({ success: true, message: "Paket berhasil dihapus" });
  } catch (error: any) {
    console.error("Delete Paket Error:", error);
    return NextResponse.json({ error: "Gagal menghapus paket" }, { status: 500 });
  }
}
