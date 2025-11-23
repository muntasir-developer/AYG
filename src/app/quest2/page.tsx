"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { BookOpen, Palette, Briefcase, ArrowLeft } from "lucide-react";

const Page: React.FC = () => {
  const router = useRouter();

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-12 bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-950 font-sans relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-1/3 right-1/4 w-56 h-56 sm:w-72 sm:h-72 lg:w-80 lg:h-80 bg-indigo-500/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      {/* Back Button */}
      <div className="w-full max-w-2xl mb-6 sm:mb-8 flex justify-start relative z-10 px-2">
        <button
          type="button"
          onClick={() => router.back()}
          aria-label="Go back"
          className="group flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-white/5 backdrop-blur-md shadow-lg border border-blue-300/20 
                     text-blue-100/90 font-medium hover:bg-white/10 hover:border-blue-300/40 hover:text-white
                     transition-all duration-300 hover:shadow-blue-500/20 hover:shadow-xl text-sm sm:text-base"
        >
          <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:-translate-x-1" />
          <span className="tracking-wide">Back</span>
        </button>
      </div>

      {/* Main Card */}
      <div
        className="bg-white/5 backdrop-blur-2xl rounded-2xl sm:rounded-3xl shadow-md border border-white/10 w-full max-w-2xl p-6 sm:p-8 md:p-10 lg:p-12 relative z-10 
                      hover:border-white/20 transition-all duration-700 hover:shadow-blue-500/10 mx-2"
      >
        {/* Decorative Corner Elements */}
        <div className="absolute top-0 left-0 w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 border-t-2 border-l-2 border-blue-400/30 rounded-tl-2xl sm:rounded-tl-3xl"></div>
        <div className="absolute bottom-0 right-0 w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 border-b-2 border-r-2 border-blue-400/30 rounded-br-2xl sm:rounded-br-3xl"></div>

        {/* Heading Section */}
        <div className="text-center mb-6 sm:mb-8 lg:mb-10">
          <h1
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-3 px-2
                         bg-gradient-to-r from-white via-blue-100 to-indigo-200 bg-clip-text text-transparent
                         leading-tight"
          >
            Which stream did you choose in{" "}
            <span
              className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500
 inline-block animate-pulse"
            >
              12th
            </span>
            ?
          </h1>
          <div className="flex items-center justify-center gap-2 mb-3">
            <div className="h-px w-8 sm:w-12 bg-gradient-to-r from-transparent to-blue-400/50"></div>
            <span className="text-3xl sm:text-4xl">🎓</span>
            <div className="h-px w-8 sm:w-12 bg-gradient-to-l from-transparent to-blue-400/50"></div>
          </div>
          <p className="text-blue-200/70 text-sm sm:text-base md:text-lg font-light tracking-wide px-4">
            Select your stream to continue your journey
          </p>
        </div>

        {/* Stream Options Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-4 lg:gap-5">
          {/* Science */}
          <button
            onClick={() => router.push("/quest2/qscience")}
            className="group relative flex flex-col items-center justify-center p-5 sm:p-6 rounded-xl sm:rounded-2xl 
                       bg-gradient-to-br from-blue-600/90 to-indigo-600/90 backdrop-blur-sm
                       text-white shadow-xl hover:shadow-2xl hover:shadow-blue-500/30
                       border border-blue-400/20 hover:border-blue-300/40
                       transition-all duration-500 hover:-translate-y-2 hover:scale-105
                       overflow-hidden min-h-[130px] sm:min-h-[140px] active:scale-95"
          >
            <div
              className="absolute inset-0 bg-gradient-to-br from-white/0 to-white/5 
                            opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            ></div>
            <div className="relative z-10 flex flex-col items-center">
              <div
                className="mb-3 sm:mb-4 p-3 rounded-full bg-white/10 group-hover:bg-white/20 
                              transition-all duration-300 group-hover:rotate-12 group-hover:scale-110"
              >
                <BookOpen
                  className="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10"
                  strokeWidth={1.5}
                />
              </div>
              <span className="font-semibold text-base sm:text-lg mb-1 tracking-wide">
                Science
              </span>
              <span className="text-xs text-blue-100/70 font-light tracking-wider uppercase">
                Stream
              </span>
            </div>
          </button>

          {/* Commerce */}
          <button
            onClick={() => router.push("/quest2/qcommerce")}
            className="group relative flex flex-col items-center justify-center p-5 sm:p-6 rounded-xl sm:rounded-2xl 
                       bg-gradient-to-br from-purple-600/90 to-pink-600/90 backdrop-blur-sm
                       text-white shadow-xl hover:shadow-2xl hover:shadow-purple-500/30
                       border border-purple-400/20 hover:border-purple-300/40
                       transition-all duration-500 hover:-translate-y-2 hover:scale-105
                       overflow-hidden min-h-[130px] sm:min-h-[140px] active:scale-95"
          >
            <div
              className="absolute inset-0 bg-gradient-to-br from-white/0 to-white/5 
                            opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            ></div>
            <div className="relative z-10 flex flex-col items-center">
              <div
                className="mb-3 sm:mb-4 p-3 rounded-full bg-white/10 group-hover:bg-white/20 
                              transition-all duration-300 group-hover:rotate-12 group-hover:scale-110"
              >
                <Briefcase
                  className="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10"
                  strokeWidth={1.5}
                />
              </div>
              <span className="font-semibold text-base sm:text-lg mb-1 tracking-wide">
                Commerce
              </span>
              <span className="text-xs text-purple-100/70 font-light tracking-wider uppercase">
                Stream
              </span>
            </div>
          </button>

          {/* Arts */}
          <button
            onClick={() => router.push("/quest2/qarts")}
            className="group relative flex flex-col items-center justify-center p-5 sm:p-6 rounded-xl sm:rounded-2xl 
                       bg-gradient-to-br from-indigo-500/90 to-purple-600/90 backdrop-blur-sm
                       text-white shadow-xl hover:shadow-2xl hover:shadow-indigo-500/30
                       border border-indigo-400/20 hover:border-indigo-300/40
                       transition-all duration-500 hover:-translate-y-2 hover:scale-105
                       overflow-hidden min-h-[130px] sm:min-h-[140px] active:scale-95"
          >
            <div
              className="absolute inset-0 bg-gradient-to-br from-white/0 to-white/5 
                            opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            ></div>
            <div className="relative z-10 flex flex-col items-center">
              <div
                className="mb-3 sm:mb-4 p-3 rounded-full bg-white/10 group-hover:bg-white/20 
                              transition-all duration-300 group-hover:rotate-12 group-hover:scale-110"
              >
                <Palette
                  className="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10"
                  strokeWidth={1.5}
                />
              </div>
              <span className="font-semibold text-base sm:text-lg mb-1 tracking-wide">
                Arts
              </span>
              <span className="text-xs text-indigo-100/70 font-light tracking-wider uppercase">
                Stream
              </span>
            </div>
          </button>
        </div>

        {/* Bottom Decorative Line */}
        <div className="mt-6 sm:mt-8 flex justify-center">
          <div className="h-1 w-20 sm:w-24 bg-gradient-to-r from-transparent via-blue-400/50 to-transparent rounded-full"></div>
        </div>
      </div>

      {/* Footer Note */}
      <p className="text-blue-200/40 text-xs sm:text-sm mt-6 sm:mt-8 relative z-10 tracking-wide font-light px-4 text-center">
        Choose wisely to unlock your personalized path
      </p>
    </section>
  );
};

export default Page;
