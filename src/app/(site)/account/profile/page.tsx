import type { Metadata } from "next";
import Link from "next/link";

/**
 * BY CHI STRANDS — Stitch screen: digital_flagship_client_profile
 * "Client Profile | VIET LUXE HAIR"
 */

export const metadata: Metadata = {
  title: "Client Profile",
};

export default function ClientProfilePage() {
  return (
    <div className="scr-client-profile bg-background text-on-surface font-body-md selection:bg-primary-container selection:text-on-primary-container">
      {/* TopNavBar */}
      <header className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-xl transition-all duration-500 shadow-[0px_20px_50px_rgba(0,0,0,0.04)]">
        <nav className="flex justify-between items-center w-full px-margin-desktop py-6 max-w-container-max mx-auto">
          <div className="flex items-center gap-8">
            <Link className="font-display-md text-headline-lg text-on-surface tracking-tight" href="/">VIET LUXE HAIR</Link>
            {" "}
            <div className="hidden md:flex items-center gap-6">
              <Link className="font-body-md text-label-caps uppercase tracking-widest text-on-surface-variant hover:text-primary transition-colors duration-300" href="/gallery">
                STORY
              </Link>
              {" "}
              <Link className="font-body-md text-label-caps uppercase tracking-widest text-on-surface-variant hover:text-primary transition-colors duration-300" href="/shop">
                SHOP
              </Link>
              {" "}
              <Link className="font-body-md text-label-caps uppercase tracking-widest text-on-surface-variant hover:text-primary transition-colors duration-300" href="/services">
                SERVICES
              </Link>
              {" "}
              <Link className="font-body-md text-label-caps uppercase tracking-widest text-on-surface-variant hover:text-primary transition-colors duration-300" href="/academy">
                ACADEMY
              </Link>
            </div>
          </div>
          {" "}
          <div className="flex items-center gap-6">
            <button className="material-symbols-outlined text-on-surface hover:opacity-70 transition-opacity">
              shopping_bag
            </button>
            {" "}
            <button className="material-symbols-outlined text-primary hover:opacity-70 transition-opacity">person</button>
            {" "}
            <button className="md:hidden material-symbols-outlined">menu</button>
          </div>
        </nav>
      </header>
      {/* SideNavBar (Client Portal Sidebar) */}
      <aside className="hidden md:flex flex-col h-screen w-80 fixed left-0 top-0 z-40 bg-surface border-r border-outline-variant/30 py-12 px-6 pt-32">
        <div className="mb-12">
          <div className="w-16 h-16 rounded-full overflow-hidden mb-4 ring-1 ring-primary/20">
            <img className="w-full h-full object-cover" data-alt="A refined, professional portrait of an elegant woman in her late 20s with polished mahogany hair, wearing a white silk blouse against a soft ivory studio background. High-key fashion lighting emphasizes the smooth texture of her skin and the high-fidelity shine of her hair, embodying a luxury light-mode aesthetic." src="/stitch/img-100.jpg" />
          </div>
          {" "}
          <h3 className="font-display-lg text-headline-lg text-primary">Julianne V.</h3>
          {" "}
          <p className="font-body-sm text-on-surface-variant tracking-wide">Elite Member since 2022</p>
        </div>
        {" "}
        <nav className="flex-1 space-y-2">
          <a className="flex items-center gap-4 bg-secondary-container/30 text-primary font-semibold px-6 py-4 rounded-lg transition-transform duration-300" href="#">
            <span className="material-symbols-outlined">dashboard</span>
            {" "}
            <span className="font-body-md">Overview</span>
          </a>
          {" "}
          <Link className="flex items-center gap-4 text-on-surface-variant px-6 py-4 hover:bg-surface-container-low transition-all hover:translate-x-1" href="/account">
            <span className="material-symbols-outlined">package_2</span>
            {" "}
            <span className="font-body-md">My Orders</span>
          </Link>
          {" "}
          <a className="flex items-center gap-4 text-on-surface-variant px-6 py-4 hover:bg-surface-container-low transition-all hover:translate-x-1" href="#">
            <span className="material-symbols-outlined">calendar_today</span>
            {" "}
            <span className="font-body-md">Bookings</span>
          </a>
          {" "}
          <a className="flex items-center gap-4 text-on-surface-variant px-6 py-4 hover:bg-surface-container-low transition-all hover:translate-x-1" href="#">
            <span className="material-symbols-outlined">school</span>
            {" "}
            <span className="font-body-md">Certifications</span>
          </a>
          {" "}
          <a className="flex items-center gap-4 text-on-surface-variant px-6 py-4 hover:bg-surface-container-low transition-all hover:translate-x-1" href="#">
            <span className="material-symbols-outlined">settings</span>
            {" "}
            <span className="font-body-md">Settings</span>
          </a>
        </nav>
        {" "}
        <div className="pt-8 border-t border-outline-variant/30">
          <Link className="flex items-center gap-4 text-on-surface-variant px-6 py-4 hover:text-primary transition-colors" href="/faqs">
            <span className="material-symbols-outlined">help_outline</span>
            {" "}
            <span>Support</span>
          </Link>
          {" "}
          <a className="flex items-center gap-4 text-on-surface-variant px-6 py-4 hover:text-error transition-colors" href="#">
            <span className="material-symbols-outlined">logout</span>
            {" "}
            <span>Sign Out</span>
          </a>
        </div>
      </aside>
      {/* Main Content Canvas */}
      <main className="md:ml-80 pt-32 pb-section-padding px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto overflow-x-hidden">
        {/* Profile Hero Header */}
        <section className="mb-section-padding relative">
          <div className="absolute -top-32 right-0 w-1/3 h-full opacity-10 pointer-events-none"></div>
          {" "}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-outline-variant/30 pb-12">
            <div>
              <span className="font-body-md text-label-caps text-primary mb-4 block tracking-[0.15em]">Exclusive Digital Archive</span>
              {" "}
              <h1 className="font-display-lg text-display-lg text-on-surface mb-2 tracking-[-0.02em]">Julianne V. Sterling</h1>
              {" "}
              <p className="font-body-xl text-on-surface-variant max-w-xl">
                Curating a legacy of hair artistry. Your personal portal to the world of VIET LUXE HAIR.
              </p>
            </div>
            {" "}
            <div className="flex gap-12">
              <div className="text-center">
                <span className="block font-display-md text-display-md text-primary leading-none tracking-[-0.01em]">
                  14
                </span>
                {" "}
                <span className="font-body-sm text-label-caps text-on-surface-variant tracking-[0.15em]">Masterpieces</span>
              </div>
              {" "}
              <div className="text-center">
                <span className="block font-display-md text-display-md text-primary leading-none tracking-[-0.01em]">
                  08
                </span>
                {" "}
                <span className="font-body-sm text-label-caps text-on-surface-variant tracking-[0.15em]">Narratives</span>
              </div>
              {" "}
              <div className="text-center">
                <span className="block font-display-md text-display-md text-primary leading-none tracking-[-0.01em]">
                  03
                </span>
                {" "}
                <span className="font-body-sm text-label-caps text-on-surface-variant tracking-[0.15em]">Consults</span>
              </div>
            </div>
          </div>
        </section>
        {/* The Collection (Bento/Editorial Grid) */}
        <section className="mb-section-padding">
          <div className="flex justify-between items-center mb-12">
            <h2 className="font-display-lg text-headline-lg">The Collection</h2>
            {" "}
            <Link className="font-body-md text-label-caps text-on-surface-variant hover:text-primary border-b border-transparent hover:border-primary transition-all pb-1 tracking-[0.15em]" href="/academy/resources">
              View Full Vault
            </Link>
          </div>
          {" "}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
            {/* Large Featured Item */}
            <div className="md:col-span-7 group cursor-pointer overflow-hidden bg-surface-container-low">
              <div className="aspect-[4/5] overflow-hidden">
                <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" data-alt="A luxury editorial photograph of a deep mahogany wave wig displayed on an ivory ceramic head form. The lighting is dramatic with soft shadows, highlighting the silk-like texture and rich burgundy undertones of the hair. The background is a minimalist, textured gallery wall with a warm champagne gold glow." src="/stitch/img-024.jpg" />
              </div>
              {" "}
              <div className="p-8 bg-surface-bright">
                <span className="text-label-caps text-primary mb-2 block tracking-[0.15em]">Acquired Oct 2023</span>
                {" "}
                <h4 className="font-display-md text-headline-lg mb-2 group-hover:translate-y-[-4px] transition-transform">
                  The Imperial Mahogany Wave
                </h4>
                {" "}
                <p className="font-body-md text-on-surface-variant">Signature HD Lace | 24" Virgin Vietnamese Silk</p>
              </div>
            </div>
            {/* Stacked Side Items */}
            <div className="md:col-span-5 flex flex-col gap-gutter">
              <div className="group cursor-pointer bg-surface-container-low flex flex-col h-full">
                <div className="aspect-square overflow-hidden">
                  <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" data-alt="High-fidelity product shot of a sleek jet black bob with a blunt cut, capturing the mirror-like shine of high-end Vietnamese hair. The image is framed within a minimalist Ivory border, reflecting a luxury high-fashion aesthetic. Lighting is even and bright, highlighting the precision of the cut." src="/stitch/img-030.jpg" />
                </div>
                {" "}
                <div className="p-6 bg-surface-bright flex-1">
                  <span className="text-label-caps text-primary mb-2 block tracking-[0.15em]">Acquired Mar 2023</span>
                  {" "}
                  <h4 className="font-body-md font-bold mb-1">Noir Precision Bob</h4>
                </div>
              </div>
              {" "}
              <div className="group cursor-pointer bg-surface-container-low flex flex-col h-full">
                <div className="aspect-square overflow-hidden">
                  <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" data-alt="Editorial close-up of honey blonde highlights cascading over a shoulder, showcasing the intricate blending and natural movement of premium hair strands. The colors are warm golds and cool champagnes, lit by soft afternoon sunlight in a minimalist white-on-ivory boutique setting." src="/stitch/img-092.jpg" />
                </div>
                {" "}
                <div className="p-6 bg-surface-bright flex-1">
                  <span className="text-label-caps text-primary mb-2 block tracking-[0.15em]">Acquired Jan 2024</span>
                  {" "}
                  <h4 className="font-body-md font-bold mb-1">Honey Champagne Glaze</h4>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* My Narratives (Editorial Cards) */}
        <section className="mb-section-padding">
          <h2 className="font-display-lg text-headline-lg mb-12">My Narratives</h2>
          {" "}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <article className="p-10 bg-surface-container-lowest border border-outline-variant/30 hover:shadow-[0px_20px_50px_rgba(0,0,0,0.04)] transition-all duration-500">
              <div className="flex items-center gap-4 mb-6">
                <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>
                  star
                </span>
                {" "}
                <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>
                  star
                </span>
                {" "}
                <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>
                  star
                </span>
                {" "}
                <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>
                  star
                </span>
                {" "}
                <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>
                  star
                </span>
              </div>
              {" "}
              <h3 className="font-display-md text-headline-lg mb-6 leading-tight">"The transformation felt like a quiet evolution of self."</h3>
              {" "}
              <p className="font-body-md text-on-surface-variant mb-8">
                The Imperial Mahogany isn't just a piece; it's a mood. The lace melt is invisible, and the movement of the hair mimics natural growth perfectly. Every visit to the atelier is a masterclass in luxury.
              </p>
              {" "}
              <div className="flex items-center justify-between">
                <span className="text-label-caps tracking-[0.15em]">Published 12 Nov 2023</span>
                {" "}
                <Link className="text-primary text-label-caps border-b border-primary pb-1 tracking-[0.15em]" href="/reviews/new">
                  Edit Narrative
                </Link>
              </div>
            </article>
            {" "}
            <article className="p-10 bg-surface-container-lowest border border-outline-variant/30 hover:shadow-[0px_20px_50px_rgba(0,0,0,0.04)] transition-all duration-500">
              <div className="relative aspect-video mb-8 overflow-hidden group">
                <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" data-alt="A cinematic still of an elegant woman recording a video testimonial in a high-end salon. The background is softly blurred showing shelves of luxury hair care products. Warm, directional lighting creates a professional interview look with golden highlights in her dark burgundy hair." src="/stitch/img-067.jpg" />
                {" "}
                <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="material-symbols-outlined text-white text-6xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                    play_circle
                  </span>
                </div>
              </div>
              {" "}
              <h3 className="font-display-md text-headline-lg mb-4 leading-tight">Gala Ready with Noir Bob</h3>
              {" "}
              <p className="font-body-md text-on-surface-variant">A video chronicle of my transformation for the Autumn Gala.</p>
            </article>
          </div>
        </section>
        {/* Bespoke History (Concierge Timeline) */}
        <section className="mb-section-padding asymmetric-grid items-start">
          <div>
            <h2 className="font-display-lg text-headline-lg mb-12">Bespoke History</h2>
            {" "}
            <div className="space-y-0 relative border-l border-outline-variant/50 ml-4">
              <div className="relative pl-12 pb-16">
                <div className="absolute -left-[9px] top-0 w-4 h-4 bg-primary rounded-full ring-4 ring-background"></div>
                {" "}
                <span className="text-label-caps text-primary mb-2 block tracking-[0.15em]">15 Feb 2024</span>
                {" "}
                <h4 className="font-display-md text-headline-lg mb-2">Color Refresh & Style Consultation</h4>
                {" "}
                <p className="font-body-md text-on-surface-variant">Master Artist: Chiara | Service: Signature Tonal Glaze</p>
              </div>
              {" "}
              <div className="relative pl-12 pb-16">
                <div className="absolute -left-[9px] top-0 w-4 h-4 bg-outline-variant rounded-full ring-4 ring-background"></div>
                {" "}
                <span className="text-label-caps text-on-surface-variant mb-2 block tracking-[0.15em]">12 Nov 2023</span>
                {" "}
                <h4 className="font-display-md text-headline-lg mb-2">Bespoke Fitting: Imperial Mahogany</h4>
                {" "}
                <p className="font-body-md text-on-surface-variant">Master Artist: Elena | Service: HD Lace Customization</p>
              </div>
              {" "}
              <div className="relative pl-12">
                <div className="absolute -left-[9px] top-0 w-4 h-4 bg-outline-variant rounded-full ring-4 ring-background"></div>
                {" "}
                <span className="text-label-caps text-on-surface-variant mb-2 block tracking-[0.15em]">04 Aug 2023</span>
                {" "}
                <h4 className="font-display-md text-headline-lg mb-2">Scalp Wellness Ritual</h4>
                {" "}
                <p className="font-body-md text-on-surface-variant">Specialist: Marcus | Service: Silk Amino Treatment</p>
              </div>
            </div>
          </div>
          {/* Recommendations (Concierge Section) */}
          <div className="bg-surface-container-low p-10 mt-12 md:mt-24 border border-outline-variant/30 sticky top-32">
            <span className="font-body-sm text-label-caps text-primary mb-4 block tracking-[0.15em]">Concierge Curations</span>
            {" "}
            <h3 className="font-display-md text-headline-lg mb-6">Designed for You</h3>
            {" "}
            <p className="font-body-md text-on-surface-variant mb-10 italic">
              "Based on your preference for warm mahogany and sleek bobs, we've curated these pieces from the New Season."
            </p>
            {" "}
            <div className="space-y-8">
              <div className="flex gap-6 items-center group cursor-pointer">
                <div className="w-24 h-24 overflow-hidden">
                  <img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" data-alt="A minimalist product close-up of deep copper hair texture with golden highlights. The focus is on the tight, professional wave pattern and the high-gloss finish of the hair, presented in a luxury fashion magazine style." src="/stitch/img-127.jpg" />
                </div>
                {" "}
                <div>
                  <h5 className="font-body-md font-bold text-on-surface group-hover:text-primary transition-colors">
                    The Copper Silk Wave
                  </h5>
                  {" "}
                  <p className="font-body-sm text-on-surface-variant">Limited Edition Release</p>
                </div>
              </div>
              {" "}
              <div className="flex gap-6 items-center group cursor-pointer">
                <div className="w-24 h-24 overflow-hidden">
                  <img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" data-alt="Close-up photograph of a seamless lace closure showing the realistic scalp transition and natural hair spacing. The lighting is bright and clean, emphasizing the high-fidelity craft of the hairpiece." src="/stitch/img-101.jpg" />
                </div>
                {" "}
                <div>
                  <h5 className="font-body-md font-bold text-on-surface group-hover:text-primary transition-colors">
                    HD Seamless Frontal
                  </h5>
                  {" "}
                  <p className="font-body-sm text-on-surface-variant">Essential Upgrade</p>
                </div>
              </div>
            </div>
            {" "}
            <button className="mt-12 w-full bg-primary text-white py-5 font-body-md text-label-caps hover:bg-on-surface transition-all duration-500 tracking-widest">
              Book Your Session
            </button>
          </div>
        </section>
      </main>
      {/* Footer */}
      <footer className="w-full mt-section-padding bg-surface-container-lowest border-t border-outline-variant/50">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter px-margin-desktop py-section-padding max-w-container-max mx-auto">
          <div className="md:col-span-4">
            <Link className="font-display-md text-display-md text-primary mb-8 block tracking-[-0.01em]" href="/">
              VIET LUXE HAIR
            </Link>
            {" "}
            <p className="font-body-sm text-on-surface-variant max-w-xs mb-8">
              Crafting timeless elegance through the world's most exquisite hair artistry. Join our inner circle for exclusive atelier access.
            </p>
          </div>
          {" "}
          <div className="md:col-span-2">
            <h5 className="font-body-md text-label-caps text-on-surface mb-6 tracking-[0.15em]">Maison</h5>
            {" "}
            <ul className="space-y-4">
              <li>
                <Link className="font-body-sm text-on-surface-variant hover:text-primary underline decoration-1 underline-offset-4 transition-all" href="/gallery">
                  Story
                </Link>
              </li>
              {" "}
              <li>
                <Link className="font-body-sm text-on-surface-variant hover:text-primary underline decoration-1 underline-offset-4 transition-all" href="/about">
                  Sustainability
                </Link>
              </li>
              {" "}
              <li>
                <Link className="font-body-sm text-on-surface-variant hover:text-primary underline decoration-1 underline-offset-4 transition-all" href="/services">
                  Atelier
                </Link>
              </li>
            </ul>
          </div>
          {" "}
          <div className="md:col-span-2">
            <h5 className="font-body-md text-label-caps text-on-surface mb-6 tracking-[0.15em]">Support</h5>
            {" "}
            <ul className="space-y-4">
              <li>
                <Link className="font-body-sm text-on-surface-variant hover:text-primary underline decoration-1 underline-offset-4 transition-all" href="/contact">
                  Contact Us
                </Link>
              </li>
              {" "}
              <li>
                <Link className="font-body-sm text-on-surface-variant hover:text-primary underline decoration-1 underline-offset-4 transition-all" href="/shipping">
                  Shipping
                </Link>
              </li>
              {" "}
              <li>
                <Link className="font-body-sm text-on-surface-variant hover:text-primary underline decoration-1 underline-offset-4 transition-all" href="/returns">
                  Returns
                </Link>
              </li>
            </ul>
          </div>
          {" "}
          <div className="md:col-span-4">
            <h5 className="font-body-md text-label-caps text-on-surface mb-6 tracking-[0.15em]">Stay Informed</h5>
            {" "}
            <div className="flex border-b border-outline-variant pb-2">
              <input className="bg-transparent border-none focus:ring-0 flex-1 font-body-sm" placeholder="Email Address" type="email" />
              {" "}
              <button className="material-symbols-outlined text-primary">arrow_forward</button>
            </div>
          </div>
          {" "}
          <div className="md:col-span-12 pt-12 flex flex-col md:flex-row justify-between items-center gap-6 border-t border-outline-variant/30 mt-12">
            <p className="font-body-sm text-on-surface-variant">© 2024 VIET LUXE HAIR. ALL RIGHTS RESERVED.</p>
            {" "}
            <div className="flex gap-8">
              <Link className="font-body-sm text-on-surface-variant hover:text-primary" href="/privacy">Privacy Policy</Link>
              {" "}
              <Link className="font-body-sm text-on-surface-variant hover:text-primary" href="/terms">Terms of Service</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
