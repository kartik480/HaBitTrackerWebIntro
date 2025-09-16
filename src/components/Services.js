import React, { useState } from 'react';
import './Services.css';

const Services = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const services = [
    {
      icon: '📝',
      title: 'Create Habits',
      description: 'Start by adding habits you want to build. Choose from templates or create custom habits.',
      features: ['Custom Habits', 'Pre-made Templates', 'Goal Setting', 'Frequency Options'],
      color: '#667eea',
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    },
    {
      icon: '📊',
      title: 'Track Progress',
      description: 'Log your daily activities and watch your progress grow with beautiful visualizations.',
      features: ['Daily Logging', 'Progress Charts', 'Streak Tracking', 'Visual Analytics'],
      color: '#f093fb',
      gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
    },
    {
      icon: '🎯',
      title: 'Set Goals',
      description: 'Define clear, achievable goals and milestones to keep yourself motivated.',
      features: ['SMART Goals', 'Milestones', 'Deadlines', 'Progress Tracking'],
      color: '#4facfe',
      gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
    },
    {
      icon: '🔔',
      title: 'Get Reminders',
      description: 'Never miss a habit with smart notifications that adapt to your schedule.',
      features: ['Smart Notifications', 'Custom Timing', 'Gentle Reminders', 'Flexible Scheduling'],
      color: '#43e97b',
      gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)'
    },
    {
      icon: '🏆',
      title: 'Earn Rewards',
      description: 'Stay motivated with achievements, badges, and rewards for consistent progress.',
      features: ['Achievement Badges', 'Streak Rewards', 'Progress Celebrations', 'Motivation Boost'],
      color: '#fa709a',
      gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)'
    },
    {
      icon: '📈',
      title: 'Analyze Data',
      description: 'Get insights into your habits with detailed analytics and personalized recommendations.',
      features: ['Habit Analytics', 'Trend Analysis', 'Personal Insights', 'Recommendations'],
      color: '#a8edea',
      gradient: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)'
    }
  ];

  return (
    <section id="services" className="services">
      <div className="container">
        <div className="services-header">
          <h2 className="section-title">How It Works</h2>
          <p className="section-description">
            Building better habits is simple with Kultivate. Follow these easy steps 
            to transform your life and achieve your goals.
          </p>
        </div>
        
        <div className="services-grid">
          {services.map((service, index) => (
            <div 
              key={index} 
              className={`service-card ${hoveredCard === index ? 'hovered' : ''}`}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
              style={{ '--card-color': service.color, '--card-gradient': service.gradient }}
            >
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <ul className="service-features">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex}>{feature}</li>
                ))}
              </ul>
              <div className="service-glow"></div>
              <div className="service-border"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
