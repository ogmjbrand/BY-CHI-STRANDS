import type { Metadata } from "next";
import Link from "next/link";
import { ShopBrowser } from "@/components/stitch/ShopBrowser";
import { TextureGuide } from "@/components/stitch/TextureGuide";
import { SiteHeader } from "@/components/stitch/SiteHeader";
import { site, whatsappLink } from "@/lib/site";

/**
 * BY CHI STRANDS — Stitch screen: digital_flagship_shop_all
 * "The Collection | ByChi Strands"
 */

export const metadata: Metadata = {
  title: "The Collection",
};

export default function ShopAllPage() {
  return (
    <div className="scr-shop-all theme-noir bg-surface text-on-surface">
      <SiteHeader dark />
      <main className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-section-padding">
        {/* Editorial Header */}
        <header className="mb-20 reveal">
          <h1 className="font-display-lg text-headline-lg-mobile md:text-display-lg text-on-surface mb-6 tracking-[-0.02em]">The Collection</h1>
          {" "}
          <p className="font-body-xl text-body-xl text-on-surface-variant max-w-2xl">
            Elevate your presence with our meticulously curated selection of premium Vietnamese hair. Each strand is a testament to timeless sophistication and editorial excellence.
          </p>
        </header>
        {" "}
        <div className="reveal">
          <TextureGuide />
        </div>
        <div className="flex flex-col lg:flex-row gap-gutter">
          <ShopBrowser />
        </div>
      </main>
      {/* Footer */}
      <footer className="bg-surface-container-low full-width border-t border-outline-variant/30">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter px-margin-mobile md:px-margin-desktop py-section-padding max-w-container-max mx-auto">
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
                <Link className="hover:underline decoration-primary transition-all" href="/services">Services</Link>
              </li>
              {" "}
              <li>
                <Link className="hover:underline decoration-primary transition-all" href="/academy">Academy</Link>
              </li>
              {" "}
              <li>
                <Link className="hover:underline decoration-primary transition-all" href="/aftercare">Care Guide</Link>
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
                <a
                  className="hover:underline decoration-primary transition-all"
                  href={whatsappLink("Hi ByChiStrands — I have a question about an order.")}
                  target="_blank"
                  rel="noopener noreferrer"
                >
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
              <a
                className="w-10 h-10 rounded-full bg-surface-variant flex items-center justify-center hover:bg-primary hover:text-white transition-all"
                href={site.socials.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <span className="material-symbols-outlined text-xl" data-icon="camera">camera</span>
              </a>
              {" "}
              <a
                className="w-10 h-10 rounded-full bg-surface-variant flex items-center justify-center hover:bg-primary hover:text-white transition-all"
                href={site.socials.tiktok.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
              >
                <span className="material-symbols-outlined text-xl" data-icon="videocam">videocam</span>
              </a>
              {" "}
              <a
                className="w-10 h-10 rounded-full bg-surface-variant flex items-center justify-center hover:bg-primary hover:text-white transition-all"
                href={site.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
              >
                <span className="material-symbols-outlined text-xl" data-icon="chat">chat</span>
              </a>
            </div>
          </div>
        </div>
        {" "}
        <div className="px-margin-mobile md:px-margin-desktop py-8 border-t border-outline-variant/10 text-center">
          <p className="font-body-sm text-[12px] text-on-surface-variant opacity-60">
            © {new Date().getFullYear()} ByChi Strands. Timeless Vietnamese Artistry.
          </p>
        </div>
      </footer>
    </div>
  );
}
