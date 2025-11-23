"use client";
import React from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  const router = useRouter();

  // Show navbar only on home page
  if (pathname !== "/" && pathname !== "/about" && pathname !== "/contact") {
    return null;
  }

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav
      className="
      fixed top-0 left-0 z-50
      hidden lg:flex items-center
      h-20 w-full px-6 md:px-36
      bg-white/10 
      backdrop-blur-xl
      border-b border-white/20
      shadow-lg shadow-purple-500/10
      font-poppins
    "
    >
      {/* Left: Logo */}
      <div className="flex items-center flex-1">
        <span className="text-3xl font-extrabold">AYG</span>
      </div>

      {/* Center Links */}
      <div className="hidden md:flex gap-10 flex-1 justify-center items-center">
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

      {/* Right CTA */}
      <div className="flex items-center right-0 justify-end pr-3  flex-1">
        <button
          onClick={() => router.push("quest1")}
          className="
            bg-gradient-to-r from-blue-600/90 to-indigo-600/90
            hover:from-purple-700/90 hover:to-indigo-700/90
            text-white px-6 py-2 rounded-xl
            shadow-lg shadow-purple-500/40
            hover:shadow-purple-400/50
            transition-all backdrop-blur-sm
          "
        >
          Get Started
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
