import React, { useState } from 'react';
import './AICoach.css';

const AICoach = () => {
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    {
      icon: '🤖',
      title: 'Smart Habit Suggestions',
      description: 'Our AI analyzes your lifestyle, schedule, and preferences to suggest personalized habits that fit your routine.'
    },
    {
      icon: '📊',
      title: 'Progress Tracking',
      description: 'Advanced analytics help you understand patterns and optimize your habit-building strategy with data-driven insights.'
    },
    {
      icon: '💬',
      title: '24/7 Motivation',
      description: 'Your AI coach is always available to provide encouragement, tips, and personalized motivation when you need it most.'
    },
    {
      icon: '🎯',
      title: 'Adaptive Reminders',
      description: 'Get intelligent reminders that feel like encouragement, not nagging, based on your behavior patterns.'
    },
    {
      icon: '⚡',
      title: 'Mood & Energy Insights',
      description: 'Discover which habits improve your mood and energy levels through AI-powered analysis of your daily patterns.'
    },
    {
      icon: '🔄',
      title: 'Smart Streak Adjustments',
      description: 'Stay on track with intelligent streak adjustments when life gets tough, helping you maintain momentum.'
    }
  ];

  const benefits = [
    'Personalized habit recommendations based on your unique lifestyle',
    'Intelligent reminders that adapt to your schedule and preferences',
    'Real-time progress tracking with actionable insights',
    'Mood and energy correlation analysis for optimal habit timing',
    'Adaptive streak management during challenging periods',
    '24/7 AI support with contextual motivation and tips'
  ];

  return (
    <section id="ai-coach" className="ai-coach">
      <div className="container">
        <div className="ai-coach-header">
          <h1 className="page-title">AI-Powered Habit Coach</h1>
          <div className="tagline">
            <span className="tagline-icon">💡</span>
            <span className="tagline-text">"A coach in your pocket."</span>
          </div>
          <p className="page-description">
            Our smart AI suggests habits based on your lifestyle, tracks your progress, and gives personalized motivation.
          </p>
        </div>

        <div className="key-benefits">
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

        <div className="ai-coach-showcase">
          <div className="showcase-content">
            <div className="features-grid">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className={`feature-card ${activeFeature === index ? 'active' : ''}`}
                  onClick={() => setActiveFeature(index)}
                >
                  <div className="feature-icon">{feature.icon}</div>
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="ai-benefits-section">
          <h2 className="section-title">Why Choose Our AI Coach?</h2>
          <div className="benefits-grid">
            {benefits.map((benefit, index) => (
              <div key={index} className="benefit-card">
                <div className="benefit-number">{index + 1}</div>
                <p>{benefit}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="ai-demo-section">
          <h2 className="section-title">Experience AI Coaching</h2>
          <div className="demo-container">
            <div className="demo-phone">
              <div className="phone-screen">
                <div className="demo-header">
                  <div className="demo-time">9:41</div>
                  <div className="demo-battery">100%</div>
                </div>
                <div className="demo-content">
                  <div className="ai-message">
                    <div className="message-avatar">🤖</div>
                    <div className="message-text">
                      "Great job on your morning workout! I noticed you're more energetic on days you exercise. Want to try adding a 5-minute meditation?"
                    </div>
                  </div>
                  <div className="user-message">
                    <div className="message-text">That sounds good!</div>
                  </div>
                  <div className="ai-message">
                    <div className="message-avatar">🤖</div>
                    <div className="message-text">
                      "Perfect! I'll set a gentle reminder for 7 PM. Based on your patterns, evening meditation works best for you."
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="cta-section">
          <h2 className="section-title">Ready to Transform Your Habits?</h2>
          <p className="cta-description">
            Join thousands of users who have transformed their lives with our AI-powered habit coaching.
          </p>
          <div className="cta-buttons">
            <a href="#contact" className="btn btn-primary">Start Your Journey</a>
            <a href="#contact" className="btn btn-secondary">Download App</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AICoach;
