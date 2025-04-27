import React, { useState } from 'react';

function ProjectCard({ title, description, github, live, image, tags = [] }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile] = useState(window.innerWidth < 768);
  
  const styles = {
    card: {
      border: '1px solid #e5e7eb',
      borderRadius: '0.5rem',
      overflow: 'hidden',
      backgroundColor: '#ffffff',
      transition: 'all 0.5s ease',
      transform: isHovered && !isMobile ? 'translateY(-10px)' : 'translateY(0)',
      boxShadow: isHovered && !isMobile 
        ? '0 15px 30px rgba(0, 0, 0, 0.1)' 
        : '0 5px 15px rgba(0, 0, 0, 0.05)',
      width: '100%',
      maxWidth: '400px',
      margin: '0 auto'
    },
    imageContainer: {
      height: isMobile ? '10rem' : '12rem',
      overflow: 'hidden',
      position: 'relative'
    },
    image: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      objectPosition: 'center',
      transition: 'transform 0.7s ease',
      transform: isHovered && !isMobile ? 'scale(1.05)' : 'scale(1)'
    },
    overlay: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(to top, rgba(0, 0, 0, 0.7), transparent)',
      opacity: isHovered && !isMobile ? 0.7 : 0,
      transition: 'opacity 0.3s ease'
    },
    buttonContainer: {
      position: 'absolute',
      inset: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '1rem',
      opacity: isHovered && !isMobile ? 1 : 0,
      transition: 'opacity 0.3s ease',
      '@media (max-width: 768px)': {
        opacity: 1,
        background: 'rgba(0, 0, 0, 0.5)',
        alignItems: 'flex-end',
        paddingBottom: '1rem'
      }
    },
    overlayButton: {
      padding: isMobile ? '0.4rem 0.8rem' : '0.5rem 1rem',
      borderRadius: '9999px',
      color: 'white',
      fontWeight: '500',
      transition: 'all 0.3s ease',
      cursor: 'pointer',
      fontSize: isMobile ? '0.875rem' : '1rem',
      '@media (max-width: 768px)': {
        transform: 'none !important'
      }
    },
    githubButton: {
      backgroundColor: 'rgba(17, 24, 39, 0.8)',
      ':hover': {
        backgroundColor: 'rgba(17, 24, 39, 1)'
      }
    },
    liveButton: {
      backgroundColor: 'rgba(37, 99, 235, 0.8)',
      ':hover': {
        backgroundColor: 'rgba(37, 99, 235, 1)'
      }
    },
    contentContainer: {
      padding: isMobile ? '1rem' : '1.5rem'
    },
    tagContainer: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '0.5rem',
      marginBottom: '0.75rem'
    },
    tag: {
      fontSize: '0.75rem',
      padding: '0.25rem 0.5rem',
      borderRadius: '9999px',
      background: 'linear-gradient(to right, #dbeafe, #f3e8ff)',
      color: '#374151'
    },
    title: {
      fontSize: isMobile ? '1.1rem' : '1.25rem',
      fontWeight: 'bold',
      marginBottom: '0.5rem',
      background: 'linear-gradient(to right, #2563eb, #7c3aed)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent'
    },
    description: {
      color: '#4b5563',
      marginBottom: '1rem',
      lineHeight: 1.6,
      fontSize: isMobile ? '0.875rem' : '1rem'
    },
    linkContainer: {
      display: 'flex',
      gap: '1rem',
      flexWrap: 'wrap'
    },
    link: {
      display: 'flex',
      alignItems: 'center',
      fontWeight: '500',
      transition: 'color 0.3s ease',
      position: 'relative',
      fontSize: isMobile ? '0.875rem' : '1rem'
    },
    githubLink: {
      color: '#2563eb',
      ':hover': {
        color: '#1d4ed8'
      }
    },
    liveLink: {
      color: '#059669',
      ':hover': {
        color: '#047857'
      }
    },
    linkText: {
      position: 'relative'
    },
    linkUnderline: {
      position: 'absolute',
      bottom: '-2px',
      left: 0,
      height: '2px',
      width: 0,
      transition: 'width 0.3s ease',
      backgroundColor: 'currentColor'
    },
    icon: {
      width: isMobile ? '1rem' : '1.25rem',
      height: isMobile ? '1rem' : '1.25rem',
      marginRight: '0.25rem',
      transition: 'transform 0.3s ease'
    }
  };

  return (
    <div 
      style={styles.card}
      onMouseEnter={() => !isMobile && setIsHovered(true)}
      onMouseLeave={() => !isMobile && setIsHovered(false)}
    >
      {image && (
        <div style={styles.imageContainer}>
          <div style={styles.overlay} />
          <img 
            src={image} 
            alt={title} 
            style={styles.image}
          />
          
          <div style={styles.buttonContainer}>
            <a 
              href={github} 
              target="_blank" 
              rel="noopener noreferrer" 
              style={{
                ...styles.overlayButton,
                ...styles.githubButton,
                backgroundColor: 'rgba(17, 24, 39, 0.8)',
              }}
              onMouseOver={(e) => !isMobile && (e.currentTarget.style.backgroundColor = 'rgba(17, 24, 39, 1)')}
              onMouseOut={(e) => !isMobile && (e.currentTarget.style.backgroundColor = 'rgba(17, 24, 39, 0.8)')}
            >
              View Code
            </a>
            <a 
              href={live} 
              target="_blank" 
              rel="noopener noreferrer" 
              style={{
                ...styles.overlayButton,
                ...styles.liveButton,
                backgroundColor: 'rgba(37, 99, 235, 0.8)',
              }}
              onMouseOver={(e) => !isMobile && (e.currentTarget.style.backgroundColor = 'rgba(37, 99, 235, 1)')}
              onMouseOut={(e) => !isMobile && (e.currentTarget.style.backgroundColor = 'rgba(37, 99, 235, 0.8)')}
            >
              Live Demo
            </a>
          </div>
        </div>
      )}
      
      <div style={styles.contentContainer}>
        <div style={styles.tagContainer}>
          {tags.map((tag, index) => (
            <span key={index} style={styles.tag}>
              {tag}
            </span>
          ))}
        </div>
        
        <h3 style={styles.title}>{title}</h3>
        
        <p style={styles.description}>{description}</p>
        
        <div style={styles.linkContainer}>
          <a 
            href={github} 
            target="_blank" 
            rel="noopener noreferrer" 
            style={{
              ...styles.link,
              color: '#2563eb',
            }}
            onMouseOver={(e) => !isMobile && (e.currentTarget.style.color = '#1d4ed8')}
            onMouseOut={(e) => !isMobile && (e.currentTarget.style.color = '#2563eb')}
          >
            <svg className="icon" style={styles.icon} fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
            </svg>
            <span style={styles.linkText}>
              GitHub
              <span className="underline" style={styles.linkUnderline}></span>
            </span>
          </a>
          
          <a 
            href={live} 
            target="_blank" 
            rel="noopener noreferrer" 
            style={{
              ...styles.link,
              color: '#059669',
            }}
            onMouseOver={(e) => !isMobile && (e.currentTarget.style.color = '#047857')}
            onMouseOut={(e) => !isMobile && (e.currentTarget.style.color = '#059669')}
          >
            <svg className="icon" style={styles.icon} fill="currentColor" viewBox="0 0 24 24">
              <path d="M15.75 2H8.25C7.007 2 6 3.007 6 4.25v15.5C6 20.993 7.007 22 8.25 22h7.5c1.243 0 2.25-1.007 2.25-2.25V4.25C18 3.007 16.993 2 15.75 2zm.75 17.75a.75.75 0 01-.75.75H8.25a.75.75 0 01-.75-.75V4.25a.75.75 0 01.75-.75h7.5a.75.75 0 01.75.75v15.5z" />
              <path d="M12 19.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
            </svg>
            <span style={styles.linkText}>
              Live Demo
              <span className="underline" style={styles.linkUnderline}></span>
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;