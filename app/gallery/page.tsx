import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/PageHero";
import { SwipeRow } from "@/components/SwipeRow";
import { galleryGroups, images } from "@/data/site";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Cakes, waffles, dessert and the shop at Lots. Crème, Manjeri.",
};

export default function GalleryPage() {
  return (
    <main id="main">
      <PageHero
        eyebrow="Gallery"
        title="The cafe, and the work from the bench"
        image={images.wafflePlate.src}
      >
        <p>Waffles, pastry, cakes, and the room they are made in.</p>
      </PageHero>

      <section className="section-pad" style={{ background: "var(--ivory)" }}>
        <div className="container">
          {galleryGroups.map((group) => (
            <div key={group.title} className="gallery-band">
              <div className="gallery-band-head">
                <p className="eyebrow">{group.title}</p>
                <p className="body-lg">{group.text}</p>
              </div>
              <SwipeRow
                label={group.title}
                cols={group.items.length > 2 ? "3" : "2"}
                size="film"
              >
                {group.items.map((item) => (
                  <div key={item.src} className="photo-card relative overflow-hidden rounded-2xl">
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      sizes="(min-width: 1024px) 360px, 80vw"
                      className="object-cover"
                    />
                  </div>
                ))}
              </SwipeRow>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
