import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { SwipeRow } from "@/components/SwipeRow";
import { images, site } from "@/data/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Lots. Crème is a French pâtisserie cafe in Manjeri, Kerala.",
};

export default function AboutPage() {
  return (
    <main id="main">
      <PageHero
        eyebrow="About"
        title="A pâtisserie in Manjeri"
        image={images.terraceDay.src}
      >
        <p>
          French pastry, coffee, waffles, and cakes — made by hand.
        </p>
      </PageHero>

      <section className="section-pad" style={{ background: "var(--ivory)" }}>
        <div className="container grid-2">
          <div>
            <p className="eyebrow mb-3">The studio</p>
            <h2 className="display-lg text-charcoal">
              A cafe for pastry, and a bench for cakes
            </h2>
            <p className="body-lg mt-4">
              You can see the shop from the road: a lit sign, plants along the
              windows, a small terrace to the side. Inside, the work is pastry,
              dessert, and cakes.
            </p>
            <p className="body-lg mt-3">
              Come in for coffee or something from the case. For a birthday or a
              wedding, send the date on WhatsApp.
            </p>
            <div className="stack-btns mt-6 justify-start">
              <Link href="/visit" className="btn btn-teal">
                Visit
              </Link>
              <a
                href={site.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-dark"
              >
                Instagram
              </a>
            </div>
          </div>
          <div className="relative hidden h-[420px] overflow-hidden rounded-2xl md:block">
            <Image
              src={images.tableSpread.src}
              alt={images.tableSpread.alt}
              fill
              sizes="560px"
              className="object-cover"
            />
          </div>
          <div className="md:hidden">
            <SwipeRow label="the studio" size="film">
              {[images.tableSpread, images.terraceDay, images.wafflePink].map((img) => (
                <div key={img.src} className="relative overflow-hidden rounded-2xl">
                  <Image src={img.src} alt={img.alt} fill sizes="80vw" className="object-cover" />
                </div>
              ))}
            </SwipeRow>
          </div>
        </div>
      </section>

      <section className="section-pad" style={{ background: "var(--card)" }}>
        <div className="container">
          <div className="grid items-center gap-8 md:grid-cols-[280px_1fr] lg:grid-cols-[360px_1fr]">
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
              <Image
                src={images.storefrontDay.src}
                alt={images.storefrontDay.alt}
                fill
                sizes="360px"
                className="object-cover"
              />
            </div>
            <div>
              <p className="eyebrow mb-3">The terrace</p>
              <h2 className="display-lg text-charcoal">A place beside the cafe</h2>
              <p className="body-lg mt-4 max-w-md">
                The terrace is part of the shop: tables outside, the party hall
                at the same address. Coffee and pastry are served in the cafe.
                Cakes for a date are made on the bench.
              </p>
              <p className="shop-hours">{site.hoursDaily}</p>
            </div>
          </div>
        </div>
      </section>

      <section id="team" className="section-pad" style={{ background: "var(--ivory)" }}>
        <div className="container">
          <div className="team-band">
            <div className="mark-panel">
              <Image src={images.logo.src} alt="" width={112} height={112} />
            </div>
            <div>
              <p className="eyebrow mb-3">The team</p>
              <h2 className="display-lg text-charcoal">The team behind Lots. Crème</h2>
              <p className="body-lg mt-4 max-w-md">
                The shop is run from the bench at Kovilamkundu. Pastry, coffee,
                waffles, and cakes are made by hand, in the same room.
              </p>
              <p className="body-lg mt-3 max-w-md">
                For a cake on a date, or the party hall, write on WhatsApp.
              </p>
              <div className="stack-btns mt-6 justify-start">
                <a
                  href={site.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-teal"
                >
                  WhatsApp the shop
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
