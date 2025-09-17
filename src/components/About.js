import React from 'react';
import './About.css';

const About = () => {
  const stats = [
    { number: '1M+', label: 'Habits Tracked' },
    { number: '500K+', label: 'Active Users' },
    { number: '95%', label: 'Success Rate' },
    { number: '4.8★', label: 'App Rating' }
  ];

  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2 className="section-title">Why Choose Kultivate?</h2>
            <p className="section-description">
              "Kultivate is more than just an app - it's your personal companion for building 
              lasting habits. Our scientifically-backed approach helps you achieve your goals 
              with proven methods and intuitive design."
            </p>
            <div className="about-features">
              <div className="feature-item">
                <div className="feature-icon">📱</div>
                <div className="feature-content">
                  <h3>Mobile-First Design</h3>
                  <p>Beautiful, intuitive interface designed specifically for mobile devices.</p>
                </div>
              </div>
              <div className="feature-item">
                <div className="feature-icon">📊</div>
                <div className="feature-content">
                  <h3>Smart Analytics</h3>
                  <p>Track your progress with detailed insights and personalized recommendations.</p>
                </div>
              </div>
              <div className="feature-item">
                <div className="feature-icon">🎯</div>
                <div className="feature-content">
                  <h3>Goal Achievement</h3>
                  <p>Proven methods to help you build habits that stick and achieve your dreams.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="about-visual">
            <div className="about-image">
              <div className="image-placeholder">
                <div className="placeholder-content">
                  <div className="placeholder-icon">📱</div>
                  <div className="placeholder-text">Mobile App Preview</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="stats-section">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-item">
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
