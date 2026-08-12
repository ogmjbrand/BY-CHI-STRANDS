"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, ArrowRight, Menu, Search, ShoppingBag } from "lucide-react";
import { useRef } from "react";
import { products, priceFrom } from "@/lib/products";

const collectionCards = [
  { name: "Bone Straight", eyebrow: "THE HOUSE SIGNATURE", image: "/products/IMG-20260726-WA0015.jpg", href: "/collections/vietnam-bone-straight" },
  { name: "Pixie", eyebrow: "THE PIXIE EDIT", image: "/products/IMG-20260727-WA0017.jpg", href: "/collections/pixie-collection" },
  { name: "Funmi", eyebrow: "THE FUNMI EDIT", image: "/products/IMG-20260727-WA0042.jpg", href: "/collections/funmi-collection" },
];

const productImages = [
  "/products/IMG-20260726-WA0012.jpg",
  "/products/IMG-20260726-WA0019.jpg",
  "/products/IMG-20260727-WA0001.jpg",
  "/products/IMG-20260727-WA0045.jpg",
];

const principles = [
  ["01", "Single donor", "Traceable hair selected from one donor wherever the collection permits."],
  ["02", "Raw by origin", "The house starts with exceptional human hair before craft transforms it."],
  ["03", "Hand-finished", "Every signature piece is refined in the Lagos atelier for a considered finish."],
  ["04", "Made to last", "Dense ends, intentional construction and aftercare designed around real wear."],
];

function formatPrice(value: number | null) {
  if (value === null) return "Private enquiry";
  return `₦${value.toLocaleString("en-NG")}`;
}

export function TemplateHome() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroScale = useTransform(scrollYProgress, [0, 1], [1.08, 1]);
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  return (
    <div className="bg-[#0b0a09] text-[#f4efe7] selection:bg-[#d7b26a] selection:text-[#0b0a09]">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#0b0a09]/45 text-white backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-[1600px] items-center justify-between px-5 md:px-10">
          <button aria-label="Open menu" className="hidden items-center gap-3 text-[10px] uppercase tracking-[0.3em] md:flex">
            <Menu className="h-4 w-4" /> Menu
          </button>
          <Link href="/" className="absolute left-1/2 -translate-x-1/2 text-center">
            <span className="block font-serif text-xl tracking-[0.18em]">BY CHI</span>
            <span className="block text-[7px] uppercase tracking-[0.5em] text-white/55">Strands</span>
          </Link>
          <div className="ml-auto flex items-center gap-4">
            <Link href="/shop" aria-label="Search" className="hidden md:block"><Search className="h-4 w-4" /></Link>
            <Link href="/cart" aria-label="Shopping bag"><ShoppingBag className="h-4 w-4" /></Link>
          </div>
        </div>
      </header>

      <main>
        <section ref={heroRef} className="relative min-h-[100svh] overflow-hidden bg-black">
          <motion.div style={{ scale: heroScale, y: heroY }} className="absolute inset-0">
            <video
              className="h-full w-full object-cover"
              src="/products/VID-20260727-WA0027.mp4"
              poster="/media/posters/VID-20260727-WA0027.jpg"
              autoPlay muted loop playsInline preload="metadata"
            />
            <div className="absolute inset-0 bg-black/35" />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,.78),rgba(0,0,0,.18)_62%,rgba(0,0,0,.15))]" />
            <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(0,0,0,.82),transparent_45%)]" />
          </motion.div>

          <motion.div style={{ opacity: heroOpacity }} className="relative z-10 flex min-h-[100svh] flex-col justify-end px-6 pb-16 pt-32 md:px-12 md:pb-14 lg:px-20">
            <div className="max-w-[1450px]">
              <p className="mb-6 text-[9px] uppercase tracking-[0.45em] text-[#d7b26a] md:text-[11px]">Vietnam · Lagos · Worldwide</p>
              <h1 className="max-w-6xl font-serif text-[clamp(4rem,10vw,10.5rem)] leading-[.78] tracking-[-.055em]">
                <span className="block">Luxury</span>
                <span className="block pl-[8vw] italic text-[#e8d6b3] md:pl-[5vw]">Vietnamese</span>
                <span className="block">Hair.</span>
              </h1>
              <div className="mt-9 flex flex-col gap-7 md:flex-row md:items-end md:justify-between">
                <p className="max-w-xl text-sm leading-7 text-white/75 md:text-base">
                  Raw, rare and refined. Exceptional Vietnamese hair, crafted into considered pieces in our Lagos atelier.
                </p>
                <div className="flex gap-3">
                  <Link href="/collections" className="inline-flex items-center gap-3 bg-[#d7b26a] px-6 py-4 text-[9px] font-semibold uppercase tracking-[0.25em] text-[#0b0a09] transition hover:bg-[#ead6ac]">Shop the House <ArrowRight className="h-4 w-4" /></Link>
                  <Link href="/book" className="hidden border border-white/30 px-6 py-4 text-[9px] uppercase tracking-[0.25em] text-white transition hover:border-white md:inline-flex">Private Concierge</Link>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="absolute bottom-6 right-6 z-10 hidden items-center gap-3 text-[8px] uppercase tracking-[0.35em] text-white/50 md:flex">
            Scroll to explore <ArrowDown className="h-3 w-3" />
          </div>
        </section>

        <section className="border-b border-white/10 bg-[#e9e0d3] px-6 py-20 text-[#161311] md:px-12 md:py-28">
          <div className="mx-auto grid max-w-[1450px] gap-12 md:grid-cols-[.7fr_1.8fr] md:items-end">
            <p className="text-[9px] uppercase tracking-[0.4em] text-[#806337]">The House</p>
            <div>
              <h2 className="max-w-5xl font-serif text-[clamp(2.7rem,6vw,6.5rem)] leading-[.88] tracking-[-.045em]">Not simply hair. A standard.</h2>
              <p className="mt-8 max-w-2xl text-sm leading-7 text-black/60 md:text-base">By Chi exists for clients who notice the difference. We source exceptional hair, preserve what makes it rare, then finish every piece with the restraint and precision of a private atelier.</p>
            </div>
          </div>
        </section>

        <section className="bg-[#0b0a09] px-6 py-24 md:px-12 md:py-36">
          <div className="mx-auto max-w-[1450px]">
            <div className="mb-14 flex items-end justify-between gap-8">
              <div><p className="mb-4 text-[9px] uppercase tracking-[0.4em] text-[#d7b26a]">Shop the house</p><h2 className="font-serif text-[clamp(2.8rem,6vw,6rem)] leading-none tracking-[-.04em]">The collections.</h2></div>
              <Link href="/collections" className="hidden text-[9px] uppercase tracking-[0.3em] text-white/60 hover:text-white md:block">View all collections →</Link>
            </div>
            <div className="grid gap-3 md:grid-cols-3">
              {collectionCards.map((card, index) => (
                <Link key={card.name} href={card.href} className={`group relative overflow-hidden bg-[#171411] ${index === 0 ? "md:row-span-2 md:min-h-[720px]" : "min-h-[350px]"}`}>
                  <Image src={card.image} alt={card.name} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover transition duration-[1.2s] group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-7 md:p-9">
                    <p className="mb-3 text-[8px] uppercase tracking-[0.35em] text-[#d7b26a]">{card.eyebrow}</p>
                    <h3 className="font-serif text-4xl tracking-[-.03em]">{card.name}</h3>
                    <span className="mt-5 inline-flex items-center gap-2 text-[8px] uppercase tracking-[0.3em] text-white/65">Explore <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" /></span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#f2ece4] px-6 py-24 text-[#171411] md:px-12 md:py-36">
          <div className="mx-auto max-w-[1450px]">
            <div className="mb-16 grid gap-8 md:grid-cols-[1fr_2fr] md:items-end">
              <p className="text-[9px] uppercase tracking-[0.4em] text-[#806337]">The By Chi difference</p>
              <h2 className="font-serif text-[clamp(3rem,6vw,6.5rem)] leading-[.86] tracking-[-.045em]">Every detail has a reason.</h2>
            </div>
            <div className="divide-y divide-black/10 border-y border-black/10">
              {principles.map(([number, title, body]) => (
                <div key={number} className="grid gap-5 py-9 md:grid-cols-[80px_1fr_1.2fr] md:items-center md:py-12">
                  <span className="font-mono text-xs text-black/35">{number}</span>
                  <h3 className="font-serif text-3xl md:text-5xl">{title}</h3>
                  <p className="max-w-xl text-sm leading-7 text-black/55">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-black px-6 py-24 md:px-12 md:py-0">
          <div className="mx-auto grid max-w-[1450px] md:min-h-[760px] md:grid-cols-[1.2fr_1fr]">
            <div className="relative min-h-[520px] overflow-hidden md:min-h-0">
              <Image src="/services/frontal-installation-1.jpg" alt="By Chi atelier craftsmanship" fill sizes="(max-width: 768px) 100vw, 60vw" className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/45 to-transparent" />
            </div>
            <div className="flex items-center px-2 py-16 md:px-16 md:py-24">
              <div>
                <p className="mb-5 text-[9px] uppercase tracking-[0.4em] text-[#d7b26a]">Crafted in Lagos</p>
                <h2 className="font-serif text-[clamp(3rem,5vw,6rem)] leading-[.87] tracking-[-.045em]">From source<br /><i>to signature.</i></h2>
                <p className="mt-8 max-w-md text-sm leading-7 text-white/55">The raw material is only the beginning. Construction, density, lace, finishing and styling are considered together inside the atelier.</p>
                <Link href="/about" className="mt-9 inline-flex items-center gap-3 border-b border-[#d7b26a]/50 pb-3 text-[9px] uppercase tracking-[0.3em] text-[#e8d6b3]">Enter the atelier <ArrowRight className="h-4 w-4" /></Link>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#0b0a09] px-6 py-24 md:px-12 md:py-36">
          <div className="mx-auto max-w-[1450px]">
            <div className="mb-14 flex items-end justify-between gap-8">
              <div><p className="mb-4 text-[9px] uppercase tracking-[0.4em] text-[#d7b26a]">Most wanted</p><h2 className="font-serif text-[clamp(2.8rem,6vw,6rem)] leading-none tracking-[-.04em]">Pieces worth keeping.</h2></div>
              <Link href="/shop" className="hidden text-[9px] uppercase tracking-[0.3em] text-white/60 hover:text-white md:block">Shop all →</Link>
            </div>
            <div className="grid gap-x-4 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
              {products.slice(0, 4).map((product, index) => {
                const price = priceFrom(product);
                return (
                  <Link key={product.slug} href={`/shop/${product.slug}`} className="group">
                    <div className="relative aspect-[.82] overflow-hidden bg-[#151311]">
                      <Image src={productImages[index]} alt={product.name} fill sizes="(max-width: 768px) 50vw, 25vw" className="object-cover transition duration-700 group-hover:scale-[1.04]" />
                      <div className="absolute left-4 top-4 text-[7px] uppercase tracking-[0.3em] text-white/60">{product.badges?.[0] ?? "By Chi"}</div>
                      <div className="absolute inset-x-4 bottom-4 translate-y-3 opacity-0 transition duration-500 group-hover:translate-y-0 group-hover:opacity-100"><span className="block bg-white px-4 py-3 text-center text-[8px] font-semibold uppercase tracking-[0.25em] text-black">View piece</span></div>
                    </div>
                    <div className="pt-5">
                      <h3 className="font-serif text-xl leading-tight">{product.name}</h3>
                      <div className="mt-2 flex items-center justify-between text-[9px] uppercase tracking-[0.18em] text-white/45"><span>{product.texture.replaceAll("-", " ")}</span><span>{formatPrice(price)}</span></div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        <section className="bg-[#d8c8b6] px-6 py-24 text-[#171411] md:px-12 md:py-36">
          <div className="mx-auto grid max-w-[1450px] gap-16 md:grid-cols-[1fr_1.3fr] md:items-center">
            <div>
              <p className="mb-5 text-[9px] uppercase tracking-[0.4em] text-[#806337]">The result</p>
              <h2 className="font-serif text-[clamp(3.2rem,6vw,6.5rem)] leading-[.84] tracking-[-.05em]">The difference<br /><i>is in the finish.</i></h2>
              <p className="mt-8 max-w-md text-sm leading-7 text-black/60">See the hair in motion. See the hair installed. See how the finish changes the entire presence of the piece.</p>
              <Link href="/gallery" className="mt-9 inline-flex items-center gap-3 border-b border-black/25 pb-3 text-[9px] uppercase tracking-[0.3em]">View transformations <ArrowRight className="h-4 w-4" /></Link>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="relative aspect-[.75] overflow-hidden"><Image src="/media/posters/VID-20260727-WA0036.jpg" alt="By Chi client transformation" fill className="object-cover" sizes="40vw" /></div>
              <div className="relative mt-14 aspect-[.75] overflow-hidden"><Image src="/media/posters/VID-20260727-WA0052.jpg" alt="By Chi hair transformation" fill className="object-cover" sizes="40vw" /></div>
            </div>
          </div>
        </section>

        <section className="bg-[#0b0a09] px-6 py-28 text-center md:px-12 md:py-40">
          <p className="mb-6 text-[9px] uppercase tracking-[0.4em] text-[#d7b26a]">Private concierge</p>
          <h2 className="mx-auto max-w-5xl font-serif text-[clamp(3.2rem,7vw,8rem)] leading-[.82] tracking-[-.05em]">Your standard<br /><i>should be uncompromising.</i></h2>
          <p className="mx-auto mt-9 max-w-xl text-sm leading-7 text-white/55">Not sure which texture, length or finish is yours? Let the House guide you.</p>
          <Link href="/book" className="mt-9 inline-flex items-center gap-3 bg-[#d7b26a] px-8 py-5 text-[9px] font-semibold uppercase tracking-[0.28em] text-[#0b0a09] hover:bg-[#ead6ac]">Speak with By Chi <ArrowRight className="h-4 w-4" /></Link>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-[#0b0a09] px-6 py-12 md:px-12">
        <div className="mx-auto flex max-w-[1450px] flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div><p className="font-serif text-3xl tracking-[0.08em]">BY CHI</p><p className="mt-2 text-[8px] uppercase tracking-[0.4em] text-white/35">Luxury Vietnamese Hair · Lagos Atelier</p></div>
          <div className="flex flex-wrap gap-x-7 gap-y-3 text-[8px] uppercase tracking-[0.25em] text-white/45"><Link href="/shop">Shop</Link><Link href="/services">Atelier</Link><Link href="/academy">Academy</Link><Link href="/journal">Journal</Link><Link href="/contact">Contact</Link></div>
        </div>
      </footer>
    </div>
  );
}
