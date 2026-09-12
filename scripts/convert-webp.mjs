import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const root = path.resolve("src/assets");
const dirs = [path.join(root, "urunler"), path.join(root, "banners"), root];

async function convertFile(input) {
  const out = input.replace(/\.(jpe?g|png)$/i, ".webp");
  if (out === input) return;
  await sharp(input)
    .rotate()
    .webp({ quality: 76, effort: 4 })
    .toFile(out);
  console.log(path.relative(process.cwd(), out));
}

for (const dir of dirs) {
  if (!fs.existsSync(dir)) continue;
  const files = fs.readdirSync(dir).filter((name) => /\.(jpe?g|png)$/i.test(name));
  for (const name of files) {
    await convertFile(path.join(dir, name));
  }
}
