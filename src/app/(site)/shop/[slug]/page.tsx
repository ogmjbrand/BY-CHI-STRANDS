import type { Metadata } from "next";
import Link from "next/link";
import { getProduct, priceFrom, products, type Product } from "@/lib/products";
import { mediaFor, heroFor } from "@/lib/media";
import { notFound } from "next/navigation";
import { ProductConfigurator } from "@/components/stitch/ProductConfigurator";
import { ProductMedia } from "@/components/stitch/ProductMedia";
import { ProductBadges } from "@/components/stitch/ProductBadges";
import { ProductGallery } from "@/components/stitch/ProductGallery";
import { ImageReveal } from "@/components/ui/image-reveal";
import { getProductReviews } from "@/lib/product-api";
import { formatPrice } from "@/lib/utils";
import { testimonials } from "@/lib/testimonials";
import { site, whatsappLink } from "@/lib/site";
import { SiteHeader } from "@/components/stitch/SiteHeader";
import { WishlistHeart } from "@/components/stitch/WishlistHeart";

/**
 * BY CHI STRANDS — Stitch screens:
 *   desktop: digital_flagship_signature_wigs_pdp_with_reviews
 *   mobile:  digital_flagship_mobile_signature_wigs_pdp
 *
 * Reviews, ratings, "The Vietnamese Origin" copy and the "You May Also
 * Like" rail all read from the real product/review data layer — no
 * invented reviewer names, review counts or accessory SKUs. See the
 * fabricated-data fixes on /book and /collections for why that matters
 * here specifically.
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

function relatedTo(product: Product): Product[] {
  const sameCollection = products.filter(
    (p) => p.slug !== product.slug && p.collection === product.collection
  );
  const sameCategory = products.filter(
    (p) => p.slug !== product.slug && p.category === product.category && p.collection !== product.collection
  );
  return [...sameCollection, ...sameCategory].slice(0, 4);
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
  const related = relatedTo(product);
  const clips = testimonials.slice(0, 2);

  const reviews = await getProductReviews(product.slug);
  const reviewCount = reviews.length;
  const avgRating = reviewCount
    ? reviews.reduce((sum, r) => sum + r.rating, 0) / reviewCount
    : null;

  const Stars = ({ rating, size = "text-sm" }: { rating: number; size?: string }) => (
    <div className="flex gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {[1, 2, 3, 4, 5].map((i) => (
        <span
          key={i}
          className={`material-symbols-outlined ${size} text-primary`}
          style={{ fontVariationSettings: `'FILL' ${i <= Math.round(rating) ? 1 : 0}` }}
        >
          star
        </span>
      ))}
    </div>
  );

  return (
    <>
      {/* Mobile design (Stitch: digital_flagship_mobile_signature_wigs_pdp) */}
      <div className="md:hidden scr-mobile-signature-wigs-pdp theme-noir bg-surface text-on-surface font-body-md selection:bg-primary-container selection:text-on-primary-container">
        {/* Header / Navigation */}
        <header className="fixed top-0 left-0 right-0 z-50 bg-noir/90 backdrop-blur-xl border-b border-outline-variant/30 transition-all duration-300">
          <div className="flex justify-between items-center w-full px-margin-mobile py-4 max-w-container-max mx-auto">
            <button className="p-2 -ml-2 hover:opacity-70 transition-opacity" aria-label="Open menu">
              <span className="material-symbols-outlined text-[24px]">menu</span>
            </button>
            <Link href="/" className="flex items-center gap-1.5 leading-none">
              <span className="font-display-md text-[20px] tracking-[0.08em] text-white">ByChi</span>
              <span className="font-script text-2xl text-gold-light -mt-1">Strands</span>
            </Link>
            <div className="flex items-center gap-4">
              <Link href="/cart" aria-label="Your bag" className="p-2 -mr-2 hover:opacity-70 transition-opacity">
                <span className="material-symbols-outlined text-[24px]">shopping_bag</span>
              </Link>
            </div>
          </div>
        </header>
        <main className="pt-16 pb-32">
          {/* Image Gallery (Mobile Focused) */}
          <section className="relative w-full aspect-[4/5] overflow-hidden bg-surface-container-low">
            <div className="flex snap-x snap-mandatory overflow-x-auto h-full scroll-smooth" id="gallery">
              {gallery.map((m) => (
                <div key={m.src} className="flex-shrink-0 w-full h-full snap-center relative">
                  <ProductMedia media={m} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 items-center">
              {gallery.map((m, i) => (
                <div key={m.src} className={i === 0 ? "active-dot" : "inactive-dot"}></div>
              ))}
            </div>
          </section>
          {/* Product Details */}
          <section className="px-margin-mobile pt-8 space-y-6">
            <div className="space-y-2">
              <div className="flex justify-between items-start">
                <h2 className="font-headline-lg-mobile text-headline-lg-mobile text-on-surface">{product.name}</h2>
                <WishlistHeart slug={product.slug} />
              </div>
              {avgRating !== null ? (
                <div className="flex items-center gap-2 text-secondary">
                  <Stars rating={avgRating} />
                  <span className="text-body-sm ml-1">
                    {avgRating.toFixed(1)} · {reviewCount} review{reviewCount === 1 ? "" : "s"}
                  </span>
                </div>
              ) : (
                <p className="text-body-sm text-on-surface-variant">No reviews yet</p>
              )}
            </div>
            <div className="h-px bg-outline-variant/30"></div>
            <div id="configure" className="space-y-8 scroll-mt-24">
              <ProductConfigurator product={product} variant="mobile" />
            </div>
          </section>
          {/* Client Footage */}
          {clips.length ? (
            <section className="mt-section-padding px-margin-mobile bg-surface-container-low py-12 rounded-t-[32px]">
              <div className="mb-8">
                <h3 className="font-headline-lg-mobile text-headline-lg-mobile text-on-surface">From Our Clients</h3>
                <p className="text-body-sm text-on-surface-variant mt-1">Real installs, filmed by real clients.</p>
              </div>
              <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 -mx-margin-mobile px-margin-mobile no-scrollbar">
                {clips.map((t) => (
                  <div
                    key={t.clip.src}
                    className="snap-center flex-shrink-0 w-[240px] aspect-[9/16] relative rounded-xl overflow-hidden group luxury-shadow"
                  >
                    <ProductMedia media={t.clip} className="w-full h-full object-cover" />
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
                      <p className="text-white text-body-sm font-semibold">{t.context}</p>
                      <p className="text-white/80 text-[12px]">{t.caption}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ) : null}
        </main>
        {/* Sticky Add to Bag CTA */}
        <div className="fixed bottom-0 left-0 right-0 p-margin-mobile bg-noir/95 backdrop-blur-xl border-t border-outline-variant/30 z-50">
          <div className="max-w-container-max mx-auto flex items-center gap-4">
            <a
              href={whatsappLink(`Hi ByChiStrands — I have a question about the ${product.name}.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 border border-outline-variant rounded-lg active:scale-95 transition-transform"
            >
              <span className="material-symbols-outlined text-on-surface-variant">chat_bubble</span>
            </a>
            <a
              href="#configure"
              className="flex-1 text-center bg-gold text-noir py-4 font-label-caps rounded-lg uppercase tracking-widest hover:bg-gold-light transition-all duration-400 active:scale-95"
            >
              Choose Options
            </a>
          </div>
        </div>
      </div>

      {/* Desktop design (Stitch: digital_flagship_signature_wigs_pdp_with_reviews) */}
      <div className="hidden md:block scr-signature-wigs-pdp-with-reviews theme-noir font-body-md overflow-x-hidden bg-noir text-white">
        <div className="custom-cursor hidden md:block" id="cursor"></div>
        <SiteHeader dark />
        <main className="max-w-container-max mx-auto px-margin-desktop py-12 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter relative">
            {/* Editorial Left Column (Storytelling & Assets) */}
            <div className="lg:col-span-7 space-y-section-padding">
              {/* Hero Section */}
              <section className="space-y-unit reveal">
                <ProductGallery gallery={gallery} badges={product.badges} />
              </section>
              {/* The Piece */}
              <section className="space-y-8 max-w-2xl reveal">
                <div className="space-y-4">
                  <h2 className="font-display-md text-display-md tracking-[-0.01em]">The Piece</h2>
                  <div className="w-20 h-[1px] bg-primary"></div>
                </div>
                <p className="font-body-xl text-body-xl leading-relaxed text-on-surface-variant">
                  {product.description}
                </p>
                <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-3">
                  {product.details.map((d) => (
                    <li key={d} className="flex gap-3 font-body-md text-body-md text-on-surface-variant/90">
                      <span className="material-symbols-outlined text-primary text-base mt-0.5 shrink-0">check</span>
                      {d}
                    </li>
                  ))}
                </ul>
              </section>
              {/* Care */}
              <section className="bg-surface-container-low p-12 space-y-8 reveal">
                <div className="flex items-center gap-4">
                  <span className="material-symbols-outlined text-primary scale-125">spa</span>
                  <h3 className="font-headline-lg text-headline-lg uppercase tracking-widest text-sm">Care Guide</h3>
                </div>
                <ol className="grid md:grid-cols-2 gap-8">
                  {product.care.map((step, i) => (
                    <li key={step} className="space-y-3">
                      <p className="font-label-caps text-primary">
                        {String(i + 1).padStart(2, "0")}.
                      </p>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">{step}</p>
                    </li>
                  ))}
                </ol>
              </section>
              {/* Reviews */}
              <section className="space-y-12 reveal">
                <div className="flex items-center justify-between">
                  <h3 className="font-display-md text-3xl">Client Reviews</h3>
                  {avgRating !== null ? (
                    <div className="flex items-center gap-2">
                      <Stars rating={avgRating} />
                      <span className="font-display-md text-xl">{avgRating.toFixed(1)}</span>
                    </div>
                  ) : null}
                </div>
                {reviewCount ? (
                  <div className="divide-y divide-outline-variant/30">
                    {reviews.slice(0, 5).map((r) => (
                      <div key={r.id} className="py-10 space-y-4">
                        <div className="flex justify-between items-end">
                          <div>
                            {r.verified ? (
                              <p className="font-label-caps text-primary text-[10px]">VERIFIED PURCHASE</p>
                            ) : null}
                            <h4 className="font-headline-lg text-xl mt-2">{r.title}</h4>
                          </div>
                          <Stars rating={r.rating} />
                        </div>
                        <p className="font-body-md text-on-surface-variant max-w-xl">{r.content}</p>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="py-12 text-center border border-dashed border-outline-variant/40 space-y-4">
                    <p className="font-body-md text-on-surface-variant">
                      No reviews yet — be the first to share how this piece wore for you.
                    </p>
                    <Link
                      href={`/reviews/new?product=${product.slug}`}
                      className="inline-block font-label-caps text-xs border-b border-primary text-primary pb-1"
                    >
                      Write a Review
                    </Link>
                  </div>
                )}
              </section>
            </div>
            {/* Sticky Sidebar */}
            <aside className="lg:col-span-5 lg:sticky lg:top-32 h-fit space-y-10 bg-noir-high/60 backdrop-blur-sm lg:p-8 luxury-shadow border border-white/10">
              <div className="space-y-2">
                <p className="font-label-caps text-primary text-[10px] tracking-[0.3em]">HAND-TIED COLLECTIONS</p>
                <h1 className="font-display-lg text-4xl lg:text-5xl leading-tight lg:leading-[1]">{product.name}</h1>
              </div>
              <ProductConfigurator product={product} />
            </aside>
          </div>
        </main>
        {/* Client Footage */}
        {clips.length ? (
          <section className="max-w-container-max mx-auto px-margin-desktop py-section-padding border-t border-outline-variant/20 bg-surface-container-lowest reveal">
            <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-8 mb-16">
              <div className="space-y-4">
                <p className="font-label-caps text-primary text-[10px] tracking-[0.3em]">CLIENT EXPERIENCES</p>
                <h2 className="font-display-md text-display-md tracking-[-0.01em]">From Our Clients</h2>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {clips.map((t) => (
                <div key={t.clip.src} className="relative aspect-[3/4] bg-surface-container overflow-hidden group">
                  <ProductMedia media={t.clip} className="w-full h-full object-cover" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/70 to-transparent">
                    <p className="text-white font-headline-lg text-lg">{t.context}</p>
                    <p className="text-white/80 font-body-sm">{t.caption}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ) : null}
        {/* You May Also Like */}
        {related.length ? (
          <section className="max-w-container-max mx-auto px-margin-desktop py-section-padding border-t border-outline-variant/20 reveal">
            <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-8 mb-16">
              <div className="space-y-4">
                <p className="font-label-caps text-primary">YOU MAY ALSO LIKE</p>
                <h2 className="font-display-md text-display-md tracking-[-0.01em]">More From The Atelier</h2>
              </div>
              <Link className="font-label-caps text-xs border-b border-primary pb-1" href="/shop">Shop All Pieces</Link>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-gutter">
              {related.map((p) => (
                <div key={p.slug} className="group cursor-pointer">
                  <div className="overflow-hidden mb-6 aspect-[3/4] relative bg-surface-container-low">
                    <Link href={`/shop/${p.slug}`} className="block w-full h-full">
                      <ProductMedia
                        media={heroFor(p.slug)}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </Link>
                    <ProductBadges badges={p.badges} className="absolute top-3 left-3 z-10" />
                  </div>
                  <h4 className="font-display-md text-lg">
                    <Link href={`/shop/${p.slug}`} className="hover:text-primary transition-colors">
                      {p.name}
                    </Link>
                  </h4>
                  <p className="text-primary text-sm mt-1">{formatPrice(priceFrom(p))}</p>
                </div>
              ))}
            </div>
          </section>
        ) : null}
        {/* Footer */}
        <footer className="bg-surface-container-low border-t border-outline-variant/30">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter px-margin-desktop py-section-padding max-w-container-max mx-auto">
            <div className="space-y-6">
              <div className="font-display-md text-headline-lg text-primary">ByChi <span className="font-script">Strands</span></div>
              <p className="font-body-sm text-on-surface-variant max-w-xs">
                Vietnamese human hair, hand-built onto lace in our atelier.
              </p>
              <div className="flex gap-4">
                <a
                  href={site.socials.instagram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="material-symbols-outlined cursor-pointer hover:text-primary transition-colors"
                >
                  public
                </a>
                <a
                  href={site.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="material-symbols-outlined cursor-pointer hover:text-primary transition-colors"
                >
                  chat
                </a>
                <a
                  href={site.socials.tiktok.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="material-symbols-outlined cursor-pointer hover:text-primary transition-colors"
                >
                  video_library
                </a>
              </div>
            </div>
            <div className="space-y-6">
              <h5 className="font-label-caps text-primary text-xs">The Atelier</h5>
              <ul className="space-y-4 font-body-sm text-on-surface-variant">
                <li><Link className="hover:text-primary transition-colors" href="/about">Our Story</Link></li>
                <li><Link className="hover:text-primary transition-colors" href="/gallery">Gallery</Link></li>
                <li><Link className="hover:text-primary transition-colors" href="/academy">Academy</Link></li>
              </ul>
            </div>
            <div className="space-y-6">
              <h5 className="font-label-caps text-primary text-xs">Concierge</h5>
              <ul className="space-y-4 font-body-sm text-on-surface-variant">
                <li><Link className="hover:text-primary transition-colors" href="/shipping">Shipping & Returns</Link></li>
                <li><Link className="hover:text-primary transition-colors" href="/book">Bespoke Consultations</Link></li>
                <li><Link className="hover:text-primary transition-colors" href="/aftercare">Care Guide</Link></li>
                <li><Link className="hover:text-primary transition-colors" href="/contact">Contact</Link></li>
              </ul>
            </div>
            <div className="space-y-6">
              <h5 className="font-label-caps text-primary text-xs">Reach Us</h5>
              <p className="font-body-sm text-on-surface-variant">
                Lagos & worldwide on request.
              </p>
              <a
                href={site.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block font-label-caps text-xs border-b border-primary pb-1"
              >
                Message on WhatsApp
              </a>
            </div>
          </div>
          <div className="max-w-container-max mx-auto px-margin-desktop py-unit border-t border-outline-variant/10 text-center md:text-left text-[10px] text-on-surface-variant uppercase tracking-widest">
            © {new Date().getFullYear()} ByChi Strands. All Rights Reserved.
          </div>
        </footer>
      </div>
    </>
  );
}
