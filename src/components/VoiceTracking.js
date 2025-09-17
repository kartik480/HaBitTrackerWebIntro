import React, { useState, useEffect } from 'react';
import './VoiceTracking.css';

const VoiceTracking = () => {
  const [isListening, setIsListening] = useState(false);
  const [voiceCommand, setVoiceCommand] = useState('');
  const [recentLogs, setRecentLogs] = useState([
    { id: 1, habit: 'Workout', time: '2 hours ago', method: 'voice', icon: '🎤' },
    { id: 2, habit: 'Meditation', time: '4 hours ago', method: 'quick', icon: '⚡' },
    { id: 3, habit: 'Reading', time: '6 hours ago', method: 'voice', icon: '🎤' },
    { id: 4, habit: 'Water Intake', time: '8 hours ago', method: 'quick', icon: '⚡' }
  ]);

  const quickHabits = [
    { id: 'workout', name: 'Workout', icon: '💪', color: '#ef4444' },
    { id: 'meditation', name: 'Meditation', icon: '🧘', color: '#8b5cf6' },
    { id: 'reading', name: 'Reading', icon: '📚', color: '#10b981' },
    { id: 'water', name: 'Water', icon: '💧', color: '#06b6d4' },
    { id: 'sleep', name: 'Sleep', icon: '😴', color: '#6366f1' },
    { id: 'journal', name: 'Journal', icon: '📝', color: '#f59e0b' }
  ];

  const voiceCommands = [
    { command: 'I did my workout', habit: 'Workout', icon: '💪' },
    { command: 'I meditated today', habit: 'Meditation', icon: '🧘' },
    { command: 'I read for 30 minutes', habit: 'Reading', icon: '📚' },
    { command: 'I drank enough water', habit: 'Water Intake', icon: '💧' },
    { command: 'I went to bed early', habit: 'Sleep', icon: '😴' },
    { command: 'I wrote in my journal', habit: 'Journal', icon: '📝' }
  ];

  const features = [
    {
      icon: '🎤',
      title: 'Voice Recognition',
      description: 'Speak naturally and the app understands your habits. No need to navigate through menus.',
      color: '#ef4444'
    },
    {
      icon: '⚡',
      title: 'One-Tap Quick Log',
      description: 'Log habits instantly from notification bar with just one tap. Perfect for busy moments.',
      color: '#10b981'
    },
    {
      icon: '🔔',
      title: 'Smart Notifications',
      description: 'Get contextual reminders that adapt to your schedule and preferences.',
      color: '#6366f1'
    },
    {
      icon: '📱',
      title: 'Widget Support',
      description: 'Add habit widgets to your home screen for instant access without opening the app.',
      color: '#8b5cf6'
    },
    {
      icon: '⌚',
      title: 'Wearable Integration',
      description: 'Log habits directly from your smartwatch with voice commands or quick taps.',
      color: '#f59e0b'
    },
    {
      icon: '🤖',
      title: 'AI Understanding',
      description: 'Advanced AI recognizes variations in your speech and learns your patterns.',
      color: '#06b6d4'
    }
  ];

  const benefits = [
    'Log habits in seconds without opening the app',
    'Perfect for hands-free tracking during workouts or driving',
    'Reduce friction and make habit tracking effortless',
    'Stay consistent even when you\'re busy or distracted',
    'Access your habits from anywhere with voice commands',
    'Never miss a habit due to forgetfulness or inconvenience'
  ];

  const handleVoiceCommand = () => {
    setIsListening(true);
    // Simulate voice recognition
    setTimeout(() => {
      const randomCommand = voiceCommands[Math.floor(Math.random() * voiceCommands.length)];
      setVoiceCommand(randomCommand.command);
      setIsListening(false);
      
      // Add to recent logs
      const newLog = {
        id: Date.now(),
        habit: randomCommand.habit,
        time: 'Just now',
        method: 'voice',
        icon: '🎤'
      };
      setRecentLogs([newLog, ...recentLogs.slice(0, 3)]);
    }, 2000);
  };

  const handleQuickLog = (habit) => {
    const newLog = {
      id: Date.now(),
      habit: habit.name,
      time: 'Just now',
      method: 'quick',
      icon: '⚡'
    };
    setRecentLogs([newLog, ...recentLogs.slice(0, 3)]);
  };

  return (
    <section id="voice-tracking" className="voice-tracking">
      <div className="container">
        <div className="voice-tracking-header">
          <h1 className="page-title">Voice & Quick Tracking</h1>
          <div className="tagline">
            <span className="tagline-icon">💡</span>
            <span className="tagline-text">"Habits, done faster."</span>
          </div>
          <p className="page-description">
            Why waste time tapping checkboxes? Just say "I did my workout!" and the app logs it instantly.
          </p>
        </div>

        <div className="key-benefits">
          <div className="benefit-item">
            <span className="checkmark">✔</span>
            <span>Voice recognition for hands-free logging.</span>
          </div>
          <div className="benefit-item">
            <span className="checkmark">✔</span>
            <span>One-tap emoji check-ins from notification bar.</span>
          </div>
          <div className="benefit-item">
            <span className="checkmark">✔</span>
            <span>Habit tracking made effortless.</span>
          </div>
        </div>

        <div className="voice-demo-section">
          <h2 className="section-title">Try Voice Tracking</h2>
          <div className="voice-demo-container">
            <div className="voice-interface">
              <div className="voice-button-container">
                <button 
                  className={`voice-button ${isListening ? 'listening' : ''}`}
                  onClick={handleVoiceCommand}
                  disabled={isListening}
                >
                  <div className="voice-icon">
                    {isListening ? '🎤' : '🎤'}
                  </div>
                  <span className="voice-text">
                    {isListening ? 'Listening...' : 'Tap to Speak'}
                  </span>
                </button>
              </div>
              
              {voiceCommand && (
                <div className="voice-result">
                  <div className="result-icon">✅</div>
                  <div className="result-text">
                    <strong>Recognized:</strong> "{voiceCommand}"
                  </div>
                  <div className="result-action">Habit logged successfully!</div>
                </div>
              )}
            </div>

            <div className="voice-commands">
              <h3>Try saying:</h3>
              <div className="commands-list">
                {voiceCommands.map((cmd, index) => (
                  <div key={index} className="command-item">
                    <span className="command-icon">{cmd.icon}</span>
                    <span className="command-text">"{cmd.command}"</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="quick-log-section">
          <h2 className="section-title">Quick Log from Notification</h2>
          <div className="notification-demo">
            <div className="notification-bar">
              <div className="notification-content">
                <div className="notification-icon">📱</div>
                <div className="notification-text">
                  <div className="notification-title">Kultivate</div>
                  <div className="notification-message">Quick log your habits</div>
                </div>
              </div>
              <div className="quick-actions">
                {quickHabits.slice(0, 3).map((habit, index) => (
                  <button 
                    key={index}
                    className="quick-action-btn"
                    onClick={() => handleQuickLog(habit)}
                    style={{ '--habit-color': habit.color }}
                  >
                    {habit.icon}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="features-section">
          <h2 className="section-title">Smart Tracking Features</h2>
          <div className="features-grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-card" style={{ '--feature-color': feature.color }}>
                <div className="feature-icon">{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="recent-logs-section">
          <h2 className="section-title">Recent Activity</h2>
          <div className="logs-container">
            <div className="logs-list">
              {recentLogs.map((log) => (
                <div key={log.id} className="log-item">
                  <div className="log-icon">{log.icon}</div>
                  <div className="log-content">
                    <div className="log-habit">{log.habit}</div>
                    <div className="log-details">
                      <span className="log-method">{log.method === 'voice' ? 'Voice Command' : 'Quick Log'}</span>
                      <span className="log-time">{log.time}</span>
                    </div>
                  </div>
                  <div className="log-status">✓</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="integration-demo-section">
          <h2 className="section-title">Multi-Platform Integration</h2>
          <div className="platforms-grid">
            <div className="platform-card">
              <div className="platform-icon">📱</div>
              <h3>Mobile App</h3>
              <p>Voice commands and quick actions</p>
            </div>
            <div className="platform-card">
              <div className="platform-icon">⌚</div>
              <h3>Smartwatch</h3>
              <p>Log habits on the go</p>
            </div>
            <div className="platform-card">
              <div className="platform-icon">💻</div>
              <h3>Desktop</h3>
              <p>Keyboard shortcuts and widgets</p>
            </div>
            <div className="platform-card">
              <div className="platform-icon">🚗</div>
              <h3>Car Integration</h3>
              <p>Hands-free logging while driving</p>
            </div>
          </div>
        </div>

        <div className="voice-benefits-section">
          <h2 className="section-title">Why Voice & Quick Tracking?</h2>
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
          <h2 className="section-title">Start Tracking Effortlessly</h2>
          <p className="cta-description">
            Join thousands who have made habit tracking effortless with voice and quick actions.
          </p>
          <div className="cta-buttons">
            <a href="#contact" className="btn btn-primary">Try Voice Tracking</a>
            <a href="#contact" className="btn btn-secondary">Download App</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VoiceTracking;
