"use client";

import Link from "next/link";
import { useState } from "react";
import { Heart, Search, ShoppingBag, User } from "lucide-react";
import { useStore } from "@/context/StoreContext";
import { SiteSearch } from "./SiteSearch";
import { useCartUi } from "./CartDrawer";

/**
 * The utility rail for StitchHeader — the chrome every page outside the
 * flagship homepage uses.
 *
 * The menu button that opens the drawer is `MenuButton` below — it needs no
 * state of its own (MobileMenu binds it by `data-open-menu`), so it stays a
 * server component and can sit on the opposite side of the wordmark.
 */
export function HeaderUtilities() {
  const { cartCount, wishlist, hydrated } = useStore();
  const { openCart } = useCartUi();
  const [searchOpen, setSearchOpen] = useState(false);

  const iconClass =
    "relative grid h-10 w-10 place-items-center text-on-surface-variant transition-colors duration-300 hover:text-primary";

  // Only after hydration — otherwise a returning visitor sees a 0-state flash.
  const wishCount = hydrated ? wishlist.length : 0;
  const bagCount = hydrated ? cartCount : 0;

  return (
    <>
      <div className="flex items-center gap-0.5 -mr-2 md:mr-0">
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
          aria-label={wishCount > 0 ? `Wishlist, ${wishCount} saved` : "Wishlist"}
        >
          <Heart className="h-5 w-5" strokeWidth={1.5} />
          {wishCount > 0 ? <CountBadge value={wishCount} /> : null}
        </Link>

        <Link href="/account" className={`${iconClass} hidden md:grid`} aria-label="Account">
          <User className="h-5 w-5" strokeWidth={1.5} />
        </Link>

        {/* Opens the bag drawer, matching SiteHeader and BoutiqueHeader. */}
        <button
          type="button"
          onClick={openCart}
          className={iconClass}
          aria-label={bagCount > 0 ? `Bag, ${bagCount} items` : "Bag"}
        >
          <ShoppingBag className="h-5 w-5" strokeWidth={1.5} />
          {bagCount > 0 ? <CountBadge value={bagCount} /> : null}
        </button>
      </div>

      <SiteSearch open={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}

function CountBadge({ value }: { value: number }) {
  return (
    <span
      aria-hidden="true"
      className="absolute right-0.5 top-0.5 grid h-4 min-w-4 place-items-center rounded-full bg-primary px-1 font-label-caps text-[9px] leading-none text-on-primary"
    >
      {value > 9 ? "9+" : value}
    </span>
  );
}
