import React from 'react';

function Contact() {
  return (
    <section className="contact-section">
      <div className="contact-container">
        <h1 className="contact-title">Contact Me</h1>

        <div className="contact-card">
          <div className="contact-header">
            <h2>Let's Connect</h2>
            <p>Feel free to reach out through any of the following channels. I'm always open to new opportunities, collaborations, or just a friendly chat.</p>
          </div>

          <div className="contact-body">
            {/* LinkedIn */}
            <div className="contact-item">
              <div className="icon-wrapper">
                <svg className="contact-icon" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z" />
                </svg>
              </div>
              <div className="contact-info">
                <h3>LinkedIn</h3>
                <a href="https://www.linkedin.com/in/manideepak-reddy-bodigam-/" target="_blank" rel="noopener noreferrer">Manideepak Reddy Bodigam</a>
              </div>
            </div>

            {/* Email */}
            <div className="contact-item">
              <div className="icon-wrapper">
                <svg className="contact-icon" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
              </div>
              <div className="contact-info">
                <h3>Email</h3>
                <a href="mailto:manideepak1202@gmail.com">manideepak1202@gmail.com</a>
              </div>
            </div>

            {/* Phone */}
            <div className="contact-item">
              <div className="icon-wrapper">
                <svg className="contact-icon" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/>
                </svg>
              </div>
              <div className="contact-info">
                <h3>Phone</h3>
                <a href="tel:+918074955963">+91 8074966963</a>
              </div>
            </div>

            {/* WhatsApp */}
            <div className="contact-item">
              <div className="icon-wrapper">
                <svg className="contact-icon" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </div>
              <div className="contact-info">
                <h3>WhatsApp</h3>
                <a href="https://wa.me/918074955963" target="_blank" rel="noopener noreferrer">Message me on WhatsApp</a>
              </div>
            </div>

            {/* Location */}
            <div className="contact-item">
              <div className="icon-wrapper">
                <svg className="contact-icon" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                </svg>
              </div>
              <div className="contact-info">
                <h3>Location</h3>
                <p>Hyderabad, India</p>
              </div>
            </div>

            {/* Instagram */}
            <div className="contact-item">
              <div className="icon-wrapper">
                <svg className="contact-icon" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </div>
              <div className="contact-info">
                <h3>Instagram</h3>
                <a href="https://www.instagram.com/m_a_n_i_1_2/" target="_blank" rel="noopener noreferrer">@m_a_n_i_1_2</a>
              </div>
            </div>

            {/* X (Twitter) */}
            <div className="contact-item">
              <div className="icon-wrapper">
                <svg className="contact-icon" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </div>
              <div className="contact-info">
                <h3>X (Twitter)</h3>
                <a href="https://x.com/mani_12_" target="_blank" rel="noopener noreferrer">@mani_12_</a>
              </div>
            </div>

            {/* Resume - Moved to the end */}
            <div className="contact-item">
              <div className="icon-wrapper">
                <svg className="contact-icon" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6zm-1 2l5 5h-5V4zM6 20V4h5v7h7v9H6z" />
                  <path d="M10 13h4v1h-4zm0 3h4v1h-4zm0-6h1v1h-1z" />
                </svg>
              </div>
              <div className="contact-info">
                <h3>Resume</h3>
                <a href="https://drive.google.com/file/d/1mYC8JkT6VM_qi4UMLHjaI-L1qtgKYR8e/view?usp=drive_link" className="resume-link" target="_blank" rel="noopener noreferrer">
                  Download CV
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        /* Base Styles */
        .contact-section {
          background: linear-gradient(to bottom, #f0f9ff, #e6f7ff);
          padding: 5rem 1rem;
          min-height: 100vh;
          font-family: 'Segoe UI', sans-serif;
        }

        .contact-container {
          max-width: 1200px;
          margin: auto;
        }

        /* Title Styles */
        .contact-title {
          font-size: 2.5rem;
          font-weight: 700;
          text-align: center;
          margin-bottom: 2.5rem;
          position: relative;
          color: #0369a1;
        }

        .contact-title::after {
          content: '';
          height: 4px;
          width: 80px;
          background-color: #0ea5e9;
          display: block;
          margin: 0.5rem auto 0;
        }

        /* Card Styles */
        .contact-card {
          background: white;
          border-radius: 1.5rem;
          box-shadow: 0 10px 30px rgba(3, 105, 161, 0.15);
          overflow: hidden;
        }

        .contact-header {
          background: linear-gradient(135deg, #0ea5e9, #0284c7);
          color: white;
          padding: 2.5rem 2rem;
          text-align: center;
        }

        .contact-header h2 {
          font-size: 2rem;
          font-weight: 600;
          margin-bottom: 1rem;
        }

        .contact-header p {
          font-size: 1.1rem;
          opacity: 0.9;
          max-width: 800px;
          margin: 0 auto;
          line-height: 1.6;
        }

        /* Contact Items Grid - Now 4 columns */
        .contact-body {
          padding: 2.5rem 2rem;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          grid-gap: 1.5rem;
        }

        /* Individual Contact Item */
        .contact-item {
          display: flex;
          align-items: flex-start;
          padding: 1.25rem;
          background: #f8fafc;
          border-radius: 1rem;
          transition: transform 0.3s, box-shadow 0.3s;
          height: 100%;
        }

        .contact-item:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 20px rgba(3, 105, 161, 0.1);
        }

        /* Resume item styling to ensure it's last */
        .resume-item {
          grid-column: 4;
          grid-row: 3;
        }

        /* Icon Styles */
        .icon-wrapper {
          width: 50px;
          height: 50px;
          background: linear-gradient(135deg, #0ea5e9, #0284c7);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-right: 1rem;
          flex-shrink: 0;
        }

        .contact-icon {
          width: 24px;
          height: 24px;
          color: white;
        }

        /* Contact Info Text */
        .contact-info {
          flex: 1;
        }

        .contact-info h3 {
          color: #0369a1;
          font-size: 1.1rem;
          font-weight: 600;
          margin-bottom: 0.5rem;
        }

        .contact-info a, 
        .contact-info p {
          color: #475569;
          text-decoration: none;
          font-size: 1rem;
          display: block;
          transition: color 0.2s;
          word-break: break-word;
        }

        .contact-info a:hover {
          color: #0ea5e9;
        }

        /* Resume Button */
        .resume-link {
          display: inline-block;
          background: linear-gradient(135deg, #0ea5e9, #0284c7);
          color: white !important;
          padding: 0.6rem 1.2rem;
          border-radius: 0.5rem;
          margin-top: 0.5rem;
          transition: all 0.3s !important;
          font-weight: 500;
        }

        .resume-link:hover {
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(3, 105, 161, 0.2);
          opacity: 0.95;
        }

        /* Responsive - Adjust columns based on screen size */
        @media (max-width: 1200px) {
          .contact-body {
            grid-template-columns: repeat(3, 1fr);
          }
          .resume-item {
            grid-column: 3;
            grid-row: 3;
          }
        }

        @media (max-width: 900px) {
          .contact-body {
            grid-template-columns: repeat(2, 1fr);
          }
          .resume-item {
            grid-column: 2;
            grid-row: 4;
          }
        }

        @media (max-width: 600px) {
          .contact-body {
            grid-template-columns: 1fr;
          }
          .resume-item {
            grid-column: 1;
            grid-row: 9;
          }
        }
      `}</style>
    </section>
  );
}

export default Contact;