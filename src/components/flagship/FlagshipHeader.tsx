"use client";

import Link from "next/link";
import { ArrowRight, Menu } from "lucide-react";
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
    <header className="fixed inset-x-0 top-0 z-50 mix-blend-difference">
      <div className="mx-auto flex h-20 max-w-[1800px] items-center justify-between px-6 text-white md:h-24 md:px-16">
        <button
          className="rounded-full border border-white/15 p-2.5 transition-colors hover:border-white/35 md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <Menu className="h-4 w-4" />
        </button>

        <nav className="hidden items-center gap-10 md:flex">
          {LINKS.slice(0, 2).map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="font-label-caps text-[11px] uppercase tracking-[0.2em] transition-opacity hover:opacity-60"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <Link href="/" className="font-display-md text-xl uppercase tracking-[0.15em] md:text-2xl">
          ByChi Strands
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {LINKS.slice(2).map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="font-label-caps text-[11px] uppercase tracking-[0.2em] transition-opacity hover:opacity-60"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/book"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-2 font-label-caps text-[11px] uppercase tracking-[0.2em] transition-all hover:bg-white hover:text-[#050505]"
          >
            Book
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
          <Link
            href="/cart"
            className="font-label-caps text-[11px] uppercase tracking-[0.2em] transition-opacity hover:opacity-60"
          >
            Bag{cartCount > 0 ? ` (${cartCount})` : ""}
          </Link>
        </nav>

        <Link href="/cart" className="font-label-caps text-[11px] uppercase tracking-[0.2em] md:hidden">
          Bag{cartCount > 0 ? ` (${cartCount})` : ""}
        </Link>
      </div>

      {open ? (
        <div className="space-y-6 bg-on-surface px-6 py-10 text-white md:hidden">
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
          <Link href="/book" onClick={() => setOpen(false)} className="inline-flex items-center gap-2 font-label-caps text-[11px] uppercase tracking-[0.2em]">
            Book an appointment
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      ) : null}
    </header>
  );
}
