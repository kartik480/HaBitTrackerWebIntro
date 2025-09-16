import React, { useState, useEffect } from 'react';
import './PetCompanion.css';

const PetCompanion = () => {
  const [petLevel, setPetLevel] = useState(1);
  const [petHappiness, setPetHappiness] = useState(85);
  const [habitsCompleted, setHabitsCompleted] = useState(12);

  const petFeatures = [
    {
      icon: '🐾',
      title: 'Virtual Pet Evolution',
      description: 'Watch your pet transform from a tiny creature into a magnificent companion as you build consistent habits.'
    },
    {
      icon: '💪',
      title: 'Strength & Abilities',
      description: 'Each completed habit increases your pet\'s strength, unlocking new abilities and special powers.'
    },
    {
      icon: '❤️',
      title: 'Emotional Bond',
      description: 'Your pet reacts to your progress - happy when you succeed, encouraging when you struggle.'
    },
    {
      icon: '🎮',
      title: 'Gamified Experience',
      description: 'Earn XP, level up, and unlock achievements while building real-world positive habits.'
    },
    {
      icon: '🏆',
      title: 'Achievement System',
      description: 'Unlock special badges, titles, and rare pet variants based on your habit consistency.'
    },
    {
      icon: '🌟',
      title: 'Customization',
      description: 'Personalize your pet\'s appearance, accessories, and habitat with earned rewards.'
    }
  ];

  const benefits = [
    'Habit tracking becomes an engaging game rather than a chore',
    'Emotional attachment to your pet motivates consistent behavior',
    'Visual progress through pet evolution provides instant gratification',
    'Social features allow you to show off your evolved companions',
    'Multiple pet types available - dragons, cats, robots, and more!',
    'Pet reacts to your mood and provides encouragement when needed'
  ];

  return (
    <section id="pet-companion" className="pet-companion">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            <span className="pet-icon">🐾</span>
            Gamified Pet/Character Companion
          </h2>
          <p className="section-subtitle">
            💡 "Build habits, grow your companion!"
          </p>
          <p className="section-description">
            Every good habit you complete helps your virtual pet/character grow stronger, evolve, or unlock new abilities. 
            Missed a habit? Your pet feels sad or weak, motivating you to stay consistent.
          </p>
        </div>

        <div className="pet-demo-section">
          <div className="pet-showcase">
            <div className="pet-avatar">
              <div className="pet-character">🐉</div>
              <div className="pet-status">
                <div className="pet-name">Draco</div>
                <div className="pet-level">Level {petLevel}</div>
                <div className="happiness-bar">
                  <div className="happiness-label">Happiness</div>
                  <div className="happiness-progress">
                    <div 
                      className="happiness-fill" 
                      style={{ width: `${petHappiness}%` }}
                    ></div>
                  </div>
                  <div className="happiness-value">{petHappiness}%</div>
                </div>
              </div>
            </div>
            
            <div className="pet-stats">
              <div className="stat-item">
                <div className="stat-icon">✅</div>
                <div className="stat-info">
                  <div className="stat-number">{habitsCompleted}</div>
                  <div className="stat-label">Habits Completed</div>
                </div>
              </div>
              <div className="stat-item">
                <div className="stat-icon">🔥</div>
                <div className="stat-info">
                  <div className="stat-number">7</div>
                  <div className="stat-label">Day Streak</div>
                </div>
              </div>
              <div className="stat-item">
                <div className="stat-icon">⭐</div>
                <div className="stat-info">
                  <div className="stat-number">156</div>
                  <div className="stat-label">Total XP</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="features-grid">
          {petFeatures.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="benefits-section">
          <h3 className="benefits-title">Why This Works</h3>
          <div className="benefits-list">
            {benefits.map((benefit, index) => (
              <div key={index} className="benefit-item">
                <span className="benefit-check">✔</span>
                <span className="benefit-text">{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="call-to-action">
          <h3>Ready to Start Your Journey?</h3>
          <p>Download Kultivate and begin nurturing your virtual companion today!</p>
          <div className="cta-buttons">
            <a href="#contact" className="btn btn-primary">Download App</a>
            <a href="#about" className="btn btn-secondary">Learn More</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PetCompanion;
