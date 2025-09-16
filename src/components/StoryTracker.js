import React, { useState } from 'react';
import './StoryTracker.css';

const StoryTracker = () => {
  const [currentChapter, setCurrentChapter] = useState(1);
  const [storyProgress, setStoryProgress] = useState({
    chaptersUnlocked: 3,
    totalChapters: 12,
    currentStreak: 15,
    storyPoints: 1250,
    heroLevel: 4
  });

  const storyGenres = [
    { 
      icon: '🏰', 
      title: 'Fantasy Adventure', 
      description: 'Embark on a magical quest as a brave knight, wizard, or elf.',
      color: '#8b5cf6',
      gradient: 'linear-gradient(135deg, #8b5cf6 0%, #a855f7 100%)'
    },
    { 
      icon: '🚀', 
      title: 'Sci-Fi Journey', 
      description: 'Explore distant galaxies and futuristic worlds as a space explorer.',
      color: '#06b6d4',
      gradient: 'linear-gradient(135deg, #06b6d4 0%, #0891b2 100%)'
    },
    { 
      icon: '🔍', 
      title: 'Mystery Detective', 
      description: 'Solve intriguing cases and uncover hidden secrets as a detective.',
      color: '#dc2626',
      gradient: 'linear-gradient(135deg, #dc2626 0%, #ef4444 100%)'
    },
    { 
      icon: '⚔️', 
      title: 'Epic Quest', 
      description: 'Face legendary challenges and become a legendary hero.',
      color: '#ea580c',
      gradient: 'linear-gradient(135deg, #ea580c 0%, #f97316 100%)'
    },
    { 
      icon: '🌊', 
      title: 'Ocean Explorer', 
      description: 'Dive deep into underwater mysteries and marine adventures.',
      color: '#0ea5e9',
      gradient: 'linear-gradient(135deg, #0ea5e9 0%, #0284c7 100%)'
    },
    { 
      icon: '🏔️', 
      title: 'Mountain Climber', 
      description: 'Conquer peaks and discover ancient mountain secrets.',
      color: '#059669',
      gradient: 'linear-gradient(135deg, #059669 0%, #047857 100%)'
    }
  ];

  const features = [
    { icon: '📖', title: 'Chapter Unlocking', description: 'Each habit streak unlocks new chapters of your chosen story.' },
    { icon: '🎭', title: 'Character Development', description: 'Your hero grows stronger and gains new abilities with consistent habits.' },
    { icon: '🗺️', title: 'Interactive Maps', description: 'Explore detailed maps and discover hidden locations as you progress.' },
    { icon: '💎', title: 'Story Rewards', description: 'Earn special items, abilities, and story elements through habit completion.' },
    { icon: '📚', title: 'Multiple Genres', description: 'Choose from fantasy, sci-fi, mystery, and other exciting story themes.' },
    { icon: '🎯', title: 'Personalized Journey', description: 'Your habits shape the story direction and character development.' },
  ];

  const benefits = [
    'Habit tracking becomes an engaging narrative experience.',
    'Visual progress through story chapters keeps you motivated.',
    'Multiple story genres cater to different interests and preferences.',
    'Character development mirrors your personal growth journey.',
    'Story elements provide context and meaning to daily habits.',
    'Social features allow sharing story progress with friends.',
    'Adaptive storytelling adjusts based on your habit patterns.',
    'Rich world-building makes habit formation feel like an adventure.',
  ];

  return (
    <section id="story-tracker" className="story-tracker">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Story-Driven Habit Tracking</h2>
          <p className="section-description">
            💡 "Turn your daily progress into an adventure!" Instead of boring checklists, every streak unlocks parts of an exciting story — whether it's fantasy, sci-fi, or a mystery.
          </p>
        </div>

        <div className="story-demo-container">
          <div className="story-visual">
            <div className="story-book">
              <div className="book-cover">
                <div className="book-title">The Habit Chronicles</div>
                <div className="book-subtitle">Chapter {currentChapter}</div>
                <div className="book-icon">📖</div>
              </div>
              <div className="story-progress">
                <div className="progress-item">
                  <span className="progress-label">Chapters Unlocked</span>
                  <div className="progress-bar">
                    <div className="progress-fill" style={{ width: `${(storyProgress.chaptersUnlocked / storyProgress.totalChapters) * 100}%` }}></div>
                  </div>
                  <span className="progress-value">{storyProgress.chaptersUnlocked}/{storyProgress.totalChapters}</span>
                </div>
                <div className="progress-item">
                  <span className="progress-label">Current Streak</span>
                  <span className="progress-value">{storyProgress.currentStreak} days</span>
                </div>
                <div className="progress-item">
                  <span className="progress-label">Story Points</span>
                  <span className="progress-value">{storyProgress.storyPoints}</span>
                </div>
                <div className="progress-item">
                  <span className="progress-label">Hero Level</span>
                  <span className="progress-value">{storyProgress.heroLevel}</span>
                </div>
              </div>
            </div>
            <div className="story-description-text">
              <h3>Your Habits, Your Adventure</h3>
              <p>
                Complete your daily tasks to advance chapters. Stay consistent to keep the hero moving forward. Your habits become the stepping stones of an epic journey.
              </p>
              <p>
                Every habit you complete contributes to your character's growth and story progression. Miss a day? Your hero faces challenges, but can recover with renewed dedication. This unique approach transforms mundane habit tracking into an immersive storytelling experience.
              </p>
              <div className="story-highlights">
                <div className="highlight-item">
                  <span className="highlight-icon">✓</span>
                  <span>Complete your daily tasks to advance chapters</span>
                </div>
                <div className="highlight-item">
                  <span className="highlight-icon">✓</span>
                  <span>Stay consistent to keep the hero moving forward</span>
                </div>
                <div className="highlight-item">
                  <span className="highlight-icon">✓</span>
                  <span>Your habits become the stepping stones of an epic journey</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="genres-section">
          <h3>Choose Your Adventure</h3>
          <div className="genres-grid">
            {storyGenres.map((genre, index) => (
              <div key={index} className="genre-card" style={{ '--genre-color': genre.color, '--genre-gradient': genre.gradient }}>
                <div className="genre-icon">{genre.icon}</div>
                <h4>{genre.title}</h4>
                <p>{genre.description}</p>
                <div className="genre-glow"></div>
              </div>
            ))}
          </div>
        </div>

        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="benefits-section">
          <h3>Why Story-Driven Habits Work</h3>
          <ul>
            {benefits.map((benefit, index) => (
              <li key={index}>{benefit}</li>
            ))}
          </ul>
        </div>

        <div className="cta-section">
          <h3 className="cta-title">Ready to Start Your Story?</h3>
          <p className="cta-description">Transform your habits into an epic adventure today!</p>
          <a href="#contact" className="btn btn-primary">Download Kultivate Now</a>
        </div>
      </div>
    </section>
  );
};

export default StoryTracker;
