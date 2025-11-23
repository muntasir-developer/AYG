"use client";
import React, { useState, useEffect } from "react";
import { Mail, Phone, MapPin, Send, Sparkles } from "lucide-react";

const ContactPage = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    setIsVisible(true);
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add your form submission logic here
    alert("Message sent successfully!");
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="w-full min-h-screen bg-black pt-20 text-white relative overflow-hidden font-sans">
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

      {/* Animated Orbs */}
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
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(25)].map((_, i) => (
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
        @keyframes scan {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100%); }
        }
        @keyframes slideInUp {
          from { opacity: 0; transform: translateY(50px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      {/* Content Container */}
      <div className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20">
        {/* Top Decorative Line */}
        <div
          className={`absolute top-8 left-0 right-0 px-4 sm:px-8 transition-all duration-1000 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="max-w-6xl mx-auto flex items-center gap-4">
            <div className="h-[2px] flex-1 bg-gradient-to-r from-transparent via-blue-500 to-cyan-400"></div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
              <span className="text-xs text-cyan-400 font-mono tracking-widest uppercase">
                CONTACT
              </span>
              <div
                className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"
                style={{ animationDelay: "0.2s" }}
              ></div>
            </div>
            <div className="h-[2px] flex-1 bg-gradient-to-l from-transparent via-orange-500 to-orange-400"></div>
          </div>
        </div>

        <div className="relative max-w-6xl w-full">
          {/* Header Section */}
          <div
            className={`text-center mb-8 sm:mb-12 transition-all duration-1000 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
            style={{ animation: "slideInUp 0.8s ease-out" }}
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="flex gap-1">
                <div className="w-1 h-8 bg-blue-500 rounded-full animate-pulse"></div>
                <div
                  className="w-1 h-8 bg-cyan-400 rounded-full animate-pulse"
                  style={{ animationDelay: "0.2s" }}
                ></div>
                <div
                  className="w-1 h-8 bg-orange-500 rounded-full animate-pulse"
                  style={{ animationDelay: "0.4s" }}
                ></div>
              </div>
              <span className="text-cyan-400 font-bold text-xs sm:text-sm tracking-widest uppercase font-mono">
                {">"} GET_IN_TOUCH.EXE
              </span>
            </div>

            <div className="relative inline-block">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-none tracking-tight relative z-10 mb-4">
                <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-orange-400 bg-clip-text text-transparent">
                  Let's Connect
                </span>
              </h1>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-cyan-300 to-orange-400 blur-2xl opacity-50"></div>
            </div>

            <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto font-light">
              Join us on this journey to transform career guidance for students
              everywhere
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
            {/* Left Section - Contact Info */}
            <div
              className={`transition-all duration-1000 ${
                isVisible ? "opacity-100" : "opacity-0"
              }`}
              style={{ animation: "slideInUp 0.8s ease-out 0.2s backwards" }}
            >
              <div className="relative group h-full">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                <div className="relative bg-gradient-to-br from-slate-900/95 to-slate-800/60 backdrop-blur-2xl rounded-2xl p-6 sm:p-8 border-2 border-cyan-400/30 shadow-2xl hover:border-cyan-400/60 transition-all duration-500 h-full overflow-hidden">
                  <div className="absolute top-0 right-0 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl"></div>

                  {/* Status Dots */}
                  <div className="absolute top-4 right-4 flex gap-1.5">
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

                  <div className="relative z-10 space-y-6">
                    {/* Header */}
                    <div>
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center shadow-lg">
                          <Sparkles className="w-5 h-5 text-white" />
                        </div>
                        <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                          Be Part of Our Journey
                        </h2>
                      </div>
                      <div className="h-[2px] w-24 bg-gradient-to-r from-cyan-400 to-transparent mb-4"></div>
                      <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-light">
                        We're building something exciting, and we'd love to hear
                        from{" "}
                        <span className="font-semibold text-transparent bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text">
                          students, dreamers, and changemakers
                        </span>
                        . Whether you have questions, ideas, or just want to say
                        hi — let's connect.
                      </p>
                    </div>

                    {/* Contact Items */}
                    <div className="space-y-4">
                      {[
                        {
                          icon: Mail,
                          label: "Email",
                          value: "ayg@help.com",
                          href: "mailto:ayg@help.com",
                          color: "from-blue-500 to-cyan-500",
                        },
                        {
                          icon: Phone,
                          label: "Phone",
                          value: "+91 9905070158",
                          href: "tel:+919905070158",
                          color: "from-cyan-500 to-blue-500",
                        },
                        {
                          icon: MapPin,
                          label: "Location",
                          value: "Bhagalpur, Bihar, India",
                          href: null,
                          color: "from-orange-500 to-orange-600",
                        },
                      ].map((item, idx) => (
                        <div key={idx} className="relative group/item">
                          <div
                            className={`absolute inset-0 bg-gradient-to-r ${item.color} opacity-0 group-hover/item:opacity-20 rounded-xl blur-lg transition-all duration-300`}
                          ></div>
                          <div className="relative flex items-center gap-4 bg-slate-800/40 hover:bg-slate-800/60 p-4 rounded-xl border border-slate-700/50 hover:border-cyan-400/50 transition-all duration-300 backdrop-blur-sm">
                            <div
                              className={`w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br ${item.color} rounded-lg flex items-center justify-center shadow-lg flex-shrink-0 group-hover/item:scale-110 transition-transform`}
                            >
                              <item.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                            </div>
                            <div className="min-w-0 flex-1">
                              <p className="text-xs text-slate-400 mb-1 font-mono uppercase tracking-wider">
                                {item.label}
                              </p>
                              {item.href ? (
                                <a
                                  href={item.href}
                                  className="text-sm sm:text-base text-slate-200 hover:text-cyan-400 transition-colors font-light break-all"
                                >
                                  {item.value}
                                </a>
                              ) : (
                                <p className="text-sm sm:text-base text-slate-200 font-light">
                                  {item.value}
                                </p>
                              )}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Social Proof */}
                    <div className="bg-slate-800/30 rounded-xl p-4 border border-slate-700/30">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        <span className="text-xs text-green-400 font-mono uppercase tracking-wider">
                          Response Time
                        </span>
                      </div>
                      <p className="text-sm text-slate-300 font-light">
                        We typically respond within{" "}
                        <span className="text-cyan-400 font-semibold">
                          24 hours
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Section - Form */}
            <div
              className={`transition-all duration-1000 ${
                isVisible ? "opacity-100" : "opacity-0"
              }`}
              style={{ animation: "slideInUp 0.8s ease-out 0.4s backwards" }}
            >
              <div className="relative group h-full">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-600/20 to-orange-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                <div className="relative bg-gradient-to-br from-orange-950/95 to-orange-900/60 backdrop-blur-2xl rounded-2xl p-6 sm:p-8 border-2 border-orange-400/30 shadow-2xl hover:border-orange-400/60 transition-all duration-500 h-full overflow-hidden">
                  <div className="absolute top-0 right-0 w-40 h-40 bg-orange-500/10 rounded-full blur-3xl"></div>

                  {/* Status Dots */}
                  <div className="absolute top-4 right-4 flex gap-1.5">
                    <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
                    <div
                      className="w-2 h-2 bg-orange-400 rounded-full animate-pulse"
                      style={{ animationDelay: "0.2s" }}
                    ></div>
                    <div
                      className="w-2 h-2 bg-orange-300 rounded-full animate-pulse"
                      style={{ animationDelay: "0.4s" }}
                    ></div>
                  </div>

                  <div className="relative z-10 space-y-6">
                    {/* Header */}
                    <div>
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center shadow-lg">
                          <Send className="w-5 h-5 text-white" />
                        </div>
                        <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                          Share Your Thoughts
                        </h2>
                      </div>
                      <div className="h-[2px] w-24 bg-gradient-to-r from-orange-400 to-transparent mb-4"></div>
                      <p className="text-slate-300 text-sm sm:text-base font-light leading-relaxed">
                        Got an idea? A problem you're facing? Or simply curious
                        about what we're building? Drop a message — we're
                        listening.
                      </p>
                    </div>

                    {/* Form */}
                    <div className="space-y-4">
                      <div className="relative group/input">
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 opacity-0 group-focus-within/input:opacity-20 rounded-xl blur-lg transition-all duration-300"></div>
                        <input
                          type="text"
                          name="name"
                          placeholder="Your Name"
                          value={formData.name}
                          onChange={handleChange}
                          className="relative w-full p-3 sm:p-4 rounded-xl bg-slate-800/50 border-2 border-slate-700/50 focus:border-cyan-400/70 focus:bg-slate-800/70 text-white placeholder-slate-400 outline-none transition-all duration-300 backdrop-blur-sm text-sm sm:text-base font-light"
                        />
                      </div>

                      <div className="relative group/input">
                        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 opacity-0 group-focus-within/input:opacity-20 rounded-xl blur-lg transition-all duration-300"></div>
                        <input
                          type="email"
                          name="email"
                          placeholder="Email Address"
                          value={formData.email}
                          onChange={handleChange}
                          className="relative w-full p-3 sm:p-4 rounded-xl bg-slate-800/50 border-2 border-slate-700/50 focus:border-cyan-400/70 focus:bg-slate-800/70 text-white placeholder-slate-400 outline-none transition-all duration-300 backdrop-blur-sm text-sm sm:text-base font-light"
                        />
                      </div>

                      <div className="relative group/input">
                        <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-orange-600 opacity-0 group-focus-within/input:opacity-20 rounded-xl blur-lg transition-all duration-300"></div>
                        <textarea
                          name="message"
                          rows={5}
                          placeholder="Write your message here..."
                          value={formData.message}
                          onChange={handleChange}
                          className="relative w-full p-3 sm:p-4 rounded-xl bg-slate-800/50 border-2 border-slate-700/50 focus:border-cyan-400/70 focus:bg-slate-800/70 text-white placeholder-slate-400 outline-none transition-all duration-300 backdrop-blur-sm resize-none text-sm sm:text-base font-light"
                        ></textarea>
                      </div>

                      <button
                        onClick={handleSubmit}
                        className="relative w-full group/button overflow-hidden"
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-cyan-500 to-orange-600 rounded-xl blur-xl opacity-75 group-hover/button:opacity-100 transition-opacity"></div>
                        <div className="relative bg-gradient-to-r from-blue-500 via-cyan-500 to-orange-500 hover:from-blue-600 hover:via-cyan-600 hover:to-orange-600 text-white font-bold py-3 sm:py-4 px-6 rounded-xl transition-all duration-300 shadow-2xl border-2 border-cyan-400/50 group-hover/button:border-cyan-400/80 group-hover/button:scale-[1.02] flex items-center justify-center gap-2 text-sm sm:text-base">
                          <Send className="w-4 h-4 sm:w-5 sm:h-5 group-hover/button:rotate-45 transition-transform duration-300" />
                          <span>Send Message</span>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
