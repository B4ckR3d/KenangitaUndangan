import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getEffectiveUserId } from "@/lib/session";

export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    let userId = searchParams.get("userId") ? parseInt(searchParams.get("userId")!, 10) : null;

    if (!userId) {
      userId = await getEffectiveUserId(request);
    }

    if (!userId) {
      return NextResponse.json({ error: "User ID diperlukan" }, { status: 400 });
    }

    const comments = await prisma.komen.findMany({
      where: { id_user: userId },
      orderBy: { created_at: "desc" },
    });

    return NextResponse.json({ success: true, comments });
  } catch (error: any) {
    console.error("Fetch Comments Error:", error);
    return NextResponse.json({ error: "Gagal mengambil ucapan" }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const { nama_komen, isi_komen, id_user } = await request.json();

    if (!nama_komen || !isi_komen || !id_user) {
      return NextResponse.json(
        { error: "Nama, ucapan, dan ID user wajib diisi" },
        { status: 400 }
      );
    }

    const comment = await prisma.komen.create({
      data: {
        nama_komen,
        isi_komen,
        id_user: parseInt(id_user, 10),
      },
    });

    return NextResponse.json({ success: true, comment });
  } catch (error: any) {
    console.error("Create Comment Error:", error);
    return NextResponse.json({ error: "Gagal menyimpan ucapan" }, { status: 500 });
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
      return NextResponse.json({ error: "ID ucapan diperlukan" }, { status: 400 });
    }

    const existing = await prisma.komen.findFirst({
      where: { id_komen: parseInt(idParam, 10), id_user: userId },
    });

    if (!existing) {
      return NextResponse.json({ error: "Ucapan tidak ditemukan" }, { status: 404 });
    }

    await prisma.komen.delete({ where: { id_komen: existing.id_komen } });

    return NextResponse.json({ success: true, message: "Ucapan berhasil dihapus" });
  } catch (error: any) {
    console.error("Delete Comment Error:", error);
    return NextResponse.json({ error: "Gagal menghapus ucapan" }, { status: 500 });
  }
}
