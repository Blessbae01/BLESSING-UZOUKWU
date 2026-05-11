'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function Home() {
  const [activeNav, setActiveNav] = useState('home');

  const scrollToSection = (sectionId: string) => {
    setActiveNav(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="portfolio">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-brand">Blessing Uzoukwu</div>
          <div className="nav-links">
            <button
              onClick={() => scrollToSection('home')}
              className={activeNav === 'home' ? 'active' : ''}
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className={activeNav === 'about' ? 'active' : ''}
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className={activeNav === 'projects' ? 'active' : ''}
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection('skills')}
              className={activeNav === 'skills' ? 'active' : ''}
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className={activeNav === 'contact' ? 'active' : ''}
            >
              Contact
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-container">
          {/* Left: Image with geometric frames */}
          <div className="hero-image-section">
            <div className="image-frames">
              <div className="frame frame-1"></div>
              <div className="frame frame-2"></div>
              <div className="frame frame-3"></div>
              <Image 
                src="/images/headshot.png" 
                alt="Blessing Uzoukwu - Full Stack Developer" 
                width={300} 
                height={400}
                className="profile-image"
                priority
              />
            </div>
          </div>

          {/* Center: Intro box */}
          <div className="hero-center-section">
            <div className="intro-box">
              <h1>Hi, I&apos;m <span>Blessing</span></h1>
              <div className="intro-subtitle">
                <p>Full-Stack Developer</p>
                <div className="social-links">
                  <Link href="https://www.linkedin.com/in/blessing-uzoukwu" target="_blank" title="LinkedIn">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </Link>
                  <Link href="https://github.com/Blessbae01" target="_blank" title="GitHub">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </Link>
                  <Link href="https://twitter.com" target="_blank" title="Twitter">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2s9 5 20 5a9.5 9.5 0 00-9-5.5c4.75 2.25 7-7 7-7s1.1 5.5-5.5 8.5c4 2 8-1 8-1"/>
                    </svg>
                  </Link>
                  <Link href="mailto:uzoukwublessing34@gmail.com" title="Email">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="2" y="4" width="20" height="16" rx="2"/>
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Portfolio link */}
          <div className="hero-right-section">
            <Link href="#projects" className="portfolio-link">
              <span>Portfolio →</span>
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <div className="about-header">
            <h2 className="section-title">About Me</h2>
            <div className="about-accent"></div>
          </div>
          <div className="about-content">
            <div className="about-text">
              <div className="about-highlight">
                <p className="about-intro">
                  I&apos;m a full-stack developer passionate about crafting elegant digital solutions that solve real-world problems. With deep expertise in modern web technologies, I specialize in building scalable applications that blend functionality with beautiful user experiences.
                </p>
              </div>
              <div className="about-points">
                <div className="about-point">
                  <div className="point-icon">💡</div>
                  <div className="point-content">
                    <h4>Problem Solver</h4>
                    <p>I approach challenges systematically, breaking complex problems into manageable solutions using best practices and clean code.</p>
                  </div>
                </div>
                <div className="about-point">
                  <div className="point-icon">🚀</div>
                  <div className="point-content">
                    <h4>Full-Stack Developer</h4>
                    <p>From frontend interfaces to backend systems, I build complete web applications using MERN stack and modern technologies.</p>
                  </div>
                </div>
                <div className="about-point">
                  <div className="point-icon">🤝</div>
                  <div className="point-content">
                    <h4>Collaborative Team Player</h4>
                    <p>I thrive in collaborative environments, sharing knowledge and growing alongside talented developers and designers.</p>
                  </div>
                </div>
              </div>
              <p className="about-closing">
                When I&apos;m not coding, you can find me exploring emerging technologies or contributing to the developer community.
              </p>
            </div>
            <div className="about-stats">
              <div className="stat-card">
                <div className="stat-number">5+</div>
                <div className="stat-label">Projects</div>
                <div className="stat-desc">Deployed to production</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">MERN</div>
                <div className="stat-label">Stack</div>
                <div className="stat-desc">Core expertise</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">∞</div>
                <div className="stat-label">Learning</div>
                <div className="stat-desc">Always improving</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects">
        <div className="container">
          <h2 className="section-title">Featured Projects</h2>
          
          {/* DigiSave - Featured */}
          <div className="project-featured">
            <div className="project-image">
              <Image 
                src="/images/digisave.jpg" 
                alt="DigiSave - Smart Savings Platform" 
                width={500} 
                height={400}
                className="featured-image"
              />
            </div>
            <div className="project-content">
              <h3>DigiSave</h3>
              <p className="project-subtitle">Smart Savings Platform</p>
              <p>
                A comprehensive savings application designed to help users manage their finances intelligently. 
                Features automated savings goals and transaction tracking.
              </p>
                <div className="tech-stack">
                  <span>React</span>
                  <span>Node.js</span>
                  <span>Express</span>
                </div>
              <div className="project-links">
                <Link href="https://digisave-esusu-app.vercel.app/" target="_blank" className="project-link primary">
                  Live Demo →
                </Link>
                <Link href="https://github.com/Blessbae01/digisave-esusu-app" target="_blank" className="project-link secondary">
                  View Code →
                </Link>
              </div>
            </div>
          </div>

          {/* Projects Grid */}
          <div className="projects-grid">
            {/* TechVilla Hub */}
            <div className="project-card">
              <div className="project-card-image">
                <Image
                  src="/images/techvillahub.jpg"
                  alt="TechVilla Hub - Tech Career Platform"
                  width={400}
                  height={250}
                  quality={85}
                />
              </div>
              <div className="project-card-content">
                <h4>TechVilla Hub</h4>
                <p className="project-description">
                  Your gateway to the tech career of your dreams. Daily updates on global tech roles, 
                  internships, scholarships, and free training.
                </p>
                <div className="tech-stack">
                  <span>React</span>
                  <span>Node.js</span>
                  <span>Express</span>
                </div>
              </div>
            </div>

            {/* Discover Nigeria */}
            <div className="project-card">
              <div className="project-card-image">
                <Image
                  src="/images/greencity.jpg"
                  alt="Discover Nigeria - Tourism Platform"
                  width={400}
                  height={250}
                  quality={85}
                />
              </div>
              <div className="project-card-content">
                <h4>Discover Nigeria</h4>
                <p className="project-description">
                  A travel booking platform where users can explore Nigeria&apos;s most beautiful destinations 
                  and reserve spaces for unforgettable tours and experiences.
                </p>
                <div className="tech-stack">
                  <span>HTML</span>
                  <span>Bootstrap</span>
                  <span>JavaScript</span>
                </div>
                <div className="project-actions">
                  <Link 
                    href="https://github.com/Blessbae01/Vacation-website-for-DISCOVER-NIGERIA" 
                    target="_blank" 
                    className="action-link"
                  >
                    View Code →
                  </Link>
                </div>
              </div>
            </div>

            {/* ADHD Quiz App */}
            <div className="project-card">
              <div className="project-card-image">
                <Image
                  src="/images/adhd.png"
                  alt="ADHD Quiz App"
                  width={400}
                  height={250}
                  quality={85}
                />
              </div>
              <div className="project-card-content">
                <h4>ADHD Quiz App</h4>
                <p className="project-description">
                  Interactive assessment tool designed to help identify ADHD symptoms through engaging quiz format 
                  with real-time feedback.
                </p>
                <div className="tech-stack">
                  <span>HTML</span>
                  <span>Bootstrap</span>
                  <span>JavaScript</span>
                </div>
              </div>
            </div>

            {/* Digi Academy */}
            <div className="project-card">
              <div className="project-card-image">
                <Image
                  src="/images/digi-academy.jpg"
                  alt="Digi Academy - Online Learning Platform"
                  width={400}
                  height={250}
                  quality={85}
                />
              </div>
              <div className="project-card-content">
                <h4>Digi Academy</h4>
                <p className="project-description">
                  Online learning platform providing courses and resources for digital skills development. 
                  Empowering learners with practical tech education.
                </p>
                <div className="tech-stack">
                  <span>HTML</span>
                  <span>Bootstrap</span>
                  <span>JavaScript</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills">
        <div className="container">
          <h2 className="section-title">Skills & Technologies</h2>
          <div className="skills-grid">
            <div className="skill-category">
              <h4>Frontend</h4>
              <ul>
                <li>React & Next.js</li>
                <li>HTML5 & CSS3</li>
                <li>JavaScript (ES6+)</li>
                <li>Tailwind CSS</li>
                <li>Bootstrap</li>
              </ul>
            </div>
            <div className="skill-category">
              <h4>Backend</h4>
              <ul>
                <li>Node.js & Express</li>
                <li>RESTful APIs</li>
                <li>Server-side Logic</li>
                <li>Authentication & Authorization</li>
              </ul>
            </div>
            <div className="skill-category">
              <h4>Database & Tools</h4>
              <ul>
                <li>MongoDB</li>
                <li>Supabase</li>
                <li>Git & GitHub</li>
                <li>Vercel</li>
                <li>DevTools & Debugging</li>
              </ul>
            </div>
            <div className="skill-category">
              <h4>Soft Skills</h4>
              <ul>
                <li>Problem Solving</li>
                <li>Team Collaboration</li>
                <li>Communication</li>
                <li>Project Management</li>
                <li>Continuous Learning</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <h2 className="section-title">Let&apos;s Connect</h2>
          <p className="contact-subtitle">
            I&apos;m always interested in hearing about new projects and opportunities.
          </p>
          <div className="contact-methods">
            <Link href="https://github.com/Blessbae01" target="_blank" className="contact-card">
              <div className="contact-icon">🐙</div>
              <h4>GitHub</h4>
              <p>Check out my code</p>
            </Link>
            <Link href="https://www.linkedin.com/in/blessing-uzoukwu" target="_blank" className="contact-card">
              <div className="contact-icon">💼</div>
              <h4>LinkedIn</h4>
              <p>Connect with me</p>
            </Link>
            <Link href="mailto:uzoukwublessing34@gmail.com" className="contact-card">
              <div className="contact-icon">✉️</div>
              <h4>Email</h4>
              <p>Send me a message</p>
            </Link>
            <Link href="https://wa.me/2348061447290" target="_blank" className="contact-card">
              <div className="contact-icon">💬</div>
              <h4>WhatsApp</h4>
              <p>Chat with me</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; 2026 Blessing Uzoukwu. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
