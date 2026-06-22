-- "What You Can Achieve" — concrete outcomes a student unlocks with a program
-- (higher studies, jobs, govt exams, entrepreneurship, etc.). Optional; the UI
-- renders the section only when present.
ALTER TABLE public.programs
  ADD COLUMN outcomes TEXT[] NOT NULL DEFAULT '{}';
