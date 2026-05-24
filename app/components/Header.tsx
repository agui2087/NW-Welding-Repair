"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* LOGO */}
        <Link href="/" className="flex items-center hover:opacity-90 transition">
          <Image
            src="/backgrounds/IMG_7425.JPG"
            alt="NW Welding Repair Logo"
            width={80}
            height={80}
            className="rounded-md object-cover w-[80px] h-[80px]"
          />
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden lg:flex gap-16 text-lg font-semibold text-gray-800 ml-10">
          <Link href="/" className="hover:text-red-600 transition">Home</Link>
          <Link href="/services" className="hover:text-red-600 transition">Services</Link>
          <Link href="/emergency-repairs" className="hover:text-red-600 transition">Emergency</Link>
          <Link href="/gallery" className="hover:text-red-600 transition">Gallery</Link>
          <Link href="/contact" className="hover:text-red-600 transition">Contact</Link>
        </nav>

        {/* MOBILE HAMBURGER */}
        <button
          className="lg:hidden text-4xl font-bold text-red-600"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* MOBILE DROPDOWN */}
      {menuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200 shadow-md">
          <nav className="flex flex-col text-lg font-semibold text-gray-800 p-6 space-y-4">
            <Link href="/" onClick={() => setMenuOpen(false)} className="hover:text-red-600">Home</Link>
            <Link href="/services" onClick={() => setMenuOpen(false)} className="hover:text-red-600">Services</Link>
            <Link href="/emergency-repairs" onClick={() => setMenuOpen(false)} className="hover:text-red-600">Emergency</Link>
            <Link href="/gallery" onClick={() => setMenuOpen(false)} className="hover:text-red-600">Gallery</Link>
            <Link href="/contact" onClick={() => setMenuOpen(false)} className="hover:text-red-600">Contact</Link>
          </nav>
        </div>
      )}
    </header>
  );
}
