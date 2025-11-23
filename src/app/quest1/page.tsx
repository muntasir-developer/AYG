"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { GraduationCap, CheckCircle, Clock } from "lucide-react";

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

      {/* Back Button */}
      <div className="w-full max-w-xl mb-5 sm:mb-6 md:mb-8 flex justify-start relative z-10 px-2">
        <button
          onClick={() => router.back()}
          className="group flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 md:px-5 md:py-2.5 rounded-full bg-white/5 backdrop-blur-md 
                     shadow-lg border border-blue-300/20 text-xs sm:text-sm md:text-base text-blue-100/90 font-medium 
                     hover:bg-white/10 hover:border-blue-300/40 hover:text-white hover:shadow-xl
                     transition-all duration-300 active:scale-95"
        >
          <span className="transition-transform duration-300 group-hover:-translate-x-1">
            ←
          </span>
          <span>Back</span>
        </button>
      </div>

      {/* Main Card */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="w-full max-w-xl p-5 sm:p-6 md:p-8 lg:p-10 bg-white/5 backdrop-blur-2xl rounded-xl sm:rounded-2xl md:rounded-3xl border border-white/10 
                   shadow-md flex flex-col items-center text-center relative z-10 
                   hover:border-white/20 transition-all duration-700 hover:shadow-blue-500/10 mx-2"
      >
        {/* Decorative Corner Elements */}
        <div className="absolute top-0 left-0 w-12 h-12 sm:w-16 sm:h-16 border-t-2 border-l-2 border-blue-400/30 rounded-tl-xl sm:rounded-tl-2xl md:rounded-tl-3xl"></div>
        <div className="absolute bottom-0 right-0 w-12 h-12 sm:w-16 sm:h-16 border-b-2 border-r-2 border-blue-400/30 rounded-br-xl sm:rounded-br-2xl md:rounded-br-3xl"></div>

        {/* Icon with Animation */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.6, delay: 0.2, type: "spring" }}
          className="relative mb-5 sm:mb-6"
        >
          <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-xl sm:rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-2xl shadow-blue-600/50 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"></div>
            <GraduationCap
              className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 text-white relative z-10"
              strokeWidth={1.5}
            />
          </div>
          <div className="absolute -top-1 -right-1 w-2.5 h-2.5 sm:w-3 sm:h-3 bg-cyan-400 rounded-full animate-ping"></div>
          <div className="absolute -top-1 -right-1 w-2.5 h-2.5 sm:w-3 sm:h-3 bg-cyan-400 rounded-full"></div>
        </motion.div>

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2 sm:mb-3 leading-tight px-2">
            Your Educational Journey
          </h1>
          <div className="flex items-center justify-center gap-2 mb-3 sm:mb-4">
            <div className="h-px w-8 sm:w-12 bg-gradient-to-r from-transparent to-blue-400/50"></div>
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-400 rounded-full"></div>
            <div className="h-px w-8 sm:w-12 bg-gradient-to-l from-transparent to-blue-400/50"></div>
          </div>
        </motion.div>

        {/* Question */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-lg sm:text-xl md:text-2xl font-semibold mb-2 px-2"
        >
          <span className="text-white">Have you completed </span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400 inline-block">
            Class 12th
          </span>
          <span className="text-white">?</span>
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-blue-200/70 text-xs sm:text-sm mb-6 sm:mb-8 max-w-md px-2 sm:px-4 font-light"
        >
          Help us personalize your learning experience and recommend the perfect
          path forward
        </motion.p>

        {/* Options */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col gap-3 sm:gap-3.5 w-full"
        >
          {/* Yes Button */}
          <button
            onClick={() => router.push("/quest2")}
            className="group relative w-full py-3.5 sm:py-4 px-5 sm:px-6 bg-gradient-to-r from-blue-600 to-indigo-600 
                       text-white font-semibold text-sm sm:text-base rounded-xl sm:rounded-xl shadow-xl shadow-blue-500/30
                       hover:shadow-2xl hover:shadow-blue-500/50 hover:scale-[1.02] active:scale-[0.98]
                       transition-all duration-300 overflow-hidden border border-blue-400/20"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative flex items-center justify-center gap-2 sm:gap-3">
              <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5" strokeWidth={2} />
              <span>Yes, I have passed 12th</span>
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </div>
          </button>

          {/* No Button */}
          <button
            onClick={() => router.push("/no")}
            className="group relative w-full py-3.5 sm:py-4 px-5 sm:px-6 bg-white/5 backdrop-blur-sm
                       text-white font-semibold text-sm sm:text-base rounded-xl sm:rounded-xl shadow-lg 
                       border-2 border-blue-400/30 hover:border-blue-400/50 hover:bg-white/10
                       hover:shadow-xl hover:scale-[1.02] active:scale-[0.98]
                       transition-all duration-300 overflow-hidden"
          >
            <div className="relative flex items-center justify-center gap-2 sm:gap-3">
              <Clock className="w-4 h-4 sm:w-5 sm:h-5" strokeWidth={2} />
              <span>Not yet, still studying</span>
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </div>
          </button>
        </motion.div>

        {/* Progress Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-6 sm:mt-8 flex flex-col items-center gap-2 sm:gap-3"
        >
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1.5">
              <span className="w-8 h-1 sm:w-10 sm:h-1 bg-blue-500 rounded-full"></span>
              <span className="w-6 h-1 sm:w-8 sm:h-1 bg-blue-400/40 rounded-full"></span>
              <span className="w-6 h-1 sm:w-8 sm:h-1 bg-blue-400/40 rounded-full"></span>
            </div>
          </div>
          <p className="text-[10px] sm:text-xs text-blue-200/50 tracking-widest uppercase font-light">
            Step 1 of 3
          </p>
        </motion.div>

        {/* Bottom Decorative Line */}
        <div className="mt-5 sm:mt-6 flex justify-center">
          <div className="h-1 w-20 sm:w-24 bg-gradient-to-r from-transparent via-blue-400/50 to-transparent rounded-full"></div>
        </div>
      </motion.div>

      {/* Footer Help Text */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="text-blue-200/40 text-xs sm:text-sm mt-6 sm:mt-8 relative z-10 tracking-wide font-light px-4 text-center"
      >
        Your response helps us guide you better
      </motion.p>
    </section>
  );
};

export default Page;
