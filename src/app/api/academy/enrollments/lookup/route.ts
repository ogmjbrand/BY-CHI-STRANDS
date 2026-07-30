import { NextRequest, NextResponse } from "next/server";
import { getEnrollmentsByEmail } from "@/lib/enrollments";

export const runtime = "nodejs";

export async function GET(request: NextRequest) {
  const email = request.nextUrl.searchParams.get("email");
  if (!email) {
    return NextResponse.json({ error: "Missing email" }, { status: 400 });
  }

  const enrollments = await getEnrollmentsByEmail(email);
  return NextResponse.json({ success: true, enrollments }, { status: 200 });
}
