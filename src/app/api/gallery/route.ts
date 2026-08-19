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

    const albums = await prisma.album.findMany({
      where: { id_user: userId },
      orderBy: { id: "asc" },
    });

    return NextResponse.json({ success: true, albums });
  } catch (error: any) {
    console.error("Get Gallery Error:", error);
    return NextResponse.json({ error: "Gagal mengambil data album foto" }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const userId = await getEffectiveUserId(request);
    if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await request.json();
    const { albumUrl, albumList } = body;

    if (Array.isArray(albumList)) {
      await prisma.album.deleteMany({ where: { id_user: userId } });
      if (albumList.length > 0) {
        await prisma.album.createMany({
          data: albumList.map((a: any) => ({
            id_user: userId,
            album: typeof a === "string" ? a : a.album || "",
          })),
        });
      }

      const updated = await prisma.album.findMany({
        where: { id_user: userId },
        orderBy: { id: "asc" },
      });

      return NextResponse.json({ success: true, albums: updated });
    }

    if (!albumUrl) {
      return NextResponse.json({ error: "URL foto album diperlukan" }, { status: 400 });
    }

    const newAlbum = await prisma.album.create({
      data: {
        id_user: userId,
        album: albumUrl,
      },
    });

    return NextResponse.json({ success: true, album: newAlbum });
  } catch (error: any) {
    console.error("Save Gallery Error:", error);
    return NextResponse.json({ error: "Gagal menyimpan album foto" }, { status: 500 });
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
      return NextResponse.json({ error: "ID album diperlukan" }, { status: 400 });
    }

    const existing = await prisma.album.findFirst({
      where: { id: parseInt(idParam, 10), id_user: userId },
    });

    if (!existing) {
      return NextResponse.json({ error: "Foto album tidak ditemukan" }, { status: 404 });
    }

    await prisma.album.delete({ where: { id: existing.id } });

    return NextResponse.json({ success: true, message: "Foto album berhasil dihapus" });
  } catch (error: any) {
    console.error("Delete Gallery Error:", error);
    return NextResponse.json({ error: "Gagal menghapus foto album" }, { status: 500 });
  }
}
