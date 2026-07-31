import Link from "next/link";
import { site } from "@/lib/site";

/**
 * The reference template's "We Love Selfies" social banner + Instagram
 * photo strip. There's no live Instagram API wired up here, so rather than
 * fabricate a scrolling "feed", this links out to the real profile and
 * shows real client/product photography already in the catalogue as a
 * preview grid — honestly labelled as a link out, not a live embed.
 */
const STRIP_PHOTOS = [
  { src: "/products/IMG-20260726-WA0019.jpg", alt: "Client wearing the burgundy pixie curl unit at an event" },
  { src: "/products/IMG-20260727-WA0017.jpg", alt: "Honey deep curl frontal unit on a studio stand" },
  { src: "/products/IMG-20260726-WA0012.jpg", alt: "Client wearing the bone straight bob length" },
  { src: "/products/IMG-20260727-WA0045.jpg", alt: "Copper, wine and espresso units displayed together" },
  { src: "/products/IMG-20260726-WA0015.jpg", alt: "Natural black bone straight closure wig on a studio stand" },
  { src: "/products/IMG-20260727-WA0001.jpg", alt: "Pixie curl units shown at 12, 14, 16 and 18 inches" },
];

export function InstagramStrip() {
  return (
    <section className="bg-noir py-section-padding">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop text-center mb-10">
        <span className="font-label-caps text-label-caps uppercase tracking-[0.28em] text-gold mb-4 block">
          Tag Us
        </span>
        <h2 className="font-display-md text-headline-lg-mobile md:text-display-md text-white tracking-[-0.01em] mb-6">
          We Love Your Selfies
        </h2>
        <a
          href={site.socials.instagram.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 border border-gold text-gold px-8 py-4 font-label-caps text-label-caps uppercase tracking-[0.15em] hover:bg-gold hover:text-noir transition-colors"
        >
          {site.socials.instagram.handle} on Instagram
          <span className="material-symbols-outlined text-[18px]">arrow_outward</span>
        </a>
      </div>

      <a
        href={site.socials.instagram.url}
        target="_blank"
        rel="noopener noreferrer"
        className="grid grid-cols-3 md:grid-cols-6 gap-1 group"
        aria-label={`Visit ${site.socials.instagram.handle} on Instagram`}
      >
        {STRIP_PHOTOS.map((photo) => (
          <div key={photo.src} className="relative aspect-square overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={photo.src}
              alt={photo.alt}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-noir/0 hover:bg-noir/40 transition-colors flex items-center justify-center">
              <span className="material-symbols-outlined text-white opacity-0 hover:opacity-100 transition-opacity">
                photo_camera
              </span>
            </div>
          </div>
        ))}
      </a>
    </section>
  );
}
