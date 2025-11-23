import { notFound } from "next/navigation";
import { COMMERCE_CATEGORIES, slugify } from "@/data/commerce";
import {
  BookOpen,
  Clock,
  GraduationCap,
  Briefcase,
  IndianRupee,
  Award,
  CheckCircle,
  ArrowLeft,
  Share2,
  Bookmark,
} from "lucide-react";
import Link from "next/link";

export async function generateStaticParams() {
  return COMMERCE_CATEGORIES.flatMap((category) =>
    category.degrees.map((degree) => ({
      slug: slugify(degree.name),
    }))
  );
}

const Page = async ({ params }: { params: { slug: string } }) => {
  const allDegrees = COMMERCE_CATEGORIES.flatMap((category) =>
    category.degrees.map((degree) => ({
      ...degree,
      category: category.label,
      slug: slugify(degree.name),
    }))
  );

  const degree = allDegrees.find((d) => d.slug === params.slug);

  if (!degree) return notFound();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 ">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-violet-600/20 to-blue-600/20 border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-12">
          {/* Back Button & Actions */}
          <div className="flex items-center justify-between mb-6">
            <Link
              href="/quest2/qcommerce/commerce/"
              className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Degrees</span>
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

          {/* Title Section */}
          <div className="space-y-4">
            <div className="inline-block px-4 py-1.5 rounded-full bg-violet-500/20 border border-violet-500/30">
              <span className="text-sm font-medium text-violet-300">
                {degree.category}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              {degree.name}
            </h1>
            <p className="text-xl text-gray-300">{degree.short}</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Main Info */}
          <div className="lg:col-span-2 space-y-8">
            {/* Overview */}
            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="flex items-center gap-3 mb-4">
                <GraduationCap className="w-6 h-6 text-violet-400" />
                <h2 className="text-2xl font-bold text-white">Overview</h2>
              </div>
              <p className="text-gray-300 leading-relaxed">
                {degree.fullDescription}
              </p>
            </section>

            {/* Syllabus */}
            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="flex items-center gap-3 mb-6">
                <BookOpen className="w-6 h-6 text-blue-400" />
                <h2 className="text-2xl font-bold text-white">
                  Course Syllabus
                </h2>
              </div>
              <div className="grid sm:grid-cols-2 gap-3">
                {degree.syllabus.map((subject, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
                  >
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-200">{subject}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Career Opportunities */}
            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="flex items-center gap-3 mb-6">
                <Briefcase className="w-6 h-6 text-emerald-400" />
                <h2 className="text-2xl font-bold text-white">
                  Career Opportunities
                </h2>
              </div>
              <div className="flex flex-wrap gap-3">
                {degree.careerOpportunities.map((career, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 rounded-lg bg-gradient-to-r from-emerald-500/10 to-teal-500/10 border border-emerald-500/20 text-emerald-200 text-sm font-medium hover:from-emerald-500/20 hover:to-teal-500/20 transition-all cursor-default"
                  >
                    {career}
                  </span>
                ))}
              </div>
            </section>
          </div>

          {/* Right Column - Quick Info Cards */}
          <div className="space-y-6">
            {/* Duration */}
            <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 backdrop-blur-sm rounded-2xl p-6 border border-blue-500/20">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-lg bg-blue-500/20">
                  <Clock className="w-5 h-5 text-blue-300" />
                </div>
                <h3 className="text-lg font-semibold text-white">Duration</h3>
              </div>
              <p className="text-gray-200 font-medium">{degree.duration}</p>
            </div>

            {/* Fees */}
            <div className="bg-gradient-to-br from-amber-500/10 to-orange-500/10 backdrop-blur-sm rounded-2xl p-6 border border-amber-500/20">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-lg bg-amber-500/20">
                  <IndianRupee className="w-5 h-5 text-amber-300" />
                </div>
                <h3 className="text-lg font-semibold text-white">
                  Fee Structure
                </h3>
              </div>
              <p className="text-gray-200 text-sm leading-relaxed">
                {degree.fees}
              </p>
            </div>

            {/* Eligibility */}
            <div className="bg-gradient-to-br from-violet-500/10 to-purple-500/10 backdrop-blur-sm rounded-2xl p-6 border border-violet-500/20">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-lg bg-violet-500/20">
                  <CheckCircle className="w-5 h-5 text-violet-300" />
                </div>
                <h3 className="text-lg font-semibold text-white">
                  Eligibility
                </h3>
              </div>
              <p className="text-gray-200 text-sm leading-relaxed">
                {degree.eligibility}
              </p>
            </div>

            {/* CTA Button */}
            <button className="w-full py-4 rounded-xl bg-gradient-to-r from-violet-600 to-blue-600 hover:from-violet-700 hover:to-blue-700 text-white font-semibold transition-all shadow-lg shadow-violet-500/20 hover:shadow-violet-500/40">
              Apply Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
