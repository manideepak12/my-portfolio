import React, { useState, useEffect } from 'react';

function Footer() {
  const [hoverIcon, setHoverIcon] = useState(null);
  
  const styles = {
    footer: {
      background: 'linear-gradient(to right, #1a202c, #2d3748, #4a235a)',
      color: 'white',
      padding: '2rem 1rem',
      position: 'relative',
      overflow: 'hidden',
      '@media (max-width: 768px)': {
        padding: '1.5rem 1rem'
      }
    },
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: 'center',
      position: 'relative',
      zIndex: 10,
      '@media (max-width: 768px)': {
        gap: '1rem'
      }
    },
    logoText: {
      background: 'linear-gradient(to right, #60a5fa, #a855f7)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      fontWeight: 600
    },
    copyright: {
      fontSize: '0.875rem',
      fontWeight: 300,
      letterSpacing: '0.05em',
      textAlign: 'center',
      '@media (max-width: 768px)': {
        fontSize: '0.75rem'
      }
    },
    socialContainer: {
      display: 'flex',
      gap: '1.5rem',
      marginTop: '1.5rem',
      '@media (max-width: 768px)': {
        gap: '1rem',
        marginTop: '1rem'
      }
    },
    socialLink: {
      color: '#a0aec0',
      transition: 'color 0.3s ease'
    },
    socialLinkGithub: {
      color: hoverIcon === 'github' ? '#60a5fa' : '#a0aec0'
    },
    socialLinkLinkedin: {
      color: hoverIcon === 'linkedin' ? '#ec4899' : '#a0aec0'
    },
    iconStyle: (name) => ({
      width: '1.5rem',
      height: '1.5rem',
      transform: hoverIcon === name ? 'translateY(-5px)' : 'translateY(0)',
      transition: 'all 0.3s ease',
      '@media (max-width: 768px)': {
        width: '1.25rem',
        height: '1.25rem'
      }
    }),
    particles: {
      position: 'absolute',
      width: Math.random() * 6 + 2 + 'px',
      height: Math.random() * 6 + 2 + 'px',
      borderRadius: '50%',
      backgroundColor: 'rgba(255, 255, 255, 0.3)',
      top: Math.random() * 100 + '%',
      left: Math.random() * 100 + '%',
      animation: `float ${Math.random() * 10 + 10}s infinite ease-in-out`
    }
  };

  useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = `
      @keyframes float {
        0%, 100% { transform: translateY(0) translateX(0); }
        50% { transform: translateY(-20px) translateX(10px); }
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);
  
  const particles = Array.from({ length: window.innerWidth < 768 ? 5 : 10 }).map((_, i) => ({
    top: Math.random() * 100 + '%',
    left: Math.random() * 100 + '%',
    size: Math.random() * 6 + 2 + 'px',
    duration: Math.random() * 10 + 10
  }));

  return (
    <footer style={styles.footer}>
      {particles.map((particle, i) => (
        <div 
          key={i}
          style={{
            position: 'absolute',
            width: particle.size,
            height: particle.size,
            backgroundColor: 'white',
            opacity: 0.1,
            borderRadius: '50%',
            top: particle.top,
            left: particle.left,
            animation: `float ${particle.duration}s infinite ease-in-out`
          }}
        />
      ))}
      
      <div style={styles.container}>
        <p style={styles.copyright}>
          &copy; 2025 <span style={styles.logoText}>MyPortfolio</span>. All rights reserved.
        </p>
        
        <div style={styles.socialContainer}>
          <a 
            href="#" 
            style={{...styles.socialLink, ...styles.socialLinkGithub}}
            onMouseEnter={() => setHoverIcon('github')}
            onMouseLeave={() => setHoverIcon(null)}
            aria-label="GitHub"
          >
            <svg 
              style={styles.iconStyle('github')} 
              fill="currentColor" 
              viewBox="0 0 24 24" 
              aria-hidden="true"
            >
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
            </svg>
          </a>
          <a 
            href="#" 
            style={{...styles.socialLink, ...styles.socialLinkLinkedin}}
            onMouseEnter={() => setHoverIcon('linkedin')}
            onMouseLeave={() => setHoverIcon(null)}
            aria-label="LinkedIn"
          >
            <svg 
              style={styles.iconStyle('linkedin')} 
              fill="currentColor" 
              viewBox="0 0 24 24" 
              aria-hidden="true"
            >
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;