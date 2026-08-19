import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getEffectiveUserId, getSessionUser } from "@/lib/session";

export const dynamic = "force-dynamic";

// GET all themes and categories
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    let userId = searchParams.get("userId") ? parseInt(searchParams.get("userId")!, 10) : null;

    if (!userId) {
      userId = await getEffectiveUserId(request);
    }

    const rawThemes = await prisma.theme.findMany({
      orderBy: { id: "asc" },
    });

    const categories = await prisma.themeCategory.findMany({
      orderBy: { name: "asc" },
    });

    const categoryMap = new Map<number, { id: number; name: string; slug: string }>();
    categories.forEach((c: any) => categoryMap.set(c.id, c));

    const themes = rawThemes.map((t: any) => ({
      ...t,
      category: categoryMap.get(t.category_id) || null,
    }));

    let currentActiveTheme = "hwflower";
    if (userId) {
      const order = await prisma.order.findFirst({
        where: { id_user: userId },
        select: { theme: true },
      });
      if (order?.theme) currentActiveTheme = order.theme;
    }

    return NextResponse.json({
      success: true,
      themes,
      categories,
      activeTheme: currentActiveTheme,
    });
  } catch (error: any) {
    console.error("Themes API Error:", error);
    return NextResponse.json(
      { error: error?.message || "Gagal mengambil data tema" },
      { status: 500 }
    );
  }
}

// POST create new theme (Admin Only)
export async function POST(request: Request) {
  try {
    const session = await getSessionUser(request);
    if (!session || session.role !== "admin") {
      return NextResponse.json(
        { error: "Unauthorized. Hanya Super Administrator yang dapat menambahkan tema baru." },
        { status: 403 }
      );
    }

    const body = await request.json();
    const { nama_theme, kode_theme, category_id = 1, status = 1 } = body;

    if (!nama_theme || !kode_theme) {
      return NextResponse.json(
        { error: "Nama tema dan Kode tema wajib diisi" },
        { status: 400 }
      );
    }

    // Check duplicate
    const existing = await prisma.theme.findFirst({
      where: {
        OR: [{ nama_theme }, { kode_theme }],
      },
    });

    if (existing) {
      return NextResponse.json(
        { error: "Nama tema atau kode tema sudah ada" },
        { status: 400 }
      );
    }

    const newTheme = await prisma.theme.create({
      data: {
        nama_theme: nama_theme.toLowerCase().trim(),
        kode_theme: kode_theme.toUpperCase().trim(),
        category_id: parseInt(String(category_id), 10) || 1,
        status: parseInt(String(status), 10),
      },
    });

    return NextResponse.json({ success: true, theme: newTheme });
  } catch (error: any) {
    console.error("Create Theme Error:", error);
    return NextResponse.json(
      { error: error?.message || "Gagal membuat tema baru" },
      { status: 500 }
    );
  }
}

// PUT update theme OR apply theme to user
export async function PUT(request: Request) {
  try {
    const sessionUserId = await getEffectiveUserId(request);
    const body = await request.json();
    const { id, nama_theme, kode_theme, category_id, status, applyToUserId, themeCodeToApply } = body;

    // Action 1: Apply active theme to user order
    if (themeCodeToApply) {
      const targetUserId = applyToUserId ? parseInt(String(applyToUserId), 10) : sessionUserId || 1;
      const existingOrder = await prisma.order.findFirst({
        where: { id_user: targetUserId },
      });

      if (existingOrder) {
        // Verify subscription
        if (existingOrder.status === 0) {
          const user = await prisma.user.findUnique({ where: { id: targetUserId } });
          if (user?.role !== "admin") {
            return NextResponse.json(
              {
                error: "Paket langganan Anda belum aktif. Silakan pilih paket dan lakukan pembayaran via QRIS terlebih dahulu untuk menerapkan tema ini.",
                requiresSubscription: true,
              },
              { status: 402 }
            );
          }
        }

        await prisma.order.update({
          where: { id: existingOrder.id },
          data: { theme: themeCodeToApply },
        });
      } else {
        // If order didn't exist for user, create it
        await prisma.order.create({
          data: {
            id_user: targetUserId,
            domain: `user-${targetUserId}`,
            theme: themeCodeToApply,
            id_paket: 1,
            status: 1,
          },
        });
      }

      return NextResponse.json({
        success: true,
        message: `Tema aktif berhasil diubah menjadi ${themeCodeToApply}`,
      });
    }

    // Action 2: Modify / Edit theme properties (Admin Only)
    const session = await getSessionUser(request);
    if (!session || session.role !== "admin") {
      return NextResponse.json(
        { error: "Unauthorized. Pengguna biasa tidak diizinkan mengedit detail atau nama tema." },
        { status: 403 }
      );
    }

    if (!id) {
      return NextResponse.json({ error: "ID tema diperlukan" }, { status: 400 });
    }

    const dataToUpdate: any = {};
    if (nama_theme !== undefined) dataToUpdate.nama_theme = nama_theme.toLowerCase().trim();
    if (kode_theme !== undefined) dataToUpdate.kode_theme = kode_theme.toUpperCase().trim();
    if (category_id !== undefined) dataToUpdate.category_id = parseInt(String(category_id), 10);
    if (status !== undefined) dataToUpdate.status = parseInt(String(status), 10);

    const updated = await prisma.theme.update({
      where: { id: parseInt(String(id), 10) },
      data: dataToUpdate,
    });

    return NextResponse.json({ success: true, theme: updated });
  } catch (error: any) {
    console.error("Update Theme Error:", error);
    return NextResponse.json(
      { error: error?.message || "Gagal memperbarui tema" },
      { status: 500 }
    );
  }
}

// DELETE remove theme (Admin Only)
export async function DELETE(request: Request) {
  try {
    const session = await getSessionUser(request);
    if (!session || session.role !== "admin") {
      return NextResponse.json(
        { error: "Unauthorized. Pengguna biasa tidak diizinkan menghapus tema." },
        { status: 403 }
      );
    }

    const { searchParams } = new URL(request.url);
    const idParam = searchParams.get("id");

    if (!idParam) {
      return NextResponse.json({ error: "ID tema diperlukan" }, { status: 400 });
    }

    const existing = await prisma.theme.findFirst({
      where: { id: parseInt(idParam, 10) },
    });

    if (!existing) {
      return NextResponse.json({ error: "Tema tidak ditemukan" }, { status: 404 });
    }

    await prisma.theme.delete({
      where: { id: existing.id },
    });

    return NextResponse.json({
      success: true,
      message: `Tema ${existing.nama_theme} berhasil dihapus`,
    });
  } catch (error: any) {
    console.error("Delete Theme Error:", error);
    return NextResponse.json(
      { error: error?.message || "Gagal menghapus tema" },
      { status: 500 }
    );
  }
}
