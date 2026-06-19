"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { BookOpen, Wrench, Cog, HeartPulse, Award, ArrowLeft } from "lucide-react";

const TRACKS = [
  {
    title: "Streams (11th–12th)",
    desc: "Science, Commerce or Arts — the academic route",
    icon: <BookOpen className="w-8 h-8" strokeWidth={1.5} />,
    colors: "from-blue-600/90 to-indigo-600/90",
    link: "/quest10/streams",
  },
  {
    title: "Diploma / Polytechnic",
    desc: "3-year job-ready engineering & other diplomas",
    icon: <Cog className="w-8 h-8" strokeWidth={1.5} />,
    colors: "from-cyan-600/90 to-blue-600/90",
    link: "/quest10/diploma",
  },
  {
    title: "ITI Trades",
    desc: "Short, hands-on trades that lead straight to jobs",
    icon: <Wrench className="w-8 h-8" strokeWidth={1.5} />,
    colors: "from-amber-600/90 to-orange-600/90",
    link: "/quest10/iti",
  },
  {
    title: "Paramedical & Vocational",
    desc: "Healthcare diplomas & practical skill courses",
    icon: <HeartPulse className="w-8 h-8" strokeWidth={1.5} />,
    colors: "from-emerald-600/90 to-teal-600/90",
    link: "/quest10/paravoc",
  },
];

const Page: React.FC = () => {
  const router = useRouter();

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-12 bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-950 font-sans relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-56 h-56 sm:w-80 sm:h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-1/3 right-1/4 w-48 h-48 sm:w-72 sm:h-72 bg-emerald-500/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      {/* Back Button */}
      <div className="w-full max-w-3xl mb-6 sm:mb-8 flex justify-start relative z-10">
        <button
          onClick={() => router.back()}
          className="group flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-md border border-blue-300/20
                     text-blue-100 font-medium hover:bg-white/10 hover:border-blue-300/40 transition-all duration-300"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span className="text-sm sm:text-base">Back</span>
        </button>
      </div>

      {/* Main Card */}
      <div className="bg-white/5 backdrop-blur-xl rounded-2xl shadow-md border border-white/10 w-full max-w-3xl p-6 sm:p-10 relative z-10">
        {/* Heading */}
        <div className="text-center mb-8">
          <h1 className="text-2xl sm:text-4xl font-bold text-white leading-snug bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
            What can you do after{" "}
            <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent animate-pulse inline-block">
              10th
            </span>
            ?
          </h1>

          <div className="flex items-center justify-center mt-3 mb-2 gap-2">
            <div className="h-px w-10 bg-blue-400/40"></div>
            <span className="text-3xl">🎓</span>
            <div className="h-px w-10 bg-blue-400/40"></div>
          </div>

          <p className="text-blue-200/70 text-sm sm:text-lg tracking-wide">
            Pick a path — we&apos;ll show you every option available in India
          </p>
        </div>

        {/* Tracks */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          {TRACKS.map((item) => (
            <button
              key={item.title}
              onClick={() => router.push(item.link)}
              className={`group relative flex flex-col items-start justify-between rounded-xl p-5 min-h-[140px] text-left
                          text-white shadow-xl border transition-all duration-500
                          bg-gradient-to-br ${item.colors} border-white/10
                          hover:-translate-y-1.5 hover:scale-[1.03] hover:shadow-2xl active:scale-95`}
            >
              <div className="mb-3 p-3 rounded-full bg-white/10 group-hover:bg-white/20 transition-all group-hover:rotate-6">
                {item.icon}
              </div>
              <div>
                <span className="block font-semibold text-base sm:text-lg">{item.title}</span>
                <span className="block text-xs sm:text-sm opacity-80 font-light mt-0.5">
                  {item.desc}
                </span>
              </div>
            </button>
          ))}
        </div>

        {/* Skills & Certificates — full-width, links to the complete skills catalog */}
        <button
          onClick={() => router.push("/skills")}
          className="group relative w-full flex items-center gap-4 rounded-xl p-5 text-left text-white shadow-xl
                     border border-white/10 bg-gradient-to-r from-violet-600/90 to-fuchsia-600/90
                     hover:-translate-y-1 hover:scale-[1.01] hover:shadow-2xl active:scale-95 transition-all duration-500 overflow-hidden"
        >
          <div className="p-3 rounded-full bg-white/10 group-hover:bg-white/20 transition-all group-hover:rotate-6 shrink-0">
            <Award className="w-8 h-8" strokeWidth={1.5} />
          </div>
          <div className="flex-1">
            <span className="block font-semibold text-base sm:text-lg">
              Skills & Certificates
            </span>
            <span className="block text-xs sm:text-sm opacity-80 font-light mt-0.5">
              Learn a job-ready skill and earn a certificate — 200+ courses across tech, design, trades & more
            </span>
          </div>
          <span className="transition-transform duration-300 group-hover:translate-x-1 text-xl shrink-0">
            →
          </span>
        </button>

        {/* Bottom Line */}
        <div className="mt-8 flex justify-center">
          <div className="h-1 w-20 bg-gradient-to-r from-transparent via-emerald-400/50 to-transparent rounded-full"></div>
        </div>
      </div>

      {/* Footer */}
      <p className="text-blue-200/40 text-xs sm:text-sm mt-6 z-10 text-center">
        Every path here is open to you right after Class 10
      </p>
    </section>
  );
};

export default Page;
