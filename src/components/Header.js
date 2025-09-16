import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <a href="#home">Kultivate</a>
          </div>
          
          <nav className={`nav ${isMobileMenuOpen ? 'nav-open' : ''}`}>
            <ul className="nav-list">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">Features</a></li>
              <li><a href="#services">How It Works</a></li>
              <li><a href="#contact">Download</a></li>
            </ul>
          </nav>

          <div className="header-actions">
            <a href="#contact" className="btn btn-primary">Download App</a>
            
            <div className="dropdown-container">
              <button 
                className="dropdown-toggle"
                onClick={toggleDropdown}
                aria-label="Toggle menu"
              >
                <span>☰</span>
              </button>
              
              {isDropdownOpen && (
                <div className="dropdown-menu">
                      <Link to="/pet-companion" onClick={closeDropdown}>Gamified Pet/Character Companion</Link>
                      <Link to="/story-tracker" onClick={closeDropdown}>Story-Driven Habit Tracker</Link>
                  <a href="#ai-coach" onClick={closeDropdown}>AI-Powered Habit Coach</a>
                  <a href="#social-circles" onClick={closeDropdown}>Habit Social Circles</a>
                  <a href="#mood-connection" onClick={closeDropdown}>Mood + Habit Connection</a>
                  <a href="#surprise-rewards" onClick={closeDropdown}>Surprise Rewards System</a>
                  <a href="#voice-tracking" onClick={closeDropdown}>Voice/Nudge Based Tracking</a>
                  <a href="#reverse-tracker" onClick={closeDropdown}>Reverse Habit Tracker (Break Bad Habits)</a>
                  <a href="#custom-worlds" onClick={closeDropdown}>Custom Habit Worlds</a>
                </div>
              )}
            </div>
          </div>

          <button 
            className="mobile-menu-toggle"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
