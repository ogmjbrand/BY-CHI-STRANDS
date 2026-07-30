"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useStore } from "@/context/StoreContext";
import { useCartUi } from "./CartDrawer";

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

function CountBadge({ count }: { count: number }) {
  if (count <= 0) return null;
  return (
    <span className="absolute -top-1.5 -right-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-primary-container text-[10px] text-on-primary-container">
      {count}
    </span>
  );
}

export function SiteHeader() {
  const pathname = usePathname();
  const { wishlist, cartCount, hydrated } = useStore();
  const { openCart } = useCartUi();

  return (
    <header className="sticky top-0 z-50 bg-background/90 backdrop-blur-xl border-b border-outline-variant/30">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-4 flex items-center justify-between gap-6">
        <Link href="/" className="flex flex-col leading-none shrink-0">
          <span className="font-display-md text-lg md:text-2xl tracking-[0.08em] text-on-surface">
            BY CHI STRANDS
          </span>
          <span className="font-label-caps text-[9px] uppercase tracking-[0.3em] text-on-surface-variant mt-1">
            Luxury Vietnamese Hair
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-7">
          {NAV.map((n) => {
            const active = n.href === "/" ? pathname === "/" : pathname?.startsWith(n.href);
            return (
              <Link
                key={n.href}
                href={n.href}
                className={
                  active
                    ? "font-label-caps text-[11px] uppercase tracking-[0.18em] text-primary-container border-b border-primary-container pb-1"
                    : "font-label-caps text-[11px] uppercase tracking-[0.18em] text-on-surface-variant hover:text-primary-container transition-colors"
                }
              >
                {n.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-4 md:gap-5 shrink-0">
          <Link href="/shop" aria-label="Search the catalogue" className="text-on-surface-variant hover:text-on-surface transition-colors">
            <span className="material-symbols-outlined text-[22px]">search</span>
          </Link>
          <Link href="/account" aria-label="Your account" className="text-on-surface-variant hover:text-on-surface transition-colors">
            <span className="material-symbols-outlined text-[22px]">account_circle</span>
          </Link>
          <Link href="/wishlist" aria-label="Your wishlist" className="relative text-on-surface-variant hover:text-on-surface transition-colors">
            <span className="material-symbols-outlined text-[22px]">favorite</span>
            <CountBadge count={hydrated ? wishlist.length : 0} />
          </Link>
          <button
            onClick={openCart}
            aria-label="Your bag"
            className="relative text-on-surface-variant hover:text-on-surface transition-colors"
          >
            <span className="material-symbols-outlined text-[22px]">shopping_bag</span>
            <CountBadge count={hydrated ? cartCount : 0} />
          </button>
        </div>
      </div>
    </header>
  );
}
