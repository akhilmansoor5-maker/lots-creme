import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CtaBand } from "@/components/CtaBand";
import { PageHero } from "@/components/PageHero";
import { images, site } from "@/data/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Lots. Crème is a patisserie and dessert studio in Manjeri, Kerala.",
};

export default function AboutPage() {
  return (
    <main id="main">
      <PageHero
        eyebrow="About"
        title="A patisserie in Manjeri"
        image={images.heroAbout.src}
      >
        <p>
          Lots. Crème is a dessert studio. Cakes, pastry, and dessert, made by
          hand.
        </p>
      </PageHero>

      <section className="section-pad" style={{ background: "var(--ivory)" }}>
        <div className="container grid-2">
          <div>
            <p className="eyebrow mb-3">The studio</p>
            <h2 className="display-lg text-charcoal">
              Cakes for the cafe, and cakes for a particular table
            </h2>
            <p className="body-lg mt-4">
              You can see the shop from the road: a lit sign, plants along the
              windows, a small terrace to the side. Inside, the work is cakes
              and pastry.
            </p>
            <p className="body-lg mt-3">
              Come in for something from the case. For a birthday or a wedding,
              send the date on WhatsApp.
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
          <div className="relative h-[360px] overflow-hidden rounded-2xl">
            <Image
              src={images.roseCake.src}
              alt={images.roseCake.alt}
              fill
              sizes="560px"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <CtaBand />
    </main>
  );
}
