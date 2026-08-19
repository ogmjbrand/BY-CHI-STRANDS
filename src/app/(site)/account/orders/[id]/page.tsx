import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "@/components/stitch/SiteHeader";
import { OrderTimeline } from "@/components/stitch/OrderTimeline";
import { getOrder } from "@/lib/orders";
import { getProduct } from "@/lib/products";
import { posterFor } from "@/lib/media";
import { formatPrice } from "@/lib/utils";
import { site, whatsappLink } from "@/lib/site";
import { Icon } from "@/components/ui/icon";

/**
 * BY CHI STRANDS — Stitch screen: digital_flagship_order_details
 * "Order Details | VIET LUXE HAIR"
 *
 * Was a fully static mockup — wrong brand name, a fabricated "•••• 8812
 * (Visa)" card on file (misleading: the house never stores or charges
 * cards), an invented shipping address and tracking timeline, none of it
 * connected to the `id` in the URL. Now fetches the real order server-side.
 */

export const metadata: Metadata = {
  title: "Order Details",
};

export default async function OrderDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const order = await getOrder(id);

  return (
    <div className="scr-order-details theme-noir bg-surface text-on-surface font-body-md min-h-screen flex flex-col">
      {!order ? (
        <main className="flex-1 flex flex-col items-center justify-center text-center px-margin-mobile py-32">
          <Icon name="receipt_long" className="text-primary text-5xl mb-8 opacity-40" />
          <h1 className="font-display-md text-headline-lg mb-4">Order not found</h1>
          <p className="font-body-md text-on-surface-variant max-w-md mb-10">
            We couldn&apos;t find an order with that link. Try looking it up again with your
            email, or message our concierge.
          </p>
          <div className="flex gap-6">
            <Link
              href="/account"
              className="px-10 py-4 bg-on-surface text-surface font-label-caps tracking-widest hover:bg-primary hover:text-on-primary transition-all uppercase"
            >
              Look Up Orders
            </Link>
            <a
              href={whatsappLink("Hi ByChi Strands — I have a question about my order.")}
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-4 border border-primary text-primary font-label-caps tracking-widest hover:bg-primary hover:text-on-primary transition-all uppercase"
            >
              WhatsApp Concierge
            </a>
          </div>
        </main>
      ) : (
        <main className="flex-1 max-w-container-max mx-auto w-full px-margin-mobile md:px-margin-desktop py-16">
          <header className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16">
            <div>
              <Link
                href="/account"
                className="flex items-center gap-2 text-primary font-label-caps mb-6 group w-fit"
              >
                <Icon name="arrow_back" className="text-[16px] group-hover:-translate-x-1 transition-transform" />
                BACK TO ORDERS
              </Link>
              <h1 className="font-display-md text-display-md text-on-surface mb-2 tracking-[-0.01em]">
                Order #{order.orderNumber}
              </h1>
              <p className="font-body-md text-on-surface-variant">
                Placed on{" "}
                {new Date(order.createdAt).toLocaleDateString("en-NG", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </p>
            </div>
            <span className="bg-secondary-container text-secondary font-label-caps px-6 py-2 rounded-full border border-primary-container/20 uppercase tracking-widest">
              {order.status}
            </span>
          </header>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-8 space-y-8">
              <section className="bg-surface-container-lowest text-on-surface border border-outline-variant/20 p-8">
                <h2 className="font-label-caps text-on-surface mb-8 border-b border-outline-variant/20 pb-4">
                  PROGRESS
                </h2>
                <OrderTimeline status={order.status} />

                {order.trackingNumber || order.carrier || order.estimatedDelivery ? (
                  <div className="mt-8 pt-6 border-t border-outline-variant/20 grid grid-cols-1 sm:grid-cols-3 gap-6">
                    {order.carrier ? (
                      <div>
                        <p className="font-label-caps text-on-surface-variant text-[10px] mb-1">
                          CARRIER
                        </p>
                        <p className="font-body-md text-on-surface">{order.carrier}</p>
                      </div>
                    ) : null}
                    {order.trackingNumber ? (
                      <div>
                        <p className="font-label-caps text-on-surface-variant text-[10px] mb-1">
                          TRACKING NUMBER
                        </p>
                        <p className="font-body-md text-on-surface break-all">
                          {order.trackingNumber}
                        </p>
                      </div>
                    ) : null}
                    {order.estimatedDelivery ? (
                      <div>
                        <p className="font-label-caps text-on-surface-variant text-[10px] mb-1">
                          ESTIMATED DELIVERY
                        </p>
                        <p className="font-body-md text-on-surface">{order.estimatedDelivery}</p>
                      </div>
                    ) : null}
                  </div>
                ) : null}
              </section>

              {order.items.map((item, i) => {
                const product = getProduct(item.productId);
                return (
                  <div
                    key={`${item.productId}-${i}`}
                    className="bg-surface-container-lowest text-on-surface border border-outline-variant/20 p-8 flex gap-8"
                  >
                    {product ? (
                      <Link
                        href={`/shop/${product.slug}`}
                        className="w-32 h-44 shrink-0 bg-surface-container overflow-hidden"
                      >
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          alt={item.name}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                          src={posterFor(product.slug)}
                        />
                      </Link>
                    ) : null}
                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex justify-between items-start mb-4">
                          <h3 className="font-headline-lg text-on-surface">{item.name}</h3>
                          <span className="font-headline-lg text-primary">
                            {formatPrice(item.price)}
                          </span>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          {item.variant?.length ? (
                            <div>
                              <p className="font-label-caps text-on-surface-variant text-[10px] mb-1">
                                LENGTH
                              </p>
                              <p className="font-body-md text-on-surface">{item.variant.length}</p>
                            </div>
                          ) : null}
                          {item.variant?.texture ? (
                            <div>
                              <p className="font-label-caps text-on-surface-variant text-[10px] mb-1">
                                TEXTURE
                              </p>
                              <p className="font-body-md text-on-surface">
                                {item.variant.texture}
                              </p>
                            </div>
                          ) : null}
                          {item.variant?.tone ? (
                            <div>
                              <p className="font-label-caps text-on-surface-variant text-[10px] mb-1">
                                COLOUR
                              </p>
                              <p className="font-body-md text-on-surface">{item.variant.tone}</p>
                            </div>
                          ) : null}
                          {item.variant?.lace ? (
                            <div>
                              <p className="font-label-caps text-on-surface-variant text-[10px] mb-1">
                                LACE
                              </p>
                              <p className="font-body-md text-on-surface">{item.variant.lace}</p>
                            </div>
                          ) : null}
                          <div>
                            <p className="font-label-caps text-on-surface-variant text-[10px] mb-1">
                              QUANTITY
                            </p>
                            <p className="font-body-md text-on-surface">{item.quantity}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="lg:col-span-4 space-y-8">
              <div className="bg-surface-container-lowest text-on-surface border border-outline-variant/20 p-8">
                <div className="mb-10">
                  <h5 className="font-label-caps text-on-surface mb-6 border-b border-outline-variant/20 pb-4">
                    SHIPPING ADDRESS
                  </h5>
                  <p className="font-body-md text-on-surface leading-loose">
                    {order.customerName}
                    <br />
                    {order.shippingAddress.street}
                    <br />
                    {order.shippingAddress.city}, {order.shippingAddress.state}{" "}
                    {order.shippingAddress.zip}
                    <br />
                    {order.shippingAddress.country}
                  </p>
                </div>
                <div className="pt-6 border-t border-outline-variant/30 space-y-4">
                  <div className="flex justify-between font-body-md">
                    <span className="text-on-surface-variant">Subtotal</span>
                    <span className="text-on-surface">{formatPrice(order.subtotal)}</span>
                  </div>
                  <div className="flex justify-between font-body-md">
                    <span className="text-on-surface-variant">Shipping</span>
                    <span className="text-primary italic">
                      {order.shipping ? formatPrice(order.shipping) : "Quoted after order"}
                    </span>
                  </div>
                  <div className="flex justify-between font-headline-lg border-t border-outline-variant/10 pt-4">
                    <span>Total</span>
                    <span className="text-primary">{formatPrice(order.total)}</span>
                  </div>
                </div>
              </div>

              <div className="bg-primary text-on-primary p-8 text-center">
                <Icon name="support_agent" className="text-[48px] mb-4 block" strokeWidth={1} />
                <h5 className="font-headline-lg text-[20px] mb-2">Personal Concierge</h5>
                <p className="font-body-sm opacity-80 mb-8 px-4">
                  Questions about payment, shipping, or your order status — our team replies fast
                  on WhatsApp.
                </p>
                <a
                  href={whatsappLink(`Hi ByChi Strands — question about order #${order.orderNumber}.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  /* text-noir, not text-primary: primary is gold in the noir
                     scope, and gold on a white button is barely legible. */
                  className="block w-full py-4 bg-surface-container-lowest text-on-surface font-label-caps rounded hover:bg-gold-light transition-colors active:scale-95"
                >
                  CONTACT CONCIERGE
                </a>
              </div>
            </div>
          </div>
        </main>
      )}
</div>
  );
}
