"use client";

import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center p-6">
      <h1 className="text-5xl font-bold">404</h1>
      <p className="mt-2 text-xl">Oops! This page doesn’t exist.</p>

      <Link
        href="/"
        className="mt-6 px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800"
      >
        Go Home
      </Link>
    </div>
  );
}
