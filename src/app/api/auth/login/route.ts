import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { md5Hash, generateToken } from "@/lib/auth";

export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const identifier = body.email || body.username || body.identifier;
    const password = body.password;

    if (!identifier || !password) {
      return NextResponse.json(
        { error: "Email/Username dan password wajib diisi" },
        { status: 400 }
      );
    }

    const hashedPassword = md5Hash(password);

    // 1. Check in User table (which includes role: admin or user)
    const user = await prisma.user.findFirst({
      where: {
        OR: [{ email: identifier }, { username: identifier }],
        password: hashedPassword,
      },
    });

    if (user) {
      if (user.status === 0) {
        return NextResponse.json(
          { error: "Akun Anda sedang dinonaktifkan. Hubungi Administrator." },
          { status: 403 }
        );
      }

      const role = user.role || "user";
      const token = generateToken({
        id: user.id,
        username: user.username,
        email: user.email,
        role: role,
        permissions: user.permissions || "all",
      });

      const response = NextResponse.json({
        success: true,
        user: {
          id: user.id,
          username: user.username,
          email: user.email,
          role: role,
          hp: user.hp,
          permissions: user.permissions || "all",
        },
      });

      response.cookies.set("token", token, {
        httpOnly: true,
        path: "/",
        maxAge: 60 * 60 * 24 * 7,
      });

      return response;
    }

    // 2. Fallback check in Admin table
    const admin = await prisma.admin.findFirst({
      where: {
        OR: [{ email: identifier }, { username: identifier }],
        password: hashedPassword,
      },
    });

    if (admin) {
      const token = generateToken({
        id: admin.id,
        username: admin.username,
        email: admin.email,
        role: "admin",
        namaLengkap: admin.nama_lengkap,
        permissions: "all",
      });

      const response = NextResponse.json({
        success: true,
        user: {
          id: admin.id,
          username: admin.username,
          email: admin.email,
          role: "admin",
          namaLengkap: admin.nama_lengkap,
          permissions: "all",
        },
      });

      response.cookies.set("token", token, {
        httpOnly: true,
        path: "/",
        maxAge: 60 * 60 * 24 * 7,
      });

      return response;
    }

    return NextResponse.json(
      { error: "Email/Username atau Password tidak sesuai" },
      { status: 401 }
    );
  } catch (error) {
    console.error("Login API Error:", error);
    return NextResponse.json(
      { error: "Terjadi kesalahan pada server saat login" },
      { status: 500 }
    );
  }
}
