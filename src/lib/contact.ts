import "server-only";
import { getSupabaseAdmin } from "./supabase/admin";
import { sendEmail } from "./email";
import type { ContactMessage, SupportTicket } from "@/types/contact";

export async function createContactMessage(data: {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
  type?: string;
}): Promise<ContactMessage> {
  const supabase = getSupabaseAdmin();

  const { data: message, error } = await supabase
    .from("contact_messages")
    .insert({
      name: data.name,
      email: data.email,
      phone: data.phone,
      subject: data.subject,
      message: data.message,
      type: data.type || "inquiry",
      status: "new",
    })
    .select()
    .single();

  if (error) throw new Error("Failed to create message");

  // Send confirmation email
  await sendEmail(
    data.type === "newsletter"
      ? {
          to: data.email,
          subject: "You're on the list — ByChi Strands",
          html: `<h2>Welcome to the ByChi family.</h2><p>You'll hear from us with new arrivals, restocks and atelier news.</p>`,
        }
      : {
          to: data.email,
          subject: `We received your message - ${data.subject}`,
          html: `<h2>Thank you, ${data.name}!</h2><p>We've received your message and will respond within 24 hours.</p>`,
        }
  );

  return mapContactMessageFromDB(message);
}

export async function createSupportTicket(
  userId: string,
  data: {
    subject: string;
    description: string;
    orderId?: string;
  }
): Promise<SupportTicket> {
  const supabase = getSupabaseAdmin();

  const ticketId = `TKT-${Date.now()}`;

  const { data: ticket, error } = await supabase
    .from("support_tickets")
    .insert({
      id: ticketId,
      user_id: userId,
      order_id: data.orderId,
      subject: data.subject,
      description: data.description,
      status: "open",
      priority: "medium",
      responses: [],
    })
    .select()
    .single();

  if (error) throw new Error("Failed to create ticket");

  return mapTicketFromDB(ticket);
}

export async function addTicketResponse(
  ticketId: string,
  userId: string,
  userName: string,
  isAdmin: boolean,
  message: string
): Promise<void> {
  const supabase = getSupabaseAdmin();

  const { data: ticket } = await supabase
    .from("support_tickets")
    .select("responses")
    .eq("id", ticketId)
    .single();

  if (!ticket) throw new Error("Ticket not found");

  const responses = ticket.responses || [];
  responses.push({
    id: `resp-${Date.now()}`,
    user_id: userId,
    user_name: userName,
    is_admin: isAdmin,
    message,
    created_at: new Date().toISOString(),
  });

  const { error } = await supabase
    .from("support_tickets")
    .update({ responses, updated_at: new Date().toISOString() })
    .eq("id", ticketId);

  if (error) throw new Error("Failed to add response");
}

export async function updateTicketStatus(
  ticketId: string,
  status: "open" | "in_progress" | "waiting_customer" | "resolved" | "closed"
): Promise<void> {
  const supabase = getSupabaseAdmin();

  const { error } = await supabase
    .from("support_tickets")
    .update({ status, updated_at: new Date().toISOString() })
    .eq("id", ticketId);

  if (error) throw new Error("Failed to update ticket status");
}

export async function getUserTickets(userId: string): Promise<SupportTicket[]> {
  const supabase = getSupabaseAdmin();

  const { data: tickets, error } = await supabase
    .from("support_tickets")
    .select()
    .eq("user_id", userId)
    .order("created_at", { ascending: false });

  if (error) return [];
  return (tickets || []).map(mapTicketFromDB);
}

function mapContactMessageFromDB(message: any): ContactMessage {
  return {
    id: message.id,
    name: message.name,
    email: message.email,
    phone: message.phone,
    subject: message.subject,
    message: message.message,
    type: message.type,
    status: message.status,
    createdAt: message.created_at,
    updatedAt: message.updated_at,
  };
}

function mapTicketFromDB(ticket: any): SupportTicket {
  return {
    id: ticket.id,
    userId: ticket.user_id,
    orderId: ticket.order_id,
    subject: ticket.subject,
    description: ticket.description,
    attachments: ticket.attachments || [],
    status: ticket.status,
    priority: ticket.priority,
    responses: ticket.responses || [],
    createdAt: ticket.created_at,
    updatedAt: ticket.updated_at,
  };
}
