export interface AnalyticsData {
  period: "day" | "week" | "month" | "year";
  totalRevenue: number;
  totalOrders: number;
  averageOrderValue: number;
  conversionRate: number;
  topProducts: Array<{ productId: string; productName: string; sales: number }>;
  topCustomers: Array<{ userId: string; userName: string; spent: number }>;
}

export interface InventoryUpdate {
  productId: string;
  quantity: number;
  operation: "set" | "add" | "subtract";
  reason: string;
}

export interface AdminOrderUpdate {
  status: "processing" | "shipped" | "delivered" | "cancelled" | "refunded";
  trackingNumber?: string;
  carrier?: string;
  notes?: string;
}

export interface Discount {
  id: string;
  code: string;
  description: string;
  type: "percentage" | "fixed";
  value: number;
  minOrderAmount?: number;
  maxUses?: number;
  usedCount: number;
  validFrom: string;
  validUntil: string;
  active: boolean;
}
