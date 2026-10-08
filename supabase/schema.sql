-- Run this once in the Supabase SQL Editor of the new project
-- (Dashboard -> SQL Editor -> New query -> paste -> Run).

create table if not exists public.cp2_students (
  id             uuid primary key default gen_random_uuid(),
  student_name   text not null,
  student_number text not null unique,
  section_number text,
  password       text not null,
  progress       jsonb not null default '{}'::jsonb,
  created_at     timestamptz not null default now()
);

-- The app talks to this table directly with the anon key
-- (login, register, progress updates, admin list/reset/delete),
-- so the anon role needs full access to it.
alter table public.cp2_students enable row level security;

drop policy if exists "anon full access" on public.cp2_students;
create policy "anon full access" on public.cp2_students
  for all to anon
  using (true)
  with check (true);
