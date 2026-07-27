export interface Enrollment {
  id: string;
  customerId: string;
  customerName: string;
  customerEmail: string;
  courseId: string;
  courseName: string;
  status: "active" | "completed" | "cancelled";
  accessCode?: string;
  enrolledAt: string;
  startDate: string;
  completedAt?: string;
}

export interface CreateEnrollmentRequest {
  customerName: string;
  customerEmail: string;
  courseId: string;
  courseName: string;
  startDate: string;
  accessCode?: string;
}
