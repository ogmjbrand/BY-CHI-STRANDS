import "server-only";
import { renderToString } from "react-dom/server";
import { OrderConfirmation } from "@/emails/OrderConfirmation";
import { ShippingNotification } from "@/emails/ShippingNotification";
import { EnrollmentConfirmation } from "@/emails/EnrollmentConfirmation";
import { ServiceBookingConfirmation } from "@/emails/ServiceBookingConfirmation";
import type { Order } from "@/types/orders";
import type { Enrollment } from "@/types/enrollments";
import type { ServiceBooking } from "@/types/bookings";

export function renderOrderConfirmationEmail(order: Order): string {
  return renderToString(
    OrderConfirmation({
      orderNumber: order.orderNumber,
      customerName: order.customerName,
      customerEmail: order.customerEmail,
      items: order.items,
      subtotal: order.subtotal,
      tax: order.tax,
      shipping: order.shipping,
      total: order.total,
      estimatedDelivery: order.estimatedDelivery || "3-5 business days",
    }) as any
  );
}

export function renderShippingNotificationEmail(
  order: Order,
  trackingNumber: string,
  carrier: string,
  estimatedDelivery: string
): string {
  return renderToString(
    ShippingNotification({
      orderNumber: order.orderNumber,
      customerName: order.customerName,
      trackingNumber,
      carrier,
      estimatedDelivery,
    }) as any
  );
}

export function renderEnrollmentConfirmationEmail(
  enrollment: Enrollment,
  courseUrl: string
): string {
  return renderToString(
    EnrollmentConfirmation({
      customerName: enrollment.customerName,
      courseName: enrollment.courseName,
      courseUrl,
      startDate: enrollment.startDate,
      accessCode: enrollment.accessCode,
    }) as any
  );
}

export function renderServiceBookingConfirmationEmail(
  booking: ServiceBooking,
  rescheduleUrl: string
): string {
  return renderToString(
    ServiceBookingConfirmation({
      customerName: booking.customerName,
      serviceName: booking.serviceName,
      bookingDate: booking.bookingDate,
      bookingTime: booking.bookingTime,
      location: booking.location,
      bookingReference: booking.bookingReference,
      estimatedDuration: booking.estimatedDuration,
      price: booking.price,
      rescheduleUrl,
    }) as any
  );
}
