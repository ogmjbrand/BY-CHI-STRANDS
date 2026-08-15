"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, Search, ShoppingBag, Heart, User } from "lucide-react";
import { useStore } from "@/context/StoreContext";
import { useCartUi } from "@/components/stitch/CartDrawer";
import { SiteSearch } from "@/components/stitch/SiteSearch";
import { InlineNewsletterField } from "@/components/stitch/InlineNewsletterField";
import { site } from "@/lib/site";

/**
 * One header and one footer, for every page.
 *
 * Before this the site ran four separate header systems — SiteHeader,
 * StitchHeader, BoutiqueHeader and FlagshipHeader — plus hand-rolled inline
 * <nav> blocks on services, book and gallery, and twelve different inline
 * footers. /shop/[slug] rendered two headers at once. Every route had a
 * different top bar, in a different typeface, at a different height, and
 * that is most of why the site read as several sites stitched together
 * rather than one house.
 *
 * The look is the flagship language the homepage and Academy use — noir
 * ground, serif wordmark, 8px gold tracking, literal hex rather than the
 * theme tokens, so the chrome does not change character when a page switches
 * theme. The behaviour is SiteHeader's, which was the only one that actually
 * worked: real catalogue search, live cart and wishlist counts, and the
 * mobile drawer.
 */

const NAV = [
  { label: "Shop", href: "/shop" },
  { label: "Collections", href: "/collections" },
  { label: "Services", href: "/services" },
  { label: "Academy", href: "/academy" },
  { label: "About", href: "/about" },
  { label: "Journal", href: "/journal" },
  { label: "Contact", href: "/contact" },
];

function Count({ n }: { n: number }) {
  if (n <= 0) return null;
  return (
    <span className="absolute -right-2 -top-1.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-[#c8a45d] px-1 text-[9px] font-semibold text-[#0b0907]">
      {n}
    </span>
  );
}

export function HouseHeader() {
  const pathname = usePathname();
  const { wishlist, cartCount, hydrated } = useStore();
  const { openCart } = useCartUi();
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0b0907]/90 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-[1760px] items-center gap-4 px-5 md:h-20 md:px-10">
        <Link
          href="/"
          className="shrink-0 font-serif text-[22px] tracking-[-.045em] text-[#f5f0e8] md:text-[30px]"
        >
          ByChi Strands
        </Link>

        <nav className="mx-auto hidden items-center gap-7 xl:flex">
          {NAV.map((n) => {
            const active = pathname === n.href || pathname?.startsWith(`${n.href}/`);
            return (
              <Link
                key={n.href}
                href={n.href}
                className={
                  active
                    ? "border-b border-[#c8a45d] pb-1 text-[9px] uppercase tracking-[.32em] text-[#c8a45d]"
                    : "text-[9px] uppercase tracking-[.32em] text-white/60 transition-colors hover:text-[#c8a45d]"
                }
              >
                {n.label}
              </Link>
            );
          })}
        </nav>

        <div className="ml-auto flex shrink-0 items-center gap-5 text-white/75">
          <button
            type="button"
            onClick={() => setSearchOpen(true)}
            aria-label="Search the catalogue"
            className="transition-colors hover:text-[#c8a45d]"
          >
            <Search size={18} />
          </button>
          {/* Account and wishlist step out on the narrowest screens — five
              icons beside the wordmark did not fit at 390px. Both are one tap
              away in the drawer. */}
          <Link
            href="/account"
            aria-label="Your account"
            className="hidden transition-colors hover:text-[#c8a45d] md:inline"
          >
            <User size={18} />
          </Link>
          <Link
            href="/wishlist"
            aria-label="Your wishlist"
            className="relative hidden transition-colors hover:text-[#c8a45d] sm:inline"
          >
            <Heart size={18} />
            <Count n={hydrated ? wishlist.length : 0} />
          </Link>
          <button
            onClick={openCart}
            aria-label="Your bag"
            className="relative transition-colors hover:text-[#c8a45d]"
          >
            <ShoppingBag data-bag-trigger size={18} />
            <Count n={hydrated ? cartCount : 0} />
          </button>
          <button
            data-open-menu=""
            aria-label="Open menu"
            className="transition-colors hover:text-[#c8a45d] xl:hidden"
          >
            <Menu size={18} />
          </button>
        </div>
      </div>

      <SiteSearch open={searchOpen} onClose={() => setSearchOpen(false)} />
    </header>
  );
}

const FOOTER_COLUMNS: Array<{ heading: string; links: Array<{ label: string; href: string; external?: boolean }> }> = [
  {
    heading: "Shop",
    links: [
      { label: "All pieces", href: "/shop" },
      { label: "Collections", href: "/collections" },
      { label: "Gift a piece", href: "/contact" },
      { label: "Wishlist", href: "/wishlist" },
    ],
  },
  {
    heading: "ByChi Strands",
    links: [
      { label: "About", href: "/about" },
      { label: "Services", href: "/services" },
      { label: "Academy", href: "/academy" },
      { label: "Journal", href: "/journal" },
    ],
  },
  {
    heading: "Care",
    links: [
      { label: "Track your order", href: "/track" },
      { label: "Shipping & returns", href: "/shipping" },
      { label: "Aftercare", href: "/aftercare" },
      { label: "FAQs", href: "/faqs" },
    ],
  },
];

export function HouseFooter() {
  return (
    <footer className="border-t border-white/10 bg-[#0b0907] px-5 py-14 text-white/55 md:px-10 md:py-20">
      <div className="mx-auto grid max-w-[1760px] gap-12 md:grid-cols-12">
        <div className="md:col-span-5">
          <p className="font-serif text-[clamp(2.25rem,6vw,3.5rem)] leading-none text-[#f5f0e8]">
            ByChi Strands
          </p>
          <p className="mt-5 max-w-sm text-sm leading-7">
            ByChi Strands. Luxury raw hair, sourced, built and
            finished in Lagos.
          </p>
          <div className="mt-8 max-w-sm">
            <InlineNewsletterField />
          </div>
          <div className="mt-8 flex gap-6 text-[8px] uppercase tracking-[.3em]">
            <a
              href={site.socials.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-[#c8a45d]"
            >
              Instagram
            </a>
            <a
              href={site.socials.tiktok.url}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-[#c8a45d]"
            >
              TikTok
            </a>
            <a
              href={site.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-[#c8a45d]"
            >
              WhatsApp
            </a>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-10 md:col-span-7 md:grid-cols-3">
          {FOOTER_COLUMNS.map((col) => (
            <div key={col.heading}>
              <h2 className="mb-6 text-[8px] uppercase tracking-[.4em] text-[#c8a45d]">
                {col.heading}
              </h2>
              <ul className="space-y-4">
                {col.links.map((l) => (
                  <li key={l.href + l.label}>
                    <Link
                      href={l.href}
                      className="text-[13px] leading-6 transition-colors hover:text-[#f5f0e8]"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="mx-auto mt-14 flex max-w-[1760px] flex-col gap-4 border-t border-white/10 pt-8 text-[8px] uppercase tracking-[.3em] sm:flex-row sm:items-center sm:justify-between">
        <p className="text-white/35">
          © {new Date().getFullYear()} {site.name} · Lagos, Nigeria
        </p>
        <div className="flex flex-wrap gap-6">
          <Link href="/privacy" className="transition-colors hover:text-[#c8a45d]">
            Privacy
          </Link>
          <Link href="/terms" className="transition-colors hover:text-[#c8a45d]">
            Terms
          </Link>
          <Link href="/contact" className="transition-colors hover:text-[#c8a45d]">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}
