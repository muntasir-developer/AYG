"use client";
import { SCIENCE_CATEGORIES, slugify } from "@/data/science";

import React, { useMemo, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const chip =
  "px-3 py-1.5 rounded-full border transition shadow-sm text-sm whitespace-nowrap";

/* ----------------------------- Component ----------------------------- */

const ScienceDegreesPage: React.FC = () => {
  const router = useRouter();
  const [q, setQ] = useState("");
  const [active, setActive] = useState<string>("all");

  const flatDegrees = useMemo(
    () =>
      SCIENCE_CATEGORIES.flatMap((c) =>
        c.degrees.map((d) => ({
          ...d,
          categoryKey: c.key,
          categoryLabel: c.label,
          slug: slugify(d.name),
        }))
      ),
    []
  );

  const filtered = useMemo(() => {
    const term = q.trim().toLowerCase();
    return flatDegrees.filter((d) => {
      const byCat = active === "all" || d.categoryKey === active;
      const byText =
        !term ||
        d.name.toLowerCase().includes(term) ||
        d.short.toLowerCase().includes(term) ||
        d.categoryLabel.toLowerCase().includes(term);
      return byCat && byText;
    });
  }, [flatDegrees, q, active]);

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Top bar */}
      <section className="sticky  z-10 backdrop-blur-md supports-[backdrop-filter]:bg-slate-900/80 bg-slate-900 border-b border-slate-700/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
            Science Degrees (India)
          </h1>

          <div className="relative w-full md:w-80">
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search: e.g., MBBS, Robotics, Genetics..."
              className="w-full rounded-xl border border-slate-600 bg-slate-800/50 text-slate-100 placeholder-slate-400 px-4 py-2.5 pr-10 text-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 shadow-lg transition"
            />
            <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-400">
              🔍
            </span>
          </div>
        </div>

        {/* Category chips */}
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-4 flex flex-wrap gap-2">
          <button
            onClick={() => setActive("all")}
            className={`${chip} ${
              active === "all"
                ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white border-transparent shadow-lg shadow-indigo-500/30"
                : "bg-slate-800/50 text-slate-300 border-slate-600 hover:bg-slate-800 hover:border-slate-500"
            }`}
          >
            All
          </button>

          {SCIENCE_CATEGORIES.map((c) => (
            <button
              key={c.key}
              onClick={() => setActive(c.key)}
              className={`${chip} ${
                active === c.key
                  ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white border-transparent shadow-lg shadow-indigo-500/30"
                  : "bg-slate-800/50 text-slate-300 border-slate-600 hover:bg-slate-800 hover:border-slate-500"
              }`}
              title={c.label}
            >
              <span className="mr-2 inline-flex">{c.icon}</span>
              {c.label}
            </button>
          ))}
        </div>
      </section>

      {/* Intro strip */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 ">
        <div className="rounded-2xl border border-indigo-500/30 bg-gradient-to-r from-indigo-950/50 to-purple-950/50 p-5 shadow-xl shadow-indigo-900/20 backdrop-blur-sm">
          <p className="text-sm text-slate-300">
            <span className="font-semibold text-indigo-400">
              Tip for students:
            </span>{" "}
            Pick what you love.
            <span>
              "Pick a degree that matches your lifestyle goal: high research,
              job stability, or business."
            </span>
          </p>
        </div>
      </section>

      {/* Results */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="mb-3 text-sm text-slate-400">
          Showing{" "}
          <span className="font-medium text-indigo-400">{filtered.length}</span>{" "}
          degree{filtered.length !== 1 ? "s" : ""}.
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filtered.map((d) => (
            <Link
              key={d.slug}
              href={`/quest2/qscience/science/${d.slug}`}
              className="group block rounded-2xl border border-slate-700/50 bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-5 shadow-xl hover:shadow-2xl hover:shadow-indigo-900/20 transition-all duration-300 hover:-translate-y-1 hover:border-indigo-500/50 backdrop-blur-sm"
            >
              <div className="mb-2 text-xs font-medium uppercase tracking-wide text-slate-500">
                {d.categoryLabel}
              </div>
              <h3 className="text-base font-semibold text-slate-100 group-hover:text-indigo-400 transition-colors">
                {d.name}
              </h3>
              <p className="mt-1 text-sm text-slate-400">{d.short}</p>
              <div className="mt-4 inline-flex items-center text-sm font-medium text-indigo-400">
                Learn more <span className="ml-1">→</span>
              </div>
            </Link>
          ))}
        </div>

        {/* Empty state */}
        {filtered.length === 0 && (
          <div className="mt-10 rounded-2xl border border-dashed border-slate-700 p-10 text-center text-slate-400">
            No matches. Try a different keyword (e.g., <b>Genetics</b>,{" "}
            <b>Robotics</b>, <b>MBBS</b>).
          </div>
        )}
      </section>

      {/* Footer note */}
      <footer className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10 text-xs text-slate-500">
        *This page lists major **Science-stream** degrees recognized across
        Indian universities and professional councils (medical, engineering,
        agriculture, etc.).
        <span>© {2025} Achieve Your Goal (AYG). All rights reserved.</span>
      </footer>
    </main>
  );
};

export default ScienceDegreesPage;
