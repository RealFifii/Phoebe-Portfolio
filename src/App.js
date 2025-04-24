import React from 'react';
import profile from './image/me.png';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

function App() {
  return (
    <div className="font-sans text-gray-800 bg-white">

      {/* Navigation */}
      <nav className="bg-white shadow sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-xl font-bold text-blue-600">Wenfei Lu</div>
          <ul className="flex flex-wrap gap-4 text-sm font-medium">
            <li><a href="#about" className="hover:text-blue-500">About</a></li>
            <li><a href="#skills" className="hover:text-blue-500">Skills</a></li>
            <li><a href="#projects" className="hover:text-blue-500">Projects</a></li>
            <li><a href="#experience" className="hover:text-blue-500">Experience</a></li>
            <li><a href="#education" className="hover:text-blue-500">Education</a></li>
            <li><a href="#contact" className="hover:text-blue-500">Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero */}
      <section className="text-center py-16 bg-gradient-to-r from-blue-600 to-indigo-500 text-white">
        <img src={profile} alt="Wenfei Lu" className="w-32 h-32 mx-auto rounded-full border-4 border-white mb-4 shadow-lg" />
        <h1 className="text-4xl font-bold">Hi, I'm Wenfei Lu</h1>
        <p className="mt-2 text-lg">Full-Stack Developer | React, Node.js, AWS | Christchurch</p>
      </section>

      {/* About */}
      <section id="about" className="py-12 px-6 max-w-5xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">About Me</h2>
        <p className="leading-relaxed">
          I'm a Master's student in Applied Computing at Lincoln University with experience in full-stack development, software testing, and cloud technologies. I'm passionate about creating intuitive digital experiences and currently seeking a role to grow as a developer.
        </p>
      </section>

      {/* Skills */}
      <section id="skills" className="py-12 bg-gray-50 px-6 max-w-5xl mx-auto">
        <h2 className="text-2xl font-semibold mb-6">Technical Skills</h2>
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

      {/* Projects */}
      <section id="projects" className="py-12 px-6 max-w-5xl mx-auto">
        <h2 className="text-2xl font-semibold mb-6">Project Experience</h2>
        <div className="space-y-6">
          <div>
            <h4 className="font-semibold">Digital Farm Simulator</h4>
            <a href="https://fglcomp639.pythonanywhere.com/" className="text-blue-600 underline" target="_blank" rel="noreferrer">Live Demo</a>
            <ul className="list-disc ml-6 mt-2 text-sm">
              <li>Simulates livestock and farm operations in real-time using Flask, SQL.</li>
              <li>Responsive UI with Bootstrap and dynamic content rendering.</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold">Secure Travel Journal App (Group Project)</h4>
            <ul className="list-disc ml-6 mt-2 text-sm">
              <li>Built with Flask, MySQL, and Bootstrap with hashed login and role-based access.</li>
              <li>Collaborative development using SCRUM with Jira and GitHub.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Work Experience */}
      <section id="experience" className="py-12 px-6 bg-gray-50 max-w-5xl mx-auto">
        <h2 className="text-2xl font-semibold mb-6">Work Experience</h2>
        <div className="space-y-4 text-sm">
          <div>
            <h4 className="font-semibold">Blue Rental - Junior Web Developer (Remote)</h4>
            <p className="text-gray-500">Dec 2024 - Feb 2025</p>
            <ul className="list-disc ml-6 mt-1">
              <li>Developed full-stack AWS-hosted React website with Lambda backend integration.</li>
              <li>Improved performance, user experience, and mobile responsiveness.</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold">Hell Pizza - Store Manager (Christchurch)</h4>
            <p className="text-gray-500">Jan 2021 - Nov 2023</p>
            <ul className="list-disc ml-6 mt-1">
              <li>Led a team of 15 staff, managing scheduling, inventory, and customer satisfaction.</li>
              <li>Improved team efficiency and implemented customer-first strategies.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Education */}
      <section id="education" className="py-12 px-6 max-w-5xl mx-auto">
        <h2 className="text-2xl font-semibold mb-6">Education</h2>
        <ul className="list-disc ml-6 text-sm">
          <li><strong>Lincoln University</strong> — Master of Applied Computing (2024–2025, GPA 7+)</li>
          <li><strong>University of Canterbury</strong> — BCom in Information Systems & Economics (2020–2022)</li>
        </ul>
      </section>

      {/* Contact */}
      <section id="contact" className="py-12 bg-blue-50 px-6 max-w-5xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Contact</h2>
        <p className="mb-4">📍 Christchurch · 📞 022 4099 690 · <a href="mailto:wenfei9904@gmail.com" className="text-blue-600 underline">wenfei9904@gmail.com</a></p>
        <div className="flex justify-center gap-6 text-2xl text-blue-600">
          <a href="https://github.com/RealFifii" target="_blank" rel="noreferrer"><FaGithub /></a>
          <a href="https://www.linkedin.com/in/wenfei-lu/" target="_blank" rel="noreferrer"><FaLinkedin /></a>
        </div>
      </section>

      <footer className="text-center text-sm py-4 text-gray-400">
        © 2025 Wenfei Lu. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
