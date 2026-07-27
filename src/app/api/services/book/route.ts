import { NextRequest, NextResponse } from "next/server";
import { createServiceBooking } from "@/lib/bookings";
import { sendEmail } from "@/lib/email";
import { renderServiceBookingConfirmationHTML } from "@/lib/email-html";
import type { CreateServiceBookingRequest } from "@/types/bookings";

export const runtime = "nodejs";

export async function POST(request: NextRequest) {
  try {
    const body: CreateServiceBookingRequest = await request.json();

    // Validate required fields
    if (
      !body.customerName ||
      !body.customerEmail ||
      !body.serviceId ||
      !body.serviceName ||
      !body.bookingDate ||
      !body.bookingTime ||
      !body.location ||
      !body.estimatedDuration ||
      body.price === undefined
    ) {
      return NextResponse.json(
        {
          error:
            "Missing required fields: customerName, customerEmail, serviceId, serviceName, bookingDate, bookingTime, location, estimatedDuration, price",
        },
        { status: 400 }
      );
    }

    // Create booking
    const booking = await createServiceBooking(body);

    // Render and send confirmation email
    const rescheduleUrl = `${process.env.NEXT_PUBLIC_SITE_URL || "https://bychistrands.com"}/services?bookingId=${booking.id}`;
    const emailHtml = renderServiceBookingConfirmationHTML(booking, rescheduleUrl);

    await sendEmail({
      to: booking.customerEmail,
      subject: `Booking Confirmed: ${booking.serviceName} - BY CHI STRANDS`,
      html: emailHtml,
    });

    return NextResponse.json(
      {
        success: true,
        booking: {
          id: booking.id,
          bookingReference: booking.bookingReference,
          status: booking.status,
          bookingDate: booking.bookingDate,
          bookingTime: booking.bookingTime,
        },
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Service booking failed:", error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Failed to create service booking" },
      { status: 500 }
    );
  }
}
