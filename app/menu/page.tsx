import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { PartyHallPanel } from "@/components/PartyHallPanel";
import { SwipeRow } from "@/components/SwipeRow";
import { images, menuSections, site } from "@/data/site";

export const metadata: Metadata = {
  title: "Menu",
  description:
    "Coffee, pastries, cheesecakes, desserts, waffles and cakes at Lots. Crème in Manjeri.",
};

export default function MenuPage() {
  return (
    <main id="main">
      <PageHero
        eyebrow="Menu"
        title="Coffee, pastry, waffles, and cakes"
        image={images.tableSpread.src}
      >
        <p>See the shop when you visit. For a cake on a particular day, write first.</p>
      </PageHero>

      <section className="page-section section-pad" style={{ background: "var(--ivory)" }}>
        <div className="container">
          <SwipeRow label="menu" cols="3">
            {menuSections.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                id={item.name.toLowerCase().replaceAll(" ", "-")}
                className="photo-card relative h-[260px]"
              >
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  sizes="360px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <h2 className="text-xl font-semibold text-white">{item.name}</h2>
                  <p className="mt-1 text-sm text-white/90">{item.note}</p>
                </div>
              </Link>
            ))}
          </SwipeRow>
        </div>
      </section>

      <section id="party-hall" className="page-section section-pad" style={{ background: "var(--card)" }}>
        <div className="container">
          <PartyHallPanel compact>
            <div className="stack-btns">
              <Link href="/visit#party-hall" className="btn btn-gold">
                Party hall details
              </Link>
              <a
                href={site.whatsappParty}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-dark"
              >
                Enquire on WhatsApp
              </a>
            </div>
          </PartyHallPanel>
        </div>
      </section>
    </main>
  );
}
