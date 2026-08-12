import { site } from "@/lib/site";
/**
 * What the house is actually configured to do.
 *
 * This panel previously listed settings that did not exist and contradicted
 * the storefront: currency "USD ($)" when every price on the site is Naira, a
 * "$500 free shipping threshold", instalment plans, booking deposits,
 * scheduled WhatsApp reminders, low-stock alerts — none of which are built —
 * and a Team & Roles table naming two staff members and their access levels.
 * Invented colleagues in an admin panel are the same problem as invented
 * customers, and a settings screen is read as a statement of fact about how
 * the system is running.
 *
 * Everything below is either read from lib/site or describes behaviour that
 * genuinely exists in this codebase. Anything not built says so.
 */
const NOT_CONFIGURED = "Not configured";

const groups: Array<{ title: string; items: Array<[string, string]> }> = [
  {
    title: "Storefront",
    items: [
      ["Currency", `${site.currency} (₦) — every price on the site`],
      ["Shipping", "Quoted per order. See the shipping policy."],
      ["Free shipping threshold", NOT_CONFIGURED],
      // The FAQ offers split payment above ₦200,000; it is arranged by
      // the concierge, not implemented in checkout.
      ["Instalment plans", "Arranged by the concierge, not automated"],
    ],
  },
  {
    title: "Atelier",
    items: [
      ...site.hours.map((h) => [h.days, h.time] as [string, string]),
      ["Booking deposits", NOT_CONFIGURED],
      ["Automated reminders", NOT_CONFIGURED],
    ],
  },
  {
    title: "Payments",
    items: [
      ["Card payment", "Flutterwave Standard — hosted checkout, verified server-side"],
      [
        "Secret key",
        process.env.FLUTTERWAVE_SECRET_KEY
          ? "Set for this environment"
          : "Not set — card payment returns 503",
      ],
      ["Concierge payment", "Arranged by the team for quoted pieces"],
    ],
  },
  {
    title: "Notifications",
    items: [
      ["Order confirmations", "Email, on verified payment"],
      ["Shipping notifications", "Email, when a tracking number is added"],
      ["Sender", site.email],
      ["Low-stock alerts", NOT_CONFIGURED],
    ],
  },
];

export default function AdminSettingsPage() {
  return (
    <div className="p-6 lg:p-10">
      <header>
        <p className="eyebrow text-[0.55rem] text-gold-deep">House Management</p>
        <h1 className="mt-3 font-serif text-4xl">Settings</h1>
        <p className="mt-2 text-sm font-light text-stone">
          What the house is actually configured to do. Anything not built says
          so rather than showing a setting that does not exist.
        </p>
      </header>
      <div className="mt-8 grid gap-6 xl:grid-cols-2">
        {groups.map((g) => (
          <section key={g.title} className="border border-hairline bg-white p-7 shadow-whisper">
            <h2 className="font-serif text-xl">{g.title}</h2>
            <dl className="mt-5 divide-y divide-hairline-soft">
              {g.items.map(([k, v]) => (
                <div key={k} className="flex items-baseline justify-between gap-6 py-3.5">
                  <dt className="shrink-0 text-[0.72rem] font-medium tracking-wide text-stone">{k}</dt>
                  <dd className="text-right text-[0.78rem] font-light text-ink">{v}</dd>
                </div>
              ))}
            </dl>
            {/*
              There was an "Edit …" button on every card with no handler
              behind it. Changing these means changing code or environment
              variables today; a button that looks like it opens an editor and
              does nothing is worse than none.
            */}
          </section>
        ))}
      </div>
    </div>
  );
}
