import sharp from "sharp";
import { join } from "node:path";

const dir = "public/images/lots-creme";

async function crop(name, out, topRatio = 0.24) {
  const img = sharp(join(dir, name));
  const m = await img.metadata();
  const top = Math.round((m.height || 1) * topRatio);
  await img
    .extract({ left: 0, top, width: m.width, height: (m.height || 1) - top })
    .jpeg({ quality: 90, mozjpeg: true })
    .toFile(join(dir, out));
  console.log("cropped", out);
}

await crop("cake-display.jpg", "celebration-cake.jpg");
await crop("pastry-dessert.jpg", "theme-cake.jpg");
