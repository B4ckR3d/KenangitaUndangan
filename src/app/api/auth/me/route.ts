import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { verifyToken } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get("token")?.value;

    if (!token) {
      return NextResponse.json({ authenticated: false }, { status: 401 });
    }

    const payload = verifyToken(token);
    if (!payload) {
      return NextResponse.json({ authenticated: false }, { status: 401 });
    }

    // Fetch freshest user data from database
    if (payload.role === "admin") {
      const user = await prisma.user.findFirst({
        where: { id: payload.id },
      });
      const order = await prisma.order.findFirst({
        where: { id_user: payload.id },
        select: { domain: true, theme: true },
      });

      return NextResponse.json({
        authenticated: true,
        user: {
          id: payload.id,
          username: user?.username || payload.username,
          email: user?.email || payload.email,
          role: "admin",
          slug: order?.domain || "demo",
          theme: order?.theme || "hwflower",
          permissions: user?.permissions || "all",
        },
      });
    }

    const user = await prisma.user.findUnique({
      where: { id: payload.id },
      select: {
        id: true,
        username: true,
        email: true,
        hp: true,
        role: true,
        status: true,
        permissions: true,
      },
    });

    if (!user || user.status === 0) {
      return NextResponse.json({ authenticated: false }, { status: 401 });
    }

    const order = await prisma.order.findFirst({
      where: { id_user: user.id },
      select: { domain: true, theme: true },
    });

    return NextResponse.json({
      authenticated: true,
      user: {
        id: user.id,
        username: user.username,
        email: user.email,
        hp: user.hp,
        role: user.role,
        slug: order?.domain || "demo",
        theme: order?.theme || "hwflower",
        permissions: user.permissions || "all",
      },
    });
  } catch (error) {
    console.error("Auth Me API Error:", error);
    return NextResponse.json({ authenticated: false }, { status: 500 });
  }
}
