import type { Metadata } from "next";
import { ShopBrowser } from "@/components/stitch/ShopBrowser";
import { TextureGuide } from "@/components/stitch/TextureGuide";

/**
 * BY CHI STRANDS — Stitch screen: digital_flagship_shop_all
 * "The Collection | ByChi Strands"
 *
 * The screen export shipped its own header and footer, and both were dead
 * markup: a bag button with a hardcoded "0" badge and no handler, a "Book
 * Appointment" <button> that navigated nowhere, no mobile menu affordance at
 * all, a newsletter field with no submit, and a hardcoded "© 2024". They are
 * replaced with the site's real chrome, which carries working search, bag,
 * wishlist and mobile navigation.
 */
export const metadata: Metadata = {
  title: "The Collection",
};

export default function ShopAllPage() {
  return (
    <div className="scr-shop-all theme-noir bg-surface text-on-surface">
      {/* pt-40 was clearance for a fixed header. The house header is sticky
          and takes its own space, so that was 160px of nothing at the top of
          the page whose job is showing product. */}
      <main className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop pt-10 md:pt-20 pb-section-padding">
        <header className="mb-10 md:mb-16">
          <h1 className="font-display-lg text-headline-lg-mobile md:text-display-lg text-on-surface mb-6 tracking-[-0.02em]">
            The Collection
          </h1>
          <p className="font-body-xl text-body-xl text-on-surface-variant max-w-2xl">
            Elevate your presence with our meticulously curated selection of premium
            Vietnamese hair. Each strand is a testament to timeless sophistication and
            editorial excellence.
          </p>
        </header>

        <div className="flex flex-col lg:flex-row gap-gutter">
          <ShopBrowser />
        </div>

        {/* The texture guide is a reference, not a gate. It used to sit
            between the page heading and the first product, which on a phone
            put two large plates in front of everything the visitor came
            for. */}
        <TextureGuide />
      </main>
    </div>
  );
}
