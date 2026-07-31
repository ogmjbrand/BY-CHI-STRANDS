"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { SiteHeader } from "@/components/stitch/SiteHeader";
import { CheckoutSummary, MobileCheckoutSummary } from "@/components/stitch/CheckoutSummary";
import { useStore, lineIsQuote } from "@/context/StoreContext";
import { getProduct, priceFor } from "@/lib/products";
import { useToast } from "@/components/stitch/Toast";
import type { OrderItem } from "@/types/orders";

/**
 * BY CHI STRANDS — Stitch screen: digital_flagship_luxury_checkout
 * "Checkout | ByChi Strands"
 *
 * The house has no live payment gateway — orders are placed as a real
 * request (POST /api/orders/create → Supabase + confirmation email) and
 * payment is settled with the concierge afterward, the same way the
 * atelier actually closes bespoke orders. The original Stitch screen's
 * credit-card capture fields were pure decoration wired to nothing, which
 * would have misled a shopper into thinking a real charge went through —
 * removed rather than left dead.
 */
export default function CheckoutPage() {
  const router = useRouter();
  const { cart, cartTotal, hydrated, clearCart } = useStore();
  const { notify } = useToast();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState("");
  const [country, setCountry] = useState("Nigeria");
  const [status, setStatus] = useState<"idle" | "loading" | "error">("idle");

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === "loading" || cart.length === 0) return;
    setStatus("loading");

    const items: OrderItem[] = cart.flatMap((line) => {
      const product = getProduct(line.slug);
      if (!product) return [];
      return [
        {
          productId: product.slug,
          name: product.name,
          quantity: line.qty,
          price: priceFor(product, line.length, line.lace),
          variant: {
            length: `${line.length}"`,
            texture: line.density,
            tone: line.lace,
          },
        },
      ];
    });

    try {
      const res = await fetch("/api/orders/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          customerName: name,
          customerEmail: email,
          items,
          subtotal: cartTotal,
          tax: 0,
          shipping: 0,
          total: cartTotal,
          shippingAddress: { street, city, state, zip, country },
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data?.error ?? "Failed to place order");

      clearCart();
      router.push(`/order-confirmation?order=${data.order.id}`);
    } catch {
      setStatus("error");
      notify("Something went wrong", "Please try again or reach us on WhatsApp.");
    }
  };

  if (hydrated && cart.length === 0) {
    return (
      <div className="scr-luxury-checkout theme-noir bg-surface text-on-surface font-body-md min-h-screen flex flex-col">
        <SiteHeader dark />
        <main className="flex-1 flex flex-col items-center justify-center text-center px-margin-mobile py-24">
          <span className="material-symbols-outlined text-primary text-5xl mb-8 opacity-40">
            shopping_bag
          </span>
          <p className="font-body-xl text-body-xl text-tertiary mb-10">
            Your bag is empty — there is nothing to check out yet.
          </p>
          <Link
            href="/shop"
            className="inline-block px-12 py-4 bg-on-surface text-surface font-label-caps tracking-widest hover:bg-primary hover:text-on-primary transition-all duration-500 rounded-lg uppercase"
          >
            Explore the Collection
          </Link>
        </main>
      </div>
    );
  }

  return (
    <div className="scr-luxury-checkout theme-noir bg-surface font-body-md text-on-surface antialiased overflow-x-hidden min-h-screen flex flex-col">
      <SiteHeader dark />
      <main className="flex-1 max-w-container-max mx-auto w-full px-margin-mobile md:px-margin-desktop py-12 md:py-24">
        <div className="lg:hidden mb-10">
          <MobileCheckoutSummary />
        </div>

        <form onSubmit={submit} className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-start">
          <div className="lg:col-span-7 space-y-16">
            <section>
              <h2 className="font-headline-lg text-headline-lg text-on-surface mb-8">Shipping Address</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-y-10 gap-x-6">
                <div className="md:col-span-2">
                  <label className="block text-label-caps text-outline mb-2 uppercase tracking-widest">
                    Full Name
                  </label>
                  <input
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-transparent border-0 border-b border-outline-variant/50 focus:border-primary focus:ring-0 py-2 transition-all duration-300"
                    type="text"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-label-caps text-outline mb-2 uppercase tracking-widest">
                    Email
                  </label>
                  <input
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-transparent border-0 border-b border-outline-variant/50 focus:border-primary focus:ring-0 py-2 transition-all duration-300"
                    type="email"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-label-caps text-outline mb-2 uppercase tracking-widest">
                    Street Address
                  </label>
                  <input
                    required
                    value={street}
                    onChange={(e) => setStreet(e.target.value)}
                    className="w-full bg-transparent border-0 border-b border-outline-variant/50 focus:border-primary focus:ring-0 py-2 transition-all duration-300"
                    type="text"
                  />
                </div>
                <div>
                  <label className="block text-label-caps text-outline mb-2 uppercase tracking-widest">
                    City
                  </label>
                  <input
                    required
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="w-full bg-transparent border-0 border-b border-outline-variant/50 focus:border-primary focus:ring-0 py-2 transition-all duration-300"
                    type="text"
                  />
                </div>
                <div>
                  <label className="block text-label-caps text-outline mb-2 uppercase tracking-widest">
                    State
                  </label>
                  <input
                    required
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                    className="w-full bg-transparent border-0 border-b border-outline-variant/50 focus:border-primary focus:ring-0 py-2 transition-all duration-300"
                    type="text"
                  />
                </div>
                <div>
                  <label className="block text-label-caps text-outline mb-2 uppercase tracking-widest">
                    Postal Code
                  </label>
                  <input
                    value={zip}
                    onChange={(e) => setZip(e.target.value)}
                    className="w-full bg-transparent border-0 border-b border-outline-variant/50 focus:border-primary focus:ring-0 py-2 transition-all duration-300"
                    type="text"
                  />
                </div>
                <div>
                  <label className="block text-label-caps text-outline mb-2 uppercase tracking-widest">
                    Country
                  </label>
                  <input
                    required
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    className="w-full bg-transparent border-0 border-b border-outline-variant/50 focus:border-primary focus:ring-0 py-2 transition-all duration-300"
                    type="text"
                  />
                </div>
              </div>
            </section>

            <section className="bg-surface-container-low p-8 border border-outline-variant/30">
              <div className="flex items-center gap-3 mb-4">
                <span className="material-symbols-outlined text-primary">lock_open</span>
                <h3 className="font-headline-lg text-headline-lg">White-Glove Concierge Payment</h3>
              </div>
              <p className="text-body-md text-outline leading-relaxed">
                We don&apos;t take card payments on-site. Once you place your order, our concierge
                team will reach out by email to confirm shipping and arrange payment — the same
                bespoke process every ByChiStrands piece goes through.
                {cart.some(lineIsQuote)
                  ? " Any piece in your bag marked “Quoted after order” has no listed price yet — the concierge email will include that quote before payment is arranged."
                  : ""}
              </p>
            </section>

            <div className="flex flex-wrap gap-8 items-center py-6 border-y border-outline-variant/20">
              <div className="flex items-center gap-2 text-outline">
                <span className="material-symbols-outlined text-primary text-[20px]">verified</span>
                <span className="text-label-caps tracking-[0.15em]">Atelier Guarantee</span>
              </div>
              <div className="flex items-center gap-2 text-outline">
                <span className="material-symbols-outlined text-primary text-[20px]">package_2</span>
                <span className="text-label-caps tracking-[0.15em]">Discrete Packaging</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="hidden lg:block sticky top-32 space-y-12 bg-white text-noir border border-outline-variant/20 p-8 shadow-sm">
              <CheckoutSummary />
              <div className="space-y-4">
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full bg-on-surface text-surface py-5 font-label-caps text-label-caps tracking-[0.2em] hover:bg-primary hover:text-on-primary transition-all duration-500 hover:scale-[1.02] active:scale-100 uppercase disabled:opacity-60"
                >
                  {status === "loading" ? "Placing Order…" : "Place Order"}
                </button>
                <p className="text-center text-[10px] text-outline px-4 leading-relaxed">
                  By placing your order, you agree to the ByChiStrands{" "}
                  <Link href="/terms" className="underline">
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link href="/privacy" className="underline">
                    Privacy Policy
                  </Link>
                  .
                </p>
              </div>
            </div>

            <div className="lg:hidden mt-4">
              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full bg-on-surface text-surface py-5 font-label-caps text-label-caps tracking-[0.2em] hover:bg-primary hover:text-on-primary transition-all duration-500 uppercase disabled:opacity-60"
              >
                {status === "loading" ? "Placing Order…" : "Place Order"}
              </button>
            </div>
          </div>
        </form>
      </main>

      <footer className="bg-surface-container-low border-t border-outline-variant/20 mt-24">
        <div className="px-margin-mobile md:px-margin-desktop py-8 max-w-container-max mx-auto text-center">
          <p className="text-body-sm text-outline">
            © {new Date().getFullYear()} ByChi Strands. Timeless Vietnamese Artistry.
          </p>
        </div>
      </footer>
    </div>
  );
}
