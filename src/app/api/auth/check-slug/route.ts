import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const slug = searchParams.get("slug")?.trim().toLowerCase();

    if (!slug) {
      return NextResponse.json(
        { available: false, error: "Nama subfolder / slug wajib diisi" },
        { status: 400 }
      );
    }

    // Reserved system routes
    const reservedSlugs = [
      "api",
      "admin",
      "dashboard",
      "login",
      "register",
      "themes",
      "u",
      "setting",
      "settings",
      "auth",
      "static",
    ];

    if (reservedSlugs.includes(slug)) {
      return NextResponse.json({
        available: false,
        error: `Subfolder '${slug}' adalah kata khusus sistem dan tidak dapat digunakan`,
      });
    }

    // Check slug format: only letters, numbers, and hyphens
    const slugRegex = /^[a-z0-9-]+$/;
    if (!slugRegex.test(slug)) {
      return NextResponse.json({
        available: false,
        error: "Subfolder hanya boleh mengandung huruf kecil, angka, dan tanda hubung (-)",
      });
    }

    if (slug.length < 3 || slug.length > 50) {
      return NextResponse.json({
        available: false,
        error: "Panjang subfolder harus antara 3 sampai 50 karakter",
      });
    }

    const existingOrder = await prisma.order.findFirst({
      where: { domain: slug },
    });

    if (existingOrder) {
      return NextResponse.json({
        available: false,
        error: `Subfolder '${slug}' sudah digunakan oleh pengguna lain. Silakan pilih nama lain.`,
      });
    }

    return NextResponse.json({
      available: true,
      slug,
      message: `Subfolder '${slug}' tersedia!`,
    });
  } catch (error: any) {
    console.error("Check slug error:", error);
    return NextResponse.json(
      { available: false, error: "Gagal memeriksa ketersediaan subfolder" },
      { status: 500 }
    );
  }
}
