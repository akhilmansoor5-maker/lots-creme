import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CtaBand } from "@/components/CtaBand";
import { PageHero } from "@/components/PageHero";
import { SwipeRow } from "@/components/SwipeRow";
import { images, menuSections, site } from "@/data/site";

export const metadata: Metadata = {
  title: "Menu",
  description:
    "Cakes, pastries, cheesecakes, desserts, waffles and custom cakes at Lots. Crème in Manjeri.",
};

export default function MenuPage() {
  return (
    <main id="main">
      <PageHero
        eyebrow="Menu"
        title="What is in the case, and what we make for a date"
        image={images.heroMenu.src}
      >
        <p>
          See the shop when you visit. For a cake on a particular day, write on
          WhatsApp. Prices are not listed here.
        </p>
      </PageHero>

      <section className="section-pad" style={{ background: "var(--ivory)" }}>
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

          <div className="stack-btns mt-8">
            <a href={site.whatsapp} target="_blank" rel="noopener noreferrer" className="btn btn-gold">
              Order on WhatsApp
            </a>
            <Link href="/cakes" className="btn btn-outline-dark">
              See cakes
            </Link>
          </div>
        </div>
      </section>

      <CtaBand title="Ask what is in today, or order a cake" />
    </main>
  );
}
