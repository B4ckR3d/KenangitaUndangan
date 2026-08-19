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

    const acara = await prisma.acara.findMany({
      where: { id_user: userId },
      orderBy: { id_acara: "asc" },
    });

    return NextResponse.json({ success: true, acara });
  } catch (error: any) {
    console.error("Get Acara Error:", error);
    return NextResponse.json({ error: "Gagal mengambil data acara" }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const userId = await getEffectiveUserId(request);
    if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await request.json();
    const {
      nama_acara = "Acara Baru",
      tgl_acara = "",
      waktu_mulai = "08:00",
      waktu_akhir = "10:00",
      tempat_acara = "",
      alamat_acara = "",
      maps = "",
      set_countdown = "N",
    } = body;

    const newAcara = await prisma.acara.create({
      data: {
        id_user: userId,
        nama_acara,
        tgl_acara,
        waktu_mulai,
        waktu_akhir,
        tempat_acara,
        alamat_acara,
        maps,
        set_countdown,
      },
    });

    return NextResponse.json({ success: true, acara: newAcara });
  } catch (error: any) {
    console.error("Create Acara Error:", error);
    return NextResponse.json({ error: "Gagal membuat acara" }, { status: 500 });
  }
}

export async function PUT(request: Request) {
  try {
    const userId = await getEffectiveUserId(request);
    if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await request.json();
    const {
      id_acara,
      nama_acara,
      tgl_acara,
      waktu_mulai,
      waktu_akhir,
      tempat_acara,
      alamat_acara,
      maps,
      set_countdown,
    } = body;

    if (!id_acara) {
      return NextResponse.json({ error: "ID acara diperlukan" }, { status: 400 });
    }

    // Verify ownership
    const existing = await prisma.acara.findFirst({
      where: { id_acara: parseInt(id_acara, 10), id_user: userId },
    });

    if (!existing) {
      return NextResponse.json({ error: "Acara tidak ditemukan" }, { status: 404 });
    }

    const updated = await prisma.acara.update({
      where: { id_acara: existing.id_acara },
      data: {
        nama_acara: nama_acara !== undefined ? nama_acara : existing.nama_acara,
        tgl_acara: tgl_acara !== undefined ? tgl_acara : existing.tgl_acara,
        waktu_mulai: waktu_mulai !== undefined ? waktu_mulai : existing.waktu_mulai,
        waktu_akhir: waktu_akhir !== undefined ? waktu_akhir : existing.waktu_akhir,
        tempat_acara: tempat_acara !== undefined ? tempat_acara : existing.tempat_acara,
        alamat_acara: alamat_acara !== undefined ? alamat_acara : existing.alamat_acara,
        maps: maps !== undefined ? maps : existing.maps,
        set_countdown: set_countdown !== undefined ? set_countdown : existing.set_countdown,
      },
    });

    return NextResponse.json({ success: true, acara: updated });
  } catch (error: any) {
    console.error("Update Acara Error:", error);
    return NextResponse.json({ error: "Gagal memperbarui acara" }, { status: 500 });
  }
}

export async function DELETE(request: Request) {
  try {
    const userId = await getEffectiveUserId(request);
    if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { searchParams } = new URL(request.url);
    const idAcaraParam = searchParams.get("id");

    if (!idAcaraParam) {
      return NextResponse.json({ error: "ID acara diperlukan" }, { status: 400 });
    }

    const existing = await prisma.acara.findFirst({
      where: { id_acara: parseInt(idAcaraParam, 10), id_user: userId },
    });

    if (!existing) {
      return NextResponse.json({ error: "Acara tidak ditemukan" }, { status: 404 });
    }

    await prisma.acara.delete({
      where: { id_acara: existing.id_acara },
    });

    return NextResponse.json({ success: true, message: "Acara berhasil dihapus" });
  } catch (error: any) {
    console.error("Delete Acara Error:", error);
    return NextResponse.json({ error: "Gagal menghapus acara" }, { status: 500 });
  }
}
