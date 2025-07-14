"use client"

import { useState } from "react"
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from "lucide-react"
import "./contact.css"

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    setIsSubmitted(true)

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({ name: "", email: "", subject: "", message: "" })
    }, 3000)
  }

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-badge">
            <span>Get In Touch</span>
          </div>
          <h1>Let's Start a Conversation</h1>
          <p>
            We're here to help you discover the perfect coffee experience. Reach out to us for any inquiries about our
            services.
          </p>
        </div>
        <div className="hero-decoration">
          <div className="floating-card card-1"></div>
          <div className="floating-card card-2"></div>
          <div className="floating-card card-3"></div>
        </div>
      </section>

      {/* Main Content */}
      <section className="main-content">
        <div className="container">
          <div className="content-grid">
            {/* Contact Form */}
            <div className="form-container">
              <div className="form-header">
                <h2>Send us a message</h2>
                <p>Fill out the form below and we'll get back to you within 24 hours</p>
              </div>

              {isSubmitted ? (
                <div className="success-message">
                  <CheckCircle size={48} />
                  <h3>Message Sent Successfully!</h3>
                  <p>Thank you for reaching out. We'll get back to you soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="name">Full Name *</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Email Address *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="subject">Subject *</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      placeholder="How can we help you?"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Message *</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      placeholder="Tell us more about your inquiry..."
                    />
                  </div>

                  <button type="submit" className="submit-button" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <>
                        <div className="spinner"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={20} />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* Contact Information */}
            <div className="info-container">
              <div className="info-header">
                <h2>Contact Information</h2>
                <p>Get in touch with us through any of these channels</p>
              </div>

              <div className="contact-cards">
                <div className="contact-card">
                  <div className="card-icon">
                    <Mail size={24} />
                  </div>
                  <div className="card-content">
                    <h3>Email Us</h3>
                    <p>beanscene@gmail.com</p>
                    <span>We'll respond within 24 hours</span>
                  </div>
                </div>

                <div className="contact-card">
                  <div className="card-icon">
                    <Phone size={24} />
                  </div>
                  <div className="card-content">
                    <h3>Call Us</h3>
                    <p>+91 7067909690</p>
                    <span>Mon-Fri, 9AM-6PM IST</span>
                  </div>
                </div>

                <div className="contact-card">
                  <div className="card-icon">
                    <MapPin size={24} />
                  </div>
                  <div className="card-content">
                    <h3>Visit Us</h3>
                    <p>Bangalore, Karnataka</p>
                    <span>India</span>
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <div className="business-hours">
                <div className="hours-header">
                  <Clock size={20} />
                  <h3>Business Hours</h3>
                </div>
                <div className="hours-grid">
                  <div className="hours-item">
                    <span className="day">Monday - Friday</span>
                    <span className="time">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="hours-item">
                    <span className="day">Saturday</span>
                    <span className="time">10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="hours-item">
                    <span className="day">Sunday</span>
                    <span className="time">Closed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
