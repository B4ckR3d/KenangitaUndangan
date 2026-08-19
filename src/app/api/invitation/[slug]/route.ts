import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const resolvedParams = await params;
    const slug = (resolvedParams.slug || "demo").toLowerCase().trim();

    // 1. Find order by domain slug
    const order = await prisma.order.findFirst({
      where: { domain: slug },
    });

    const isDemo = slug === "demo" || !order;
    const userId = order?.id_user || 1;

    // 2. Fetch all invitation datasets for this user from SQLite
    const [mempelai, acaraList, ceritaList, rekeningList, quote, komenList, rules, dataSetting, albumList] =
      await Promise.all([
        prisma.mempelai.findFirst({ where: { id_user: userId } }),
        prisma.acara.findMany({ where: { id_user: userId }, orderBy: { id_acara: "asc" } }),
        prisma.cerita.findMany({ where: { id_user: userId }, orderBy: { id: "asc" } }),
        prisma.rekening.findMany({ where: { id_user: userId } }),
        prisma.quote.findFirst({ where: { id_user: userId } }),
        prisma.komen.findMany({ where: { id_user: userId }, orderBy: { created_at: "desc" } }),
        prisma.rules.findFirst({ where: { id_user: userId } }),
        prisma.data.findFirst({ where: { id_user: userId } }),
        prisma.album.findMany({ where: { id_user: userId }, orderBy: { id: "asc" } }),
      ]);

    return NextResponse.json({
      success: true,
      data: {
        userId,
        slug,
        themeCode: order?.theme || "hwflower",
        mempelai: mempelai || {
          nama_pria: isDemo ? "Andra Leksmana" : "Nama Mempelai Pria",
          nama_panggilan_pria: isDemo ? "Andra" : "Pria",
          nama_ayah_pria: "",
          nama_ibu_pria: "",
          nama_wanita: isDemo ? "Siti Amelia" : "Nama Mempelai Wanita",
          nama_panggilan_wanita: isDemo ? "Amel" : "Wanita",
          nama_ayah_wanita: "",
          nama_ibu_wanita: "",
        },
        acaraList: acaraList.length > 0 ? acaraList : isDemo ? [
          {
            id_acara: 1,
            nama_acara: "Akad Nikah",
            tgl_acara: "2026/12/26",
            waktu_mulai: "08:00",
            waktu_akhir: "10:00",
            tempat_acara: "Masjid Agung Al-Falah",
            alamat_acara: "Jl. Medan Merdeka Utara No. 3, Gambir, Jakarta Pusat",
            maps: "https://maps.google.com",
            set_countdown: "Y",
          },
          {
            id_acara: 2,
            nama_acara: "Resepsi Pernikahan",
            tgl_acara: "2026/12/26",
            waktu_mulai: "11:00",
            waktu_akhir: "17:00",
            tempat_acara: "Grand Ballroom Hotel Indonesia",
            alamat_acara: "Jl. M.H. Thamrin No. 1, Jakarta Pusat",
            maps: "https://maps.google.com",
            set_countdown: "N",
          },
        ] : [],
        ceritaList: ceritaList.length > 0 ? ceritaList : isDemo ? [
          {
            id: 1,
            tanggal_cerita: "14 Januari 2022",
            judul_cerita: "Awal Pertemuan",
            isi_cerita: "Pertama kali kami bertemu di sebuah perpustakaan kota saat mencari buku yang sama.",
          },
          {
            id: 2,
            tanggal_cerita: "16 Mei 2024",
            judul_cerita: "Lamaran & Komitmen",
            isi_cerita: "Dengan restu kedua orang tua, kami mengikat janji untuk melangkah ke jenjang pernikahan.",
          },
        ] : [],
        rekeningList: rekeningList.length > 0 ? rekeningList : isDemo ? [
          {
            id: 1,
            nama_bank: "BCA",
            no_rekening: "8778009735",
            nama_pemilik: "Andra Leksmana",
            qrcode_bank: "",
          },
        ] : [],
        albumList: albumList || [],
        quote: quote?.isi_quote || "Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung dan merasa tenteram kepadanya.",
        quoteSource: quote?.sumber_quote || "QS. Ar-Rum: 21",
        komenList: komenList || [],
        rules: rules || {
          prokes: 1,
          cerita: 1,
          gallery: 1,
          komen: 1,
          qrcode: 1,
          hadiah: 1,
          quote: 1,
        },
        salamPembuka: dataSetting?.salam_pembuka || "Assalamu'alaikum Warahmatullahi Wabarakatuh.\n\nDengan memohon Rahmat dan Ridho Allah SWT, Kami bermaksud menyelenggarakan resepsi pernikahan kami :",
      },
    });
  } catch (error) {
    console.error("Get Invitation Error:", error);
    return NextResponse.json({ error: "Gagal memuat data undangan" }, { status: 500 });
  }
}
