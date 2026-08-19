import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getEffectiveUserId, getSessionUser } from "@/lib/session";
import fs from "fs";
import path from "path";

export const dynamic = "force-dynamic";

const DEFAULT_CATEGORIES = [
  { id: 1, name: "Mobile", slug: "mobile" },
  { id: 2, name: "Slide", slug: "slide" },
  { id: 3, name: "Scroll", slug: "scroll" },
];

const DEFAULT_THEMES = [
  { id: 1, nama_theme: "hwflower", kode_theme: "A001", status: 1, category_id: 1 },
  { id: 2, nama_theme: "tealflower", kode_theme: "A002", status: 1, category_id: 1 },
  { id: 3, nama_theme: "greenflower", kode_theme: "A003", status: 1, category_id: 1 },
  { id: 4, nama_theme: "prettyflower", kode_theme: "A004", status: 1, category_id: 1 },
  { id: 5, nama_theme: "blueroses", kode_theme: "A005", status: 1, category_id: 1 },
  { id: 6, nama_theme: "redroses", kode_theme: "A006", status: 1, category_id: 1 },
  { id: 8, nama_theme: "radiantyellow", kode_theme: "A007", status: 1, category_id: 1 },
  { id: 9, nama_theme: "radiantdark", kode_theme: "A009", status: 1, category_id: 1 },
  { id: 44, nama_theme: "purpleflower", kode_theme: "A010", status: 1, category_id: 1 },
  { id: 45, nama_theme: "sketchflower", kode_theme: "A011", status: 1, category_id: 1 },
  { id: 49, nama_theme: "beautiful-floral", kode_theme: "A012", status: 1, category_id: 3 },
  { id: 50, nama_theme: "tapis", kode_theme: "A013", status: 1, category_id: 2 },
  { id: 51, nama_theme: "rustic", kode_theme: "A014", status: 1, category_id: 2 },
  { id: 52, nama_theme: "arabian", kode_theme: "A015", status: 1, category_id: 3 },
  { id: 53, nama_theme: "jellyblack", kode_theme: "A016", status: 1, category_id: 2 },
  { id: 54, nama_theme: "floral", kode_theme: "A017", status: 1, category_id: 2 },
  { id: 55, nama_theme: "vintage-islamic", kode_theme: "A018", status: 1, category_id: 2 },
  { id: 59, nama_theme: "islamic1", kode_theme: "A019", status: 1, category_id: 3 },
  { id: 60, nama_theme: "watercolor1", kode_theme: "A020", status: 1, category_id: 3 },
  { id: 61, nama_theme: "twelve", kode_theme: "A021", status: 1, category_id: 3 },
  { id: 63, nama_theme: "mandala", kode_theme: "A022", status: 1, category_id: 2 },
  { id: 67, nama_theme: "watercolor2", kode_theme: "A026", status: 1, category_id: 3 },
  { id: 68, nama_theme: "watercolor3", kode_theme: "A027", status: 1, category_id: 3 },
  { id: 69, nama_theme: "watercolor4", kode_theme: "A028", status: 1, category_id: 3 },
  { id: 70, nama_theme: "watercolor5", kode_theme: "A029", status: 1, category_id: 3 },
  { id: 100, nama_theme: "royal-gold", kode_theme: "A030", status: 1, category_id: 1 },
  { id: 101, nama_theme: "blue-hydrangea", kode_theme: "A031", status: 1, category_id: 1 },
  { id: 102, nama_theme: "wayang-gold", kode_theme: "A032", status: 1, category_id: 2 },
  { id: 103, nama_theme: "purple-flowers", kode_theme: "A033", status: 1, category_id: 1 },
  { id: 104, nama_theme: "sakura-castle", kode_theme: "A034", status: 1, category_id: 1 },
  { id: 110, nama_theme: "light-begins", kode_theme: "M001", status: 1, category_id: 2 },
  { id: 111, nama_theme: "bikini-bottom", kode_theme: "M002", status: 1, category_id: 2 },
  { id: 112, nama_theme: "fairy-pink", kode_theme: "M003", status: 1, category_id: 2 },
  { id: 113, nama_theme: "shalvynne", kode_theme: "M004", status: 1, category_id: 2 },
  { id: 114, nama_theme: "turtles", kode_theme: "M005", status: 1, category_id: 2 },
  { id: 115, nama_theme: "pink-party", kode_theme: "M006", status: 1, category_id: 3 },
  { id: 116, nama_theme: "bonvoyage-v4", kode_theme: "M007", status: 1, category_id: 2 },
  { id: 117, nama_theme: "emerald-uici", kode_theme: "M008", status: 1, category_id: 2 },
  { id: 118, nama_theme: "shning", kode_theme: "M009", status: 1, category_id: 2 },
  { id: 119, nama_theme: "buka-bersama", kode_theme: "M010", status: 1, category_id: 2 },
  { id: 120, nama_theme: "fresh-halal-bihalal", kode_theme: "M011", status: 1, category_id: 2 },
  { id: 121, nama_theme: "adm-gathering", kode_theme: "M012", status: 1, category_id: 2 },
  { id: 122, nama_theme: "bedah-buku", kode_theme: "M013", status: 1, category_id: 2 },
  { id: 123, nama_theme: "kalibrasi-hati", kode_theme: "M014", status: 1, category_id: 2 },
  { id: 124, nama_theme: "konser-raya-maroon", kode_theme: "M015", status: 1, category_id: 2 },
  { id: 125, nama_theme: "lion-february", kode_theme: "M016", status: 1, category_id: 2 },
  { id: 126, nama_theme: "nusantara-gas", kode_theme: "M017", status: 1, category_id: 2 },
  { id: 127, nama_theme: "batak-merah", kode_theme: "M018", status: 1, category_id: 2 },
  { id: 128, nama_theme: "black-aysha", kode_theme: "M019", status: 1, category_id: 3 },
  { id: 129, nama_theme: "blue-butterflya", kode_theme: "M020", status: 1, category_id: 2 },
  { id: 130, nama_theme: "maroon-aceh", kode_theme: "M021", status: 1, category_id: 2 },
  { id: 131, nama_theme: "melayu-padang", kode_theme: "M022", status: 1, category_id: 3 },
  { id: 132, nama_theme: "minimalist-cream", kode_theme: "M023", status: 1, category_id: 3 },
  { id: 133, nama_theme: "phinisi-maroon", kode_theme: "M024", status: 1, category_id: 3 },
  { id: 134, nama_theme: "raden", kode_theme: "M025", status: 1, category_id: 2 },
  { id: 135, nama_theme: "sage-watercolor", kode_theme: "M026", status: 1, category_id: 2 },
];

async function ensureThemesSeeded() {
  try {
    // 1. Ensure categories exist
    const catCount = await prisma.themeCategory.count();
    if (catCount === 0) {
      for (const cat of DEFAULT_CATEGORIES) {
        await prisma.themeCategory.upsert({
          where: { id: cat.id },
          update: {},
          create: cat,
        });
      }
    }

    // 2. Ensure themes exist
    const themeCount = await prisma.theme.count();
    if (themeCount === 0) {
      for (const t of DEFAULT_THEMES) {
        await prisma.theme.upsert({
          where: { id: t.id },
          update: {},
          create: t,
        });
      }
    }

    // 3. Scan public/themes/*.php directory for any additional files
    const themesDir = path.join(process.cwd(), "public", "themes");
    if (fs.existsSync(themesDir)) {
      const files = fs.readdirSync(themesDir);
      for (const file of files) {
        if (file.endsWith(".php")) {
          const themeSlug = file.replace(/\.php$/, "").toLowerCase();
          const existing = await prisma.theme.findFirst({
            where: { nama_theme: themeSlug },
          });
          if (!existing) {
            await prisma.theme.create({
              data: {
                nama_theme: themeSlug,
                kode_theme: `T${themeSlug.slice(0, 3).toUpperCase()}`,
                category_id: 1,
                status: 1,
              },
            });
          }
        }
      }
    }
  } catch (err) {
    console.error("Auto-seed themes error:", err);
  }
}

// GET all themes and categories
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    let userId = searchParams.get("userId") ? parseInt(searchParams.get("userId")!, 10) : null;

    if (!userId) {
      userId = await getEffectiveUserId(request);
    }

    let rawThemes = await prisma.theme.findMany({
      orderBy: { id: "asc" },
    });

    // Auto-seed if database is empty
    if (rawThemes.length === 0) {
      await ensureThemesSeeded();
      rawThemes = await prisma.theme.findMany({
        orderBy: { id: "asc" },
      });
    }

    let categories = await prisma.themeCategory.findMany({
      orderBy: { name: "asc" },
    });

    if (categories.length === 0) {
      categories = DEFAULT_CATEGORIES;
    }

    const categoryMap = new Map<number, { id: number; name: string; slug: string }>();
    categories.forEach((c: any) => categoryMap.set(c.id, c));

    const themes = rawThemes.map((t: any) => ({
      ...t,
      category: categoryMap.get(t.category_id) || { id: 1, name: "Mobile", slug: "mobile" },
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
    const sessionUser = await getSessionUser(request);
    const sessionUserId = sessionUser?.id || (await getEffectiveUserId(request));
    const body = await request.json();
    const { id, nama_theme, kode_theme, category_id, status, applyToUserId, themeCodeToApply } = body;

    // Action 1: Apply active theme to user order
    if (themeCodeToApply) {
      const targetUserId = applyToUserId ? parseInt(String(applyToUserId), 10) : sessionUserId || 1;
      const isAdmin = sessionUser?.role === "admin" || targetUserId === 999;

      const existingOrder = await prisma.order.findFirst({
        where: { id_user: targetUserId },
      });

      if (existingOrder) {
        // Verify subscription only for non-admin users
        if (existingOrder.status === 0 && !isAdmin) {
          return NextResponse.json(
            {
              error: "Paket langganan Anda belum aktif. Silakan pilih paket dan lakukan pembayaran via QRIS terlebih dahulu untuk menerapkan tema ini.",
              requiresSubscription: true,
            },
            { status: 402 }
          );
        }

        await prisma.order.update({
          where: { id: existingOrder.id },
          data: {
            theme: themeCodeToApply,
            // Admin automatically gets active tier status
            status: isAdmin ? 1 : existingOrder.status,
            id_paket: isAdmin ? 3 : existingOrder.id_paket,
          },
        });
      } else {
        // If order didn't exist for user, create it with active status
        await prisma.order.create({
          data: {
            id_user: targetUserId,
            domain: isAdmin ? "admin" : `user-${targetUserId}`,
            theme: themeCodeToApply,
            id_paket: isAdmin ? 3 : 1,
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
    if (!sessionUser || sessionUser.role !== "admin") {
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
