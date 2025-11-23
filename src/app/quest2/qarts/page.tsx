"use client";

import { useRouter } from "next/navigation";
import { GraduationCap, Zap, ArrowLeft, Sparkles } from "lucide-react";
import React from "react";

const CareerPath: React.FC = () => {
  const router = useRouter();

  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-950 px-4 sm:px-6 lg:px-8 font-sans relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-1/3 right-1/4 w-40 h-40 bg-indigo-500/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-1/2 right-1/3 w-32 h-32 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      {/* Back Button */}
      <div className="w-full max-w-xl mb-6 sm:mb-8 flex justify-start relative z-10 px-2">
        <button
          onClick={() => router.back()}
          className="group flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-md 
                     shadow-lg border border-blue-300/20 text-sm text-blue-100/90 font-medium 
                     hover:bg-white/10 hover:border-blue-300/40 hover:text-white hover:shadow-xl
                     transition-all duration-300 active:scale-95"
        >
          <ArrowLeft className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1" />
          <span>Back</span>
        </button>
      </div>

      {/* Main Card */}
      <div
        className="w-full max-w-xl p-6 sm:p-8 bg-white/5 backdrop-blur-2xl rounded-2xl border border-white/10 
                   shadow-md flex flex-col items-center text-center relative z-10 
                   hover:border-white/20 transition-all duration-700 hover:shadow-blue-500/10"
      >
        {/* Decorative Corners */}
        <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-blue-400/30 rounded-tl-2xl"></div>
        <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-blue-400/30 rounded-br-2xl"></div>

        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-indigo-200">
          👋 Hey! What do you want to learn?
        </h2>
        <p className="text-blue-200/70 mb-8 text-sm sm:text-base max-w-md font-light leading-relaxed">
          Just pick one option — we’ll guide you step by step. 🚀
        </p>

        {/* Options */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 w-full">
          {/* Academic Button */}
          <button
            onClick={() => router.push("/quest2/qarts/arts")}
            className="group flex flex-col items-start justify-between px-5 py-6 rounded-2xl bg-gradient-to-br from-blue-600/20 to-indigo-600/10 
                       border border-blue-400/20 backdrop-blur-sm hover:border-blue-400/40 
                       hover:bg-blue-600/30 transition-all duration-300 hover:scale-[1.03] shadow-lg text-left"
          >
            <div className="flex items-center gap-3 mb-2">
              <GraduationCap className="w-7 h-7 text-blue-300 group-hover:text-white transition-colors duration-300" />
              <span className="text-lg font-semibold text-white">Academic</span>
            </div>
            <span className="text-sm text-blue-200/70">
              📚 Study subjects like school & college
            </span>
          </button>

          {/* Skills Button */}
          <button
            onClick={() => router.push("/skills")}
            className="group flex flex-col items-start justify-between px-5 py-6 rounded-2xl bg-gradient-to-br from-orange-700 to-indigo-500 
                       border border-indigo-400/20 backdrop-blur-sm hover:border-indigo-400/40 
                       hover:bg-indigo-600/30 transition-all duration-300 hover:scale-[1.03] shadow-lg text-left"
          >
            <div className="flex items-center gap-3 mb-2">
              <Zap className="w-7 h-7 text-indigo-300 group-hover:text-white transition-colors duration-300" />
              <span className="text-lg font-semibold text-white">Skills</span>
            </div>
            <span className="text-sm text-blue-200/70">
              ⚡ Learn practical skills for your future
            </span>
          </button>
        </div>

        {/* Sparkle Icon */}
        <div className="mt-8 flex justify-center">
          <Sparkles className="w-6 h-6 text-blue-300 animate-pulse" />
        </div>
      </div>

      {/* Footer Message */}
      <div className="mt-6 sm:mt-8 relative z-10 text-center px-4">
        <p className="text-blue-200/40 text-xs sm:text-sm tracking-wide font-light mb-1">
          Choose your path and start your journey
        </p>
        <p className="text-blue-200/30 text-[10px] sm:text-xs tracking-wider uppercase">
          Designed for dreamers like you ✨
        </p>
      </div>
    </section>
  );
};

export default CareerPath;
