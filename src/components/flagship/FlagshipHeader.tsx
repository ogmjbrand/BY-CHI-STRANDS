"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Heart, Menu, Search, ShoppingBag, User, X } from "lucide-react";
import { useStore } from "@/context/StoreContext";
import { SiteSearch } from "@/components/stitch/SiteSearch";
import { useCartUi } from "@/components/stitch/CartDrawer";
import { Wordmark } from "@/components/brand/Wordmark";
import { HouseHeader } from "@/components/flagship/HouseChrome";

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
/** Superseded by the one house chrome; the export name is kept for callers. */
export function FlagshipHeader() {
  return <HouseHeader />;
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
