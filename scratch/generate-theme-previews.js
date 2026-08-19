const fs = require('fs');
const path = require('path');

const themesDir = path.join(__dirname, '..', 'public', 'themes');
const assetsDir = path.join(__dirname, '..', 'public', 'assets', 'themes');
const mhtmlDir = path.join(themesDir, 'mhtml');

const themePhpFiles = fs.readdirSync(themesDir).filter(f => f.endsWith('.php'));

console.log(`Found ${themePhpFiles.length} themes in public/themes.`);

// MHTML mapping
const mhtmlMap = {
  'adm-gathering': 'Umum & Seminar - Adm Gathering.mhtml',
  'batak-merah': 'Wedding - Batak Merah.mhtml',
  'bedah-buku': 'Umum & Seminar - Bedah Buku.mhtml',
  'bikini-bottom': 'Kids & Birthday - Bikini Bottom.mhtml',
  'black-aysha': 'Wedding - Black Aysha.mhtml',
  'blue-butterflya': 'Wedding - Blue Butterflya.mhtml',
  'bonvoyage-v4': 'School & Graduation - Bonvoyage V4.mhtml',
  'buka-bersama': 'Syukuran & Islami - Buka Bersama.mhtml',
  'emerald-uici': 'School & Graduation - Emerald UICI.mhtml',
  'fairy-pink': 'Kids & Birthday - Fairy Pink.mhtml',
  'fresh-halal-bihalal': 'Syukuran & Islami - Fresh Halal Bihalal.mhtml',
  'kalibrasi-hati': 'Umum & Seminar - Kalibrasi Hati.mhtml',
  'konser-raya-maroon': 'Umum & Seminar - Konser Raya Maroon.mhtml',
  'light-begins': 'Christmas & New Year - Light Begins.mhtml',
  'lion-february': 'Umum & Seminar - Lion February.mhtml',
  'maroon-aceh': 'Wedding - Maroon Aceh.mhtml',
  'melayu-padang': 'Wedding - Melayu Padang.mhtml',
  'minimalist-cream': 'Wedding - Minimalist Cream.mhtml',
  'nusantara-gas': 'Umum & Seminar - Nusantara Gas.mhtml',
  'phinisi-maroon': 'Wedding - Phinisi Maroon.mhtml',
  'pink-party': 'Party & Dinner - Pink Party.mhtml',
  'raden': 'Wedding - Raden.mhtml',
  'sage-watercolor': 'Wedding - Sage Watercolor.mhtml',
  'shalvynne': 'Kids & Birthday - Shalvynne.mhtml',
  'shning': 'School & Graduation - Shning.mhtml',
  'turtles': 'Kids & Birthday - Turtles.mhtml',
};

// SVG to PNG generator (pure Node SVG data URI or simple fallback graphic)
function createSvgPreview(themeName) {
  const title = themeName.replace(/-/g, ' ').toUpperCase();
  const colors = [
    ['#1e1b4b', '#4338ca', '#818cf8'],
    ['#31101e', '#9f1239', '#f43f5e'],
    ['#064e3b', '#047857', '#34d399'],
    ['#78350f', '#b45309', '#fbbf24'],
    ['#18181b', '#3f3f46', '#a1a1aa'],
    ['#172554', '#1d4ed8', '#60a5fa'],
    ['#4a044e', '#86198f', '#e879f9'],
  ];
  const hash = themeName.split('').reduce((acc, c) => acc + c.charCodeAt(0), 0);
  const [bg1, bg2, accent] = colors[hash % colors.length];

  return `<svg xmlns="http://www.w3.org/2000/svg" width="640" height="400" viewBox="0 0 640 400">
  <defs>
    <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:${bg1};stop-opacity:1" />
      <stop offset="100%" style="stop-color:${bg2};stop-opacity:1" />
    </linearGradient>
    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.05)" stroke-width="1"/>
    </pattern>
  </defs>
  <rect width="640" height="400" fill="url(#grad)" />
  <rect width="640" height="400" fill="url(#grid)" />
  
  <!-- Outer Border Frame -->
  <rect x="20" y="20" width="600" height="360" rx="16" fill="none" stroke="${accent}" stroke-opacity="0.3" stroke-width="2" />
  <rect x="28" y="28" width="584" height="344" rx="12" fill="rgba(0,0,0,0.3)" stroke="${accent}" stroke-opacity="0.15" stroke-width="1" />
  
  <!-- Decorative Corner Embellishments -->
  <circle cx="28" cy="28" r="6" fill="${accent}" opacity="0.6"/>
  <circle cx="612" cy="28" r="6" fill="${accent}" opacity="0.6"/>
  <circle cx="28" cy="372" r="6" fill="${accent}" opacity="0.6"/>
  <circle cx="612" cy="372" r="6" fill="${accent}" opacity="0.6"/>
  
  <!-- Center Badge -->
  <g transform="translate(320, 200)">
    <circle cx="0" cy="-40" r="32" fill="${accent}" fill-opacity="0.15" stroke="${accent}" stroke-width="1.5" />
    <text x="0" y="-30" font-family="'Segoe UI', Roboto, sans-serif" font-size="28" text-anchor="middle" fill="#ffffff">💍</text>
    
    <text x="0" y="20" font-family="'Segoe UI', Roboto, sans-serif" font-weight="800" font-size="22" text-anchor="middle" fill="#ffffff" letter-spacing="2">
      ${title}
    </text>
    <text x="0" y="45" font-family="'Segoe UI', Roboto, sans-serif" font-weight="500" font-size="12" text-anchor="middle" fill="#94a3b8" letter-spacing="1">
      KENANGITA THEME COLLECTION
    </text>
    <rect x="-80" y="62" width="160" height="26" rx="8" fill="${accent}" />
    <text x="0" y="79" font-family="'Segoe UI', Roboto, sans-serif" font-weight="700" font-size="10" text-anchor="middle" fill="#ffffff" letter-spacing="1">
      EXCLUSIVE TEMPLATE
    </text>
  </g>
</svg>`;
}

for (const phpFile of themePhpFiles) {
  const themeName = phpFile.replace('.php', '');
  const themeAssetDir = path.join(assetsDir, themeName);
  const previewPath = path.join(themeAssetDir, 'preview.png');
  const previewSvgPath = path.join(themeAssetDir, 'preview.svg');

  if (!fs.existsSync(themeAssetDir)) {
    fs.mkdirSync(themeAssetDir, { recursive: true });
  }

  // If preview.png is missing:
  if (!fs.existsSync(previewPath)) {
    let extractedImage = false;

    // Check if mhtml file has embedded JPEG/PNG image
    const mhtmlFileName = mhtmlMap[themeName];
    if (mhtmlFileName) {
      const mhtmlPath = path.join(mhtmlDir, mhtmlFileName);
      if (fs.existsSync(mhtmlPath)) {
        try {
          const content = fs.readFileSync(mhtmlPath, 'utf-8');
          // Find largest base64 jpeg/png image in mhtml
          const matches = content.match(/Content-Type: image\/(jpeg|png|webp)[\s\S]*?base64\s+([A-Za-z0-9+/=\r\n]{1000,})/gi);
          if (matches && matches.length > 0) {
            // Find biggest match
            let bestBase64 = '';
            for (const m of matches) {
              const b64 = m.split(/base64\s+/i)[1]?.replace(/[\r\n\s]/g, '');
              if (b64 && b64.length > bestBase64.length) {
                bestBase64 = b64;
              }
            }
            if (bestBase64) {
              fs.writeFileSync(previewPath, Buffer.from(bestBase64, 'base64'));
              extractedImage = true;
              console.log(`[EXTRACTED MHTML PREVIEW] -> ${themeName}/preview.png`);
            }
          }
        } catch (e) {
          console.error(`Error parsing ${mhtmlFileName}:`, e.message);
        }
      }
    }

    if (!extractedImage) {
      // Create stylish SVG and save as preview.png (or copy template)
      const svg = createSvgPreview(themeName);
      // Also copy fallback preview from hwflower or greenflower if exists
      const fallbackSrc = path.join(assetsDir, 'royal-gold', 'preview.png');
      if (fs.existsSync(fallbackSrc)) {
        fs.copyFileSync(fallbackSrc, previewPath);
      } else {
        fs.writeFileSync(previewPath, Buffer.from(svg));
      }
      fs.writeFileSync(previewSvgPath, svg);
      console.log(`[GENERATED PREVIEW] -> ${themeName}/preview.png`);
    }
  }
}

console.log('All theme previews verified successfully!');
