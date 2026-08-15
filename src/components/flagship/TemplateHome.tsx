"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, ArrowRight, Menu, Search, ShoppingBag } from "lucide-react";
import { useRef } from "react";
import { products, priceFrom } from "@/lib/products";

const collections = [
  { title: "Bone Straight", kicker: "THE SIGNATURE", image: "/products/IMG-20260726-WA0015.jpg", href: "/collections" },
  { title: "Pixie", kicker: "THE PIXIE EDIT", image: "/products/IMG-20260727-WA0017.jpg", href: "/collections/pixie-collection" },
  { title: "Funmi", kicker: "THE FUNMI EDIT", image: "/products/IMG-20260727-WA0042.jpg", href: "/collections/funmi-collection" },
];

const editorialImages = [
  "/products/IMG-20260726-WA0012.jpg",
  "/products/IMG-20260726-WA0019.jpg",
  "/products/IMG-20260727-WA0001.jpg",
  "/products/IMG-20260727-WA0045.jpg",
];

const standards = [
  ["01", "Exceptional material", "Selected for density, movement, softness and the way it holds a finish."],
  ["02", "Single-donor reserve", "Rare pieces are kept deliberately limited so the standard stays uncompromised."],
  ["03", "Atelier finish", "Construction, lace, density and styling are refined together in Lagos."],
  ["04", "Private aftercare", "The relationship continues after purchase through care, restoration and concierge service."],
];

const clean = (value: string) => value.replace(/ese|/gi, "").replace(/\s{2,}/g, " ").trim().replace(/^[-—·]\s*/, "");

function money(value: number | null) {
  return value === null ? "PRIVATE ENQUIRY" : `₦${value.toLocaleString("en-NG")}`;
}

export function TemplateHome() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const scale = useTransform(scrollYProgress, [0, 1], [1.12, 1]);
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);
  const fade = useTransform(scrollYProgress, [0, 0.72], [1, 0]);

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#090807] text-[#f5efe7] selection:bg-[#c9a86a] selection:text-black">
      <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 md:px-8 md:pt-6">
        <div className="mx-auto flex h-[68px] max-w-[1600px] items-center justify-between border border-white/15 bg-black/35 px-5 backdrop-blur-2xl md:px-7">
          <div className="flex items-center gap-7">
            <Link href="/shop" className="hidden items-center gap-2 text-[8px] uppercase tracking-[0.34em] text-white/70 transition hover:text-white md:flex"><Menu className="h-3.5 w-3.5" /> Menu</Link>
            <Link href="/collections" className="hidden text-[8px] uppercase tracking-[0.34em] text-white/55 hover:text-white md:block">Collections</Link>
          </div>
          <Link href="/" aria-label="ByChi Strands home" className="bychi-wordmark absolute left-1/2 -translate-x-1/2 text-[28px] text-white md:text-[34px]">ByChi Strands</Link>
          <div className="ml-auto flex items-center gap-5">
            <Link href="/shop" aria-label="Shop" className="text-white/80 hover:text-white"><Search className="h-4 w-4" /></Link>
            <Link href="/cart" aria-label="Shopping bag" className="text-white/80 hover:text-white"><ShoppingBag className="h-4 w-4" /></Link>
          </div>
        </div>
      </header>

      <main>
        <section ref={heroRef} className="relative min-h-[100svh] overflow-hidden bg-black">
          <motion.div style={{ scale, y }} className="absolute inset-0">
            <video className="h-full w-full object-cover" src="/products/VID-20260727-WA0027.mp4" poster="/media/posters/VID-20260727-WA0027.jpg" autoPlay muted loop playsInline preload="metadata" />
            <div className="absolute inset-0 bg-black/30" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_38%,transparent_0%,rgba(0,0,0,.2)_38%,rgba(0,0,0,.78)_100%)]" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/20" />
          </motion.div>
          <motion.div style={{ opacity: fade }} className="relative z-10 flex min-h-[100svh] items-end px-6 pb-10 pt-32 md:px-12 md:pb-12 lg:px-20">
            <div className="grid w-full max-w-[1600px] gap-12 md:grid-cols-[1fr_auto] md:items-end">
              <div>
                <p className="mb-7 text-[9px] uppercase tracking-[0.55em] text-[#d6b878]">THE HOUSE OF BY CHI · LAGOS</p>
                <h1 className="max-w-6xl font-serif text-[clamp(4.6rem,11vw,12rem)] leading-[.72] tracking-[-.065em]">
                  <span className="block">Hair</span>
                  <span className="block pl-[10vw] italic text-[#e7d4ac]">without</span>
                  <span className="block">compromise.</span>
                </h1>
                <p className="mt-9 max-w-xl text-sm leading-7 text-white/65 md:text-base">Considered pieces. Exceptional texture. Atelier craftsmanship. A private standard designed to be seen, felt and remembered.</p>
              </div>
              <div className="flex flex-col items-start gap-3 md:items-end">
                <Link href="/collections" className="group inline-flex items-center gap-5 bg-[#eee6d8] px-7 py-5 text-[8px] font-semibold uppercase tracking-[0.32em] text-black transition hover:bg-[#d6b878]">Enter the House <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></Link>
                <Link href="/book" className="px-7 py-4 text-[8px] uppercase tracking-[0.32em] text-white/60 hover:text-white">Private Concierge →</Link>
              </div>
            </div>
          </motion.div>
          <div className="absolute bottom-7 right-7 z-10 hidden items-center gap-3 text-[7px] uppercase tracking-[0.4em] text-white/45 md:flex">Scroll <ArrowDown className="h-3 w-3" /></div>
        </section>

        <section className="bg-[#eee7dc] px-6 py-20 text-[#11100e] md:px-12 md:py-32">
          <div className="mx-auto grid max-w-[1600px] gap-12 md:grid-cols-[.55fr_1.45fr] md:items-end">
            <div><p className="text-[8px] uppercase tracking-[0.45em] text-black/45">01 / The House</p></div>
            <div><h2 className="max-w-6xl font-serif text-[clamp(3rem,7vw,8rem)] leading-[.8] tracking-[-.055em]">Luxury is a feeling<br /><i>before it is a product.</i></h2><p className="mt-10 max-w-2xl text-sm leading-7 text-black/55 md:text-base">By Chi creates hair pieces with the restraint of a luxury house and the precision of an atelier. Nothing is added for noise. Every detail exists to elevate the woman wearing it.</p></div>
          </div>
        </section>

        <section className="bg-[#090807] px-4 py-24 md:px-8 md:py-36">
          <div className="mx-auto max-w-[1600px]">
            <div className="mb-12 flex items-end justify-between px-2 md:mb-16 md:px-4"><div><p className="mb-4 text-[8px] uppercase tracking-[0.45em] text-[#d6b878]">02 / Collections</p><h2 className="font-serif text-[clamp(3rem,7vw,7rem)] leading-[.82] tracking-[-.055em]">The House Edit.</h2></div><Link href="/collections" className="hidden text-[8px] uppercase tracking-[0.35em] text-white/50 hover:text-white md:block">View all pieces →</Link></div>
            <div className="grid gap-2 md:grid-cols-12 md:grid-rows-[420px_420px]">
              {collections.map((item, i) => (
                <Link key={item.title} href={item.href} className={`group relative overflow-hidden bg-[#151310] ${i === 0 ? "md:col-span-7 md:row-span-2" : "md:col-span-5"}`}>
                  <Image src={item.image} alt={item.title} fill sizes="(max-width: 768px) 100vw, 60vw" className="object-cover transition duration-[1.5s] group-hover:scale-[1.045]" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/5 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-7 md:p-10"><p className="mb-3 text-[7px] uppercase tracking-[0.4em] text-[#d6b878]">{item.kicker}</p><h3 className="font-serif text-[clamp(2.4rem,4vw,5rem)] leading-none tracking-[-.04em]">{item.title}</h3><span className="mt-6 inline-flex items-center gap-3 text-[7px] uppercase tracking-[0.35em] text-white/60">Discover <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" /></span></div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#171411] px-6 py-24 md:px-12 md:py-36">
          <div className="mx-auto max-w-[1600px]">
            <div className="grid gap-12 md:grid-cols-[.7fr_1.3fr]"><div><p className="text-[8px] uppercase tracking-[0.45em] text-[#d6b878]">03 / The Standard</p></div><h2 className="font-serif text-[clamp(3.2rem,7vw,7.5rem)] leading-[.8] tracking-[-.055em]">Beautiful from<br /><i>every angle.</i></h2></div>
            <div className="mt-20 divide-y divide-white/10 border-y border-white/10">
              {standards.map(([n, title, body]) => <div key={n} className="grid gap-5 py-10 md:grid-cols-[70px_1fr_1fr] md:items-center md:py-14"><span className="font-mono text-[9px] text-white/30">{n}</span><h3 className="font-serif text-3xl md:text-5xl">{title}</h3><p className="max-w-lg text-sm leading-7 text-white/45">{body}</p></div>)}
            </div>
          </div>
        </section>

        <section className="bg-[#090807] px-6 py-24 md:px-12 md:py-36">
          <div className="mx-auto grid max-w-[1600px] gap-4 md:grid-cols-12 md:grid-rows-[240px_480px_260px]">
            <div className="relative overflow-hidden md:col-span-4 md:row-span-2"><Image src={editorialImages[0]} alt="By Chi hair detail" fill className="object-cover" sizes="35vw" /></div>
            <div className="relative overflow-hidden md:col-span-5 md:row-span-1"><Image src={editorialImages[1]} alt="By Chi editorial" fill className="object-cover" sizes="40vw" /></div>
            <div className="flex items-end md:col-span-3 md:row-span-1"><div><p className="mb-5 text-[8px] uppercase tracking-[0.4em] text-[#d6b878]">04 / The Details</p><h2 className="font-serif text-5xl leading-[.85] tracking-[-.045em] md:text-6xl">Made to<br /><i>move.</i></h2></div></div>
            <div className="relative overflow-hidden md:col-span-5 md:row-span-2"><Image src={editorialImages[2]} alt="By Chi signature texture" fill className="object-cover" sizes="40vw" /></div>
            <div className="relative overflow-hidden md:col-span-3 md:row-span-1"><Image src={editorialImages[3]} alt="By Chi finish" fill className="object-cover" sizes="25vw" /></div>
          </div>
        </section>

        <section className="bg-[#eee7dc] px-6 py-24 text-[#11100e] md:px-12 md:py-36">
          <div className="mx-auto max-w-[1600px]">
            <div className="mb-14 flex items-end justify-between"><div><p className="mb-4 text-[8px] uppercase tracking-[0.45em] text-black/45">05 / The pieces</p><h2 className="font-serif text-[clamp(3rem,6vw,6.5rem)] leading-[.82] tracking-[-.05em]">Most wanted.</h2></div><Link href="/shop" className="text-[8px] uppercase tracking-[0.35em] text-black/50 hover:text-black">Shop all →</Link></div>
            <div className="grid gap-x-5 gap-y-14 sm:grid-cols-2 lg:grid-cols-4">
              {products.slice(0, 4).map((product, i) => <Link key={product.slug} href={`/shop/${product.slug}`} className="group"><div className="relative aspect-[.78] overflow-hidden bg-[#d9d0c3]"><Image src={editorialImages[i]} alt={clean(product.name)} fill sizes="25vw" className="object-cover transition duration-1000 group-hover:scale-[1.035]" /><span className="absolute left-4 top-4 text-[7px] uppercase tracking-[.32em] text-white/70">{product.badges?.[0] ?? "By Chi"}</span><span className="absolute bottom-4 left-4 right-4 bg-white/95 px-4 py-3 text-center text-[7px] font-semibold uppercase tracking-[.3em] opacity-0 transition group-hover:opacity-100">View piece</span></div><div className="pt-5"><h3 className="font-serif text-2xl leading-none">{clean(product.name)}</h3><div className="mt-3 flex justify-between text-[7px] uppercase tracking-[.25em] text-black/45"><span>{product.texture.replaceAll("-", " ")}</span><span>{money(priceFrom(product))}</span></div></div></Link>)}
            </div>
          </div>
        </section>

        <section className="relative min-h-[78svh] overflow-hidden bg-black"><Image src="/services/frontal-installation-1.jpg" alt="By Chi atelier" fill className="object-cover opacity-70" sizes="100vw" /><div className="absolute inset-0 bg-gradient-to-r from-black via-black/35 to-transparent" /><div className="relative z-10 flex min-h-[78svh] items-end px-6 pb-20 md:px-12 md:pb-24 lg:px-20"><div className="max-w-3xl"><p className="mb-6 text-[8px] uppercase tracking-[0.45em] text-[#d6b878]">06 / The Atelier</p><h2 className="font-serif text-[clamp(4rem,9vw,10rem)] leading-[.76] tracking-[-.06em]">Crafted in<br /><i>Lagos.</i></h2><p className="mt-8 max-w-xl text-sm leading-7 text-white/55 md:text-base">Installation. Custom construction. Restoration. Care. Every service is an extension of the House.</p><Link href="/services" className="mt-8 inline-flex items-center gap-4 border-b border-white/30 pb-3 text-[8px] uppercase tracking-[.35em]">Explore the atelier <ArrowRight className="h-4 w-4" /></Link></div></div></section>

        <section className="bg-[#090807] px-6 py-28 text-center md:px-12 md:py-44"><p className="mb-6 text-[8px] uppercase tracking-[.45em] text-[#d6b878]">07 / Private concierge</p><h2 className="mx-auto max-w-6xl font-serif text-[clamp(4rem,9vw,10rem)] leading-[.76] tracking-[-.06em]">Your standard<br /><i>is the standard.</i></h2><p className="mx-auto mt-9 max-w-lg text-sm leading-7 text-white/45">Need help choosing your piece? Speak privately with the House.</p><Link href="/book" className="mt-9 inline-flex items-center gap-5 bg-[#eee7dc] px-8 py-5 text-[8px] font-semibold uppercase tracking-[.35em] text-black transition hover:bg-[#d6b878]">Speak with By Chi <ArrowRight className="h-4 w-4" /></Link></section>

        <section className="border-t border-white/10 bg-[#090807] px-6 py-8 md:px-12"><div className="mx-auto flex max-w-[1600px] flex-col gap-5 md:flex-row md:items-center md:justify-between"><span className="bychi-wordmark text-2xl">ByChi Strands</span><span className="text-[7px] uppercase tracking-[.4em] text-white/35">Luxury hair · Lagos atelier · Private standard</span><Link href="/contact" className="text-[7px] uppercase tracking-[.35em] text-white/45 hover:text-white">Contact →</Link></div></section>
      </main>
    </div>
  );
}
