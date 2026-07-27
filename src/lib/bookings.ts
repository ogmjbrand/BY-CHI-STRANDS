import "server-only";
import { getSupabaseAdmin } from "./supabase/admin";
import type { ServiceBooking, CreateServiceBookingRequest } from "@/types/bookings";

export async function createServiceBooking(data: CreateServiceBookingRequest): Promise<ServiceBooking> {
  const supabase = getSupabaseAdmin();

  const bookingReference = `SRV-${Date.now()}-${Math.random().toString(36).substring(7).toUpperCase()}`;

  const { data: booking, error } = await supabase
    .from("service_bookings")
    .insert({
      customer_name: data.customerName,
      customer_email: data.customerEmail,
      service_id: data.serviceId,
      service_name: data.serviceName,
      booking_date: data.bookingDate,
      booking_time: data.bookingTime,
      location: data.location,
      estimated_duration: data.estimatedDuration,
      price: data.price,
      booking_reference: bookingReference,
      status: "confirmed",
    })
    .select()
    .single();

  if (error) throw new Error(`Failed to create booking: ${error.message}`);

  return mapBookingFromDB(booking);
}

export async function getServiceBooking(bookingId: string): Promise<ServiceBooking | null> {
  const supabase = getSupabaseAdmin();

  const { data: booking, error } = await supabase
    .from("service_bookings")
    .select()
    .eq("id", bookingId)
    .single();

  if (error) return null;
  if (!booking) return null;

  return mapBookingFromDB(booking);
}

export async function getServiceBookingsByEmail(email: string): Promise<ServiceBooking[]> {
  const supabase = getSupabaseAdmin();

  const { data: bookings, error } = await supabase
    .from("service_bookings")
    .select()
    .eq("customer_email", email)
    .order("booking_date", { ascending: false });

  if (error) return [];
  if (!bookings) return [];

  return bookings.map(mapBookingFromDB);
}

export async function updateBookingStatus(bookingId: string, status: ServiceBooking["status"]) {
  const supabase = getSupabaseAdmin();

  const { error } = await supabase.from("service_bookings").update({ status }).eq("id", bookingId);

  if (error) throw new Error(`Failed to update booking: ${error.message}`);
}

function mapBookingFromDB(booking: any): ServiceBooking {
  return {
    id: booking.id,
    customerId: booking.customer_id,
    customerName: booking.customer_name,
    customerEmail: booking.customer_email,
    serviceId: booking.service_id,
    serviceName: booking.service_name,
    bookingDate: booking.booking_date,
    bookingTime: booking.booking_time,
    location: booking.location,
    estimatedDuration: booking.estimated_duration,
    price: booking.price,
    status: booking.status,
    bookingReference: booking.booking_reference,
    createdAt: booking.created_at,
  };
}
