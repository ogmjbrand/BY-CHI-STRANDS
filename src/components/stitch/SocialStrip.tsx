import { site } from "@/lib/site";

/** Real catalogue/lifestyle photography, not stock — same assets used elsewhere on the site. */
const PHOTOS = [
  "/products/IMG-20260727-WA0045.jpg",
  "/products/IMG-20260726-WA0019.jpg",
  "/products/IMG-20260727-WA0017.jpg",
  "/products/IMG-20260726-WA0012.jpg",
  "/products/boutique-lineup-1.jpg",
  "/products/IMG-20260726-WA0015.jpg",
];

/** A real photo strip linking out to the real @bychistrands2 profile — not a decorative grid. */
export function SocialStrip({ dark = false }: { dark?: boolean }) {
  return (
    <div className={`border-t py-12 ${dark ? "border-white/10" : "border-outline-variant/20"}`}>
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="flex items-center justify-between mb-6">
          <p
            className={`font-label-caps text-label-caps uppercase tracking-[0.2em] ${
              dark ? "text-white/60" : "text-on-surface-variant"
            }`}
          >
            Follow {site.socials.instagram.handle}
          </p>
          <a
            href={site.socials.instagram.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`font-label-caps text-xs border-b pb-0.5 shrink-0 ${
              dark ? "text-gold-light border-gold-light" : "text-primary border-primary"
            }`}
          >
            View on Instagram
          </a>
        </div>
        <div className="grid grid-cols-3 sm:grid-cols-6 gap-1">
          {PHOTOS.map((src, i) => (
            <a
              key={src}
              href={site.socials.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Photograph ${i + 1} of ${PHOTOS.length} — open ${site.socials.instagram.handle} on Instagram`}
              className="aspect-square overflow-hidden group block"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={src}
                alt=""
                loading="lazy"
                className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
