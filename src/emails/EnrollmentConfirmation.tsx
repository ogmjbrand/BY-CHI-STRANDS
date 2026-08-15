"use server";
import * as React from "react";

interface EnrollmentConfirmationProps {
  customerName: string;
  courseName: string;
  courseUrl: string;
  startDate: string;
  accessCode?: string;
}

export function EnrollmentConfirmation({
  customerName,
  courseName,
  courseUrl,
  startDate,
  accessCode,
}: EnrollmentConfirmationProps) {
  return (
    <html>
      <body style={{ fontFamily: "system-ui, -apple-system, sans-serif" }}>
        <div style={{ maxWidth: "600px", margin: "0 auto", padding: "20px" }}>
          <h1 style={{ color: "#1a1a1a", marginBottom: "30px" }}>Welcome to {courseName}!</h1>

          <p style={{ fontSize: "14px", color: "#666", lineHeight: "1.6" }}>
            Hi {customerName},
          </p>

          <p style={{ fontSize: "14px", color: "#666", lineHeight: "1.6" }}>
            Congratulations! You're now enrolled in our exclusive BY CHI STRANDS Academy course. Get ready to elevate
            your knowledge and skills.
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
              <strong>Course:</strong> {courseName}
            </p>
            <p style={{ margin: "0 0 15px 0", fontSize: "14px", color: "#666" }}>
              <strong>Start Date:</strong> {startDate}
            </p>
            {accessCode && (
              <p style={{ margin: "0", fontSize: "14px", color: "#666" }}>
                <strong>Access Code:</strong> {accessCode}
              </p>
            )}
          </div>

          <div style={{ textAlign: "center", marginBottom: "30px" }}>
            <a
              href={courseUrl}
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
              Access Your Course
            </a>
          </div>

          <p style={{ fontSize: "14px", color: "#666", lineHeight: "1.6" }}>
            If you have any questions or need technical support, please contact us at{" "}
            <a href="mailto:academy@bychistrands.com" style={{ color: "#1a1a1a", textDecoration: "none" }}>
              academy@bychistrands.com
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
