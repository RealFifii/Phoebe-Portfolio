import React, { useState } from 'react';
import profile from './image/me.png';
import ClickSpark from './Animations/ClickSpark/ClickSpark';
import Particles from './Animations/Particles/Particles';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <ClickSpark>
      <div className="bg-black min-h-screen text-white font-sans">
      <div className="absolute inset-0 z-0">
        <Particles
          particleColors={['#ffffff', '#ffffff']}
          particleCount={700}
          particleSpread={10}
          speed={0.01}
          particleBaseSize={200}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>
        <div className="relative z-20">

          {/* Navigation */}
          <nav className="bg-black/70 shadow-md sticky top-0 z-50 backdrop-blur-md">
            <div className="max-w-6xl mx-auto px-4 py-3 flex flex-wrap items-center justify-between text-white">
              <div className="text-xl font-bold text-sky-400">Phoebe Lu</div>

              {/* Hamburger button */}
              <div className="sm:hidden">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  type="button"
                  className="flex flex-col justify-center items-center w-8 h-8 group focus:outline-none"
                >
                  {/* Morphing Hamburger to X */}
                  <div
                    className={`w-6 h-0.5 bg-sky-400 mb-1 transition-all duration-300 ease-in-out ${
                      isOpen ? "rotate-45 translate-y-1.5" : ""
                    }`}
                  ></div>
                  <div
                    className={`w-6 h-0.5 bg-sky-400 transition-all duration-300 ease-in-out ${
                      isOpen ? "opacity-0" : ""
                    }`}
                  ></div>
                  <div
                    className={`w-6 h-0.5 bg-sky-400 mt-1 transition-all duration-300 ease-in-out ${
                      isOpen ? "-rotate-45 -translate-y-1.5" : ""
                    }`}
                  ></div>
                </button>
              </div>

              {/* Nav links */}
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out w-full sm:w-auto sm:max-h-none sm:opacity-100 sm:scale-100 sm:flex sm:items-center ${
                  isOpen ? "max-h-96 opacity-100 scale-100" : "max-h-0 opacity-0 scale-95"
                }`}
              >
                <ul className="flex flex-col sm:flex-row gap-2 sm:gap-4 text-sm font-medium mt-4 sm:mt-0">
                  {[
                    { label: "About", href: "#about" },
                    { label: "Skills", href: "#skills" },
                    { label: "Projects", href: "#projects" },
                    { label: "Experience", href: "#experience" },
                    { label: "Education", href: "#education" },
                    { label: "Contact", href: "#contact" },
                  ].map((link) => (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        onClick={() => setIsOpen(false)} // ✅ Auto-close when clicking a link
                        className="hover:text-sky-400"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </nav>

          {/* Hero Section */}
          <section className="relative w-full h-[500px] sm:h-[600px] flex items-center justify-center text-center overflow-hidden">
            {/* Particles Background */}
            {/* <div className="absolute inset-0 z-0">
            <LetterGlitch
              glitchSpeed={50}
              centerVignette={true}
              outerVignette={false}
              smooth={true}
            />
            </div> */}

            {/* Hero Content */}
            <div className="relative z-10 px-4">
              <img
                src={profile}
                alt="Phoebe Lu"
                className="w-24 h-24 sm:w-32 sm:h-32 mx-auto rounded-full border-4 border-white mb-4 shadow-lg"
              />
              <h1 className="text-2xl sm:text-4xl font-bold">Hi, I'm Phoebe Lu</h1>
              <p className="mt-2 text-base sm:text-lg">
              Full Stack Developer | Experienced in Full-Stack Development | Familiar with Python, JavaScript, SQL, React, Node.js, and AWS Services
              </p>
            </div>
          </section>

          {/* About Section */}
          <section id="about" className="py-8 sm:py-12 px-4 sm:px-6 max-w-5xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-4 text-sky-300">About Me</h2>
            <p className="leading-relaxed text-sm sm:text-base">
              I am an experienced software developer with 1.5 years of expertise in software development. I enjoy exploring new programming concepts in software development.
              <ul className="list-disc ml-6">
                <li>Familiar with Python, JavaScript, SQL. Some knowledge of C# and architectural patterns such as MVC, MVP and MVVM.</li>
                <li>API: Skilled in developing REST APIs, optimising and uplifting frameworks.</li>
                <li>Cloud: Worked with cloud platforms like AWS and Azure, including services like Lambda, CI/CD pipelines, and YAML based workflows.</li>
                <li>Agile: Worked in Agile Scrum teams and contributed to sprints, stand-ups, retrospectives and unit tests to support code quality and reliability.</li>
              </ul>
              
            </p>
          </section>

          {/* Skills Section */}
          <section id="skills" className="py-8 sm:py-12 px-4 sm:px-6 bg-black/60 max-w-5xl mx-auto rounded-xl">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-6 text-sky-300">Technical Skills</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-sm sm:text-base">

              {/* Column 1 */}
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-2 text-sky-200">Programming Languages</h4>
                  <ul className="list-none ml-0">
                    {[
                      { name: "Python", level: "◼︎◼︎◼︎ Advanced" },
                      { name: "JavaScript", level: "◼︎◼︎◻︎ Intermediate" },
                      { name: "C#", level: "◼︎◼︎◻︎ Intermediate" },
                      { name: "Java", level: "◼︎◼︎◻︎ Intermediate" },
                      { name: "PHP", level: "◼︎◼︎◻︎ Intermediate" },
                      { name: "SQL", level: "◼︎◼︎◻︎ Intermediate" },
                      { name: "HTML/CSS", level: "◼︎◼︎◻︎ Intermediate" },
                    ].map((lang) => (
                      <li key={lang.name} className="grid grid-cols-2 gap-4 py-1">
                        <span>{lang.name}</span>
                        <span>{lang.level}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Column 2 */}
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-2 text-sky-200">Frameworks & Libraries</h4>
                  <ul className="list-disc ml-6">
                    <li>React, Node.js, Flask</li>
                    <li>Bootstrap, Tailwind CSS</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-sky-200">Tools & IDEs</h4>
                  <ul className="list-disc ml-6">
                    <li>VS Code, Pycharm, IDEA, MySQL Workbench</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-sky-200">Design & Prototyping</h4>
                  <ul className="list-disc ml-6">
                    <li>Figma</li>
                  </ul>
                </div>
              </div>

              {/* Column 3 */}
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-2 text-sky-200">Version Control & Agile</h4>
                  <ul className="list-disc ml-6">
                    <li>GitHub, Bitbucket</li>
                    <li>Jira, Confluence</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-sky-200">CI/CD & Cloud</h4>
                  <ul className="list-disc ml-6">
                    <li>AWS, Docker</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-sky-200">API & Testing</h4>
                  <ul className="list-disc ml-6">
                    <li>Postman, Manual Testing</li>
                  </ul>
                </div>
              </div>

            </div>
          </section>

          {/* Experience Section */}
          <section id="experience" className="py-8 sm:py-12 px-4 sm:px-6 max-w-5xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-6 text-sky-300">Experience</h2>
            <div className="space-y-10 text-sm sm:text-base">

              {/* Blue Rental */}
              <div>
                <h4 className="font-semibold">Blue Rental — Software Developer</h4>
                <a href="https://bluerental.co.nz/" className="text-sky-400" target="_blank" rel="noreferrer">
                  👉 Blue Rental
                </a>
                <p className="text-gray-400">Dec 2024 - Feb 2025</p>
                <ul className="list-disc ml-6 mt-2">
                  <li>Designed and implemented a responsive front-end using React, hosted on AWS S3 for fast load times and high availability.</li>
                  <li>Developed modular Node.js backend services using AWS Lambda, applying MVP architecture to refactor legacy logic and uplift existing codebase.</li>
                  <li>Integrated multiple third-party and internal REST APIs, including a vehicle suggestion feature, using Lambda functions to handle data fetching, formatting, and failover strategies.</li>
                  <li>Performed manual security testing such as SQL injection, input validation and patched vulnerabilities in API endpoints.</li>
                </ul>
              </div>

              {/* Online Issue Tracker */}
              <div>
                <h4 className="font-semibold">Issue Tracking System — Software Developer</h4>
                <a href="https://phoebelu1162540.pythonanywhere.com/" className="text-sky-400" target="_blank" rel="noreferrer">
                  👉 Online Issue Tracker
                </a>
                <p className="text-gray-400">Nov 2024 - Dec 2024</p>
                <ul className="list-disc ml-6 mt-2">
                  <li>Designed and implemented a modular Flask architecture.</li>
                  <li>Built and normalised a relational MySQL database, applying best practices in data modeling, indexing, and foreign key enforcement.</li>
                  <li>Developed a fully responsive, mobile-friendly UI styled with Bootstrap and customised CSS to match a campground branding theme.</li>
                  <li>Used GitHub for version control with structured commits, pull requests, and issue tracking.</li>
                </ul>
              </div>

              {/* Travel Journal */}
              <div>
                <h4 className="font-semibold">Travel Journal Web App — Software Developer</h4>
                <a href="https://fglcomp639.pythonanywhere.com/" className="text-sky-400" target="_blank" rel="noreferrer">
                  👉 Online Travel Journal
                </a>
                <p className="text-gray-400">Oct 2024 - Nov 2024</p>
                <ul className="list-disc ml-6 mt-2">
                  <li>Worked in a SCRUM team using Jira and GitHub for Agile collaboration and version control.</li>
                  <li>Designed front-end components using HTML, CSS, and JavaScript.</li>
                  <li>Implemented secure data handling techniques, connecting the python flask back-end to a MySQL database while ensuring hashing for sensitive information like password.</li>
                  <li>Wrote and executed manual test cases to validate functionality and edge cases.</li>
                </ul>
              </div>

              {/* Agronomist NZ Ltd */}
              <div>
                <h4 className="font-semibold">Agronomist NZ Ltd — Software Tester</h4>
                <p className="text-gray-400">July 2024 - Oct 2024</p>
                <ul className="list-disc ml-6 mt-2">
                  <li>Worked in a Scrum team using Jira for sprint planning and tracking QA progress across test cycles.</li>
                  <li>Created and executed detailed test cases in Zephyr Scale, covering both web UI and REST APIs, including suggestion/autocomplete features and dynamic form logic.</li>
                  <li>Tested secure authentication flows involving SSO, token handling, and encryption/decryption of sensitive user data.</li>
                  <li>Supported unit testing initiatives, helping developers validate logic with mocked API responses, assertions, and debugging test failures.</li>
                  <li>Used Postman for manual API testing, validating response schemas, error handling, and backend integration with clear documentation of results.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Education Section */}
          <section id="education" className="py-8 sm:py-12 px-4 sm:px-6 max-w-5xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-6 text-sky-300">Education</h2>
            <ul className="list-disc ml-6 text-sm sm:text-base">
              <li><strong>Lincoln University</strong> — Master of Applied Computing (2024-2025, GPA 7)</li>
              <li><strong>University of Canterbury</strong> — BCom in Info Systems & Economics (2020-2022)</li>
            </ul>
          </section>

          {/* Contact Section */}
          <section id="contact" className="py-8 sm:py-12 px-4 sm:px-6 max-w-5xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-4 text-sky-300">Contact</h2>
            <p className="mb-4 text-sm sm:text-base">
              📍 Christchurch · 📞 022 4099 690 · <a href="mailto:wenfei9904@gmail.com" className="text-sky-400 underline">wenfei9904@gmail.com</a>
            </p>
            <div className="flex justify-center gap-6 text-2xl text-sky-400">
              <a href="https://github.com/RealFifii" target="_blank" rel="noreferrer"><FaGithub /></a>
              <a href="https://www.linkedin.com/in/wenfei-lu/" target="_blank" rel="noreferrer"><FaLinkedin /></a>
            </div>
          </section>

          {/* Footer */}
          <footer className="text-center text-xs sm:text-sm py-4 text-gray-400">
            © 2025 Phoebe Lu. All rights reserved.
          </footer>
        </div>
      </div>
    </ClickSpark>
  );
}

export default App;
