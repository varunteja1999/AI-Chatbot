export default function Contact() {
    return (
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8 text-gray-800">Get In Touch</h2>
          <p className="text-xl text-gray-600 mb-8">
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
          <a href="mailto:your.email@example.com" className="px-8 py-4 bg-blue-600 text-white rounded-lg font-bold hover:bg-blue-700 transition">
            Say Hello
          </a>
        </div>
      </section>
    );
  }