"use client";
import React, { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import {
  getCategories,
  getPrograms,
  type Category,
  type Program,
} from "@/lib/catalog";
import CategoryIcon from "@/components/CategoryIcon";

const chip =
  "px-3 py-1.5 rounded-full border transition shadow-sm text-sm whitespace-nowrap";

const STREAM = "skill";

const SkillsPage: React.FC = () => {
  const [q, setQ] = useState("");
  const [active, setActive] = useState<string>("all");
  const [categories, setCategories] = useState<Category[]>([]);
  const [programs, setPrograms] = useState<Program[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const [cats, progs] = await Promise.all([
          getCategories(STREAM),
          getPrograms(STREAM),
        ]);
        if (!cancelled) {
          setCategories(cats);
          setPrograms(progs);
        }
      } catch (e) {
        if (!cancelled) setError(e instanceof Error ? e.message : "Failed to load");
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  const flatSkills = useMemo(() => {
    const labelByCat = new Map(categories.map((c) => [c.id, c.label]));
    const keyByCat = new Map(categories.map((c) => [c.id, c.key]));
    return programs.map((p) => ({
      ...p,
      categoryKey: keyByCat.get(p.category_id) ?? "",
      categoryLabel: labelByCat.get(p.category_id) ?? "",
    }));
  }, [categories, programs]);

  const filtered = useMemo(() => {
    const term = q.trim().toLowerCase();
    return flatSkills.filter((s) => {
      const byCat = active === "all" || s.categoryKey === active;
      const byText =
        !term ||
        s.name.toLowerCase().includes(term) ||
        (s.short ?? "").toLowerCase().includes(term) ||
        s.categoryLabel.toLowerCase().includes(term);
      return byCat && byText;
    });
  }, [flatSkills, q, active]);

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Top bar */}
      <section className="sticky top-0 z-10 backdrop-blur-md supports-[backdrop-filter]:bg-slate-900/80 bg-slate-900 border-b border-slate-700/50">
        <div className="mx-auto max-w-7xl px-3 sm:px-4 md:px-6 lg:px-8 py-3 sm:py-4 md:py-5">
          {/* Title and Search */}
          <div className="flex flex-col gap-3">
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight bg-gradient-to-r from-amber-400 via-orange-400 to-red-400 bg-clip-text text-transparent leading-tight">
              Skills After 12th (India) — Expanded Master List
            </h1>

            <div className="w-full">
              <div className="relative max-w-full sm:max-w-md md:max-w-lg">
                <input
                  value={q}
                  onChange={(e) => setQ(e.target.value)}
                  placeholder="Search: AI, Welding, UX..."
                  className="w-full rounded-xl border border-slate-600 bg-slate-800/50 text-slate-100 placeholder-slate-400 px-3 sm:px-4 py-2 sm:py-2.5 pr-10 text-sm outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 shadow-lg transition"
                />
                <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 text-base sm:text-lg">
                  🔍
                </span>
              </div>
            </div>
          </div>

          {/* Category chips - Horizontal scroll on mobile, wrap on larger screens */}
          <div className="mt-3 sm:mt-4 -mx-3 sm:mx-0 px-3 sm:px-0 overflow-x-auto scrollbar-hide">
            <div className="flex sm:flex-wrap gap-2 pb-2 sm:pb-0 min-w-max sm:min-w-0">
              <button
                onClick={() => setActive("all")}
                className={`${chip} ${
                  active === "all"
                    ? "bg-gradient-to-r from-orange-600 to-red-600 text-white border-transparent shadow-lg shadow-orange-500/30"
                    : "bg-slate-800/50 text-slate-300 border-slate-600 hover:bg-slate-800 hover:border-slate-500"
                }`}
              >
                All
              </button>

              {categories.map((c) => (
                <button
                  key={c.key}
                  onClick={() => setActive(c.key)}
                  className={`${chip} ${
                    active === c.key
                      ? "bg-gradient-to-r from-orange-600 to-red-600 text-white border-transparent shadow-lg shadow-orange-500/30"
                      : "bg-slate-800/50 text-slate-300 border-slate-600 hover:bg-slate-800 hover:border-slate-500"
                  }`}
                  title={c.label}
                >
                  <span className="mr-1.5 inline-flex text-base sm:text-sm">
                    <CategoryIcon
                      name={c.icon}
                      className={`w-5 h-5 ${c.icon_color ?? ""}`}
                    />
                  </span>
                  <span className="text-xs sm:text-sm">{c.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Intro strip */}
      <section className="mx-auto max-w-7xl px-3 sm:px-4 md:px-6 lg:px-8 pt-4 sm:pt-6 md:pt-8">
        <div className="rounded-xl sm:rounded-2xl border border-orange-500/30 bg-gradient-to-r from-orange-950/50 to-red-950/50 p-3 sm:p-4 md:p-5 shadow-xl shadow-orange-900/20 backdrop-blur-sm">
          <p className="text-xs sm:text-sm md:text-base text-slate-300 leading-relaxed">
            <span className="font-semibold text-orange-400">
              💡 Tip for students:
            </span>{" "}
            Choose a balanced learning path: one core career skill, one
            future-facing skill, and one soft skill.{" "}
            <span className="block sm:inline mt-1 sm:mt-0 font-medium text-slate-200">
              Use internships and projects to prove ability.
            </span>
          </p>
        </div>
      </section>

      {/* Results */}
      <section className="mx-auto max-w-7xl px-3 sm:px-4 md:px-6 lg:px-8 py-4 sm:py-6 md:py-8">
        {error && (
          <div className="mb-4 rounded-xl border border-rose-500/40 bg-rose-950/40 p-4 text-sm text-rose-200">
            Couldn&apos;t load skills: {error}
          </div>
        )}

        {loading ? (
          <div className="py-20 text-center text-slate-400">Loading skills…</div>
        ) : (
          <>
        <div className="mb-3 sm:mb-4 text-xs sm:text-sm text-slate-400">
          Showing{" "}
          <span className="font-medium text-orange-400">{filtered.length}</span>{" "}
          skill{filtered.length !== 1 ? "s" : ""}
        </div>

        <div className="grid gap-3 sm:gap-4 md:gap-5 grid-cols-1 min-[480px]:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filtered.map((s) => (
            <Link
              key={s.slug}
              href={`/skills/${s.slug}`}
              className="group block rounded-xl sm:rounded-2xl border border-slate-700/50 bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-4 sm:p-5 shadow-xl hover:shadow-2xl hover:shadow-orange-900/20 transition-all duration-300 hover:-translate-y-1 hover:border-orange-500/50 backdrop-blur-sm active:scale-95"
            >
              <div className="mb-2 text-xs font-medium uppercase tracking-wide text-slate-500">
                {s.categoryLabel}
              </div>
              <h3 className="text-sm sm:text-base md:text-lg font-semibold text-slate-100 group-hover:text-orange-400 transition-colors leading-snug">
                {s.name}
              </h3>
              <p className="mt-1.5 sm:mt-2 text-xs sm:text-sm text-slate-400 leading-relaxed line-clamp-2">
                {s.short}
              </p>
              <div className="mt-3 sm:mt-4 inline-flex items-center text-xs sm:text-sm font-medium text-orange-400 group-hover:text-orange-300">
                Learn more{" "}
                <span className="ml-1 group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* Empty state */}
        {filtered.length === 0 && (
          <div className="mt-6 sm:mt-8 md:mt-10 rounded-xl sm:rounded-2xl border border-dashed border-slate-700 bg-slate-800/30 p-6 sm:p-8 md:p-10 text-center">
            <div className="text-4xl sm:text-5xl md:text-6xl mb-3 sm:mb-4">
              🔍
            </div>
            <p className="text-sm sm:text-base text-slate-400">
              No matches found. Try different keywords like{" "}
              <span className="font-semibold text-orange-400">React</span>,{" "}
              <span className="font-semibold text-orange-400">Welding</span>, or{" "}
              <span className="font-semibold text-orange-400">Nutrition</span>.
            </p>
          </div>
        )}
          </>
        )}
      </section>

      {/* Footer note */}
      <footer className="mx-auto max-w-7xl px-3 sm:px-4 md:px-6 lg:px-8 pb-6 sm:pb-8 md:pb-10 text-xs sm:text-sm text-slate-500">
        <span>© {2025} Achieve Your Goal (AYG). All rights reserved.</span>
      </footer>
    </main>
  );
};

export default SkillsPage;
