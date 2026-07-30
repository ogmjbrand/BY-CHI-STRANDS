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
        <Link href="/" className="flex items-center gap-2 leading-none shrink-0">
          <span
            className={`font-display-md text-lg md:text-2xl tracking-[0.08em] ${dark ? "text-white" : "text-on-surface"}`}
          >
            ByChi
          </span>
          <span className={`font-script text-2xl md:text-3xl -mt-1 ${dark ? "text-gold-light" : "text-primary-container"}`}>
            Strands
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-7">
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
          <Link href="/shop" aria-label="Search the catalogue" className={`transition-colors ${iconColor}`}>
            <span className="material-symbols-outlined text-[22px]">search</span>
          </Link>
          <Link href="/account" aria-label="Your account" className={`transition-colors ${iconColor}`}>
            <span className="material-symbols-outlined text-[22px]">account_circle</span>
          </Link>
          <Link href="/wishlist" aria-label="Your wishlist" className={`relative transition-colors ${iconColor}`}>
            <span className="material-symbols-outlined text-[22px]">favorite</span>
            <CountBadge count={hydrated ? wishlist.length : 0} dark={dark} />
          </Link>
          <button
            onClick={openCart}
            aria-label="Your bag"
            className={`relative transition-colors ${iconColor}`}
          >
            <span className="material-symbols-outlined text-[22px]">shopping_bag</span>
            <CountBadge count={hydrated ? cartCount : 0} dark={dark} />
          </button>
          <button aria-label="Open menu" className={`md:hidden transition-colors ${iconColor}`}>
            <span className="material-symbols-outlined text-[22px]">menu</span>
          </button>
        </div>
      </div>
    </header>
  );
}
