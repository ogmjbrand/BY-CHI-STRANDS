"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  CATEGORIES,
  TEXTURES,
  TONES,
  products,
  priceFrom,
  type Product,
} from "@/lib/products";
import { collections } from "@/lib/collections";
import { services } from "@/lib/services";
import { articles } from "@/lib/journal";
import { posterFor } from "@/lib/media";
import { formatPrice } from "@/lib/utils";
import { site } from "@/lib/site";

/**
 * Full-screen catalogue search.
 *
 * Everything searched here is the site's own data — the product list, the
 * collections, the service menu and the journal — so a result always resolves
 * to a page that exists. There is no remote index and no analytics-driven
 * "popular searches": the suggestion chips below are the real texture and
 * collection names, which is the only honest version of that affordance.
 */

type Hit =
  | { kind: "product"; href: string; title: string; meta: string; image: string }
  | { kind: "collection" | "service" | "journal"; href: string; title: string; meta: string };

/** Everything a product can reasonably be found by, flattened once. */
function productHaystack(p: Product): string {
  return [
    p.name,
    p.short,
    CATEGORIES[p.category].label,
    TEXTURES[p.texture],
    TONES[p.tone].label,
    p.collection.replace(/-/g, " "),
    p.sdd ? "super double drawn sdd" : "",
    p.badges?.join(" ") ?? "",
  ]
    .join(" ")
    .toLowerCase();
}

const INDEX: { hit: Hit; haystack: string }[] = [
  ...products.map((p) => ({
    hit: {
      kind: "product" as const,
      href: `/shop/${p.slug}`,
      title: p.name,
      meta: (() => {
        const from = priceFrom(p);
        return from === null
          ? "Price on enquiry"
          : `From ${formatPrice(from, site.currency)}`;
      })(),
      image: posterFor(p.slug),
    },
    haystack: productHaystack(p),
  })),
  ...collections.map((c) => ({
    hit: {
      kind: "collection" as const,
      href: `/collections/${c.slug}`,
      title: c.name,
      meta: c.tagline,
    },
    haystack: `${c.name} ${c.tagline} ${c.description}`.toLowerCase(),
  })),
  ...services.map((s) => ({
    hit: {
      kind: "service" as const,
      href: `/services/${s.slug}`,
      title: s.name,
      meta: s.duration,
    },
    haystack: `${s.name} ${s.short} ${s.description}`.toLowerCase(),
  })),
  ...articles.map((a) => ({
    hit: {
      kind: "journal" as const,
      href: `/journal/${a.slug}`,
      title: a.title,
      meta: `${a.category} · ${a.readTime}`,
    },
    haystack: `${a.title} ${a.excerpt} ${a.category}`.toLowerCase(),
  })),
];

const GROUPS: { kind: Hit["kind"]; label: string }[] = [
  { kind: "product", label: "Pieces" },
  { kind: "collection", label: "Collections" },
  { kind: "service", label: "Atelier Services" },
  { kind: "journal", label: "Journal" },
];

/** Real texture names — the house's own vocabulary, not invented trend terms. */
const SUGGESTIONS = Object.values(TEXTURES).slice(0, 4);

export function SiteSearch({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [q, setQ] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  const results = useMemo(() => {
    const term = q.trim().toLowerCase();
    if (term.length < 2) return [];
    const words = term.split(/\s+/);
    return INDEX.filter((e) => words.every((w) => e.haystack.includes(w))).map((e) => e.hit);
  }, [q]);

  // Reset the field each time the panel opens, so it never reopens mid-query.
  useEffect(() => {
    if (!open) return;
    setQ("");
    const t = setTimeout(() => inputRef.current?.focus(), 80);
    return () => clearTimeout(t);
  }, [open]);

  // Lock the page, close on Escape, and keep Tab inside the panel while open.
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
        return;
      }
      if (e.key !== "Tab" || !panelRef.current) return;
      const focusable = panelRef.current.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), input, [tabindex]:not([tabindex="-1"])'
      );
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      document.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  const term = q.trim();
  const searching = term.length >= 2;

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          ref={panelRef}
          role="dialog"
          aria-modal="true"
          aria-label="Search ByChi Strands"
          initial={reduce ? { opacity: 0 } : { opacity: 0, clipPath: "inset(0 0 100% 0)" }}
          animate={reduce ? { opacity: 1 } : { opacity: 1, clipPath: "inset(0 0 0% 0)" }}
          exit={reduce ? { opacity: 0 } : { opacity: 0, clipPath: "inset(0 0 100% 0)" }}
          transition={{ duration: reduce ? 0.15 : 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[120] flex flex-col bg-noir text-white"
        >
          {/* Field */}
          <div className="border-b border-white/10 px-6 pb-6 pt-8 md:px-16 md:pb-8 md:pt-10">
            <div className="mx-auto flex w-full max-w-4xl items-end gap-4">
              <div className="flex-1">
                <label
                  htmlFor="site-search-field"
                  className="mb-4 block font-label-caps text-[10px] uppercase tracking-[0.3em] text-gold"
                >
                  Search the house
                </label>
                <input
                  id="site-search-field"
                  ref={inputRef}
                  value={q}
                  onChange={(e) => setQ(e.target.value)}
                  type="text"
                  autoComplete="off"
                  autoCorrect="off"
                  spellCheck={false}
                  placeholder="Bone straight, frontal, closure…"
                  /*
                   * The field is deliberately chrome-free, which takes two
                   * suppressions no utility can express reliably here: the
                   * @tailwindcss/forms plugin paints a blue ring as a
                   * box-shadow on :focus, and globals.css draws a gold
                   * :focus-visible outline for the whole site. Both are set
                   * from stylesheets, so an inline style is what actually
                   * wins. Focus stays unmistakable — the underline goes gold
                   * and doubles in weight, and the caret is visible.
                   */
                  style={{ outline: "none", boxShadow: "none" }}
                  className="w-full appearance-none rounded-none border-0 border-b border-white/20 bg-transparent pb-3 font-display-md text-2xl tracking-[-0.01em] text-white transition-colors placeholder:text-white/25 focus:border-b-2 focus:border-gold md:text-4xl"
                />
              </div>
              <button
                type="button"
                onClick={onClose}
                className="shrink-0 pb-4 font-label-caps text-[11px] uppercase tracking-[0.2em] text-white/60 transition-colors hover:text-gold"
              >
                Close
              </button>
            </div>
          </div>

          {/* Results */}
          <div className="flex-1 overflow-y-auto px-6 py-10 md:px-16 md:py-14">
            <div className="mx-auto w-full max-w-4xl">
              {!searching ? (
                <div>
                  <p className="mb-6 font-label-caps text-[10px] uppercase tracking-[0.3em] text-white/40">
                    Start with a texture
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {SUGGESTIONS.map((s) => (
                      <button
                        key={s}
                        type="button"
                        onClick={() => setQ(s)}
                        className="border border-white/20 px-5 py-2.5 font-label-caps text-[11px] uppercase tracking-[0.15em] text-white/75 transition-colors hover:border-gold hover:text-gold"
                      >
                        {s}
                      </button>
                    ))}
                  </div>

                  <p className="mb-6 mt-14 font-label-caps text-[10px] uppercase tracking-[0.3em] text-white/40">
                    Or let us choose for you
                  </p>
                  <Link
                    href="/hair-finder"
                    onClick={onClose}
                    className="inline-block border-b border-gold pb-1 font-label-caps text-[11px] uppercase tracking-[0.2em] text-gold-light"
                  >
                    Take the Hair Finder
                  </Link>
                </div>
              ) : results.length === 0 ? (
                <div>
                  <p className="font-display-md text-2xl text-white md:text-3xl">
                    Nothing matches &ldquo;{term}&rdquo;.
                  </p>
                  <p className="mt-4 max-w-md font-body-md leading-relaxed text-white/55">
                    Try a texture, a length, or a lace size — or message the concierge and
                    we&rsquo;ll tell you what we can source.
                  </p>
                  <div className="mt-8 flex flex-wrap gap-4">
                    <Link
                      href="/shop"
                      onClick={onClose}
                      className="bg-gold px-8 py-3.5 font-label-caps text-[11px] uppercase tracking-[0.2em] text-noir transition-colors hover:bg-gold-light"
                    >
                      Browse Everything
                    </Link>
                    <Link
                      href="/contact"
                      onClick={onClose}
                      className="border border-white/30 px-8 py-3.5 font-label-caps text-[11px] uppercase tracking-[0.2em] text-white transition-colors hover:border-gold hover:text-gold"
                    >
                      Ask the Concierge
                    </Link>
                  </div>
                </div>
              ) : (
                <div className="space-y-12">
                  <p className="font-label-caps text-[10px] uppercase tracking-[0.3em] text-white/40">
                    {results.length} {results.length === 1 ? "result" : "results"}
                  </p>

                  {GROUPS.map(({ kind, label }) => {
                    const group = results.filter((r) => r.kind === kind);
                    if (group.length === 0) return null;
                    return (
                      <section key={kind}>
                        <h2 className="mb-6 font-label-caps text-[10px] uppercase tracking-[0.3em] text-gold">
                          {label}
                        </h2>
                        <ul className="divide-y divide-white/10 border-t border-white/10">
                          {group.map((r) => (
                            <li key={r.href}>
                              <Link
                                href={r.href}
                                onClick={onClose}
                                className="group flex items-center gap-5 py-5 transition-colors hover:bg-white/[0.03]"
                              >
                                {r.kind === "product" ? (
                                  // eslint-disable-next-line @next/next/no-img-element
                                  <img
                                    src={r.image}
                                    alt=""
                                    loading="lazy"
                                    className="h-16 w-14 shrink-0 object-cover md:h-20 md:w-16"
                                  />
                                ) : null}
                                <span className="min-w-0 flex-1">
                                  <span className="block truncate font-display-md text-lg text-white transition-colors group-hover:text-gold-light md:text-xl">
                                    {r.title}
                                  </span>
                                  <span className="mt-1 block truncate font-body-sm text-[13px] text-white/50">
                                    {r.meta}
                                  </span>
                                </span>
                                <span
                                  aria-hidden="true"
                                  className="shrink-0 text-white/30 transition-[transform,color] duration-300 group-hover:translate-x-1 group-hover:text-gold"
                                >
                                  →
                                </span>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </section>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
