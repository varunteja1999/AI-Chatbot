export default function Projects() {
    const projects = [
      {
        title: "Cost-Aware AI Portfolio",
        desc: "A Next.js portfolio website with an integrated Gemini chatbot that tracks its own token usage and cloud costs.",
        tags: ["Next.js", "Gemini API", "Cloud Run"],
      },
      {
        title: "E-Commerce Dashboard",
        desc: "A mock analytics dashboard for tracking sales and inventory using React and Tailwind CSS.",
        tags: ["React", "Chart.js", "Tailwind"],
      },
    ];
  
    return (
      <section id="projects" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">My Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
                <h3 className="text-xl font-bold mb-2 text-gray-900">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.desc}</p>
                <div className="flex gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-xs bg-gray-200 px-2 py-1 rounded text-gray-700">{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }