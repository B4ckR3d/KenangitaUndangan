import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getEffectiveUserId } from "@/lib/session";
import { md5Hash } from "@/lib/auth";

export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  try {
    const userId = await getEffectiveUserId(request);
    if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const [user, dataRow, rules, order] = await Promise.all([
      prisma.user.findUnique({
        where: { id: userId },
        select: {
          id: true,
          username: true,
          email: true,
          hp: true,
          role: true,
        },
      }),
      prisma.data.findFirst({ where: { id_user: userId } }),
      prisma.rules.findFirst({ where: { id_user: userId } }),
      prisma.order.findFirst({ where: { id_user: userId } }),
    ]);

    return NextResponse.json({
      success: true,
      profile: user,
      data: dataRow,
      rules,
      order,
    });
  } catch (error: any) {
    console.error("Get Pengaturan Error:", error);
    return NextResponse.json({ error: "Gagal mengambil pengaturan" }, { status: 500 });
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
      username,
      email,
      hp,
      passwordLama,
      passwordBaru,
      salam_pembuka,
      salam_wa_atas,
      salam_wa_bawah,
      rules,
    } = body;

    const user = await prisma.user.findUnique({
      where: { id: userId },
    });

    if (!user) {
      return NextResponse.json({ error: "User tidak ditemukan" }, { status: 404 });
    }

    const userUpdates: any = {};
    if (username && username !== user.username) {
      // Check username uniqueness
      const existingUser = await prisma.user.findFirst({
        where: { username: username.trim(), NOT: { id: userId } },
      });
      if (existingUser) {
        return NextResponse.json({ error: "Username sudah digunakan" }, { status: 400 });
      }
      userUpdates.username = username.trim();
    }

    if (email && email !== user.email) {
      const existingEmail = await prisma.user.findFirst({
        where: { email: email.toLowerCase().trim(), NOT: { id: userId } },
      });
      if (existingEmail) {
        return NextResponse.json({ error: "Email sudah digunakan" }, { status: 400 });
      }
      userUpdates.email = email.toLowerCase().trim();
    }

    if (hp !== undefined) {
      userUpdates.hp = hp.trim();
    }

    // Password change
    if (passwordBaru) {
      if (!passwordLama) {
        return NextResponse.json({ error: "Masukkan password saat ini untuk mengganti password" }, { status: 400 });
      }
      if (md5Hash(passwordLama) !== user.password) {
        return NextResponse.json({ error: "Password saat ini tidak cocok" }, { status: 400 });
      }
      if (passwordBaru.length < 6) {
        return NextResponse.json({ error: "Password baru minimal 6 karakter" }, { status: 400 });
      }
      userUpdates.password = md5Hash(passwordBaru);
    }

    if (Object.keys(userUpdates).length > 0) {
      await prisma.user.update({
        where: { id: userId },
        data: userUpdates,
      });
    }

    // Update Data row if provided
    if (salam_pembuka !== undefined || salam_wa_atas !== undefined || salam_wa_bawah !== undefined) {
      const existingData = await prisma.data.findFirst({ where: { id_user: userId } });
      if (existingData) {
        await prisma.data.update({
          where: { id: existingData.id },
          data: {
            salam_pembuka: salam_pembuka !== undefined ? salam_pembuka : existingData.salam_pembuka,
            salam_wa_atas: salam_wa_atas !== undefined ? salam_wa_atas : existingData.salam_wa_atas,
            salam_wa_bawah: salam_wa_bawah !== undefined ? salam_wa_bawah : existingData.salam_wa_bawah,
          },
        });
      } else {
        await prisma.data.create({
          data: {
            id_user: userId,
            salam_pembuka: salam_pembuka || "",
            salam_wa_atas: salam_wa_atas || "",
            salam_wa_bawah: salam_wa_bawah || "",
          },
        });
      }
    }

    // Update Rules if provided
    if (rules && typeof rules === "object") {
      const existingRules = await prisma.rules.findFirst({ where: { id_user: userId } });
      if (existingRules) {
        await prisma.rules.update({
          where: { id: existingRules.id },
          data: rules,
        });
      } else {
        await prisma.rules.create({
          data: {
            id_user: userId,
            ...rules,
          },
        });
      }
    }

    return NextResponse.json({ success: true, message: "Pengaturan berhasil disimpan" });
  } catch (error: any) {
    console.error("Save Pengaturan Error:", error);
    return NextResponse.json({ error: "Gagal menyimpan pengaturan" }, { status: 500 });
  }
}
