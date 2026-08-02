"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Heart, Menu, Search, ShoppingBag, User, X } from "lucide-react";
import { useStore } from "@/context/StoreContext";
import { SiteSearch } from "@/components/stitch/SiteSearch";

const LINKS = [
  { label: "Shop", href: "/shop" },
  { label: "Collections", href: "/collections" },
  { label: "Craft", href: "/about" },
  { label: "Academy", href: "/academy" },
];

const DRAWER_SECONDARY = [
  { label: "Hair Finder", href: "/hair-finder" },
  { label: "Services", href: "/services" },
  { label: "Gallery", href: "/gallery" },
  { label: "Journal", href: "/journal" },
  { label: "Track Order", href: "/track" },
  { label: "Contact", href: "/contact" },
];

/**
 * Transparent over the hero, then resolving to solid noir on scroll — the
 * standard luxury-retail mast behaviour the site was missing.
 *
 * The right-hand cluster is a real utility rail: search opens the catalogue
 * search panel, and wishlist and bag carry live counts from the store rather
 * than decorative badges. On mobile the same rail is present at icon size —
 * the phone gets the identical set of affordances as the desktop, which is
 * the point of the mobile pass.
 */
export function FlagshipHeader() {
  const { cartCount, wishlist, hydrated } = useStore();
  const [open, setOpen] = useState(false);
  const [solid, setSolid] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

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

  const iconClass =
    "relative grid h-10 w-10 place-items-center text-white/85 transition-colors duration-300 hover:text-gold";

  /*
   * Counts are only rendered after hydration. Rendering them from the
   * initial (empty) store would flash a 0-state badge on a returning
   * visitor's first paint, and rendering them during SSR would mismatch.
   */
  const wishCount = hydrated ? wishlist.length : 0;
  const bagCount = hydrated ? cartCount : 0;

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-[background-color,backdrop-filter,border-color] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          solid
            ? "bg-noir/90 backdrop-blur-xl border-b border-white/10"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        {/*
         * A top scrim keeps the mast legible over bright imagery. This replaces
         * mix-blend-difference, which inverts colour and would have turned the
         * gold script and the white logo seal into muddy negatives.
         */}
        {!solid ? (
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/55 to-transparent"
          />
        ) : null}

        {/*
         * Announcement bar, restored — it existed but was orphaned by the
         * flagship rebuild. Lives inside the fixed mast so the two can't
         * overlap, and collapses on scroll to keep the bar compact.
         */}
        <div
          className={`relative overflow-hidden border-b transition-[max-height,opacity,border-color] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            solid ? "max-h-0 opacity-0 border-transparent" : "max-h-12 opacity-100 border-white/10"
          }`}
        >
          <div className="max-w-[1800px] mx-auto px-6 md:px-16 py-2.5 flex items-center justify-center md:justify-between gap-6 text-white/80">
            <span className="font-label-caps text-[10px] uppercase tracking-[0.18em] whitespace-nowrap md:hidden">
              Ships Worldwide From Lagos, Nigeria
            </span>
            {[
              "Ships Worldwide From Lagos, Nigeria",
              "100% Authentic Vietnamese Hair",
              "Hand-Tied In Our Lagos Atelier",
            ].map((m) => (
              <span
                key={m}
                className="hidden md:inline font-label-caps text-[10px] uppercase tracking-[0.18em] whitespace-nowrap"
              >
                {m}
              </span>
            ))}
          </div>
        </div>

        <div
          className={`relative max-w-[1800px] mx-auto px-4 md:px-16 flex items-center justify-between gap-2 text-white transition-[height] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            solid ? "h-16 md:h-20" : "h-20 md:h-24"
          }`}
        >
          {/* Left: menu on mobile, the first half of the nav on desktop. */}
          <div className="flex flex-1 items-center justify-start gap-10">
            <button
              className={`${iconClass} md:hidden -ml-2`}
              onClick={() => setOpen(true)}
              aria-expanded={open}
              aria-label="Open menu"
            >
              <Menu className="h-5 w-5" strokeWidth={1.5} />
            </button>

            <nav className="hidden md:flex items-center gap-10">
              {LINKS.slice(0, 2).map((l) => (
                <Link key={l.href} href={l.href} className={linkClass}>
                  {l.label}
                </Link>
              ))}
            </nav>
          </div>

          {/*
           * The house wordmark: logo seal + "ByChi" + the gold script
           * "Strands". The flagship rebuild had flattened this to plain
           * uppercase text, dropping the brand's own accent.
           */}
          <Link href="/" className="flex items-center gap-2 md:gap-2.5 leading-none shrink-0">
            <span
              className={`rounded-full bg-white overflow-hidden shrink-0 ring-1 ring-black/5 transition-[width,height] duration-700 ${
                solid ? "h-7 w-7 md:h-8 md:w-8" : "h-8 w-8 md:h-10 md:w-10"
              }`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/brand/logo-mark.jpg"
                alt=""
                className="h-full w-full object-cover scale-125"
              />
            </span>
            <span
              className={`font-display-md tracking-[0.08em] transition-[font-size] duration-700 ${
                solid ? "text-base md:text-xl" : "text-lg md:text-2xl"
              }`}
            >
              ByChi
            </span>
            <span
              className={`font-script text-gold-light -mt-1 transition-[font-size] duration-700 ${
                solid ? "text-xl md:text-3xl" : "text-2xl md:text-4xl"
              }`}
            >
              Strands
            </span>
          </Link>

          {/* Right: the rest of the nav on desktop, then the utility rail. */}
          <div className="flex flex-1 items-center justify-end gap-10">
            <nav className="hidden md:flex items-center gap-10">
              {LINKS.slice(2).map((l) => (
                <Link key={l.href} href={l.href} className={linkClass}>
                  {l.label}
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-0.5 md:gap-1 md:-mr-2 -mr-2">
              <button
                type="button"
                onClick={() => setSearchOpen(true)}
                className={iconClass}
                aria-label="Search"
              >
                <Search className="h-5 w-5" strokeWidth={1.5} />
              </button>

              <Link
                href="/wishlist"
                className={`${iconClass} hidden sm:grid`}
                aria-label={
                  wishCount > 0 ? `Wishlist, ${wishCount} saved` : "Wishlist"
                }
              >
                <Heart className="h-5 w-5" strokeWidth={1.5} />
                {wishCount > 0 ? <CountBadge value={wishCount} /> : null}
              </Link>

              <Link href="/account" className={`${iconClass} hidden md:grid`} aria-label="Account">
                <User className="h-5 w-5" strokeWidth={1.5} />
              </Link>

              <Link
                href="/cart"
                className={iconClass}
                aria-label={bagCount > 0 ? `Bag, ${bagCount} items` : "Bag"}
              >
                <ShoppingBag className="h-5 w-5" strokeWidth={1.5} />
                {bagCount > 0 ? <CountBadge value={bagCount} /> : null}
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/*
       * Mobile drawer. Rendered outside the mast so it is not clipped by the
       * header's own stacking context, and so it can own the full viewport
       * height on phones with a floating URL bar (svh, not vh).
       */}
      {open ? (
        <div className="fixed inset-0 z-[110] flex flex-col bg-noir text-white md:hidden">
          <div className="flex h-20 shrink-0 items-center justify-between px-4">
            <button
              className={`${iconClass} -ml-2`}
              onClick={() => setOpen(false)}
              aria-label="Close menu"
            >
              <X className="h-5 w-5" strokeWidth={1.5} />
            </button>
            <span className="flex items-center gap-2 leading-none">
              <span className="font-display-md text-lg tracking-[0.08em]">ByChi</span>
              <span className="-mt-1 font-script text-2xl text-gold-light">Strands</span>
            </span>
            <span className="w-10" aria-hidden="true" />
          </div>

          <nav className="flex-1 overflow-y-auto px-6 pb-12">
            <div className="space-y-1 border-t border-white/10 pt-8">
              {LINKS.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 font-display-md text-[2rem] leading-tight tracking-[-0.01em]"
                >
                  {l.label}
                </Link>
              ))}
            </div>

            <div className="mt-10 grid grid-cols-2 gap-x-6 gap-y-5 border-t border-white/10 pt-8">
              {DRAWER_SECONDARY.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="font-label-caps text-[11px] uppercase tracking-[0.2em] text-white/70"
                >
                  {l.label}
                </Link>
              ))}
            </div>

            <div className="mt-10 flex items-center gap-6 border-t border-white/10 pt-8">
              <Link
                href="/wishlist"
                onClick={() => setOpen(false)}
                className="flex items-center gap-2.5 font-label-caps text-[11px] uppercase tracking-[0.2em] text-white/70"
              >
                <Heart className="h-4 w-4" strokeWidth={1.5} />
                Wishlist{wishCount > 0 ? ` (${wishCount})` : ""}
              </Link>
              <Link
                href="/account"
                onClick={() => setOpen(false)}
                className="flex items-center gap-2.5 font-label-caps text-[11px] uppercase tracking-[0.2em] text-white/70"
              >
                <User className="h-4 w-4" strokeWidth={1.5} />
                Account
              </Link>
            </div>

            <Link
              href="/book"
              onClick={() => setOpen(false)}
              className="mt-10 block bg-gold py-4 text-center font-label-caps text-[11px] uppercase tracking-[0.25em] text-noir"
            >
              Book a Consultation
            </Link>
          </nav>
        </div>
      ) : null}

      <SiteSearch open={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}

/** Live count marker on the wishlist and bag icons. */
function CountBadge({ value }: { value: number }) {
  return (
    <span
      aria-hidden="true"
      className="absolute right-0.5 top-0.5 grid h-4 min-w-4 place-items-center rounded-full bg-gold px-1 font-label-caps text-[9px] leading-none text-noir"
    >
      {value > 9 ? "9+" : value}
    </span>
  );
}
