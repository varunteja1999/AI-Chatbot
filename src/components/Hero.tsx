export default function Hero() {
    return (
      <section id="home" className="h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-white">
        <div className="text-center px-4">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
            Hi, I'm <span className="text-blue-600">Sai Varun Teja</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto">
            A Full Stack Developer specializing in AI-Integrated Web Applications and Cloud Solutions.
          </p>
          <div className="flex gap-4 justify-center">
            <a href="#projects" className="px-8 py-3 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition">
              View My Work
            </a>
            <a href="#contact" className="px-8 py-3 border border-gray-300 rounded-full font-semibold hover:bg-gray-50 transition text-gray-700">
              Contact Me
            </a>
          </div>
        </div>
      </section>
    );
  }