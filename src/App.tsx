import React from 'react';
import { Github, Linkedin, Mail, ExternalLink, Code2, BookOpen, Trophy, Cpu } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      {/* Hero Section */}
      <header className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10"></div>
        <div className="container mx-auto px-4 py-16 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
              Pragya Shrivastava
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Computer Science Engineer
            </p>
            <div className="flex justify-center gap-6">
              <a href="https://github.com/pragyashrivastava" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                <Github size={24} />
              </a>
              <a href="https://www.linkedin.com/in/pragya-shrivastava-6a971b201/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="mailto:pragyashrivastava2468@gmail.com" className="text-gray-300 hover:text-white transition-colors">
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1573496799652-408c2ac9fe98?auto=format&fit=crop&q=80" 
                alt="Professional headshot"
                className="rounded-lg shadow-xl"
              />
            </div>
            <div>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                I'm a passionate Computer Science Engineer with a focus on building innovative solutions 
                that make a difference. With a strong foundation in both theoretical computer science 
                and practical software development, I strive to create efficient and elegant solutions 
                to complex problems.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-2">
                  <Code2 className="text-blue-400" />
                  <span>Software Development</span>
                </div>
                <div className="flex items-center gap-2">
                  <Cpu className="text-blue-400" />
                  <span>Computer Science</span>
                </div>
                <div className="flex items-center gap-2">
                  <BookOpen className="text-blue-400" />
                  <span>Continuous Learning</span>
                </div>
                <div className="flex items-center gap-2">
                  <Trophy className="text-blue-400" />
                  <span>Problem Solving</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((project) => (
              <div key={project} className="bg-gray-900 rounded-lg overflow-hidden shadow-lg hover:transform hover:scale-105 transition-transform">
                <img 
                  src={`https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80`}
                  alt={`Project ${project}`}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Project Title {project}</h3>
                  <p className="text-gray-400 mb-4">
                    A brief description of the project and its key features. Technologies used and impact created.
                  </p>
                  <a href="#" className="inline-flex items-center text-blue-400 hover:text-blue-300">
                    View Project <ExternalLink size={16} className="ml-2" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Get In Touch</h2>
          <div className="max-w-xl mx-auto">
            <p className="text-center text-gray-300 mb-8">
              I'm always open to new opportunities and collaborations. Feel free to reach out!
            </p>
            <div className="flex justify-center gap-6">
              <a href="mailto:pragyashrivastava2468@gmail.com" className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg flex items-center gap-2 transition-colors">
                <Mail size={20} />
                Email Me
              </a>
              <a href="https://www.linkedin.com/in/pragya-shrivastava-6a971b201/" target="_blank" rel="noopener noreferrer" className="bg-gray-700 hover:bg-gray-600 text-white px-6 py-3 rounded-lg flex items-center gap-2 transition-colors">
                <Linkedin size={20} />
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800 py-8">
        <div className="container mx-auto px-4 text-center text-gray-400">
          <p>© 2024 Pragya Shrivastava. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
