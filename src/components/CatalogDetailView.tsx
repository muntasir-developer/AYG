import {
  BookOpen,
  Clock,
  GraduationCap,
  Briefcase,
  IndianRupee,
  CheckCircle,
  ArrowLeft,
  Share2,
  Bookmark,
  ExternalLink,
  ListChecks,
  Wrench,
  BadgeCheck,
  Building2,
  TrendingUp,
  HelpCircle,
} from "lucide-react";
import Link from "next/link";
import type { Program } from "@/lib/catalog";

type Props = {
  program: Program;
  categoryLabel: string;
  /** Where the "Back" link goes (the track list page). */
  backHref: string;
  backLabel?: string;
  /** Primary CTA. If ctaHref is set it renders a link (e.g. a free-learn hub);
   *  otherwise the default "Apply Now" button is shown. */
  ctaLabel?: string;
  ctaHref?: string;
};

/** Small sidebar card with an icon header and arbitrary content. */
function SideCard({
  icon,
  title,
  tint,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  tint: string;
  children: React.ReactNode;
}) {
  return (
    <div className={`bg-gradient-to-br ${tint} backdrop-blur-sm rounded-2xl p-6 border`}>
      <div className="flex items-center gap-3 mb-3">
        <div className="p-2 rounded-lg bg-white/10">{icon}</div>
        <h3 className="text-lg font-semibold text-white">{title}</h3>
      </div>
      {children}
    </div>
  );
}

/** Shared detail/landing layout for any catalog program (skill, degree, trade). */
export default function CatalogDetailView({
  program,
  categoryLabel,
  backHref,
  backLabel = "Back",
  ctaLabel = "Apply Now",
  ctaHref,
}: Props) {
  const syllabus = program.syllabus ?? [];
  const careers = program.career_opportunities ?? [];
  const resources = program.free_resources ?? [];
  const roadmap = program.roadmap ?? [];
  const tools = program.tools ?? [];
  const certifications = program.certifications ?? [];
  const recruiters = program.recruiters ?? [];
  const faqs = program.faqs ?? [];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero */}
      <div className="bg-gradient-to-r from-violet-600/20 to-blue-600/20 border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="flex items-center justify-between mb-6">
            <Link
              href={backHref}
              className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>{backLabel}</span>
            </Link>
            <div className="flex gap-3">
              <button className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                <Share2 className="w-5 h-5 text-gray-300" />
              </button>
              <button className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                <Bookmark className="w-5 h-5 text-gray-300" />
              </button>
            </div>
          </div>

          <div className="space-y-4">
            {categoryLabel && (
              <div className="inline-block px-4 py-1.5 rounded-full bg-violet-500/20 border border-violet-500/30">
                <span className="text-sm font-medium text-violet-300">
                  {categoryLabel}
                </span>
              </div>
            )}
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              {program.name}
            </h1>
            {program.short && (
              <p className="text-xl text-gray-300">{program.short}</p>
            )}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left */}
          <div className="lg:col-span-2 space-y-8">
            {program.full_description && (
              <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <div className="flex items-center gap-3 mb-4">
                  <GraduationCap className="w-6 h-6 text-violet-400" />
                  <h2 className="text-2xl font-bold text-white">Overview</h2>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  {program.full_description}
                </p>
              </section>
            )}

            {roadmap.length > 0 && (
              <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <div className="flex items-center gap-3 mb-6">
                  <ListChecks className="w-6 h-6 text-cyan-400" />
                  <h2 className="text-2xl font-bold text-white">
                    How to Learn It — Step by Step
                  </h2>
                </div>
                <ol className="space-y-4">
                  {roadmap.map((step, i) => (
                    <li key={i} className="flex gap-4">
                      <span className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 text-white text-sm font-bold flex items-center justify-center">
                        {i + 1}
                      </span>
                      <p className="text-gray-200 leading-relaxed pt-1">{step}</p>
                    </li>
                  ))}
                </ol>
              </section>
            )}

            {syllabus.length > 0 && (
              <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <div className="flex items-center gap-3 mb-6">
                  <BookOpen className="w-6 h-6 text-blue-400" />
                  <h2 className="text-2xl font-bold text-white">What You&apos;ll Learn</h2>
                </div>
                <div className="grid sm:grid-cols-2 gap-3">
                  {syllabus.map((subject, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
                    >
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-200">{subject}</span>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {resources.length > 0 && (
              <section className="bg-gradient-to-br from-emerald-600/10 to-teal-600/5 backdrop-blur-sm rounded-2xl p-8 border border-emerald-500/20">
                <div className="flex items-center gap-3 mb-2">
                  <ExternalLink className="w-6 h-6 text-emerald-400" />
                  <h2 className="text-2xl font-bold text-white">Free Resources to Learn</h2>
                </div>
                <p className="text-sm text-emerald-200/70 mb-6">
                  Hand-picked free places to start learning — no fees required.
                </p>
                <div className="grid sm:grid-cols-2 gap-3">
                  {resources.map((r, i) => (
                    <a
                      key={i}
                      href={r.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-between gap-3 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-emerald-400/40 hover:bg-white/10 transition-all"
                    >
                      <div className="min-w-0">
                        <div className="text-sm font-medium text-gray-100 group-hover:text-emerald-300 truncate">
                          {r.label}
                        </div>
                        {r.type && (
                          <div className="text-xs text-emerald-200/60 uppercase tracking-wide mt-0.5">
                            {r.type}
                          </div>
                        )}
                      </div>
                      <ExternalLink className="w-4 h-4 text-emerald-400 flex-shrink-0 group-hover:translate-x-0.5 transition-transform" />
                    </a>
                  ))}
                </div>
              </section>
            )}

            {careers.length > 0 && (
              <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <div className="flex items-center gap-3 mb-6">
                  <Briefcase className="w-6 h-6 text-emerald-400" />
                  <h2 className="text-2xl font-bold text-white">Career Opportunities</h2>
                </div>
                <div className="flex flex-wrap gap-3">
                  {careers.map((career, i) => (
                    <span
                      key={i}
                      className="px-4 py-2 rounded-lg bg-gradient-to-r from-emerald-500/10 to-teal-500/10 border border-emerald-500/20 text-emerald-200 text-sm font-medium hover:from-emerald-500/20 hover:to-teal-500/20 transition-all cursor-default"
                    >
                      {career}
                    </span>
                  ))}
                </div>
              </section>
            )}

            {faqs.length > 0 && (
              <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <div className="flex items-center gap-3 mb-6">
                  <HelpCircle className="w-6 h-6 text-amber-400" />
                  <h2 className="text-2xl font-bold text-white">
                    Frequently Asked Questions
                  </h2>
                </div>
                <div className="space-y-3">
                  {faqs.map((f, i) => (
                    <details
                      key={i}
                      className="group rounded-xl bg-white/5 border border-white/10 p-4"
                    >
                      <summary className="cursor-pointer list-none flex items-center justify-between gap-3 text-gray-100 font-medium">
                        {f.q}
                        <span className="text-amber-400 group-open:rotate-45 transition-transform text-xl leading-none">
                          +
                        </span>
                      </summary>
                      <p className="mt-3 text-sm text-gray-300 leading-relaxed">{f.a}</p>
                    </details>
                  ))}
                </div>
              </section>
            )}
          </div>

          {/* Right */}
          <div className="space-y-6">
            {program.duration && (
              <SideCard
                icon={<Clock className="w-5 h-5 text-blue-300" />}
                title="Duration"
                tint="from-blue-500/10 to-cyan-500/10 border-blue-500/20"
              >
                <p className="text-gray-200 font-medium">{program.duration}</p>
              </SideCard>
            )}

            {program.fees && (
              <SideCard
                icon={<IndianRupee className="w-5 h-5 text-amber-300" />}
                title="Fee Structure"
                tint="from-amber-500/10 to-orange-500/10 border-amber-500/20"
              >
                <p className="text-gray-200 text-sm leading-relaxed">{program.fees}</p>
              </SideCard>
            )}

            {program.salary_range && (
              <SideCard
                icon={<TrendingUp className="w-5 h-5 text-green-300" />}
                title="Typical Salary (India)"
                tint="from-green-500/10 to-emerald-500/10 border-green-500/20"
              >
                <p className="text-gray-200 text-sm leading-relaxed">
                  {program.salary_range}
                </p>
              </SideCard>
            )}

            {program.eligibility && (
              <SideCard
                icon={<CheckCircle className="w-5 h-5 text-violet-300" />}
                title="Eligibility"
                tint="from-violet-500/10 to-purple-500/10 border-violet-500/20"
              >
                <p className="text-gray-200 text-sm leading-relaxed">
                  {program.eligibility}
                </p>
              </SideCard>
            )}

            {tools.length > 0 && (
              <SideCard
                icon={<Wrench className="w-5 h-5 text-sky-300" />}
                title="Tools & Technologies"
                tint="from-sky-500/10 to-blue-500/10 border-sky-500/20"
              >
                <div className="flex flex-wrap gap-2">
                  {tools.map((t, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-xs text-gray-200"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </SideCard>
            )}

            {certifications.length > 0 && (
              <SideCard
                icon={<BadgeCheck className="w-5 h-5 text-fuchsia-300" />}
                title="Certifications"
                tint="from-fuchsia-500/10 to-purple-500/10 border-fuchsia-500/20"
              >
                <ul className="space-y-2">
                  {certifications.map((c, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-200">
                      <BadgeCheck className="w-4 h-4 text-fuchsia-300 flex-shrink-0 mt-0.5" />
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>
              </SideCard>
            )}

            {recruiters.length > 0 && (
              <SideCard
                icon={<Building2 className="w-5 h-5 text-rose-300" />}
                title="Who Hires"
                tint="from-rose-500/10 to-pink-500/10 border-rose-500/20"
              >
                <div className="flex flex-wrap gap-2">
                  {recruiters.map((r, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-xs text-gray-200"
                    >
                      {r}
                    </span>
                  ))}
                </div>
              </SideCard>
            )}

            {ctaHref ? (
              <Link
                href={ctaHref}
                className="block w-full py-4 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-semibold text-center transition-all shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/40"
              >
                {ctaLabel}
              </Link>
            ) : (
              <button className="w-full py-4 rounded-xl bg-gradient-to-r from-violet-600 to-blue-600 hover:from-violet-700 hover:to-blue-700 text-white font-semibold transition-all shadow-lg shadow-violet-500/20 hover:shadow-violet-500/40">
                {ctaLabel}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
