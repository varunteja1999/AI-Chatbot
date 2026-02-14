"use client";
import { motion } from "framer-motion";

export default function About() {
  const skills = ["Next.js", "React", "TypeScript", "Node.js", "Google Cloud", "Gemini API", "Framer Motion", "Tailwind"];

  return (
    <section id="about" className="py-32 relative z-10">
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">The Architect Behind the Code.</h2>
          <p className="text-zinc-400 text-lg max-w-2xl">Bridging the gap between scalable cloud infrastructure and next-generation AI.</p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Main Bio Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="md:col-span-2 bg-zinc-900/40 border border-white/10 rounded-3xl p-8 md:p-10 backdrop-blur-md hover:bg-zinc-900/60 transition-colors"
          >
            <h3 className="text-2xl font-semibold text-white mb-4">My Journey</h3>
            <p className="text-zinc-400 text-lg leading-relaxed mb-6">
              After a 3-year break to build other ventures from the ground up, I am returning to the tech world with a laser focus on 
              <span className="text-white font-medium"> Generative AI</span> and <span className="text-white font-medium">Cloud Architecture</span>.
            </p>
            <p className="text-zinc-400 text-lg leading-relaxed">
              My current master's research explores the financial viability and cost-efficiency of serverless AI deployments in enterprise environments.
            </p>
          </motion.div>

          {/* Skills Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="bg-zinc-900/40 border border-white/10 rounded-3xl p-8 md:p-10 backdrop-blur-md flex flex-col justify-center"
          >
            <h3 className="text-xl font-semibold text-white mb-6">Arsenal</h3>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, i) => (
                <motion.span 
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + (i * 0.05) }}
                  className="px-4 py-2 bg-white/5 border border-white/10 text-zinc-300 rounded-lg text-sm font-medium shadow-sm"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}