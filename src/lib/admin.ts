import { products, priceFor, CATEGORIES, ORIGINS } from "./products";
import { articles } from "./journal";
import { testimonials } from "./testimonials";

export type CellTone = "default" | "gold" | "muted" | "success" | "warn";
export interface Cell {
  text: string;
  tone?: CellTone;
}

export interface AdminSection {
  slug: string;
  title: string;
  blurb: string;
  columns: string[];
  rows: Cell[][];
  /** Shown instead of the table when there is genuinely nothing to list. */
  empty?: string;
}





/*
 * The catalogue is real; the stock counts were not. This previously derived
 * a quantity from the *length of the product slug* — `(p.slug.length * 7) % 40`
 * — printed it as "N in stock", and used it to flag a piece "Reorder" or
 * "Healthy". Those are numbers someone would act on, invented by arithmetic
 * on a string. The catalogue columns stay; stock is not tracked anywhere yet,
 * so it is not reported.
 */
const inventory: Cell[][] = products.map((p) => [
  { text: p.name },
  { text: CATEGORIES[p.category].label, tone: "muted" as CellTone },
  { text: priceFor(p) === null ? "On request" : `₦${priceFor(p)!.toLocaleString("en-NG")}+` },
  { text: ORIGINS[p.origin], tone: "muted" as CellTone },
]);


export const adminSections: AdminSection[] = [
  {
    slug: "orders",
    title: "Orders",
    blurb: "Every order, from placed to silk-wrapped to delivered.",
    columns: ["Reference", "Client", "Items", "Total", "Status"],
    rows: [],
    empty:
      "Orders are written to Supabase at checkout. This table reads from there once the dashboard is connected.",
  },
  {
    slug: "products",
    title: "Products",
    blurb: "The live catalogue — pricing, category and standing.",
    columns: ["Product", "Category", "From", "Origin", "Status"],
    rows: products.map((p) => [
      { text: p.name },
      { text: CATEGORIES[p.category].label, tone: "muted" as CellTone },
      {
        text:
          priceFor(p) === null
            ? "On request"
            : `₦${priceFor(p)!.toLocaleString("en-NG")}`,
      },
      { text: `${ORIGINS[p.origin]}${p.sdd ? " · SDD" : ""}`, tone: "muted" as CellTone },
      p.badges?.includes("limited")
        ? { text: "Limited", tone: "warn" as CellTone }
        : { text: "Published", tone: "success" as CellTone },
    ]),
  },
  {
    slug: "customers",
    title: "Customers",
    blurb: "The client book — lifetime value and location.",
    columns: ["Client", "Email", "Location", "Orders", "Lifetime value"],
    rows: [],
    empty:
      "The client book is built from real orders. Nothing is shown until the dashboard reads from Supabase.",
  },
  {
    slug: "appointments",
    title: "Appointments",
    blurb: "The atelier calendar for the next seven days.",
    columns: ["Slot", "Client", "Service", "Deposit", "Status"],
    rows: [],
    empty:
      "Booking requests arrive by WhatsApp and the bookings table. This calendar reads from there once connected.",
  },
  {
    slug: "enrollments",
    title: "Academy Enrollments",
    blurb: "Students by cohort, tier and payment standing.",
    columns: ["Student", "Cohort", "Tier", "Payment", "Status"],
    rows: [],
    empty:
      "Academy enrolments are stored in Supabase. This roll reads from there once connected.",
  },
  {
    slug: "inventory",
    title: "Inventory",
    blurb: "The live catalogue. Stock levels are not tracked yet.",
    columns: ["Product", "Category", "Price", "Origin"],
    rows: inventory,
  },
  {
    slug: "coupons",
    title: "Coupons",
    blurb: "Live incentives and their uptake.",
    columns: ["Code", "Offer", "Usage", "Status"],
    rows: [],
    empty:
      "No promotions have been created yet.",
  },
  {
    slug: "journal",
    title: "Journal",
    blurb: "Published editorial and its categories.",
    columns: ["Title", "Category", "Published", "Status"],
    rows: articles.map((a) => [
      { text: a.title },
      { text: a.category, tone: "muted" as CellTone },
      { text: a.date },
      { text: "Live", tone: "success" as CellTone },
    ]),
  },
  {
    slug: "testimonials",
    title: "Testimonials",
    blurb: "Client footage, approved for the storefront.",
    columns: ["Clip", "Context", "Type", "Status"],
    rows: testimonials.map((t) => [
      { text: t.caption },
      { text: t.context, tone: "muted" as CellTone },
      { text: "Video", tone: "muted" as CellTone },
      { text: "Published", tone: "success" as CellTone },
    ]),
  },
];

export function getAdminSection(slug: string) {
  return adminSections.find((s) => s.slug === slug);
}

/**
 * Revenue history, once the dashboard reads from Supabase.
 *
 * This used to hold six months of invented figures — 18,400 through 36,450 —
 * rendered as a chart with no indication they were made up. A number on a
 * dashboard is read as fact, and a fabricated one is worse than an empty
 * chart because it cannot be told apart from a real one.
 */
export const revenueByMonth: Array<{ month: string; value: number }> = [];

/**
 * Headline figures. Empty for the same reason as revenueByMonth: these were
 * invented ("$36,450", "+14.2% vs June", "128 orders", "Cohort 7 waitlist
 * open") and presented as the house's actual trading.
 */
export const dashboardStats: Array<{ label: string; value: string; delta: string }> = [];
