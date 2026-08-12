import Link from "next/link";

export function ClientConciergeSection() {
  return (
    <section className="relative overflow-hidden bg-noir px-6 py-24 text-white md:px-16 md:py-32">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/media/posters/imgi_69_497f33f33d93c247e1bd680d9bef091f.jpg"
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-25"
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,_rgba(13,11,8,0.75)_0%,_rgba(13,11,8,0.94)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(201,162,39,0.16),_transparent_38%)]" />

      <div className="relative mx-auto flex max-w-6xl flex-col gap-10 rounded-[2.25rem] border border-gold/20 bg-noir-high/70 p-8 shadow-[0_24px_70px_rgba(0,0,0,0.4)] backdrop-blur-xl md:p-12">
        <div className="max-w-3xl space-y-4">
          <p className="font-label-caps text-[11px] uppercase tracking-[0.3em] text-gold">
            Client concierge
          </p>
          <h2 className="font-display-lg text-3xl leading-[1.02] tracking-[-0.02em] md:text-5xl">
            Open your account. Place your order. Let the atelier guide the rest.
          </h2>
          <p className="max-w-2xl text-body-md text-white/70">
            Save your profile for faster checkout, look up your orders with the email you used at purchase,
            and move from discovery to delivery with a single elegant path.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-[1.5rem] border border-gold/20 bg-black/30 p-7">
            <p className="font-label-caps text-[10px] uppercase tracking-[0.24em] text-gold">
              Create your account
            </p>
            <h3 className="mt-3 font-headline-lg text-2xl text-white">
              Save your concierge profile
            </h3>
            <p className="mt-3 text-body-md text-white/65">
              Keep your name, email, and preferred contact details ready for the next appointment or order.
            </p>
            <Link
              href="/account"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-white text-noir px-5 py-3 font-label-caps text-[11px] uppercase tracking-[0.24em] transition-colors hover:bg-gold-light"
            >
              Open account page
              <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </Link>
          </div>

          <div className="rounded-[1.5rem] border border-gold/20 bg-black/30 p-7">
            <p className="font-label-caps text-[10px] uppercase tracking-[0.24em] text-gold">
              Start your order
            </p>
            <h3 className="mt-3 font-headline-lg text-2xl text-white">
              Move from selection to checkout
            </h3>
            <p className="mt-3 text-body-md text-white/65">
              Choose your piece, confirm your shipping details, and place the order with a concierge-led flow.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/checkout"
                className="inline-flex items-center gap-2 rounded-full bg-gold px-5 py-3 font-label-caps text-[11px] uppercase tracking-[0.24em] text-noir transition-colors hover:bg-gold-light"
              >
                Go to checkout
                <span className="material-symbols-outlined text-[16px]">lock</span>
              </Link>
              <Link
                href="/shop"
                className="inline-flex items-center gap-2 rounded-full border border-gold/30 px-5 py-3 font-label-caps text-[11px] uppercase tracking-[0.24em] text-white/70 transition-colors hover:border-gold hover:text-gold"
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
