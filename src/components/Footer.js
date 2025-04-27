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
        
        
      </div>
    </footer>
  );
}

export default Footer;