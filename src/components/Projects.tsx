"use client";
import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    {
      title: "Cost-Aware AI Architecture",
      desc: "A Next.js system with an integrated Gemini chatbot that tracks its own token usage and calculates real-time cloud inference costs.",
      tags: ["Next.js", "Gemini 2.5", "Cloud Run"],
    },
    {
      title: "E-Commerce Analytics",
      desc: "A high-performance mock analytics dashboard for tracking sales velocity and inventory using React and modern CSS frameworks.",
      tags: ["React", "Chart.js", "Tailwind"],
    },
  ];

  return (
    <section id="projects" className="py-40 relative z-10 perspective-[2000px]">
      <div className="max-w-6xl mx-auto px-4">
        
        <motion.div
          initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center md:text-left"
        >
          <h2 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-zinc-500 tracking-tight">
            Engineering Marvels.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((project, i) => (
            <motion.div 
              key={i}
              // The 3D Scroll Magic
              initial={{ opacity: 0, y: 100, rotateX: -20, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.2, type: "spring", stiffness: 100, damping: 20 }}
              whileHover={{ y: -10, rotateX: 2, rotateY: -2 }}
              className="group relative bg-zinc-900/50 border border-white/5 p-10 rounded-[2rem] overflow-hidden hover:border-cyan-500/30 transition-all duration-500 shadow-2xl"
            >
              {/* Animated Aurora Hover Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-blue-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-2xl" />
              
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-6 border border-white/10 group-hover:scale-110 transition-transform duration-500">
                  <span className="text-cyan-400 text-xl">✦</span>
                </div>
                <h3 className="text-3xl font-bold mb-4 text-white group-hover:text-cyan-400 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-zinc-400 mb-8 leading-relaxed text-lg">
                  {project.desc}
                </p>
                <div className="flex flex-wrap gap-3">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-sm font-medium bg-black/50 text-zinc-300 px-4 py-2 rounded-full border border-white/5 backdrop-blur-md">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}