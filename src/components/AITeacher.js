import React from 'react';
import './AITeacher.css';

const AITeacher = () => {
  return (
    <section id="ai-teacher" className="ai-teacher">
      <div className="container">
        <div className="ai-teacher-header">
          <h2 className="section-title">Your AI Teacher</h2>
          <p className="section-subtitle">"A coach in your pocket."</p>
          <p className="section-description">
            Our smart AI suggests habits based on your lifestyle, tracks your progress, and gives personalized motivation.
          </p>
        </div>
        
        <div className="ai-teacher-content">
          <div className="ai-cards-container">
            <div className="ai-card">
              <div className="ai-icon">🤖</div>
              <h3>Smart Guidance</h3>
              <p>Get personalized habit recommendations based on your goals, schedule, and preferences.</p>
            </div>
            
            <div className="ai-card">
              <div className="ai-icon">📊</div>
              <h3>Progress Analysis</h3>
              <p>Advanced analytics help you understand patterns and optimize your habit-building strategy.</p>
            </div>
            
            <div className="ai-card">
              <div className="ai-icon">💬</div>
              <h3>24/7 Support</h3>
              <p>Your AI teacher is always available to provide motivation, tips, and encouragement.</p>
            </div>
          </div>
        </div>
        
        <div className="ai-benefits">
          <div className="benefit-item">
            <span className="checkmark">✔</span>
            <span>Get reminders that feel like encouragement, not nagging.</span>
          </div>
          <div className="benefit-item">
            <span className="checkmark">✔</span>
            <span>Discover which habits improve your mood and energy.</span>
          </div>
          <div className="benefit-item">
            <span className="checkmark">✔</span>
            <span>Stay on track with smart streak adjustments when life gets tough.</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AITeacher;
