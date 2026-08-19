<?php
// PHP Theme Template Bridge for Next.js
// Renders 100% exact original CodeIgniter .php templates from app/Views/undangan/themes/

error_reporting(E_ALL & ~E_NOTICE & ~E_WARNING & ~E_DEPRECATED);

$theme = $_GET['theme'] ?? $argv[1] ?? 'arabian';
$invite = $_GET['to'] ?? $_GET['invite'] ?? $argv[2] ?? 'Tamu Undangan';
$baseUrl = 'http://localhost:3000';

function base_url() {
    return 'http://localhost:3000';
}

function esc($str) {
    return htmlspecialchars($str ?? '', ENT_QUOTES, 'UTF-8');
}

if (!defined('SITE_UNDANGAN')) {
    define('SITE_UNDANGAN', 'http://localhost:3000');
}

// Mock Result Class for CodeIgniter compatibility
class DbResultMock {
    private $data;
    public function __construct($data) {
        $this->data = $data;
    }
    public function getResult() {
        return array_map(function($item) {
            return (object)$item;
        }, $this->data);
    }
}

// Sample Data Objects matching MySQL db_undangan
$mempelai = new DbResultMock([
    [
        'nama_pria' => 'Romeo Montague',
        'nama_panggilan_pria' => 'Romeo',
        'nama_ayah_pria' => 'Lord Montague',
        'nama_ibu_pria' => 'Lady Montague',
        'nama_wanita' => 'Juliet Capulet',
        'nama_panggilan_wanita' => 'Juliet',
        'nama_ayah_wanita' => 'Lord Capulet',
        'nama_ibu_wanita' => 'Lady Capulet',
        'posisi_mempelai' => 0,
    ]
]);

$data = new DbResultMock([
    [
        'kunci' => 'demo',
        'video' => '',
        'salam_pembuka' => "Assalamu'alaikum Wr. Wb.\nDengan memohon rahmat dan ridho Allah SWT, kami mengundang Bapak/Ibu/Saudara/i untuk menghadiri acara pernikahan kami.",
    ]
]);

$rules = new DbResultMock([
    [
        'prokes' => 1,
        'cerita' => 1,
        'gallery' => 1,
        'komen' => 1,
        'qrcode' => 1,
        'hadiah' => 1,
    ]
]);

$order = [
    (object)['buku_tamu' => 1, 'kirim_hadiah' => 1]
];

$rekening = new DbResultMock([
    [
        'nama_bank' => 'BCA',
        'no_rekening' => '1234567890',
        'pemilik' => 'Romeo Montague',
    ]
]);

$countdown = new DbResultMock([
    [
        'tgl_acara' => '2026-12-26',
        'waktu_mulai' => '09:00',
        'maps' => '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.521260322283!2d106.8195613507864!3d-6.194741395493371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5390917b759%3A0x6b45e6782db59a02!2sBundaran%20HI!5e0!3m2!1sid!2sid!4v1620000000000!5m2!1sid!2sid" width="100%" height="300" style="border:0;" allowfullscreen="" loading="lazy"></iframe>',
    ]
]);

$acara = [
    (object)[
        'nama_acara' => 'Akad & Resepsi Pernikahan',
        'tgl_acara' => '2026-12-26',
        'waktu_mulai' => '09:00 WIB',
        'waktu_akhir' => 'Selesai',
        'tempat_acara' => 'Gedung Grand Ballroom Jakarta',
        'alamat_acara' => 'Jl. Jendral Sudirman No. 1, Jakarta Selatan',
        'set_countdown' => 'Y',
        'maps' => 'https://maps.google.com',
    ]
];

$cerita = [
    [
        'tanggal_cerita' => '15 Juni 2021',
        'judul_cerita' => 'Awal Pertemuan',
        'isi_cerita' => 'Pertemuan pertama di sebuah perpustakaan kampus saat mencari buku yang sama.',
    ],
    [
        'tanggal_cerita' => '20 Mei 2026',
        'judul_cerita' => 'Lamaran',
        'isi_cerita' => 'Pertemuan antar keluarga besar untuk mengikat janji suci pernikahan.',
    ]
];

$album = [
    ['album' => '1'],
    ['album' => '2'],
];

$web = 'demo';

// Path to original PHP theme file
$themeFile = __DIR__ . '/../app/Views/undangan/themes/' . $theme . '.php';

if (!file_exists($themeFile)) {
    $themeFile = __DIR__ . '/../app/Views/undangan/themes/arabian.php';
}

// Render original PHP file directly
include $themeFile;
