"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }} // Apple-like easing curve
      className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-fit bg-zinc-900/50 backdrop-blur-2xl border border-white/10 rounded-full px-8 py-4 shadow-2xl"
    >
      <div className="flex items-center gap-10 text-sm font-medium text-zinc-400">
        <Link href="#home" className="text-white font-bold text-lg tracking-tighter">VT.</Link>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="#about" className="hover:text-white transition-colors">About</Link>
          <Link href="#projects" className="hover:text-white transition-colors">Projects</Link>
          <Link href="#contact" className="hover:text-white transition-colors">Contact</Link>
        </div>
      </div>
    </motion.nav>
  );
}