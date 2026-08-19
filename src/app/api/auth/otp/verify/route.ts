import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { md5Hash, generateToken } from "@/lib/auth";
import { verifyAndConsumeOtp } from "@/lib/otp";

export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, code, action = "register", payload: directPayload } = body;

    if (!email || !code) {
      return NextResponse.json(
        { error: "Email dan kode OTP 6 digit wajib diisi" },
        { status: 400 }
      );
    }

    // Verify and consume OTP token
    const otpResult = await verifyAndConsumeOtp({
      email,
      code,
      action,
    });

    if (!otpResult.valid) {
      return NextResponse.json(
        { error: otpResult.error || "Kode OTP tidak valid atau sudah kedaluwarsa" },
        { status: 400 }
      );
    }

    const payload = directPayload || otpResult.payload;

    if (action === "register") {
      if (!payload) {
        return NextResponse.json(
          { error: "Data pendaftaran tidak ditemukan. Silakan ulangi pendaftaran." },
          { status: 400 }
        );
      }

      const {
        username,
        password,
        hp = "",
        slug,
        theme = "hwflower",
        mempelai,
      } = payload;

      const normalizedSlug = (slug || username).toLowerCase().trim();
      const hashedPassword = md5Hash(password);
      const uniqueId = `USR${Math.floor(100000 + Math.random() * 900000)}`;

      // Create all records inside a transaction
      const createdData = await prisma.$transaction(async (tx: any) => {
        // 1. Create User
        const newUser = await tx.user.create({
          data: {
            email: email.toLowerCase().trim(),
            username: username.trim(),
            password: hashedPassword,
            hp: hp || "",
            id_unik: uniqueId,
            role: "user",
            status: 1,
            permissions: "all",
          },
        });

        // 2. Create Order / Invitation Domain Mapping
        const newOrder = await tx.order.create({
          data: {
            id_user: newUser.id,
            domain: normalizedSlug,
            theme: theme || "hwflower",
            id_paket: 1,
            status: 1,
          },
        });

        // 3. Create Mempelai (Bride & Groom)
        await tx.mempelai.create({
          data: {
            id_user: newUser.id,
            nama_pria: mempelai?.nama_pria || "Nama Mempelai Pria",
            nama_panggilan_pria: mempelai?.nama_panggilan_pria || "Pria",
            nama_ayah_pria: mempelai?.nama_ayah_pria || "",
            nama_ibu_pria: mempelai?.nama_ibu_pria || "",
            nama_wanita: mempelai?.nama_wanita || "Nama Mempelai Wanita",
            nama_panggilan_wanita: mempelai?.nama_panggilan_wanita || "Wanita",
            nama_ayah_wanita: mempelai?.nama_ayah_wanita || "",
            nama_ibu_wanita: mempelai?.nama_ibu_wanita || "",
            posisi_mempelai: "0",
          },
        });

        // 4. Create Initial Acara Structure (Empty fields for user to configure)
        await tx.acara.createMany({
          data: [
            {
              id_user: newUser.id,
              nama_acara: "Akad Nikah",
              tgl_acara: "",
              waktu_mulai: "08:00",
              waktu_akhir: "10:00",
              tempat_acara: "",
              alamat_acara: "",
              maps: "",
              set_countdown: "Y",
            },
            {
              id_user: newUser.id,
              nama_acara: "Resepsi Pernikahan",
              tgl_acara: "",
              waktu_mulai: "11:00",
              waktu_akhir: "17:00",
              tempat_acara: "",
              alamat_acara: "",
              maps: "",
              set_countdown: "N",
            },
          ],
        });

        // 5. Create Default Data Settings
        await tx.data.create({
          data: {
            id_user: newUser.id,
            foto_pria: "1",
            foto_wanita: "1",
            salam_pembuka:
              "Assalamu'alaikum Warahmatullahi Wabarakatuh.\n\nDengan memohon Rahmat dan Ridho Allah SWT, Kami bermaksud menyelenggarakan resepsi pernikahan kami :",
            salam_wa_atas:
              "Assalamualaikum Wr Wb.\nDengan segala kerendahan hati dan syukur atas Karunia Allah SWT, kami bermaksud mengundang Bapak/Ibu/Saudara(i) pada acara pernikahan kami.",
            salam_wa_bawah:
              "Merupakan suatu kebahagiaan bagi kami apabila Bapak/Ibu/Saudara(i) berkenan hadir untuk memberikan doa restu kepada kami.\nAtas kehadiran dan doa restunya kami ucapkan terima kasih.\n\nWassalamualaikum Wr Wb",
          },
        });

        // 6. Create Default Rules
        await tx.rules.create({
          data: {
            id_user: newUser.id,
            sampul: 1,
            mempelai: 1,
            acara: 1,
            komen: 1,
            gallery: 1,
            cerita: 1,
            lokasi: 1,
            prokes: 1,
            qrcode: 1,
            hadiah: 1,
            quote: 1,
          },
        });

        // 7. Create Default Quote
        await tx.quote.create({
          data: {
            id_user: newUser.id,
            isi_quote:
              "Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa kasih dan sayang.",
            sumber_quote: "QS. Ar-Rum: 21",
          },
        });

        return { user: newUser, order: newOrder };
      });

      // Generate JWT auth token for instant login
      const token = generateToken({
        id: createdData.user.id,
        username: createdData.user.username,
        email: createdData.user.email,
        role: createdData.user.role,
        permissions: createdData.user.permissions || "all",
      });

      const response = NextResponse.json({
        success: true,
        message: "Akun dan undangan digital berhasil dibuat!",
        user: {
          id: createdData.user.id,
          username: createdData.user.username,
          email: createdData.user.email,
          role: createdData.user.role,
          hp: createdData.user.hp,
          slug: normalizedSlug,
        },
        slug: normalizedSlug,
        invitationUrl: `/u/${normalizedSlug}`,
        redirect: "/dashboard",
      });

      response.cookies.set("token", token, {
        httpOnly: true,
        path: "/",
        maxAge: 60 * 60 * 24 * 7,
      });

      return response;
    }

    if (action === "login") {
      // 1. Check in User table
      const user = await prisma.user.findFirst({
        where: { email: email.toLowerCase().trim() },
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

        // Get user order domain if exists
        const order = await prisma.order.findFirst({
          where: { id_user: user.id },
          select: { domain: true },
        });

        const response = NextResponse.json({
          success: true,
          user: {
            id: user.id,
            username: user.username,
            email: user.email,
            role: role,
            hp: user.hp,
            slug: order?.domain || "demo",
            permissions: user.permissions || "all",
          },
          redirect: "/dashboard",
        });

        response.cookies.set("token", token, {
          httpOnly: true,
          path: "/",
          maxAge: 60 * 60 * 24 * 7,
        });

        return response;
      }

      // 2. Check in Admin table
      const admin = await prisma.admin.findFirst({
        where: { email: email.toLowerCase().trim() },
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
          redirect: "/dashboard",
        });

        response.cookies.set("token", token, {
          httpOnly: true,
          path: "/",
          maxAge: 60 * 60 * 24 * 7,
        });

        return response;
      }

      return NextResponse.json(
        { error: "Akun pengguna tidak ditemukan" },
        { status: 404 }
      );
    }

    return NextResponse.json({ error: "Aksi tidak dikenal" }, { status: 400 });
  } catch (error: any) {
    console.error("Verify OTP Error:", error);
    return NextResponse.json(
      { error: error?.message || "Terjadi kesalahan saat memverifikasi OTP" },
      { status: 500 }
    );
  }
}
