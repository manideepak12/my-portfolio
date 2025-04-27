import React, { useState, useEffect } from 'react';

function About() {
  // Animation states
  const [loaded, setLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState('experience');
  const [hoverStates, setHoverStates] = useState({
    photo: true,
    skill: {},
    achievement: {},
    exp: {},
    edu: {},
    cert: {},
    profile: {}
  });

  // Track window size for responsive adjustments
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });

  // Animation effect on component mount and window resize
  useEffect(() => {
    setLoaded(true);
    
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Personal data
  const personalData = {
    name: "Manideepak Reddy Bodigam",
    title: "3rd Year UnderGraduate AI & ML Student",
    bio: "I'm Bodigam Manideepak Reddy, a 3rd-year BTech (AI & ML) student at Malla Reddy Institute of Technology and Science, Hyderabad. I completed my Diploma in Electronics and Communication Engineering with 75.7%. I have hands-on experience with SQL, Python, HTML, and CSS. Formerly an intern at Resolute Electronics as a Line-in-Charge, I'm passionate about technology and AI, eager to learn and grow. I'm a team player and always ready to help others."
  };

  // Experience data
  const experiences = [
    {
      role: "Google Cloud Boost participant",
      company: "Google Cloud Arcade Facilitator Program",
      duration: "Aug 2023 - Present",
      description: "Completed hands-on labs and learning paths on Google Cloud, gaining practical experience in cloud computing. Earned swags by achieving learning milestones."
    },
    {
      role: "AI & ML Intern",
      company: "YBI Foundation",
      duration: "Nov 2023 - Dec 2023",
      description: "At YBI Foundation, I completed a internship in Artificial Intelligence and Machine Learning.I learned fundamental AI/ML concepts like supervised and unsupervised learning."
    },
    {
      role: "Production Staff",
      company: "Resolute– Skyquad Electronics and Appliances Pvt Ltd",
      duration: "June 2022 - Dec 2022",
      description: "As a key member of the production team at Resolute Electronics, I contribute to the seamless manufacturing of cutting-edge set-up boxes that redefine the future of entertainment. Happy to Contribute to continuous improvement initiatives to drive innovation and excellence in products."
    },
  ];

  // Education data
  const educations = [
    {
      degree: "B.Tech in Artificial Intelligence & Machine Learning",
      institution: "Malla Reddy Institute of Technology and Science",
      duration: "2022 - 2026",
      grade: "CGPA: 8.6 (Till 5th Semester)"
    },
    {
      degree: "Diploma (ECE)",
      institution: "Indur Institute of Engineering and Technology ",
      duration: "2020 - 2023",
      grade: "CGPA : 8.05"
    },
    {
      degree: "SSC (10th Class)",
      institution: "Vikas High School",
      duration: "2019 - 2020",
      grade: "GPA: 10.0"
    }
  ];

  // Certifications data - Updated with consistent structure and more organized presentation
  const certifications = [
    {
      title: "Google Cloud Computing Foundations Certificate",
      issuer: "Google Cloud",
      date: "August 20, 2024",
      credentialURL: "https://www.credly.com/badges/8bd839be-14f6-410b-80da-be6531dda166/public_url",
      skills: ["Cloud Foundations","Cloud Computing", "Google Cloud Platform", "AppDev"],
      logo: "https://cdn.qwiklabs.com/assets/gcp_cloud-e3a77215f0b8bfa9b3f611c0d2208c7e8708ed31.svg"
    },
    {
      title: "Introduction to Artificial Intelligence",
      issuer: "Infosys Springboard",
      date: "November 11 2023",
      credentialURL: "https://media.licdn.com/dms/document/media/v2/D562DAQHWl7zN210EpA/profile-treasury-document-pdf-analyzed/profile-treasury-document-pdf-analyzed/0/1699705356354?e=1746662400&v=beta&t=dvtiiXcH9SgnbpEKyQKZMRPOtmvWnrwpC-6C1iYOx_k",
      skills: ["Artificial Intelligence", "Agents", "Real-life scenarios"],
      logo: "https://www.infosys.com/content/dam/infosys-web/en/about/springboard/europe/images/springboard-logo.png"
    },
    {
      title: "Artificial Intelligence and Machine Learning Internship (30days)",
      issuer: "YBI Foundation",
      date: "December 7 2023",
      credentialURL: "https://www.ybifoundation.org/certificate-validation?credentialId=M96OPZS33BERA",
      skills: ["AI", "ML", "Dataset", "Learning Techniques"],
      logo: "https://res.cloudinary.com/duhabjmtf/image/upload/v1745769467/62da27820aed-YBiLogo-1612288841628_asre77.webp"
    },
    {
      title: "Solutions Architecture Job Simulation",
      issuer: "Forage",
      date: "December 7 2024",
      credentialURL: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/pmnMSL4QiQ9JCgE3W/kkE9HyeNcw6rwCRGw_pmnMSL4QiQ9JCgE3W_qcAkn6qBbbvZYLXMm_1733383430814_completion_certificate.pdf",
      skills: ["AWS", "Web Services"],
      logo: "https://res.cloudinary.com/duhabjmtf/image/upload/v1745769515/30659_Website_Blocks_2.rev.1722361639_b96siu.png"
    }
  ];

  // Achievements data
  const achievements = [
    {
      title: "Google Cloud Skill Boost",
      description: "Completed Google Cloud Skill Boost program and earned swag rewards for '3' times consecutive by completing various cloud computing challenges and labs.",
      date: " from 2023"
    },
    {
      title: "Intra College Cricket Squad",
      description: "Secured a Spot in the Diploma ECE Cricket Squad 2023, Competing aganist 50+ players from the Institute.",
      date: "2023"
    },
  ];

  // Professional Profiles data
  const professionalProfiles = [
    {
      platform: "GitHub",
      username: "manideepak12",
      url: "https://github.com/manideepak12",
      imageUrl: "https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png"
    },
    {
      platform: "LinkedIn",
      username: "manideepak-reddy",
      url: "https://www.linkedin.com/in/manideepak-reddy-bodigam-/",
      imageUrl: "https://emedia1.nhs.wales/NWISWalesNHSUK/cache/file/7D9A4551-7B2A-4C24-8EBAC4ACC870AFE0_medium.png"
    },
    {
      platform: "LeetCode",
      username: "Manideepak Reddy Bodigam",
      url: "https://leetcode.com/u/manideepak1202/",
      imageUrl: "https://leetcode.com/_next/static/images/logo-ff2b712834cf26bf50a5de58ee27bcef.png"
    },
    {
      platform: "HackerRank",
      username: "Manideepak1202",
      url: "https://www.hackerrank.com/profile/manideepak1202",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/4/40/HackerRank_Icon-1000px.png"
    },
    {
      platform: "Credly",
      username: "Manideepak Reddy Bodigam",
      url: "https://www.credly.com/users/manideepak-reddy-bodigam",
      imageUrl: "https://www.pearson.com/uk/content/dam/one-dot-com/one-dot-com/pearson-languages/en-gb/logos/credly-by-pearson-orange-logo.png"
    },
    {
      platform: "Google Cloud Skill Boost",
      username: "Mani 12",
      url: "https://www.cloudskillsboost.google/public_profiles/e250dfa4-98e5-4975-9904-cd598adb8b55",
      imageUrl: "https://cdn.qwiklabs.com/assets/gcp_cloud-e3a77215f0b8bfa9b3f611c0d2208c7e8708ed31.svg"
    },
  ];

  // Handle hover states
  const handleHover = (category, id, state) => {
    // Only apply hover effects on non-touch devices
    if (windowSize.width > 768) {
      setHoverStates(prev => ({
        ...prev,
        [category]: category === 'photo' || category === 'card' ? state : { ...prev[category], [id]: state }
      }));
    }
  };

  // CSS styles - Updated with more spacing and better organization
  const styles = {
    // Main container
    pageContainer: {
      background: 'linear-gradient(120deg, #f0f4f8 0%, #e3eaff 100%)',
      minHeight: '100vh',
      padding: windowSize.width < 768 ? '3rem 0.5rem' : '5rem 1rem', // Increased top padding for more space
      fontFamily: '"Roboto", "Segoe UI", "Helvetica Neue", Arial, sans-serif'
    },
    mainContainer: {
      maxWidth: '1200px',
      margin: '0 auto',
      opacity: loaded ? 1 : 0,
      transform: loaded ? 'translateY(0)' : 'translateY(20px)',
      transition: 'all 0.8s ease-out',
      border: windowSize.width < 768 ? '2px solid #0096FF' : '4px solid #0096FF',
      borderRadius: '16px',
      overflow: 'hidden',
      backgroundColor: 'white',
      boxShadow: '0 10px 25px rgba(0, 150, 255, 0.1)' // Added shadow for depth
    },
    
    // Header section
    header: {
      textAlign: 'center',
      padding: windowSize.width < 768 ? '1.5rem' : '2rem',
      borderBottom: '2px solid #e5e7eb',
      background: 'linear-gradient(120deg, #fff 0%, #f8faff 100%)'
    },
    heading: {
      fontSize: windowSize.width < 768 ? '2rem' : '3rem',
      fontWeight: '700',
      color: '#0096FF',
      margin: 0,
      fontFamily: '"Montserrat", "Segoe UI", sans-serif',
      letterSpacing: '0.05em',
      textShadow: '1px 1px 2px rgba(0,0,0,0.1)'
    },
    
    // Content wrapper - responsive layout
    contentWrapper: {
      display: 'flex',
      flexDirection: windowSize.width < 768 ? 'column' : 'row',
      minHeight: '600px'
    },
    
    // Profile Section - responsive width
    profileSection: {
      flex: windowSize.width < 768 ? '1' : '0 0 30%',
      padding: windowSize.width < 768 ? '1.5rem' : '2rem',
      borderRight: windowSize.width < 768 ? 'none' : '2px solid #e5e7eb',
      borderBottom: windowSize.width < 768 ? '2px solid #e5e7eb' : 'none',
      background: 'white',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'flex-start'
    },
    
    // Profile photo - responsive sizing
    photoContainer: {
      width: windowSize.width < 768 ? '120px' : '150px',
      height: windowSize.width < 768 ? '120px' : '150px',
      borderRadius: '50%',
      position: 'relative',
      transform: hoverStates.photo ? 'translateY(-5px)' : 'translateY(0)',
      transition: windowSize.width > 768 ? 'transform 0.3s ease' : 'none',
      boxShadow: hoverStates.photo && windowSize.width > 768 ? 
                '0 20px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.1)' :
                '0 10px 15px -5px rgba(0, 0, 0, 0.1)',
      marginBottom: '1.5rem',
      border: '3px solid #e0e7ff',
      overflow: 'hidden'
    },
    
    // Name and bio - responsive text
    nameContainer: {
      textAlign: 'center',
      marginBottom: '1.5rem',
      width: '100%'
    },
    name: {
      fontSize: windowSize.width < 768 ? '1.25rem' : '1.5rem',
      fontWeight: '600',
      color: '#1f2937',
      marginBottom: '0.5rem',
      fontFamily: '"Open Sans", "Segoe UI", "Helvetica Neue", Arial, sans-serif'
    },
    title: {
      display: 'inline-block',
      fontSize: windowSize.width < 768 ? '0.8rem' : '0.9rem',
      color: '#4b5563',
      fontWeight: '500',
      padding: '0.25rem 0.75rem',
      background: '#f3f4f6',
      borderRadius: '9999px',
      marginBottom: '1rem',
      fontFamily: '"Open Sans", "Segoe UI", "Helvetica Neue", Arial, sans-serif'
    },
    bioText: {
      color: '#4b5563',
      lineHeight: '1.6',
      fontSize: windowSize.width < 768 ? '0.9rem' : '0.95rem',
      textAlign: 'left',
      maxWidth: '100%',
      fontFamily: '"Open Sans", "Segoe UI", "Helvetica Neue", Arial, sans-serif'
    },
    
    // Content Section - Right column
    contentSection: {
      flex: '1',
      overflow: 'hidden',
      display: 'flex', 
      flexDirection: 'column'
    },
    
    // Tabs section - responsive tabs
    tabs: {
      display: 'flex',
      borderBottom: '1px solid #e5e7eb',
      background: 'white',
      padding: '0 0.5rem',
      fontFamily: '"Montserrat", "Segoe UI", sans-serif',
      flexWrap: 'wrap',
      overflowX: windowSize.width < 768 ? 'auto' : 'visible',
      whiteSpace: windowSize.width < 768 ? 'nowrap' : 'normal',
      position: 'sticky',
      top: 0,
      zIndex: 10,
      boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
    },
    tab: {
      padding: windowSize.width < 768 ? '0.75rem 1rem' : '1rem 1.5rem',
      fontSize: windowSize.width < 768 ? '0.9rem' : '1rem',
      fontWeight: '500',
      color: '#6b7280',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      position: 'relative',
      minWidth: windowSize.width < 768 ? 'max-content' : 'auto'
    },
    activeTab: {
      color: '#0096FF',
      fontWeight: '600'
    },
    tabIndicator: {
      position: 'absolute',
      bottom: '-1px',
      left: '0',
      width: '100%',
      height: '2px',
      background: '#0096FF',
      transition: 'all 0.3s ease'
    },
    tabContent: {
      padding: windowSize.width < 768 ? '1.5rem' : '2rem',
      overflow: 'auto',
      flex: '1',
      fontFamily: '"Open Sans", "Segoe UI", "Helvetica Neue", Arial, sans-serif'
    },
    
    // Content cards - responsive adjustments
    contentCard: {
      background: '#f9fafb',
      borderRadius: '0.75rem',
      padding: windowSize.width < 768 ? '1rem' : '1.5rem',
      marginBottom: '1.5rem', // Increased spacing between cards
      borderLeft: '4px solid transparent',
      transition: windowSize.width > 768 ? 'all 0.3s ease' : 'none',
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)'
    },
    contentCardHover: windowSize.width > 768 ? {
      background: 'white',
      borderLeft: '4px solid #0096FF',
      boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
    } : {},
    
    cardTitle: {
      fontSize: windowSize.width < 768 ? '1.05rem' : '1.15rem',
      fontWeight: '600',
      color: '#1f2937',
      marginBottom: '0.5rem',
      fontFamily: '"Open Sans", "Segoe UI", "Helvetica Neue", Arial, sans-serif'
    },
    cardSubtitle: {
      fontSize: windowSize.width < 768 ? '0.85rem' : '0.95rem',
      color: '#4b5563',
      fontWeight: '500',
      marginBottom: '0.5rem'
    },
    cardMeta: {
      display: 'flex',
      alignItems: 'center',
      color: '#6b7280',
      fontSize: windowSize.width < 768 ? '0.8rem' : '0.85rem',
      marginBottom: '0.75rem'
    },
    cardContent: {
      color: '#4b5563',
      fontSize: windowSize.width < 768 ? '0.85rem' : '0.9rem',
      lineHeight: '1.6'
    },
    
    // Achievement cards - responsive grid
    achievementsContainer: {
      display: 'grid',
      gridTemplateColumns: windowSize.width < 768 ? '1fr' : 'repeat(auto-fill, minmax(300px, 1fr))',
      gap: '1.5rem' // Increased gap for better spacing
    },
    achievementCard: {
      background: '#f9fafb',
      borderRadius: '0.75rem',
      padding: windowSize.width < 768 ? '1.25rem' : '1.75rem',
      borderTop: '4px solid transparent',
      transition: windowSize.width > 768 ? 'all 0.3s ease' : 'none',
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)',
      position: 'relative',
      overflow: 'hidden'
    },
    achievementCardHover: windowSize.width > 768 ? {
      background: 'white',
      borderTop: '4px solid #8b5cf6',
      boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
    } : {},
    
    // Certification cards - Completely redesigned grid
    certificationsContainer: {
      display: 'grid',
      gridTemplateColumns: windowSize.width < 768 ? '1fr' : 'repeat(auto-fill, minmax(350px, 1fr))',
      gap: windowSize.width < 768 ? '1.5rem' : '2rem' // Increased gap from 1.5rem to 2rem
    },
    certificationCard: {
      background: '#f9fafb',
      borderRadius: '0.75rem',
      padding: windowSize.width < 768 ? '1.5rem' : '2rem', // Increased padding
      borderLeft: '4px solid transparent',
      transition: windowSize.width > 768 ? 'all 0.3s ease' : 'none',
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)',
      height: '100%',
      display: 'flex',
      flexDirection: 'column'
    },
    certificationCardHover: windowSize.width > 768 ? {
      background: 'white',
      borderTop: '4px solid #2563eb',
      boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
    } : {},
    certHeader: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: '1.5rem', // Increased from 1rem
      marginBottom: '1.5rem', // Increased from 1rem
    },
    certLogo: {
      width: '3rem',
      height: '3rem',
      borderRadius: '8px',
      overflow: 'hidden',
      flexShrink: 0,
      border: '1px solid #e5e7eb',
      backgroundColor: 'white',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '0.25rem'
    },
    certLogoImg: {
      width: '100%',
      height: '100%',
      objectFit: 'contain'
    },
    certTitle: {
      fontSize: windowSize.width < 768 ? '1.05rem' : '1.15rem',
      fontWeight: '600',
      color: '#1f2937',
      marginBottom: '0.5rem'
    },
    certIssuer: {
      fontSize: windowSize.width < 768 ? '0.9rem' : '1rem',
      fontWeight: '500',
      color: '#4b5563',
      marginBottom: '0.75rem'
    },
    certDateContainer: {
      marginBottom: '0.75rem'
    },
    
    // Professional Profiles - responsive grid
    profilesContainer: {
      display: 'grid',
      gridTemplateColumns: windowSize.width < 768 ? '1fr' : 'repeat(auto-fill, minmax(250px, 1fr))',
      gap: '1.5rem'
    },
    profileCard: {
      background: '#f9fafb',
      borderRadius: '0.75rem',
      padding: windowSize.width < 768 ? '1.25rem' : '1.75rem',
      borderLeft: '4px solid transparent',
      transition: windowSize.width > 768 ? 'all 0.3s ease' : 'none',
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)',
      display: 'flex',
      alignItems: 'center',
      gap: '1rem'
    },
    profileCardHover: windowSize.width > 768 ? {
      background: 'white',
      borderLeft: '4px solid #06b6d4',
      boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
    } : {},
    
    // Shared image styles
    photoImage: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      objectPosition: 'center'
    },
    profileLogoImage: {
      width: '100%',
      height: '100%',
      objectFit: 'contain',
      objectPosition: 'center'
    },
    
    // Icon styles
    badgeIcon: {
      position: 'absolute',
      top: '1rem',
      right: '1rem',
      fontSize: '1.5rem',
      color: '#8b5cf6',
      opacity: 0.2
    },
    certIcon: {
      position: 'absolute',
      top: '1rem',
      right: '1rem',
      fontSize: '1.5rem',
      color: '#2563eb',
      opacity: 0.2
    },
    
    // Profile icon styles
    profileIcon: {
      width: windowSize.width < 768 ? '2.5rem' : '3.5rem',
      height: windowSize.width < 768 ? '2.5rem' : '3.5rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: '12px',
      background: '#f0fdff',
      padding: '0.5rem',
      overflow: 'hidden'
    },
    profilePlatform: {
      fontSize: windowSize.width < 768 ? '1rem' : '1.15rem',
      fontWeight: '600',
      color: '#1f2937',
      marginBottom: '0.25rem'
    },
    profileUsername: {
      color: '#4b5563',
      fontSize: windowSize.width < 768 ? '0.8rem' : '0.9rem',
      marginBottom: '0.5rem'
    },
    profileLink: {
      color: '#06b6d4',
      textDecoration: 'none',
      fontSize: windowSize.width < 768 ? '0.8rem' : '0.85rem',
      fontWeight: '500',
      display: 'flex',
      alignItems: 'center',
      gap: '0.25rem'
    },
    
    // Skills tags
    skillsContainer: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '0.75rem', // Increased from 0.5rem
      marginTop: '1rem', // Increased from 0.75rem
      marginBottom: '1.5rem' // Increased from 1rem
    },
    skillTag: {
      display: 'inline-block',
      padding: '0.25rem 0.5rem',
      background: '#f3f4f6',
      color: '#4b5563',
      borderRadius: '9999px',
      fontSize: windowSize.width < 768 ? '0.7rem' : '0.75rem',
      fontWeight: '500'
    },
    
    // Date styles
    achievementDate: {
      display: 'inline-block',
      padding: '0.25rem 0.75rem',
      background: '#e0e7ff',
      color: '#4f46e5',
      borderRadius: '9999px',
      fontSize: windowSize.width < 768 ? '0.7rem' : '0.75rem',
      fontWeight: '500',
      marginBottom: '0.75rem'
    },
    certDate: {
      display: 'inline-block',
      padding: '0.25rem 0.75rem',
      background: '#dbeafe',
      color: '#2563eb',
      borderRadius: '9999px',
      fontSize: windowSize.width < 768 ? '0.7rem' : '0.75rem',
      fontWeight: '500'
    },
    verifyLink: {
      color: '#2563eb',
      textDecoration: 'none',
      fontSize: windowSize.width < 768 ? '0.8rem' : '0.85rem',
      fontWeight: '500',
      display: 'inline-flex',
      alignItems: 'center',
      marginTop: 'auto',
      padding: '0.5rem 0'
    }
  };

  // Tab content components
  const renderExperience = () => (
    <div>
      {experiences.map((exp, index) => (
        <div 
          key={index} 
          style={{
            ...styles.contentCard, 
            ...(hoverStates.exp?.[index] ? styles.contentCardHover : {})
          }}
          onMouseEnter={() => handleHover('exp', index, true)}
          onMouseLeave={() => handleHover('exp', index, false)}
        >
          <h3 style={styles.cardTitle}>{exp.role}</h3>
          <div style={styles.cardSubtitle}>{exp.company}</div>
          <div style={styles.cardMeta}>{exp.duration}</div>
          <p style={styles.cardContent}>{exp.description}</p>
        </div>
      ))}
    </div>
  );

  const renderEducation = () => (
    <div>
      {educations.map((edu, index) => (
        <div 
          key={index} 
          style={{
            ...styles.contentCard, 
            ...(hoverStates.edu?.[index] ? styles.contentCardHover : {})
          }}
          onMouseEnter={() => handleHover('edu', index, true)}
          onMouseLeave={() => handleHover('edu', index, false)}
        >
          <h3 style={styles.cardTitle}>{edu.degree}</h3>
          <div style={styles.cardSubtitle}>{edu.institution}</div>
          <div style={styles.cardMeta}>{edu.duration}</div>
          <p style={styles.cardContent}>{edu.grade}</p>
        </div>
      ))}
    </div>
  );

  // Redesigned certifications component
  // Replace the renderCertifications function with this:
const renderCertifications = () => (
  <div>
    {certifications.map((cert, index) => (
      <div 
        key={index} 
        style={{
          ...styles.contentCard, 
          ...(hoverStates.cert?.[index] ? styles.contentCardHover : {})
        }}
        onMouseEnter={() => handleHover('cert', index, true)}
        onMouseLeave={() => handleHover('cert', index, false)}
      >
        <div style={styles.certHeader}>
          <div style={styles.certLogo}>
            <img 
              src={cert.logo || '/placeholder-logo.png'}
              alt={`${cert.issuer} logo`}
              style={styles.certLogoImg}
            />
          </div>
          <div>
            <h3 style={styles.cardTitle}>{cert.title}</h3>
            <div style={styles.cardSubtitle}>{cert.issuer}</div>
          </div>
        </div>
        
        <div style={styles.cardMeta}>
          <div style={styles.certDate}>{cert.date}</div>
        </div>
        
        <p style={{...styles.cardContent, marginBottom: '1rem'}}>
          Skills demonstrated:
        </p>
        
        <div style={styles.skillsContainer}>
          {cert.skills.map((skill, i) => (
            <span key={i} style={styles.skillTag}>{skill}</span>
          ))}
        </div>
        
        <a 
          href={cert.credentialURL} 
          target="_blank" 
          rel="noopener noreferrer" 
          style={styles.verifyLink}
        >
          Verify Credential →
        </a>
      </div>
    ))}
  </div>
);

  const renderAchievements = () => (
    <div style={styles.achievementsContainer}>
      {achievements.map((achievement, index) => (
        <div 
          key={index} 
          style={{
            ...styles.achievementCard, 
            ...(hoverStates.achievement?.[index] ? styles.achievementCardHover : {})
          }}
          onMouseEnter={() => handleHover('achievement', index, true)}
          onMouseLeave={() => handleHover('achievement', index, false)}
        >
          <div style={styles.achievementDate}>{achievement.date}</div>
          <h3 style={styles.cardTitle}>{achievement.title}</h3>
          <p style={styles.cardContent}>{achievement.description}</p>
        </div>
      ))}
    </div>
  );

  const renderProfiles = () => (
    <div style={styles.profilesContainer}>
      {professionalProfiles.map((profile, index) => (
        <div 
          key={index} 
          style={{
            ...styles.profileCard, 
            ...(hoverStates.profile?.[index] ? styles.profileCardHover : {})
          }}
          onMouseEnter={() => handleHover('profile', index, true)}
          onMouseLeave={() => handleHover('profile', index, false)}
        >
          <div style={styles.profileIcon}>
            <img 
              src={profile.imageUrl}
              alt={`${profile.platform} logo`}
              style={styles.profileLogoImage}
            />
          </div>
          <div>
            <div style={styles.profilePlatform}>{profile.platform}</div>
            <div style={styles.profileUsername}>{profile.username}</div>
            <a 
              href={profile.url} 
              target="_blank" 
              rel="noopener noreferrer" 
              style={styles.profileLink}
            >
              Visit Profile →
            </a>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div style={styles.pageContainer}>
      <div style={styles.mainContainer}>
        <header style={styles.header}>
          <h1 style={styles.heading}>About Me</h1>
        </header>
        
        <div style={styles.contentWrapper}>
          {/* Profile Section (Left) */}
          <div style={styles.profileSection}>
            <div 
              style={styles.photoContainer} 
              onMouseEnter={() => handleHover('photo', null, true)}
              onMouseLeave={() => handleHover('photo', null, false)}
            >
              <img 
                src="https://res.cloudinary.com/duhabjmtf/image/upload/v1745749982/profile_htfe6o.jpg" 
                alt="Profile" 
                style={styles.photoImage} 
              />
            </div>
            
            <div style={styles.nameContainer}>
              <h2 style={styles.name}>{personalData.name}</h2>
              <div style={styles.title}>{personalData.title}</div>
              <p style={styles.bioText}>{personalData.bio}</p>
            </div>
          </div>
          
          {/* Content Section (Right) */}
          <div style={styles.contentSection}>
            {/* Tabs */}
            <div style={styles.tabs}>
              {[
                { id: 'experience', label: 'Experience' },
                { id: 'education', label: 'Education' },
                { id: 'certifications', label: 'Certifications' },
                { id: 'achievements', label: 'Achievements' },
                { id: 'profiles', label: 'Professional Profiles' }
              ].map(tab => (
                <div 
                  key={tab.id}
                  style={{
                    ...styles.tab,
                    ...(activeTab === tab.id ? styles.activeTab : {})
                  }}
                  onClick={() => setActiveTab(tab.id)}
                >
                  {tab.label}
                  {activeTab === tab.id && <div style={styles.tabIndicator}></div>}
                </div>
              ))}
            </div>
            
            {/* Tab Content */}
            <div style={styles.tabContent}>
              {activeTab === 'experience' && renderExperience()}
              {activeTab === 'education' && renderEducation()}
              {activeTab === 'certifications' && renderCertifications()}
              {activeTab === 'achievements' && renderAchievements()}
              {activeTab === 'profiles' && renderProfiles()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;