<!DOCTYPE html>
<html lang="id">
<head>
    <?php foreach ($mempelai->getResult() as $row) {
        $nama_panggilan_pria = $row->nama_panggilan_pria;
        $nama_lengkap_pria = $row->nama_pria;
        $nama_ayah_pria = $row->nama_ayah_pria;
        $nama_ibu_pria = $row->nama_ibu_pria;
        $nama_panggilan_wanita = $row->nama_panggilan_wanita;
        $nama_lengkap_wanita = $row->nama_wanita;
        $nama_ayah_wanita = $row->nama_ayah_wanita;
        $nama_ibu_wanita = $row->nama_ibu_wanita;
        $posisi_mempelai = $row->posisi_mempelai;
    }
    ?>
    <?php foreach ($data->getResult() as $row){
        $kunci = $row->kunci;
    }
	?>
    <title><?php if($posisi_mempelai == 0) echo $nama_panggilan_pria." & ".$nama_panggilan_wanita; else echo $nama_panggilan_wanita." & ".$nama_panggilan_pria;?></title> 
    <!-- REQUIRED META AREA -->
	<meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta property="og:title" content="<?php if($posisi_mempelai == 0) echo $nama_panggilan_pria." & ".$nama_panggilan_wanita; else echo $nama_panggilan_wanita." & ".$nama_panggilan_pria;?>">
    <meta property="og:description" content="<?php echo 'Hello ' . \esc($invite) . '! Kamu Di Undang..'; ?>">
    <link rel="icon" href="<?= base_url() ?>/assets/users/<?= $kunci; ?>/kita.png">
    <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/MaterialDesign-Webfont/7.2.96/css/materialdesignicons.min.css">
    <link rel="stylesheet" href="<?php echo base_url() ?>/assets/themes/purple-flowers/css/style.css">
    <link rel="stylesheet" href="<?php echo base_url() ?>/assets/undangan/font-awesome/css/all.css">
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
</head>

<body oncontextmenu="return false">

<!-- ============== COVER / HALAMAN AWAL =============== -->
<div class="thebegining">
    <div class="cover-card">
        <!-- Bismillah Header -->
        <p style="font-family: 'Amiri', serif; font-size: 22px; color: #302a5d; margin-bottom: 5px;">بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ</p>
        <p style="font-family: 'Playfair Display', serif; font-size: 12px; letter-spacing: 0.25em; color: #7c3aed; text-transform: uppercase; font-weight: 700; margin-bottom: 20px;">
            UNDANGAN PERNIKAHAN
        </p>

        <!-- Wreath with Couple Initial / Name -->
        <div style="position: relative; width: 170px; height: 170px; margin: 0 auto 20px; display: flex; align-items: center; justify-content: center;">
            <img src="<?= base_url() ?>/assets/themes/purple-flowers/img/wreath.png" style="position: absolute; inset: 0; width: 100%; height: 100%; object-fit: contain;" />
            <div style="position: relative; z-index: 2; text-align: center;">
                <h2 style="font-family: 'Dancing Script', cursive; font-size: 32px; color: #302a5d; line-height: 1.1; margin: 0;">
                    <?php if($posisi_mempelai == 0) echo $nama_panggilan_pria."<br><span style='font-size:20px; color:#8b5cf6;'>&</span><br>".$nama_panggilan_wanita; else echo $nama_panggilan_wanita."<br><span style='font-size:20px; color:#8b5cf6;'>&</span><br>".$nama_panggilan_pria;?>
                </h2>
            </div>
        </div>

        <div style="padding: 14px 18px; background: #f5f3ff; border-radius: 18px; border: 1px solid #ddd6fe; margin-bottom: 15px;">
            <p style="font-size: 11px; color: #64748b; margin-bottom: 4px;">Kepada Yth. Bapak/Ibu/Saudara(i):</p>
            <h3 style="font-family: 'Playfair Display', serif; font-size: 17px; color: #302a5d; font-weight: 700; margin: 0;">
                <?php if(!empty(esc($invite))) echo ucwords(esc($invite)); else echo "Tamu Undangan"; ?>
            </h3>
        </div>

        <button id="buka-undangan" type="button">
            <i class="mdi mdi-email-open-outline" style="font-size: 16px;"></i> Open Invitation
        </button>
    </div>
</div>

<!-- ============== ISI KONTEN UNDANGAN =============== -->
<div id="konten" style="display: none;">

    <?php foreach ($data->getResult() as $row){
		$youtube = $row->video;
		$salam_pembuka = $row->salam_pembuka;
		$musiknya = "/assets/users/".$kunci."/musik.mp3";
    }
    if(!empty($countdown->getResult())){
        foreach ($countdown->getResult() as $row){
            $tgl_acara = $row->tgl_acara;
            $clock = $row->tgl_acara.' '.$row->waktu_mulai;
            $maps = $row->maps;
        }
	} else {
	    $tgl_acara = $acara[0]->tgl_acara;
		$clock = $acara[0]->tgl_acara.' '.$acara[0]->waktu_mulai;
		$maps = $acara[0]->maps;
	}
	?>

    <!-- Audio Player -->
    <audio loop src="<?php echo base_url() ?><?= $musiknya ?>" id="audio"></audio>

    <!-- ============== SAMPUL KONTEN =============== -->
    <div id="sampul-konten" class="konten">
        <div class="card-purple text-center">
            <p style="font-family: 'Amiri', serif; font-size: 24px; color: #302a5d; margin-bottom: 5px;">بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ</p>
            <p style="font-family: 'Playfair Display', serif; font-size: 12px; letter-spacing: 0.2em; color: #7c3aed; font-weight: 700;">THE WEDDING OF</p>
            <h1 style="font-family: 'Playfair Display', serif; font-size: 34px; color: #302a5d; margin: 10px 0;">
                <?php if($posisi_mempelai == 0) echo $nama_panggilan_pria." & ".$nama_panggilan_wanita; else echo $nama_panggilan_wanita." & ".$nama_panggilan_pria;?>
            </h1>
            <p style="font-size: 13px; color: #64748b; max-width: 480px; margin: 15px auto; font-style: italic;">
                "Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa kasih dan sayang."
            </p>
            <span style="font-size: 11px; color: #7c3aed; font-weight: 700;">(QS. Ar-Rum: 21)</span>
        </div>
    </div>

    <!-- ============== MEMPELAI KONTEN =============== -->
    <div id="mempelai-konten" class="konten" style="display: none;">
        <div class="card-purple text-center">
            <div class="section-title">
                <h2>Pasangan Mempelai</h2>
                <p>Maha Suci Allah yang telah menciptakan makhluk-Nya berpasang-pasangan</p>
            </div>

            <!-- Bride -->
            <div style="margin-bottom: 25px;">
                <img src="<?= base_url() ?>/assets/users/<?= $kunci; ?>/bride.png" class="mempelai-img" />
                <h3 class="mempelai-wanita-nama"><?= $nama_lengkap_wanita ?></h3>
                <p class="mempelai-wanita-ortu">Putri Bpk <?= $nama_ayah_wanita ?> & Ibu <?= $nama_ibu_wanita ?></p>
                <div style="margin-top: 8px;">
                    <span style="display:inline-flex; align-items:center; gap:6px; background:#f5f3ff; color:#7c3aed; padding:4px 14px; border-radius:50px; font-size:11px; font-weight:600; border:1px solid #ddd6fe;">
                        <i class="mdi mdi-instagram"></i> @instagram
                    </span>
                </div>
            </div>

            <div class="dengan">&</div>

            <!-- Groom -->
            <div style="margin-top: 10px;">
                <img src="<?= base_url() ?>/assets/users/<?= $kunci; ?>/groom.png" class="mempelai-img" />
                <h3 class="mempelai-pria-nama"><?= $nama_lengkap_pria ?></h3>
                <p class="mempelai-pria-ortu">Putra Bpk <?= $nama_ayah_pria ?> & Ibu <?= $nama_ibu_pria ?></p>
                <div style="margin-top: 8px;">
                    <span style="display:inline-flex; align-items:center; gap:6px; background:#f5f3ff; color:#7c3aed; padding:4px 14px; border-radius:50px; font-size:11px; font-weight:600; border:1px solid #ddd6fe;">
                        <i class="mdi mdi-instagram"></i> @instagram
                    </span>
                </div>
            </div>
        </div>
    </div>

    <!-- ============== ACARA KONTEN =============== -->
    <div id="acara-konten" class="konten" style="display: none;">
        <div class="section-title">
            <h2>Rangkaian Acara</h2>
            <p>Save The Date</p>
        </div>
        <div class="acaranya">
            <?php $i = 0; foreach($acara as $key => $data) { $i++; ?>
            <table class="tb-acara">
                <thead>
                    <tr>
                        <th colspan="4" class="acara-title">- <?= strtoupper($data->nama_acara) ?> -</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th class="tb-ic-acara"><i class="mdi mdi-calendar icon-acara"></i></th>
                        <th class="tb-ket-acara"> Tanggal</th>
                        <th class="tb-anu-acara">:</th>
                        <th class="tb-isi-acara"><?= $data->tgl_acara ?></th>
                    </tr>
                    <tr>
                        <th class="tb-ic-acara"><i class="mdi mdi-clock-outline icon-acara"></i></th>
                        <th class="tb-ket-acara"> Jam</th>
                        <th class="tb-anu-acara">:</th>
                        <th class="tb-isi-acara"><?= $data->waktu_mulai ?> - <?= $data->waktu_akhir ?> WIB</th>
                    </tr>
                    <tr>
                        <th class="tb-ic-acara"><i class="mdi mdi-map-marker icon-acara"></i></th>
                        <th class="tb-ket-acara"> Lokasi</th>
                        <th class="tb-anu-acara">:</th>
                        <th class="tb-isi-acara"><?= $data->tempat_acara ?><br><small style="color:#64748b;"><?= $data->alamat_acara ?></small></th>
                    </tr>
                </tbody>
            </table>
            <?php } ?>
        </div>
    </div>

    <!-- ============== CERITA / MEMORIES KONTEN =============== -->
    <div id="cerita-konten" class="konten" style="display: none;">
        <div class="card-purple">
            <div class="section-title">
                <h2>Our Memories</h2>
                <p>Kisah Perjalanan & Kenangan Indah</p>
            </div>
            <div class="main-timeline">
                <?php foreach($cerita as $key => $data) { ?>
                <div class="timeline">
                    <span class="date"><?= $data['tanggal_cerita'] ?></span>
                    <h4 class="title"><?= $data['judul_cerita'] ?></h4>
                    <p class="description"><?= $data['isi_cerita'] ?></p>
                </div>
                <?php } ?>
            </div>
        </div>
    </div>

    <!-- ============== HADIAH / REKENING KONTEN =============== -->
    <div id="hadiah-konten" class="konten" style="display: none;">
        <div class="card-purple text-center">
            <div class="section-title">
                <h2>Wedding Gift</h2>
                <p>Terima kasih telah menambah semangat kebahagiaan kami</p>
            </div>
            <ul class="list-group list-group-flush" style="text-align: left;">
                <?php $i=1; foreach ($rekening->getResult() as $row) { $i++; ?>
                <li class="list-group-item">
                    <b style="color: #302a5d; font-family: 'Playfair Display', serif; font-size: 15px;"><?= $row->nama_bank ?></b><br>
                    <span id="norek<?= $i ?>" style="font-size: 16px; font-weight: bold; color: #7c3aed;"><?= $row->no_rekening ?></span>
                    <button class="clipboard btn btn-xs btn-default" data-clipboard-text="<?= $row->no_rekening ?>" style="margin-left: 8px; padding: 3px 10px; background: #f5f3ff; color: #7c3aed; border: 1px solid #ddd6fe; border-radius: 50px;">
                        <i class="fa fa-clipboard"></i> Salin
                    </button><br>
                    <small style="color: #64748b;">a.n. <?= $row->nama_pemilik ?></small>
                    <?php if($row->qrcode_bank != '') { ?>
                    <div style="display:flex;align-items:center;justify-content:center;margin-top:12px;">
                        <img src="<?= base_url() ?>/assets/users/<?= $kunci; ?>/rekening/<?= $row->qrcode_bank ?>" alt="Qris" style="max-height:160px; border-radius: 12px; border: 1px solid #ddd6fe;">
                    </div>
                    <?php } ?>
                </li>
                <?php } ?>
            </ul>
        </div>
    </div>

    <!-- ============== UCAPAN / RSVP KONTEN =============== -->
    <div id="ucapan-konten" class="konten" style="display: none;">
        <div class="card-purple">
            <div class="section-title">
                <h2>Reservasi & Ucapan</h2>
                <p>Kirim ucapan untuk mempelai dan konfirmasi kehadiran</p>
            </div>
            <div class="form-group">
                <input id="nama" type="text" class="form-control" placeholder="Nama Anda" value="<?= esc($invite) ?>" style="background:#f8fafc; color:#1e293b; border:1px solid #cbd5e1; border-radius:14px; padding:12px;" required>
            </div>
            <div class="form-group">
                <textarea id="komentar" class="form-control" placeholder="Tuliskan ucapan dan doa restu Anda..." rows="3" style="background:#f8fafc; color:#1e293b; border:1px solid #cbd5e1; border-radius:14px; padding:12px;" required></textarea>
            </div>
            <button id="submitKomen" class="btn btn-block" style="background: linear-gradient(135deg, #8b5cf6, #6d28d9); color:#fff; font-family:'Plus Jakarta Sans',sans-serif; font-weight:700; border-radius:50px; padding:14px; box-shadow: 0 8px 20px rgba(124,58,237,0.3);">
                Kirim Ucapan RSVP
            </button>
            <div id="loading_" style="display:none; text-align:center; margin-top:10px; color:#7c3aed;">Mengirim ucapan...</div>

            <div class="layout-komen" style="margin-top: 25px;">
                <?php foreach($komen as $key => $data) { ?>
                <div class="komen" style="padding: 12px; border-bottom: 1px solid #e2e8f0; margin-bottom: 8px;">
                    <div style="font-weight: 700; color: #302a5d; font-size: 13px;"><?= \esc($data['nama_komentar']); ?></div>
                    <div style="font-size: 12px; color: #64748b; margin-top: 4px;"><?= \esc($data['isi_komentar']); ?></div>
                </div>
                <?php } ?>
            </div>
        </div>
    </div>
</div>

<!-- ============== BOTTOM NAVIGATION =============== -->
<nav class="mobile-bottom-nav2" id="nav" style="display: none;">
    <div style="display: flex; justify-content: space-around; align-items: center;">
        <div class="mobile-bottom-nav__item mobile-bottom-nav__item--active" id="sampul">
            <i class="navbar-icon mdi mdi-home"></i> Opening
        </div>
        <div class="mobile-bottom-nav__item" id="mempelai">
            <i class="navbar-icon mdi mdi-heart"></i> Couple
        </div>
        <div class="mobile-bottom-nav__item" id="acara">
            <i class="navbar-icon mdi mdi-calendar-text"></i> Acara
        </div>
        <div class="mobile-bottom-nav__item" id="cerita">
            <i class="navbar-icon mdi mdi-book-open-page-variant"></i> Memories
        </div>
        <div class="mobile-bottom-nav__item" id="hadiah">
            <i class="navbar-icon mdi mdi-gift"></i> Gift
        </div>
        <div class="mobile-bottom-nav__item" id="ucapan">
            <i class="navbar-icon mdi mdi-message-text"></i> RSVP
        </div>
    </div>
</nav>

<!-- Audio Button -->
<a id="music-button" class="bulat" style="display: none;">
    <i class="fa fa-volume-up my-musik"></i>
</a>

</body>
</html>
