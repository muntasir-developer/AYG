"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import {
  GraduationCap,
  Building2,
  BookOpen,
  Landmark,
  FileText,
  Globe,
  ArrowLeft,
} from "lucide-react";
import { BOARDS } from "@/lib/boards";

const BOARD_STORAGE_KEY = "ayg_board";

const ICONS: Record<string, React.ReactNode> = {
  cbse: <Building2 className="w-5 h-5" strokeWidth={2} />,
  cisce: <BookOpen className="w-5 h-5" strokeWidth={2} />,
  state: <Landmark className="w-5 h-5" strokeWidth={2} />,
  nios: <FileText className="w-5 h-5" strokeWidth={2} />,
  ib: <Globe className="w-5 h-5" strokeWidth={2} />,
};

const Page = () => {
  const router = useRouter();

  const choose = (key?: string) => {
    if (typeof window !== "undefined") {
      if (key) localStorage.setItem(BOARD_STORAGE_KEY, key);
      else localStorage.removeItem(BOARD_STORAGE_KEY);
    }
    // Board only affects the streams path — go straight to the tailored streams.
    router.push(key ? `/quest10/streams?board=${key}` : "/quest10/streams");
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-950 font-sans relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-48 h-48 sm:w-72 sm:h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-1/3 right-1/4 w-40 h-40 sm:w-64 sm:h-64 bg-emerald-500/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      {/* Back */}
      <div className="w-full max-w-xl mb-5 sm:mb-6 flex justify-start relative z-10 px-2">
        <button
          onClick={() => router.back()}
          className="group flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-white/5 backdrop-blur-md
                     shadow-lg border border-blue-300/20 text-xs sm:text-sm text-blue-100/90 font-medium
                     hover:bg-white/10 hover:border-blue-300/40 hover:text-white transition-all duration-300 active:scale-95"
        >
          <ArrowLeft className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1" />
          <span>Back</span>
        </button>
      </div>

      {/* Card */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="w-full max-w-xl p-5 sm:p-6 md:p-8 bg-white/5 backdrop-blur-2xl rounded-2xl md:rounded-3xl border border-white/10
                   shadow-md flex flex-col items-center text-center relative z-10 mx-2"
      >
        <div className="absolute top-0 left-0 w-12 h-12 sm:w-16 sm:h-16 border-t-2 border-l-2 border-blue-400/30 rounded-tl-2xl md:rounded-tl-3xl"></div>
        <div className="absolute bottom-0 right-0 w-12 h-12 sm:w-16 sm:h-16 border-b-2 border-r-2 border-blue-400/30 rounded-br-2xl md:rounded-br-3xl"></div>

        {/* Icon */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.6, delay: 0.2, type: "spring" }}
          className="relative mb-5"
        >
          <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-2xl shadow-blue-600/50 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"></div>
            <GraduationCap className="w-7 h-7 sm:w-8 sm:h-8 text-white relative z-10" strokeWidth={1.5} />
          </div>
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-400 rounded-full animate-ping"></div>
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-400 rounded-full"></div>
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 px-2"
        >
          <span className="text-white">Which </span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">board</span>
          <span className="text-white"> did you study in?</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="text-blue-200/70 text-xs sm:text-sm mb-6 max-w-md px-2 font-light"
        >
          Your board decides which 11–12 streams and subjects you can pick — we&apos;ll tailor the guidance.
        </motion.p>

        {/* Board options */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="flex flex-col gap-2.5 sm:gap-3 w-full"
        >
          {BOARDS.map((b) => (
            <button
              key={b.key}
              onClick={() => choose(b.key)}
              className="group relative w-full py-3.5 px-5 bg-white/5 backdrop-blur-sm text-white rounded-xl shadow-lg
                         border border-blue-400/20 hover:border-emerald-400/50 hover:bg-white/10
                         hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 text-left"
            >
              <div className="flex items-center gap-3">
                <span className="p-2 rounded-lg bg-white/10 text-emerald-300 group-hover:bg-emerald-500/20 transition-colors shrink-0">
                  {ICONS[b.key]}
                </span>
                <span className="flex-1 min-w-0">
                  <span className="block font-semibold text-sm sm:text-base">{b.label}</span>
                  <span className="block text-[11px] sm:text-xs text-blue-200/60 font-light truncate">
                    {b.full}
                  </span>
                </span>
                <span className="transition-transform duration-300 group-hover:translate-x-1 text-blue-200/70">
                  →
                </span>
              </div>
            </button>
          ))}

          {/* Skip */}
          <button
            onClick={() => choose()}
            className="mt-1 text-xs sm:text-sm text-blue-200/60 hover:text-blue-100 underline underline-offset-4 transition-colors"
          >
            I&apos;m not sure / skip this
          </button>
        </motion.div>

        {/* Progress */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-6 flex flex-col items-center gap-2"
        >
          <div className="flex items-center gap-1.5">
            <span className="w-8 h-1 bg-blue-500 rounded-full"></span>
            <span className="w-8 h-1 bg-emerald-500 rounded-full"></span>
            <span className="w-6 h-1 bg-blue-400/40 rounded-full"></span>
          </div>
          <p className="text-[10px] sm:text-xs text-blue-200/50 tracking-widest uppercase font-light">
            Step 2 of 3
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Page;
