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

    const ceritaList = await prisma.cerita.findMany({
      where: { id_user: userId },
      orderBy: { id: "asc" },
    });

    return NextResponse.json({ success: true, ceritaList });
  } catch (error: any) {
    console.error("Get Cerita Error:", error);
    return NextResponse.json({ error: "Gagal mengambil cerita" }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const userId = await getEffectiveUserId(request);
    if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await request.json();
    const { ceritaList } = body;

    if (Array.isArray(ceritaList)) {
      // Bulk update/replace user stories
      await prisma.cerita.deleteMany({
        where: { id_user: userId },
      });

      if (ceritaList.length > 0) {
        await prisma.cerita.createMany({
          data: ceritaList.map((c: any) => ({
            id_user: userId,
            judul_cerita: c.judul_cerita || c.judul || "Momen",
            tanggal_cerita: c.tanggal_cerita || c.tanggal || "",
            isi_cerita: c.isi_cerita || c.isi || "",
          })),
        });
      }

      const updated = await prisma.cerita.findMany({
        where: { id_user: userId },
        orderBy: { id: "asc" },
      });

      return NextResponse.json({ success: true, ceritaList: updated });
    }

    // Single item create
    const { judul_cerita = "Momen Indah", tanggal_cerita = "", isi_cerita = "" } = body;
    const newCerita = await prisma.cerita.create({
      data: {
        id_user: userId,
        judul_cerita,
        tanggal_cerita,
        isi_cerita,
      },
    });

    return NextResponse.json({ success: true, cerita: newCerita });
  } catch (error: any) {
    console.error("Save Cerita Error:", error);
    return NextResponse.json({ error: "Gagal menyimpan cerita" }, { status: 500 });
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
      return NextResponse.json({ error: "ID cerita diperlukan" }, { status: 400 });
    }

    const existing = await prisma.cerita.findFirst({
      where: { id: parseInt(idParam, 10), id_user: userId },
    });

    if (!existing) {
      return NextResponse.json({ error: "Cerita tidak ditemukan" }, { status: 404 });
    }

    await prisma.cerita.delete({ where: { id: existing.id } });

    return NextResponse.json({ success: true, message: "Cerita berhasil dihapus" });
  } catch (error: any) {
    console.error("Delete Cerita Error:", error);
    return NextResponse.json({ error: "Gagal menghapus cerita" }, { status: 500 });
  }
}
