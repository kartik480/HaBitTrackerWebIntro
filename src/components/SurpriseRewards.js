import React, { useState } from 'react';
import './SurpriseRewards.css';

const SurpriseRewards = () => {
  const [selectedReward, setSelectedReward] = useState(null);
  const [unlockedRewards, setUnlockedRewards] = useState(['quote-1', 'badge-1', 'wallpaper-1']);

  const rewardCategories = [
    {
      id: 'quotes',
      name: 'Motivational Quotes',
      icon: '💬',
      color: '#6366f1',
      description: 'Inspirational quotes to keep you motivated'
    },
    {
      id: 'wallpapers',
      name: 'Wallpapers',
      icon: '🖼️',
      color: '#10b981',
      description: 'Beautiful wallpapers for your devices'
    },
    {
      id: 'badges',
      name: 'Achievement Badges',
      icon: '🏆',
      color: '#f59e0b',
      description: 'Collectible badges for milestones'
    },
    {
      id: 'features',
      name: 'Hidden Features',
      icon: '🔓',
      color: '#8b5cf6',
      description: 'Unlock special app features'
    },
    {
      id: 'themes',
      name: 'App Themes',
      icon: '🎨',
      color: '#ef4444',
      description: 'Custom themes and color schemes'
    },
    {
      id: 'sounds',
      name: 'Notification Sounds',
      icon: '🔊',
      color: '#06b6d4',
      description: 'Unique sounds for achievements'
    }
  ];

  const sampleRewards = {
    quotes: [
      { id: 'quote-1', text: '"The secret of getting ahead is getting started."', author: 'Mark Twain', rarity: 'common' },
      { id: 'quote-2', text: '"Success is not final, failure is not fatal: it is the courage to continue that counts."', author: 'Winston Churchill', rarity: 'rare' },
      { id: 'quote-3', text: '"The only way to do great work is to love what you do."', author: 'Steve Jobs', rarity: 'epic' }
    ],
    wallpapers: [
      { id: 'wallpaper-1', name: 'Mountain Sunrise', rarity: 'common', preview: '🌅' },
      { id: 'wallpaper-2', name: 'Ocean Waves', rarity: 'rare', preview: '🌊' },
      { id: 'wallpaper-3', name: 'Forest Path', rarity: 'epic', preview: '🌲' }
    ],
    badges: [
      { id: 'badge-1', name: 'First Steps', description: 'Complete your first habit', rarity: 'common', icon: '👶' },
      { id: 'badge-2', name: 'Week Warrior', description: '7-day streak', rarity: 'rare', icon: '⚔️' },
      { id: 'badge-3', name: 'Month Master', description: '30-day streak', rarity: 'epic', icon: '👑' }
    ],
    features: [
      { id: 'feature-1', name: 'Advanced Analytics', description: 'Detailed progress insights', rarity: 'rare' },
      { id: 'feature-2', name: 'Custom Themes', description: 'Personalize your app', rarity: 'epic' },
      { id: 'feature-3', name: 'Export Data', description: 'Download your progress', rarity: 'rare' }
    ]
  };

  const milestones = [
    { streak: 3, reward: 'Motivational Quote', unlocked: true },
    { streak: 7, reward: 'Achievement Badge', unlocked: true },
    { streak: 14, reward: 'Wallpaper Pack', unlocked: true },
    { streak: 21, reward: 'Hidden Feature', unlocked: false },
    { streak: 30, reward: 'Special Theme', unlocked: false },
    { streak: 50, reward: 'Legendary Badge', unlocked: false },
    { streak: 100, reward: 'Ultimate Reward', unlocked: false }
  ];

  const mysteryBoxes = [
    { id: 'daily', name: 'Daily Box', cost: 'Free', rewards: ['Common items'], color: '#10b981' },
    { id: 'weekly', name: 'Weekly Box', cost: '7-day streak', rewards: ['Rare items', 'Badges'], color: '#6366f1' },
    { id: 'monthly', name: 'Monthly Box', cost: '30-day streak', rewards: ['Epic items', 'Themes'], color: '#8b5cf6' },
    { id: 'legendary', name: 'Legendary Box', cost: '100-day streak', rewards: ['Legendary items', 'Special features'], color: '#f59e0b' }
  ];

  const benefits = [
    'Stay motivated with unexpected rewards and surprises',
    'Collect unique items that showcase your progress',
    'Unlock special features as you build consistency',
    'Experience the thrill of mystery and discovery',
    'Create a sense of achievement beyond just streaks',
    'Make habit-building feel like an exciting game'
  ];

  const handleRewardClick = (reward) => {
    setSelectedReward(reward);
  };

  const getRarityColor = (rarity) => {
    switch (rarity) {
      case 'common': return '#10b981';
      case 'rare': return '#6366f1';
      case 'epic': return '#8b5cf6';
      case 'legendary': return '#f59e0b';
      default: return '#6b7280';
    }
  };

  return (
    <section id="surprise-rewards" className="surprise-rewards">
      <div className="container">
        <div className="surprise-rewards-header">
          <h1 className="page-title">Surprise Rewards System</h1>
          <div className="tagline">
            <span className="tagline-icon">💡</span>
            <span className="tagline-text">"Because progress should be fun!"</span>
          </div>
          <p className="page-description">
            Every milestone or streak unlocks surprise rewards.
          </p>
        </div>

        <div className="key-benefits">
          <div className="benefit-item">
            <span className="checkmark">✔</span>
            <span>Collect motivational quotes, wallpapers, or badges.</span>
          </div>
          <div className="benefit-item">
            <span className="checkmark">✔</span>
            <span>Unlock hidden features as you stay consistent.</span>
          </div>
          <div className="benefit-item">
            <span className="checkmark">✔</span>
            <span>Get the thrill of mystery boxes that keep you hooked.</span>
          </div>
        </div>

        <div className="reward-categories-section">
          <h2 className="section-title">Reward Categories</h2>
          <div className="categories-grid">
            {rewardCategories.map((category, index) => (
              <div 
                key={index}
                className="category-card"
                onClick={() => handleRewardClick(category)}
                style={{ '--category-color': category.color }}
              >
                <div className="category-icon">{category.icon}</div>
                <h3>{category.name}</h3>
                <p>{category.description}</p>
                <div className="category-stats">
                  <span className="reward-count">12 items</span>
                  <span className="unlocked-count">8 unlocked</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="milestone-tracker-section">
          <h2 className="section-title">Milestone Rewards</h2>
          <div className="milestone-tracker">
            {milestones.map((milestone, index) => (
              <div key={index} className={`milestone-item ${milestone.unlocked ? 'unlocked' : 'locked'}`}>
                <div className="milestone-streak">
                  <span className="streak-number">{milestone.streak}</span>
                  <span className="streak-label">days</span>
                </div>
                <div className="milestone-reward">
                  <div className="reward-icon">
                    {milestone.unlocked ? '🎁' : '🔒'}
                  </div>
                  <span className="reward-name">{milestone.reward}</span>
                </div>
                <div className="milestone-status">
                  {milestone.unlocked ? (
                    <span className="status-unlocked">✓ Unlocked</span>
                  ) : (
                    <span className="status-locked">Locked</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mystery-boxes-section">
          <h2 className="section-title">Mystery Boxes</h2>
          <div className="mystery-boxes-grid">
            {mysteryBoxes.map((box, index) => (
              <div key={index} className="mystery-box" style={{ '--box-color': box.color }}>
                <div className="box-header">
                  <div className="box-icon">📦</div>
                  <h3>{box.name}</h3>
                </div>
                <div className="box-cost">
                  <span className="cost-label">Cost:</span>
                  <span className="cost-value">{box.cost}</span>
                </div>
                <div className="box-rewards">
                  <span className="rewards-label">Contains:</span>
                  <ul className="rewards-list">
                    {box.rewards.map((reward, i) => (
                      <li key={i}>{reward}</li>
                    ))}
                  </ul>
                </div>
                <button className="open-box-btn" style={{ backgroundColor: box.color }}>
                  {box.cost === 'Free' ? 'Open Now' : 'Earn to Unlock'}
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="reward-showcase-section">
          <h2 className="section-title">Your Collection</h2>
          <div className="collection-tabs">
            <button className="tab-btn active">All Rewards</button>
            <button className="tab-btn">Quotes</button>
            <button className="tab-btn">Badges</button>
            <button className="tab-btn">Wallpapers</button>
          </div>
          
          <div className="collection-grid">
            {Object.entries(sampleRewards).map(([category, rewards]) => (
              <div key={category} className="reward-category">
                <h3 className="category-title">{rewardCategories.find(cat => cat.id === category)?.name}</h3>
                <div className="rewards-list">
                  {rewards.map((reward, index) => (
                    <div 
                      key={index}
                      className={`reward-item ${unlockedRewards.includes(reward.id) ? 'unlocked' : 'locked'}`}
                      style={{ '--rarity-color': getRarityColor(reward.rarity) }}
                    >
                      <div className="reward-preview">
                        {reward.icon || reward.preview || '🎁'}
                      </div>
                      <div className="reward-info">
                        <h4>{reward.name || reward.text?.substring(0, 30) + '...'}</h4>
                        <p>{reward.description || reward.author}</p>
                        <div className="reward-rarity" style={{ color: getRarityColor(reward.rarity) }}>
                          {reward.rarity.toUpperCase()}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rewards-benefits-section">
          <h2 className="section-title">Why Surprise Rewards Work</h2>
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
          <h2 className="section-title">Start Collecting Rewards Today!</h2>
          <p className="cta-description">
            Join thousands of users who have discovered the joy of surprise rewards in their habit journey.
          </p>
          <div className="cta-buttons">
            <a href="#contact" className="btn btn-primary">Start Collecting</a>
            <a href="#contact" className="btn btn-secondary">View Rewards</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SurpriseRewards;
