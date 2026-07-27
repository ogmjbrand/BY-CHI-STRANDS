"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { getProduct, priceFor, type Product } from "@/lib/products";

export interface CartLine {
  slug: string;
  length: number;
  density?: string;
  lace?: string;
  qty: number;
}

interface StoreState {
  cart: CartLine[];
  wishlist: string[];
  recentlyViewed: string[];
  cartCount: number;
  cartTotal: number;
  addToCart: (line: Omit<CartLine, "qty">, qty?: number) => void;
  updateQty: (index: number, qty: number) => void;
  removeLine: (index: number) => void;
  clearCart: () => void;
  toggleWishlist: (slug: string) => void;
  inWishlist: (slug: string) => boolean;
  trackView: (slug: string) => void;
  hydrated: boolean;
}

const StoreContext = createContext<StoreState | null>(null);

const STORAGE_KEY = "bychistrands-store-v1";

function lineKey(l: Omit<CartLine, "qty">) {
  return `${l.slug}|${l.length}|${l.density ?? ""}|${l.lace ?? ""}`;
}

export function lineProduct(line: CartLine): Product | undefined {
  return getProduct(line.slug);
}

export function linePrice(line: CartLine): number {
  const p = getProduct(line.slug);
  return p ? priceFor(p, line.length) : 0;
}

export function StoreProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartLine[]>([]);
  const [wishlist, setWishlist] = useState<string[]>([]);
  const [recentlyViewed, setRecentlyViewed] = useState<string[]>([]);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const data = JSON.parse(raw);
        if (Array.isArray(data.cart)) setCart(data.cart);
        if (Array.isArray(data.wishlist)) setWishlist(data.wishlist);
        if (Array.isArray(data.recentlyViewed)) setRecentlyViewed(data.recentlyViewed);
      }
    } catch {
      /* corrupted storage — start fresh */
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    try {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({ cart, wishlist, recentlyViewed })
      );
    } catch {
      /* storage unavailable (private mode) — cart is session-only */
    }
  }, [cart, wishlist, recentlyViewed, hydrated]);

  const addToCart = useCallback((line: Omit<CartLine, "qty">, qty = 1) => {
    setCart((prev) => {
      const key = lineKey(line);
      const existing = prev.findIndex((l) => lineKey(l) === key);
      if (existing >= 0) {
        return prev.map((l, i) => (i === existing ? { ...l, qty: l.qty + qty } : l));
      }
      return [...prev, { ...line, qty }];
    });
  }, []);

  const updateQty = useCallback((index: number, qty: number) => {
    setCart((prev) =>
      qty <= 0
        ? prev.filter((_, i) => i !== index)
        : prev.map((l, i) => (i === index ? { ...l, qty } : l))
    );
  }, []);

  const removeLine = useCallback((index: number) => {
    setCart((prev) => prev.filter((_, i) => i !== index));
  }, []);

  const clearCart = useCallback(() => setCart([]), []);

  const toggleWishlist = useCallback((slug: string) => {
    setWishlist((prev) =>
      prev.includes(slug) ? prev.filter((s) => s !== slug) : [...prev, slug]
    );
  }, []);

  const inWishlist = useCallback((slug: string) => wishlist.includes(slug), [wishlist]);

  const trackView = useCallback((slug: string) => {
    setRecentlyViewed((prev) => [slug, ...prev.filter((s) => s !== slug)].slice(0, 8));
  }, []);

  const cartCount = useMemo(() => cart.reduce((n, l) => n + l.qty, 0), [cart]);
  const cartTotal = useMemo(
    () => cart.reduce((sum, l) => sum + linePrice(l) * l.qty, 0),
    [cart]
  );

  const value = useMemo(
    () => ({
      cart,
      wishlist,
      recentlyViewed,
      cartCount,
      cartTotal,
      addToCart,
      updateQty,
      removeLine,
      clearCart,
      toggleWishlist,
      inWishlist,
      trackView,
      hydrated,
    }),
    [
      cart,
      wishlist,
      recentlyViewed,
      cartCount,
      cartTotal,
      addToCart,
      updateQty,
      removeLine,
      clearCart,
      toggleWishlist,
      inWishlist,
      trackView,
      hydrated,
    ]
  );

  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>;
}

export function useStore() {
  const ctx = useContext(StoreContext);
  if (!ctx) throw new Error("useStore must be used within StoreProvider");
  return ctx;
}
