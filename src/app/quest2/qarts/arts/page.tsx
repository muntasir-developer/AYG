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
  "px-3 py-1.5 rounded-full border border-gray-700 bg-gray-800 hover:bg-gray-700 text-sm transition shadow-sm";

const STREAM = "arts";

const ArtsDegreesPage: React.FC = () => {
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

  const flatDegrees = useMemo(() => {
    const byCat = new Map(categories.map((c) => [c.id, c]));
    return programs.map((p) => {
      const c = byCat.get(p.category_id);
      return {
        ...p,
        categoryKey: c?.key ?? "",
        categoryLabel: c?.label ?? "",
        categoryIcon: c?.icon ?? null,
        categoryIconColor: c?.icon_color ?? "",
      };
    });
  }, [categories, programs]);

  const filtered = useMemo(() => {
    const term = q.trim().toLowerCase();
    return flatDegrees.filter((d) => {
      const byCat = active === "all" || d.categoryKey === active;
      const byText =
        !term ||
        d.name.toLowerCase().includes(term) ||
        (d.short ?? "").toLowerCase().includes(term) ||
        d.categoryLabel.toLowerCase().includes(term);
      return byCat && byText;
    });
  }, [flatDegrees, q, active]);

  return (
    <main className="min-h-screen bg-gray-950">
      {/* Top bar - Sticky Dark Header */}
      <section className="sticky top-0 z-50 backdrop-blur-md bg-gray-900/95 border-b border-gray-800 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-100">
            Arts & Humanities Degrees (India)
          </h1>

          <div className="relative w-full md:w-80">
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search: e.g., BA English, Psychology..."
              className="w-full rounded-xl border border-gray-700 bg-gray-800 px-4 py-2.5 pr-10 text-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/50 shadow-sm text-gray-100 placeholder-gray-400"
            />
            <span className="pointer-events-none absolute right-3 top-2.5 text-gray-500">
              🔍
            </span>
          </div>
        </div>

        {/* Category chips */}
        <div className="max-w-7xl mx-auto px-4 pb-4 flex flex-wrap gap-2">
          <button
            onClick={() => setActive("all")}
            className={`${chip} ${
              active === "all"
                ? "bg-indigo-600 text-white border-indigo-600 shadow-indigo-500/50"
                : "text-gray-300 border-gray-700"
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
                  ? "bg-indigo-600 text-white border-indigo-600 shadow-indigo-500/50"
                  : "text-gray-300 border-gray-700"
              }`}
              title={c.label}
            >
              <span className="mr-2 inline-flex">
                <CategoryIcon
                  name={c.icon}
                  className={`w-4 h-4 ${
                    active === c.key ? "text-white" : c.icon_color ?? ""
                  }`}
                />
              </span>
              {c.label}
            </button>
          ))}
        </div>
      </section>

      {/* Tip section */}
      <section className="max-w-7xl mx-auto px-4 pt-6">
        <div className="rounded-2xl border border-indigo-900/50 bg-gradient-to-br from-indigo-950/50 to-indigo-900/30 p-5 shadow-lg">
          <p className="text-sm text-gray-300">
            <span className="font-semibold text-indigo-400">
              💡 Tip for students:
            </span>{" "}
            Arts isn't just about painting—it covers languages, literature,
            journalism, music, design, and more.{" "}
            <span className="font-medium text-gray-200">
              Follow your interest: Arts gives the widest range from law to
              media to psychology.
            </span>
          </p>
        </div>
      </section>

      {/* Results */}
      <section className="max-w-7xl mx-auto px-4 py-6">
        {error && (
          <div className="mb-4 rounded-xl border border-rose-500/40 bg-rose-950/40 p-4 text-sm text-rose-200">
            Couldn&apos;t load degrees: {error}
          </div>
        )}

        {loading ? (
          <div className="py-20 text-center text-gray-400">Loading degrees…</div>
        ) : (
          <>
        <div className="mb-3 text-sm text-gray-400">
          Showing{" "}
          <span className="font-medium text-gray-200">{filtered.length}</span>{" "}
          degree{filtered.length !== 1 ? "s" : ""}.
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filtered.map((d) => (
            <Link
              key={d.slug}
              href={`/quest2/qarts/arts/${d.slug}`}
              className="group block rounded-2xl border border-gray-800 bg-gray-900/50 backdrop-blur-sm p-5 shadow-lg hover:shadow-xl hover:shadow-indigo-500/10 hover:border-indigo-500/50 hover:bg-gray-900/80 transition-all duration-300"
            >
              <div className="mb-2 flex items-center gap-2">
                <CategoryIcon
                  name={d.categoryIcon}
                  className={`w-4 h-4 ${d.categoryIconColor}`}
                />
                <span className="text-xs font-medium uppercase tracking-wide text-gray-500">
                  {d.categoryLabel}
                </span>
              </div>
              <h3 className="text-base font-semibold text-gray-100 group-hover:text-indigo-400 transition">
                {d.name}
              </h3>
              <p className="mt-1 text-sm text-gray-400">{d.short}</p>
              <div className="mt-4 flex items-center text-sm font-medium text-indigo-400 group-hover:text-indigo-300">
                Learn more <span className="ml-1">→</span>
              </div>
            </Link>
          ))}
        </div>

        {/* Empty state */}
        {filtered.length === 0 && (
          <div className="mt-10 rounded-2xl border border-dashed border-gray-800 bg-gray-900/50 p-10 text-center text-gray-400">
            <p className="text-lg font-medium text-gray-300 mb-2">
              No matches found
            </p>
            <p>
              Try searching for <b className="text-gray-200">English</b>,{" "}
              <b className="text-gray-200">History</b>,{" "}
              <b className="text-gray-200">Psychology</b>, or{" "}
              <b className="text-gray-200">Journalism</b>.
            </p>
          </div>
        )}
          </>
        )}
      </section>

      {/* Footer Note */}
      <footer className="max-w-7xl mx-auto px-4 pb-10 pt-6 border-t border-gray-800">
        <p className="text-xs text-gray-400">
          *This page lists major{" "}
          <strong className="text-gray-300">Arts/Humanities degrees</strong>{" "}
          recognized in India. Each one has a kid-friendly explanation.
        </p>
        <p className="text-xs text-gray-500 mt-2">
          © {new Date().getFullYear()} Achieve Your Goal (AYG). All rights
          reserved.
        </p>
      </footer>
    </main>
  );
};

export default ArtsDegreesPage;
