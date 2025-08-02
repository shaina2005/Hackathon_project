import React, { useState } from 'react';
import './CreateTicket.css';

const CreateTicket = () => {
  const [formData, setFormData] = useState({
    subject: '',
    description: '',
    category: '',
    priority: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

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
      }, 1500);
    }
  };

  return (
    <div className="create-ticket-container">
      <div className="floating-particle"></div>
      <div className="floating-particle"></div>
      <div className="floating-particle"></div>
      
      <div className="ticket-form-wrapper">
        <h1 className="form-title">Student & Faculty Support Ticket System</h1>
        <p className="form-subtitle">Submit a support ticket and we'll get back to you as soon as possible.</p>
        
        <form onSubmit={handleSubmit} className="ticket-form">
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

          <button 
            type="submit" 
            className={`submit-button ${isSubmitting ? 'loading' : ''}`}
            disabled={isSubmitting}
          >
            {isSubmitting ? '' : 'Submit Support Ticket'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateTicket;