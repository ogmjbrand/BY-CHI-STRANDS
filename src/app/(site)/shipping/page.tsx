import type { Metadata } from "next";
import { StitchPageShell } from "@/components/stitch/SiteChrome";
import { PolicyBody, type PolicyBlock } from "@/components/stitch/PolicyBody";

export const metadata: Metadata = {
  title: "Shipping & Delivery",
  description:
    "Delivery windows for Lagos, nationwide Nigeria and worldwide DHL Express, how orders are packaged, and how shipping is quoted.",
};

/**
 * Every figure here is a commitment the house already publishes — the
 * delivery windows and the packaging description come from the Orders &
 * Shipping FAQ and the homepage promise, and the "quoted after you order"
 * note describes what the checkout actually does (it posts shipping: 0 and
 * the atelier confirms the cost separately). Nothing is invented to fill the
 * page out; this page previously stated no policy at all while the FAQ and
 * the footer both linked to it.
 */
const BLOCKS: PolicyBlock[] = [
  {
    heading: "Where we ship",
    body: [
      "We ship worldwide from our atelier in Lagos, Nigeria. Every order — domestic or international — travels fully tracked and insured in transit.",
    ],
    rows: [
      { term: "Lagos", detail: "Same-week courier." },
      { term: "Nigeria", detail: "2–4 business days nationwide." },
      {
        term: "International",
        detail: "3–7 business days via DHL Express, tracked door to door.",
      },
    ],
  },
  {
    heading: "When your order leaves us",
    body: [
      "Delivery windows begin the day your order is dispatched, not the day it is placed. In-stock pieces are dispatched once payment is confirmed.",
      "Custom units are built to order in the atelier, so the build time comes first and the delivery window follows dispatch. Your concierge confirms that build time before work begins — we would rather quote you an honest date than a flattering one.",
    ],
  },
  {
    heading: "What shipping costs",
    body: [
      "Shipping is not added to the total you see online. Once your order is placed, the atelier quotes the delivery cost for your address and courier, and confirms it with you before dispatch.",
      "Prices across the site are listed in Nigerian Naira (₦). If you are ordering from outside Nigeria, your bank converts the charge at its own rate — the concierge can confirm an estimate in your currency before you order.",
    ],
  },
  {
    heading: "How your order is packaged",
    body: [
      "Every order arrives in the house's signature packaging: silk-wrapped hair inside a rigid gift box, with a care card and an authentication tag. Wig units ship on a protective form so the lace holds its shape in transit.",
    ],
  },
  {
    heading: "Tracking your order",
    body: [
      "You receive a confirmation email as soon as your order is placed, and your tracking number as soon as it ships. You can also check the status yourself at any time from the tracking page, using your order number and the email address you ordered with — no account needed.",
    ],
    points: [
      "Customs duties and import taxes on international orders are set by your country and are payable by you.",
      "If a parcel is delayed or arrives damaged, message the concierge with your order number and we will open the claim with the courier.",
    ],
  },
];

export default function ShippingPage() {
  return (
    <StitchPageShell
      eyebrow="Client Care"
      title="Shipping & Delivery"
      lede="How and when your pieces travel to you, worldwide."
    >
      <PolicyBody blocks={BLOCKS} updated="August 2026" />
    </StitchPageShell>
  );
}
