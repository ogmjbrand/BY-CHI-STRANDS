"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { useStore, linePrice, lineIsQuote } from "@/context/StoreContext";
import { getProduct } from "@/lib/products";
import { posterFor } from "@/lib/media";
import { Icon } from "@/components/ui/icon";

/* ── open/close state, shared with the header bag icons ─────────── */

interface CartUi {
  open: boolean;
  openCart: () => void;
  closeCart: () => void;
}

const CartUiContext = createContext<CartUi | null>(null);

export function CartUiProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);

  const openCart = useCallback(() => setOpen(true), []);
  const closeCart = useCallback(() => setOpen(false), []);

  // the design locks the page behind the drawer
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const value = useMemo(
    () => ({ open, openCart, closeCart }),
    [open, openCart, closeCart]
  );

  return (
    <CartUiContext.Provider value={value}>
      {children}
      <CartDrawer />
    </CartUiContext.Provider>
  );
}

export function useCartUi() {
  const ctx = useContext(CartUiContext);
  if (!ctx) throw new Error("useCartUi must be used within CartUiProvider");
  return ctx;
}

/* ── the drawer itself — markup from the Shopping Bag Sidebar screen ── */

const money = (n: number) =>
  n.toLocaleString("en-NG", {
    style: "currency",
    currency: "NGN",
    maximumFractionDigits: 0,
  });

const SHIPPING_NOTE = "Complimentary";

function CartDrawer() {
  const ctx = useContext(CartUiContext);
  const { cart, updateQty, removeLine, cartTotal, hydrated } = useStore();
  const open = ctx?.open ?? false;
  const close = ctx?.closeCart ?? (() => {});
  const reduceMotion = useReducedMotion();

  return (
    <>
      {/* Backdrop */}
      <motion.div
        aria-hidden={!open}
        onClick={close}
        initial={false}
        animate={{ opacity: open ? 1 : 0 }}
        transition={{ duration: reduceMotion ? 0 : 0.22, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed inset-0 bg-on-surface/40 backdrop-blur-sm z-[55] ${open ? "" : "pointer-events-none"}`}
      />

      {/* Sidebar */}
      <motion.aside
        aria-label="Your Selection"
        aria-hidden={!open}
        initial={false}
        animate={{ x: open ? "0%" : "100%" }}
        transition={
          reduceMotion
            ? { duration: 0 }
            : { type: "spring", stiffness: 330, damping: 34, mass: 0.72 }
        }
        className="theme-noir fixed right-0 top-0 h-full w-full md:w-[500px] lg:w-[550px] bg-surface z-[60] shadow-[0px_20px_50px_rgba(0,0,0,0.04)] border-l border-outline-variant/30 flex flex-col"
      >
        <header className="flex justify-between items-center px-6 md:px-10 pt-10 md:pt-12 pb-6 border-b border-outline-variant/10">
          <div>
            <h2 className="font-display-md text-headline-lg text-on-surface">
              Your Selection
            </h2>
            <p className="font-body-sm text-body-sm text-tertiary tracking-wide uppercase mt-1">
              Private Concierge Experience
            </p>
          </div>
          <button onClick={close} className="group p-2 -mr-2" aria-label="Close bag">
            <Icon name="close" className="text-tertiary group-hover:text-primary transition-colors duration-300" />
          </button>
        </header>

        <div className="flex-1 overflow-y-auto px-6 md:px-10 py-8 space-y-12">
          {!hydrated ? null : cart.length === 0 ? (
            <div className="text-center py-16">
              {/* No data-bag-trigger: this is the empty-state illustration
                  inside the open drawer, not a way in. Marking it would have
                  StoreBridge bind "open the cart" to the cart, and staple a
                  live count badge onto a decorative graphic. */}
              <Icon name="shopping_bag" className="text-primary text-5xl mb-8 block opacity-40" />
              <p className="font-body-xl text-body-xl text-tertiary mb-10">
                Your selection is empty.
              </p>
              <Link
                href="/shop"
                onClick={close}
                className="inline-block px-12 py-4 bg-on-surface text-surface font-label-caps tracking-widest hover:bg-primary transition-all duration-500 rounded-lg uppercase"
              >
                Explore the Collection
              </Link>
            </div>
          ) : (
            <section className="space-y-10">
              {cart.map((line, i) => {
                const product = getProduct(line.slug);
                if (!product) return null;
                return (
                  <div
                    key={`${line.slug}-${line.length}-${line.density ?? ""}-${line.lace ?? ""}`}
                    className="group flex gap-5 md:gap-6 transition-transform duration-300 hover:-translate-y-0.5"
                  >
                    <Link
                      href={`/shop/${product.slug}`}
                      onClick={close}
                      className="w-28 h-40 md:w-32 md:h-44 bg-surface-container-high relative overflow-hidden shrink-0"
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        alt={product.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        src={posterFor(product.slug)}
                      />
                    </Link>

                    <div className="flex flex-col justify-between py-1 flex-1">
                      <div>
                        <p className="font-body-sm text-[11px] text-primary tracking-[0.2em] uppercase mb-1">
                          {product.collection.replace(/-/g, " ")}
                        </p>
                        <h3 className="font-display-md text-body-xl font-medium mb-2">
                          <Link href={`/shop/${product.slug}`} onClick={close}>
                            {product.name}
                          </Link>
                        </h3>
                        <div className="space-y-1">
                          <p className="font-body-sm text-tertiary">
                            Length: {line.length}&quot;
                          </p>
                          {line.density ? (
                            <p className="font-body-sm text-tertiary">
                              Density: {line.density}
                            </p>
                          ) : null}
                          {line.lace ? (
                            <p className="font-body-sm text-tertiary">
                              Cap: {line.lace}
                            </p>
                          ) : null}
                        </div>
                      </div>

                      <div className="flex justify-between items-end gap-4">
                        <div className="flex items-center border border-outline-variant/40">
                          <button
                            onClick={() => updateQty(i, line.qty - 1)}
                            className="w-8 h-8 flex items-center justify-center text-tertiary hover:text-primary transition-colors"
                            aria-label="Decrease quantity"
                          >
                            <Icon name="remove" className="text-sm" />
                          </button>
                          <span className="w-8 text-center font-body-sm tabular-nums">
                            {line.qty}
                          </span>
                          <button
                            onClick={() => updateQty(i, line.qty + 1)}
                            className="w-8 h-8 flex items-center justify-center text-tertiary hover:text-primary transition-colors"
                            aria-label="Increase quantity"
                          >
                            <Icon name="add" className="text-sm" />
                          </button>
                        </div>

                        <div className="text-right">
                          <p className="font-body-md font-semibold text-on-surface">
                            {lineIsQuote(line) ? "Quoted after order" : money(linePrice(line) * line.qty)}
                          </p>
                          <button
                            onClick={() => removeLine(i)}
                            className="text-tertiary hover:text-error transition-colors text-xs font-label-caps border-b border-outline-variant/50 pb-0.5 mt-1"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </section>
          )}

          {cart.length > 0 ? (
            <section className="space-y-4">
              <div className="flex items-center gap-2">
                <Icon name="auto_awesome" className="text-tertiary text-sm" />
                <h4 className="font-label-caps text-on-surface-variant">
                  Concierge Notes
                </h4>
              </div>
              <textarea
                className="w-full bg-surface-bright border border-outline-variant/30 p-4 font-body-sm focus:border-primary-container focus:ring-0 transition-colors placeholder:text-outline/50 resize-none h-24"
                placeholder="Add special requests for your stylist or concierge..."
              />
            </section>
          ) : null}
        </div>

        {cart.length > 0 ? (
          <footer className="p-6 md:p-10 bg-surface border-t border-outline-variant/20 space-y-6">
            <div className="space-y-3">
              <div className="flex justify-between font-body-sm text-tertiary">
                <span>Subtotal</span>
                <span className="tabular-nums">{money(cartTotal)}</span>
              </div>
              <div className="flex justify-between font-body-sm text-tertiary italic">
                <span>White-Glove Shipping</span>
                <span>{SHIPPING_NOTE}</span>
              </div>
              <div className="flex justify-between items-baseline pt-3 border-t border-outline-variant/20">
                <span className="font-label-caps text-on-surface">Total</span>
                <span className="font-display-md text-headline-lg text-on-surface tabular-nums">
                  {money(cartTotal)}
                </span>
              </div>
              {cart.some(lineIsQuote) ? (
                <p className="text-right font-body-sm text-[11px] text-tertiary italic">
                  Plus {cart.filter(lineIsQuote).length} piece
                  {cart.filter(lineIsQuote).length === 1 ? "" : "s"} quoted after order
                </p>
              ) : null}
            </div>

            <Link
              href="/checkout"
              onClick={close}
              className="block w-full text-center px-12 py-5 bg-on-surface text-surface font-label-caps tracking-widest hover:bg-primary transition-all duration-500 rounded-lg uppercase"
            >
              Proceed to Checkout
            </Link>
            <button
              onClick={close}
              className="w-full font-label-caps text-tertiary hover:text-primary transition-colors uppercase tracking-widest"
            >
              Continue Browsing
            </button>
          </footer>
        ) : null}
      </motion.aside>
    </>
  );
}
