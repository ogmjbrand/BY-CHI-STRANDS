import type { Metadata } from "next";

/**
 * BY CHI STRANDS — Stitch screen: digital_flagship_shopping_bag_sidebar
 * "ByChi Strands | Shopping Bag"
 */

export const metadata: Metadata = {
  title: "Your Selection",
};

export default function ShoppingBagSidebarPage() {
  return (
    <div className="scr-shopping-bag-sidebar bg-surface text-on-surface font-body-md overflow-x-hidden">
      {/* Main Content Background (Mock Page) */}
      <main className="min-h-screen w-full relative">
        {/* Hero Section Mockup */}
        <div className="h-screen w-full flex items-center justify-center bg-surface-container-low overflow-hidden">
          <div className="absolute inset-0 opacity-20 pointer-events-none"></div>
          {" "}
          <div className="text-center z-10 px-margin-mobile">
            <h1 className="font-display-lg text-display-lg text-primary mb-6 tracking-[-0.02em]">The Art of Pure Silk</h1>
            {" "}
            <p className="font-body-xl text-body-xl text-tertiary max-w-2xl mx-auto mb-12">
              Experience the zenith of hair craftsmanship through our Masterpiece Series.
            </p>
            {" "}
            <button className="px-12 py-4 bg-on-surface text-surface font-label-caps tracking-widest hover:bg-primary transition-all duration-500 rounded-lg">
              View Curated Bag
            </button>
          </div>
        </div>
      </main>
      {/* Shopping Bag Backdrop Overlay */}
      <div className="fixed inset-0 bg-on-surface/40 backdrop-blur-sm z-[55] opacity-0 pointer-events-none transition-opacity duration-500" id="bag-overlay"></div>
      {/* Sidebar Component (Shared Component: SideNavBar inspired) */}
      <aside className="fixed right-0 top-0 h-full w-full md:w-[500px] lg:w-[550px] bg-surface z-[60] transform translate-x-full transition-transform duration-700 ease-in-out shadow-[0px_20px_50px_rgba(0,0,0,0.04)] border-l border-outline-variant/30 flex flex-col" id="bag-sidebar">
        {/* Header */}
        <header className="flex justify-between items-center px-10 pt-12 pb-6 border-b border-outline-variant/10">
          <div>
            <h2 className="font-display-md text-headline-lg text-on-surface">Your Selection</h2>
            {" "}
            <p className="font-body-sm text-body-sm text-tertiary tracking-wide uppercase mt-1">Private Concierge Experience</p>
          </div>
          {" "}
          <button className="group p-2 -mr-2">
            <span className="material-symbols-outlined text-tertiary group-hover:text-primary transition-colors duration-300">
              close
            </span>
          </button>
        </header>
        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto px-10 py-8 space-y-12">
          {/* Item List Section */}
          <section className="space-y-10">
            {/* Item 1: The Alabaster Straight */}
            <div className="group flex gap-6">
              <div className="w-32 h-44 bg-surface-container-high relative overflow-hidden flex-shrink-0">
                <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" data-alt="A high-fashion studio photograph of a premium, waist-length straight hair piece with a subtle pearlescent sheen. The texture is impeccably smooth, draped against a soft beige silk background. Lighting is soft and directional, highlighting the natural-looking HD lace front and the luxurious quality of the hair. Neutral tones and elegant minimalist aesthetic." src="/stitch/img-047.jpg" />
              </div>
              {" "}
              <div className="flex flex-col justify-between py-1">
                <div>
                  <p className="font-body-sm text-[11px] text-primary tracking-[0.2em] uppercase mb-1">Masterpiece Series</p>
                  {" "}
                  <h3 className="font-display-md text-body-xl font-medium mb-2">The Alabaster Straight</h3>
                  {" "}
                  <div className="space-y-1">
                    <p className="font-body-sm text-tertiary">Length: 22"</p>
                    {" "}
                    <p className="font-body-sm text-tertiary">Cap: Signature HD Lace</p>
                  </div>
                </div>
                {" "}
                <div className="flex justify-between items-end">
                  <p className="font-body-md font-semibold text-on-surface">$5,850.00</p>
                  {" "}
                  <button className="text-tertiary hover:text-error transition-colors text-xs font-label-caps border-b border-outline-variant/50 pb-0.5">
                    Remove
                  </button>
                </div>
              </div>
            </div>
            {/* Item 2: Silk Essence No. 4 */}
            <div className="group flex gap-6">
              <div className="w-32 h-44 bg-surface-container-high relative overflow-hidden flex-shrink-0">
                <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" data-alt="Minimalist product design of a sleek, white ceramic bottle of hair elixir named Silk Essence No. 4. The bottle features elegant gold typography and a minimalist label. It is placed on a textured ivory stone surface with soft shadows and a single shaft of light. High-end cosmetic photography, clean composition, sophisticated atmosphere." src="/stitch/img-123.jpg" />
              </div>
              {" "}
              <div className="flex flex-col justify-between py-1">
                <div>
                  <p className="font-body-sm text-[11px] text-primary tracking-[0.2em] uppercase mb-1">Aftercare Collective</p>
                  {" "}
                  <h3 className="font-display-md text-body-xl font-medium mb-2">Silk Essence No. 4</h3>
                  {" "}
                  <div className="space-y-1">
                    <p className="font-body-sm text-tertiary">Size: 100ml / 3.4 fl.oz</p>
                    {" "}
                    <p className="font-body-sm text-tertiary">Botanical Infusion</p>
                  </div>
                </div>
                {" "}
                <div className="flex justify-between items-end">
                  <p className="font-body-md font-semibold text-on-surface">$120.00</p>
                  {" "}
                  <button className="text-tertiary hover:text-error transition-colors text-xs font-label-caps border-b border-outline-variant/50 pb-0.5">
                    Remove
                  </button>
                </div>
              </div>
            </div>
          </section>
          {/* Complementary Pairings */}
          <section className="bg-surface-container-low p-6 border border-outline-variant/20">
            <div className="flex items-center gap-2 mb-4">
              <span className="material-symbols-outlined text-primary text-sm">auto_fix_high</span>
              {" "}
              <h4 className="font-label-caps text-on-surface-variant">Complementary Pairing</h4>
            </div>
            {" "}
            <div className="flex items-center gap-5">
              <div className="w-20 h-20 bg-surface flex-shrink-0">
                <img className="w-full h-full object-cover" data-alt="A curated gift set featuring a silk pillowcase, a delicate wide-tooth comb made of light wood, and a small glass jar of treatment cream. The items are arranged artfully on a draped silk fabric. Soft, high-key lighting, ivory and gold color palette, luxury lifestyle vibes." src="/stitch/img-002.jpg" />
              </div>
              {" "}
              <div className="flex-1">
                <h5 className="font-display-md text-body-md">The Silk Ritual Set</h5>
                {" "}
                <p className="font-body-sm text-tertiary text-xs mt-1">Enhance your investment with curated care.</p>
                {" "}
                <button className="mt-2 text-primary font-label-caps text-[10px] tracking-widest hover:text-secondary transition-colors">
                  + Add to Bag
                </button>
              </div>
            </div>
          </section>
          {/* Concierge Notes */}
          <section className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-tertiary text-sm">auto_awesome</span>
              {" "}
              <h4 className="font-label-caps text-on-surface-variant">Concierge Notes</h4>
            </div>
            {" "}
            <textarea className="w-full bg-surface-bright border border-outline-variant/30 p-4 font-body-sm focus:border-primary-container focus:ring-0 transition-colors placeholder:text-outline/50 resize-none h-24" placeholder="Add special requests for your stylist or concierge..."></textarea>
          </section>
        </div>
        {/* Investment Summary & CTA */}
        <footer className="p-10 bg-surface border-t border-outline-variant/20 space-y-6">
          <div className="space-y-3">
            <div className="flex justify-between font-body-sm text-tertiary">
              <span>Subtotal</span>
              {" "}
              <span>$5,970.00</span>
            </div>
            {" "}
            <div className="flex justify-between font-body-sm text-tertiary italic">
              <span>White-Glove Shipping</span>
              {" "}
              <span className="text-primary">Complimentary</span>
            </div>
            {" "}
            <div className="pt-3 border-t border-outline-variant/10 flex justify-between">
              <span className="font-label-caps text-on-surface">Total Investment</span>
              {" "}
              <span className="font-display-md text-body-xl font-bold">$5,970.00</span>
            </div>
          </div>
          {" "}
          <button className="w-full py-5 bg-on-surface text-surface font-label-caps tracking-[0.25em] relative group overflow-hidden">
            <span className="relative z-10">Complete Investment</span>
            {" "}
            <div className="absolute inset-0 bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"></div>
          </button>
          {" "}
          <div className="flex justify-center gap-8 pt-2">
            <div className="flex items-center gap-2 opacity-60">
              <span className="material-symbols-outlined text-sm">security</span>
              {" "}
              <span className="text-[10px] uppercase font-label-caps">Secure Atelier</span>
            </div>
            {" "}
            <div className="flex items-center gap-2 opacity-60">
              <span className="material-symbols-outlined text-sm">help</span>
              {" "}
              <span className="text-[10px] uppercase font-label-caps">Concierge Help</span>
            </div>
          </div>
        </footer>
      </aside>
    </div>
  );
}
