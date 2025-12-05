"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);

  if (pathname !== "/" && pathname !== "/about" && pathname !== "/contact") {
    return null;
  }

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      {/* DESKTOP NAVBAR (hidden on mobile) */}
      <nav
        className="
          hidden lg:flex
          fixed top-0 left-0 z-50 w-full h-20
          bg-white/10 backdrop-blur-xl border-b border-white/20
          shadow-lg shadow-purple-500/10 font-poppins
          items-center px-10 justify-between
        "
      >
        {/* Logo */}
        <div className="flex items-center flex-1">
          <span className="text-3xl font-extrabold">AYG</span>
        </div>

        {/* Links */}
        <div className="flex gap-10 flex-1 justify-center items-center">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`font-medium transition-all ${
                pathname === item.href
                  ? "text-blue-600 drop-shadow-md"
                  : "text-gray-200 hover:text-purple-300"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="flex flex-1 justify-end">
          <button
            onClick={() => router.push("quest1")}
            className="
              bg-gradient-to-r from-blue-600/90 to-indigo-600/90
              hover:from-purple-700/90 hover:to-indigo-700/90
              text-white px-6 py-2 rounded-xl
              shadow-lg shadow-purple-500/40
              hover:shadow-purple-400/50
              transition-all
            "
          >
            Get Started
          </button>
        </div>
      </nav>

      {/* MOBILE HAMBURGER ICON ONLY */}
      <button
        className="lg:hidden fixed top-5 right-5 z-[60] text-white"
        onClick={() => setOpen(!open)}
      >
        {open ? <X size={32} /> : <Menu size={32} />}
      </button>

      {/* MOBILE MENU DROPDOWN */}
      <div
        className={`
          lg:hidden fixed top-0 right-0 z-50 w-full
          bg-black/70 backdrop-blur-xl
          transition-all duration-300 overflow-hidden
          ${open ? "max-h-96 pt-20 pb-6" : "max-h-0 pt-0 pb-0"}
        `}
      >
        <div className="flex flex-col items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setOpen(false)}
              className={`text-lg font-medium ${
                pathname === item.href ? "text-blue-400" : "text-white"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navbar;
