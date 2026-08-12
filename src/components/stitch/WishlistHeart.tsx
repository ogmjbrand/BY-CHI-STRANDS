"use client";

import { useStore } from "@/context/StoreContext";
import { Icon } from "@/components/ui/icon";

/** Standalone wishlist toggle for contexts that just need the icon, not the full configurator. */
export function WishlistHeart({ slug, className = "" }: { slug: string; className?: string }) {
  const { wishlist, toggleWishlist, hydrated } = useStore();
  const saved = hydrated && wishlist.includes(slug);

  return (
    <button
      onClick={() => toggleWishlist(slug)}
      aria-label={saved ? "Remove from wishlist" : "Save to wishlist"}
      className={`p-2 transition-colors ${saved ? "text-primary" : "hover:text-primary"} ${className}`}
    >
      <Icon data-wishlist-trigger name="favorite" filled={saved} />
    </button>
  );
}
