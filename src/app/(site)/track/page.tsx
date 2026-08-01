"use client";

import { useState } from "react";
import Link from "next/link";
import { SiteHeader } from "@/components/stitch/SiteHeader";
import { OrderTimeline } from "@/components/stitch/OrderTimeline";
import { site, whatsappLink } from "@/lib/site";
import type { Order } from "@/types/orders";

/**
 * Guest order tracking. Requires order number + the email used at checkout
 * (POST /api/orders/track) — the pair is what authorises the lookup, since
 * there's no login on this site. Only tracking-relevant fields come back;
 * the full shipping address deliberately does not.
 */

interface TrackedOrder {
  orderNumber: string;
  status: Order["status"];
  createdAt: string;
  updatedAt: string;
  trackingNumber: string | null;
  carrier: string | null;
  estimatedDelivery: string | null;
  city: string | null;
  country: string | null;
  items: { name: string; quantity: number; variant: { length?: string; tone?: string } | null }[];
}

const fmtDate = (iso: string) =>
  new Date(iso).toLocaleDateString("en-NG", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

export default function TrackOrderPage() {
  const [orderNumber, setOrderNumber] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">("idle");
  const [error, setError] = useState("");
  const [order, setOrder] = useState<TrackedOrder | null>(null);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === "loading") return;
    setStatus("loading");
    setError("");

    try {
      const res = await fetch("/api/orders/track", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ orderNumber, email }),
      });
      const data = await res.json();

      if (!res.ok) {
        setError(data?.error ?? "We couldn't find that order.");
        setOrder(null);
        setStatus("error");
        return;
      }

      setOrder(data.order);
      setStatus("done");
    } catch {
      setError("Something went wrong. Please try again or message our concierge.");
      setOrder(null);
      setStatus("error");
    }
  };

  return (
    <div className="theme-noir bg-surface text-on-surface font-body-md min-h-screen flex flex-col">
      <SiteHeader dark />

      <main className="flex-1 max-w-3xl mx-auto w-full px-margin-mobile md:px-margin-desktop py-section-padding">
        <header className="mb-14">
          <span className="font-label-caps text-label-caps uppercase text-primary tracking-[0.3em] mb-6 block">
            Order Tracking
          </span>
          <h1 className="font-display-lg text-headline-lg-mobile md:text-display-lg mb-6 tracking-[-0.02em]">
            Where&apos;s My Order?
          </h1>
          <p className="font-body-xl text-body-xl text-on-surface-variant max-w-xl">
            Enter your order number and the email you checked out with. Your order number is in
            your confirmation email — it starts with <span className="text-on-surface">BCH-</span>.
          </p>
        </header>

        <form onSubmit={submit} className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-6">
          <div>
            <label
              htmlFor="track-order-number"
              className="block font-label-caps text-label-caps uppercase text-on-surface-variant tracking-widest mb-2"
            >
              Order Number
            </label>
            <input
              id="track-order-number"
              required
              value={orderNumber}
              onChange={(e) => setOrderNumber(e.target.value)}
              placeholder="BCH-…"
              className="w-full bg-transparent border-0 border-b border-outline-variant/50 focus:border-primary py-3 font-body-md placeholder:text-on-surface-variant/40"
              type="text"
            />
          </div>
          <div>
            <label
              htmlFor="track-email"
              className="block font-label-caps text-label-caps uppercase text-on-surface-variant tracking-widest mb-2"
            >
              Email
            </label>
            <input
              id="track-email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@email.com"
              className="w-full bg-transparent border-0 border-b border-outline-variant/50 focus:border-primary py-3 font-body-md placeholder:text-on-surface-variant/40"
              type="email"
            />
          </div>

          <div className="sm:col-span-2">
            <button
              type="submit"
              disabled={status === "loading"}
              className="px-12 py-4 bg-primary text-on-primary font-label-caps tracking-[0.2em] uppercase hover:bg-secondary transition-colors duration-500 disabled:opacity-60"
            >
              {status === "loading" ? "Searching…" : "Track Order"}
            </button>
          </div>
        </form>

        {error ? (
          <p role="alert" className="font-body-md text-error mb-10 max-w-xl">
            {error}
          </p>
        ) : null}

        {order ? (
          <section className="mt-16 border-t border-outline-variant/30 pt-14">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
              <div>
                <p className="font-label-caps text-label-caps uppercase text-primary tracking-[0.2em] mb-2">
                  Order #{order.orderNumber}
                </p>
                <p className="font-body-md text-on-surface-variant">
                  Placed {fmtDate(order.createdAt)}
                  {order.city ? ` · Shipping to ${order.city}, ${order.country}` : ""}
                </p>
              </div>
              <span className="font-label-caps text-label-caps uppercase tracking-[0.2em] text-primary border border-primary/40 px-5 py-2 w-fit">
                {order.status}
              </span>
            </div>

            <OrderTimeline status={order.status} />

            {order.trackingNumber || order.carrier || order.estimatedDelivery ? (
              <div className="mt-12 border border-outline-variant/30 p-8 grid grid-cols-1 sm:grid-cols-3 gap-8">
                {order.carrier ? (
                  <div>
                    <p className="font-label-caps text-label-caps uppercase text-on-surface-variant tracking-widest mb-2">
                      Carrier
                    </p>
                    <p className="font-body-md text-on-surface">{order.carrier}</p>
                  </div>
                ) : null}
                {order.trackingNumber ? (
                  <div>
                    <p className="font-label-caps text-label-caps uppercase text-on-surface-variant tracking-widest mb-2">
                      Tracking Number
                    </p>
                    <p className="font-body-md text-on-surface break-all">
                      {order.trackingNumber}
                    </p>
                  </div>
                ) : null}
                {order.estimatedDelivery ? (
                  <div>
                    <p className="font-label-caps text-label-caps uppercase text-on-surface-variant tracking-widest mb-2">
                      Estimated Delivery
                    </p>
                    <p className="font-body-md text-on-surface">{order.estimatedDelivery}</p>
                  </div>
                ) : null}
              </div>
            ) : null}

            <div className="mt-12">
              <p className="font-label-caps text-label-caps uppercase text-on-surface-variant tracking-widest mb-5">
                In This Order
              </p>
              <ul className="space-y-3">
                {order.items.map((item, i) => (
                  <li
                    key={`${item.name}-${i}`}
                    className="flex justify-between gap-6 border-b border-outline-variant/20 pb-3 font-body-md"
                  >
                    <span className="text-on-surface">
                      {item.name}
                      {item.variant?.length ? (
                        <span className="text-on-surface-variant"> · {item.variant.length}</span>
                      ) : null}
                      {item.variant?.tone ? (
                        <span className="text-on-surface-variant"> · {item.variant.tone}</span>
                      ) : null}
                    </span>
                    <span className="text-on-surface-variant shrink-0">×{item.quantity}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-14 flex flex-wrap gap-6">
              <a
                href={whatsappLink(
                  `Hi ByChiStrands — a question about order #${order.orderNumber}.`
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="px-10 py-4 border border-primary text-primary font-label-caps tracking-widest uppercase hover:bg-primary hover:text-on-primary transition-all"
              >
                Ask About This Order
              </a>
              <Link
                href="/shop"
                className="px-10 py-4 bg-on-surface text-surface font-label-caps tracking-widest uppercase hover:bg-primary hover:text-on-primary transition-all"
              >
                Continue Shopping
              </Link>
            </div>
          </section>
        ) : null}
      </main>

      <footer className="bg-surface-container-low border-t border-outline-variant/20">
        <div className="px-margin-mobile md:px-margin-desktop py-8 max-w-container-max mx-auto text-center">
          <p className="font-body-sm text-on-surface-variant">
            © {new Date().getFullYear()} {site.name}. Timeless Vietnamese Artistry.
          </p>
        </div>
      </footer>
    </div>
  );
}
