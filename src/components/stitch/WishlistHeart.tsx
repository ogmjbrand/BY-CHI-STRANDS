"use client";

import { useStore } from "@/context/StoreContext";

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
      <span
        className="material-symbols-outlined"
        style={{ fontVariationSettings: saved ? "'FILL' 1" : "'FILL' 0" }}
      >
        favorite
      </span>
    </button>
  );
}
