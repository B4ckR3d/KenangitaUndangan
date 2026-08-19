<!DOCTYPE html>
<?php
/**
 * Theme Template: Lion February
 * Category: Umum & Seminar
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

@import url("https://fonts.googleapis.com/css2?family=Monsieur+La+Doulaise&family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap");

:root { --inv-bg: #ad0507; --inv-base: #ffffff; --inv-accent: #000000; --inv-border: #ffffff; --menu-bg: #ad0507; --menu-inactive: #ffffff; --menu-active: #96070a; --btn-color: #ffffff; --font-base: "Montserrat", sans-serif; --font-accent: "Montserrat", sans-serif; --font-latin: "Monsieur La Doulaise", cursive; }

.rsvp-form .h4, .rsvp-form .btn-rsvp-update { display: none; }

.rsvp-form::before { content: "QUIZ"; width: 100%; text-align: center; display: block; font-size: 32px; font-weight: bold; letter-spacing: 8px; }

.spin { animation: 15s linear 0s infinite normal none running spin; }

@-webkit-keyframes spin { 
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

@keyframes spin { 
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

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
  
    <meta name="title" content="Umum &amp; Seminar - Lion February">
    <meta name="description" content="tema undangan umum brand lion parcel warna merah - Buat undangan online elegan untuk perusahaan seperti launching produk dan acara penting lainnya. Praktis, menarik, dan bisa dicoba gratis!">
    <meta itemprop="image" content="http://app.kitaberdua.com/themes/lion-february/lion-february.webp">
        <link rel="icon" type="image/x-icon" href="https://assets.satumomen.com/images/media/6108-media-1682180901.png">
        <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website">
    <meta property="og:url" content="http://app.kitaberdua.com/preview/lion-february">
    <meta property="og:title" content="Umum &amp; Seminar - Lion February">
    <meta property="og:description" content="tema undangan umum brand lion parcel warna merah - Buat undangan online elegan untuk perusahaan seperti launching produk dan acara penting lainnya. Praktis, menarik, dan bisa dicoba gratis!">
    <meta property="og:image" content="http://app.kitaberdua.com/themes/lion-february/lion-february.webp">

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
      <source src="<?= !empty($musiknya) ? $musiknya : 'https://assets.satumomen.com/musics/kool-the-gang-celebration-3gwjfufyy6m.mp3' ?>">
    </audio> <div id="workspace-container" class="position-fixed h-100 w-100" style="overflow: hidden;"><div id="panZoom" class="position-fixed h-100 w-100" style="inset: 0px; transform-origin: 50% 50%; transform: scale(1.07473) translate(0px, 0px);"><div class="h-100 w-100 d-flex align-items-center justify-content-center"><div class="canvas not-open" style="height: 736px;"><div id="satuMomen" data-guest="<?= \esc($invite); ?>" data-group="VIP" style="height: 736px; display: block;"><div class="satumomen_track"><ul class="satumomen_list"><li class="satumomen_slide satumomen_cover" style=""><div class="container-mobile cover" style="background-image: url(&quot;http://app.kitaberdua.com/themes/lion-february/bg.webp&quot;);"><div class="frame"><img src="https://app.kitaberdua.com/themes/lion-february/tl.webp" alt="frame" class="frame-tl animate__animated animate__fadeInLeft animate__slower"> <div class="frame-tr d-flex align-items-start justify-content-end animate__animated animate__fadeInTopRight animate__slower"><img src="https://app.kitaberdua.com/themes/lion-february/tr-1.webp" alt="frame" class="animate__animated animate__swing animate__infinite" style="animation-duration: 8000ms; animation-delay: 400ms; width: 50%; height: auto; margin-right: -13%;"></div> <div class="frame-tr d-flex align-items-start justify-content-end animate__animated animate__fadeInTopRight animate__slower"><img src="https://app.kitaberdua.com/themes/lion-february/tr-2.webp" alt="frame" class="animate__animated animate__swing animate__infinite" style="animation-duration: 7000ms; animation-delay: 300ms; width: 50%; height: auto; margin-right: 13%;"></div> <img src="https://app.kitaberdua.com/themes/lion-february/bm.webp" alt="frame" class="spin" style="position: absolute; left: 0px; right: 0px; bottom: -300px; width: 100%;"></div> <div class="h-100 w-100 d-flex justify-content-center align-items-center"><div class="w-100 pt-5"><div class="image-editable mx-auto animate__animated animate__fadeInDown animate__slower" style="height: 38px; width: 100%;"><img src="https://assets.satumomen.com/images/galleries/784813-gallery-cBONrr6eNn.png" alt="logo.webp" style="width: 100%; height: 100%; object-fit: contain;"></div> <div class="text-center my-5"><div class="image-editable mx-auto animate__animated animate__zoomIn animate__slower" style="height: 200px; width: 100%;"><img src="https://assets.satumomen.com/images/galleries/791499-gallery-hdX7W9eJaM.webp" alt="logo.webp" style="width: 100%; height: 100%; object-fit: contain;"></div></div><div class="text-center mx-auto" style="max-width: 300px;"><div class="text-center mb-3 p-2 animate__animated animate__zoomIn animate__slower"><div class="editable mb-1 animate__animated animate__fadeInUp animate__slower" style="font-size: 14px;">Kepada Yth.</div> 
    <div id="guestNameSlot" class="editable h5 mb-4 font-weight-bold animate__animated animate__fadeInUp animate__slower" style="font-size: 18px; color: inherit;">
      <?= \esc($invite); ?>
    </div>
  </div><button class="btn-open-invitation btn rounded-pill mb-4 animate__animated animate__fadeInUp animate__slow" style="font-size: 14px; color: var(--inv-base); background-image: url(&quot;https://assets.satumomen.com/images/galleries/784853-gallery-p5ByuPhzBj.webp&quot;); background-size: contain; background-position: center center; background-repeat: no-repeat; padding: 16px; min-width: 200px;">Open Newsletter </button></div></div></div></div></li> <li class="satumomen_slide" style="display: none;"><div class="container-mobile" style="background-image: url(&quot;http://app.kitaberdua.com/themes/lion-february/bg.webp&quot;);"><div class="frame"><img src="https://app.kitaberdua.com/themes/lion-february/tl.webp" alt="frame" class="frame-tl animate__animated animate__fadeInLeft animate__slower"> <div class="frame-tr d-flex align-items-start justify-content-end animate__animated animate__fadeInTopRight animate__slower"><img src="https://app.kitaberdua.com/themes/lion-february/tr-1.webp" alt="frame" class="animate__animated animate__swing animate__infinite" style="animation-duration: 8000ms; animation-delay: 400ms; width: 50%; height: auto; margin-right: -13%;"></div> <div class="frame-tr d-flex align-items-start justify-content-end animate__animated animate__fadeInTopRight animate__slower"><img src="https://app.kitaberdua.com/themes/lion-february/tr-2.webp" alt="frame" class="animate__animated animate__swing animate__infinite" style="animation-duration: 7000ms; animation-delay: 300ms; width: 50%; height: auto; margin-right: 13%;"></div> <img src="https://app.kitaberdua.com/themes/lion-february/bm.webp" alt="frame" class="spin" style="position: absolute; left: 0px; right: 0px; bottom: -300px; width: 100%;"></div> <div class="position-relative h-100 d-flex justify-content-center align-items-center"><div class="image-editable h-100" style="position: absolute; left: -30px; right: -30px; bottom: -30px;"><img src="https://assets.satumomen.com/images/galleries/784853-gallery-krBxxRZDZb.gif" alt="logo.webp" style="width: 100%; height: 100%; object-fit: cover;"></div> <div class="image-editable" style="position: absolute; left: -60px; bottom: -30px; width: 50%;"><img src="https://assets.satumomen.com/images/galleries/784853-gallery-jUV6DitMPV.gif" alt="logo.webp" style="width: 100%; height: 100%; object-fit: cover;"></div><div class="image-editable" style="position: absolute; right: -60px; bottom: -30px; width: 50%;"><img src="https://assets.satumomen.com/images/galleries/784853-gallery-jUV6DitMPV.gif" alt="logo.webp" style="width: 100%; height: 100%; object-fit: cover;"></div><div class="w-100 position-relative"><div class="mb-4 image-editable animate__animated animate__fadeInRight animate__slower" style="margin-top: -50px;"><img src="https://assets.satumomen.com/images/galleries/784853-gallery-wUIrJTT1gs.png" alt="no-image.jpg" style="width: 100%; height: 100%; object-fit: contain; scale: 0.8; margin-bottom: -23px;"></div> <div class="text-center mb-3 font-weight-bold animate__animated animate__fadeInDown animate__slower"><div class="editable font-brittany-signature" style="font-size: 24px;">Selamat Ulang Tahun</div> <div class="h4 mb-0 editable" style="font-size: 20px;">Lion Parcel yang ke-13</div></div><div class="editable text-justify animate__animated animate__fadeInUp animate__slower" style="font-size: 11px;">Selamat ulang tahun ke-13 Lion Parcel. Perjalanan selama 13 tahun ini merupakan hasil dari kerja keras, konsistensi, dan kolaborasi seluruh pihak bersama para mitra dalam menghadirkan layanan logistik yang terus bertumbuh dan relevan.<br><br>Mengusung tema #13eyond, Lion Parcel berkomitmen untuk melangkah lebih jauh dengan memperkuat kualitas layanan, memperluas kolaborasi, serta memastikan pertumbuhan yang berkelanjutan di setiap lini bisnis.<br><br>Febri Andika<br>Chief Retail Officer<br></div></div></div></div></li> <li class="satumomen_slide" style="display: none;"><div class="container-mobile" style="background-image: url(&quot;http://app.kitaberdua.com/themes/lion-february/bg.webp&quot;);"><div class="frame"><img src="https://app.kitaberdua.com/themes/lion-february/tl.webp" alt="frame" class="frame-tl animate__animated animate__fadeInLeft animate__slower"> <div class="frame-tr d-flex align-items-start justify-content-end animate__animated animate__fadeInTopRight animate__slower"><img src="https://app.kitaberdua.com/themes/lion-february/tr-1.webp" alt="frame" class="animate__animated animate__swing animate__infinite" style="animation-duration: 8000ms; animation-delay: 400ms; width: 50%; height: auto; margin-right: -13%;"></div> <div class="frame-tr d-flex align-items-start justify-content-end animate__animated animate__fadeInTopRight animate__slower"><img src="https://app.kitaberdua.com/themes/lion-february/tr-2.webp" alt="frame" class="animate__animated animate__swing animate__infinite" style="animation-duration: 7000ms; animation-delay: 300ms; width: 50%; height: auto; margin-right: 13%;"></div> <img src="https://app.kitaberdua.com/themes/lion-february/bm.webp" alt="frame" class="spin" style="position: absolute; left: 0px; right: 0px; bottom: -300px; width: 100%;"></div> <div class="h-100 d-flex justify-content-center align-items-center"><div class="w-100"><div class="image-editable animate__animated animate__fadeInDown animate__slower" style="height: 150px;"><img src="https://assets.satumomen.com/images/galleries/784813-gallery-3REuTqvnso.png" alt="no-image.jpg" style="width: 100%; height: 100%; object-fit: contain;"></div> <div class="w-100"><div class="editable text-center mb-3 font-weight-bold animate__animated animate__fadeInUp animate__slower" style="font-size: 16px;">Selamat Kepada TOP 10 Pemenang Liga Nasional periode Januari 2026!<br></div><div class="animate__animated animate__fadeInUp animate__slower d-flex flex-column" style="gap: 6px; line-height: 1.2;"><div class="py-1 d-flex flex-row align-items-center" style="gap: 6px; background: linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, rgb(255, 222, 119) 62%, rgb(190, 150, 28) 100%); border-radius: 0px 2rem 2rem 0px;"><img src="https://assets.satumomen.com/images/galleries/784853-gallery-HQo4385WFk.png" height="25" width="25" alt="784853-gallery-HQo4385WFk.png" style="float: none; border-radius: 100%; overflow: hidden; object-fit: cover; margin-right: 30px; transform: scale(1.5);"> <div class="editable" style="min-width: 210px; font-size: 14px; color: rgb(255, 255, 255); text-align: left;">POS SKTM</div><div class="editable" style="font-size: 14px; color: rgb(255, 255, 255); text-align: center;">KOE</div></div><div class="py-1 d-flex flex-row align-items-center" style="gap: 6px; background: linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, rgb(186, 184, 184) 62%, rgb(130, 130, 130) 100%); border-radius: 0px 2rem 2rem 0px;"><img src="https://assets.satumomen.com/images/galleries/784853-gallery-3xKnbA1ePA.png" height="25" width="25" alt="784853-gallery-3xKnbA1ePA.png" style="float: none; border-radius: 100%; overflow: hidden; object-fit: cover; margin-right: 30px; transform: scale(1.5);"> <div class="editable" style="min-width: 210px; font-size: 14px; color: rgb(255, 255, 255); text-align: left;">POS AMBON - PT. MATRAS</div><div class="editable" style="font-size: 14px; color: rgb(255, 255, 255); text-align: center;">AMQ</div></div><div class="py-1 d-flex flex-row align-items-center" style="gap: 6px; background: linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, rgb(191, 106, 43) 62%, rgb(144, 60, 8) 100%); border-radius: 0px 2rem 2rem 0px;"><img src="https://assets.satumomen.com/images/galleries/784853-gallery-ZCAGHpAtG3.png" height="25" width="25" alt="784853-gallery-ZCAGHpAtG3.png" style="float: none; border-radius: 100%; overflow: hidden; object-fit: cover; margin-right: 30px; transform: scale(1.5);"> <div class="editable" style="min-width: 210px; font-size: 14px; color: rgb(255, 255, 255); text-align: left;">CRAB HOUSE</div><div class="editable" style="font-size: 14px; color: rgb(255, 255, 255); text-align: center;">SUB</div></div><div class="py-1 d-flex flex-row align-items-center" style="gap: 6px; background: linear-gradient(90deg, rgba(207, 0, 0, 0) 0%, rgb(255, 0, 0) 62%, rgb(255, 0, 0) 100%); border-radius: 0px 2rem 2rem 0px;"><div class="pl-1 editable font-italic font-weight-bold" style="min-width: 55px; font-size: 16px; color: rgb(255, 255, 255);"> 4</div> <div class="editable" style="min-width: 210px; font-size: 14px; color: rgb(255, 255, 255); text-align: left;">POS LION PARCEL<br>IMAM MUNDAR</div><div class="editable" style="font-size: 14px; color: rgb(255, 255, 255); text-align: center;">PKU</div></div><div class="py-1 d-flex flex-row align-items-center" style="gap: 6px; background: linear-gradient(90deg, rgba(207, 0, 0, 0) 0%, rgb(255, 0, 0) 62%, rgb(255, 0, 0) 100%); border-radius: 0px 2rem 2rem 0px;"><div class="pl-1 editable font-italic font-weight-bold" style="min-width: 55px; font-size: 16px; color: rgb(255, 255, 255);">5</div> <div class="editable" style="min-width: 210px; font-size: 14px; color: rgb(255, 255, 255); text-align: left;">LION PARCEL ER</div><div class="editable" style="font-size: 14px; color: rgb(255, 255, 255); text-align: center;">CGK</div></div><div class="py-1 d-flex flex-row align-items-center" style="gap: 6px; background: linear-gradient(90deg, rgba(207, 0, 0, 0) 0%, rgb(255, 0, 0) 62%, rgb(255, 0, 0) 100%); border-radius: 0px 2rem 2rem 0px;"><div class="pl-1 editable font-italic font-weight-bold" style="min-width: 55px; font-size: 16px; color: rgb(255, 255, 255);">6</div> <div class="editable" style="min-width: 210px; font-size: 14px; color: rgb(255, 255, 255); text-align: left;">POS LION PARCEL CIPTA<br>KARYA PEKANBARU</div><div class="editable" style="font-size: 14px; color: rgb(255, 255, 255); text-align: center;">PKU</div></div><div class="py-1 d-flex flex-row align-items-center" style="gap: 6px; background: linear-gradient(90deg, rgba(207, 0, 0, 0) 0%, rgb(255, 0, 0) 62%, rgb(255, 0, 0) 100%); border-radius: 0px 2rem 2rem 0px;"><div class="pl-1 editable font-italic font-weight-bold" style="min-width: 55px; font-size: 16px; color: rgb(255, 255, 255);">7</div> <div class="editable" style="min-width: 210px; font-size: 14px; color: rgb(255, 255, 255); text-align: left;">KREKOT BUNDER</div><div class="editable" style="font-size: 14px; color: rgb(255, 255, 255); text-align: center;">CGK</div></div><div class="py-1 d-flex flex-row align-items-center" style="gap: 6px; background: linear-gradient(90deg, rgba(207, 0, 0, 0) 0%, rgb(255, 0, 0) 62%, rgb(255, 0, 0) 100%); border-radius: 0px 2rem 2rem 0px;"><div class="pl-1 editable font-italic font-weight-bold" style="min-width: 55px; font-size: 16px; color: rgb(255, 255, 255);">8</div> <div class="editable" style="min-width: 210px; font-size: 14px; color: rgb(255, 255, 255); text-align: left;">LION PARCEL BANG MAN</div><div class="editable" style="font-size: 14px; color: rgb(255, 255, 255); text-align: center;">BTH</div></div><div class="py-1 d-flex flex-row align-items-center" style="gap: 6px; background: linear-gradient(90deg, rgba(207, 0, 0, 0) 0%, rgb(255, 0, 0) 62%, rgb(255, 0, 0) 100%); border-radius: 0px 2rem 2rem 0px;"><div class="pl-1 editable font-italic font-weight-bold" style="min-width: 55px; font-size: 16px; color: rgb(255, 255, 255);">9</div> <div class="editable" style="min-width: 210px; font-size: 14px; color: rgb(255, 255, 255); text-align: left;">JATATUR SESETAN</div><div class="editable" style="font-size: 14px; color: rgb(255, 255, 255); text-align: center;">DPS</div></div><div class="py-1 d-flex flex-row align-items-center" style="gap: 6px; background: linear-gradient(90deg, rgba(207, 0, 0, 0) 0%, rgb(255, 0, 0) 62%, rgb(255, 0, 0) 100%); border-radius: 0px 2rem 2rem 0px;"><div class="pl-1 editable font-italic font-weight-bold" style="min-width: 55px; font-size: 16px; color: rgb(255, 255, 255);">10</div> <div class="editable" style="min-width: 210px; font-size: 14px; color: rgb(255, 255, 255); text-align: left;">BAHARI LION PARCEL</div><div class="editable" style="font-size: 14px; color: rgb(255, 255, 255); text-align: center;">BTH</div></div></div></div></div></div></div></li> <li class="satumomen_slide" style="display: none;"><div class="container-mobile" style="background-image: url(&quot;http://app.kitaberdua.com/themes/lion-february/bg.webp&quot;);"><div class="frame"><img src="https://app.kitaberdua.com/themes/lion-february/tl.webp" alt="frame" class="frame-tl animate__animated animate__fadeInLeft animate__slower"> <div class="frame-tr d-flex align-items-start justify-content-end animate__animated animate__fadeInTopRight animate__slower"><img src="https://app.kitaberdua.com/themes/lion-february/tr-1.webp" alt="frame" class="animate__animated animate__swing animate__infinite" style="animation-duration: 8000ms; animation-delay: 400ms; width: 50%; height: auto; margin-right: -13%;"></div> <div class="frame-tr d-flex align-items-start justify-content-end animate__animated animate__fadeInTopRight animate__slower"><img src="https://app.kitaberdua.com/themes/lion-february/tr-2.webp" alt="frame" class="animate__animated animate__swing animate__infinite" style="animation-duration: 7000ms; animation-delay: 300ms; width: 50%; height: auto; margin-right: 13%;"></div> <img src="https://app.kitaberdua.com/themes/lion-february/bm.webp" alt="frame" class="spin" style="position: absolute; left: 0px; right: 0px; bottom: -300px; width: 100%;"></div> <div class="px-3 pt-3 h-100 d-flex justify-content-center align-items-center" style="background-color: rgb(255, 246, 238); border-radius: 1rem;"><div class="w-100"><div class="w-100"><div class="h4 editable text-center mb-3 font-weight-bold animate__animated animate__fadeInUp animate__slower" style="font-size: 20px; color: rgb(199, 0, 0);">Ucapan Selamat<br>KEPADA POS YANG MASUK<br>LIGA LIOLIO</div> <div class="text-center mb-4 animate__animated animate__fadeInDown animate__slower"></div> <div></div></div> <div class="d-flex align-items-center justify-content-center animate__animated animate__fadeInLeft animate__slower" style="background-image: url(&quot;https://assets.satumomen.com/images/galleries/784853-gallery-K1v9ZjnbnH.webp&quot;); background-size: contain; background-repeat: no-repeat; background-position: center center; height: 275px; z-index: 1; position: relative;"><div style="width: 62%; transform: rotate(-4deg);"><div class="editable mb-2" style="color: rgb(0, 0, 0); font-size: 8px;">âSelamat kepada teman-teman POS perwakilan area Jakarta Pusat yg masuk 50 besar liga nasional dan area. Semoga kita semua area Jakarta Pusat ikut berpartisipasi lebih banyak lagi dan masuk 50 besar ke dalam ligaâ</div> <div class="editable font-weight-bold" style="color: rgb(0, 0, 0); font-size: 8px;">Bapak Bakhtiar Captain Jakpus</div><div class="editable font-italic" style="color: rgb(0, 0, 0); font-size: 6px;">Perwakilan Captain Jakpus yang Masuk Liga Area</div></div></div><div class="d-flex align-items-center justify-content-center animate__animated animate__fadeInRight animate__slower" style="background-image: url(&quot;https://assets.satumomen.com/images/galleries/784853-gallery-wQ6XjOq3dk.webp&quot;); background-size: contain; background-repeat: no-repeat; background-position: center center; height: 275px; margin-top: -80px;"><div style="width: 62%; transform: rotate(4deg);"><div class="editable mb-2" style="color: rgb(0, 0, 0); font-size: 8px;">"Selamat Bapak/Ibu yang masuk Top Liga Area Bulan Januari 2026, POS Sakura Mitra Wisata, Lion Parcel Sei Raya Dalam, Lion Parcel Tanjungpura dan Lion Parcel Perdana Square.<br><br>Dan untuk semua POS tetap Semangat Imlek tahun ini hoki untuk semuanya ð¥³ð¥³"</div> <div class="editable font-weight-bold" style="color: rgb(0, 0, 0); font-size: 8px;">Lion Parcel Raya Wendit</div><div class="editable font-italic" style="color: rgb(0, 0, 0); font-size: 6px;">POS Captain Malang Lion Parcel PCU Kepanjen</div></div></div></div></div></div></li> <li class="satumomen_slide" style="display: none;"><div class="container-mobile" style="background-image: url(&quot;http://app.kitaberdua.com/themes/lion-february/bg.webp&quot;);"><div class="frame"><img src="https://app.kitaberdua.com/themes/lion-february/tl.webp" alt="frame" class="frame-tl animate__animated animate__fadeInLeft animate__slower"> <div class="frame-tr d-flex align-items-start justify-content-end animate__animated animate__fadeInTopRight animate__slower"><img src="https://app.kitaberdua.com/themes/lion-february/tr-1.webp" alt="frame" class="animate__animated animate__swing animate__infinite" style="animation-duration: 8000ms; animation-delay: 400ms; width: 50%; height: auto; margin-right: -13%;"></div> <div class="frame-tr d-flex align-items-start justify-content-end animate__animated animate__fadeInTopRight animate__slower"><img src="https://app.kitaberdua.com/themes/lion-february/tr-2.webp" alt="frame" class="animate__animated animate__swing animate__infinite" style="animation-duration: 7000ms; animation-delay: 300ms; width: 50%; height: auto; margin-right: 13%;"></div> <img src="https://app.kitaberdua.com/themes/lion-february/bm.webp" alt="frame" class="spin" style="position: absolute; left: 0px; right: 0px; bottom: -300px; width: 100%;"></div> <div class="h-100 d-flex justify-content-center align-items-center"><div class="w-100"><div class="image-editable animate__animated animate__fadeInDown animate__slower" style="height: 150px;"><img src="https://assets.satumomen.com/images/galleries/784813-gallery-3REuTqvnso.png" alt="no-image.jpg" style="width: 100%; height: 100%; object-fit: contain;"></div> <div class="w-100"><div class="editable text-center mb-3 font-weight-bold animate__animated animate__fadeInDown animate__slower" style="font-size: 20px;">Periode Baru Liga LIOLIO! Semangat kejar hadiah di periode Februari ini!</div><div class="editable text-left animate__animated animate__fadeInDown animate__slower" style="font-size: 14px;">Jangan sampai kalah semangat dengan POS lain, berikut ketentuan detailnya.<br></div><div class="animate__animated animate__fadeInUp animate__slower"><div class="my-2 px-2 editable text-left font-weight-bold" style="font-size: 14px; background: linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 58%, rgba(255, 255, 255, 0) 100%); color: rgb(173, 5, 7);">Kategori Liga</div><ul class="pl-3"><li><div class="editable" style="font-size: 12px;">Liga Nasional: Kompetisi revenue nasional, Top 100 pemenang bulanan</div></li> <li><div class="editable" style="font-size: 12px;">Liga Area: Kompetisi revenue per area (POS &gt;6 bulan), 50 pemenang per area (total 6 area).</div></li><li><div class="editable" style="font-size: 12px;">Liga POS Baru: Kompetisi revenue POS Baru (usia 1â6 bulan), 50 pemenang bulanan.</div></li></ul></div> <div class="animate__animated animate__fadeInUp animate__slower"><div class="my-2 px-2 editable text-left font-weight-bold" style="font-size: 11px; background: linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 58%, rgba(255, 255, 255, 0) 100%); color: rgb(173, 5, 7);">Dasar Perhitungan</div><ul class="pl-3"><li><div class="editable" style="font-size: 12px;">Perhitungan menggunakan nilai STT dengan status POD.</div></li> <li><div class="editable" style="font-size: 12px;">Revenue yang dihitung meliputi Retail + CBP (STT 10, 11, 19)</div></li></ul></div></div></div></div></div></li> <li class="satumomen_slide" style="display: none;"><div class="container-mobile" style="background-image: url(&quot;http://app.kitaberdua.com/themes/lion-february/bg.webp&quot;);"><div class="frame"><img src="https://app.kitaberdua.com/themes/lion-february/tl.webp" alt="frame" class="frame-tl animate__animated animate__fadeInLeft animate__slower"> <div class="frame-tr d-flex align-items-start justify-content-end animate__animated animate__fadeInTopRight animate__slower"><img src="https://app.kitaberdua.com/themes/lion-february/tr-1.webp" alt="frame" class="animate__animated animate__swing animate__infinite" style="animation-duration: 8000ms; animation-delay: 400ms; width: 50%; height: auto; margin-right: -13%;"></div> <div class="frame-tr d-flex align-items-start justify-content-end animate__animated animate__fadeInTopRight animate__slower"><img src="https://app.kitaberdua.com/themes/lion-february/tr-2.webp" alt="frame" class="animate__animated animate__swing animate__infinite" style="animation-duration: 7000ms; animation-delay: 300ms; width: 50%; height: auto; margin-right: 13%;"></div> <img src="https://app.kitaberdua.com/themes/lion-february/bm.webp" alt="frame" class="spin" style="position: absolute; left: 0px; right: 0px; bottom: -300px; width: 100%;"></div> <div class="position-relative h-100 d-flex justify-content-center align-items-center"><div class="image-editable h-100" style="position: absolute; left: -30px; right: -30px; bottom: -30px;"><img src="https://assets.satumomen.com/images/galleries/784853-gallery-krBxxRZDZb.gif" alt="logo.webp" style="width: 100%; height: 100%; object-fit: cover;"></div> <div class="image-editable" style="position: absolute; left: -60px; bottom: -30px; width: 50%;"><img src="https://assets.satumomen.com/images/galleries/784853-gallery-jUV6DitMPV.gif" alt="logo.webp" style="width: 100%; height: 100%; object-fit: cover;"></div><div class="image-editable" style="position: absolute; right: -60px; bottom: -30px; width: 50%;"><img src="https://assets.satumomen.com/images/galleries/784853-gallery-jUV6DitMPV.gif" alt="logo.webp" style="width: 100%; height: 100%; object-fit: cover;"></div><div class="w-100 position-relative"><div class="mb-4 image-editable animate__animated animate__fadeInRight animate__slower" style="margin-top: -50px;"><img src="https://assets.satumomen.com/images/galleries/784853-gallery-QQLCk0LXp5.png" alt="no-image.jpg" style="margin-bottom: -40px; width: 100%; height: 100%; object-fit: contain; scale: 0.8;"></div> <div class="text-center mb-1 font-weight-bold animate__animated animate__fadeInDown animate__slower"><div class="h4 mb-0 editable font-weight-bold" style="font-size: 20px;">Juara 1 Liga POS Baru!</div></div><div class="editable text-justify animate__animated animate__fadeInUp animate__slower" style="font-size: 11px;">Saya bergabung sebagai agen Lion Parcel sejak Agustus 2025. Di awal, volume pelanggan belum konsisten, sehingga saya aktif mempromosikan ke lingkungan sekitar dan mengandalkan word of mouth. Seiring waktu, POS saya mulai dikenal dan pelanggan pun berdatangan.<br><br>Menurut saya, pertumbuhan yang konsisten datang dari pelayanan maksimal, komunikasi dua arah dengan pelanggan, serta promosi dan branding melalui WhatsApp. Untuk POS baru, jangan hanya diam di outlet, tapi lebih aktif dan agresif di lapangan agar pelanggan baru datang dan pelanggan lama tetap loyal.<br><br>Bapak Hairullah,<br>POS Lion Parcel Gesya Eternal C3<br></div></div></div></div></li> <li class="satumomen_slide" style="display: none;"><div class="container-mobile" style="background-image: url(&quot;http://app.kitaberdua.com/themes/lion-february/bg.webp&quot;);"><div class="frame"><img src="https://app.kitaberdua.com/themes/lion-february/tl.webp" alt="frame" class="frame-tl animate__animated animate__fadeInLeft animate__slower"> <div class="frame-tr d-flex align-items-start justify-content-end animate__animated animate__fadeInTopRight animate__slower"><img src="https://app.kitaberdua.com/themes/lion-february/tr-1.webp" alt="frame" class="animate__animated animate__swing animate__infinite" style="animation-duration: 8000ms; animation-delay: 400ms; width: 50%; height: auto; margin-right: -13%;"></div> <div class="frame-tr d-flex align-items-start justify-content-end animate__animated animate__fadeInTopRight animate__slower"><img src="https://app.kitaberdua.com/themes/lion-february/tr-2.webp" alt="frame" class="animate__animated animate__swing animate__infinite" style="animation-duration: 7000ms; animation-delay: 300ms; width: 50%; height: auto; margin-right: 13%;"></div> <img src="https://app.kitaberdua.com/themes/lion-february/bm.webp" alt="frame" class="spin" style="position: absolute; left: 0px; right: 0px; bottom: -300px; width: 100%;"></div> <div class="d-flex justify-content-center align-items-center" style="height: 100%;"><div style="width: 100%;"><div class="mb-4 image-editable animate__animated animate__fadeInRight animate__slower" style="margin-top: -50px;"><img src="https://assets.satumomen.com/images/galleries/784853-gallery-4wEtu9Gx4o.png" alt="no-image.jpg" style="margin-bottom: -40px; width: 100%; height: 100%; object-fit: contain; scale: 0.8;"></div> <div class="text-center animate__animated animate__fadeInUp animate__slower"><div class="editable text-center font-weight-bold h4 mb-2" style="font-size: 20px;">Dari Naik Turun Omset hingga Siap Tangani Proyek Besar<br></div><div class="editable quotes text-left" style="font-size: 11px;">Sebagai mitra Lion Parcel, saya telah melalui berbagai dinamika bisnis, mulai dari omset yang naik turun hingga tantangan saat menghadapi peluang proyek besar. Salah satu kendala utama yang sering saya rasakan adalah keterbatasan modal di awal, yang kerap membuat langkah terasa ragu.<br><br>Kini, cerita itu berubah.<br><br>Sejak bergabung dengan program Corporate by POS (CBP), kendala tersebut dapat teratasi. Dengan dukungan modal dari CBP, saya bisa lebih percaya diri menangani proyek berskala besar tanpa harus khawatir soal kesiapan dana.<br><br>Ibu Yudi<br>LION PARCEL KOMPLEK DPR MPR 2<br></div></div></div></div></div></li> <li class="satumomen_slide" style="display: none;"><div class="container-mobile" style="background-image: url(&quot;http://app.kitaberdua.com/themes/lion-february/bg.webp&quot;);"><div class="frame"><img src="https://app.kitaberdua.com/themes/lion-february/tl.webp" alt="frame" class="frame-tl animate__animated animate__fadeInLeft animate__slower"> <div class="frame-tr d-flex align-items-start justify-content-end animate__animated animate__fadeInTopRight animate__slower"><img src="https://app.kitaberdua.com/themes/lion-february/tr-1.webp" alt="frame" class="animate__animated animate__swing animate__infinite" style="animation-duration: 8000ms; animation-delay: 400ms; width: 50%; height: auto; margin-right: -13%;"></div> <div class="frame-tr d-flex align-items-start justify-content-end animate__animated animate__fadeInTopRight animate__slower"><img src="https://app.kitaberdua.com/themes/lion-february/tr-2.webp" alt="frame" class="animate__animated animate__swing animate__infinite" style="animation-duration: 7000ms; animation-delay: 300ms; width: 50%; height: auto; margin-right: 13%;"></div> <img src="https://app.kitaberdua.com/themes/lion-february/bm.webp" alt="frame" class="spin" style="position: absolute; left: 0px; right: 0px; bottom: -300px; width: 100%;"></div> <div class="position-relative h-100 d-flex justify-content-center align-items-center"><div class="image-editable h-100" style="position: absolute; left: -30px; right: -30px; bottom: -30px;"><img src="https://assets.satumomen.com/images/galleries/784853-gallery-krBxxRZDZb.gif" alt="logo.webp" style="width: 100%; height: 100%; object-fit: cover;"></div> <div class="image-editable" style="position: absolute; left: -60px; bottom: -30px; width: 50%;"><img src="https://assets.satumomen.com/images/galleries/784853-gallery-jUV6DitMPV.gif" alt="logo.webp" style="width: 100%; height: 100%; object-fit: cover;"></div><div class="image-editable" style="position: absolute; right: -60px; bottom: -30px; width: 50%;"><img src="https://assets.satumomen.com/images/galleries/784853-gallery-jUV6DitMPV.gif" alt="logo.webp" style="width: 100%; height: 100%; object-fit: cover;"></div><div class="w-100 position-relative"><div class="mb-4 image-editable animate__animated animate__fadeInRight animate__slower" style="margin-top: -50px;"><img src="https://assets.satumomen.com/images/galleries/784853-gallery-NwQp8xXl0H.png" alt="no-image.jpg" style="width: 100%; height: 100%; object-fit: contain;"></div> <div class="text-center mb-3 font-weight-bold animate__animated animate__fadeInDown animate__slower"><div class="editable font-brittany-signature" style="font-size: 24px;">Selamat Ulang Tahun</div> <div class="h4 mb-0 editable" style="font-size: 20px;">Lion Parcel yang ke-13</div></div><div class="editable text-justify animate__animated animate__fadeInUp animate__slower" style="font-size: 11px;">Saya bergabung sebagai Mitra Lion Parcel sejak tahun 2022. Di awal perjalanan, kondisi POS masih cukup sepi customer, sehingga saya berinisiatif untuk lebih aktif dan tidak hanya menunggu kiriman datang.<br><br>Berbagai upaya pun saya lakukan, memanfaatkan aplikasi Driver untuk pickup barang serta melakukan pendekatan ke lingkungan sekitar. Pengalaman ini menjadi bagian penting dalam proses saya bertumbuh bersama Lion Parcel.<br><br>Seiring bertambahnya usia Lion Parcel yang kini memasuki tahun ke-13, saya berharap Lion Parcel terus berkembang, semakin jaya, dan mampu memperkuat sinergi bersama Mitra POS di seluruh Indonesia ke depannya.<br><br>Ibu Dewi<br>POS Captain Lion Parcel Bilabong<br></div></div></div></div></li> <li class="satumomen_slide" style="display: none;"><div class="container-mobile" style="background-image: url(&quot;http://app.kitaberdua.com/themes/lion-february/bg.webp&quot;);"><div class="frame"><img src="https://app.kitaberdua.com/themes/lion-february/tl.webp" alt="frame" class="frame-tl animate__animated animate__fadeInLeft animate__slower"> <div class="frame-tr d-flex align-items-start justify-content-end animate__animated animate__fadeInTopRight animate__slower"><img src="https://app.kitaberdua.com/themes/lion-february/tr-1.webp" alt="frame" class="animate__animated animate__swing animate__infinite" style="animation-duration: 8000ms; animation-delay: 400ms; width: 50%; height: auto; margin-right: -13%;"></div> <div class="frame-tr d-flex align-items-start justify-content-end animate__animated animate__fadeInTopRight animate__slower"><img src="https://app.kitaberdua.com/themes/lion-february/tr-2.webp" alt="frame" class="animate__animated animate__swing animate__infinite" style="animation-duration: 7000ms; animation-delay: 300ms; width: 50%; height: auto; margin-right: 13%;"></div> <img src="https://app.kitaberdua.com/themes/lion-february/bm.webp" alt="frame" class="spin" style="position: absolute; left: 0px; right: 0px; bottom: -300px; width: 100%;"></div> <div class="h-100 d-flex justify-content-center align-items-center"><div class="w-100"><div class="image-editable d-flex flex-wrap"></div> <div class="w-100"><div class="h4 editable text-center mb-3 font-weight-bold animate__animated animate__fadeInDown animate__slower" style="font-size: 20px;">Kick Off POS<br>Captain Area Batam!<br></div><div class="image-editable animate__animated animate__zoomIn animate__slower" style="height: 259px; width: 193px; margin: auto auto 20px; overflow: hidden;"><img src="https://assets.satumomen.com/images/galleries/784853-gallery-NbWLrtjaU8.png" alt="no-image.jpg" class="mb-4" style="width: 100%; height: 100%; object-fit: cover;"></div><div class="editable quotes text-justify animate__animated animate__fadeInUp animate__slower" style="font-size: 11px;">POS AFLAH resmi dilantik sebagai POS Captain Area Batam pada November 2025. Penunjukan ini menjadi langkah awal untuk memperkuat kolaborasi, koordinasi, serta mendorong peningkatan performa POS di wilayah Batam.<br><br>Melalui peran POS Captain, diharapkan sinergi antar POS semakin solid, komunikasi antar POS berjalan lebih efektif, dan pencapaian target dapat lebih terarah.<br></div></div></div></div></div></li> <li class="satumomen_slide" style="display: none;"><div class="container-mobile" style="background-image: url(&quot;http://app.kitaberdua.com/themes/lion-february/bg.webp&quot;);"><div class="frame"><img src="https://app.kitaberdua.com/themes/lion-february/tl.webp" alt="frame" class="frame-tl animate__animated animate__fadeInLeft animate__slower"> <div class="frame-tr d-flex align-items-start justify-content-end animate__animated animate__fadeInTopRight animate__slower"><img src="https://app.kitaberdua.com/themes/lion-february/tr-1.webp" alt="frame" class="animate__animated animate__swing animate__infinite" style="animation-duration: 8000ms; animation-delay: 400ms; width: 50%; height: auto; margin-right: -13%;"></div> <div class="frame-tr d-flex align-items-start justify-content-end animate__animated animate__fadeInTopRight animate__slower"><img src="https://app.kitaberdua.com/themes/lion-february/tr-2.webp" alt="frame" class="animate__animated animate__swing animate__infinite" style="animation-duration: 7000ms; animation-delay: 300ms; width: 50%; height: auto; margin-right: 13%;"></div> <img src="https://app.kitaberdua.com/themes/lion-february/bm.webp" alt="frame" class="spin" style="position: absolute; left: 0px; right: 0px; bottom: -300px; width: 100%;"></div> <div class="h-100 d-flex justify-content-center align-items-center"><div class="w-100"><div class="image-editable d-flex flex-wrap"></div> <div><div class="h4 editable text-center mb-3 font-weight-bold animate__animated animate__fadeInDown animate__slower" style="font-size: 20px;">Zumba Sport POS<br>Captain Pontianak!<br></div><div class="editable text-justify animate__animated animate__fadeInDown animate__slower" style="font-size: 11px; margin-bottom: 17px;">Kegiatan olahraga bersama rutin bulanan yang diinisiasi oleh POS Captain Area Pontianak. Dikemas dalam bentuk olahraga Zumba sebagai fun sport, kegiatan ini menjadi bagian dari aktivitas komunitas POS di Area Pontianak (PNK) untuk memperkuat komunikasi dan meningkatkan engagement antar POS.<br><br>Next ke kota mana lagi dan main olahraga apa yaa?<br></div></div> <div class="text-center animate__animated animate__fadeInUp animate__slower"><div class="image-editable animate__animated animate__zoomIn animate__slower" style="height: 241px; margin: auto auto 20px; overflow: hidden; border: 4px solid var(--inv-border); border-radius: 10px;"><img src="https://assets.satumomen.com/images/galleries/784813-gallery-VF2XK7Buwa.jpg" alt="no-image.jpg" class="mb-4" style="width: 100%; height: 100%; object-fit: cover;"></div></div></div></div></div></li> <li class="satumomen_slide" style="display: none;"><div class="container-mobile" style="background-image: url(&quot;http://app.kitaberdua.com/themes/lion-february/bg.webp&quot;);"><div class="frame"><img src="https://app.kitaberdua.com/themes/lion-february/tl.webp" alt="frame" class="frame-tl animate__animated animate__fadeInLeft animate__slower"> <div class="frame-tr d-flex align-items-start justify-content-end animate__animated animate__fadeInTopRight animate__slower"><img src="https://app.kitaberdua.com/themes/lion-february/tr-1.webp" alt="frame" class="animate__animated animate__swing animate__infinite" style="animation-duration: 8000ms; animation-delay: 400ms; width: 50%; height: auto; margin-right: -13%;"></div> <div class="frame-tr d-flex align-items-start justify-content-end animate__animated animate__fadeInTopRight animate__slower"><img src="https://app.kitaberdua.com/themes/lion-february/tr-2.webp" alt="frame" class="animate__animated animate__swing animate__infinite" style="animation-duration: 7000ms; animation-delay: 300ms; width: 50%; height: auto; margin-right: 13%;"></div> <img src="https://app.kitaberdua.com/themes/lion-february/bm.webp" alt="frame" class="spin" style="position: absolute; left: 0px; right: 0px; bottom: -300px; width: 100%;"></div> <div class="d-flex justify-content-center align-items-center" style="height: 100%;"><div style="width: 100%;"><div class="text-center color-accent h4 mb-4 editable animate__animated animate__fadeInDown animate__slow font-weight-bold font-accent" style="font-size: 42px; color: rgb(255, 255, 255);">Quiz Time</div> <div><div class="text-center"><div class="editable mb-4 animate__animated animate__fadeInUp animate__slower" style="font-size: 16px;">Tekan tombol di bawah ini<br>untuk mengisi Quiz</div> <button class="btn-rsvp btn mx-auto rounded-pill animate__animated animate__fadeInUp animate__slow" style="font-size: 14px; color: var(--inv-base); background-image: url(&quot;https://assets.satumomen.com/images/galleries/784853-gallery-p5ByuPhzBj.webp&quot;); background-size: contain; background-position: center center; background-repeat: no-repeat; padding: 16px; min-width: 200px;">Isi Quiz Klik Disini</button> <div class="editable mb-2 mt-2 font-weight-bold" style="font-size: 16px;">ðPemenang Games of The Month Edisi Januari 2026: ð<br></div><ul class="pl-5"><li><div class="editable animate__animated animate__fadeInUp animate__slower" style="font-size: 12px; text-align: left;">POS LION PARCEL MARGAMULYA CIMAHI (BDO)<br></div></li> <li><div class="editable animate__animated animate__fadeInUp animate__slower" style="font-size: 12px; text-align: left;">LION PARCEL BUMI KAWALUYAAN ARJASARI (BDS)</div></li><li><div class="editable animate__animated animate__fadeInUp animate__slower" style="font-size: 12px; text-align: left;">POS LION PARCEL GRIYA PAYUNG ASRI (SRG)</div></li></ul></div></div></div></div></div></li> <li class="satumomen_slide" style="display: none;"><div class="container-mobile" style="background-image: url(&quot;http://app.kitaberdua.com/themes/lion-february/bg.webp&quot;);"><div class="frame"><img src="https://app.kitaberdua.com/themes/lion-february/tl.webp" alt="frame" class="frame-tl animate__animated animate__fadeInLeft animate__slower"> <div class="frame-tr d-flex align-items-start justify-content-end animate__animated animate__fadeInTopRight animate__slower"><img src="https://app.kitaberdua.com/themes/lion-february/tr-1.webp" alt="frame" class="animate__animated animate__swing animate__infinite" style="animation-duration: 8000ms; animation-delay: 400ms; width: 50%; height: auto; margin-right: -13%;"></div> <div class="frame-tr d-flex align-items-start justify-content-end animate__animated animate__fadeInTopRight animate__slower"><img src="https://app.kitaberdua.com/themes/lion-february/tr-2.webp" alt="frame" class="animate__animated animate__swing animate__infinite" style="animation-duration: 7000ms; animation-delay: 300ms; width: 50%; height: auto; margin-right: 13%;"></div> <img src="https://app.kitaberdua.com/themes/lion-february/bm.webp" alt="frame" class="spin" style="position: absolute; left: 0px; right: 0px; bottom: -300px; width: 100%;"></div> <div class="d-flex justify-content-center align-items-center" style="height: 100%;"><div class="image-editable mx-auto animate__animated animate__fadeInUp animate__slow" style="height: 100%; width: 100%; position: absolute; left: 0px; right: 0px;"><img src="https://assets.satumomen.com/images/galleries/784853-gallery-ahUvO2CbFi.jpg" alt="logo.webp" style="width: 100%; height: 100%; object-fit: cover;"></div></div></div></li> <li class="satumomen_slide" style="display: none;"><div class="container-mobile" style="background-image: url(&quot;http://app.kitaberdua.com/themes/lion-february/bg.webp&quot;);"><div class="frame"><img src="https://app.kitaberdua.com/themes/lion-february/tl.webp" alt="frame" class="frame-tl animate__animated animate__fadeInLeft animate__slower"> <div class="frame-tr d-flex align-items-start justify-content-end animate__animated animate__fadeInTopRight animate__slower"><img src="https://app.kitaberdua.com/themes/lion-february/tr-1.webp" alt="frame" class="animate__animated animate__swing animate__infinite" style="animation-duration: 8000ms; animation-delay: 400ms; width: 50%; height: auto; margin-right: -13%;"></div> <div class="frame-tr d-flex align-items-start justify-content-end animate__animated animate__fadeInTopRight animate__slower"><img src="https://app.kitaberdua.com/themes/lion-february/tr-2.webp" alt="frame" class="animate__animated animate__swing animate__infinite" style="animation-duration: 7000ms; animation-delay: 300ms; width: 50%; height: auto; margin-right: 13%;"></div> <img src="https://app.kitaberdua.com/themes/lion-february/bm.webp" alt="frame" class="spin" style="position: absolute; left: 0px; right: 0px; bottom: -300px; width: 100%;"></div> <div class="d-flex justify-content-center align-items-center" style="height: 100%;"><div class="image-editable mx-auto animate__animated animate__fadeInUp animate__slow" style="height: 100%; width: 100%; position: absolute; left: 0px; right: 0px;"><img src="https://assets.satumomen.com/images/galleries/784853-gallery-rVNTCtA7AJ.jpg" alt="logo.webp" style="width: 100%; height: 100%; object-fit: cover;"></div></div></div></li> <li class="satumomen_slide" style="display: none;"><div class="container-mobile" style="background-image: url(&quot;http://app.kitaberdua.com/themes/lion-february/bg.webp&quot;);"><div class="frame"><img src="https://app.kitaberdua.com/themes/lion-february/tl.webp" alt="frame" class="frame-tl animate__animated animate__fadeInLeft animate__slower"> <div class="frame-tr d-flex align-items-start justify-content-end animate__animated animate__fadeInTopRight animate__slower"><img src="https://app.kitaberdua.com/themes/lion-february/tr-1.webp" alt="frame" class="animate__animated animate__swing animate__infinite" style="animation-duration: 8000ms; animation-delay: 400ms; width: 50%; height: auto; margin-right: -13%;"></div> <div class="frame-tr d-flex align-items-start justify-content-end animate__animated animate__fadeInTopRight animate__slower"><img src="https://app.kitaberdua.com/themes/lion-february/tr-2.webp" alt="frame" class="animate__animated animate__swing animate__infinite" style="animation-duration: 7000ms; animation-delay: 300ms; width: 50%; height: auto; margin-right: 13%;"></div> <img src="https://app.kitaberdua.com/themes/lion-february/bm.webp" alt="frame" class="spin" style="position: absolute; left: 0px; right: 0px; bottom: -300px; width: 100%;"></div> <div class="position-relative h-100 watermark d-flex justify-content-center align-items-center"><div class="image-editable mx-auto animate__animated animate__fadeInUp animate__slow" style="height: 100%; width: 100%; position: absolute; left: 0px; right: 0px; bottom: -30px;"><img src="https://assets.satumomen.com/images/galleries/784853-gallery-IFSNMoL3pq.png" alt="logo.webp" style="width: 100%; height: 100%; object-fit: cover;"></div><div class="position-relative w-100 mb-auto"><div class="text-center"><div class="watermark-placeholder mt-5"><div id="waterMark" class="mt-5" style="display: inherit;"><div class="wm-music mt-3 text-center animate__animated animate__fadeInUp animate__slower animate__delay-1s" style="font-size: 60%;"><div style="opacity: 0.5;"><strong>Music:</strong></div> <div style="opacity: 0.5;">Kool &amp; The Gang - Celebration</div></div></div></div></div></div></div></div></li></ul></div></div> <div id="smMenu" class="satumomen_menu"><ul class="satumomen_menu_list"><li class="satumomen_menu_item active" style="max-width: 82.8px;"><i class="icon ph-fill ph-house" style="color: currentcolor;"></i> <span>Home</span></li> <li class="satumomen_menu_item" style="max-width: 82.8px;"><i class="icon ph-fill ph-chat-circle-text" style="color: currentcolor;"></i> <span>Ucapan dari CRO</span></li> <li class="satumomen_menu_item" style="max-width: 82.8px;"><i class="icon ph-fill ph-trophy" style="color: currentcolor;"></i> <span>TOP 10</span></li> <li class="satumomen_menu_item" style="max-width: 82.8px;"><i class="icon ph-fill ph-confetti" style="color: currentcolor;"></i> <span>Selamat</span></li> <li class="satumomen_menu_item" style="max-width: 82.8px;"><i class="icon ph-fill ph-medal" style="color: currentcolor;"></i> <span>Liga</span></li> <li class="satumomen_menu_item" style="max-width: 82.8px;"><i class="icon ph-fill ph-chat-circle-text" style="color: currentcolor;"></i> <span>POS Baru</span></li> <li class="satumomen_menu_item" style="max-width: 82.8px;"><i class="icon ph-fill ph-article" style="color: currentcolor;"></i> <span>Story CBP</span></li> <li class="satumomen_menu_item" style="max-width: 82.8px;"><i class="icon ph-fill ph-chat-circle-text" style="color: currentcolor;"></i> <span>Ucapan</span></li> <li class="satumomen_menu_item" style="max-width: 82.8px;"><i class="icon ph-fill ph-fire" style="color: currentcolor;"></i> <span>Kick Off</span></li> <li class="satumomen_menu_item" style="max-width: 82.8px;"><i class="icon ph-fill ph-dress" style="color: currentcolor;"></i> <span>Zumba</span></li> <li class="satumomen_menu_item" style="max-width: 82.8px;"><i class="icon ph-fill ph-game-controller" style="color: currentcolor;"></i> <span>Quiz</span></li> <li class="satumomen_menu_item" style="max-width: 82.8px;"><i class="icon ph-fill ph-star-and-crescent" style="color: currentcolor;"></i> <span>Ramadhan</span></li> <li class="satumomen_menu_item" style="max-width: 82.8px;"><i class="icon ph-fill ph-fire" style="color: currentcolor;"></i> <span>Imlek</span></li> <li class="satumomen_menu_item" style="max-width: 82.8px;"><i class="icon ph-fill ph-flag-banner" style="color: currentcolor;"></i> <span>Thanks</span></li></ul></div> <div class="floating-action d-flex align-items-end flex-column"><button id="btnQrModal" class="btn btn-float"><svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" viewBox="0 0 256 256"><rect x="40" y="40" width="80" height="80" rx="16"></rect><rect x="40" y="136" width="80" height="80" rx="16"></rect><rect x="136" y="40" width="80" height="80" rx="16"></rect><path d="M144,184a8,8,0,0,0,8-8V144a8,8,0,0,0-16,0v32A8,8,0,0,0,144,184Z"></path><path d="M208,152H184v-8a8,8,0,0,0-16,0v56H144a8,8,0,0,0,0,16h32a8,8,0,0,0,8-8V168h24a8,8,0,0,0,0-16Z"></path><path d="M208,184a8,8,0,0,0-8,8v16a8,8,0,0,0,16,0V192A8,8,0,0,0,208,184Z"></path></svg></button> <button id="btnMusic" class="btn btn-float playing"><svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" viewBox="0 0 256 256" class="play"><path d="M184,152V104a8,8,0,0,1,16,0v48a8,8,0,0,1-16,0Zm40-72a8,8,0,0,0-8,8v80a8,8,0,0,0,16,0V88A8,8,0,0,0,224,80ZM53.92,34.62A8,8,0,1,0,42.08,45.38L73.55,80H32A16,16,0,0,0,16,96v64a16,16,0,0,0,16,16H77.25l69.84,54.31A8,8,0,0,0,160,224V175.09l42.08,46.29a8,8,0,1,0,11.84-10.76Zm92.16,77.59A8,8,0,0,0,160,106.83V32a8,8,0,0,0-12.91-6.31l-39.85,31a8,8,0,0,0-1,11.7Z"></path></svg> <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" viewBox="0 0 256 256" class="pause"><path d="M160,32V224a8,8,0,0,1-12.91,6.31L77.25,176H32a16,16,0,0,1-16-16V96A16,16,0,0,1,32,80H77.25l69.84-54.31A8,8,0,0,1,160,32Zm32,64a8,8,0,0,0-8,8v48a8,8,0,0,0,16,0V104A8,8,0,0,0,192,96Zm32-16a8,8,0,0,0-8,8v80a8,8,0,0,0,16,0V88A8,8,0,0,0,224,80Z"></path></svg></button> <button id="btnAutoplay" class="btn btn-float"><svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" viewBox="0 0 256 256" class="play"><path d="M128,24A104,104,0,1,0,232,128,104.13,104.13,0,0,0,128,24Zm36.44,110.66-48,32A8.05,8.05,0,0,1,112,168a8,8,0,0,1-8-8V96a8,8,0,0,1,12.44-6.66l48,32a8,8,0,0,1,0,13.32Z"></path></svg> <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" viewBox="0 0 256 256" class="pause"><path d="M128,24A104,104,0,1,0,232,128,104.13,104.13,0,0,0,128,24ZM112,160a8,8,0,0,1-16,0V96a8,8,0,0,1,16,0Zm48,0a8,8,0,0,1-16,0V96a8,8,0,0,1,16,0Z"></path></svg></button></div></div></div></div></div> <div id="lightboxWrapper" class="lightbox-wrapper"><div class="lightbox-list"></div> <a href="https://app.kitaberdua.com/preview/lion-february#" id="lightboxCloseBtn" class="btn-lightbox"><svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 0 1 1.414 0L10 8.586l4.293-4.293a1 1 0 1 1 1.414 1.414L11.414 10l4.293 4.293a1 1 0 0 1-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 0 1-1.414-1.414L8.586 10 4.293 5.707a1 1 0 0 1 0-1.414z" clip-rule="evenodd"></path></svg></a> <div class="lightbox-navigation"><a href="https://app.kitaberdua.com/preview/lion-february#" id="lightboxPrevBtn" data-index="0" class="lightbox-arrow"><svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m15 19-7-7 7-7"></path></svg></a> <a href="https://app.kitaberdua.com/preview/lion-february#" id="lightboxNextBtn" data-index="0" class="lightbox-arrow"><svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m9 5 7 7-7 7"></path></svg></a></div></div> <div id="qrModal" tabindex="-1" role="dialog" aria-labelledby="qrModal" aria-hidden="true" class="modal fade"><div class="modal-dialog modal-dialog-centered"><div class="modal-content" style="height: 100%;"><div style="width: 100%; aspect-ratio: 16 / 9; background-size: cover; background-position: center center; background-image: url(&quot;/images/no-image.jpg&quot;);"></div> <div class="text-center py-4 px-4"><div><div class="mx-auto"><svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="180" height="180" viewBox="0 0 180 180"><rect x="0" y="0" width="180" height="180" fill="#ffffff"></rect><g transform="scale(7.2)"><g transform="translate(0,0)"><path fill-rule="evenodd" d="M8 0L8 4L9 4L9 5L8 5L8 7L9 7L9 6L10 6L10 9L11 9L11 8L12 8L12 9L13 9L13 10L15 10L15 11L14 11L14 12L13 12L13 11L12 11L12 12L11 12L11 13L9 13L9 12L10 12L10 11L11 11L11 10L9 10L9 9L7 9L7 8L4 8L4 11L3 11L3 10L2 10L2 11L1 11L1 9L2 9L2 8L0 8L0 14L3 14L3 15L2 15L2 16L0 16L0 17L2 17L2 16L5 16L5 17L8 17L8 18L9 18L9 19L8 19L8 21L10 21L10 22L11 22L11 24L12 24L12 25L14 25L14 23L15 23L15 22L16 22L16 23L20 23L20 21L21 21L21 16L19 16L19 15L20 15L20 14L21 14L21 15L22 15L22 18L23 18L23 15L22 15L22 14L24 14L24 13L25 13L25 12L24 12L24 11L23 11L23 10L24 10L24 9L25 9L25 8L21 8L21 9L20 9L20 8L19 8L19 9L20 9L20 11L21 11L21 12L22 12L22 13L20 13L20 12L17 12L17 15L16 15L16 12L15 12L15 11L17 11L17 9L14 9L14 7L15 7L15 6L14 6L14 7L13 7L13 6L12 6L12 7L11 7L11 3L10 3L10 2L9 2L9 0ZM14 0L14 1L11 1L11 2L12 2L12 5L13 5L13 2L14 2L14 3L15 3L15 2L14 2L14 1L16 1L16 2L17 2L17 0ZM16 3L16 4L14 4L14 5L16 5L16 8L17 8L17 3ZM12 7L12 8L13 8L13 7ZM6 9L6 10L7 10L7 11L6 11L6 12L7 12L7 13L3 13L3 11L2 11L2 13L3 13L3 14L4 14L4 15L5 15L5 16L7 16L7 15L8 15L8 17L9 17L9 18L11 18L11 20L12 20L12 21L11 21L11 22L12 22L12 21L13 21L13 22L15 22L15 21L16 21L16 22L17 22L17 21L16 21L16 16L15 16L15 15L14 15L14 17L15 17L15 18L13 18L13 17L12 17L12 16L13 16L13 15L12 15L12 16L10 16L10 17L9 17L9 14L8 14L8 10L7 10L7 9ZM21 9L21 10L23 10L23 9ZM12 12L12 13L11 13L11 14L10 14L10 15L11 15L11 14L12 14L12 13L13 13L13 14L15 14L15 13L13 13L13 12ZM23 12L23 13L24 13L24 12ZM18 13L18 15L19 15L19 14L20 14L20 13ZM6 14L6 15L7 15L7 14ZM24 16L24 17L25 17L25 16ZM17 17L17 20L20 20L20 17ZM18 18L18 19L19 19L19 18ZM9 19L9 20L10 20L10 19ZM12 19L12 20L13 20L13 21L15 21L15 19L14 19L14 20L13 20L13 19ZM22 19L22 24L20 24L20 25L25 25L25 24L24 24L24 22L25 22L25 19ZM23 20L23 21L24 21L24 20ZM8 23L8 25L10 25L10 23ZM12 23L12 24L13 24L13 23ZM15 24L15 25L16 25L16 24ZM18 24L18 25L19 25L19 24ZM0 0L0 7L7 7L7 0ZM1 1L1 6L6 6L6 1ZM2 2L2 5L5 5L5 2ZM18 0L18 7L25 7L25 0ZM19 1L19 6L24 6L24 1ZM20 2L20 5L23 5L23 2ZM0 18L0 25L7 25L7 18ZM1 19L1 24L6 24L6 19ZM2 20L2 23L5 23L5 20Z" fill="#000000"></path></g></g></svg> <div style="margin-top: 10px; text-align: center;"></div></div></div> <hr style="margin-top: 1rem; margin-bottom: 1rem; border-width: 2px 0px 0px; border-style: dashed none none; border-color: rgba(0, 0, 0, 0.1) currentcolor currentcolor; border-image: none;"> <div style="text-align: center;"><strong>23 Feb 2026</strong><br> <p class="mb-0">14:28 </p> <p></p></div> <hr style="margin-top: 1rem; margin-bottom: 1rem; border-width: 2px 0px 0px; border-style: dashed none none; border-color: rgba(0, 0, 0, 0.1) currentcolor currentcolor; border-image: none;"> <div style="margin-bottom: 10px;"><div style="color: rgb(178, 178, 178);">Nama</div> <div>Nama Tamu</div></div> <div style="margin-bottom: 10px;"><div style="color: rgb(178, 178, 178);">Grup</div> <div>VIP</div></div></div> <button type="button" class="btn btn-close"><svg xmlns="http://www.w3.org/2000/svg" height="42px" width="42px" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18 18 6M6 6l12 12"></path></svg></button></div></div></div> <div id="rsvpModal" tabindex="-1" role="dialog" aria-labelledby="rsvpModal" class="modal fade"><div class="modal-dialog modal-dialog-centered"><div class="modal-content p-4" style="height: 100%;"><div class="rsvp-form show"><!----> <div class="mb-4"><div class="font-accent h4 text-center">RSVP</div></div> <form class="pt-2"> <!---->  <button type="submit" class="btn btn-primary rounded-pill btn-block mt-4 mb-2"><span>Kirim</span></button></form> <!----></div> <button type="button" class="btn btn-close"><svg xmlns="http://www.w3.org/2000/svg" height="42px" width="42px" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18 18 6M6 6l12 12"></path></svg></button></div></div></div> </main>
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

@import url("https://fonts.googleapis.com/css2?family=Monsieur+La+Doulaise&family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap");

:root { --inv-bg: #ad0507; --inv-base: #ffffff; --inv-accent: #000000; --inv-border: #ffffff; --menu-bg: #ad0507; --menu-inactive: #ffffff; --menu-active: #96070a; --btn-color: #ffffff; --font-base: "Montserrat", sans-serif; --font-accent: "Montserrat", sans-serif; --font-latin: "Monsieur La Doulaise", cursive; }

.rsvp-form .h4, .rsvp-form .btn-rsvp-update { display: none; }

.rsvp-form::before { content: "QUIZ"; width: 100%; text-align: center; display: block; font-size: 32px; font-weight: bold; letter-spacing: 8px; }

.spin { animation: 15s linear 0s infinite normal none running spin; }

@-webkit-keyframes spin { 
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

@keyframes spin { 
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

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

@import url("https://fonts.googleapis.com/css2?family=Monsieur+La+Doulaise&family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap");

:root { --inv-bg: #ad0507; --inv-base: #ffffff; --inv-accent: #000000; --inv-border: #ffffff; --menu-bg: #ad0507; --menu-inactive: #ffffff; --menu-active: #96070a; --btn-color: #ffffff; --font-base: "Montserrat", sans-serif; --font-accent: "Montserrat", sans-serif; --font-latin: "Monsieur La Doulaise", cursive; }

.rsvp-form .h4, .rsvp-form .btn-rsvp-update { display: none; }

.rsvp-form::before { content: "QUIZ"; width: 100%; text-align: center; display: block; font-size: 32px; font-weight: bold; letter-spacing: 8px; }

.spin { animation: 15s linear 0s infinite normal none running spin; }

@-webkit-keyframes spin { 
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

@keyframes spin { 
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

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

</style></head><body><div></div></div></body></html></template></merlin-floating-cta><div id="noty_layout__topCenter" class="noty_layout"><div id="noty_bar_3547f2a5-0475-4a9a-ace2-654540d6d24e" class="noty_bar noty_type__error noty_theme__relax noty_close_with_click noty_has_timeout"><div class="noty_body">Too Many Attempts.</div><div class="noty_progressbar" style="transition: width 4000ms linear; width: 0%;"></div></div></div></body></html>
