import { INSFORGE_URL, INSFORGE_ANON_KEY } from "./insforge";

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

export type FreeResource = { label: string; url: string; type?: string };
export type Faq = { q: string; a: string };

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
  // Rich "landing page" fields (present on detail queries only).
  free_resources?: FreeResource[];
  roadmap?: string[];
  tools?: string[];
  certifications?: string[];
  recruiters?: string[];
  salary_range?: string | null;
  faqs?: Faq[];
  outcomes?: string[];
};

const CATEGORY_COLS = "id,stream,key,label,icon,icon_color,sort_order";
// Lightweight columns for list views (avoids shipping the heavy landing fields).
const PROGRAM_LIST_COLS =
  "id,category_id,stream,name,slug,short,full_description,duration,eligibility,career_opportunities,fees,syllabus,sort_order";
// Full columns for a single detail/landing page.
const PROGRAM_DETAIL_COLS = `${PROGRAM_LIST_COLS},free_resources,roadmap,tools,certifications,recruiters,salary_range,faqs,outcomes`;

/**
 * Read the catalog directly from InsForge's REST endpoint instead of going
 * through `@insforge/sdk`'s `.database` client.
 *
 * Why: the SDK's browser fetch wrapper fails ("TypeError: Failed to fetch") for
 * these read queries in the browser, while a plain fetch to the same REST URL
 * works reliably. The catalog is public, read-only data, so a direct GET with
 * the anon key is the simplest robust path. (The SDK is still used elsewhere.)
 *
 * `next.revalidate` is honored on the server (detail pages / generateStaticParams)
 * and ignored in the client component (the list pages), which is exactly what we
 * want.
 */
async function rest<T>(query: string): Promise<T> {
  const url = `${INSFORGE_URL}/api/database/records/${query}`;
  const init: RequestInit = {
    headers: { Authorization: `Bearer ${INSFORGE_ANON_KEY}` },
    next: { revalidate: 3600 },
  } as RequestInit;

  // Retry a few times so a brief backend hiccup ("Failed to fetch" / 5xx /
  // gateway timeout) doesn't surface as a hard error to the user.
  const MAX_ATTEMPTS = 3;
  let lastErr: unknown;
  for (let attempt = 1; attempt <= MAX_ATTEMPTS; attempt++) {
    try {
      const res = await fetch(url, init);
      if (res.ok) return (await res.json()) as T;
      // Retry on transient server/gateway errors; fail fast on 4xx.
      if (res.status < 500 || attempt === MAX_ATTEMPTS) {
        throw new Error(`InsForge ${res.status}: ${await res.text().catch(() => "")}`);
      }
      lastErr = new Error(`InsForge ${res.status}`);
    } catch (e) {
      lastErr = e;
      if (attempt === MAX_ATTEMPTS) break;
    }
    // Backoff: 400ms, 800ms.
    await new Promise((r) => setTimeout(r, 400 * attempt));
  }
  throw lastErr instanceof Error ? lastErr : new Error("Failed to load catalog");
}

/** All categories for a stream, ordered for display. */
export async function getCategories(stream: string): Promise<Category[]> {
  return rest<Category[]>(
    `categories?stream=eq.${encodeURIComponent(stream)}&order=sort_order.asc&select=${CATEGORY_COLS}`
  );
}

/** All programs for a stream, ordered for display. */
export async function getPrograms(stream: string): Promise<Program[]> {
  return rest<Program[]>(
    `programs?stream=eq.${encodeURIComponent(stream)}&order=sort_order.asc&select=${PROGRAM_LIST_COLS}`
  );
}

/** A single category by id, or null if not found. */
export async function getCategoryById(id: string): Promise<Category | null> {
  const rows = await rest<Category[]>(
    `categories?id=eq.${encodeURIComponent(id)}&limit=1&select=${CATEGORY_COLS}`
  );
  return rows[0] ?? null;
}

/** A single program by slug within a stream, or null if not found. */
export async function getProgramBySlug(
  stream: string,
  slug: string
): Promise<Program | null> {
  const rows = await rest<Program[]>(
    `programs?stream=eq.${encodeURIComponent(stream)}&slug=eq.${encodeURIComponent(slug)}&limit=1&select=${PROGRAM_DETAIL_COLS}`
  );
  return rows[0] ?? null;
}
