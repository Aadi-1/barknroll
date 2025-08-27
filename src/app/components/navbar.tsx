// components/NavBar.tsx
"use client";

import Link from "next/link";
import { Dancing_Script } from "next/font/google";

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  weight: ["700"],
});

export default function NavBar() {
  return (
    <div className="bg-gradient-to-l from-green-100 to-white text-green-800 shadow-lg border-b">
      <nav className="flex items-center justify-between px-8 py-4">
        <div className="flex items-center gap-3">
          <Link href="/">
            <h1
              className={`${dancingScript.className} text-3xl font-bold logo hidden md:block`}
            >
              Bark n&apos; Roll Pet Care
            </h1>
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="flex gap-6 text-lg font-medium">
          <Link href="/" className="underline decoration-2 underline-offset-3">
            Home
          </Link>
          <Link
            href="/services"
            className="underline decoration-2 underline-offset-3"
          >
            Services
          </Link>
          <Link
            href="/about"
            className="underline decoration-2 underline-offset-3"
          >
            About Us
          </Link>
          <Link
            href="/contact"
            className="underline decoration-2 underline-offset-3"
          >
            Contact Us/FAQ
          </Link>
        </div>
      </nav>
    </div>
  );
}
