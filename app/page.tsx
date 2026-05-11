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

          {/* Center: Social links and intro box */}
          <div className="hero-center-section">
            <div className="social-box">
              <h3>Connect</h3>
              <Link href="https://www.linkedin.com/in/blessing-uzoukwu" target="_blank">LinkedIn</Link>
              <Link href="https://github.com/Blessbae01" target="_blank">GitHub</Link>
              <Link href="https://twitter.com" target="_blank">Twitter</Link>
              <Link href="mailto:uzoukwublessing34@gmail.com">Email</Link>
            </div>
            <div className="intro-box">
              <h1>Hi, I&apos;m <span>Blessing</span></h1>
              <p>Full-Stack Developer</p>
            </div>
          </div>

          {/* Right: Description and portfolio link */}
          <div className="hero-right-section">
            <p className="hero-description">
              I build scalable, user-centric web applications using modern technologies. 
              Passionate about creating solutions that make a difference with the MERN stack and beyond.
            </p>
            <Link href="#projects" className="portfolio-link">
              <span>My Portfolio</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <h2 className="section-title">About Me</h2>
          <div className="about-grid">
            <div className="about-text">
              <p>
                I&apos;m a software engineer with a passion for building elegant solutions to complex problems. 
                With expertise in the MERN stack (MongoDB, Express, React, Node.js), I create full-stack web applications 
                that are both powerful and user-friendly.
              </p>
              <p>
                My journey in tech has taught me the importance of clean code, continuous learning, and collaboration. 
                I thrive in environments where I can contribute meaningful work and grow alongside talented teams.
              </p>
              <p>
                When I&apos;m not coding, you can find me exploring new technologies or sharing knowledge with the developer community.
              </p>
            </div>
            <div className="about-stats">
              <div className="stat-card">
                <div className="stat-number">5+</div>
                <div className="stat-label">Projects Completed</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">MERN</div>
                <div className="stat-label">Stack Expertise</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">100%</div>
                <div className="stat-label">Deployment Ready</div>
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
                <div className="image-placeholder">ADHD Quiz</div>
              </div>
              <div className="project-card-content">
                <h4>ADHD Awareness Quiz App</h4>
                <p className="project-description">
                  Interactive educational quiz application designed to increase awareness about ADHD. 
                  Features engaging questions and detailed feedback.
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
                <div className="image-placeholder">Digi Academy</div>
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
