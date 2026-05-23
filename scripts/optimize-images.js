/**
 * Compress heavy public images for mobile performance.
 * Run: node scripts/optimize-images.js
 */
const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

const ROOT = path.join(__dirname, "..", "public", "images");

const TARGETS = [
  {
    input: "fanfact-bg.jpg",
    webp: { quality: 72, width: 1600 },
    jpeg: { quality: 75, width: 1600 },
  },
];

async function optimize({ input, webp, jpeg }) {
  const source = path.join(ROOT, input);
  if (!fs.existsSync(source)) {
    console.warn(`Skip (missing): ${input}`);
    return;
  }

  const base = input.replace(/\.[^.]+$/, "");

  if (webp) {
    const out = path.join(ROOT, `${base}.webp`);
    await sharp(source)
      .resize({ width: webp.width, withoutEnlargement: true })
      .webp({ quality: webp.quality })
      .toFile(out);
    console.log(`Wrote ${path.relative(process.cwd(), out)}`);
  }

  if (jpeg) {
    const out = path.join(ROOT, input);
    const tmp = path.join(ROOT, `${base}.optimized.jpg`);
    await sharp(source)
      .resize({ width: jpeg.width, withoutEnlargement: true })
      .jpeg({ quality: jpeg.quality, mozjpeg: true })
      .toFile(tmp);
    fs.renameSync(tmp, out);
    console.log(`Optimized ${path.relative(process.cwd(), out)}`);
  }
}

async function run() {
  for (const target of TARGETS) {
    await optimize(target);
  }
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
