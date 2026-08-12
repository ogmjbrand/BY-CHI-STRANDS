"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useStore } from "@/context/StoreContext";
import { useCartUi } from "./CartDrawer";
import { SiteSearch } from "./SiteSearch";
import { Wordmark } from "@/components/brand/Wordmark";
import { Icon } from "@/components/ui/icon";

const NAV = [
  { label: "Home", href: "/" },
  { label: "Shop", href: "/shop" },
  { label: "Collections", href: "/collections" },
  { label: "Services", href: "/services" },
  { label: "Academy", href: "/academy" },
  { label: "About", href: "/about" },
  { label: "Journal", href: "/journal" },
  { label: "Contact", href: "/contact" },
];

function CountBadge({ count, dark }: { count: number; dark?: boolean }) {
  if (count <= 0) return null;
  return (
    <span
      className={`absolute -top-1.5 -right-1.5 flex h-4 w-4 items-center justify-center rounded-full text-[10px] ${
        dark ? "bg-gold text-noir" : "bg-primary-container text-on-primary-container"
      }`}
    >
      {count}
    </span>
  );
}

/** `dark` sits the header on the noir hero (homepage); default suits every other, cream page. */
export function SiteHeader({ dark = false }: { dark?: boolean }) {
  const pathname = usePathname();
  const { wishlist, cartCount, hydrated } = useStore();
  const { openCart } = useCartUi();
  const [searchOpen, setSearchOpen] = useState(false);

  const iconColor = dark
    ? "text-white/80 hover:text-white"
    : "text-on-surface-variant hover:text-on-surface";

  return (
    <header
      className={`sticky top-0 z-50 backdrop-blur-xl border-b ${
        dark ? "bg-noir/95 border-white/10" : "bg-background/90 border-outline-variant/30"
      }`}
    >
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-4 flex items-center justify-between gap-6">
        <Link href="/" className="shrink-0">
          <Wordmark size="md" withSeal className={dark ? "text-white" : "text-on-surface"} />
        </Link>

        <nav className="hidden xl:flex items-center gap-6 2xl:gap-7">
          {NAV.map((n) => {
            const active = n.href === "/" ? pathname === "/" : pathname?.startsWith(n.href);
            const activeColor = dark ? "text-gold-light border-gold-light" : "text-primary-container border-primary-container";
            const idleColor = dark
              ? "text-white/70 hover:text-gold-light"
              : "text-on-surface-variant hover:text-primary-container";
            return (
              <Link
                key={n.href}
                href={n.href}
                className={
                  active
                    ? `font-label-caps text-[11px] uppercase tracking-[0.18em] border-b pb-1 ${activeColor}`
                    : `font-label-caps text-[11px] uppercase tracking-[0.18em] transition-colors ${idleColor}`
                }
              >
                {n.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-4 md:gap-5 shrink-0">
          {/* Was a link to /shop dressed as search; now it opens real search. */}
          <button
            type="button"
            onClick={() => setSearchOpen(true)}
            aria-label="Search the catalogue"
            className={`transition-colors ${iconColor}`}
          >
            <Icon name="search" className="text-[22px]" />
          </button>
          {/*
           * Account and wishlist are hidden on the narrowest screens: five
           * icons plus the wordmark did not fit at 390px. Both sit in the
           * mobile drawer, which is one tap away.
           */}
          <Link href="/account" aria-label="Your account" className={`hidden md:inline transition-colors ${iconColor}`}>
            <Icon name="account_circle" className="text-[22px]" />
          </Link>
          <Link href="/wishlist" aria-label="Your wishlist" className={`relative hidden sm:inline transition-colors ${iconColor}`}>
            {/* Navigation to the wishlist page, not a save-toggle — so no
                data-wishlist-trigger. (StoreBridge skipped it anyway: it can
                only bind a heart it can resolve a product slug for.) */}
            <Icon name="favorite" className="text-[22px]" />
            <CountBadge count={hydrated ? wishlist.length : 0} dark={dark} />
          </Link>
          <button
            onClick={openCart}
            aria-label="Your bag"
            className={`relative transition-colors ${iconColor}`}
          >
            <Icon data-bag-trigger name="shopping_bag" className="text-[22px]" />
            <CountBadge count={hydrated ? cartCount : 0} dark={dark} />
          </button>
          <button data-open-menu="" aria-label="Open menu" className={`xl:hidden transition-colors ${iconColor}`}>
            <Icon name="menu" className="text-[22px]" />
          </button>
        </div>
      </div>

      <SiteSearch open={searchOpen} onClose={() => setSearchOpen(false)} />
    </header>
  );
}
