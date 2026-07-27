import { NextRequest, NextResponse } from "next/server";
import { createSupportTicket, getUserTickets } from "@/lib/contact";

export const runtime = "nodejs";

export async function GET(request: NextRequest) {
  try {
    const userId = request.headers.get("x-user-id");
    if (!userId) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const tickets = await getUserTickets(userId);

    return NextResponse.json({ success: true, tickets }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch tickets" }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const userId = request.headers.get("x-user-id");
    if (!userId) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const body = await request.json();

    if (!body.subject || !body.description) {
      return NextResponse.json(
        { error: "Missing required fields: subject, description" },
        { status: 400 }
      );
    }

    const ticket = await createSupportTicket(userId, body);

    return NextResponse.json({ success: true, ticket }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Failed to create ticket" },
      { status: 500 }
    );
  }
}
