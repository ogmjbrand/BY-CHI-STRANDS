import type { Metadata } from "next";
import { StitchPageShell } from "@/components/stitch/SiteChrome";
import { PolicyBody, type PolicyBlock } from "@/components/stitch/PolicyBody";

export const metadata: Metadata = {
  title: "Returns & Exchanges",
  description:
    "The seven-day exchange window, what qualifies, what cannot be returned for hygiene reasons, and how to start an exchange.",
};

/**
 * The seven-day exchange window, the hygiene exclusion and the "if something
 * is genuinely wrong we make it right" undertaking are the house's own
 * published position — they appear verbatim in the Orders & Shipping FAQ and
 * in the homepage promise, which until now both pointed at a page that
 * stated nothing. This page consolidates them; it does not add new terms.
 */
const BLOCKS: PolicyBlock[] = [
  {
    heading: "The seven-day exchange",
    body: [
      "Unworn hair with intact wefts and its original packaging may be exchanged within seven days of delivery. Tell us within that window and we will arrange the exchange.",
    ],
    rows: [
      { term: "Window", detail: "Seven days from the date your order is delivered." },
      {
        term: "Condition",
        detail: "Unworn, wefts intact, authentication tag and original packaging included.",
      },
      {
        term: "Outcome",
        detail: "An exchange for another piece of equivalent value.",
      },
    ],
  },
  {
    heading: "What cannot be returned",
    body: [
      "For hygiene reasons, hair that has been worn or installed cannot be returned or exchanged. This is standard across the industry and it is not negotiable — once a unit has been on a head, it cannot be resold to anyone else.",
    ],
    points: [
      "Hair that has been washed, cut, coloured, bleached or heat-styled after delivery.",
      "Units where the lace has been cut, tinted, plucked or glued.",
      "Wefts that have been separated, re-sewn or installed.",
      "Custom units built to your own specification, unless the fault is ours.",
    ],
  },
  {
    heading: "If something is wrong with your order",
    body: [
      "If we sent the wrong piece, if it arrived damaged, or if it is not what the listing described, that is our problem to fix and the seven-day condition rules do not stand in the way. Message the concierge with your order number and photographs, and we will make it right — the remedy is agreed with you case by case rather than dictated by this page.",
      "Where a parcel is lost or damaged in transit, every order ships insured — we open the claim with the courier ourselves rather than asking you to chase it.",
    ],
  },
  {
    heading: "Services and appointments",
    body: [
      "Appointment deposits are applied to your final bill, and you can reschedule free of charge up to 48 hours before your appointment. Inside 48 hours, speak to the concierge — we would rather move you than lose you.",
      "If you are unhappy with a finish, tell us at the appointment or the same day. We would rather correct the work in the chair than have you leave unhappy.",
    ],
  },
  {
    heading: "How to start an exchange",
    body: [
      "There is no form to fill in. Message the concierge on WhatsApp or by email within seven days of delivery with your order number and a photograph of the piece as it arrived, and we will confirm the next step and the return address.",
    ],
  },
];

export default function ReturnsPage() {
  return (
    <StitchPageShell
      eyebrow="Client Care"
      title="Returns & Exchanges"
      lede="Our policy for exchanges, remakes and returns."
    >
      <PolicyBody
        blocks={BLOCKS}
        updated="August 2026"
        footnote="This policy sits alongside your statutory rights, which it does not limit. Where the two differ, your statutory rights apply."
      />
    </StitchPageShell>
  );
}
