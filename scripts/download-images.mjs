import { mkdir, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const outDir = join(root, "public", "images", "lots-creme");

const images = [
  {
    file: "hero-cake.jpg",
    url: "https://scontent-sjc3-1.cdninstagram.com/v/t51.82787-15/814452911_18104923967349734_2536002744716107623_n.jpg?stp=dst-jpg_e35_s640x640_tt6&_nc_cat=110&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiRkVFRC5iZXN0X2ltYWdlX3VybGdlbi5DMyJ9&_nc_ohc=lNBQsqgBOlAQ7kNvwGUIZXL&_nc_oc=AdpkZE0WUY4RQKvOHhVzYmoNAnerUpGvikfFRFMFQDEXMAh6T8vVKw5Q73OKZg_zfgE&_nc_zt=23&_nc_ht=scontent-sjc3-1.cdninstagram.com&_nc_gid=dSK1FYlFb158Xo4VnqRLKw&_nc_ss=79689&oh=00_AQIqJYaJ8Q17ObtCAKQv9DwoR-18DhE1Ok3lywkxZq9uNA&oe=6AB1A002",
  },
  {
    file: "cake-display.jpg",
    url: "https://scontent-sjc6-1.cdninstagram.com/v/t51.82787-15/810281517_18104620799349734_3680554365843388652_n.jpg?stp=dst-jpg_e35_s640x640_tt6&_nc_cat=111&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiRkVFRC5iZXN0X2ltYWdlX3VybGdlbi5DMyJ9&_nc_ohc=zGkd-E-DICMQ7kNvwFj7aX-&_nc_oc=AdqmlWO-FHnElkLfq1fnQ8nNxBcz72d0BprtBeBTtRwCnLOP2Lnlm3ofKqrmHFUwwj0&_nc_zt=23&_nc_ht=scontent-sjc6-1.cdninstagram.com&_nc_gid=dSK1FYlFb158Xo4VnqRLKw&_nc_ss=79689&oh=00_AQJqRs_AcAq3x8zV3aiOsJswzKNsfAMP3QnYViqcbe-g7w&oe=6AB19678",
  },
  {
    file: "wedding-cake.jpg",
    url: "https://scontent-sjc6-1.cdninstagram.com/v/t51.82787-15/804726020_18104248538349734_2795777063226823678_n.jpg?stp=dst-jpg_e35_s640x640_tt6&_nc_cat=104&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiRkVFRC5iZXN0X2ltYWdlX3VybGdlbi5DMyJ9&_nc_ohc=nqoXmPOlKukQ7kNvwFktssp&_nc_oc=Adp36T_XmtgR4Kn52MwKIR3kCZYGE5lvd853jzSVCEwEfjVrIt0jyu4XjF5HGXMOPN8&_nc_zt=23&_nc_ht=scontent-sjc6-1.cdninstagram.com&_nc_gid=dSK1FYlFb158Xo4VnqRLKw&_nc_ss=79689&oh=00_AQKFzv8qJS24U2Faw0-uPl1BLqnVkeqNy__G2WMJWTHKYQ&oe=6AB1A009",
  },
  {
    file: "floral-cake.jpg",
    url: "https://scontent-sjc6-1.cdninstagram.com/v/t51.82787-15/799224862_18103807121349734_7063900856644349327_n.jpg?stp=dst-jpg_e35_s640x640_tt6&_nc_cat=101&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiRkVFRC5iZXN0X2ltYWdlX3VybGdlbi5DMyJ9&_nc_ohc=7VkJMLwd5x0Q7kNvwEeLcbZ&_nc_oc=Adpoeep0zPkfg9L5gvRWt3MSNL3-p2b3L3LezJLhCZ1b7dU5lnPrn07TL7L2lsIEhDE&_nc_zt=23&_nc_ht=scontent-sjc6-1.cdninstagram.com&_nc_gid=dSK1FYlFb158Xo4VnqRLKw&_nc_ss=79689&oh=00_AQLmFDuXVftoNVB2GH_e0RQmjne0Xe6nPoJSSb3eptm-Kg&oe=6AB19EFD",
  },
  {
    file: "pastry-dessert.jpg",
    url: "https://scontent-sjc6-1.cdninstagram.com/v/t51.82787-15/797991997_18103692914349734_6318417601853575922_n.jpg?stp=dst-jpg_e35_s640x640_tt6&_nc_cat=108&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiRkVFRC5iZXN0X2ltYWdlX3VybGdlbi5DMyJ9&_nc_ohc=YhCinn48ziYQ7kNvwG_PHci&_nc_oc=Adr1dYiCFA3-XxktIGdnJAJzu2yXLHbyhrhOHS8y_V50SoZdXaTz8Twt9Te31qmkhpM&_nc_zt=23&_nc_ht=scontent-sjc6-1.cdninstagram.com&_nc_gid=dSK1FYlFb158Xo4VnqRLKw&_nc_ss=79689&oh=00_AQK9bkQhowlLfvwQJIH1R9JRtSnIivSMM8JU49RnRUMU2Q&oe=6AB1821B",
  },
  {
    file: "interior-space.jpg",
    url: "https://scontent-sjc6-1.cdninstagram.com/v/t51.71878-15/686518551_1624978781940725_3174482167706118818_n.jpg?stp=dst-jpg_s150x150_tt6&_nc_cat=111&ccb=7-5&_nc_sid=acbce5&_nc_ohc=QXJxo2oZNB4Q7kNvwFpIy1A&_nc_oc=AdoPHqrsgvzfoNP6hnC3Yz6getmmVU3AHiqkkQWT4Ji7zWh8sRgPTu2gd4UOCPe9jE0&_nc_zt=23&_nc_ht=scontent-sjc6-1.cdninstagram.com&_nc_gid=5gis3mxYdIF9u-OpwpBWsg&_nc_ss=79689&oh=00_AQKPu0J7EBwB-GnbCqMJXb_WLeY65ZVn-Uyoz3JStvxU4Q&oe=6AB18785",
  },
  {
    file: "cakes-highlight.jpg",
    url: "https://scontent-sjc3-1.cdninstagram.com/v/t51.71878-15/696511587_995504936188350_1683353373024719674_n.jpg?stp=dst-jpg_s150x150_tt6&_nc_cat=103&ccb=7-5&_nc_sid=acbce5&_nc_ohc=a0GH9X_WrJAQ7kNvwFVn65O&_nc_oc=Adr2YvwMGPYrW_sm_9T8Pssu6ln_1fmm7tFLSwlMtCwBs8rLwrjYS3xFwktGhiC8aNc&_nc_zt=23&_nc_ht=scontent-sjc3-1.cdninstagram.com&_nc_gid=5gis3mxYdIF9u-OpwpBWsg&_nc_ss=79689&oh=00_AQLahjq4E1NvbfkaLkYQ7NAO1TDt8bHuiETCcIxj0owv2Q&oe=6AB18815",
  },
  {
    file: "desserts-highlight.jpg",
    url: "https://scontent-sjc6-1.cdninstagram.com/v/t51.71878-15/689769742_949956831129801_1268802192023526232_n.jpg?stp=dst-jpg_s150x150_tt6&_nc_cat=107&ccb=7-5&_nc_sid=acbce5&_nc_ohc=bkRI2mKuiXAQ7kNvwFWAmh5&_nc_oc=AdreHj4SgbhWInzQ18VNjG0cTc1Uu8PATXBg37O3PLFFMg43xGovxcNnSNxgiR2E5RU&_nc_zt=23&_nc_ht=scontent-sjc6-1.cdninstagram.com&_nc_gid=5gis3mxYdIF9u-OpwpBWsg&_nc_ss=79689&oh=00_AQKbIfdElWTWx2tg2MGrRSo5Kzi4Lb2e7CsbA4r7SQlaTA&oe=6AB18F57",
  },
  {
    file: "maps-interior-01.jpg",
    url: "https://media-cdn.tripadvisor.com/media/photo-o/34/99/6e/19/lots-creme.jpg",
  },
  {
    file: "maps-interior-02.jpg",
    url: "https://media-cdn.tripadvisor.com/media/photo-o/34/99/6e/15/lots-creme.jpg",
  },
  {
    file: "maps-display-01.jpg",
    url: "https://media-cdn.tripadvisor.com/media/photo-o/34/99/6e/17/lots-creme.jpg",
  },
];

const headers = {
  "User-Agent":
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36",
  Accept: "image/avif,image/webp,image/apng,image/*,*/*;q=0.8",
  Referer: "https://www.instagram.com/",
};

await mkdir(outDir, { recursive: true });

for (const image of images) {
  const res = await fetch(image.url, {
    headers: image.url.includes("tripadvisor")
      ? {
          ...headers,
          Referer: "https://www.tripadvisor.com/",
        }
      : headers,
  });
  if (!res.ok) {
    console.error(`FAIL ${image.file}: ${res.status} ${res.statusText}`);
    continue;
  }
  const buffer = Buffer.from(await res.arrayBuffer());
  await writeFile(join(outDir, image.file), buffer);
  console.log(`OK ${image.file} (${buffer.length} bytes, ${res.headers.get("content-type")})`);
}
