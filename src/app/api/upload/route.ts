import { NextResponse } from "next/server";
import { getEffectiveUserId } from "@/lib/session";
import { prisma } from "@/lib/prisma";
import path from "path";
import fs from "fs";

export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  try {
    const userId = await getEffectiveUserId(request);
    if (!userId) {
      return NextResponse.json({ error: "Unauthorized. Silakan login terlebih dahulu." }, { status: 401 });
    }

    const formData = await request.formData();
    const file = formData.get("file") as File | null;
    const folderType = ((formData.get("folder") as string) || "gallery").toLowerCase().trim();

    if (!file) {
      return NextResponse.json({ error: "File gambar tidak ditemukan" }, { status: 400 });
    }

    // Validate mime type
    const validMimes = ["image/jpeg", "image/png", "image/webp", "image/gif", "image/svg+xml"];
    if (!validMimes.includes(file.type)) {
      return NextResponse.json(
        { error: "Tipe file tidak valid. Harap upload gambar JPG, PNG, WEBP, atau GIF." },
        { status: 400 }
      );
    }

    // Validate size (max 12MB)
    if (file.size > 12 * 1024 * 1024) {
      return NextResponse.json(
        { error: "Ukuran file terlalu besar. Maksimal 12 MB." },
        { status: 400 }
      );
    }

    // Sanitize folder name
    const safeFolder = folderType.replace(/[^a-zA-Z0-9_-]/g, "");
    const uploadDir = path.join(process.cwd(), "public", "uploads", safeFolder);

    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }

    // Generate unique safe filename
    const ext = path.extname(file.name) || ".jpg";
    const timestamp = Date.now();
    const randomHex = Math.random().toString(36).substring(2, 8);
    const fileName = `user_${userId}_${timestamp}_${randomHex}${ext.toLowerCase()}`;
    const filePath = path.join(uploadDir, fileName);

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    fs.writeFileSync(filePath, buffer);

    const publicUrl = `/uploads/${safeFolder}/${fileName}`;

    // Resolve or create user's 'kunci' and asset directory for theme compatibility
    let dataRow = await prisma.data.findFirst({ where: { id_user: userId } });
    let kunci = dataRow?.kunci;
    if (!kunci) {
      kunci = `user_${userId}`;
      if (!dataRow) {
        dataRow = await prisma.data.create({
          data: {
            id_user: userId,
            kunci,
            foto_pria: "0",
            foto_wanita: "0",
          },
        });
      } else {
        await prisma.data.update({
          where: { id: dataRow.id },
          data: { kunci },
        });
      }
    }

    const userAssetDir = path.join(process.cwd(), "public", "assets", "users", kunci);
    if (!fs.existsSync(userAssetDir)) {
      fs.mkdirSync(userAssetDir, { recursive: true });
    }

    // Sync specific photo types directly with PHP themes' standard naming convention
    if (folderType === "mempelai_pria" || folderType === "groom") {
      fs.writeFileSync(path.join(userAssetDir, "groom.png"), buffer);
      if (dataRow) {
        await prisma.data.update({
          where: { id: dataRow.id },
          data: { foto_pria: publicUrl },
        });
      }
    } else if (folderType === "mempelai_wanita" || folderType === "bride") {
      fs.writeFileSync(path.join(userAssetDir, "bride.png"), buffer);
      if (dataRow) {
        await prisma.data.update({
          where: { id: dataRow.id },
          data: { foto_wanita: publicUrl },
        });
      }
    } else if (folderType === "sampul" || folderType === "cover" || folderType === "kita") {
      fs.writeFileSync(path.join(userAssetDir, "kita.png"), buffer);
    } else if (folderType === "gallery" || folderType === "album") {
      // Record in Prisma album
      await prisma.album.create({
        data: {
          id_user: userId,
          album: publicUrl,
        },
      });
    }

    return NextResponse.json({
      success: true,
      url: publicUrl,
      fileName,
      size: file.size,
      folder: safeFolder,
    });
  } catch (error: any) {
    console.error("Upload API Error:", error);
    return NextResponse.json(
      { error: error?.message || "Gagal mengunggah file gambar" },
      { status: 500 }
    );
  }
}
