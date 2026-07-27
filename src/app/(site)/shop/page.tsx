import type { Metadata } from "next";
import Link from "next/link";
import { ShopBrowser } from "@/components/stitch/ShopBrowser";

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
          <ShopBrowser />
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
