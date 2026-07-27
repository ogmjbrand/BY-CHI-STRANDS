export interface ServiceBooking {
  id: string;
  customerId: string;
  customerName: string;
  customerEmail: string;
  serviceId: string;
  serviceName: string;
  bookingDate: string;
  bookingTime: string;
  location: string;
  estimatedDuration: string;
  price: number;
  status: "confirmed" | "completed" | "cancelled";
  bookingReference: string;
  createdAt: string;
}

export interface CreateServiceBookingRequest {
  customerName: string;
  customerEmail: string;
  serviceId: string;
  serviceName: string;
  bookingDate: string;
  bookingTime: string;
  location: string;
  estimatedDuration: string;
  price: number;
}
