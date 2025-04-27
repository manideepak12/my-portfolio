import React, { useState } from 'react';

function Skills() {
  const [activeTab, setActiveTab] = useState('all');
  
  const skillsData = {
    frontend: ["React", "JavaScript", "HTML5", "CSS3/SCSS",],
    backend: ["Node.js", "MySQL"],
    other: ["Git/GitHub", "Python", "Java","AI/ML","Cloud","Problem Solving", "Canva Desinging"]
  };
  
  const tools = ["VS Code", "Git", "GitHub", "npm","Vercel","Google colab","Google Cloud"];

  const styles = {
    section: {
      padding: '4rem 0',
      background: '#f8f9fa',
      fontFamily: "'Inter', 'Segoe UI', sans-serif",
    },
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 1.5rem',
    },
    headingContainer: {
      textAlign: 'center',
      marginBottom: '2.5rem',
    },
    heading: {
      fontSize: '2.5rem',
      fontWeight: '800',
      color: '#1e2a3b',
      margin: '0 0 0.5rem 0',
    },
    underline: {
      width: '150px',
      height: '4px',
      background: '#4a7bff',
      margin: '0 auto',
      borderRadius: '2px',
    },
    tabsContainer: {
      display: 'flex',
      justifyContent: 'center',
      gap: '1rem',
      marginBottom: '2.5rem',
    },
    tab: {
      padding: '0.75rem 1.5rem',
      borderRadius: '8px',
      fontWeight: '500',
      cursor: 'pointer',
      transition: 'all 0.2s ease',
      border: 'none',
      background: '#e9ecef',
      color: '#495057',
    },
    activeTab: {
      background: '#4a7bff',
      color: '#ffffff',
    },
    cardsContainer: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
      gap: '1.5rem',
      marginBottom: '3rem',
    },
    card: {
      backgroundColor: '#ffffff',
      borderRadius: '10px',
      padding: '1.5rem',
      boxShadow: '0 4px 10px rgba(0, 0, 0, 0.05)',
      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    },
    cardHeader: {
      marginBottom: '1rem',
      paddingBottom: '0.75rem',
      borderBottom: '1px solid #e9ecef',
    },
    cardTitle: {
      fontSize: '1.25rem',
      fontWeight: '700',
      color: '#1e2a3b',
      margin: '0',
    },
    skillsList: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: '0.75rem',
    },
    skillItem: {
      fontSize: '0.95rem',
      color: '#495057',
      padding: '0.5rem 0',
      position: 'relative',
      paddingLeft: '1.25rem',
    },
    skillDot: {
      position: 'absolute',
      left: '0',
      top: '50%',
      width: '8px',
      height: '8px',
      background: '#4a7bff',
      borderRadius: '50%',
      transform: 'translateY(-50%)',
    },
    toolsSection: {
      textAlign: 'center',
    },
    toolsHeading: {
      fontSize: '1.5rem',
      fontWeight: '700',
      color: '#1e2a3b',
      marginBottom: '1.5rem',
    },
    toolsContainer: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      gap: '0.75rem',
    },
    toolItem: {
      padding: '0.5rem 1.25rem',
      backgroundColor: '#ffffff',
      borderRadius: '20px',
      boxShadow: '0 2px 5px rgba(0, 0, 0, 0.05)',
      color: '#495057',
      fontWeight: '500',
      fontSize: '0.9rem',
      transition: 'all 0.2s ease',
    },
  };

  return (
    <section style={styles.section}>
      <div style={styles.container}>
        <div style={styles.headingContainer}>
          <h2 style={styles.heading}>My Skills</h2>
          <div style={styles.underline}></div>
        </div>

        <div style={styles.tabsContainer}>
          <button
            style={{
              ...styles.tab,
              ...(activeTab === 'all' ? styles.activeTab : {})
            }}
            onClick={() => setActiveTab('all')}
          >
            All Skills
          </button>
          <button
            style={{
              ...styles.tab,
              ...(activeTab === 'frontend' ? styles.activeTab : {})
            }}
            onClick={() => setActiveTab('frontend')}
          >
            Frontend
          </button>
          <button
            style={{
              ...styles.tab,
              ...(activeTab === 'backend' ? styles.activeTab : {})
            }}
            onClick={() => setActiveTab('backend')}
          >
            Backend
          </button>
          <button
            style={{
              ...styles.tab,
              ...(activeTab === 'other' ? styles.activeTab : {})
            }}
            onClick={() => setActiveTab('other')}
          >
            Other
          </button>
        </div>

        <div style={styles.cardsContainer}>
          {(activeTab === 'all' || activeTab === 'frontend') && (
            <div 
              style={styles.card}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = styles.card.boxShadow;
              }}
            >
              <div style={styles.cardHeader}>
                <h3 style={styles.cardTitle}>Frontend Development</h3>
              </div>
              <div style={styles.skillsList}>
                {skillsData.frontend.map((skill, index) => (
                  <div key={index} style={styles.skillItem}>
                    <span style={styles.skillDot}></span>
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          )}

          {(activeTab === 'all' || activeTab === 'backend') && (
            <div 
              style={styles.card}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = styles.card.boxShadow;
              }}
            >
              <div style={styles.cardHeader}>
                <h3 style={styles.cardTitle}>Backend Development</h3>
              </div>
              <div style={styles.skillsList}>
                {skillsData.backend.map((skill, index) => (
                  <div key={index} style={styles.skillItem}>
                    <span style={styles.skillDot}></span>
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          )}

          {(activeTab === 'all' || activeTab === 'other') && (
            <div 
              style={styles.card}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = styles.card.boxShadow;
              }}
            >
              <div style={styles.cardHeader}>
                <h3 style={styles.cardTitle}>Other Skills</h3>
              </div>
              <div style={styles.skillsList}>
                {skillsData.other.map((skill, index) => (
                  <div key={index} style={styles.skillItem}>
                    <span style={styles.skillDot}></span>
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        <div style={styles.toolsSection}>
          <h3 style={styles.toolsHeading}>Tools & Technologies</h3>
          <div style={styles.toolsContainer}>
            {tools.map((tool, index) => (
              <div 
                key={index} 
                style={styles.toolItem}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#4a7bff';
                  e.currentTarget.style.color = '#ffffff';
                  e.currentTarget.style.boxShadow = '0 5px 10px rgba(74, 123, 255, 0.3)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = '#ffffff';
                  e.currentTarget.style.color = '#495057';
                  e.currentTarget.style.boxShadow = styles.toolItem.boxShadow;
                }}
              >
                {tool}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;