"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { BookOpen, Palette, Briefcase, ArrowLeft } from "lucide-react";

const Page: React.FC = () => {
  const router = useRouter();

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-12 bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-950 font-sans relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-56 h-56 sm:w-80 sm:h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-1/3 right-1/4 w-48 h-48 sm:w-72 sm:h-72 bg-indigo-500/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      {/* Back Button */}
      <div className="w-full max-w-2xl mb-6 sm:mb-8 flex justify-start relative z-10">
        <button
          onClick={() => router.back()}
          className="group flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-md border border-blue-300/20 
                     text-blue-100 font-medium hover:bg-white/10 hover:border-blue-300/40
                     transition-all duration-300"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span className="text-sm sm:text-base">Back</span>
        </button>
      </div>

      {/* Main Card */}
      <div className="bg-white/5 backdrop-blur-xl rounded-2xl shadow-md border border-white/10 w-full max-w-2xl p-6 sm:p-10 relative z-10">
        {/* Heading */}
        <div className="text-center mb-8">
          <h1 className="text-2xl sm:text-4xl font-bold text-white leading-snug bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
            Which stream did you choose in{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent animate-pulse inline-block">
              12th
            </span>
            ?
          </h1>

          <div className="flex items-center justify-center mt-3 mb-2 gap-2">
            <div className="h-px w-10 bg-blue-400/40"></div>
            <span className="text-3xl">🎓</span>
            <div className="h-px w-10 bg-blue-400/40"></div>
          </div>

          <p className="text-blue-200/70 text-sm sm:text-lg tracking-wide">
            Select your stream to continue your journey
          </p>
        </div>

        {/* Options */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {/* Option Component */}
          {[
            {
              title: "Science",
              icon: <BookOpen className="w-8 h-8" strokeWidth={1.5} />,
              colors: "from-blue-600/90 to-indigo-600/90",
              link: "/quest2/qscience",
            },
            {
              title: "Commerce",
              icon: <Briefcase className="w-8 h-8" strokeWidth={1.5} />,
              colors: "from-purple-600/90 to-pink-600/90",
              link: "/quest2/qcommerce",
            },
            {
              title: "Arts",
              icon: <Palette className="w-8 h-8" strokeWidth={1.5} />,
              colors: "from-indigo-500/90 to-purple-600/90",
              link: "/quest2/qarts",
            },
          ].map((item, i) => (
            <button
              key={i}
              onClick={() => router.push(item.link)}
              className={`group relative flex flex-col items-center justify-center rounded-xl p-5 min-h-[120px]
                          text-white shadow-xl border transition-all duration-500
                          bg-gradient-to-br ${item.colors} border-white/10
                          hover:-translate-y-2 hover:scale-[1.05] hover:shadow-2xl active:scale-95`}
            >
              <div className="mb-3 p-3 rounded-full bg-white/10 group-hover:bg-white/20 transition-all group-hover:rotate-12">
                {item.icon}
              </div>
              <span className="font-semibold text-base">{item.title}</span>
              <span className="text-xs opacity-70 uppercase">Stream</span>
            </button>
          ))}
        </div>

        {/* Bottom Line */}
        <div className="mt-8 flex justify-center">
          <div className="h-1 w-20 bg-gradient-to-r from-transparent via-blue-400/50 to-transparent rounded-full"></div>
        </div>
      </div>

      {/* Footer */}
      <p className="text-blue-200/40 text-xs sm:text-sm mt-6 z-10 text-center">
        Choose wisely to unlock your personalized path
      </p>
    </section>
  );
};

export default Page;
