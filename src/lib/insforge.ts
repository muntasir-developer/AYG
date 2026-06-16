import { createClient } from "@insforge/sdk";

/**
 * Public, browser-safe InsForge connection values.
 *
 * These are the *anon* (publishable) credentials — designed to ship in the
 * client bundle and protected by row-level security (our catalog is read-only
 * to anon). They are used as fallbacks so the app works even when a deploy host
 * doesn't have NEXT_PUBLIC_* env vars configured. Set NEXT_PUBLIC_INSFORGE_URL /
 * NEXT_PUBLIC_INSFORGE_ANON_KEY to override (e.g. a different backend branch).
 */
const DEFAULT_URL = "https://ydzq4czw.ap-southeast.insforge.app";
const DEFAULT_ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3OC0xMjM0LTU2NzgtOTBhYi1jZGVmMTIzNDU2NzgiLCJlbWFpbCI6ImFub25AaW5zZm9yZ2UuY29tIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODE0MjU3NzZ9.GDJTqqIuINOl86VH0QvJ17bhyrJECQBMADLjrj29bIg";

export const INSFORGE_URL = process.env.NEXT_PUBLIC_INSFORGE_URL || DEFAULT_URL;
export const INSFORGE_ANON_KEY =
  process.env.NEXT_PUBLIC_INSFORGE_ANON_KEY || DEFAULT_ANON_KEY;

/**
 * Shared InsForge SDK client (anon / user-scoped). Kept for future auth/storage
 * use. NOTE: catalog reads use the REST helper in catalog.ts instead — see the
 * comment there for why.
 */
export const insforge = createClient({
  baseUrl: INSFORGE_URL,
  anonKey: INSFORGE_ANON_KEY,
});
