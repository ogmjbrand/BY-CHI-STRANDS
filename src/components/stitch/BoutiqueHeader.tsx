"use client";

import Link from "next/link";
import { useState } from "react";
import { useStore } from "@/context/StoreContext";
import { useCartUi } from "./CartDrawer";
import { SiteSearch } from "./SiteSearch";
import { Wordmark } from "@/components/brand/Wordmark";
import { Icon } from "@/components/ui/icon";
import { HouseHeader } from "@/components/flagship/HouseChrome";

/**
 * The Boutique (collections listing) screen's own nav voice — "Atelier",
 * "The Maison" — kept distinct from SiteHeader's generic labels. Only the
 * icon row was dead markup (search/person/bag with no handlers); this gives
 * it the same real destinations SiteHeader uses elsewhere.
 */
/** Superseded by the one house chrome; the export name is kept for callers. */
export function BoutiqueHeader() {
  return <HouseHeader />;
}

