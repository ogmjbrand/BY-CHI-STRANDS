import "server-only";
import { getSupabaseAdmin } from "./supabase/admin";
import type { Enrollment, CreateEnrollmentRequest } from "@/types/enrollments";

export async function createEnrollment(data: CreateEnrollmentRequest): Promise<Enrollment> {
  const supabase = getSupabaseAdmin();

  const accessCode = data.accessCode || generateAccessCode();

  const { data: enrollment, error } = await supabase
    .from("enrollments")
    .insert({
      customer_name: data.customerName,
      customer_email: data.customerEmail,
      course_id: data.courseId,
      course_name: data.courseName,
      status: "active",
      access_code: accessCode,
      start_date: data.startDate,
    })
    .select()
    .single();

  if (error) throw new Error(`Failed to create enrollment: ${error.message}`);

  return mapEnrollmentFromDB(enrollment);
}

export async function getEnrollment(enrollmentId: string): Promise<Enrollment | null> {
  const supabase = getSupabaseAdmin();

  const { data: enrollment, error } = await supabase.from("enrollments").select().eq("id", enrollmentId).single();

  if (error) return null;
  if (!enrollment) return null;

  return mapEnrollmentFromDB(enrollment);
}

export async function getEnrollmentsByEmail(email: string): Promise<Enrollment[]> {
  const supabase = getSupabaseAdmin();

  const { data: enrollments, error } = await supabase
    .from("enrollments")
    .select()
    .eq("customer_email", email)
    .order("enrolled_at", { ascending: false });

  if (error) return [];
  if (!enrollments) return [];

  return enrollments.map(mapEnrollmentFromDB);
}

export async function updateEnrollmentStatus(enrollmentId: string, status: Enrollment["status"]) {
  const supabase = getSupabaseAdmin();

  const { error } = await supabase.from("enrollments").update({ status }).eq("id", enrollmentId);

  if (error) throw new Error(`Failed to update enrollment: ${error.message}`);
}

function mapEnrollmentFromDB(enrollment: any): Enrollment {
  return {
    id: enrollment.id,
    customerId: enrollment.customer_id,
    customerName: enrollment.customer_name,
    customerEmail: enrollment.customer_email,
    courseId: enrollment.course_id,
    courseName: enrollment.course_name,
    status: enrollment.status,
    accessCode: enrollment.access_code,
    enrolledAt: enrollment.enrolled_at,
    startDate: enrollment.start_date,
    completedAt: enrollment.completed_at,
  };
}

function generateAccessCode(): string {
  return `ACC-${Date.now()}-${Math.random().toString(36).substring(2, 8).toUpperCase()}`;
}
