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
    const userGroomPathPng = path.join(process.cwd(), "public", "assets", "users", kunci, "groom.png");
    const userGroomPathJpg = path.join(process.cwd(), "public", "assets", "users", kunci, "groom.jpg");
    const userBridePathPng = path.join(process.cwd(), "public", "assets", "users", kunci, "bride.png");
    const userBridePathJpg = path.join(process.cwd(), "public", "assets", "users", kunci, "bride.jpg");
    const userCoverPathPng = path.join(process.cwd(), "public", "assets", "users", kunci, "kita.png");
    const userCoverPathJpg = path.join(process.cwd(), "public", "assets", "users", kunci, "kita.jpg");

    const defaultGroom = "/assets/users/c5e3c1770e6ccad8326111fb0d58267e/groom.png";
    const defaultBride = "/assets/users/c5e3c1770e6ccad8326111fb0d58267e/bride.png";
    const defaultCover = "/assets/users/c5e3c1770e6ccad8326111fb0d58267e/kita.png";

    // Helper to check if string is a valid file path/URL (not legacy flag '0' or '1')
    const isValidUrl = (val?: string | null) =>
      val && typeof val === "string" && (val.startsWith("/") || val.startsWith("http"));

    let foto_pria = defaultGroom;
    if (isValidUrl(dataRow?.foto_pria)) {
      foto_pria = dataRow!.foto_pria;
    } else if (fs.existsSync(userGroomPathPng)) {
      foto_pria = `/assets/users/${kunci}/groom.png`;
    } else if (fs.existsSync(userGroomPathJpg)) {
      foto_pria = `/assets/users/${kunci}/groom.jpg`;
    }

    let foto_wanita = defaultBride;
    if (isValidUrl(dataRow?.foto_wanita)) {
      foto_wanita = dataRow!.foto_wanita;
    } else if (fs.existsSync(userBridePathPng)) {
      foto_wanita = `/assets/users/${kunci}/bride.png`;
    } else if (fs.existsSync(userBridePathJpg)) {
      foto_wanita = `/assets/users/${kunci}/bride.jpg`;
    }

    let foto_sampul = defaultCover;
    if (fs.existsSync(userCoverPathPng)) {
      foto_sampul = `/assets/users/${kunci}/kita.png`;
    } else if (fs.existsSync(userCoverPathJpg)) {
      foto_sampul = `/assets/users/${kunci}/kita.jpg`;
    }

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
