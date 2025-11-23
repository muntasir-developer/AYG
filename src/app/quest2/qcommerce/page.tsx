"use client";

import { useRouter } from "next/navigation";
import { GraduationCap, Zap, ArrowLeft } from "lucide-react";
import React from "react";

const CareerPath: React.FC = () => {
  const router = useRouter();

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-950 font-sans relative overflow-hidden">
      {/* Animated Background Glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-1/4 right-1/3 w-72 h-72 bg-indigo-500/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      {/* Back Button */}
      <div className="w-full max-w-2xl mb-8 flex justify-start relative z-10">
        <button
          onClick={() => router.back()}
          className="group flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-md border border-blue-300/20 
                     text-blue-100/90 font-medium hover:bg-white/10 hover:border-blue-300/40 hover:text-white hover:shadow-lg
                     transition-all duration-300 active:scale-95"
        >
          <ArrowLeft className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1" />
          <span>Back</span>
        </button>
      </div>

      {/* Card */}
      <div
        className="relative z-10 w-full max-w-2xl p-8 sm:p-10 md:p-12 bg-white/5 backdrop-blur-2xl rounded-3xl border border-white/10 
                   shadow-md hover:border-white/20 transition-all duration-700 hover:shadow-blue-500/10 text-center"
      >
        {/* Corner borders */}
        <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-blue-400/30 rounded-tl-3xl"></div>
        <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-blue-400/30 rounded-br-3xl"></div>

        {/* Title */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-indigo-200">
          👋 What Do You Want to Learn?
        </h2>

        <p className="text-blue-200/70 text-sm sm:text-base md:text-lg mb-10 font-light max-w-lg mx-auto">
          Choose your path — whether it’s mastering academics or learning
          high-impact skills. We’ll guide you step-by-step 🚀
        </p>

        {/* Options */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Academic Button */}
          <button
            onClick={() => router.push("/quest2/qcommerce/commerce")}
            className="group flex flex-col items-start justify-between px-6 py-6 rounded-2xl bg-gradient-to-br from-blue-600/20 to-indigo-600/10 
                       border border-blue-400/20 backdrop-blur-sm hover:border-blue-400/40 transition-all duration-300
                       text-left hover:scale-[1.03]"
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-lg bg-blue-500/30 flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-blue-300" />
              </div>
              <span className="text-white text-lg font-semibold">Academic</span>
            </div>
            <p className="text-blue-200/70 text-sm font-light">
              📚 Study subjects like school & college
            </p>
          </button>

          {/* Skills Button */}
          <button
            onClick={() => router.push("/skills")}
            className="group flex flex-col items-start justify-between px-6 py-6 rounded-2xl bg-gradient-to-br from-orange-700 to-indigo-500
                       text-white font-semibold border border-white/10 shadow-lg hover:shadow-2xl hover:scale-[1.03] 
                       transition-all duration-300 text-left"
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <span className="text-lg font-semibold">Skills</span>
            </div>
            <p className="text-white/80 text-sm font-light">
              ⚡ Learn practical skills for your future
            </p>
          </button>
        </div>
      </div>

      {/* Footer Message */}
      <div className="mt-10 relative z-10 text-center">
        <p className="text-blue-200/40 text-xs sm:text-sm tracking-wide font-light mb-1">
          Choose your path wisely
        </p>
        <p className="text-blue-200/30 text-[10px] sm:text-xs tracking-wider uppercase">
          Your journey begins here
        </p>
      </div>
    </section>
  );
};

export default CareerPath;
