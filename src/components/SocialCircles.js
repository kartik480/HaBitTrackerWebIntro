import React, { useState } from 'react';
import './SocialCircles.css';

const SocialCircles = () => {
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    {
      icon: '👥',
      title: 'Group Challenges',
      description: 'Create or join group challenges where everyone works together to achieve common habit goals.'
    },
    {
      icon: '🏆',
      title: 'Leaderboards',
      description: 'Compete with friends and see who\'s leading the pack in different habit categories.'
    },
    {
      icon: '🤝',
      title: 'Team Support',
      description: 'Send encouragement, high-fives, and motivational messages to your teammates.'
    },
    {
      icon: '📊',
      title: 'Group Streaks',
      description: 'Build collective streaks where everyone\'s progress contributes to the team\'s success.'
    },
    {
      icon: '💬',
      title: 'Social Feed',
      description: 'Share your achievements, milestones, and daily progress with your social circle.'
    },
    {
      icon: '🎯',
      title: 'Shared Goals',
      description: 'Set group objectives and celebrate victories together as a team.'
    }
  ];

  const benefits = [
    'Build stronger relationships through shared habit-building journeys',
    'Stay motivated with friendly competition and group accountability',
    'Celebrate achievements together and support each other through challenges',
    'Create lasting friendships with people who share similar goals',
    'Learn from others\' strategies and share your own success tips',
    'Transform habit-building from a solo activity into a social experience'
  ];

  const teamMembers = [
    { name: 'Sarah', streak: 45, avatar: '👩‍💼', habits: ['Morning Run', 'Meditation'] },
    { name: 'Mike', streak: 38, avatar: '👨‍💻', habits: ['Reading', 'Gym'] },
    { name: 'Emma', streak: 52, avatar: '👩‍🎨', habits: ['Sketching', 'Yoga'] },
    { name: 'Alex', streak: 29, avatar: '👨‍🍳', habits: ['Cooking', 'Learning'] }
  ];

  return (
    <section id="social-circles" className="social-circles">
      <div className="container">
        <div className="social-circles-header">
          <h1 className="page-title">Habit Social Circles</h1>
          <div className="tagline">
            <span className="tagline-icon">💡</span>
            <span className="tagline-text">"Better together."</span>
          </div>
          <p className="page-description">
            Team up with friends or join groups to achieve habits together. Your progress helps not just you — but your whole team.
          </p>
        </div>

        <div className="key-benefits">
          <div className="benefit-item">
            <span className="checkmark">✔</span>
            <span>Build group streaks & compete on leaderboards.</span>
          </div>
          <div className="benefit-item">
            <span className="checkmark">✔</span>
            <span>Send encouragement and high-fives to teammates.</span>
          </div>
          <div className="benefit-item">
            <span className="checkmark">✔</span>
            <span>Make habit-building a shared journey, not a lonely one.</span>
          </div>
        </div>

        <div className="social-circles-showcase">
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

        <div className="team-demo-section">
          <h2 className="section-title">Your Team Dashboard</h2>
          <div className="team-dashboard">
            <div className="team-stats">
              <div className="stat-card">
                <div className="stat-number">164</div>
                <div className="stat-label">Total Streak Days</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">12</div>
                <div className="stat-label">Active Members</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">8</div>
                <div className="stat-label">Group Challenges</div>
              </div>
            </div>
            
            <div className="team-members">
              <h3>Team Members</h3>
              <div className="members-grid">
                {teamMembers.map((member, index) => (
                  <div key={index} className="member-card">
                    <div className="member-avatar">{member.avatar}</div>
                    <div className="member-info">
                      <h4>{member.name}</h4>
                      <div className="member-streak">{member.streak} day streak</div>
                      <div className="member-habits">
                        {member.habits.map((habit, i) => (
                          <span key={i} className="habit-tag">{habit}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="social-benefits-section">
          <h2 className="section-title">Why Join Social Circles?</h2>
          <div className="benefits-grid">
            {benefits.map((benefit, index) => (
              <div key={index} className="benefit-card">
                <div className="benefit-number">{index + 1}</div>
                <p>{benefit}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="social-feed-demo">
          <h2 className="section-title">Social Feed</h2>
          <div className="feed-container">
            <div className="feed-item">
              <div className="feed-avatar">👩‍💼</div>
              <div className="feed-content">
                <div className="feed-header">
                  <span className="feed-name">Sarah</span>
                  <span className="feed-time">2 hours ago</span>
                </div>
                <div className="feed-text">Just completed my 45th day of morning runs! 🏃‍♀️ Thanks to everyone's encouragement!</div>
                <div className="feed-actions">
                  <button className="feed-action">👍 12</button>
                  <button className="feed-action">💬 3</button>
                  <button className="feed-action">🎉 Celebrate</button>
                </div>
              </div>
            </div>
            
            <div className="feed-item">
              <div className="feed-avatar">👨‍💻</div>
              <div className="feed-content">
                <div className="feed-header">
                  <span className="feed-name">Mike</span>
                  <span className="feed-time">4 hours ago</span>
                </div>
                <div className="feed-text">Team challenge update: We're 80% to our group goal! Keep it up everyone! 💪</div>
                <div className="feed-actions">
                  <button className="feed-action">👍 8</button>
                  <button className="feed-action">💬 5</button>
                  <button className="feed-action">🎉 Celebrate</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="cta-section">
          <h2 className="section-title">Ready to Build Habits Together?</h2>
          <p className="cta-description">
            Join thousands of users who have transformed their habits through the power of community.
          </p>
          <div className="cta-buttons">
            <a href="#contact" className="btn btn-primary">Join a Circle</a>
            <a href="#contact" className="btn btn-secondary">Create Your Own</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialCircles;
