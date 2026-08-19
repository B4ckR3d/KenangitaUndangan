<!DOCTYPE html>
<?php
/**
 * Theme Template: Batak Merah
 * Category: Wedding
 * Auto-converted from MHTML to PHP Template
 */

$posisi_mempelai = isset($posisi_mempelai) ? $posisi_mempelai : 0;
$nama_pria = isset($nama_pria) ? $nama_pria : "Andra Leksmana";
$nama_panggilan_pria = isset($nama_panggilan_pria) ? $nama_panggilan_pria : "Andra";
$nama_ayah_pria = isset($nama_ayah_pria) ? $nama_ayah_pria : "Kusmanto";
$nama_ibu_pria = isset($nama_ibu_pria) ? $nama_ibu_pria : "Muslimah";

$nama_wanita = isset($nama_wanita) ? $nama_wanita : "Siti Amelia";
$nama_panggilan_wanita = isset($nama_panggilan_wanita) ? $nama_panggilan_wanita : "Amel";
$nama_ayah_wanita = isset($nama_ayah_wanita) ? $nama_ayah_wanita : "Soekatmo";
$nama_ibu_wanita = isset($nama_ibu_wanita) ? $nama_ibu_wanita : "Siti Fatimah";

$kunci = isset($kunci) ? $kunci : (isset($dataRow) && isset($dataRow->kunci) ? $dataRow->kunci : "demo");
$salam_pembuka = isset($salam_pembuka) ? $salam_pembuka : "Assalamu'alaikum Warahmatullahi Wabarakatuh";
$tgl_acara = isset($tgl_acara) ? $tgl_acara : "2026/12/26";
$clock = isset($clock) ? $clock : "2026/12/26 08:00";
$maps = isset($maps) ? $maps : "";
$musiknya = isset($musiknya) ? $musiknya : "";
$invite = isset($invite) ? $invite : "Tamu Undangan";
?>
<html lang="id" class="notranslate" translate="no"><head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8"><style type="text/css">
@charset "utf-8";

@import url("https://fonts.googleapis.com/css2?family=Carattere&family=Modern+Antiqua&display=swap");

:root { --inv-bg: #620404; --inv-base: #ffffff; --inv-accent: #BC9A53; --inv-border: #BC9A53; --font-base: 'Modern Antiqua', cursive; --font-accent: 'Modern Antiqua', cursive; --font-latin: 'Carattere', cursive; --menu-bg: #2F0101; --menu-inactive: #FFF7E1; --menu-active: #BC9A53; --btn-color: #ffffff; }

.menu-item.is-active { color: var(--menu-bg) !important; background-color: var(--menu-active) !important; }

</style><style type="text/css">
@charset "utf-8";

@import url("/fonts/brittany_signature/BrittanySignature.css");

@import url("/fonts/photograph_signature/fonts.css");

@import url("/fonts/heatwood/Heatwood.css");

.font-brittany-signature { font-family: "Brittany Signature"; line-height: 1.6 !important; }

.font-photograph-signature { font-family: "Photograph Signature"; line-height: 1.6 !important; }

.font-heatwood { font-family: Heatwood; line-height: 3 !important; }

#YTMusic { display: block; }

</style><style type="text/css">
@charset "utf-8";

.noty_layout_mixin, #noty_layout__top, #noty_layout__topLeft, #noty_layout__topCenter, #noty_layout__topRight, #noty_layout__bottom, #noty_layout__bottomLeft, #noty_layout__bottomCenter, #noty_layout__bottomRight, #noty_layout__center, #noty_layout__centerLeft, #noty_layout__centerRight { position: fixed; margin: 0px; padding: 0px; z-index: 9999999; transform: translateZ(0px) scale(1, 1); backface-visibility: hidden; -webkit-font-smoothing: subpixel-antialiased; filter: blur(0px); max-width: 90%; }

#noty_layout__top { top: 0px; left: 5%; width: 90%; }

#noty_layout__topLeft { top: 20px; left: 20px; width: 325px; }

#noty_layout__topCenter { top: 5%; left: 50%; width: 325px; transform: translate(calc(-50% - 0.5px)) translateZ(0px) scale(1, 1); }

#noty_layout__topRight { top: 20px; right: 20px; width: 325px; }

#noty_layout__bottom { bottom: 0px; left: 5%; width: 90%; }

#noty_layout__bottomLeft { bottom: 20px; left: 20px; width: 325px; }

#noty_layout__bottomCenter { bottom: 5%; left: 50%; width: 325px; transform: translate(calc(-50% - 0.5px)) translateZ(0px) scale(1, 1); }

#noty_layout__bottomRight { bottom: 20px; right: 20px; width: 325px; }

#noty_layout__center { top: 50%; left: 50%; width: 325px; transform: translate(calc(-50% - 0.5px), calc(-50% - 0.5px)) translateZ(0px) scale(1, 1); }

#noty_layout__centerLeft { top: 50%; left: 20px; width: 325px; transform: translate(0px, calc(-50% - 0.5px)) translateZ(0px) scale(1, 1); }

#noty_layout__centerRight { top: 50%; right: 20px; width: 325px; transform: translate(0px, calc(-50% - 0.5px)) translateZ(0px) scale(1, 1); }

.noty_progressbar { display: none; }

.noty_has_timeout .noty_progressbar { display: block; position: absolute; left: 0px; bottom: 0px; height: 3px; width: 100%; background-color: rgb(100, 100, 100); opacity: 0.2; }

.noty_bar { backface-visibility: hidden; transform: translate(0px, 0px) scale(1, 1); -webkit-font-smoothing: subpixel-antialiased; overflow: hidden; }

.noty_effects_open { opacity: 0; transform: translate(50%); animation: 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55) 0s 1 normal forwards running noty_anim_in; }

.noty_effects_close { animation: 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55) 0s 1 normal forwards running noty_anim_out; }

.noty_fix_effects_height { animation: 75ms ease-out 0s 1 normal none running noty_anim_height; }

.noty_close_with_click { cursor: pointer; }

.noty_close_button { position: absolute; top: 2px; right: 2px; font-weight: bold; width: 20px; height: 20px; text-align: center; line-height: 20px; background-color: rgba(0, 0, 0, 0.05); border-radius: 2px; cursor: pointer; transition: 0.2s ease-out; }

.noty_close_button:hover { background-color: rgba(0, 0, 0, 0.1); }

.noty_modal { position: fixed; width: 100%; height: 100%; background-color: rgb(0, 0, 0); z-index: 10000; opacity: 0.3; left: 0px; top: 0px; }

.noty_modal.noty_modal_open { opacity: 0; animation: 0.3s ease-out 0s 1 normal none running noty_modal_in; }

.noty_modal.noty_modal_close { animation: 0.3s ease-out 0s 1 normal forwards running noty_modal_out; }

@keyframes noty_modal_in { 
  100% { opacity: 0.3; }
}

@keyframes noty_modal_out { 
  100% { opacity: 0; }
}

@keyframes noty_modal_out { 
  100% { opacity: 0; }
}

@keyframes noty_anim_in { 
  100% { transform: translate(0px); opacity: 1; }
}

@keyframes noty_anim_out { 
  100% { transform: translate(50%); opacity: 0; }
}

@keyframes noty_anim_height { 
  100% { height: 0px; }
}

.noty_theme__relax.noty_bar { margin: 4px 0px; overflow: hidden; border-radius: 2px; position: relative; }

.noty_theme__relax.noty_bar .noty_body { padding: 10px; }

.noty_theme__relax.noty_bar .noty_buttons { border-top: 1px solid rgb(231, 231, 231); padding: 5px 10px; }

.noty_theme__relax.noty_type__alert, .noty_theme__relax.noty_type__notification { background-color: rgb(255, 255, 255); border: 1px solid rgb(222, 222, 222); color: rgb(68, 68, 68); }

.noty_theme__relax.noty_type__warning { background-color: rgb(255, 234, 168); border: 1px solid rgb(255, 194, 55); color: rgb(130, 98, 0); }

.noty_theme__relax.noty_type__warning .noty_buttons { border-color: rgb(223, 170, 48); }

.noty_theme__relax.noty_type__error { background-color: rgb(255, 129, 129); border: 1px solid rgb(226, 83, 83); color: rgb(255, 255, 255); }

.noty_theme__relax.noty_type__error .noty_buttons { border-color: darkred; }

.noty_theme__relax.noty_type__info, .noty_theme__relax.noty_type__information { background-color: rgb(120, 197, 231); border: 1px solid rgb(59, 173, 214); color: rgb(255, 255, 255); }

.noty_theme__relax.noty_type__info .noty_buttons, .noty_theme__relax.noty_type__information .noty_buttons { border-color: rgb(11, 144, 196); }

.noty_theme__relax.noty_type__success { background-color: rgb(188, 245, 188); border: 1px solid rgb(124, 221, 119); color: darkgreen; }

.noty_theme__relax.noty_type__success .noty_buttons { border-color: rgb(80, 194, 78); }

.noty_theme__metroui.noty_bar { margin: 4px 0px; overflow: hidden; position: relative; box-shadow: rgba(0, 0, 0, 0.298) 0px 0px 5px 0px; }

.noty_theme__metroui.noty_bar .noty_progressbar { position: absolute; left: 0px; bottom: 0px; height: 3px; width: 100%; background-color: rgb(0, 0, 0); opacity: 0.2; }

.noty_theme__metroui.noty_bar .noty_body { padding: 1.25em; font-size: 14px; }

.noty_theme__metroui.noty_bar .noty_buttons { padding: 0px 10px 0.5em; }

.noty_theme__metroui.noty_type__alert, .noty_theme__metroui.noty_type__notification { background-color: rgb(255, 255, 255); color: rgb(29, 29, 29); }

.noty_theme__metroui.noty_type__warning { background-color: rgb(250, 104, 0); color: rgb(255, 255, 255); }

.noty_theme__metroui.noty_type__error { background-color: rgb(206, 53, 44); color: rgb(255, 255, 255); }

.noty_theme__metroui.noty_type__info, .noty_theme__metroui.noty_type__information { background-color: rgb(27, 161, 226); color: rgb(255, 255, 255); }

.noty_theme__metroui.noty_type__success { background-color: rgb(96, 169, 23); color: rgb(255, 255, 255); }

.noty_theme__mint.noty_bar { margin: 4px 0px; overflow: hidden; border-radius: 2px; position: relative; }

.noty_theme__mint.noty_bar .noty_body { padding: 10px; font-size: 14px; }

.noty_theme__mint.noty_bar .noty_buttons { padding: 10px; }

.noty_theme__mint.noty_type__alert, .noty_theme__mint.noty_type__notification { background-color: rgb(255, 255, 255); border-bottom: 1px solid rgb(209, 209, 209); color: rgb(47, 47, 47); }

.noty_theme__mint.noty_type__warning { background-color: rgb(255, 174, 66); border-bottom: 1px solid rgb(232, 159, 60); color: rgb(255, 255, 255); }

.noty_theme__mint.noty_type__error { background-color: rgb(222, 99, 111); border-bottom: 1px solid rgb(202, 90, 101); color: rgb(255, 255, 255); }

.noty_theme__mint.noty_type__info, .noty_theme__mint.noty_type__information { background-color: rgb(127, 126, 255); border-bottom: 1px solid rgb(116, 115, 232); color: rgb(255, 255, 255); }

.noty_theme__mint.noty_type__success { background-color: rgb(175, 199, 101); border-bottom: 1px solid rgb(160, 181, 92); color: rgb(255, 255, 255); }

.noty_theme__sunset.noty_bar { margin: 4px 0px; overflow: hidden; border-radius: 2px; position: relative; }

.noty_theme__sunset.noty_bar .noty_body { padding: 10px; font-size: 14px; text-shadow: rgba(0, 0, 0, 0.1) 1px 1px 1px; }

.noty_theme__sunset.noty_bar .noty_buttons { padding: 10px; }

.noty_theme__sunset.noty_type__alert, .noty_theme__sunset.noty_type__notification { background-color: rgb(7, 59, 76); color: rgb(255, 255, 255); }

.noty_theme__sunset.noty_type__alert .noty_progressbar, .noty_theme__sunset.noty_type__notification .noty_progressbar { background-color: rgb(255, 255, 255); }

.noty_theme__sunset.noty_type__warning { background-color: rgb(255, 209, 102); color: rgb(255, 255, 255); }

.noty_theme__sunset.noty_type__error { background-color: rgb(239, 71, 111); color: rgb(255, 255, 255); }

.noty_theme__sunset.noty_type__error .noty_progressbar { opacity: 0.4; }

.noty_theme__sunset.noty_type__info, .noty_theme__sunset.noty_type__information { background-color: rgb(17, 138, 178); color: rgb(255, 255, 255); }

.noty_theme__sunset.noty_type__info .noty_progressbar, .noty_theme__sunset.noty_type__information .noty_progressbar { opacity: 0.6; }

.noty_theme__sunset.noty_type__success { background-color: rgb(6, 214, 160); color: rgb(255, 255, 255); }

.noty_theme__bootstrap-v3.noty_bar { margin: 4px 0px; overflow: hidden; position: relative; border: 1px solid transparent; border-radius: 4px; }

.noty_theme__bootstrap-v3.noty_bar .noty_body { padding: 15px; }

.noty_theme__bootstrap-v3.noty_bar .noty_buttons { padding: 10px; }

.noty_theme__bootstrap-v3.noty_bar .noty_close_button { font-size: 21px; font-weight: 700; line-height: 1; color: rgb(0, 0, 0); text-shadow: rgb(255, 255, 255) 0px 1px 0px; opacity: 0.2; background: transparent; }

.noty_theme__bootstrap-v3.noty_bar .noty_close_button:hover { background: transparent; text-decoration: none; cursor: pointer; opacity: 0.5; }

.noty_theme__bootstrap-v3.noty_type__alert, .noty_theme__bootstrap-v3.noty_type__notification { background-color: rgb(255, 255, 255); color: inherit; }

.noty_theme__bootstrap-v3.noty_type__warning { background-color: rgb(252, 248, 227); color: rgb(138, 109, 59); border-color: rgb(250, 235, 204); }

.noty_theme__bootstrap-v3.noty_type__error { background-color: rgb(242, 222, 222); color: rgb(169, 68, 66); border-color: rgb(235, 204, 209); }

.noty_theme__bootstrap-v3.noty_type__info, .noty_theme__bootstrap-v3.noty_type__information { background-color: rgb(217, 237, 247); color: rgb(49, 112, 143); border-color: rgb(188, 232, 241); }

.noty_theme__bootstrap-v3.noty_type__success { background-color: rgb(223, 240, 216); color: rgb(60, 118, 61); border-color: rgb(214, 233, 198); }

.noty_theme__bootstrap-v4.noty_bar { margin: 4px 0px; overflow: hidden; position: relative; border: 1px solid transparent; border-radius: 0.25rem; }

.noty_theme__bootstrap-v4.noty_bar .noty_body { padding: 0.75rem 1.25rem; }

.noty_theme__bootstrap-v4.noty_bar .noty_buttons { padding: 10px; }

.noty_theme__bootstrap-v4.noty_bar .noty_close_button { font-size: 1.5rem; font-weight: 700; line-height: 1; color: rgb(0, 0, 0); text-shadow: rgb(255, 255, 255) 0px 1px 0px; opacity: 0.5; background: transparent; }

.noty_theme__bootstrap-v4.noty_bar .noty_close_button:hover { background: transparent; text-decoration: none; cursor: pointer; opacity: 0.75; }

.noty_theme__bootstrap-v4.noty_type__alert, .noty_theme__bootstrap-v4.noty_type__notification { background-color: rgb(255, 255, 255); color: inherit; }

.noty_theme__bootstrap-v4.noty_type__warning { background-color: rgb(252, 248, 227); color: rgb(138, 109, 59); border-color: rgb(250, 235, 204); }

.noty_theme__bootstrap-v4.noty_type__error { background-color: rgb(242, 222, 222); color: rgb(169, 68, 66); border-color: rgb(235, 204, 209); }

.noty_theme__bootstrap-v4.noty_type__info, .noty_theme__bootstrap-v4.noty_type__information { background-color: rgb(217, 237, 247); color: rgb(49, 112, 143); border-color: rgb(188, 232, 241); }

.noty_theme__bootstrap-v4.noty_type__success { background-color: rgb(223, 240, 216); color: rgb(60, 118, 61); border-color: rgb(214, 233, 198); }

.noty_theme__semanticui.noty_bar { margin: 4px 0px; overflow: hidden; position: relative; border: 1px solid transparent; font-size: 1em; border-radius: 0.285714rem; box-shadow: rgba(34, 36, 38, 0.22) 0px 0px 0px 1px inset, transparent 0px 0px 0px 0px; }

.noty_theme__semanticui.noty_bar .noty_body { padding: 1em 1.5em; line-height: 1.4285em; }

.noty_theme__semanticui.noty_bar .noty_buttons { padding: 10px; }

.noty_theme__semanticui.noty_type__alert, .noty_theme__semanticui.noty_type__notification { background-color: rgb(248, 248, 249); color: rgba(0, 0, 0, 0.87); }

.noty_theme__semanticui.noty_type__warning { background-color: rgb(255, 250, 243); color: rgb(87, 58, 8); box-shadow: rgb(201, 186, 155) 0px 0px 0px 1px inset, transparent 0px 0px 0px 0px; }

.noty_theme__semanticui.noty_type__error { background-color: rgb(255, 246, 246); color: rgb(159, 58, 56); box-shadow: rgb(224, 180, 180) 0px 0px 0px 1px inset, transparent 0px 0px 0px 0px; }

.noty_theme__semanticui.noty_type__info, .noty_theme__semanticui.noty_type__information { background-color: rgb(248, 255, 255); color: rgb(39, 111, 134); box-shadow: rgb(169, 213, 222) 0px 0px 0px 1px inset, transparent 0px 0px 0px 0px; }

.noty_theme__semanticui.noty_type__success { background-color: rgb(252, 255, 245); color: rgb(44, 102, 45); box-shadow: rgb(163, 194, 147) 0px 0px 0px 1px inset, transparent 0px 0px 0px 0px; }

.noty_theme__nest.noty_bar { margin: 0px 0px 15px; overflow: hidden; border-radius: 2px; position: relative; box-shadow: rgba(0, 0, 0, 0.098) 5px 4px 10px 0px; }

.noty_theme__nest.noty_bar .noty_body { padding: 10px; font-size: 14px; text-shadow: rgba(0, 0, 0, 0.1) 1px 1px 1px; }

.noty_theme__nest.noty_bar .noty_buttons { padding: 10px; }

.noty_layout .noty_theme__nest.noty_bar { z-index: 5; }

.noty_layout .noty_theme__nest.noty_bar:nth-child(2) { position: absolute; top: 0px; margin-top: 4px; margin-right: -4px; margin-left: 4px; z-index: 4; width: 100%; }

.noty_layout .noty_theme__nest.noty_bar:nth-child(3) { position: absolute; top: 0px; margin-top: 8px; margin-right: -8px; margin-left: 8px; z-index: 3; width: 100%; }

.noty_layout .noty_theme__nest.noty_bar:nth-child(4) { position: absolute; top: 0px; margin-top: 12px; margin-right: -12px; margin-left: 12px; z-index: 2; width: 100%; }

.noty_layout .noty_theme__nest.noty_bar:nth-child(5) { position: absolute; top: 0px; margin-top: 16px; margin-right: -16px; margin-left: 16px; z-index: 1; width: 100%; }

.noty_layout .noty_theme__nest.noty_bar:nth-child(n+6) { position: absolute; top: 0px; margin-top: 20px; margin-right: -20px; margin-left: 20px; z-index: -1; width: 100%; }

#noty_layout__bottomLeft .noty_theme__nest.noty_bar:nth-child(2), #noty_layout__topLeft .noty_theme__nest.noty_bar:nth-child(2) { margin-top: 4px; margin-left: -4px; margin-right: 4px; }

#noty_layout__bottomLeft .noty_theme__nest.noty_bar:nth-child(3), #noty_layout__topLeft .noty_theme__nest.noty_bar:nth-child(3) { margin-top: 8px; margin-left: -8px; margin-right: 8px; }

#noty_layout__bottomLeft .noty_theme__nest.noty_bar:nth-child(4), #noty_layout__topLeft .noty_theme__nest.noty_bar:nth-child(4) { margin-top: 12px; margin-left: -12px; margin-right: 12px; }

#noty_layout__bottomLeft .noty_theme__nest.noty_bar:nth-child(5), #noty_layout__topLeft .noty_theme__nest.noty_bar:nth-child(5) { margin-top: 16px; margin-left: -16px; margin-right: 16px; }

#noty_layout__bottomLeft .noty_theme__nest.noty_bar:nth-child(n+6), #noty_layout__topLeft .noty_theme__nest.noty_bar:nth-child(n+6) { margin-top: 20px; margin-left: -20px; margin-right: 20px; }

.noty_theme__nest.noty_type__alert, .noty_theme__nest.noty_type__notification { background-color: rgb(7, 59, 76); color: rgb(255, 255, 255); }

.noty_theme__nest.noty_type__alert .noty_progressbar, .noty_theme__nest.noty_type__notification .noty_progressbar { background-color: rgb(255, 255, 255); }

.noty_theme__nest.noty_type__warning { background-color: rgb(255, 209, 102); color: rgb(255, 255, 255); }

.noty_theme__nest.noty_type__error { background-color: rgb(239, 71, 111); color: rgb(255, 255, 255); }

.noty_theme__nest.noty_type__error .noty_progressbar { opacity: 0.4; }

.noty_theme__nest.noty_type__info, .noty_theme__nest.noty_type__information { background-color: rgb(17, 138, 178); color: rgb(255, 255, 255); }

.noty_theme__nest.noty_type__info .noty_progressbar, .noty_theme__nest.noty_type__information .noty_progressbar { opacity: 0.6; }

.noty_theme__nest.noty_type__success { background-color: rgb(6, 214, 160); color: rgb(255, 255, 255); }

</style>
    
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">
    <meta name="color-scheme" content="light only">
    <meta name="format-detection" content="telephone=no">
    <meta name="google" content="notranslate">
        
    <?php if(isset($mempelai)) { foreach ($mempelai->getResult() as $row){ ?>
    <title><?php echo $row->nama_panggilan_pria." & ".$row->nama_panggilan_wanita; ?> </title>
    <meta property="og:title" content="<?php echo $row->nama_panggilan_pria." & ".$row->nama_panggilan_wanita; ?>">
    <meta property="og:description" content="<?php echo 'Hello ' . \esc($invite) . '! Kamu Di Undang..'; ?>">
    <?php } } else { ?>
    <title><?php if($posisi_mempelai == 0) echo $nama_panggilan_pria." & ".$nama_panggilan_wanita; else echo $nama_panggilan_wanita." & ".$nama_panggilan_pria;?></title>
    <meta property="og:title" content="<?php if($posisi_mempelai == 0) echo $nama_panggilan_pria." & ".$nama_panggilan_wanita; else echo $nama_panggilan_wanita." & ".$nama_panggilan_pria;?>">
    <meta property="og:description" content="<?php echo 'Hello ' . \esc($invite) . '! Kamu Di Undang..'; ?>">
    <?php } ?>
  
    <meta name="title" content="Wedding  - Batak Merah">
    <meta name="description" content="Tema adat batak warna merah maroon - Undangan Online: Undangan digital modern untuk pernikahan dan acara spesial lainnya. ">
    <meta itemprop="image" content="http://app.kitaberdua.com/themes/batak-merah/batak-merah.webp">
        <link rel="icon" type="image/x-icon" href="https://assets.satumomen.com/images/media/6108-media-1682180901.png">
        <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website">
    <meta property="og:url" content="http://app.kitaberdua.com/preview/batak-merah">
    <meta property="og:title" content="Wedding  - Batak Merah">
    <meta property="og:description" content="Tema adat batak warna merah maroon - Undangan Online: Undangan digital modern untuk pernikahan dan acara spesial lainnya. ">
    <meta property="og:image" content="http://app.kitaberdua.com/themes/batak-merah/batak-merah.webp">

    <link rel="preconnect" href="https://fonts.googleapis.com/">
    <link rel="preconnect" href="https://fonts.gstatic.com/" crossorigin="">

        
    
    
    
    
                                                
    <!-- css -->
    <link rel="stylesheet" href="https://app.kitaberdua.com/plugins/animate.css@4.1.1/animate.min.css">
    <link rel="stylesheet" type="text/css" href="https://unpkg.com/@phosphor-icons/web@2.0.3/src/fill/style.css">

    <link rel="preload" as="style" href="https://assets.satumomen.com/build/assets/bootstrap-vCaDZZbr.css"><style type="text/css">
@charset "utf-8";

body { background-color: var(--inv-bg); }

.canvas { position: absolute; width: 414px; height: 736px; overflow: hidden; border-radius: 1rem; }

#satuMomen { position: absolute; color: var(--inv-base); font-family: var(--font-base); width: 414px; height: 736px; overflow: hidden; }

.not-open .container-mobile, .no-menu .container-mobile { height: calc(100% + 0px); }

.not-open .satumomen_menu, .no-menu .satumomen_menu { bottom: -100px; }

.not-open .floating-action, .no-menu .floating-action { bottom: 30px; }

.not-open .frame, .no-menu .frame { bottom: 0px; }

.container-mobile { background-color: var(--inv-bg); background-position: center center; background-repeat: no-repeat; background-size: 100% 100%; overflow: hidden; width: 100%; height: calc(100% - 80px); padding: 30px; transition: 0.5s ease-in-out; }

.satumomen_track { height: 100%; width: 100%; }

.satumomen_track .satumomen_list { padding: 0px; margin: 0px; list-style: none; height: 100%; width: 100%; }

.satumomen_track .satumomen_slide, .satumomen_track .satumomen_cover { height: 100%; width: 100%; }

.satumomen_menu { position: absolute; right: 0px; bottom: 0px; left: 0px; width: 100%; height: 80px; background-color: var(--menu-bg); overflow: hidden; box-shadow: rgba(0, 0, 0, 0.06) 0px -1px 6px 0px; transition: 0.2s ease-in-out; }

.satumomen_menu .satumomen_menu_list { padding: 0px; margin: 0px; list-style: none; height: 100%; min-width: 100%; display: flex; align-items: center; transition: 0.5s ease-in-out; }

.satumomen_menu .satumomen_menu_item { width: 100%; height: 100%; flex: 0 0 auto; display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; color: var(--menu-inactive); position: relative; transition: 0.1s ease-in-out; }

.satumomen_menu .satumomen_menu_item .icon { font-size: 1.6rem; }

.satumomen_menu .satumomen_menu_item svg, .satumomen_menu .satumomen_menu_item span, .satumomen_menu .satumomen_menu_item i { z-index: 2; }

.satumomen_menu .satumomen_menu_item span { font-size: 12px; }

.satumomen_menu .satumomen_menu_item::after { content: ""; background-color: var(--menu-active); position: absolute; width: 0%; height: 0%; border-radius: 0.8rem; transition: 0.1s ease-in-out; }

.satumomen_menu .satumomen_menu_item.active { color: var(--btn-color); }

.satumomen_menu .satumomen_menu_item.active::after { content: ""; background-color: var(--menu-active); position: absolute; width: calc(100% - 0.5rem); height: calc(100% - 0.5rem); }

.font-accent { font-family: var(--font-accent); }

.font-latin { font-family: var(--font-latin); font-size: 200%; }

.color-accent { color: var(--inv-accent); }

.floating-action { max-width: 500px; margin: auto; position: absolute; right: 20px; bottom: 120px; gap: 12px; }

.btn-float { height: 40px; width: 40px; display: flex; justify-content: center; align-items: center; padding: 0px; border-radius: 10rem; background-color: var(--inv-accent); border-color: var(--inv-accent); color: var(--btn-color); opacity: 0.7; }

#btnMusic .play, #btnAutoplay .play { display: block; }

#btnMusic .pause, #btnAutoplay .pause, #btnMusic.playing .play, #btnAutoplay.playing .play { display: none; }

#btnMusic.playing .pause, #btnAutoplay.playing .pause { display: block; }

.sc-music { height: 0px; overflow: hidden; }

.sc-music div { display: none; }

.btn-primary { background-color: var(--inv-accent); border-color: var(--inv-accent); color: var(--btn-color); border-radius: 0.6rem; }

.btn-primary:hover, .btn-primary:active, .btn-primary.active { background-color: var(--inv-accent) !important; border-color: var(--inv-accent) !important; color: var(--btn-color) !important; box-shadow: var(--inv-accent) !important; }

.rounded-pill { border-radius: 50rem; }

.comment { width: 100%; display: flex; flex-direction: column; gap: 12px; }

.comment .comment-item { flex: 0 0 auto; width: 100%; padding: 0.5rem; border-radius: 0.5rem; border: 1px solid rgb(243, 243, 243); background-color: rgb(255, 255, 255); color: rgb(19, 19, 19); }

.lightbox { cursor: pointer; }

.lightbox-wrapper { max-width: 100%; margin: auto; }

.lightbox-wrapper.show { position: fixed; inset: 0px; display: flex; flex-direction: column; align-items: center; justify-content: center; background-color: rgba(0, 0, 0, 0.8); }

.lightbox-inner, .lightbox-list { height: 100%; width: 100%; }

.lightbox-inner img { height: 100%; width: 100%; object-fit: contain; }

.btn-lightbox { text-decoration: none; width: 48px; height: 48px; border-radius: 100%; background-color: rgba(255, 0, 0, 0.282); color: rgb(255, 255, 255); position: fixed; bottom: 60px; justify-content: center; align-items: center; display: none; }

.btn-lightbox:hover { background-color: rgba(255, 0, 0, 0.533); color: rgb(255, 255, 255); }

.lightbox-navigation { position: fixed; top: calc(50% - 60px); width: 100%; max-width: 500px; justify-content: space-between; padding: 30px; display: none; }

.lightbox-arrow { text-decoration: none; width: 48px; height: 48px; border-radius: 100%; background-color: rgba(255, 255, 255, 0.282); color: rgb(0, 0, 0); display: flex; justify-content: center; align-items: center; }

.lightbox-arrow:hover { background-color: rgba(255, 255, 255, 0.525); color: rgb(0, 0, 0); }

.show .lightbox-navigation, .show .btn-lightbox { display: inherit; }

.modal-dialog { max-width: 500px; margin: auto; padding: 0.5rem; height: 100%; }

.modal-content { overflow: auto; }

.btn-close { text-decoration: none; width: 48px; height: 48px; border-radius: 100%; background-color: rgba(255, 0, 0, 0.282); color: rgb(255, 255, 255); position: fixed; bottom: 20px; left: calc(50% - 24px); display: flex; justify-content: center; align-items: center; }

.rsvp-placeholder { position: relative; max-height: calc(-150px + 100vh); overflow: auto; font-family: sans-serif; }

.rsvp-placeholder .rsvp-form { padding: 0px 20px !important; }

.rsvp-placeholder .rsvp-form .mb-4, .no-menu .countdown { display: none; }

.countdown { display: flex; gap: 8px; }

.countdown-item { width: 100%; background-color: var(--inv-accent); color: var(--btn-color); padding: 4px; border-radius: 0.4rem; }

.countdown-item .number { font-size: 1.35rem; line-height: 1.2; font-weight: 700; }

.frame { position: absolute; inset: 0px 0px 80px; }

.frame-tl { width: 50%; position: absolute; top: 0px; left: 0px; }

.frame-tr { width: 50%; position: absolute; top: 0px; right: 0px; }

.frame-bl { width: 50%; position: absolute; bottom: 0px; left: 0px; }

.frame-br { width: 50%; position: absolute; bottom: 0px; right: 0px; }

.embed-video iframe { position: absolute; inset: 0px; height: 100%; width: 100%; }

#waterMark p a { color: var(--inv-base); }

#waterMark .list-icon a { color: var(--inv-accent); }

.free-trial-badge { width: 130px; height: 130px; overflow: hidden; position: absolute; top: 0px; right: 0px; z-index: 10; }

.free-trial-badge span { position: absolute; display: block; width: 171px; line-height: 37px; text-align: center; top: 26px; right: -40px; transform: rotate(45deg); backdrop-filter: blur(4px); background-color: rgb(255, 187, 51); }

.free-trial-badge span div { color: rgb(51, 51, 51); font-size: 14px; font-weight: 700; letter-spacing: 0px; font-family: sans-serif; }

.btn-countdown, .btn-maps, .btn-video { display: none; }

.loader-wrapper, .loader-overlay { width: 100%; height: 100%; position: fixed; inset: 0px; background-color: var(--inv-bg); display: flex; justify-content: center; align-items: center; text-align: center; color: var(--inv-base); z-index: 99999; }

.loader { display: inline-block; width: 30px; height: 30px; position: relative; border: 4px solid var(--inv-accent); animation: 2s ease 0s infinite normal none running loader; }

.loader-inner { vertical-align: top; display: inline-block; width: 100%; background-color: var(--inv-accent); animation: 2s ease-in 0s infinite normal none running loader-inner; }

@keyframes loader { 
  0% { transform: rotate(0deg); }
  25% { transform: rotate(180deg); }
  50% { transform: rotate(180deg); }
  75% { transform: rotate(360deg); }
  100% { transform: rotate(360deg); }
}

@keyframes loader-inner { 
  0% { height: 0%; }
  25% { height: 0%; }
  50% { height: 100%; }
  75% { height: 100%; }
  100% { height: 0%; }
}

#notSupport { margin: auto; position: fixed; height: 100%; inset: 0px; display: none; }

</style><link rel="stylesheet" href="https://assets.satumomen.com/build/assets/bootstrap-vCaDZZbr.css"><style type="text/css">
@charset "utf-8";

body { background-color: var(--inv-bg); }

.canvas { position: absolute; width: 414px; height: 736px; overflow: hidden; border-radius: 1rem; }

#satuMomen { position: absolute; color: var(--inv-base); font-family: var(--font-base); width: 414px; height: 736px; overflow: hidden; }

.not-open .container-mobile, .no-menu .container-mobile { height: calc(100% + 0px); }

.not-open .satumomen_menu, .no-menu .satumomen_menu { bottom: -100px; }

.not-open .floating-action, .no-menu .floating-action { bottom: 30px; }

.not-open .frame, .no-menu .frame { bottom: 0px; }

.container-mobile { background-color: var(--inv-bg); background-position: center center; background-repeat: no-repeat; background-size: 100% 100%; overflow: hidden; width: 100%; height: calc(100% - 80px); padding: 30px; transition: 0.5s ease-in-out; }

.satumomen_track { height: 100%; width: 100%; }

.satumomen_track .satumomen_list { padding: 0px; margin: 0px; list-style: none; height: 100%; width: 100%; }

.satumomen_track .satumomen_slide, .satumomen_track .satumomen_cover { height: 100%; width: 100%; }

.satumomen_menu { position: absolute; right: 0px; bottom: 0px; left: 0px; width: 100%; height: 80px; background-color: var(--menu-bg); overflow: hidden; box-shadow: rgba(0, 0, 0, 0.06) 0px -1px 6px 0px; transition: 0.2s ease-in-out; }

.satumomen_menu .satumomen_menu_list { padding: 0px; margin: 0px; list-style: none; height: 100%; min-width: 100%; display: flex; align-items: center; transition: 0.5s ease-in-out; }

.satumomen_menu .satumomen_menu_item { width: 100%; height: 100%; flex: 0 0 auto; display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; color: var(--menu-inactive); position: relative; transition: 0.1s ease-in-out; }

.satumomen_menu .satumomen_menu_item .icon { font-size: 1.6rem; }

.satumomen_menu .satumomen_menu_item svg, .satumomen_menu .satumomen_menu_item span, .satumomen_menu .satumomen_menu_item i { z-index: 2; }

.satumomen_menu .satumomen_menu_item span { font-size: 12px; }

.satumomen_menu .satumomen_menu_item::after { content: ""; background-color: var(--menu-active); position: absolute; width: 0%; height: 0%; border-radius: 0.8rem; transition: 0.1s ease-in-out; }

.satumomen_menu .satumomen_menu_item.active { color: var(--btn-color); }

.satumomen_menu .satumomen_menu_item.active::after { content: ""; background-color: var(--menu-active); position: absolute; width: calc(100% - 0.5rem); height: calc(100% - 0.5rem); }

.font-accent { font-family: var(--font-accent); }

.font-latin { font-family: var(--font-latin); font-size: 200%; }

.color-accent { color: var(--inv-accent); }

.floating-action { max-width: 500px; margin: auto; position: absolute; right: 20px; bottom: 120px; gap: 12px; }

.btn-float { height: 40px; width: 40px; display: flex; justify-content: center; align-items: center; padding: 0px; border-radius: 10rem; background-color: var(--inv-accent); border-color: var(--inv-accent); color: var(--btn-color); opacity: 0.7; }

#btnMusic .play, #btnAutoplay .play { display: block; }

#btnMusic .pause, #btnAutoplay .pause, #btnMusic.playing .play, #btnAutoplay.playing .play { display: none; }

#btnMusic.playing .pause, #btnAutoplay.playing .pause { display: block; }

.sc-music { height: 0px; overflow: hidden; }

.sc-music div { display: none; }

.btn-primary { background-color: var(--inv-accent); border-color: var(--inv-accent); color: var(--btn-color); border-radius: 0.6rem; }

.btn-primary:hover, .btn-primary:active, .btn-primary.active { background-color: var(--inv-accent) !important; border-color: var(--inv-accent) !important; color: var(--btn-color) !important; box-shadow: var(--inv-accent) !important; }

.rounded-pill { border-radius: 50rem; }

.comment { width: 100%; display: flex; flex-direction: column; gap: 12px; }

.comment .comment-item { flex: 0 0 auto; width: 100%; padding: 0.5rem; border-radius: 0.5rem; border: 1px solid rgb(243, 243, 243); background-color: rgb(255, 255, 255); color: rgb(19, 19, 19); }

.lightbox { cursor: pointer; }

.lightbox-wrapper { max-width: 100%; margin: auto; }

.lightbox-wrapper.show { position: fixed; inset: 0px; display: flex; flex-direction: column; align-items: center; justify-content: center; background-color: rgba(0, 0, 0, 0.8); }

.lightbox-inner, .lightbox-list { height: 100%; width: 100%; }

.lightbox-inner img { height: 100%; width: 100%; object-fit: contain; }

.btn-lightbox { text-decoration: none; width: 48px; height: 48px; border-radius: 100%; background-color: rgba(255, 0, 0, 0.282); color: rgb(255, 255, 255); position: fixed; bottom: 60px; justify-content: center; align-items: center; display: none; }

.btn-lightbox:hover { background-color: rgba(255, 0, 0, 0.533); color: rgb(255, 255, 255); }

.lightbox-navigation { position: fixed; top: calc(50% - 60px); width: 100%; max-width: 500px; justify-content: space-between; padding: 30px; display: none; }

.lightbox-arrow { text-decoration: none; width: 48px; height: 48px; border-radius: 100%; background-color: rgba(255, 255, 255, 0.282); color: rgb(0, 0, 0); display: flex; justify-content: center; align-items: center; }

.lightbox-arrow:hover { background-color: rgba(255, 255, 255, 0.525); color: rgb(0, 0, 0); }

.show .lightbox-navigation, .show .btn-lightbox { display: inherit; }

.modal-dialog { max-width: 500px; margin: auto; padding: 0.5rem; height: 100%; }

.modal-content { overflow: auto; }

.btn-close { text-decoration: none; width: 48px; height: 48px; border-radius: 100%; background-color: rgba(255, 0, 0, 0.282); color: rgb(255, 255, 255); position: fixed; bottom: 20px; left: calc(50% - 24px); display: flex; justify-content: center; align-items: center; }

.rsvp-placeholder { position: relative; max-height: calc(-150px + 100vh); overflow: auto; font-family: sans-serif; }

.rsvp-placeholder .rsvp-form { padding: 0px 20px !important; }

.rsvp-placeholder .rsvp-form .mb-4, .no-menu .countdown { display: none; }

.countdown { display: flex; gap: 8px; }

.countdown-item { width: 100%; background-color: var(--inv-accent); color: var(--btn-color); padding: 4px; border-radius: 0.4rem; }

.countdown-item .number { font-size: 1.35rem; line-height: 1.2; font-weight: 700; }

.frame { position: absolute; inset: 0px 0px 80px; }

.frame-tl { width: 50%; position: absolute; top: 0px; left: 0px; }

.frame-tr { width: 50%; position: absolute; top: 0px; right: 0px; }

.frame-bl { width: 50%; position: absolute; bottom: 0px; left: 0px; }

.frame-br { width: 50%; position: absolute; bottom: 0px; right: 0px; }

.embed-video iframe { position: absolute; inset: 0px; height: 100%; width: 100%; }

#waterMark p a { color: var(--inv-base); }

#waterMark .list-icon a { color: var(--inv-accent); }

.free-trial-badge { width: 130px; height: 130px; overflow: hidden; position: absolute; top: 0px; right: 0px; z-index: 10; }

.free-trial-badge span { position: absolute; display: block; width: 171px; line-height: 37px; text-align: center; top: 26px; right: -40px; transform: rotate(45deg); backdrop-filter: blur(4px); background-color: rgb(255, 187, 51); }

.free-trial-badge span div { color: rgb(51, 51, 51); font-size: 14px; font-weight: 700; letter-spacing: 0px; font-family: sans-serif; }

.btn-countdown, .btn-maps, .btn-video { display: none; }

.loader-wrapper, .loader-overlay { width: 100%; height: 100%; position: fixed; inset: 0px; background-color: var(--inv-bg); display: flex; justify-content: center; align-items: center; text-align: center; color: var(--inv-base); z-index: 99999; }

.loader { display: inline-block; width: 30px; height: 30px; position: relative; border: 4px solid var(--inv-accent); animation: 2s ease 0s infinite normal none running loader; }

.loader-inner { vertical-align: top; display: inline-block; width: 100%; background-color: var(--inv-accent); animation: 2s ease-in 0s infinite normal none running loader-inner; }

@keyframes loader { 
  0% { transform: rotate(0deg); }
  25% { transform: rotate(180deg); }
  50% { transform: rotate(180deg); }
  75% { transform: rotate(360deg); }
  100% { transform: rotate(360deg); }
}

@keyframes loader-inner { 
  0% { height: 0%; }
  25% { height: 0%; }
  50% { height: 100%; }
  75% { height: 100%; }
  100% { height: 0%; }
}

#notSupport { margin: auto; position: fixed; height: 100%; inset: 0px; display: none; }

</style>
        
    
        
    
</head>

<body>
        <main id="app"><div id="modalOverlay" class="modal-backdrop fade" style="display: none;"></div> <div id="loader" class="loader-wrapper" style="display: none;"><span class="loader"><span class="loader-inner"></span></span></div> <audio id="music" loop="loop" preload="auto">
      <source src="<?= !empty($musiknya) ? $musiknya : 'https://assets.satumomen.com/musics/dorman-manik-and-rany-simbolon-si-rokkap-ni-tondi.mp3' ?>">
    </audio> <div id="workspace-container" class="position-fixed h-100 w-100" style="overflow: hidden;"><div id="panZoom" class="position-fixed h-100 w-100" style="inset: 0px; transform-origin: 50% 50%; transform: scale(1.07473) translate(0px, 0px);"><div class="h-100 w-100 d-flex align-items-center justify-content-center"><div class="canvas not-open" style="height: 736px;"><div id="satuMomen" data-guest="<?= \esc($invite); ?>" data-group="VIP" style="height: 736px; display: block;"><div class="satumomen_track"><ul class="satumomen_list"><li class="satumomen_slide satumomen_cover" style=""><div class="container-mobile cover" style="background-image: url(&quot;http://app.kitaberdua.com/themes/batak-merah/bg.webp&quot;);"><div class="frame"><img src="https://app.kitaberdua.com/themes/batak-merah/tl-1.webp" alt="frame" class="frame-tl h-100 animate__animated animate__fadeInLeft animate__slow" style="width: auto;"> <img src="https://app.kitaberdua.com/themes/batak-merah/tr-1.webp" alt="frame" class="frame-tr h-100 animate__animated animate__fadeInRight animate__slow" style="width: auto;"> <img src="https://app.kitaberdua.com/themes/batak-merah/tl-2.webp" alt="frame" class="frame-tl animate__animated animate__fadeInTopLeft animate__slow"> <img src="https://app.kitaberdua.com/themes/batak-merah/tr-2.webp" alt="frame" class="frame-tr animate__animated animate__fadeInTopRight animate__slow"> <img src="https://app.kitaberdua.com/themes/batak-merah/bl-1_2.webp" alt="frame" class="frame-bl animate__animated animate__fadeInBottomLeft animate__slow"> <img src="https://app.kitaberdua.com/themes/batak-merah/bl-1.webp" alt="frame" class="frame-br animate__animated animate__fadeInBottomRight animate__slow"> <img src="https://app.kitaberdua.com/themes/batak-merah/bm.webp" alt="frame" class="frame-bl w-100 animate__animated animate__fadeInUp animate__slower"></div> <div class="d-flex justify-content-center align-items-center flex-column" style="height: 100%;"><div class="mt-5 pt-3 mb-auto" style="width: 100%;"><div class="text-center animate__animated animate__fadeInDown animate__slower"><div class="editable" style="color: rgb(255, 255, 255); font-size: 14.4px;">The Wedding of</div><div class="editable color-accent mb-3 font-latin" style="font-size: 40px; color: rgb(255, 255, 255);">Andreas &amp; Vitalia</div></div></div><div class="mb-5 pb-3" style="width: 100%;"><div class="text-center"><div class="mb-4" style="background-color: rgba(0, 0, 0, 0.14); border-radius: 0.5rem; padding: 10px; max-width: 240px; margin: auto; backdrop-filter: blur(10px);"><div class="editable mb-1 animate__animated animate__fadeInUp animate__slower" style="color: rgb(255, 255, 255); font-size: 14.4px;">Kepada Yth;<br>Bapak/Ibu/Saudara/i</div> 
    <div id="guestNameSlot" class="editable h5 mb-4 font-weight-bold animate__animated animate__fadeInUp animate__slower" style="font-size: 18px; color: inherit;">
      <?= \esc($invite); ?>
    </div>
  </div> <button class="btn-open-invitation btn btn-primary rounded-pill animate__animated animate__fadeInUp animate__slow" style="font-size: 14.4px;">Buka Undangan</button></div></div></div></div></li> <li class="satumomen_slide" style="display: none;"><div class="container-mobile" style="background-image: url(&quot;http://app.kitaberdua.com/themes/batak-merah/bg.webp&quot;);"><div class="frame"><img src="https://app.kitaberdua.com/themes/batak-merah/tl-1.webp" alt="frame" class="frame-tl h-100 animate__animated animate__fadeInLeft animate__slow" style="width: auto;"> <img src="https://app.kitaberdua.com/themes/batak-merah/tr-1.webp" alt="frame" class="frame-tr h-100 animate__animated animate__fadeInRight animate__slow" style="width: auto;"> <img src="https://app.kitaberdua.com/themes/batak-merah/tl-2.webp" alt="frame" class="frame-tl animate__animated animate__fadeInTopLeft animate__slow"> <img src="https://app.kitaberdua.com/themes/batak-merah/tr-2.webp" alt="frame" class="frame-tr animate__animated animate__fadeInTopRight animate__slow"> <img src="https://app.kitaberdua.com/themes/batak-merah/bl-1_2.webp" alt="frame" class="frame-bl animate__animated animate__fadeInBottomLeft animate__slow"> <img src="https://app.kitaberdua.com/themes/batak-merah/bl-1.webp" alt="frame" class="frame-br animate__animated animate__fadeInBottomRight animate__slow"> <img src="https://app.kitaberdua.com/themes/batak-merah/bm.webp" alt="frame" class="frame-bl w-100 animate__animated animate__fadeInUp animate__slower"></div> <div class="d-flex justify-content-center align-items-center" style="height: 100%;"><div style="width: 100%; background-color: rgb(255, 236, 197); border-radius: 1rem; padding: 30px 15px;"><div class="image-editable mb-4 mx-auto animate__animated animate__fadeInDown animate__slower" style="width: 80%; overflow: hidden; margin-top: auto; border: 3px solid var(--inv-border); border-radius: 250px 250px 0px 0px; padding: 10px; aspect-ratio: 6 / 8;"><img src="https://assets.satumomen.com/images/galleries/57164-gallery-1686266235.jpg" alt="57164-gallery-1686266235.jpg" style="width: 100%; height: 100%; object-fit: cover; border-radius: 250px 250px 0px 0px;"></div> <div class="text-center animate__animated animate__fadeInUp animate__slower"><div class="editable quotes mb-3" style="font-size: 14.4px; color: rgb(56, 19, 19);">Demikianlah mereka bukan lagi dua, melainkan satu. Karena itu, apa yang telah dipersatukan Allah, tidak boleh diceraikan manusia.</div> <div class="editable font-italic" style="font-size: 14.4px; color: rgb(0, 0, 0);">Mathius 19 : 6</div></div></div></div></div></li> <li class="satumomen_slide" style="display: none;"><div class="container-mobile" style="background-image: url(&quot;http://app.kitaberdua.com/themes/batak-merah/bg.webp&quot;);"><div class="frame"><img src="https://app.kitaberdua.com/themes/batak-merah/tl-1.webp" alt="frame" class="frame-tl h-100 animate__animated animate__fadeInLeft animate__slow" style="width: auto;"> <img src="https://app.kitaberdua.com/themes/batak-merah/tr-1.webp" alt="frame" class="frame-tr h-100 animate__animated animate__fadeInRight animate__slow" style="width: auto;"> <img src="https://app.kitaberdua.com/themes/batak-merah/tl-2.webp" alt="frame" class="frame-tl animate__animated animate__fadeInTopLeft animate__slow"> <img src="https://app.kitaberdua.com/themes/batak-merah/tr-2.webp" alt="frame" class="frame-tr animate__animated animate__fadeInTopRight animate__slow"> <img src="https://app.kitaberdua.com/themes/batak-merah/bl-1_2.webp" alt="frame" class="frame-bl animate__animated animate__fadeInBottomLeft animate__slow"> <img src="https://app.kitaberdua.com/themes/batak-merah/bl-1.webp" alt="frame" class="frame-br animate__animated animate__fadeInBottomRight animate__slow"> <img src="https://app.kitaberdua.com/themes/batak-merah/bm.webp" alt="frame" class="frame-bl w-100 animate__animated animate__fadeInUp animate__slower"></div> <div class="d-flex justify-content-center flex-column align-items-center" style="height: 100%;"><div class="image-editable mx-auto mb-4 animate__animated animate__fadeInDown animate__slower" style="height: 225px; width: 164px; overflow: hidden; border-radius: 2rem 2rem 0px 0px; position: relative;"><div style="position: absolute; bottom: 0px; left: 0px; right: 0px; height: 100px; background: linear-gradient(1deg, var(--inv-bg), #0000);"></div> <img src="https://assets.satumomen.com/images/galleries/57164-gallery-1686267511.jpg" alt="57164-gallery-1686267511.jpg" style="width: 100%; height: 100%; object-fit: cover;"></div><div style="width: 100%;"><div class="text-center animate__animated animate__fadeInUp animate__slower"><div class="editable color-accent font-latin" style="font-size: 30px;">Andreas Saut Silitonga</div><div class="editable quotes" style="font-size: 14.4px;">Putra dari Bapak Demak Parsaoran (Alm)<br>&amp; Ibu Ratnawati Hutauruk</div></div> <div class="text-center"><a href="https://instagram.com/satumomen_com" target="_blank" rel="noreferrer noopener" class="link btn btn-primary rounded-pill my-3 animate__animated animate__fadeInUp animate__slower">@instagram</a></div></div></div></div></li> <li class="satumomen_slide" style="display: none;"><div class="container-mobile" style="background-image: url(&quot;http://app.kitaberdua.com/themes/batak-merah/bg.webp&quot;);"><div class="frame"><img src="https://app.kitaberdua.com/themes/batak-merah/tl-1.webp" alt="frame" class="frame-tl h-100 animate__animated animate__fadeInLeft animate__slow" style="width: auto;"> <img src="https://app.kitaberdua.com/themes/batak-merah/tr-1.webp" alt="frame" class="frame-tr h-100 animate__animated animate__fadeInRight animate__slow" style="width: auto;"> <img src="https://app.kitaberdua.com/themes/batak-merah/tl-2.webp" alt="frame" class="frame-tl animate__animated animate__fadeInTopLeft animate__slow"> <img src="https://app.kitaberdua.com/themes/batak-merah/tr-2.webp" alt="frame" class="frame-tr animate__animated animate__fadeInTopRight animate__slow"> <img src="https://app.kitaberdua.com/themes/batak-merah/bl-1_2.webp" alt="frame" class="frame-bl animate__animated animate__fadeInBottomLeft animate__slow"> <img src="https://app.kitaberdua.com/themes/batak-merah/bl-1.webp" alt="frame" class="frame-br animate__animated animate__fadeInBottomRight animate__slow"> <img src="https://app.kitaberdua.com/themes/batak-merah/bm.webp" alt="frame" class="frame-bl w-100 animate__animated animate__fadeInUp animate__slower"></div> <div class="d-flex justify-content-center flex-column align-items-center" style="height: 100%;"><div class="image-editable mx-auto mb-4 animate__animated animate__fadeInDown animate__slower" style="height: 225px; width: 164px; overflow: hidden; border-radius: 2rem 2rem 0px 0px; position: relative;"><div style="position: absolute; bottom: 0px; left: 0px; right: 0px; height: 100px; background: linear-gradient(1deg, var(--inv-bg), #0000);"></div> <img src="https://assets.satumomen.com/images/galleries/57164-gallery-1686267509.jpg" alt="57164-gallery-1686267509.jpg" style="width: 100%; height: 100%; object-fit: cover;"></div><div style="width: 100%;"><div class="text-center animate__animated animate__fadeInUp animate__slower"><div class="editable color-accent font-latin" style="font-size: 30px;">Vitalia Utari</div><div class="editable quotes" style="font-size: 14.4px;">Putri dari Bpk M Syarik<br>&amp; Ibu Isharni</div></div> <div class="text-center"><a href="https://instagram.com/" target="_blank" rel="noreferrer noopener" class="link btn btn-primary rounded-pill my-3 animate__animated animate__fadeInUp animate__slower">@instagram</a></div></div></div></div></li> <li class="satumomen_slide" style="display: none;"><div class="container-mobile" style="background-image: url(&quot;http://app.kitaberdua.com/themes/batak-merah/bg.webp&quot;);"><div class="frame"><img src="https://app.kitaberdua.com/themes/batak-merah/tl-1.webp" alt="frame" class="frame-tl h-100 animate__animated animate__fadeInLeft animate__slow" style="width: auto;"> <img src="https://app.kitaberdua.com/themes/batak-merah/tr-1.webp" alt="frame" class="frame-tr h-100 animate__animated animate__fadeInRight animate__slow" style="width: auto;"> <img src="https://app.kitaberdua.com/themes/batak-merah/tl-2.webp" alt="frame" class="frame-tl animate__animated animate__fadeInTopLeft animate__slow"> <img src="https://app.kitaberdua.com/themes/batak-merah/tr-2.webp" alt="frame" class="frame-tr animate__animated animate__fadeInTopRight animate__slow"> <img src="https://app.kitaberdua.com/themes/batak-merah/bl-1_2.webp" alt="frame" class="frame-bl animate__animated animate__fadeInBottomLeft animate__slow"> <img src="https://app.kitaberdua.com/themes/batak-merah/bl-1.webp" alt="frame" class="frame-br animate__animated animate__fadeInBottomRight animate__slow"> <img src="https://app.kitaberdua.com/themes/batak-merah/bm.webp" alt="frame" class="frame-bl w-100 animate__animated animate__fadeInUp animate__slower"></div> <div class="d-flex justify-content-center align-items-center" style="height: 100%;"><div style="width: 100%;"><div class="text-center mb-4 animate__animated animate__fadeInLeft animate__slower"><div class="editable font-latin color-accent h4 mb-2">Akad Nikah</div> <div class="editable" style="font-size: 14.4px;">Sabtu, 24 Juni 2023</div> <div class="editable" style="font-size: 14.4px;">Pukul 16:00 WIB</div> <div class="editable" style="font-size: 14.4px;">Hotel Aston Imperial Bekasi</div></div> <div class="text-center mb-4 animate__animated animate__fadeInRight animate__slower"><div class="editable font-latin color-accent h4 mb-2">Resepsi</div> <div class="editable" style="font-size: 14.4px;">Sabtu, 24 Juni 2023</div> <div class="editable" style="font-size: 14.4px;">Pukul 19.00 - 21.00 WIB</div> <div class="editable" style="font-size: 14.4px;">Hotel Aston Imperial Bekasi</div></div> <div data-datetime="2023-06-24T16:00" class="mx-auto countdown-wrapper d-flex flex-column animate__animated animate__fadeInUp animate__slower" style="max-width: 300px;"><div class="countdown text-center"><div class="countdown-item day"><div class="number">00</div> <div class="text editable">Hari</div></div> <div class="countdown-item hour"><div class="number">00</div> <div class="text editable">Jam</div></div> <div class="countdown-item minute"><div class="number">00</div> <div class="text editable">Menit</div></div> <div class="countdown-item second"><div class="number">00</div> <div class="text editable">Detik</div></div></div> <button class="btn-countdown btn btn-sm btn-pilled btn-accent mt-2">Atur Countdown</button></div></div></div></div></li> <li class="satumomen_slide" style="display: none;"><div class="container-mobile" style="background-image: url(&quot;http://app.kitaberdua.com/themes/batak-merah/bg.webp&quot;);"><div class="frame"><img src="https://app.kitaberdua.com/themes/batak-merah/tl-1.webp" alt="frame" class="frame-tl h-100 animate__animated animate__fadeInLeft animate__slow" style="width: auto;"> <img src="https://app.kitaberdua.com/themes/batak-merah/tr-1.webp" alt="frame" class="frame-tr h-100 animate__animated animate__fadeInRight animate__slow" style="width: auto;"> <img src="https://app.kitaberdua.com/themes/batak-merah/tl-2.webp" alt="frame" class="frame-tl animate__animated animate__fadeInTopLeft animate__slow"> <img src="https://app.kitaberdua.com/themes/batak-merah/tr-2.webp" alt="frame" class="frame-tr animate__animated animate__fadeInTopRight animate__slow"> <img src="https://app.kitaberdua.com/themes/batak-merah/bl-1_2.webp" alt="frame" class="frame-bl animate__animated animate__fadeInBottomLeft animate__slow"> <img src="https://app.kitaberdua.com/themes/batak-merah/bl-1.webp" alt="frame" class="frame-br animate__animated animate__fadeInBottomRight animate__slow"> <img src="https://app.kitaberdua.com/themes/batak-merah/bm.webp" alt="frame" class="frame-bl w-100 animate__animated animate__fadeInUp animate__slower"></div> <div class="d-flex justify-content-center align-items-center" style="height: 100%;"><div style="width: 100%;"><div><div class="animate__animated animate__fadeInDown animate__slow" style="width: 100%; margin: auto auto 20px; border-radius: 10px; overflow: hidden; padding-bottom: 100%; position: relative;"><iframe width="100%" height="100%" allowfullscreen="allowfullscreen" src="cid:frame-D06CA2646FAC48566993E0EBBAF7D231@mhtml.blink" class="maps-embed" style="border: 0px; position: absolute;"></iframe></div> <button class="btn-maps btn btn-sm btn-pilled btn-block btn-accent mt-1 mb-4">Edit Denah Lokasi</button> <div class="text-center animate__animated animate__fadeInUp animate__slow"><div class="editable mb-3" style="font-size: 14.4px;">Hotel Aston Imperial Bekasi</div> <a href="https://www.google.com/maps/place/?q=-6.246309225764057,106.9921669683292" target="_blank" rel="noreferrer noopener" class="btn-maps-link btn btn-primary rounded-pill mb-4 animate__animated animate__fadeInUp animate__slow">Petunjuk Ke Lokasi</a></div></div></div></div></div></li> <li class="satumomen_slide" style="display: none;"><div class="container-mobile" style="background-image: url(&quot;http://app.kitaberdua.com/themes/batak-merah/bg.webp&quot;);"><div class="frame"><img src="https://app.kitaberdua.com/themes/batak-merah/tl-1.webp" alt="frame" class="frame-tl h-100 animate__animated animate__fadeInLeft animate__slow" style="width: auto;"> <img src="https://app.kitaberdua.com/themes/batak-merah/tr-1.webp" alt="frame" class="frame-tr h-100 animate__animated animate__fadeInRight animate__slow" style="width: auto;"> <img src="https://app.kitaberdua.com/themes/batak-merah/tl-2.webp" alt="frame" class="frame-tl animate__animated animate__fadeInTopLeft animate__slow"> <img src="https://app.kitaberdua.com/themes/batak-merah/tr-2.webp" alt="frame" class="frame-tr animate__animated animate__fadeInTopRight animate__slow"> <img src="https://app.kitaberdua.com/themes/batak-merah/bl-1_2.webp" alt="frame" class="frame-bl animate__animated animate__fadeInBottomLeft animate__slow"> <img src="https://app.kitaberdua.com/themes/batak-merah/bl-1.webp" alt="frame" class="frame-br animate__animated animate__fadeInBottomRight animate__slow"> <img src="https://app.kitaberdua.com/themes/batak-merah/bm.webp" alt="frame" class="frame-bl w-100 animate__animated animate__fadeInUp animate__slower"></div> <div class="d-flex justify-content-center align-items-center" style="height: 100%;"><div style="width: 100%;"><div class="text-center mb-4 animate__animated animate__fadeInDown animate__slower"><div class="color-accent font-latin h4 mb-2 editable" style="font-size: 28.8px;">Our Memories</div></div> <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 4px; height: 60vh;"><div class="light image-editable animate__animated animate__zoomIn animate__slower" style="overflow: hidden; width: 100%;"><img src="https://assets.satumomen.com/images/galleries/57164-gallery-1686267141.jpg" alt="57164-gallery-1686267141.jpg" class="lightbox" style="width: 100%; height: 100%; object-fit: cover;"></div> <div class="light image-editable animate__animated animate__zoomIn animate__slower" style="overflow: hidden; width: 100%; grid-column: span 2;"><img src="https://assets.satumomen.com/images/galleries/57164-gallery-1686266235.jpg" alt="57164-gallery-1686266235.jpg" class="lightbox" style="width: 100%; height: 100%; object-fit: cover;"></div><div class="light image-editable animate__animated animate__zoomIn animate__slower" style="overflow: hidden; width: 100%;"><img src="https://assets.satumomen.com/images/galleries/57164-gallery-1686267285.jpg" alt="57164-gallery-1686267285.jpg" class="lightbox" style="width: 100%; height: 100%; object-fit: cover;"></div><div class="light image-editable animate__animated animate__zoomIn animate__slower" style="overflow: hidden; width: 100%;"><img src="https://assets.satumomen.com/images/galleries/57164-gallery-1686267284.jpg" alt="57164-gallery-1686267284.jpg" class="lightbox" style="width: 100%; height: 100%; object-fit: cover;"></div><div class="light image-editable animate__animated animate__zoomIn animate__slower" style="overflow: hidden; width: 100%;"><img src="https://assets.satumomen.com/images/galleries/57164-gallery-1686267287.jpg" alt="57164-gallery-1686267287.jpg" class="lightbox" style="width: 100%; height: 100%; object-fit: cover;"></div><div class="light image-editable animate__animated animate__zoomIn animate__slower" style="overflow: hidden; width: 100%; grid-column: span 2;"><img src="https://assets.satumomen.com/images/galleries/57164-gallery-1686267226.jpg" alt="57164-gallery-1686267226.jpg" class="lightbox" style="width: 100%; height: 100%; object-fit: cover;"></div><div class="light image-editable animate__animated animate__zoomIn animate__slower" style="overflow: hidden; width: 100%;"><img src="https://assets.satumomen.com/images/galleries/57164-gallery-1686267182.jpg" alt="57164-gallery-1686267182.jpg" class="lightbox" style="width: 100%; height: 100%; object-fit: cover;"></div></div></div></div></div></li> <li class="satumomen_slide" style="display: none;"><div class="container-mobile" style="background-image: url(&quot;http://app.kitaberdua.com/themes/batak-merah/bg.webp&quot;);"><div class="frame"><img src="https://app.kitaberdua.com/themes/batak-merah/tl-1.webp" alt="frame" class="frame-tl h-100 animate__animated animate__fadeInLeft animate__slow" style="width: auto;"> <img src="https://app.kitaberdua.com/themes/batak-merah/tr-1.webp" alt="frame" class="frame-tr h-100 animate__animated animate__fadeInRight animate__slow" style="width: auto;"> <img src="https://app.kitaberdua.com/themes/batak-merah/tl-2.webp" alt="frame" class="frame-tl animate__animated animate__fadeInTopLeft animate__slow"> <img src="https://app.kitaberdua.com/themes/batak-merah/tr-2.webp" alt="frame" class="frame-tr animate__animated animate__fadeInTopRight animate__slow"> <img src="https://app.kitaberdua.com/themes/batak-merah/bl-1_2.webp" alt="frame" class="frame-bl animate__animated animate__fadeInBottomLeft animate__slow"> <img src="https://app.kitaberdua.com/themes/batak-merah/bl-1.webp" alt="frame" class="frame-br animate__animated animate__fadeInBottomRight animate__slow"> <img src="https://app.kitaberdua.com/themes/batak-merah/bm.webp" alt="frame" class="frame-bl w-100 animate__animated animate__fadeInUp animate__slower"></div> <div class="d-flex flex-column justify-content-center align-items-center" style="height: 100%;"><div class="editable text-center font-latin color-accent h4 mb-4 animate__animated animate__fadeInDown animate__slower" style="font-size: 28.8px;">Our Love Story</div><div><div class="text-left pl-3 mb-3 animate__animated animate__fadeInUp animate__slower" style="position: relative;"><span style="height: 16px; width: 16px; position: absolute; background-color: var(--inv-accent); border-radius: 100%; transform: translateX(-24px) translateY(4px);"></span> <span style="height: 100%; width: 2px; position: absolute; background-color: var(--inv-accent); transform: translateX(-17px) translateY(20px);"></span><div class="editable font-weight-bold mb-2" style="font-size: 14.4px;">First Meet (2013)</div><div class="editable quotes" style="font-size: 14.4px;">Bulan agustus 2013 kami pertama kali bertemu dalam Ospek Perkuliahan. Dalam masa kuliah kami hanya teman biasa.</div></div> <div class="text-left pl-3 mb-3 animate__animated animate__fadeInUp animate__slower" style="position: relative;"><span style="height: 16px; width: 16px; position: absolute; background-color: var(--inv-accent); border-radius: 100%; transform: translateX(-24px) translateY(4px);"></span> <span style="height: 100%; width: 2px; position: absolute; background-color: var(--inv-accent); transform: translateX(-17px) translateY(20px);"></span><div class="editable font-weight-bold mb-2" style="font-size: 14.4px;">Relationship (2018)</div><div class="editable quotes" style="font-size: 14.4px;">25 Februari 2018 kami mengikat janji sebagai sepasang kekasih</div></div><div class="text-left pl-3 mb-3 animate__animated animate__fadeInUp animate__slower" style="position: relative;"><span style="height: 16px; width: 16px; position: absolute; background-color: var(--inv-accent); border-radius: 100%; transform: translateX(-24px) translateY(4px);"></span> <span style="height: 100%; width: 2px; position: absolute; background-color: var(--inv-accent); transform: translateX(-17px) translateY(20px);"></span><div class="editable font-weight-bold mb-2" style="font-size: 14.4px;">Engagement (2021)</div><div class="editable quotes" style="font-size: 14.4px;">Lika-liku hubungan kami lalui bersama hingga kami memutuskan untuk bertunangan pada 25 Februari 2021</div></div><div class="text-left pl-3 mb-3 animate__animated animate__fadeInUp animate__slower" style="position: relative;"><span style="height: 16px; width: 16px; position: absolute; background-color: var(--inv-accent); border-radius: 100%; transform: translateX(-24px) translateY(4px);"></span> <div class="editable font-weight-bold mb-2" style="font-size: 14.4px;">Married (2021)</div><div class="editable quotes" style="font-size: 14.4px;">Kami memutuskan untuk mengikat janji suci pernikahan pada 09 Oktober 2021</div></div></div></div></div></li> <li class="satumomen_slide" style="display: none;"><div class="container-mobile" style="background-image: url(&quot;http://app.kitaberdua.com/themes/batak-merah/bg.webp&quot;);"><div class="frame"><img src="https://app.kitaberdua.com/themes/batak-merah/tl-1.webp" alt="frame" class="frame-tl h-100 animate__animated animate__fadeInLeft animate__slow" style="width: auto;"> <img src="https://app.kitaberdua.com/themes/batak-merah/tr-1.webp" alt="frame" class="frame-tr h-100 animate__animated animate__fadeInRight animate__slow" style="width: auto;"> <img src="https://app.kitaberdua.com/themes/batak-merah/tl-2.webp" alt="frame" class="frame-tl animate__animated animate__fadeInTopLeft animate__slow"> <img src="https://app.kitaberdua.com/themes/batak-merah/tr-2.webp" alt="frame" class="frame-tr animate__animated animate__fadeInTopRight animate__slow"> <img src="https://app.kitaberdua.com/themes/batak-merah/bl-1_2.webp" alt="frame" class="frame-bl animate__animated animate__fadeInBottomLeft animate__slow"> <img src="https://app.kitaberdua.com/themes/batak-merah/bl-1.webp" alt="frame" class="frame-br animate__animated animate__fadeInBottomRight animate__slow"> <img src="https://app.kitaberdua.com/themes/batak-merah/bm.webp" alt="frame" class="frame-bl w-100 animate__animated animate__fadeInUp animate__slower"></div> <div class="d-flex justify-content-center align-items-center" style="height: 100%;"><div style="width: 100%;"><div><div class="animate__animated animate__fadeInRight animate__slower"><div class="image-editable" style="width: 248px; height: 195px; margin: auto; overflow: hidden; transform: translate(15px, 24px) rotate(356deg); border: 4px solid var(--inv-border);"><img src="https://assets.satumomen.com/images/galleries/57164-gallery-1686267428.jpg" alt="57164-gallery-1686267428.jpg" style="width: 100%; height: 100%; object-fit: cover;"></div></div> <div class="animate__animated animate__fadeInLeft animate__slower"><div class="image-editable" style="width: 248px; height: 195px; margin: auto auto 20px; overflow: hidden; transform: translate(-7px, 0px) rotate(2deg); border: 4px solid var(--inv-border);"><img src="https://assets.satumomen.com/images/galleries/57164-gallery-1686267431.jpg" alt="57164-gallery-1686267431.jpg" style="width: 100%; height: 100%; object-fit: cover;"></div></div> <div class="text-center"><div class="editable mb-4 animate__animated animate__fadeInUp animate__slower">
            Kirim ucapan untuk mempelai<br>dan konfirmasi kehadiran
          </div> <button class="btn-rsvp btn btn-primary rounded-pill mb-4 animate__animated animate__fadeInUp animate__slow">
            Kirim Ucapan RSVP
          </button></div></div></div></div></div></li> <li class="satumomen_slide" style="display: none;"><div class="container-mobile" style="background-image: url(&quot;http://app.kitaberdua.com/themes/batak-merah/bg.webp&quot;);"><div class="frame"><img src="https://app.kitaberdua.com/themes/batak-merah/tl-1.webp" alt="frame" class="frame-tl h-100 animate__animated animate__fadeInLeft animate__slow" style="width: auto;"> <img src="https://app.kitaberdua.com/themes/batak-merah/tr-1.webp" alt="frame" class="frame-tr h-100 animate__animated animate__fadeInRight animate__slow" style="width: auto;"> <img src="https://app.kitaberdua.com/themes/batak-merah/tl-2.webp" alt="frame" class="frame-tl animate__animated animate__fadeInTopLeft animate__slow"> <img src="https://app.kitaberdua.com/themes/batak-merah/tr-2.webp" alt="frame" class="frame-tr animate__animated animate__fadeInTopRight animate__slow"> <img src="https://app.kitaberdua.com/themes/batak-merah/bl-1_2.webp" alt="frame" class="frame-bl animate__animated animate__fadeInBottomLeft animate__slow"> <img src="https://app.kitaberdua.com/themes/batak-merah/bl-1.webp" alt="frame" class="frame-br animate__animated animate__fadeInBottomRight animate__slow"> <img src="https://app.kitaberdua.com/themes/batak-merah/bm.webp" alt="frame" class="frame-bl w-100 animate__animated animate__fadeInUp animate__slower"></div> <div class="d-flex justify-content-center align-items-center" style="height: 100%;"><div class="text-center" style="width: 100%;"><div class="font-latin color-accent h4 mb-2 editable animate__animated animate__fadeInDown animate__slower" style="font-size: 28.8px;">Tanda Kasih</div> <div class="editable mb-4 animate__animated animate__fadeInDown animate__slower" style="font-size: 14.4px;">Terima kasih telah menambah semangat kegembiraan pernikahan kami dengan kehadiran dan hadiah indah Anda.</div> <div style="display: flex; gap: 8px;"><button class="btn-gift btn btn-block btn-primary rounded-pill animate__animated animate__fadeInUp animate__slow" style="max-width: 150px; margin: auto; font-size: 14.4px;">? Cashless</button> <button class="btn-gift btn btn-block btn-primary rounded-pill animate__animated animate__fadeInUp animate__slow" style="max-width: 150px; margin: auto; font-size: 14.4px;">? Kirim Kado</button></div><div class="gift-container mt-3 p-4 rounded animate__animated animate__zoomIn animate__slow" style="display: none;"><div class="d-flex"><div class="mx-auto"><div class="d-flex align-items-center mb-3"><div class="image-editable" style="width: 80px; overflow: hidden;"><img src="https://assets.satumomen.com/images/no-image.jpg" alt="no-image.jpg" style="width: 100%; height: 100%; object-fit: contain;"></div> <div class="text-left pl-2"><div class="editable account-number font-weight-bold h5 mb-0">12345678</div><button type="button" class="btn btn-sm btn-primary mt-2 mb-2 animate__animated animate__fadeInUp animate__slow delay-5" data-text="12345678" style="font-family: sans-serif; border-radius: 4px">Salin Rekening</button> <div class="editable" style="font-size: 14.4px;">BCA : Atas Nama Rekening</div></div></div><div class="d-flex align-items-center"><div class="image-editable" style="width: 80px; overflow: hidden;"><img src="https://assets.satumomen.com/images/no-image.jpg" alt="no-image.jpg" style="width: 100%; height: 100%; object-fit: contain;"></div> <div class="text-left pl-2"><div class="editable account-number font-weight-bold h5 mb-0">12345678</div><button type="button" class="btn btn-sm btn-primary mt-2 mb-2 animate__animated animate__fadeInUp animate__slow delay-5" data-text="12345678" style="font-family: sans-serif; border-radius: 4px">Salin Rekening</button> <div class="editable" style="font-size: 14.4px;">BCA : Atas Nama</div></div></div></div></div></div><div class="gift-container mt-3 p-4 rounded animate__animated animate__zoomIn animate__slow" style="display: none;"><div class="text-center mb-2"><div class="editable font-weight-bold h5 color-accent mb-2">Kirim Kado</div> <div class="editable mb-0">Anda dapat mengirim kado ke:<br>Jl. Wildan Sari 1 No 11 Banjarmasin Barat 70119</div></div></div></div></div></div></li> <li class="satumomen_slide" style="display: none;"><div class="container-mobile" style="background-image: url(&quot;http://app.kitaberdua.com/themes/batak-merah/bg.webp&quot;);"><div class="frame"><img src="https://app.kitaberdua.com/themes/batak-merah/tl-1.webp" alt="frame" class="frame-tl h-100 animate__animated animate__fadeInLeft animate__slow" style="width: auto;"> <img src="https://app.kitaberdua.com/themes/batak-merah/tr-1.webp" alt="frame" class="frame-tr h-100 animate__animated animate__fadeInRight animate__slow" style="width: auto;"> <img src="https://app.kitaberdua.com/themes/batak-merah/tl-2.webp" alt="frame" class="frame-tl animate__animated animate__fadeInTopLeft animate__slow"> <img src="https://app.kitaberdua.com/themes/batak-merah/tr-2.webp" alt="frame" class="frame-tr animate__animated animate__fadeInTopRight animate__slow"> <img src="https://app.kitaberdua.com/themes/batak-merah/bl-1_2.webp" alt="frame" class="frame-bl animate__animated animate__fadeInBottomLeft animate__slow"> <img src="https://app.kitaberdua.com/themes/batak-merah/bl-1.webp" alt="frame" class="frame-br animate__animated animate__fadeInBottomRight animate__slow"> <img src="https://app.kitaberdua.com/themes/batak-merah/bm.webp" alt="frame" class="frame-bl w-100 animate__animated animate__fadeInUp animate__slower"></div> <div class="d-flex justify-content-center align-items-center" style="height: 100%;"><div class="text-center" style="width: 100%;"><div class="editable font-latin color-accent h4 mb-4 animate__animated animate__fadeInDown animate__slower">
        Live Streaming
      </div> <div class="editable animate__animated animate__fadeInUp animate__slower">Temui Kami secara virtual untuk menyaksikan acara pernikahan kami yang InsyaAllah kan disiarkan langsung melalui akun Instagram atau silakan join meeting melalui zoom berikut ini.</div> <div class="d-flex justify-content-center mt-3"><div class="image-editable animate__animated animate__zoomIn animate__slower m-2" style="height: 90px; width: 90px; border-radius: 10px; overflow: hidden;"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png" alt="2048px-Instagram_icon.png" style="width: 100%; height: 100%; object-fit: cover;"></div></div><a href="https://instagram.com/satumomen_com" target="_blank" rel="noreferrer noopener" class="link btn btn-primary rounded-pill my-3 animate__animated animate__fadeInUp animate__slow">Join Live Streaming</a><div class="editable animate__animated animate__fadeInUp animate__slower" style="font-size: 14.4px;">Instagram : @mempelai<br>Zoom Meeting ID : 123456789<br>Password : Rahasia</div></div></div></div></li> <li class="satumomen_slide" style="display: none;"><div class="container-mobile" style="background-image: url(&quot;http://app.kitaberdua.com/themes/batak-merah/bg.webp&quot;);"><div class="frame"><img src="https://app.kitaberdua.com/themes/batak-merah/tl-1.webp" alt="frame" class="frame-tl h-100 animate__animated animate__fadeInLeft animate__slow" style="width: auto;"> <img src="https://app.kitaberdua.com/themes/batak-merah/tr-1.webp" alt="frame" class="frame-tr h-100 animate__animated animate__fadeInRight animate__slow" style="width: auto;"> <img src="https://app.kitaberdua.com/themes/batak-merah/tl-2.webp" alt="frame" class="frame-tl animate__animated animate__fadeInTopLeft animate__slow"> <img src="https://app.kitaberdua.com/themes/batak-merah/tr-2.webp" alt="frame" class="frame-tr animate__animated animate__fadeInTopRight animate__slow"> <img src="https://app.kitaberdua.com/themes/batak-merah/bl-1_2.webp" alt="frame" class="frame-bl animate__animated animate__fadeInBottomLeft animate__slow"> <img src="https://app.kitaberdua.com/themes/batak-merah/bl-1.webp" alt="frame" class="frame-br animate__animated animate__fadeInBottomRight animate__slow"> <img src="https://app.kitaberdua.com/themes/batak-merah/bm.webp" alt="frame" class="frame-bl w-100 animate__animated animate__fadeInUp animate__slower"></div> <div class="d-flex justify-content-center align-items-center" style="height: 100%;"><div><div class="font-latin text-center color-accent h4 mb-2 editable animate__animated animate__fadeInDown animate__slower">Contact Person</div> <div class="editable mb-4 text-center animate__animated animate__fadeInUp animate__slower">Hubungi Contact Person kami jika ada hal<br>yang ingin ditanyakan.</div> <div class="text-center animate__animated animate__fadeInUp animate__slower mb-4"><div class="image-editable animate__animated animate__fadeInUp animate__slower" style="height: 100px; width: 100px; margin: auto auto 10px; border-radius: 100%; overflow: hidden;"><img src="https://assets.satumomen.com/images/galleries/57164-gallery-1686267511.jpg" alt="57164-gallery-1686267511.jpg" style="width: 100%; height: 100%; object-fit: cover;"></div> <div class="editable color-accent h4 mb-2 animate__animated animate__fadeInUp animate__slower font-latin" style="font-size: 28.8px;">Andreas</div> <a href="https://wa.me/6281250335095" target="_blank" rel="noreferrer noopener" class="link btn btn-primary rounded-pill animate__animated animate__fadeInUp animate__slower">WA 0812-2345-xxxx</a></div> <div class="text-center animate__animated animate__fadeInUp animate__slower"><div class="image-editable animate__animated animate__fadeInUp animate__slower" style="height: 100px; width: 100px; margin: auto auto 10px; border-radius: 100%; overflow: hidden;"><img src="https://assets.satumomen.com/images/galleries/57164-gallery-1686267509.jpg" alt="57164-gallery-1686267509.jpg" style="width: 100%; height: 100%; object-fit: cover;"></div> <div class="editable color-accent h4 mb-2 animate__animated animate__fadeInUp animate__slower font-latin" style="font-size: 28.8px;">Vitalia</div> <a href="https://wa.me/6281250335095" target="_blank" rel="noreferrer noopener" class="link btn btn-primary rounded-pill animate__animated animate__fadeInUp animate__slower">WA 0812-3456-xxxx</a></div></div></div></div></li> <li class="satumomen_slide" style="display: none;"><div class="container-mobile" style="background-image: url(&quot;http://app.kitaberdua.com/themes/batak-merah/bg.webp&quot;);"><div class="frame"><img src="https://app.kitaberdua.com/themes/batak-merah/tl-1.webp" alt="frame" class="frame-tl h-100 animate__animated animate__fadeInLeft animate__slow" style="width: auto;"> <img src="https://app.kitaberdua.com/themes/batak-merah/tr-1.webp" alt="frame" class="frame-tr h-100 animate__animated animate__fadeInRight animate__slow" style="width: auto;"> <img src="https://app.kitaberdua.com/themes/batak-merah/tl-2.webp" alt="frame" class="frame-tl animate__animated animate__fadeInTopLeft animate__slow"> <img src="https://app.kitaberdua.com/themes/batak-merah/tr-2.webp" alt="frame" class="frame-tr animate__animated animate__fadeInTopRight animate__slow"> <img src="https://app.kitaberdua.com/themes/batak-merah/bl-1_2.webp" alt="frame" class="frame-bl animate__animated animate__fadeInBottomLeft animate__slow"> <img src="https://app.kitaberdua.com/themes/batak-merah/bl-1.webp" alt="frame" class="frame-br animate__animated animate__fadeInBottomRight animate__slow"> <img src="https://app.kitaberdua.com/themes/batak-merah/bm.webp" alt="frame" class="frame-bl w-100 animate__animated animate__fadeInUp animate__slower"></div> <div class="watermark d-flex justify-content-center align-items-center" style="height: 100%;"><div><div class="text-center"><div class="editable quotes mb-3 animate__animated animate__fadeInDown animate__slower" style="font-size: 14.4px;">Merupakan suatu kebahagiaan bagi kami atas kehadiran Bapak/Ibu untuk memberikan doa restu</div><div class="editable font-italic animate__animated animate__fadeInDown animate__slow" style="font-size: 14.4px;">Hormat Kami Yang Mengundang</div> <div class="editable font-accent h4 color-accent animate__animated animate__fadeInDown animate__slow" style="font-size: 21.6px;">Andreas &amp; Vitalia</div> <div class="watermark-placeholder mt-5"><div id="waterMark" class="mt-5" style="display: inherit;"><div class="wm-music mt-3 text-center animate__animated animate__fadeInUp animate__slower animate__delay-1s" style="font-size: 60%;"><div style="opacity: 0.5;"><strong>Music:</strong></div> <div style="opacity: 0.5;">Dorman Manik &amp; Rany Simbolon - Si Rokkap Ni Tondi</div></div></div></div></div></div></div></div></li></ul></div></div> <div id="smMenu" class="satumomen_menu"><ul class="satumomen_menu_list"><li class="satumomen_menu_item active" style="max-width: 82.8px;"><svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.144 20.782v-3.067c0-.777.632-1.408 1.414-1.413h2.875c.786 0 1.423.633 1.423 1.413v3.058c0 .674.548 1.222 1.227 1.227h1.96a3.46 3.46 0 0 0 2.444-1 3.41 3.41 0 0 0 1.013-2.422V9.866c0-.735-.328-1.431-.895-1.902l-6.662-5.29a3.115 3.115 0 0 0-3.958.071L3.467 7.963A2.474 2.474 0 0 0 2.5 9.867v8.703C2.5 20.464 4.047 22 5.956 22h1.916c.327.002.641-.125.873-.354.232-.228.363-.54.363-.864h.036Z" fill="currentColor"></path></svg> <span>Opening</span></li> <li class="satumomen_menu_item" style="max-width: 82.8px;"><svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity=".4" d="M16.191 2H7.81C4.77 2 3 3.78 3 6.83v10.33C3 20.26 4.77 22 7.81 22h8.381C19.28 22 21 20.26 21 17.16V6.83C21 3.78 19.28 2 16.191 2" fill="currentColor"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M8.08 6.65v.01a.78.78 0 0 0 0 1.56h2.989c.431 0 .781-.35.781-.791a.781.781 0 0 0-.781-.779H8.08Zm7.84 6.09H8.08a.78.78 0 0 1 0-1.561h7.84a.781.781 0 0 1 0 1.561Zm0 4.57H8.08c-.3.04-.59-.11-.75-.36a.795.795 0 0 1 .75-1.21h7.84c.399.04.7.38.7.79 0 .399-.301.74-.7.78Z" fill="currentColor"></path></svg> <span>Quotes</span></li> <li class="satumomen_menu_item" style="max-width: 82.8px;"><svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity=".4" d="M11.776 21.837a36.258 36.258 0 0 1-6.328-4.957 12.668 12.668 0 0 1-3.03-4.805C1.278 8.535 2.603 4.49 6.3 3.288A6.282 6.282 0 0 1 12.007 4.3a6.291 6.291 0 0 1 5.706-1.012c3.697 1.201 5.03 5.247 3.893 8.787a12.67 12.67 0 0 1-3.013 4.805 36.58 36.58 0 0 1-6.328 4.957l-.25.163-.24-.163Z" fill="currentColor"></path><path d="m12.01 22-.234-.163a36.316 36.316 0 0 1-6.337-4.957 12.667 12.667 0 0 1-3.048-4.805c-1.13-3.54.195-7.586 3.892-8.787a6.296 6.296 0 0 1 5.728 1.023V22ZM18.23 10a.719.719 0 0 1-.517-.278.818.818 0 0 1-.167-.592c.022-.702-.378-1.341-.994-1.59-.391-.107-.628-.53-.53-.948.093-.41.477-.666.864-.573a.384.384 0 0 1 .138.052c1.236.476 2.036 1.755 1.973 3.155a.808.808 0 0 1-.23.56.708.708 0 0 1-.537.213Z" fill="currentColor"></path></svg> <span>Groom</span></li> <li class="satumomen_menu_item" style="max-width: 82.8px;"><svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity=".4" d="M11.776 21.837a36.258 36.258 0 0 1-6.328-4.957 12.668 12.668 0 0 1-3.03-4.805C1.278 8.535 2.603 4.49 6.3 3.288A6.282 6.282 0 0 1 12.007 4.3a6.291 6.291 0 0 1 5.706-1.012c3.697 1.201 5.03 5.247 3.893 8.787a12.67 12.67 0 0 1-3.013 4.805 36.58 36.58 0 0 1-6.328 4.957l-.25.163-.24-.163Z" fill="currentColor"></path><path d="m12.01 22-.234-.163a36.316 36.316 0 0 1-6.337-4.957 12.667 12.667 0 0 1-3.048-4.805c-1.13-3.54.195-7.586 3.892-8.787a6.296 6.296 0 0 1 5.728 1.023V22ZM18.23 10a.719.719 0 0 1-.517-.278.818.818 0 0 1-.167-.592c.022-.702-.378-1.341-.994-1.59-.391-.107-.628-.53-.53-.948.093-.41.477-.666.864-.573a.384.384 0 0 1 .138.052c1.236.476 2.036 1.755 1.973 3.155a.808.808 0 0 1-.23.56.708.708 0 0 1-.537.213Z" fill="currentColor"></path></svg> <span>Bride</span></li> <li class="satumomen_menu_item" style="max-width: 82.8px;"><svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M3 16.87V9.257h18v7.674C21 20.07 19.024 22 15.863 22H8.127C4.996 22 3 20.03 3 16.87Zm4.96-2.46a.822.822 0 0 1-.85-.799c0-.46.355-.84.81-.861.444 0 .81.351.82.8a.822.822 0 0 1-.78.86Zm4.06 0a.822.822 0 0 1-.85-.799c0-.46.356-.84.81-.861.445 0 .81.351.82.8a.822.822 0 0 1-.78.86Zm4.03 3.68a.847.847 0 0 1-.82-.85.831.831 0 0 1 .81-.849h.01c.465 0 .84.38.84.849 0 .47-.375.85-.84.85Zm-4.88-.85c.02.46.395.821.85.8a.821.821 0 0 0 .78-.859.817.817 0 0 0-.82-.801.855.855 0 0 0-.81.86Zm-4.07 0c.02.46.395.821.85.8a.821.821 0 0 0 .78-.859.817.817 0 0 0-.82-.801.855.855 0 0 0-.81.86Zm8.14-3.639c0-.46.356-.83.81-.84.445 0 .8.359.82.8a.82.82 0 0 1-.79.849.814.814 0 0 1-.84-.799v-.01Z" fill="currentColor"></path><path opacity=".4" d="M3.003 9.257c.013-.587.063-1.752.156-2.127.474-2.11 2.084-3.45 4.386-3.64h8.911c2.282.2 3.912 1.55 4.386 3.64.092.365.142 1.539.155 2.127H3.003Z" fill="currentColor"></path><path d="M8.305 6.59c.435 0 .76-.329.76-.77V2.771A.748.748 0 0 0 8.306 2c-.435 0-.76.33-.76.771V5.82c0 .441.325.77.76.77ZM15.695 6.59c.425 0 .76-.329.76-.77V2.771a.754.754 0 0 0-.76-.771c-.435 0-.76.33-.76.771V5.82c0 .441.325.77.76.77Z" fill="currentColor"></path></svg> <span>Acara</span></li> <li class="satumomen_menu_item" style="max-width: 82.8px;"><svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M8.532 2.937a6.89 6.89 0 0 1 7.034.058C17.71 4.327 19.012 6.705 19 9.26c-.05 2.54-1.447 4.929-3.193 6.775a18.727 18.727 0 0 1-3.358 2.82 1.173 1.173 0 0 1-.408.144.82.82 0 0 1-.39-.119 18.515 18.515 0 0 1-4.839-4.547A9.28 9.28 0 0 1 5 9.134c-.001-2.562 1.347-4.928 3.532-6.197Zm1.262 7.258a2.378 2.378 0 0 0 2.198 1.497 2.339 2.339 0 0 0 1.683-.701c.446-.454.696-1.07.694-1.713a2.423 2.423 0 0 0-1.462-2.243 2.346 2.346 0 0 0-2.594.52 2.455 2.455 0 0 0-.519 2.64Z" fill="currentColor"></path><ellipse opacity=".4" cx="12" cy="21" rx="5" ry="1" fill="currentColor"></ellipse></svg> <span>Maps</span></li> <li class="satumomen_menu_item" style="max-width: 82.8px;"><svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22 14.702v1.384c0 .23-.01.461-.03.69-.28 3.16-2.475 5.224-5.641 5.224H7.67c-1.603 0-2.956-.52-3.928-1.464a4.593 4.593 0 0 1-.951-1.232c.33-.402.7-.842 1.062-1.283a98.56 98.56 0 0 0 1.573-1.925c.55-.682 2.004-2.476 4.018-1.634.41.17.771.41 1.102.621.812.542 1.152.702 1.723.391.632-.34 1.043-1.012 1.473-1.714.23-.372.461-.732.712-1.063 1.092-1.423 2.775-1.804 4.178-.962.702.42 1.303.952 1.864 1.493.12.12.24.231.35.341.15.15.652.652 1.153 1.133Z" fill="currentColor"></path><path opacity=".4" d="M16.339 2H7.67C4.275 2 2 4.376 2 7.914v8.172c0 1.232.28 2.326.792 3.218.33-.402.701-.842 1.062-1.284a95.981 95.981 0 0 0 1.573-1.924c.551-.682 2.004-2.476 4.018-1.634.41.17.771.41 1.102.621.812.542 1.152.702 1.723.39.632-.34 1.043-1.011 1.473-1.714.23-.37.461-.73.712-1.062 1.092-1.423 2.775-1.804 4.178-.962.702.42 1.303.952 1.864 1.493.12.12.24.231.35.342.151.149.652.65 1.153 1.133V7.914C22 4.376 19.726 2 16.339 2Z" fill="currentColor"></path><path d="M11.454 8.797a2.604 2.604 0 0 1-2.58 2.581c-1.408 0-2.58-1.173-2.58-2.581s1.172-2.582 2.58-2.582c1.407 0 2.58 1.174 2.58 2.582Z" fill="currentColor"></path></svg> <span>Gallery</span></li> <li class="satumomen_menu_item" style="max-width: 82.8px;"><svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity=".4" d="M16.191 2H7.81C4.77 2 3 3.78 3 6.83v10.33C3 20.26 4.77 22 7.81 22h8.381C19.28 22 21 20.26 21 17.16V6.83C21 3.78 19.28 2 16.191 2" fill="currentColor"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M8.08 6.65v.01a.78.78 0 0 0 0 1.56h2.989c.431 0 .781-.35.781-.791a.781.781 0 0 0-.781-.779H8.08Zm7.84 6.09H8.08a.78.78 0 0 1 0-1.561h7.84a.781.781 0 0 1 0 1.561Zm0 4.57H8.08c-.3.04-.59-.11-.75-.36a.795.795 0 0 1 .75-1.21h7.84c.399.04.7.38.7.79 0 .399-.301.74-.7.78Z" fill="currentColor"></path></svg> <span>Love Story</span></li> <li class="satumomen_menu_item" style="max-width: 82.8px;"><svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity=".4" d="M12.02 2C6.21 2 2 6.74 2 12c0 1.68.49 3.41 1.35 4.99.16.26.18.59.07.9l-.67 2.24c-.15.54.31.94.82.78l2.02-.6c.55-.18.98.05 1.491.36 1.46.86 3.279 1.3 4.919 1.3 4.96 0 10-3.83 10-10C22 6.65 17.7 2 12.02 2Z" fill="currentColor"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M11.98 13.29c-.71-.01-1.28-.58-1.28-1.29 0-.7.58-1.28 1.28-1.27.71 0 1.28.57 1.28 1.28 0 .7-.57 1.28-1.28 1.28Zm-4.61 0c-.7 0-1.28-.58-1.28-1.28 0-.71.57-1.28 1.28-1.28.71 0 1.28.57 1.28 1.28 0 .7-.57 1.27-1.28 1.28Zm7.94-1.28c0 .7.57 1.28 1.28 1.28.71 0 1.28-.58 1.28-1.28 0-.71-.57-1.28-1.28-1.28-.71 0-1.28.57-1.28 1.28Z" fill="currentColor"></path></svg> <span>RSVP</span></li> <li class="satumomen_menu_item" style="max-width: 82.8px;"><svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity=".4" d="M16.191 2H7.81C4.77 2 3 3.78 3 6.83v10.33C3 20.26 4.77 22 7.81 22h8.381C19.28 22 21 20.26 21 17.16V6.83C21 3.78 19.28 2 16.191 2" fill="currentColor"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M8.08 6.65v.01a.78.78 0 0 0 0 1.56h2.989c.431 0 .781-.35.781-.791a.781.781 0 0 0-.781-.779H8.08Zm7.84 6.09H8.08a.78.78 0 0 1 0-1.561h7.84a.781.781 0 0 1 0 1.561Zm0 4.57H8.08c-.3.04-.59-.11-.75-.36a.795.795 0 0 1 .75-1.21h7.84c.399.04.7.38.7.79 0 .399-.301.74-.7.78Z" fill="currentColor"></path></svg> <span>Gift</span></li> <li class="satumomen_menu_item" style="max-width: 82.8px;"><svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity=".4" d="M21.33 7.443a1.383 1.383 0 0 0-1.372-.064l-1.482.748a1.618 1.618 0 0 0-.888 1.456v5.833c0 .622.34 1.179.888 1.457l1.48.747c.202.104.417.153.632.153.258 0 .514-.073.743-.216.419-.263.669-.718.669-1.218V8.662c0-.5-.25-.956-.67-1.22Z" fill="currentColor"></path><path d="M11.905 20H6.113C3.691 20 2 18.33 2 15.94V9.06C2 6.67 3.691 5 6.113 5h5.792c2.422 0 4.113 1.669 4.113 4.06v6.88c0 2.39-1.69 4.06-4.113 4.06Z" fill="currentColor"></path></svg> <span>Live</span></li> <li class="satumomen_menu_item" style="max-width: 82.8px;"><svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity=".4" d="M12.02 2C6.21 2 2 6.74 2 12c0 1.68.49 3.41 1.35 4.99.16.26.18.59.07.9l-.67 2.24c-.15.54.31.94.82.78l2.02-.6c.55-.18.98.05 1.491.36 1.46.86 3.279 1.3 4.919 1.3 4.96 0 10-3.83 10-10C22 6.65 17.7 2 12.02 2Z" fill="currentColor"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M11.98 13.29c-.71-.01-1.28-.58-1.28-1.29 0-.7.58-1.28 1.28-1.27.71 0 1.28.57 1.28 1.28 0 .7-.57 1.28-1.28 1.28Zm-4.61 0c-.7 0-1.28-.58-1.28-1.28 0-.71.57-1.28 1.28-1.28.71 0 1.28.57 1.28 1.28 0 .7-.57 1.27-1.28 1.28Zm7.94-1.28c0 .7.57 1.28 1.28 1.28.71 0 1.28-.58 1.28-1.28 0-.71-.57-1.28-1.28-1.28-.71 0-1.28.57-1.28 1.28Z" fill="currentColor"></path></svg> <span>Contact</span></li> <li class="satumomen_menu_item" style="max-width: 82.8px;"><svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity=".4" d="M16.34 2H7.67C4.28 2 2 4.38 2 7.92v8.17C2 19.62 4.28 22 7.67 22h8.67c3.39 0 5.66-2.38 5.66-5.91V7.92C22 4.38 19.73 2 16.34 2Z" fill="currentColor"></path><path d="M10.813 15.248a.872.872 0 0 1-.619-.256l-2.373-2.373a.874.874 0 1 1 1.237-1.238l1.755 1.755 4.128-4.128a.874.874 0 1 1 1.237 1.238l-4.746 4.746a.872.872 0 0 1-.619.256Z" fill="currentColor"></path></svg> <span>Thanks</span></li></ul></div> <div class="floating-action d-flex align-items-end flex-column"><button id="btnQrModal" class="btn btn-float"><svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" viewBox="0 0 256 256"><rect x="40" y="40" width="80" height="80" rx="16"></rect><rect x="40" y="136" width="80" height="80" rx="16"></rect><rect x="136" y="40" width="80" height="80" rx="16"></rect><path d="M144,184a8,8,0,0,0,8-8V144a8,8,0,0,0-16,0v32A8,8,0,0,0,144,184Z"></path><path d="M208,152H184v-8a8,8,0,0,0-16,0v56H144a8,8,0,0,0,0,16h32a8,8,0,0,0,8-8V168h24a8,8,0,0,0,0-16Z"></path><path d="M208,184a8,8,0,0,0-8,8v16a8,8,0,0,0,16,0V192A8,8,0,0,0,208,184Z"></path></svg></button> <button id="btnMusic" class="btn btn-float playing"><svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" viewBox="0 0 256 256" class="play"><path d="M184,152V104a8,8,0,0,1,16,0v48a8,8,0,0,1-16,0Zm40-72a8,8,0,0,0-8,8v80a8,8,0,0,0,16,0V88A8,8,0,0,0,224,80ZM53.92,34.62A8,8,0,1,0,42.08,45.38L73.55,80H32A16,16,0,0,0,16,96v64a16,16,0,0,0,16,16H77.25l69.84,54.31A8,8,0,0,0,160,224V175.09l42.08,46.29a8,8,0,1,0,11.84-10.76Zm92.16,77.59A8,8,0,0,0,160,106.83V32a8,8,0,0,0-12.91-6.31l-39.85,31a8,8,0,0,0-1,11.7Z"></path></svg> <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" viewBox="0 0 256 256" class="pause"><path d="M160,32V224a8,8,0,0,1-12.91,6.31L77.25,176H32a16,16,0,0,1-16-16V96A16,16,0,0,1,32,80H77.25l69.84-54.31A8,8,0,0,1,160,32Zm32,64a8,8,0,0,0-8,8v48a8,8,0,0,0,16,0V104A8,8,0,0,0,192,96Zm32-16a8,8,0,0,0-8,8v80a8,8,0,0,0,16,0V88A8,8,0,0,0,224,80Z"></path></svg></button> <button id="btnAutoplay" class="btn btn-float"><svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" viewBox="0 0 256 256" class="play"><path d="M128,24A104,104,0,1,0,232,128,104.13,104.13,0,0,0,128,24Zm36.44,110.66-48,32A8.05,8.05,0,0,1,112,168a8,8,0,0,1-8-8V96a8,8,0,0,1,12.44-6.66l48,32a8,8,0,0,1,0,13.32Z"></path></svg> <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" viewBox="0 0 256 256" class="pause"><path d="M128,24A104,104,0,1,0,232,128,104.13,104.13,0,0,0,128,24ZM112,160a8,8,0,0,1-16,0V96a8,8,0,0,1,16,0Zm48,0a8,8,0,0,1-16,0V96a8,8,0,0,1,16,0Z"></path></svg></button></div></div></div></div></div> <div id="lightboxWrapper" class="lightbox-wrapper"><div class="lightbox-list"></div> <a href="https://app.kitaberdua.com/preview/batak-merah#" id="lightboxCloseBtn" class="btn-lightbox"><svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 0 1 1.414 0L10 8.586l4.293-4.293a1 1 0 1 1 1.414 1.414L11.414 10l4.293 4.293a1 1 0 0 1-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 0 1-1.414-1.414L8.586 10 4.293 5.707a1 1 0 0 1 0-1.414z" clip-rule="evenodd"></path></svg></a> <div class="lightbox-navigation"><a href="https://app.kitaberdua.com/preview/batak-merah#" id="lightboxPrevBtn" data-index="0" class="lightbox-arrow"><svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m15 19-7-7 7-7"></path></svg></a> <a href="https://app.kitaberdua.com/preview/batak-merah#" id="lightboxNextBtn" data-index="0" class="lightbox-arrow"><svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m9 5 7 7-7 7"></path></svg></a></div></div> <div id="qrModal" tabindex="-1" role="dialog" aria-labelledby="qrModal" aria-hidden="true" class="modal fade"><div class="modal-dialog modal-dialog-centered"><div class="modal-content" style="height: 100%;"><div style="width: 100%; aspect-ratio: 16 / 9; background-size: cover; background-position: center center; background-image: url(&quot;/images/no-image.jpg&quot;);"></div> <div class="text-center py-4 px-4"><div><div class="mx-auto"><svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="180" height="180" viewBox="0 0 180 180"><rect x="0" y="0" width="180" height="180" fill="#ffffff"></rect><g transform="scale(7.2)"><g transform="translate(0,0)"><path fill-rule="evenodd" d="M8 0L8 4L9 4L9 5L8 5L8 7L9 7L9 6L10 6L10 9L11 9L11 8L12 8L12 9L13 9L13 10L15 10L15 11L14 11L14 12L13 12L13 11L12 11L12 12L11 12L11 13L9 13L9 12L10 12L10 11L11 11L11 10L9 10L9 9L7 9L7 8L4 8L4 11L3 11L3 10L2 10L2 11L1 11L1 9L2 9L2 8L0 8L0 14L3 14L3 15L2 15L2 16L0 16L0 17L2 17L2 16L5 16L5 17L8 17L8 18L9 18L9 19L8 19L8 21L10 21L10 22L11 22L11 24L12 24L12 25L14 25L14 23L15 23L15 22L16 22L16 23L20 23L20 21L21 21L21 16L19 16L19 15L20 15L20 14L21 14L21 15L22 15L22 18L23 18L23 15L22 15L22 14L24 14L24 13L25 13L25 12L24 12L24 11L23 11L23 10L24 10L24 9L25 9L25 8L21 8L21 9L20 9L20 8L19 8L19 9L20 9L20 11L21 11L21 12L22 12L22 13L20 13L20 12L17 12L17 15L16 15L16 12L15 12L15 11L17 11L17 9L14 9L14 7L15 7L15 6L14 6L14 7L13 7L13 6L12 6L12 7L11 7L11 3L10 3L10 2L9 2L9 0ZM14 0L14 1L11 1L11 2L12 2L12 5L13 5L13 2L14 2L14 3L15 3L15 2L14 2L14 1L16 1L16 2L17 2L17 0ZM16 3L16 4L14 4L14 5L16 5L16 8L17 8L17 3ZM12 7L12 8L13 8L13 7ZM6 9L6 10L7 10L7 11L6 11L6 12L7 12L7 13L3 13L3 11L2 11L2 13L3 13L3 14L4 14L4 15L5 15L5 16L7 16L7 15L8 15L8 17L9 17L9 18L11 18L11 20L12 20L12 21L11 21L11 22L12 22L12 21L13 21L13 22L15 22L15 21L16 21L16 22L17 22L17 21L16 21L16 16L15 16L15 15L14 15L14 17L15 17L15 18L13 18L13 17L12 17L12 16L13 16L13 15L12 15L12 16L10 16L10 17L9 17L9 14L8 14L8 10L7 10L7 9ZM21 9L21 10L23 10L23 9ZM12 12L12 13L11 13L11 14L10 14L10 15L11 15L11 14L12 14L12 13L13 13L13 14L15 14L15 13L13 13L13 12ZM23 12L23 13L24 13L24 12ZM18 13L18 15L19 15L19 14L20 14L20 13ZM6 14L6 15L7 15L7 14ZM24 16L24 17L25 17L25 16ZM17 17L17 20L20 20L20 17ZM18 18L18 19L19 19L19 18ZM9 19L9 20L10 20L10 19ZM12 19L12 20L13 20L13 21L15 21L15 19L14 19L14 20L13 20L13 19ZM22 19L22 24L20 24L20 25L25 25L25 24L24 24L24 22L25 22L25 19ZM23 20L23 21L24 21L24 20ZM8 23L8 25L10 25L10 23ZM12 23L12 24L13 24L13 23ZM15 24L15 25L16 25L16 24ZM18 24L18 25L19 25L19 24ZM0 0L0 7L7 7L7 0ZM1 1L1 6L6 6L6 1ZM2 2L2 5L5 5L5 2ZM18 0L18 7L25 7L25 0ZM19 1L19 6L24 6L24 1ZM20 2L20 5L23 5L23 2ZM0 18L0 25L7 25L7 18ZM1 19L1 24L6 24L6 19ZM2 20L2 23L5 23L5 20Z" fill="#000000"></path></g></g></svg> <div style="margin-top: 10px; text-align: center;"></div></div></div> <hr style="margin-top: 1rem; margin-bottom: 1rem; border-width: 2px 0px 0px; border-style: dashed none none; border-color: rgba(0, 0, 0, 0.1) currentcolor currentcolor; border-image: none;"> <div style="text-align: center;"><strong>07 Mar 2026</strong><br> <p class="mb-0">14:03 </p> <p></p></div> <hr style="margin-top: 1rem; margin-bottom: 1rem; border-width: 2px 0px 0px; border-style: dashed none none; border-color: rgba(0, 0, 0, 0.1) currentcolor currentcolor; border-image: none;"> <div style="margin-bottom: 10px;"><div style="color: rgb(178, 178, 178);">Nama</div> <div>Nama Tamu</div></div> <div style="margin-bottom: 10px;"><div style="color: rgb(178, 178, 178);">Grup</div> <div>VIP</div></div></div> <button type="button" class="btn btn-close"><svg xmlns="http://www.w3.org/2000/svg" height="42px" width="42px" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18 18 6M6 6l12 12"></path></svg></button></div></div></div> <div id="rsvpModal" tabindex="-1" role="dialog" aria-labelledby="rsvpModal" class="modal fade"><div class="modal-dialog modal-dialog-centered"><div class="modal-content p-4" style="height: 100%;"><div class="rsvp-form show"><!----> <div class="mb-4"><div class="font-accent h4 text-center">RSVP</div></div> <form class="pt-2"> <!---->  <button type="submit" class="btn btn-primary rounded-pill btn-block mt-4 mb-2"><span>Kirim</span></button></form> <!----></div> <button type="button" class="btn btn-close"><svg xmlns="http://www.w3.org/2000/svg" height="42px" width="42px" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18 18 6M6 6l12 12"></path></svg></button></div></div></div> </main>
    <!-- illegal -->
    
        </div>
    </div>
    <!-- end illegal -->

    <!-- not support modal -->
    <div class="modal fade" id="notSupport" tabindex="-1" role="dialog" aria-labelledby="notSupport" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content" style="border-radius: .8rem;">
                <div class="modal-body text-center justify-content-center align-items-center">
                    <h2>Pemberitahuan</h2>
                    <p>Browser yang kamu gunakan mungkin kurang kompatibel. Beberapa fungsi undangan ini mungkin tidak dapat berjalan dengan baik. Kami merekomendasikan Chrome. Klik tombol dibawah ini untuk mendownload.</p>
                    <div class="d-flex justify-content-center">
                        <a href="https://apps.apple.com/id/app/google-chrome/id535886823" class="btn p-1" target="_BLANK">
                            <img src="https://app.kitaberdua.com/images/btn_app_store.png" alt="AppStore" height="40px">
                        </a>
                        <a href="https://play.google.com/store/apps/details?id=com.android.chrome&amp;hl=in&amp;gl=US" class="btn p-1" target="_BLANK">
                            <img src="https://app.kitaberdua.com/images/btn_play_store.png" alt="PlayStore" height="40px">
                        </a>
                    </div>
                </div>
                <div class="modal-footer">
                    <button class="btn btn-outline-secondary btn-block rounded-pill">Tetap Akses</button>
                </div>
            </div>
        </div>
    </div>
    <!-- not support modal -->

    <!-- start script -->

    

        
    

    
        <!-- end script -->
    



</div></template></div><browser-mcp-container data-wxt-shadow-root=""><template shadowmode="open"><html><head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8"><style type="text/css">
@charset "utf-8";

@import url("https://fonts.googleapis.com/css2?family=Carattere&family=Modern+Antiqua&display=swap");

:root { --inv-bg: #620404; --inv-base: #ffffff; --inv-accent: #BC9A53; --inv-border: #BC9A53; --font-base: 'Modern Antiqua', cursive; --font-accent: 'Modern Antiqua', cursive; --font-latin: 'Carattere', cursive; --menu-bg: #2F0101; --menu-inactive: #FFF7E1; --menu-active: #BC9A53; --btn-color: #ffffff; }

.menu-item.is-active { color: var(--menu-bg) !important; background-color: var(--menu-active) !important; }

</style><style type="text/css">
@charset "utf-8";

@import url("/fonts/brittany_signature/BrittanySignature.css");

@import url("/fonts/photograph_signature/fonts.css");

@import url("/fonts/heatwood/Heatwood.css");

.font-brittany-signature { font-family: "Brittany Signature"; line-height: 1.6 !important; }

.font-photograph-signature { font-family: "Photograph Signature"; line-height: 1.6 !important; }

.font-heatwood { font-family: Heatwood; line-height: 3 !important; }

#YTMusic { display: block; }

</style><style type="text/css">
@charset "utf-8";

.noty_layout_mixin, #noty_layout__top, #noty_layout__topLeft, #noty_layout__topCenter, #noty_layout__topRight, #noty_layout__bottom, #noty_layout__bottomLeft, #noty_layout__bottomCenter, #noty_layout__bottomRight, #noty_layout__center, #noty_layout__centerLeft, #noty_layout__centerRight { position: fixed; margin: 0px; padding: 0px; z-index: 9999999; transform: translateZ(0px) scale(1, 1); backface-visibility: hidden; -webkit-font-smoothing: subpixel-antialiased; filter: blur(0px); max-width: 90%; }

#noty_layout__top { top: 0px; left: 5%; width: 90%; }

#noty_layout__topLeft { top: 20px; left: 20px; width: 325px; }

#noty_layout__topCenter { top: 5%; left: 50%; width: 325px; transform: translate(calc(-50% - 0.5px)) translateZ(0px) scale(1, 1); }

#noty_layout__topRight { top: 20px; right: 20px; width: 325px; }

#noty_layout__bottom { bottom: 0px; left: 5%; width: 90%; }

#noty_layout__bottomLeft { bottom: 20px; left: 20px; width: 325px; }

#noty_layout__bottomCenter { bottom: 5%; left: 50%; width: 325px; transform: translate(calc(-50% - 0.5px)) translateZ(0px) scale(1, 1); }

#noty_layout__bottomRight { bottom: 20px; right: 20px; width: 325px; }

#noty_layout__center { top: 50%; left: 50%; width: 325px; transform: translate(calc(-50% - 0.5px), calc(-50% - 0.5px)) translateZ(0px) scale(1, 1); }

#noty_layout__centerLeft { top: 50%; left: 20px; width: 325px; transform: translate(0px, calc(-50% - 0.5px)) translateZ(0px) scale(1, 1); }

#noty_layout__centerRight { top: 50%; right: 20px; width: 325px; transform: translate(0px, calc(-50% - 0.5px)) translateZ(0px) scale(1, 1); }

.noty_progressbar { display: none; }

.noty_has_timeout .noty_progressbar { display: block; position: absolute; left: 0px; bottom: 0px; height: 3px; width: 100%; background-color: rgb(100, 100, 100); opacity: 0.2; }

.noty_bar { backface-visibility: hidden; transform: translate(0px, 0px) scale(1, 1); -webkit-font-smoothing: subpixel-antialiased; overflow: hidden; }

.noty_effects_open { opacity: 0; transform: translate(50%); animation: 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55) 0s 1 normal forwards running noty_anim_in; }

.noty_effects_close { animation: 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55) 0s 1 normal forwards running noty_anim_out; }

.noty_fix_effects_height { animation: 75ms ease-out 0s 1 normal none running noty_anim_height; }

.noty_close_with_click { cursor: pointer; }

.noty_close_button { position: absolute; top: 2px; right: 2px; font-weight: bold; width: 20px; height: 20px; text-align: center; line-height: 20px; background-color: rgba(0, 0, 0, 0.05); border-radius: 2px; cursor: pointer; transition: 0.2s ease-out; }

.noty_close_button:hover { background-color: rgba(0, 0, 0, 0.1); }

.noty_modal { position: fixed; width: 100%; height: 100%; background-color: rgb(0, 0, 0); z-index: 10000; opacity: 0.3; left: 0px; top: 0px; }

.noty_modal.noty_modal_open { opacity: 0; animation: 0.3s ease-out 0s 1 normal none running noty_modal_in; }

.noty_modal.noty_modal_close { animation: 0.3s ease-out 0s 1 normal forwards running noty_modal_out; }

@keyframes noty_modal_in { 
  100% { opacity: 0.3; }
}

@keyframes noty_modal_out { 
  100% { opacity: 0; }
}

@keyframes noty_modal_out { 
  100% { opacity: 0; }
}

@keyframes noty_anim_in { 
  100% { transform: translate(0px); opacity: 1; }
}

@keyframes noty_anim_out { 
  100% { transform: translate(50%); opacity: 0; }
}

@keyframes noty_anim_height { 
  100% { height: 0px; }
}

.noty_theme__relax.noty_bar { margin: 4px 0px; overflow: hidden; border-radius: 2px; position: relative; }

.noty_theme__relax.noty_bar .noty_body { padding: 10px; }

.noty_theme__relax.noty_bar .noty_buttons { border-top: 1px solid rgb(231, 231, 231); padding: 5px 10px; }

.noty_theme__relax.noty_type__alert, .noty_theme__relax.noty_type__notification { background-color: rgb(255, 255, 255); border: 1px solid rgb(222, 222, 222); color: rgb(68, 68, 68); }

.noty_theme__relax.noty_type__warning { background-color: rgb(255, 234, 168); border: 1px solid rgb(255, 194, 55); color: rgb(130, 98, 0); }

.noty_theme__relax.noty_type__warning .noty_buttons { border-color: rgb(223, 170, 48); }

.noty_theme__relax.noty_type__error { background-color: rgb(255, 129, 129); border: 1px solid rgb(226, 83, 83); color: rgb(255, 255, 255); }

.noty_theme__relax.noty_type__error .noty_buttons { border-color: darkred; }

.noty_theme__relax.noty_type__info, .noty_theme__relax.noty_type__information { background-color: rgb(120, 197, 231); border: 1px solid rgb(59, 173, 214); color: rgb(255, 255, 255); }

.noty_theme__relax.noty_type__info .noty_buttons, .noty_theme__relax.noty_type__information .noty_buttons { border-color: rgb(11, 144, 196); }

.noty_theme__relax.noty_type__success { background-color: rgb(188, 245, 188); border: 1px solid rgb(124, 221, 119); color: darkgreen; }

.noty_theme__relax.noty_type__success .noty_buttons { border-color: rgb(80, 194, 78); }

.noty_theme__metroui.noty_bar { margin: 4px 0px; overflow: hidden; position: relative; box-shadow: rgba(0, 0, 0, 0.298) 0px 0px 5px 0px; }

.noty_theme__metroui.noty_bar .noty_progressbar { position: absolute; left: 0px; bottom: 0px; height: 3px; width: 100%; background-color: rgb(0, 0, 0); opacity: 0.2; }

.noty_theme__metroui.noty_bar .noty_body { padding: 1.25em; font-size: 14px; }

.noty_theme__metroui.noty_bar .noty_buttons { padding: 0px 10px 0.5em; }

.noty_theme__metroui.noty_type__alert, .noty_theme__metroui.noty_type__notification { background-color: rgb(255, 255, 255); color: rgb(29, 29, 29); }

.noty_theme__metroui.noty_type__warning { background-color: rgb(250, 104, 0); color: rgb(255, 255, 255); }

.noty_theme__metroui.noty_type__error { background-color: rgb(206, 53, 44); color: rgb(255, 255, 255); }

.noty_theme__metroui.noty_type__info, .noty_theme__metroui.noty_type__information { background-color: rgb(27, 161, 226); color: rgb(255, 255, 255); }

.noty_theme__metroui.noty_type__success { background-color: rgb(96, 169, 23); color: rgb(255, 255, 255); }

.noty_theme__mint.noty_bar { margin: 4px 0px; overflow: hidden; border-radius: 2px; position: relative; }

.noty_theme__mint.noty_bar .noty_body { padding: 10px; font-size: 14px; }

.noty_theme__mint.noty_bar .noty_buttons { padding: 10px; }

.noty_theme__mint.noty_type__alert, .noty_theme__mint.noty_type__notification { background-color: rgb(255, 255, 255); border-bottom: 1px solid rgb(209, 209, 209); color: rgb(47, 47, 47); }

.noty_theme__mint.noty_type__warning { background-color: rgb(255, 174, 66); border-bottom: 1px solid rgb(232, 159, 60); color: rgb(255, 255, 255); }

.noty_theme__mint.noty_type__error { background-color: rgb(222, 99, 111); border-bottom: 1px solid rgb(202, 90, 101); color: rgb(255, 255, 255); }

.noty_theme__mint.noty_type__info, .noty_theme__mint.noty_type__information { background-color: rgb(127, 126, 255); border-bottom: 1px solid rgb(116, 115, 232); color: rgb(255, 255, 255); }

.noty_theme__mint.noty_type__success { background-color: rgb(175, 199, 101); border-bottom: 1px solid rgb(160, 181, 92); color: rgb(255, 255, 255); }

.noty_theme__sunset.noty_bar { margin: 4px 0px; overflow: hidden; border-radius: 2px; position: relative; }

.noty_theme__sunset.noty_bar .noty_body { padding: 10px; font-size: 14px; text-shadow: rgba(0, 0, 0, 0.1) 1px 1px 1px; }

.noty_theme__sunset.noty_bar .noty_buttons { padding: 10px; }

.noty_theme__sunset.noty_type__alert, .noty_theme__sunset.noty_type__notification { background-color: rgb(7, 59, 76); color: rgb(255, 255, 255); }

.noty_theme__sunset.noty_type__alert .noty_progressbar, .noty_theme__sunset.noty_type__notification .noty_progressbar { background-color: rgb(255, 255, 255); }

.noty_theme__sunset.noty_type__warning { background-color: rgb(255, 209, 102); color: rgb(255, 255, 255); }

.noty_theme__sunset.noty_type__error { background-color: rgb(239, 71, 111); color: rgb(255, 255, 255); }

.noty_theme__sunset.noty_type__error .noty_progressbar { opacity: 0.4; }

.noty_theme__sunset.noty_type__info, .noty_theme__sunset.noty_type__information { background-color: rgb(17, 138, 178); color: rgb(255, 255, 255); }

.noty_theme__sunset.noty_type__info .noty_progressbar, .noty_theme__sunset.noty_type__information .noty_progressbar { opacity: 0.6; }

.noty_theme__sunset.noty_type__success { background-color: rgb(6, 214, 160); color: rgb(255, 255, 255); }

.noty_theme__bootstrap-v3.noty_bar { margin: 4px 0px; overflow: hidden; position: relative; border: 1px solid transparent; border-radius: 4px; }

.noty_theme__bootstrap-v3.noty_bar .noty_body { padding: 15px; }

.noty_theme__bootstrap-v3.noty_bar .noty_buttons { padding: 10px; }

.noty_theme__bootstrap-v3.noty_bar .noty_close_button { font-size: 21px; font-weight: 700; line-height: 1; color: rgb(0, 0, 0); text-shadow: rgb(255, 255, 255) 0px 1px 0px; opacity: 0.2; background: transparent; }

.noty_theme__bootstrap-v3.noty_bar .noty_close_button:hover { background: transparent; text-decoration: none; cursor: pointer; opacity: 0.5; }

.noty_theme__bootstrap-v3.noty_type__alert, .noty_theme__bootstrap-v3.noty_type__notification { background-color: rgb(255, 255, 255); color: inherit; }

.noty_theme__bootstrap-v3.noty_type__warning { background-color: rgb(252, 248, 227); color: rgb(138, 109, 59); border-color: rgb(250, 235, 204); }

.noty_theme__bootstrap-v3.noty_type__error { background-color: rgb(242, 222, 222); color: rgb(169, 68, 66); border-color: rgb(235, 204, 209); }

.noty_theme__bootstrap-v3.noty_type__info, .noty_theme__bootstrap-v3.noty_type__information { background-color: rgb(217, 237, 247); color: rgb(49, 112, 143); border-color: rgb(188, 232, 241); }

.noty_theme__bootstrap-v3.noty_type__success { background-color: rgb(223, 240, 216); color: rgb(60, 118, 61); border-color: rgb(214, 233, 198); }

.noty_theme__bootstrap-v4.noty_bar { margin: 4px 0px; overflow: hidden; position: relative; border: 1px solid transparent; border-radius: 0.25rem; }

.noty_theme__bootstrap-v4.noty_bar .noty_body { padding: 0.75rem 1.25rem; }

.noty_theme__bootstrap-v4.noty_bar .noty_buttons { padding: 10px; }

.noty_theme__bootstrap-v4.noty_bar .noty_close_button { font-size: 1.5rem; font-weight: 700; line-height: 1; color: rgb(0, 0, 0); text-shadow: rgb(255, 255, 255) 0px 1px 0px; opacity: 0.5; background: transparent; }

.noty_theme__bootstrap-v4.noty_bar .noty_close_button:hover { background: transparent; text-decoration: none; cursor: pointer; opacity: 0.75; }

.noty_theme__bootstrap-v4.noty_type__alert, .noty_theme__bootstrap-v4.noty_type__notification { background-color: rgb(255, 255, 255); color: inherit; }

.noty_theme__bootstrap-v4.noty_type__warning { background-color: rgb(252, 248, 227); color: rgb(138, 109, 59); border-color: rgb(250, 235, 204); }

.noty_theme__bootstrap-v4.noty_type__error { background-color: rgb(242, 222, 222); color: rgb(169, 68, 66); border-color: rgb(235, 204, 209); }

.noty_theme__bootstrap-v4.noty_type__info, .noty_theme__bootstrap-v4.noty_type__information { background-color: rgb(217, 237, 247); color: rgb(49, 112, 143); border-color: rgb(188, 232, 241); }

.noty_theme__bootstrap-v4.noty_type__success { background-color: rgb(223, 240, 216); color: rgb(60, 118, 61); border-color: rgb(214, 233, 198); }

.noty_theme__semanticui.noty_bar { margin: 4px 0px; overflow: hidden; position: relative; border: 1px solid transparent; font-size: 1em; border-radius: 0.285714rem; box-shadow: rgba(34, 36, 38, 0.22) 0px 0px 0px 1px inset, transparent 0px 0px 0px 0px; }

.noty_theme__semanticui.noty_bar .noty_body { padding: 1em 1.5em; line-height: 1.4285em; }

.noty_theme__semanticui.noty_bar .noty_buttons { padding: 10px; }

.noty_theme__semanticui.noty_type__alert, .noty_theme__semanticui.noty_type__notification { background-color: rgb(248, 248, 249); color: rgba(0, 0, 0, 0.87); }

.noty_theme__semanticui.noty_type__warning { background-color: rgb(255, 250, 243); color: rgb(87, 58, 8); box-shadow: rgb(201, 186, 155) 0px 0px 0px 1px inset, transparent 0px 0px 0px 0px; }

.noty_theme__semanticui.noty_type__error { background-color: rgb(255, 246, 246); color: rgb(159, 58, 56); box-shadow: rgb(224, 180, 180) 0px 0px 0px 1px inset, transparent 0px 0px 0px 0px; }

.noty_theme__semanticui.noty_type__info, .noty_theme__semanticui.noty_type__information { background-color: rgb(248, 255, 255); color: rgb(39, 111, 134); box-shadow: rgb(169, 213, 222) 0px 0px 0px 1px inset, transparent 0px 0px 0px 0px; }

.noty_theme__semanticui.noty_type__success { background-color: rgb(252, 255, 245); color: rgb(44, 102, 45); box-shadow: rgb(163, 194, 147) 0px 0px 0px 1px inset, transparent 0px 0px 0px 0px; }

.noty_theme__nest.noty_bar { margin: 0px 0px 15px; overflow: hidden; border-radius: 2px; position: relative; box-shadow: rgba(0, 0, 0, 0.098) 5px 4px 10px 0px; }

.noty_theme__nest.noty_bar .noty_body { padding: 10px; font-size: 14px; text-shadow: rgba(0, 0, 0, 0.1) 1px 1px 1px; }

.noty_theme__nest.noty_bar .noty_buttons { padding: 10px; }

.noty_layout .noty_theme__nest.noty_bar { z-index: 5; }

.noty_layout .noty_theme__nest.noty_bar:nth-child(2) { position: absolute; top: 0px; margin-top: 4px; margin-right: -4px; margin-left: 4px; z-index: 4; width: 100%; }

.noty_layout .noty_theme__nest.noty_bar:nth-child(3) { position: absolute; top: 0px; margin-top: 8px; margin-right: -8px; margin-left: 8px; z-index: 3; width: 100%; }

.noty_layout .noty_theme__nest.noty_bar:nth-child(4) { position: absolute; top: 0px; margin-top: 12px; margin-right: -12px; margin-left: 12px; z-index: 2; width: 100%; }

.noty_layout .noty_theme__nest.noty_bar:nth-child(5) { position: absolute; top: 0px; margin-top: 16px; margin-right: -16px; margin-left: 16px; z-index: 1; width: 100%; }

.noty_layout .noty_theme__nest.noty_bar:nth-child(n+6) { position: absolute; top: 0px; margin-top: 20px; margin-right: -20px; margin-left: 20px; z-index: -1; width: 100%; }

#noty_layout__bottomLeft .noty_theme__nest.noty_bar:nth-child(2), #noty_layout__topLeft .noty_theme__nest.noty_bar:nth-child(2) { margin-top: 4px; margin-left: -4px; margin-right: 4px; }

#noty_layout__bottomLeft .noty_theme__nest.noty_bar:nth-child(3), #noty_layout__topLeft .noty_theme__nest.noty_bar:nth-child(3) { margin-top: 8px; margin-left: -8px; margin-right: 8px; }

#noty_layout__bottomLeft .noty_theme__nest.noty_bar:nth-child(4), #noty_layout__topLeft .noty_theme__nest.noty_bar:nth-child(4) { margin-top: 12px; margin-left: -12px; margin-right: 12px; }

#noty_layout__bottomLeft .noty_theme__nest.noty_bar:nth-child(5), #noty_layout__topLeft .noty_theme__nest.noty_bar:nth-child(5) { margin-top: 16px; margin-left: -16px; margin-right: 16px; }

#noty_layout__bottomLeft .noty_theme__nest.noty_bar:nth-child(n+6), #noty_layout__topLeft .noty_theme__nest.noty_bar:nth-child(n+6) { margin-top: 20px; margin-left: -20px; margin-right: 20px; }

.noty_theme__nest.noty_type__alert, .noty_theme__nest.noty_type__notification { background-color: rgb(7, 59, 76); color: rgb(255, 255, 255); }

.noty_theme__nest.noty_type__alert .noty_progressbar, .noty_theme__nest.noty_type__notification .noty_progressbar { background-color: rgb(255, 255, 255); }

.noty_theme__nest.noty_type__warning { background-color: rgb(255, 209, 102); color: rgb(255, 255, 255); }

.noty_theme__nest.noty_type__error { background-color: rgb(239, 71, 111); color: rgb(255, 255, 255); }

.noty_theme__nest.noty_type__error .noty_progressbar { opacity: 0.4; }

.noty_theme__nest.noty_type__info, .noty_theme__nest.noty_type__information { background-color: rgb(17, 138, 178); color: rgb(255, 255, 255); }

.noty_theme__nest.noty_type__info .noty_progressbar, .noty_theme__nest.noty_type__information .noty_progressbar { opacity: 0.6; }

.noty_theme__nest.noty_type__success { background-color: rgb(6, 214, 160); color: rgb(255, 255, 255); }

</style></head><body><div></div>
<script>
(function() {
  document.addEventListener('DOMContentLoaded', function() {
    // 1. Audio Player Control
    var audio = document.getElementById('music');
    var btnMusic = document.getElementById('btnMusic');
    var isPlaying = false;

    function playAudio() {
      if (audio) {
        audio.play().then(function() {
          isPlaying = true;
          if (btnMusic) btnMusic.classList.add('playing');
        }).catch(function(e) {
          console.log('Audio playback notice:', e);
        });
      }
    }

    function pauseAudio() {
      if (audio) {
        audio.pause();
        isPlaying = false;
        if (btnMusic) btnMusic.classList.remove('playing');
      }
    }

    if (btnMusic) {
      btnMusic.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        if (isPlaying) {
          pauseAudio();
        } else {
          playAudio();
        }
      });
    }

    // 2. Open Invitation Button
    var btnOpen = document.querySelectorAll('.btn-open-invitation, #buka-undangan, .btn-open');
    var canvas = document.querySelector('.canvas');
    var coverSlide = document.querySelector('.satumomen_cover');
    var slides = Array.from(document.querySelectorAll('.satumomen_slide'));
    var currentIndex = 0;
    var isScrollLayout = document.querySelector('.themes-scroll') || document.querySelector('.container-scroll') || slides.length === 0;

    btnOpen.forEach(function(btn) {
      btn.addEventListener('click', function(e) {
        e.preventDefault();
        if (canvas) canvas.classList.remove('not-open');
        playAudio();
        
        if (!isScrollLayout && slides.length > 1) {
          goToSlide(1);
        } else if (isScrollLayout) {
          var cover = document.querySelector('.cover') || document.querySelector('.satumomen_cover');
          if (cover && cover.nextElementSibling) {
            cover.nextElementSibling.scrollIntoView({ behavior: 'smooth' });
          }
        }
      });
    });

    // 3. Slide Navigation System for Slider Themes
    function goToSlide(index) {
      if (isScrollLayout) return;
      if (index < 0 || index >= slides.length) return;
      currentIndex = index;
      slides.forEach(function(sl, idx) {
        if (idx === currentIndex) {
          sl.style.display = 'block';
          sl.classList.add('active');
          var animatedElements = sl.querySelectorAll('.animate__animated');
          animatedElements.forEach(function(el) {
            el.style.visibility = 'visible';
          });
        } else {
          sl.style.display = 'none';
          sl.classList.remove('active');
        }
      });
      updateSlideIndicators();
    }

    if (!isScrollLayout && slides.length > 1) {
      // Touch Swipe & Scroll navigation
      var touchStartY = 0;
      var touchStartX = 0;
      var workspace = document.getElementById('workspace-container') || document.body;

      workspace.addEventListener('touchstart', function(e) {
        touchStartY = e.changedTouches[0].screenY;
        touchStartX = e.changedTouches[0].screenX;
      }, { passive: true });

      workspace.addEventListener('touchend', function(e) {
        var diffY = touchStartY - e.changedTouches[0].screenY;
        var diffX = touchStartX - e.changedTouches[0].screenX;
        if (Math.abs(diffY) > 50) {
          if (diffY > 0 && currentIndex < slides.length - 1) {
            goToSlide(currentIndex + 1);
          } else if (diffY < 0 && currentIndex > 0) {
            goToSlide(currentIndex - 1);
          }
        } else if (Math.abs(diffX) > 50) {
          if (diffX > 0 && currentIndex < slides.length - 1) {
            goToSlide(currentIndex + 1);
          } else if (diffX < 0 && currentIndex > 0) {
            goToSlide(currentIndex - 1);
          }
        }
      }, { passive: true });

      // Keyboard navigation
      document.addEventListener('keydown', function(e) {
        if (e.key === 'ArrowDown' || e.key === 'ArrowRight' || e.key === 'PageDown') {
          if (currentIndex < slides.length - 1) goToSlide(currentIndex + 1);
        } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft' || e.key === 'PageUp') {
          if (currentIndex > 0) goToSlide(currentIndex - 1);
        }
      });

      // Slide Navigation Controls Bar
      var navContainer = document.createElement('div');
      navContainer.id = 'themeSlideNav';
      navContainer.style.cssText = 'position:fixed;bottom:18px;left:50%;transform:translateX(-50%);z-index:9999;display:flex;align-items:center;gap:8px;background:rgba(0,0,0,0.65);backdrop-filter:blur(10px);padding:6px 14px;border-radius:24px;border:1px solid rgba(255,255,255,0.18);box-shadow:0 8px 32px rgba(0,0,0,0.4);';
      
      var btnPrev = document.createElement('button');
      btnPrev.innerHTML = '&#8592;';
      btnPrev.style.cssText = 'background:none;border:none;color:#fff;font-size:16px;cursor:pointer;padding:2px 8px;line-height:1;border-radius:50%;transition:background 0.2s;';
      btnPrev.addEventListener('click', function() { if (currentIndex > 0) goToSlide(currentIndex - 1); });
      navContainer.appendChild(btnPrev);

      var slideLabel = document.createElement('span');
      slideLabel.id = 'slideCounter';
      slideLabel.style.cssText = 'color:#fff;font-size:12px;font-weight:700;letter-spacing:0.05em;min-width:42px;text-align:center;font-family:sans-serif;';
      navContainer.appendChild(slideLabel);

      var btnNext = document.createElement('button');
      btnNext.innerHTML = '&#8594;';
      btnNext.style.cssText = 'background:none;border:none;color:#fff;font-size:16px;cursor:pointer;padding:2px 8px;line-height:1;border-radius:50%;transition:background 0.2s;';
      btnNext.addEventListener('click', function() { if (currentIndex < slides.length - 1) goToSlide(currentIndex + 1); });
      navContainer.appendChild(btnNext);

      document.body.appendChild(navContainer);

      function updateSlideIndicators() {
        if (slideLabel) {
          slideLabel.innerText = (currentIndex + 1) + ' / ' + slides.length;
        }
      }

      // Initial active slide
      goToSlide(0);
    }

    // 4. Autoplay Feature
    var btnAutoplay = document.getElementById('btnAutoplay');
    var autoPlayTimer = null;
    var isAutoPlaying = false;

    if (btnAutoplay && !isScrollLayout && slides.length > 1) {
      btnAutoplay.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        if (isAutoPlaying) {
          clearInterval(autoPlayTimer);
          isAutoPlaying = false;
          btnAutoplay.classList.remove('playing');
        } else {
          isAutoPlaying = true;
          btnAutoplay.classList.add('playing');
          autoPlayTimer = setInterval(function() {
            if (currentIndex < slides.length - 1) {
              goToSlide(currentIndex + 1);
            } else {
              goToSlide(0);
            }
          }, 5000);
        }
      });
    }

    // 5. Copy Rekening / Account Number
    var copyButtons = document.querySelectorAll('.clipboard, [data-text], [data-clipboard-text], .btn-copy');
    copyButtons.forEach(function(btn) {
      btn.addEventListener('click', function(e) {
        e.preventDefault();
        var text = this.getAttribute('data-clipboard-text') || this.getAttribute('data-text') || this.innerText;
        if (text) {
          var cleanNum = text.replace(/[^0-9]/g, '') || text;
          navigator.clipboard.writeText(cleanNum).then(function() {
            showToast('Nomor rekening berhasil disalin: ' + cleanNum);
          }).catch(function() {
            var input = document.createElement('input');
            input.value = cleanNum;
            document.body.appendChild(input);
            input.select();
            document.execCommand('copy');
            document.body.removeChild(input);
            showToast('Nomor rekening berhasil disalin: ' + cleanNum);
          });
        }
      });
    });

    // 6. Toast Notification
    function showToast(msg) {
      var toast = document.createElement('div');
      toast.innerText = msg;
      toast.style.cssText = 'position:fixed;top:24px;left:50%;transform:translateX(-50%);background:#10b981;color:#fff;padding:10px 22px;border-radius:24px;font-size:13px;font-weight:bold;z-index:999999;box-shadow:0 8px 24px rgba(0,0,0,0.3);font-family:sans-serif;letter-spacing:0.02em;';
      document.body.appendChild(toast);
      setTimeout(function() {
        toast.style.opacity = '0';
        toast.style.transition = 'opacity 0.4s';
        setTimeout(function() { if (toast.parentNode) toast.parentNode.removeChild(toast); }, 400);
      }, 2500);
    }

    // 7. Countdown Timer
    var countdownContainers = document.querySelectorAll('.satumomen_countdown, #countdown, .countdown-wrapper, .countdown');
    if (countdownContainers.length > 0) {
      var targetDateStr = '<?php echo isset($clock) ? $clock : "2026-12-26 08:00"; ?>'.replace(/\//g, '-');
      var targetDate = new Date(targetDateStr).getTime();
      if (!isNaN(targetDate)) {
        function updateTimer() {
          var now = new Date().getTime();
          var distance = targetDate - now;
          if (distance < 0) distance = 0;
          var days = Math.floor(distance / (1000 * 60 * 60 * 24));
          var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
          var seconds = Math.floor((distance % (1000 * 60)) / 1000);

          var dayEls = document.querySelectorAll('.satumomen_countdown_days, .days, #days, .hari');
          var hourEls = document.querySelectorAll('.satumomen_countdown_hours, .hours, #hours, .jam');
          var minEls = document.querySelectorAll('.satumomen_countdown_minutes, .minutes, #minutes, .menit');
          var secEls = document.querySelectorAll('.satumomen_countdown_seconds, .seconds, #seconds, .detik');

          dayEls.forEach(function(el) { el.innerText = days < 10 ? '0' + days : days; });
          hourEls.forEach(function(el) { el.innerText = hours < 10 ? '0' + hours : hours; });
          minEls.forEach(function(el) { el.innerText = minutes < 10 ? '0' + minutes : minutes; });
          secEls.forEach(function(el) { el.innerText = seconds < 10 ? '0' + seconds : seconds; });
        }
        setInterval(updateTimer, 1000);
        updateTimer();
      }
    }

    // 8. Modals Handlers
    var btnRsvps = document.querySelectorAll('.btn-rsvp, [data-target="#rsvpModal"]');
    var rsvpModal = document.getElementById('rsvpModal');
    var qrModal = document.getElementById('qrModal');
    var btnQr = document.getElementById('btnQrModal');
    var closeBtns = document.querySelectorAll('.btn-close, .modal-backdrop');

    btnRsvps.forEach(function(b) {
      b.addEventListener('click', function(e) {
        e.preventDefault();
        if (rsvpModal) {
          rsvpModal.style.display = 'block';
          rsvpModal.classList.add('show');
        }
      });
    });

    if (btnQr && qrModal) {
      btnQr.addEventListener('click', function(e) {
        e.preventDefault();
        qrModal.style.display = 'block';
        qrModal.classList.add('show');
      });
    }

    closeBtns.forEach(function(cb) {
      cb.addEventListener('click', function(e) {
        e.preventDefault();
        if (rsvpModal) { rsvpModal.style.display = 'none'; rsvpModal.classList.remove('show'); }
        if (qrModal) { qrModal.style.display = 'none'; qrModal.classList.remove('show'); }
      });
    });
  });
})();
</script>

</body></html></template></browser-mcp-container><merlin-floating-cta style="overflow: visible; position: relative; width: 0px; height: 0px; display: block;"><template shadowmode="open"><html style="position: absolute; top: 0px; left: 0px;"><head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8"><style type="text/css">
@charset "utf-8";

@import url("https://fonts.googleapis.com/css2?family=Carattere&family=Modern+Antiqua&display=swap");

:root { --inv-bg: #620404; --inv-base: #ffffff; --inv-accent: #BC9A53; --inv-border: #BC9A53; --font-base: 'Modern Antiqua', cursive; --font-accent: 'Modern Antiqua', cursive; --font-latin: 'Carattere', cursive; --menu-bg: #2F0101; --menu-inactive: #FFF7E1; --menu-active: #BC9A53; --btn-color: #ffffff; }

.menu-item.is-active { color: var(--menu-bg) !important; background-color: var(--menu-active) !important; }

</style><style type="text/css">
@charset "utf-8";

@import url("/fonts/brittany_signature/BrittanySignature.css");

@import url("/fonts/photograph_signature/fonts.css");

@import url("/fonts/heatwood/Heatwood.css");

.font-brittany-signature { font-family: "Brittany Signature"; line-height: 1.6 !important; }

.font-photograph-signature { font-family: "Photograph Signature"; line-height: 1.6 !important; }

.font-heatwood { font-family: Heatwood; line-height: 3 !important; }

#YTMusic { display: block; }

</style><style type="text/css">
@charset "utf-8";

.noty_layout_mixin, #noty_layout__top, #noty_layout__topLeft, #noty_layout__topCenter, #noty_layout__topRight, #noty_layout__bottom, #noty_layout__bottomLeft, #noty_layout__bottomCenter, #noty_layout__bottomRight, #noty_layout__center, #noty_layout__centerLeft, #noty_layout__centerRight { position: fixed; margin: 0px; padding: 0px; z-index: 9999999; transform: translateZ(0px) scale(1, 1); backface-visibility: hidden; -webkit-font-smoothing: subpixel-antialiased; filter: blur(0px); max-width: 90%; }

#noty_layout__top { top: 0px; left: 5%; width: 90%; }

#noty_layout__topLeft { top: 20px; left: 20px; width: 325px; }

#noty_layout__topCenter { top: 5%; left: 50%; width: 325px; transform: translate(calc(-50% - 0.5px)) translateZ(0px) scale(1, 1); }

#noty_layout__topRight { top: 20px; right: 20px; width: 325px; }

#noty_layout__bottom { bottom: 0px; left: 5%; width: 90%; }

#noty_layout__bottomLeft { bottom: 20px; left: 20px; width: 325px; }

#noty_layout__bottomCenter { bottom: 5%; left: 50%; width: 325px; transform: translate(calc(-50% - 0.5px)) translateZ(0px) scale(1, 1); }

#noty_layout__bottomRight { bottom: 20px; right: 20px; width: 325px; }

#noty_layout__center { top: 50%; left: 50%; width: 325px; transform: translate(calc(-50% - 0.5px), calc(-50% - 0.5px)) translateZ(0px) scale(1, 1); }

#noty_layout__centerLeft { top: 50%; left: 20px; width: 325px; transform: translate(0px, calc(-50% - 0.5px)) translateZ(0px) scale(1, 1); }

#noty_layout__centerRight { top: 50%; right: 20px; width: 325px; transform: translate(0px, calc(-50% - 0.5px)) translateZ(0px) scale(1, 1); }

.noty_progressbar { display: none; }

.noty_has_timeout .noty_progressbar { display: block; position: absolute; left: 0px; bottom: 0px; height: 3px; width: 100%; background-color: rgb(100, 100, 100); opacity: 0.2; }

.noty_bar { backface-visibility: hidden; transform: translate(0px, 0px) scale(1, 1); -webkit-font-smoothing: subpixel-antialiased; overflow: hidden; }

.noty_effects_open { opacity: 0; transform: translate(50%); animation: 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55) 0s 1 normal forwards running noty_anim_in; }

.noty_effects_close { animation: 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55) 0s 1 normal forwards running noty_anim_out; }

.noty_fix_effects_height { animation: 75ms ease-out 0s 1 normal none running noty_anim_height; }

.noty_close_with_click { cursor: pointer; }

.noty_close_button { position: absolute; top: 2px; right: 2px; font-weight: bold; width: 20px; height: 20px; text-align: center; line-height: 20px; background-color: rgba(0, 0, 0, 0.05); border-radius: 2px; cursor: pointer; transition: 0.2s ease-out; }

.noty_close_button:hover { background-color: rgba(0, 0, 0, 0.1); }

.noty_modal { position: fixed; width: 100%; height: 100%; background-color: rgb(0, 0, 0); z-index: 10000; opacity: 0.3; left: 0px; top: 0px; }

.noty_modal.noty_modal_open { opacity: 0; animation: 0.3s ease-out 0s 1 normal none running noty_modal_in; }

.noty_modal.noty_modal_close { animation: 0.3s ease-out 0s 1 normal forwards running noty_modal_out; }

@keyframes noty_modal_in { 
  100% { opacity: 0.3; }
}

@keyframes noty_modal_out { 
  100% { opacity: 0; }
}

@keyframes noty_modal_out { 
  100% { opacity: 0; }
}

@keyframes noty_anim_in { 
  100% { transform: translate(0px); opacity: 1; }
}

@keyframes noty_anim_out { 
  100% { transform: translate(50%); opacity: 0; }
}

@keyframes noty_anim_height { 
  100% { height: 0px; }
}

.noty_theme__relax.noty_bar { margin: 4px 0px; overflow: hidden; border-radius: 2px; position: relative; }

.noty_theme__relax.noty_bar .noty_body { padding: 10px; }

.noty_theme__relax.noty_bar .noty_buttons { border-top: 1px solid rgb(231, 231, 231); padding: 5px 10px; }

.noty_theme__relax.noty_type__alert, .noty_theme__relax.noty_type__notification { background-color: rgb(255, 255, 255); border: 1px solid rgb(222, 222, 222); color: rgb(68, 68, 68); }

.noty_theme__relax.noty_type__warning { background-color: rgb(255, 234, 168); border: 1px solid rgb(255, 194, 55); color: rgb(130, 98, 0); }

.noty_theme__relax.noty_type__warning .noty_buttons { border-color: rgb(223, 170, 48); }

.noty_theme__relax.noty_type__error { background-color: rgb(255, 129, 129); border: 1px solid rgb(226, 83, 83); color: rgb(255, 255, 255); }

.noty_theme__relax.noty_type__error .noty_buttons { border-color: darkred; }

.noty_theme__relax.noty_type__info, .noty_theme__relax.noty_type__information { background-color: rgb(120, 197, 231); border: 1px solid rgb(59, 173, 214); color: rgb(255, 255, 255); }

.noty_theme__relax.noty_type__info .noty_buttons, .noty_theme__relax.noty_type__information .noty_buttons { border-color: rgb(11, 144, 196); }

.noty_theme__relax.noty_type__success { background-color: rgb(188, 245, 188); border: 1px solid rgb(124, 221, 119); color: darkgreen; }

.noty_theme__relax.noty_type__success .noty_buttons { border-color: rgb(80, 194, 78); }

.noty_theme__metroui.noty_bar { margin: 4px 0px; overflow: hidden; position: relative; box-shadow: rgba(0, 0, 0, 0.298) 0px 0px 5px 0px; }

.noty_theme__metroui.noty_bar .noty_progressbar { position: absolute; left: 0px; bottom: 0px; height: 3px; width: 100%; background-color: rgb(0, 0, 0); opacity: 0.2; }

.noty_theme__metroui.noty_bar .noty_body { padding: 1.25em; font-size: 14px; }

.noty_theme__metroui.noty_bar .noty_buttons { padding: 0px 10px 0.5em; }

.noty_theme__metroui.noty_type__alert, .noty_theme__metroui.noty_type__notification { background-color: rgb(255, 255, 255); color: rgb(29, 29, 29); }

.noty_theme__metroui.noty_type__warning { background-color: rgb(250, 104, 0); color: rgb(255, 255, 255); }

.noty_theme__metroui.noty_type__error { background-color: rgb(206, 53, 44); color: rgb(255, 255, 255); }

.noty_theme__metroui.noty_type__info, .noty_theme__metroui.noty_type__information { background-color: rgb(27, 161, 226); color: rgb(255, 255, 255); }

.noty_theme__metroui.noty_type__success { background-color: rgb(96, 169, 23); color: rgb(255, 255, 255); }

.noty_theme__mint.noty_bar { margin: 4px 0px; overflow: hidden; border-radius: 2px; position: relative; }

.noty_theme__mint.noty_bar .noty_body { padding: 10px; font-size: 14px; }

.noty_theme__mint.noty_bar .noty_buttons { padding: 10px; }

.noty_theme__mint.noty_type__alert, .noty_theme__mint.noty_type__notification { background-color: rgb(255, 255, 255); border-bottom: 1px solid rgb(209, 209, 209); color: rgb(47, 47, 47); }

.noty_theme__mint.noty_type__warning { background-color: rgb(255, 174, 66); border-bottom: 1px solid rgb(232, 159, 60); color: rgb(255, 255, 255); }

.noty_theme__mint.noty_type__error { background-color: rgb(222, 99, 111); border-bottom: 1px solid rgb(202, 90, 101); color: rgb(255, 255, 255); }

.noty_theme__mint.noty_type__info, .noty_theme__mint.noty_type__information { background-color: rgb(127, 126, 255); border-bottom: 1px solid rgb(116, 115, 232); color: rgb(255, 255, 255); }

.noty_theme__mint.noty_type__success { background-color: rgb(175, 199, 101); border-bottom: 1px solid rgb(160, 181, 92); color: rgb(255, 255, 255); }

.noty_theme__sunset.noty_bar { margin: 4px 0px; overflow: hidden; border-radius: 2px; position: relative; }

.noty_theme__sunset.noty_bar .noty_body { padding: 10px; font-size: 14px; text-shadow: rgba(0, 0, 0, 0.1) 1px 1px 1px; }

.noty_theme__sunset.noty_bar .noty_buttons { padding: 10px; }

.noty_theme__sunset.noty_type__alert, .noty_theme__sunset.noty_type__notification { background-color: rgb(7, 59, 76); color: rgb(255, 255, 255); }

.noty_theme__sunset.noty_type__alert .noty_progressbar, .noty_theme__sunset.noty_type__notification .noty_progressbar { background-color: rgb(255, 255, 255); }

.noty_theme__sunset.noty_type__warning { background-color: rgb(255, 209, 102); color: rgb(255, 255, 255); }

.noty_theme__sunset.noty_type__error { background-color: rgb(239, 71, 111); color: rgb(255, 255, 255); }

.noty_theme__sunset.noty_type__error .noty_progressbar { opacity: 0.4; }

.noty_theme__sunset.noty_type__info, .noty_theme__sunset.noty_type__information { background-color: rgb(17, 138, 178); color: rgb(255, 255, 255); }

.noty_theme__sunset.noty_type__info .noty_progressbar, .noty_theme__sunset.noty_type__information .noty_progressbar { opacity: 0.6; }

.noty_theme__sunset.noty_type__success { background-color: rgb(6, 214, 160); color: rgb(255, 255, 255); }

.noty_theme__bootstrap-v3.noty_bar { margin: 4px 0px; overflow: hidden; position: relative; border: 1px solid transparent; border-radius: 4px; }

.noty_theme__bootstrap-v3.noty_bar .noty_body { padding: 15px; }

.noty_theme__bootstrap-v3.noty_bar .noty_buttons { padding: 10px; }

.noty_theme__bootstrap-v3.noty_bar .noty_close_button { font-size: 21px; font-weight: 700; line-height: 1; color: rgb(0, 0, 0); text-shadow: rgb(255, 255, 255) 0px 1px 0px; opacity: 0.2; background: transparent; }

.noty_theme__bootstrap-v3.noty_bar .noty_close_button:hover { background: transparent; text-decoration: none; cursor: pointer; opacity: 0.5; }

.noty_theme__bootstrap-v3.noty_type__alert, .noty_theme__bootstrap-v3.noty_type__notification { background-color: rgb(255, 255, 255); color: inherit; }

.noty_theme__bootstrap-v3.noty_type__warning { background-color: rgb(252, 248, 227); color: rgb(138, 109, 59); border-color: rgb(250, 235, 204); }

.noty_theme__bootstrap-v3.noty_type__error { background-color: rgb(242, 222, 222); color: rgb(169, 68, 66); border-color: rgb(235, 204, 209); }

.noty_theme__bootstrap-v3.noty_type__info, .noty_theme__bootstrap-v3.noty_type__information { background-color: rgb(217, 237, 247); color: rgb(49, 112, 143); border-color: rgb(188, 232, 241); }

.noty_theme__bootstrap-v3.noty_type__success { background-color: rgb(223, 240, 216); color: rgb(60, 118, 61); border-color: rgb(214, 233, 198); }

.noty_theme__bootstrap-v4.noty_bar { margin: 4px 0px; overflow: hidden; position: relative; border: 1px solid transparent; border-radius: 0.25rem; }

.noty_theme__bootstrap-v4.noty_bar .noty_body { padding: 0.75rem 1.25rem; }

.noty_theme__bootstrap-v4.noty_bar .noty_buttons { padding: 10px; }

.noty_theme__bootstrap-v4.noty_bar .noty_close_button { font-size: 1.5rem; font-weight: 700; line-height: 1; color: rgb(0, 0, 0); text-shadow: rgb(255, 255, 255) 0px 1px 0px; opacity: 0.5; background: transparent; }

.noty_theme__bootstrap-v4.noty_bar .noty_close_button:hover { background: transparent; text-decoration: none; cursor: pointer; opacity: 0.75; }

.noty_theme__bootstrap-v4.noty_type__alert, .noty_theme__bootstrap-v4.noty_type__notification { background-color: rgb(255, 255, 255); color: inherit; }

.noty_theme__bootstrap-v4.noty_type__warning { background-color: rgb(252, 248, 227); color: rgb(138, 109, 59); border-color: rgb(250, 235, 204); }

.noty_theme__bootstrap-v4.noty_type__error { background-color: rgb(242, 222, 222); color: rgb(169, 68, 66); border-color: rgb(235, 204, 209); }

.noty_theme__bootstrap-v4.noty_type__info, .noty_theme__bootstrap-v4.noty_type__information { background-color: rgb(217, 237, 247); color: rgb(49, 112, 143); border-color: rgb(188, 232, 241); }

.noty_theme__bootstrap-v4.noty_type__success { background-color: rgb(223, 240, 216); color: rgb(60, 118, 61); border-color: rgb(214, 233, 198); }

.noty_theme__semanticui.noty_bar { margin: 4px 0px; overflow: hidden; position: relative; border: 1px solid transparent; font-size: 1em; border-radius: 0.285714rem; box-shadow: rgba(34, 36, 38, 0.22) 0px 0px 0px 1px inset, transparent 0px 0px 0px 0px; }

.noty_theme__semanticui.noty_bar .noty_body { padding: 1em 1.5em; line-height: 1.4285em; }

.noty_theme__semanticui.noty_bar .noty_buttons { padding: 10px; }

.noty_theme__semanticui.noty_type__alert, .noty_theme__semanticui.noty_type__notification { background-color: rgb(248, 248, 249); color: rgba(0, 0, 0, 0.87); }

.noty_theme__semanticui.noty_type__warning { background-color: rgb(255, 250, 243); color: rgb(87, 58, 8); box-shadow: rgb(201, 186, 155) 0px 0px 0px 1px inset, transparent 0px 0px 0px 0px; }

.noty_theme__semanticui.noty_type__error { background-color: rgb(255, 246, 246); color: rgb(159, 58, 56); box-shadow: rgb(224, 180, 180) 0px 0px 0px 1px inset, transparent 0px 0px 0px 0px; }

.noty_theme__semanticui.noty_type__info, .noty_theme__semanticui.noty_type__information { background-color: rgb(248, 255, 255); color: rgb(39, 111, 134); box-shadow: rgb(169, 213, 222) 0px 0px 0px 1px inset, transparent 0px 0px 0px 0px; }

.noty_theme__semanticui.noty_type__success { background-color: rgb(252, 255, 245); color: rgb(44, 102, 45); box-shadow: rgb(163, 194, 147) 0px 0px 0px 1px inset, transparent 0px 0px 0px 0px; }

.noty_theme__nest.noty_bar { margin: 0px 0px 15px; overflow: hidden; border-radius: 2px; position: relative; box-shadow: rgba(0, 0, 0, 0.098) 5px 4px 10px 0px; }

.noty_theme__nest.noty_bar .noty_body { padding: 10px; font-size: 14px; text-shadow: rgba(0, 0, 0, 0.1) 1px 1px 1px; }

.noty_theme__nest.noty_bar .noty_buttons { padding: 10px; }

.noty_layout .noty_theme__nest.noty_bar { z-index: 5; }

.noty_layout .noty_theme__nest.noty_bar:nth-child(2) { position: absolute; top: 0px; margin-top: 4px; margin-right: -4px; margin-left: 4px; z-index: 4; width: 100%; }

.noty_layout .noty_theme__nest.noty_bar:nth-child(3) { position: absolute; top: 0px; margin-top: 8px; margin-right: -8px; margin-left: 8px; z-index: 3; width: 100%; }

.noty_layout .noty_theme__nest.noty_bar:nth-child(4) { position: absolute; top: 0px; margin-top: 12px; margin-right: -12px; margin-left: 12px; z-index: 2; width: 100%; }

.noty_layout .noty_theme__nest.noty_bar:nth-child(5) { position: absolute; top: 0px; margin-top: 16px; margin-right: -16px; margin-left: 16px; z-index: 1; width: 100%; }

.noty_layout .noty_theme__nest.noty_bar:nth-child(n+6) { position: absolute; top: 0px; margin-top: 20px; margin-right: -20px; margin-left: 20px; z-index: -1; width: 100%; }

#noty_layout__bottomLeft .noty_theme__nest.noty_bar:nth-child(2), #noty_layout__topLeft .noty_theme__nest.noty_bar:nth-child(2) { margin-top: 4px; margin-left: -4px; margin-right: 4px; }

#noty_layout__bottomLeft .noty_theme__nest.noty_bar:nth-child(3), #noty_layout__topLeft .noty_theme__nest.noty_bar:nth-child(3) { margin-top: 8px; margin-left: -8px; margin-right: 8px; }

#noty_layout__bottomLeft .noty_theme__nest.noty_bar:nth-child(4), #noty_layout__topLeft .noty_theme__nest.noty_bar:nth-child(4) { margin-top: 12px; margin-left: -12px; margin-right: 12px; }

#noty_layout__bottomLeft .noty_theme__nest.noty_bar:nth-child(5), #noty_layout__topLeft .noty_theme__nest.noty_bar:nth-child(5) { margin-top: 16px; margin-left: -16px; margin-right: 16px; }

#noty_layout__bottomLeft .noty_theme__nest.noty_bar:nth-child(n+6), #noty_layout__topLeft .noty_theme__nest.noty_bar:nth-child(n+6) { margin-top: 20px; margin-left: -20px; margin-right: 20px; }

.noty_theme__nest.noty_type__alert, .noty_theme__nest.noty_type__notification { background-color: rgb(7, 59, 76); color: rgb(255, 255, 255); }

.noty_theme__nest.noty_type__alert .noty_progressbar, .noty_theme__nest.noty_type__notification .noty_progressbar { background-color: rgb(255, 255, 255); }

.noty_theme__nest.noty_type__warning { background-color: rgb(255, 209, 102); color: rgb(255, 255, 255); }

.noty_theme__nest.noty_type__error { background-color: rgb(239, 71, 111); color: rgb(255, 255, 255); }

.noty_theme__nest.noty_type__error .noty_progressbar { opacity: 0.4; }

.noty_theme__nest.noty_type__info, .noty_theme__nest.noty_type__information { background-color: rgb(17, 138, 178); color: rgb(255, 255, 255); }

.noty_theme__nest.noty_type__info .noty_progressbar, .noty_theme__nest.noty_type__information .noty_progressbar { opacity: 0.6; }

.noty_theme__nest.noty_type__success { background-color: rgb(6, 214, 160); color: rgb(255, 255, 255); }

</style></head><body><div></div></div></body></html></template></merlin-floating-cta><div id="noty_layout__topCenter" class="noty_layout"><div id="noty_bar_a5c31af4-ad37-4d21-afe4-91c476137d6c" class="noty_bar noty_type__error noty_theme__relax noty_close_with_click noty_has_timeout"><div class="noty_body">Too Many Attempts.</div><div class="noty_progressbar" style="transition: width 4000ms linear; width: 0%;"></div></div></div></body></html>
