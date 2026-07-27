import { products, priceFor, CATEGORIES } from "./products";
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
}

const orders: Cell[][] = [
  [
    { text: "BCS-482913" },
    { text: "Adaeze Okafor" },
    { text: "Chi Signature Wig · 24\"" },
    { text: "$660", tone: "gold" },
    { text: "In transit", tone: "warn" },
  ],
  [
    { text: "BCS-482907" },
    { text: "Tomi Adeyemi" },
    { text: "Raw Body Wave × 4 · 26\"" },
    { text: "$700", tone: "gold" },
    { text: "Processing", tone: "warn" },
  ],
  [
    { text: "BCS-482886" },
    { text: "Sarah Kalu" },
    { text: "HD Frontal 13x6 · 18\"" },
    { text: "$254", tone: "gold" },
    { text: "Delivered", tone: "success" },
  ],
  [
    { text: "BCS-482871" },
    { text: "Chidinma Eze (Salon)" },
    { text: "Wholesale — 24 bundles" },
    { text: "$2,180", tone: "gold" },
    { text: "Delivered", tone: "success" },
  ],
  [
    { text: "BCS-482860" },
    { text: "Amara Nwosu" },
    { text: "Velvet Bob · 12\" · 200%" },
    { text: "$425", tone: "gold" },
    { text: "Delivered", tone: "success" },
  ],
  [
    { text: "BCS-482842" },
    { text: "Funke Bello" },
    { text: "Copper Muse · 22\" · 250%" },
    { text: "$630", tone: "gold" },
    { text: "Refund requested", tone: "warn" },
  ],
];

const customers: Cell[][] = [
  [
    { text: "Adaeze Okafor" },
    { text: "adaeze@example.com" },
    { text: "Lagos, NG" },
    { text: "7 orders" },
    { text: "$3,890", tone: "gold" },
  ],
  [
    { text: "Chidinma Eze" },
    { text: "chidinma@salonluxe.ng" },
    { text: "Abuja, NG" },
    { text: "14 orders" },
    { text: "$18,240", tone: "gold" },
  ],
  [
    { text: "Tomi Adeyemi" },
    { text: "tomi@example.com" },
    { text: "London, UK" },
    { text: "5 orders" },
    { text: "$2,410", tone: "gold" },
  ],
  [
    { text: "Sarah Kalu" },
    { text: "sarahk@example.com" },
    { text: "Houston, US" },
    { text: "3 orders" },
    { text: "$1,105", tone: "gold" },
  ],
  [
    { text: "Amara Nwosu" },
    { text: "amara@example.com" },
    { text: "Lagos, NG" },
    { text: "4 orders" },
    { text: "$1,720", tone: "gold" },
  ],
];

const appointments: Cell[][] = [
  [
    { text: "Aug 2 · 12:00" },
    { text: "Adaeze Okafor" },
    { text: "Frontal Installation" },
    { text: "$40 deposit paid", tone: "success" },
    { text: "Confirmed", tone: "success" },
  ],
  [
    { text: "Aug 2 · 15:00" },
    { text: "Bisi Adaramola" },
    { text: "Hair Laundry" },
    { text: "$15 deposit paid", tone: "success" },
    { text: "Confirmed", tone: "success" },
  ],
  [
    { text: "Aug 3 · 9:00" },
    { text: "Ngozi Umeh" },
    { text: "Wig Colouring — copper ref" },
    { text: "Awaiting deposit", tone: "warn" },
    { text: "Pending", tone: "warn" },
  ],
  [
    { text: "Aug 4 · 13:30" },
    { text: "Tola Bankole" },
    { text: "Wig Revamping" },
    { text: "$30 deposit paid", tone: "success" },
    { text: "Confirmed", tone: "success" },
  ],
  [
    { text: "Aug 6 · 10:30" },
    { text: "Kemi Alade (Bridal)" },
    { text: "Styling — trial session" },
    { text: "$20 deposit paid", tone: "success" },
    { text: "Confirmed", tone: "success" },
  ],
];

const enrollments: Cell[][] = [
  [
    { text: "Funke Bello" },
    { text: "Cohort 6" },
    { text: "The Masterclass" },
    { text: "Paid in full", tone: "success" },
    { text: "Onboarded", tone: "success" },
  ],
  [
    { text: "Grace Mensah" },
    { text: "Cohort 6" },
    { text: "The Masterclass" },
    { text: "Plan 2 of 3", tone: "warn" },
    { text: "Onboarded", tone: "success" },
  ],
  [
    { text: "Yemi Salako" },
    { text: "Cohort 6" },
    { text: "The Private Intensive" },
    { text: "Paid in full", tone: "success" },
    { text: "Session 1 booked", tone: "gold" },
  ],
  [
    { text: "Ada Nwachukwu" },
    { text: "Cohort 7 (waitlist)" },
    { text: "The Foundation" },
    { text: "—", tone: "muted" },
    { text: "Application review", tone: "warn" },
  ],
];

const inventory: Cell[][] = products.slice(0, 10).map((p) => {
  const stock = (p.slug.length * 7) % 40;
  return [
    { text: p.name },
    { text: CATEGORIES[p.category].label, tone: "muted" as CellTone },
    { text: `$${priceFor(p)}+` },
    { text: `${stock} in stock` },
    stock < 8
      ? { text: "Reorder", tone: "warn" as CellTone }
      : { text: "Healthy", tone: "success" as CellTone },
  ];
});

const coupons: Cell[][] = [
  [
    { text: "INNERCIRCLE10" },
    { text: "10% off first order" },
    { text: "412 uses" },
    { text: "Active", tone: "success" },
  ],
  [
    { text: "BRIDE2026" },
    { text: "$50 off bridal packages" },
    { text: "38 uses" },
    { text: "Active", tone: "success" },
  ],
  [
    { text: "ACADEMY100" },
    { text: "$100 off Masterclass" },
    { text: "61 uses" },
    { text: "Expires Aug 31", tone: "warn" },
  ],
  [
    { text: "LAUNDRYDAY" },
    { text: "2-for-1 hair laundry" },
    { text: "89 uses" },
    { text: "Expired", tone: "muted" },
  ],
];

export const adminSections: AdminSection[] = [
  {
    slug: "orders",
    title: "Orders",
    blurb: "Every order, from placed to silk-wrapped to delivered.",
    columns: ["Reference", "Client", "Items", "Total", "Status"],
    rows: orders,
  },
  {
    slug: "products",
    title: "Products",
    blurb: "The live catalogue — pricing, category and standing.",
    columns: ["Product", "Category", "From", "Rating", "Status"],
    rows: products.map((p) => [
      { text: p.name },
      { text: CATEGORIES[p.category].label, tone: "muted" as CellTone },
      { text: `$${priceFor(p)}` },
      { text: `${p.rating.toFixed(1)} ★ (${p.reviews})` },
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
    rows: customers,
  },
  {
    slug: "appointments",
    title: "Appointments",
    blurb: "The atelier calendar for the next seven days.",
    columns: ["Slot", "Client", "Service", "Deposit", "Status"],
    rows: appointments,
  },
  {
    slug: "enrollments",
    title: "Academy Enrollments",
    blurb: "Students by cohort, tier and payment standing.",
    columns: ["Student", "Cohort", "Tier", "Payment", "Status"],
    rows: enrollments,
  },
  {
    slug: "inventory",
    title: "Inventory",
    blurb: "Stock health across the catalogue.",
    columns: ["Product", "Category", "Price", "Stock", "Health"],
    rows: inventory,
  },
  {
    slug: "coupons",
    title: "Coupons",
    blurb: "Live incentives and their uptake.",
    columns: ["Code", "Offer", "Usage", "Status"],
    rows: coupons,
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
    blurb: "Client words, approved for the storefront.",
    columns: ["Client", "Context", "Rating", "Status"],
    rows: testimonials.map((t) => [
      { text: `${t.name} — ${t.role}` },
      { text: t.context, tone: "muted" as CellTone },
      { text: `${t.rating}.0 ★` },
      { text: "Approved", tone: "success" as CellTone },
    ]),
  },
];

export function getAdminSection(slug: string) {
  return adminSections.find((s) => s.slug === slug);
}

export const revenueByMonth = [
  { month: "Feb", value: 18_400 },
  { month: "Mar", value: 22_100 },
  { month: "Apr", value: 19_800 },
  { month: "May", value: 27_600 },
  { month: "Jun", value: 31_900 },
  { month: "Jul", value: 36_450 },
];

export const dashboardStats = [
  { label: "Revenue · July", value: "$36,450", delta: "+14.2% vs June" },
  { label: "Orders · July", value: "128", delta: "+9.4% vs June" },
  { label: "Appointments booked", value: "64", delta: "92% deposit conversion" },
  { label: "Academy applications", value: "31", delta: "Cohort 7 waitlist open" },
];
