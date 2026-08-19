import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { saveOtpToken } from "@/lib/otp";
import { sendOtpEmail } from "@/lib/resend";

export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { action = "register", email, username, slug, payload } = body;

    const targetEmail = (email || payload?.email)?.toLowerCase().trim();

    if (!targetEmail) {
      return NextResponse.json(
        { error: "Alamat email wajib diisi" },
        { status: 400 }
      );
    }

    // Basic email format check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(targetEmail)) {
      return NextResponse.json(
        { error: "Format email tidak valid" },
        { status: 400 }
      );
    }

    if (action === "register") {
      const regUsername = (username || payload?.username)?.trim();
      const regSlug = (slug || payload?.slug)?.toLowerCase().trim();

      if (!regUsername) {
        return NextResponse.json(
          { error: "Username wajib diisi" },
          { status: 400 }
        );
      }

      if (!regSlug) {
        return NextResponse.json(
          { error: "Nama subfolder / slug undangan wajib diisi" },
          { status: 400 }
        );
      }

      // Check if email already registered
      const existingUserByEmail = await prisma.user.findFirst({
        where: { email: targetEmail },
      });
      if (existingUserByEmail) {
        return NextResponse.json(
          { error: "Email sudah terdaftar. Silakan login atau gunakan email lain." },
          { status: 400 }
        );
      }

      // Check if username already exists
      const existingUserByName = await prisma.user.findFirst({
        where: { username: regUsername },
      });
      const existingAdminByName = await prisma.admin.findFirst({
        where: { username: regUsername },
      });
      if (existingUserByName || existingAdminByName) {
        return NextResponse.json(
          { error: `Username '${regUsername}' sudah digunakan. Silakan pilih username lain.` },
          { status: 400 }
        );
      }

      // Check if slug domain already taken
      const existingOrder = await prisma.order.findFirst({
        where: { domain: regSlug },
      });
      if (existingOrder) {
        return NextResponse.json(
          { error: `Subfolder / URL slug '${regSlug}' sudah digunakan. Silakan pilih slug lain.` },
          { status: 400 }
        );
      }
    } else if (action === "login") {
      // For OTP login, check that user or admin actually exists
      const user = await prisma.user.findFirst({
        where: { email: targetEmail },
      });
      const admin = await prisma.admin.findFirst({
        where: { email: targetEmail },
      });

      if (!user && !admin) {
        return NextResponse.json(
          { error: "Akun dengan email ini tidak ditemukan." },
          { status: 404 }
        );
      }
    }

    // Save OTP token (10 minutes validity)
    const { code } = await saveOtpToken({
      email: targetEmail,
      action,
      payload: payload || body,
      expiryMinutes: 10,
    });

    // Send email using Resend
    const recipientName =
      payload?.mempelai?.nama_panggilan_pria && payload?.mempelai?.nama_panggilan_wanita
        ? `${payload.mempelai.nama_panggilan_pria} & ${payload.mempelai.nama_panggilan_wanita}`
        : payload?.username || "Calon Pengantin";

    const emailResult = await sendOtpEmail({
      to: targetEmail,
      code,
      userName: recipientName,
      action,
      expiryMinutes: 10,
    });

    return NextResponse.json({
      success: true,
      message: `Kode OTP verifikasi telah dikirim ke ${targetEmail}`,
      email: targetEmail,
      simulated: emailResult.simulated,
    });
  } catch (error: any) {
    console.error("Send OTP Error:", error);
    return NextResponse.json(
      { error: error?.message || "Terjadi kesalahan saat mengirim OTP" },
      { status: 500 }
    );
  }
}
