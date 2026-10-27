import Image from "next/image";
import Link from "next/link";
import { HeroFilm } from "@/components/HeroFilm";
import { PartyHallPanel } from "@/components/PartyHallPanel";
import { SwipeRow } from "@/components/SwipeRow";
import { heroFilms, images, shopMosaic, site } from "@/data/site";

const collections = [
  { label: "Menu", href: "/menu", img: images.wafflePlate },
  { label: "Cakes", href: "/cakes", img: images.roseSlab },
  { label: "Custom cakes", href: "/custom-cakes", img: images.bearCake },
  { label: "Visit the shop", href: "/visit", img: images.storefrontDay },
];

const marquee = [
  "Coffee",
  "Pastries",
  "Cheesecakes",
  "Waffles",
  "Cakes",
  "Party hall",
];

export default function HomePage() {
  return (
    <main id="main">
      <section className="home-hero">
        <div className="home-hero-copy">
          <p className="eyebrow">Manjeri · Kerala</p>
          <h1 className="display-xl">
            A French table in <span className="hero-place">Kovilamkundu</span>
          </h1>
          <p className="hero-lede">
            Pastry, coffee, waffles and cakes — made by hand, served in the cafe.
          </p>
          <div className="stack-btns justify-start">
            <Link href="/menu" className="btn btn-gold">
              See the menu
            </Link>
            <Link href="/visit" className="btn btn-outline-hero">
              Visit the shop
            </Link>
          </div>
          <p className="shop-hours">{site.hoursDaily}</p>
        </div>

        <div className="home-hero-stage">
          <HeroFilm sources={heroFilms} poster={images.heroPoster.src} />
          <div className="home-hero-veil" />
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
            <p className="eyebrow mb-3">The cafe</p>
            <h2 className="display-lg text-charcoal">Pâtisserie, coffee, and a room to sit</h2>
            <p className="body-lg mt-4 max-w-md">
              Lots. Crème is a French pâtisserie cafe at Kovilamkundu, Chengana
              Bypass, Kacherippadi. Come in for coffee, pastry, a waffle, a cake
              from the case, or a cake made for a date. A party hall is
              available at the same place.
            </p>
            <div className="stack-btns mt-6 justify-start">
              <Link href="/about" className="btn btn-teal">
                About us
              </Link>
              <Link href="/visit" className="btn btn-outline-dark">
                Find the shop
              </Link>
            </div>
          </div>
          <div className="relative hidden min-h-[420px] overflow-hidden md:block" style={{ borderRadius: 20 }}>
            <Image
              src={images.tableWindow.src}
              alt={images.tableWindow.alt}
              fill
              sizes="560px"
              className="object-cover"
            />
          </div>
          <div className="md:hidden">
            <SwipeRow label="the cafe" size="film">
              {shopMosaic.map((img) => (
                <div key={img.src} className="relative overflow-hidden rounded-2xl">
                  <Image src={img.src} alt={img.alt} fill sizes="80vw" className="object-cover" />
                </div>
              ))}
            </SwipeRow>
          </div>
        </div>
      </section>

      <section className="section-pad" style={{ background: "var(--card)" }}>
        <div className="container">
          <div className="mb-8 text-center">
            <p className="eyebrow mb-3">The table</p>
            <h2 className="display-lg text-charcoal">Coffee, pastry, waffles, and cakes</h2>
          </div>
          <SwipeRow label="collections" cols="4">
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
                  <p className="mt-1 text-xs font-semibold uppercase tracking-wider" style={{ color: "var(--gold-on-dark)" }}>
                    View
                  </p>
                </div>
              </Link>
            ))}
          </SwipeRow>
        </div>
      </section>

      <section className="section-pad mosaic-section" style={{ background: "var(--ivory)" }}>
        <div className="container">
          <div className="mb-8">
            <p className="eyebrow mb-3">From the shop</p>
            <h2 className="display-lg text-charcoal">Plates, pastry, and the case</h2>
          </div>
          <div className="hidden md:block">
            <div className="shop-mosaic">
              <figure className="shop-mosaic-wide">
                <Image src={images.tableSpread.src} alt={images.tableSpread.alt} fill sizes="720px" className="object-cover" />
              </figure>
              <figure>
                <Image src={images.tableWindow.src} alt={images.tableWindow.alt} fill sizes="360px" className="object-cover" />
              </figure>
              <figure>
                <Image src={images.oreoSundae.src} alt={images.oreoSundae.alt} fill sizes="360px" className="object-cover" />
              </figure>
            </div>
          </div>
          <div className="md:hidden">
            <SwipeRow label="from the shop" size="film">
              {[images.tableSpread, images.tableWindow, images.oreoSundae].map((img) => (
                <div key={img.src} className="photo-card relative overflow-hidden rounded-2xl">
                  <Image src={img.src} alt={img.alt} fill sizes="80vw" className="object-cover" />
                </div>
              ))}
            </SwipeRow>
          </div>
        </div>
      </section>

      <section id="party-hall" className="section-pad" style={{ background: "var(--card)" }}>
        <div className="container">
          <PartyHallPanel>
            <div className="stack-btns">
              <Link href="/visit#party-hall" className="btn btn-gold">
                Party hall details
              </Link>
              <a
                href={site.whatsappParty}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-dark"
              >
                Enquire on WhatsApp
              </a>
            </div>
          </PartyHallPanel>
        </div>
      </section>

      <section className="visit-band">
        <div className="container visit-band-inner">
          <div>
            <p className="eyebrow mb-2">Visit</p>
            <p className="display-md text-charcoal">
              {site.addressLines[0]} · {site.addressLines[2]}
            </p>
            <p className="body-lg mt-2">{site.hoursDaily}</p>
          </div>
          <Link href="/visit" className="btn btn-teal">
            Find the shop
          </Link>
        </div>
      </section>
    </main>
  );
}
