"use server";
import * as React from "react";

interface OrderConfirmationProps {
  orderNumber: string;
  customerName: string;
  customerEmail: string;
  items: Array<{
    name: string;
    quantity: number;
    price: number | null;
  }>;
  subtotal: number;
  tax: number;
  shipping: number;
  total: number;
  estimatedDelivery: string;
}

export function OrderConfirmation({
  orderNumber,
  customerName,
  items,
  subtotal,
  tax,
  shipping,
  total,
  estimatedDelivery,
}: OrderConfirmationProps) {
  return (
    <html>
      <body style={{ fontFamily: "system-ui, -apple-system, sans-serif" }}>
        <div style={{ maxWidth: "600px", margin: "0 auto", padding: "20px" }}>
          <h1 style={{ color: "#1a1a1a", marginBottom: "30px" }}>Order Confirmed</h1>

          <p style={{ fontSize: "14px", color: "#666", lineHeight: "1.6" }}>
            Hi {customerName},
          </p>

          <p style={{ fontSize: "14px", color: "#666", lineHeight: "1.6" }}>
            Thank you for your order! We're excited to get your ByChiStrands pieces to you. Your order has been
            confirmed and is being prepared.
          </p>

          <div
            style={{
              backgroundColor: "#f8f8f8",
              padding: "20px",
              borderRadius: "4px",
              marginBottom: "30px",
              marginTop: "30px",
            }}
          >
            <p style={{ margin: "0 0 20px 0", fontSize: "14px", color: "#666" }}>
              <strong>Order Number:</strong> {orderNumber}
            </p>
            <p style={{ margin: "0 0 20px 0", fontSize: "14px", color: "#666" }}>
              <strong>Estimated Delivery:</strong> {estimatedDelivery}
            </p>
          </div>

          <div style={{ marginBottom: "30px" }}>
            <h2 style={{ fontSize: "16px", marginBottom: "15px", color: "#1a1a1a" }}>Order Summary</h2>
            {items.map((item, idx) => (
              <div
                key={idx}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  paddingBottom: "10px",
                  borderBottom: "1px solid #eee",
                  fontSize: "14px",
                  marginBottom: "10px",
                }}
              >
                <span>
                  {item.name} x {item.quantity}
                </span>
                <span>{item.price === null ? "Quoted after order" : `$${(item.price * item.quantity).toFixed(2)}`}</span>
              </div>
            ))}
          </div>

          <div style={{ marginBottom: "30px", borderTop: "2px solid #1a1a1a", paddingTop: "15px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: "14px", marginBottom: "8px" }}>
              <span>Subtotal:</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: "14px", marginBottom: "8px" }}>
              <span>Tax:</span>
              <span>${tax.toFixed(2)}</span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: "14px", marginBottom: "8px" }}>
              <span>Shipping:</span>
              <span>${shipping.toFixed(2)}</span>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                fontSize: "16px",
                fontWeight: "bold",
                marginTop: "12px",
              }}
            >
              <span>Total:</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </div>

          <p style={{ fontSize: "14px", color: "#666", lineHeight: "1.6" }}>
            You can track your order at any time by visiting your account dashboard.
          </p>

          <p style={{ fontSize: "14px", color: "#666", lineHeight: "1.6" }}>
            If you have any questions, please contact our customer service team at{" "}
            <a href="mailto:support@bychistrands.com" style={{ color: "#1a1a1a", textDecoration: "none" }}>
              support@bychistrands.com
            </a>
          </p>

          <div
            style={{
              marginTop: "40px",
              paddingTop: "20px",
              borderTop: "1px solid #eee",
              fontSize: "12px",
              color: "#999",
            }}
          >
            <p style={{ margin: "0 0 10px 0" }}>© 2026 BY CHI STRANDS. All rights reserved.</p>
            <p style={{ margin: "0" }}>Luxury ese Hair. Crafted for Confidence.</p>
          </div>
        </div>
      </body>
    </html>
  );
}
