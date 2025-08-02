import React, { useState } from 'react';
import './createticket.css';

const CreateTicket = () => {
  const [formData, setFormData] = useState({
    subject: '',
    description: '',
    category: '',
    priority: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }
    
    if (!formData.description.trim()) {
      newErrors.description = 'Description is required';
    }
    
    if (!formData.category) {
      newErrors.category = 'Category is required';
    }
    
    if (!formData.priority) {
      newErrors.priority = 'Priority is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      
      // Simulate API call delay
      setTimeout(() => {
        const alertMessage = `
Support Ticket Submitted Successfully!

Subject: ${formData.subject}
Description: ${formData.description}
Category: ${formData.category}
Priority: ${formData.priority}
        `.trim();
      
        alert(alertMessage);
      
        // Reset form after successful submission
        setFormData({
          subject: '',
          description: '',
          category: '',
          priority: ''
        });
        
        setIsSubmitting(false);
        setIsModalOpen(false);
      }, 1500);
    }
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setErrors({});
  };

  const processSteps = [
    {
      icon: "📝",
      title: "Submit Your Request",
      description: "Fill out our comprehensive form with details about your issue or concern."
    },
    {
      icon: "🔍",
      title: "Review & Process",
      description: "Our support team will review your ticket and assign it to the appropriate department."
    },
    {
      icon: "⚡",
      title: "Quick Resolution",
      description: "Get timely updates and resolution based on your ticket priority level."
    }
  ];

  const categories = [
    { name: "Technical Issue", icon: "💻", color: "bg-blue-500" },
    { name: "Login Problem", icon: "🔐", color: "bg-red-500" },
    { name: "Course Query", icon: "📚", color: "bg-green-500" },
    { name: "Administrative Request", icon: "📋", color: "bg-purple-500" }
  ];

  return (
    <div className="support-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Student & Faculty
              <span className="text-gradient"> Support Center</span>
            </h1>
            <p className="hero-description">
              Get the help you need quickly and efficiently. Our dedicated support team is here to assist with any technical, academic, or administrative concerns.
            </p>
            <div className="hero-stats">
              <div className="stat-item">
                <span className="stat-number">24/7</span>
                <span className="stat-label">Support Available</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">2.5hr</span>
                <span className="stat-label">Average Response</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">98%</span>
                <span className="stat-label">Satisfaction Rate</span>
              </div>
            </div>
            <button onClick={openModal} className="cta-button">
              <span className="button-icon">📝</span>
              Create Support Ticket
            </button>
          </div>
          <div className="hero-visual">
            <div className="floating-card card-1">
              <div className="card-icon">🎓</div>
              <div className="card-text">Academic Support</div>
            </div>
            <div className="floating-card card-2">
              <div className="card-icon">🔧</div>
              <div className="card-text">Technical Help</div>
            </div>
            <div className="floating-card card-3">
              <div className="card-icon">📞</div>
              <div className="card-text">Quick Response</div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="process-section">
        <div className="section-header">
          <h2 className="section-title">How It Works</h2>
          <p className="section-subtitle">Simple steps to get the support you need</p>
        </div>
        <div className="process-steps">
          {processSteps.map((step, index) => (
            <div key={index} className="process-step">
              <div className="step-number">{index + 1}</div>
              <div className="step-icon">{step.icon}</div>
              <h3 className="step-title">{step.title}</h3>
              <p className="step-description">{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Categories Section */}
      <section className="categories-section">
        <div className="section-header">
          <h2 className="section-title">Support Categories</h2>
          <p className="section-subtitle">Choose the category that best fits your request</p>
        </div>
        <div className="categories-grid">
          {categories.map((category, index) => (
            <div key={index} className="category-card">
              <div className={`category-icon ${category.color}`}>
                {category.icon}
              </div>
              <h3 className="category-title">{category.name}</h3>
              <p className="category-description">
                Get help with {category.name.toLowerCase()} related issues and concerns.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Modal Form */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2 className="modal-title">Create Support Ticket</h2>
              <button onClick={closeModal} className="modal-close">
                ✕
              </button>
            </div>
            
            <form onSubmit={handleSubmit} className="modal-form">
              <div className="form-group">
                <label htmlFor="subject" className="form-label">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className={`form-input ${errors.subject ? 'error' : ''}`}
                  placeholder="Brief description of your issue"
                />
                {errors.subject && <span className="error-message">{errors.subject}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="description" className="form-label">
                  Description *
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  className={`form-textarea ${errors.description ? 'error' : ''}`}
                  placeholder="Please provide detailed information about your issue"
                  rows="5"
                ></textarea>
                {errors.description && <span className="error-message">{errors.description}</span>}
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="category" className="form-label">
                    Category *
                  </label>
                  <select
                    id="category"
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    className={`form-select ${errors.category ? 'error' : ''}`}
                  >
                    <option value="">Select a category</option>
                    <option value="Technical Issue">Technical Issue</option>
                    <option value="Login Problem">Login Problem</option>
                    <option value="Course Query">Course Query</option>
                    <option value="Administrative Request">Administrative Request</option>
                  </select>
                  {errors.category && <span className="error-message">{errors.category}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="priority" className="form-label">
                    Priority *
                  </label>
                  <select
                    id="priority"
                    name="priority"
                    value={formData.priority}
                    onChange={handleChange}
                    className={`form-select ${errors.priority ? 'error' : ''}`}
                  >
                    <option value="">Select priority</option>
                    <option value="Low">Low</option>
                    <option value="Medium">Medium</option>
                    <option value="High">High</option>
                  </select>
                  {errors.priority && <span className="error-message">{errors.priority}</span>}
                </div>
              </div>

              <div className="modal-actions">
                <button 
                  type="button" 
                  onClick={closeModal}
                  className="cancel-button"
                >
                  Cancel
                </button>
                <button 
                  type="submit" 
                  className={`submit-button ${isSubmitting ? 'loading' : ''}`}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Ticket'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default CreateTicket;