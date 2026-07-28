import "server-only";
import { Resend } from "resend";

export const FROM_EMAIL = "orders@bychistrands.com";
export const FROM_NAME = "BY CHI STRANDS";

export async function sendEmail({
  to,
  subject,
  html,
}: {
  to: string;
  subject: string;
  html: string;
}) {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const result = await resend.emails.send({
      from: `${FROM_NAME} <${FROM_EMAIL}>`,
      to,
      subject,
      html,
    });

    if (result.error) {
      console.error("Email send failed:", result.error);
      return { success: false, error: result.error.message || "Unknown error" };
    }

    return { success: true, messageId: result.data?.id || "sent" };
  } catch (error) {
    console.error("Email send failed:", error);
    return { success: false, error: error instanceof Error ? error.message : "Unknown error" };
  }
}
