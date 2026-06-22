/**
 * Populate "What You Can Achieve" (outcomes) + a salary range for every
 * after-10th program (streams, diploma, ITI, paramedical & vocational).
 *
 * Run with:  npx tsx scripts/enrich-after10-outcomes.mts
 * Idempotent: recomputes and overwrites on each run.
 *
 * Outcomes are stream-aware and use each program's own career list, so they
 * read as concrete next steps (higher studies, jobs, govt exams, self-employment).
 */
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";
import { createAdminClient } from "@insforge/sdk";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const proj = JSON.parse(readFileSync(path.join(root, ".insforge/project.json"), "utf8"));
const admin = createAdminClient({ baseUrl: proj.oss_host, apiKey: proj.api_key });

type Prog = { id: string; name: string; stream: string; category_id: string; career_opportunities: string[] };

const top = (careers: string[], n = 3) =>
  (careers ?? []).slice(0, n).filter(Boolean).join(", ") || "several entry-level roles";
const first = (careers: string[], fallback: string) => (careers ?? [])[0] || fallback;

function build(p: Prog): { outcomes: string[]; salary: string | null } {
  const c = p.career_opportunities ?? [];
  switch (p.stream) {
    case "stream1112":
      return {
        outcomes: [
          `Complete Class 12 with a strong ${p.name} foundation.`,
          `Become eligible for entrance exams and degrees such as ${top(c)}.`,
          `Open doors to professional, government and defence career paths.`,
          `Go on to graduation, then post-graduation or research if you wish.`,
        ],
        salary: null,
      };
    case "diploma":
      return {
        outcomes: [
          `Start working as ${first(c, "a junior engineer / technician")} right after the diploma.`,
          `Take lateral entry into the 2nd year of B.E./B.Tech (skip the 1st year).`,
          `Apply for PSU, Railway and State government technical jobs.`,
          `Freelance, take contracts or start your own technical service.`,
        ],
        salary: "₹1.8–5 LPA to start; more with experience or after B.E./B.Tech.",
      };
    case "iti":
      return {
        outcomes: [
          `Get hired as ${first(c, "a skilled tradesperson")} in industry.`,
          `Join a paid apprenticeship (NAPS) to gain experience and a stipend.`,
          `Apply for Railway, PSU, Army and other government technical posts.`,
          `Become self-employed — run your own workshop or service.`,
          `Upgrade later with CITS (instructor) or a diploma.`,
        ],
        salary: "₹1.2–3.6 LPA to start; skilled trades and overseas jobs pay more.",
      };
    case "paravoc":
      return {
        outcomes: [
          `Work as ${first(c, "a healthcare/skilled worker")} in hospitals, clinics, labs or businesses.`,
          `Progress to advanced diplomas or degrees in your field.`,
          `Explore jobs across India — and opportunities abroad.`,
          `Take up agency, home-service or self-employed work.`,
          `Add certifications to grow into senior roles.`,
        ],
        salary: "₹1.5–4 LPA to start; grows with specialisation and experience.",
      };
    default:
      return { outcomes: [], salary: null };
  }
}

async function main() {
  let n = 0;
  for (const stream of ["stream1112", "diploma", "iti", "paravoc"]) {
    const { data, error } = await admin.database
      .from("programs")
      .select("id, name, stream, category_id, career_opportunities")
      .eq("stream", stream);
    if (error) throw new Error(`fetch ${stream}: ${JSON.stringify(error)}`);
    for (const p of (data ?? []) as Prog[]) {
      const { outcomes, salary } = build(p);
      const { error: uErr } = await admin.database
        .from("programs")
        .update({ outcomes, salary_range: salary })
        .eq("id", p.id);
      if (uErr) throw new Error(`update ${p.name}: ${JSON.stringify(uErr)}`);
      n++;
    }
  }
  console.log(`✓ Added "What You Can Achieve" outcomes (+salary) to ${n} after-10th programs.`);
}

main().catch((e) => {
  console.error("Enrich failed:", e);
  process.exit(1);
});
