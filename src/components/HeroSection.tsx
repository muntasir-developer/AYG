"use client";
import React, { useState, useEffect } from "react";
import {
  ArrowRight,
  Sparkles,
  TrendingUp,
  Zap,
  Target,
  Rocket,
} from "lucide-react";
import { useRouter } from "next/navigation";

const HeroSection = () => {
  const [mounted, setMounted] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleGetStarted = () => {
    router.push("/learn");
  };

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center px-4 bg-slate-950 overflow-hidden">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000,transparent)]"></div>

      {/* Dynamic Graph Lines */}
      <svg
        className="absolute inset-0 w-full h-full opacity-20"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="blueGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0" />
            <stop offset="50%" stopColor="#3b82f6" stopOpacity="1" />
            <stop offset="100%" stopColor="#f97316" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path
          d="M 0 600 Q 400 400 800 500 T 1600 400 L 1600 1000 L 0 1000 Z"
          fill="url(#blueGradient)"
          opacity="0.1"
          className={mounted ? "animate-graph" : ""}
        />
        <path
          d="M 0 600 Q 400 400 800 500 T 1600 400"
          stroke="url(#blueGradient)"
          strokeWidth="3"
          fill="none"
          className={mounted ? "animate-graph" : ""}
        />
      </svg>

      {/* Gradient Orbs */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute top-1/3 -right-20 w-96 h-96 bg-orange-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-20 left-1/2 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

      {/* Floating Elements */}
      <div className="hidden md:block absolute top-20 left-10 w-20 h-20 border-2 border-blue-500/30 rounded-xl rotate-45 animate-float"></div>
      <div className="hidden md:block absolute top-40 right-20 w-16 h-16 border-2 border-orange-500/30 rounded-full animate-float animation-delay-2000"></div>
      <div className="hidden md:block absolute bottom-40 left-20 w-12 h-12 bg-gradient-to-br from-blue-500/20 to-orange-500/20 rounded-lg animate-float animation-delay-4000"></div>

      <div className="relative z-10 max-w-7xl mx-auto pt-18 lg:pt-28 px-4">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-24 items-center">
          {/* Left Content */}
          <div className=" lg:text-left text-center">
            <div className="lg:hidden absolute top-4 left-1/2 -translate-x-1/2">
              <span className="text-3xl tracking-0">
                <span className="font-bold">AYG</span>
              </span>
            </div>

            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-blue-500/10 to-orange-500/10 border border-blue-500/20 backdrop-blur-xl mb-6 lg:mb-8">
              <Sparkles className="w-4 h-4 text-orange-400" />
              <span className="text-xs sm:text-sm font-medium bg-gradient-to-r from-blue-400 to-orange-400 bg-clip-text text-transparent">
                AI-Powered Career Intelligence
              </span>
            </div>

            {/* Hero Heading */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl font-black tracking-tight mb-4 lg:mb-6">
              <span className="block text-white">Navigate Your</span>
              <span className="block bg-gradient-to-r from-blue-400 via-blue-500 to-orange-500 bg-clip-text text-transparent">
                Career Journey
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-lg md:text-xl text-slate-400 mb-6 lg:mb-8 leading-relaxed font-light max-w-xl mx-auto lg:mx-0">
              Data-driven insights meet personalized guidance. Whether you're a
              student exploring possibilities or a professional seeking growth,
              <span className="text-slate-300">
                {" "}
                we map your path to success.
              </span>
            </p>

            {/* Feature Pills */}
            <div className="flex flex-wrap gap-2 sm:gap-3 mb-8 lg:mb-10 justify-center lg:justify-start">
              <div className="flex items-center gap-2 px-3 sm:px-4 py-2 bg-slate-800/50 border border-slate-700 rounded-full">
                <Zap className="w-3 h-3 sm:w-4 sm:h-4 text-blue-400" />
                <span className="text-xs sm:text-sm text-slate-300">
                  Instant Analysis
                </span>
              </div>
              <div className="flex items-center gap-2 px-3 sm:px-4 py-2 bg-slate-800/50 border border-slate-700 rounded-full">
                <Target className="w-3 h-3 sm:w-4 sm:h-4 text-orange-400" />
                <span className="text-xs sm:text-sm text-slate-300">
                  Personalized Routes
                </span>
              </div>
              <div className="flex items-center gap-2 px-3 sm:px-4 py-2 bg-slate-800/50 border border-slate-700 rounded-full">
                <Rocket className="w-3 h-3 sm:w-4 sm:h-4 text-blue-400" />
                <span className="text-xs sm:text-sm text-slate-300">
                  Fast Results
                </span>
              </div>
            </div>

            {/* CTA Button */}
            <button
              onClick={handleGetStarted}
              className="group relative inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-10 py-3 sm:py-5 bg-gradient-to-r from-blue-600 to-orange-600 rounded-xl sm:rounded-2xl text-base sm:text-lg font-bold text-white shadow-[0_0_50px_rgba(59,130,246,0.3)] hover:shadow-[0_0_80px_rgba(249,115,22,0.4)] transition-all duration-500 hover:scale-105 w-full sm:w-auto justify-center"
            >
              <span>Start Your Journey</span>
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-2 transition-transform duration-300" />
              <div className="absolute inset-0 rounded-xl sm:rounded-2xl bg-gradient-to-r from-blue-600 to-orange-600 blur-xl opacity-50 group-hover:opacity-75 transition-opacity -z-10"></div>
            </button>

            {/* Stats */}
            <div className="flex items-center gap-4 sm:gap-8 mt-8 lg:mt-10 text-xs sm:text-sm justify-center lg:justify-start flex-wrap">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2 sm:-space-x-3">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 border-2 border-slate-950"></div>
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-orange-500 to-orange-700 border-2 border-slate-950"></div>
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-blue-400 to-purple-600 border-2 border-slate-950"></div>
                </div>
                <span className="text-slate-400 font-medium">15K+ Users</span>
              </div>
              <div className="h-4 sm:h-6 w-px bg-slate-700"></div>
              <div className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 text-green-400" />
                <span className="text-slate-400 font-medium">98% Success</span>
              </div>
            </div>
          </div>

          {/* Right Content - Interactive Graph/Cards */}
          <div className="pb-8 sm:pb-12 lg:pb-2 sm:p-2 flex items-center justify-center">
            <div className="max-w-8xl w-full">
              <div className="relative mt-8 lg:mt-0">
                {/* Animated Success Graph Card */}
                <div className="relative bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700 rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 shadow-2xl overflow-hidden">
                  <div className="flex items-center justify-between mb-4 sm:mb-6 flex-wrap gap-3 relative z-10">
                    <h3 className="text-white font-bold text-base sm:text-lg">
                      Career Growth Projection
                    </h3>
                    <div className="flex items-center gap-2 px-3 py-1 bg-green-500/10 border border-green-500/30 rounded-full">
                      <TrendingUp className="w-3 h-3 sm:w-4 sm:h-4 text-green-400" />
                      <span className="text-green-400 text-xs sm:text-sm font-semibold">
                        +127%
                      </span>
                    </div>
                  </div>

                  {/* SVG Growth Curves */}
                  <div className="relative h-48 sm:h-64 mb-6 sm:mb-8">
                    {/* Grid lines */}
                    <div className="absolute inset-0 flex flex-col justify-between py-2">
                      {[...Array(5)].map((_, i) => (
                        <div
                          key={i}
                          className="w-full h-px bg-slate-800/50"
                        ></div>
                      ))}
                    </div>

                    <svg
                      className="absolute inset-0 w-full h-full"
                      viewBox="0 0 1200 300"
                      preserveAspectRatio="none"
                    >
                      {/* Glow effects */}
                      <defs>
                        <filter id="glow">
                          <feGaussianBlur
                            stdDeviation="4"
                            result="coloredBlur"
                          />
                          <feMerge>
                            <feMergeNode in="coloredBlur" />
                            <feMergeNode in="SourceGraphic" />
                          </feMerge>
                        </filter>

                        <linearGradient
                          id="blueGradient"
                          x1="0%"
                          y1="0%"
                          x2="100%"
                          y2="0%"
                        >
                          <stop offset="0%" stopColor="#3B82F6" />
                          <stop offset="50%" stopColor="#6366F1" />
                          <stop offset="100%" stopColor="#8B5CF6" />
                        </linearGradient>

                        <linearGradient
                          id="blueAreaGradient"
                          x1="0%"
                          y1="0%"
                          x2="0%"
                          y2="100%"
                        >
                          <stop
                            offset="0%"
                            stopColor="#3B82F6"
                            stopOpacity="0.3"
                          />
                          <stop
                            offset="100%"
                            stopColor="#3B82F6"
                            stopOpacity="0"
                          />
                        </linearGradient>

                        <linearGradient
                          id="grayGradient"
                          x1="0%"
                          y1="0%"
                          x2="100%"
                          y2="0%"
                        >
                          <stop offset="0%" stopColor="#6B7280" />
                          <stop offset="100%" stopColor="#9CA3AF" />
                        </linearGradient>

                        <linearGradient
                          id="grayAreaGradient"
                          x1="0%"
                          y1="0%"
                          x2="0%"
                          y2="100%"
                        >
                          <stop
                            offset="0%"
                            stopColor="#6B7280"
                            stopOpacity="0.2"
                          />
                          <stop
                            offset="100%"
                            stopColor="#6B7280"
                            stopOpacity="0"
                          />
                        </linearGradient>
                      </defs>

                      {/* Area fill for CodeHelp */}
                      <path
                        d="M 0 280 Q 200 240 400 180 T 800 60 L 1200 20 L 1200 300 L 0 300 Z"
                        fill="url(#blueAreaGradient)"
                        className={`transition-all duration-2000 ${
                          mounted ? "opacity-100" : "opacity-0"
                        }`}
                        style={{
                          transition: "opacity 1s ease-out 0.5s",
                        }}
                      />

                      {/* Area fill for Other */}
                      <path
                        d="M 0 280 Q 200 260 400 220 T 800 160 L 1200 140 L 1200 300 L 0 300 Z"
                        fill="url(#grayAreaGradient)"
                        className={`transition-all duration-2000 ${
                          mounted ? "opacity-100" : "opacity-0"
                        }`}
                        style={{
                          transition: "opacity 1s ease-out 0.8s",
                        }}
                      />

                      {/* CodeHelp curve - Blue/Purple gradient with glow */}
                      <path
                        d="M 0 280 Q 200 240 400 180 T 800 60 L 1200 20"
                        fill="none"
                        stroke="url(#blueGradient)"
                        strokeWidth="4"
                        strokeLinecap="round"
                        filter="url(#glow)"
                        className={`transition-all duration-2000 ${
                          mounted ? "opacity-100" : "opacity-0"
                        }`}
                        style={{
                          strokeDasharray: mounted ? "none" : "2000",
                          strokeDashoffset: mounted ? "0" : "2000",
                          transition:
                            "stroke-dashoffset 2s ease-out, opacity 0.5s",
                        }}
                      />

                      {/* Animated dots on CodeHelp line */}
                      <circle
                        cx="1200"
                        cy="20"
                        r="6"
                        fill="#8B5CF6"
                        className={`transition-all duration-1000 ${
                          mounted
                            ? "opacity-100 scale-100"
                            : "opacity-0 scale-0"
                        }`}
                        style={{
                          transition:
                            "opacity 0.5s ease-out 2s, transform 0.5s ease-out 2s",
                          transformOrigin: "center",
                        }}
                      >
                        <animate
                          attributeName="r"
                          values="6;8;6"
                          dur="2s"
                          repeatCount="indefinite"
                        />
                      </circle>

                      {/* Other curve - Gray gradient */}
                      <path
                        d="M 0 280 Q 200 260 400 220 T 800 160 L 1200 140"
                        fill="none"
                        stroke="url(#grayGradient)"
                        strokeWidth="4"
                        strokeLinecap="round"
                        className={`transition-all duration-2000 ${
                          mounted ? "opacity-70" : "opacity-0"
                        }`}
                        style={{
                          strokeDasharray: mounted ? "none" : "2000",
                          strokeDashoffset: mounted ? "0" : "2000",
                          transition:
                            "stroke-dashoffset 2s ease-out 0.3s, opacity 0.5s 0.3s",
                        }}
                      />

                      {/* Dot on Other line */}
                      <circle
                        cx="1200"
                        cy="140"
                        r="5"
                        fill="#9CA3AF"
                        className={`transition-all duration-1000 ${
                          mounted
                            ? "opacity-100 scale-100"
                            : "opacity-0 scale-0"
                        }`}
                        style={{
                          transition:
                            "opacity 0.5s ease-out 2.3s, transform 0.5s ease-out 2.3s",
                          transformOrigin: "center",
                        }}
                      />
                    </svg>

                    {/* CodeHelp badge on curve */}
                    <div
                      className={`absolute transition-all duration-1000 delay-1000 ${
                        mounted
                          ? "opacity-100 translate-y-0 scale-100"
                          : "opacity-0 translate-y-4 scale-95"
                      }`}
                      style={{ top: "8%", right: "6%" }}
                    >
                      <div className="relative flex items-center gap-2 backdrop-blur-sm px-4 py-2 rounded-full border border-blue-400/30 shadow-2xl">
                        <div className="absolute inset-0 rounded-full blur-xl opacity-50"></div>

                        <span className="relative text-white font-bold text-sm tracking-wide">
                          AYG
                        </span>
                        <div className="relative w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      </div>
                    </div>

                    {/* Other label */}
                    <div
                      className={`absolute transition-all duration-1000 delay-1200 ${
                        mounted
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 translate-y-4"
                      }`}
                      style={{ top: "48%", right: "6%" }}
                    >
                      <div className="flex items-center gap-2 bg-slate-800/80 backdrop-blur-sm px-3 py-1.5 rounded-full border border-slate-600/50">
                        <span className="text-gray-300 font-medium text-sm">
                          Other
                        </span>
                        <div className="w-1.5 h-1.5 bg-gray-500 rounded-full"></div>
                      </div>
                    </div>

                    {/* Y-axis */}
                    <div className="absolute left-0 top-0 bottom-0 flex items-center">
                      <div className="h-full w-px bg-slate-700"></div>
                    </div>

                    {/* X-axis with month labels */}
                    <div className="absolute left-0 right-0 bottom-[-9px]">
                      <div className="w-full h-px bg-slate-700 mb-2"></div>
                      <div className="flex justify-between px-2 text-slate-500 text-[10px] sm:text-xs">
                        <span>0</span>
                        <span>1M</span>
                        <span>2M</span>
                        <span>3M</span>
                        <span>4M</span>
                        <span>5M</span>
                        <span>6M</span>
                      </div>
                    </div>
                  </div>

                  {/* Path Cards Below */}
                  <div className="grid grid-cols-2 gap-3 sm:gap-4 relative z-10">
                    <div className="bg-slate-800/50 border border-blue-500/30 rounded-lg sm:rounded-xl p-3 sm:p-4 hover:border-blue-500 transition-colors cursor-pointer">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg flex items-center justify-center mb-2 sm:mb-3">
                        <svg
                          className="w-4 h-4 sm:w-5 sm:h-5 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                          />
                        </svg>
                      </div>
                      <h4 className="text-white font-semibold text-xs sm:text-sm mb-1">
                        Student
                      </h4>
                      <p className="text-slate-400 text-[10px] sm:text-xs">
                        Academic pathways
                      </p>
                    </div>

                    <div className="bg-slate-800/50 border border-orange-500/30 rounded-lg sm:rounded-xl p-3 sm:p-4 hover:border-orange-500 transition-colors cursor-pointer">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-orange-500 to-orange-700 rounded-lg flex items-center justify-center mb-2 sm:mb-3">
                        <svg
                          className="w-4 h-4 sm:w-5 sm:h-5 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          />
                        </svg>
                      </div>
                      <h4 className="text-white font-semibold text-xs sm:text-sm mb-1">
                        Professional
                      </h4>
                      <p className="text-slate-400 text-[10px] sm:text-xs">
                        Career advancement
                      </p>
                    </div>
                  </div>
                </div>

                {/* Floating Stat Cards */}
                <div className="hidden lg:block absolute -top-8 -right-6 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-2xl border border-blue-500/50 animate-bounce z-20">
                  <div className="text-white text-lg sm:text-2xl font-bold">
                    2.5K+
                  </div>
                  <div className="text-blue-200 text-xs sm:text-sm">
                    Success Stories
                  </div>
                </div>

                <div
                  className="hidden lg:block absolute -bottom-6 -left-16 bg-gradient-to-br from-orange-600 to-orange-700 rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-2xl border border-orange-500/50 animate-bounce z-20"
                  style={{ animationDelay: "0.5s" }}
                >
                  <div className="text-white text-lg sm:text-2xl font-bold">
                    95%
                  </div>
                  <div className="text-orange-200 text-xs sm:text-sm">
                    Match Rate
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom animations */}
      <style jsx>{`
        @keyframes blob {
          0%,
          100% {
            transform: translate(0, 0) scale(1);
          }
          25% {
            transform: translate(20px, -50px) scale(1.1);
          }
          50% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          75% {
            transform: translate(50px, 50px) scale(1.05);
          }
        }
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(5deg);
          }
        }
        @keyframes graph {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 0.2;
            transform: translateY(0);
          }
        }
        .animate-blob {
          animation: blob 20s infinite;
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-graph {
          animation: graph 2s ease-out forwards;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
