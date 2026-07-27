import Link from "next/link";
import { dashboardStats, revenueByMonth, getAdminSection } from "@/lib/admin";
import { AdminTable } from "@/components/admin/AdminTable";

export default function AdminDashboard() {
  const max = Math.max(...revenueByMonth.map((m) => m.value));
  const orders = getAdminSection("orders")!;

  return (
    <div className="p-6 lg:p-10">
      <header className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="eyebrow text-[0.55rem] text-gold-deep">The House · July 2026</p>
          <h1 className="mt-3 font-serif text-4xl">Good morning, Chi.</h1>
        </div>
        <p className="text-sm font-light text-stone">
          Preview data — connects to Supabase in production.
        </p>
      </header>

      {/* Stats */}
      <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
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
            <AdminTable columns={orders.columns} rows={orders.rows.slice(0, 5)} />
          </div>
        </section>
      </div>
    </div>
  );
}
