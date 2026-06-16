/**
 * Catalog content manager — edit the AYG catalog directly in InsForge.
 *
 * Usage:
 *   npx tsx scripts/catalog.mts <command> [args]
 *
 * Read:
 *   list-categories <stream>
 *   list-programs   <stream> [categoryKey]
 *   get             <stream> <slug>
 *
 * Categories:
 *   add-category    <stream> --json '{"key","label","icon","icon_color","sort_order"}'
 *   edit-category   <stream> <key> --json '{ ...fields to change... }'
 *   delete-category <stream> <key>          (also deletes its programs)
 *
 * Programs:
 *   add-program     <stream> <categoryKey> --json '{"name","short","full_description",
 *                     "duration","eligibility","fees","career_opportunities":[],"syllabus":[]}'
 *   edit-program    <stream> <slug> --json '{ ...fields to change... }'
 *   delete-program  <stream> <slug>
 *
 * Backup / restore:
 *   export [file]            dump the whole catalog to JSON (default scripts/catalog-data.json)
 *   import [file]            replace ALL catalog rows from a JSON backup
 *
 * Notes:
 *   - `slug` is auto-generated from `name` on add-program (and regenerated if you
 *     edit `name`), so you never set it by hand.
 *   - `icon` is a lucide icon name string (e.g. "Stethoscope"); see
 *     src/components/CategoryIcon.tsx for the supported set.
 */
import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";
import { createAdminClient } from "@insforge/sdk";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const proj = JSON.parse(readFileSync(path.join(root, ".insforge/project.json"), "utf8"));
const admin = createAdminClient({ baseUrl: proj.oss_host, apiKey: proj.api_key });

const DEFAULT_BACKUP = path.join(root, "scripts/catalog-data.json");

const slugify = (s: string) =>
  s
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

function fail(msg: string): never {
  console.error(`✗ ${msg}`);
  process.exit(1);
}

// --- tiny arg parser: positionals + optional --json '<payload>' ---
function parseArgs(argv: string[]) {
  const positionals: string[] = [];
  let json: Record<string, unknown> | undefined;
  for (let i = 0; i < argv.length; i++) {
    if (argv[i] === "--json") {
      const raw = argv[++i];
      if (!raw) fail("--json requires a value");
      try {
        json = JSON.parse(raw);
      } catch {
        fail("--json value is not valid JSON");
      }
    } else {
      positionals.push(argv[i]);
    }
  }
  return { positionals, json };
}

async function findCategory(stream: string, key: string) {
  const { data, error } = await admin.database
    .from("categories")
    .select("*")
    .eq("stream", stream)
    .eq("key", key)
    .maybeSingle();
  if (error) fail(`lookup category failed: ${JSON.stringify(error)}`);
  return data as Record<string, unknown> | null;
}

async function findProgram(stream: string, slug: string) {
  const { data, error } = await admin.database
    .from("programs")
    .select("*")
    .eq("stream", stream)
    .eq("slug", slug)
    .maybeSingle();
  if (error) fail(`lookup program failed: ${JSON.stringify(error)}`);
  return data as Record<string, unknown> | null;
}

async function main() {
  const [cmd, ...rest] = process.argv.slice(2);
  const { positionals, json } = parseArgs(rest);

  switch (cmd) {
    case "list-categories": {
      const [stream] = positionals;
      if (!stream) fail("usage: list-categories <stream>");
      const { data, error } = await admin.database
        .from("categories")
        .select("key, label, icon, icon_color, sort_order")
        .eq("stream", stream)
        .order("sort_order", { ascending: true });
      if (error) fail(JSON.stringify(error));
      console.table(data);
      break;
    }

    case "list-programs": {
      const [stream, categoryKey] = positionals;
      if (!stream) fail("usage: list-programs <stream> [categoryKey]");
      let catId: string | undefined;
      if (categoryKey) {
        const cat = await findCategory(stream, categoryKey);
        if (!cat) fail(`no category '${categoryKey}' in stream '${stream}'`);
        catId = cat.id as string;
      }
      let query = admin.database
        .from("programs")
        .select("slug, name, sort_order")
        .eq("stream", stream);
      if (catId) query = query.eq("category_id", catId);
      const { data, error } = await query.order("sort_order", { ascending: true });
      if (error) fail(JSON.stringify(error));
      console.table(data);
      break;
    }

    case "get": {
      const [stream, slug] = positionals;
      if (!stream || !slug) fail("usage: get <stream> <slug>");
      const prog = await findProgram(stream, slug);
      if (!prog) fail(`no program '${slug}' in stream '${stream}'`);
      console.log(JSON.stringify(prog, null, 2));
      break;
    }

    case "add-category": {
      const [stream] = positionals;
      if (!stream || !json) fail("usage: add-category <stream> --json '{...}'");
      if (!json.key || !json.label) fail("category requires at least { key, label }");
      const { data, error } = await admin.database
        .from("categories")
        .insert([{ stream, sort_order: 0, ...json }])
        .select();
      if (error) fail(JSON.stringify(error));
      console.log(`✓ added category '${json.key}' to ${stream}`);
      console.log(JSON.stringify(data?.[0], null, 2));
      break;
    }

    case "edit-category": {
      const [stream, key] = positionals;
      if (!stream || !key || !json) fail("usage: edit-category <stream> <key> --json '{...}'");
      const { error } = await admin.database
        .from("categories")
        .update(json)
        .eq("stream", stream)
        .eq("key", key);
      if (error) fail(JSON.stringify(error));
      console.log(`✓ updated category '${key}' in ${stream}`);
      break;
    }

    case "delete-category": {
      const [stream, key] = positionals;
      if (!stream || !key) fail("usage: delete-category <stream> <key>");
      const { error } = await admin.database
        .from("categories")
        .delete()
        .eq("stream", stream)
        .eq("key", key);
      if (error) fail(JSON.stringify(error));
      console.log(`✓ deleted category '${key}' (and its programs) from ${stream}`);
      break;
    }

    case "add-program": {
      const [stream, categoryKey] = positionals;
      if (!stream || !categoryKey || !json) {
        fail("usage: add-program <stream> <categoryKey> --json '{...}'");
      }
      if (!json.name) fail("program requires at least { name }");
      const cat = await findCategory(stream, categoryKey);
      if (!cat) fail(`no category '${categoryKey}' in stream '${stream}'`);
      const row = {
        category_id: cat.id,
        stream,
        sort_order: 0,
        career_opportunities: [],
        syllabus: [],
        ...json,
        slug: slugify(json.name as string),
      };
      const { data, error } = await admin.database.from("programs").insert([row]).select();
      if (error) fail(JSON.stringify(error));
      console.log(`✓ added program '${(data?.[0] as Record<string, unknown>)?.slug}' to ${stream}/${categoryKey}`);
      break;
    }

    case "edit-program": {
      const [stream, slug] = positionals;
      if (!stream || !slug || !json) fail("usage: edit-program <stream> <slug> --json '{...}'");
      const patch = { ...json };
      if (typeof patch.name === "string") patch.slug = slugify(patch.name);
      const { error } = await admin.database
        .from("programs")
        .update(patch)
        .eq("stream", stream)
        .eq("slug", slug);
      if (error) fail(JSON.stringify(error));
      console.log(`✓ updated program '${slug}' in ${stream}${patch.slug ? ` (new slug: ${patch.slug})` : ""}`);
      break;
    }

    case "delete-program": {
      const [stream, slug] = positionals;
      if (!stream || !slug) fail("usage: delete-program <stream> <slug>");
      const { error } = await admin.database
        .from("programs")
        .delete()
        .eq("stream", stream)
        .eq("slug", slug);
      if (error) fail(JSON.stringify(error));
      console.log(`✓ deleted program '${slug}' from ${stream}`);
      break;
    }

    case "export": {
      const file = positionals[0] ? path.resolve(positionals[0]) : DEFAULT_BACKUP;
      const { data: categories, error: cErr } = await admin.database
        .from("categories")
        .select("*")
        .order("stream", { ascending: true })
        .order("sort_order", { ascending: true });
      if (cErr) fail(JSON.stringify(cErr));
      const { data: programs, error: pErr } = await admin.database
        .from("programs")
        .select("*")
        .order("stream", { ascending: true })
        .order("sort_order", { ascending: true });
      if (pErr) fail(JSON.stringify(pErr));
      writeFileSync(file, JSON.stringify({ categories, programs }, null, 2));
      console.log(`✓ exported ${categories?.length} categories + ${programs?.length} programs → ${file}`);
      break;
    }

    case "import": {
      const file = positionals[0] ? path.resolve(positionals[0]) : DEFAULT_BACKUP;
      const snapshot = JSON.parse(readFileSync(file, "utf8")) as {
        categories: Record<string, unknown>[];
        programs: Record<string, unknown>[];
      };
      const streams = [...new Set(snapshot.categories.map((c) => c.stream))];
      // wipe affected streams, then restore (categories first for FK)
      for (const s of streams) {
        await admin.database.from("programs").delete().eq("stream", s);
        await admin.database.from("categories").delete().eq("stream", s);
      }
      const { error: cErr } = await admin.database.from("categories").insert(snapshot.categories);
      if (cErr) fail(`restore categories failed: ${JSON.stringify(cErr)}`);
      // insert programs in chunks to stay well under request limits
      const chunk = 50;
      for (let i = 0; i < snapshot.programs.length; i += chunk) {
        const { error } = await admin.database
          .from("programs")
          .insert(snapshot.programs.slice(i, i + chunk));
        if (error) fail(`restore programs failed: ${JSON.stringify(error)}`);
      }
      console.log(
        `✓ imported ${snapshot.categories.length} categories + ${snapshot.programs.length} programs from ${file}`
      );
      break;
    }

    default:
      console.log(readFileSync(fileURLToPath(import.meta.url), "utf8").split("\n").slice(1, 41).join("\n"));
      if (cmd) fail(`unknown command: ${cmd}`);
  }
}

main().catch((e) => {
  console.error("Error:", e);
  process.exit(1);
});
