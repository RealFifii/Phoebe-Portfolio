import React from 'react';
import profile from './image/me.png';
import ClickSpark from './Animations/ClickSpark/ClickSpark';
import Particles from './Animations/Particles/Particles';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

function App() {
  return (
    <ClickSpark>
        <div className="bg-black min-h-screen text-white font-sans">
        {/* Foreground Content */}
        <div className="relative z-20">
          {/* Navigation */}
          <nav className="bg-black/70 shadow-md sticky top-0 z-50 backdrop-blur-md">
            <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center text-white">
              <div className="text-xl font-bold text-sky-400">Wenfei Lu</div>
              <ul className="flex flex-wrap gap-4 text-sm font-medium">
                <li><a href="#about" className="hover:text-sky-400">About</a></li>
                <li><a href="#skills" className="hover:text-sky-400">Skills</a></li>
                <li><a href="#projects" className="hover:text-sky-400">Projects</a></li>
                <li><a href="#experience" className="hover:text-sky-400">Experience</a></li>
                <li><a href="#education" className="hover:text-sky-400">Education</a></li>
                <li><a href="#contact" className="hover:text-sky-400">Contact</a></li>
              </ul>
            </div>
          </nav>
          
         {/* Hero Section with Particles Background */}
        <section className="relative w-full h-[600px] flex items-center justify-center text-center overflow-hidden">
          {/* Particles Background */}
          <div className="absolute inset-0 z-0">
            <Particles
              particleColors={['#ffffff', '#ffffff']}
              particleCount={200}
              particleSpread={10}
              speed={0.1}
              particleBaseSize={100}
              moveParticlesOnHover={true}
              alphaParticles={false}
              disableRotation={false}
            />
          </div>

          {/* Hero Content */}
          <div className="relative z-10">
            <img
              src={profile}
              alt="Wenfei Lu"
              className="w-32 h-32 mx-auto rounded-full border-4 border-white mb-4 shadow-lg"
            />
            <h1 className="text-4xl font-bold">Hi, I'm Phoebe Lu</h1>
            <p className="mt-2 text-lg">
              Full-Stack Developer | React, Node.js, AWS | Christchurch
            </p>
          </div>
        </section>


          {/* About Section */}
          <section id="about" className="py-12 px-6 max-w-5xl mx-auto">
            <h2 className="text-2xl font-semibold mb-4 text-sky-300">About Me</h2>
            <p className="leading-relaxed">
              I'm a Master's student in Applied Computing at Lincoln University with experience in full-stack development,
              software testing, and cloud technologies. I'm passionate about creating intuitive digital experiences and
              currently seeking a role to grow as a developer.
            </p>
          </section>

          {/* Skills Section */}
          <section id="skills" className="py-12 px-6 bg-black/60 max-w-5xl mx-auto rounded-xl">
            <h2 className="text-2xl font-semibold mb-6 text-sky-300">Technical Skills</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm">
              <div>
                <h4 className="font-semibold mb-1">Languages</h4>
                <p>Python, JavaScript, SQL, HTML/CSS, C, C#</p>
              </div>
              <div>
                <h4 className="font-semibold mb-1">Frameworks/Tools</h4>
                <p>React, Node.js, Flask, Bootstrap, MySQL Workbench, VS Code</p>
              </div>
              <div>
                <h4 className="font-semibold mb-1">Systems</h4>
                <p>Windows, MacOS, Linux</p>
              </div>
              <div>
                <h4 className="font-semibold mb-1">Project Management & Platforms</h4>
                <p>Jira, Confluence, GitHub, AWS, Azure DevOps</p>
              </div>
            </div>
          </section>

          {/* Projects Section */}
          <section id="projects" className="py-12 px-6 max-w-5xl mx-auto">
            <h2 className="text-2xl font-semibold mb-6 text-sky-300">Project Experience</h2>
            <div className="space-y-6 text-sm">
              <div>
                <h4 className="font-semibold">Digital Farm Simulator</h4>
                <a href="https://fglcomp639.pythonanywhere.com/" className="text-sky-400" target="_blank" rel="noreferrer">
                👉 Digital Farm Simulator - Live Demo</a>
                <ul className="list-disc ml-6 mt-2">
                  <li>Real-time livestock simulation with Flask, SQL, and responsive UI.</li>
                  <li>Dynamic rendering and interactive dashboards.</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold">Secure Travel Journal App (Group Project)</h4>
                <ul className="list-disc ml-6 mt-2">
                  <li>Role-based login, hashed passwords, responsive front end.</li>
                  <li>Collaboration via SCRUM, Jira, and GitHub version control.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Experience Section */}
          <section id="experience" className="py-12 px-6 max-w-5xl mx-auto">
            <h2 className="text-2xl font-semibold mb-6 text-sky-300">Work Experience</h2>
            <div className="space-y-4 text-sm">
              <div>
                <h4 className="font-semibold">Blue Rental - Junior Web Developer</h4>
                <a href="https://bluerental.co.nz/" className="text-sky-400" target="_blank" rel="noreferrer">
                👉 Blue Rental</a>
                <p className="text-gray-400">Dec 2024 - Feb 2025</p>
                <ul className="list-disc ml-6 mt-1">
                  <li>Developed AWS-hosted React frontend + Lambda backend integration.</li>
                  <li>Optimized site speed and accessibility.</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold">Hell Pizza - Store Manager</h4>
                <p className="text-gray-400">Jan 2021 - Nov 2023</p>
                <ul className="list-disc ml-6 mt-1">
                  <li>Led daily operations, improved customer experience and staffing workflows.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Education Section */}
          <section id="education" className="py-12 px-6 max-w-5xl mx-auto">
            <h2 className="text-2xl font-semibold mb-6 text-sky-300">Education</h2>
            <ul className="list-disc ml-6 text-sm">
              <li><strong>Lincoln University</strong> — Master of Applied Computing (2024-2025, GPA 7+)</li>
              <li><strong>University of Canterbury</strong> — BCom in Info Systems & Economics (2020-2022)</li>
            </ul>
          </section>

          {/* Contact Section */}
          <section id="contact" className="py-12 px-6 max-w-5xl mx-auto ">
            <h2 className="text-2xl font-semibold mb-4 text-sky-300">Contact</h2>
            <p className="mb-4">📍 Christchurch · 📞 022 4099 690 · <a href="mailto:wenfei9904@gmail.com" className="text-sky-400 underline">wenfei9904@gmail.com</a></p>
            <div className="flex justify-center gap-6 text-2xl text-sky-400">
              <a href="https://github.com/RealFifii" target="_blank" rel="noreferrer"><FaGithub /></a>
              <a href="https://www.linkedin.com/in/wenfei-lu/" target="_blank" rel="noreferrer"><FaLinkedin /></a>
            </div>
          </section>

          {/* Footer */}
          <footer className="text-center text-sm py-4 text-gray-400">
            © 2025 Wenfei Lu. All rights reserved.
          </footer>
        </div>
        </div>
    </ClickSpark>
  );
}

export default App;
