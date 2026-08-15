"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Search, ShoppingBag, User, LayoutGrid } from "lucide-react";
import { useState } from "react";
import { useStore } from "@/context/StoreContext";
import { useCartUi } from "@/components/stitch/CartDrawer";
import { SiteSearch } from "@/components/stitch/SiteSearch";

/**
 * The mobile tab bar.
 *
 * On a phone every commercial action lived behind the hamburger: shop,
 * search and the bag were each two taps away, on every page. This puts them
 * one tap away and always in reach, which is the single biggest difference
 * between a site that photographs well and a site people buy from.
 *
 * Restrained deliberately — five flat marks on a translucent ground, no
 * pill, no shadow, no colour except on the route you are actually on. A
 * heavy tab bar would sit at the bottom of every luxury composition on the
 * site and cheapen all of them.
 *
 * Hidden from `md` up, where the header carries the full navigation. It
 * respects the safe-area inset so it clears the home indicator rather than
 * sitting under it.
 */

const TABS = [
  { label: "Home", href: "/", icon: Home },
  { label: "Shop", href: "/shop", icon: LayoutGrid },
] as const;

export function MobileTabBar() {
  const pathname = usePathname();
  const { cartCount, hydrated } = useStore();
  const { openCart } = useCartUi();
  const [searchOpen, setSearchOpen] = useState(false);

  const isOn = (href: string) =>
    href === "/" ? pathname === "/" : pathname?.startsWith(href);

  const cls = (on: boolean) =>
    `flex flex-1 flex-col items-center justify-center gap-1.5 py-2 text-[8px] uppercase tracking-[.2em] transition-colors ${
      on ? "text-[#c8a45d]" : "text-white/55"
    }`;

  return (
    <div className="md:hidden">
      <nav
        aria-label="Quick navigation"
        className="fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-[#0b0907]/95 backdrop-blur-xl"
        style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
      >
        <ul className="mx-auto flex max-w-lg list-none items-stretch px-2">
          {TABS.map((t) => {
            const Icon = t.icon;
            const on = isOn(t.href);
            return (
              <li key={t.href} className="flex flex-1">
                <Link href={t.href} className={cls(!!on)} aria-current={on ? "page" : undefined}>
                  <Icon size={18} strokeWidth={1.6} />
                  {t.label}
                </Link>
              </li>
            );
          })}

          <li className="flex flex-1">
            <button type="button" onClick={() => setSearchOpen(true)} className={cls(false)}>
              <Search size={18} strokeWidth={1.6} />
              Search
            </button>
          </li>

          <li className="flex flex-1">
            <button type="button" onClick={openCart} className={`${cls(false)} relative`}>
              <span className="relative">
                <ShoppingBag size={18} strokeWidth={1.6} />
                {hydrated && cartCount > 0 ? (
                  <span className="absolute -right-2.5 -top-1.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-[#c8a45d] px-1 text-[9px] font-semibold text-[#0b0907]">
                    {cartCount}
                  </span>
                ) : null}
              </span>
              Bag
            </button>
          </li>

          <li className="flex flex-1">
            <Link href="/account" className={cls(!!isOn("/account"))}>
              <User size={18} strokeWidth={1.6} />
              Account
            </Link>
          </li>
        </ul>
      </nav>

      {/* The bar is fixed, so without this the last line of every page sits
          under it. */}
      <div aria-hidden="true" className="h-[62px]" style={{ paddingBottom: "env(safe-area-inset-bottom)" }} />

      <SiteSearch open={searchOpen} onClose={() => setSearchOpen(false)} />
    </div>
  );
}
