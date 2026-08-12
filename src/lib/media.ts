/**
 * Real ByChiStrands media, mapped to the catalogue.
 *
 * Every entry below was assigned by viewing the footage — colour, texture and
 * construction were matched to the product rather than paired by index. Videos
 * carry a poster frame generated from the clip itself so the grid paints
 * immediately instead of showing a black rectangle while the file streams.
 */

export interface Media {
  type: "video" | "image";
  src: string;
  poster?: string;
  alt: string;
}

const vid = (dir: "products" | "testimony", file: string, alt: string): Media => ({
  type: "video",
  src: `/${dir}/${file}.mp4`,
  poster: `/media/posters/${file}.jpg`,
  alt,
});

const img = (file: string, alt: string): Media => ({
  type: "image",
  src: `/products/${file}.jpg`,
  alt,
});

const MEDIA: Record<string, Media[]> = {
  "sdd-vietnam-bone-straight": [
    img("IMG-20260726-WA0015", "Natural black bone straight closure wig on a studio stand"),
    vid("products", "VID-20260727-WA0027", "Bone straight unit combed through to show the blunt hemline"),
    vid("products", "VID-20260727-WA0050", "Client wearing a long bone straight unit"),
    vid("products", "VID-20260727-WA0054", "Client wearing the shorter bone straight length"),
    vid("products", "VID-20260727-WA0057", "Bone straight bob worn out"),
    img("IMG-20260726-WA0012", "Client wearing the bone straight bob length"),
  ],
  "sdd-vietnam-bone-straight-wine": [
    vid("products", "VID-20260727-WA0032", "Wine bone straight unit with a dark root on the stand"),
    vid("products", "VID-20260726-WA0011", "Client wearing the wine and dark root bone straight unit"),
  ],
  "sdd-china-pixie-curls-burgundy": [
    vid("products", "VID-20260726-WA0016", "Client wearing the burgundy pixie curl unit"),
    vid("products", "VID-20260727-WA0012", "Burgundy pixie curl unit shown on the stand"),
    img("IMG-20260726-WA0019", "Client wearing the burgundy pixie curl unit at an event"),
  ],
  "luxury-mexican-sdd-pixie": [
    vid("products", "VID-20260727-WA0019", "Mexican Super Double Drawn pixie curls at full density"),
    img("IMG-20260727-WA0001", "Pixie curl units shown at 12, 14, 16 and 18 inches"),
    vid("products", "VID-20260727-WA0014", "Client wearing the pixie curl volume, shown from the back"),
  ],
  "funmi-fringe-wig": [
    vid("products", "VID-20260727-WA0041", "Funmi fringe unit with the curl bouncing at the ends"),
    vid("products", "VID-20260727-WA0029", "Funmi curl texture shown by hand in the studio"),
  ],
  "sdd-copper-flame-straight": [
    vid("products", "VID-20260727-WA0046", "Copper flame straight unit on a styling head"),
    vid("products", "VID-20260727-WA0004", "Client wearing long copper straight hair"),
    vid("products", "VID-20260727-WA0035", "Copper straight length shown in the studio"),
    img("IMG-20260727-WA0045", "Copper, wine and espresso units displayed together"),
  ],
  "sdd-honey-blonde-straight": [
    vid("products", "VID-20260727-WA0036", "Client wearing the honey blonde straight frontal unit"),
  ],
  "sdd-honey-deep-curls": [
    img("IMG-20260727-WA0017", "Honey deep curl frontal unit on a studio stand"),
  ],
  "sdd-china-bold-pixie-curls": [
    vid("products", "VID-20260727-WA0049", "SDD China Bold Pixie Curls — natural colour, 5x5 closure"),
  ],
  "rose-bob-wig": [
    vid("products", "VID-20260726-WA0020", "Client wearing the rose pink blunt bob"),
  ],
};

const FALLBACK: Media = MEDIA["sdd-vietnam-bone-straight"][0];

export function mediaFor(slug: string): Media[] {
  return MEDIA[slug] ?? [FALLBACK];
}

export function heroFor(slug: string): Media {
  return mediaFor(slug)[0] ?? FALLBACK;
}

export function posterFor(slug: string): string {
  const m = heroFor(slug);
  return m.type === "video" ? (m.poster ?? FALLBACK.src) : m.src;
}

export const testimonyClips: Media[] = [
  vid("testimony", "reviews from Princess", "Princess reviewing her ByChiStrands unit to camera"),
  vid("testimony", "VID-20260727-WA0052", "Client showing her finished install"),
  vid("testimony", "reviews", "Client unboxing her ByChiStrands order"),
  vid("testimony", "VID-20260726-WA0010", "Client speaking about her wig on camera"),
  vid("testimony", "VID-20260727-WA0036", "Client wearing her honey blonde unit"),
  vid("testimony", "VID-20260727-WA0056", "Client collecting her order in store"),
];
