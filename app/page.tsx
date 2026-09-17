import Image from "next/image";
import Link from "next/link";
import { CtaBand } from "@/components/CtaBand";
import { images, site } from "@/data/site";

const collections = [
  { label: "Cakes", href: "/cakes", img: images.roseCake },
  { label: "Custom cakes", href: "/custom-cakes", img: images.heartCake },
  { label: "Gallery", href: "/gallery", img: images.lilacCake },
  { label: "Visit the shop", href: "/visit", img: images.storefront },
];

const marquee = [
  "Cakes",
  "Pastries",
  "Cheesecakes",
  "Desserts",
  "Waffles",
  "Custom cakes",
];

export default function HomePage() {
  return (
    <main id="main">
      <section className="relative min-h-[100svh] overflow-hidden">
        <Image
          src={images.terrace.src}
          alt={images.terrace.alt}
          fill
          fetchPriority="high"
          loading="eager"
          quality={90}
          sizes="100vw"
          className="object-cover object-[center_42%]"
        />
        <div className="absolute inset-0 bg-black/45" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/25" />

        <div className="home-hero-inner">
          <div className="hero-copy max-w-3xl">
            <p className="eyebrow mb-4" style={{ color: "var(--gold)" }}>
              Manjeri · Kerala
            </p>
            <h1 className="display-xl text-white">
              Cakes and dessert, made in Manjeri
            </h1>
            <p className="hero-sub mx-auto mt-5 max-w-xl">
              Patisserie at SJ Century Complex. Pastries, cheesecakes, waffles,
              and custom cakes — come in, or order on WhatsApp.
            </p>
            <div className="stack-btns mt-8">
              <Link href="/menu" className="btn btn-gold">
                See the menu
              </Link>
              <a
                href={site.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-white"
              >
                Order on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="marquee" aria-hidden>
        <div className="marquee-track">
          {[...marquee, ...marquee].map((item, i) => (
            <span key={`${item}-${i}`}>{item} ·</span>
          ))}
        </div>
      </div>

      <section className="section-pad" style={{ background: "var(--ivory)" }}>
        <div className="container grid-2">
          <div>
            <p className="eyebrow mb-3">The shop</p>
            <h2 className="display-lg text-charcoal">The patisserie in Manjeri</h2>
            <p className="body-lg mt-4 max-w-md">
              Lots. Crème is a dessert studio at SJ Century Complex. Come in for
              a cake from the case, a waffle, or a custom cake for a birthday
              or wedding.
            </p>
            <div className="stack-btns mt-6 justify-start">
              <Link href="/about" className="btn btn-teal">
                About us
              </Link>
              <Link href="/visit" className="btn btn-outline-dark">
                Find the shop
              </Link>
            </div>
            <p className="mt-5 text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
              Open daily, {site.hoursShort}
              <br />
              SJ Century Complex, near GGHSS
              <br />
              WhatsApp {site.phoneDisplay}
            </p>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {[images.roseCake, images.heartCake, images.lilacCake, images.celebrationCake].map(
              (img, i) => (
                <div
                  key={img.src}
                  className="relative overflow-hidden"
                  style={{
                    height: i % 2 === 0 ? 210 : 170,
                    borderRadius: 16,
                    alignSelf: i % 2 === 0 ? "start" : "end",
                  }}
                >
                  <Image src={img.src} alt={img.alt} fill sizes="280px" className="object-cover" />
                </div>
              )
            )}
          </div>
        </div>
      </section>

      <section className="section-pad" style={{ background: "var(--card)" }}>
        <div className="container">
          <div className="mb-8 text-center">
            <p className="eyebrow mb-3">Collections</p>
            <h2 className="display-lg text-charcoal">Cakes, custom work, and the shop</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {collections.map((item) => (
              <Link key={item.href} href={item.href} className="cat-card">
                <Image
                  src={item.img.src}
                  alt={item.img.alt}
                  fill
                  sizes="300px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <p className="text-lg font-semibold text-white">{item.label}</p>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-gold">
                    View
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </main>
  );
}
