"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { SiteHeader } from "@/components/stitch/SiteHeader";
import { CheckoutSummary, MobileCheckoutSummary } from "@/components/stitch/CheckoutSummary";
import { useStore, lineIsQuote } from "@/context/StoreContext";
import { getProduct, priceFor, TONES, TEXTURES } from "@/lib/products";
import { useToast } from "@/components/stitch/Toast";
import type { OrderItem } from "@/types/orders";
import { Icon } from "@/components/ui/icon";

/**
 * BY CHI STRANDS — Stitch screen: digital_flagship_luxury_checkout
 * "Checkout | ByChi Strands"
 *
 * Two real ways to finish: pay immediately by card via Flutterwave
 * (POST /api/payments/flutterwave/initiate → redirect to their hosted
 * checkout → verified server-side on return, never trusted from the
 * redirect URL alone), or place the order and let the concierge arrange
 * payment by email — the original path, kept as-is since quote-only pieces
 * have no confirmed price to charge automatically. The original Stitch
 * screen's credit-card capture fields were pure decoration wired to
 * nothing, which would have misled a shopper into thinking a real charge
 * went through — this replaces that with an actual charge instead.
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
  const [method, setMethod] = useState<"concierge" | "flutterwave">("concierge");

  const hasQuoteItems = cart.some(lineIsQuote);

  const buildItems = (): OrderItem[] =>
    cart.flatMap((line) => {
      const product = getProduct(line.slug);
      if (!product) return [];
      return [
        {
          productId: product.slug,
          name: product.name,
          quantity: line.qty,
          price: priceFor(product, line.length, line.lace),
          /*
           * The closure size was being written into `tone`, which means
           * colour — so every order recorded "2x4 Closure" as the shade and
           * left the real colour out entirely. `texture` was taking
           * line.density, which nothing on the site ever sets, so it was
           * always undefined. Both now carry the product's real values and
           * the lace size has its own field.
           */
          variant: {
            length: `${line.length}"`,
            lace: line.lace,
            tone: TONES[product.tone].label,
            texture: TEXTURES[product.texture],
          },
        },
      ];
    });

  const orderPayload = () => ({
    customerName: name,
    customerEmail: email,
    items: buildItems(),
    subtotal: cartTotal,
    tax: 0,
    shipping: 0,
    total: cartTotal,
    shippingAddress: { street, city, state, zip, country },
  });

  const placeOrder = async () => {
    const res = await fetch("/api/orders/create", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(orderPayload()),
    });
    const data = await res.json();
    if (!res.ok) throw new Error(data?.error ?? "Failed to place order");

    clearCart();
    router.push(`/order-confirmation?order=${data.order.id}`);
  };

  const payNow = async () => {
    const res = await fetch("/api/payments/flutterwave/initiate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(orderPayload()),
    });
    const data = await res.json();
    if (!res.ok || !data.paymentLink) {
      throw new Error(data?.error ?? "Failed to start payment");
    }

    clearCart();
    window.location.href = data.paymentLink as string;
  };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === "loading" || cart.length === 0) return;
    setStatus("loading");

    try {
      if (method === "flutterwave" && !hasQuoteItems) {
        await payNow();
      } else {
        await placeOrder();
      }
    } catch (err) {
      setStatus("error");
      notify(
        "Something went wrong",
        err instanceof Error ? err.message : "Please try again or reach us on WhatsApp."
      );
    }
  };

  if (hydrated && cart.length === 0) {
    return (
      <div className="scr-luxury-checkout theme-noir bg-surface text-on-surface font-body-md min-h-screen flex flex-col">
        <main className="flex-1 flex flex-col items-center justify-center text-center px-margin-mobile py-24">
          {/* The empty branch returns before the checkout heading, so it needs
              its own — a page with no h1 has no announced title. */}
          <h1 className="sr-only">Checkout</h1>
          {/* Decorative empty state, not an affordance — see CartDrawer. */}
          <Icon name="shopping_bag" className="text-primary text-5xl mb-8 opacity-40" />
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

  /*
   * overflow-x-clip below, not -hidden. `hidden` on either axis makes this a
   * scroll container, and a scroll container becomes the containing block for
   * every `position: sticky` descendant — so the mobile header and the desktop
   * order summary both stopped sticking. `clip` clips without scrolling.
   */
  return (
    <div className="scr-luxury-checkout theme-noir bg-surface font-body-md text-on-surface antialiased overflow-x-clip min-h-screen flex flex-col">
      <main className="flex-1 max-w-container-max mx-auto w-full px-margin-mobile md:px-margin-desktop py-12 md:py-24">
        {/* The page opened on "Shipping Address" with no h1 above it. */}
        <h1 className="font-display-md text-3xl md:text-4xl text-on-surface mb-10 tracking-[-0.01em]">
          Checkout
        </h1>
        <div className="lg:hidden mb-10">
          <MobileCheckoutSummary />
        </div>

        <form onSubmit={submit} className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-start">
          <div className="lg:col-span-7 space-y-16">
            <section>
              <h2 className="font-headline-lg text-headline-lg text-on-surface mb-8">Shipping Address</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-y-10 gap-x-6">
                <div className="md:col-span-2">
                  <label htmlFor="co-name" className="block text-label-caps text-outline mb-2 uppercase tracking-widest">
                    Full Name
                  </label>
                  <input
                    id="co-name"
                    autoComplete="name"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-transparent border-0 border-b border-outline-variant/50 focus:border-primary focus:ring-0 py-2 transition-all duration-300"
                    type="text"
                  />
                </div>
                <div className="md:col-span-2">
                  <label htmlFor="co-email" className="block text-label-caps text-outline mb-2 uppercase tracking-widest">
                    Email
                  </label>
                  <input
                    id="co-email"
                    autoComplete="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-transparent border-0 border-b border-outline-variant/50 focus:border-primary focus:ring-0 py-2 transition-all duration-300"
                    type="email"
                  />
                </div>
                <div className="md:col-span-2">
                  <label htmlFor="co-street" className="block text-label-caps text-outline mb-2 uppercase tracking-widest">
                    Street Address
                  </label>
                  <input
                    id="co-street"
                    autoComplete="street-address"
                    required
                    value={street}
                    onChange={(e) => setStreet(e.target.value)}
                    className="w-full bg-transparent border-0 border-b border-outline-variant/50 focus:border-primary focus:ring-0 py-2 transition-all duration-300"
                    type="text"
                  />
                </div>
                <div>
                  <label htmlFor="co-city" className="block text-label-caps text-outline mb-2 uppercase tracking-widest">
                    City
                  </label>
                  <input
                    id="co-city"
                    autoComplete="address-level2"
                    required
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="w-full bg-transparent border-0 border-b border-outline-variant/50 focus:border-primary focus:ring-0 py-2 transition-all duration-300"
                    type="text"
                  />
                </div>
                <div>
                  <label htmlFor="co-state" className="block text-label-caps text-outline mb-2 uppercase tracking-widest">
                    State
                  </label>
                  <input
                    id="co-state"
                    autoComplete="address-level1"
                    required
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                    className="w-full bg-transparent border-0 border-b border-outline-variant/50 focus:border-primary focus:ring-0 py-2 transition-all duration-300"
                    type="text"
                  />
                </div>
                <div>
                  <label htmlFor="co-zip" className="block text-label-caps text-outline mb-2 uppercase tracking-widest">
                    Postal Code
                  </label>
                  <input
                    id="co-zip"
                    autoComplete="postal-code"
                    value={zip}
                    onChange={(e) => setZip(e.target.value)}
                    className="w-full bg-transparent border-0 border-b border-outline-variant/50 focus:border-primary focus:ring-0 py-2 transition-all duration-300"
                    type="text"
                  />
                </div>
                <div>
                  <label htmlFor="co-country" className="block text-label-caps text-outline mb-2 uppercase tracking-widest">
                    Country
                  </label>
                  <input
                    id="co-country"
                    autoComplete="country-name"
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
                <Icon name={hasQuoteItems ? "lock_open" : "lock"} className="text-primary" />
                <h3 className="font-headline-lg text-headline-lg">
                  {hasQuoteItems ? "White-Glove Concierge Payment" : "Pay Now, Or By Arrangement"}
                </h3>
              </div>
              <p className="text-body-md text-outline leading-relaxed">
                {hasQuoteItems ? (
                  <>
                    We don&apos;t take card payments on-site for quote-only pieces. Once you place
                    your order, our concierge team will reach out by email to confirm the price,
                    shipping and payment — the same bespoke process every ByChiStrands piece goes
                    through. Any piece in your bag marked &ldquo;Quoted after order&rdquo; has no
                    listed price yet — the concierge email will include that quote before payment
                    is arranged.
                  </>
                ) : (
                  <>
                    Pay by card right now via Flutterwave&apos;s secure checkout, or place your
                    order and our concierge will reach out by email to arrange payment instead —
                    the same bespoke process every ByChiStrands piece goes through.
                  </>
                )}
              </p>
            </section>

            <div className="flex flex-wrap gap-8 items-center py-6 border-y border-outline-variant/20">
              <div className="flex items-center gap-2 text-outline">
                <Icon name="verified" className="text-primary text-[20px]" />
                <span className="text-label-caps tracking-[0.15em]">Atelier Guarantee</span>
              </div>
              <div className="flex items-center gap-2 text-outline">
                <Icon name="package_2" className="text-primary text-[20px]" />
                <span className="text-label-caps tracking-[0.15em]">Discrete Packaging</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="hidden lg:block sticky top-32 space-y-12 bg-surface-container-lowest text-on-surface border border-outline-variant/20 p-8">
              <CheckoutSummary />
              <div className="space-y-4">
                {!hasQuoteItems ? (
                  <button
                    type="submit"
                    onClick={() => setMethod("flutterwave")}
                    disabled={status === "loading"}
                    className="w-full bg-primary text-on-primary py-5 font-label-caps text-label-caps tracking-[0.2em] hover:bg-secondary transition-all duration-500 hover:scale-[1.02] active:scale-100 uppercase disabled:opacity-60"
                  >
                    {status === "loading" && method === "flutterwave" ? "Redirecting…" : "Pay Now"}
                  </button>
                ) : null}
                <button
                  type="submit"
                  onClick={() => setMethod("concierge")}
                  disabled={status === "loading"}
                  className="w-full bg-on-surface text-surface py-5 font-label-caps text-label-caps tracking-[0.2em] hover:bg-primary hover:text-on-primary transition-all duration-500 hover:scale-[1.02] active:scale-100 uppercase disabled:opacity-60"
                >
                  {status === "loading" && method === "concierge"
                    ? "Placing Order…"
                    : hasQuoteItems
                      ? "Place Order"
                      : "Place Order — Pay Later"}
                </button>
                <p className="text-center text-[10px] text-outline px-4 leading-relaxed">
                  By continuing, you agree to the ByChiStrands{" "}
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

            <div className="lg:hidden mt-4 space-y-4">
              {!hasQuoteItems ? (
                <button
                  type="submit"
                  onClick={() => setMethod("flutterwave")}
                  disabled={status === "loading"}
                  className="w-full bg-primary text-on-primary py-5 font-label-caps text-label-caps tracking-[0.2em] hover:bg-secondary transition-all duration-500 uppercase disabled:opacity-60"
                >
                  {status === "loading" && method === "flutterwave" ? "Redirecting…" : "Pay Now"}
                </button>
              ) : null}
              <button
                type="submit"
                onClick={() => setMethod("concierge")}
                disabled={status === "loading"}
                className="w-full bg-on-surface text-surface py-5 font-label-caps text-label-caps tracking-[0.2em] hover:bg-primary hover:text-on-primary transition-all duration-500 uppercase disabled:opacity-60"
              >
                {status === "loading" && method === "concierge"
                  ? "Placing Order…"
                  : hasQuoteItems
                    ? "Place Order"
                    : "Place Order — Pay Later"}
              </button>
            </div>
          </div>
        </form>
      </main>
</div>
  );
}
