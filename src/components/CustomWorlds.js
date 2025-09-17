import React, { useState } from 'react';
import './CustomWorlds.css';

const CustomWorlds = () => {
  const [selectedWorld, setSelectedWorld] = useState('city');
  const [selectedHabit, setSelectedHabit] = useState('exercise');

  const worldTypes = [
    {
      id: 'city',
      name: 'Urban City',
      icon: '🏙️',
      color: '#6366f1',
      description: 'Build skyscrapers and infrastructure with your habits',
      theme: 'Modern metropolis with towering buildings'
    },
    {
      id: 'island',
      name: 'Tropical Island',
      icon: '🏝️',
      color: '#10b981',
      description: 'Create a paradise island with palm trees and beaches',
      theme: 'Relaxing tropical paradise'
    },
    {
      id: 'galaxy',
      name: 'Space Galaxy',
      icon: '🌌',
      color: '#8b5cf6',
      description: 'Explore the cosmos and build star systems',
      theme: 'Infinite space exploration'
    },
    {
      id: 'forest',
      name: 'Enchanted Forest',
      icon: '🌲',
      color: '#059669',
      description: 'Grow magical trees and mystical creatures',
      theme: 'Mystical woodland realm'
    },
    {
      id: 'castle',
      name: 'Medieval Castle',
      icon: '🏰',
      color: '#dc2626',
      description: 'Build a kingdom with towers and fortifications',
      theme: 'Noble medieval kingdom'
    },
    {
      id: 'underwater',
      name: 'Ocean Depths',
      icon: '🐠',
      color: '#0891b2',
      description: 'Dive deep and create underwater civilizations',
      theme: 'Mysterious ocean world'
    }
  ];

  const habitBuildings = {
    city: [
      { habit: 'Exercise', building: '🏋️‍♂️ Gym', level: 3, color: '#ef4444' },
      { habit: 'Reading', building: '📚 Library', level: 2, color: '#8b5cf6' },
      { habit: 'Meditation', building: '🧘‍♀️ Zen Center', level: 4, color: '#10b981' },
      { habit: 'Cooking', building: '👨‍🍳 Restaurant', level: 2, color: '#f59e0b' },
      { habit: 'Learning', building: '🎓 University', level: 1, color: '#06b6d4' }
    ],
    island: [
      { habit: 'Exercise', building: '🏃‍♀️ Beach Run Track', level: 3, color: '#ef4444' },
      { habit: 'Reading', building: '📖 Beach Library', level: 2, color: '#8b5cf6' },
      { habit: 'Meditation', building: '🧘‍♂️ Meditation Hut', level: 4, color: '#10b981' },
      { habit: 'Cooking', building: '🍹 Beach Bar', level: 2, color: '#f59e0b' },
      { habit: 'Learning', building: '🐚 Shell Museum', level: 1, color: '#06b6d4' }
    ],
    galaxy: [
      { habit: 'Exercise', building: '🚀 Fitness Station', level: 3, color: '#ef4444' },
      { habit: 'Reading', building: '📡 Knowledge Hub', level: 2, color: '#8b5cf6' },
      { habit: 'Meditation', building: '🌟 Cosmic Temple', level: 4, color: '#10b981' },
      { habit: 'Cooking', building: '🍽️ Space Kitchen', level: 2, color: '#f59e0b' },
      { habit: 'Learning', building: '🔬 Research Lab', level: 1, color: '#06b6d4' }
    ]
  };

  const worldFeatures = [
    {
      icon: '🏗️',
      title: 'Dynamic Building',
      description: 'Each completed habit adds new structures to your world. Watch your city grow with every streak!',
      color: '#6366f1'
    },
    {
      icon: '🎨',
      title: 'Custom Themes',
      description: 'Choose from multiple world themes - cities, islands, galaxies, forests, castles, and more.',
      color: '#8b5cf6'
    },
    {
      icon: '📈',
      title: 'Visual Progress',
      description: 'See your habits literally building your world. Progress becomes tangible and rewarding.',
      color: '#10b981'
    },
    {
      icon: '🌟',
      title: 'Achievement Landmarks',
      description: 'Unlock special landmarks and monuments as you reach habit milestones.',
      color: '#f59e0b'
    },
    {
      icon: '👥',
      title: 'Social Worlds',
      description: 'Visit friends\' worlds and see how their habits have shaped their environments.',
      color: '#ef4444'
    },
    {
      icon: '🎮',
      title: 'Interactive Elements',
      description: 'Click on buildings to see habit history, explore hidden areas, and discover secrets.',
      color: '#06b6d4'
    }
  ];

  const benefits = [
    'Transform abstract habits into concrete visual achievements',
    'Stay motivated by watching your world grow and evolve',
    'Create a personal universe that reflects your journey',
    'Make habit-building feel like an exciting game',
    'Share your progress through beautiful world screenshots',
    'Develop a deeper connection to your daily routines'
  ];

  const milestones = [
    { days: 7, reward: 'First Building', unlocked: true },
    { days: 30, reward: 'District Expansion', unlocked: true },
    { days: 90, reward: 'City Upgrade', unlocked: false },
    { days: 180, reward: 'World Transformation', unlocked: false },
    { days: 365, reward: 'Legendary Realm', unlocked: false }
  ];

  const selectedWorldData = worldTypes.find(world => world.id === selectedWorld);
  const currentBuildings = habitBuildings[selectedWorld] || [];

  const handleWorldSelect = (worldId) => {
    setSelectedWorld(worldId);
  };

  const handleHabitSelect = (habitName) => {
    setSelectedHabit(habitName);
  };

  return (
    <section id="custom-worlds" className="custom-worlds">
      <div className="container">
        <div className="custom-worlds-header">
          <h1 className="page-title">Custom Habit Worlds</h1>
          <div className="tagline">
            <span className="tagline-icon">💡</span>
            <span className="tagline-text">"Build your own universe."</span>
          </div>
          <p className="page-description">
            Each habit becomes a building, tree, or star. Over time, you create a living world of your habits.
          </p>
        </div>

        <div className="key-benefits">
          <div className="benefit-item">
            <span className="checkmark">✔</span>
            <span>Complete habits = expand your city, island, or galaxy.</span>
          </div>
          <div className="benefit-item">
            <span className="checkmark">✔</span>
            <span>Visualize your growth in a creative, fun way.</span>
          </div>
          <div className="benefit-item">
            <span className="checkmark">✔</span>
            <span>Your daily discipline literally builds your world.</span>
          </div>
        </div>

        <div className="world-selector-section">
          <h2 className="section-title">Choose Your World</h2>
          <div className="world-types-grid">
            {worldTypes.map((world, index) => (
              <div 
                key={index}
                className={`world-type-card ${selectedWorld === world.id ? 'active' : ''}`}
                onClick={() => handleWorldSelect(world.id)}
                style={{ '--world-color': world.color }}
              >
                <div className="world-icon">{world.icon}</div>
                <h3>{world.name}</h3>
                <p>{world.description}</p>
                <div className="world-theme">{world.theme}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="world-preview-section">
          <h2 className="section-title">Your {selectedWorldData.name}</h2>
          <div className="world-preview-container">
            <div className="world-canvas">
              <div className="world-background" style={{ backgroundColor: selectedWorldData.color + '20' }}>
                <div className="world-title">{selectedWorldData.name}</div>
                <div className="buildings-container">
                  {currentBuildings.map((building, index) => (
                    <div 
                      key={index}
                      className={`building ${building.level > 2 ? 'tall' : 'short'}`}
                      style={{ 
                        '--building-color': building.color,
                        '--building-level': building.level
                      }}
                      onClick={() => handleHabitSelect(building.habit)}
                    >
                      <div className="building-icon">{building.building}</div>
                      <div className="building-label">{building.habit}</div>
                      <div className="building-level">Level {building.level}</div>
                    </div>
                  ))}
                </div>
                <div className="world-stats">
                  <div className="stat-item">
                    <span className="stat-number">{currentBuildings.length}</span>
                    <span className="stat-label">Buildings</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-number">{currentBuildings.reduce((sum, b) => sum + b.level, 0)}</span>
                    <span className="stat-label">Total Levels</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="world-controls">
              <h3>World Controls</h3>
              <div className="control-buttons">
                <button className="control-btn">🔍 Explore</button>
                <button className="control-btn">📸 Screenshot</button>
                <button className="control-btn">👥 Share</button>
                <button className="control-btn">⚙️ Customize</button>
              </div>
            </div>
          </div>
        </div>

        <div className="building-system-section">
          <h2 className="section-title">How Buildings Work</h2>
          <div className="building-examples">
            {currentBuildings.map((building, index) => (
              <div key={index} className="building-example">
                <div className="building-preview" style={{ backgroundColor: building.color + '20' }}>
                  <div className="building-icon-large">{building.building}</div>
                </div>
                <div className="building-info">
                  <h4>{building.habit}</h4>
                  <p>{building.building}</p>
                  <div className="building-progress">
                    <div className="progress-bar">
                      <div 
                        className="progress-fill" 
                        style={{ 
                          width: `${(building.level / 5) * 100}%`,
                          backgroundColor: building.color
                        }}
                      ></div>
                    </div>
                    <span className="progress-text">Level {building.level}/5</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="world-features-section">
          <h2 className="section-title">World Features</h2>
          <div className="features-grid">
            {worldFeatures.map((feature, index) => (
              <div key={index} className="feature-card" style={{ '--feature-color': feature.color }}>
                <div className="feature-icon">{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="milestones-section">
          <h2 className="section-title">World Milestones</h2>
          <div className="milestones-tracker">
            {milestones.map((milestone, index) => (
              <div key={index} className={`milestone-item ${milestone.unlocked ? 'unlocked' : 'locked'}`}>
                <div className="milestone-icon">
                  {milestone.unlocked ? '🏆' : '🔒'}
                </div>
                <div className="milestone-info">
                  <h4>{milestone.reward}</h4>
                  <p>{milestone.days} days of consistent habits</p>
                </div>
                <div className="milestone-status">
                  {milestone.unlocked ? '✓ Unlocked' : 'Locked'}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="custom-worlds-benefits-section">
          <h2 className="section-title">Why Custom Worlds Work</h2>
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
          <h2 className="section-title">Start Building Your World</h2>
          <p className="cta-description">
            Join thousands who have transformed their habits into beautiful, growing worlds.
          </p>
          <div className="cta-buttons">
            <a href="#contact" className="btn btn-primary">Create Your World</a>
            <a href="#contact" className="btn btn-secondary">View Gallery</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomWorlds;
