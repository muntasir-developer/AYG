-- Catalog schema for AYG: career streams -> categories -> programs.
-- Public, read-only reference data. Writes happen via project_admin (CLI / API key seed).

-- ----------------------------------------------------------------------------
-- categories: one row per (stream, category), e.g. ('science', 'medical')
-- ----------------------------------------------------------------------------
CREATE TABLE public.categories (
  id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  stream      TEXT NOT NULL,                 -- 'science' | 'skill' | 'commerce' | 'arts'
  key         TEXT NOT NULL,                 -- stable category key, e.g. 'medical'
  label       TEXT NOT NULL,                 -- display label
  icon        TEXT,                          -- lucide-react icon name, e.g. 'Stethoscope'
  icon_color  TEXT,                          -- tailwind text color class, e.g. 'text-rose-600'
  sort_order  INTEGER NOT NULL DEFAULT 0,
  created_at  TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at  TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE (stream, key)
);

-- ----------------------------------------------------------------------------
-- programs: one row per degree/skill, linked to a category
-- ----------------------------------------------------------------------------
CREATE TABLE public.programs (
  id                    UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  category_id           UUID NOT NULL REFERENCES public.categories(id) ON DELETE CASCADE,
  stream                TEXT NOT NULL,            -- denormalized for simple stream filtering
  name                  TEXT NOT NULL,
  slug                  TEXT NOT NULL,           -- slugify(name), used in detail page routes
  short                 TEXT,
  full_description      TEXT,
  duration              TEXT,
  eligibility           TEXT,
  career_opportunities  TEXT[] NOT NULL DEFAULT '{}',
  fees                  TEXT,
  syllabus              TEXT[] NOT NULL DEFAULT '{}',
  sort_order            INTEGER NOT NULL DEFAULT 0,
  created_at            TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at            TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE (stream, slug)
);

CREATE INDEX idx_categories_stream  ON public.categories (stream);
CREATE INDEX idx_programs_category   ON public.programs (category_id);
CREATE INDEX idx_programs_stream     ON public.programs (stream);

-- ----------------------------------------------------------------------------
-- Row Level Security: public read-only catalog
-- ----------------------------------------------------------------------------
ALTER TABLE public.categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.programs   ENABLE ROW LEVEL SECURITY;

CREATE POLICY "categories public read" ON public.categories
  FOR SELECT TO anon, authenticated USING (true);

CREATE POLICY "programs public read" ON public.programs
  FOR SELECT TO anon, authenticated USING (true);

-- Reads for everyone; writes are NOT allowed for public roles.
GRANT USAGE ON SCHEMA public TO anon, authenticated;
GRANT SELECT ON public.categories TO anon, authenticated;
GRANT SELECT ON public.programs   TO anon, authenticated;
REVOKE INSERT, UPDATE, DELETE ON public.categories FROM anon, authenticated;
REVOKE INSERT, UPDATE, DELETE ON public.programs   FROM anon, authenticated;

-- Keep updated_at fresh.
CREATE TRIGGER categories_updated_at BEFORE UPDATE ON public.categories
  FOR EACH ROW EXECUTE FUNCTION system.update_updated_at();
CREATE TRIGGER programs_updated_at BEFORE UPDATE ON public.programs
  FOR EACH ROW EXECUTE FUNCTION system.update_updated_at();
