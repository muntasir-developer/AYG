"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { Rocket, Sparkles, ArrowLeft, Star, Zap } from "lucide-react";

const Page = () => {
  const router = useRouter();

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-950 font-sans relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-1/3 right-1/4 w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72 bg-indigo-500/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-1/2 right-1/3 w-32 h-32 sm:w-48 sm:h-48 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      {/* Floating Stars */}
      <div className="absolute inset-0 pointer-events-none">
        <Star
          className="absolute top-20 left-10 w-4 h-4 text-blue-400/40 animate-pulse"
          style={{ animationDelay: "0.5s" }}
        />
        <Star
          className="absolute top-40 right-20 w-3 h-3 text-indigo-400/30 animate-pulse"
          style={{ animationDelay: "1.5s" }}
        />
        <Sparkles
          className="absolute bottom-32 left-1/4 w-5 h-5 text-cyan-400/40 animate-pulse"
          style={{ animationDelay: "2.5s" }}
        />
        <Zap
          className="absolute top-1/3 right-1/4 w-4 h-4 text-blue-400/30 animate-pulse"
          style={{ animationDelay: "1s" }}
        />
      </div>

      {/* Back Button */}
      <div className="w-full max-w-xl mb-5 sm:mb-6 md:mb-8 flex justify-start relative z-10 px-2">
        <button
          onClick={() => router.push("/")}
          className="group flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 md:px-5 md:py-2.5 rounded-full bg-white/5 backdrop-blur-md 
                     shadow-lg border border-blue-300/20 text-xs sm:text-sm md:text-base text-blue-100/90 font-medium 
                     hover:bg-white/10 hover:border-blue-300/40 hover:text-white hover:shadow-xl
                     transition-all duration-300 active:scale-95"
        >
          <ArrowLeft className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform duration-300 group-hover:-translate-x-1" />
          <span>Back</span>
        </button>
      </div>

      {/* Main Card */}

      <div
        className="w-full max-w-xl p-4 sm:p-5 md:p-6 bg-white/5 backdrop-blur-2xl rounded-xl sm:rounded-2xl border border-white/10 
             shadow-md flex flex-col items-center text-center relative z-10 
             hover:border-white/20 transition-all duration-700 hover:shadow-blue-500/10 mx-2"
      >
        {/* Decorative Corner Elements */}
        <div className="absolute top-0 left-0 w-10 h-10 sm:w-12 sm:h-12 border-t-2 border-l-2 border-blue-400/30 rounded-tl-xl sm:rounded-tl-2xl"></div>
        <div className="absolute bottom-0 right-0 w-10 h-10 sm:w-12 sm:h-12 border-b-2 border-r-2 border-blue-400/30 rounded-br-xl sm:rounded-br-2xl"></div>

        {/* Animated Rocket Icon */}
        <div className="relative mb-4 sm:mb-5">
          <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-blue-500 via-indigo-600 to-purple-600 flex items-center justify-center shadow-2xl shadow-blue-600/50 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"></div>
            <div className="absolute inset-0 animate-ping bg-blue-400/30 rounded-2xl sm:rounded-3xl"></div>
            <Rocket
              className="w-7 h-7 sm:w-8 sm:h-8 text-white relative z-10 animate-pulse"
              strokeWidth={1.5}
            />
          </div>
          <div className="absolute -bottom-1 -right-1 w-5 h-5 sm:w-6 sm:h-6 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center">
            <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
          </div>
        </div>

        {/* Main Heading */}
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-1 sm:mb-2 leading-tight px-2">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-indigo-200">
            Coming Soon
          </span>
        </h1>

        {/* Subheading */}
        <h2 className="text-base sm:text-lg md:text-xl font-semibold text-white mb-2 sm:mb-3 px-2">
          We're Building Something Extraordinary
        </h2>

        {/* Description */}
        <p className="text-blue-200/70 text-xs sm:text-sm md:text-base mb-4 sm:mb-5 max-w-xs px-2 sm:px-3 font-light leading-relaxed">
          Our team is crafting an amazing experience tailored just for you.
        </p>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 w-full mb-4 sm:mb-5">
          {/* Feature 1 */}
          <div className="p-3 rounded-xl bg-gradient-to-br from-blue-600/20 to-indigo-600/10 border border-blue-400/20 backdrop-blur-sm hover:border-blue-400/40 transition-all duration-300">
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-blue-500/30 flex items-center justify-center mb-1 sm:mb-2">
              <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-300" />
            </div>
            <h3 className="text-xs sm:text-sm font-semibold text-white mb-1">
              Innovative Features
            </h3>
            <p className="text-[10px] sm:text-xs text-blue-200/60 font-light">
              Cutting-edge tools designed for your success
            </p>
          </div>

          {/* Feature 2 */}
          <div className="p-3 rounded-xl bg-gradient-to-br from-indigo-600/20 to-purple-600/10 border border-indigo-400/20 backdrop-blur-sm hover:border-indigo-400/40 transition-all duration-300">
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-indigo-500/30 flex items-center justify-center mb-1 sm:mb-2">
              <Zap className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-indigo-300" />
            </div>
            <h3 className="text-xs sm:text-sm font-semibold text-white mb-1">
              Lightning Fast
            </h3>
            <p className="text-[10px] sm:text-xs text-blue-200/60 font-light">
              Optimized performance for seamless experience
            </p>
          </div>
        </div>

        {/* CTA Button */}
        <button
          onClick={() => router.push("/")}
          className="group relative w-full py-3 sm:py-3.5 px-4 sm:px-5 bg-gradient-to-r from-blue-600 to-indigo-600 
               text-white font-semibold text-xs sm:text-sm rounded-xl shadow-xl shadow-blue-500/30
               hover:shadow-2xl hover:shadow-blue-500/50 hover:scale-[1.02] active:scale-[0.98]
               transition-all duration-300 overflow-hidden border border-blue-400/20"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="relative flex items-center justify-center gap-2">
            <span>Return to Homepage</span>
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </div>
        </button>
      </div>

      {/* Footer Message */}
      <div className="mt-6 sm:mt-8 relative z-10 text-center px-4">
        <p className="text-blue-200/40 text-xs sm:text-sm tracking-wide font-light mb-2">
          Something amazing is on the horizon
        </p>
        <p className="text-blue-200/30 text-[10px] sm:text-xs tracking-wider uppercase">
          Stay tuned for updates
        </p>
      </div>
    </section>
  );
};

export default Page;
