import { NextRequest, NextResponse } from "next/server";
import { validateCoupon, calculateShipping, getShippingRates } from "@/lib/payments";

export const runtime = "nodejs";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { couponCode, orderTotal, zipCode, weight } = body;

    const results: any = { valid: true };

    if (couponCode) {
      const coupon = await validateCoupon(couponCode, orderTotal);
      results.coupon = coupon;
      results.valid = results.valid && !!coupon;
    }

    if (zipCode) {
      const shipping = await calculateShipping(zipCode, weight || 1);
      results.shipping = shipping;
    } else {
      const rates = await getShippingRates("00000");
      results.shippingRates = rates;
    }

    return NextResponse.json({ success: true, ...results }, { status: 200 });
  } catch (error) {
    console.error("[api/checkout/validate] request failed:", error);
    return NextResponse.json(
      { error: "Validation failed" },
      { status: 500 }
    );
  }
}
