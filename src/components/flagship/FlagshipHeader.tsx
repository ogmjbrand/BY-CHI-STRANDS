"use client";

import Link from "next/link";
import { useState } from "react";
import { useStore } from "@/context/StoreContext";

const LINKS = [
  { label: "Shop", href: "/shop" },
  { label: "Collections", href: "/collections" },
  { label: "Craft", href: "/about" },
  { label: "Academy", href: "/academy" },
];

/**
 * Minimal transparent-over-hero header — no boxed "Book Appointment" button
 * dominating the mast, just refined text links. Interactions.tsx already
 * adds a shadow to the first `header, nav` element past 100px of scroll, so
 * this needs no scroll listener of its own; a `bg-surface/0` -> effectively
 * transparent state is handled purely by the hero sitting behind it.
 */
export function FlagshipHeader() {
  const { cartCount } = useStore();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50 mix-blend-difference">
      <div className="max-w-[1800px] mx-auto px-6 md:px-16 h-20 md:h-24 flex items-center justify-between text-white">
        <button
          className="md:hidden font-label-caps text-[11px] tracking-[0.2em] uppercase"
          onClick={() => setOpen((v) => !v)}
        >
          Menu
        </button>

        <nav className="hidden md:flex items-center gap-10">
          {LINKS.slice(0, 2).map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="font-label-caps text-[11px] tracking-[0.2em] uppercase hover:opacity-60 transition-opacity"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <Link href="/" className="font-display-md text-xl md:text-2xl tracking-[0.15em] uppercase">
          ByChi Strands
        </Link>

        <nav className="hidden md:flex items-center gap-10">
          {LINKS.slice(2).map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="font-label-caps text-[11px] tracking-[0.2em] uppercase hover:opacity-60 transition-opacity"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/cart"
            className="font-label-caps text-[11px] tracking-[0.2em] uppercase hover:opacity-60 transition-opacity"
          >
            Bag{cartCount > 0 ? ` (${cartCount})` : ""}
          </Link>
        </nav>

        <Link href="/cart" className="md:hidden font-label-caps text-[11px] tracking-[0.2em] uppercase">
          Bag{cartCount > 0 ? ` (${cartCount})` : ""}
        </Link>
      </div>

      {open ? (
        <div className="md:hidden bg-on-surface text-white px-6 py-10 space-y-6">
          {LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block font-display-md text-2xl"
            >
              {l.label}
            </Link>
          ))}
        </div>
      ) : null}
    </header>
  );
}
