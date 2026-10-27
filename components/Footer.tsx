import Image from "next/image";
import Link from "next/link";
import { images, navLinks, site } from "@/data/site";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <Image
            src={images.logo.src}
            alt=""
            width={56}
            height={56}
            className="footer-logo"
          />
          <p className="footer-mark">{site.mark}</p>
          <p className="footer-tag">{site.tagline}</p>
          <p className="footer-place">{site.location}</p>
        </div>

        <div>
          <p className="footer-head">Visit</p>
          <p className="footer-copy">
            {site.addressLines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </p>
          <p className="footer-copy mt-3">{site.hoursDaily}</p>
        </div>

        <div>
          <p className="footer-head">Pages</p>
          <nav className="footer-links" aria-label="Footer">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="footer-link">
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div>
          <p className="footer-head">Order</p>
          <a className="footer-link" href={`tel:${site.phoneTel}`}>
            {site.phoneDisplay}
          </a>
          <a
            className="footer-link"
            href={site.instagram}
            target="_blank"
            rel="noopener noreferrer"
          >
            {site.instagramHandle}
          </a>
          <a
            href={site.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-gold mt-4"
          >
            WhatsApp
          </a>
        </div>
      </div>
      <div className="footer-bar">
        <div className="container footer-bar-inner">
          <p>{site.wordmark}</p>
          <p>
            Designed by{" "}
            <a
              href="https://akhilmansoor.com"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-credit"
            >
              akhilmansoor.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
