import { writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const outDir = join(root, "public", "images", "lots-creme");

const extra = [
  ["maps-store-03.jpg", "https://media-cdn.tripadvisor.com/media/photo-o/34/99/6e/16/lots-creme.jpg"],
  ["maps-store-04.jpg", "https://media-cdn.tripadvisor.com/media/photo-o/34/99/6e/18/lots-creme.jpg"],
];

const posts = ["DdYkaT6pvj9", "DdRRTwGosoD", "Dc-xSxHJ21k", "Dc5GRKypmXI"];

const headers = {
  "User-Agent":
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36",
  Accept: "*/*",
};

for (const [file, url] of extra) {
  const res = await fetch(url, { headers: { ...headers, Referer: "https://www.tripadvisor.com/" } });
  console.log(`${file} ${res.status} ${res.headers.get("content-length")}`);
  if (res.ok) {
    await writeFile(join(outDir, file), Buffer.from(await res.arrayBuffer()));
  }
}

for (const post of posts) {
  const res = await fetch(`https://www.instagram.com/p/${post}/embed/`, { headers });
  const html = await res.text();
  const matches = [...html.matchAll(/https:\/\/scontent[^"'\\\s]+/g)].map((m) =>
    m[0].replaceAll("\\u0026", "&").replaceAll("\\/", "/")
  );
  console.log(`POST ${post} status=${res.status} urls=${matches.length}`);
  console.log(matches.slice(0, 4).join("\n"));
}
