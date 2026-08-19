import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getEffectiveUserId } from "@/lib/session";

export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  try {
    const userId = await getEffectiveUserId(request);
    if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const rekeningList = await prisma.rekening.findMany({
      where: { id_user: userId },
      orderBy: { id: "asc" },
    });

    return NextResponse.json({ success: true, rekeningList });
  } catch (error: any) {
    console.error("Get Rekening Error:", error);
    return NextResponse.json({ error: "Gagal mengambil data rekening" }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const userId = await getEffectiveUserId(request);
    if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await request.json();
    const { rekeningList } = body;

    if (Array.isArray(rekeningList)) {
      // Bulk update/replace user bank accounts
      await prisma.rekening.deleteMany({
        where: { id_user: userId },
      });

      if (rekeningList.length > 0) {
        await prisma.rekening.createMany({
          data: rekeningList.map((r: any) => ({
            id_user: userId,
            nama_bank: r.nama_bank || "BCA",
            no_rekening: r.no_rekening || "",
            nama_pemilik: r.nama_pemilik || r.pemilik || "",
            qrcode_bank: r.qrcode_bank || "",
          })),
        });
      }

      const updated = await prisma.rekening.findMany({
        where: { id_user: userId },
        orderBy: { id: "asc" },
      });

      return NextResponse.json({ success: true, rekeningList: updated });
    }

    // Single item create
    const { nama_bank = "BCA", no_rekening = "", nama_pemilik = "", qrcode_bank = "" } = body;
    const newRekening = await prisma.rekening.create({
      data: {
        id_user: userId,
        nama_bank,
        no_rekening,
        nama_pemilik,
        qrcode_bank,
      },
    });

    return NextResponse.json({ success: true, rekening: newRekening });
  } catch (error: any) {
    console.error("Save Rekening Error:", error);
    return NextResponse.json({ error: "Gagal menyimpan rekening" }, { status: 500 });
  }
}

export async function DELETE(request: Request) {
  try {
    const userId = await getEffectiveUserId(request);
    if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { searchParams } = new URL(request.url);
    const idParam = searchParams.get("id");

    if (!idParam) {
      return NextResponse.json({ error: "ID rekening diperlukan" }, { status: 400 });
    }

    const existing = await prisma.rekening.findFirst({
      where: { id: parseInt(idParam, 10), id_user: userId },
    });

    if (!existing) {
      return NextResponse.json({ error: "Rekening tidak ditemukan" }, { status: 404 });
    }

    await prisma.rekening.delete({ where: { id: existing.id } });

    return NextResponse.json({ success: true, message: "Rekening berhasil dihapus" });
  } catch (error: any) {
    console.error("Delete Rekening Error:", error);
    return NextResponse.json({ error: "Gagal menghapus rekening" }, { status: 500 });
  }
}
