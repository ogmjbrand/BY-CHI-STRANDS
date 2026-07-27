export interface PaymentIntent {
  id: string;
  orderId: string;
  amount: number;
  currency: string;
  status: "pending" | "succeeded" | "failed" | "canceled";
  clientSecret: string;
  createdAt: string;
}

export interface CreatePaymentIntentRequest {
  orderId: string;
  amount: number;
}

export interface ProcessPaymentRequest {
  paymentMethodId: string;
  orderId: string;
  amount: number;
}

export interface ShippingRate {
  id: string;
  carrier: string;
  method: string;
  cost: number;
  estimatedDays: number;
}

export interface ApplyCouponRequest {
  couponCode: string;
  orderTotal: number;
}

export interface Coupon {
  id: string;
  code: string;
  type: "percentage" | "fixed";
  value: number;
  maxUses: number;
  usedCount: number;
  minOrderAmount?: number;
  expiresAt: string;
  active: boolean;
}
