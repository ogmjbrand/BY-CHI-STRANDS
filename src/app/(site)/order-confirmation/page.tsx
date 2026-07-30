"use client";

import { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { SiteHeader } from "@/components/stitch/SiteHeader";
import { getProduct } from "@/lib/products";
import { posterFor } from "@/lib/media";
import { formatPrice } from "@/lib/utils";
import { site, whatsappLink } from "@/lib/site";
import type { Order } from "@/types/orders";

/**
 * BY CHI STRANDS — Stitch screen: digital_flagship_order_confirmation
 * "Order Confirmation | ByChi Strands"
 *
 * Reads the order this checkout just created (GET /api/orders/[id]) rather
 * than the original screen's hardcoded name, order number, product, price
 * and US shipping address — no per-visitor login exists yet, so the order
 * id in the URL (returned right after checkout) is what authorizes the view,
 * the same way a guest-checkout receipt link works.
 */
function OrderConfirmationContent() {
  const orderId = useSearchParams().get("order");
  const [order, setOrder] = useState<Order | null | undefined>(undefined);

  useEffect(() => {
    if (!orderId) {
      setOrder(null);
      return;
    }
    fetch(`/api/orders/${orderId}`)
      .then((res) => (res.ok ? res.json() : Promise.reject()))
      .then((data) => setOrder(data.order))
      .catch(() => setOrder(null));
  }, [orderId]);

  if (order === undefined) {
    return (
      <main className="flex-1 flex items-center justify-center py-32">
        <p className="font-body-md text-on-surface-variant">Loading your order…</p>
      </main>
    );
  }

  if (!order) {
    return (
      <main className="flex-1 flex flex-col items-center justify-center text-center px-margin-mobile py-32">
        <span className="material-symbols-outlined text-primary text-5xl mb-8 opacity-40">
          receipt_long
        </span>
        <h1 className="font-display-md text-headline-lg mb-4">We couldn&apos;t find that order</h1>
        <p className="font-body-md text-on-surface-variant max-w-md mb-10">
          The link may have expired. If you just checked out and this looks wrong, reach us on
          WhatsApp and we&apos;ll confirm your order directly.
        </p>
        <div className="flex gap-6">
          <Link
            href="/shop"
            className="px-10 py-4 bg-on-surface text-surface font-label-caps tracking-widest hover:bg-primary hover:text-on-primary transition-all uppercase"
          >
            Return to Shop
          </Link>
          <a
            href={whatsappLink("Hi ByChiStrands — I have a question about my order.")}
            target="_blank"
            rel="noopener noreferrer"
            className="px-10 py-4 border border-primary text-primary font-label-caps tracking-widest hover:bg-primary hover:text-on-primary transition-all uppercase"
          >
            WhatsApp Concierge
          </a>
        </div>
      </main>
    );
  }

  return (
    <main className="flex-1">
      <section className="relative pt-24 pb-section-padding px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <span className="font-label-caps text-label-caps text-primary tracking-[0.3em] mb-6 block">
          ORDER CONFIRMED
        </span>
        <h1 className="font-display-lg text-display-lg text-on-background mb-8 leading-tight tracking-[-0.02em]">
          Thank You, <br />
          <span className="italic font-light">{order.customerName}</span>
        </h1>
        <p className="font-body-xl text-on-surface-variant max-w-xl">
          Your order <span className="font-bold text-on-background">#{order.orderNumber}</span>{" "}
          has been received. Our concierge will email you at {order.customerEmail} shortly to
          confirm payment and shipping.
        </p>
      </section>

      <section className="bg-surface-container-low py-section-padding">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <h2 className="font-display-md text-display-md text-on-background mb-16 text-center tracking-[-0.01em]">
            The Selection
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
            {order.items.map((item, i) => {
              const product = getProduct(item.productId);
              return (
                <div
                  key={`${item.productId}-${i}`}
                  className="bg-white text-noir p-6 border border-outline-variant/20 flex gap-6"
                >
                  {product ? (
                    <Link
                      href={`/shop/${product.slug}`}
                      className="w-24 h-32 shrink-0 bg-surface-container overflow-hidden"
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        alt={item.name}
                        className="w-full h-full object-cover"
                        src={posterFor(product.slug)}
                      />
                    </Link>
                  ) : null}
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="font-headline-lg text-body-xl text-on-background mb-2">
                        {item.name}
                      </h3>
                      <div className="space-y-1 text-body-sm text-on-surface-variant">
                        {item.variant?.length ? <p>Length: {item.variant.length}</p> : null}
                        {item.variant?.texture ? <p>Density: {item.variant.texture}</p> : null}
                        {item.variant?.tone ? <p>Cap: {item.variant.tone}</p> : null}
                        <p>Qty: {item.quantity}</p>
                      </div>
                    </div>
                    <p className="font-body-md font-semibold text-primary mt-4">
                      {formatPrice(item.price * item.quantity)}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="max-w-md mx-auto mt-16 bg-white text-noir p-8 border border-outline-variant/20 space-y-4">
            <div className="flex justify-between font-body-md">
              <span className="text-on-surface-variant">Subtotal</span>
              <span>{formatPrice(order.subtotal)}</span>
            </div>
            <div className="flex justify-between font-body-md">
              <span className="text-on-surface-variant">Shipping</span>
              <span className="text-primary italic">Quoted after order</span>
            </div>
            <div className="flex justify-between font-headline-lg border-t border-outline-variant/20 pt-4">
              <span>Total</span>
              <span className="text-primary">{formatPrice(order.total)}</span>
            </div>
            <div className="pt-4 border-t border-outline-variant/10">
              <p className="font-label-caps text-[10px] text-on-surface-variant uppercase tracking-[0.15em] mb-2">
                Shipping Address
              </p>
              <address className="not-italic font-body-md">
                {order.shippingAddress.street}
                <br />
                {order.shippingAddress.city}, {order.shippingAddress.state}{" "}
                {order.shippingAddress.zip}
                <br />
                {order.shippingAddress.country}
              </address>
            </div>
          </div>
        </div>
      </section>

      <section className="py-section-padding px-margin-mobile md:px-margin-desktop text-center">
        <div className="max-w-2xl mx-auto">
          <h3 className="font-display-md text-display-md mb-8 tracking-[-0.01em]">What follows next?</h3>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <Link
              href="/shop"
              className="w-full md:w-auto px-12 py-5 bg-on-background text-surface font-label-caps text-label-caps hover:bg-primary hover:text-on-primary transition-all duration-400 ease-in-out uppercase tracking-[0.2em]"
            >
              Continue Browsing
            </Link>
            <Link
              href="/academy"
              className="group relative py-2 font-label-caps text-label-caps text-primary uppercase tracking-[0.2em]"
            >
              Visit the Academy
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-primary transition-all duration-400 group-hover:w-full" />
            </Link>
          </div>
          <p className="mt-12 text-on-surface-variant font-body-sm italic">
            For immediate assistance, your concierge is available at {site.email}.
          </p>
        </div>
      </section>
    </main>
  );
}

export default function OrderConfirmationPage() {
  return (
    <div className="scr-order-confirmation theme-noir bg-surface text-on-surface font-body-md overflow-x-hidden min-h-screen flex flex-col">
      <SiteHeader dark />
      <Suspense
        fallback={
          <main className="flex-1 flex items-center justify-center py-32">
            <p className="font-body-md text-on-surface-variant">Loading your order…</p>
          </main>
        }
      >
        <OrderConfirmationContent />
      </Suspense>
      <footer className="bg-surface-container-low border-t border-outline-variant/20">
        <div className="px-margin-mobile md:px-margin-desktop py-8 max-w-container-max mx-auto text-center">
          <p className="font-body-sm text-on-surface-variant">
            © {new Date().getFullYear()} {site.name}. The Art of Luxury Hair.
          </p>
        </div>
      </footer>
    </div>
  );
}
