import { NextRequest, NextResponse } from "next/server";
import { createEnrollment } from "@/lib/enrollments";
import { sendEmail } from "@/lib/email";
import { renderEnrollmentConfirmationHTML } from "@/lib/email-html";
import type { CreateEnrollmentRequest } from "@/types/enrollments";

export const runtime = "nodejs";

export async function POST(request: NextRequest) {
  try {
    const body: CreateEnrollmentRequest = await request.json();

    // Validate required fields
    if (!body.customerName || !body.customerEmail || !body.courseId || !body.courseName || !body.startDate) {
      return NextResponse.json(
        { error: "Missing required fields: customerName, customerEmail, courseId, courseName, startDate" },
        { status: 400 }
      );
    }

    // Create enrollment
    const enrollment = await createEnrollment(body);

    // Render and send confirmation email
    const courseUrl = `${process.env.NEXT_PUBLIC_SITE_URL || "https://bychistrands.com"}/academy/dashboard?courseId=${enrollment.courseId}`;
    const emailHtml = renderEnrollmentConfirmationHTML(enrollment, courseUrl);

    await sendEmail({
      to: enrollment.customerEmail,
      subject: `Welcome to ${enrollment.courseName}! - BY CHI STRANDS Academy`,
      html: emailHtml,
    });

    return NextResponse.json(
      {
        success: true,
        enrollment: {
          id: enrollment.id,
          status: enrollment.status,
          accessCode: enrollment.accessCode,
        },
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Enrollment creation failed:", error);
    return NextResponse.json(
      {
        error:
          "We could not record that application. Please try again, or email the concierge and we will add you to the cohort list.",
      },
      { status: 500 }
    );
  }
}
