// src/App.jsx

import React, { useState, useEffect } from 'react';
import LiquidEther from './components/LiquidEther';
// import ElectricBorder from './components/ElectricBorder';
import StaggeredMenu from './components/StaggeredMenu';


function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const nameElement = document.querySelector('.hero-text .name');
    const timer = setTimeout(() => {
      if (nameElement) {
        nameElement.classList.add('animate');
      }
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  // Single source of truth for navigation links
  const navLinks = [
    { label: 'Home', link: '#home' },
    { label: 'About', link: '#about' },
    { label: 'Tech Stack', link: '#tech-stack' },
    { label: 'Qualification', link: '#qualification' },
    { label: 'Projects', link: '#projects' },
    { label: 'Contact', link: '#contact' },
  ];

  // Data for the mobile menu's social links
  const socialItems = [
    { label: 'GitHub', link: 'https://github.com/abhinav-atul' },
    { label: 'LinkedIn', link: 'https://www.linkedin.com/in/abhinav-atul/' },
  ];

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Background Animation */}
      <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100vh', zIndex: -1 }}>
        <LiquidEther colors={['#5227FF', '#FF9FFC', '#B19EEF']} />
      </div>

      {/* Header */}
      <header>
        <div className="logo"></div>

        {/* Desktop Navigation */}
        <nav id="nav" className='nav ul'>
          <ul>
            {navLinks.map((item) => (
              <li key={item.label}>
                <a href={item.link} onClick={handleLinkClick}>{item.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Menu (now self-contained) */}
        <div className="mobile-menu"style={{ height: '100vh', background: '#1a1a1a' }}>
          <StaggeredMenu
            position="right"
            items={navLinks}
            socialItems={socialItems}
            displaySocials={true}
            displayItemNumbering={true}
            menuButtonColor="#fff"
            openMenuButtonColor="#fff"
            changeMenuColorOnOpen={true}
            colors={['#B19EEF', '#5227FF']}
            logoUrl="/path-to-your-logo.svg"
            accentColor="#ff6b6b"
            onMenuOpen={() => console.log('Menu opened')}
            onMenuClose={() => console.log('Menu closed')}
          />
        </div>
      </header>

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <section id="home" className="hero">
          <div className="hero-text">
            <h1>Hi there <span className="wave">👋</span> <span className="accent-text">I'm</span></h1>
            <h2 className="name">Abhinav Atul</h2>
            <p>CS undergraduate at VIT Bhopal & IIT Madras, building distributed systems, agentic AI pipelines, and real-time ML applications. Let's create the future, one line of code at a time!</p>
            <div className="hero-buttons">
              <a href="/assets/resume_3.pdf" target="_blank" rel="noopener noreferrer" className="btn resume-btn"><i className="fas fa-download"></i> Resume</a>
              <a href="https://www.linkedin.com/in/abhinav-atul/" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="LinkedIn"><i className="fa-brands fa-linkedin-in"></i></a>
              <a href="https://github.com/abhinav-atul" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="GitHub"><i className="fa-brands fa-github"></i></a>
              <a href="https://leetcode.com/u/abhinav_atul/" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="LeetCode"><i className="fa-solid fa-code"></i></a>
            </div>
          </div>
          <div className="hero-image">
            <img src="/assets/1724252718197.jpg" alt="Abhinav Atul's profile picture" />
          </div>
        </section>
      </main>

      <section className="stats">
        <div className="stat-item"><h3>6+</h3><p>ML/AI Projects</p></div>
        <div className="stat-item"><h3>8.71</h3><p>CGPA</p></div>
        <div className="stat-item"><h3>Top 3%</h3><p>GSSoC 2026</p></div>
        <div className="stat-item"><h3>5+</h3><p>Hackathons</p></div>
      </section>

      <section id="about" className="content-section">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <p>CS undergraduate at VIT Bhopal (CGPA: 8.71) and IIT Madras BS Data Science, with experience building distributed systems, agentic AI pipelines, and real-time ML applications. Proficient in C++, Python, and Java with strong foundations in DSA, system design, and scalable backend development. Ranked in the top 3% among 43,586 contributors in GSSoC 2026, and actively contributing to open-source projects and hackathons.</p>
        </div>
      </section>      <section id="tech-stack" className="content-section">
        <h2 className="section-title">My Tech Stack</h2>
        <p className="section-subtitle">Technologies I've been working with recently</p>
        <div className="tech-icons">
          <div className="tech-card"><i className="devicon-cplusplus-plain"></i><p>C++</p></div>
          <div className="tech-card"><i className="devicon-python-plain"></i><p>Python</p></div>
          <div className="tech-card"><i className="devicon-java-plain"></i><p>Java</p></div>
          <div className="tech-card"><i className="devicon-c-plain"></i><p>C</p></div>
          <div className="tech-card"><i className="devicon-javascript-plain"></i><p>JavaScript</p></div>
          <div className="tech-card"><i className="devicon-typescript-plain"></i><p>TypeScript</p></div>
          <div className="tech-card"><i className="devicon-fastapi-plain"></i><p>FastAPI</p></div>
          <div className="tech-card"><i className="devicon-react-original"></i><p>React</p></div>
          <div className="tech-card"><i className="devicon-postgresql-plain"></i><p>PostgreSQL</p></div>
          <div className="tech-card"><i className="devicon-supabase-plain"></i><p>Supabase</p></div>
          <div className="tech-card"><i className="devicon-opencv-plain"></i><p>OpenCV</p></div>
          <div className="tech-card"><i className="devicon-git-plain"></i><p>Git</p></div>
          <div className="tech-card"><i className="devicon-docker-plain"></i><p>Docker</p></div>
          <div className="tech-card"><i className="devicon-linux-plain"></i><p>Linux</p></div>
        </div>
      </section>

      <section id="projects" className="content-section" style={{ position: 'relative', paddingBottom: '10rem', overflow: 'hidden' }}>
        <h2 className="section-title">Featured Projects</h2>
        <p className="section-subtitle">Here are some of the projects I'm proud of.</p>
        <div className="projects-grid">

            <div className="project-card">
              <div className="project-content">
                <h3>RegisterSync AI</h3>
                <p>Multi-agent AI platform ingesting RBI/SEBI PDFs, extracting compliance rules via locally hosted Ollama LLM, and auto-routing tasks to departments — no cloud API dependency. Features conflict-detection and verification agents with 7+ FastAPI endpoints.</p>
                <div className="project-tech">
                  <span>Python</span><span>FastAPI</span><span>React</span><span>Ollama</span><span>PostgreSQL</span>
                </div>
                <div className="project-links">
                  <a href="https://github.com/abhinav-atul" target="_blank" rel="noopener noreferrer" aria-label="GitHub Repo"><i className="fab fa-github"></i></a>
                </div>
              </div>
            </div>

            <div className="project-card">
              <div className="project-content">
                <h3>Smart Transit System</h3>
                <p>Distributed real-time transit platform with vehicle tracking, ETA prediction, and passenger analytics across concurrent data streams using 10+ RESTful APIs. Integrated YOLOv8-based crowd detection for real-time passenger flow monitoring.</p>
                <div className="project-tech">
                  <span>Python</span><span>FastAPI</span><span>PostgreSQL</span><span>YOLOv8</span>
                </div>
                <div className="project-links">
                  <a href="https://github.com/abhinav-atul" target="_blank" rel="noopener noreferrer" aria-label="GitHub Repo"><i className="fab fa-github"></i></a>
                </div>
              </div>
            </div>

            <div className="project-card">
              <div className="project-content">
                <h3>IoT Intrusion Detection System</h3>
                <p>End-to-end ML pipeline on CICIDS2017 (2.8M+ records, 78 features) classifying traffic across 7 attack categories. Evaluated Random Forest and KNN with feature selection to handle class imbalance.</p>
                <div className="project-tech">
                  <span>Python</span><span>Scikit-learn</span><span>Feature Engineering</span>
                </div>
                <div className="project-links">
                  <a href="https://github.com/abhinav-atul" target="_blank" rel="noopener noreferrer" aria-label="GitHub Repo"><i className="fab fa-github"></i></a>
                </div>
              </div>
            </div>

            <div className="project-card">
              <div className="project-image">
                <img src="/assets/67a1040cb519f74d5c6cd7f4_thumbnail.250129.jpg" alt="Driver Drowsiness Detection System" />
              </div>
              <div className="project-content">
                <h3>Driver Drowsiness Detection</h3>
                <p>Real-time fatigue detection pipeline using CNN and facial landmark analysis, achieving 84.9% accuracy with sub-second alert response on live video feeds.</p>
                <div className="project-tech">
                  <span>Python</span><span>OpenCV</span><span>CNN</span>
                </div>
                <div className="project-links">
                  <a href="https://github.com/abhinav-atul" target="_blank" rel="noopener noreferrer" aria-label="GitHub Repo"><i className="fab fa-github"></i></a>
                </div>
              </div>
            </div>

            <div className="project-card">
              <div className="project-image">
                <img src="/assets/blog-phishing-sm-twitter.jpg" alt="Phishing Email Detector" />
              </div>
              <div className="project-content">
                <h3>Intelligent Phishing Detector</h3>
                <p>A web app built with Streamlit that uses machine learning models like SVM and Random Forest to classify emails in real-time.</p>
                <div className="project-tech">
                  <span>Python</span><span>Streamlit</span><span>Scikit-learn</span>
                </div>
                <div className="project-links">
                  <a href="https://github.com/abhinav-atul" target="_blank" rel="noopener noreferrer" aria-label="GitHub Repo"><i className="fab fa-github"></i></a>
                </div>
              </div>
            </div>

            <div className="project-card">
              <div className="project-image">
                <img src="/assets/Screenshot 2025-08-26 115053.png" alt="UniVerse Event Portal" />
              </div>
              <div className="project-content">
                <h3>UniVerse - Event Portal UI/UX</h3>
                <p>A high-fidelity prototype for a campus event portal designed from scratch in Figma during a 24-hour hackathon.</p>
                <div className="project-tech">
                  <span>Figma</span><span>UI/UX Design</span>
                </div>
                <div className="project-links">
                  <a href="https://www.figma.com/proto/ZfcMVqeuMXoveG0tBmo6on/UniVerse--Reflux-?node-id=2-2&starting-point-node-id=2%3A2&t=v060OWLwCJA1Nffy-1" target="_blank" rel="noopener noreferrer" aria-label="Live Demo"><i className="fas fa-external-link-alt"></i></a>
                </div>
              </div>
            </div>

        </div>
      </section>


      <section id="qualification" className="content-section">
        <h2 className="section-title">Qualification</h2>
        <div className="timeline">
          <div className="timeline-item">
            <img src="/assets/logos/VIT University_id3Zck2kbe_0.png" alt="VIT Bhopal Logo" className="timeline-logo" />
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h3>Bachelor of Technology (B.Tech) in Computer Science and Engineering</h3>
              <p className="timeline-date">Aug 2024 – Expected May 2028</p>
              <p className="timeline-subtitle">Vellore Institute of Technology, Bhopal — CGPA: 8.71/10</p>
            </div>
          </div>
          <div className="timeline-item">
            <img src="/assets/logos/IIT Madras_idSRvDXafD_0.png" alt="IIT Madras Logo" className="timeline-logo" />
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h3>Bachelor of Science - BS, Data Science and Application</h3>
              <p className="timeline-date">Sep 2024 - Present</p>
              <p className="timeline-subtitle">Indian Institute of Technology, Madras</p>
            </div>
          </div>
          <div className="timeline-item">
            <img src="/assets/logos/partner23.png" alt="Rankers International School Logo" className="timeline-logo" />
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h3>Intermediate (Class 12)</h3>
              <p className="timeline-date">May 2022 – Jun 2024</p>
              <p className="timeline-subtitle">Rankers International School, Indore</p>
            </div>
          </div>
          <div className="timeline-item">
            <img src="/assets/logos/Delhi Public School Muzaffarpur_idtBOcQlZo_0.png" alt="Delhi Public School Logo" className="timeline-logo" />
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h3>Matriculation (Class 10)</h3>
              <p className="timeline-date">Apr 2014 – May 2022</p>
              <p className="timeline-subtitle">Delhi Public School, Bhagalpur</p>
            </div>
          </div>
        </div>

        <h3 className="subsection-title">Certifications</h3>
        <div className="cert-scroller">
          <div className="cert-track">
            <div className="cert-card"><h4>Oracle Cloud Infrastructure 2025 Certified Data Science Professional</h4><p>Oracle</p><span>Issued 2025</span></div>
            <div className="cert-card"><h4>Google AI Essentials</h4><p>Google</p><span>Issued Nov 2024</span></div>
            <div className="cert-card"><h4>The Bits and Bytes of Computer Networking</h4><p>Google</p><span>Issued 2025</span></div>
            <div className="cert-card"><h4>Fundamentals of UI/UX Design</h4><p>Microsoft</p><span>Issued Feb 2025</span></div>
            <div className="cert-card"><h4>The AWS Technical Essentials</h4><p>Simplilearn</p><span>Issued Jan 2025</span></div>
            <div className="cert-card"><h4>Career Essentials in Cybersecurity</h4><p>Microsoft</p><span>Issued Oct 2024</span></div>
            {/* Duplicated for seamless scroll effect */}
            <div className="cert-card"><h4>Oracle Cloud Infrastructure 2025 Certified Data Science Professional</h4><p>Oracle</p><span>Issued 2025</span></div>
            <div className="cert-card"><h4>Google AI Essentials</h4><p>Google</p><span>Issued Nov 2024</span></div>
            <div className="cert-card"><h4>The Bits and Bytes of Computer Networking</h4><p>Google</p><span>Issued 2025</span></div>
            <div className="cert-card"><h4>Fundamentals of UI/UX Design</h4><p>Microsoft</p><span>Issued Feb 2025</span></div>
            <div className="cert-card"><h4>The AWS Technical Essentials</h4><p>Simplilearn</p><span>Issued Jan 2025</span></div>
            <div className="cert-card"><h4>Career Essentials in Cybersecurity</h4><p>Microsoft</p><span>Issued Oct 2024</span></div>
          </div>
        </div>
      </section>

      <section id="experience" className="content-section">
        <h2 className="section-title">Experience & Activities</h2>
        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h3>LINPACK Club — Technical Team Member</h3>
              <p className="timeline-date">Aug 2025 – Present</p>
              <p className="timeline-subtitle">VIT Bhopal</p>
              <ul>
                <li>Contributing to internal web platform development using React and Supabase in a cross-functional team of 10+ members.</li>
              </ul>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h3>GirlScript Summer of Code (GSSoC) 2026</h3>
              <p className="timeline-date">2026</p>
              <p className="timeline-subtitle">Open Source Contributor</p>
              <ul>
                <li>Ranked in the top 3% among 43,586 contributors.</li>
                <li>Contributing features and bug fixes to production JavaScript/React codebases across multiple repositories.</li>
              </ul>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h3>Smart India Hackathon 2025</h3>
              <p className="timeline-date">2025</p>
              <p className="timeline-subtitle">National Level Hackathon</p>
              <ul>
                <li>Led backend development for a real-time smart transit analytics system in a 6-member team.</li>
                <li>Integrated distributed data pipelines within a 36-hour build cycle.</li>
              </ul>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h3>PyDROIDX Hackathon</h3>
              <p className="timeline-date">Jul 2025</p>
              <p className="timeline-subtitle">Android Club, VIT Bhopal</p>
              <ul>
                <li>Built an "Intelligent Phishing Email Detection System" using SVM, Logistic Regression, and Random Forest.</li>
                <li>Developed a working Streamlit web app for real-time email classification.</li>
              </ul>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h3>Reflux'25 Hackathon</h3>
              <p className="timeline-date">Jun 2025</p>
              <p className="timeline-subtitle">UX Club, VIT Bhopal</p>
              <ul>
                <li>Designed "UniVerse," a user-friendly portal for campus events, during a 24-hour UX design hackathon.</li>
                <li>Created the complete UI, user flow, and a high-fidelity prototype from scratch using Figma.</li>
              </ul>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h3>SoIVIT Hackathon-2025</h3>
              <p className="timeline-date">Mar 2025</p>
              <p className="timeline-subtitle">Hostel Committee, VIT Bhopal</p>
              <ul>
                <li>A university-level hackathon with 150+ teams. Advanced to Round 2 and built a community platform.</li>
              </ul>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h3>Android Club Winter of Code (AcWoC)</h3>
              <p className="timeline-date">Feb 2025</p>
              <p className="timeline-subtitle">Android Club, VIT Bhopal</p>
              <ul>
                <li>Month-long open-source fest with 500+ participants. Secured Top 25 Contributor rank.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="content-section">
        <h2 className="section-title">Get In Touch</h2>
        <p className="contact-subtitle">Have a question or want to work together? Leave a message!</p>
        <form className="contact-form" action="#">
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" placeholder="Your Message" rows="5" required></textarea>
          <button type="submit" className="btn resume-btn">Send Message</button>
        </form>
      </section>

      <footer>
        <p>&copy; 2025 Abhinav Atul. All Rights Reserved.</p>
      </footer>
    </>
  );
}

export default App;
