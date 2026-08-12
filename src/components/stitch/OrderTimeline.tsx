import type { Order } from "@/types/orders";
import { Icon } from "@/components/ui/icon";

/**
 * Order progress rail. Steps come from the real `status` enum the orders
 * table stores (pending → confirmed → processing → shipped → delivered);
 * nothing here invents a stage the house doesn't actually record. Cancelled
 * orders short-circuit to their own state rather than being shown part-way
 * along a progress bar they'll never finish.
 */

const STEPS: { status: Order["status"]; label: string; blurb: string }[] = [
  {
    status: "pending",
    label: "Order Placed",
    blurb: "We have your order. Payment is being confirmed.",
  },
  {
    status: "confirmed",
    label: "Confirmed",
    blurb: "Payment settled. Your pieces are reserved.",
  },
  {
    status: "processing",
    label: "Preparing",
    blurb: "Being inspected, silk-wrapped and boxed in the atelier.",
  },
  {
    status: "shipped",
    label: "Shipped",
    blurb: "On its way to you, tracked and insured.",
  },
  {
    status: "delivered",
    label: "Delivered",
    blurb: "Signed for. We hope you love it.",
  },
];

export function OrderTimeline({ status }: { status: Order["status"] }) {
  if (status === "cancelled") {
    return (
      <div className="border border-outline-variant/30 p-8 text-center">
        <Icon name="cancel" className="text-on-surface-variant text-[32px] mb-3 block" />
        <p className="font-headline-lg text-xl mb-2">This order was cancelled</p>
        <p className="font-body-md text-on-surface-variant">
          If that looks wrong, message our concierge and we&apos;ll sort it out.
        </p>
      </div>
    );
  }

  const currentIndex = STEPS.findIndex((s) => s.status === status);

  return (
    <ol className="relative">
      {STEPS.map((step, i) => {
        const done = i < currentIndex;
        const active = i === currentIndex;
        const upcoming = i > currentIndex;
        const last = i === STEPS.length - 1;

        return (
          <li key={step.status} className="relative flex gap-6 pb-10 last:pb-0">
            {/* connector */}
            {!last ? (
              <span
                aria-hidden="true"
                className={`absolute left-[15px] top-8 bottom-0 w-px ${
                  done ? "bg-primary" : "bg-outline-variant/40"
                }`}
              />
            ) : null}

            <span
              aria-hidden="true"
              className={`relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border ${
                done
                  ? "bg-primary border-primary text-on-primary"
                  : active
                    ? "bg-primary/15 border-primary text-primary"
                    : "bg-transparent border-outline-variant/50 text-on-surface-variant/50"
              }`}
            >
              <Icon name={done ? "check" : active ? "radio_button_checked" : "radio_button_unchecked"} className="text-[16px]" />
            </span>

            <div className={upcoming ? "opacity-45" : ""}>
              <p
                className={`font-label-caps text-label-caps uppercase tracking-[0.2em] mb-1 ${
                  active ? "text-primary" : "text-on-surface"
                }`}
              >
                {step.label}
                {active ? <span className="sr-only"> — current status</span> : null}
              </p>
              <p className="font-body-md text-body-sm text-on-surface-variant max-w-md">
                {step.blurb}
              </p>
            </div>
          </li>
        );
      })}
    </ol>
  );
}
