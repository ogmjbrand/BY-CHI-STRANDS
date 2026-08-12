"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, ArrowRight, Menu, Search, ShoppingBag } from "lucide-react";
import { useRef } from "react";
import { products, priceFrom } from "@/lib/products";

const GOLD = "#C8A45D";
const DARK = "#080604";
const BROWN = "#2A1710";
const BROWN2 = "#4A2A1D";
const WHITE = "#F8F5EF";

const collections = [
  { title: "Bone Straight", kicker: "THE SIGNATURE", image: "/products/IMG-20260726-WA0015.jpg", href: "/collections" },
  { title: "Pixie", kicker: "THE PIXIE EDIT", image: "/products/IMG-20260727-WA0017.jpg", href: "/collections/pixie-collection" },
  { title: "Funmi", kicker: "THE FUNMI EDIT", image: "/products/IMG-20260727-WA0042.jpg", href: "/collections/funmi-collection" },
];

const images = [
  "/products/IMG-20260726-WA0012.jpg",
  "/products/IMG-20260726-WA0019.jpg",
  "/products/IMG-20260727-WA0001.jpg",
  "/products/IMG-20260727-WA0045.jpg",
];

const clean = (value: string) => value.replace(/Vietnamese|Vietnam/gi, "").replace(/\s{2,}/g, " ").trim().replace(/^[-—·]\s*/, "");
const money = (value: number | null) => value === null ? "PRIVATE ENQUIRY" : `₦${value.toLocaleString("en-NG")}`;

export function LuxuryHome() {
  const hero = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: hero, offset: ["start start", "end start"] });
  const scale = useTransform(scrollYProgress, [0, 1], [1.16, 1]);
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "8%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.72], [1, 0]);

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#080604] text-[#F8F5EF]" style={{ "--gold": GOLD, "--brown": BROWN } as React.CSSProperties}>
      <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 md:px-8 md:pt-7">
        <div className="mx-auto flex h-[72px] max-w-[1700px] items-center justify-between border border-[#C8A45D]/35 bg-[#080604]/70 px-5 backdrop-blur-xl md:px-8">
          <div className="flex items-center gap-7">
            <Link href="/shop" className="hidden items-center gap-2 text-[8px] uppercase tracking-[0.38em] text-[#F8F5EF]/70 hover:text-[#C8A45D] md:flex"><Menu className="h-3.5 w-3.5" /> Menu</Link>
            <Link href="/collections" className="hidden text-[8px] uppercase tracking-[0.38em] text-[#F8F5EF]/55 hover:text-[#C8A45D] md:block">Collections</Link>
          </div>
          <Link href="/" aria-label="ByChi Strands" className="absolute left-1/2 -translate-x-1/2 whitespace-nowrap text-[27px] leading-none text-[#F8F5EF] md:text-[37px]" style={{ fontFamily: "Pf4, Georgia, serif", fontWeight: 400, letterSpacing: "-0.045em" }}>ByChi Strands</Link>
          <div className="ml-auto flex items-center gap-5">
            <Link href="/shop" aria-label="Search" className="text-[#F8F5EF]/75 hover:text-[#C8A45D]"><Search className="h-4 w-4" /></Link>
            <Link href="/cart" aria-label="Shopping bag" className="text-[#F8F5EF]/75 hover:text-[#C8A45D]"><ShoppingBag className="h-4 w-4" /></Link>
          </div>
        </div>
      </header>

      <main>
        <section ref={hero} className="relative min-h-[100svh] overflow-hidden bg-black">
          <motion.div style={{ scale, y }} className="absolute inset-0">
            <video className="h-full w-full object-cover" src="/products/VID-20260727-WA0027.mp4" poster="/media/posters/VID-20260727-WA0027.jpg" autoPlay muted loop playsInline preload="metadata" />
            <div className="absolute inset-0 bg-black/35" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_42%,transparent_0%,rgba(8,6,4,.12)_35%,rgba(8,6,4,.9)_100%)]" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/25" />
          </motion.div>
          <motion.div style={{ opacity }} className="relative z-10 flex min-h-[100svh] items-end px-6 pb-12 pt-36 md:px-12 md:pb-16 lg:px-20">
            <div className="grid w-full max-w-[1700px] gap-12 md:grid-cols-12 md:items-end">
              <div className="md:col-span-9">
                <p className="mb-7 text-[8px] uppercase tracking-[0.6em] text-[#C8A45D]">THE HOUSE OF BY CHI · LAGOS</p>
                <h1 className="max-w-[1200px] font-serif text-[clamp(4.7rem,11.5vw,13rem)] leading-[.68] tracking-[-.07em]">
                  <span className="block">The art</span>
                  <span className="block pl-[9vw] italic text-[#C8A45D]">of</span>
                  <span className="block">hair.</span>
                </h1>
                <p className="mt-10 max-w-xl text-sm leading-7 text-white/65 md:text-base">Rare pieces. Impeccable finish. A luxury standard created for women who do not compromise on presence.</p>
              </div>
              <div className="md:col-span-3 md:pb-1">
                <Link href="/collections" className="group flex items-center justify-between border border-[#C8A45D] bg-[#C8A45D] px-6 py-5 text-[8px] font-semibold uppercase tracking-[0.32em] text-[#080604] transition hover:bg-[#F8F5EF] hover:border-[#F8F5EF]">Enter the House <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></Link>
                <Link href="/book" className="mt-3 block border border-white/25 px-6 py-5 text-center text-[8px] uppercase tracking-[0.32em] text-white/70 hover:border-[#C8A45D] hover:text-[#C8A45D]">Private Concierge</Link>
              </div>
            </div>
          </motion.div>
          <div className="absolute bottom-7 right-8 z-10 hidden items-center gap-3 text-[7px] uppercase tracking-[0.45em] text-white/45 md:flex">Scroll <ArrowDown className="h-3 w-3 text-[#C8A45D]" /></div>
        </section>

        <section className="bg-[#2A1710] px-6 py-24 md:px-12 md:py-40">
          <div className="mx-auto max-w-[1700px]">
            <div className="grid gap-12 md:grid-cols-12 md:items-end">
              <p className="text-[8px] uppercase tracking-[0.5em] text-[#C8A45D] md:col-span-2">01 / The House</p>
              <div className="md:col-span-10"><h2 className="max-w-[1250px] font-serif text-[clamp(3.5rem,7.7vw,9rem)] leading-[.77] tracking-[-.06em] text-[#F8F5EF]">A woman should enter<br /><i>before the room.</i></h2><p className="mt-10 max-w-2xl text-sm leading-7 text-[#F8F5EF]/55 md:text-base">By Chi is built around presence. Every piece is selected, constructed and finished to look effortless while feeling unmistakably considered.</p></div>
            </div>
            <div className="mt-20 grid grid-cols-2 gap-px border border-[#C8A45D]/25 bg-[#C8A45D]/25 md:grid-cols-4">
              {["01", "02", "03", "04"].map((n, i) => <div key={n} className="bg-[#2A1710] p-7 md:p-10"><span className="text-[8px] tracking-[0.3em] text-[#C8A45D]">{n}</span><p className="mt-16 font-serif text-2xl text-[#F8F5EF] md:text-3xl">{["Rare material", "Considered form", "Atelier finish", "Private care"][i]}</p></div>)}
            </div>
          </div>
        </section>

        <section className="bg-[#080604] px-4 py-24 md:px-8 md:py-40">
          <div className="mx-auto max-w-[1700px]">
            <div className="mb-14 flex items-end justify-between px-2 md:px-4"><div><p className="mb-4 text-[8px] uppercase tracking-[0.5em] text-[#C8A45D]">02 / The Collections</p><h2 className="font-serif text-[clamp(3.5rem,7.8vw,9rem)] leading-[.72] tracking-[-.06em]">The House<br /><i>Edit.</i></h2></div><Link href="/collections" className="hidden border-b border-[#C8A45D]/50 pb-2 text-[8px] uppercase tracking-[0.35em] text-[#C8A45D] md:block">View all collections</Link></div>
            <div className="grid gap-2 md:grid-cols-12 md:grid-rows-[330px_330px_330px]">
              {collections.map((item, i) => <Link key={item.title} href={item.href} className={`group relative overflow-hidden border border-[#C8A45D]/10 ${i === 0 ? "md:col-span-7 md:row-span-3" : i === 1 ? "md:col-span-5 md:row-span-2" : "md:col-span-5 md:row-span-1"}`}><Image src={item.image} alt={item.title} fill sizes="(max-width: 768px) 100vw, 60vw" className="object-cover transition duration-[1.5s] group-hover:scale-[1.05]" /><div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-transparent" /><div className="absolute bottom-0 left-0 right-0 p-7 md:p-10"><p className="mb-3 text-[7px] uppercase tracking-[0.42em] text-[#C8A45D]">{item.kicker}</p><h3 className="font-serif text-[clamp(2.8rem,4.5vw,5.5rem)] leading-none text-white">{item.title}</h3><span className="mt-6 inline-flex items-center gap-3 text-[7px] uppercase tracking-[0.35em] text-white/65">Explore <ArrowRight className="h-3 w-3 text-[#C8A45D] transition-transform group-hover:translate-x-1" /></span></div></Link>)}
            </div>
          </div>
        </section>

        <section className="bg-[#F8F5EF] px-6 py-24 text-[#080604] md:px-12 md:py-40">
          <div className="mx-auto max-w-[1700px]">
            <div className="grid gap-10 md:grid-cols-12"><p className="text-[8px] uppercase tracking-[0.5em] text-[#7A4A32] md:col-span-2">03 / The Standard</p><h2 className="font-serif text-[clamp(3.5rem,7.5vw,9rem)] leading-[.76] tracking-[-.06em] md:col-span-10">Luxury lives<br /><i>in the details.</i></h2></div>
            <div className="mt-20 border-y border-[#2A1710]/20">
              {["Density that holds its shape.", "A finish that catches light.", "Construction you can feel.", "Service that continues after the sale."].map((title, i) => <div key={title} className="grid gap-5 border-b border-[#2A1710]/15 py-9 last:border-0 md:grid-cols-12 md:items-center md:py-12"><span className="text-[9px] tracking-[0.25em] text-[#C8A45D] md:col-span-1">0{i + 1}</span><h3 className="font-serif text-3xl md:col-span-7 md:text-5xl">{title}</h3><p className="text-sm leading-7 text-[#2A1710]/55 md:col-span-4">Every element is considered for movement, longevity, finish and the confidence it creates.</p></div>)}
            </div>
          </div>
        </section>

        <section className="bg-[#4A2A1D] px-6 py-24 md:px-12 md:py-40">
          <div className="mx-auto grid max-w-[1700px] gap-4 md:grid-cols-12 md:grid-rows-[280px_500px_280px]">
            <div className="relative overflow-hidden md:col-span-4 md:row-span-2"><Image src={images[0]} alt="By Chi hair detail" fill className="object-cover" sizes="35vw" /></div>
            <div className="relative overflow-hidden md:col-span-5"><Image src={images[1]} alt="By Chi editorial detail" fill className="object-cover" sizes="40vw" /></div>
            <div className="flex items-end p-4 md:col-span-3"><div><p className="mb-5 text-[8px] uppercase tracking-[0.5em] text-[#C8A45D]">04 / The Details</p><h2 className="font-serif text-5xl leading-[.78] tracking-[-.05em] text-[#F8F5EF] md:text-7xl">Made to<br /><i>move.</i></h2></div></div>
            <div className="relative overflow-hidden md:col-span-5 md:row-span-2"><Image src={images[2]} alt="By Chi signature" fill className="object-cover" sizes="40vw" /></div>
            <div className="relative overflow-hidden md:col-span-3"><Image src={images[3]} alt="By Chi finish" fill className="object-cover" sizes="25vw" /></div>
          </div>
        </section>

        <section className="bg-[#F8F5EF] px-6 py-24 text-[#080604] md:px-12 md:py-40">
          <div className="mx-auto max-w-[1700px]">
            <div className="mb-14 flex items-end justify-between"><div><p className="mb-4 text-[8px] uppercase tracking-[0.5em] text-[#7A4A32]">05 / The Pieces</p><h2 className="font-serif text-[clamp(3.5rem,7vw,8rem)] leading-[.75] tracking-[-.06em]">The pieces<br /><i>people remember.</i></h2></div><Link href="/shop" className="border-b border-[#C8A45D] pb-2 text-[8px] uppercase tracking-[0.35em] text-[#7A4A32]">Shop all</Link></div>
            <div className="grid gap-x-5 gap-y-14 sm:grid-cols-2 lg:grid-cols-4">
              {products.slice(0, 4).map((product, i) => <Link key={product.slug} href={`/shop/${product.slug}`} className="group"><div className="relative aspect-[.78] overflow-hidden bg-[#2A1710]"><Image src={images[i]} alt={clean(product.name)} fill sizes="25vw" className="object-cover transition duration-1000 group-hover:scale-[1.045]" /><span className="absolute left-4 top-4 text-[7px] uppercase tracking-[.3em] text-white/75">{product.badges?.[0] ?? "BY CHI"}</span><span className="absolute bottom-4 left-4 right-4 border border-[#C8A45D] bg-[#080604]/90 px-4 py-3 text-center text-[7px] font-semibold uppercase tracking-[.3em] text-[#C8A45D] opacity-0 transition group-hover:opacity-100">View piece</span></div><div className="pt-5"><h3 className="font-serif text-2xl leading-none">{clean(product.name)}</h3><div className="mt-3 flex justify-between text-[7px] uppercase tracking-[.25em] text-[#7A4A32]/70"><span>{product.texture.replaceAll("-", " ")}</span><span>{money(priceFrom(product))}</span></div></div></Link>)}
            </div>
          </div>
        </section>

        <section className="relative min-h-[85svh] overflow-hidden bg-[#080604]"><Image src="/services/frontal-installation-1.jpg" alt="By Chi atelier" fill className="object-cover opacity-60" sizes="100vw" /><div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(8,6,4,.98),rgba(8,6,4,.4),rgba(8,6,4,.1))]" /><div className="relative z-10 flex min-h-[85svh] items-end px-6 pb-20 md:px-12 md:pb-28 lg:px-20"><div className="max-w-5xl"><p className="mb-6 text-[8px] uppercase tracking-[0.5em] text-[#C8A45D]">06 / The Atelier</p><h2 className="font-serif text-[clamp(4rem,9.5vw,11rem)] leading-[.7] tracking-[-.065em] text-white">The finish<br /><i className="text-[#C8A45D]">is everything.</i></h2><p className="mt-10 max-w-xl text-sm leading-7 text-white/55 md:text-base">Construction, customization, installation and care — brought together under one standard.</p><Link href="/services" className="mt-9 inline-flex items-center gap-4 border border-[#C8A45D] px-7 py-5 text-[8px] uppercase tracking-[0.35em] text-[#C8A45D] hover:bg-[#C8A45D] hover:text-[#080604]">Enter the Atelier <ArrowRight className="h-4 w-4" /></Link></div></div></section>

        <section className="bg-[#2A1710] px-6 py-28 text-center md:px-12 md:py-44"><p className="mb-7 text-[8px] uppercase tracking-[0.55em] text-[#C8A45D]">07 / Private Concierge</p><h2 className="mx-auto max-w-[1200px] font-serif text-[clamp(4rem,8vw,10rem)] leading-[.7] tracking-[-.065em] text-white">Your standard<br /><i className="text-[#C8A45D]">is personal.</i></h2><p className="mx-auto mt-10 max-w-xl text-sm leading-7 text-white/55">Tell us what you are looking for. The House will help you find the right piece, finish and service.</p><Link href="/book" className="mt-9 inline-flex items-center gap-5 bg-[#C8A45D] px-8 py-5 text-[8px] font-semibold uppercase tracking-[0.35em] text-[#080604] hover:bg-[#F8F5EF]">Speak with By Chi <ArrowRight className="h-4 w-4" /></Link></section>
      </main>

      <footer className="border-t border-[#C8A45D]/30 bg-[#080604] px-6 py-14 md:px-12"><div className="mx-auto flex max-w-[1700px] flex-col gap-10 md:flex-row md:items-end md:justify-between"><div><Link href="/" className="text-5xl leading-none text-[#F8F5EF]" style={{ fontFamily: "Pf4, Georgia, serif", letterSpacing: "-0.05em" }}>ByChi Strands</Link><p className="mt-3 text-[7px] uppercase tracking-[0.45em] text-[#C8A45D]">The House · Lagos</p></div><div className="flex flex-wrap gap-x-7 gap-y-3 text-[8px] uppercase tracking-[0.28em] text-white/45"><Link href="/shop">Shop</Link><Link href="/collections">Collections</Link><Link href="/services">Atelier</Link><Link href="/academy">Academy</Link><Link href="/journal">Journal</Link><Link href="/contact">Contact</Link></div></div></footer>
    </div>
  );
}
