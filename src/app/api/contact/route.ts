import { NextRequest, NextResponse } from "next/server";
import { createContactMessage } from "@/lib/contact";

export const runtime = "nodejs";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Newsletter signups only ever collect an email — the rest of the
    // contact_messages row is filled in here, not fabricated as if the
    // visitor typed it.
    if (body.type === "newsletter") {
      if (!body.email) {
        return NextResponse.json({ error: "Missing required field: email" }, { status: 400 });
      }
      body.name = body.name || "Newsletter subscriber";
      body.subject = "Newsletter signup";
      body.message = "Subscribed via the homepage newsletter form.";
    }

    if (!body.name || !body.email || !body.subject || !body.message) {
      return NextResponse.json(
        { error: "Missing required fields: name, email, subject, message" },
        { status: 400 }
      );
    }

    const message = await createContactMessage(body);

    return NextResponse.json(
      { success: true, messageId: message.id },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Failed to send message" },
      { status: 500 }
    );
  }
}
