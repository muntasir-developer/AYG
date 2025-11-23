"use client";

import { useRouter } from "next/navigation";
import { GraduationCap, Zap, ArrowLeft } from "lucide-react";
import React from "react";

const CareerPath: React.FC = () => {
  const router = useRouter();

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-950 font-sans relative overflow-hidden">
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
      <div className="w-full max-w-xl mb-8 flex justify-start relative z-10">
        <button
          onClick={() => router.back()}
          className="group flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 rounded-full bg-white/5 backdrop-blur-md 
                     border border-blue-300/20 text-blue-100 font-medium 
                     hover:bg-white/10 hover:border-blue-300/40 hover:text-white hover:shadow-lg 
                     transition-all duration-300 active:scale-95"
        >
          <ArrowLeft className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1" />
          <span>Back</span>
        </button>
      </div>

      {/* Main Card */}
      <div
        className="relative z-10 w-full max-w-xl p-8 sm:p-10 bg-white/5 backdrop-blur-2xl rounded-3xl border border-white/10 
                   shadow-md text-center hover:border-white/20 transition-all duration-700 hover:shadow-blue-500/10"
      >
        {/* Decorative Corner Lines */}
        <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-blue-400/30 rounded-tl-3xl"></div>
        <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-blue-400/30 rounded-br-3xl"></div>

        {/* Title */}
        <h2 className="text-3xl sm:text-4xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-indigo-200">
          👋 Hey! What do you want to learn?
        </h2>
        <p className="text-blue-200/70 mb-10 text-sm sm:text-base max-w-md mx-auto">
          Just pick one option — we’ll guide you step by step. 🚀
        </p>

        {/* Option Buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
          {/* Academic */}
          <button
            onClick={() => router.push("/quest2/qscience/science")}
            className="group relative flex flex-col items-start justify-between px-6 py-6 sm:px-8 sm:py-8 rounded-2xl bg-gradient-to-br from-blue-600/20 to-indigo-600/10 border border-blue-400/20 backdrop-blur-sm 
                       hover:border-blue-400/40 hover:bg-blue-600/20 text-white font-bold shadow-md 
                       hover:scale-[1.03] transition-all duration-300 text-left"
          >
            <div className="flex items-center gap-3 mb-2">
              <GraduationCap className="w-7 h-7 text-blue-300 group-hover:text-blue-200 transition-colors" />
              <span className="text-lg sm:text-xl">Academic</span>
            </div>
            <span className="text-xs sm:text-sm text-blue-200/70 font-light">
              📚 Study subjects like school & college
            </span>
          </button>

          {/* Skills */}
          <button
            onClick={() => router.push("/skills")}
            className="group relative flex flex-col items-start justify-between px-6 py-6 sm:px-8 sm:py-8 rounded-2xl bg-gradient-to-r from-orange-700 to-indigo-500 
                       text-white font-bold shadow-lg border border-blue-400/20 hover:scale-[1.03] transition-all duration-300 text-left overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative flex flex-col items-start justify-between h-full w-full">
              <div className="flex items-center gap-3 mb-2">
                <Zap className="w-7 h-7" />
                <span className="text-lg sm:text-xl">Skills</span>
              </div>
              <span className="text-xs sm:text-sm opacity-90 font-light">
                ⚡ Learn practical skills for your future
              </span>
            </div>
          </button>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-10 text-center relative z-10">
        <p className="text-blue-200/40 text-xs sm:text-sm tracking-wide font-light">
          Your learning journey starts here ✨
        </p>
      </div>
    </section>
  );
};

export default CareerPath;
