import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getEffectiveUserId } from "@/lib/session";
import fs from "fs";
import path from "path";

export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  try {
    const userId = await getEffectiveUserId(request);
    if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const [mempelai, dataRow] = await Promise.all([
      prisma.mempelai.findFirst({ where: { id_user: userId } }),
      prisma.data.findFirst({ where: { id_user: userId } }),
    ]);

    const kunci = dataRow?.kunci || `user_${userId}`;
    const userGroomPath = path.join(process.cwd(), "public", "assets", "users", kunci, "groom.png");
    const userBridePath = path.join(process.cwd(), "public", "assets", "users", kunci, "bride.png");
    const userCoverPath = path.join(process.cwd(), "public", "assets", "users", kunci, "kita.png");

    const defaultGroom = "/assets/users/c5e3c1770e6ccad8326111fb0d58267e/groom.png";
    const defaultBride = "/assets/users/c5e3c1770e6ccad8326111fb0d58267e/bride.png";
    const defaultCover = "/assets/users/c5e3c1770e6ccad8326111fb0d58267e/kita.png";

    const foto_pria =
      dataRow?.foto_pria && dataRow.foto_pria !== "0"
        ? dataRow.foto_pria
        : fs.existsSync(userGroomPath)
        ? `/assets/users/${kunci}/groom.png`
        : defaultGroom;

    const foto_wanita =
      dataRow?.foto_wanita && dataRow.foto_wanita !== "0"
        ? dataRow.foto_wanita
        : fs.existsSync(userBridePath)
        ? `/assets/users/${kunci}/bride.png`
        : defaultBride;

    const foto_sampul = fs.existsSync(userCoverPath)
      ? `/assets/users/${kunci}/kita.png`
      : defaultCover;

    return NextResponse.json({
      success: true,
      mempelai,
      photos: {
        foto_pria,
        foto_wanita,
        foto_sampul,
        kunci,
      },
    });
  } catch (error: any) {
    console.error("Get Mempelai Error:", error);
    return NextResponse.json({ error: "Gagal mengambil data mempelai" }, { status: 500 });
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
      nama_pria,
      nama_panggilan_pria,
      nama_ayah_pria = "",
      nama_ibu_pria = "",
      nama_wanita,
      nama_panggilan_wanita,
      nama_ayah_wanita = "",
      nama_ibu_wanita = "",
      foto_pria,
      foto_wanita,
      foto_sampul,
    } = body;

    const existing = await prisma.mempelai.findFirst({
      where: { id_user: userId },
    });

    let result;
    if (existing) {
      result = await prisma.mempelai.update({
        where: { id_mempelai: existing.id_mempelai },
        data: {
          nama_pria: nama_pria || "",
          nama_panggilan_pria: nama_panggilan_pria || "",
          nama_ayah_pria: nama_ayah_pria || "",
          nama_ibu_pria: nama_ibu_pria || "",
          nama_wanita: nama_wanita || "",
          nama_panggilan_wanita: nama_panggilan_wanita || "",
          nama_ayah_wanita: nama_ayah_wanita || "",
          nama_ibu_wanita: nama_ibu_wanita || "",
        },
      });
    } else {
      result = await prisma.mempelai.create({
        data: {
          id_user: userId,
          nama_pria: nama_pria || "",
          nama_panggilan_pria: nama_panggilan_pria || "",
          nama_ayah_pria: nama_ayah_pria || "",
          nama_ibu_pria: nama_ibu_pria || "",
          nama_wanita: nama_wanita || "",
          nama_panggilan_wanita: nama_panggilan_wanita || "",
          nama_ayah_wanita: nama_ayah_wanita || "",
          nama_ibu_wanita: nama_ibu_wanita || "",
        },
      });
    }

    // Update photo paths in Data table if provided
    if (foto_pria || foto_wanita) {
      const dataRow = await prisma.data.findFirst({ where: { id_user: userId } });
      const updateData: any = {};

      if (foto_pria && !foto_pria.includes("c5e3c1770e6ccad8326111fb0d58267e")) {
        updateData.foto_pria = foto_pria;
      }
      if (foto_wanita && !foto_wanita.includes("c5e3c1770e6ccad8326111fb0d58267e")) {
        updateData.foto_wanita = foto_wanita;
      }

      if (Object.keys(updateData).length > 0) {
        if (dataRow) {
          await prisma.data.update({
            where: { id: dataRow.id },
            data: updateData,
          });
        } else {
          await prisma.data.create({
            data: {
              id_user: userId,
              kunci: `user_${userId}`,
              ...updateData,
            },
          });
        }
      }
    }

    return NextResponse.json({ success: true, mempelai: result });
  } catch (error: any) {
    console.error("Save Mempelai Error:", error);
    return NextResponse.json({ error: "Gagal menyimpan data mempelai" }, { status: 500 });
  }
}
