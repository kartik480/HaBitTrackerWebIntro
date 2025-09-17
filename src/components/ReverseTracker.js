import React, { useState } from 'react';
import './ReverseTracker.css';

const ReverseTracker = () => {
  const [selectedBadHabit, setSelectedBadHabit] = useState('junk-food');

  const badHabits = [
    {
      id: 'junk-food',
      name: 'Junk Food',
      icon: '🍔',
      color: '#ef4444',
      description: 'Days without unhealthy snacks and fast food',
      streak: 12,
      maxStreak: 45
    },
    {
      id: 'procrastination',
      name: 'Procrastination',
      icon: '⏰',
      color: '#f59e0b',
      description: 'Days without delaying important tasks',
      streak: 8,
      maxStreak: 23
    },
    {
      id: 'social-media',
      name: 'Social Media',
      icon: '📱',
      color: '#8b5cf6',
      description: 'Days without excessive social media scrolling',
      streak: 5,
      maxStreak: 18
    },
    {
      id: 'smoking',
      name: 'Smoking',
      icon: '🚭',
      color: '#6b7280',
      description: 'Days without cigarettes',
      streak: 67,
      maxStreak: 67
    },
    {
      id: 'late-night',
      name: 'Late Night',
      icon: '🌙',
      color: '#6366f1',
      description: 'Days without staying up too late',
      streak: 3,
      maxStreak: 12
    },
    {
      id: 'impulse-buying',
      name: 'Impulse Buying',
      icon: '💳',
      color: '#10b981',
      description: 'Days without unnecessary purchases',
      streak: 15,
      maxStreak: 28
    }
  ];

  const achievements = [
    {
      id: 'first-week',
      title: 'First Week Free',
      description: '7 days without your bad habit',
      icon: '🎉',
      unlocked: true,
      date: '2024-01-15'
    },
    {
      id: 'month-master',
      title: 'Month Master',
      description: '30 days of restraint',
      icon: '🏆',
      unlocked: true,
      date: '2024-02-10'
    },
    {
      id: 'quarter-champion',
      title: 'Quarter Champion',
      description: '90 days of breaking the habit',
      icon: '👑',
      unlocked: false,
      date: null
    },
    {
      id: 'year-warrior',
      title: 'Year Warrior',
      description: '365 days habit-free',
      icon: '⚡',
      unlocked: false,
      date: null
    }
  ];

  const strategies = [
    {
      icon: '🎯',
      title: 'Identify Triggers',
      description: 'Recognize what situations lead to your bad habit and prepare alternatives.',
      color: '#ef4444'
    },
    {
      icon: '🔄',
      title: 'Replace, Don\'t Remove',
      description: 'Substitute bad habits with positive alternatives instead of just stopping.',
      color: '#10b981'
    },
    {
      icon: '📊',
      title: 'Track Progress',
      description: 'Visualize your success with streak counters and achievement badges.',
      color: '#6366f1'
    },
    {
      icon: '🤝',
      title: 'Get Support',
      description: 'Share your journey with friends or join support groups for accountability.',
      color: '#8b5cf6'
    },
    {
      icon: '🧠',
      title: 'Mindfulness',
      description: 'Practice awareness techniques to catch yourself before falling into old patterns.',
      color: '#f59e0b'
    },
    {
      icon: '🎁',
      title: 'Reward Yourself',
      description: 'Celebrate milestones with meaningful rewards for your restraint.',
      color: '#06b6d4'
    }
  ];

  const benefits = [
    'Feel proud of your self-control and discipline',
    'Build confidence by proving you can overcome challenges',
    'Improve your mental and physical health',
    'Save money and time previously wasted on bad habits',
    'Develop stronger willpower that applies to other areas',
    'Create positive momentum for building good habits'
  ];

  const selectedHabit = badHabits.find(habit => habit.id === selectedBadHabit);

  const handleHabitSelect = (habitId) => {
    setSelectedBadHabit(habitId);
  };

  return (
    <section id="reverse-tracker" className="reverse-tracker">
      <div className="container">
        <div className="reverse-tracker-header">
          <h1 className="page-title">Reverse Habit Tracker</h1>
          <div className="tagline">
            <span className="tagline-icon">💡</span>
            <span className="tagline-text">"Celebrate what you avoid."</span>
          </div>
          <p className="page-description">
            Not just about building good habits — also track the bad ones you've conquered.
          </p>
        </div>

        <div className="key-benefits">
          <div className="benefit-item">
            <span className="checkmark">✔</span>
            <span>"Days without junk food 🍔❌"</span>
          </div>
          <div className="benefit-item">
            <span className="checkmark">✔</span>
            <span>"No procrastination streak 🔥"</span>
          </div>
          <div className="benefit-item">
            <span className="checkmark">✔</span>
            <span>Feel proud of your restraint, not just your actions.</span>
          </div>
        </div>

        <div className="bad-habits-showcase">
          <h2 className="section-title">Break Your Bad Habits</h2>
          <div className="habits-grid">
            {badHabits.map((habit, index) => (
              <div 
                key={index}
                className={`habit-card ${selectedBadHabit === habit.id ? 'active' : ''}`}
                onClick={() => handleHabitSelect(habit.id)}
                style={{ '--habit-color': habit.color }}
              >
                <div className="habit-icon">{habit.icon}</div>
                <h3>{habit.name}</h3>
                <p>{habit.description}</p>
                <div className="habit-stats">
                  <div className="current-streak">
                    <span className="streak-number">{habit.streak}</span>
                    <span className="streak-label">days free</span>
                  </div>
                  <div className="max-streak">
                    <span className="max-label">Best:</span>
                    <span className="max-number">{habit.maxStreak}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="streak-dashboard">
          <h2 className="section-title">Your Progress Dashboard</h2>
          <div className="dashboard-container">
            <div className="selected-habit-detail">
              <div className="habit-header">
                <div className="habit-icon-large">{selectedHabit.icon}</div>
                <div className="habit-info">
                  <h3>{selectedHabit.name}</h3>
                  <p>{selectedHabit.description}</p>
                </div>
              </div>
              
              <div className="streak-visualization">
                <div className="current-streak-display">
                  <div className="streak-circle">
                    <span className="streak-days">{selectedHabit.streak}</span>
                    <span className="streak-text">Days Free</span>
                  </div>
                </div>
                
                <div className="progress-bar">
                  <div className="progress-fill" style={{ width: `${(selectedHabit.streak / selectedHabit.maxStreak) * 100}%` }}></div>
                  <div className="progress-label">
                    <span>Current: {selectedHabit.streak} days</span>
                    <span>Best: {selectedHabit.maxStreak} days</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="achievements-section">
              <h3>Achievements</h3>
              <div className="achievements-grid">
                {achievements.map((achievement, index) => (
                  <div key={index} className={`achievement-card ${achievement.unlocked ? 'unlocked' : 'locked'}`}>
                    <div className="achievement-icon">{achievement.icon}</div>
                    <div className="achievement-info">
                      <h4>{achievement.title}</h4>
                      <p>{achievement.description}</p>
                      {achievement.unlocked && (
                        <span className="achievement-date">Unlocked: {achievement.date}</span>
                      )}
                    </div>
                    <div className="achievement-status">
                      {achievement.unlocked ? '✓' : '🔒'}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="strategies-section">
          <h2 className="section-title">Breaking Bad Habits</h2>
          <div className="strategies-grid">
            {strategies.map((strategy, index) => (
              <div key={index} className="strategy-card" style={{ '--strategy-color': strategy.color }}>
                <div className="strategy-icon">{strategy.icon}</div>
                <h3>{strategy.title}</h3>
                <p>{strategy.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="motivation-section">
          <h2 className="section-title">Stay Motivated</h2>
          <div className="motivation-cards">
            <div className="motivation-card">
              <div className="motivation-icon">💪</div>
              <h3>You're Stronger Than You Think</h3>
              <p>Every day you resist temptation makes you mentally stronger and builds unshakeable confidence.</p>
            </div>
            <div className="motivation-card">
              <div className="motivation-icon">🎯</div>
              <h3>Focus on Progress, Not Perfection</h3>
              <p>Even if you slip up, your overall progress matters more than any single setback.</p>
            </div>
            <div className="motivation-card">
              <div className="motivation-icon">🌟</div>
              <h3>Celebrate Small Wins</h3>
              <p>Every hour, day, and week without your bad habit is a victory worth celebrating.</p>
            </div>
          </div>
        </div>

        <div className="reverse-benefits-section">
          <h2 className="section-title">Why Track Bad Habits?</h2>
          <div className="benefits-grid">
            {benefits.map((benefit, index) => (
              <div key={index} className="benefit-card">
                <div className="benefit-number">{index + 1}</div>
                <p>{benefit}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="cta-section">
          <h2 className="section-title">Start Breaking Bad Habits Today</h2>
          <p className="cta-description">
            Join thousands who have successfully overcome their bad habits and transformed their lives.
          </p>
          <div className="cta-buttons">
            <a href="#contact" className="btn btn-primary">Start Tracking</a>
            <a href="#contact" className="btn btn-secondary">View Success Stories</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReverseTracker;
