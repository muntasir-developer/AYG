import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { learnResources } from "@/lib/learnResources";

type Props = {
  name: string;
  categoryKey: string;
  /** Program slug — used to look up a curated video course. */
  slug?: string;
  /** Link back to the program's detail page. */
  backHref: string;
};

/** Organized "Learn for Free" hub: videos, courses, PDFs, docs, practice, community. */
export default function LearnHubView({ name, categoryKey, slug, backHref }: Props) {
  const groups = learnResources(name, categoryKey, slug).filter((g) => g.items.length > 0);
  const total = groups.reduce((n, g) => n + g.items.length, 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero */}
      <div className="bg-gradient-to-r from-emerald-600/20 to-teal-600/20 border-b border-white/10">
        <div className="max-w-5xl mx-auto px-6 py-12">
          <Link
            href={backHref}
            className="inline-flex items-center gap-2 text-gray-300 hover:text-white transition-colors mb-6"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to {name}</span>
          </Link>
          <div className="inline-block px-4 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-500/30 mb-4">
            <span className="text-sm font-medium text-emerald-300">
              100% Free · {total} resources
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            Learn {name} — Free
          </h1>
          <p className="text-xl text-gray-300 mt-3 max-w-2xl">
            Everything you need to learn{" "}
            <span className="text-white font-medium">{name}</span>{" "}for free,
            organized step by step — videos, courses, notes &amp; PDFs, docs,
            practice and community.
          </p>
        </div>
      </div>

      {/* Resource groups */}
      <div className="max-w-5xl mx-auto px-6 py-12 space-y-8">
        {groups.map((group) => (
          <section
            key={group.key}
            className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/10"
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="text-2xl">{group.emoji}</span>
              <h2 className="text-2xl font-bold text-white">{group.title}</h2>
              <span className="text-sm text-slate-400">({group.items.length})</span>
            </div>
            <div className="grid sm:grid-cols-2 gap-3">
              {group.items.map((item, i) => (
                <a
                  key={i}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start justify-between gap-3 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-emerald-400/40 hover:bg-white/10 transition-all"
                >
                  <div className="min-w-0">
                    <div className="text-sm font-medium text-gray-100 group-hover:text-emerald-300">
                      {item.label}
                    </div>
                    {item.note && (
                      <div className="text-xs text-slate-400 mt-0.5">{item.note}</div>
                    )}
                  </div>
                  <ExternalLink className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5 group-hover:translate-x-0.5 transition-transform" />
                </a>
              ))}
            </div>
          </section>
        ))}

        <p className="text-xs text-slate-500 text-center pt-2">
          Links open trusted free platforms — videos &amp; courses are scoped to
          this exact skill. Happy learning! 🚀
        </p>
      </div>
    </div>
  );
}
