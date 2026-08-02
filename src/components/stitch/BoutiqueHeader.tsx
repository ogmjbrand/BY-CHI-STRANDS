"use client";

import Link from "next/link";
import { useState } from "react";
import { useStore } from "@/context/StoreContext";
import { useCartUi } from "./CartDrawer";
import { SiteSearch } from "./SiteSearch";

/**
 * The Boutique (collections listing) screen's own nav voice — "Atelier",
 * "The Maison" — kept distinct from SiteHeader's generic labels. Only the
 * icon row was dead markup (search/person/bag with no handlers); this gives
 * it the same real destinations SiteHeader uses elsewhere.
 */
export function BoutiqueHeader() {
  const { cartCount, hydrated } = useStore();
  const { openCart } = useCartUi();
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-xl border-b border-outline-variant/30">
      <div className="flex justify-between items-center w-full px-margin-mobile md:px-margin-desktop py-6 max-w-container-max mx-auto">
        <div className="hidden md:flex gap-8">
          <Link className="font-label-caps text-label-caps uppercase tracking-widest text-on-surface-variant hover:text-primary transition-colors duration-300" href="/services">
            Atelier
          </Link>
          <Link className="font-label-caps text-label-caps uppercase tracking-widest text-primary border-b border-primary pb-1" href="/collections">
            The Boutique
          </Link>
          <Link className="font-label-caps text-label-caps uppercase tracking-widest text-on-surface-variant hover:text-primary transition-colors duration-300" href="/academy">
            Academy
          </Link>
          <Link className="font-label-caps text-label-caps uppercase tracking-widest text-on-surface-variant hover:text-primary transition-colors duration-300" href="/aftercare">
            Aftercare
          </Link>
          <Link className="font-label-caps text-label-caps uppercase tracking-widest text-on-surface-variant hover:text-primary transition-colors duration-300" href="/about">
            The Maison
          </Link>
        </div>
        <Link className="flex items-center gap-2.5" href="/">
          <span className="h-9 w-9 md:h-10 md:w-10 rounded-full bg-white overflow-hidden shrink-0 ring-1 ring-black/5">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/brand/logo-mark.jpg" alt="ByChi Strands" className="h-full w-full object-cover scale-125" />
          </span>
          <span className="font-display-md text-display-md-mobile md:text-display-md tracking-tight text-on-surface md:tracking-[-0.01em]">
            ByChi <span className="font-script">Strands</span>
          </span>
        </Link>
        <div className="flex items-center gap-6">
          {/* Was a link to /shop dressed as search; now it opens real search. */}
          <button
            type="button"
            onClick={() => setSearchOpen(true)}
            aria-label="Search the catalogue"
            className="material-symbols-outlined text-on-surface-variant hover:text-primary transition-colors"
          >
            search
          </button>
          <Link href="/account" aria-label="Your account" className="material-symbols-outlined text-on-surface-variant hover:text-primary transition-colors">
            person
          </Link>
          <button
            onClick={openCart}
            aria-label="Your bag"
            className="relative text-on-surface-variant hover:text-primary transition-colors"
          >
            <span className="material-symbols-outlined align-middle">shopping_bag</span>
            {hydrated && cartCount > 0 ? (
              <span className="absolute -top-1.5 -right-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] text-on-primary">
                {cartCount}
              </span>
            ) : null}
          </button>
          <button aria-label="Open menu" className="md:hidden material-symbols-outlined text-on-surface-variant hover:text-primary transition-colors">
            menu
          </button>
        </div>
      </div>

      <SiteSearch open={searchOpen} onClose={() => setSearchOpen(false)} />
    </nav>
  );
}
