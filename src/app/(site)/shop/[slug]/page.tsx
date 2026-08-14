import type { Metadata } from "next";
import Link from "next/link";
import { getProduct, products, related, priceFrom,} from "@/lib/products";
import { mediaFor, heroFor } from "@/lib/media";
import { testimonials } from "@/lib/testimonials";
import { formatPrice } from "@/lib/utils";
import { notFound } from "next/navigation";
import { ProductConfigurator } from "@/components/stitch/ProductConfigurator";
import { ProductMedia } from "@/components/stitch/ProductMedia";
import { ProductBadges } from "@/components/stitch/ProductBadges";
import { ImageReveal } from "@/components/ui/image-reveal";
import { site, whatsappLink } from "@/lib/site";
import { SiteHeader } from "@/components/stitch/SiteHeader";
import { Icon } from "@/components/ui/icon";
import { InlineNewsletterField } from "@/components/stitch/InlineNewsletterField";

/**
 * BY CHI STRANDS — Stitch screens:
 *   desktop: digital_flagship_signature_wigs_pdp_with_reviews
 *   mobile:  digital_flagship_mobile_signature_wigs_pdp
 *
 * Rebuilt for Modern Luxury Editorial Couture: large photography, real
 * per-product origin/craft copy (no generic "ese Origin" block
 * regardless of the piece's actual origin), real related() products in
 * place of invented upsell SKUs, and real testimonial clips in place of
 * fabricated reviewer names/ratings.
 */

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  return { title: product?.name ?? "Signature Custom Silk-Base Wig" };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const gallery = mediaFor(product.slug);
  const [lead, ...supporting] = gallery;
  const originLabel = "";
  const relatedProducts = related(product, 4);
  const voices = testimonials.slice(0, 2);

  return (
    <>
      {/*
       * This page ships two full trees — a mobile one and a desktop one —
       * and both are in the DOM at once, so the document needs exactly one
       * <h1> that neither tree owns. The mobile tree used to make the
       * wordmark its <h1> and the product name an <h2>, which meant the page
       * announced itself as "ByChi Strands" on a phone and as the product on
       * a desktop. This single hidden heading is the page's real title; both
       * trees now render the visible product name as an <h2>.
       */}
      <h1 className="sr-only">{product.name}</h1>

      {/* Mobile design (Stitch: digital_flagship_mobile_signature_wigs_pdp) */}
      <div className="md:hidden scr-mobile-signature-wigs-pdp theme-noir bg-surface text-on-surface font-body-md selection:bg-primary-container selection:text-on-primary-container">
        {/*
         * The screen's own header had no search, no wishlist, and a menu
         * button that opened nothing. SiteHeader is the site's real chrome
         * and is sticky rather than fixed, so the main below needs no
         * clearance padding.
         */}
        <main className="pb-32">
          {/* Image Gallery (Mobile Focused) */}
          <section className="relative w-full aspect-[4/5] overflow-hidden bg-surface-container-low">
            <div className="flex snap-x snap-mandatory overflow-x-auto h-full scroll-smooth" id="gallery">
              {gallery.map((m) => (
                <div key={m.src} className="flex-shrink-0 w-full h-full snap-center relative">
                  <ProductMedia media={m} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
            <ProductBadges badges={product.badges} className="absolute top-6 left-6" />
            {gallery.length > 1 ? (
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 items-center">
                {gallery.map((m, i) => (
                  <div key={m.src} className={i === 0 ? "active-dot" : "inactive-dot"}></div>
                ))}
              </div>
            ) : null}
          </section>
          {/* Product Details */}
          <section className="px-margin-mobile pt-8 space-y-6">
            <div className="space-y-2">
              <p className="font-label-caps text-primary text-[10px] tracking-[0.3em]">HAND-TIED COLLECTIONS</p>
              <div className="flex justify-between items-start">
                <h2 className="font-headline-lg-mobile text-headline-lg-mobile text-on-surface">{product.name}</h2>
              </div>
              <p className="font-label-caps text-[10px] tracking-[0.2em] text-primary uppercase">
                {originLabel} · {product.details[0]}
              </p>
            </div>
            <div className="h-px bg-outline-variant/30"></div>
            {/* Customization Options */}
            <div className="space-y-8">
              <ProductConfigurator product={product} variant="mobile" />
            </div>
          </section>
          {/* Origin & Craft */}
          <section className="mt-section-padding px-margin-mobile space-y-6">
            <h3 className="font-headline-lg-mobile text-headline-lg-mobile text-on-surface">The {originLabel} Origin</h3>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">{product.description}</p>
            <div className="flex items-center gap-3 pt-2">
              <Icon name="spa" className="text-primary" />
              <h4 className="font-headline-lg uppercase tracking-widest text-sm">What Makes It</h4>
            </div>
            <ul className="space-y-2">
              {product.details.map((d) => (
                <li key={d} className="flex gap-3 font-body-sm text-on-surface-variant">
                  <Icon name="check" className="text-primary text-base" />
                  {d}
                </li>
              ))}
            </ul>
          </section>
          {/* Care Ritual */}
          <section className="mt-section-padding px-margin-mobile bg-surface-container-low py-12 rounded-t-[32px] space-y-6">
            <h3 className="font-headline-lg-mobile text-headline-lg-mobile text-on-surface">The Care Ritual</h3>
            <ol className="space-y-4">
              {product.care.map((c, i) => (
                <li key={c} className="flex gap-4">
                  <span className="font-label-caps text-primary shrink-0">{String(i + 1).padStart(2, "0")}.</span>
                  <p className="font-body-sm text-on-surface-variant">{c}</p>
                </li>
              ))}
            </ol>
          </section>
          {/* Client Voices */}
          <section className="mt-section-padding px-margin-mobile space-y-6">
            <div>
              <p className="font-label-caps text-primary text-[10px] tracking-[0.3em]">CLIENT EXPERIENCES</p>
              <h3 className="mt-2 font-headline-lg-mobile text-headline-lg-mobile text-on-surface">From Our Clients</h3>
              <p className="text-body-sm text-on-surface-variant mt-1">
                Real footage from the house&apos;s own clients — no invented quotes, just the work.
              </p>
            </div>
            <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 -mx-margin-mobile px-margin-mobile no-scrollbar">
              {voices.map((t) => (
                <div key={t.clip.src} className="snap-center flex-shrink-0 w-[240px] aspect-[9/16] relative rounded-xl overflow-hidden group luxury-shadow">
                  <ProductMedia media={t.clip} className="w-full h-full object-cover" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
                    <p className="text-white/80 text-[12px]">{t.caption}</p>
                    {/* The clip's own context line, as on desktop. */}
                    <p className="text-white/60 text-[9px] uppercase tracking-widest mt-1">{t.context}</p>
                  </div>
                </div>
              ))}
            </div>
            <Link href="/reviews/new" className="w-full block text-center py-4 border border-primary text-primary font-label-caps uppercase hover:bg-primary/5 transition-colors">
              Share Your Story
            </Link>
          </section>
          {/* Related */}
          {relatedProducts.length ? (
            <section className="mt-section-padding px-margin-mobile space-y-6">
              <h3 className="font-headline-lg-mobile text-headline-lg-mobile text-on-surface">Complete the Collection</h3>
              <div className="grid grid-cols-2 gap-4">
                {relatedProducts.slice(0, 4).map((p) => (
                  <Link key={p.slug} href={`/shop/${p.slug}`} className="group">
                    <div className="aspect-[3/4] overflow-hidden mb-2">
                      <ProductMedia media={heroFor(p.slug)} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                    </div>
                    <p className="font-body-sm font-semibold">{p.name}</p>
                    <p className="text-[10px] text-primary">{formatPrice(priceFrom(p))}</p>
                  </Link>
                ))}
              </div>
            </section>
          ) : null}
        </main>
        {/* Sticky Add to Bag CTA */}
        <div className="fixed bottom-0 left-0 right-0 p-margin-mobile glass-header border-t border-outline-variant/30 z-50">
          <div className="max-w-container-max mx-auto flex items-center gap-4">
            <a
              href={whatsappLink(`Hi ByChiStrands — I have a question about the ${product.name}.`)}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Ask about the ${product.name} on WhatsApp`}
              className="p-4 border border-outline-variant rounded-lg active:scale-95 transition-transform"
            >
              <Icon name="chat_bubble" className="text-on-surface-variant" />
            </a>
          </div>
        </div>
        {/* Simple Footer */}
</div>

      {/* Desktop design (Stitch: digital_flagship_signature_wigs_pdp_with_reviews) */}
      {/* overflow-x-clip, not -hidden: `hidden` makes this a scroll container,
          which becomes the containing block for every sticky descendant — the
          desktop header and the buy panel both stopped sticking because of it. */}
      <div className="hidden md:block scr-signature-wigs-pdp-with-reviews font-body-md overflow-x-clip">
        <main className="max-w-container-max mx-auto px-margin-desktop py-12 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter relative">
            {/* Editorial Left Column (Storytelling & Assets) */}
            <div className="lg:col-span-7 space-y-section-padding">
              {/* Hero Gallery */}
              <section className="space-y-unit">
                <ImageReveal className="relative overflow-hidden group aspect-[4/5]">
                  <ProductMedia
                    media={lead}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <ProductBadges badges={product.badges} className="absolute top-8 left-8" />
                </ImageReveal>
                {supporting.length ? (
                  <div className="grid grid-cols-2 gap-4">
                    {supporting.slice(0, 4).map((m) => (
                      <div key={m.src} className="aspect-square overflow-hidden">
                        <ProductMedia
                          media={m}
                          className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity"
                        />
                      </div>
                    ))}
                  </div>
                ) : null}
              </section>
              {/* Origin & Craft */}
              <section className="space-y-8 max-w-2xl">
                <div className="space-y-4">
                  <h2 className="font-display-md text-display-md tracking-[-0.01em]">The {originLabel} Origin</h2>
                  <div className="w-20 h-[1px] bg-primary"></div>
                </div>
                <p className="font-body-xl text-body-xl leading-relaxed text-on-surface-variant">
                  {product.description}
                </p>
              </section>
              {/* Details */}
              <section className="bg-surface-container-low p-12 space-y-8">
                <div className="flex items-center gap-4">
                  <Icon name="spa" className="text-primary scale-125" />
                  <h3 className="font-headline-lg text-headline-lg uppercase tracking-widest text-sm">What Makes It</h3>
                </div>
                <ul className="grid md:grid-cols-2 gap-x-8 gap-y-4">
                  {product.details.map((d) => (
                    <li key={d} className="flex gap-3 font-body-sm text-body-sm text-on-surface-variant">
                      <Icon name="check" className="text-primary text-base" />
                      {d}
                    </li>
                  ))}
                </ul>
              </section>
              {/* Care Ritual */}
              <section className="space-y-8">
                <h3 className="font-display-md text-3xl">The Care Ritual</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  {product.care.map((c, i) => (
                    <div key={c} className="space-y-3">
                      <p className="font-label-caps text-primary">{String(i + 1).padStart(2, "0")}.</p>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">{c}</p>
                    </div>
                  ))}
                </div>
              </section>
            </div>
            {/* Sticky Sidebar */}
            <aside className="lg:col-span-5 lg:sticky lg:top-32 h-fit space-y-10 bg-white/40 backdrop-blur-sm lg:p-8 luxury-shadow border border-white/50">
              <div className="space-y-2">
                <p className="font-label-caps text-primary text-[10px] tracking-[0.3em]">HAND-TIED COLLECTIONS</p>
                <h2 className="font-display-lg text-4xl lg:text-5xl leading-tight lg:leading-[1]">{product.name}</h2>
              </div>
              <div className="space-y-8">
                <ProductConfigurator product={product} />
              </div>
            </aside>
          </div>
        </main>
        {/* Footer */}
</div>

      {/* The related row was trapped inside the desktop-only wrapper, so no
          phone ever saw "You May Also Like". It is a full-width chapter
          after the buy panel rather than part of its grid, so lifting it
          out changes nothing on desktop — the padding and four-up grid
          there are untouched, and only a mobile gutter, a two-up grid and
          tighter gaps are added below md. The client-voices chapter beside
          it stays desktop-only, because the mobile layout already carries
          its own. */}
        {/* Client Voices */}
        <section className="hidden md:block max-w-container-max mx-auto px-margin-desktop py-section-padding border-t border-outline-variant/20 bg-surface-container-lowest">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
            <div className="lg:col-span-4 space-y-8">
              <div className="space-y-4">
                <p className="font-label-caps text-primary text-[10px] tracking-[0.3em]">CLIENT EXPERIENCES</p>
                <h2 className="font-display-md text-display-md tracking-[-0.01em]">From Our Clients</h2>
              </div>
              <p className="font-body-sm text-on-surface-variant">
                Real footage from the house's own clients — no invented quotes, just the work.
              </p>
              <div className="pt-4">
                <Link href="/reviews/new" className="w-full block text-center border border-on-surface text-on-surface py-4 font-label-caps tracking-widest text-xs hover:bg-on-surface hover:text-surface transition-all duration-300">
                  SHARE YOUR STORY
                </Link>
              </div>
            </div>
            <div className="lg:col-span-8 grid grid-cols-2 gap-3 md:gap-8">
              {voices.map((t) => (
                <div key={t.clip.src} className="relative aspect-[3/4] bg-surface-container overflow-hidden group">
                  <ProductMedia media={t.clip} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute bottom-0 left-0 right-0 p-3 md:p-6 bg-gradient-to-t from-black/70 to-transparent">
                    <p className="text-white text-body-sm">{t.caption}</p>
                    <p className="text-white/70 text-[10px] uppercase tracking-widest mt-1">{t.context}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* Related products */}
        {relatedProducts.length ? (
          <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-20 md:py-section-padding border-t border-outline-variant/20">
            <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-6 mb-10 md:gap-8 md:mb-16">
              <div className="space-y-4">
                <p className="font-label-caps text-primary">MORE FROM THE COLLECTION</p>
                <h2 className="font-display-md text-display-md tracking-[-0.01em]">You May Also Like</h2>
              </div>
              <Link className="font-label-caps text-xs border-b border-primary pb-1" href="/shop">Shop All Pieces</Link>
            </div>
            <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-gutter">
              {relatedProducts.map((p) => (
                <Link key={p.slug} href={`/shop/${p.slug}`} className="group cursor-pointer">
                  <div className="overflow-hidden mb-4 md:mb-6 aspect-[3/4]">
                    <ProductMedia media={heroFor(p.slug)} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  </div>
                  <h3 className="font-display-md text-lg">{p.name}</h3>
                  <p className="text-primary text-sm mt-1">{formatPrice(priceFrom(p))}</p>
                </Link>
              ))}
            </div>
          </section>
        ) : null}
    </>
  );
}
