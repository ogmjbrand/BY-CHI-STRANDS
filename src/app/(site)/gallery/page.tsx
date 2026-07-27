import type { Metadata } from "next";
import Link from "next/link";

/**
 * BY CHI STRANDS — Stitch screen: digital_flagship_aura_stories_gallery
 * "Aura Stories | Aura of Silk Digital Flagship"
 */

export const metadata: Metadata = {
  title: "Aura Stories",
};

export default function AuraStoriesGalleryPage() {
  return (
    <div className="scr-aura-stories-gallery bg-background text-on-surface font-body-md selection:bg-primary-fixed selection:text-on-primary-fixed">
      {/* Top Navigation Shell */}
      <nav className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-xl transition-all duration-500 ease-in-out">
        <div className="flex justify-between items-center w-full px-margin-desktop py-6 max-w-container-max mx-auto">
          <div className="flex-1 hidden md:flex gap-8">
            <Link className="font-body-md text-body-md uppercase tracking-widest text-on-surface-variant hover:text-primary transition-colors duration-500" href="/collections">
              Collections
            </Link>
            {" "}
            <Link className="font-body-md text-body-md uppercase tracking-widest text-primary border-b border-primary/30 pb-1" href="/gallery">
              Stories
            </Link>
            {" "}
            <Link className="font-body-md text-body-md uppercase tracking-widest text-on-surface-variant hover:text-primary transition-colors duration-500" href="/services">
              Atelier
            </Link>
          </div>
          {" "}
          <div className="flex-shrink-0">
            <h1 className="font-display-md text-display-md text-primary tracking-tight leading-none">Aura of Silk</h1>
          </div>
          {" "}
          <div className="flex-1 flex justify-end items-center gap-6">
            <Link className="hidden md:block font-body-md text-body-md uppercase tracking-widest text-on-surface-variant hover:text-primary transition-colors duration-500" href="/academy">
              Academy
            </Link>
            {" "}
            <span className="material-symbols-outlined text-primary cursor-pointer hover:scale-110 transition-transform" data-icon="shopping_bag">
              shopping_bag
            </span>
            {" "}
            <span className="material-symbols-outlined text-primary cursor-pointer hover:scale-110 transition-transform" data-icon="menu">
              menu
            </span>
          </div>
        </div>
      </nav>
      <main className="pt-32">
        {/* Editorial Header */}
        <header className="max-w-container-max mx-auto px-margin-desktop mb-24 reveal-on-scroll">
          <div className="max-w-4xl">
            <p className="font-label-caps text-label-caps text-primary mb-4 tracking-[0.15em]">The Digital Archive</p>
            {" "}
            <h1 className="font-display-lg text-display-lg mb-8 tracking-[-0.02em]">Aura Stories</h1>
            {" "}
            <p className="font-body-xl text-body-xl text-on-surface-variant leading-relaxed">
              A cinematic testament to the heritage of transformation. Within these narratives lies the intersection of personal identity and the master craft of silk artistry. Explore the journeys that define our legacy.
            </p>
          </div>
        </header>
        {/* Featured Narrative */}
        <section className="max-w-container-max mx-auto px-margin-desktop mb-section-padding reveal-on-scroll">
          <div className="relative w-full aspect-[21/9] overflow-hidden rounded-lg group cursor-pointer">
            <div className="absolute inset-0 image-zoom-container">
              <img className="w-full h-full object-cover" data-alt="A cinematic, high-fashion portrait of a woman with impeccably smooth, lustrous silk hair draped over her shoulders. The lighting is dramatic, high-contrast chiaroscuro, highlighting the golden reflections and fluid movement of the hair. She is set against a minimalist, warm-toned studio background that exudes quiet luxury and editorial sophistication." src="/stitch/img-095.jpg" />
            </div>
            {" "}
            <div className="absolute inset-0 hero-gradient flex flex-col justify-end p-12">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
                <div className="max-w-2xl">
                  <h2 className="font-display-md text-display-md text-surface mb-4 tracking-[-0.01em]">The Silk Transformation of Julianne V.</h2>
                  {" "}
                  <blockquote className="italic font-headline-lg text-surface-container-low opacity-90 border-l-2 border-primary-fixed-dim pl-6">
                    "In the silence of the Atelier, I found the most vibrant version of myself. My hair wasn't just styled; it was reborn."
                  </blockquote>
                </div>
                {" "}
                <div className="flex items-center gap-4">
                  <div className="w-20 h-20 rounded-full border border-surface/30 flex items-center justify-center backdrop-blur-md group-hover:bg-primary-container group-hover:border-primary-container transition-all duration-500">
                    <span className="material-symbols-outlined text-surface text-4xl" data-icon="play_arrow" style={{ fontVariationSettings: "'FILL' 1" }}>
                      play_arrow
                    </span>
                  </div>
                  {" "}
                  <span className="font-label-caps text-surface uppercase tracking-[0.2em] text-sm">Watch Narrative</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Narrative Filter */}
        <section className="max-w-container-max mx-auto px-margin-desktop mb-16 reveal-on-scroll">
          <div className="flex flex-wrap items-center gap-12 border-b border-outline-variant/30 pb-6">
            <button className="font-label-caps text-primary border-b-2 border-primary pb-6 -mb-[26px] tracking-widest">
              All Stories
            </button>
            {" "}
            <button className="font-label-caps text-on-surface-variant hover:text-primary transition-colors pb-6 -mb-[26px] tracking-widest">
              Atelier Transformations
            </button>
            {" "}
            <button className="font-label-caps text-on-surface-variant hover:text-primary transition-colors pb-6 -mb-[26px] tracking-widest">
              Academy Journeys
            </button>
            {" "}
            <button className="font-label-caps text-on-surface-variant hover:text-primary transition-colors pb-6 -mb-[26px] tracking-widest">
              Seasonal Editorials
            </button>
          </div>
        </section>
        {/* Stories Grid */}
        <section className="max-w-container-max mx-auto px-margin-desktop mb-section-padding">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12">
            {/* Large Editorial Tile */}
            <div className="md:col-span-8 group reveal-on-scroll">
              <div className="relative aspect-[4/3] mb-6 overflow-hidden rounded-lg image-zoom-container bg-surface-container">
                <img className="w-full h-full object-cover" src="/stitch/img-003.jpg" />
                {" "}
                <div className="absolute top-6 left-6 bg-surface/90 backdrop-blur px-4 py-2">
                  <span className="font-label-caps text-[10px] uppercase tracking-widest">Atelier Journey</span>
                </div>
                {" "}
                <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <span className="material-symbols-outlined text-surface text-6xl opacity-0 group-hover:opacity-100 transition-all duration-500 scale-75 group-hover:scale-100" data-icon="play_circle" style={{ fontVariationSettings: "'FILL' 1" }}>
                    play_circle
                  </span>
                </div>
              </div>
              {" "}
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-display-md text-3xl mb-2 text-on-surface">The Executive Presence</h3>
                  {" "}
                  <p className="font-body-md text-on-surface-variant italic">Refined by Chi Strands</p>
                </div>
                {" "}
                <button className="font-label-caps text-primary flex items-center gap-2 group/btn">
                  Play Narrative
                  {" "}
                  <span className="material-symbols-outlined text-sm group-hover/btn:translate-x-1 transition-transform" data-icon="arrow_forward">
                    arrow_forward
                  </span>
                </button>
              </div>
            </div>
            {/* Vertical Tile */}
            <div className="md:col-span-4 group reveal-on-scroll">
              <div className="relative aspect-[3/4] mb-6 overflow-hidden rounded-lg image-zoom-container bg-surface-container">
                <img className="w-full h-full object-cover" data-alt="A portrait-oriented artistic shot of a model with voluminous, glossy hair catching the golden hour light. The shot focus is on the intricate textures and waves of the hair, styled in a contemporary yet classic bob. The aesthetic is high-end editorial, with soft shadows and a warm, glowing color palette that emphasizes healthy hair vitality." src="/stitch/img-026.jpg" />
                {" "}
                <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              {" "}
              <h3 className="font-headline-lg text-2xl mb-2">Elena S.</h3>
              {" "}
              <p className="font-label-caps text-xs text-primary mb-4">Selection: Signature Silk Bob</p>
              {" "}
              <button className="w-full py-4 border border-outline-variant hover:bg-on-surface hover:text-surface transition-all duration-500 font-label-caps text-xs uppercase tracking-widest">
                Explore Profile
              </button>
            </div>
            {/* Horizontal Tile */}
            <div className="md:col-span-4 group reveal-on-scroll">
              <div className="relative aspect-[1/1] mb-6 overflow-hidden rounded-lg image-zoom-container bg-surface-container">
                <img className="w-full h-full object-cover" data-alt="Close-up of hair styling tools and silk hair products arranged on a minimalist marble surface. Soft sunlight filters through a nearby window, casting delicate shadows. The scene is clean, organized, and exudes a sense of premium atelier craftsmanship, with gold accents on the product labels shining subtly." src="/stitch/img-045.jpg" />
              </div>
              {" "}
              <h3 className="font-headline-lg text-2xl mb-2">The Alchemist’s Kit</h3>
              {" "}
              <p className="font-body-sm text-on-surface-variant line-clamp-2">
                Behind the scenes of the Atelier's chemical-free transformation protocol.
              </p>
            </div>
            {/* Text-Rich Narrative Tile */}
            <div className="md:col-span-8 group reveal-on-scroll bg-surface-container-low p-12 flex flex-col justify-center rounded-lg border border-outline-variant/10">
              <span className="font-label-caps text-primary mb-6">Academy Spotlight</span>
              {" "}
              <h3 className="font-display-md text-4xl mb-8 leading-tight">Mastering the Fluidity: A Student’s Journey Through the Academy</h3>
              {" "}
              <p className="font-body-xl text-on-surface-variant mb-12 max-w-xl">
                "The Academy taught me that silk is more than a texture—it's a language of light and movement. My three-month residency was the most challenging and rewarding experience of my career."
              </p>
              {" "}
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 rounded-full overflow-hidden bg-outline-variant">
                  <img className="w-full h-full object-cover" data-alt="Professional headshot of a young, stylish hair stylist with a sharp, minimalist aesthetic. Soft lighting, neutral background, looking confidently at the camera." src="/stitch/img-084.jpg" />
                </div>
                {" "}
                <div>
                  <p className="font-label-caps text-sm">Marcus Thorne</p>
                  {" "}
                  <p className="text-xs text-on-surface-variant">Class of '23 Senior Resident</p>
                </div>
                {" "}
                <div className="ml-auto">
                  <span className="material-symbols-outlined text-primary text-4xl hover-lift cursor-pointer" data-icon="menu_book">
                    menu_book
                  </span>
                </div>
              </div>
            </div>
            {/* Featured Collection Integration */}
            <div className="md:col-span-12 group reveal-on-scroll mt-8">
              <div className="relative aspect-[21/9] mb-6 overflow-hidden rounded-lg image-zoom-container bg-surface-container">
                <img className="w-full h-full object-cover" src="/stitch/img-017.jpg" />
                {" "}
                <div className="absolute inset-0 flex items-center justify-center bg-on-surface/30 opacity-0 group-hover:opacity-100 transition-all duration-700">
                  <div className="text-center">
                    <p className="font-label-caps text-surface mb-2">Curated for Narratives</p>
                    {" "}
                    <h3 className="font-display-md text-surface text-4xl">The Package Series</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* CTA Section */}
        <section className="bg-surface-container-lowest py-section-padding border-t border-outline-variant/30 reveal-on-scroll">
          <div className="max-w-container-max mx-auto px-margin-desktop text-center">
            <div className="max-w-2xl mx-auto">
              <h2 className="font-display-md text-display-md mb-6 tracking-[-0.01em]">Share Your Narrative</h2>
              {" "}
              <p className="font-body-xl text-on-surface-variant mb-12">
                Every transformation is a unique story waiting to be told. Join our archive and inspire the next generation of silk seekers.
              </p>
              {" "}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <Link className="px-10 py-5 bg-on-surface text-surface font-label-caps uppercase tracking-widest text-sm hover:bg-primary transition-colors duration-500 rounded-sm" href="/reviews/new">
                  Submit Story
                </Link>
                {" "}
                <Link className="px-10 py-5 border border-primary text-primary font-label-caps uppercase tracking-widest text-sm hover:bg-primary-fixed transition-all duration-500 rounded-sm" href="/contact">
                  Inquiry Atelier
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      {/* Footer Shell */}
      <footer className="w-full mt-section-padding bg-surface-container-lowest border-t border-outline-variant/30">
        <div className="flex flex-col md:flex-row justify-between items-center px-margin-desktop py-12 w-full max-w-container-max mx-auto">
          <div className="mb-8 md:mb-0">
            <h2 className="font-display-lg text-display-lg text-on-surface leading-none tracking-[-0.02em]">
              Aura of Silk
            </h2>
            {" "}
            <p className="font-body-sm text-on-surface-variant mt-2">Crafting timeless legacies since 1984.</p>
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
              Press
            </Link>
          </div>
          {" "}
          <p className="font-body-sm text-secondary-fixed-dim">© 2024 Aura of Silk. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
