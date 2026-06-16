import { insforge } from "./insforge";

/** A row from the `categories` table. */
export type Category = {
  id: string;
  stream: string;
  key: string;
  label: string;
  icon: string | null;
  icon_color: string | null;
  sort_order: number;
};

/** A row from the `programs` table. */
export type Program = {
  id: string;
  category_id: string;
  stream: string;
  name: string;
  slug: string;
  short: string | null;
  full_description: string | null;
  duration: string | null;
  eligibility: string | null;
  career_opportunities: string[];
  fees: string | null;
  syllabus: string[];
  sort_order: number;
};

const CATEGORY_COLS =
  "id, stream, key, label, icon, icon_color, sort_order";
const PROGRAM_COLS =
  "id, category_id, stream, name, slug, short, full_description, duration, eligibility, career_opportunities, fees, syllabus, sort_order";

/** All categories for a stream, ordered for display. */
export async function getCategories(stream: string): Promise<Category[]> {
  const { data, error } = await insforge.database
    .from("categories")
    .select(CATEGORY_COLS)
    .eq("stream", stream)
    .order("sort_order", { ascending: true });
  if (error) throw new Error(`Failed to load categories: ${JSON.stringify(error)}`);
  return (data ?? []) as Category[];
}

/** All programs for a stream, ordered for display. */
export async function getPrograms(stream: string): Promise<Program[]> {
  const { data, error } = await insforge.database
    .from("programs")
    .select(PROGRAM_COLS)
    .eq("stream", stream)
    .order("sort_order", { ascending: true });
  if (error) throw new Error(`Failed to load programs: ${JSON.stringify(error)}`);
  return (data ?? []) as Program[];
}

/** A single category by id, or null if not found. */
export async function getCategoryById(id: string): Promise<Category | null> {
  const { data, error } = await insforge.database
    .from("categories")
    .select(CATEGORY_COLS)
    .eq("id", id)
    .maybeSingle();
  if (error) throw new Error(`Failed to load category: ${JSON.stringify(error)}`);
  return (data as Category) ?? null;
}

/** A single program by slug within a stream, or null if not found. */
export async function getProgramBySlug(
  stream: string,
  slug: string
): Promise<Program | null> {
  const { data, error } = await insforge.database
    .from("programs")
    .select(PROGRAM_COLS)
    .eq("stream", stream)
    .eq("slug", slug)
    .maybeSingle();
  if (error) throw new Error(`Failed to load program: ${JSON.stringify(error)}`);
  return (data as Program) ?? null;
}
