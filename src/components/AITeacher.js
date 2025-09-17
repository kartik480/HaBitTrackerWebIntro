import React, { useState, useEffect } from 'react';
import './AITeacher.css';

const AITeacher = () => {
  const [currentMessage, setCurrentMessage] = useState(0);
  const [isTyping, setIsTyping] = useState(false);

  const messages = [
    "Ready to build amazing habits together?",
    "Let's analyze your progress patterns!",
    "I'm here to guide you 24/7!",
    "Your success is my mission!"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTyping(true);
      setTimeout(() => {
        setCurrentMessage((prev) => (prev + 1) % messages.length);
        setIsTyping(false);
      }, 1000);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

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
          <div className="ai-interactive-section">
            <div className="ai-avatar-container">
              <div className="ai-avatar">
                <div className="ai-face">
                  <div className="ai-eyes">
                    <div className="eye left-eye"></div>
                    <div className="eye right-eye"></div>
                  </div>
                  <div className="ai-mouth"></div>
                </div>
                <div className="ai-glow"></div>
                <div className="ai-particles">
                  <div className="particle particle-1"></div>
                  <div className="particle particle-2"></div>
                  <div className="particle particle-3"></div>
                </div>
              </div>
              
              <div className="ai-chat-bubble">
                <div className="chat-message">
                  {messages[currentMessage]}
                </div>
                <div className={`chat-typing ${isTyping ? 'typing' : ''}`}>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            </div>
            
            <div className="ai-features-grid">
              <div className="feature-card feature-1">
                <div className="feature-icon">🧠</div>
                <h3>Smart Guidance</h3>
                <p>Get personalized habit recommendations based on your goals, schedule, and preferences.</p>
                <div className="feature-pulse"></div>
              </div>
              
              <div className="feature-card feature-2">
                <div className="feature-icon">📊</div>
                <h3>Progress Analysis</h3>
                <p>Advanced analytics help you understand patterns and optimize your habit-building strategy.</p>
                <div className="feature-pulse"></div>
              </div>
              
              <div className="feature-card feature-3">
                <div className="feature-icon">💬</div>
                <h3>24/7 Support</h3>
                <p>Your AI teacher is always available to provide motivation, tips, and encouragement.</p>
                <div className="feature-pulse"></div>
              </div>
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
