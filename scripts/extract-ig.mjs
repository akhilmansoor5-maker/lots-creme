import { readFile, writeFile, mkdir } from "node:fs/promises";
import { join } from "node:path";

const html = await readFile(join(process.env.TEMP, "ig-lots.html"), "utf8");
const raw = [...html.matchAll(/https:\\\/\\\/scontent[^"'\\\s]+/g)].map((m) =>
  m[0]
    .replaceAll("\\u0026", "&")
    .replaceAll("\\/", "/")
    .replaceAll("\\", "")
);

const also = [...html.matchAll(/https:\/\/scontent[^"'\\\s]+/g)].map((m) =>
  m[0].replaceAll("\\u0026", "&")
);

const unique = [...new Set([...raw, ...also])].filter(
  (u) => u.includes("cdninstagram.com") && u.includes(".jpg")
);

console.log("unique", unique.length);
unique.forEach((u, i) => console.log(String(i).padStart(2, "0"), u.slice(0, 180)));
await mkdir("scripts", { recursive: true });
await writeFile("scripts/ig-urls.json", JSON.stringify(unique, null, 2));
