/*
  # Gym Website Database Schema

  1. New Tables
    - `bookings`
      - `id` (uuid, primary key)
      - `name` (text, required) - Customer's full name
      - `email` (text, required) - Customer's email
      - `phone` (text, required) - Contact number
      - `program` (text, required) - Selected program/membership
      - `preferred_date` (date) - Preferred start date
      - `message` (text) - Additional notes
      - `status` (text, default: 'pending') - Booking status
      - `created_at` (timestamptz) - Record creation time
    
    - `testimonials`
      - `id` (uuid, primary key)
      - `name` (text, required) - Customer name
      - `rating` (int, required) - Rating out of 5
      - `comment` (text, required) - Testimonial text
      - `program` (text) - Program they enrolled in
      - `image_url` (text) - Profile image URL
      - `is_featured` (boolean, default: false) - Featured testimonials
      - `created_at` (timestamptz) - Record creation time
    
    - `contact_inquiries`
      - `id` (uuid, primary key)
      - `name` (text, required) - Inquirer's name
      - `email` (text, required) - Contact email
      - `phone` (text) - Contact number
      - `subject` (text, required) - Inquiry subject
      - `message` (text, required) - Inquiry message
      - `status` (text, default: 'new') - Inquiry status
      - `created_at` (timestamptz) - Record creation time

  2. Security
    - Enable RLS on all tables
    - Allow public to insert bookings and inquiries
    - Allow public to read published testimonials
*/

CREATE TABLE IF NOT EXISTS bookings (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  program text NOT NULL,
  preferred_date date,
  message text,
  status text DEFAULT 'pending',
  created_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS testimonials (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  rating int NOT NULL CHECK (rating >= 1 AND rating <= 5),
  comment text NOT NULL,
  program text,
  image_url text,
  is_featured boolean DEFAULT false,
  created_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS contact_inquiries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text,
  subject text NOT NULL,
  message text NOT NULL,
  status text DEFAULT 'new',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE bookings ENABLE ROW LEVEL SECURITY;
ALTER TABLE testimonials ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_inquiries ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can insert bookings"
  ON bookings FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Anyone can insert contact inquiries"
  ON contact_inquiries FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Anyone can view featured testimonials"
  ON testimonials FOR SELECT
  TO anon
  USING (is_featured = true);

INSERT INTO testimonials (name, rating, comment, program, image_url, is_featured) VALUES
  ('Rajesh Kumar', 5, 'Lost 15kg in 3 months with their personalized diet plan and training. The trainers are highly professional and motivating!', 'Weight Loss Program', 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=200', true),
  ('Priya Sharma', 5, 'Best gym in Udaipur! The equipment is top-notch and the atmosphere is so energetic. Highly recommend!', 'Strength Training', 'https://images.pexels.com/photos/3768593/pexels-photo-3768593.jpeg?auto=compress&cs=tinysrgb&w=200', true),
  ('Vikram Singh', 5, 'The certified trainers helped me build muscle mass and improve my overall fitness. Amazing results in just 2 months!', 'Body Building', 'https://images.pexels.com/photos/1547248/pexels-photo-1547248.jpeg?auto=compress&cs=tinysrgb&w=200', true),
  ('Anita Patel', 5, 'The body tracking system keeps me motivated. Love the personalized attention and custom diet plans!', 'Weight Loss Program', 'https://images.pexels.com/photos/3768894/pexels-photo-3768894.jpeg?auto=compress&cs=tinysrgb&w=200', true);
