import Link from "next/link";
import { navLinks, site } from "@/data/site";

export function Footer() {
  return (
    <footer style={{ background: "var(--teal)", color: "var(--ivory)" }}>
      <div className="container flex flex-col gap-5 py-7 pb-[calc(1.5rem+env(safe-area-inset-bottom))] sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.16em]">
            Lots. Crème
          </p>
          <p className="mt-1 text-sm text-white/60">
            SJ Century Complex, Manjeri · {site.hoursShort}
          </p>
        </div>
        <nav className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-white/80">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="footer-link">
              {link.label}
            </Link>
          ))}
        </nav>
        <a
          href={site.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-gold btn-nav"
        >
          WhatsApp
        </a>
      </div>
    </footer>
  );
}
