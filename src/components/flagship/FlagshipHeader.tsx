"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useStore } from "@/context/StoreContext";

const LINKS = [
  { label: "Shop", href: "/shop" },
  { label: "Collections", href: "/collections" },
  { label: "Craft", href: "/about" },
  { label: "Academy", href: "/academy" },
];

/**
 * Transparent over the hero, then resolving to solid noir on scroll — the
 * standard luxury-retail mast behaviour the site was missing.
 *
 * `mix-blend-difference` only reads correctly against imagery, so it is
 * dropped the moment the bar goes solid; keeping it would invert the text
 * against the noir panel. Links use an underline that draws from the left
 * rather than an opacity fade, which is the more considered hover.
 */
export function FlagshipHeader() {
  const { cartCount } = useStore();
  const [open, setOpen] = useState(false);
  const [solid, setSolid] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock the page behind the open mobile sheet.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const linkClass =
    "relative font-label-caps text-[11px] tracking-[0.2em] uppercase after:absolute after:left-0 after:-bottom-1.5 after:h-px after:w-0 after:bg-current after:transition-[width] after:duration-500 after:ease-[cubic-bezier(0.16,1,0.3,1)] hover:after:w-full";

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-[background-color,backdrop-filter,border-color] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        solid
          ? "bg-noir/90 backdrop-blur-xl border-b border-white/10"
          : "bg-transparent border-b border-transparent mix-blend-difference"
      }`}
    >
      <div
        className={`max-w-[1800px] mx-auto px-6 md:px-16 flex items-center justify-between text-white transition-[height] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          solid ? "h-16 md:h-20" : "h-20 md:h-24"
        }`}
      >
        <button
          className="md:hidden font-label-caps text-[11px] tracking-[0.2em] uppercase"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? "Close" : "Menu"}
        </button>

        <nav className="hidden md:flex items-center gap-10">
          {LINKS.slice(0, 2).map((l) => (
            <Link key={l.href} href={l.href} className={linkClass}>
              {l.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/"
          className={`font-display-md tracking-[0.15em] uppercase transition-[font-size] duration-700 ${
            solid ? "text-lg md:text-xl" : "text-xl md:text-2xl"
          }`}
        >
          ByChi Strands
        </Link>

        <nav className="hidden md:flex items-center gap-10">
          {LINKS.slice(2).map((l) => (
            <Link key={l.href} href={l.href} className={linkClass}>
              {l.label}
            </Link>
          ))}
          <Link href="/cart" className={linkClass}>
            Bag{cartCount > 0 ? ` (${cartCount})` : ""}
          </Link>
        </nav>

        <Link href="/cart" className="md:hidden font-label-caps text-[11px] tracking-[0.2em] uppercase">
          Bag{cartCount > 0 ? ` (${cartCount})` : ""}
        </Link>
      </div>

      {open ? (
        <div className="md:hidden bg-noir text-white px-6 py-12 space-y-7 min-h-[calc(100vh-4rem)]">
          {LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block font-display-md text-3xl"
            >
              {l.label}
            </Link>
          ))}
          <div className="pt-8 border-t border-white/10 space-y-5">
            {[
              { label: "Track Order", href: "/track" },
              { label: "Journal", href: "/journal" },
              { label: "Contact", href: "/contact" },
            ].map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="block font-label-caps text-[11px] tracking-[0.2em] uppercase text-white/70"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
}
