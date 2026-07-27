"use server";
import * as React from "react";

interface ShippingNotificationProps {
  orderNumber: string;
  customerName: string;
  trackingNumber: string;
  carrier: string;
  estimatedDelivery: string;
}

export function ShippingNotification({
  orderNumber,
  customerName,
  trackingNumber,
  carrier,
  estimatedDelivery,
}: ShippingNotificationProps) {
  const trackingUrl = getTrackingUrl(carrier, trackingNumber);

  return (
    <html>
      <body style={{ fontFamily: "system-ui, -apple-system, sans-serif" }}>
        <div style={{ maxWidth: "600px", margin: "0 auto", padding: "20px" }}>
          <h1 style={{ color: "#1a1a1a", marginBottom: "30px" }}>Your Order is On Its Way!</h1>

          <p style={{ fontSize: "14px", color: "#666", lineHeight: "1.6" }}>
            Hi {customerName},
          </p>

          <p style={{ fontSize: "14px", color: "#666", lineHeight: "1.6" }}>
            Great news! Your order has shipped. Track your package below to know exactly when it arrives.
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
            <p style={{ margin: "0 0 15px 0", fontSize: "14px", color: "#666" }}>
              <strong>Order Number:</strong> {orderNumber}
            </p>
            <p style={{ margin: "0 0 15px 0", fontSize: "14px", color: "#666" }}>
              <strong>Carrier:</strong> {carrier}
            </p>
            <p style={{ margin: "0 0 15px 0", fontSize: "14px", color: "#666" }}>
              <strong>Tracking Number:</strong> {trackingNumber}
            </p>
            <p style={{ margin: "0", fontSize: "14px", color: "#666" }}>
              <strong>Estimated Delivery:</strong> {estimatedDelivery}
            </p>
          </div>

          <div style={{ textAlign: "center", marginBottom: "30px" }}>
            <a
              href={trackingUrl}
              style={{
                display: "inline-block",
                backgroundColor: "#1a1a1a",
                color: "#fff",
                padding: "12px 24px",
                textDecoration: "none",
                borderRadius: "4px",
                fontSize: "14px",
                fontWeight: "bold",
              }}
            >
              Track Your Package
            </a>
          </div>

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
            <p style={{ margin: "0" }}>Luxury Vietnamese Hair. Crafted for Confidence.</p>
          </div>
        </div>
      </body>
    </html>
  );
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
