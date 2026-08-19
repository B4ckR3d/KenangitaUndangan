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

    const tamuList = await prisma.tamu.findMany({
      where: { id_user: userId },
      orderBy: { id_tamu: "desc" },
    });

    const formattedTamu = tamuList.map((t) => ({
      ...t,
      almt_tamu: t.alamat_tamu || "",
    }));

    return NextResponse.json({ success: true, tamu: formattedTamu });
  } catch (error: any) {
    console.error("Get Tamu Error:", error);
    return NextResponse.json({ error: "Gagal mengambil data tamu" }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const userId = await getEffectiveUserId(request);
    if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await request.json();
    const { nama_tamu, almt_tamu, no_wa = "" } = body;

    if (!nama_tamu) {
      return NextResponse.json({ error: "Nama tamu wajib diisi" }, { status: 400 });
    }

    const newTamu = await prisma.tamu.create({
      data: {
        nama_tamu,
        alamat_tamu: almt_tamu || "-",
        nama_slug: encodeURIComponent(nama_tamu.toLowerCase().replace(/\s+/g, "+")),
        alamat_slug: encodeURIComponent((almt_tamu || "-").toLowerCase().replace(/\s+/g, "+")),
        no_wa: no_wa || "",
        qrcode: `qr_${Math.random().toString(36).substring(2, 10)}`,
        id_user: userId,
      },
    });

    return NextResponse.json({
      success: true,
      tamu: {
        ...newTamu,
        almt_tamu: newTamu.alamat_tamu,
      },
    });
  } catch (error: any) {
    console.error("Add Tamu Error:", error);
    return NextResponse.json({ error: "Gagal menambahkan tamu" }, { status: 500 });
  }
}

export async function DELETE(request: Request) {
  try {
    const userId = await getEffectiveUserId(request);
    if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { searchParams } = new URL(request.url);
    const idTamu = searchParams.get("id");

    if (!idTamu) {
      return NextResponse.json({ error: "ID Tamu diperlukan" }, { status: 400 });
    }

    const existing = await prisma.tamu.findFirst({
      where: { id_tamu: parseInt(idTamu, 10), id_user: userId },
    });

    if (!existing) {
      return NextResponse.json({ error: "Tamu tidak ditemukan" }, { status: 404 });
    }

    await prisma.tamu.delete({
      where: { id_tamu: existing.id_tamu },
    });

    return NextResponse.json({ success: true, message: "Tamu berhasil dihapus" });
  } catch (error: any) {
    console.error("Delete Tamu Error:", error);
    return NextResponse.json({ error: "Gagal menghapus tamu" }, { status: 500 });
  }
}
