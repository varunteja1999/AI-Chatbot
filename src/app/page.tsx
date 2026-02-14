import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white selection:bg-cyan-500/30 overflow-hidden">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
      
      {/* Sleek Minimalist Footer */}
      <footer className="border-t border-white/10 py-8 text-center text-zinc-500 text-sm">
        <p>© 2026 DevPortfolio. Engineered by Sai Varun Teja.</p>
      </footer>
    </main>
  );
}