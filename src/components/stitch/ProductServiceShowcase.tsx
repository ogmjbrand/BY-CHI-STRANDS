import { DynamicFrameLayout } from "@/components/ui/dynamic-frame-layout";

/**
 * Real ByChiStrands footage only — no Luma/stock demo clips. Six items are
 * bestselling product footage (matched the same way src/lib/media.ts assigns
 * clips: by viewing the texture/colour, not by index) and three are genuine
 * service footage — a client wearing a finished frontal install, and the
 * house's own Academy/mentorship video pair. Shared between the desktop
 * hover-grid below and the mobile scroller in the homepage.
 */
export const showcaseItems = [
  {
    video: "/products/VID-20260727-WA0027.mp4",
    poster: "/media/posters/VID-20260727-WA0027.jpg",
    label: "Bone Straight",
    href: "/shop/sdd-vietnam-bone-straight",
  },
  {
    video: "/products/VID-20260727-WA0019.mp4",
    poster: "/media/posters/VID-20260727-WA0019.jpg",
    label: "Mexican SDD Pixie",
    href: "/shop/luxury-mexican-sdd-pixie",
  },
  {
    video: "/products/VID-20260727-WA0041.mp4",
    poster: "/media/posters/VID-20260727-WA0041.jpg",
    label: "Funmi Fringe",
    href: "/shop/funmi-fringe-wig",
  },
  {
    video: "/products/VID-20260727-WA0046.mp4",
    poster: "/media/posters/VID-20260727-WA0046.jpg",
    label: "Copper Flame Straight",
    href: "/shop/sdd-copper-flame-straight",
  },
  {
    video: "/products/VID-20260727-WA0036.mp4",
    poster: "/media/posters/VID-20260727-WA0036.jpg",
    label: "Honey Blonde Straight",
    href: "/shop/sdd-honey-blonde-straight",
  },
  {
    video: "/products/VID-20260726-WA0020.mp4",
    poster: "/media/posters/VID-20260726-WA0020.jpg",
    label: "Rose Bob",
    href: "/shop/rose-bob-wig",
  },
  {
    video: "/products/VID-20260727-WA0050.mp4",
    poster: "/media/posters/VID-20260727-WA0050.jpg",
    label: "Frontal Installation",
    href: "/services",
  },
  {
    video: "/media/academy/mentorship-masterclass.mp4",
    poster: "/media/academy/mentorship-masterclass.jpg",
    label: "Academy Training",
    href: "/academy",
  },
  {
    video: "/services/mentorship-video.mp4",
    poster: "/services/mentorship.jpeg",
    label: "Private Mentorship",
    href: "/academy/mentorship",
  },
] as const;

const GRID_POSITIONS = [
  { x: 0, y: 0 },
  { x: 4, y: 0 },
  { x: 8, y: 0 },
  { x: 0, y: 4 },
  { x: 4, y: 4 },
  { x: 8, y: 4 },
  { x: 0, y: 8 },
  { x: 4, y: 8 },
  { x: 8, y: 8 },
];

const showcaseFrames = showcaseItems.map((item, i) => ({
  id: i + 1,
  video: item.video,
  poster: item.poster,
  label: item.label,
  href: item.href,
  defaultPos: { ...GRID_POSITIONS[i], w: 4, h: 4 },
  corner: "",
  edgeHorizontal: "",
  edgeVertical: "",
  mediaSize: 1,
  borderThickness: 0,
  borderSize: 100,
}));

export function ProductServiceShowcase() {
  return (
    <DynamicFrameLayout
      frames={showcaseFrames}
      className="aspect-square md:aspect-[16/10]"
      hoverSize={6}
      gapSize={4}
    />
  );
}
