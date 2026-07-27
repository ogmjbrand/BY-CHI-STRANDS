const groups = [
  {
    title: "Storefront",
    items: [
      ["Announcement bar", "Complimentary insured shipping on orders over $500 — worldwide"],
      ["Free shipping threshold", "$500"],
      ["Currency", "USD ($)"],
      ["Instalment plans", "Enabled on orders over $300"],
    ],
  },
  {
    title: "Atelier",
    items: [
      ["Opening hours", "Mon–Fri 9:00–19:00 · Sat 10:00–20:00 · Sun private"],
      ["Booking deposits", "Enabled — applied to final bill"],
      ["Reschedule window", "48 hours"],
      ["WhatsApp reminders", "Enabled — day before, 9:00 AM"],
    ],
  },
  {
    title: "Notifications",
    items: [
      ["Order confirmations", "Email + WhatsApp"],
      ["Dispatch alerts", "Email + WhatsApp with tracking"],
      ["Academy application alerts", "Email to chi@bychistrands.com"],
      ["Low-stock alerts", "Below 8 units"],
    ],
  },
  {
    title: "Team & Roles",
    items: [
      ["Chi — Owner", "Full access"],
      ["Ify — Atelier Manager", "Orders, appointments, inventory"],
      ["Zainab — Content", "Journal, gallery, testimonials"],
      ["Accountant", "Analytics, orders (read-only)"],
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
          How the house runs — storefront, atelier, notifications and roles.
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
            <button className="link-luxe eyebrow mt-5 text-[0.55rem] text-gold-deep">
              Edit {g.title.toLowerCase()}
            </button>
          </section>
        ))}
      </div>
    </div>
  );
}
