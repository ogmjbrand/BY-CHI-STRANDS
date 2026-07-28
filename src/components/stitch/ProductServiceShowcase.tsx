import { DynamicFrameLayout } from "@/components/ui/dynamic-frame-layout";

/**
 * Real ByChiStrands footage only — no Luma/stock demo clips. Six cells are
 * bestselling product footage (matched the same way src/lib/media.ts assigns
 * clips: by viewing the texture/colour, not by index) and three are genuine
 * service footage — a client wearing a finished frontal install, and the
 * house's own Academy/mentorship video pair.
 */
const showcaseFrames = [
  {
    id: 1,
    video: "/products/VID-20260727-WA0027.mp4",
    poster: "/media/posters/VID-20260727-WA0027.jpg",
    label: "Bone Straight",
    href: "/shop/sdd-vietnam-bone-straight",
    defaultPos: { x: 0, y: 0, w: 4, h: 4 },
    corner: "",
    edgeHorizontal: "",
    edgeVertical: "",
    mediaSize: 1,
    borderThickness: 0,
    borderSize: 100,
  },
  {
    id: 2,
    video: "/products/VID-20260727-WA0019.mp4",
    poster: "/media/posters/VID-20260727-WA0019.jpg",
    label: "Mexican SDD Pixie",
    href: "/shop/luxury-mexican-sdd-pixie",
    defaultPos: { x: 4, y: 0, w: 4, h: 4 },
    corner: "",
    edgeHorizontal: "",
    edgeVertical: "",
    mediaSize: 1,
    borderThickness: 0,
    borderSize: 100,
  },
  {
    id: 3,
    video: "/products/VID-20260727-WA0041.mp4",
    poster: "/media/posters/VID-20260727-WA0041.jpg",
    label: "Funmi Fringe",
    href: "/shop/funmi-fringe-wig",
    defaultPos: { x: 8, y: 0, w: 4, h: 4 },
    corner: "",
    edgeHorizontal: "",
    edgeVertical: "",
    mediaSize: 1,
    borderThickness: 0,
    borderSize: 100,
  },
  {
    id: 4,
    video: "/products/VID-20260727-WA0046.mp4",
    poster: "/media/posters/VID-20260727-WA0046.jpg",
    label: "Copper Flame Straight",
    href: "/shop/sdd-copper-flame-straight",
    defaultPos: { x: 0, y: 4, w: 4, h: 4 },
    corner: "",
    edgeHorizontal: "",
    edgeVertical: "",
    mediaSize: 1,
    borderThickness: 0,
    borderSize: 100,
  },
  {
    id: 5,
    video: "/products/VID-20260727-WA0036.mp4",
    poster: "/media/posters/VID-20260727-WA0036.jpg",
    label: "Honey Blonde Straight",
    href: "/shop/sdd-honey-blonde-straight",
    defaultPos: { x: 4, y: 4, w: 4, h: 4 },
    corner: "",
    edgeHorizontal: "",
    edgeVertical: "",
    mediaSize: 1,
    borderThickness: 0,
    borderSize: 100,
  },
  {
    id: 6,
    video: "/products/VID-20260726-WA0020.mp4",
    poster: "/media/posters/VID-20260726-WA0020.jpg",
    label: "Rose Bob",
    href: "/shop/rose-bob-wig",
    defaultPos: { x: 8, y: 4, w: 4, h: 4 },
    corner: "",
    edgeHorizontal: "",
    edgeVertical: "",
    mediaSize: 1,
    borderThickness: 0,
    borderSize: 100,
  },
  {
    id: 7,
    video: "/products/VID-20260727-WA0050.mp4",
    poster: "/media/posters/VID-20260727-WA0050.jpg",
    label: "Frontal Installation",
    href: "/services",
    defaultPos: { x: 0, y: 8, w: 4, h: 4 },
    corner: "",
    edgeHorizontal: "",
    edgeVertical: "",
    mediaSize: 1,
    borderThickness: 0,
    borderSize: 100,
  },
  {
    id: 8,
    video: "/media/academy/mentorship-masterclass.mp4",
    poster: "/media/academy/mentorship-masterclass.jpg",
    label: "Academy Training",
    href: "/academy",
    defaultPos: { x: 4, y: 8, w: 4, h: 4 },
    corner: "",
    edgeHorizontal: "",
    edgeVertical: "",
    mediaSize: 1,
    borderThickness: 0,
    borderSize: 100,
  },
  {
    id: 9,
    video: "/services/mentorship-video.mp4",
    poster: "/services/mentorship.jpeg",
    label: "Private Mentorship",
    href: "/academy/mentorship",
    defaultPos: { x: 8, y: 8, w: 4, h: 4 },
    corner: "",
    edgeHorizontal: "",
    edgeVertical: "",
    mediaSize: 1,
    borderThickness: 0,
    borderSize: 100,
  },
];

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
