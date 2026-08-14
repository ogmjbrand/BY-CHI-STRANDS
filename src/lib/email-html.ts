import "server-only";
import type { Order } from "@/types/orders";
import type { Enrollment } from "@/types/enrollments";
import type { ServiceBooking } from "@/types/bookings";
import { formatPrice } from "./utils";

const BASE_STYLES =
  'font-family: "system-ui", "-apple-system", "sans-serif"; max-width: 600px; margin: 0 auto; padding: 20px;';
const BUTTON_STYLES =
  'display: inline-block; background-color: #1a1a1a; color: #fff; padding: 12px 24px; text-decoration: none; border-radius: 4px; font-size: 14px; font-weight: bold;';
const FOOTER =
  '<div style="margin-top: 40px; padding-top: 20px; border-top: 1px solid #eee; font-size: 12px; color: #999;"><p style="margin: 0 0 10px 0;">© 2026 BY CHI STRANDS. All rights reserved.</p><p style="margin: 0;">Luxury ese Hair. Crafted for Confidence.</p></div>';

export function renderOrderConfirmationHTML(order: Order): string {
  const hasQuoteItems = order.items.some((item) => item.price === null);

  const itemsHtml = order.items
    .map(
      (item) =>
        `<div style="display: flex; justify-content: space-between; padding-bottom: 10px; border-bottom: 1px solid #eee; font-size: 14px; margin-bottom: 10px;">
        <span>${item.name} x ${item.quantity}</span>
        <span>${item.price === null ? "Quoted after order" : formatPrice(item.price * item.quantity)}</span>
      </div>`
    )
    .join("");

  return `<!DOCTYPE html>
<html>
<head><meta charset="utf-8"></head>
<body style="${BASE_STYLES}">
  <h1 style="color: #1a1a1a; margin-bottom: 30px;">Order Confirmed</h1>
  <p style="font-size: 14px; color: #666; line-height: 1.6;">Hi ${order.customerName},</p>
  <p style="font-size: 14px; color: #666; line-height: 1.6;">Thank you for your order! We're excited to get your ByChiStrands pieces to you. Your order has been confirmed and is being prepared.</p>

  <div style="background-color: #f8f8f8; padding: 20px; border-radius: 4px; margin-bottom: 30px; margin-top: 30px;">
    <p style="margin: 0 0 20px 0; font-size: 14px; color: #666;"><strong>Order Number:</strong> ${order.orderNumber}</p>
    <p style="margin: 0 0 20px 0; font-size: 14px; color: #666;"><strong>Estimated Delivery:</strong> ${order.estimatedDelivery || "3-5 business days"}</p>
  </div>

  <div style="margin-bottom: 30px;">
    <h2 style="font-size: 16px; margin-bottom: 15px; color: #1a1a1a;">Order Summary</h2>
    ${itemsHtml}
  </div>

  <div style="margin-bottom: 30px; border-top: 2px solid #1a1a1a; padding-top: 15px;">
    <div style="display: flex; justify-content: space-between; font-size: 14px; margin-bottom: 8px;">
      <span>Subtotal:</span>
      <span>${formatPrice(order.subtotal)}</span>
    </div>
    <div style="display: flex; justify-content: space-between; font-size: 14px; margin-bottom: 8px;">
      <span>Shipping:</span>
      <span>Quoted after order</span>
    </div>
    <div style="display: flex; justify-content: space-between; font-size: 16px; font-weight: bold; margin-top: 12px;">
      <span>Total:</span>
      <span>${formatPrice(order.total)}</span>
    </div>
    ${
      hasQuoteItems
        ? `<p style="font-size: 12px; color: #999; margin-top: 12px;">One or more pieces above are quoted on request — the total shown covers only the priced items. We'll confirm the rest in a follow-up email.</p>`
        : ""
    }
  </div>

  <p style="font-size: 14px; color: #666; line-height: 1.6;">You can track your order at any time by visiting your account dashboard.</p>
  <p style="font-size: 14px; color: #666; line-height: 1.6;">If you have any questions, please contact our customer service team at <a href="mailto:support@bychistrands.com" style="color: #1a1a1a; text-decoration: none;">support@bychistrands.com</a></p>

  ${FOOTER}
</body>
</html>`;
}

export function renderShippingNotificationHTML(
  order: Order,
  trackingNumber: string,
  carrier: string,
  estimatedDelivery: string
): string {
  const trackingUrl = getTrackingUrl(carrier, trackingNumber);

  return `<!DOCTYPE html>
<html>
<head><meta charset="utf-8"></head>
<body style="${BASE_STYLES}">
  <h1 style="color: #1a1a1a; margin-bottom: 30px;">Your Order is On Its Way!</h1>
  <p style="font-size: 14px; color: #666; line-height: 1.6;">Hi ${order.customerName},</p>
  <p style="font-size: 14px; color: #666; line-height: 1.6;">Great news! Your order has shipped. Track your package below to know exactly when it arrives.</p>

  <div style="background-color: #f8f8f8; padding: 20px; border-radius: 4px; margin-bottom: 30px; margin-top: 30px;">
    <p style="margin: 0 0 15px 0; font-size: 14px; color: #666;"><strong>Order Number:</strong> ${order.orderNumber}</p>
    <p style="margin: 0 0 15px 0; font-size: 14px; color: #666;"><strong>Carrier:</strong> ${carrier}</p>
    <p style="margin: 0 0 15px 0; font-size: 14px; color: #666;"><strong>Tracking Number:</strong> ${trackingNumber}</p>
    <p style="margin: 0; font-size: 14px; color: #666;"><strong>Estimated Delivery:</strong> ${estimatedDelivery}</p>
  </div>

  <div style="text-align: center; margin-bottom: 30px;">
    <a href="${trackingUrl}" style="${BUTTON_STYLES}">Track Your Package</a>
  </div>

  <p style="font-size: 14px; color: #666; line-height: 1.6;">If you have any questions, please contact our customer service team at <a href="mailto:support@bychistrands.com" style="color: #1a1a1a; text-decoration: none;">support@bychistrands.com</a></p>

  ${FOOTER}
</body>
</html>`;
}

export function renderEnrollmentConfirmationHTML(
  enrollment: Enrollment,
  courseUrl: string
): string {
  return `<!DOCTYPE html>
<html>
<head><meta charset="utf-8"></head>
<body style="${BASE_STYLES}">
  <h1 style="color: #1a1a1a; margin-bottom: 30px;">Welcome to ${enrollment.courseName}!</h1>
  <p style="font-size: 14px; color: #666; line-height: 1.6;">Hi ${enrollment.customerName},</p>
  <p style="font-size: 14px; color: #666; line-height: 1.6;">Congratulations! You're now enrolled in our exclusive BY CHI STRANDS Academy course. Get ready to elevate your knowledge and skills.</p>

  <div style="background-color: #f8f8f8; padding: 20px; border-radius: 4px; margin-bottom: 30px; margin-top: 30px;">
    <p style="margin: 0 0 15px 0; font-size: 14px; color: #666;"><strong>Course:</strong> ${enrollment.courseName}</p>
    <p style="margin: 0 0 15px 0; font-size: 14px; color: #666;"><strong>Start Date:</strong> ${enrollment.startDate}</p>
    ${enrollment.accessCode ? `<p style="margin: 0; font-size: 14px; color: #666;"><strong>Access Code:</strong> ${enrollment.accessCode}</p>` : ""}
  </div>

  <div style="text-align: center; margin-bottom: 30px;">
    <a href="${courseUrl}" style="${BUTTON_STYLES}">Access Your Course</a>
  </div>

  <p style="font-size: 14px; color: #666; line-height: 1.6;">If you have any questions or need technical support, please contact us at <a href="mailto:academy@bychistrands.com" style="color: #1a1a1a; text-decoration: none;">academy@bychistrands.com</a></p>

  ${FOOTER}
</body>
</html>`;
}

export function renderServiceBookingConfirmationHTML(
  booking: ServiceBooking,
  rescheduleUrl: string
): string {
  return `<!DOCTYPE html>
<html>
<head><meta charset="utf-8"></head>
<body style="${BASE_STYLES}">
  <h1 style="color: #1a1a1a; margin-bottom: 30px;">Your Service is Booked!</h1>
  <p style="font-size: 14px; color: #666; line-height: 1.6;">Hi ${booking.customerName},</p>
  <p style="font-size: 14px; color: #666; line-height: 1.6;">Your service booking has been confirmed. We look forward to seeing you!</p>

  <div style="background-color: #f8f8f8; padding: 20px; border-radius: 4px; margin-bottom: 30px; margin-top: 30px;">
    <p style="margin: 0 0 15px 0; font-size: 14px; color: #666;"><strong>Service:</strong> ${booking.serviceName}</p>
    <p style="margin: 0 0 15px 0; font-size: 14px; color: #666;"><strong>Date:</strong> ${booking.bookingDate} at ${booking.bookingTime}</p>
    <p style="margin: 0 0 15px 0; font-size: 14px; color: #666;"><strong>Location:</strong> ${booking.location}</p>
    <p style="margin: 0 0 15px 0; font-size: 14px; color: #666;"><strong>Duration:</strong> ${booking.estimatedDuration}</p>
    <p style="margin: 0 0 15px 0; font-size: 14px; color: #666;"><strong>Price:</strong> $${booking.price.toFixed(2)}</p>
    <p style="margin: 0; font-size: 14px; color: #666;"><strong>Reference:</strong> ${booking.bookingReference}</p>
  </div>

  <div style="text-align: center; margin-bottom: 30px;">
    <a href="${rescheduleUrl}" style="${BUTTON_STYLES}">Reschedule or Cancel</a>
  </div>

  <p style="font-size: 14px; color: #666; line-height: 1.6;">If you have any questions, please contact us at <a href="mailto:services@bychistrands.com" style="color: #1a1a1a; text-decoration: none;">services@bychistrands.com</a></p>

  ${FOOTER}
</body>
</html>`;
}

function getTrackingUrl(carrier: string, trackingNumber: string): string {
  const carriers: Record<string, string> = {
    ups: `https://www.ups.com/track?tracknum=${trackingNumber}`,
    fedex: `https://tracking.fedex.com/en/tracking/${trackingNumber}`,
    usps: `https://tools.usps.com/go/TrackConfirmAction?tLabels=${trackingNumber}`,
    dhl: `https://www.dhl.com/en/en/home/tracking.html?tracking-id=${trackingNumber}`,
  };
  return carriers[carrier.toLowerCase()] || "#";
}
