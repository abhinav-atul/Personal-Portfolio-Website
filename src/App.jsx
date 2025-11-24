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
    { label: 'Projects', link: '#experience' },
    { label: 'Contact', link: '#contact' },
  ];

  // Data for the mobile menu's social links
  const socialItems = [
    { label: 'Twitter', link: 'https://twitter.com' },
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
            <p>Computer Science student passionate about building intelligent solutions with Machine Learning and Computer Vision. Let's create the future, one line of code at a time!</p>
            <div className="hero-buttons">
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
        <div className="stat-item"><h3>3+</h3><p>ML Projects</p></div>
        <div className="stat-item"><h3>10+</h3><p>Github Repos</p></div>
        <div className="stat-item"><h3>50+</h3><p>Github Contributions</p></div>
        <div className="stat-item"><h3>20+</h3><p>Leetcode Problems</p></div>
      </section>

      <section id="about" className="content-section">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <p>I am a dedicated and enthusiastic Computer Science and Engineering student at Vellore Institute of Technology. My passion lies in the fields of Machine Learning and Software Development, where I enjoy tackling complex problems and building practical applications. With a solid foundation in core subjects like Data Structures, Algorithms, and DBMS, I am actively developing my skills through hands-on projects. I am eager to contribute to innovative projects and collaborate with others to build the technology of the future.</p>
        </div>
      </section>

      <section id="tech-stack" className="content-section">
        <h2 className="section-title">My Tech Stack</h2>
        <p className="section-subtitle">Technologies I’ve been working with recently</p>
        <div className="tech-icons">
          <div className="tech-card"><i className="devicon-python-plain"></i><p>Python</p></div>
          <div className="tech-card"><i className="devicon-java-plain"></i><p>Java</p></div>
          <div className="tech-card"><i className="devicon-cplusplus-plain"></i><p>C++</p></div>
          <div className="tech-card"><i className="devicon-c-plain"></i><p>C</p></div>
          <div className="tech-card"><i className="devicon-javascript-plain"></i><p>JavaScript</p></div>
          <div className="tech-card"><i className="devicon-typescript-plain"></i><p>TypeScript</p></div>
          <div className="tech-card"><i className="devicon-react-original"></i><p>React</p></div>
          <div className="tech-card"><i className="devicon-nodejs-plain"></i><p>Node.js</p></div>
          <div className="tech-card"><i className="devicon-linux-plain"></i><p>Linux</p></div>
          <div className="tech-card"><i className="devicon-git-plain"></i><p>Git</p></div>
          <div className="tech-card"><i className="devicon-docker-plain"></i><p>Docker</p></div>
          <div className="tech-card"><i className="devicon-kubernetes-plain"></i><p>Kubernetes</p></div>
          <div className="tech-card"><i className="devicon-latex-original"></i><p>LaTeX</p></div>
          <div className="tech-card"><i className="devicon-figma-plain"></i><p>Figma</p></div>
        </div>
      </section>

      <section id="projects" className="content-section" style={{ position: 'relative', paddingBottom: '10rem', overflow: 'hidden' }}>
        <h2 className="section-title">Featured Projects</h2>
        <p className="section-subtitle">Here are some of the projects I'm proud of.</p>
        <div className="projects-grid">

          {/* <ElectricBorder color="#7df9ff" speed={1} chaos={0.5} thickness={2} style={{ borderRadius: 16 }}> */}
            <div className="project-card">
              <div className="project-image">
                <img src="/assets/67a1040cb519f74d5c6cd7f4_thumbnail.250129.jpg" alt="Driver Drowsiness Detection System" />
              </div>
              <div className="project-content">
                <h3>Driver Drowsiness Detection</h3>
                <p>  A real-time system built with OpenCV that applies deep learning models to detect driver drowsiness and trigger timely safety alerts.</p>
                <div className="project-tech">
                  <span>Python</span><span>OpenCV</span><span>TensorFlow</span>
                </div>
                <div className="project-links">
                  <a href="#" target="_blank" rel="noopener noreferrer" aria-label="GitHub Repo"><i className="fab fa-github"></i></a>
                  <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Live Demo"><i className="fas fa-external-link-alt"></i></a>
                </div>
              </div>
            </div>
          {/* </ElectricBorder> */}

          {/* <ElectricBorder color="#7df9ff" speed={1} chaos={0.5} thickness={2} style={{ borderRadius: 16 }}> */}
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
                  <a href="#" target="_blank" rel="noopener noreferrer" aria-label="GitHub Repo"><i className="fab fa-github"></i></a>
                  <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Live Demo"><i className="fas fa-external-link-alt"></i></a>
                </div>
              </div>
            </div>
          {/* </ElectricBorder> */}

          {/* <ElectricBorder color="#7df9ff" speed={1} chaos={0.5} thickness={2} style={{ borderRadius: 16 }}> */}
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
          {/* </ElectricBorder> */}

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
              <p className="timeline-date">Feb 2024 – Present</p>
              <p className="timeline-subtitle">Vellore Institute of Technology, Bhopal</p>
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
            <div className="cert-card"><h4>Fundamentals of UI/UX Design</h4><p>Microsoft</p><span>Issued Feb 2025</span></div>
            <div className="cert-card"><h4>The AWS Technical Essentials</h4><p>Simplilearn</p><span>Issued Jan 2025</span></div>
            <div className="cert-card"><h4>Google AI Essentials</h4><p>Google</p><span>Issued Nov 2024</span></div>
            <div className="cert-card"><h4>Python Essentials</h4><p>Vityarthi</p><span>Issued Nov 2024</span></div>
            <div className="cert-card"><h4>Career Essentials in Cybersecurity</h4><p>Microsoft</p><span>Issued Oct 2024</span></div>
            <div className="cert-card"><h4>Cybersecurity Foundations</h4><p>Project Management Institute</p><span>Issued Oct 2024</span></div>
            <div className="cert-card"><h4>Python Essential Training</h4><p>LinkedIn</p><span>Issued Sep 2024</span></div>
            <div className="cert-card"><h4>MATLAB Onramp</h4><p>MATLAB Coding</p><span>Issued Aug 2024</span></div>
            {/* Duplicated for seamless scroll effect */}
            <div className="cert-card"><h4>Fundamentals of UI/UX Design</h4><p>Microsoft</p><span>Issued Feb 2025</span></div>
            <div className="cert-card"><h4>The AWS Technical Essentials</h4><p>Simplilearn</p><span>Issued Jan 2025</span></div>
            <div className="cert-card"><h4>Google AI Essentials</h4><p>Google</p><span>Issued Nov 2024</span></div>
            <div className="cert-card"><h4>Python Essentials</h4><p>Vityarthi</p><span>Issued Nov 2024</span></div>
            <div className="cert-card"><h4>Career Essentials in Cybersecurity</h4><p>Microsoft</p><span>Issued Oct 2024</span></div>
            <div className="cert-card"><h4>Cybersecurity Foundations</h4><p>Project Management Institute</p><span>Issued Oct 2024</span></div>
            <div className="cert-card"><h4>Python Essential Training</h4><p>LinkedIn</p><span>Issued Sep 2024</span></div>
            <div className="cert-card"><h4>MATLAB Onramp</h4><p>MATLAB Coding</p><span>Issued Aug 2024</span></div>
          </div>
        </div>
      </section>

      <section id="experience" className="content-section">
        <h2 className="section-title">Projects & Experience</h2>
        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h3>Driver Drowsiness Detection System</h3>
              <p className="timeline-date">Ongoing</p>
              <p className="timeline-subtitle">Project Exhibition</p>
              <ul>
                <li>Developing a Driver Drowsiness Detection System using OpenCV and deep learning techniques to enhance driver safety through real-time monitoring.</li>
                <li>Implemented facial landmark detection and eye aspect ratio (EAR) analysis to identify signs of fatigue and trigger audible alerts.</li>
                <li>Integrated the system with a webcam-based interface for continuous, real-time detection and alerting during vehicle operation.</li>
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
                <li>Participated in a cybersecurity and machine learning-based workshop and hackathon.</li>
                <li>Built an "Intelligent Phishing Email Detection System" using models like SVM, Logistic Regression, and Random Forest.</li>
                <li>Developed a working Streamlit web app for real-time email classification with a high confidence score.</li>
              </ul>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h3>Reflux'25 Hackathon</h3>
              <p className="date">Jun 2025</p>
              <p className="timeline-subtitle">UX Club, VIT Bhopal</p>
              <ul>
                <li>Designed "UniVerse," a user-friendly portal for campus events, during a 24-hour UX design hackathon.</li>
                <li>Created the complete UI, user flow, and a high-fidelity prototype from scratch using Figma.</li>
                <li>Strengthened skills in UI/UX design, rapid prototyping, and collaborative design thinking.</li>
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
                <li>A university-level hackathon with 150+ teams, featuring an ideation round followed by prototype development.</li>
                <li>Advanced to Round 2 and built a functional platform addressing community needs like lost item recovery and local service discovery.</li>
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
                <li>A month-long open-source fest with 500+ participants and 25+ projects.</li>
                <li>Contributed to multiple repositories and secured a Top 25 Contributor rank.</li>
              </ul>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h3>MATLABverse Nextwave Hackathon</h3>
              <p className="timeline-date">Dec 2024</p>
              <p className="timeline-subtitle">Linpack Club, VIT Bhopal</p>
              <ul>
                <li>A challenging hackathon where our team created a women's safety alert website.</li>
                <li>Successfully built and deployed a functional website through GitHub Pages.</li>
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
