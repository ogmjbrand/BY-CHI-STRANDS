import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";
import { Icon } from "@/components/ui/icon";

export const metadata: Metadata = { title: "Our Craft" };

/**
 * "Our Craft" — real sourcing/service facts already established elsewhere on
 * the site (FAQs, services.ts, TrustBar), told narratively with real photos
 * instead of the old plain About page (which was a duplicate of Contact's
 * dl block with no story of its own).
 */
export default function AboutPage() {
  return (
    <div className="theme-noir bg-surface text-on-surface font-body-md overflow-x-hidden">
      {/* Opening — full-bleed photo, motto as pull-quote */}
      <header className="relative flex items-end min-h-[80vh] px-margin-mobile md:px-margin-desktop pb-16 md:pb-24">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/services/hair-importation-1.jpeg"
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10" />
        <div className="relative z-10 mx-auto w-full max-w-container-max">
          <span className="font-label-caps text-label-caps uppercase text-gold-light tracking-[0.3em] mb-6 block">
            Our Craft
          </span>
          {/* The page had no h1 at all — this line is the page's title, so
              it should be marked up as one rather than as body copy. */}
          <h1 className="font-display-lg text-headline-lg-mobile md:text-display-lg text-white max-w-3xl leading-tight">
            &ldquo;{site.motto}&rdquo;
          </h1>
        </div>
      </header>

      <main className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-section-padding space-y-section-padding">
        {/* The Source */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-center">
          <div className="md:col-span-5 md:col-start-1 order-2 md:order-1">
            <span className="font-label-caps text-label-caps uppercase text-primary tracking-[0.3em] mb-6 block">
              The Source
            </span>
            <h2 className="font-display-md text-headline-lg-mobile md:text-display-md mb-8 leading-tight">
              Raw hair, and nothing added to it.
            </h2>
            <p className="font-body-xl text-body-xl text-on-surface-variant leading-relaxed">
              {site.description} Every bundle is raw — cut from a single braid and never
              chemically altered, no acid baths, no silicone coating, no relaxing. Texture is
              set only with steam, so it behaves like hair that&apos;s still growing, not a
              manufactured product.
            </p>
          </div>
          <div className="md:col-span-6 md:col-start-7 order-1 md:order-2 aspect-[4/5] overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/products/boutique-lineup-1.jpg"
              alt="Finished units at different lengths, lined up in the atelier"
              className="w-full h-full object-cover"
            />
          </div>
        </section>

        {/* The Craft */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-center">
          <div className="md:col-span-6 aspect-[4/5] overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/services/frontal-installation-1.jpg"
              alt="Frontal installation in progress at the atelier"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="md:col-span-5 md:col-start-8">
            <span className="font-label-caps text-label-caps uppercase text-primary tracking-[0.3em] mb-6 block">
              The Craft
            </span>
            <h2 className="font-display-md text-headline-lg-mobile md:text-display-md mb-8 leading-tight">
              Every unit is hand-tied in Lagos.
            </h2>
            <p className="font-body-xl text-body-xl text-on-surface-variant leading-relaxed mb-8">
              Installation, ventilation and Hair Laundry all happen on the atelier floor, not
              outsourced. Drop a unit in for laundering and it comes back cleansed,
              deep-conditioned, steamed back to life and styled to wear — the easiest habit for
              doubling the life of a luxury piece.
            </p>
            <Link
              href="/services"
              className="font-label-caps text-primary flex items-center gap-2 group w-fit"
            >
              See the Atelier Services
              <Icon name="arrow_forward" className="text-sm group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </section>

        {/* Why Women Trust Us */}
        <section className="pt-section-padding border-t border-outline-variant/20">
          <span className="font-label-caps text-label-caps uppercase text-primary tracking-[0.3em] mb-6 block">
            Why Women Trust Us
          </span>
          <h2 className="font-display-md text-headline-lg-mobile md:text-display-md mb-14 leading-tight max-w-2xl">
            Luxury, without asking you to take our word for it.
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-gutter">
            {[
              {
                h: "Authenticity, Tagged",
                p: "Every order ships with an authentication tag — proof it's raw, not blended.",
              },
              {
                h: "Insured In Transit",
                p: "Nationwide and worldwide shipping, fully tracked and insured on every order.",
              },
              {
                h: "7-Day Exchange",
                p: "Unworn hair with intact wefts and original packaging can be exchanged within 7 days.",
              },
              {
                h: "Built To Last",
                p: "Cared for properly, raw bundles wear five years or more — wig units three to five.",
              },
            ].map((item) => (
              <div key={item.h}>
                <h3 className="font-headline-lg text-xl mb-3">{item.h}</h3>
                <p className="font-body-md text-on-surface-variant">{item.p}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Visit / Next steps */}
        <section className="pt-section-padding border-t border-outline-variant/20 grid grid-cols-1 md:grid-cols-2 gap-gutter">
          <div>
            <span className="font-label-caps text-label-caps uppercase text-primary tracking-[0.3em] mb-6 block">
              Visit The Atelier
            </span>
            <p className="font-body-xl text-on-surface mb-2">{site.address}</p>
            {site.hours.map((h) => (
              <p key={h.days} className="font-body-md text-on-surface-variant">
                {h.days}: {h.time}
              </p>
            ))}
            <Link
              href="/contact"
              className="font-label-caps text-primary flex items-center gap-2 group w-fit mt-6"
            >
              Get in Touch
              <Icon name="arrow_forward" className="text-sm group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          <div>
            <span className="font-label-caps text-label-caps uppercase text-primary tracking-[0.3em] mb-6 block">
              Learn The Craft
            </span>
            <p className="font-body-xl text-on-surface-variant mb-6 max-w-md">
              We also train entrepreneurs to import, grade and build a luxury hair brand at the
              ByChiStrands Academy.
            </p>
            <Link
              href="/academy"
              className="font-label-caps text-primary flex items-center gap-2 group w-fit"
            >
              Explore The Academy
              <Icon name="arrow_forward" className="text-sm group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
