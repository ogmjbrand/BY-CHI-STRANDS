import Link from "next/link";

export function ClientConciergeSection() {
  return (
    <section className="overflow-hidden bg-surface px-6 py-24 md:px-16 md:py-32">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 rounded-[2.25rem] border border-outline-variant/30 bg-surface-container-low p-8 shadow-[0_24px_70px_rgba(0,0,0,0.05)] md:p-12">
        <div className="max-w-3xl space-y-4">
          <p className="font-label-caps text-[11px] uppercase tracking-[0.3em] text-primary">
            Client concierge
          </p>
          <h2 className="font-display-lg text-3xl leading-[1.02] tracking-[-0.02em] md:text-5xl">
            Open your account. Place your order. Let the atelier guide the rest.
          </h2>
          <p className="max-w-2xl text-body-md text-on-surface-variant">
            Save your profile for faster checkout, look up your orders with the email you used at purchase,
            and move from discovery to delivery with a single elegant path.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-[1.5rem] border border-outline-variant/30 bg-surface p-7">
            <p className="font-label-caps text-[10px] uppercase tracking-[0.24em] text-primary">
              Create your account
            </p>
            <h3 className="mt-3 font-headline-lg text-2xl text-on-surface">
              Save your concierge profile
            </h3>
            <p className="mt-3 text-body-md text-on-surface-variant">
              Keep your name, email, and preferred contact details ready for the next appointment or order.
            </p>
            <Link
              href="/account"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-on-surface px-5 py-3 font-label-caps text-[11px] uppercase tracking-[0.24em] text-surface transition-colors hover:bg-primary"
            >
              Open account page
              <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </Link>
          </div>

          <div className="rounded-[1.5rem] border border-outline-variant/30 bg-surface p-7">
            <p className="font-label-caps text-[10px] uppercase tracking-[0.24em] text-primary">
              Start your order
            </p>
            <h3 className="mt-3 font-headline-lg text-2xl text-on-surface">
              Move from selection to checkout
            </h3>
            <p className="mt-3 text-body-md text-on-surface-variant">
              Choose your piece, confirm your shipping details, and place the order with a concierge-led flow.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/checkout"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 font-label-caps text-[11px] uppercase tracking-[0.24em] text-on-primary transition-colors hover:bg-primary-container"
              >
                Go to checkout
                <span className="material-symbols-outlined text-[16px]">lock</span>
              </Link>
              <Link
                href="/shop"
                className="inline-flex items-center gap-2 rounded-full border border-outline-variant/40 px-5 py-3 font-label-caps text-[11px] uppercase tracking-[0.24em] text-on-surface-variant transition-colors hover:border-primary hover:text-primary"
              >
                Browse collection
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
