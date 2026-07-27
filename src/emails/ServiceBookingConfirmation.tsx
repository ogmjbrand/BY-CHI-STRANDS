"use server";
import * as React from "react";

interface ServiceBookingConfirmationProps {
  customerName: string;
  serviceName: string;
  bookingDate: string;
  bookingTime: string;
  location: string;
  bookingReference: string;
  estimatedDuration: string;
  price: number;
  rescheduleUrl: string;
}

export function ServiceBookingConfirmation({
  customerName,
  serviceName,
  bookingDate,
  bookingTime,
  location,
  bookingReference,
  estimatedDuration,
  price,
  rescheduleUrl,
}: ServiceBookingConfirmationProps) {
  return (
    <html>
      <body style={{ fontFamily: "system-ui, -apple-system, sans-serif" }}>
        <div style={{ maxWidth: "600px", margin: "0 auto", padding: "20px" }}>
          <h1 style={{ color: "#1a1a1a", marginBottom: "30px" }}>Your Service is Booked!</h1>

          <p style={{ fontSize: "14px", color: "#666", lineHeight: "1.6" }}>
            Hi {customerName},
          </p>

          <p style={{ fontSize: "14px", color: "#666", lineHeight: "1.6" }}>
            Your service booking has been confirmed. We look forward to seeing you!
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
              <strong>Service:</strong> {serviceName}
            </p>
            <p style={{ margin: "0 0 15px 0", fontSize: "14px", color: "#666" }}>
              <strong>Date:</strong> {bookingDate} at {bookingTime}
            </p>
            <p style={{ margin: "0 0 15px 0", fontSize: "14px", color: "#666" }}>
              <strong>Location:</strong> {location}
            </p>
            <p style={{ margin: "0 0 15px 0", fontSize: "14px", color: "#666" }}>
              <strong>Duration:</strong> {estimatedDuration}
            </p>
            <p style={{ margin: "0 0 15px 0", fontSize: "14px", color: "#666" }}>
              <strong>Price:</strong> ${price.toFixed(2)}
            </p>
            <p style={{ margin: "0", fontSize: "14px", color: "#666" }}>
              <strong>Reference:</strong> {bookingReference}
            </p>
          </div>

          <div style={{ textAlign: "center", marginBottom: "30px" }}>
            <a
              href={rescheduleUrl}
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
              Reschedule or Cancel
            </a>
          </div>

          <p style={{ fontSize: "14px", color: "#666", lineHeight: "1.6" }}>
            If you have any questions, please contact us at{" "}
            <a href="mailto:services@bychistrands.com" style={{ color: "#1a1a1a", textDecoration: "none" }}>
              services@bychistrands.com
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
