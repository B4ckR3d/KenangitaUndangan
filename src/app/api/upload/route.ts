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

    if (!file || typeof file === "string" || file.size === 0) {
      return NextResponse.json({ error: "File gambar tidak valid atau kosong (0 bytes)" }, { status: 400 });
    }

    // Validate mime type and extension
    const validMimes = ["image/jpeg", "image/png", "image/webp", "image/gif", "image/svg+xml", "image/jpg"];
    if (!validMimes.includes(file.type) && !file.name.match(/\.(jpg|jpeg|png|webp|gif|svg)$/i)) {
      return NextResponse.json(
        { error: "Format file tidak didukung. Harap upload file gambar (JPG, PNG, WEBP)." },
        { status: 400 }
      );
    }

    // Validate size (max 25MB)
    if (file.size > 25 * 1024 * 1024) {
      return NextResponse.json(
        { error: "Ukuran file terlalu besar. Maksimal 25 MB." },
        { status: 400 }
      );
    }

    // Sanitize folder name
    const safeFolder = folderType.replace(/[^a-zA-Z0-9_-]/g, "") || "gallery";
    const publicDir = path.join(process.cwd(), "public");
    const uploadsDir = path.join(publicDir, "uploads");
    const uploadDir = path.join(uploadsDir, safeFolder);

    try {
      if (!fs.existsSync(uploadsDir)) {
        fs.mkdirSync(uploadsDir, { recursive: true, mode: 0o775 });
      }
      if (!fs.existsSync(uploadDir)) {
        fs.mkdirSync(uploadDir, { recursive: true, mode: 0o775 });
      }
    } catch (dirErr: any) {
      console.error("Directory Creation Error:", dirErr);
      return NextResponse.json(
        { error: `Gagal membuat direktori upload di server: ${dirErr.message}. Periksa izin folder di VPS.` },
        { status: 500 }
      );
    }

    // Generate unique filename
    let ext = path.extname(file.name) || ".jpg";
    if (ext.toLowerCase() === ".jpeg") ext = ".jpg";
    const timestamp = Date.now();
    const randomHex = Math.random().toString(36).substring(2, 8);
    const fileName = `user_${userId}_${timestamp}_${randomHex}${ext.toLowerCase()}`;
    const filePath = path.join(uploadDir, fileName);

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    if (buffer.length === 0) {
      return NextResponse.json({ error: "Gagal membaca konten file gambar (0 bytes)" }, { status: 400 });
    }

    // Write file to public/uploads/...
    try {
      fs.writeFileSync(filePath, buffer);
      try {
        fs.chmodSync(filePath, 0o664);
      } catch {
        // Ignore chmod on Windows
      }
    } catch (writeErr: any) {
      console.error("Write File Error:", writeErr);
      return NextResponse.json(
        { error: `Gagal menulis file ke server disk: ${writeErr.message}. Periksa izin folder VPS (chmod 775 /var/www/undangan-next/public).` },
        { status: 500 }
      );
    }

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

    const assetsUsersDir = path.join(publicDir, "assets", "users");
    if (!fs.existsSync(assetsUsersDir)) {
      try {
        fs.mkdirSync(assetsUsersDir, { recursive: true, mode: 0o775 });
      } catch {}
    }

    const userAssetDir = path.join(assetsUsersDir, kunci);
    if (!fs.existsSync(userAssetDir)) {
      try {
        fs.mkdirSync(userAssetDir, { recursive: true, mode: 0o775 });
      } catch {}
    }

    // Sync specific photo types directly with PHP themes' standard naming convention
    try {
      if (folderType === "mempelai_pria" || folderType === "groom") {
        fs.writeFileSync(path.join(userAssetDir, "groom.png"), buffer);
        fs.writeFileSync(path.join(userAssetDir, "groom.jpg"), buffer);
        if (dataRow) {
          await prisma.data.update({
            where: { id: dataRow.id },
            data: { foto_pria: publicUrl },
          });
        }
      } else if (folderType === "mempelai_wanita" || folderType === "bride") {
        fs.writeFileSync(path.join(userAssetDir, "bride.png"), buffer);
        fs.writeFileSync(path.join(userAssetDir, "bride.jpg"), buffer);
        if (dataRow) {
          await prisma.data.update({
            where: { id: dataRow.id },
            data: { foto_wanita: publicUrl },
          });
        }
      } else if (folderType === "sampul" || folderType === "cover" || folderType === "kita") {
        fs.writeFileSync(path.join(userAssetDir, "kita.png"), buffer);
        fs.writeFileSync(path.join(userAssetDir, "kita.jpg"), buffer);
        fs.writeFileSync(path.join(userAssetDir, "bg-tamu.png"), buffer);
      } else if (folderType === "gallery" || folderType === "album") {
        // Record in Prisma album
        await prisma.album.create({
          data: {
            id_user: userId,
            album: publicUrl,
          },
        });
      }
    } catch (syncErr: any) {
      console.warn("Theme photo sync warning:", syncErr);
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
      { error: error?.message || "Gagal mengunggah file gambar ke server" },
      { status: 500 }
    );
  }
}
