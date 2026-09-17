import type { Metadata } from "next";
import Image from "next/image";
import { CtaBand } from "@/components/CtaBand";
import { InquiryForm } from "@/components/InquiryForm";
import { PageHero } from "@/components/PageHero";
import { images } from "@/data/site";

export const metadata: Metadata = {
  title: "Custom cakes",
  description:
    "Enquire about a custom cake or wedding cake at Lots. Crème, Manjeri.",
};

const steps = [
  {
    n: "01",
    title: "Send the date",
    text: "The day matters first. Occasion next — birthday, wedding, or something else.",
  },
  {
    n: "02",
    title: "Talk through the cake",
    text: "Size, colours, flowers, and flavour. Send a reference if you have one.",
  },
  {
    n: "03",
    title: "Collect from the shop",
    text: "Pickup at SJ Century Complex. We will confirm the time on WhatsApp.",
  },
];

export default function CustomCakesPage() {
  return (
    <main id="main">
      <PageHero
        eyebrow="Custom cakes"
        title="Tell us the date. We will talk about the cake."
        image={images.heroCustom.src}
      >
        <p>
          Birthdays, weddings and cakes made for a specific day. Send the
          occasion, the date, and whatever you already know.
        </p>
      </PageHero>

      <section className="section-pad" style={{ background: "var(--ivory)" }}>
        <div className="container">
          <div className="mb-6">
            <p className="eyebrow mb-2">How it works</p>
            <h2 className="display-lg text-charcoal">Three steps, then WhatsApp</h2>
          </div>
          <div className="mb-8 grid gap-3 md:grid-cols-3">
            {steps.map((step) => (
              <div
                key={step.n}
                className="rounded-2xl p-5"
                style={{ background: "var(--card)" }}
              >
                <span className="step-num">{step.n}</span>
                <h3 className="display-md mt-4 text-charcoal">{step.title}</h3>
                <p className="body-lg mt-2">{step.text}</p>
              </div>
            ))}
          </div>

          <div className="grid items-start gap-6 lg:grid-cols-2">
            <div
              className="rounded-2xl p-6 sm:p-8"
              style={{ background: "var(--white)", boxShadow: "var(--shadow)" }}
            >
              <p className="eyebrow mb-3">Enquiry</p>
              <h2 className="display-md mb-6">Send it on WhatsApp</h2>
              <InquiryForm />
            </div>
            <div className="grid gap-4">
              <div className="relative min-h-[260px] overflow-hidden rounded-2xl sm:min-h-[320px]">
                <Image
                  src={images.themeCake.src}
                  alt={images.themeCake.alt}
                  fill
                  sizes="560px"
                  className="object-cover"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[images.heartCake, images.celebrationCake].map((img) => (
                  <div key={img.src} className="relative h-36 overflow-hidden rounded-2xl sm:h-44">
                    <Image src={img.src} alt={img.alt} fill sizes="280px" className="object-cover" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaBand title="Prefer to talk first? Open WhatsApp." />
    </main>
  );
}
