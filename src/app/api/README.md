# BY CHI STRANDS Backend API

Complete backend infrastructure for order management, course enrollment, and service bookings with transactional email templates.

## Setup

### 1. Environment Variables

Add to `.env.local`:
```
RESEND_API_KEY=your_resend_api_key_here
NEXT_PUBLIC_SITE_URL=https://bychistrands.com
```

Get your Resend API key at https://resend.com

### 2. Database Migrations

Run Supabase migrations to create tables:

```bash
# Using Supabase CLI
supabase migration up

# Or manually run SQL files in supabase/migrations/
```

Tables created:
- `orders` — e-commerce orders with tracking
- `enrollments` — academy course enrollments
- `service_bookings` — service appointments

## API Endpoints

### Orders

#### Create Order
```http
POST /api/orders/create
Content-Type: application/json

{
  "customerName": "Jane Doe",
  "customerEmail": "jane@example.com",
  "items": [
    {
      "productId": "prod-123",
      "name": "14\" Pixie Curls Wig",
      "quantity": 1,
      "price": 89.99,
      "variant": {
        "texture": "pixie-curls",
        "tone": "honey"
      }
    }
  ],
  "subtotal": 89.99,
  "tax": 7.20,
  "shipping": 10.00,
  "total": 107.19,
  "shippingAddress": {
    "street": "123 Main St",
    "city": "New York",
    "state": "NY",
    "zip": "10001",
    "country": "USA"
  }
}
```

**Response:**
```json
{
  "success": true,
  "order": {
    "id": "uuid",
    "orderNumber": "BCH-1690000000000-ABC123",
    "status": "pending",
    "total": 107.19
  }
}
```

Automatically sends order confirmation email.

#### Get Order
```http
GET /api/orders/{orderId}
```

#### Confirm & Ship Order
```http
POST /api/orders/{orderId}/confirm
Content-Type: application/json

{
  "trackingNumber": "1Z999AA10123456784",
  "carrier": "ups",
  "estimatedDelivery": "2025-08-05"
}
```

Sends shipping notification email to customer.

### Academy

#### Create Enrollment
```http
POST /api/academy/enroll
Content-Type: application/json

{
  "customerName": "Jane Doe",
  "customerEmail": "jane@example.com",
  "courseId": "course-001",
  "courseName": "Hair Care Mastery",
  "startDate": "2025-08-01",
  "accessCode": "optional-code"
}
```

**Response:**
```json
{
  "success": true,
  "enrollment": {
    "id": "uuid",
    "status": "active",
    "accessCode": "ACC-1690000000000-ABC123"
  }
}
```

Automatically sends enrollment confirmation email with access code.

### Services

#### Book Service
```http
POST /api/services/book
Content-Type: application/json

{
  "customerName": "Jane Doe",
  "customerEmail": "jane@example.com",
  "serviceId": "srv-001",
  "serviceName": "HD Lace Customization",
  "bookingDate": "2025-08-15",
  "bookingTime": "14:00",
  "location": "Manhattan Studio",
  "estimatedDuration": "2 hours",
  "price": 150.00
}
```

**Response:**
```json
{
  "success": true,
  "booking": {
    "id": "uuid",
    "bookingReference": "SRV-1690000000000-ABC123",
    "status": "confirmed",
    "bookingDate": "2025-08-15",
    "bookingTime": "14:00"
  }
}
```

Automatically sends service booking confirmation email.

## Email Templates

Located in `src/emails/`:

1. **OrderConfirmation** — sent after order creation
2. **ShippingNotification** — sent when order ships with tracking
3. **EnrollmentConfirmation** — sent after course enrollment
4. **ServiceBookingConfirmation** — sent after service booking

Templates use React Email and are rendered to HTML before sending via Resend.

## Error Handling

All endpoints return standard error responses:

```json
{
  "error": "Description of what went wrong"
}
```

Status codes:
- `201` — Resource created successfully
- `400` — Invalid request (missing/malformed fields)
- `404` — Resource not found
- `500` — Server error

## Database Schema

### orders
```sql
CREATE TABLE orders (
  id UUID PRIMARY KEY,
  order_number TEXT UNIQUE,
  customer_name TEXT,
  customer_email TEXT,
  items JSONB,
  subtotal DECIMAL,
  tax DECIMAL,
  shipping DECIMAL,
  total DECIMAL,
  status TEXT,
  shipping_address JSONB,
  tracking_number TEXT,
  carrier TEXT,
  estimated_delivery TEXT,
  created_at TIMESTAMP,
  updated_at TIMESTAMP
);
```

### enrollments
```sql
CREATE TABLE enrollments (
  id UUID PRIMARY KEY,
  customer_name TEXT,
  customer_email TEXT,
  course_id TEXT,
  course_name TEXT,
  status TEXT,
  access_code TEXT,
  start_date TIMESTAMP,
  created_at TIMESTAMP,
  updated_at TIMESTAMP
);
```

### service_bookings
```sql
CREATE TABLE service_bookings (
  id UUID PRIMARY KEY,
  customer_name TEXT,
  customer_email TEXT,
  service_id TEXT,
  service_name TEXT,
  booking_date DATE,
  booking_time TIME,
  location TEXT,
  estimated_duration TEXT,
  price DECIMAL,
  status TEXT,
  booking_reference TEXT UNIQUE,
  created_at TIMESTAMP,
  updated_at TIMESTAMP
);
```

## Testing

Use curl or Postman to test endpoints:

```bash
# Create an order
curl -X POST http://localhost:3000/api/orders/create \
  -H "Content-Type: application/json" \
  -d '{...order data...}'

# Get order
curl http://localhost:3000/api/orders/{orderId}

# Confirm order
curl -X POST http://localhost:3000/api/orders/{orderId}/confirm \
  -H "Content-Type: application/json" \
  -d '{
    "trackingNumber": "1Z999AA10123456784",
    "carrier": "ups",
    "estimatedDelivery": "2025-08-05"
  }'
```

## Future Enhancements

- [ ] Payment processing (Stripe integration)
- [ ] Order status webhooks
- [ ] Admin dashboard API
- [ ] Inventory sync
- [ ] Customer authentication/sessions
- [ ] Refund handling
- [ ] Multi-language email templates
