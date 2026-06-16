import { createClient } from "@insforge/sdk";

/**
 * Shared InsForge client (anon / user-scoped). Safe to import in both client
 * and server components — the anon key is public.
 */
export const insforge = createClient({
  baseUrl: process.env.NEXT_PUBLIC_INSFORGE_URL!,
  anonKey: process.env.NEXT_PUBLIC_INSFORGE_ANON_KEY!,
});
