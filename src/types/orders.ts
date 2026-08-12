export interface OrderItem {
  productId: string;
  name: string;
  quantity: number;
  /** null means this piece is quoted on request — the concierge confirms a price after the order is placed. */
  price: number | null;
  variant?: {
    /** Texture label, e.g. "Bone Straight". */
    texture?: string;
    /** Colour label, e.g. "Wine · Dark Root". */
    tone?: string;
    /** Length in inches, formatted. */
    length?: string;
    /** Closure or frontal size, e.g. "5x5 Closure". */
    lace?: string;
  };
}

export interface Order {
  id: string;
  orderNumber: string;
  customerId: string;
  customerName: string;
  customerEmail: string;
  items: OrderItem[];
  subtotal: number;
  tax: number;
  shipping: number;
  total: number;
  status: "pending" | "confirmed" | "processing" | "shipped" | "delivered" | "cancelled";
  shippingAddress: {
    street: string;
    city: string;
    state: string;
    zip: string;
    country: string;
  };
  trackingNumber?: string;
  carrier?: string;
  estimatedDelivery?: string;
  createdAt: string;
  updatedAt: string;
}

export interface CreateOrderRequest {
  customerName: string;
  customerEmail: string;
  items: OrderItem[];
  subtotal: number;
  tax: number;
  shipping: number;
  total: number;
  shippingAddress: {
    street: string;
    city: string;
    state: string;
    zip: string;
    country: string;
  };
}
