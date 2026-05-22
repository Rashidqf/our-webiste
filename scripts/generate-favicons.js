/**
 * Regenerate /public/favicon/* from public/images/logo.png
 * Run: pnpm run generate:favicons
 */
const fs = require('fs');
const path = require('path');
const { Jimp } = require('jimp');
const toIco = require('to-ico');

const logoPath = path.join(__dirname, '../public/images/logo.png');
const outDir = path.join(__dirname, '../public/favicon');
const BRAND_BG = 0x121725ff;

const outputs = [
  { name: 'favicon-16x16.png', size: 16 },
  { name: 'favicon-32x32.png', size: 32 },
  { name: 'apple-touch-icon.png', size: 180 },
  { name: 'android-chrome-192x192.png', size: 192 },
  { name: 'android-chrome-512x512.png', size: 512 },
];

async function fitOnSquare(source, size) {
  const img = source.clone();
  try {
    img.autocrop({ tolerance: 0.15, cropOnlyFrames: false });
  } catch {
    /* autocrop optional */
  }

  const scale = Math.min(size / img.bitmap.width, size / img.bitmap.height);
  const w = Math.max(1, Math.round(img.bitmap.width * scale));
  const h = Math.max(1, Math.round(img.bitmap.height * scale));
  img.resize({ w, h });

  const canvas = new Jimp({ width: size, height: size, color: BRAND_BG });
  const x = Math.round((size - w) / 2);
  const y = Math.round((size - h) / 2);
  canvas.composite(img, x, y);
  return canvas;
}

async function main() {
  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

  const logo = await Jimp.read(logoPath);
  const buffers = {};

  for (const { name, size } of outputs) {
    const icon = await fitOnSquare(logo, size);
    const outPath = path.join(outDir, name);
    await icon.write(outPath);
    buffers[size] = await icon.getBuffer('image/png');
    console.log('wrote', name);
  }

  const ico = await toIco([buffers[16], buffers[32]]);
  fs.writeFileSync(path.join(outDir, 'favicon.ico'), ico);
  fs.writeFileSync(path.join(__dirname, '../public/favicon.ico'), ico);
  console.log('wrote favicon.ico');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
