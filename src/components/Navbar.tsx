"use client";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <span className="font-bold text-2xl text-blue-600">DevPortfolio</span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link href="#home" className="hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium text-gray-700">Home</Link>
              <Link href="#about" className="hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium text-gray-700">About</Link>
              <Link href="#projects" className="hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium text-gray-700">Projects</Link>
              <Link href="#contact" className="hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium text-gray-700">Contact</Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}