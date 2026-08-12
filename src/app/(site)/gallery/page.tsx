import type { Metadata } from "next";
import Link from "next/link";
import { testimonials } from "@/lib/testimonials";
import { ProductMedia } from "@/components/stitch/ProductMedia";
import { Icon } from "@/components/ui/icon";

/**
 * BY CHI STRANDS — Gallery. Every clip here is the house's own client
 * footage (the same set used on the homepage/PDP testimonial rails) with
 * captions that describe what's shown rather than an invented quote or a
 * generic stock-photo "story" — see the fabricated-content fixes on
 * /aftercare for why that distinction matters on this site.
 */

export const metadata: Metadata = {
  title: "Gallery",
};

const [featured, ...rest] = testimonials;

export default function GalleryPage() {
  return (
    <div className="scr-aura-stories-gallery theme-noir bg-background text-on-surface font-body-md selection:bg-primary-fixed selection:text-on-primary-fixed">
      {/* Top Navigation Shell */}
      <nav className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-xl transition-all duration-500 ease-in-out">
        <div className="flex justify-between items-center w-full px-margin-mobile md:px-margin-desktop py-6 max-w-container-max mx-auto">
          <div className="flex-1 hidden md:flex gap-8">
            <Link className="font-body-md text-body-md uppercase tracking-widest text-on-surface-variant hover:text-primary transition-colors duration-500" href="/collections">
              Collections
            </Link>
            {" "}
            <Link className="font-body-md text-body-md uppercase tracking-widest text-primary border-b border-primary/30 pb-1" href="/gallery">
              Gallery
            </Link>
            {" "}
            <Link className="font-body-md text-body-md uppercase tracking-widest text-on-surface-variant hover:text-primary transition-colors duration-500" href="/services">
              Atelier
            </Link>
          </div>
          {" "}
          <div className="flex-shrink-0">
            {/* Was an <h1>: the wordmark is chrome, not the page's title, and
                having it here gave every gallery page two h1s. */}
            <span className="flex items-center gap-2.5 font-display-md text-display-md text-primary tracking-tight leading-none">
              <span className="h-9 w-9 rounded-full bg-white overflow-hidden shrink-0 ring-1 ring-black/5">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/brand/logo-mark.jpg" alt="" className="h-full w-full object-cover scale-125" />
              </span>
              ByChi Strands
            </span>
          </div>
          {" "}
          <div className="flex-1 flex justify-end items-center gap-6">
            <Link className="hidden md:block font-body-md text-body-md uppercase tracking-widest text-on-surface-variant hover:text-primary transition-colors duration-500" href="/academy">
              Academy
            </Link>
            {" "}
            <Link href="/cart" aria-label="Your bag" className="text-primary cursor-pointer hover:scale-110 transition-transform"><Icon data-bag-trigger name="shopping_bag" /></Link>
            {" "}
            <button data-open-menu="" className="md:hidden text-primary cursor-pointer hover:scale-110 transition-transform" aria-label="Open menu">
              <Icon name="menu" />
            </button>
          </div>
        </div>
      </nav>
      <main className="pt-32">
        {/* Editorial Header */}
        <header className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mb-24 reveal-on-scroll">
          <div className="max-w-4xl">
            <p className="font-label-caps text-label-caps text-primary mb-4 tracking-[0.15em]">Client Footage</p>
            {" "}
            <h1 className="font-display-lg text-headline-lg-mobile md:text-display-lg mb-8 tracking-[-0.02em]">Gallery</h1>
            {" "}
            <p className="font-body-xl text-body-xl text-on-surface-variant leading-relaxed">
              Real installs and real client footage, filmed by the women who wore them — not staged campaign photography.
            </p>
          </div>
        </header>
        {/* Featured Clip */}
        <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mb-section-padding reveal-on-scroll">
          {/*
           * 21:9 is 167px tall at 390px wide — the caption at display size
           * with p-12 overflowed the tile and spilled over the footage
           * above it. The phone gets a portrait crop and type that fits.
           */}
          <div className="relative w-full aspect-[4/5] sm:aspect-[16/9] lg:aspect-[21/9] overflow-hidden rounded-lg group cursor-pointer bg-surface-container">
            <ProductMedia media={featured.clip} className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 hero-gradient flex flex-col justify-end p-6 md:p-12 pointer-events-none">
              <div className="max-w-2xl">
                {/*
                 * text-white, not text-surface: surface is the noir page
                 * background inside .theme-noir, so this caption was dark
                 * text laid over dark footage.
                 */}
                <h2 className="font-display-md text-2xl md:text-display-md text-white mb-3 tracking-[-0.01em]">
                  {featured.caption}
                </h2>
                <p className="font-label-caps text-gold-light uppercase tracking-[0.2em] text-xs md:text-sm">
                  {featured.context}
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* Client Clips Grid */}
        <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mb-section-padding">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {rest.map((t) => (
              <div key={t.clip.src} className="group reveal-on-scroll">
                <div className="relative aspect-[3/4] mb-6 overflow-hidden rounded-lg bg-surface-container">
                  <ProductMedia media={t.clip} className="w-full h-full object-cover" />
                </div>
                <h3 className="font-headline-lg text-xl mb-1">{t.caption}</h3>
                <p className="font-label-caps text-xs text-primary uppercase tracking-widest">{t.context}</p>
              </div>
            ))}
          </div>
        </section>
        {/* Academy teaser — real copy, mirrors the Academy page's own hero */}
        <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mb-section-padding">
          <div className="bg-surface-container-low p-12 flex flex-col md:flex-row md:items-center gap-10 rounded-lg border border-outline-variant/10">
            <div className="flex-1">
              <span className="font-label-caps text-primary mb-4 block">The Academy</span>
              <h3 className="font-display-md text-3xl md:text-4xl mb-6 leading-tight">
                The Art of the Source: Vietnam
              </h3>
              <p className="font-body-xl text-on-surface-variant max-w-xl">
                A hands-on masterclass for entrepreneurs who want to import, grade and build a
                luxury hair brand with the same standard ByChi Strands sources by.
              </p>
            </div>
            <Link
              href="/academy"
              className="shrink-0 font-label-caps text-primary flex items-center gap-2 group/link"
            >
              Explore The Academy
              <Icon name="arrow_forward" className="text-sm group-hover/link:translate-x-1 transition-transform" />
            </Link>
          </div>
        </section>
        {/* CTA Section */}
        <section className="bg-surface-container-lowest py-section-padding border-t border-outline-variant/30 reveal-on-scroll">
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop text-center">
            <div className="max-w-2xl mx-auto">
              <h2 className="font-display-md text-display-md mb-6 tracking-[-0.01em]">Share Your Install</h2>
              {" "}
              <p className="font-body-xl text-on-surface-variant mb-12">
                Wearing a ByChiStrands piece? Send us your footage and we may feature it here.
              </p>
              {" "}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <Link className="px-10 py-5 bg-on-surface text-surface font-label-caps uppercase tracking-widest text-sm hover:bg-primary transition-colors duration-500 rounded-sm" href="/reviews/new">
                  Submit Your Story
                </Link>
                {" "}
                <Link className="px-10 py-5 border border-primary text-primary font-label-caps uppercase tracking-widest text-sm hover:bg-primary-fixed transition-all duration-500 rounded-sm" href="/contact">
                  Contact The Atelier
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      {/* Footer Shell */}
      <footer className="w-full mt-section-padding bg-surface-container-lowest border-t border-outline-variant/30">
        <div className="flex flex-col md:flex-row justify-between items-center px-margin-mobile md:px-margin-desktop py-12 w-full max-w-container-max mx-auto">
          <div className="mb-8 md:mb-0">
            <h2 className="font-display-lg text-headline-lg-mobile md:text-display-lg text-on-surface leading-none tracking-[-0.02em]">
              ByChi Strands
            </h2>
            {" "}
            <p className="font-body-sm text-on-surface-variant mt-2">Luxury Vietnamese hair, crafted for confidence.</p>
          </div>
          {" "}
          <div className="flex flex-wrap justify-center gap-8 mb-8 md:mb-0">
            <Link className="font-body-sm text-on-surface-variant hover:underline decoration-primary underline-offset-4" href="/privacy">
              Privacy Policy
            </Link>
            {" "}
            <Link className="font-body-sm text-on-surface-variant hover:underline decoration-primary underline-offset-4" href="/terms">
              Terms of Service
            </Link>
            {" "}
            <Link className="font-body-sm text-on-surface-variant hover:underline decoration-primary underline-offset-4" href="/contact">
              Contact
            </Link>
            {" "}
            <Link className="font-body-sm text-on-surface-variant hover:underline decoration-primary underline-offset-4" href="/about">
              About
            </Link>
          </div>
          {" "}
          <p className="font-body-sm text-secondary-fixed-dim">
            © {new Date().getFullYear()} ByChi Strands. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
