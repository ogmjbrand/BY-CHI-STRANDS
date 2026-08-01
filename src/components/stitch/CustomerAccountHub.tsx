'use client';

import { useEffect, useState } from "react";
import Link from "next/link";
import { SiteHeader } from "@/components/stitch/SiteHeader";
import { site, whatsappLink } from "@/lib/site";
import { formatPrice } from "@/lib/utils";
import type { Order } from "@/types/orders";

interface CustomerProfile {
  fullName: string;
  email: string;
  phone: string;
}

const STORAGE_KEY = "bychi-customer-profile";

export function CustomerAccountHub() {
  const [profile, setProfile] = useState<CustomerProfile>({
    fullName: "",
    email: "",
    phone: "",
  });
  const [savedProfile, setSavedProfile] = useState<CustomerProfile | null>(null);
  const [emailLookup, setEmailLookup] = useState("");
  const [orders, setOrders] = useState<Order[]>([]);
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">("idle");
  const [message, setMessage] = useState("");

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (!raw) return;
      const parsed = JSON.parse(raw) as Partial<CustomerProfile>;
      const nextProfile = {
        fullName: parsed.fullName ?? "",
        email: parsed.email ?? "",
        phone: parsed.phone ?? "",
      };
      setProfile(nextProfile);
      setSavedProfile(nextProfile);
      if (nextProfile.email) setEmailLookup(nextProfile.email);
    } catch {
      // Ignore malformed local storage values.
    }
  }, []);

  const saveProfile = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!profile.fullName || !profile.email) {
      setMessage("Please add your name and email so your concierge profile can be created.");
      return;
    }

    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(profile));
      setSavedProfile(profile);
      setEmailLookup(profile.email);
      setMessage("Your concierge profile is ready. You can use it for faster checkout and order updates.");
    } catch {
      setMessage("We could not save your profile on this device. Please try again.");
    }
  };

  const submitLookup = async (event: React.FormEvent) => {
    event.preventDefault();
    if (status === "loading" || !emailLookup) return;

    setStatus("loading");
    setMessage("");

    try {
      const res = await fetch(`/api/orders/lookup?email=${encodeURIComponent(emailLookup)}`);
      if (!res.ok) throw new Error("Lookup failed");
      const data = await res.json();
      setOrders(data.orders ?? []);
      setStatus("done");
    } catch {
      setStatus("error");
      setOrders([]);
    }
  };

  return (
    <div className="min-h-screen bg-surface text-on-surface">
      <SiteHeader dark />

      <main className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-margin-mobile py-14 md:px-margin-desktop md:py-20">
        <section className="grid gap-8 rounded-[2rem] border border-outline-variant/30 bg-surface-container-low p-8 shadow-[0_32px_90px_rgba(0,0,0,0.06)] md:grid-cols-[1.2fr_0.8fr] md:p-10">
          <div className="space-y-6">
            <p className="font-label-caps text-[11px] uppercase tracking-[0.24em] text-primary">
              Private concierge access
            </p>
            <h1 className="font-display-lg text-4xl leading-[0.95] md:text-5xl">
              Create your account and keep every order in one place.
            </h1>
            <p className="max-w-2xl text-body-md text-on-surface-variant">
              Your account is a personal concierge profile saved on this device so checkout feels seamless,
              and your order history can be pulled up instantly with the email you used at purchase.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/shop"
                className="inline-flex items-center justify-center rounded-full bg-on-surface px-6 py-3 font-label-caps text-[11px] uppercase tracking-[0.24em] text-surface transition-colors hover:bg-primary"
              >
                Shop the collection
              </Link>
              <Link
                href="/checkout"
                className="inline-flex items-center justify-center rounded-full border border-primary px-6 py-3 font-label-caps text-[11px] uppercase tracking-[0.24em] text-primary transition-colors hover:bg-primary hover:text-on-primary"
              >
                Go to checkout
              </Link>
            </div>
          </div>

          <form onSubmit={saveProfile} className="rounded-[1.5rem] border border-outline-variant/30 bg-surface p-6">
            <div className="mb-6">
              <p className="font-label-caps text-[10px] uppercase tracking-[0.24em] text-on-surface-variant">
                Create your profile
              </p>
              <h2 className="mt-2 font-headline-lg text-2xl text-on-surface">Your details</h2>
            </div>
            <div className="space-y-5">
              <label className="block">
                <span className="mb-2 block text-[11px] font-label-caps uppercase tracking-[0.24em] text-on-surface-variant">
                  Full name
                </span>
                <input
                  required
                  value={profile.fullName}
                  onChange={(event) => setProfile((current) => ({ ...current, fullName: event.target.value }))}
                  className="w-full border-0 border-b border-outline-variant/40 bg-transparent py-3 text-body-md outline-none focus:border-primary"
                  placeholder="Ava Okafor"
                />
              </label>
              <label className="block">
                <span className="mb-2 block text-[11px] font-label-caps uppercase tracking-[0.24em] text-on-surface-variant">
                  Email address
                </span>
                <input
                  required
                  type="email"
                  value={profile.email}
                  onChange={(event) => setProfile((current) => ({ ...current, email: event.target.value }))}
                  className="w-full border-0 border-b border-outline-variant/40 bg-transparent py-3 text-body-md outline-none focus:border-primary"
                  placeholder="ava@email.com"
                />
              </label>
              <label className="block">
                <span className="mb-2 block text-[11px] font-label-caps uppercase tracking-[0.24em] text-on-surface-variant">
                  Phone number
                </span>
                <input
                  value={profile.phone}
                  onChange={(event) => setProfile((current) => ({ ...current, phone: event.target.value }))}
                  className="w-full border-0 border-b border-outline-variant/40 bg-transparent py-3 text-body-md outline-none focus:border-primary"
                  placeholder="0801 234 5678"
                />
              </label>
            </div>
            <button
              type="submit"
              className="mt-8 w-full rounded-full bg-primary px-5 py-3 font-label-caps text-[11px] uppercase tracking-[0.24em] text-on-primary transition-colors hover:bg-primary-container"
            >
              Save concierge profile
            </button>
            {message ? <p className="mt-4 text-sm text-on-surface-variant">{message}</p> : null}
          </form>
        </section>

        <section className="grid gap-8 lg:grid-cols-[1fr_0.95fr]">
          <div className="rounded-[1.75rem] border border-outline-variant/30 bg-surface-container-low p-8">
            <div className="mb-6 flex items-center justify-between gap-4">
              <div>
                <p className="font-label-caps text-[10px] uppercase tracking-[0.24em] text-primary">
                  Order access
                </p>
                <h2 className="mt-2 font-headline-lg text-2xl text-on-surface">Find your order</h2>
              </div>
              <div className="rounded-full bg-surface px-4 py-2 text-sm text-on-surface-variant">
                {savedProfile?.email ? savedProfile.email : "Use your checkout email"}
              </div>
            </div>

            <form onSubmit={submitLookup} className="flex flex-col gap-4 md:flex-row">
              <input
                required
                type="email"
                value={emailLookup}
                onChange={(event) => setEmailLookup(event.target.value)}
                placeholder="you@email.com"
                className="flex-1 border-0 border-b border-outline-variant/40 bg-transparent py-3 text-body-md outline-none focus:border-primary"
              />
              <button
                type="submit"
                disabled={status === "loading"}
                className="rounded-full bg-on-surface px-6 py-3 font-label-caps text-[11px] uppercase tracking-[0.24em] text-surface transition-colors hover:bg-primary disabled:opacity-60"
              >
                {status === "loading" ? "Searching…" : "Look up orders"}
              </button>
            </form>

            {status === "error" ? (
              <p className="mt-4 text-sm text-error">We could not find anything for that email. Please try again.</p>
            ) : null}

            {status === "done" && orders.length === 0 ? (
              <div className="mt-8 rounded-[1.25rem] border border-outline-variant/20 bg-surface p-6 text-center">
                <p className="font-body-md text-on-surface-variant">No orders were found for that email yet.</p>
              </div>
            ) : null}

            {orders.length > 0 ? (
              <div className="mt-8 space-y-4">
                {orders.map((order) => (
                  <Link
                    key={order.id}
                    href={`/account/orders/${order.id}`}
                    className="flex flex-col gap-3 rounded-[1.25rem] border border-outline-variant/20 bg-surface p-5 transition-colors hover:border-primary/50"
                  >
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <p className="font-label-caps text-[10px] uppercase tracking-[0.24em] text-primary">{order.orderNumber}</p>
                        <p className="mt-1 text-body-md text-on-surface">
                          {order.items.length} item{order.items.length === 1 ? "" : "s"}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="font-body-md font-semibold text-on-surface">{formatPrice(order.total)}</p>
                        <p className="text-sm text-on-surface-variant">{order.status}</p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            ) : null}
          </div>

          <div className="rounded-[1.75rem] border border-outline-variant/30 bg-surface-container-low p-8">
            <p className="font-label-caps text-[10px] uppercase tracking-[0.24em] text-primary">
              Concierge support
            </p>
            <h2 className="mt-2 font-headline-lg text-2xl text-on-surface">Need help placing or tracking an order?</h2>
            <p className="mt-4 text-body-md text-on-surface-variant">
              Our stylist team can help you choose a texture, confirm your order, or check the status of a delivery.
            </p>
            <div className="mt-8 space-y-4">
              <a
                href={whatsappLink("Hello — I’d like help with my ByChi Strands order.")}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between rounded-[1.25rem] border border-outline-variant/20 bg-surface px-5 py-4 transition-colors hover:border-primary/50"
              >
                <span className="font-label-caps text-[10px] uppercase tracking-[0.24em]">Message WhatsApp concierge</span>
                <span className="material-symbols-outlined text-primary">arrow_forward</span>
              </a>
              <Link
                href="/checkout"
                className="flex items-center justify-between rounded-[1.25rem] border border-outline-variant/20 bg-surface px-5 py-4 transition-colors hover:border-primary/50"
              >
                <span className="font-label-caps text-[10px] uppercase tracking-[0.24em]">Continue to secure checkout</span>
                <span className="material-symbols-outlined text-primary">lock</span>
              </Link>
            </div>
            <footer className="mt-10 border-t border-outline-variant/20 pt-6 text-center text-sm text-on-surface-variant">
              © {new Date().getFullYear()} {site.name}. All rights reserved.
            </footer>
          </div>
        </section>
      </main>
    </div>
  );
}
