"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import {
  products,
  priceFrom,
  lengthsOf,
  TEXTURES,
  TONES,
  ORIGINS,
  type Texture,
  type Tone,
  type Product,
} from "@/lib/products";
import { heroFor } from "@/lib/media";
import { formatPrice } from "@/lib/utils";
import { ProductMedia } from "./ProductMedia";
import { whatsappLink } from "@/lib/site";

/**
 * The Hair Finder — a guided consultation that narrows the real catalogue
 * by the attributes the catalogue actually stores: texture, tone and
 * length.
 *
 * Deliberately not branded as "AI". It is transparent weighted matching
 * over `products`, and the result screen says which answers drove the
 * match. A black-box "AI recommends" label over three if-statements would
 * be theatre, and the shopper can't sanity-check it.
 *
 * Nothing is invented: every option below is a real key from TEXTURES /
 * TONES, and every result is a real listing with its real price.
 */

type Answers = { texture?: Texture; tone?: Tone; length?: "short" | "mid" | "long" };

const STEPS = [
  {
    key: "texture" as const,
    eyebrow: "Question One",
    title: "How should it fall?",
    body: "Texture decides the whole character of a piece — and how much work it asks of you each morning.",
    options: (Object.keys(TEXTURES) as Texture[]).map((k) => ({
      value: k,
      label: TEXTURES[k],
    })),
  },
  {
    key: "tone" as const,
    eyebrow: "Question Two",
    title: "And in what tone?",
    body: "Every colour here is applied to raw hair — no blend, so the tone sits evenly through the length.",
    options: (Object.keys(TONES) as Tone[]).map((k) => ({
      value: k,
      label: TONES[k].label,
      swatch: TONES[k].swatch,
    })),
  },
  {
    key: "length" as const,
    eyebrow: "Question Three",
    title: "How much length?",
    body: "Longer pieces carry more weight and more presence; shorter ones are lighter to wear daily.",
    options: [
      { value: "short" as const, label: 'Up to 14"' },
      { value: "mid" as const, label: '16" – 20"' },
      { value: "long" as const, label: '22" and beyond' },
    ],
  },
];

/** Transparent weighting — texture is the strongest signal, then tone, then length. */
function score(p: Product, a: Answers): number {
  let s = 0;
  if (a.texture && p.texture === a.texture) s += 3;
  if (a.tone && p.tone === a.tone) s += 2;
  if (a.length) {
    const ls = lengthsOf(p);
    const fits = ls.some((l) =>
      a.length === "short" ? l <= 14 : a.length === "mid" ? l >= 16 && l <= 20 : l >= 22
    );
    if (fits) s += 1;
  }
  return s;
}

export function HairFinder() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Answers>({});
  const done = step >= STEPS.length;

  const matches = useMemo(() => {
    if (!done) return [];
    return products
      .map((p) => ({ p, s: score(p, answers) }))
      .filter((x) => x.s > 0)
      .sort((a, b) => b.s - a.s)
      .slice(0, 3)
      .map((x) => x.p);
  }, [done, answers]);

  const choose = (key: keyof Answers, value: string) => {
    setAnswers((prev) => ({ ...prev, [key]: value }));
    setStep((s) => s + 1);
  };

  const restart = () => {
    setAnswers({});
    setStep(0);
  };

  return (
    <section className="bg-noir text-white px-6 md:px-16 py-section-padding">
      <div className="max-w-[1800px] mx-auto">
        <AnimatePresence mode="wait">
          {!done ? (
            <motion.div
              key={step}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="max-w-3xl mb-16">
                <div className="flex items-center gap-4 mb-8">
                  <p className="font-label-caps text-[11px] uppercase tracking-[0.3em] text-gold">
                    {STEPS[step].eyebrow}
                  </p>
                  <span className="h-px flex-1 max-w-24 bg-white/20" />
                  <p className="font-label-caps text-[11px] tracking-[0.2em] text-white/60">
                    {step + 1} / {STEPS.length}
                  </p>
                </div>
                <h2 className="font-display-md text-display-md mb-6 leading-[1.06]">
                  {STEPS[step].title}
                </h2>
                <p className="font-body-xl text-white/60 max-w-xl">{STEPS[step].body}</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {STEPS[step].options.map((o) => (
                  <button
                    key={o.value}
                    onClick={() => choose(STEPS[step].key, o.value)}
                    className="group flex items-center gap-4 border border-white/15 px-7 py-6 text-left transition-colors duration-500 hover:border-gold hover:bg-white/[0.03]"
                  >
                    {"swatch" in o && o.swatch ? (
                      <span
                        aria-hidden="true"
                        className="h-7 w-7 rounded-full shrink-0 ring-1 ring-white/20"
                        style={{ backgroundColor: o.swatch }}
                      />
                    ) : null}
                    <span className="font-headline-lg text-xl group-hover:text-gold-light transition-colors">
                      {o.label}
                    </span>
                  </button>
                ))}
              </div>

              {step > 0 ? (
                <button
                  onClick={() => setStep((s) => s - 1)}
                  className="mt-12 font-label-caps text-[11px] uppercase tracking-[0.2em] text-white/50 hover:text-white transition-colors"
                >
                  ← Back
                </button>
              ) : null}
            </motion.div>
          ) : (
            <motion.div
              key="result"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="max-w-3xl mb-16">
                <p className="font-label-caps text-[11px] uppercase tracking-[0.3em] text-gold mb-8">
                  Your Selection
                </p>
                <h2 className="font-display-md text-display-md mb-6 leading-[1.06]">
                  {matches.length ? "Chosen for you." : "Nothing matched exactly."}
                </h2>
                <p className="font-body-xl text-white/60 max-w-xl">
                  {matches.length ? (
                    <>
                      Based on{" "}
                      {[
                        answers.texture && TEXTURES[answers.texture],
                        answers.tone && TONES[answers.tone].label,
                        answers.length === "short"
                          ? 'up to 14"'
                          : answers.length === "mid"
                            ? '16"–20"'
                            : answers.length === "long"
                              ? '22" and beyond'
                              : null,
                      ]
                        .filter(Boolean)
                        .join(" · ")}
                      . Ordered by how closely each piece fits.
                    </>
                  ) : (
                    <>
                      We don&apos;t hold that exact combination in stock right now — but the
                      atelier builds to order. Tell our concierge what you&apos;re after.
                    </>
                  )}
                </p>
              </div>

              {matches.length ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-gutter mb-16">
                  {matches.map((p) => (
                    <Link key={p.slug} href={`/shop/${p.slug}`} className="group block">
                      <div className="aspect-[3/4] overflow-hidden bg-white/5 mb-5">
                        <ProductMedia
                          media={heroFor(p.slug)}
                          className="h-full w-full object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.06]"
                        />
                      </div>
                      <h3 className="font-headline-lg text-xl mb-2 group-hover:text-gold-light transition-colors">
                        {p.name}
                      </h3>
                      <p className="font-body-sm text-white/50 mb-2">
                        {ORIGINS[p.origin]} · {TEXTURES[p.texture]} · {TONES[p.tone].label}
                      </p>
                      <p className="font-body-md text-gold">
                        {priceFrom(p) === null
                          ? "Enquire for Price"
                          : `From ${formatPrice(priceFrom(p))}`}
                      </p>
                    </Link>
                  ))}
                </div>
              ) : null}

              <div className="flex flex-wrap gap-6">
                <button
                  onClick={restart}
                  className="border border-white/40 px-9 py-4 font-label-caps text-[11px] uppercase tracking-[0.25em] hover:border-gold hover:text-gold-light transition-colors duration-500"
                >
                  Start Again
                </button>
                <a
                  href={whatsappLink(
                    "Hi ByChiStrands — I used the Hair Finder and would like help choosing."
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gold text-noir px-9 py-4 font-label-caps text-[11px] uppercase tracking-[0.25em] hover:bg-gold-light transition-colors duration-500"
                >
                  Ask the Concierge
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
