import type { Metadata } from "next";
import { getProduct, products } from "@/lib/products";
import { notFound } from "next/navigation";

/**
 * BY CHI STRANDS — Stitch screens:
 *   desktop: digital_flagship_signature_wigs_pdp_with_reviews
 *   mobile:  digital_flagship_mobile_signature_wigs_pdp
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
  if (!getProduct(slug)) notFound();

  return (
    <>
      {/* Mobile design (Stitch: digital_flagship_mobile_signature_wigs_pdp) */}
      <div className="md:hidden scr-mobile-signature-wigs-pdp bg-surface text-on-surface font-body-md selection:bg-primary-container selection:text-on-primary-container">
        {/* Header / Navigation */}
        <header className="fixed top-0 left-0 right-0 z-50 glass-header border-b border-outline-variant/30 transition-all duration-300">
          <div className="flex justify-between items-center w-full px-margin-mobile py-4 max-w-container-max mx-auto">
            <button className="p-2 -ml-2 hover:opacity-70 transition-opacity">
              <span className="material-symbols-outlined text-[24px]">menu</span>
            </button>
            {" "}
            <h1 className="font-display-md text-[24px] font-bold tracking-tighter text-on-surface">ByChi Strands</h1>
            {" "}
            <div className="flex items-center gap-4">
              <button className="p-2 -mr-2 hover:opacity-70 transition-opacity">
                <span className="material-symbols-outlined text-[24px]" data-icon="shopping_bag">shopping_bag</span>
              </button>
            </div>
          </div>
        </header>
        <main className="pt-16 pb-32">
          {/* Image Gallery (Mobile Focused) */}
          <section className="relative w-full aspect-[4/5] overflow-hidden bg-surface-container-low">
            <div className="flex snap-x snap-mandatory overflow-x-auto h-full scroll-smooth" id="gallery">
              <div className="flex-shrink-0 w-full h-full snap-center relative">
                <img className="w-full h-full object-cover" data-alt="A high-resolution, editorial close-up of a premium silk-base wig with natural hairline and soft, voluminous waves. The lighting is soft and golden, accentuating the realistic scalp detail and the high-shine finish of the dark hair. Luxurious minimalist background in ivory tones consistent with high-fashion beauty brands." src="/stitch/img-010.jpg" />
              </div>
              {" "}
              <div className="flex-shrink-0 w-full h-full snap-center relative">
                <img className="w-full h-full object-cover" data-alt="Side profile shot of the Signature Custom Silk-Base Wig showing the intricate lace detail and natural density flow. The hair is styled in loose, sophisticated curls. The lighting is bright and clean, typical of a luxury boutique, highlighting the craftsmanship of the wig construction." src="/stitch/img-128.jpg" />
              </div>
              {" "}
              <div className="flex-shrink-0 w-full h-full snap-center relative">
                <img className="w-full h-full object-cover" data-alt="Macro detail shot of the silk-base scalp construction, showing individual hair knots for a hyper-realistic appearance. The texture of the silk and the quality of the Vietnamese hair are clearly visible under soft, studio lighting. The color palette is composed of warm neutrals and deep blacks." src="/stitch/img-103.jpg" />
              </div>
            </div>
            {/* Gallery Indicators */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 items-center">
              <div className="active-dot"></div>
              {" "}
              <div className="inactive-dot"></div>
              {" "}
              <div className="inactive-dot"></div>
            </div>
          </section>
          {/* Product Details */}
          <section className="px-margin-mobile pt-8 space-y-6">
            <div className="space-y-2">
              <div className="flex justify-between items-start">
                <h2 className="font-headline-lg-mobile text-headline-lg-mobile text-on-surface">Signature Custom Silk-Base Wig</h2>
                {" "}
                <button className="p-2 hover:text-primary transition-colors">
                  <span className="material-symbols-outlined">favorite</span>
                </button>
              </div>
              {" "}
              <p className="font-body-md text-primary font-semibold text-xl">$1,850.00</p>
              {" "}
              <div className="flex items-center gap-1 text-secondary">
                <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>
                  star
                </span>
                {" "}
                <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>
                  star
                </span>
                {" "}
                <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>
                  star
                </span>
                {" "}
                <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>
                  star
                </span>
                {" "}
                <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>
                  star
                </span>
                {" "}
                <span className="text-body-sm ml-2">(48 Verifications)</span>
              </div>
            </div>
            {" "}
            <div className="h-px bg-outline-variant/30"></div>
            {/* Customization Options */}
            <div className="space-y-8">
              {/* Length */}
              <div className="space-y-4">
                <label className="font-label-caps text-label-caps block tracking-[0.15em]">Select Length (Inches)</label>
                {" "}
                <div className="flex flex-wrap gap-2">
                  <input defaultChecked className="hidden" id="l18" name="length" type="radio" />
                  {" "}
                  <label className="px-5 py-3 border border-outline-variant text-body-sm cursor-pointer transition-all active:scale-95" htmlFor="l18">
                    18"
                  </label>
                  {" "}
                  <input className="hidden" id="l22" name="length" type="radio" />
                  {" "}
                  <label className="px-5 py-3 border border-outline-variant text-body-sm cursor-pointer transition-all active:scale-95" htmlFor="l22">
                    22"
                  </label>
                  {" "}
                  <input className="hidden" id="l26" name="length" type="radio" />
                  {" "}
                  <label className="px-5 py-3 border border-outline-variant text-body-sm cursor-pointer transition-all active:scale-95" htmlFor="l26">
                    26"
                  </label>
                  {" "}
                  <input className="hidden" id="l30" name="length" type="radio" />
                  {" "}
                  <label className="px-5 py-3 border border-outline-variant text-body-sm cursor-pointer transition-all active:scale-95" htmlFor="l30">
                    30"
                  </label>
                </div>
              </div>
              {/* Density */}
              <div className="space-y-4">
                <label className="font-label-caps text-label-caps block tracking-[0.15em]">Density Selection</label>
                {" "}
                <div className="grid grid-cols-2 gap-3">
                  <input defaultChecked className="hidden" id="d150" name="density" type="radio" />
                  {" "}
                  <label className="flex flex-col p-4 border border-outline-variant cursor-pointer transition-all" htmlFor="d150">
                    <span className="text-body-md font-semibold">150%</span>
                    {" "}
                    <span className="text-body-sm text-on-surface-variant">Natural Chic</span>
                  </label>
                  {" "}
                  <input className="hidden" id="d180" name="density" type="radio" />
                  {" "}
                  <label className="flex flex-col p-4 border border-outline-variant cursor-pointer transition-all" htmlFor="d180">
                    <span className="text-body-md font-semibold">180%</span>
                    {" "}
                    <span className="text-body-sm text-on-surface-variant">Signature Volume</span>
                  </label>
                </div>
              </div>
              {/* Lace Type */}
              <div className="space-y-4">
                <label className="font-label-caps text-label-caps block tracking-[0.15em]">Lace Selection</label>
                {" "}
                <div className="space-y-2">
                  <input defaultChecked className="hidden" id="lace-hd" name="lace" type="radio" />
                  {" "}
                  <label className="flex items-center justify-between p-4 border border-outline-variant cursor-pointer transition-all" htmlFor="lace-hd">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary"></div>
                      {" "}
                      <span className="text-body-md">Invisible HD Lace</span>
                    </div>
                    {" "}
                    <span className="text-body-sm text-primary">Included</span>
                  </label>
                  {" "}
                  <input className="hidden" id="lace-film" name="lace" type="radio" />
                  {" "}
                  <label className="flex items-center justify-between p-4 border border-outline-variant cursor-pointer transition-all" htmlFor="lace-film">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-outline-variant"></div>
                      {" "}
                      <span className="text-body-md">Film Grade Lace</span>
                    </div>
                    {" "}
                    <span className="text-body-sm text-on-surface-variant">+$150</span>
                  </label>
                </div>
              </div>
            </div>
          </section>
          {/* Silk Verifications Section */}
          <section className="mt-section-padding px-margin-mobile bg-surface-container-low py-12 rounded-t-[32px]">
            <div className="flex justify-between items-end mb-8">
              <div>
                <h3 className="font-headline-lg-mobile text-headline-lg-mobile text-on-surface">Silk Verifications</h3>
                {" "}
                <p className="text-body-sm text-on-surface-variant mt-1">Real clients, real results.</p>
              </div>
              {" "}
              <div className="text-right">
                <span className="text-display-md text-primary block leading-none tracking-[-0.01em]">4.9</span>
                {" "}
                <span className="font-label-caps text-[10px]">AVG RATING</span>
              </div>
            </div>
            {/* Video Testimonials Carousel */}
            <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 -mx-margin-mobile px-margin-mobile no-scrollbar">
              {/* Video Item 1 */}
              <div className="snap-center flex-shrink-0 w-[240px] aspect-[9/16] relative rounded-xl overflow-hidden group luxury-shadow">
                <img className="w-full h-full object-cover" data-alt="A vertical smartphone video still of a satisfied customer showcasing her ByChi Strands wig. She is smiling and running her fingers through the long, glossy hair in a bright outdoor setting. The video overlay includes a play button icon and the client's handle." src="/stitch/img-027.jpg" />
                {" "}
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30">
                    <span className="material-symbols-outlined text-white text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                      play_arrow
                    </span>
                  </div>
                </div>
                {" "}
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
                  <p className="text-white text-body-sm font-semibold">Sarah M.</p>
                  {" "}
                  <p className="text-white/80 text-[12px]">"The most natural hairline I've ever owned."</p>
                </div>
              </div>
              {/* Video Item 2 */}
              <div className="snap-center flex-shrink-0 w-[240px] aspect-[9/16] relative rounded-xl overflow-hidden group luxury-shadow">
                <img className="w-full h-full object-cover" data-alt="Client testimonial video frame showing a close-up profile view of the silk-base wig installation on a woman with warm skin tones. The hair is deep brown and falls elegantly over her shoulder. Soft indoor lighting highlights the realistic scalp." src="/stitch/img-130.jpg" />
                {" "}
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30">
                    <span className="material-symbols-outlined text-white text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                      play_arrow
                    </span>
                  </div>
                </div>
                {" "}
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
                  <p className="text-white text-body-sm font-semibold">Elena K.</p>
                  {" "}
                  <p className="text-white/80 text-[12px]">"Perfect density, feels so lightweight."</p>
                </div>
              </div>
            </div>
            {" "}
            <button className="w-full mt-6 py-4 border border-primary text-primary font-label-caps text-center uppercase hover:bg-primary/5 transition-colors">
              View All Reviews
            </button>
          </section>
        </main>
        {/* Sticky Add to Bag CTA */}
        <div className="fixed bottom-0 left-0 right-0 p-margin-mobile glass-header border-t border-outline-variant/30 z-50">
          <div className="max-w-container-max mx-auto flex items-center gap-4">
            <button className="p-4 border border-outline-variant rounded-lg active:scale-95 transition-transform">
              <span className="material-symbols-outlined text-on-surface-variant">chat_bubble</span>
            </button>
            {" "}
            <button className="flex-1 bg-[#111111] text-white py-4 font-label-caps rounded-lg uppercase tracking-widest hover:bg-primary transition-all duration-400 active:scale-95 luxury-shadow">
              Add to Bag
            </button>
          </div>
        </div>
        {/* Simple Footer */}
        <footer className="bg-surface-container-low py-12 px-margin-mobile pb-32 text-center">
          <h2 className="font-display-md text-[24px] text-primary mb-6">ByChi Strands</h2>
          {" "}
          <div className="flex justify-center gap-6 mb-8">
            <a className="text-on-surface-variant hover:text-primary transition-colors" href="#">Instagram</a>
            {" "}
            <a className="text-on-surface-variant hover:text-primary transition-colors" href="#">TikTok</a>
          </div>
          {" "}
          <p className="text-body-sm text-on-surface-variant/70 italic">© 2024 ByChi Strands. Timeless Vietnamese Artistry.</p>
        </footer>
      </div>

      {/* Desktop design (Stitch: digital_flagship_signature_wigs_pdp_with_reviews) */}
      <div className="hidden md:block scr-signature-wigs-pdp-with-reviews font-body-md overflow-x-hidden">
        <div className="custom-cursor hidden md:block" id="cursor"></div>
        {/* TopNavBar */}
        <header className="bg-surface/80 dark:bg-surface-container-highest/80 backdrop-blur-xl font-body-md text-body-sm uppercase tracking-widest docked full-width top-0 sticky z-50 border-b border-outline-variant/30">
          <div className="flex justify-between items-center w-full px-margin-desktop py-unit max-w-container-max mx-auto h-20">
            <div className="flex items-center gap-gutter">
              <a className="font-display-lg text-display-md font-bold tracking-tighter text-on-surface dark:text-surface-bright" href="#">
                ByChi Strands
              </a>
              {" "}
              <nav className="hidden md:flex gap-8">
                <a className="text-primary font-semibold border-b border-primary pb-1" href="#">Shop</a>
                {" "}
                <a className="text-on-surface-variant hover:text-primary transition-colors duration-300" href="#">
                  Collections
                </a>
                {" "}
                <a className="text-on-surface-variant hover:text-primary transition-colors duration-300" href="#">
                  Services
                </a>
                {" "}
                <a className="text-on-surface-variant hover:text-primary transition-colors duration-300" href="#">
                  Academy
                </a>
                {" "}
                <a className="text-on-surface-variant hover:text-primary transition-colors duration-300" href="#">
                  About
                </a>
              </nav>
            </div>
            {" "}
            <div className="flex items-center gap-6">
              <button className="hidden md:block bg-on-surface text-surface px-6 py-3 font-label-caps text-xs scale-95 active:scale-100 transition-transform duration-300 hover:bg-primary transition-colors">
                Book Appointment
              </button>
              {" "}
              <div className="flex gap-4 items-center">
                <span className="material-symbols-outlined text-2xl cursor-pointer hover:text-primary transition-colors">
                  shopping_bag
                </span>
                {" "}
                <span className="material-symbols-outlined text-2xl md:hidden cursor-pointer">menu</span>
              </div>
            </div>
          </div>
        </header>
        <main className="max-w-container-max mx-auto px-margin-desktop py-12 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter relative">
            {/* Editorial Left Column (Storytelling & Assets) */}
            <div className="lg:col-span-7 space-y-section-padding">
              {/* Hero Section */}
              <section className="space-y-unit">
                <div className="relative overflow-hidden group">
                  <img className="w-full aspect-[4/5] object-cover transition-transform duration-700 group-hover:scale-105" data-alt="A high-fidelity fashion editorial photograph of a premium dark silk-base wig styled with effortless waves. The lighting is soft and cinematic, highlighting the natural luster and hand-tied scalp realism. Set against a minimalist ivory background with subtle champagne gold shadows. The composition is balanced and elegant, reflecting a luxury boutique aesthetic." src="/stitch/img-078.jpg" />
                  {" "}
                  <div className="absolute top-8 left-8">
                    <span className="bg-surface/90 backdrop-blur-md px-4 py-2 font-label-caps text-[10px] tracking-[0.2em] border border-outline-variant/30">
                      EDITOR'S CHOICE
                    </span>
                  </div>
                </div>
                {" "}
                <div className="grid grid-cols-2 gap-4">
                  <img className="w-full aspect-square object-cover opacity-90 hover:opacity-100 transition-opacity" data-alt="A macro close-up photograph of the HD invisible lace and silk-base construction of a high-end wig. The image reveals the meticulous hand-tied craftsmanship of individual hair strands, mimicking a natural scalp. The color palette is composed of warm neutral tones and ivory, showcasing the premium Vietnamese hair quality." src="/stitch/img-110.jpg" />
                  {" "}
                  <img className="w-full aspect-square object-cover opacity-90 hover:opacity-100 transition-opacity" data-alt="A detailed shot of a luxury wig being combed through with a golden wide-tooth comb. The hair reflects light with a healthy silk sheen. Soft, high-key lighting creates an atmosphere of pure luxury and hair health, emphasize the premium 'ByChi Strands' branding style." src="/stitch/img-061.jpg" />
                </div>
              </section>
              {/* Craftsmanship Section */}
              <section className="space-y-8 max-w-2xl">
                <div className="space-y-4">
                  <h2 className="font-display-md text-display-md tracking-[-0.01em]">The Vietnamese Origin</h2>
                  {" "}
                  <div className="w-20 h-[1px] bg-primary"></div>
                </div>
                {" "}
                <p className="font-body-xl text-body-xl leading-relaxed text-on-surface-variant">
                  Our Signature Custom Silk-Base Wigs are a testament to Vietnamese artistry. Sourced exclusively from the lush highlands, each strand is selected for its strength, elasticity, and innate brilliance.
                </p>
                {" "}
                <p className="font-body-md text-body-md text-on-surface-variant/80">
                  The construction process involves over 80 hours of hand-tying individual follicles onto our proprietary 'Aura-Silk' membrane. This technology provides a seamless, breathable fit that mimics the exact movement of a natural scalp, ensuring your secret is safe with us.
                </p>
                {" "}
                <div className="pt-8">
                  <blockquote className="italic font-display-md text-2xl text-primary border-l-4 border-primary pl-8 py-2">
                    "True luxury is found in the details that only the wearer can feel."
                  </blockquote>
                </div>
              </section>
              {/* Care Ritual Section */}
              <section className="bg-surface-container-low p-12 space-y-8">
                <div className="flex items-center gap-4">
                  <span className="material-symbols-outlined text-primary scale-125">spa</span>
                  {" "}
                  <h3 className="font-headline-lg text-headline-lg uppercase tracking-widest text-sm">The Care Ritual</h3>
                </div>
                {" "}
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="space-y-3">
                    <p className="font-label-caps text-primary">01. CLEANSE</p>
                    {" "}
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      Use sulfate-free cold water cleansers to maintain the cuticle's structural integrity.
                    </p>
                  </div>
                  {" "}
                  <div className="space-y-3">
                    <p className="font-label-caps text-primary">02. NOURISH</p>
                    {" "}
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      Apply silk-protein masks bi-weekly. Avoid the lace root area to preserve bond strength.
                    </p>
                  </div>
                  {" "}
                  <div className="space-y-3">
                    <p className="font-label-caps text-primary">03. RESTORE</p>
                    {" "}
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      Store on a custom cedar block or mannequin head to retain the hand-styled shape.
                    </p>
                  </div>
                </div>
              </section>
              {/* Reviews */}
              <section className="space-y-12">
                <h3 className="font-display-md text-3xl">Whispers of Satisfaction</h3>
                {" "}
                <div className="divide-y divide-outline-variant/30">
                  <div className="py-10 space-y-4">
                    <div className="flex justify-between items-end">
                      <div>
                        <p className="font-label-caps text-primary text-[10px]">VERIFIED ATELIER PURCHASE</p>
                        {" "}
                        <h4 className="font-headline-lg text-xl mt-2">The most natural hairline I've ever seen.</h4>
                      </div>
                      {" "}
                      <p className="font-body-sm text-on-surface-variant italic">— Elena V.</p>
                    </div>
                    {" "}
                    <p className="font-body-md text-on-surface-variant max-w-xl">
                      "The HD lace is truly invisible. I wore it to a gala and even under harsh photographers' flashes, the silk base looked identical to my scalp. The hair quality is unmatched."
                    </p>
                  </div>
                  {" "}
                  <div className="py-10 space-y-4">
                    <div className="flex justify-between items-end">
                      <div>
                        <p className="font-label-caps text-primary text-[10px]">VERIFIED ATELIER PURCHASE</p>
                        {" "}
                        <h4 className="font-headline-lg text-xl mt-2">Worth every single cent.</h4>
                      </div>
                      {" "}
                      <p className="font-body-sm text-on-surface-variant italic">— Sarah J.</p>
                    </div>
                    {" "}
                    <p className="font-body-md text-on-surface-variant max-w-xl">
                      "ByChi Strands has redefined my standards for hair. This is not just a wig; it's an investment piece for my wardrobe."
                    </p>
                  </div>
                </div>
              </section>
            </div>
            {/* Sticky Sidebar */}
            <aside className="lg:col-span-5 lg:sticky lg:top-32 h-fit space-y-10 bg-white/40 backdrop-blur-sm lg:p-8 luxury-shadow border border-white/50">
              <div className="space-y-2">
                <p className="font-label-caps text-primary text-[10px] tracking-[0.3em]">HAND-TIED COLLECTIONS</p>
                {" "}
                <h1 className="font-display-lg text-4xl lg:text-5xl leading-tight lg:leading-[1]">Signature Custom Silk-Base Wig</h1>
                {" "}
                <p className="font-display-md text-2xl text-primary mt-4">$1,850.00</p>
              </div>
              {" "}
              <div className="space-y-8">
                {/* Length */}
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <label className="font-label-caps text-xs">LENGTH</label>
                    {" "}
                    <span className="text-xs text-on-surface-variant underline cursor-pointer">Sizing Guide</span>
                  </div>
                  {" "}
                  <div className="flex flex-wrap gap-3">
                    <button className="border border-primary bg-primary text-white px-6 py-2 text-xs font-label-caps">
                      22"
                    </button>
                    {" "}
                    <button className="border border-outline-variant hover:border-primary px-6 py-2 text-xs font-label-caps transition-colors">
                      24"
                    </button>
                    {" "}
                    <button className="border border-outline-variant hover:border-primary px-6 py-2 text-xs font-label-caps transition-colors">
                      26"
                    </button>
                    {" "}
                    <button className="border border-outline-variant hover:border-primary px-6 py-2 text-xs font-label-caps transition-colors">
                      30"
                    </button>
                  </div>
                </div>
                {/* Density */}
                <div className="space-y-4">
                  <label className="font-label-caps text-xs">DENSITY</label>
                  {" "}
                  <div className="flex flex-wrap gap-3">
                    <button className="border border-outline-variant hover:border-primary px-6 py-2 text-xs font-label-caps transition-colors">
                      150%
                    </button>
                    {" "}
                    <button className="border border-primary bg-primary text-white px-6 py-2 text-xs font-label-caps">
                      180%
                    </button>
                    {" "}
                    <button className="border border-outline-variant hover:border-primary px-6 py-2 text-xs font-label-caps transition-colors">
                      250%
                    </button>
                  </div>
                </div>
                {/* Lace */}
                <div className="space-y-4">
                  <label className="font-label-caps text-xs">LACE TYPE</label>
                  {" "}
                  <div className="space-y-3">
                    <div className="flex items-center gap-4 border border-primary p-4 cursor-pointer group">
                      <div className="w-4 h-4 rounded-full border border-primary flex items-center justify-center">
                        <div className="w-2 h-2 rounded-full bg-primary"></div>
                      </div>
                      {" "}
                      <div>
                        <p className="font-label-caps text-xs">HD Invisible Film Lace</p>
                        {" "}
                        <p className="text-[10px] text-on-surface-variant mt-1">Maximum realism for special occasions.</p>
                      </div>
                    </div>
                    {" "}
                    <div className="flex items-center gap-4 border border-outline-variant p-4 cursor-pointer hover:border-primary transition-colors">
                      <div className="w-4 h-4 rounded-full border border-outline-variant"></div>
                      {" "}
                      <div>
                        <p className="font-label-caps text-xs">Swiss Translucent Lace</p>
                        {" "}
                        <p className="text-[10px] text-on-surface-variant mt-1">Durable & breathable for daily luxury.</p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* CTA */}
                <div className="pt-4 space-y-4">
                  <button className="w-full bg-on-surface text-surface py-5 font-label-caps tracking-widest text-sm hover:bg-primary transition-all duration-500 scale-100 active:scale-95 flex items-center justify-center gap-3">
                    ADD TO ATELIER BAG
                    {" "}
                    <span className="material-symbols-outlined text-lg">trending_flat</span>
                  </button>
                  {" "}
                  <p className="text-center text-[10px] text-on-surface-variant tracking-wider uppercase">Ships within 14 business days via DHL Express.</p>
                </div>
                {/* Upsell */}
                <div className="pt-8 border-t border-outline-variant/30 space-y-4">
                  <p className="font-label-caps text-[10px] tracking-[0.2em] text-primary">COMPLEMENTARY CARE</p>
                  {" "}
                  <div className="flex gap-4 items-center group cursor-pointer">
                    <img className="w-16 h-16 object-cover border border-outline-variant/50" data-alt="A small, elegant amber glass bottle of luxury hair oil with a gold dropper, placed on a white marble surface with soft floral shadows. The label reads 'Silk Elixir'." src="/stitch/img-040.jpg" />
                    {" "}
                    <div className="flex-1">
                      <p className="font-body-sm font-semibold">Silk Revive Elixir</p>
                      {" "}
                      <p className="text-[10px] text-on-surface-variant">+$45.00 — Highly Recommended</p>
                    </div>
                    {" "}
                    <span className="material-symbols-outlined text-outline-variant group-hover:text-primary transition-colors">
                      add_circle
                    </span>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </main>
        {/* Frequently Bought Together */}
        <section className="max-w-container-max mx-auto px-margin-desktop py-section-padding border-t border-outline-variant/20 bg-surface-container-lowest">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
            {/* Review Summary & CTA */}
            <div className="lg:col-span-4 space-y-8">
              <div className="space-y-4">
                <p className="font-label-caps text-primary text-[10px] tracking-[0.3em]">CLIENT EXPERIENCES</p>
                {" "}
                <h2 className="font-display-md text-display-md tracking-[-0.01em]">Silk Verifications</h2>
              </div>
              {" "}
              <div className="space-y-2">
                <div className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-primary fill-1">star</span>
                  {" "}
                  <span className="material-symbols-outlined text-primary fill-1">star</span>
                  {" "}
                  <span className="material-symbols-outlined text-primary fill-1">star</span>
                  {" "}
                  <span className="material-symbols-outlined text-primary fill-1">star</span>
                  {" "}
                  <span className="material-symbols-outlined text-primary fill-1">star</span>
                  {" "}
                  <span className="font-display-md text-2xl ml-2">4.9</span>
                </div>
                {" "}
                <p className="font-body-sm text-on-surface-variant">Based on 124 verified atelier purchases</p>
              </div>
              {" "}
              <div className="pt-4">
                <button className="w-full border border-on-surface text-on-surface py-4 font-label-caps tracking-widest text-xs hover:bg-on-surface hover:text-surface transition-all duration-300">
                  LEAVE A REVIEW
                </button>
              </div>
            </div>
            {/* Review Feed */}
            <div className="lg:col-span-8 space-y-12">
              {/* Video Review Item */}
              <div className="grid md:grid-cols-2 gap-8 items-start">
                <div className="relative aspect-[3/4] bg-surface-container overflow-hidden group cursor-pointer">
                  <img alt="Client video review thumbnail" className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700" src="/stitch/img-078.jpg" />
                  {" "}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 group-hover:scale-110 transition-transform">
                      <span className="material-symbols-outlined text-white text-3xl">play_arrow</span>
                    </div>
                  </div>
                  {" "}
                  <div className="absolute bottom-4 left-4">
                    <span className="bg-primary text-white px-3 py-1 text-[10px] font-label-caps">SILK VERIFIED</span>
                  </div>
                </div>
                {" "}
                <div className="space-y-4">
                  <div className="flex gap-1">
                    <span className="material-symbols-outlined text-primary text-sm fill-1">star</span>
                    {" "}
                    <span className="material-symbols-outlined text-primary text-sm fill-1">star</span>
                    {" "}
                    <span className="material-symbols-outlined text-primary text-sm fill-1">star</span>
                    {" "}
                    <span className="material-symbols-outlined text-primary text-sm fill-1">star</span>
                    {" "}
                    <span className="material-symbols-outlined text-primary text-sm fill-1">star</span>
                  </div>
                  {" "}
                  <h4 className="font-headline-lg text-xl">"The movement is indistinguishable from my own hair."</h4>
                  {" "}
                  <p className="font-body-md text-on-surface-variant">
                    I was hesitant about the investment, but seeing the 'Aura-Silk' membrane in person changed everything. It breathes perfectly even in humid climates. Truly a masterpiece of craftsmanship.
                  </p>
                  {" "}
                  <p className="font-label-caps text-xs pt-4">
                    — ISABELLA R.
                    {" "}
                    <span className="text-on-surface-variant/60 ml-2">Verified Purchase</span>
                  </p>
                </div>
              </div>
              {/* Text Review Item */}
              <div className="pt-12 border-t border-outline-variant/20 space-y-4">
                <div className="flex justify-between items-start">
                  <div className="flex gap-1">
                    <span className="material-symbols-outlined text-primary text-sm fill-1">star</span>
                    {" "}
                    <span className="material-symbols-outlined text-primary text-sm fill-1">star</span>
                    {" "}
                    <span className="material-symbols-outlined text-primary text-sm fill-1">star</span>
                    {" "}
                    <span className="material-symbols-outlined text-primary text-sm fill-1">star</span>
                    {" "}
                    <span className="material-symbols-outlined text-primary text-sm fill-1">star</span>
                  </div>
                  {" "}
                  <span className="text-[10px] font-label-caps text-on-surface-variant/60">2 WEEKS AGO</span>
                </div>
                {" "}
                <h4 className="font-headline-lg text-xl">Unparalleled Realism</h4>
                {" "}
                <p className="font-body-md text-on-surface-variant">
                  The HD lace disappears against my skin. I've tried many luxury brands, but ByChi Strands is in a league of its own. The hair quality remains silky even after multiple washes.
                </p>
                {" "}
                <p className="font-label-caps text-xs">— SOPHIA M.</p>
              </div>
            </div>
          </div>
        </section>
        <section className="max-w-container-max mx-auto px-margin-desktop py-section-padding border-t border-outline-variant/20">
          <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-8 mb-16">
            <div className="space-y-4">
              <p className="font-label-caps text-primary">COMPLETE THE AURA</p>
              {" "}
              <h2 className="font-display-md text-display-md tracking-[-0.01em]">The Boutique Selection</h2>
            </div>
            {" "}
            <a className="font-label-caps text-xs border-b border-primary pb-1" href="#">Shop All Accessories</a>
          </div>
          {" "}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-gutter">
            <div className="group cursor-pointer">
              <div className="overflow-hidden mb-6 aspect-[3/4]">
                <img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" data-alt="A luxurious silk storage bag in a deep champagne gold color with black velvet drawstrings and the 'ByChi Strands' logo embroidered in subtle gold thread." src="/stitch/img-120.jpg" />
              </div>
              {" "}
              <h4 className="font-display-md text-lg">Velvet Storage Case</h4>
              {" "}
              <p className="text-primary text-sm mt-1">$85.00</p>
            </div>
            {" "}
            <div className="group cursor-pointer">
              <div className="overflow-hidden mb-6 aspect-[3/4]">
                <img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" data-alt="A professional-grade mannequin styling head made of sustainable cork, covered in ivory linen, mounted on a sleek black metal tripod stand." src="/stitch/img-016.jpg" />
              </div>
              {" "}
              <h4 className="font-display-md text-lg">Curated Styling Block</h4>
              {" "}
              <p className="text-primary text-sm mt-1">$120.00</p>
            </div>
            {" "}
            <div className="group cursor-pointer">
              <div className="overflow-hidden mb-6 aspect-[3/4]">
                <img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" data-alt="A wide-tooth comb made of genuine sandalwood with gold plated tips, displayed next to a bottle of hair spray on a vanity table." src="/stitch/img-070.jpg" />
              </div>
              {" "}
              <h4 className="font-display-md text-lg">Sandalwood Detangler</h4>
              {" "}
              <p className="text-primary text-sm mt-1">$35.00</p>
            </div>
            {" "}
            <div className="group cursor-pointer">
              <div className="overflow-hidden mb-6 aspect-[3/4]">
                <img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" data-alt="A collection of three silk hair scrunchies in cream, bronze, and black colors, tied with a delicate silk ribbon." src="/stitch/img-057.jpg" />
              </div>
              {" "}
              <h4 className="font-display-md text-lg">Silk Tie Trio</h4>
              {" "}
              <p className="text-primary text-sm mt-1">$45.00</p>
            </div>
          </div>
        </section>
        {/* Footer */}
        <footer className="bg-surface-container-low dark:bg-surface-container-highest border-t border-outline-variant/30">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter px-margin-desktop py-section-padding max-w-container-max mx-auto">
            <div className="space-y-6">
              <div className="font-display-md text-headline-lg text-primary">ByChi Strands</div>
              {" "}
              <p className="font-body-sm text-on-surface-variant max-w-xs">
                Elevating human beauty through timeless Vietnamese artistry and meticulous hand-tied craftsmanship.
              </p>
              {" "}
              <div className="flex gap-4">
                <span className="material-symbols-outlined cursor-pointer hover:text-primary transition-colors">
                  public
                </span>
                {" "}
                <span className="material-symbols-outlined cursor-pointer hover:text-primary transition-colors">
                  chat
                </span>
                {" "}
                <span className="material-symbols-outlined cursor-pointer hover:text-primary transition-colors">
                  video_library
                </span>
              </div>
            </div>
            {" "}
            <div className="space-y-6">
              <h5 className="font-label-caps text-primary text-xs">The Atelier</h5>
              {" "}
              <ul className="space-y-4 font-body-sm text-on-surface-variant">
                <li>
                  <a className="hover:text-primary transition-colors" href="#">Our Story</a>
                </li>
                {" "}
                <li>
                  <a className="hover:text-primary transition-colors" href="#">Craftsmanship</a>
                </li>
                {" "}
                <li>
                  <a className="hover:text-primary transition-colors" href="#">The Sourcing</a>
                </li>
                {" "}
                <li>
                  <a className="hover:text-primary transition-colors" href="#">Academy</a>
                </li>
              </ul>
            </div>
            {" "}
            <div className="space-y-6">
              <h5 className="font-label-caps text-primary text-xs">Concierge</h5>
              {" "}
              <ul className="space-y-4 font-body-sm text-on-surface-variant">
                <li>
                  <a className="hover:text-primary transition-colors" href="#">Shipping & Returns</a>
                </li>
                {" "}
                <li>
                  <a className="hover:text-primary transition-colors" href="#">Bespoke Consultations</a>
                </li>
                {" "}
                <li>
                  <a className="hover:text-primary transition-colors" href="#">Care Guide</a>
                </li>
                {" "}
                <li>
                  <a className="hover:text-primary transition-colors" href="#">Wholesale Portfolio</a>
                </li>
              </ul>
            </div>
            {" "}
            <div className="space-y-6">
              <h5 className="font-label-caps text-primary text-xs">Mailing List</h5>
              {" "}
              <p className="font-body-sm text-on-surface-variant">Receive exclusive access to new atelier releases.</p>
              {" "}
              <div className="flex border-b border-outline-variant pb-2">
                <input className="bg-transparent border-none focus:ring-0 w-full text-xs font-label-caps" placeholder="YOUR EMAIL" type="email" />
                {" "}
                <button className="material-symbols-outlined text-primary">chevron_right</button>
              </div>
            </div>
          </div>
          {" "}
          <div className="max-w-container-max mx-auto px-margin-desktop py-unit border-t border-outline-variant/10 text-center md:text-left text-[10px] text-on-surface-variant uppercase tracking-widest">
            © 2024 ByChi Strands. Timeless Vietnamese Artistry. All Rights Reserved.
          </div>
        </footer>
      </div>
    </>
  );
}
