import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { md5Hash } from "@/lib/auth";
import { getSessionUser } from "@/lib/session";

export const dynamic = "force-dynamic";

// GET all users with enriched info (mempelai, domain, paket)
export async function GET(request: Request) {
  try {
    const session = await getSessionUser(request);
    if (!session || session.role !== "admin") {
      return NextResponse.json({ error: "Unauthorized. Fitur ini hanya untuk Super Administrator." }, { status: 403 });
    }

    const rawUsers = await prisma.user.findMany({
      orderBy: { id: "asc" },
    });

    const enrichedUsers = await Promise.all(
      rawUsers.map(async (u) => {
        const mempelai = await prisma.mempelai.findFirst({
          where: { id_user: u.id },
          select: { nama_pria: true, nama_wanita: true },
        });

        const order = await prisma.order.findFirst({
          where: { id_user: u.id },
          select: { domain: true, id_paket: true },
        });

        let paketName = "Standard";
        if (order?.id_paket) {
          const paket = await prisma.paket.findFirst({
            where: { id_paket: order.id_paket },
            select: { nama_paket: true },
          });
          if (paket) paketName = paket.nama_paket;
        }

        const mempelaiInfo =
          mempelai && (mempelai.nama_pria || mempelai.nama_wanita)
            ? `${mempelai.nama_pria || ""} & ${mempelai.nama_wanita || ""}`
            : u.role === "admin"
            ? "Super Administrator"
            : "-";

        return {
          id: u.id,
          username: u.username,
          email: u.email,
          hp: u.hp || "-",
          role: u.role || "user",
          status: u.status,
          permissions: u.permissions || "all",
          id_unik: u.id_unik,
          created_at: u.created_at,
          mempelai_info: mempelaiInfo,
          domain: order?.domain || (u.role === "admin" ? null : "demo"),
          paket_name: u.role === "admin" ? "Sistem Admin" : paketName,
        };
      })
    );

    return NextResponse.json({ success: true, users: enrichedUsers });
  } catch (error) {
    console.error("Admin Get Users Error:", error);
    return NextResponse.json(
      { error: "Gagal mengambil daftar pengguna" },
      { status: 500 }
    );
  }
}

// POST create new user
export async function POST(request: Request) {
  try {
    const session = await getSessionUser(request);
    if (!session || session.role !== "admin") {
      return NextResponse.json({ error: "Unauthorized. Akses ditolak." }, { status: 403 });
    }

    const body = await request.json();
    const {
      username,
      email,
      hp = "",
      password,
      role = "user",
      status = 1,
      permissions = "all",
    } = body;

    if (!username || !email || !password) {
      return NextResponse.json(
        { error: "Username, Email, dan Password wajib diisi" },
        { status: 400 }
      );
    }

    // Check duplicate
    const existing = await prisma.user.findFirst({
      where: {
        OR: [{ username }, { email }],
      },
    });

    if (existing) {
      return NextResponse.json(
        { error: "Username atau Email sudah terdaftar" },
        { status: 400 }
      );
    }

    const newUser = await prisma.user.create({
      data: {
        username,
        email,
        hp,
        password: md5Hash(password),
        id_unik: `USR${Date.now().toString().slice(-6)}`,
        role,
        status: parseInt(String(status), 10),
        permissions: typeof permissions === "string" ? permissions : JSON.stringify(permissions),
      },
    });

    return NextResponse.json({ success: true, user: newUser });
  } catch (error) {
    console.error("Admin Create User Error:", error);
    return NextResponse.json(
      { error: "Gagal menambahkan pengguna baru" },
      { status: 500 }
    );
  }
}

// PUT update user
export async function PUT(request: Request) {
  try {
    const session = await getSessionUser(request);
    if (!session || session.role !== "admin") {
      return NextResponse.json({ error: "Unauthorized. Akses ditolak." }, { status: 403 });
    }

    const body = await request.json();
    const {
      id,
      username,
      email,
      hp,
      password,
      role,
      status,
      permissions,
    } = body;

    if (!id) {
      return NextResponse.json(
        { error: "User ID wajib disertakan" },
        { status: 400 }
      );
    }

    const dataToUpdate: any = {};
    if (username !== undefined) dataToUpdate.username = username;
    if (email !== undefined) dataToUpdate.email = email;
    if (hp !== undefined) dataToUpdate.hp = hp;
    if (role !== undefined) dataToUpdate.role = role;
    if (status !== undefined) dataToUpdate.status = parseInt(String(status), 10);
    if (permissions !== undefined) {
      dataToUpdate.permissions = typeof permissions === "string" ? permissions : JSON.stringify(permissions);
    }
    if (password && password.trim() !== "") {
      dataToUpdate.password = md5Hash(password.trim());
    }

    const updatedUser = await prisma.user.update({
      where: { id: parseInt(String(id), 10) },
      data: dataToUpdate,
    });

    return NextResponse.json({ success: true, user: updatedUser });
  } catch (error) {
    console.error("Admin Update User Error:", error);
    return NextResponse.json(
      { error: "Gagal memperbarui data pengguna" },
      { status: 500 }
    );
  }
}

// DELETE user
export async function DELETE(request: Request) {
  const session = await getSessionUser(request);
  if (!session || session.role !== "admin") {
    return NextResponse.json({ error: "Unauthorized. Akses ditolak." }, { status: 403 });
  }

  const { searchParams } = new URL(request.url);
  const idParam = searchParams.get("id");

  if (!idParam) {
    return NextResponse.json(
      { error: "User ID diperlukan" },
      { status: 400 }
    );
  }

  const userId = parseInt(idParam, 10);

  // Prevent deleting primary admin
  if (userId === 999) {
    return NextResponse.json(
      { error: "Akun Super Administrator utama tidak dapat dihapus" },
      { status: 403 }
    );
  }

  try {
    await prisma.user.delete({
      where: { id: userId },
    });

    return NextResponse.json({ success: true, message: "Pengguna berhasil dihapus" });
  } catch (error) {
    console.error("Admin Delete User Error:", error);
    return NextResponse.json(
      { error: "Gagal menghapus pengguna" },
      { status: 500 }
    );
  }
}
