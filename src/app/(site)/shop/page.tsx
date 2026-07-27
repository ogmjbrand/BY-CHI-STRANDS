import Link from "next/link";
import type { Metadata } from "next";

/**
 * BY CHI STRANDS — Stitch screen: digital_flagship_shop_all
 * "The Collection | ByChi Strands"
 */

export const metadata: Metadata = {
  title: "The Collection",
};

export default function ShopAllPage() {
  return (
    <div className="scr-shop-all text-on-surface">
      {/* TopNavBar */}
      <header className="bg-surface/80 dark:bg-surface-container-highest/80 backdrop-blur-xl docked full-width top-0 sticky z-50 border-b border-outline-variant/30">
        <nav className="flex justify-between items-center w-full px-margin-desktop py-unit max-w-container-max mx-auto h-20">
          <div className="flex items-center gap-12">
            <Link className="font-display-lg text-display-md font-bold tracking-tighter text-on-surface dark:text-surface-bright" href="/">
              ByChi Strands
            </Link>
            {" "}
            <div className="hidden md:flex gap-8 font-body-md text-body-sm uppercase tracking-widest">
              <Link className="text-primary font-semibold border-b border-primary pb-1" href="/shop">Shop</Link>
              {" "}
              <Link className="text-on-surface-variant hover:text-primary transition-colors duration-300" href="/collections">
                Collections
              </Link>
              {" "}
              <Link className="text-on-surface-variant hover:text-primary transition-colors duration-300" href="/services">
                Services
              </Link>
              {" "}
              <Link className="text-on-surface-variant hover:text-primary transition-colors duration-300" href="/academy">
                Academy
              </Link>
              {" "}
              <Link className="text-on-surface-variant hover:text-primary transition-colors duration-300" href="/about">
                About
              </Link>
            </div>
          </div>
          {" "}
          <div className="flex items-center gap-6">
            <button className="hidden lg:block font-body-md text-body-sm uppercase tracking-widest text-on-surface hover:text-primary transition-all">
              Book Appointment
            </button>
            {" "}
            <button className="relative hover:scale-95 transition-transform duration-300">
              <span className="material-symbols-outlined text-2xl" data-icon="shopping_bag">shopping_bag</span>
              {" "}
              <span className="absolute -top-1 -right-1 bg-primary text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
                0
              </span>
            </button>
            {" "}
            <button className="md:hidden">
              <span className="material-symbols-outlined text-3xl" data-icon="menu">menu</span>
            </button>
          </div>
        </nav>
      </header>
      <main className="max-w-container-max mx-auto px-margin-desktop py-section-padding">
        {/* Editorial Header */}
        <header className="mb-20">
          <h1 className="font-display-lg text-display-lg text-on-surface mb-6 tracking-[-0.02em]">The Collection</h1>
          {" "}
          <p className="font-body-xl text-body-xl text-on-surface-variant max-w-2xl">
            Elevate your presence with our meticulously curated selection of premium Vietnamese hair. Each strand is a testament to timeless sophistication and editorial excellence.
          </p>
        </header>
        {" "}
        <div className="flex flex-col lg:flex-row gap-gutter">
          {/* Filters Sidebar (Sticky) */}
          <aside className="w-full lg:w-64 flex-shrink-0">
            <div className="sticky top-32 space-y-10">
              <div>
                <h3 className="font-label-caps text-label-caps uppercase text-primary mb-6 tracking-[0.15em]">
                  Hair Grade
                </h3>
                {" "}
                <div className="space-y-3">
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <input className="rounded-sm border-outline text-primary focus:ring-primary w-4 h-4" type="checkbox" />
                    {" "}
                    <span className="font-body-sm text-body-sm text-on-surface-variant group-hover:text-on-surface transition-colors">
                      Raw Vietnamese (13A)
                    </span>
                  </label>
                  {" "}
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <input className="rounded-sm border-outline text-primary focus:ring-primary w-4 h-4" type="checkbox" />
                    {" "}
                    <span className="font-body-sm text-body-sm text-on-surface-variant group-hover:text-on-surface transition-colors">
                      Virgin Luxury (12A)
                    </span>
                  </label>
                </div>
              </div>
              {" "}
              <div>
                <h3 className="font-label-caps text-label-caps uppercase text-primary mb-6 tracking-[0.15em]">
                  Length
                </h3>
                {" "}
                <div className="grid grid-cols-3 gap-2">
                  <button className="border border-outline-variant py-2 font-body-sm text-body-sm hover:border-primary hover:text-primary transition-all">
                    18"
                  </button>
                  {" "}
                  <button className="border border-outline-variant py-2 font-body-sm text-body-sm hover:border-primary hover:text-primary transition-all">
                    22"
                  </button>
                  {" "}
                  <button className="border border-outline-variant py-2 font-body-sm text-body-sm hover:border-primary hover:text-primary transition-all">
                    26"
                  </button>
                  {" "}
                  <button className="border border-primary bg-primary-fixed/20 py-2 font-body-sm text-body-sm text-primary transition-all">
                    30"
                  </button>
                  {" "}
                  <button className="border border-outline-variant py-2 font-body-sm text-body-sm hover:border-primary hover:text-primary transition-all">
                    34"
                  </button>
                </div>
              </div>
              {" "}
              <div>
                <h3 className="font-label-caps text-label-caps uppercase text-primary mb-6 tracking-[0.15em]">
                  Texture
                </h3>
                {" "}
                <div className="space-y-3">
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <input className="rounded-full border-outline text-primary focus:ring-primary w-4 h-4" name="texture" type="radio" />
                    {" "}
                    <span className="font-body-sm text-body-sm text-on-surface-variant group-hover:text-on-surface transition-colors">
                      Silk Straight
                    </span>
                  </label>
                  {" "}
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <input className="rounded-full border-outline text-primary focus:ring-primary w-4 h-4" name="texture" type="radio" />
                    {" "}
                    <span className="font-body-sm text-body-sm text-on-surface-variant group-hover:text-on-surface transition-colors">
                      Loose Wave
                    </span>
                  </label>
                  {" "}
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <input className="rounded-full border-outline text-primary focus:ring-primary w-4 h-4" name="texture" type="radio" />
                    {" "}
                    <span className="font-body-sm text-body-sm text-on-surface-variant group-hover:text-on-surface transition-colors">
                      Deep Curl
                    </span>
                  </label>
                </div>
              </div>
              {" "}
              <div className="pt-6 border-t border-outline-variant/30">
                <button className="w-full text-left font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-all flex justify-between items-center">
                  Lace Type
                  {" "}
                  <span className="material-symbols-outlined" data-icon="expand_more">expand_more</span>
                </button>
              </div>
            </div>
          </aside>
          {/* Product Grid */}
          <div className="flex-grow">
            <div className="flex justify-between items-center mb-10">
              <p className="font-body-sm text-body-sm text-on-surface-variant">Showing 12 of 48 results</p>
              {" "}
              <div className="flex items-center gap-4">
                <span className="font-body-sm text-body-sm text-on-surface-variant">Sort by:</span>
                {" "}
                <select className="border-none bg-transparent font-body-sm text-body-sm focus:ring-0 cursor-pointer">
                  <option>Newest Arrivals</option>
                  {" "}
                  <option>Price: Low to High</option>
                  {" "}
                  <option>Price: High to Low</option>
                </select>
              </div>
            </div>
            {" "}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-gutter gap-y-16">
              {/* Product 1: Custom Wig */}
              <div className="product-card group relative">
                <div className="relative aspect-[3/4] overflow-hidden bg-surface-container-low border border-outline-variant/10">
                  <img className="w-full h-full object-cover transition-transform duration-700" data-alt="A luxurious custom wig made of sleek black Vietnamese hair, styled in a long straight cut. The hair has a high-gloss silk finish and is displayed on a minimalist cream-colored mannequin bust against a soft ivory background. High-key lighting highlights the impeccable quality and texture of the hair." src="/stitch/img-098.jpg" />
                  {" "}
                  <div className="product-card-overlay absolute inset-0 bg-black/5 backdrop-blur-[2px] flex flex-col justify-end p-6">
                    <button className="w-full bg-white text-on-surface py-4 font-label-caps text-label-caps uppercase tracking-widest hover:bg-primary hover:text-white transition-all duration-300">
                      Quick View
                    </button>
                  </div>
                  {" "}
                  <button className="absolute top-4 right-4 w-10 h-10 bg-white/80 backdrop-blur rounded-full flex items-center justify-center text-on-surface hover:text-primary transition-colors">
                    <span className="material-symbols-outlined" data-icon="favorite">favorite</span>
                  </button>
                </div>
                {" "}
                <div className="mt-6 space-y-1">
                  <h3 className="font-headline-lg text-body-xl text-on-surface group-hover:text-primary transition-colors">
                    Signature Silk Straight Wig
                  </h3>
                  {" "}
                  <p className="font-body-sm text-body-sm text-on-surface-variant">HD Lace Frontal · 24 Inches</p>
                  {" "}
                  <p className="font-body-md text-body-md font-semibold text-secondary pt-2">$1,250.00</p>
                </div>
              </div>
              {/* Product 2: Raw Bundles */}
              <div className="product-card group relative">
                <div className="relative aspect-[3/4] overflow-hidden bg-surface-container-low border border-outline-variant/10">
                  <img className="w-full h-full object-cover transition-transform duration-700" data-alt="Three bundles of premium raw Vietnamese hair in a deep wavy texture, arranged elegantly on a white silk cloth. The lighting is soft and cinematic, casting delicate shadows that emphasize the organic waves and natural luster of the hair. The scene evokes luxury and craftsmanship." src="/stitch/img-029.jpg" />
                  {" "}
                  <div className="product-card-overlay absolute inset-0 bg-black/5 backdrop-blur-[2px] flex flex-col justify-end p-6">
                    <button className="w-full bg-white text-on-surface py-4 font-label-caps text-label-caps uppercase tracking-widest hover:bg-primary hover:text-white transition-all duration-300">
                      Quick View
                    </button>
                  </div>
                  {" "}
                  <button className="absolute top-4 right-4 w-10 h-10 bg-white/80 backdrop-blur rounded-full flex items-center justify-center text-on-surface hover:text-primary transition-colors">
                    <span className="material-symbols-outlined" data-icon="favorite">favorite</span>
                  </button>
                </div>
                {" "}
                <div className="mt-6 space-y-1">
                  <h3 className="font-headline-lg text-body-xl text-on-surface group-hover:text-primary transition-colors">
                    Raw Vietnamese Bundles
                  </h3>
                  {" "}
                  <p className="font-body-sm text-body-sm text-on-surface-variant">Natural Deep Wave · 3 Bundle Set</p>
                  {" "}
                  <p className="font-body-md text-body-md font-semibold text-secondary pt-2">$480.00</p>
                </div>
              </div>
              {/* Product 3: Frontal */}
              <div className="product-card group relative">
                <div className="relative aspect-[3/4] overflow-hidden bg-surface-container-low border border-outline-variant/10">
                  <img className="w-full h-full object-cover transition-transform duration-700" data-alt="Close-up shot of a high-definition 13x6 lace frontal with a natural hairline and baby hairs. The lace is nearly invisible against a neutral skin tone background, showcasing the meticulous craftsmanship of ByChi Strands. The lighting is crisp, highlighting the detail of the hand-tied strands." src="/stitch/img-011.jpg" />
                  {" "}
                  <div className="product-card-overlay absolute inset-0 bg-black/5 backdrop-blur-[2px] flex flex-col justify-end p-6">
                    <button className="w-full bg-white text-on-surface py-4 font-label-caps text-label-caps uppercase tracking-widest hover:bg-primary hover:text-white transition-all duration-300">
                      Quick View
                    </button>
                  </div>
                  {" "}
                  <button className="absolute top-4 right-4 w-10 h-10 bg-white/80 backdrop-blur rounded-full flex items-center justify-center text-on-surface hover:text-primary transition-colors">
                    <span className="material-symbols-outlined" data-icon="favorite">favorite</span>
                  </button>
                </div>
                {" "}
                <div className="mt-6 space-y-1">
                  <h3 className="font-headline-lg text-body-xl text-on-surface group-hover:text-primary transition-colors">
                    HD Invisible Lace Frontal
                  </h3>
                  {" "}
                  <p className="font-body-sm text-body-sm text-on-surface-variant">13x6 Hand-Tied · Natural Black</p>
                  {" "}
                  <p className="font-body-md text-body-md font-semibold text-secondary pt-2">$220.00</p>
                </div>
              </div>
              {/* Product 4: Colored Custom Wig */}
              <div className="product-card group relative">
                <div className="relative aspect-[3/4] overflow-hidden bg-surface-container-low border border-outline-variant/10">
                  <img className="w-full h-full object-cover transition-transform duration-700" data-alt="A vibrant copper-colored custom wig with voluminous waves, displayed in a studio setting. The lighting is warm and golden, complementing the hair's rich tones. The composition is artistic, focusing on the movement and flow of the curls, set against a minimalist gray backdrop for maximum contrast." src="/stitch/img-094.jpg" />
                  {" "}
                  <div className="product-card-overlay absolute inset-0 bg-black/5 backdrop-blur-[2px] flex flex-col justify-end p-6">
                    <button className="w-full bg-white text-on-surface py-4 font-label-caps text-label-caps uppercase tracking-widest hover:bg-primary hover:text-white transition-all duration-300">
                      Quick View
                    </button>
                  </div>
                  {" "}
                  <button className="absolute top-4 right-4 w-10 h-10 bg-white/80 backdrop-blur rounded-full flex items-center justify-center text-on-surface hover:text-primary transition-colors">
                    <span className="material-symbols-outlined" data-icon="favorite">favorite</span>
                  </button>
                </div>
                {" "}
                <div className="mt-6 space-y-1">
                  <h3 className="font-headline-lg text-body-xl text-on-surface group-hover:text-primary transition-colors">
                    Sunset Copper Wave Unit
                  </h3>
                  {" "}
                  <p className="font-body-sm text-body-sm text-on-surface-variant">Custom Colored · Luxury 12A Grade</p>
                  {" "}
                  <p className="font-body-md text-body-md font-semibold text-secondary pt-2">$1,450.00</p>
                </div>
              </div>
              {/* Product 5: Bob Wig */}
              <div className="product-card group relative">
                <div className="relative aspect-[3/4] overflow-hidden bg-surface-container-low border border-outline-variant/10">
                  <img className="w-full h-full object-cover transition-transform duration-700" data-alt="A sharp, asymmetrical bob wig in a deep espresso color. The hair is styled to a mirror-like shine. The photograph is shot from a low angle to emphasize the architectural lines of the cut. The background is a clean, bright ivory, maintaining the editorial luxury aesthetic." src="/stitch/img-080.jpg" />
                  {" "}
                  <div className="product-card-overlay absolute inset-0 bg-black/5 backdrop-blur-[2px] flex flex-col justify-end p-6">
                    <button className="w-full bg-white text-on-surface py-4 font-label-caps text-label-caps uppercase tracking-widest hover:bg-primary hover:text-white transition-all duration-300">
                      Quick View
                    </button>
                  </div>
                  {" "}
                  <button className="absolute top-4 right-4 w-10 h-10 bg-white/80 backdrop-blur rounded-full flex items-center justify-center text-on-surface hover:text-primary transition-colors">
                    <span className="material-symbols-outlined" data-icon="favorite">favorite</span>
                  </button>
                </div>
                {" "}
                <div className="mt-6 space-y-1">
                  <h3 className="font-headline-lg text-body-xl text-on-surface group-hover:text-primary transition-colors">
                    Architectural Bob Unit
                  </h3>
                  {" "}
                  <p className="font-body-sm text-body-sm text-on-surface-variant">Pre-Cut Lace · Silk Finish</p>
                  {" "}
                  <p className="font-body-md text-body-md font-semibold text-secondary pt-2">$890.00</p>
                </div>
              </div>
              {/* Product 6: Raw Bulk Hair */}
              <div className="product-card group relative">
                <div className="relative aspect-[3/4] overflow-hidden bg-surface-container-low border border-outline-variant/10">
                  <img className="w-full h-full object-cover transition-transform duration-700" data-alt="Bundles of raw Vietnamese bulk hair, unwefted and loose, showcasing the pure quality of the strands. The hair is draped over a polished wooden surface, with soft morning light streaming in from a window, highlighting the natural brown undertones and raw texture of the hair." src="/stitch/img-106.jpg" />
                  {" "}
                  <div className="product-card-overlay absolute inset-0 bg-black/5 backdrop-blur-[2px] flex flex-col justify-end p-6">
                    <button className="w-full bg-white text-on-surface py-4 font-label-caps text-label-caps uppercase tracking-widest hover:bg-primary hover:text-white transition-all duration-300">
                      Quick View
                    </button>
                  </div>
                  {" "}
                  <button className="absolute top-4 right-4 w-10 h-10 bg-white/80 backdrop-blur rounded-full flex items-center justify-center text-on-surface hover:text-primary transition-colors">
                    <span className="material-symbols-outlined" data-icon="favorite">favorite</span>
                  </button>
                </div>
                {" "}
                <div className="mt-6 space-y-1">
                  <h3 className="font-headline-lg text-body-xl text-on-surface group-hover:text-primary transition-colors">
                    Raw Vietnamese Bulk Hair
                  </h3>
                  {" "}
                  <p className="font-body-sm text-body-sm text-on-surface-variant">Braiding & Custom Ventilating · 100g</p>
                  {" "}
                  <p className="font-body-md text-body-md font-semibold text-secondary pt-2">$180.00</p>
                </div>
              </div>
            </div>
            {/* Pagination */}
            <div className="mt-section-padding flex justify-center items-center gap-4">
              <button className="w-12 h-12 border border-outline-variant flex items-center justify-center hover:border-primary transition-all">
                <span className="material-symbols-outlined" data-icon="chevron_left">chevron_left</span>
              </button>
              {" "}
              <button className="w-12 h-12 bg-primary text-white flex items-center justify-center">1</button>
              {" "}
              <button className="w-12 h-12 border border-outline-variant flex items-center justify-center hover:border-primary transition-all">
                2
              </button>
              {" "}
              <button className="w-12 h-12 border border-outline-variant flex items-center justify-center hover:border-primary transition-all">
                3
              </button>
              {" "}
              <button className="w-12 h-12 border border-outline-variant flex items-center justify-center hover:border-primary transition-all">
                <span className="material-symbols-outlined" data-icon="chevron_right">chevron_right</span>
              </button>
            </div>
          </div>
        </div>
      </main>
      {/* Footer */}
      <footer className="bg-surface-container-low dark:bg-surface-container-highest full-width border-t border-outline-variant/30">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter px-margin-desktop py-section-padding max-w-container-max mx-auto">
          <div className="col-span-1 md:col-span-1">
            <h2 className="font-display-md text-headline-lg text-primary mb-6">ByChi Strands</h2>
            {" "}
            <p className="font-body-sm text-body-sm text-on-surface-variant mb-8">
              Defining the pinnacle of Vietnamese hair artistry. Timeless, sophisticated, and uncompromising in quality.
            </p>
          </div>
          {" "}
          <div>
            <h4 className="font-label-caps text-label-caps uppercase text-on-surface mb-6 tracking-[0.15em]">
              Discover
            </h4>
            {" "}
            <ul className="space-y-4 font-body-sm text-body-sm text-on-surface-variant">
              <li>
                <Link className="hover:underline decoration-primary transition-all" href="/collections">Collections</Link>
              </li>
              {" "}
              <li>
                <a className="hover:underline decoration-primary transition-all" href="#">Raw Bundles</a>
              </li>
              {" "}
              <li>
                <a className="hover:underline decoration-primary transition-all" href="#">Custom Units</a>
              </li>
              {" "}
              <li>
                <a className="hover:underline decoration-primary transition-all" href="#">Lace Systems</a>
              </li>
            </ul>
          </div>
          {" "}
          <div>
            <h4 className="font-label-caps text-label-caps uppercase text-on-surface mb-6 tracking-[0.15em]">
              Support
            </h4>
            {" "}
            <ul className="space-y-4 font-body-sm text-body-sm text-on-surface-variant">
              <li>
                <Link className="hover:underline decoration-primary transition-all" href="/privacy">Privacy Policy</Link>
              </li>
              {" "}
              <li>
                <Link className="hover:underline decoration-primary transition-all" href="/terms">Terms of Service</Link>
              </li>
              {" "}
              <li>
                <Link className="hover:underline decoration-primary transition-all" href="/shipping">Shipping & Returns</Link>
              </li>
              {" "}
              <li>
                <a className="hover:underline decoration-primary transition-all" href="https://wa.me/2340000000000">
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>
          {" "}
          <div>
            <h4 className="font-label-caps text-label-caps uppercase text-on-surface mb-6 tracking-[0.15em]">
              Social
            </h4>
            {" "}
            <div className="flex gap-4">
              <a className="w-10 h-10 rounded-full bg-surface-variant flex items-center justify-center hover:bg-primary hover:text-white transition-all" href="#">
                <span className="material-symbols-outlined text-xl" data-icon="camera">camera</span>
              </a>
              {" "}
              <a className="w-10 h-10 rounded-full bg-surface-variant flex items-center justify-center hover:bg-primary hover:text-white transition-all" href="#">
                <span className="material-symbols-outlined text-xl" data-icon="videocam">videocam</span>
              </a>
            </div>
            {" "}
            <div className="mt-8">
              <p className="font-label-caps text-[10px] text-on-surface-variant mb-2">Newsletter</p>
              {" "}
              <div className="relative">
                <input className="w-full bg-transparent border-0 border-b border-outline-variant py-2 focus:ring-0 focus:border-primary font-body-sm text-body-sm" placeholder="Email Address" type="email" />
                {" "}
                <button className="absolute right-0 bottom-2">
                  <span className="material-symbols-outlined text-primary" data-icon="arrow_forward">arrow_forward</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        {" "}
        <div className="px-margin-desktop py-8 border-t border-outline-variant/10 text-center">
          <p className="font-body-sm text-[12px] text-on-surface-variant opacity-60">© 2024 ByChi Strands. Timeless Vietnamese Artistry.</p>
        </div>
      </footer>
    </div>
  );
}
