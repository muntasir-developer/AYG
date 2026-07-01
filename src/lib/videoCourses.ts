/**
 * Curated, exact YouTube course/playlist URLs, keyed by program `slug`.
 *
 * When a program has an entry here, the "Video Tutorials" section links straight
 * to this real, popular course instead of a YouTube search. Only add URLs that
 * have been verified to exist and match the skill (found via web search, not
 * guessed) — a wrong id would be a dead link.
 *
 * Add entries freely; anything not listed falls back to a scoped YouTube search.
 */
export const VIDEO_COURSES: Record<string, string> = {
  // ITI
  "copa-computer-operator-and-programming-assistant":
    "https://www.youtube.com/playlist?list=PLYXqvGkM2BRho1qae_XwE1PXOgChhkSH7",
};

export const curatedVideoUrl = (slug: string | undefined): string | undefined =>
  slug ? VIDEO_COURSES[slug] : undefined;
