<!DOCTYPE html>
<?php
/**
 * Theme Template: Phinisi Maroon
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

@import url("/fonts/e111viva/style.css");

@import url("/fonts/against/style.css");

@import url("https://fonts.googleapis.com/css2?family=Marcellus&display=swap");

:root { --inv-bg: #f8f8f6; --inv-base: #000000; --inv-accent: #800000; --inv-border: #d8bbb7; --menu-bg: #800000; --menu-inactive: #ffffff; --menu-active: #d0a461; --btn-color: #ffffff; --font-base: "Marcellus", serif; --font-accent: "Against", sans-serif; --font-latin: "English111 Vivace BT", cursive; }

@keyframes wave-left { 
  0% { transform: rotate(-3deg); }
  100% { transform: rotate(4deg); }
}

@keyframes wave-right { 
  0% { transform: rotate(3deg); }
  100% { transform: rotate(-4deg); }
}

.wave-left img { animation: 4s ease-in-out 0s infinite alternate none running wave-left; }

.wave-right img { animation: 4s ease-in-out 0s infinite alternate none running wave-right; }

.frame-couple::after { content: ""; position: absolute; width: 100%; height: 100%; background-image: url("/themes/phinisi-maroon/frame-couple.webp"); background-size: contain; background-repeat: no-repeat; background-position: center center; z-index: 1; }

.frame-mempelai::after { content: ""; position: absolute; width: 100%; height: 100%; background-image: url("/themes/phinisi-maroon/frame-mempelai.webp"); background-size: contain; background-repeat: no-repeat; background-position: center center; z-index: 1; }

.editor .frame-mempelai::after, .editor .frame-couple::after { z-index: -1; }

#satuMomen::before { content: ""; background-image: url("/themes/phinisi/bg-desktop.webp"); background-size: cover; background-position: center center; position: fixed; inset: 0px; z-index: -1; }

.cover .frame { display: none; }

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
  
    <meta name="title" content="Wedding  - Phinisi Maroon">
    <meta name="description" content="Tema undangan adat phinisi makassar warna maroon coklat art - Undangan Online: Undangan digital modern untuk pernikahan dan acara spesial lainnya.">
    <meta itemprop="image" content="http://app.kitaberdua.com/themes/phinisi-maroon/phinisi-maroon.webp">
        <link rel="icon" type="image/x-icon" href="https://assets.satumomen.com/images/media/6108-media-1682180901.png">
        <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website">
    <meta property="og:url" content="http://app.kitaberdua.com/preview/phinisi-maroon">
    <meta property="og:title" content="Wedding  - Phinisi Maroon">
    <meta property="og:description" content="Tema undangan adat phinisi makassar warna maroon coklat art - Undangan Online: Undangan digital modern untuk pernikahan dan acara spesial lainnya.">
    <meta property="og:image" content="http://app.kitaberdua.com/themes/phinisi-maroon/phinisi-maroon.webp">

    <link rel="preconnect" href="https://fonts.googleapis.com/">
    <link rel="preconnect" href="https://fonts.gstatic.com/" crossorigin="">

        
    
    
    
    
                                                
    <!-- css -->
    <link rel="stylesheet" href="https://app.kitaberdua.com/plugins/animate.css@4.1.1/animate.min.css">
    <link rel="stylesheet" type="text/css" href="https://unpkg.com/@phosphor-icons/web@2.0.3/src/fill/style.css">

    <link rel="preload" as="style" href="https://assets.satumomen.com/build/assets/bootstrap-vCaDZZbr.css"><style type="text/css">
@charset "utf-8";

body { background-color: var(--inv-bg); }

#satuMomen { color: var(--inv-base); font-family: var(--font-base); display: none; }

.relative { position: relative; }

.container-mobile { background-color: var(--inv-bg); background-position: center center; background-repeat: no-repeat; background-size: 100% 100%; overflow: hidden; width: 100%; max-width: 500px; transition: 0.5s ease-in-out; margin-left: auto; margin-right: auto; }

.satumomen_track { height: 100%; width: 100%; }

.satumomen_track .satumomen_list { padding: 0px; margin: 0px; list-style: none; height: 100%; width: 100%; }

.satumomen_track .satumomen_slide, .satumomen_track .satumomen_cover { height: 100%; width: 100%; left: 0px; right: 0px; }

.satumomen_track .satumomen_slide { position: relative; }

.satumomen_track .satumomen_slide .cover { height: 100vh; }

.satumomen_track .satumomen_cover { z-index: 4; }

.satumomen_track .satumomen_cover .cover { position: absolute; inset: 0px; height: 100%; }

.satumomen_track .workspace { position: relative; width: 500px; max-width: 100%; }

.satumomen_track .content { position: relative; z-index: 1; padding: 30px; min-height: 680px; display: inline-table; }

.satumomen_track .cover .content { min-height: auto; }

@media (min-width: 425px) {
  .content { min-height: 780px; }
  .satumomen_cover .content { min-height: auto; }
}

.font-accent { font-family: var(--font-accent); }

.font-latin { font-family: var(--font-latin); font-size: 200%; }

.color-accent { color: var(--inv-accent); }

.floating-action { max-width: 500px; margin: auto; position: fixed; right: 20px; bottom: 4.5rem; gap: 12px; z-index: 3; }

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

.lightbox-wrapper { max-width: 100%; margin: auto; z-index: 9; }

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

.rsvp-placeholder { position: relative; max-height: 600px; overflow: auto; font-family: sans-serif; }

.rsvp-placeholder .rsvp-form { padding: 0px 20px !important; }

.rsvp-placeholder .rsvp-form .mb-4, .no-menu .countdown { display: none; }

.countdown { display: flex; gap: 8px; }

.countdown-item { width: 100%; background-color: var(--inv-accent); color: var(--btn-color); padding: 4px; border-radius: 0.4rem; }

.countdown-item .number { font-size: 1.35rem; line-height: 1.2; font-weight: 700; }

.frame { position: absolute; inset: 0px; }

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

#satuMomen { color: var(--inv-base); font-family: var(--font-base); display: none; }

.relative { position: relative; }

.container-mobile { background-color: var(--inv-bg); background-position: center center; background-repeat: no-repeat; background-size: 100% 100%; overflow: hidden; width: 100%; max-width: 500px; transition: 0.5s ease-in-out; margin-left: auto; margin-right: auto; }

.satumomen_track { height: 100%; width: 100%; }

.satumomen_track .satumomen_list { padding: 0px; margin: 0px; list-style: none; height: 100%; width: 100%; }

.satumomen_track .satumomen_slide, .satumomen_track .satumomen_cover { height: 100%; width: 100%; left: 0px; right: 0px; }

.satumomen_track .satumomen_slide { position: relative; }

.satumomen_track .satumomen_slide .cover { height: 100vh; }

.satumomen_track .satumomen_cover { z-index: 4; }

.satumomen_track .satumomen_cover .cover { position: absolute; inset: 0px; height: 100%; }

.satumomen_track .workspace { position: relative; width: 500px; max-width: 100%; }

.satumomen_track .content { position: relative; z-index: 1; padding: 30px; min-height: 680px; display: inline-table; }

.satumomen_track .cover .content { min-height: auto; }

@media (min-width: 425px) {
  .content { min-height: 780px; }
  .satumomen_cover .content { min-height: auto; }
}

.font-accent { font-family: var(--font-accent); }

.font-latin { font-family: var(--font-latin); font-size: 200%; }

.color-accent { color: var(--inv-accent); }

.floating-action { max-width: 500px; margin: auto; position: fixed; right: 20px; bottom: 4.5rem; gap: 12px; z-index: 3; }

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

.lightbox-wrapper { max-width: 100%; margin: auto; z-index: 9; }

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

.rsvp-placeholder { position: relative; max-height: 600px; overflow: auto; font-family: sans-serif; }

.rsvp-placeholder .rsvp-form { padding: 0px 20px !important; }

.rsvp-placeholder .rsvp-form .mb-4, .no-menu .countdown { display: none; }

.countdown { display: flex; gap: 8px; }

.countdown-item { width: 100%; background-color: var(--inv-accent); color: var(--btn-color); padding: 4px; border-radius: 0.4rem; }

.countdown-item .number { font-size: 1.35rem; line-height: 1.2; font-weight: 700; }

.frame { position: absolute; inset: 0px; }

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

<body style="overflow-y: hidden;">
        <main id="app"><div id="modalOverlay" class="modal-backdrop fade" style="display: none;"></div> <div id="loader" class="loader-wrapper" style="display: none;"><span class="loader"><span class="loader-inner"></span></span></div> <audio id="music" loop="loop" preload="auto">
      <source src="<?= !empty($musiknya) ? $musiknya : 'https://assets.satumomen.com/musics/sibali-lino-ahera-karaoke-bugis-sidrap-coxcpixzmgm.mp3' ?>">
    </audio> <div id="satuMomen" data-guest="<?= \esc($invite); ?>" data-group="VIP" class="not-open" style="display: block;"><div class="satumomen_track"><ul class="satumomen_list"><li class="container-mobile satumomen_slide satumomen_cover" style="background-image: url(&quot;https://assets.satumomen.com/images/invitation/bg-section-82649651765191868.webp&quot;); background-size: cover; position: fixed;"><div class="workspace cover"><div class="content h-100 w-100 mx-auto"><div class="pt-4 h-100 w-100 d-flex flex-column justify-content-center align-items-center" style="padding-bottom: 80px;"><div class="mt-4 mb-auto text-center animate__animated" data-animation="animate__fadeInDown animate__slower"><div class="editable color-accent" style="font-size: 14.4px; color: rgb(255, 255, 255);">The Wedding Of</div><div class="editable color-accent font-latin" style="font-size: 50px; line-height: 1.2; color: rgb(255, 255, 255);">Tari &amp; Ikhsan</div></div><div class="w-100 text-center mx-auto"><div class="mx-auto w-100 text-center mb-3 p-2 animate__animated" data-animation="animate__zoomIn animate__slower" style="border-radius: 0.5rem; max-width: 240px; background-color: rgba(255, 255, 255, 0.77); backdrop-filter: blur(2px);"><div class="editable mb-1 animate__animated" data-animation="animate__fadeInUp animate__slower" style="font-size: 14px;">Kepada Yth.<br>Bapak/Ibu/Saudara/i</div> 
    <div id="guestNameSlot" class="editable h5 mb-4 font-weight-bold animate__animated animate__fadeInUp animate__slower" style="font-size: 18px; color: inherit;">
      <?= \esc($invite); ?>
    </div>
   <div id="groupNameSlot" class="editable h5 animate__animated" data-animation="animate__fadeInUp animate__slower" style="font-size: 14.4px;">VIP</div></div><button class="btn-open-invitation btn btn-primary animate__animated" data-animation="animate__fadeInUp animate__slow" style="font-size: 14px;">Open Invitation</button></div></div></div> <div class="frame"><img src="https://app.kitaberdua.com/themes/phinisi-maroon/left.webp" class="frame-tl h-100 animate__animated" data-animation="animate__slideInLeft animate__slower"> <img src="https://app.kitaberdua.com/themes/phinisi-maroon/right.webp" class="frame-tr h-100 animate__animated" data-animation="animate__slideInRight animate__slower"></div></div></li> <li class="blank-canvas" style="height: 100vh;"></li> <li class="container-mobile satumomen_slide" style="background-image: url(&quot;http://app.kitaberdua.com/themes/phinisi-maroon/bg.webp&quot;);"><div class="workspace"><div class="content h-100 w-100 mx-auto"><div class="h-100 w-100 d-flex flex-column justify-content-center align-items-center overflow-hidden"><div style="position: absolute; inset: 0px;"><video autoplay="autoplay" playsinline="" preload="" muted="muted" poster="https://assets.satumomen.com/images/galleries/477705-gallery-1vIOrGT63b.png" class="w-100 h-100" style="object-fit: cover; object-position: center center;"><source src="https://assets.satumomen.com/videos/invitations/Background%20Video%20Adat%20Bugis.mp4" type="video/mp4"></video></div><div class="position-relative w-100" style="max-width: 280px;"><div class="w-100 text-center" style="z-index: 1;"><div class="mb-3 editable color-accent animate__animated font-latin" data-animation="animate__fadeInDown animate__slower" style="font-size: 40px; line-height: 1.2; animation-delay: 11s;">Tari &amp; Ikhsan</div><div class="editable mb-3 animate__animated" data-animation="animate__zoomIn animate__slower" style="font-size: 18px; animation-delay: 12s;">Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan untukmu isteri-isteri dari jenismu sendiri, supaya kamu cenderung dan merasa tenteram kepadanya, dan dijadikan-Nya diantaramu rasa kasih dan sayang. Sesungguhnya pada yang demikian itu benar-benar terdapat tanda-tanda bagi kaum yang berfikir.</div><div class="editable animate__animated font-italic" data-animation="animate__fadeInUp animate__slower" style="font-size: 18px; animation-delay: 11s;">(QS Ar-Rum : 21)</div></div></div></div></div> <div class="frame"><img src="https://app.kitaberdua.com/themes/phinisi-maroon/left.webp" class="frame-tl h-100 animate__animated" data-animation="animate__slideInLeft animate__slower"> <img src="https://app.kitaberdua.com/themes/phinisi-maroon/right.webp" class="frame-tr h-100 animate__animated" data-animation="animate__slideInRight animate__slower"></div></div></li> <li class="container-mobile satumomen_slide" style="background-image: url(&quot;http://app.kitaberdua.com/themes/phinisi-maroon/bg.webp&quot;);"><div class="workspace"><div class="content h-100 w-100 mx-auto"><div class="h-100 w-100 overflow-hidden d-flex flex-column justify-content-center align-items-center"><div class="position-relative w-100" style="max-width: 350px;"><div class="w-100"><div class="color-accent editable text-center animate__animated font-latin" data-animation="animate__fadeInDown animate__slower" style="font-size: 50px;">The Bride</div></div> <div class="w-100 text-center"><div class="w-100 mx-auto animate__animated" data-animation="animate__zoomIn animate__slow" style="max-width: 240px;"><div class="w-100 position-relative d-flex align-items-center justify-content-center" style="padding-bottom: 115%;"><div class="wave-left" style="width: 80%; position: absolute; left: -21%; top: -30%; transform: rotate(0deg);"><img src="https://app.kitaberdua.com/themes/phinisi-maroon/flowers.webp" alt="flowers.webp" class="w-100 h-auto" style="pointer-events: none; transform-origin: center bottom;"></div> <div class="frame-mempelai w-100 h-100 d-flex align-items-center justify-content-center" style="position: absolute; top: 0px;"><div class="image-editable" style="height: 209px; width: 61%; overflow: hidden; border-radius: 100%;"><img src="https://assets.satumomen.com/images/galleries/477705-gallery-6hBG3WpAod.jpg" alt="no-image.jpg" style="width: 100%; height: 100%; object-fit: cover;"></div></div></div></div><div class="text-center mb-4"><div class="editable h4 mb-2 animate__animated color-accent" data-animation="animate__fadeInUp animate__slower" style="font-size: 24px;">Bripda Lestari<br>Puspita Sari</div> <div class="editable animate__animated" data-animation="animate__fadeInUp animate__slower" style="font-size: 14.4px;">Putri dari<br>Bapak Zaifullah, SH dan<br>Ibu Nur Aiyni. A. S.IP</div></div> <a rel="nofollow" href="https://instagram.com/" class="btn btn-sm link btn-primary rounded-pill" style="line-height: 1.3; font-size: 14px; background-image: url(&quot;/images/instagram.png&quot;); background-size: contain; background-repeat: no-repeat; padding-left: 28px; background-position: left center;">instagram</a></div></div></div></div> <div class="frame"><img src="https://app.kitaberdua.com/themes/phinisi-maroon/left.webp" class="frame-tl h-100 animate__animated" data-animation="animate__slideInLeft animate__slower"> <img src="https://app.kitaberdua.com/themes/phinisi-maroon/right.webp" class="frame-tr h-100 animate__animated" data-animation="animate__slideInRight animate__slower"></div></div></li> <li class="container-mobile satumomen_slide" style="background-image: url(&quot;http://app.kitaberdua.com/themes/phinisi-maroon/bg.webp&quot;);"><div class="workspace"><div class="content h-100 w-100 mx-auto"><div class="h-100 w-100 overflow-hidden d-flex flex-column justify-content-center align-items-center"><div class="position-relative w-100" style="max-width: 350px;"><div class="w-100"><div class="color-accent editable text-center animate__animated font-latin" data-animation="animate__fadeInDown animate__slower" style="font-size: 50px;">The Bride</div></div> <div class="w-100 text-center"><div class="w-100 mx-auto animate__animated" data-animation="animate__zoomIn animate__slow" style="max-width: 240px;"><div class="w-100 position-relative d-flex align-items-center justify-content-center" style="padding-bottom: 115%;"><div class="wave-left" style="width: 80%; position: absolute; left: -21%; top: -30%; transform: rotate(0deg);"><img src="https://app.kitaberdua.com/themes/phinisi-maroon/flowers.webp" alt="flowers.webp" class="w-100 h-auto" style="pointer-events: none; transform-origin: center bottom;"></div> <div class="frame-mempelai w-100 h-100 d-flex align-items-center justify-content-center" style="position: absolute; top: 0px;"><div class="image-editable" style="height: 209px; width: 61%; overflow: hidden; border-radius: 100%;"><img src="https://assets.satumomen.com/images/galleries/477705-gallery-6Uhswe8ykL.jpg" alt="no-image.jpg" style="width: 100%; height: 100%; object-fit: cover;"></div></div></div></div><div class="text-center mb-4"><div class="editable h4 mb-2 animate__animated color-accent" data-animation="animate__fadeInUp animate__slower" style="font-size: 24px;">Bripda Ikhsanul<br>Ramadhan, SH</div> <div class="editable animate__animated" data-animation="animate__fadeInUp animate__slower" style="font-size: 14.4px;">Pitra dari<br>Bapak Saharuddin dan<br>Ibu Nur Aini</div></div> <a rel="nofollow" href="https://instagram.com/" class="btn btn-sm link btn-primary rounded-pill" style="line-height: 1.3; font-size: 14px; background-image: url(&quot;/images/instagram.png&quot;); background-size: contain; background-repeat: no-repeat; padding-left: 28px; background-position: left center;">instagram</a></div></div></div></div> <div class="frame"><img src="https://app.kitaberdua.com/themes/phinisi-maroon/left.webp" class="frame-tl h-100 animate__animated" data-animation="animate__slideInLeft animate__slower"> <img src="https://app.kitaberdua.com/themes/phinisi-maroon/right.webp" class="frame-tr h-100 animate__animated" data-animation="animate__slideInRight animate__slower"></div></div></li> <li class="container-mobile satumomen_slide" style="background-image: url(&quot;http://app.kitaberdua.com/themes/phinisi-maroon/bg.webp&quot;);"><div class="workspace"><div class="content h-100 w-100 mx-auto"><div class="py-5 position-relative h-100 d-flex flex-column justify-content-start align-items-center"><div class="text-center w-100 mb-1"><div class="editable animate__animated color-accent font-latin" data-animation="animate__fadeInUp animate__slower" style="font-size: 40px; animation-delay: 500ms; line-height: 1.2;">Save The Date</div></div> <div class="text-center w-100 mb-4"></div><div class="mt-4 text-center w-100 p-4 d-flex flex-column justify-content-center align-items-center position-relative animate__animated" data-animation="animate__zoomIn animate__slower" style="box-shadow: rgba(0, 0, 0, 0.15) 0px 0.5rem 1rem !important; max-width: 320px; background-color: var(--inv-bg); border-radius: 1rem;"><div style="padding: 0.5rem; background-color: var(--inv-accent); color: var(--btn-color); border-radius: 100%; position: absolute; top: -14%; width: 3.6rem; height: 3.6rem;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" xml:space="preserve" height="42" width="42" fill="currentColor"><path d="M350.87 144.228c-34.533 0-67.206 10.662-94.87 30.883-17.24-12.601-36.424-21.486-56.793-26.394l43.291-49.612c.015-.017.025-.037.039-.054.257-.299.486-.619.693-.955l.098-.161c.192-.331.36-.676.501-1.037.022-.056.041-.112.062-.169a7.44 7.44 0 0 0 .317-1.123c.007-.035.01-.07.016-.104.065-.361.102-.73.114-1.106.002-.05.007-.099.007-.149 0-.027.004-.054.004-.081 0-.359-.034-.71-.082-1.054-.01-.068-.019-.134-.031-.202a7.3 7.3 0 0 0-.274-1.111c-.016-.047-.035-.093-.051-.14a7.503 7.503 0 0 0-.489-1.106l-.026-.044a7.437 7.437 0 0 0-.714-1.056c-.008-.01-.013-.021-.021-.031l-.028-.034-33.483-41.102a7.517 7.517 0 0 0-5.827-2.769h-84.389c-2.26 0-4.4 1.017-5.827 2.769L79.625 89.382l-.028.034c-.008.01-.013.021-.021.031-.267.33-.505.683-.714 1.056l-.026.044a7.597 7.597 0 0 0-.489 1.106c-.017.047-.036.093-.051.14a7.607 7.607 0 0 0-.305 1.313 7.48 7.48 0 0 0-.082 1.054c0 .028.004.054.004.081.001.05.006.099.007.149.011.377.049.746.114 1.106.006.035.009.07.016.104.075.387.185.761.317 1.123.021.057.04.113.062.169.141.361.309.706.501 1.037.031.054.065.107.098.161.207.337.438.656.693.955.015.017.024.037.039.054l43.339 49.67C52.547 165.911 0 229.608 0 305.358c0 88.848 72.283 161.13 161.129 161.13 34.533 0 67.206-10.662 94.871-30.883 27.664 20.22 60.336 30.883 94.871 30.883 88.847 0 161.129-72.283 161.129-161.13s-72.283-161.13-161.13-161.13zM199.753 60.543l21.265 26.104h-24.456l-8.416-26.104h11.607zm-3.309 41.135h23.858l-38.285 43.877c-.232-.029-.461-.062-.691-.091l15.118-43.786zm-46.538-41.136h22.447l8.416 26.104H141.49l8.416-26.104zm30.636 41.137-14.717 42.624a166.514 166.514 0 0 0-4.694-.074c-.964 0-1.953.015-2.958.037-.579.01-1.159.019-1.738.036l-14.717-42.623h38.824zm-58.035-41.137h11.605l-8.415 26.104h-24.455l21.265-26.104zm-20.549 41.137h23.857l15.128 43.811-.68.087-38.305-43.898zm59.171 349.776c-80.558 0-146.097-65.539-146.097-146.097 0-72.876 53.636-133.457 123.504-144.349 1.744-.271 3.495-.507 5.252-.715l.66-.076a147.96 147.96 0 0 1 7.097-.619c.037-.002.073.005.11.002a184.84 184.84 0 0 1 4.86-.251c1.539-.049 3.078-.09 4.613-.09 3.075 0 6.128.195 9.449.409.162.01.324.015.484.015.121 0 .239-.022.359-.028 4.015.302 8.104.774 12.341 1.433.386.06.773.089 1.156.089l.049-.003c24.16 3.926 46.775 13.846 66.387 29.266 2.02 1.588 4 3.233 5.938 4.929a146.55 146.55 0 0 1 5.533 5.105 146.796 146.796 0 0 1 10.652 11.493l.001.001c21.763 26.151 33.749 59.317 33.749 93.388 0 31.637-10.335 62.494-29.234 87.678-.04-.034-.082-.066-.123-.099a117.623 117.623 0 0 1-3.076-2.659c-.194-.174-.383-.357-.576-.533-.809-.735-1.61-1.477-2.398-2.235-.345-.332-.68-.672-1.021-1.009-.626-.617-1.25-1.238-1.861-1.87-.37-.383-.734-.772-1.098-1.159-.57-.605-1.136-1.216-1.693-1.834-.17-.188-.337-.381-.506-.57 12.13-16.726 20.093-36.159 23.13-56.571a7.516 7.516 0 0 0-6.327-8.54 7.511 7.511 0 0 0-8.54 6.327c-2.465 16.566-8.619 32.398-17.918 46.323-12.55-18.714-19.138-40.386-19.138-63.25s6.589-44.536 19.138-63.249c10.283 15.382 16.667 32.985 18.564 51.467a7.517 7.517 0 0 0 14.954-1.536c-2.531-24.66-12.09-47.948-27.64-67.346a129.731 129.731 0 0 0-24.686-23.603c-22.197-16.215-48.494-24.787-76.048-24.787a129.009 129.009 0 0 0-84.5 31.507 7.517 7.517 0 0 0 9.846 11.358c20.703-17.949 47.215-27.833 74.653-27.833 21.723 0 42.551 6.044 60.716 17.518-20.754 27.744-32.106 61.693-32.106 96.503 0 34.809 11.352 68.759 32.106 96.503-18.165 11.474-38.993 17.518-60.716 17.518-62.872 0-114.021-51.15-114.021-114.021 0-23.382 7.024-45.85 20.312-64.976a7.516 7.516 0 0 0-1.884-10.461 7.513 7.513 0 0 0-10.46 1.884c-15.047 21.656-23 47.09-23 73.553 0 71.16 57.893 129.053 129.053 129.053 25.234 0 49.411-7.187 70.352-20.852.184.203.376.4.561.601.495.54.996 1.075 1.499 1.609.481.512.963 1.022 1.452 1.528.511.529 1.029 1.052 1.547 1.574.494.498.988.995 1.488 1.486.525.515 1.056 1.023 1.587 1.531.507.484 1.013.969 1.526 1.447.537.5 1.081.993 1.625 1.485.362.328.716.663 1.079.987-24.359 16.815-52.765 25.651-82.715 25.651zm189.741 0c-33.082 0-64.282-10.782-90.225-31.18a147.357 147.357 0 0 1-22.125-21.528c-21.763-26.153-33.749-59.318-33.749-93.389 0-31.636 10.334-62.493 29.234-87.678l.118.095c1.042.869 2.069 1.756 3.08 2.662.201.18.396.369.596.551a113.14 113.14 0 0 1 2.378 2.217c.349.336.689.681 1.034 1.022.62.612 1.239 1.228 1.845 1.854.376.388.744.783 1.113 1.176.563.599 1.123 1.202 1.674 1.813.173.192.344.388.515.582-15.867 21.908-24.543 48.552-24.543 75.707 0 29.237 10.057 57.884 28.32 80.662a129.762 129.762 0 0 0 24.685 23.604c22.197 16.215 48.495 24.787 76.049 24.787 33.75 0 65.671-12.944 89.882-36.446a7.516 7.516 0 1 0-10.471-10.785c-21.39 20.764-49.592 32.199-79.412 32.199-21.723 0-42.551-6.045-60.717-17.519 20.754-27.743 32.106-61.693 32.106-96.503s-11.352-68.76-32.106-96.503c18.166-11.474 38.994-17.518 60.717-17.518 62.872 0 114.021 51.15 114.021 114.021 0 21.164-5.838 41.823-16.884 59.742a7.516 7.516 0 0 0 2.454 10.342 7.516 7.516 0 0 0 10.342-2.454c12.509-20.292 19.121-43.678 19.121-67.63 0-71.16-57.893-129.053-129.053-129.053-25.233 0-49.411 7.187-70.352 20.852-.179-.197-.365-.389-.545-.585a171.21 171.21 0 0 0-1.54-1.654c-.468-.497-.936-.993-1.41-1.484a161.943 161.943 0 0 0-1.592-1.619c-.479-.482-.957-.964-1.442-1.44a162.796 162.796 0 0 0-1.637-1.579c-.491-.469-.981-.938-1.477-1.4-.556-.518-1.12-1.029-1.685-1.539-.348-.315-.687-.637-1.037-.948 24.361-16.81 52.766-25.646 82.717-25.646 80.558 0 146.097 65.539 146.097 146.097.002 80.556-65.537 146.095-146.096 146.095z"></path></svg></div><div class="mt-3 mb-2 color-accent editable animate__animated font-accent" data-animation="animate__fadeInUp animate__slower" style="font-size: 24px; line-height: 1.2; animation-delay: 1500ms;">AKAD</div><div class="mb-3 animate__animated" data-animation="animate__fadeInUp animate__slower"><div class="pl-3 text-center"><div class="editable mb-3 font-accent" style="font-size: 14.4px;">Friday, February 14th 2025<br>09.00 - End</div><div class="editable font-weight-bold font-accent" style="font-size: 14.4px;">The Bride's Residence</div><div class="editable" style="font-size: 12px;">Jl. K.H. Wahid Hasyim No. 67, Jakarta Pusat</div></div></div><div class="w-100 animate__animated" data-animation="animate__fadeInUp animate__slower"><a href="https://satumomen.com/app/edit-card/v2/449637#" rel="nofollow noreferrer noopener" target="_blank" class="link btn btn-block btn-primary">Open Maps</a></div></div><div class="mt-5 text-center w-100 p-4 d-flex flex-column justify-content-center align-items-center position-relative animate__animated" data-animation="animate__zoomIn animate__slower" style="box-shadow: rgba(0, 0, 0, 0.15) 0px 0.5rem 1rem !important; max-width: 320px; background-color: var(--inv-bg); border-radius: 1rem;"><div style="padding: 0.5rem; background-color: var(--inv-accent); color: var(--btn-color); border-radius: 100%; position: absolute; top: -14%; width: 3.6rem; height: 3.6rem;"><svg height="40" viewBox="0 0 56 56" width="40" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path d="M27.927 39.563c-.18 0-.36-.049-.52-.146-1.513-.921-3.024-2.482-4.025-3.63-.719-.824-1.234-1.702-1.532-2.61-.683-2.078-.188-3.824 1.393-4.915 1.874-1.294 3.557-.865 4.685.08 1.128-.942 2.813-1.372 4.685-.08 1.581 1.091 2.075 2.836 1.393 4.916-.299.909-.814 1.787-1.531 2.609-1.004 1.149-2.517 2.711-4.026 3.63a1.005 1.005 0 0 1-.522.146zm-2.318-10.102c-.357 0-.767.127-1.231.448-.524.361-1.159 1.028-.628 2.645.214.653.597 1.299 1.139 1.92.65.744 1.839 2.024 3.038 2.889 1.197-.863 2.388-2.145 3.039-2.89.54-.619.923-1.265 1.138-1.918.531-1.617-.104-2.284-.628-2.646-1.299-.897-2.165-.279-2.666.394l-.001.002c-.189.253-.565.442-.881.442s-.692-.189-.881-.442c-.323-.435-.797-.844-1.438-.844zM29.913 23.187h12.784v2H29.913z"></path><path d="M37.336 40.101a7.227 7.227 0 0 1-3.446-.868 1 1 0 1 1 .944-1.764c1.631.873 3.463.844 5.444-.081l.905-.422c3.2-1.492 4.594-5.313 3.106-8.514-.044-.077-7.327-13.331-9.23-16.795l-6.335 2.954a1 1 0 0 1-.845-1.813l7.183-3.35a.999.999 0 0 1 1.299.425C46.1 27.595 46.1 27.595 46.123 27.654c1.932 4.156.104 9.167-4.095 11.125l-.905.421c-1.286.6-2.56.901-3.787.901z"></path><path d="M18.753 40.101c-1.227 0-2.5-.3-3.787-.9l-.905-.422c-4.198-1.959-6.026-6.969-4.076-11.17.004-.015.004-.015 9.743-17.736a1.003 1.003 0 0 1 1.299-.425l11.929 5.563c.477.223.7.777.51 1.268l-3.711 9.563a1 1 0 1 1-1.864-.724l3.372-8.69-10.233-4.772-9.249 16.83c-1.444 3.238-.047 7 3.124 8.48l.905.422c1.998.933 3.841.954 5.479.063a1 1 0 1 1 .955 1.757 7.23 7.23 0 0 1-3.491.893zM42.251 37.865l5.066 10.577-1.804.864-5.066-10.577z"></path><path d="M43.05 52.018a1 1 0 0 1-.433-1.901l7.182-3.442a1 1 0 1 1 .865 1.803l-7.182 3.442c-.14.066-.288.098-.432.098zM13.716 37.886l1.805.867-5.077 10.576-1.805-.866z"></path><path d="M12.95 52.018a.984.984 0 0 1-.432-.099l-7.181-3.442a1 1 0 0 1 .864-1.803l7.181 3.442a1 1 0 0 1-.432 1.902zM25.611 25.187H13.504a1 1 0 0 1 0-2h12.107a1 1 0 0 1 0 2zM28.009 8.172a1 1 0 0 1-1-1v-2.19a1 1 0 0 1 2 0v2.19a1 1 0 0 1-1 1zM30.947 9.843a.999.999 0 0 1-.706-1.708l1.616-1.61a.998.998 0 0 1 1.414.003.999.999 0 0 1-.002 1.414l-1.616 1.61a.999.999 0 0 1-.706.291zM25.142 9.843a.996.996 0 0 1-.706-.292l-1.616-1.61a.999.999 0 1 1 1.411-1.417l1.616 1.61a.999.999 0 0 1-.705 1.709z"></path></svg></div> <div class="mt-3 mb-2 color-accent editable animate__animated font-accent" data-animation="animate__fadeInUp animate__slower" style="font-size: 24px; line-height: 1.2; animation-delay: 1500ms;">WEDDING RECEPTION</div><div class="mb-3 animate__animated" data-animation="animate__fadeInUp animate__slower"><div class="pl-3 text-center"><div class="editable mb-3 font-accent" style="font-size: 14.4px;">Saturday, 1 February 2025<br>19:00 - 21:00 WIB</div><div class="editable font-weight-bold" style="font-size: 14.4px;">NDC Hall</div><div class="editable" style="font-size: 12px;">Living World Alam Sutera, Lt. 2 Tangerang Selatan</div></div></div><div class="w-100 animate__animated" data-animation="animate__fadeInUp animate__slower"><a href="https://satumomen.com/app/edit-card/v2/449637#" rel="nofollow noreferrer noopener" target="_blank" class="link btn btn-block btn-primary">Open Maps</a></div></div></div></div> <div class="frame"><img src="https://app.kitaberdua.com/themes/phinisi-maroon/left.webp" class="frame-tl h-100 animate__animated" data-animation="animate__slideInLeft animate__slower"> <img src="https://app.kitaberdua.com/themes/phinisi-maroon/right.webp" class="frame-tr h-100 animate__animated" data-animation="animate__slideInRight animate__slower"></div></div></li> <li class="container-mobile satumomen_slide" style="background-image: url(&quot;http://app.kitaberdua.com/themes/phinisi-maroon/bg.webp&quot;);"><div class="workspace"><div class="content h-100 w-100 mx-auto"><div class="h-100 w-100 d-flex flex-column justify-content-center align-items-center"><div class="w-100 position-relative" style="max-width: 350px; background-color: rgba(255, 255, 255, 0.8); padding: 30px; border-radius: 1rem;"><div><div class="mb-4 editable text-center color-accent h4 animate__animated font-latin" data-animation="animate__fadeInDown animate__slower" style="font-size: 50px;">Location</div> <div class="animate__animated" data-animation="animate__zoomIn animate__slow" style="width: 100%; margin: auto auto 20px; border-radius: 10px; overflow: hidden; padding-bottom: 53%; position: relative; border: 4px solid var(--inv-accent);"><iframe width="100%" height="100%" allowfullscreen="allowfullscreen" src="cid:frame-02058456F5F5CCBFA6B43FDCEDDC44C4@mhtml.blink" class="maps-embed" style="border: 0px; position: absolute;"></iframe></div> <button class="btn-maps btn btn-sm btn-pilled btn-block btn-accent mt-1 mb-4">Edit Denah Lokasi</button> <div class="text-center animate__animated" data-animation="animate__fadeInUp animate__slow"><div class="editable font-weight-bold" style="font-size: 24px;">Grand Ballroom<br>Hotel Labersa</div><div class="editable mb-3" style="font-size: 14px;">Jl. Labersa, Tanah Merah, Kec. Siak Hulu,<br>Kab. Kampar, Riau</div><a href="https://www.google.com/maps/place/?q=-6.8374899000000005,110.82201839999999" target="_blank" rel="noreferrer noopener" class="rounded-pill btn-maps-link mx-auto btn btn-primary animate__animated" data-animation="animate__fadeInUp animate__slow" style="gap: 8px; max-width: 200px; font-size: 14px;">Buka Google Maps</a></div></div></div></div></div> <div class="frame"><img src="https://app.kitaberdua.com/themes/phinisi-maroon/left.webp" class="frame-tl h-100 animate__animated" data-animation="animate__slideInLeft animate__slower"> <img src="https://app.kitaberdua.com/themes/phinisi-maroon/right.webp" class="frame-tr h-100 animate__animated" data-animation="animate__slideInRight animate__slower"></div></div></li> <li class="container-mobile satumomen_slide" style="background-image: url(&quot;http://app.kitaberdua.com/themes/phinisi-maroon/bg.webp&quot;);"><div class="workspace"><div class="content h-100 w-100 mx-auto"><div class="d-flex flex-column justify-content-center align-items-center" style="margin: -30px; height: calc(100% + 60px); width: calc(100% + 60px);"><div class="position-relative w-100 d-flex flex-column justify-content-center align-items-center" style="box-shadow: rgba(0, 0, 0, 0.1) 0px 0.5rem 1rem !important; max-width: 320px; background-color: var(--inv-bg); border-radius: 1rem; padding: 30px;"><div class="mb-4"><div class="editable text-center color-accent h4 animate__animated font-latin" data-animation="animate__fadeInDown animate__slower" style="font-size: 50px;">Date</div></div> <div class="px-4 w-100 position-relative mb-4" style="z-index: 2;"><div data-datetime="2026-03-18T19:11" class="mb-4 countdown-wrapper d-flex flex-column animate__animated" data-animation="animate__zoomIn animate__slower"><div class="countdown text-center flex-wrap" style="gap: 0px;"><div class="countdown-item day" style="width: 50%; background-color: transparent; color: color: var(--inv-base);"><div class="number" style="font-size: 32px;">00</div> <div class="text editable" style="font-size: 20px;">Day</div></div> <div class="countdown-item hour" style="width: 50%; background-color: transparent; color: var(--inv-base);"><div class="number" style="font-size: 32px;">00</div> <div class="text editable" style="font-size: 20px;">Hour</div></div> <div class="countdown-item minute" style="width: 50%; background-color: transparent; color: var(--inv-base);"><div class="number" style="font-size: 32px;">00</div> <div class="text editable" style="font-size: 20px;">Minute</div></div> <div class="countdown-item second" style="width: 50%; background-color: transparent; color: var(--inv-base);"><div class="number" style="font-size: 32px;">00</div> <div class="text editable" style="font-size: 20px;">Second</div></div></div> <button class="btn-countdown btn btn-sm btn-pilled btn-accent mt-2">Atur Countdown</button></div> <div class="text-center"><a href="https://calendar.google.com/calendar/u/0/r/eventedit?text=&amp;dates=%2F&amp;details=&amp;location=" target="_blank" rel="noreferrer noopener" class="btn-reminder btn btn-primary rounded-pill animate__animated" data-animation="animate__fadeInUp animate__slow">Save the Date</a></div></div></div></div></div> <div class="frame"><img src="https://app.kitaberdua.com/themes/phinisi-maroon/left.webp" class="frame-tl h-100 animate__animated" data-animation="animate__slideInLeft animate__slower"> <img src="https://app.kitaberdua.com/themes/phinisi-maroon/right.webp" class="frame-tr h-100 animate__animated" data-animation="animate__slideInRight animate__slower"></div></div></li> <li class="container-mobile satumomen_slide" style="background-image: url(&quot;http://app.kitaberdua.com/themes/phinisi-maroon/bg.webp&quot;);"><div class="workspace"><div class="content h-100 w-100 mx-auto"><div class="d-flex flex-column justify-content-center align-items-center" style="margin: -30px; width: calc(100% + 60px); height: calc(100% + 60px);"><div class="animate__animated" data-animation="animate__zoomIn animate__slower" style="width: 100%; height: 400px; overflow: hidden;"><div class="light" style="overflow: hidden; width: 100%; height: 100%;"><img src="https://assets.satumomen.com/images/galleries/477705-gallery-EMrsiz5A4S.jpg" alt="14989-gallery-1657822631.jpg" class="lightbox" style="width: 100%; height: 100%; object-fit: cover;"></div></div> <div class="animate__animated" data-animation="animate__zoomIn animate__slower" style="width: 100%; height: 250px; overflow: hidden;"><div class="light" style="overflow: hidden; width: 100%; height: 100%;"><img src="https://assets.satumomen.com/images/galleries/477705-gallery-NOWSC0ie8a.jpg" alt="14989-gallery-1657822631.jpg" class="lightbox" style="width: 100%; height: 100%; object-fit: cover;"></div></div><div class="d-flex" style="width: 100%; height: 300px; overflow: hidden;"><div class="animate__animated" data-animation="animate__zoomIn animate__slower" style="width: 50%; height: 100%; overflow: hidden;"><div class="light" style="overflow: hidden; width: 100%; height: 100%;"><img src="https://assets.satumomen.com/images/galleries/477705-gallery-6Uhswe8ykL.jpg" alt="14989-gallery-1657822631.jpg" class="lightbox" style="width: 100%; height: 100%; object-fit: cover;"></div></div> <div class="animate__animated" data-animation="animate__zoomIn animate__slower" style="width: 50%; height: 100%; overflow: hidden;"><div class="light" style="overflow: hidden; width: 100%; height: 100%;"><img src="https://assets.satumomen.com/images/galleries/477705-gallery-6hBG3WpAod.jpg" alt="14989-gallery-1657822631.jpg" class="lightbox" style="width: 100%; height: 100%; object-fit: cover;"></div></div></div></div></div> <div class="frame"><img src="https://app.kitaberdua.com/themes/phinisi-maroon/left.webp" class="frame-tl h-100 animate__animated" data-animation="animate__slideInLeft animate__slower"> <img src="https://app.kitaberdua.com/themes/phinisi-maroon/right.webp" class="frame-tr h-100 animate__animated" data-animation="animate__slideInRight animate__slower"></div></div></li> <li class="container-mobile satumomen_slide" style="background-image: url(&quot;http://app.kitaberdua.com/themes/phinisi-maroon/bg.webp&quot;);"><div class="workspace"><div class="content h-100 w-100 mx-auto"><div class="h-100 d-flex justify-content-center align-items-center"><div class="position-relative w-100"><div><div class="position-relative animate__animated" data-animation="animate__fadeInRight animate__slower"><div class="wave-left" style="width: 51%; position: absolute; left: -13%; top: -16%; transform: rotate(353deg);"><img src="https://app.kitaberdua.com/themes/phinisi-maroon/flowers.webp" alt="flowers.webp" class="w-100 h-auto" style="pointer-events: none; transform-origin: center bottom;"></div> <div class="image-editable" style="width: 248px; height: 195px; margin: auto; overflow: hidden; transform: translate(15px, 24px) rotate(356deg); border: 4px solid var(--inv-border); border-radius: 1rem;"><img src="https://assets.satumomen.com/images/galleries/477705-gallery-h8xVTbGu98.jpg" alt="no-image.jpg" style="width: 100%; height: 100%; object-fit: cover;"></div></div> <div class="position-relative animate__animated" data-animation="animate__fadeInLeft animate__slower"><div class="wave-right" style="width: 50%; position: absolute; right: -4%; bottom: -3%;"><img src="https://app.kitaberdua.com/themes/cream-purple/flower-3.webp" alt="wayang-atas.webp" class="w-100 h-auto" style="pointer-events: none; transform-origin: center bottom;"></div> <div class="image-editable" style="width: 248px; height: 195px; margin: auto auto 20px; overflow: hidden; transform: translate(-1px, 0px) rotate(5deg); border: 4px solid var(--inv-border); border-radius: 1rem;"><img src="https://assets.satumomen.com/images/galleries/477705-gallery-JAglyEGYi9.jpg" alt="no-image.jpg" style="width: 100%; height: 100%; object-fit: cover;"></div></div> <div class="text-center"><div class="editable mb-4 animate__animated" data-animation="animate__fadeInUp animate__slower" style="font-size: 14.4px;">Please help us prepare by<br>confirming your attendance at our<br>wedding through the form below<br>and sending your good wishes</div> <button class="rounded-pill btn-rsvp btn btn-primary mb-4 animate__animated" data-animation="animate__fadeInUp animate__slow">
            Kirim Ucapan RSVP
          </button></div></div></div></div></div> <div class="frame"><img src="https://app.kitaberdua.com/themes/phinisi-maroon/left.webp" class="frame-tl h-100 animate__animated" data-animation="animate__slideInLeft animate__slower"> <img src="https://app.kitaberdua.com/themes/phinisi-maroon/right.webp" class="frame-tr h-100 animate__animated" data-animation="animate__slideInRight animate__slower"></div></div></li> <li class="container-mobile satumomen_slide" style="background-image: url(&quot;http://app.kitaberdua.com/themes/phinisi-maroon/bg.webp&quot;);"><div class="workspace"><div class="content h-100 w-100 mx-auto"><div class="h-100 d-flex justify-content-center align-items-center"><div class="w-100 text-center" style="max-width: 300px;"><div class="mb-4"><div class="editable text-center color-accent h4 animate__animated font-latin" data-animation="animate__fadeInDown animate__slower" style="font-size: 50px;">Wedding Gift</div></div> <div class="editable mb-4 animate__animated" data-animation="animate__fadeInDown animate__slower" style="font-size: 14.4px;">Your blessings mean the world to us. However, if giving is your way of expressing love, we would gratefully accept it, as it would add to our happiness.</div><div style="display: flex; gap: 8px;"><button class="btn-gift btn btn-block btn-primary rounded-pill animate__animated" data-animation="animate__fadeInUp animate__slow" style="max-width: 150px; margin: auto; font-size: 14.4px;">Cashless</button> <button class="btn-gift btn btn-block btn-primary rounded-pill animate__animated" data-animation="animate__fadeInUp animate__slow" style="max-width: 150px; margin: auto; font-size: 14.4px;">Wedding Gif</button></div> <div class="gift-container mt-3 p-4 rounded" style="border: 1px solid var(--inv-border); display: none;"><div class="d-flex animate__animated" data-animation="animate__zoomIn animate__slow"><div class="mx-auto"><div class="d-flex align-items-center mb-3"><div class="image-editable bg-white rounded" style="width: 80px; height: 50px; overflow: hidden;"><img src="https://assets.satumomen.com/assets/logo-bca-biru-1687975058.png" alt="no-image.jpg" style="width: 100%; height: 100%; object-fit: contain;"></div> <div class="text-left pl-2"><div class="editable account-number font-weight-bold h5 mb-0" style="font-size: 18px;">12345678</div><button type="button" class="btn btn-sm btn-primary mt-2 mb-2 animate__animated delay-5" data-text="12345678" style="font-family: sans-serif; border-radius: 4px" data-animation="animate__fadeInUp animate__slow">Salin Rekening</button><div class="editable" style="font-size: 14.4px;">BCA : Atas Nama Rekening</div></div></div><div class="d-flex align-items-center"><div class="image-editable bg-white rounded" style="width: 80px; height: 50px; overflow: hidden;"><img src="https://assets.satumomen.com/assets/bni-1704123714.jpg" alt="no-image.jpg" style="width: 100%; height: 100%; object-fit: contain;"></div><div class="text-left pl-2"><div class="editable account-number font-weight-bold h5 mb-0" style="font-size: 18px;">12345678</div><button type="button" class="btn btn-sm btn-primary mt-2 mb-2 animate__animated delay-5" data-text="12345678" style="font-family: sans-serif; border-radius: 4px" data-animation="animate__fadeInUp animate__slow">Salin Rekening</button><div class="editable" style="font-size: 14.4px;">BCA : Atas Nama</div></div></div></div></div></div><div class="gift-container mt-3 p-4 rounded" style="border: 1px solid var(--inv-border); display: none;"><div class="text-center mb-2 animate__animated" data-animation="animate__zoomIn animate__slow"><div class="editable font-weight-bold h5 color-accent mb-2 font-accent" style="font-size: 18px;">Kirim Hadiah</div><div class="editable copy-address mb-0" style="font-size: 14.4px;">Anda dapat mengirim kado ke:<br>Jl. Wildan Sari 1 No 11 Banjarmasin Barat 70119</div><button type="button" class="btn btn-sm btn-primary mt-2 animate__animated delay-5" data-text="Anda dapat mengirim kado ke:Jl. Wildan Sari 1 No 11 Banjarmasin Barat 70119" style="font-family: sans-serif; border-radius: 4px;" data-animation="animate__fadeInUp animate__slow">Salin Alamat</button></div></div></div></div></div> <div class="frame"><img src="https://app.kitaberdua.com/themes/phinisi-maroon/left.webp" class="frame-tl h-100 animate__animated" data-animation="animate__slideInLeft animate__slower"> <img src="https://app.kitaberdua.com/themes/phinisi-maroon/right.webp" class="frame-tr h-100 animate__animated" data-animation="animate__slideInRight animate__slower"></div></div></li> <li class="container-mobile satumomen_slide" style="background-image: url(&quot;http://app.kitaberdua.com/themes/phinisi-maroon/bg.webp&quot;);"><div class="workspace"><div class="content h-100 w-100 mx-auto"><div class="watermark d-flex flex-column justify-content-center h-100 w-100"><img src="https://app.kitaberdua.com/themes/phinisi-maroon/bg-end.webp" alt="470301-gallery-wnDgKfHzeY.jpg" class="h-100 w-100" style="position: absolute; top: 0px; left: 0px; object-fit: cover;"> <div class="wave-left" style="width: 60%; position: absolute; left: 3%; bottom: -11%;"><img src="https://app.kitaberdua.com/themes/phinisi-maroon/bunga-right.webp" alt="flamingo.webp" class="w-100 h-auto" style="pointer-events: none; transform-origin: center bottom; animation-duration: 4.2s;"></div><div class="wave-right" style="width: 60%; position: absolute; right: 3%; bottom: -12%;"><img src="https://app.kitaberdua.com/themes/phinisi-maroon/bunga-left.webp" alt="flamingo.webp" class="w-100 h-auto" style="pointer-events: none; transform-origin: center bottom; animation-duration: 4.5s;"></div><div class="wave-left" style="width: 60%; position: absolute; left: -25%; bottom: -6%;"><img src="https://app.kitaberdua.com/themes/phinisi-maroon/bunga-left.webp" alt="flamingo.webp" class="w-100 h-auto" style="pointer-events: none; transform-origin: center bottom; animation-duration: 4.2s;"></div><div class="wave-right" style="width: 60%; position: absolute; right: -25%; bottom: -6%;"><img src="https://app.kitaberdua.com/themes/phinisi-maroon/bunga-right.webp" alt="flamingo.webp" class="w-100 h-auto" style="pointer-events: none; transform-origin: center bottom; animation-duration: 4.3s;"></div><div class="mx-auto position-relative" style="max-width: 350px; background-color: rgba(255, 255, 255, 0.8); padding: 30px; border-radius: 1rem; box-shadow: rgba(0, 0, 0, 0.1) 0px 0.5rem 1rem !important;"><div class="w-100"><div class="text-center"><div class="editable mb-2 animate__animated" data-animation="animate__fadeInDown animate__slower" style="font-size: 14.4px;">âWe would like to thank you for sharing in our wedding celebration. We are truly grateful for your presence, warmth, and kind wishes. We look forward to our future together and creating more wonderful memories with you.â</div><div class="editable mb-4 animate__animated" data-animation="animate__fadeInDown animate__slower" style="font-size: 14.4px;">Atas kehadiran dan doâa restunya<br>kami ucapkan terima kasih.</div><div class="mb-2 editable animate__animated" data-animation="animate__fadeInDown animate__slow" style="font-size: 14.4px;">Much Love,</div> <div class="text-center" style="position: relative;"><div class="editable color-accent h4 animate__animated font-accent" data-animation="animate__fadeInLeft animate__slower" style="font-size: 32px;">Tari</div> <div class="h4 editable text-center color-accent animate__animated font-latin" data-animation="animate__zoomIn animate__slower" style="font-size: 24px;">&amp;</div><div class="editable color-accent h4 animate__animated font-accent" data-animation="animate__fadeInRight animate__slower" style="font-size: 32px;">Ikhsan</div></div></div></div><div class="watermark-placeholder text-center"><div id="waterMark" class="mt-5" style="display: inherit;"><div class="wm-music mt-3 text-center animate__animated" data-animation="animate__fadeInUp animate__slower animate__delay-1s" style="font-size: 60%;"><div style="opacity: 0.5;"><strong>Music:</strong></div> <div style="opacity: 0.5;">Sibali Lino Ahera Karaoke _ Bugis Sidrap _</div></div></div></div></div></div></div> <div class="frame"><img src="https://app.kitaberdua.com/themes/phinisi-maroon/left.webp" class="frame-tl h-100 animate__animated" data-animation="animate__slideInLeft animate__slower"> <img src="https://app.kitaberdua.com/themes/phinisi-maroon/right.webp" class="frame-tr h-100 animate__animated" data-animation="animate__slideInRight animate__slower"></div></div></li></ul></div></div> <div class="floating-action d-flex align-items-end flex-column"><button id="btnQrModal" class="btn btn-float"><svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" viewBox="0 0 256 256"><rect x="40" y="40" width="80" height="80" rx="16"></rect><rect x="40" y="136" width="80" height="80" rx="16"></rect><rect x="136" y="40" width="80" height="80" rx="16"></rect><path d="M144,184a8,8,0,0,0,8-8V144a8,8,0,0,0-16,0v32A8,8,0,0,0,144,184Z"></path><path d="M208,152H184v-8a8,8,0,0,0-16,0v56H144a8,8,0,0,0,0,16h32a8,8,0,0,0,8-8V168h24a8,8,0,0,0,0-16Z"></path><path d="M208,184a8,8,0,0,0-8,8v16a8,8,0,0,0,16,0V192A8,8,0,0,0,208,184Z"></path></svg></button> <button id="btnMusic" class="btn btn-float playing"><svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" viewBox="0 0 256 256" class="play"><path d="M184,152V104a8,8,0,0,1,16,0v48a8,8,0,0,1-16,0Zm40-72a8,8,0,0,0-8,8v80a8,8,0,0,0,16,0V88A8,8,0,0,0,224,80ZM53.92,34.62A8,8,0,1,0,42.08,45.38L73.55,80H32A16,16,0,0,0,16,96v64a16,16,0,0,0,16,16H77.25l69.84,54.31A8,8,0,0,0,160,224V175.09l42.08,46.29a8,8,0,1,0,11.84-10.76Zm92.16,77.59A8,8,0,0,0,160,106.83V32a8,8,0,0,0-12.91-6.31l-39.85,31a8,8,0,0,0-1,11.7Z"></path></svg> <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" viewBox="0 0 256 256" class="pause"><path d="M160,32V224a8,8,0,0,1-12.91,6.31L77.25,176H32a16,16,0,0,1-16-16V96A16,16,0,0,1,32,80H77.25l69.84-54.31A8,8,0,0,1,160,32Zm32,64a8,8,0,0,0-8,8v48a8,8,0,0,0,16,0V104A8,8,0,0,0,192,96Zm32-16a8,8,0,0,0-8,8v80a8,8,0,0,0,16,0V88A8,8,0,0,0,224,80Z"></path></svg></button></div> <div id="lightboxWrapper" class="lightbox-wrapper"><div class="lightbox-list"></div> <button id="lightboxCloseBtn" class="btn btn-lightbox"><svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 0 1 1.414 0L10 8.586l4.293-4.293a1 1 0 1 1 1.414 1.414L11.414 10l4.293 4.293a1 1 0 0 1-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 0 1-1.414-1.414L8.586 10 4.293 5.707a1 1 0 0 1 0-1.414z" clip-rule="evenodd"></path></svg></button> <div class="lightbox-navigation"><button id="lightboxPrevBtn" data-index="0" class="btn lightbox-arrow"><svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m15 19-7-7 7-7"></path></svg></button> <button id="lightboxNextBtn" data-index="0" class="btn lightbox-arrow"><svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m9 5 7 7-7 7"></path></svg></button></div></div> <div id="qrModal" tabindex="-1" role="dialog" aria-labelledby="qrModal" aria-hidden="true" class="modal fade"><div class="modal-dialog modal-dialog-centered"><div class="modal-content" style="height: 100%;"><div style="width: 100%; aspect-ratio: 16 / 9; background-size: cover; background-position: center center; background-image: url(&quot;/images/no-image.jpg&quot;);"></div> <div class="text-center py-4 px-4"><div><div class="mx-auto"><svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="180" height="180" viewBox="0 0 180 180"><rect x="0" y="0" width="180" height="180" fill="#ffffff"></rect><g transform="scale(7.2)"><g transform="translate(0,0)"><path fill-rule="evenodd" d="M8 0L8 4L9 4L9 5L8 5L8 7L9 7L9 6L10 6L10 9L11 9L11 8L12 8L12 9L13 9L13 10L15 10L15 11L14 11L14 12L13 12L13 11L12 11L12 12L11 12L11 13L9 13L9 12L10 12L10 11L11 11L11 10L9 10L9 9L7 9L7 8L4 8L4 11L3 11L3 10L2 10L2 11L1 11L1 9L2 9L2 8L0 8L0 14L3 14L3 15L2 15L2 16L0 16L0 17L2 17L2 16L5 16L5 17L8 17L8 18L9 18L9 19L8 19L8 21L10 21L10 22L11 22L11 24L12 24L12 25L14 25L14 23L15 23L15 22L16 22L16 23L20 23L20 21L21 21L21 16L19 16L19 15L20 15L20 14L21 14L21 15L22 15L22 18L23 18L23 15L22 15L22 14L24 14L24 13L25 13L25 12L24 12L24 11L23 11L23 10L24 10L24 9L25 9L25 8L21 8L21 9L20 9L20 8L19 8L19 9L20 9L20 11L21 11L21 12L22 12L22 13L20 13L20 12L17 12L17 15L16 15L16 12L15 12L15 11L17 11L17 9L14 9L14 7L15 7L15 6L14 6L14 7L13 7L13 6L12 6L12 7L11 7L11 3L10 3L10 2L9 2L9 0ZM14 0L14 1L11 1L11 2L12 2L12 5L13 5L13 2L14 2L14 3L15 3L15 2L14 2L14 1L16 1L16 2L17 2L17 0ZM16 3L16 4L14 4L14 5L16 5L16 8L17 8L17 3ZM12 7L12 8L13 8L13 7ZM6 9L6 10L7 10L7 11L6 11L6 12L7 12L7 13L3 13L3 11L2 11L2 13L3 13L3 14L4 14L4 15L5 15L5 16L7 16L7 15L8 15L8 17L9 17L9 18L11 18L11 20L12 20L12 21L11 21L11 22L12 22L12 21L13 21L13 22L15 22L15 21L16 21L16 22L17 22L17 21L16 21L16 16L15 16L15 15L14 15L14 17L15 17L15 18L13 18L13 17L12 17L12 16L13 16L13 15L12 15L12 16L10 16L10 17L9 17L9 14L8 14L8 10L7 10L7 9ZM21 9L21 10L23 10L23 9ZM12 12L12 13L11 13L11 14L10 14L10 15L11 15L11 14L12 14L12 13L13 13L13 14L15 14L15 13L13 13L13 12ZM23 12L23 13L24 13L24 12ZM18 13L18 15L19 15L19 14L20 14L20 13ZM6 14L6 15L7 15L7 14ZM24 16L24 17L25 17L25 16ZM17 17L17 20L20 20L20 17ZM18 18L18 19L19 19L19 18ZM9 19L9 20L10 20L10 19ZM12 19L12 20L13 20L13 21L15 21L15 19L14 19L14 20L13 20L13 19ZM22 19L22 24L20 24L20 25L25 25L25 24L24 24L24 22L25 22L25 19ZM23 20L23 21L24 21L24 20ZM8 23L8 25L10 25L10 23ZM12 23L12 24L13 24L13 23ZM15 24L15 25L16 25L16 24ZM18 24L18 25L19 25L19 24ZM0 0L0 7L7 7L7 0ZM1 1L1 6L6 6L6 1ZM2 2L2 5L5 5L5 2ZM18 0L18 7L25 7L25 0ZM19 1L19 6L24 6L24 1ZM20 2L20 5L23 5L23 2ZM0 18L0 25L7 25L7 18ZM1 19L1 24L6 24L6 19ZM2 20L2 23L5 23L5 20Z" fill="#000000"></path></g></g></svg> <div style="margin-top: 10px; text-align: center;"></div></div></div> <hr style="margin-top: 1rem; margin-bottom: 1rem; border-width: 2px 0px 0px; border-style: dashed none none; border-color: rgba(0, 0, 0, 0.1) currentcolor currentcolor; border-image: none;"> <div style="text-align: center;"><strong>08 Dec 2025</strong><br> <p class="mb-0">17:40 </p> <p></p></div> <hr style="margin-top: 1rem; margin-bottom: 1rem; border-width: 2px 0px 0px; border-style: dashed none none; border-color: rgba(0, 0, 0, 0.1) currentcolor currentcolor; border-image: none;"> <div style="margin-bottom: 10px;"><div style="color: rgb(178, 178, 178);">Nama</div> <div>Nama Tamu</div></div></div> <button type="button" class="btn btn-close"><svg xmlns="http://www.w3.org/2000/svg" height="42px" width="42px" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18 18 6M6 6l12 12"></path></svg></button></div></div></div> <div id="rsvpModal" tabindex="-1" role="dialog" aria-labelledby="rsvpModal" class="modal fade"><div class="modal-dialog modal-dialog-centered"><div class="modal-content p-4" style="height: 100%;"><div class="rsvp-form show"><!----> <div class="mb-4"><div class="font-accent h4 text-center">RSVP</div></div> <form class="pt-2"> <!---->  <button type="submit" class="btn btn-primary rounded-pill btn-block mt-4 mb-2"><span>Kirim</span></button></form> <!----></div> <button type="button" class="btn btn-close"><svg xmlns="http://www.w3.org/2000/svg" height="42px" width="42px" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18 18 6M6 6l12 12"></path></svg></button></div></div></div> </main>
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

@import url("/fonts/e111viva/style.css");

@import url("/fonts/against/style.css");

@import url("https://fonts.googleapis.com/css2?family=Marcellus&display=swap");

:root { --inv-bg: #f8f8f6; --inv-base: #000000; --inv-accent: #800000; --inv-border: #d8bbb7; --menu-bg: #800000; --menu-inactive: #ffffff; --menu-active: #d0a461; --btn-color: #ffffff; --font-base: "Marcellus", serif; --font-accent: "Against", sans-serif; --font-latin: "English111 Vivace BT", cursive; }

@keyframes wave-left { 
  0% { transform: rotate(-3deg); }
  100% { transform: rotate(4deg); }
}

@keyframes wave-right { 
  0% { transform: rotate(3deg); }
  100% { transform: rotate(-4deg); }
}

.wave-left img { animation: 4s ease-in-out 0s infinite alternate none running wave-left; }

.wave-right img { animation: 4s ease-in-out 0s infinite alternate none running wave-right; }

.frame-couple::after { content: ""; position: absolute; width: 100%; height: 100%; background-image: url("/themes/phinisi-maroon/frame-couple.webp"); background-size: contain; background-repeat: no-repeat; background-position: center center; z-index: 1; }

.frame-mempelai::after { content: ""; position: absolute; width: 100%; height: 100%; background-image: url("/themes/phinisi-maroon/frame-mempelai.webp"); background-size: contain; background-repeat: no-repeat; background-position: center center; z-index: 1; }

.editor .frame-mempelai::after, .editor .frame-couple::after { z-index: -1; }

#satuMomen::before { content: ""; background-image: url("/themes/phinisi/bg-desktop.webp"); background-size: cover; background-position: center center; position: fixed; inset: 0px; z-index: -1; }

.cover .frame { display: none; }

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

@import url("/fonts/e111viva/style.css");

@import url("/fonts/against/style.css");

@import url("https://fonts.googleapis.com/css2?family=Marcellus&display=swap");

:root { --inv-bg: #f8f8f6; --inv-base: #000000; --inv-accent: #800000; --inv-border: #d8bbb7; --menu-bg: #800000; --menu-inactive: #ffffff; --menu-active: #d0a461; --btn-color: #ffffff; --font-base: "Marcellus", serif; --font-accent: "Against", sans-serif; --font-latin: "English111 Vivace BT", cursive; }

@keyframes wave-left { 
  0% { transform: rotate(-3deg); }
  100% { transform: rotate(4deg); }
}

@keyframes wave-right { 
  0% { transform: rotate(3deg); }
  100% { transform: rotate(-4deg); }
}

.wave-left img { animation: 4s ease-in-out 0s infinite alternate none running wave-left; }

.wave-right img { animation: 4s ease-in-out 0s infinite alternate none running wave-right; }

.frame-couple::after { content: ""; position: absolute; width: 100%; height: 100%; background-image: url("/themes/phinisi-maroon/frame-couple.webp"); background-size: contain; background-repeat: no-repeat; background-position: center center; z-index: 1; }

.frame-mempelai::after { content: ""; position: absolute; width: 100%; height: 100%; background-image: url("/themes/phinisi-maroon/frame-mempelai.webp"); background-size: contain; background-repeat: no-repeat; background-position: center center; z-index: 1; }

.editor .frame-mempelai::after, .editor .frame-couple::after { z-index: -1; }

#satuMomen::before { content: ""; background-image: url("/themes/phinisi/bg-desktop.webp"); background-size: cover; background-position: center center; position: fixed; inset: 0px; z-index: -1; }

.cover .frame { display: none; }

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

</style></head><body><div></div></div></body></html></template></merlin-floating-cta><div id="noty_layout__topCenter" class="noty_layout"><div id="noty_bar_d078875d-59af-4295-b49e-3bdf96bf5fdb" class="noty_bar noty_type__error noty_theme__relax noty_close_with_click noty_has_timeout"><div class="noty_body">Too Many Attempts.</div><div class="noty_progressbar" style="transition: width 4000ms linear; width: 0%;"></div></div></div></body></html>
