'use client';

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useStore, lineIsQuote, linePrice } from "@/context/StoreContext";
import { CheckoutSummary, MobileCheckoutSummary } from "@/components/stitch/CheckoutSummary";
import { CheckoutTotal } from "@/components/stitch/CheckoutTotal";
import { getProduct } from "@/lib/products";
import { formatPrice } from "@/lib/utils";
import { site, whatsappLink } from "@/lib/site";
import type { CreateOrderRequest, OrderItem } from "@/types/orders";

interface CheckoutFormState {
  fullName: string;
  email: string;
  phone: string;
  street: string;
  city: string;
  state: string;
  zip: string;
  country: string;
}

const PROFILE_KEY = "bychi-customer-profile";

const emptyForm = (): CheckoutFormState => ({
  fullName: "",
  email: "",
  phone: "",
  street: "",
  city: "",
  state: "",
  zip: "",
  country: "Nigeria",
});

export function LuxuryCheckoutFlow() {
  const router = useRouter();
  const { cart, cartTotal, hydrated, clearCart } = useStore();
  const [form, setForm] = useState<CheckoutFormState>(emptyForm);
  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(PROFILE_KEY);
      if (!raw) return;
      const parsed = JSON.parse(raw) as Partial<CheckoutFormState>;
      setForm((current) => ({
        ...current,
        fullName: parsed.fullName ?? current.fullName,
        email: parsed.email ?? current.email,
        phone: parsed.phone ?? current.phone,
      }));
    } catch {
      // Ignore malformed storage values.
    }
  }, []);

  const handleChange = (field: keyof CheckoutFormState, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
  };

  const submitOrder = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!hydrated || cart.length === 0) {
      setMessage("Your selection is empty. Add a piece before completing checkout.");
      return;
    }

    if (!form.fullName || !form.email || !form.street || !form.city || !form.state || !form.zip) {
      setMessage("Please complete the required shipping details before placing your order.");
      return;
    }

    setSubmitting(true);
    setMessage("");

    const items: OrderItem[] = cart.flatMap((line) => {
      const product = getProduct(line.slug);
      if (!product) return [];

      return [
        {
          productId: product.slug,
          name: product.name,
          quantity: line.qty,
          price: lineIsQuote(line) ? null : linePrice(line),
          variant: {
            length: String(line.length),
            texture: line.density ?? undefined,
            tone: line.lace ?? undefined,
          },
        },
      ];
    });

    const payload: CreateOrderRequest = {
      customerName: form.fullName,
      customerEmail: form.email,
      items,
      subtotal: cartTotal,
      tax: 0,
      shipping: 0,
      total: cartTotal,
      shippingAddress: {
        street: form.street,
        city: form.city,
        state: form.state,
        zip: form.zip,
        country: form.country || "Nigeria",
      },
    };

    try {
      const response = await fetch("/api/orders/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await response.json();
      if (!response.ok || !data?.order?.id) {
        throw new Error(data?.error || "Your order could not be placed.");
      }

      try {
        window.localStorage.setItem(PROFILE_KEY, JSON.stringify({
          fullName: form.fullName,
          email: form.email,
          phone: form.phone,
        }));
      } catch {
        // Ignore local storage failures.
      }

      clearCart();
      router.push(`/order-confirmation?order=${data.order.id}`);
    } catch (error) {
      setMessage(error instanceof Error ? error.message : "Your order could not be placed.");
      setSubmitting(false);
    }
  };

  if (!hydrated) return null;

  return (
    <div className="min-h-screen bg-surface text-on-surface">
      <header className="border-b border-outline-variant/30 bg-surface/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-margin-mobile py-6 md:px-margin-desktop">
          <Link href="/shop" className="font-display-lg text-2xl tracking-[0.08em] text-on-surface">
            ByChi Strands
          </Link>
          <div className="flex items-center gap-3 text-sm text-on-surface-variant">
            <span className="material-symbols-outlined text-primary">lock</span>
            Secure concierge checkout
          </div>
        </div>
      </header>

      <main className="mx-auto grid max-w-7xl gap-10 px-margin-mobile py-10 md:px-margin-desktop lg:grid-cols-[1.05fr_0.78fr] lg:py-16">
        <form onSubmit={submitOrder} className="space-y-8">
          <section className="rounded-[2rem] border border-outline-variant/30 bg-surface-container-low p-8 shadow-[0_24px_70px_rgba(0,0,0,0.04)]">
            <div className="mb-8 flex items-center justify-between gap-4">
              <div>
                <p className="font-label-caps text-[10px] uppercase tracking-[0.24em] text-primary">Step 1</p>
                <h1 className="mt-2 font-display-lg text-3xl md:text-4xl">Your details</h1>
              </div>
              <a
                href={whatsappLink("Hello — I need help placing an order with ByChi Strands.")}
                target="_blank"
                rel="noreferrer"
                className="hidden rounded-full border border-primary px-4 py-2 text-[11px] font-label-caps uppercase tracking-[0.24em] text-primary transition-colors hover:bg-primary hover:text-on-primary md:inline-flex"
              >
                Concierge help
              </a>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <label className="block md:col-span-2">
                <span className="mb-2 block text-[11px] font-label-caps uppercase tracking-[0.24em] text-on-surface-variant">
                  Full name
                </span>
                <input
                  required
                  value={form.fullName}
                  onChange={(event) => handleChange("fullName", event.target.value)}
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
                  value={form.email}
                  onChange={(event) => handleChange("email", event.target.value)}
                  className="w-full border-0 border-b border-outline-variant/40 bg-transparent py-3 text-body-md outline-none focus:border-primary"
                  placeholder="ava@email.com"
                />
              </label>
              <label className="block">
                <span className="mb-2 block text-[11px] font-label-caps uppercase tracking-[0.24em] text-on-surface-variant">
                  Phone number
                </span>
                <input
                  value={form.phone}
                  onChange={(event) => handleChange("phone", event.target.value)}
                  className="w-full border-0 border-b border-outline-variant/40 bg-transparent py-3 text-body-md outline-none focus:border-primary"
                  placeholder="0801 234 5678"
                />
              </label>
            </div>
          </section>

          <section className="rounded-[2rem] border border-outline-variant/30 bg-surface-container-low p-8 shadow-[0_24px_70px_rgba(0,0,0,0.04)]">
            <div className="mb-8">
              <p className="font-label-caps text-[10px] uppercase tracking-[0.24em] text-primary">Step 2</p>
              <h2 className="mt-2 font-display-lg text-2xl">Shipping address</h2>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <label className="block md:col-span-2">
                <span className="mb-2 block text-[11px] font-label-caps uppercase tracking-[0.24em] text-on-surface-variant">
                  Street address
                </span>
                <input
                  required
                  value={form.street}
                  onChange={(event) => handleChange("street", event.target.value)}
                  className="w-full border-0 border-b border-outline-variant/40 bg-transparent py-3 text-body-md outline-none focus:border-primary"
                  placeholder="House, apartment, street"
                />
              </label>
              <label className="block">
                <span className="mb-2 block text-[11px] font-label-caps uppercase tracking-[0.24em] text-on-surface-variant">
                  City
                </span>
                <input
                  required
                  value={form.city}
                  onChange={(event) => handleChange("city", event.target.value)}
                  className="w-full border-0 border-b border-outline-variant/40 bg-transparent py-3 text-body-md outline-none focus:border-primary"
                  placeholder="Lagos"
                />
              </label>
              <label className="block">
                <span className="mb-2 block text-[11px] font-label-caps uppercase tracking-[0.24em] text-on-surface-variant">
                  State / Region
                </span>
                <input
                  required
                  value={form.state}
                  onChange={(event) => handleChange("state", event.target.value)}
                  className="w-full border-0 border-b border-outline-variant/40 bg-transparent py-3 text-body-md outline-none focus:border-primary"
                  placeholder="Lagos State"
                />
              </label>
              <label className="block">
                <span className="mb-2 block text-[11px] font-label-caps uppercase tracking-[0.24em] text-on-surface-variant">
                  Postal code
                </span>
                <input
                  required
                  value={form.zip}
                  onChange={(event) => handleChange("zip", event.target.value)}
                  className="w-full border-0 border-b border-outline-variant/40 bg-transparent py-3 text-body-md outline-none focus:border-primary"
                  placeholder="100001"
                />
              </label>
              <label className="block">
                <span className="mb-2 block text-[11px] font-label-caps uppercase tracking-[0.24em] text-on-surface-variant">
                  Country
                </span>
                <input
                  value={form.country}
                  onChange={(event) => handleChange("country", event.target.value)}
                  className="w-full border-0 border-b border-outline-variant/40 bg-transparent py-3 text-body-md outline-none focus:border-primary"
                  placeholder="Nigeria"
                />
              </label>
            </div>
          </section>

          <section className="rounded-[2rem] border border-outline-variant/30 bg-surface-container-low p-8 shadow-[0_24px_70px_rgba(0,0,0,0.04)]">
            <div className="mb-4 flex items-center gap-2 text-primary">
              <span className="material-symbols-outlined">local_shipping</span>
              <p className="font-label-caps text-[10px] uppercase tracking-[0.24em]">White-glove delivery</p>
            </div>
            <p className="text-body-md text-on-surface-variant">
              Your concierge will confirm the final shipping rate and delivery window after placement. No payment card details are stored on this site.
            </p>
          </section>

          {message ? <p className="rounded-[1.25rem] border border-primary/20 bg-surface p-4 text-sm text-on-surface-variant">{message}</p> : null}

          <button
            type="submit"
            disabled={submitting}
            className="w-full rounded-full bg-on-surface px-6 py-4 font-label-caps text-[11px] uppercase tracking-[0.24em] text-surface transition-colors hover:bg-primary disabled:opacity-60"
          >
            {submitting ? "Placing order…" : <CheckoutTotal prefix="Place order — " />}
          </button>
        </form>

        <aside className="space-y-6 lg:sticky lg:top-24 lg:h-fit">
          <div className="rounded-[2rem] border border-outline-variant/30 bg-white p-8 shadow-[0_24px_70px_rgba(0,0,0,0.04)]">
            <MobileCheckoutSummary />
            <div className="mt-6 hidden md:block">
              <CheckoutSummary />
            </div>
          </div>

          <div className="rounded-[2rem] border border-outline-variant/30 bg-surface-container-low p-8">
            <p className="font-label-caps text-[10px] uppercase tracking-[0.24em] text-primary">What happens next</p>
            <ul className="mt-5 space-y-3 text-body-md text-on-surface-variant">
              <li>• Your order is saved and a concierge confirmation email is sent.</li>
              <li>• We confirm shipping and any quoted pieces directly with you.</li>
              <li>• You can return to your account page whenever you need the latest status.</li>
            </ul>
            <div className="mt-8 flex items-center justify-between rounded-[1.25rem] border border-outline-variant/20 bg-surface px-4 py-4">
              <div>
                <p className="font-label-caps text-[10px] uppercase tracking-[0.24em] text-primary">Need help?</p>
                <p className="mt-1 text-sm text-on-surface-variant">Reach us on WhatsApp</p>
              </div>
              <a href={whatsappLink("Hello — I need help placing an order.")} target="_blank" rel="noreferrer" className="text-primary">
                <span className="material-symbols-outlined">chat</span>
              </a>
            </div>
          </div>
        </aside>
      </main>
    </div>
  );
}
