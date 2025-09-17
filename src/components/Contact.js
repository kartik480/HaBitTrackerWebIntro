import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', company: '', message: '' });
  };

  const contactInfo = [
    {
      icon: '📱',
      title: 'Download iOS',
      info: 'App Store',
      link: '#'
    },
    {
      icon: '🤖',
      title: 'Download Android',
      info: 'Google Play',
      link: '#'
    },
    {
      icon: '💬',
      title: 'Support',
      info: 'help@kultivate.com',
      link: 'mailto:help@kultivate.com'
    }
  ];

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="contact-header">
          <h2 className="section-title">Download Kultivate</h2>
          <p className="section-description">
            "Ready to transform your life? Download Kultivate now and start building 
            better habits today. Available on iOS and Android."
          </p>
        </div>
        
        <div className="contact-content">
          <div className="contact-info">
            <h3>Get Started Today</h3>
            <p>
              Join thousands of users who have transformed their lives with Kultivate. 
              Download the app and start your journey to better habits today.
            </p>
            
            <div className="contact-details">
              {contactInfo.map((item, index) => (
                <div key={index} className="contact-item">
                  <div className="contact-icon">{item.icon}</div>
                  <div className="contact-text">
                    <h4>{item.title}</h4>
                    <a href={item.link}>{item.info}</a>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="contact-form-container">
            <div className="download-section">
              <h3>Get Started Today</h3>
              <p>Download Kultivate and start building better habits immediately.</p>
              
              <div className="download-buttons">
                <a href="#" className="download-btn ios-btn">
                  <div className="download-icon">📱</div>
                  <div className="download-text">
                    <div className="download-label">Download on the</div>
                    <div className="download-store">App Store</div>
                  </div>
                </a>
                
                <a href="#" className="download-btn android-btn">
                  <div className="download-icon">🤖</div>
                  <div className="download-text">
                    <div className="download-label">Get it on</div>
                    <div className="download-store">Google Play</div>
                  </div>
                </a>
              </div>
              
              <div className="newsletter-signup">
                <h4>Stay Updated</h4>
                <p>Get notified about new features and updates.</p>
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <input
                      type="email"
                      name="email"
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <button type="submit" className="btn btn-primary">
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
