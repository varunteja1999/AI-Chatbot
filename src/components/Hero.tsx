"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      
      {/* Cinematic Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/20 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        
        {/* Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-cyan-400 font-mono text-sm tracking-widest mb-6 uppercase">
            Master's Research Project
          </h2>
        </motion.div>

        {/* Massive Gradient Title */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          <h1 className="text-6xl md:text-8xl font-extrabold tracking-tighter mb-8 text-transparent bg-clip-text bg-gradient-to-b from-white to-zinc-500">
            Sai Varun Teja.
          </h1>
        </motion.div>

        {/* Bio */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="text-xl md:text-2xl text-zinc-400 mb-12 font-light max-w-2xl mx-auto leading-relaxed"
        >
          Architecting <span className="text-white font-medium">Cost-Aware AI</span> systems and building high-performance cloud applications.
        </motion.p>

        {/* Call to Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a href="#projects" className="px-8 py-4 bg-white text-black rounded-full font-medium hover:scale-105 transition-transform duration-300 w-full sm:w-auto shadow-[0_0_40px_rgba(255,255,255,0.3)]">
            Explore Architecture
          </a>
          <a href="#contact" className="px-8 py-4 border border-zinc-700 rounded-full font-medium hover:bg-zinc-800 hover:border-zinc-500 transition-all duration-300 w-full sm:w-auto text-zinc-300">
            Contact Me
          </a>
        </motion.div>
      </div>
    </section>
  );
}