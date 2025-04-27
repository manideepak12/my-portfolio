import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const location = useLocation();
  
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);
  
  const styles = {
    nav: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 50,
      transition: 'all 0.3s ease',
      background: scrolled 
        ? 'rgba(17, 24, 39, 0.95)' 
        : 'linear-gradient(to right, #111827, #1f2937)',
      backdropFilter: scrolled ? 'blur(8px)' : 'none',
      boxShadow: scrolled ? '0 4px 6px rgba(0, 0, 0, 0.1)' : 'none',
      height: isMobile ? '60px' : '50px',
    },
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 1rem',
      height: '100%',
      position: 'relative',
    },
    navInner: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100%',
    },
    navLinks: {
      display: isMobile ? 'none' : 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '1.5rem',
      height: '100%',
      '@media (min-width: 768px)': {
        gap: '2.5rem'
      }
    },
    navLink: (isActive) => ({
      position: 'relative',
      padding: '0.5rem 0.75rem',
      fontWeight: '500',
      fontSize: '1rem',
      letterSpacing: '0.02em',
      transition: 'all 0.3s ease',
      color: isActive ? '#ffffff' : '#d1d5db',
      background: isActive ? 'rgba(59, 130, 246, 0.15)' : 'transparent',
      borderRadius: '4px',
      ':hover': {
        color: '#ffffff',
        background: 'rgba(255, 255, 255, 0.1)'
      },
      '@media (min-width: 768px)': {
        fontSize: '1rem'
      }
    }),
    mobileButton: {
      background: 'transparent',
      border: 'none',
      color: 'white',
      cursor: 'pointer',
      padding: '0.5rem',
      display: isMobile ? 'block' : 'none',
      borderRadius: '0.375rem',
      transition: 'all 0.3s ease',
      position: 'absolute',
      right: '1rem',
      ':hover': {
        background: 'rgba(255, 255, 255, 0.1)'
      }
    },
    menuIcon: {
      width: '1.5rem',
      height: '1.5rem',
      transition: 'transform 0.3s ease'
    },
    mobileMenu: {
      position: 'fixed',
      top: isMobile ? '60px' : '50px',
      left: 0,
      right: 0,
      background: 'rgba(17, 24, 39, 0.95)',
      backdropFilter: 'blur(8px)',
      boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
      overflow: 'hidden',
      transition: 'max-height 0.5s cubic-bezier(0.65, 0, 0.35, 1), opacity 0.3s ease',
      maxHeight: isMenuOpen ? '500px' : '0',
      opacity: isMenuOpen ? 1 : 0,
      zIndex: 40,
      display: isMobile ? 'block' : 'none'
    },
    mobileMenuInner: {
      padding: '1rem 0',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '0.75rem'
    },
    mobileLink: (isActive) => ({
      display: 'block',
      width: '85%',
      maxWidth: '280px',
      padding: '0.75rem 1rem',
      borderRadius: '0.5rem',
      transition: 'all 0.3s ease',
      color: isActive ? '#ffffff' : '#d1d5db',
      background: isActive ? 'rgba(59, 130, 246, 0.2)' : 'rgba(255, 255, 255, 0.05)',
      textAlign: 'center',
      fontSize: '1rem',
      fontWeight: '500',
      ':hover': {
        background: 'rgba(59, 130, 246, 0.15)',
        color: '#ffffff',
        transform: 'translateY(-2px)'
      }
    })
  };
  
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Skills', path: '/skills' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' }
  ];
  
  return (
    <nav style={styles.nav}>
      <div style={styles.container}>
        <div style={styles.navInner}>
          <div style={styles.navLinks}>
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              
              return (
                <Link 
                  key={item.name}
                  to={item.path} 
                  style={{
                    ...styles.navLink(isActive),
                    color: isActive ? '#ffffff' : '#d1d5db',
                  }}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>
          
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
            style={styles.mobileButton}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <svg 
              style={{
                ...styles.menuIcon,
                transform: isMenuOpen ? 'rotate(90deg)' : 'rotate(0)'
              }} 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
        
        <div style={styles.mobileMenu}>
          <div style={styles.mobileMenuInner}>
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              
              return (
                <Link 
                  key={item.name}
                  to={item.path} 
                  style={{
                    ...styles.mobileLink(isActive),
                    color: isActive ? '#ffffff' : '#d1d5db',
                  }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;