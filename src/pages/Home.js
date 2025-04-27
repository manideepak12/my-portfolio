import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Home() {
  // State for animation control and interactive elements
  const [isLoaded, setIsLoaded] = useState(false);
  const [hoverButton, setHoverButton] = useState(null);
  const [typedText, setTypedText] = useState('');
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  const [particles, setParticles] = useState([]);
  
  const fullText = "Innovating at the Intersection of AI, Web Development, and Emerging Technologies."  // Typing animation effect
  useEffect(() => {
    if (currentTextIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setTypedText(prevText => prevText + fullText[currentTextIndex]);
        setCurrentTextIndex(prevIndex => prevIndex + 1);
      }, 40); // Speed of typing
      
      return () => clearTimeout(timeout);
    }
  }, [currentTextIndex, fullText]);

  // Cursor blinking effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 530);
    
    return () => clearInterval(cursorInterval);
  }, []);

  // Load animation effect
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 300);
    
    return () => clearTimeout(timer);
  }, []);

  // Generate floating particles
  useEffect(() => {
    const generateParticles = () => {
      const newParticles = [];
      for (let i = 0; i < 20; i++) {
        newParticles.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: 1 + Math.random() * 4,
          speedX: (Math.random() - 0.5) * 0.2,
          speedY: (Math.random() - 0.5) * 0.2,
          opacity: 0.1 + Math.random() * 0.3,
        });
      }
      setParticles(newParticles);
    };

    generateParticles();
  }, []);

  // Animate particles
  useEffect(() => {
    const moveParticles = () => {
      setParticles(prevParticles => 
        prevParticles.map(particle => {
          let newX = particle.x + particle.speedX;
          let newY = particle.y + particle.speedY;
          
          // Boundary check with wrap-around
          if (newX < 0) newX = 100;
          if (newX > 100) newX = 0;
          if (newY < 0) newY = 100;
          if (newY > 100) newY = 0;
          
          return {
            ...particle,
            x: newX,
            y: newY,
          };
        })
      );
    };

    const animationId = setInterval(moveParticles, 50);
    return () => clearInterval(animationId);
  }, []);

  // Professional color theme with sky blue and white
  const theme = {
    primary: '#4A90E2', // Sky blue
    primaryLight: '#7FB1FF',
    primaryDark: '#3A73B9',
    text: '#333333',
    textLight: '#777777',
    background: '#FFFFFF',
    backgroundLight: '#F5F9FF',
    backgroundAccent: 'rgba(74, 144, 226, 0.08)',
  };

  const styles = {
    section: {
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      background: `linear-gradient(135deg, ${theme.background} 0%, ${theme.backgroundLight} 100%)`,
      padding: '4rem 1rem',
      position: 'relative',
      overflow: 'hidden',
      color: theme.text,
      fontFamily: "'Inter', system-ui, sans-serif",
    },
    container: {
      textAlign: 'center',
      maxWidth: '64rem',
      margin: '0 auto',
      position: 'relative',
      zIndex: 2,
      opacity: isLoaded ? 1 : 0,
      transform: isLoaded ? 'translateY(0)' : 'translateY(20px)',
      transition: 'opacity 0.8s ease, transform 0.8s ease',
    },
    welcomeBadge: {
      marginBottom: '1.5rem',
      display: 'inline-block',
      background: theme.primary,
      padding: '0.5rem 1.25rem',
      borderRadius: '2rem',
      boxShadow: '0 4px 12px rgba(74, 144, 226, 0.2)',
      transform: isLoaded ? 'translateY(0) scale(1)' : 'translateY(-20px) scale(0.95)',
      opacity: isLoaded ? 1 : 0,
      transition: 'all 0.8s ease',
      transitionDelay: '0.3s',
    },
    welcomeText: {
      fontSize: '0.875rem',
      fontWeight: '600',
      color: '#FFFFFF',
      letterSpacing: '0.05em',
      textTransform: 'uppercase',
      display: 'flex',
      alignItems: 'center',
    },
    welcomeIcon: {
      marginRight: '0.5rem',
      animation: 'wave 2s ease-in-out infinite',
      transformOrigin: '70% 70%',
    },
    heading: {
      fontSize: '3.5rem',
      fontWeight: '800',
      marginBottom: '1.5rem',
      color: theme.primary,
      transform: isLoaded ? 'translateY(0) scale(1)' : 'translateY(20px) scale(0.95)',
      opacity: isLoaded ? 1 : 0,
      transition: 'all 0.8s ease',
      transitionDelay: '0.6s',
      display: 'block',
      letterSpacing: '-0.02em',
    },
    descriptionContainer: {
      position: 'relative',
      marginBottom: '2.5rem',
      minHeight: '3rem',
      transform: isLoaded ? 'translateY(0)' : 'translateY(20px)',
      opacity: isLoaded ? 1 : 0,
      transition: 'transform 0.8s ease, opacity 0.8s ease',
      transitionDelay: '0.9s',
    },
    description: {
      fontSize: '1.25rem',
      color: theme.textLight,
      maxWidth: '48rem',
      margin: '0 auto',
      lineHeight: '1.8',
      fontWeight: '500',
    },
    cursor: {
      display: 'inline-block',
      width: '2px',
      height: '1.5em',
      background: theme.primary,
      marginLeft: '2px',
      verticalAlign: 'text-bottom',
      opacity: showCursor ? 1 : 0,
      borderRadius: '1px',
    },
    buttonContainer: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      gap: '1.5rem',
      marginTop: '2rem',
      transform: isLoaded ? 'translateY(0)' : 'translateY(20px)',
      opacity: isLoaded ? 1 : 0,
      transition: 'transform 0.8s ease, opacity 0.8s ease',
      transitionDelay: '1.2s',
    },
    primaryButton: {
      padding: '1rem 2.5rem',
      background: theme.primary,
      color: '#FFFFFF',
      fontWeight: '600',
      borderRadius: '30px',
      boxShadow: hoverButton === 'primary' 
        ? `0 8px 20px rgba(74, 144, 226, 0.4)` 
        : `0 4px 12px rgba(74, 144, 226, 0.2)`,
      transition: 'all 0.3s ease',
      textDecoration: 'none',
      border: 'none',
      fontSize: '1rem',
      transform: hoverButton === 'primary' ? 'translateY(-3px)' : 'translateY(0)',
    },
    secondaryButton: {
      padding: '1rem 2.5rem',
      background: 'transparent',
      color: theme.primary,
      fontWeight: '600',
      borderRadius: '30px',
      boxShadow: hoverButton === 'secondary'
        ? `0 8px 20px rgba(74, 144, 226, 0.15)` 
        : `0 4px 12px rgba(74, 144, 226, 0.1)`,
      transition: 'all 0.3s ease',
      textDecoration: 'none',
      border: `2px solid ${theme.primary}`,
      fontSize: '1rem',
      transform: hoverButton === 'secondary' ? 'translateY(-3px)' : 'translateY(0)',
    },
    socialSection: {
      marginTop: '4rem',
      transform: isLoaded ? 'translateY(0)' : 'translateY(20px)',
      opacity: isLoaded ? 1 : 0,
      transition: 'transform 0.8s ease, opacity 0.8s ease',
      transitionDelay: '1.5s',
    },
    socialText: {
      fontSize: '0.875rem',
      fontWeight: '600',
      color: theme.textLight,
      marginBottom: '1rem',
      letterSpacing: '0.05em',
      position: 'relative',
      display: 'inline-block',
    },
    socialLinks: {
      display: 'flex',
      justifyContent: 'center',
      gap: '1.5rem',
      marginTop: '1rem',
    },
    socialLink: {
      color: theme.primary,
      transition: 'all 0.3s ease',
      background: 'white',
      padding: '0.75rem',
      borderRadius: '50%',
      display: 'flex',
      boxShadow: '0 4px 12px rgba(74, 144, 226, 0.15)',
    },
    socialIcon: {
      height: '1.5rem',
      width: '1.5rem',
    },
    srOnly: {
      position: 'absolute',
      width: '1px',
      height: '1px',
      padding: '0',
      margin: '-1px',
      overflow: 'hidden',
      clip: 'rect(0, 0, 0, 0)',
      whiteSpace: 'nowrap',
      borderWidth: '0',
    },
    particlesContainer: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      overflow: 'hidden',
      zIndex: 1,
    },
    particle: (particle) => ({
      position: 'absolute',
      left: `${particle.x}%`,
      top: `${particle.y}%`,
      width: `${particle.size}px`,
      height: `${particle.size}px`,
      backgroundColor: theme.primary,
      borderRadius: '50%',
      opacity: particle.opacity,
    }),
    styleTag: `
      @keyframes wave {
        0% { transform: rotate(0deg); }
        10% { transform: rotate(14deg); }
        20% { transform: rotate(-8deg); }
        30% { transform: rotate(14deg); }
        40% { transform: rotate(-4deg); }
        50% { transform: rotate(10deg); }
        60% { transform: rotate(0deg); }
        100% { transform: rotate(0deg); }
      }
    `
  };

  return (
    <section style={styles.section}>
      {/* Add style tag for keyframes animations */}
      <style dangerouslySetInnerHTML={{ __html: styles.styleTag }} />
      
      {/* Particles background */}
      <div style={styles.particlesContainer}>
        {particles.map(particle => (
          <div key={`particle-${particle.id}`} style={styles.particle(particle)}></div>
        ))}
      </div>
      
      <div style={styles.container}>
        <div style={styles.welcomeBadge}>
          <span style={styles.welcomeText}>
            Welcome to my portfolio
          </span>
        </div>
        
        <h1 style={styles.heading}>
          Hi, I'm Manideepak Reddy Bodigam
        </h1>
        
        <div style={styles.descriptionContainer}>
          <p style={styles.description}>
            {typedText}
            <span style={styles.cursor}></span>
          </p>
        </div>
        
        <div style={styles.buttonContainer}>
          <Link 
            to="/projects" 
            style={styles.primaryButton}
            onMouseEnter={() => setHoverButton('primary')}
            onMouseLeave={() => setHoverButton(null)}
          >
            View My Work
          </Link>
          <Link 
            to="/contact" 
            style={styles.secondaryButton}
            onMouseEnter={() => setHoverButton('secondary')}
            onMouseLeave={() => setHoverButton(null)}
          >
            Get In Touch
          </Link>
        </div>
        
        {/* Social Links */}
        <div style={styles.socialSection}>
          <div style={styles.socialText}>FIND ME ON</div>
          <div style={styles.socialLinks}>
            <a 
              href="https://github.com/manideepak12" 
              style={styles.socialLink}
              target="_blank" 
              rel="noopener noreferrer"
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 8px 20px rgba(74, 144, 226, 0.3)';
                e.currentTarget.style.color = theme.primaryLight;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = '';
                e.currentTarget.style.boxShadow = '';
                e.currentTarget.style.color = '';
              }}
            >
              <svg style={styles.socialIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
              <span style={styles.srOnly}>GitHub</span>
            </a>
            
            <a 
              href="https://linkedin.com/in/manideepak" 
              style={styles.socialLink}
              target="_blank" 
              rel="noopener noreferrer"
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 8px 20px rgba(74, 144, 226, 0.3)';
                e.currentTarget.style.color = theme.primaryLight;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = '';
                e.currentTarget.style.boxShadow = '';
                e.currentTarget.style.color = '';
              }}
            >
              <svg style={styles.socialIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
              <span style={styles.srOnly}>LinkedIn</span>
            </a>
            
            <a 
              href="https://twitter.com/manideepak_dev" 
              style={styles.socialLink}
              target="_blank" 
              rel="noopener noreferrer"
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 8px 20px rgba(74, 144, 226, 0.3)';
                e.currentTarget.style.color = theme.primaryLight;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = '';
                e.currentTarget.style.boxShadow = '';
                e.currentTarget.style.color = '';
              }}
            >
              <svg style={styles.socialIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
              </svg>
              <span style={styles.srOnly}>Twitter</span>
            </a>
            
            <a 
              href="mailto:contact@manideepak.dev" 
              style={styles.socialLink}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 8px 20px rgba(74, 144, 226, 0.3)';
                e.currentTarget.style.color = theme.primaryLight;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = '';
                e.currentTarget.style.boxShadow = '';
                e.currentTarget.style.color = '';
              }}
            >
              <svg style={styles.socialIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
              <span style={styles.srOnly}>Email</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;