"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, ArrowRight, Menu, Search, ShoppingBag } from "lucide-react";
import { useRef } from "react";
import { TransformationReveal } from "./TransformationReveal";
import { HouseCraft } from "./HouseCraft";
import { HouseFounder } from "./HouseFounder";
import { HouseVoices } from "./HouseVoices";

const collections = [
  { name: "Bone Straight", label: "THE SIGNATURE", image: "/products/IMG-20260726-WA0015.jpg", href: "/collections" },
  { name: "Pixie", label: "THE PIXIE EDIT", image: "/products/IMG-20260727-WA0017.jpg", href: "/collections/pixie-collection" },
  { name: "Funmi", label: "THE FUNMI EDIT", image: "/products/IMG-20260727-WA0042.jpg", href: "/collections/funmi-collection" },
];

const videos = [
  { src: "/products/VID-20260727-WA0027.mp4", poster: "/media/posters/VID-20260727-WA0027.jpg", title: "The Signature", copy: "Movement, density and finish." },
  { src: "/products/VID-20260727-WA0049.mp4", poster: "/media/posters/VID-20260727-WA0049.jpg", title: "Bold Pixie", copy: "Defined texture. Serious volume." },
  { src: "/products/VID-20260727-WA0036.mp4", poster: "/media/posters/VID-20260727-WA0036.jpg", title: "Colour Edit", copy: "Rich tone with a polished finish." },
  { src: "/products/VID-20260727-WA0041.mp4", poster: "/media/posters/VID-20260727-WA0041.jpg", title: "Funmi Edit", copy: "Soft movement that holds its shape." },
  { src: "/products/VID-20260727-WA0046.mp4", poster: "/media/posters/VID-20260727-WA0046.jpg", title: "The Atelier", copy: "Finished with intention." },
  { src: "/products/VID-20260726-WA0020.mp4", poster: "/media/posters/VID-20260726-WA0020.jpg", title: "The Transformation", copy: "Made to be seen." },
];

const standards = [
  ["01", "Considered selection", "Every piece is chosen for density, movement and finish."],
  ["02", "Natural character", "Texture and volume remain expressive rather than overworked."],
  ["03", "Atelier finished", "Every piece is prepared with a deliberate luxury finish."],
  ["04", "Private care", "Guidance and aftercare continue beyond the purchase."],
];

function MotionVideo({ item, className = "" }: { item: (typeof videos)[number]; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 35, scale: 0.97 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ scale: 0.985 }}
      className={`group relative overflow-hidden bg-black ${className}`}
    >
      <motion.div whileHover={{ scale: 1.035 }} transition={{ duration: 1.2 }} className="absolute inset-0">
        <video className="h-full w-full object-cover" src={item.src} poster={item.poster} autoPlay muted loop playsInline preload="metadata" />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/5 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
        <p className="text-[8px] uppercase tracking-[.45em] text-[#c8a45d]">ByChi Motion</p>
        <h3 className="mt-2 font-serif text-3xl text-[#f5f0e8] md:text-4xl">{item.title}</h3>
        <p className="mt-2 max-w-xs text-xs leading-5 text-white/55">{item.copy}</p>
      </div>
      <div className="absolute right-5 top-5 h-9 w-9 rounded-full border border-white/20 bg-black/20 backdrop-blur-sm transition group-hover:border-[#c8a45d]/70" />
    </motion.div>
  );
}

export function HouseHomepage() {
  const hero = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: hero, offset: ["start start", "end start"] });
  const scale = useTransform(scrollYProgress, [0, 1], [1.12, 1]);
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "8%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.72], [1, 0]);

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#0b0907] text-[#f5f0e8] selection:bg-[#c8a45d] selection:text-[#0b0907]">
      <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 md:px-6 md:pt-5">
        <div className="mx-auto flex h-[68px] max-w-[1760px] items-center justify-between border border-white/15 bg-[#0b0907]/65 px-4 backdrop-blur-xl md:h-[76px] md:px-7">
          <div className="flex items-center gap-7">
            <Link href="/shop" className="hidden items-center gap-2 text-[9px] uppercase tracking-[.35em] text-white/65 transition hover:text-[#c8a45d] md:flex"><Menu size={14} /> Menu</Link>
            <Link href="/collections" className="hidden text-[9px] uppercase tracking-[.35em] text-white/65 transition hover:text-[#c8a45d] md:block">Collections</Link>
          </div>
          <Link href="/" className="absolute left-1/2 -translate-x-1/2 font-serif text-[27px] tracking-[-.05em] md:text-[38px]">ByChi Strands</Link>
          <div className="ml-auto flex items-center gap-5 text-white/75">
            <Link href="/shop" aria-label="Search"><Search size={17} /></Link>
            <Link href="/cart" aria-label="Shopping bag"><ShoppingBag size={17} /></Link>
          </div>
        </div>
      </header>

      <main>
        <section ref={hero} className="relative min-h-[100svh] overflow-hidden bg-black">
          <motion.div style={{ scale, y }} className="absolute inset-0">
            <video className="h-full w-full object-cover" src={videos[0].src} poster={videos[0].poster} autoPlay muted loop playsInline preload="metadata" />
            <div className="absolute inset-0 bg-black/35" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-black/35" />
          </motion.div>
          <motion.div style={{ opacity }} className="relative z-10 flex min-h-[100svh] items-end px-5 pb-10 md:px-10 md:pb-14 lg:px-16">
            <div className="grid w-full max-w-[1760px] gap-10 md:grid-cols-12 md:items-end">
              <div className="md:col-span-9">
                <p className="mb-6 text-[8px] uppercase tracking-[.6em] text-[#c8a45d]">The House of ByChi · Lagos</p>
                <h1 className="font-serif text-[clamp(4.2rem,11vw,13rem)] leading-[.68] tracking-[-.075em]"><span className="block">The standard</span><span className="block pl-[8vw] italic text-[#c8a45d]">of</span><span className="block">beautiful hair.</span></h1>
                <p className="mt-9 max-w-xl text-sm leading-7 text-white/65 md:text-base">Beautiful hair, deliberately selected and finished for women who expect presence without compromise.</p>
              </div>
              <div className="md:col-span-3">
                <Link href="/collections" className="group flex items-center justify-between bg-[#c8a45d] px-6 py-5 text-[9px] font-semibold uppercase tracking-[.32em] text-[#0b0907] transition hover:bg-[#f5f0e8]">Shop the House <ArrowRight size={16} className="transition group-hover:translate-x-1" /></Link>
                <Link href="/book" className="mt-3 block border border-white/25 px-6 py-5 text-center text-[9px] uppercase tracking-[.32em] text-white/70 transition hover:border-[#c8a45d] hover:text-[#c8a45d]">Private Concierge</Link>
              </div>
            </div>
          </motion.div>
          <div className="absolute bottom-6 right-8 z-10 hidden items-center gap-3 text-[8px] uppercase tracking-[.45em] text-white/45 md:flex">Scroll <ArrowDown size={13} className="text-[#c8a45d]" /></div>
        </section>

        <section className="bg-[#f5f0e8] px-5 py-24 text-[#0b0907] md:px-10 md:py-36">
          <div className="mx-auto max-w-[1760px]">
            <div className="grid gap-10 md:grid-cols-12 md:items-end">
              <p className="text-[8px] uppercase tracking-[.5em] text-[#8b6244] md:col-span-2">01 / The House</p>
              <div className="md:col-span-10"><h2 className="font-serif text-[clamp(3.5rem,7.7vw,9rem)] leading-[.75] tracking-[-.065em]">Luxury is not louder.<br /><i>It is more considered.</i></h2><p className="mt-10 max-w-2xl text-sm leading-7 text-[#0b0907]/60 md:text-base">ByChi treats density, construction, movement, finish and service as one complete luxury experience.</p></div>
            </div>
            <div className="mt-20 grid border-y border-[#0b0907]/20 md:grid-cols-4">{[["01", "Selection", "Considered"], ["02", "Material", "Premium"], ["03", "Finish", "Atelier"], ["04", "Care", "Private"]].map(([n, a, b]) => <div key={n} className="border-b border-[#0b0907]/15 p-7 last:border-0 md:border-b-0 md:border-r md:p-9 md:last:border-r-0"><span className="text-[8px] tracking-[.3em] text-[#c8a45d]">{n}</span><p className="mt-14 text-[9px] uppercase tracking-[.3em] text-[#0b0907]/45">{a}</p><h3 className="mt-2 font-serif text-3xl">{b}</h3></div>)}</div>
          </div>
        </section>

        <section className="bg-[#0b0907] px-4 py-24 md:px-8 md:py-36">
          <div className="mx-auto max-w-[1760px]">
            <div className="mb-14 flex items-end justify-between px-2 md:px-4"><div><p className="mb-4 text-[8px] uppercase tracking-[.5em] text-[#c8a45d]">02 / Collections</p><h2 className="font-serif text-[clamp(3.6rem,7.5vw,9rem)] leading-[.72] tracking-[-.065em]">The House<br /><i>Edit.</i></h2></div><Link href="/collections" className="hidden border-b border-[#c8a45d]/60 pb-2 text-[8px] uppercase tracking-[.35em] text-[#c8a45d] md:block">View all</Link></div>
            <div className="grid gap-2 md:grid-cols-12 md:grid-rows-[300px_300px_300px]">{collections.map((item, i) => <Link key={item.name} href={item.href} className={`group relative overflow-hidden ${i === 0 ? "md:col-span-7 md:row-span-3" : i === 1 ? "md:col-span-5 md:row-span-2" : "md:col-span-5"}`}><Image src={item.image} alt={item.name} fill sizes="(max-width: 768px) 100vw, 60vw" className="object-cover transition duration-[1.4s] group-hover:scale-[1.045]" /><div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/10" /><div className="absolute bottom-0 left-0 right-0 p-7 md:p-10"><p className="mb-3 text-[8px] uppercase tracking-[.45em] text-[#c8a45d]">{item.label}</p><h3 className="font-serif text-[clamp(2.8rem,4.5vw,5.5rem)] leading-none">{item.name}</h3><span className="mt-5 inline-flex items-center gap-3 text-[8px] uppercase tracking-[.35em] text-white/65">Explore <ArrowRight size={13} className="text-[#c8a45d] transition group-hover:translate-x-1" /></span></div></Link>)}</div>
          </div>
        </section>

        <section className="bg-[#21150f] px-5 py-24 md:px-10 md:py-36">
          <div className="mx-auto max-w-[1760px]"><div className="grid gap-12 md:grid-cols-12 md:items-end"><p className="text-[8px] uppercase tracking-[.5em] text-[#c8a45d] md:col-span-2">03 / The Standard</p><div className="md:col-span-10"><h2 className="font-serif text-[clamp(3.5rem,7.5vw,9rem)] leading-[.74] tracking-[-.065em]">Beauty with<br /><i>intention.</i></h2><p className="mt-9 max-w-2xl text-sm leading-7 text-white/55 md:text-base">A complete approach to selection, density, construction, styling and care — built around the finished experience.</p></div></div><div className="mt-20 grid gap-px bg-[#c8a45d]/20 md:grid-cols-4">{standards.map(([n, title, copy]) => <article key={n} className="bg-[#21150f] p-7 md:p-10"><span className="text-[8px] tracking-[.3em] text-[#c8a45d]">{n}</span><h3 className="mt-16 font-serif text-3xl text-[#f5f0e8]">{title}</h3><p className="mt-5 text-sm leading-7 text-white/45">{copy}</p></article>)}</div></div>
        </section>

        <section className="bg-[#0b0907] px-4 py-24 md:px-8 md:py-36">
          <div className="mx-auto max-w-[1760px]"><div className="mb-12 flex items-end justify-between px-2"><div><p className="mb-4 text-[8px] uppercase tracking-[.5em] text-[#c8a45d]">04 / ByChi Motion</p><h2 className="font-serif text-[clamp(3.5rem,7vw,8rem)] leading-[.74] tracking-[-.06em]">See the hair<br /><i>in motion.</i></h2></div><span className="hidden text-[8px] uppercase tracking-[.35em] text-white/35 md:block">Autoplay · Scroll · Discover</span></div><div className="grid gap-3 md:grid-cols-12 md:grid-rows-[360px_360px]"><MotionVideo item={videos[0]} className="md:col-span-7 md:row-span-2" /><MotionVideo item={videos[1]} className="md:col-span-5" /><MotionVideo item={videos[2]} className="md:col-span-5" /></div><div className="mt-3 grid gap-3 md:grid-cols-3"><MotionVideo item={videos[3]} className="aspect-[4/5]" /><MotionVideo item={videos[4]} className="aspect-[4/5]" /><MotionVideo item={videos[5]} className="aspect-[4/5]" /></div></div>
        </section>

        <section className="bg-[#f5f0e8] px-5 py-24 text-[#0b0907] md:px-10 md:py-36"><div className="mx-auto max-w-[1760px]"><div className="mb-12 flex items-end justify-between px-2"><div><p className="mb-4 text-[8px] uppercase tracking-[.5em] text-[#8b6244]">05 / The Pieces</p><h2 className="font-serif text-[clamp(3.5rem,7vw,8rem)] leading-[.74] tracking-[-.06em]">Made to be<br /><i>remembered.</i></h2></div><Link href="/shop" className="border-b border-[#c8a45d] pb-2 text-[8px] uppercase tracking-[.35em] text-[#8b6244]">Shop all</Link></div><div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{[...collections, { name: "Colour Editions", label: "PRIVATE EDIT", image: "/products/IMG-20260727-WA0045.jpg", href: "/collections" }].map((item) => <Link key={item.name} href={item.href} className="group"><div className="relative aspect-[4/5] overflow-hidden bg-[#e6ddd0]"><Image src={item.image} alt={item.name} fill sizes="25vw" className="object-cover transition duration-1000 group-hover:scale-[1.04]" /></div><div className="flex items-start justify-between gap-4 pt-4"><div><p className="text-[8px] uppercase tracking-[.35em] text-[#8b6244]">{item.label}</p><h3 className="mt-2 font-serif text-2xl">{item.name}</h3></div><ArrowRight size={17} className="mt-2 text-[#c8a45d] transition group-hover:translate-x-1" /></div></Link>)}</div></div></section>


        {/* 06 — what the house does to hair, before the transformation shows
            the result of it. Real services, not an invented production line. */}
        <HouseCraft />

        {/* 07 — the before/after chapter. See TransformationReveal for why the
            starting frame is a marked placeholder rather than a photograph. */}
        <TransformationReveal />

        {/* 08, 09 — the person behind the house, then the clients' own
            footage. The flow ends on people before it ends on a CTA. */}
        <HouseFounder />
        <HouseVoices />

        <section className="relative overflow-hidden bg-black px-5 py-28 md:px-10 md:py-44"><div className="absolute inset-0 opacity-45"><Image src="/products/IMG-20260727-WA0045.jpg" alt="" fill sizes="100vw" className="object-cover" /></div><div className="absolute inset-0 bg-black/65" /><div className="relative z-10 mx-auto max-w-[1760px] text-center"><p className="mb-7 text-[8px] uppercase tracking-[.6em] text-[#c8a45d]">The ByChi House</p><h2 className="font-serif text-[clamp(4rem,10vw,12rem)] leading-[.68] tracking-[-.07em]">Your hair.<br /><i className="text-[#c8a45d]">Your standard.</i></h2><p className="mx-auto mt-10 max-w-xl text-sm leading-7 text-white/60">Choose your piece, speak with a concierge, or step inside the House in Lagos.</p><div className="mx-auto mt-10 flex max-w-xl flex-col gap-3 sm:flex-row"><Link href="/collections" className="flex flex-1 items-center justify-center bg-[#c8a45d] px-6 py-5 text-[9px] font-semibold uppercase tracking-[.32em] text-[#0b0907]">Shop the House</Link><Link href="/book" className="flex flex-1 items-center justify-center border border-white/30 px-6 py-5 text-[9px] uppercase tracking-[.32em] text-white">Book Concierge</Link></div></div></section>
      </main>

      <footer className="border-t border-white/10 bg-[#0b0907] px-5 py-12 text-white/55 md:px-10 md:py-16"><div className="mx-auto grid max-w-[1760px] gap-10 md:grid-cols-12"><div className="md:col-span-5"><p className="font-serif text-4xl text-[#f5f0e8]">ByChi Strands</p><p className="mt-5 max-w-sm text-sm leading-7">The House of luxury hair. Lagos · Nigeria.</p></div><div className="grid grid-cols-2 gap-8 text-[8px] uppercase tracking-[.3em] md:col-span-7 md:grid-cols-4"><Link href="/collections">Collections</Link><Link href="/book">Concierge</Link><Link href="/about">The House</Link><Link href="/contact">Contact</Link></div></div></footer>
    </div>
  );
}
