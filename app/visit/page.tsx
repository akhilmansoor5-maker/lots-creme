import type { Metadata } from "next";
import Image from "next/image";
import { CtaBand } from "@/components/CtaBand";
import { PageHero } from "@/components/PageHero";
import { SwipeRow } from "@/components/SwipeRow";
import { images, site } from "@/data/site";

export const metadata: Metadata = {
  title: "Visit",
  description:
    "Find Lots. Crème at SJ Century Complex, near GGHSS, Manjeri.",
};

export default function VisitPage() {
  return (
    <main id="main">
      <PageHero
        eyebrow="Visit"
        title="Manjeri"
        image={images.heroVisit.src}
      >
        <p>Patisserie on Industrial Estate Road, near GGHSS.</p>
      </PageHero>

      <section className="section-pad" style={{ background: "var(--ivory)" }}>
        <div className="container">
          <div className="relative mb-6 hidden h-[320px] overflow-hidden rounded-2xl md:block">
            <Image
              src={images.shopNight.src}
              alt={images.shopNight.alt}
              fill
              sizes="1120px"
              className="object-cover"
            />
          </div>
          <div className="mb-6 md:hidden">
            <SwipeRow label="the shop" size="film">
              {[images.shopNight, images.storefront, images.terrace].map((img) => (
                <div key={img.src} className="relative overflow-hidden rounded-2xl">
                  <Image src={img.src} alt={img.alt} fill sizes="80vw" className="object-cover" />
                </div>
              ))}
            </SwipeRow>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            <div
              className="rounded-2xl p-6 sm:p-8"
              style={{ background: "var(--white)", boxShadow: "var(--shadow)" }}
            >
              <dl className="space-y-5">
                <div>
                  <dt className="eyebrow">Address</dt>
                  <dd className="mt-2 text-lg leading-relaxed">
                    {site.addressLines.map((line) => (
                      <span key={line} className="block">
                        {line}
                      </span>
                    ))}
                  </dd>
                </div>
                <div>
                  <dt className="eyebrow">Hours</dt>
                  <dd className="mt-2 text-lg">{site.hours}</dd>
                </div>
                <div>
                  <dt className="eyebrow">Phone</dt>
                  <dd className="mt-2 text-lg">
                    <a href={`tel:${site.phoneTel}`}>{site.phoneDisplay}</a>
                  </dd>
                </div>
              </dl>
              <div className="stack-btns mt-6 justify-start">
                <a href={site.maps} target="_blank" rel="noopener noreferrer" className="btn btn-gold">
                  Google Maps
                </a>
                <a href={site.whatsapp} target="_blank" rel="noopener noreferrer" className="btn btn-outline-dark">
                  WhatsApp
                </a>
              </div>
            </div>
            <div className="min-h-[320px] overflow-hidden rounded-2xl">
              <iframe
                title="Lots. Crème on Google Maps"
                src={site.mapsEmbed}
                className="h-full min-h-[320px] w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      <CtaBand title="See you at the shop" />
    </main>
  );
}
