import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { SwipeRow } from "@/components/SwipeRow";
import { images } from "@/data/site";

export const metadata: Metadata = {
  title: "Cakes",
  description:
    "Celebration cakes, wedding cakes and custom cakes from Lots. Crème in Manjeri.",
};

const cakes = [
  {
    image: images.caseClear,
    title: "Cakes from the case",
    text: "Cream cakes and finished cakes, ready to take home.",
  },
  {
    image: images.whiteRoseCake,
    title: "Custom cakes",
    text: "Shapes, colours and flowers specified by you.",
    href: "/custom-cakes",
  },
  {
    image: images.roseSlab,
    title: "Wedding cakes",
    text: "Tiers and smaller cakes. Start with the date.",
  },
  {
    image: images.rainbowCake,
    title: "Birthdays",
    text: "Numbers, colours, and cakes for a celebration.",
  },
];

export default function CakesPage() {
  return (
    <main id="main">
      <PageHero
        eyebrow="Cakes"
        title="Celebration cakes and wedding cakes"
        image={images.roseSlab.src}
      >
        <p>
          From a cream cake in the case to a cake made for a wedding. Tell us
          the date first.
        </p>
      </PageHero>

      <section className="section-pad" style={{ background: "var(--ivory)" }}>
        <div className="container">
          <div className="relative mb-5 min-h-[280px] overflow-hidden rounded-2xl sm:min-h-[380px]">
            <Image
              src={images.whiteRoseCake.src}
              alt={images.whiteRoseCake.alt}
              fill
              sizes="1120px"
              className="object-cover"
            />
            <div className="absolute inset-0 hidden bg-gradient-to-r from-black/75 via-black/40 to-transparent sm:block" />
            <div className="banner-copy sm:p-10">
              <p className="eyebrow mb-2">Celebration cakes</p>
              <h2 className="display-lg max-w-lg text-white">Flowers, and a date on the calendar</h2>
              <p className="hero-sub mt-3 max-w-md">
                Start with the day. Size, finish, and flavour follow.
              </p>
            </div>
          </div>

          <SwipeRow label="cakes" cols="2">
            {cakes.map((cake) => {
              const inner = (
                <>
                  <Image
                    src={cake.image.src}
                    alt={cake.image.alt}
                    fill
                    sizes="560px"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-6">
                    <h2 className="text-2xl font-semibold text-white">{cake.title}</h2>
                    <p className="mt-2 text-white/90">{cake.text}</p>
                  </div>
                </>
              );

              if (cake.href) {
                return (
                  <Link key={cake.title} href={cake.href} className="photo-card relative h-[300px]">
                    {inner}
                  </Link>
                );
              }

              return (
                <article key={cake.title} className="photo-card relative h-[300px]">
                  {inner}
                </article>
              );
            })}
          </SwipeRow>
        </div>
      </section>
    </main>
  );
}
