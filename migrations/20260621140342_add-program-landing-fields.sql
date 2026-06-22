-- Rich "landing page" fields for programs (skills/courses/degrees).
-- All optional, defaulting to empty so existing rows stay valid and the UI
-- renders a section only when its data is present.

ALTER TABLE public.programs
  ADD COLUMN free_resources JSONB   NOT NULL DEFAULT '[]'::jsonb,  -- [{ "label", "url", "type" }]
  ADD COLUMN roadmap        TEXT[]  NOT NULL DEFAULT '{}',         -- ordered learning steps
  ADD COLUMN tools          TEXT[]  NOT NULL DEFAULT '{}',         -- tools / software used
  ADD COLUMN certifications TEXT[]  NOT NULL DEFAULT '{}',         -- certs a learner can earn
  ADD COLUMN recruiters     TEXT[]  NOT NULL DEFAULT '{}',         -- typical hiring companies
  ADD COLUMN salary_range   TEXT,                                  -- typical pay in India
  ADD COLUMN faqs           JSONB   NOT NULL DEFAULT '[]'::jsonb;  -- [{ "q", "a" }]
