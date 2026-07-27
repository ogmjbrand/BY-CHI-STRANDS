import Link from "next/link";
import type { Metadata } from "next";

/**
 * BY CHI STRANDS — Stitch screen: digital_flagship_the_boutique
 * "Aura of Silk | The Boutique"
 */

export const metadata: Metadata = {
  title: "The Boutique",
};

export default function TheBoutiquePage() {
  return (
    <div className="scr-the-boutique font-body-md text-on-background">
      {/* Top Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-xl border-b border-outline-variant/30">
        <div className="flex justify-between items-center w-full px-margin-mobile md:px-margin-desktop py-6 max-w-container-max mx-auto">
          <div className="hidden md:flex gap-8">
            <Link className="font-label-caps text-label-caps uppercase tracking-widest text-on-surface-variant hover:text-primary transition-colors duration-300" href="/services">
              Atelier
            </Link>
            {" "}
            <Link className="font-label-caps text-label-caps uppercase tracking-widest text-primary border-b border-primary pb-1" href="/academy">
              Academy
            </Link>
            {" "}
            <Link className="font-label-caps text-label-caps uppercase tracking-widest text-on-surface-variant hover:text-primary transition-colors duration-300" href="/aftercare">
              Aftercare
            </Link>
            {" "}
            <Link className="font-label-caps text-label-caps uppercase tracking-widest text-on-surface-variant hover:text-primary transition-colors duration-300" href="/about">
              The Maison
            </Link>
          </div>
          {" "}
          <Link className="font-display-md text-display-md-mobile md:text-display-md tracking-tight text-on-surface md:tracking-[-0.01em]" href="/">
            AURA OF SILK
          </Link>
          {" "}
          <div className="flex items-center gap-6">
            <button className="material-symbols-outlined text-on-surface-variant hover:text-primary transition-colors">
              search
            </button>
            {" "}
            <button className="material-symbols-outlined text-on-surface-variant hover:text-primary transition-colors">
              person
            </button>
            {" "}
            <button className="material-symbols-outlined text-on-surface-variant hover:text-primary transition-colors">
              shopping_bag
            </button>
          </div>
        </div>
      </nav>
      {/* Editorial Hero */}
      <header className="pt-40 pb-20 md:pt-60 md:pb-32 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto overflow-hidden">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <span className="font-label-caps text-label-caps uppercase text-primary tracking-[0.3em] mb-6 fade-in-up" style={{ animationDelay: "0.1s" }}>
            The Art of Hair
          </span>
          {" "}
          <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg mb-8 fade-in-up md:tracking-[-0.02em]" style={{ animationDelay: "0.2s" }}>
            The Boutique
          </h1>
          {" "}
          <p className="font-body-xl text-body-xl text-on-surface-variant max-w-2xl fade-in-up" style={{ animationDelay: "0.3s" }}>
            Curated masterpieces for the discerning collector. Each piece is a testament to the artisan's hand, crafted with the world's most exquisite silk-grade hair.
          </p>
        </div>
      </header>
      {/* Refined Navigation & Filters */}
      <section className="sticky top-[88px] z-40 bg-surface/90 backdrop-blur-md border-y border-outline-variant/20 mb-16">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-wrap justify-center gap-8">
            <button className="font-label-caps text-label-caps uppercase text-primary tracking-widest border-b-2 border-primary pb-1">
              All Creations
            </button>
            {" "}
            <button className="font-label-caps text-label-caps uppercase text-on-surface-variant hover:text-primary tracking-widest transition-colors">
              Signature Wigs
            </button>
            {" "}
            <button className="font-label-caps text-label-caps uppercase text-on-surface-variant hover:text-primary tracking-widest transition-colors">
              Silk Essentials
            </button>
            {" "}
            <button className="font-label-caps text-label-caps uppercase text-on-surface-variant hover:text-primary tracking-widest transition-colors">
              Masterpiece Series
            </button>
          </div>
          {" "}
          <div className="flex items-center gap-4">
            <span className="font-label-caps text-label-caps uppercase text-outline tracking-[0.15em]">Sort By:</span>
            {" "}
            <select className="bg-transparent border-none font-label-caps text-label-caps uppercase text-on-surface focus:ring-0 cursor-pointer tracking-[0.15em]">
              <option>Featured</option>
              {" "}
              <option>Newest Arrivals</option>
              {" "}
              <option>Investment: High to Low</option>
              {" "}
              <option>Investment: Low to High</option>
            </select>
          </div>
        </div>
      </section>
      {/* Curated Product Grid */}
      <main className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mb-section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-gutter gap-y-20">
          {/* Product 1 */}
          <article className="group cursor-pointer">
            <div className="relative overflow-hidden mb-8 aspect-[3/4] bg-surface-container">
              <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" data-alt="A high-fashion editorial portrait of a luxury mahogany-colored lace wig with soft, voluminous waves. The lighting is cinematic and warm, highlighting the silky texture and realistic hairline. The background is a minimalist ivory studio set, emphasizing the product's premium quality and deep, rich tones." src="/stitch/img-025.jpg" />
              {" "}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500"></div>
            </div>
            {" "}
            <div className="text-center md:text-left">
              <span className="font-label-caps text-label-caps uppercase text-outline mb-2 block tracking-[0.15em]">
                Signature HD Lace
              </span>
              {" "}
              <h3 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg mb-2 group-hover:text-primary transition-colors">
                The Imperial Mahogany Wave
              </h3>
              {" "}
              <p className="font-body-md text-primary font-semibold mb-6">$4,200.00</p>
              {" "}
              <button className="font-label-caps text-label-caps uppercase border-b border-outline group-hover:border-primary group-hover:text-primary transition-all tracking-widest pb-1">
                View Masterpiece
              </button>
            </div>
          </article>
          {/* Product 2 */}
          <article className="group cursor-pointer">
            <div className="relative overflow-hidden mb-8 aspect-[3/4] bg-surface-container">
              <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" data-alt="Close-up editorial photography of a sleek, platinum blonde straight silk wig. The hair has a mirror-like shine and fluid movement. The lighting is bright and ethereal, casting soft shadows. The atmosphere is clinical yet artistic, showcasing the hand-tied craftsmanship against a neutral grey silk backdrop." src="/stitch/img-082.jpg" />
              {" "}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500"></div>
              {" "}
              <div className="absolute top-6 right-6 bg-white px-4 py-1">
                <span className="font-label-caps text-[10px] uppercase tracking-tighter">Limited Edition</span>
              </div>
            </div>
            {" "}
            <div className="text-center md:text-left">
              <span className="font-label-caps text-label-caps uppercase text-outline mb-2 block tracking-[0.15em]">
                Masterpiece Series
              </span>
              {" "}
              <h3 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg mb-2 group-hover:text-primary transition-colors">
                The Alabaster Straight
              </h3>
              {" "}
              <p className="font-body-md text-primary font-semibold mb-6">$5,850.00</p>
              {" "}
              <button className="font-label-caps text-label-caps uppercase border-b border-outline group-hover:border-primary group-hover:text-primary transition-all tracking-widest pb-1">
                View Masterpiece
              </button>
            </div>
          </article>
          {/* Product 3 */}
          <article className="group cursor-pointer">
            <div className="relative overflow-hidden mb-8 aspect-[3/4] bg-surface-container">
              <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" data-alt="A luxurious product shot of an aftercare set featuring a glass bottle of silk-infused hair oil and a handmade wide-tooth comb. The bottle reflects soft amber light, and the comb is carved from dark sandalwood. The scene is set on a marble surface with delicate linen textures in the periphery, conveying a sense of quiet luxury and ritual." src="/stitch/img-041.jpg" />
              {" "}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500"></div>
            </div>
            {" "}
            <div className="text-center md:text-left">
              <span className="font-label-caps text-label-caps uppercase text-outline mb-2 block tracking-[0.15em]">
                Aftercare Collective
              </span>
              {" "}
              <h3 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg mb-2 group-hover:text-primary transition-colors">
                The Silk Ritual Set
              </h3>
              {" "}
              <p className="font-body-md text-primary font-semibold mb-6">$340.00</p>
              {" "}
              <button className="font-label-caps text-label-caps uppercase border-b border-outline group-hover:border-primary group-hover:text-primary transition-all tracking-widest pb-1">
                View Masterpiece
              </button>
            </div>
          </article>
          {/* Product 4 */}
          <article className="group cursor-pointer">
            <div className="relative overflow-hidden mb-8 aspect-[3/4] bg-surface-container">
              <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" data-alt="An editorial image of a voluminous, dark espresso curly wig with intricate hand-tied curls that look extremely natural. The hair is styled in a deep side part. The photography uses high-contrast shadows to emphasize the texture and depth of the curls. The model's skin is glowing, and the aesthetic is sophisticated and high-end fashion." src="/stitch/img-013.jpg" />
              {" "}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500"></div>
            </div>
            {" "}
            <div className="text-center md:text-left">
              <span className="font-label-caps text-label-caps uppercase text-outline mb-2 block tracking-[0.15em]">
                Signature HD Lace
              </span>
              {" "}
              <h3 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg mb-2 group-hover:text-primary transition-colors">
                The Espresso Coil
              </h3>
              {" "}
              <p className="font-body-md text-primary font-semibold mb-6">$3,900.00</p>
              {" "}
              <button className="font-label-caps text-label-caps uppercase border-b border-outline group-hover:border-primary group-hover:text-primary transition-all tracking-widest pb-1">
                View Masterpiece
              </button>
            </div>
          </article>
          {/* Product 5 */}
          <article className="group cursor-pointer">
            <div className="relative overflow-hidden mb-8 aspect-[3/4] bg-surface-container">
              <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" data-alt="A stunning product display of a copper-toned bob wig with sharp, architectural lines. The hair is perfectly smooth and has a brilliant sheen. The image is captured in a minimalist, bright white environment with champagne gold accents. The lighting is diffused and professional, showcasing the precision of the cut and the purity of the color." src="/stitch/img-114.jpg" />
              {" "}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500"></div>
            </div>
            {" "}
            <div className="text-center md:text-left">
              <span className="font-label-caps text-label-caps uppercase text-outline mb-2 block tracking-[0.15em]">
                Silk Essentials
              </span>
              {" "}
              <h3 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg mb-2 group-hover:text-primary transition-colors">
                The Copper Precision Bob
              </h3>
              {" "}
              <p className="font-body-md text-primary font-semibold mb-6">$2,450.00</p>
              {" "}
              <button className="font-label-caps text-label-caps uppercase border-b border-outline group-hover:border-primary group-hover:text-primary transition-all tracking-widest pb-1">
                View Masterpiece
              </button>
            </div>
          </article>
          {/* Product 6 */}
          <article className="group cursor-pointer">
            <div className="relative overflow-hidden mb-8 aspect-[3/4] bg-surface-container">
              <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" data-alt="Close-up artistic shot of a warm honey-blonde ponytail extension made of genuine silk-grade hair. The ponytail is sleek at the top with a soft, effortless wave at the end. The lighting is soft and golden, mimicking a late afternoon glow. The background consists of draped cream-colored silk fabrics, creating a luxurious and tactile atmosphere." src="/stitch/img-081.jpg" />
              {" "}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500"></div>
            </div>
            {" "}
            <div className="text-center md:text-left">
              <span className="font-label-caps text-label-caps uppercase text-outline mb-2 block tracking-[0.15em]">
                Silk Essentials
              </span>
              {" "}
              <h3 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg mb-2 group-hover:text-primary transition-colors">
                The Honey Glow Wrap
              </h3>
              {" "}
              <p className="font-body-md text-primary font-semibold mb-6">$1,200.00</p>
              {" "}
              <button className="font-label-caps text-label-caps uppercase border-b border-outline group-hover:border-primary group-hover:text-primary transition-all tracking-widest pb-1">
                View Masterpiece
              </button>
            </div>
          </article>
        </div>
      </main>
      {/* Artisan Curation Section */}
      <section className="bg-surface-container-low py-section-padding">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-20">
            <div className="relative order-2 lg:order-1">
              <div className="absolute -top-10 -left-10 w-40 h-40 border border-primary/20 -z-10"></div>
              {" "}
              <img className="w-full aspect-square object-cover shadow-2xl" data-alt="A portrait of a skilled master artisan at work in a bright, modern atelier. The artisan is delicately hand-tying individual hair strands onto a fine lace base. The environment is organized and minimalist, with spools of fine thread and luxury hair samples nearby. The lighting is focused and warm, emphasizing the meticulous detail and craftsmanship involved in creating a masterpiece." src="/stitch/img-014.jpg" />
              {" "}
              <div className="absolute bottom-8 -right-8 bg-surface p-8 max-w-xs shadow-xl hidden md:block">
                <p className="font-headline-lg text-primary italic mb-2">"The secret lies in the direction of every single knot."</p>
                {" "}
                <span className="font-label-caps text-label-caps uppercase text-outline tracking-[0.15em]">— Master Artisan Elena V.</span>
              </div>
            </div>
            {" "}
            <div className="order-1 lg:order-2 space-y-8">
              <span className="font-label-caps text-label-caps uppercase text-primary tracking-[0.2em]">Curated Selection</span>
              {" "}
              <h2 className="font-display-md text-display-md-mobile md:text-display-md leading-tight md:leading-[1.2] md:tracking-[-0.01em]">
                Master Artisan's Choice:
                {" "}
                <br />
                The Golden Hour Edit
              </h2>
              {" "}
              <p className="font-body-xl text-on-surface-variant">
                A curated collection hand-selected for their exceptional warmth and luminosity. These pieces represent our highest standard of silk-blending, designed to capture and reflect light as if it were natural sun-kissed hair.
              </p>
              {" "}
              <div className="flex flex-col gap-6 py-8">
                <div className="flex items-center gap-6 group cursor-pointer">
                  <div className="w-20 h-20 overflow-hidden bg-surface-container">
                    <img className="w-full h-full object-cover" data-alt="Small thumbnail of a golden blonde silk hair piece." src="/stitch/img-085.jpg" />
                  </div>
                  {" "}
                  <div>
                    <h4 className="font-label-caps text-label-caps uppercase mb-1 tracking-[0.15em]">01. Signature Lace Front 'Soleil'</h4>
                    {" "}
                    <span className="text-primary font-semibold">$3,400.00</span>
                  </div>
                </div>
                {" "}
                <div className="flex items-center gap-6 group cursor-pointer">
                  <div className="w-20 h-20 overflow-hidden bg-surface-container">
                    <img className="w-full h-full object-cover" data-alt="Small thumbnail of a premium hair serum bottle." src="/stitch/img-108.jpg" />
                  </div>
                  {" "}
                  <div>
                    <h4 className="font-label-caps text-label-caps uppercase mb-1 tracking-[0.15em]">02. Liquid Silk Elixir</h4>
                    {" "}
                    <span className="text-primary font-semibold">$120.00</span>
                  </div>
                </div>
              </div>
              {" "}
              <button className="bg-primary text-white px-12 py-5 font-label-caps text-label-caps uppercase tracking-widest hover:bg-secondary transition-all duration-300">
                Inquire About This Look
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* The Aura Guarantee */}
      <section className="py-section-padding border-t border-outline-variant/30">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="text-center mb-20">
            <h2 className="font-display-md text-display-md-mobile md:text-display-md mb-4 md:tracking-[-0.01em]">
              The Aura Guarantee
            </h2>
            {" "}
            <div className="w-20 h-px bg-primary mx-auto"></div>
          </div>
          {" "}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            <div className="text-center flex flex-col items-center">
              <div className="w-16 h-16 bg-surface-container rounded-full flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-primary text-3xl">verified</span>
              </div>
              {" "}
              <h3 className="font-headline-lg text-2xl mb-4">Silk-Grade Quality</h3>
              {" "}
              <p className="font-body-md text-on-surface-variant">
                We only utilize 100% genuine, ethically sourced hair that meets our proprietary 'Silk-Grade' criteria for cuticle integrity and shine.
              </p>
            </div>
            {" "}
            <div className="text-center flex flex-col items-center">
              <div className="w-16 h-16 bg-surface-container rounded-full flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-primary text-3xl">eco</span>
              </div>
              {" "}
              <h3 className="font-headline-lg text-2xl mb-4">Ethical Sourcing</h3>
              {" "}
              <p className="font-body-md text-on-surface-variant">
                Full transparency from origin to atelier. We partner directly with donors and communities to ensure fair compensation and ethical practices.
              </p>
            </div>
            {" "}
            <div className="text-center flex flex-col items-center">
              <div className="w-16 h-16 bg-surface-container rounded-full flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-primary text-3xl">front_hand</span>
              </div>
              {" "}
              <h3 className="font-headline-lg text-2xl mb-4">Hand-Tied Mastery</h3>
              {" "}
              <p className="font-body-md text-on-surface-variant">
                Every masterpiece is hand-tied by our master artisans, requiring over 120 hours of meticulous labor to ensure the most natural movement.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="bg-background border-t border-outline-variant/20">
        <div className="flex flex-col md:flex-row justify-between items-center w-full px-margin-mobile md:px-margin-desktop py-margin-desktop max-w-container-max mx-auto gap-gutter">
          <div className="flex flex-col items-center md:items-start gap-4">
            <span className="font-display-lg text-[32px] text-primary">AURA OF SILK</span>
            {" "}
            <p className="font-body-sm text-on-surface-variant text-center md:text-left">Redefining the standard of luxury hair through artisan excellence.</p>
          </div>
          {" "}
          <div className="flex gap-8">
            <Link className="font-body-sm text-on-surface-variant hover:text-primary transition-colors duration-300" href="/privacy">
              Privacy Policy
            </Link>
            {" "}
            <Link className="font-body-sm text-on-surface-variant hover:text-primary transition-colors duration-300" href="/terms">
              Terms of Service
            </Link>
            {" "}
            <Link className="font-body-sm text-on-surface-variant hover:text-primary transition-colors duration-300" href="/about">
              Sustainability
            </Link>
            {" "}
            <Link className="font-body-sm text-on-surface-variant hover:text-primary transition-colors duration-300" href="/contact">
              Contact Atelier
            </Link>
          </div>
          {" "}
          <div className="text-secondary dark:text-secondary-fixed font-body-sm text-body-sm tracking-wide">
            © 2024 AURA OF SILK. ALL RIGHTS RESERVED.
          </div>
        </div>
      </footer>
    </div>
  );
}
