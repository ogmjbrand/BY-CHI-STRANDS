-- Create service_bookings table
CREATE TABLE IF NOT EXISTS service_bookings (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  customer_id UUID,
  customer_name TEXT NOT NULL,
  customer_email TEXT NOT NULL,
  service_id TEXT NOT NULL,
  service_name TEXT NOT NULL,
  booking_date DATE NOT NULL,
  booking_time TIME NOT NULL,
  location TEXT NOT NULL,
  estimated_duration TEXT NOT NULL,
  price DECIMAL(10, 2) NOT NULL,
  status TEXT NOT NULL DEFAULT 'confirmed' CHECK (status IN ('confirmed', 'completed', 'cancelled')),
  booking_reference TEXT NOT NULL UNIQUE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW())
);

-- Create indexes
CREATE INDEX idx_service_bookings_customer_email ON service_bookings(customer_email);
CREATE INDEX idx_service_bookings_service_id ON service_bookings(service_id);
CREATE INDEX idx_service_bookings_booking_date ON service_bookings(booking_date);
CREATE INDEX idx_service_bookings_status ON service_bookings(status);
CREATE INDEX idx_service_bookings_booking_reference ON service_bookings(booking_reference);
CREATE INDEX idx_service_bookings_created_at ON service_bookings(created_at DESC);

-- Enable RLS
ALTER TABLE service_bookings ENABLE ROW LEVEL SECURITY;

-- Create RLS policies
CREATE POLICY "Bookings are viewable by email" ON service_bookings
  FOR SELECT
  USING (auth.uid() IS NOT NULL OR customer_email = current_user);

CREATE POLICY "Anyone can create bookings" ON service_bookings
  FOR INSERT
  WITH CHECK (true);

CREATE POLICY "Only authenticated users can update bookings" ON service_bookings
  FOR UPDATE
  USING (auth.role() = 'service_role');
