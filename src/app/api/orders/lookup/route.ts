import { NextRequest, NextResponse } from "next/server";
import { getOrderByEmail } from "@/lib/orders";

export const runtime = "nodejs";

export async function GET(request: NextRequest) {
  const email = request.nextUrl.searchParams.get("email");
  if (!email) {
    return NextResponse.json({ error: "Missing email" }, { status: 400 });
  }

  const orders = await getOrderByEmail(email);
  return NextResponse.json({ success: true, orders }, { status: 200 });
}
