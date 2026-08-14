"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, ArrowRight, Menu, Search, ShoppingBag, Sparkles } from "lucide-react";
import { useRef } from "react";
import { products, priceFrom } from "@/lib/products";

const GOLD = "#C9A56A";
const INK = "#17110D";
const CREAM = "#F3EEE5";
const TAUPE = "#D9CCBB";
const WINE = "#4A211D";

const collections = [
  { title: "Bone Straight", label: "THE SIGNATURE", image: "/products/IMG-20260726-WA0015.jpg", href: "/collections" },
  { title: "Pixie", label: "THE PIXIE EDIT", image: "/products/IMG-20260727-WA0017.jpg", href: "/collections/pixie-collection" },
  { title: "Funmi", label: "THE FUNMI EDIT", image: "/products/IMG-20260727-WA0042.jpg", href: "/collections/funmi-collection" },
];

const editorial = [
  { image: "/products/IMG-20260726-WA0012.jpg", title: "Made to move." },
  { image: "/products/IMG-20260726-WA0019.jpg", title: "Finished by hand." },
  { image: "/products/IMG-20260727-WA0001.jpg", title: "Built for presence." },
];

const money = (value: number | null) => value === null ? "PRIVATE ENQUIRY" : `₦${value.toLocaleString("en-NG")}`;

export function LuxuryHome() {
  const hero = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: hero, offset: ["start start", "end start"] });
  const scale = useTransform(scrollYProgress, [0, 1], [1.12, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#17110D] text-[#F3EEE5]">
      <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 md:px-7 md:pt-5">
        <div className="mx-auto flex h-16 max-w-[1800px] items-center justify-between border border-white/15 bg-[#17110D]/75 px-4 backdrop-blur-2xl md:h-[76px] md:px-7">
          <div className="flex items-center gap-6">
            <button className="hidden items-center gap-2 text-[9px] uppercase tracking-[.35em] text-white/70 md:flex"><Menu className="h-4 w-4" /> Menu</button>
            <Link href="/collections" className="hidden text-[9px] uppercase tracking-[.35em] text-white/55 transition hover:text-[#C9A56A] md:block">Collections</Link>
          </div>
          <Link href="/" className="absolute left-1/2 -translate-x-1/2 font-serif text-2xl tracking-[-.04em] md:text-4xl">ByChi Strands</Link>
          <div className="ml-auto flex items-center gap-4 md:gap-6">
            <Link href="/shop" aria-label="Search"><Search className="h-4 w-4 text-white/75" /></Link>
            <Link href="/cart" aria-label="Shopping bag"><ShoppingBag className="h-4 w-4 text-white/75" /></Link>
          </div>
        </div>
      </header>

      <main>
        <section ref={hero} className="relative min-h-[100svh] overflow-hidden bg-black">
          <motion.div style={{ scale }} className="absolute inset-0">
            <video className="h-full w-full object-cover" src="/products/VID-20260727-WA0027.mp4" poster="/media/posters/VID-20260727-WA0027.jpg" autoPlay muted loop playsInline preload="metadata" />
            <div className="absolute inset-0 bg-black/35" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/5 to-black/25" />
          </motion.div>
          <motion.div style={{ opacity }} className="relative z-10 flex min-h-[100svh] items-end px-5 pb-10 pt-32 md:px-12 md:pb-16 lg:px-20">
            <div className="grid w-full max-w-[1800px] gap-10 md:grid-cols-12 md:items-end">
              <div className="md:col-span-9">
                <p className="mb-6 text-[8px] uppercase tracking-[.65em] text-[#C9A56A]">THE HOUSE OF BYCHI · LAGOS</p>
                <h1 className="font-serif text-[clamp(4.3rem,12vw,13rem)] leading-[.7] tracking-[-.075em]">
                  <span className="block">The art</span>
                  <span className="block pl-[10vw] italic text-[#C9A56A]">of</span>
                  <span className="block">hair.</span>
                </h1>
                <p className="mt-9 max-w-xl text-sm leading-7 text-white/65 md:text-base">Rare raw hair. Considered construction. An atelier standard for women who want their presence to arrive first.</p>
              </div>
              <div className="md:col-span-3">
                <Link href="/collections" className="group flex items-center justify-between bg-[#C9A56A] px-6 py-5 text-[8px] font-semibold uppercase tracking-[.3em] text-[#17110D] transition hover:bg-[#F3EEE5]">Enter the House <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" /></Link>
                <Link href="/book" className="mt-3 block border border-white/30 px-6 py-5 text-center text-[8px] uppercase tracking-[.3em] text-white/75 transition hover:border-[#C9A56A] hover:text-[#C9A56A]">Private Concierge</Link>
              </div>
            </div>
          </motion.div>
          <div className="absolute bottom-7 right-8 z-10 hidden items-center gap-3 text-[7px] uppercase tracking-[.45em] text-white/45 md:flex">Scroll <ArrowDown className="h-3 w-3 text-[#C9A56A]" /></div>
        </section>

        <section className="bg-[#F3EEE5] px-5 py-24 text-[#17110D] md:px-12 md:py-36">
          <div className="mx-auto max-w-[1800px]">
            <div className="grid gap-10 md:grid-cols-12 md:items-end">
              <div className="md:col-span-3"><p className="text-[8px] uppercase tracking-[.5em] text-[#7A4A32]">01 / The House</p><p className="mt-8 max-w-xs text-xs leading-6 text-black/50">human hair, selected for density, movement and finish. Crafted in Lagos.</p></div>
              <div className="md:col-span-9"><h2 className="font-serif text-[clamp(3.5rem,7.7vw,9rem)] leading-[.76] tracking-[-.065em]">Luxury should feel<br /><i>inevitable.</i></h2></div>
            </div>
            <div className="mt-20 grid border-y border-black/15 md:grid-cols-4">
              {["Single donor", "Raw material", "Atelier finish", "Private care"].map((item, i) => <div key={item} className="border-b border-black/10 p-7 last:border-0 md:border-b-0 md:border-r md:last:border-0 md:p-9"><span className="text-[8px] tracking-[.3em] text-[#C9A56A]">0{i + 1}</span><h3 className="mt-14 font-serif text-2xl md:text-3xl">{item}</h3></div>)}
            </div>
          </div>
        </section>

        <section className="bg-[#17110D] px-4 py-24 md:px-8 md:py-36">
          <div className="mx-auto max-w-[1800px]">
            <div className="mb-12 flex items-end justify-between px-2 md:px-4"><div><p className="mb-4 text-[8px] uppercase tracking-[.5em] text-[#C9A56A]">02 / Collections</p><h2 className="font-serif text-[clamp(3.6rem,7.5vw,9rem)] leading-[.73] tracking-[-.065em]">The House<br /><i>Edit.</i></h2></div><Link href="/collections" className="hidden border-b border-[#C9A56A]/60 pb-2 text-[8px] uppercase tracking-[.35em] text-[#C9A56A] md:block">View all</Link></div>
            <div className="grid gap-2 md:grid-cols-12 md:grid-rows-[300px_300px_300px]">
              {collections.map((item, i) => <Link key={item.title} href={item.href} className={`group relative overflow-hidden ${i === 0 ? "md:col-span-7 md:row-span-3" : i === 1 ? "md:col-span-5 md:row-span-2" : "md:col-span-5"}`}><Image src={item.image} alt={item.title} fill sizes="(max-width: 768px) 100vw, 60vw" className="object-cover transition duration-[1.4s] group-hover:scale-105" /><div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-transparent" /><div className="absolute bottom-0 left-0 p-7 md:p-10"><p className="mb-3 text-[7px] uppercase tracking-[.45em] text-[#C9A56A]">{item.label}</p><h3 className="font-serif text-[clamp(2.8rem,5vw,6rem)] leading-none">{item.title}</h3><span className="mt-5 inline-flex items-center gap-3 text-[7px] uppercase tracking-[.35em] text-white/65">Explore <ArrowRight className="h-3 w-3 text-[#C9A56A]" /></span></div></Link>)}
            </div>
          </div>
        </section>

        <section className="bg-[#D9CCBB] px-5 py-24 text-[#17110D] md:px-12 md:py-36">
          <div className="mx-auto max-w-[1800px]">
            <div className="grid gap-8 md:grid-cols-12"><p className="text-[8px] uppercase tracking-[.5em] text-[#7A4A32] md:col-span-3">03 / From  to Lagos</p><h2 className="font-serif text-[clamp(3.5rem,7vw,8.5rem)] leading-[.75] tracking-[-.06em] md:col-span-9">The journey is<br /><i>part of the luxury.</i></h2></div>
            <div className="mt-20 grid gap-px bg-black/15 md:grid-cols-4">
              {[{ n: "01", t: "Selected in ", d: "We begin with origin, density and the integrity of the strand." }, { n: "02", t: "Graded by hand", d: "The house removes weak or inconsistent strands before construction." }, { n: "03", t: "Finished in Lagos", d: "Every unit receives its final shape and detail in the atelier." }, { n: "04", t: "Delivered with care", d: "Your piece leaves the house with guidance that continues after purchase." }].map((step) => <div key={step.n} className="bg-[#D9CCBB] p-7 md:p-9"><span className="text-[8px] text-[#C9A56A]">{step.n}</span><h3 className="mt-12 font-serif text-2xl md:text-3xl">{step.t}</h3><p className="mt-5 text-xs leading-6 text-black/50">{step.d}</p></div>)}
            </div>
          </div>
        </section>

        <section className="bg-[#4A211D] px-5 py-24 md:px-12 md:py-36">
          <div className="mx-auto grid max-w-[1800px] gap-3 md:grid-cols-12 md:grid-rows-[260px_520px_260px]">
            <div className="relative overflow-hidden md:col-span-4 md:row-span-2"><Image src={editorial[0].image} alt="ByChi hair detail" fill sizes="35vw" className="object-cover" /></div>
            <div className="relative overflow-hidden md:col-span-5"><Image src={editorial[1].image} alt="ByChi craftsmanship" fill sizes="40vw" className="object-cover" /></div>
            <div className="flex items-end p-5 md:col-span-3"><div><p className="mb-5 text-[8px] uppercase tracking-[.5em] text-[#C9A56A]">04 / The details</p><h2 className="font-serif text-5xl leading-[.78] md:text-7xl">Made to<br /><i>move.</i></h2></div></div>
            <div className="relative overflow-hidden md:col-span-5 md:row-span-2"><Image src={editorial[2].image} alt="ByChi signature hair" fill sizes="40vw" className="object-cover" /></div>
            <div className="flex items-center border border-white/10 p-7 md:col-span-3"><div><Sparkles className="mb-5 h-5 w-5 text-[#C9A56A]" /><p className="font-serif text-3xl leading-tight">Nothing ordinary enters the House.</p></div></div>
          </div>
        </section>

        <section className="bg-[#F3EEE5] px-5 py-24 text-[#17110D] md:px-12 md:py-36">
          <div className="mx-auto max-w-[1800px]">
            <div className="mb-14 flex items-end justify-between"><div><p className="mb-4 text-[8px] uppercase tracking-[.5em] text-[#7A4A32]">05 / Shop the House</p><h2 className="font-serif text-[clamp(3.4rem,7vw,8rem)] leading-[.75] tracking-[-.06em]">The pieces<br /><i>people remember.</i></h2></div><Link href="/shop" className="border-b border-[#C9A56A] pb-2 text-[8px] uppercase tracking-[.35em] text-[#7A4A32]">Shop all</Link></div>
            <div className="grid gap-x-4 gap-y-14 sm:grid-cols-2 lg:grid-cols-4">
              {products.slice(0, 4).map((product, i) => <Link key={product.slug} href={`/shop/${product.slug}`} className="group">
                <div className="relative aspect-[4/5] overflow-hidden bg-[#E4D9CB]"><Image src={i === 0 ? "/products/IMG-20260726-WA0015.jpg" : i === 1 ? "/products/IMG-20260727-WA0017.jpg" : i === 2 ? "/products/IMG-20260727-WA0042.jpg" : "/products/IMG-20260726-WA0019.jpg"} alt={product.name} fill sizes="(max-width: 768px) 50vw, 25vw" className="object-cover transition duration-700 group-hover:scale-[1.04]" /><span className="absolute left-3 top-3 border border-black/15 bg-[#F3EEE5]/90 px-3 py-2 text-[7px] uppercase tracking-[.25em]">{product.badges?.[0] ?? "BYCHI"}</span></div>
                <div className="flex items-start justify-between gap-3 pt-5"><div><p className="text-[8px] uppercase tracking-[.3em] text-[#7A4A32]">{product.collection.replaceAll("-", " ")}</p><h3 className="mt-2 font-serif text-xl md:text-2xl">{product.name}</h3><p className="mt-2 text-[9px] uppercase tracking-[.2em] text-black/45">{product.texture.replaceAll("-", " ")}</p></div><p className="shrink-0 pt-1 text-[9px] font-medium tracking-[.08em]">{money(priceFrom(product))}</p></div>
              </Link>)}
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-[#17110D] px-5 py-28 md:px-12 md:py-40">
          <div className="absolute -right-20 top-10 h-96 w-96 rounded-full bg-[#C9A56A]/10 blur-3xl" />
          <div className="relative mx-auto max-w-[1400px] text-center"><p className="text-[8px] uppercase tracking-[.6em] text-[#C9A56A]">06 / The Atelier</p><h2 className="mt-8 font-serif text-[clamp(4rem,9vw,11rem)] leading-[.7] tracking-[-.07em]">Your hair.<br /><i className="text-[#C9A56A]">Your standard.</i></h2><p className="mx-auto mt-10 max-w-xl text-sm leading-7 text-white/55">From private consultation to installation and aftercare, the House continues beyond the purchase.</p><div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row"><Link href="/book" className="bg-[#C9A56A] px-8 py-5 text-[8px] font-semibold uppercase tracking-[.35em] text-[#17110D]">Book the Atelier</Link><Link href="/shop" className="border border-white/20 px-8 py-5 text-[8px] uppercase tracking-[.35em] text-white/70 hover:border-[#C9A56A] hover:text-[#C9A56A]">Shop ByChi</Link></div></div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-[#17110D] px-5 py-10 text-white/45 md:px-12"><div className="mx-auto flex max-w-[1800px] flex-col gap-6 md:flex-row md:items-center md:justify-between"><p className="font-serif text-2xl text-white">ByChi Strands</p><p className="text-[8px] uppercase tracking-[.35em]"> · Lagos · Worldwide</p><div className="flex gap-5 text-[8px] uppercase tracking-[.3em]"><Link href="/about">The House</Link><Link href="/contact">Contact</Link><Link href="/faqs">FAQ</Link></div></div></footer>
    </div>
  );
}
