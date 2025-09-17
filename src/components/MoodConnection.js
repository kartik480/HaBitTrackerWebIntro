import React from 'react';
import './MoodConnection.css';

const MoodConnection = () => {

  const insights = [
    {
      icon: '😴',
      title: 'Sleep Well = Happier Mornings',
      description: 'Users who sleep 8+ hours report 23% higher morning mood scores',
      correlation: '+0.78',
      color: '#6366f1'
    },
    {
      icon: '💪',
      title: 'Exercise = Boosted Energy',
      description: 'Regular exercise correlates with 31% higher energy levels throughout the day',
      correlation: '+0.82',
      color: '#10b981'
    },
    {
      icon: '🧘',
      title: 'Meditation = Calmer Mindset',
      description: 'Daily meditation reduces stress indicators by 45% and improves focus',
      correlation: '+0.71',
      color: '#8b5cf6'
    },
    {
      icon: '🥗',
      title: 'Healthy Eating = Better Mood',
      description: 'Nutritious meals lead to 28% improvement in afternoon energy and mood',
      correlation: '+0.65',
      color: '#f59e0b'
    }
  ];

  const benefits = [
    'Discover which habits have the biggest impact on your mood and energy',
    'Identify patterns that help you optimize your daily routine',
    'Track correlations between habits and emotional well-being',
    'Make data-driven decisions about which habits to prioritize',
    'Understand how lifestyle changes affect your mental health',
    'Build a personalized habit plan based on your unique patterns'
  ];


  return (
    <section id="mood-connection" className="mood-connection">
      <div className="container">
        <div className="mood-connection-header">
          <h1 className="page-title">Mood + Habit Connection</h1>
          <div className="tagline">
            <span className="tagline-icon">💡</span>
            <span className="tagline-text">"See how habits shape your life."</span>
          </div>
          <p className="page-description">
            Track your daily habits alongside your mood, energy, and health. Discover powerful patterns:
          </p>
        </div>

        <div className="key-insights">
          <div className="insight-item">
            <span className="checkmark">✔</span>
            <span>Sleep well = happier mornings.</span>
          </div>
          <div className="insight-item">
            <span className="checkmark">✔</span>
            <span>Exercise = boosted energy.</span>
          </div>
          <div className="insight-item">
            <span className="checkmark">✔</span>
            <span>Break bad habits = calmer mindset.</span>
          </div>
          <div className="insight-description">
            <p>Your data turns into insights that make habits more meaningful.</p>
          </div>
        </div>


        <div className="insights-section">
          <h2 className="section-title">Discover Powerful Patterns</h2>
          <div className="insights-grid">
            {insights.map((insight, index) => (
              <div key={index} className="insight-card">
                <div className="insight-header">
                  <div className="insight-icon" style={{ color: insight.color }}>
                    {insight.icon}
                  </div>
                  <div className="correlation-badge" style={{ backgroundColor: insight.color }}>
                    {insight.correlation}
                  </div>
                </div>
                <h3>{insight.title}</h3>
                <p>{insight.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mood-benefits-section">
          <h2 className="section-title">Why Track Mood + Habits?</h2>
          <div className="benefits-grid">
            {benefits.map((benefit, index) => (
              <div key={index} className="benefit-card">
                <div className="benefit-number">{index + 1}</div>
                <p>{benefit}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mood-journal-demo">
          <h2 className="section-title">Daily Mood Journal</h2>
          <div className="journal-container">
            <div className="journal-entry">
              <div className="journal-date">Today</div>
              <div className="journal-content">
                <div className="mood-selector">
                  <span className="mood-label">How are you feeling?</span>
                  <div className="mood-options">
                    {['😢', '😔', '😐', '😊', '😄'].map((mood, index) => (
                      <button key={index} className={`mood-btn ${index === 3 ? 'selected' : ''}`}>
                        {mood}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="energy-selector">
                  <span className="energy-label">Energy Level:</span>
                  <div className="energy-bar">
                    <div className="energy-fill" style={{ width: '70%' }}></div>
                  </div>
                  <span className="energy-value">7/10</span>
                </div>
                <div className="habit-checkboxes">
                  <label className="habit-checkbox">
                    <input type="checkbox" defaultChecked />
                    <span>✅ Exercised</span>
                  </label>
                  <label className="habit-checkbox">
                    <input type="checkbox" defaultChecked />
                    <span>✅ Ate healthy</span>
                  </label>
                  <label className="habit-checkbox">
                    <input type="checkbox" />
                    <span>⭕ Meditated</span>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="cta-section">
          <h2 className="section-title">Start Understanding Your Patterns</h2>
          <p className="cta-description">
            Join thousands who have discovered the connection between their habits and well-being.
          </p>
          <div className="cta-buttons">
            <a href="#contact" className="btn btn-primary">Start Tracking</a>
            <a href="#contact" className="btn btn-secondary">View Insights</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MoodConnection;
