# Backend Setup Guide — BY CHI STRANDS

## Quick Start

### 1. Install Dependencies
```bash
npm install
```

Already installed:
- `resend` — Email service
- `react-email` — Email templates
- `@supabase/supabase-js` — Database client

### 2. Configure Resend API

1. Sign up at https://resend.com (free tier available)
2. Create API key
3. Add to `.env.local`:
   ```
   RESEND_API_KEY=re_xxxxxxxxxxxxx
   ```

### 3. Run Supabase Migrations

Create database tables:

```bash
# Option A: Using Supabase CLI
supabase migration up

# Option B: Manual - Copy SQL from these files to Supabase SQL Editor:
# - supabase/migrations/20260727_create_orders_table.sql
# - supabase/migrations/20260727_create_enrollments_table.sql
# - supabase/migrations/20260727_create_service_bookings_table.sql
```

### 4. Test the Backend

Start dev server:
```bash
npm run dev
```

Test order creation:
```bash
curl -X POST http://localhost:3105/api/orders/create \
  -H "Content-Type: application/json" \
  -d '{
    "customerName": "Test User",
    "customerEmail": "test@example.com",
    "items": [{
      "productId": "test-1",
      "name": "Test Product",
      "quantity": 1,
      "price": 99.99
    }],
    "subtotal": 99.99,
    "tax": 8.00,
    "shipping": 5.00,
    "total": 112.99,
    "shippingAddress": {
      "street": "123 Main St",
      "city": "New York",
      "state": "NY",
      "zip": "10001",
      "country": "USA"
    }
  }'
```

## Architecture

```
src/
├── app/api/
│   ├── orders/
│   │   ├── create/route.ts      → Create orders
│   │   ├── [id]/route.ts         → Get order
│   │   └── [id]/confirm/route.ts → Confirm & ship
│   ├── academy/
│   │   └── enroll/route.ts       → Enroll in courses
│   └── services/
│       └── book/route.ts         → Book services
├── emails/
│   ├── OrderConfirmation.tsx
│   ├── ShippingNotification.tsx
│   ├── EnrollmentConfirmation.tsx
│   └── ServiceBookingConfirmation.tsx
├── lib/
│   ├── email.ts                  → Resend helper
│   ├── orders.ts                 → Order DB operations
│   ├── enrollments.ts            → Enrollment DB operations
│   ├── bookings.ts               → Booking DB operations
│   └── supabase/
│       ├── client.ts             → Client-side Supabase
│       └── admin.ts              → Server-side admin client
└── types/
    ├── orders.ts
    ├── enrollments.ts
    └── bookings.ts
```

## Environment Variables

Required:
```env
# Supabase (already set)
NEXT_PUBLIC_SUPABASE_URL=https://xjcovmbmqutugxqpbudi.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=...
SUPABASE_SERVICE_ROLE_KEY=...

# Resend (add this)
RESEND_API_KEY=re_xxxxxxxxxxxxx

# Site URL (for email links)
NEXT_PUBLIC_SITE_URL=https://bychistrands.com
```

## Key Features Implemented

✅ Order Management
- Create orders with items
- Track order status (pending → shipped → delivered)
- Automatic order confirmation emails
- Shipping notification emails with tracking

✅ Course Enrollment
- Create course enrollments
- Auto-generate access codes
- Enrollment confirmation emails

✅ Service Booking
- Book services with date/time
- Generate booking references
- Booking confirmation emails

✅ Email Infrastructure
- Resend integration
- React Email templates
- HTML email rendering
- Automatic email sending on key events

## Testing Checklist

- [ ] Resend API key works
- [ ] Supabase tables created
- [ ] Create order endpoint works
- [ ] Order confirmation email sends
- [ ] Get order endpoint works
- [ ] Confirm order endpoint works
- [ ] Shipping notification email sends
- [ ] Enroll endpoint works
- [ ] Enrollment email sends
- [ ] Service booking endpoint works
- [ ] Booking confirmation email sends

## Common Issues

### "Missing Resend API key"
Add `RESEND_API_KEY` to `.env.local`

### "Supabase table not found"
Run migrations:
```bash
supabase migration up
```

### Emails not sending
1. Check Resend API key
2. Verify email is not in spam
3. Check /api/* endpoint response for errors
4. Check terminal logs for `Email send failed:`

### Localhost testing
When testing locally, email links will point to production URL (NEXT_PUBLIC_SITE_URL).
For testing, update .env.local:
```env
NEXT_PUBLIC_SITE_URL=http://localhost:3105
```

## Next Steps

1. **Stripe Payment Integration** — Add payment processing to order creation
2. **Admin Dashboard** — View/manage orders, enrollments, bookings
3. **Customer Portal** — Let customers view their orders/enrollments
4. **Webhooks** — Notify external systems of order status changes
5. **Email Customization** — Add user branding to email templates

## Support

- Resend docs: https://resend.com/docs
- Supabase docs: https://supabase.com/docs
- React Email docs: https://react.email
