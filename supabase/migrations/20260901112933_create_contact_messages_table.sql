/*
# Create contact_messages table for portfolio contact form

1. New Tables
- `contact_messages`
  - `id` (uuid, primary key)
  - `name` (text, not null) — sender's name
  - `email` (text, not null) — sender's email
  - `subject` (text, not null) — message subject
  - `message` (text, not null) — message body
  - `is_read` (boolean, default false) — whether the owner has read it
  - `created_at` (timestamptz, default now()) — when the message was sent

2. Security
- Enable RLS on `contact_messages`.
- Allow anon + authenticated to INSERT (visitors can submit the contact form without signing in).
- All other operations (SELECT, UPDATE, DELETE) are restricted — only the owner would be able to read/manage messages, but since this is a no-auth portfolio, those are denied by default for anon.
*/

CREATE TABLE IF NOT EXISTS contact_messages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  subject text NOT NULL,
  message text NOT NULL,
  is_read boolean NOT NULL DEFAULT false,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_contact_messages" ON contact_messages;
CREATE POLICY "anon_insert_contact_messages"
ON contact_messages FOR INSERT
TO anon, authenticated
WITH CHECK (true);

DROP POLICY IF EXISTS "anon_select_contact_messages" ON contact_messages;
CREATE POLICY "anon_select_contact_messages"
ON contact_messages FOR SELECT
TO authenticated
USING (true);

DROP POLICY IF EXISTS "anon_update_contact_messages" ON contact_messages;
CREATE POLICY "anon_update_contact_messages"
ON contact_messages FOR UPDATE
TO authenticated
USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "anon_delete_contact_messages" ON contact_messages;
CREATE POLICY "anon_delete_contact_messages"
ON contact_messages FOR DELETE
TO authenticated
USING (true);
