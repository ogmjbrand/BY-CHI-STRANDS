export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
  type: "inquiry" | "support" | "partnership" | "press";
  status: "new" | "read" | "responded" | "resolved" | "spam";
  createdAt: string;
  updatedAt: string;
}

export interface CreateContactMessageRequest {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
  type?: string;
}

export interface SupportTicket {
  id: string;
  userId: string;
  orderId?: string;
  subject: string;
  description: string;
  attachments: string[];
  status: "open" | "in_progress" | "waiting_customer" | "resolved" | "closed";
  priority: "low" | "medium" | "high" | "urgent";
  responses: TicketResponse[];
  createdAt: string;
  updatedAt: string;
}

export interface TicketResponse {
  id: string;
  userId: string;
  userName: string;
  isAdmin: boolean;
  message: string;
  attachments: string[];
  createdAt: string;
}

export interface CreateSupportTicketRequest {
  subject: string;
  description: string;
  orderId?: string;
  attachments?: File[];
}
