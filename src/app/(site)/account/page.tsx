"use client";

import { useState } from "react";
import Link from "next/link";
import { SiteHeader } from "@/components/stitch/SiteHeader";
import { site, whatsappLink } from "@/lib/site";
import { formatPrice } from "@/lib/utils";
import type { Order } from "@/types/orders";

/**
 * BY CHI STRANDS — Stitch screen: digital_flagship_customer_dashboard
 * "ByChi Strands | Client Dashboard"
 *
 * The original screen was a fully fabricated "Elite Member" fantasy —
 * invented name, invented order history, invented appointments and
 * Academy progress. There's no account/auth system behind this site, so a
 * logged-in dashboard can't be built honestly yet; what's real is order
 * lookup by the email used at checkout (GET /api/orders/lookup), which is
 * what this page does. A full account system (login, saved addresses,
 * booking history) is tracked as future work, not faked here.
 */
export default function AccountPage() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">("idle");
  const [orders, setOrders] = useState<Order[]>([]);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === "loading" || !email) return;
    setStatus("loading");
    try {
      const res = await fetch(`/api/orders/lookup?email=${encodeURIComponent(email)}`);
      if (!res.ok) throw new Error();
      const data = await res.json();
      setOrders(data.orders ?? []);
      setStatus("done");
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="scr-customer-dashboard theme-noir bg-surface text-on-surface font-body-md overflow-x-hidden min-h-screen flex flex-col">
      <SiteHeader dark />

      <main className="flex-1 max-w-2xl mx-auto w-full px-margin-mobile md:px-margin-desktop py-section-padding">
        <header className="mb-12">
          <h1 className="font-display-lg text-headline-lg-mobile md:text-display-lg text-on-surface mb-4 tracking-[-0.02em]">
            Your Orders
          </h1>
          <p className="font-body-md text-on-surface-variant max-w-lg">
            Enter the email you used at checkout to look up your order history. We don&apos;t
            have accounts yet — this is a simple lookup, nothing is saved on this device.
          </p>
        </header>

        <form onSubmit={submit} className="flex gap-4 mb-16">
          <input
            required
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@email.com"
            className="flex-1 bg-transparent border-0 border-b border-outline-variant/50 focus:border-primary focus:ring-0 py-3 font-body-md placeholder:text-on-surface-variant/40"
          />
          <button
            type="submit"
            disabled={status === "loading"}
            className="px-8 py-3 bg-on-surface text-surface font-label-caps tracking-widest hover:bg-primary hover:text-on-primary transition-all uppercase disabled:opacity-60"
          >
            {status === "loading" ? "Searching…" : "Find Orders"}
          </button>
        </form>

        {status === "error" ? (
          <p className="text-error text-body-sm mb-8">
            Something went wrong. Please try again or reach us on WhatsApp.
          </p>
        ) : null}

        {status === "done" && orders.length === 0 ? (
          <div className="text-center py-16 border-t border-outline-variant/20">
            <p className="font-body-xl text-on-surface-variant mb-6">
              No orders found for that email.
            </p>
            <Link
              href="/shop"
              className="inline-block px-10 py-4 border border-primary text-primary font-label-caps tracking-widest hover:bg-primary hover:text-on-primary transition-all uppercase"
            >
              Explore the Collection
            </Link>
          </div>
        ) : null}

        {orders.length > 0 ? (
          <div className="space-y-6">
            {orders.map((order) => (
              <Link
                key={order.id}
                href={`/account/orders/${order.id}`}
                className="flex items-center justify-between gap-6 border border-outline-variant/20 p-6 hover:border-primary/50 transition-colors group"
              >
                <div>
                  <p className="font-label-caps text-[10px] text-primary mb-1 uppercase tracking-widest">
                    #{order.orderNumber}
                  </p>
                  <p className="font-body-md text-on-surface">
                    {order.items.length} item{order.items.length === 1 ? "" : "s"} ·{" "}
                    {new Date(order.createdAt).toLocaleDateString("en-NG", {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                    })}
                  </p>
                </div>
                <div className="flex items-center gap-4 shrink-0">
                  <span className="inline-block px-3 py-1 bg-surface-container-highest text-on-surface-variant rounded-full text-[10px] font-label-caps uppercase tracking-widest">
                    {order.status}
                  </span>
                  <span className="font-body-md font-bold">{formatPrice(order.total)}</span>
                  <span className="material-symbols-outlined text-on-surface-variant group-hover:text-primary group-hover:translate-x-1 transition-all">
                    arrow_forward
                  </span>
                </div>
              </Link>
            ))}
          </div>
        ) : null}

        <div className="mt-24 pt-12 border-t border-outline-variant/20 text-center">
          <p className="font-body-sm text-on-surface-variant mb-4">
            Prefer a person? Our concierge can pull up your order directly.
          </p>
          <a
            href={whatsappLink("Hi ByChiStrands — I'd like to check on an order.")}
            target="_blank"
            rel="noopener noreferrer"
            className="font-label-caps text-primary tracking-widest uppercase hover:opacity-80 transition-opacity"
          >
            Message us on WhatsApp
          </a>
        </div>
      </main>

      <footer className="bg-surface-container-low border-t border-outline-variant/20">
        <div className="px-margin-mobile md:px-margin-desktop py-8 max-w-container-max mx-auto text-center">
          <p className="font-body-sm text-on-surface-variant">
            © {new Date().getFullYear()} {site.name}. All Rights Reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
