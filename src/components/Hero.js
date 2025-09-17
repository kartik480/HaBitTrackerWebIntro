import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <div className="hero-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
        </div>
      </div>
      
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Build Better Habits with
              <span className="gradient-text"> Kultivate</span>
            </h1>
            <p className="hero-description">
              Transform your life one habit at a time. Track, monitor, and achieve your goals 
              with our intuitive habit tracking app designed for success.
            </p>
            <div className="hero-actions">
              <a href="#contact" className="btn btn-primary">Download Now</a>
              <a href="#about" className="btn btn-secondary">Learn More</a>
            </div>
          </div>
          
          <div className="hero-visual">
            <div className="mobile-phone">
              <div className="phone-screen">
                <div className="phone-header">
                  <div className="status-bar">
                    <div className="time">9:41</div>
                    <div className="battery">100%</div>
                  </div>
                </div>
                <div className="app-grid">
                  <div className="app-icon app-1">📝</div>
                  <div className="app-icon app-2">📊</div>
                  <div className="app-icon app-3">🎯</div>
                  <div className="app-icon app-4">🔔</div>
                  <div className="app-icon app-5">🏆</div>
                  <div className="app-icon app-6">📈</div>
                  <div className="app-icon app-7">💪</div>
                  <div className="app-icon app-8">🌱</div>
                  <div className="app-icon app-9">⭐</div>
                </div>
                <div className="phone-footer">
                  <div className="home-indicator"></div>
                </div>
              </div>
            </div>
            
            <div className="floating-cards">
              <div className="floating-card card-1">
                <div className="card-icon">🤖</div>
                <div className="card-text">AI Teacher</div>
              </div>
              <div className="floating-card card-2">
                <div className="card-icon">📊</div>
                <div className="card-text">Analytics</div>
              </div>
              <div className="floating-card card-3">
                <div className="card-icon">🎯</div>
                <div className="card-text">Goals</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
