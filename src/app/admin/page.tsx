import Link from "next/link";
import { dashboardStats, revenueByMonth, getAdminSection } from "@/lib/admin";
import { AdminTable } from "@/components/admin/AdminTable";

export default function AdminDashboard() {
  // guard: Math.max of an empty array is -Infinity
  const max = revenueByMonth.length ? Math.max(...revenueByMonth.map((m) => m.value)) : 0;
  const orders = getAdminSection("orders")!;

  return (
    <div className="p-6 lg:p-10">
      <header className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="eyebrow text-[0.55rem] text-gold-deep">
            The House ·{" "}
            {new Date().toLocaleDateString("en-NG", { month: "long", year: "numeric" })}
          </p>
          <h1 className="mt-3 font-serif text-4xl">Good morning, Chi.</h1>
        </div>
        <p className="max-w-sm text-sm font-light leading-6 text-stone">
          Not connected to Supabase yet. The figures that used to sit here were
          invented, so they have been removed rather than left to be mistaken
          for trading.
        </p>
      </header>

      {/* Stats */}
      <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
        {dashboardStats.length === 0 ? (
          <div className="border border-hairline bg-white p-6 shadow-whisper sm:col-span-2 xl:col-span-4">
            <p className="eyebrow text-[0.52rem] text-mist">Headline figures</p>
            <p className="mt-3 max-w-xl text-sm font-light leading-6 text-stone">
              Revenue, orders, appointments and Academy applications appear here
              once the dashboard reads from Supabase.
            </p>
          </div>
        ) : null}
        {dashboardStats.map((s) => (
          <div key={s.label} className="border border-hairline bg-white p-6 shadow-whisper">
            <p className="eyebrow text-[0.52rem] text-mist">{s.label}</p>
            <p className="mt-3 font-serif text-3xl">{s.value}</p>
            <p className="mt-2 text-xs font-light text-gold-deep">{s.delta}</p>
          </div>
        ))}
      </div>

      <div className="mt-8 grid gap-8 xl:grid-cols-[1fr_1.4fr]">
        {/* Revenue chart */}
        <section className="border border-hairline bg-white p-7 shadow-whisper" aria-label="Revenue by month">
          <div className="flex items-baseline justify-between">
            <h2 className="font-serif text-xl">Revenue</h2>
            <p className="eyebrow text-[0.5rem] text-mist">Last 6 months</p>
          </div>
          {revenueByMonth.length === 0 ? (
            <p className="mt-8 max-w-md text-sm font-light leading-6 text-stone">
              No revenue history to chart. This reads from real orders once the
              dashboard is connected.
            </p>
          ) : null}
          <div className="mt-8 flex items-end gap-3">
            {revenueByMonth.map((m) => (
              <div key={m.month} className="group flex flex-1 flex-col items-center justify-end gap-2">
                <span className="text-[0.62rem] font-light text-stone opacity-0 transition-opacity group-hover:opacity-100">
                  ${Math.round(m.value / 1000)}k
                </span>
                <div
                  className="w-full max-w-10 bg-ink transition-colors duration-300 group-hover:bg-gold"
                  style={{ height: `${Math.round((m.value / max) * 150)}px` }}
                  role="img"
                  aria-label={`${m.month}: $${m.value.toLocaleString()}`}
                />
                <span className="eyebrow text-[0.5rem] text-mist">{m.month}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Recent orders */}
        <section aria-label="Recent orders">
          <div className="flex items-baseline justify-between">
            <h2 className="font-serif text-xl">Recent orders</h2>
            <Link href="/admin/orders" className="link-luxe eyebrow text-[0.55rem] text-gold-deep">
              View all
            </Link>
          </div>
          <div className="mt-5">
            <AdminTable columns={orders.columns} rows={orders.rows.slice(0, 5)} empty={orders.empty} />
          </div>
        </section>
      </div>
    </div>
  );
}
