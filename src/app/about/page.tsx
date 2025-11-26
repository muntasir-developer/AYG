"use client";
import React, { useState, useEffect } from "react";

const AboutPage = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="w-full min-h-screen bg-black text-white relative overflow-hidden lg:pt-6 font-sans">
      {/* Advanced Background System */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-950/50 via-black to-orange-950/50">
        {/* Dynamic Grid */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.15) 2px, transparent 2px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.15) 2px, transparent 2px),
              linear-gradient(rgba(249, 115, 22, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(249, 115, 22, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: "100px 100px, 100px 100px, 20px 20px, 20px 20px",
            backgroundPosition: "-2px -2px, -2px -2px, -1px -1px, -1px -1px",
          }}
        ></div>

        {/* Scanline Effect */}
        <div
          className="absolute inset-0 opacity-5 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(transparent 50%, rgba(59, 130, 246, 0.5) 50%)",
            backgroundSize: "100% 4px",
            animation: "scan 8s linear infinite",
          }}
        ></div>
      </div>

      {/* Interactive Mouse Follow Light */}
      <div
        className="absolute w-[600px] h-[600px] rounded-full pointer-events-none transition-all duration-300 ease-out"
        style={{
          left: mousePosition.x - 300,
          top: mousePosition.y - 300,
          background:
            "radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      ></div>

      {/* Animated Orbs with Enhanced Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-orange-500/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/3 w-72 h-72 bg-cyan-400/15 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-10 right-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1.5s" }}
        ></div>
      </div>

      {/* Enhanced Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className={`absolute rounded-full ${
              i % 3 === 0
                ? "bg-blue-400/40"
                : i % 3 === 1
                ? "bg-orange-400/40"
                : "bg-cyan-400/40"
            }`}
            style={{
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${
                5 + Math.random() * 10
              }s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          ></div>
        ))}
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translate(0, 0) rotate(0deg); opacity: 0; }
          25% { opacity: 1; }
          50% { transform: translate(100px, -150px) rotate(180deg); opacity: 1; }
          75% { opacity: 1; }
          100% { transform: translate(0, 0) rotate(360deg); opacity: 0; }
        }
        @keyframes glow {
          0%, 100% { box-shadow: 0 0 30px rgba(59, 130, 246, 0.6), 0 0 60px rgba(59, 130, 246, 0.3); }
          50% { box-shadow: 0 0 50px rgba(249, 115, 22, 0.8), 0 0 100px rgba(249, 115, 22, 0.4); }
        }
        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-100px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(100px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes slideInUp {
          from { opacity: 0; transform: translateY(50px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes scan {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100%); }
        }
        @keyframes shimmer {
          0% { background-position: -1000px 0; }
          100% { background-position: 1000px 0; }
        }
        .animate-shimmer {
          background: linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.3), transparent);
          background-size: 1000px 100%;
          animation: shimmer 3s infinite;
        }
      `}</style>

      {/* Content Container */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16 lg:py-20">
        {/* Top Decorative Line */}
        <div
          className={`mb-12 transition-all duration-1000 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="flex items-center gap-4">
            <div className="h-[2px] flex-1 bg-gradient-to-r from-transparent via-blue-500 to-cyan-400"></div>
            <div className="flex gap-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
              <div
                className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"
                style={{ animationDelay: "0.2s" }}
              ></div>
              <div
                className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"
                style={{ animationDelay: "0.4s" }}
              ></div>
            </div>
            <div className="h-[2px] flex-1 bg-gradient-to-l from-transparent via-orange-500 to-orange-400"></div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-20 items-center">
          {/* Image Section */}
          <div
            className={`flex justify-center lg:justify-end order-2 lg:order-1 px-4 sm:px-0 transition-all duration-1000 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
            style={{
              animation: isVisible ? "slideInLeft 1s ease-out" : "none",
            }}
          >
            <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-none">
              {/* Hexagonal Frame */}
              <div className="absolute inset-0 flex items-center justify-center">
                <svg className="w-full h-full opacity-30" viewBox="0 0 400 400">
                  <polygon
                    points="200,20 350,100 350,280 200,360 50,280 50,100"
                    fill="none"
                    stroke="url(#hexGradient)"
                    strokeWidth="2"
                    className="animate-pulse"
                  />
                  <defs>
                    <linearGradient
                      id="hexGradient"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="100%"
                    >
                      <stop offset="0%" stopColor="#3b82f6" />
                      <stop offset="50%" stopColor="#06b6d4" />
                      <stop offset="100%" stopColor="#f97316" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>

              {/* Rotating Border Effect */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500 via-cyan-400 to-orange-500 blur-3xl opacity-60 animate-pulse"></div>

              {/* Corner Brackets - Enhanced */}
              <div className="absolute top-0 left-0 w-8 h-8 sm:w-12 sm:h-12">
                <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-cyan-400 to-transparent"></div>
                <div className="absolute top-0 left-0 h-full w-[3px] bg-gradient-to-b from-cyan-400 to-transparent"></div>
              </div>
              <div className="absolute top-0 right-0 w-8 h-8 sm:w-12 sm:h-12">
                <div className="absolute top-0 right-0 w-full h-[3px] bg-gradient-to-l from-orange-400 to-transparent"></div>
                <div className="absolute top-0 right-0 h-full w-[3px] bg-gradient-to-b from-orange-400 to-transparent"></div>
              </div>
              <div className="absolute bottom-0 left-0 w-8 h-8 sm:w-12 sm:h-12">
                <div className="absolute bottom-0 left-0 w-full h-[3px] bg-gradient-to-r from-blue-400 to-transparent"></div>
                <div className="absolute bottom-0 left-0 h-full w-[3px] bg-gradient-to-t from-blue-400 to-transparent"></div>
              </div>
              <div className="absolute bottom-0 right-0 w-8 h-8 sm:w-12 sm:h-12">
                <div className="absolute bottom-0 right-0 w-full h-[3px] bg-gradient-to-l from-orange-400 to-transparent"></div>
                <div className="absolute bottom-0 right-0 h-full w-[3px] bg-gradient-to-t from-orange-400 to-transparent"></div>
              </div>

              {/* Main Image Container */}
              <div className="relative group">
                {/* Shimmer Effect Overlay */}
                <div className="absolute inset-0 rounded-2xl overflow-hidden">
                  <div className="absolute inset-0 animate-shimmer"></div>
                </div>

                <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-orange-600 rounded-2xl opacity-80 group-hover:opacity-100 transition-opacity duration-500"></div>
                <img
                  src="/muntasir.png"
                  alt="Founder"
                  className="relative rounded-2xl w-full h-auto object-cover border-2 border-cyan-400/50 group-hover:scale-[1.02] transition-all duration-700 shadow-2xl"
                  style={{ animation: "glow 4s ease-in-out infinite" }}
                />

                {/* Status Indicators */}
                <div className="absolute top-4 right-4 flex flex-col gap-2">
                  <div className="bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-cyan-400/50 flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-xs text-cyan-100 font-mono">
                      ONLINE
                    </span>
                  </div>
                </div>

                {/* Enhanced Badge */}
                <div className="absolute -bottom-4 sm:-bottom-6 left-1/2 -translate-x-1/2 group/badge">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-cyan-500 to-orange-600 rounded-full blur-lg opacity-75"></div>
                  <div className="relative bg-gradient-to-r from-blue-600 via-cyan-500 to-orange-600 px-6 sm:px-10 py-2.5 sm:py-3.5 rounded-full shadow-2xl border-2 border-cyan-400/60 backdrop-blur-xl group-hover/badge:scale-105 transition-transform duration-300">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                      <p className="text-xs sm:text-sm font-bold text-white tracking-widest uppercase whitespace-nowrap">
                        Founder – AYG
                      </p>
                      <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Text Section */}
          <div
            className={`space-y-6 sm:space-y-8 order-1 lg:order-2 transition-all duration-1000 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
            style={{
              animation: isVisible
                ? "slideInRight 1s ease-out 0.2s backwards"
                : "none",
            }}
          >
            {/* Header */}
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="flex gap-1">
                  <div className="w-1 sm:w-1.5 h-6 sm:h-8 bg-blue-500 rounded-full animate-pulse"></div>
                  <div
                    className="w-1 sm:w-1.5 h-6 sm:h-8 bg-cyan-400 rounded-full animate-pulse"
                    style={{ animationDelay: "0.2s" }}
                  ></div>
                  <div
                    className="w-1 sm:w-1.5 h-6 sm:h-8 bg-orange-500 rounded-full animate-pulse"
                    style={{ animationDelay: "0.4s" }}
                  ></div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-cyan-400 font-bold text-[10px] sm:text-xs md:text-sm tracking-widest uppercase font-mono">
                    {">"} SYSTEM.INIT
                  </span>
                  <div className="flex gap-1">
                    <div className="w-1 h-1 bg-cyan-400 rounded-full animate-pulse"></div>
                    <div
                      className="w-1 h-1 bg-cyan-400 rounded-full animate-pulse"
                      style={{ animationDelay: "0.1s" }}
                    ></div>
                    <div
                      className="w-1 h-1 bg-cyan-400 rounded-full animate-pulse"
                      style={{ animationDelay: "0.2s" }}
                    ></div>
                  </div>
                </div>
              </div>

              <div className="relative inline-block">
                <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black leading-none tracking-tight relative z-10">
                  <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-orange-400 bg-clip-text text-transparent">
                    AYG
                  </span>
                </h1>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-cyan-300 to-orange-400 blur-2xl opacity-50"></div>
              </div>

              <div className="flex items-center gap-2 sm:gap-3">
                <div className="h-[2px] sm:h-[3px] w-16 sm:w-24 bg-gradient-to-r from-blue-500 via-cyan-400 to-transparent rounded-full"></div>
                <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-light text-cyan-100 tracking-wide">
                  Achieve Your Goal
                </p>
              </div>
            </div>

            {/* Mission Card */}
            <div
              className="relative group"
              style={{ animation: "slideInUp 0.6s ease-out 0.4s backwards" }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-orange-600/20 rounded-xl sm:rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              <div className="relative bg-gradient-to-br from-slate-900/90 to-slate-800/60 backdrop-blur-2xl rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 border-2 border-cyan-400/30 shadow-2xl hover:border-cyan-400/60 transition-all duration-500 overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl"></div>
                <div className="absolute top-2 sm:top-3 right-2 sm:right-3 flex gap-1.5">
                  <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                  <div
                    className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"
                    style={{ animationDelay: "0.2s" }}
                  ></div>
                  <div
                    className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"
                    style={{ animationDelay: "0.4s" }}
                  ></div>
                </div>
                <p className="leading-relaxed text-slate-200 text-sm sm:text-base md:text-lg font-light relative z-10">
                  We believe every student deserves the right guidance to shape
                  their future — no matter where they come from. Our mission is
                  to make career guidance{" "}
                  <span className="font-bold text-transparent bg-gradient-to-r from-cyan-400 to-orange-400 bg-clip-text relative">
                    accessible, clear, and practical
                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-cyan-400 to-orange-400"></span>
                  </span>{" "}
                  for every 12th-passed student, especially in rural areas.
                </p>
              </div>
            </div>

            {/* What We Offer Card */}
            <div
              className="relative group"
              style={{ animation: "slideInUp 0.6s ease-out 0.6s backwards" }}
            >
              <div className="absolute inset-0 bg-blue-500/20 rounded-xl sm:rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              <div className="relative bg-gradient-to-br from-blue-950/95 to-blue-900/60 backdrop-blur-2xl rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 border-2 border-blue-400/40 shadow-2xl hover:border-blue-400/70 transition-all duration-500 overflow-hidden">
                <div className="absolute top-0 right-0 w-60 h-60 bg-orange-500/10 rounded-full blur-3xl"></div>

                <div className="flex items-center gap-3 sm:gap-4 mb-5 sm:mb-6 relative z-10">
                  <div className="relative flex-shrink-0 group/icon">
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl sm:rounded-2xl blur-xl group-hover/icon:blur-2xl transition-all"></div>
                    <div className="relative w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-2xl border-2 border-orange-400/60 group-hover/icon:scale-110 transition-transform">
                      <span className="text-2xl sm:text-3xl">🎯</span>
                    </div>
                  </div>
                  <div className="min-w-0">
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight">
                      What We Offer
                    </h2>
                    <div className="h-[2px] sm:h-[3px] w-20 sm:w-28 bg-gradient-to-r from-orange-500 to-transparent mt-1 rounded-full"></div>
                  </div>
                </div>

                <div className="grid gap-3 sm:gap-4 relative z-10">
                  {[
                    {
                      icon: "🎓",
                      text: "Explore all degrees & specializations",
                      color: "from-blue-500 to-cyan-500",
                    },
                    {
                      icon: "⚡",
                      text: "Skill development & vocational options",
                      color: "from-cyan-500 to-blue-500",
                    },
                    {
                      icon: "📚",
                      text: "Course duration, exams, & career paths",
                      color: "from-blue-500 to-purple-500",
                    },
                    {
                      icon: "🗺",
                      text: "Roadmaps & study plans",
                      color: "from-purple-500 to-blue-500",
                    },
                    {
                      icon: "🔗",
                      text: "Trusted resources (YouTube, govt. sites)",
                      color: "from-blue-500 to-cyan-500",
                    },
                  ].map((item, idx) => (
                    <div key={idx} className="relative group/item">
                      <div
                        className={`absolute inset-0 bg-gradient-to-r ${item.color} opacity-0 group-hover/item:opacity-20 rounded-lg blur-xl transition-all duration-300`}
                      ></div>
                      <div className="relative flex items-start gap-3 sm:gap-4 bg-blue-900/40 hover:bg-blue-900/60 p-3 sm:p-4 rounded-lg border border-blue-500/30 hover:border-cyan-400/60 transition-all duration-300 backdrop-blur-sm">
                        <span className="text-xl sm:text-2xl md:text-3xl flex-shrink-0 group-hover/item:scale-125 transition-transform duration-300">
                          {item.icon}
                        </span>
                        <span className="text-xs sm:text-sm md:text-base text-slate-200 font-light leading-snug pt-1">
                          {item.text}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Vision Card */}
            <div
              className="relative group"
              style={{ animation: "slideInUp 0.6s ease-out 0.8s backwards" }}
            >
              <div className="absolute inset-0 bg-orange-500/20 rounded-xl sm:rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              <div className="relative bg-gradient-to-br from-orange-950/95 to-orange-900/60 backdrop-blur-2xl rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 border-2 border-orange-400/40 shadow-2xl hover:border-orange-400/70 transition-all duration-500 overflow-hidden">
                <div className="absolute top-0 right-0 w-60 h-60 bg-cyan-500/10 rounded-full blur-3xl"></div>

                <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-5 relative z-10">
                  <div className="relative flex-shrink-0 group/icon">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl sm:rounded-2xl blur-xl group-hover/icon:blur-2xl transition-all"></div>
                    <div className="relative w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-2xl border-2 border-cyan-400/60 group-hover/icon:scale-110 transition-transform">
                      <span className="text-2xl sm:text-3xl">✨</span>
                    </div>
                  </div>
                  <div className="min-w-0">
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight">
                      Our Vision
                    </h2>
                    <div className="h-[2px] sm:h-[3px] w-16 sm:w-24 bg-gradient-to-r from-cyan-400 to-transparent mt-1 rounded-full"></div>
                  </div>
                </div>

                <p className="text-slate-200 text-xs sm:text-sm md:text-base font-light leading-relaxed relative z-10">
                  AYG isn&apos;t just a guide — it&apos;s a{" "}
                  <span className="font-bold text-transparent bg-gradient-to-r from-cyan-400 via-blue-400 to-orange-400 bg-clip-text relative">
                    career companion
                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-cyan-400 via-blue-400 to-orange-400"></span>
                  </span>{" "}
                  designed to help students achieve their goals step by step,
                  bridging the gap between dreams and reality through
                  cutting-edge technology and personalized guidance.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Decorative Line */}
        <div
          className={`mt-12 transition-all duration-1000 delay-1000 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="flex items-center gap-4">
            <div className="h-[2px] flex-1 bg-gradient-to-r from-transparent via-blue-500 to-cyan-400"></div>
            <span className="text-xs text-cyan-400/60 font-mono tracking-wider">
              EST. 2025
            </span>
            <div className="h-[2px] flex-1 bg-gradient-to-l from-transparent via-orange-500 to-orange-400"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
