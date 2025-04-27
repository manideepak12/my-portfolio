import React, { useState, useEffect } from 'react';

// Updated ProjectCard component with more compact design
const ProjectCard = ({ title, description, github, live, image, category }) => {
  return (
    <div className="project-card">
      <div className="project-image-container">
        <img src={image} alt={title} className="project-image" />
      </div>
      <div className="project-content">
        <h3 className="project-title">{title}</h3>
        <p className="project-description">{description}</p>
        <div className="project-links">
          {github && (
            <a href={github} target="_blank" rel="noopener noreferrer" className="project-link github-link">
              <svg className="github-icon" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              GitHub
            </a>
          )}
          {live && (
            <a href={live} target="_blank" rel="noopener noreferrer" className="project-link live-link">
              <svg className="live-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              Live Demo
            </a>
          )}
        </div>
      </div>
      
      <style jsx>{`
        .project-card {
          background-color: white;
          border-radius: 10px;
          overflow: hidden;
          box-shadow: 0 4px 10px -2px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          height: 100%;
          display: flex;
          flex-direction: column;
        }
        
        .project-card:hover {
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
          transform: translateY(-5px);
        }
        
        .project-image-container {
          height: 180px;
          overflow: hidden;
          position: relative;
        }
        
        .project-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }
        
        .project-card:hover .project-image {
          transform: scale(1.05);
        }
        
        .project-content {
          padding: 1rem;
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }
        
        .project-title {
          font-size: 1.3rem;
          font-weight: 700;
          color: #1e293b;
          margin-bottom: 0.5rem;
          text-align: center;
        }
        
        .project-description {
          color: #64748b;
          font-size: 0.875rem;
          line-height: 1.5;
          margin-bottom: 1rem;
          flex-grow: 1;
        }
        
        .project-links {
          display: flex;
          justify-content: space-between;
          gap: 0.5rem;
          margin-top: auto;
        }
        
        .project-link {
          display: flex;
          align-items: center;
          padding: 0.4rem 0.75rem;
          border-radius: 5px;
          font-size: 0.75rem;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.2s ease;
          flex: 1;
          justify-content: center;
        }
        
        .github-link {
          background-color: #0f172a;
          color: white;
        }
        
        .github-link:hover {
          background-color: #1e293b;
        }
        
        .live-link {
          background-color: #3b82f6;
          color: white;
        }
        
        .live-link:hover {
          background-color: #2563eb;
        }
        
        .github-icon, .live-icon {
          height: 0.875rem;
          width: 0.875rem;
          margin-right: 0.35rem;
        }
      `}</style>
    </div>
  );
};

function Projects() {
  const [filter, setFilter] = useState('all');
  const [animateCards, setAnimateCards] = useState(false);
  
  const projects = [
    {
      title: "STAYHUB",
      description: "Full-stack project with student/admin portals, UPI payments, and complaint system. Built with React, Node.js, and MySQL(DEVELOPING STAGE).",
      github: "https://res.cloudinary.com/duhabjmtf/image/upload/v1745776558/aa_hjtvst.png",
      live: "https://res.cloudinary.com/duhabjmtf/image/upload/v1745775629/sss_ctmrxu.png",
      image: "https://res.cloudinary.com/duhabjmtf/image/upload/v1745604009/Screenshot_2025-04-25_232847_jedaun.png",
      category: "fullstack"
    },
    {
      title: "Kitchen Canvas",
      description: "Kitchen Canvas is a React-based web app that suggests personalized recipes based on user inputs such as ingredients, dietary preferences, and cuisine. With a dynamic user interface, it provides tailored meal options, making it easier to explore and create meals suited to individual tastes and restrictions.",
      github: "https://github.com/manideepak12/Kitchen-Canvas",
      live: "https://kitchen-canvas.vercel.app/",
      image: "https://res.cloudinary.com/duhabjmtf/image/upload/v1745565768/Screenshot_2025-04-25_125232_cje8pe.png",
      category: "frontend"
    },
    {
      title: "Story Cafe Website",
      description: "Story Cafe is a charming and cozy cafe website designed based on a local cafe in Kompally, Hyderabad. This project was developed using basic HTML and CSS to create a warm, user-friendly interface that reflects the cafe's inviting atmosphere. The website features essential sections like the cafe's story, menu highlights, and contact information, all presented with a simple and clean design.",
      github: "https://github.com/manideepak12/STORY-CAFE-WEBSITE",
      live: "https://manideepak12.github.io/STORY-CAFE-WEBSITE/",
      image: "https://res.cloudinary.com/duhabjmtf/image/upload/v1745565865/Screenshot_2025-04-25_125359_sor79k.png",
      category: "frontend"
    },
    {
      title: "Alcohol Detection System",
      description: "Alcohol Detection and Engine Locking System is an innovative and crucial project developed as part of a diploma final year major project. This system addresses the critical issue of drunk driving by integrating advanced sensor technology with the widely-used Arduino Uno microcontroller.",
      github: "https://github.com/manideepak12/ALCOHOL-DETECTION-AND-ENGINE-LOCKING-SYSTEM",
      image: "https://res.cloudinary.com/duhabjmtf/image/upload/v1745567093/20230403_095836_2_sxchmx.jpg",
      category: "hardware"
    },
  ];

  useEffect(() => {
    // Trigger animation after component mount
    setAnimateCards(true);
    
    // Add scroll event listener for parallax effect
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const heading = document.querySelector('.projects-heading');
      if (heading) {
        heading.style.transform = `translateY(${scrollPosition * 0.1}px)`;
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Filter projects based on selected category
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section className="projects-section">
      <div className="projects-container">
        <h2 className="projects-heading">
          <span className="heading-span">
            My Projects
            <span className="heading-underline"></span>
          </span>
        </h2>
        
        <div className="filter-buttons">
          <button 
            className={`filter-btn ${filter === 'all' ? 'active' : ''}`} 
            onClick={() => setFilter('all')}
          >
            All Projects
          </button>
          <button 
            className={`filter-btn ${filter === 'frontend' ? 'active' : ''}`} 
            onClick={() => setFilter('frontend')}
          >
            Frontend
          </button>
          <button 
            className={`filter-btn ${filter === 'fullstack' ? 'active' : ''}`} 
            onClick={() => setFilter('fullstack')}
          >
            Full Stack
          </button>
          <button 
            className={`filter-btn ${filter === 'hardware' ? 'active' : ''}`} 
            onClick={() => setFilter('hardware')}
          >
            Hardware
          </button>
        </div>
        
        <div className="grid-container">
          <div className={`projects-grid ${animateCards ? 'animate' : ''}`}>
            {filteredProjects.map((project, index) => (
              <div 
                className="card-wrapper" 
                key={index}
                style={{ 
                  animationDelay: `${index * 0.15}s`,
                }}
              >
                <ProjectCard {...project} />
              </div>
            ))}
          </div>
          
          {filteredProjects.length === 0 && (
            <div className="no-projects">
              <p>No projects found in this category. Check back soon!</p>
            </div>
          )}
          
          <div className="cta-container">
            <p className="cta-text">
              These are just a few highlights from my portfolio. 
              I'm constantly working on new projects and expanding my skills.
            </p>
            
            <a 
              href="https://github.com/manideepak12" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="cta-button"
            >
              <svg className="github-icon" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              See More on GitHub
            </a>
          </div>
        </div>
      </div>

      <style jsx>{`
        .projects-section {
          background: linear-gradient(135deg, #f6f9fc 0%, #f1f5f9 100%);
          min-height: 100vh;
          padding: 4rem 0;
          position: relative;
          overflow: hidden;
        }
        
        .projects-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 5px;
          background: linear-gradient(90deg, #3b82f6, #6366f1, #8b5cf6);
          z-index: 1;
        }
        
        .projects-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1.5rem;
        }
        
        .projects-heading {
          font-size: 2.5rem;
          font-weight: 800;
          margin-bottom: 2.5rem;
          text-align: center;
          color: #1e293b;
          transition: transform 0.3s ease-out;
        }
        
        .heading-span {
          position: relative;
          display: inline-block;
          padding: 0 0.5rem;
        }
        
        .heading-underline {
          position: absolute;
          bottom: -5px;
          left: 0;
          width: 100%;
          height: 3px;
          background: linear-gradient(90deg, #3b82f6, #8b5cf6);
          border-radius: 2px;
        }
        
        .filter-buttons {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 0.75rem;
          margin-bottom: 2rem;
          padding: 0.75rem;
          background: rgba(255, 255, 255, 0.5);
          border-radius: 10px;
          backdrop-filter: blur(10px);
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
        }
        
        .filter-btn {
          padding: 0.5rem 1.25rem;
          border: none;
          border-radius: 6px;
          background-color: white;
          color: #64748b;
          font-weight: 600;
          font-size: 0.875rem;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
        }
        
        .filter-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          color: #3b82f6;
        }
        
        .filter-btn.active {
          background: linear-gradient(90deg, #3b82f6, #6366f1);
          color: white;
        }
        
        .grid-container {
          position: relative;
        }
        
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 1.5rem;
          margin-bottom: 2.5rem;
        }
        
        .projects-grid.animate .card-wrapper {
          opacity: 0;
          transform: translateY(20px);
          animation: fadeInUp 0.5s forwards;
        }
        
        .card-wrapper {
          position: relative;
          transition: transform 0.3s ease;
          will-change: transform, opacity;
          height: 100%;
        }
        
        .card-wrapper:hover {
          transform: translateY(-5px);
        }
        
        .no-projects {
          padding: 2rem;
          text-align: center;
          background-color: white;
          border-radius: 10px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
        }
        
        .cta-container {
          margin-top: 3rem;
          padding: 1.5rem;
          text-align: center;
          background: rgba(255, 255, 255, 0.7);
          border-radius: 10px;
          backdrop-filter: blur(5px);
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
        }
        
        .cta-text {
          font-size: 1.1rem;
          color: #334155;
          margin-bottom: 1.5rem;
          line-height: 1.5;
        }
        
        .cta-button {
          display: inline-flex;
          align-items: center;
          padding: 0.75rem 1.75rem;
          border: none;
          border-radius: 8px;
          background: linear-gradient(90deg, #0f172a, #1e293b);
          color: white;
          font-weight: 600;
          font-size: 1rem;
          transition: all 0.3s ease;
          text-decoration: none;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }
        
        .cta-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          background: linear-gradient(90deg, #1e293b, #334155);
        }
        
        .github-icon {
          height: 1.25rem;
          width: 1.25rem;
          margin-right: 0.5rem;
        }
        
        @keyframes fadeInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @media (max-width: 768px) {
          .projects-heading {
            font-size: 2rem;
          }
          
          .filter-buttons {
            gap: 0.5rem;
          }
          
          .filter-btn {
            padding: 0.4rem 0.8rem;
            font-size: 0.8rem;
          }
          
          .projects-grid {
            grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
            gap: 1.25rem;
          }
        }
        
        @media (max-width: 480px) {
          .projects-heading {
            font-size: 1.75rem;
          }
          
          .projects-grid {
            grid-template-columns: 1fr;
          }
          
          .project-image-container {
            height: 160px;
          }
        }
      `}</style>
    </section>
  );
}

export default Projects;