import fs from "fs";
import path from "path";
import sharp from "sharp";

const TARGET_DIRS = [
  path.resolve("public/images/tech"),
  path.resolve("public/images/workflows"),
];

async function optimizeImages() {
  console.log("🚀 Starting TECHNAVIA Image Optimization Engine (Buffer-safe)...\n");
  let totalBefore = 0;
  let totalAfter = 0;
  let count = 0;

  for (const dir of TARGET_DIRS) {
    if (!fs.existsSync(dir)) continue;
    const files = fs.readdirSync(dir);

    for (const file of files) {
      if (!file.match(/\.(jpe?g|png)$/i)) continue;
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);
      const sizeBefore = stat.size;
      totalBefore += sizeBefore;

      try {
        const inputBuffer = fs.readFileSync(filePath);
        const metadata = await sharp(inputBuffer).metadata();

        const isHero = file.toLowerCase().includes("hero");
        const maxW = isHero ? 1920 : 1440;

        let pipeline = sharp(inputBuffer);
        if (metadata.width && metadata.width > maxW) {
          pipeline = pipeline.resize({ width: maxW, withoutEnlargement: true });
        }

        // 1. Optimize JPEG version
        const optimizedJpg = await pipeline
          .jpeg({
            quality: 80,
            progressive: true,
            mozjpeg: true,
          })
          .toBuffer();

        // 2. Also generate modern WebP companion version
        const webpPath = filePath.replace(/\.(jpe?g|png)$/i, ".webp");
        const optimizedWebp = await sharp(inputBuffer)
          .resize(metadata.width && metadata.width > maxW ? { width: maxW, withoutEnlargement: true } : undefined)
          .webp({ quality: 80, effort: 5 })
          .toBuffer();

        fs.writeFileSync(webpPath, optimizedWebp);

        if (optimizedJpg.length < sizeBefore) {
          fs.writeFileSync(filePath, optimizedJpg);
          const sizeAfter = optimizedJpg.length;
          totalAfter += sizeAfter;
          count++;
          const savings = Math.round(((sizeBefore - sizeAfter) / sizeBefore) * 100);
          console.log(
            `✅ ${file.padEnd(25)} : ${(sizeBefore / 1024).toFixed(1)} KB -> ${(sizeAfter / 1024).toFixed(1)} KB (-${savings}%) | WebP: ${(optimizedWebp.length / 1024).toFixed(1)} KB`
          );
        } else {
          totalAfter += sizeBefore;
          console.log(`⏩ ${file.padEnd(25)} : Kept original (${(sizeBefore / 1024).toFixed(1)} KB) | WebP: ${(optimizedWebp.length / 1024).toFixed(1)} KB`);
        }
      } catch (err) {
        console.error(`❌ Failed optimizing ${file}:`, err.message);
        totalAfter += sizeBefore;
      }
    }
  }

  const totalSavingsMB = ((totalBefore - totalAfter) / (1024 * 1024)).toFixed(2);
  const totalSavingsPercent = Math.round(((totalBefore - totalAfter) / totalBefore) * 100);
  console.log("\n------------------------------------------------------------");
  console.log(`🎉 Optimization Complete across ${count} images!`);
  console.log(`📦 Before: ${(totalBefore / (1024 * 1024)).toFixed(2)} MB`);
  console.log(`⚡ After:  ${(totalAfter / (1024 * 1024)).toFixed(2)} MB`);
  console.log(`💾 Saved:  ${totalSavingsMB} MB (-${totalSavingsPercent}%)`);
  console.log("------------------------------------------------------------\n");
}

optimizeImages();
