import { PrismaClient } from "@prisma/client";
import { PrismaBetterSqlite3 } from "@prisma/adapter-better-sqlite3";

const dbUrl = process.env.DATABASE_URL || "file:./dev.db";
const adapter = new PrismaBetterSqlite3({ url: dbUrl });
const prisma = new PrismaClient({ adapter });

async function main() {
  console.log("🌱 Starting SQLite database seeding from database.sql...");

  // 1. Admin
  await prisma.admin.upsert({
    where: { username: "admin" },
    update: {},
    create: {
      id: 1,
      username: "admin",
      password: "0a6486a8a0b85697eba71588fbc44522", // md5 of admin password
      email: "admin@kenangita.id",
      nama_lengkap: "Vincenzo",
    },
  });

  // 2. Users
  const users = [
    {
      id: 999,
      hp: "081234567890",
      email: "admin@kenangita.id",
      username: "admin",
      password: "0a6486a8a0b85697eba71588fbc44522", // md5 of vincenzo
      id_unik: "ADM999",
      role: "admin",
      status: 1,
      permissions: "manage_all,manage_users,manage_themes,manage_settings,edit_mempelai,edit_acara,edit_gallery,edit_cerita,edit_rekening,edit_tamu",
      token: "",
    },
    {
      id: 1,
      hp: "089659687659",
      email: "demo@gmail.com",
      username: "Demo",
      password: "e10adc3949ba59abbe56e057f20f883e", // md5 of 123456
      id_unik: "2007155",
      role: "user",
      status: 1,
      permissions: "all",
      token: "",
    },
    {
      id: 303,
      hp: "089659687659",
      email: "abgtua93@gmail.com",
      username: "abgtua93@gmail.com",
      password: "446419aa4b2c2368f29d8298c1cf71a2",
      id_unik: "220430325",
      role: "user",
      status: 1,
      permissions: "all",
      token: null,
    },
    {
      id: 304,
      hp: "6282311168586",
      email: "oppungcode@gmail.com",
      username: "oppungcode@gmail.com",
      password: "e10adc3949ba59abbe56e057f20f883e",
      id_unik: "220530490",
      role: "user",
      status: 1,
      permissions: "all",
      token: null,
    },
  ];

  for (const u of users) {
    await prisma.user.upsert({
      where: { username: u.username },
      update: {
        role: u.role,
        status: u.status,
        permissions: u.permissions,
        password: u.password,
      },
      create: u,
    });
  }

  // 3. Theme Categories
  const categories = [
    { id: 1, name: "Mobile", slug: "mobile" },
    { id: 2, name: "Slide", slug: "slide" },
    { id: 3, name: "Scroll", slug: "scroll" },
  ];

  for (const cat of categories) {
    const existing = await prisma.themeCategory.findFirst({ where: { id: cat.id } });
    if (!existing) {
      await prisma.themeCategory.create({ data: cat });
    }
  }

  // 4. Themes
  const themes = [
    { id: 1, nama_theme: "hwflower", kode_theme: "A001", status: 1, category_id: 1 },
    { id: 2, nama_theme: "tealflower", kode_theme: "A002", status: 1, category_id: 1 },
    { id: 3, nama_theme: "greenflower", kode_theme: "A003", status: 1, category_id: 1 },
    { id: 4, nama_theme: "prettyflower", kode_theme: "A004", status: 1, category_id: 1 },
    { id: 5, nama_theme: "blueroses", kode_theme: "A005", status: 1, category_id: 1 },
    { id: 6, nama_theme: "redroses", kode_theme: "A006", status: 1, category_id: 1 },
    { id: 8, nama_theme: "radiantyellow", kode_theme: "A007", status: 1, category_id: 1 },
    { id: 9, nama_theme: "radiantdark", kode_theme: "A009", status: 1, category_id: 1 },
    { id: 44, nama_theme: "purpleflower", kode_theme: "A010", status: 1, category_id: 1 },
    { id: 45, nama_theme: "sketchflower", kode_theme: "A011", status: 1, category_id: 1 },
    { id: 49, nama_theme: "beautiful-floral", kode_theme: "A012", status: 1, category_id: 3 },
    { id: 50, nama_theme: "tapis", kode_theme: "A013", status: 1, category_id: 2 },
    { id: 51, nama_theme: "rustic", kode_theme: "A014", status: 1, category_id: 2 },
    { id: 52, nama_theme: "arabian", kode_theme: "A015", status: 1, category_id: 3 },
    { id: 53, nama_theme: "jellyblack", kode_theme: "A016", status: 1, category_id: 2 },
    { id: 54, nama_theme: "floral", kode_theme: "A017", status: 1, category_id: 2 },
    { id: 55, nama_theme: "vintage-islamic", kode_theme: "A018", status: 1, category_id: 2 },
    { id: 59, nama_theme: "islamic1", kode_theme: "A019", status: 1, category_id: 3 },
    { id: 60, nama_theme: "watercolor1", kode_theme: "A020", status: 1, category_id: 3 },
    { id: 61, nama_theme: "twelve", kode_theme: "A021", status: 1, category_id: 3 },
    { id: 63, nama_theme: "mandala", kode_theme: "A022", status: 1, category_id: 2 },
    { id: 67, nama_theme: "watercolor2", kode_theme: "A026", status: 1, category_id: 3 },
    { id: 68, nama_theme: "watercolor3", kode_theme: "A027", status: 1, category_id: 3 },
    { id: 69, nama_theme: "watercolor4", kode_theme: "A028", status: 1, category_id: 3 },
    { id: 70, nama_theme: "watercolor5", kode_theme: "A029", status: 1, category_id: 3 },
    // Converted MHTML Premium Themes
    { id: 101, nama_theme: "light-begins", kode_theme: "M001", status: 1, category_id: 2 },
    { id: 102, nama_theme: "bikini-bottom", kode_theme: "M002", status: 1, category_id: 2 },
    { id: 103, nama_theme: "fairy-pink", kode_theme: "M003", status: 1, category_id: 2 },
    { id: 104, nama_theme: "shalvynne", kode_theme: "M004", status: 1, category_id: 2 },
    { id: 105, nama_theme: "turtles", kode_theme: "M005", status: 1, category_id: 2 },
    { id: 106, nama_theme: "pink-party", kode_theme: "M006", status: 1, category_id: 3 },
    { id: 107, nama_theme: "bonvoyage-v4", kode_theme: "M007", status: 1, category_id: 2 },
    { id: 108, nama_theme: "emerald-uici", kode_theme: "M008", status: 1, category_id: 2 },
    { id: 109, nama_theme: "shning", kode_theme: "M009", status: 1, category_id: 2 },
    { id: 110, nama_theme: "buka-bersama", kode_theme: "M010", status: 1, category_id: 2 },
    { id: 111, nama_theme: "fresh-halal-bihalal", kode_theme: "M011", status: 1, category_id: 2 },
    { id: 112, nama_theme: "adm-gathering", kode_theme: "M012", status: 1, category_id: 2 },
    { id: 113, nama_theme: "bedah-buku", kode_theme: "M013", status: 1, category_id: 2 },
    { id: 114, nama_theme: "kalibrasi-hati", kode_theme: "M014", status: 1, category_id: 2 },
    { id: 115, nama_theme: "konser-raya-maroon", kode_theme: "M015", status: 1, category_id: 2 },
    { id: 116, nama_theme: "lion-february", kode_theme: "M016", status: 1, category_id: 2 },
    { id: 117, nama_theme: "nusantara-gas", kode_theme: "M017", status: 1, category_id: 2 },
    { id: 118, nama_theme: "batak-merah", kode_theme: "M018", status: 1, category_id: 2 },
    { id: 119, nama_theme: "black-aysha", kode_theme: "M019", status: 1, category_id: 3 },
    { id: 120, nama_theme: "blue-butterflya", kode_theme: "M020", status: 1, category_id: 2 },
    { id: 121, nama_theme: "maroon-aceh", kode_theme: "M021", status: 1, category_id: 2 },
    { id: 122, nama_theme: "melayu-padang", kode_theme: "M022", status: 1, category_id: 3 },
    { id: 123, nama_theme: "minimalist-cream", kode_theme: "M023", status: 1, category_id: 3 },
    { id: 124, nama_theme: "phinisi-maroon", kode_theme: "M024", status: 1, category_id: 3 },
    { id: 125, nama_theme: "raden", kode_theme: "M025", status: 1, category_id: 2 },
    { id: 126, nama_theme: "sage-watercolor", kode_theme: "M026", status: 1, category_id: 2 },
  ];

  for (const t of themes) {
    const existing = await prisma.theme.findFirst({ where: { id: t.id } });
    if (!existing) {
      await prisma.theme.create({ data: t });
    }
  }

  // 5. Paket
  const pakets = [
    { id_paket: 1, nama_paket: "Silver", harga_paket: "50000", masa_aktif: 60, buku_tamu: 0, kirim_whatsapp: 0, tema_bebas: 0, kirim_hadiah: 0, import_datatamu: 0 },
    { id_paket: 2, nama_paket: "Gold", harga_paket: "70000", masa_aktif: 60, buku_tamu: 0, kirim_whatsapp: 0, tema_bebas: 1, kirim_hadiah: 1, import_datatamu: 0 },
    { id_paket: 3, nama_paket: "Diamond", harga_paket: "100000", masa_aktif: 60, buku_tamu: 1, kirim_whatsapp: 1, tema_bebas: 1, kirim_hadiah: 1, import_datatamu: 1 },
  ];

  for (const p of pakets) {
    const existing = await prisma.paket.findFirst({ where: { id_paket: p.id_paket } });
    if (!existing) {
      await prisma.paket.create({ data: p });
    }
  }

  // 6. Mempelai
  const mempelais = [
    {
      id_mempelai: 1,
      id_user: 1,
      nama_pria: "Andra Leksmana",
      nama_panggilan_pria: "Andra",
      nama_ibu_pria: "Muslimah",
      nama_ayah_pria: "Kusmanto",
      nama_wanita: "Siti Amelia",
      nama_panggilan_wanita: "Amel",
      nama_ibu_wanita: "Siti Fatimah",
      nama_ayah_wanita: "Soekatmo",
      posisi_mempelai: "0",
    },
    {
      id_mempelai: 2,
      id_user: 303,
      nama_pria: "Jack Sparrow",
      nama_panggilan_pria: "Jack",
      nama_ibu_pria: "Kasniti",
      nama_ayah_pria: "I Wayan Jarwa",
      nama_wanita: "Nadhifha Nukma Yasmine",
      nama_panggilan_wanita: "Nadhifha",
      nama_ibu_wanita: "Sulastri",
      nama_ayah_wanita: "Miftahuddin",
      posisi_mempelai: "0",
    },
    {
      id_mempelai: 3,
      id_user: 304,
      nama_pria: "Pirto Limbong",
      nama_panggilan_pria: "Pirto",
      nama_ibu_pria: "Erika",
      nama_ayah_pria: "Jamadin",
      nama_wanita: "Xontoh",
      nama_panggilan_wanita: "Asdas",
      nama_ibu_wanita: "Asfafa",
      nama_ayah_wanita: "Afas",
      posisi_mempelai: "0",
    },
  ];

  for (const m of mempelais) {
    const existing = await prisma.mempelai.findFirst({ where: { id_mempelai: m.id_mempelai } });
    if (!existing) {
      await prisma.mempelai.create({ data: m });
    }
  }

  // 7. Acara
  const acaras = [
    {
      id_acara: 185,
      nama_acara: "Akad Nikah",
      tgl_acara: "2022/12/14",
      waktu_mulai: "09:00",
      waktu_akhir: "10:00",
      tempat_acara: "Kediaman Mempelai Wanita",
      alamat_acara: "Jl. Medan Merdeka Utara No.3 RT.02/RW.03. Gambir, Jakarta Pusat.",
      maps: "",
      set_countdown: "N",
      id_user: 1,
    },
    {
      id_acara: 186,
      nama_acara: "Resepsi",
      tgl_acara: "2022/12/15",
      waktu_mulai: "10:00",
      waktu_akhir: "22:00",
      tempat_acara: "Kediaman Mempelai Wanita",
      alamat_acara: "Jl. Medan Merdeka Utara No.3 RT.02/RW.03. Gambir, Jakarta Pusat.",
      maps: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.705836876672!2d106.82198811476884!3d-6.170129095532956!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5d6aa94d477%3A0xebf3b9d252c86a26!2sMerdeka%20Palace!5e0!3m2!1sen!2sid!4v1595773648767!5m2!1sen!2sid" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>',
      set_countdown: "Y",
      id_user: 1,
    },
    {
      id_acara: 187,
      nama_acara: "Unduh Mantu",
      tgl_acara: "2022/12/31",
      waktu_mulai: "10:00",
      waktu_akhir: "22:00",
      tempat_acara: "Kediaman Mempelai Pria",
      alamat_acara: "Dukun RT 002 RW 002",
      maps: "",
      set_countdown: "N",
      id_user: 1,
    },
  ];

  for (const a of acaras) {
    const existing = await prisma.acara.findFirst({ where: { id_acara: a.id_acara } });
    if (!existing) {
      await prisma.acara.create({ data: a });
    }
  }

  // 8. Komen / Ucapan
  const komens = [
    {
      id_komen: 1,
      id_user: 1,
      nama_komen: "Aninda Safira",
      isi_komen: "Alhamdulilah, selamat atas pernikahan kalian. Semoga pernikahan kalian dilimpahi oleh cinta, kebaikan dan kebahagiaan. Jazakallahu khairan khatira..",
    },
    {
      id_komen: 2,
      id_user: 1,
      nama_komen: "Raisa Andriana",
      isi_komen: "Selamat menikah sahabatku, ‘Barakallahu lakum wa baraka alaikum’",
    },
    {
      id_komen: 3,
      id_user: 1,
      nama_komen: "Anisa Rahma",
      isi_komen: "Alhamdulillah.. Selamat ya. Semoga Allah Swt selalu melimpahkan rahmatNya untuk pernikahan kalian.",
    },
    {
      id_komen: 4,
      id_user: 1,
      nama_komen: "Maudy Ayunda",
      isi_komen: "MasyaAllah.. Selamat buat kalian berdua. Barakallah",
    },
    {
      id_komen: 5,
      id_user: 1,
      nama_komen: "Citra Kirana",
      isi_komen: "Baarakallahu laka wa baaraka ‘alaika wa jama’a bainakumaa fii khaiir. Semoga Allah memberikan keberkahan untukmu dan atasmu, serta semoga Dia mengumpulkan di antara kalian berdua dalam kebaikan.",
    },
    {
      id_komen: 6,
      id_user: 1,
      nama_komen: "Nissya Sabyan",
      isi_komen: "Semoga pernikahan kalian langgeng dan selalu dinaungi petunjuk Allah dalam setiap langkah.. Aamiin",
    },
  ];

  for (const k of komens) {
    const existing = await prisma.komen.findFirst({ where: { id_komen: k.id_komen } });
    if (!existing) {
      await prisma.komen.create({ data: k });
    }
  }

  // 9. Tamu
  const tamus = [
    {
      id_tamu: 1,
      nama_tamu: "Bagus Jumawan",
      nama_slug: "bagus+jumawan",
      alamat_tamu: "Demak, Jawa Tengah",
      alamat_slug: "demak+jawa+tengah",
      no_wa: "089659687659",
      qrcode: "9756540c94be8be6dfe5ed007cfc79e1",
      id_user: 1,
      tgl_kirim: "2022-04-01",
      status_kirim: "terkirim",
      status: "hadir",
    },
    {
      id_tamu: 2,
      nama_tamu: "Kadek Sila",
      nama_slug: "kadek+sila",
      alamat_tamu: "Bali, Indonesia",
      alamat_slug: "bali+indonesia",
      no_wa: "082237972112",
      qrcode: "dc879db724c3dabe409a6905988db685",
      id_user: 1,
      tgl_kirim: "2021-08-17",
      status_kirim: "terkirim",
      status: "hadir",
    },
    {
      id_tamu: 9,
      nama_tamu: "Bayu Sutrisno",
      nama_slug: "bayu+sutrisno",
      alamat_tamu: "Demak, Jawa Tengah",
      alamat_slug: "demak+jawa+tengah",
      no_wa: "089659687659",
      qrcode: "d0d47b4f15aba1d2f895ea0114d91cce",
      id_user: 1,
      tgl_kirim: "2021-08-02",
      status_kirim: "terkirim",
      status: null,
    },
    {
      id_tamu: 10,
      nama_tamu: "Maulana Arifin",
      nama_slug: "maulana+arifin",
      alamat_tamu: "Demak, Jawa Tengah",
      alamat_slug: "demak+jawa+tengah",
      no_wa: "089659687659",
      qrcode: "649d6a20cf7ef33e53ec124f7714d042",
      id_user: 1,
      tgl_kirim: "2021-08-02",
      status_kirim: "terkirim",
      status: null,
    },
  ];

  for (const tm of tamus) {
    const existing = await prisma.tamu.findFirst({ where: { id_tamu: tm.id_tamu } });
    if (!existing) {
      await prisma.tamu.create({ data: tm });
    }
  }

  // 10. Quote
  const existingQuote = await prisma.quote.findFirst({ where: { id_quote: 2 } });
  if (!existingQuote) {
    await prisma.quote.create({
      data: {
        id_quote: 2,
        isi_quote: "Tidak ada solusi yang lebih baik bagi dua insan yang saling mencintai di banding Pernikahan.",
        sumber_quote: "HR Ibnu Majah",
        id_user: 1,
      },
    });
  }

  // 11. Rekening
  const existingRekening = await prisma.rekening.findFirst({ where: { id: 170 } });
  if (!existingRekening) {
    await prisma.rekening.create({
      data: {
        id: 170,
        id_user: 1,
        nama_bank: "OVO",
        no_rekening: "0812345678910",
        nama_pemilik: "Demo",
        qrcode_bank: "qrcode3.png",
      },
    });
  }

  // 12. Rules
  const existingRules = await prisma.rules.findFirst({ where: { id: 1 } });
  if (!existingRules) {
    await prisma.rules.create({
      data: {
        id: 1,
        id_user: 1,
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
  }

  // 13. Setting
  const existingSetting = await prisma.setting.findFirst({ where: { id: 1 } });
  if (!existingSetting) {
    await prisma.setting.create({
      data: {
        id: 1,
        harga: 100000,
        img: "bank.png",
        trial: 2,
        aktif: 60,
        host_email: "",
        email: "",
        pass_email: "",
        no_wa: "6282311168586",
        pesan_wa: "Hello Admin Kenangita, Saya Mau bertanya.",
        salam_pembuka: "Assalamu'alaikum Warahmatullahi Wabarakatuh.\n\nDengan memohon Rahmat dan Ridho Allah SWT, Kami akan menyelenggarakan resepsi pernikahan Putra-Putri kami :",
        wa_gateway: "starsender",
        token_wa: "2f6a625e06edf217a6a6527150f70c532e604770",
        salam_wa_atas: "Assalamualaikum Wr Wb.\nDengan segala kerendahan hati dan syukur atas Karunia Allah SWT.\nKami bermaksud mengundang Bapak/Ibu/Saudara(i) pada acara pernikahan kami.",
        salam_wa_bawah: "Merupakan suatu kebahagiaan bagi Kami apabila Bapak/Ibu/Saudara(i) berkenan hadir untuk memberikan doa restu kepada kami.\nAtas kehadiran dan doa restunya kami ucapkan terimakasih.\n\nWassalamualaikum Wr Wb",
      },
    });
  }

  // 14. Order
  const existingOrder = await prisma.order.findFirst({ where: { id: 1 } });
  if (!existingOrder) {
    await prisma.order.create({
      data: {
        id: 1,
        id_user: 1,
        domain: "demo",
        theme: "59",
        id_paket: 3,
        status: 1,
      },
    });
  }

  // 15. Data
  const existingData = await prisma.data.findFirst({ where: { id: 1 } });
  if (!existingData) {
    await prisma.data.create({
      data: {
        id: 1,
        id_user: 1,
        foto_pria: "1",
        foto_wanita: "1",
        maps: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.705836876672!2d106.82198811476884!3d-6.170129095532956!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5d6aa94d477%3A0xebf3b9d252c86a26!2sMerdeka%20Palace!5e0!3m2!1sen!2sid!4v1595773648767!5m2!1sen!2sid" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>',
        video: "https://youtu.be/PjHqsdT8pJQ",
        kunci: "mIjh78y8ge13b89d99c1a29132e57d2ca",
        salam_pembuka: "السَّلاَمُ عَلَيْكُمْ وَرَحْمَةُ اللهِ وَبَرَكَاتُهُ\n\nDengan memohon Rahmat dan Ridho Allah SWT, Kami akan menyelenggarakan resepsi pernikahan Putra-Putri kami :",
        token_wa: "",
        salam_wa_atas: "Assalamualaikum Wr Wb\nDengan segala kerendahan hati dan syukur atas Karunia Allah SWT\nKami bermaksud mengundang Bapak/Ibu/Saudara(i) pada acara pernikahan kami.",
        salam_wa_bawah: "Merupakan suatu kebahagiaan bagi Kami apabila Bapak/Ibu/Saudara(i) berkenan hadir untuk memberikan doa restu kepada kami.\nAtas kehadiran dan doa restunya kami ucapkan terimakasih \n\nWassalamualaikum Wr Wb",
      },
    });
  }

  // 16. Cerita
  const stories = [
    {
      id: 281,
      id_user: 1,
      tanggal_cerita: "14 Januari 2021",
      judul_cerita: "Pertama bertemu",
      isi_cerita: "Waktu Pertama Kali\nKulihat Dirimu Hadir\nRasa hati ini inginkan dirimu",
    },
    {
      id: 282,
      id_user: 1,
      tanggal_cerita: "15 Maret 2021",
      judul_cerita: "Jatuh Cinta",
      isi_cerita: "Hati tenang mendengar \nsuara indah menyapa\nGeloranya hati ini\nTak ku sangka..",
    },
    {
      id: 283,
      id_user: 1,
      tanggal_cerita: "1 Mei 2021",
      judul_cerita: "Ta'aruf",
      isi_cerita: "Rasa ini.. tak tertahan..\nHati ini..slalu untukmu..",
    },
    {
      id: 284,
      id_user: 1,
      tanggal_cerita: "16 Mei 2021",
      judul_cerita: "Khitbah",
      isi_cerita: "Terimalah lagu ini dari orang biasa\nTapi cintaku padamu luar biasa\nAku tak punya bunga\nAku tak punya harta\nYang ku punya hanyalah\nHati yang setia.. Tulus.. Padamu.. :)",
    },
    {
      id: 285,
      id_user: 1,
      tanggal_cerita: "19 Desember",
      judul_cerita: "Pertemuan Antar Keluarga Besar",
      isi_cerita: "Membicarakan Tanggal dan Waktu Pernikahan",
    },
  ];

  for (const s of stories) {
    const existing = await prisma.cerita.findFirst({ where: { id: s.id } });
    if (!existing) {
      await prisma.cerita.create({ data: s });
    }
  }

  console.log("✅ SQLite database seeding completed successfully!");
}

main()
  .catch((e) => {
    console.error("❌ Seeding error:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
