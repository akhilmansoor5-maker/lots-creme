import Link from "next/link";
import { site } from "@/data/site";

type CtaBandProps = {
  title?: string;
  text?: string;
};

export function CtaBand({
  title = "Come to the shop, or write on WhatsApp",
  text = `${site.addressLines[0]}, near GGHSS. Open ${site.hours.toLowerCase()}.`,
}: CtaBandProps) {
  return (
    <section className="section-pad" style={{ background: "var(--ivory)" }}>
      <div className="container">
        <div className="cta-box mx-auto max-w-3xl">
          <p className="eyebrow mb-4">Visit or order</p>
          <h2 className="display-lg text-white">{title}</h2>
          <p className="mx-auto mt-4 max-w-md text-white/70">{text}</p>
          <div className="stack-btns mt-6">
            <a
              href={site.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-gold"
            >
              WhatsApp
            </a>
            <Link href="/visit" className="btn btn-outline-white">
              Get directions
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
