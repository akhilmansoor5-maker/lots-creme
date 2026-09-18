import type { Metadata } from "next";
import Image from "next/image";
import { CtaBand } from "@/components/CtaBand";
import { PageHero } from "@/components/PageHero";
import { SwipeRow } from "@/components/SwipeRow";
import { gallery, images } from "@/data/site";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Cakes and the shop at Lots. Crème, Manjeri.",
};

export default function GalleryPage() {
  return (
    <main id="main">
      <PageHero
        eyebrow="Gallery"
        title="The shop and the cakes"
        image={images.heroGallery.src}
      >
        <p>Photographs from Instagram and from the street outside.</p>
      </PageHero>

      <section className="section-pad" style={{ background: "var(--ivory)" }}>
        <div className="container">
          <SwipeRow label="gallery" cols="masonry" size="film">
            {gallery.map((item) => (
              <figure
                key={item.src}
                className="relative overflow-hidden rounded-2xl"
                style={{ height: item.span === "wide" ? 240 : 320 }}
              >
                <Image src={item.src} alt={item.alt} fill sizes="400px" className="object-cover" />
              </figure>
            ))}
          </SwipeRow>
        </div>
      </section>

      <CtaBand />
    </main>
  );
}
