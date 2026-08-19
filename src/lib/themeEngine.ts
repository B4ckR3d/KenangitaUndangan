import fs from "fs";
import path from "path";
import { prisma } from "./prisma";

interface RenderThemeOptions {
  slug: string;
  themeName?: string;
  inviteName?: string;
  guestAddress?: string;
}

export async function renderPhpTheme({
  slug = "demo",
  themeName = "hwflower",
  inviteName = "Tamu Undangan",
  guestAddress = "",
}: RenderThemeOptions): Promise<string> {
  // 1. Resolve user and datasets from SQLite
  let order = await prisma.order.findFirst({
    where: { domain: slug },
  });

  const userId = order?.id_user || 1;

  const [mempelai, acaraList, ceritaList, rekeningList, quote, komenList, rules, dataRow, albumList] =
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

  // Selected theme
  let cleanTheme = (themeName || order?.theme || "hwflower").toLowerCase().trim();
  let themeFilePath = path.join(process.cwd(), "public", "themes", `${cleanTheme}.php`);

  if (!fs.existsSync(themeFilePath)) {
    cleanTheme = "greenflower";
    themeFilePath = path.join(process.cwd(), "public", "themes", "greenflower.php");
    if (!fs.existsSync(themeFilePath)) {
      cleanTheme = "hwflower";
      themeFilePath = path.join(process.cwd(), "public", "themes", "hwflower.php");
    }
  }

  let output = fs.readFileSync(themeFilePath, "utf-8");

  // Data values
  const namaPria = mempelai?.nama_pria || "Nama Pria";
  const namaPanggilanPria = mempelai?.nama_panggilan_pria || "Pria";
  const namaAyahPria = mempelai?.nama_ayah_pria || "";
  const namaIbuPria = mempelai?.nama_ibu_pria || "";

  const namaWanita = mempelai?.nama_wanita || "Nama Wanita";
  const namaPanggilanWanita = mempelai?.nama_panggilan_wanita || "Wanita";
  const namaAyahWanita = mempelai?.nama_ayah_wanita || "";
  const namaIbuWanita = mempelai?.nama_ibu_wanita || "";

  const posisiMempelai = mempelai?.posisi_mempelai || "0";
  const kunci = dataRow?.kunci || `key_${userId}`;
  const salamPembuka = dataRow?.salam_pembuka || "Assalamu'alaikum Warahmatullahi Wabarakatuh.\n\nDengan memohon Rahmat dan Ridho Allah SWT, Kami bermaksud menyelenggarakan resepsi pernikahan kami :";
  const videoYoutube = dataRow?.video || "";

  const mainAcara = acaraList[0] || {
    nama_acara: "Akad Nikah",
    tgl_acara: "",
    waktu_mulai: "08:00",
    waktu_akhir: "10:00",
    tempat_acara: "",
    alamat_acara: "",
    maps: "",
  };

  const tglAcara = mainAcara.tgl_acara || "";
  const clock = tglAcara ? `${tglAcara} ${mainAcara.waktu_mulai}` : "";
  const maps = mainAcara.maps || "";

  // 2. Perform Precise Replacements
  // Remove base_url calls
  output = output.replace(/<\?php\s+echo\s+base_url\(\);?\s*\?>/gi, "");
  output = output.replace(/<\?=\s*base_url\(\);?\s*\?>/gi, "");

  // Remove initialization PHP loops at the top of <head>
  output = output.replace(/<\?php\s+foreach\s*\(\$mempelai->getResult\(\)\s+as\s+\$row\)\s*\{[\s\S]*?\}\s*\?>/gi, "");
  output = output.replace(/<\?php\s+foreach\s*\(\$data->getResult\(\)\s+as\s+\$row\)\s*\{[\s\S]*?\}\s*\?>/gi, "");

  // Couple title
  const coupleTitle = posisiMempelai === "0"
    ? `${namaPanggilanPria} & ${namaPanggilanWanita}`
    : `${namaPanggilanWanita} & ${namaPanggilanPria}`;

  output = output.replace(
    /<\?php\s+if\(\$posisi_mempelai\s*==\s*0\)\s+echo\s+\$nama_panggilan_pria\." & "\.\$nama_panggilan_wanita;\s+else\s+echo\s+\$nama_panggilan_wanita\." & "\.\$nama_panggilan_pria;\s*\?>/gi,
    coupleTitle
  );

  // Invite & metadata
  output = output.replace(/<\?php\s+echo\s+'Hello\s*'\s*\.\s*\\esc\(\$invite\)\s*\.\s*'[^']*';\s*\?>/gi, `Hello ${inviteName}! Kamu Di Undang..`);
  output = output.replace(/<\?=\s*\\?esc\(\$invite\)\s*\?>/gi, inviteName);
  output = output.replace(/<\?php\s+if\(!empty\(esc\(\$invite\)\)\)\s*\{[^}]*\}\s*else\s*\{[^}]*\}\s*\?>/gi, inviteName);
  output = output.replace(/<\?php\s+if\(!empty\(esc\(\$alamat_tamu\)\)\)\s*\{[^}]*\}\s*\?>/gi, guestAddress);

  // Key variables
  output = output.replace(/<\?=\s*\$kunci;?\s*\?>/gi, kunci);
  output = output.replace(/<\?=\s*\$salam_pembuka;?\s*\?>/gi, salamPembuka.replace(/\n/g, "<br>"));
  output = output.replace(/<\?=\s*\$nama_lengkap_pria;?\s*\?>/gi, namaPria);
  output = output.replace(/<\?php\s+echo\s+\$nama_lengkap_pria;?\s*\?>/gi, namaPria);
  output = output.replace(/<\?=\s*\$nama_lengkap_wanita;?\s*\?>/gi, namaWanita);
  output = output.replace(/<\?php\s+echo\s+\$nama_lengkap_wanita;?\s*\?>/gi, namaWanita);
  output = output.replace(/<\?php\s+echo\s+"Putra Bpk "\.\$nama_ayah_pria\s*\.\s*" dan Ibu "\s*\.\$nama_ibu_pria;?\s*\?>/gi, `Putra Bpk ${namaAyahPria} dan Ibu ${namaIbuPria}`);
  output = output.replace(/<\?php\s+echo\s+"Putri Bpk "\.\$nama_ayah_wanita\s*\.\s*" dan Ibu "\s*\.\$nama_ibu_wanita;?\s*\?>/gi, `Putri Bpk ${namaAyahWanita} dan Ibu ${namaIbuWanita}`);
  output = output.replace(/<\?=\s*\$tgl_acara;?\s*\?>/gi, tglAcara);
  output = output.replace(/<\?=\s*\$clock;?\s*\?>/gi, clock);
  output = output.replace(/<\?=\s*\$maps;?\s*\?>/gi, maps);
  output = output.replace(/<\?=\s*\$musiknya;?\s*\?>/gi, `/assets/users/${kunci}/musik.mp3`);

  // Render Acara Table block
  const acaraRowsHtml = acaraList
    .map((ac: any, idx: number) => `
      <table class="tb-acara" style="margin-bottom: 20px;">
        <thead>
          <tr>
            <th colspan="4" class="acara-title">
              - ${ac.nama_acara.toUpperCase()} -
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th class="tb-ic-acara"><i class="mdi mdi-calendar icon-acara"></i></th>
            <th class="tb-ket-acara"> Tanggal</th>
            <th class="tb-anu-acara">:</th>
            <th class="tb-isi-acara">${ac.tgl_acara || "26 Desember 2026"}</th>
          </tr>
          <tr>
            <th class="tb-ic-acara"><i class="mdi mdi-timer icon-acara"></i></th>
            <th class="tb-ket-acara"> Jam</th>
            <th class="tb-anu-acara">:</th>
            <th class="tb-isi-acara">${ac.waktu_mulai} - ${ac.waktu_akhir} WIB</th>
          </tr>
          <tr>
            <th class="tb-ic-acara"><i class="mdi mdi-map-marker icon-acara"></i></th>
            <th class="tb-ket-acara"> Tempat</th>
            <th class="tb-anu-acara">:</th>
            <th class="tb-isi-acara">${ac.tempat_acara}<br><small>${ac.alamat_acara}</small></th>
          </tr>
        </tbody>
      </table>
    `)
    .join("");

  output = output.replace(
    /<\?php\s+\$i\s*=\s*0;\s*foreach\(\$acara\s+as\s+\$key\s*=>\s*\$data\)\s*\{[\s\S]*?<\?php\s*\}\s*\?>/gi,
    acaraRowsHtml
  );

  // Render Cerita Kita Timeline block
  const ceritaTimelineHtml = ceritaList
    .map((c: any, idx: number) => `
      <div class="timeline">
        <div class="timeline-icon"></div>
        <div class="timeline-content ${idx % 2 === 1 ? "right" : ""}">
          <span class="date">${c.tanggal_cerita}</span>
          <h4 class="title">${c.judul_cerita}</h4>
          <p class="description">${c.isi_cerita}</p>
        </div>
      </div>
    `)
    .join("");

  output = output.replace(
    /<\?php\s+\$no=0;\s*foreach\(\$cerita\s+as\s+\$key\s*=>\s*\$data\)\s*\{[\s\S]*?<\?php\s*\}\s*\?>/gi,
    ceritaTimelineHtml
  );

  // 1. Resolve photo sources for Groom, Bride, Cover, and Gallery
  const defaultGroom = "/assets/users/c5e3c1770e6ccad8326111fb0d58267e/groom.png";
  const defaultBride = "/assets/users/c5e3c1770e6ccad8326111fb0d58267e/bride.png";
  const defaultCover = "/assets/users/c5e3c1770e6ccad8326111fb0d58267e/kita.png";

  const userGroomPathPng = path.join(process.cwd(), "public", "assets", "users", kunci, "groom.png");
  const userGroomPathJpg = path.join(process.cwd(), "public", "assets", "users", kunci, "groom.jpg");
  const userBridePathPng = path.join(process.cwd(), "public", "assets", "users", kunci, "bride.png");
  const userBridePathJpg = path.join(process.cwd(), "public", "assets", "users", kunci, "bride.jpg");
  const userCoverPathPng = path.join(process.cwd(), "public", "assets", "users", kunci, "kita.png");
  const userCoverPathJpg = path.join(process.cwd(), "public", "assets", "users", kunci, "kita.jpg");

  const isValidUrl = (val?: string | null) =>
    val && typeof val === "string" && (val.startsWith("/") || val.startsWith("http"));

  let fotoPria = defaultGroom;
  if (isValidUrl(dataRow?.foto_pria)) {
    fotoPria = dataRow!.foto_pria;
  } else if (fs.existsSync(userGroomPathPng)) {
    fotoPria = `/assets/users/${kunci}/groom.png`;
  } else if (fs.existsSync(userGroomPathJpg)) {
    fotoPria = `/assets/users/${kunci}/groom.jpg`;
  }

  let fotoWanita = defaultBride;
  if (isValidUrl(dataRow?.foto_wanita)) {
    fotoWanita = dataRow!.foto_wanita;
  } else if (fs.existsSync(userBridePathPng)) {
    fotoWanita = `/assets/users/${kunci}/bride.png`;
  } else if (fs.existsSync(userBridePathJpg)) {
    fotoWanita = `/assets/users/${kunci}/bride.jpg`;
  }

  let fotoSampul = defaultCover;
  if (fs.existsSync(userCoverPathPng)) {
    fotoSampul = `/assets/users/${kunci}/kita.png`;
  } else if (fs.existsSync(userCoverPathJpg)) {
    fotoSampul = `/assets/users/${kunci}/kita.jpg`;
  }

  // Replace photo references in theme
  output = output.replace(/<\?=\s*base_url\(\);?\s*\?>\/assets\/users\/<\?=\s*\$kunci;?\s*\?>\/(groom|pria)\.(png|jpg|jpeg|webp)/gi, fotoPria);
  output = output.replace(/assets\/users\/<\?=\s*\$kunci;?\s*\?>\/(groom|pria)\.(png|jpg|jpeg|webp)/gi, fotoPria);
  output = output.replace(/\/assets\/users\/[a-zA-Z0-9_-]+\/(groom|pria)\.(png|jpg|jpeg|webp)/gi, fotoPria);

  output = output.replace(/<\?=\s*base_url\(\);?\s*\?>\/assets\/users\/<\?=\s*\$kunci;?\s*\?>\/(bride|wanita)\.(png|jpg|jpeg|webp)/gi, fotoWanita);
  output = output.replace(/assets\/users\/<\?=\s*\$kunci;?\s*\?>\/(bride|wanita)\.(png|jpg|jpeg|webp)/gi, fotoWanita);
  output = output.replace(/\/assets\/users\/[a-zA-Z0-9_-]+\/(bride|wanita)\.(png|jpg|jpeg|webp)/gi, fotoWanita);

  output = output.replace(/<\?=\s*base_url\(\);?\s*\?>\/assets\/users\/<\?=\s*\$kunci;?\s*\?>\/(kita|sampul|cover|bg-tamu|Ful)\.(png|jpg|jpeg|webp)/gi, fotoSampul);
  output = output.replace(/assets\/users\/<\?=\s*\$kunci;?\s*\?>\/(kita|sampul|cover|bg-tamu|Ful)\.(png|jpg|jpeg|webp)/gi, fotoSampul);
  output = output.replace(/\/assets\/users\/[a-zA-Z0-9_-]+\/(kita|sampul|cover|bg-tamu|Ful)\.(png|jpg|jpeg|webp)/gi, fotoSampul);

  // Render Album Gallery block
  const albumGalleryHtml =
    albumList.length > 0
      ? albumList
          .map((a: any) => {
            const rawUrl = a.album;
            const finalUrl =
              rawUrl.startsWith("/") || rawUrl.startsWith("http")
                ? rawUrl
                : `/assets/users/${kunci}/${rawUrl}.png`;
            return `
          <div class="grid">
            <a href="${finalUrl}" class="fancybox" data-fancybox-group="gall-1" target="_blank">
              <img src="${finalUrl}" alt="Gallery" style="width: 100%; height: 100%; object-fit: cover;" />
            </a>
          </div>
        `;
          })
          .join("")
      : `
      <div class="grid">
        <a href="${fotoSampul}" class="fancybox" data-fancybox-group="gall-1" target="_blank">
          <img src="${fotoSampul}" alt="Gallery" style="width: 100%; height: 100%; object-fit: cover;" />
        </a>
      </div>
    `;

  output = output.replace(
    /<\?php\s+foreach\(\$album\s+as\s+\$key\s*=>\s*\$data\)\s*\{[\s\S]*?<\?php\s*\}\s*\?>/gi,
    albumGalleryHtml
  );

  // Render Rekening / Hadiah block
  const rekeningListHtml = rekeningList
    .map((r: any, idx: number) => `
      <li class="list-group-item">
        <b>${r.nama_bank || "BANK"}</b><br>
        <span id="norek${idx + 1}" style="font-size: 16px; font-weight: bold; color: #d35400;">${r.no_rekening}</span>
        <button class="clipboard btn btn-xs btn-default" data-clipboard-text="${r.no_rekening}" style="margin-left: 8px; padding: 2px 6px;">
          <i class="fa fa-clipboard"></i> Salin
        </button><br>
        <small>An. ${r.nama_pemilik}</small>
        ${r.qrcode_bank ? `<div style="display:flex;align-items:center;justify-content:center;margin-top:10px;"><img src="/assets/users/${kunci}/rekening/${r.qrcode_bank}" alt="Qris" class="img-responsive" style="max-height:160px;"></div>` : ""}
      </li>
    `)
    .join("");

  output = output.replace(
    /<\?php\s+\$i=1;\s*foreach\s*\(\$rekening->getResult\(\)\s+as\s+\$row\)\s*\{[\s\S]*?<\?php\s*\}\s*\?>/gi,
    rekeningListHtml
  );

  // Render Komentar / Ucapan block
  const komenListHtml = komenList
    .map((k: any) => `
      <div class="komen" style="padding: 10px; border-bottom: 1px solid #eee; margin-bottom: 8px; text-align: left;">
        <div class="col-12 komen-nama" style="font-weight: bold; color: #2c3e50;">
          ${k.nama_komen}
        </div>
        <div class="col-12 komen-isi" style="font-size: 13px; color: #555;">
          ${k.isi_komen}
        </div>
      </div>
    `)
    .join("");

  output = output.replace(
    /<\?php\s+foreach\(\$komen\s+as\s+\$key\s*=>\s*\$data\)\s*\{[\s\S]*?<\?php\s*\}\s*\?>/gi,
    komenListHtml
  );

  // Clean all remaining PHP logic / foreach / if blocks cleanly
  output = output.replace(/<\?php[\s\S]*?\?>/gi, "");
  output = output.replace(/<\?=[\s\S]*?\?>/gi, "");

  // Ensure jQuery & FontAwesome are always loaded if not already
  const cdnFallbacks = `
    <!-- Global Fail-safe CDNs for Smooth Theme Rendering -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/clipboard.js/2.0.8/clipboard.min.js"></script>
  `;
  output = output.replace("</head>", `${cdnFallbacks}</head>`);

  // Inject Robust Universal Interaction Script
  const universalInteractiveScript = `
    <script>
      (function() {
        function initThemeInteractions() {
          if (typeof $ === 'undefined') {
            setTimeout(initThemeInteractions, 50);
            return;
          }

          $(document).ready(function() {
            // 1. Universal Welcome Overlay / Buka Undangan Click
            $(document).on('click', '#over-lay-welcome, .thebegining, #buka-undangan, .btn-buka, button#buka-undangan, a#buka-undangan', function(e) {
              e.preventDefault();
              $('#over-lay-welcome').fadeOut(600);
              $('.thebegining').slideUp(600);
              $('#konten').show();
              $('#sampul-konten').fadeIn(600);
              $('.dekorasi-sampul, .dekorasi-all').show();
              $('#nav').show();
              $('body, html').css({ 'overflow': 'auto', 'height': 'auto' });

              // Safe Audio Playback
              var audio = document.getElementById('audio') || document.getElementById('my_audio');
              if (audio) {
                audio.play().catch(function(err) {
                  console.log('Audio autoplay policy note:', err);
                });
              }
            });

            // 2. Mobile Bottom Navigation Tabs Switching
            $(document).on('click', '.mobile-bottom-nav__item', function() {
              var tabId = $(this).attr('id');
              if (tabId === 'lain') {
                $('#nav').hide();
                $('#nav2').show();
                return;
              }
              if (tabId === 'tutup') {
                $('#nav2').hide();
                $('#nav').show();
                return;
              }
              if (tabId) {
                $('.konten').hide();
                $('#' + tabId + '-konten').fadeIn(300);
                $('.mobile-bottom-nav__item').removeClass('mobile-bottom-nav__item--active');
                $(this).addClass('mobile-bottom-nav__item--active');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }
            });

            // 3. Audio Floating Button Toggle
            $(document).on('click', '#music-button, .bulat, .my-musik', function(e) {
              e.preventDefault();
              var audio = document.getElementById('audio') || document.getElementById('my_audio');
              if (audio) {
                if (audio.paused) {
                  audio.play();
                  $('.my-musik').removeClass('fa-volume-off').addClass('fa-volume-up');
                } else {
                  audio.pause();
                  $('.my-musik').removeClass('fa-volume-up').addClass('fa-volume-off');
                }
              }
            });

            // 4. Clipboard.js Copy Button
            try {
              if (typeof ClipboardJS !== 'undefined') {
                new ClipboardJS('.clipboard');
              }
            } catch (err) {
              console.log('ClipboardJS init note:', err);
            }

            $(document).on('click', '.clipboard', function() {
              var text = $(this).attr('data-clipboard-text') || $(this).prev('span').text();
              if (text && navigator.clipboard) {
                navigator.clipboard.writeText(text.trim()).then(function() {
                  alert('Nomor rekening berhasil disalin: ' + text.trim());
                });
              }
            });

            // 5. AJAX Comments Submission
            $(document).on('click', '#submitKomen', function(e) {
              e.preventDefault();
              var nama = $('#nama').val();
              var komentar = $('#komentar').val();
              if (!nama || !komentar) {
                alert('Silakan isi nama dan ucapan Anda.');
                return;
              }

              $('#loading_').show();
              $('#submitKomen').attr('disabled', true);

              $.ajax({
                url: '/api/comments',
                type: 'POST',
                contentType: 'application/json',
                data: JSON.stringify({
                  id_user: ${userId},
                  nama_komen: nama,
                  isi_komen: komentar
                }),
                success: function(response) {
                  $('#loading_').hide();
                  $('#submitKomen').attr('disabled', false);
                  if (response.success) {
                    var newKomen = '<div class="komen" style="padding: 10px; border-bottom: 1px solid #eee; margin-bottom: 8px; text-align: left; background: #f9fdf9;"><div class="col-12 komen-nama" style="font-weight: bold; color: #27ae60;">' + nama + '</div><div class="col-12 komen-isi" style="font-size: 13px; color: #555;">' + komentar + '</div></div>';
                    $('.layout-komen').prepend(newKomen);
                    $('#komentar').val('');
                    alert('Terima kasih! Ucapan & doa restu Anda berhasil dikirim.');
                  }
                },
                error: function() {
                  $('#loading_').hide();
                  $('#submitKomen').attr('disabled', false);
                  alert('Gagal mengirim ucapan. Silakan coba lagi.');
                }
              });
            });
          });
        }

        initThemeInteractions();
      })();
    </script>
  `;

  output = output.replace("</body>", `${universalInteractiveScript}</body>`);

  return output;
}
