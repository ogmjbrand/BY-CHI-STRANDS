import Link from "next/link";
import { testimonials } from "@/lib/testimonials";
import { ProductMedia } from "@/components/stitch/ProductMedia";
import { TestimonyRail } from "@/components/stitch/TestimonyRail";
import { ClientTestimonialsCarousel } from "@/components/stitch/ClientTestimonialsCarousel";
import { ProductServiceShowcase, showcaseItems } from "@/components/stitch/ProductServiceShowcase";
import { whatsappLink } from "@/lib/site";
import { HomeHero } from "@/components/stitch/HomeHero";

/**
 * BY CHI STRANDS — Stitch screen: digital_flagship_homepage_with_client_narratives
 * "ByChi Strands | The Gold Standard of Vietnamese Hair"
 *
 * The client-narrative grid and the mobile testimonial scroller carry the
 * house's own review footage in place of the export's stock imagery.
 */

export default function HomepageWithClientNarrativesPage() {
  return (
    <>
      {/* ── Mobile design (Stitch: digital_flagship_mobile_homepage) ── */}
      <div className="md:hidden scr-mobile-homepage bg-background text-on-background font-body-md selection:bg-primary-container selection:text-on-primary-container">
        {/* TopNavBar */}
        <header className="bg-surface/80 dark:bg-surface-container-highest/80 backdrop-blur-xl docked full-width top-0 sticky z-50 border-b border-outline-variant/30">
          <nav className="flex justify-between items-center w-full px-margin-mobile md:px-margin-desktop py-unit max-w-container-max mx-auto">
            <div className="md:hidden">
              <button className="p-2">
                <span className="material-symbols-outlined text-primary">menu</span>
              </button>
            </div>
            {" "}
            <div className="font-display-lg text-[24px] md:text-display-md font-bold tracking-tighter text-on-surface dark:text-surface-bright md:tracking-[-0.01em]">
              ByChi Strands
            </div>
            {" "}
            <div className="hidden md:flex items-center gap-gutter">
              <Link className="font-body-md text-body-sm uppercase tracking-widest text-primary font-semibold border-b border-primary pb-1" href="/shop">
                Shop
              </Link>
              {" "}
              <Link className="font-body-md text-body-sm uppercase tracking-widest text-on-surface-variant hover:text-primary transition-colors duration-300" href="/collections">
                Collections
              </Link>
              {" "}
              <Link className="font-body-md text-body-sm uppercase tracking-widest text-on-surface-variant hover:text-primary transition-colors duration-300" href="/services">
                Services
              </Link>
              {" "}
              <Link className="font-body-md text-body-sm uppercase tracking-widest text-on-surface-variant hover:text-primary transition-colors duration-300" href="/academy">
                Academy
              </Link>
              {" "}
              <Link className="font-body-md text-body-sm uppercase tracking-widest text-on-surface-variant hover:text-primary transition-colors duration-300" href="/about">
                About
              </Link>
            </div>
            {" "}
            <div className="flex items-center gap-4">
              <button className="hidden md:block bg-primary text-on-primary px-6 py-2 font-label-caps text-label-caps transition-all duration-300 hover:bg-secondary active:scale-95 tracking-[0.15em]">
                Book Appointment
              </button>
              {" "}
              <button className="p-2 relative">
                <span className="material-symbols-outlined text-primary">shopping_bag</span>
              </button>
            </div>
          </nav>
        </header>
        <main>
          <HomeHero />
          {/* The Three Pillars */}
          <section className="py-section-padding px-margin-mobile max-w-container-max mx-auto overflow-hidden">
            <div className="text-center mb-16">
              <span className="font-label-caps text-label-caps text-primary tracking-widest uppercase mb-4 block">
                Our Philosophy
              </span>
              {" "}
              <h2 className="font-display-md text-headline-lg-mobile md:text-display-md text-on-surface md:tracking-[-0.01em]">
                The Three Pillars of Excellence
              </h2>
            </div>
            {" "}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
              {/* Pillar 1 */}
              <div className="p-8 border border-outline-variant/30 flex flex-col items-center text-center group transition-all duration-500 hover:border-primary-container">
                <div className="w-16 h-16 rounded-full bg-surface-container flex items-center justify-center mb-6 transition-colors group-hover:bg-primary-container">
                  <span className="material-symbols-outlined text-primary group-hover:text-white" style={{ fontSize: "32px" }}>
                    verified_user
                  </span>
                </div>
                {" "}
                <h3 className="font-display-md text-body-xl mb-4">Ethically Sourced</h3>
                {" "}
                <p className="font-body-md text-body-sm text-on-surface-variant">
                  Traceable origin stories from the highlands of Vietnam, ensuring fair practices and premium purity.
                </p>
              </div>
              {/* Pillar 2 */}
              <div className="p-8 border border-outline-variant/30 flex flex-col items-center text-center group transition-all duration-500 hover:border-primary-container">
                <div className="w-16 h-16 rounded-full bg-surface-container flex items-center justify-center mb-6 transition-colors group-hover:bg-primary-container">
                  <span className="material-symbols-outlined text-primary group-hover:text-white" style={{ fontSize: "32px" }}>
                    person_celebrate
                  </span>
                </div>
                {" "}
                <h3 className="font-display-md text-body-xl mb-4">Single Donor</h3>
                {" "}
                <p className="font-body-md text-body-sm text-on-surface-variant">
                  Maintaining cuticle alignment and natural luster by sourcing each piece from a single individual.
                </p>
              </div>
              {/* Pillar 3 */}
              <div className="p-8 border border-outline-variant/30 flex flex-col items-center text-center group transition-all duration-500 hover:border-primary-container">
                <div className="w-16 h-16 rounded-full bg-surface-container flex items-center justify-center mb-6 transition-colors group-hover:bg-primary-container">
                  <span className="material-symbols-outlined text-primary group-hover:text-white" style={{ fontSize: "32px" }}>
                    auto_awesome
                  </span>
                </div>
                {" "}
                <h3 className="font-display-md text-body-xl mb-4">Artisan Crafted</h3>
                {" "}
                <p className="font-body-md text-body-sm text-on-surface-variant">
                  Hand-ventilated and meticulously styled by master artisans to replicate natural scalp movement.
                </p>
              </div>
            </div>
          </section>
          {/* Signature Masterpieces */}
          <section className="bg-surface-container-low py-section-padding">
            <div className="px-margin-mobile max-w-container-max mx-auto">
              <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
                <div>
                  <span className="font-label-caps text-label-caps text-primary tracking-widest uppercase mb-4 block">
                    Exquisite Selection
                  </span>
                  {" "}
                  <h2 className="font-display-md text-headline-lg-mobile md:text-display-md text-on-surface md:tracking-[-0.01em]">
                    Signature Masterpieces
                  </h2>
                </div>
                {" "}
                <Link className="font-label-caps text-label-caps text-primary hover:underline underline-offset-8 transition-all tracking-[0.15em]" href="/shop">
                  VIEW ALL PRODUCTS
                </Link>
              </div>
              {" "}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {/* Product 1 */}
                <div className="group relative overflow-hidden bg-background">
                  <div className="aspect-4/5 overflow-hidden">
                    <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" data-alt="A professional close-up of premium raw Vietnamese silk hair extensions, showcasing an incredibly smooth texture and deep obsidian shine. The lighting is editorial and high-contrast, highlighting the individual strands of hair like threads of liquid silk against a warm ivory background. The composition is artistic and minimalist, reflecting the luxury and exclusivity of the ByChi Strands brand identity." src="/stitch/img-093.jpg" />
                  </div>
                  {" "}
                  <div className="p-8">
                    <h3 className="font-display-md text-headline-lg mb-2">Raw Vietnamese Silk</h3>
                    {" "}
                    <p className="font-body-md text-on-surface-variant mb-6">Our purest grade of natural hair, untreated and full of life.</p>
                    {" "}
                    <button className="border border-primary text-primary px-6 py-3 font-label-caps text-label-caps hover:bg-primary hover:text-white transition-all tracking-[0.15em]">
                      SHOP THE TEXTURE
                    </button>
                  </div>
                </div>
                {/* Product 2 */}
                <div className="group relative overflow-hidden bg-background">
                  <div className="aspect-4/5 overflow-hidden">
                    <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" data-alt="An elegant custom luxury wig displayed on a high-end designer mannequin head. The wig features a complex, layered style with warm golden highlights blending seamlessly into deep mahogany tones. The setting is a sophisticated boutique studio with soft focus background elements of designer books and gold accents. The mood is opulent, emphasizing the artisan craftsmanship and bespoke quality of the hair artistry." src="/stitch/img-117.jpg" />
                  </div>
                  {" "}
                  <div className="p-8">
                    <h3 className="font-display-md text-headline-lg mb-2">Custom Wigs</h3>
                    {" "}
                    <p className="font-body-md text-on-surface-variant mb-6">Bespoke units tailored to your head shape and style preference.</p>
                    {" "}
                    <button className="border border-primary text-primary px-6 py-3 font-label-caps text-label-caps hover:bg-primary hover:text-white transition-all tracking-[0.15em]">
                      DESIGN YOUR OWN
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Products & Services (mobile scroller) */}
          <section className="bg-primary-container py-section-padding overflow-hidden">
            <div className="px-margin-mobile mb-8">
              <span className="font-label-caps text-label-caps text-on-surface tracking-widest uppercase mb-4 block">
                Tap to Explore
              </span>
              {" "}
              <h2 className="font-display-md text-headline-lg-mobile text-on-surface">Products & Services</h2>
            </div>
            {" "}
            <div className="flex gap-gutter overflow-x-auto no-scrollbar pb-2 -mx-margin-mobile px-margin-mobile">
              {[
                ...showcaseItems.map((item) => ({ ...item, type: "video" as const })),
                {
                  type: "image" as const,
                  video: "/stitch/img-070.jpg",
                  poster: "/stitch/img-070.jpg",
                  label: "Hair Tools",
                  href: whatsappLink("Hi ByChiStrands — I'd like to shop your professional hair tools."),
                },
              ].map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  target={item.label === "Hair Tools" ? "_blank" : undefined}
                  rel={item.label === "Hair Tools" ? "noopener noreferrer" : undefined}
                  className="min-w-[220px] group"
                >
                  <div className="aspect-square relative overflow-hidden bg-white mb-3">
                    <ProductMedia
                      media={{ type: item.type, src: item.video, poster: item.poster, alt: item.label }}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {" "}
                  <p className="font-label-caps text-label-caps tracking-widest text-on-surface">{item.label}</p>
                </Link>
              ))}
            </div>
          </section>
          {/* Aura Stories (Client Narratives) */}
          <section className="py-section-padding px-margin-mobile max-w-container-max mx-auto overflow-hidden">
            <div className="flex flex-col mb-12">
              <span className="font-label-caps text-label-caps text-primary tracking-widest uppercase mb-4 block">
                Aura Stories
              </span>
              {" "}
              <h2 className="font-display-md text-headline-lg-mobile md:text-display-md text-on-surface md:tracking-[-0.01em]">
                Echoes of Elegance
              </h2>
            </div>
            {/* Mobile Optimized Vertical/Horizontal Scroll */}
            <div className="flex md:grid md:grid-cols-4 gap-gutter overflow-x-auto no-scrollbar pb-8 -mx-margin-mobile px-margin-mobile md:mx-0 md:px-0">
              {testimonials.slice(0, 4).map((t) => (
                <div key={t.clip.src} className="min-w-70 md:min-w-0 group cursor-pointer">
                  <div className="aspect-9/16 relative overflow-hidden rounded-lg mb-4 bg-surface-container">
                    <ProductMedia
                      media={t.clip}
                      className="w-full h-full object-cover opacity-90 transition-opacity group-hover:opacity-100"
                    />
                  </div>
                  {" "}
                  <h4 className="font-body-md font-bold text-on-surface">{t.context}</h4>
                  {" "}
                  <p className="text-body-sm text-on-surface-variant">{t.caption}</p>
                </div>
              ))}
            </div>
          </section>
          {/* Testimonials */}
          <section className="py-section-padding px-margin-mobile max-w-container-max mx-auto overflow-hidden text-center">
            <span className="font-label-caps text-label-caps text-primary tracking-widest uppercase mb-4 block">
              In their words
            </span>
            {" "}
            <h2 className="font-display-md text-headline-lg-mobile md:text-display-md text-on-surface md:tracking-[-0.01em] mb-12">
              Straight From Our Clients
            </h2>
            <ClientTestimonialsCarousel />
          </section>
          {/* Newsletter Opt-in */}
          <section className="bg-primary text-on-primary py-section-padding text-center">
            <div className="px-margin-mobile max-w-2xl mx-auto">
              <h2 className="font-display-md text-headline-lg mb-4">Join the Inner Circle</h2>
              {" "}
              <p className="font-body-md mb-8 opacity-80">
                Be the first to receive exclusive drops and hair care rituals curated by our master stylists.
              </p>
              {" "}
              <form className="flex flex-col md:flex-row gap-4">
                <input className="flex-1 bg-transparent border-0 border-b border-white/40 text-white placeholder:text-white/60 focus:ring-0 focus:border-white py-4 font-body-md" placeholder="Your email address" type="email" />
                {" "}
                <button className="bg-white text-primary px-8 py-4 font-label-caps text-label-caps tracking-widest hover:bg-surface-variant transition-colors">
                  SUBSCRIBE
                </button>
              </form>
            </div>
          </section>
        </main>
        {/* Footer */}
        <footer className="bg-surface-container-low dark:bg-surface-container-highest">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter px-margin-mobile md:px-margin-desktop py-section-padding max-w-container-max mx-auto">
            <div className="flex flex-col gap-6">
              <div className="font-display-md text-headline-lg text-primary">ByChi Strands</div>
              {" "}
              <p className="font-body-md text-body-sm text-on-surface-variant">
                Defining timeless Vietnamese artistry in hair luxury. Based in the heart of fashion.
              </p>
            </div>
            {" "}
            <div className="flex flex-col gap-4">
              <h5 className="font-label-caps text-label-caps text-secondary tracking-[0.15em]">Discover</h5>
              {" "}
              <Link className="text-on-surface-variant hover:text-on-surface transition-all hover:underline decoration-primary" href="/shop">
                Shop All
              </Link>
              {" "}
              <Link className="text-on-surface-variant hover:text-on-surface transition-all hover:underline decoration-primary" href="/shop">
                Raw Collection
              </Link>
              {" "}
              <Link className="text-on-surface-variant hover:text-on-surface transition-all hover:underline decoration-primary" href="/shop">
                Signature Wigs
              </Link>
              {" "}
              <Link className="text-on-surface-variant hover:text-on-surface transition-all hover:underline decoration-primary" href="/shop">
                Gift Cards
              </Link>
            </div>
            {" "}
            <div className="flex flex-col gap-4">
              <h5 className="font-label-caps text-label-caps text-secondary tracking-[0.15em]">Social</h5>
              {" "}
              <a className="text-on-surface-variant hover:text-on-surface transition-all hover:underline decoration-primary" href="https://instagram.com/bychistrands2">
                Instagram
              </a>
              {" "}
              <a className="text-on-surface-variant hover:text-on-surface transition-all hover:underline decoration-primary" href="https://tiktok.com/@bychistrands">
                TikTok
              </a>
              {" "}
              <a className="text-on-surface-variant hover:text-on-surface transition-all hover:underline decoration-primary" href="https://wa.me/2340000000000">
                WhatsApp
              </a>
            </div>
            {" "}
            <div className="flex flex-col gap-4">
              <h5 className="font-label-caps text-label-caps text-secondary tracking-[0.15em]">Legal</h5>
              {" "}
              <Link className="text-on-surface-variant hover:text-on-surface transition-all hover:underline decoration-primary" href="/privacy">
                Privacy Policy
              </Link>
              {" "}
              <Link className="text-on-surface-variant hover:text-on-surface transition-all hover:underline decoration-primary" href="/terms">
                Terms of Service
              </Link>
              {" "}
              <Link className="text-on-surface-variant hover:text-on-surface transition-all hover:underline decoration-primary" href="/shipping">
                Shipping & Returns
              </Link>
            </div>
          </div>
          {" "}
          <div className="px-margin-mobile md:px-margin-desktop pb-unit text-center max-w-container-max mx-auto">
            <p className="text-on-surface-variant text-[12px] pb-8">© 2024 ByChi Strands. Timeless Vietnamese Artistry.</p>
          </div>
        </footer>
        {/* FAB for Appointment - Supressed on Mobile Scroll but active on interaction */}
        <div className="fixed bottom-8 right-8 z-40 transition-all duration-500 transform translate-y-0 opacity-100" id="fab">
          <button className="bg-primary text-white w-14 h-14 rounded-full shadow-2xl flex items-center justify-center hover:bg-secondary transition-all active:scale-95 group">
            <span className="material-symbols-outlined group-hover:rotate-12 transition-transform">calendar_month</span>
          </button>
        </div>
      </div>

      {/* ── Desktop design (Stitch: digital_flagship_homepage_with_client_narratives) ── */}
      <div className="hidden md:block scr-homepage-with-client-narratives bg-surface text-on-surface font-body-md overflow-x-hidden">
        {/* Header / Navigation */}
        <header className="fixed top-0 left-0 w-full z-50 bg-surface/80 nav-blur border-b border-outline-variant/30">
          <div className="flex justify-between items-center w-full px-margin-desktop py-unit max-w-container-max mx-auto h-20">
            <div className="flex items-center gap-8">
              <nav className="hidden md:flex gap-8">
                <Link className="font-body-md text-body-sm uppercase tracking-widest text-primary font-semibold border-b border-primary pb-1" href="/shop">
                  Shop
                </Link>
                {" "}
                <Link className="font-body-md text-body-sm uppercase tracking-widest text-on-surface-variant hover:text-primary transition-colors duration-300" href="/collections">
                  Collections
                </Link>
                {" "}
                <Link className="font-body-md text-body-sm uppercase tracking-widest text-on-surface-variant hover:text-primary transition-colors duration-300" href="/services">
                  Services
                </Link>
              </nav>
            </div>
            {" "}
            <div className="flex items-center">
              <img alt="ByChi Strands Logo" className="h-12 w-auto object-contain" src="/stitch/img-022.jpg" />
            </div>
            {" "}
            <div className="flex items-center gap-8">
              <nav className="hidden md:flex gap-8">
                <Link className="font-body-md text-body-sm uppercase tracking-widest text-on-surface-variant hover:text-primary transition-colors duration-300" href="/academy">
                  Academy
                </Link>
                {" "}
                <Link className="font-body-md text-body-sm uppercase tracking-widest text-on-surface-variant hover:text-primary transition-colors duration-300" href="/about">
                  About
                </Link>
              </nav>
              {" "}
              <div className="flex items-center gap-4">
                <button className="material-symbols-outlined text-on-surface-variant hover:text-primary transition-colors">
                  shopping_bag
                </button>
                {" "}
                <button className="bg-on-surface text-surface px-6 py-2 rounded-lg font-label-caps hover:bg-primary transition-all duration-300">
                  Book Appointment
                </button>
              </div>
            </div>
          </div>
        </header>
        {/* Luxury Hero */}
        <HomeHero />
        {/* Trust Indicators */}
        <section className="bg-surface py-24 border-y border-outline-variant/20">
          <div className="max-w-container-max mx-auto px-margin-desktop grid grid-cols-1 md:grid-cols-3 gap-gutter">
            <div className="text-center reveal">
              <span className="material-symbols-outlined text-primary text-4xl mb-4">verified</span>
              {" "}
              <h3 className="font-headline-lg text-headline-lg mb-2">Ethically Sourced</h3>
              {" "}
              <p className="font-body-md text-on-surface-variant max-w-xs mx-auto">
                Directly collected from rural Vietnamese villages with respect and fair trade principles.
              </p>
            </div>
            {" "}
            <div className="text-center reveal" style={{ transitionDelay: "200ms" }}>
              <span className="material-symbols-outlined text-primary text-4xl mb-4">diamond</span>
              {" "}
              <h3 className="font-headline-lg text-headline-lg mb-2">Single Donor</h3>
              {" "}
              <p className="font-body-md text-on-surface-variant max-w-xs mx-auto">
                Absolute strand integrity and cuticle alignment from a single individual source.
              </p>
            </div>
            {" "}
            <div className="text-center reveal" style={{ transitionDelay: "400ms" }}>
              <span className="material-symbols-outlined text-primary text-4xl mb-4">handyman</span>
              {" "}
              <h3 className="font-headline-lg text-headline-lg mb-2">Artisan Crafted</h3>
              {" "}
              <p className="font-body-md text-on-surface-variant max-w-xs mx-auto">
                Each piece is hand-sewn and customized by our master wig makers in our boutique studio.
              </p>
            </div>
          </div>
        </section>
        {/* Featured Collections */}
        <section className="bg-surface-container-low py-section-padding" id="collections">
          <div className="max-w-container-max mx-auto px-margin-desktop">
            <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
              <div className="reveal">
                <span className="font-label-caps text-primary tracking-widest mb-4 block">THE CURATED SELECTION</span>
                {" "}
                <h2 className="font-display-md text-display-md tracking-[-0.01em]">Signature Masterpieces</h2>
              </div>
              {" "}
              <Link className="reveal font-label-caps text-on-surface border-b border-outline hover:text-primary transition-colors pb-1" href="/shop">
                View Full Catalog
              </Link>
            </div>
            {" "}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Collection 1 */}
              <div className="group relative reveal overflow-hidden">
                <div className="aspect-4/5 overflow-hidden bg-surface-dim">
                  <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="/stitch/img-112.jpg" />
                </div>
                {" "}
                <div className="mt-8">
                  <h3 className="font-display-md text-headline-lg mb-2">Raw Vietnamese Silk</h3>
                  {" "}
                  <p className="font-body-md text-on-surface-variant mb-6 max-w-md text-balance">
                    The pinnacle of hair quality. Unprocessed, high-luster strands that maintain their integrity for years, not months.
                  </p>
                  {" "}
                  <Link className="font-label-caps text-primary tracking-widest flex items-center gap-2 group/btn" href="/shop">
                    SHOP COLLECTION
                    {" "}
                    <span className="material-symbols-outlined text-sm transition-transform group-hover/btn:translate-x-2">
                      arrow_forward
                    </span>
                  </Link>
                </div>
              </div>
              {/* Collection 2 */}
              <div className="group relative mt-0 lg:mt-32 reveal overflow-hidden" style={{ transitionDelay: "200ms" }}>
                <div className="aspect-4/5 overflow-hidden bg-surface-dim">
                  <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="/stitch/img-020.jpg" />
                </div>
                {" "}
                <div className="mt-8">
                  <h3 className="font-display-md text-headline-lg mb-2">Signature Custom Wigs</h3>
                  {" "}
                  <p className="font-body-md text-on-surface-variant mb-6 max-w-md text-balance">
                    Bespoke luxury crafted to your exact specifications. From scalp-mimicking HD lace to perfectly matched density.
                  </p>
                  {" "}
                  <Link className="font-label-caps text-primary tracking-widest flex items-center gap-2 group/btn" href="/shop">
                    EXPLORE CUSTOM
                    {" "}
                    <span className="material-symbols-outlined text-sm transition-transform group-hover/btn:translate-x-2">
                      arrow_forward
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Products & Services Showcase */}
        <section className="bg-primary-container py-section-padding overflow-hidden">
          <div className="max-w-container-max mx-auto px-margin-desktop">
            <div className="text-center mb-16 reveal">
              <span className="font-label-caps text-on-surface tracking-widest block mb-4">HOVER TO EXPLORE</span>
              {" "}
              <h2 className="font-display-md text-display-md text-on-surface tracking-[-0.01em]">Products & Services</h2>
            </div>
            {" "}
            <div className="reveal bg-white p-1.5">
              <ProductServiceShowcase />
            </div>
          </div>
        </section>
        {/* Academy Teaser */}
        <section className="relative bg-on-surface py-section-padding overflow-hidden">
          <div className="absolute inset-0 opacity-20 pointer-events-none"></div>
          {" "}
          <div className="max-w-container-max mx-auto px-margin-desktop relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
              <div className="reveal">
                <span className="text-primary-fixed-dim font-label-caps tracking-widest mb-6 block uppercase">Educational Excellence</span>
                {" "}
                <h2 className="text-surface font-display-md text-display-md mb-8 leading-tight tracking-[-0.01em]">
                  Master the Art of the Source.
                </h2>
                {" "}
                <p className="text-surface-variant font-body-xl mb-10 max-w-lg">
                  Unlock the secrets of the Vietnamese hair trade. Our Academy offers exclusive training on importation, quality assessment, and business scaling for luxury hair entrepreneurs.
                </p>
                {" "}
                <div className="flex flex-wrap gap-8 items-center">
                  <Link className="bg-primary text-on-primary-container px-10 py-4 rounded-lg font-label-caps tracking-widest hover:bg-primary-fixed-dim transition-all uppercase" href="/academy/enroll">
                    Enroll Now
                  </Link>
                  {" "}
                  <Link className="text-surface font-label-caps border-b border-primary-fixed pb-1 hover:text-primary-fixed transition-colors" href="/academy">
                    Course Overview
                  </Link>
                </div>
              </div>
              {" "}
              <div className="reveal relative flex justify-center md:justify-end" style={{ transitionDelay: "300ms" }}>
                <div className="w-full max-w-md aspect-3/4 bg-surface-container-highest/10 border border-surface-variant/20 relative p-8">
                  <div className="absolute -top-4 -left-4 w-24 h-24 border-t border-l border-primary-container"></div>
                  {" "}
                  <div className="h-full border border-surface-variant/10 flex flex-col justify-center p-10 text-center">
                    <span className="text-primary font-display-lg text-display-lg mb-4 italic leading-none tracking-[-0.02em]">
                      01
                    </span>
                    {" "}
                    <h4 className="text-surface font-headline-lg mb-4">Direct Imports</h4>
                    {" "}
                    <p className="text-surface-variant font-body-sm">
                      Learn to cut out the middlemen and build direct relationships with Vietnamese collectors.
                    </p>
                  </div>
                  {" "}
                  <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b border-r border-primary-container"></div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Signature Services */}
        <section className="bg-surface py-section-padding">
          <div className="max-w-container-max mx-auto px-margin-desktop">
            <div className="text-center mb-24 reveal">
              <span className="font-label-caps text-secondary tracking-widest block mb-4">THE ATELIER</span>
              {" "}
              <h2 className="font-display-md text-display-md tracking-[-0.01em]">Professional Services</h2>
            </div>
            {" "}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="group reveal border border-outline-variant/30 p-12 hover:border-primary-container transition-colors duration-500 bg-surface-container-lowest">
                <span className="material-symbols-outlined text-4xl text-primary mb-8" style={{ fontVariationSettings: "'FILL' 1" }}>
                  face
                </span>
                {" "}
                <h3 className="font-headline-lg text-headline-lg mb-4">Wig Installation</h3>
                {" "}
                <p className="font-body-md text-on-surface-variant mb-10">
                  Seamless bonding and styling that creates the illusion of natural growth. Expertly applied for longevity and comfort.
                </p>
                {" "}
                <Link className="font-label-caps text-on-surface hover:text-primary transition-colors flex items-center gap-3" href="/services">
                  BOOK SERVICE
                  {" "}
                  <span className="material-symbols-outlined text-sm">north_east</span>
                </Link>
              </div>
              {" "}
              <div className="group reveal border border-outline-variant/30 p-12 hover:border-primary-container transition-colors duration-500 bg-surface-container-lowest" style={{ transitionDelay: "200ms" }}>
                <span className="material-symbols-outlined text-4xl text-primary mb-8" style={{ fontVariationSettings: "'FILL' 1" }}>
                  refresh
                </span>
                {" "}
                <h3 className="font-headline-lg text-headline-lg mb-4">Hair Restoration</h3>
                {" "}
                <p className="font-body-md text-on-surface-variant mb-10">
                  Professional spa treatments for your hairpieces. Deep conditioning and cuticle sealing to revive original luster.
                </p>
                {" "}
                <Link className="font-label-caps text-on-surface hover:text-primary transition-colors flex items-center gap-3" href="/services">
                  BOOK SERVICE
                  {" "}
                  <span className="material-symbols-outlined text-sm">north_east</span>
                </Link>
              </div>
              {" "}
              <div className="group reveal border border-outline-variant/30 p-12 hover:border-primary-container transition-colors duration-500 bg-surface-container-lowest" style={{ transitionDelay: "400ms" }}>
                <span className="material-symbols-outlined text-4xl text-primary mb-8" style={{ fontVariationSettings: "'FILL' 1" }}>
                  palette
                </span>
                {" "}
                <h3 className="font-headline-lg text-headline-lg mb-4">Bespoke Coloring</h3>
                {" "}
                <p className="font-body-md text-on-surface-variant mb-10">
                  Custom lifting and toning by our color specialists. From multidimensional balayage to high-fashion tones.
                </p>
                {" "}
                <Link className="font-label-caps text-on-surface hover:text-primary transition-colors flex items-center gap-3" href="/services">
                  BOOK SERVICE
                  {" "}
                  <span className="material-symbols-outlined text-sm">north_east</span>
                </Link>
              </div>
            </div>
          </div>
        </section>
        {/* Testimonials */}
        <section className="bg-surface-container-low py-section-padding overflow-hidden">
          <div className="max-w-container-max mx-auto px-margin-desktop text-center reveal">
            <span className="font-label-caps text-primary tracking-widest mb-4 block uppercase">In their words</span>
            {" "}
            <h2 className="font-display-md text-display-md tracking-[-0.01em] mb-12">Echoes of Elegance</h2>
            <ClientTestimonialsCarousel />
          </div>
        </section>
        {/* Footer */}
        <section className="bg-surface py-section-padding overflow-hidden">
          <div className="max-w-container-max mx-auto px-margin-desktop">
            <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8 reveal">
              <div>
                <span className="font-label-caps text-primary tracking-widest mb-4 block uppercase">Client Narratives</span>
                {" "}
                <h2 className="font-display-md text-display-md tracking-[-0.01em]">Aura Stories</h2>
              </div>
              {" "}
              <p className="font-body-md text-on-surface-variant max-w-md">
                A collection of experiences from our global community of luxury hair connoisseurs.
              </p>
            </div>
            {" "}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
              {testimonials.slice(0, 3).map((t, i) => (
                <div
                  key={t.clip.src}
                  className="group relative reveal overflow-hidden aspect-3/4 bg-surface-dim"
                  style={i ? { transitionDelay: `${i * 200}ms` } : undefined}
                >
                  <ProductMedia
                    media={t.clip}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {" "}
                  <div className="absolute bottom-0 left-0 w-full p-8 bg-linear-to-t from-black/70 to-transparent pointer-events-none">
                    <cite className="not-italic font-label-caps text-surface tracking-widest">
                      {t.context}
                    </cite>
                    {" "}
                    <p className="text-surface/80 text-sm tracking-tight">{t.caption}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <TestimonyRail />
        <footer className="bg-surface-container-low dark:bg-surface-container-highest">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter px-margin-desktop py-section-padding max-w-container-max mx-auto border-t border-outline-variant/20">
            <div className="col-span-1 md:col-span-1">
              <img alt="ByChi Strands Logo" className="h-10 w-auto object-contain mb-8" src="/stitch/img-022.jpg" />
              {" "}
              <p className="font-body-md text-body-sm text-on-surface-variant mb-8 max-w-xs">
                Timeless Vietnamese artistry meet's modern luxury. Defined by authenticity and ethical sourcing.
              </p>
              {" "}
              <div className="flex gap-4">
                <a className="text-on-surface-variant hover:text-primary transition-all" href="#">
                  <span className="material-symbols-outlined">public</span>
                </a>
                {" "}
                <a className="text-on-surface-variant hover:text-primary transition-all" href="#">
                  <span className="material-symbols-outlined">share</span>
                </a>
                {" "}
                <a className="text-on-surface-variant hover:text-primary transition-all" href="#">
                  <span className="material-symbols-outlined">mail</span>
                </a>
              </div>
            </div>
            {" "}
            <div>
              <h4 className="font-label-caps text-on-surface mb-8">SHOP</h4>
              {" "}
              <ul className="space-y-4">
                <li>
                  <Link className="font-body-md text-body-sm text-on-surface-variant hover:text-on-surface hover:underline decoration-primary transition-all" href="/shop">
                    Raw Silk Bundles
                  </Link>
                </li>
                {" "}
                <li>
                  <Link className="font-body-md text-body-sm text-on-surface-variant hover:text-on-surface hover:underline decoration-primary transition-all" href="/shop">
                    HD Lace Frontals
                  </Link>
                </li>
                {" "}
                <li>
                  <Link className="font-body-md text-body-sm text-on-surface-variant hover:text-on-surface hover:underline decoration-primary transition-all" href="/shop">
                    Custom Closures
                  </Link>
                </li>
                {" "}
                <li>
                  <Link className="font-body-md text-body-sm text-on-surface-variant hover:text-on-surface hover:underline decoration-primary transition-all" href="/shop">
                    Ready-to-Wear Wigs
                  </Link>
                </li>
              </ul>
            </div>
            {" "}
            <div>
              <h4 className="font-label-caps text-on-surface mb-8">COMPANY</h4>
              {" "}
              <ul className="space-y-4">
                <li>
                  <Link className="font-body-md text-body-sm text-on-surface-variant hover:text-on-surface hover:underline decoration-primary transition-all" href="/about">
                    About Our Sourcing
                  </Link>
                </li>
                {" "}
                <li>
                  <Link className="font-body-md text-body-sm text-on-surface-variant hover:text-on-surface hover:underline decoration-primary transition-all" href="/academy">
                    Academy Training
                  </Link>
                </li>
                {" "}
                <li>
                  <Link className="font-body-md text-body-sm text-on-surface-variant hover:text-on-surface hover:underline decoration-primary transition-all" href="/services">
                    Boutique Services
                  </Link>
                </li>
                {" "}
                <li>
                  <Link className="font-body-md text-body-sm text-on-surface-variant hover:text-on-surface hover:underline decoration-primary transition-all" href="/contact">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
            {" "}
            <div>
              <h4 className="font-label-caps text-on-surface mb-8">SUPPORT</h4>
              {" "}
              <ul className="space-y-4">
                <li>
                  <Link className="font-body-md text-body-sm text-on-surface-variant hover:text-on-surface hover:underline decoration-primary transition-all" href="/shipping">
                    Shipping & Returns
                  </Link>
                </li>
                {" "}
                <li>
                  <Link className="font-body-md text-body-sm text-on-surface-variant hover:text-on-surface hover:underline decoration-primary transition-all" href="/privacy">
                    Privacy Policy
                  </Link>
                </li>
                {" "}
                <li>
                  <Link className="font-body-md text-body-sm text-on-surface-variant hover:text-on-surface hover:underline decoration-primary transition-all" href="/terms">
                    Terms of Service
                  </Link>
                </li>
                {" "}
                <li>
                  <Link className="font-body-md text-body-sm text-on-surface-variant hover:text-on-surface hover:underline decoration-primary transition-all" href="/faqs">
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          {" "}
          <div className="max-w-container-max mx-auto px-margin-desktop py-8 border-t border-outline-variant/10 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="font-body-md text-body-sm text-on-surface-variant">© 2024 ByChi Strands. Timeless Vietnamese Artistry.</p>
            {" "}
            <div className="flex gap-8">
              <a className="font-body-md text-body-sm text-on-surface-variant hover:text-on-surface transition-all" href="https://instagram.com/bychistrands2">
                Instagram
              </a>
              {" "}
              <a className="font-body-md text-body-sm text-on-surface-variant hover:text-on-surface transition-all" href="https://tiktok.com/@bychistrands">
                TikTok
              </a>
              {" "}
              <a className="font-body-md text-body-sm text-on-surface-variant hover:text-on-surface transition-all" href="https://wa.me/2340000000000">
                WhatsApp
              </a>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
