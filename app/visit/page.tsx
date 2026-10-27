import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/PageHero";
import { PartyHallPanel } from "@/components/PartyHallPanel";
import { images, site } from "@/data/site";

export const metadata: Metadata = {
  title: "Visit",
  description:
    "Find Lots. Crème at Kovilamkundu, Chengana Bypass, Kacherippadi, Manjeri.",
};

export default function VisitPage() {
  return (
    <main id="main">
      <PageHero
        eyebrow="Visit"
        title="Manjeri"
        image={images.storefrontDay.src}
      >
        <p>Pâtisserie at Kovilamkundu, Chengana Bypass, Kacherippadi.</p>
      </PageHero>

      <section className="section-pad" style={{ background: "var(--ivory)" }}>
        <div className="container">
          <div className="mark-panel mb-6">
            <Image src={images.logo.src} alt={site.wordmark} width={112} height={112} />
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

      <section
        id="party-hall"
        className="menu-group page-section section-pad"
        style={{ background: "var(--card)" }}
      >
        <div className="container">
          <PartyHallPanel>
            <div className="stack-btns">
              <a
                href={site.whatsappParty}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-gold"
              >
                Enquire on WhatsApp
              </a>
              <a href={`tel:${site.phoneTel}`} className="btn btn-outline-dark">
                Call {site.phoneDisplay}
              </a>
            </div>
          </PartyHallPanel>
        </div>
      </section>
    </main>
  );
}
