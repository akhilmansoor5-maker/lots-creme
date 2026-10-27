"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { images, navLinks, site } from "@/data/site";

function cleanPath(path: string) {
  const next = path.replace(/\/$/, "");
  return next || "/";
}

export function Navbar() {
  const pathname = usePathname();
  const current = cleanPath(pathname);
  const isHome = current === "/";
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [wide, setWide] = useState(true);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const media = window.matchMedia("(min-width: 900px)");
    const sync = () => setWide(media.matches);
    sync();
    media.addEventListener("change", sync);
    return () => media.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    setOpen(false);
    setScrolled(window.scrollY > 24);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const solid = scrolled || open || !isHome;
  const darkInk = solid || (isHome && wide);

  return (
    <header
      className="site-header"
      style={{
        background: solid ? "rgba(245,241,234,0.96)" : "transparent",
        boxShadow: solid ? "0 2px 20px rgba(30,86,116,0.08)" : "none",
      }}
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-[60] focus:bg-ivory focus:px-3 focus:py-2 focus:text-charcoal"
      >
        Skip to content
      </a>

      <div className="container flex h-16 items-center justify-between gap-3 sm:h-[4.5rem]">
        <Link
          href="/"
          className="site-logo-link min-w-0"
          aria-label={site.wordmark}
          onClick={() => setOpen(false)}
        >
          <Image
            src={images.logo.src}
            alt=""
            width={40}
            height={40}
            className="site-logo-mark"
            priority
          />
          <span className="site-logo-text">
            <span
              className="site-wordmark"
              style={{ color: darkInk ? "var(--charcoal)" : "#fff" }}
            >
              {site.mark}
            </span>
            <span
              className="site-wordmark-sub"
              style={{ color: darkInk ? "var(--muted)" : "rgba(255,255,255,0.72)" }}
            >
              {site.tagline}
            </span>
          </span>
        </Link>

        <nav
          className="hidden items-center gap-1 rounded-full px-1.5 py-1 lg:flex"
          style={{
            border: `1px solid ${darkInk ? "var(--border)" : "rgba(255,255,255,0.22)"}`,
            background: darkInk ? "rgba(255,255,255,0.55)" : "rgba(255,255,255,0.1)",
          }}
          aria-label="Primary"
        >
          {navLinks.map((link) => {
            const active = current === cleanPath(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-full px-4 py-2 text-[13px] font-medium"
                style={{
                  color: darkInk
                    ? active
                      ? "var(--teal)"
                      : "var(--charcoal)"
                    : active
                      ? "var(--charcoal)"
                      : "rgba(255,255,255,0.92)",
                  background: active ? "#fff" : "transparent",
                }}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={site.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-gold btn-nav hidden sm:inline-flex"
          >
            Order Now
          </a>
          <button
            type="button"
            className="flex h-11 w-11 items-center justify-center lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
            style={{ color: darkInk ? "var(--charcoal)" : "#fff" }}
          >
            <span className="relative block h-3.5 w-5">
              <span
                className="absolute left-0 block h-0.5 w-full rounded-full bg-current transition-transform duration-200"
                style={{ top: open ? "6px" : "0", transform: open ? "rotate(45deg)" : "none" }}
              />
              <span
                className="absolute top-[6px] left-0 block h-0.5 w-full rounded-full bg-current transition-opacity duration-200"
                style={{ opacity: open ? 0 : 1 }}
              />
              <span
                className="absolute left-0 block h-0.5 w-full rounded-full bg-current transition-transform duration-200"
                style={{ top: open ? "6px" : "12px", transform: open ? "rotate(-45deg)" : "none" }}
              />
            </span>
          </button>
        </div>
      </div>

      {open ? (
        <div className="site-menu-panel lg:hidden">
          <nav className="container flex flex-col py-6" aria-label="Mobile">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="flex min-h-14 items-center border-b text-[22px] font-semibold text-charcoal"
                style={{ borderColor: "var(--border)" }}
              >
                {link.label}
              </Link>
            ))}
            <a
              href={site.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-gold btn-nav mt-8 w-full"
            >
              Order on WhatsApp
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
