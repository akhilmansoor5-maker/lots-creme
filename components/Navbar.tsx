"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks, site } from "@/data/site";

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
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

  const solid = scrolled || open;

  return (
    <header
      className="fixed inset-x-0 top-0 z-50 transition-all duration-300"
      style={{
        background: solid ? "rgba(247,242,232,0.96)" : "transparent",
        boxShadow: solid ? "0 2px 20px rgba(18,63,74,0.08)" : "none",
        paddingTop: "env(safe-area-inset-top)",
      }}
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-[60] focus:bg-ivory focus:px-3 focus:py-2 focus:text-charcoal"
      >
        Skip to content
      </a>

      <div className="container flex h-16 items-center justify-between gap-3 sm:h-20">
        <Link href="/" className="min-w-0" onClick={() => setOpen(false)}>
          <p
            className="truncate text-[13px] font-semibold uppercase tracking-[0.14em] sm:text-[15px] sm:tracking-[0.16em]"
            style={{ color: solid ? "var(--charcoal)" : "#fff" }}
          >
            Lots. Crème
          </p>
          <p
            className="text-[10px] uppercase tracking-[0.2em]"
            style={{ color: solid ? "var(--muted)" : "rgba(255,255,255,0.65)" }}
          >
            Manjeri
          </p>
        </Link>

        <nav
          className="hidden items-center gap-1 rounded-full px-1.5 py-1 lg:flex"
          style={{
            border: `1px solid ${solid ? "var(--border)" : "rgba(255,255,255,0.22)"}`,
            background: solid ? "var(--ivory)" : "rgba(255,255,255,0.08)",
          }}
          aria-label="Primary"
        >
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-full px-4 py-2 text-[13px] font-medium"
                style={{
                  color: solid
                    ? active
                      ? "var(--teal)"
                      : "var(--charcoal)"
                    : active
                      ? "var(--charcoal)"
                      : "rgba(255,255,255,0.9)",
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
            className="btn btn-gold hidden min-h-11 px-4 text-[13px] sm:inline-flex sm:px-7"
          >
            Order Now
          </a>
          <button
            type="button"
            className="flex h-11 w-11 items-center justify-center lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            style={{ color: solid ? "var(--charcoal)" : "#fff" }}
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
        <div
          className="fixed inset-x-0 bottom-0 z-40 overflow-y-auto lg:hidden"
          style={{
            top: "calc(64px + env(safe-area-inset-top))",
            background: "var(--ivory)",
            paddingBottom: "calc(28px + env(safe-area-inset-bottom))",
          }}
        >
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
              className="btn btn-gold mt-8 w-full"
            >
              Order on WhatsApp
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
