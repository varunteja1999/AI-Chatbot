export default function About() {
    const skills = ["Next.js", "React", "TypeScript", "Node.js", "Google Cloud", "AI Integration"];
  
    return (
      <section id="about" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">About Me</h2>
          <div className="flex flex-col md:flex-row gap-10 items-center">
            <div className="flex-1">
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                I am a passionate developer with a focus on building scalable web applications. 
                After a 3-year break to focus on other ventures, I am returning to the tech world 
                with a renewed focus on **Generative AI** and **Cloud Architecture**.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                My current research involves analyzing the cost-efficiency of serverless AI deployments.
              </p>
            </div>
            <div className="flex-1 w-full">
              <h3 className="font-bold text-xl mb-4 text-gray-800">Tech Stack</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span key={skill} className="px-4 py-2 bg-blue-100 text-blue-800 rounded-lg text-sm font-semibold">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }