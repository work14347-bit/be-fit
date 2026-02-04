'use client';

import React, { useState } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  MessageCircle,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Send,
  Clock,
  CheckCircle,
} from 'lucide-react';
import styles from '../contact.module.css';

interface ContactInfo {
  icon: React.ReactNode;
  title: string;
  description: string;
  contact: string;
  link?: string;
  color: string;
}

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
  phone?: string;
}

export default function ContactDetail() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
    phone: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const contactOptions: ContactInfo[] = [
    {
      icon: <Mail size={32} />,
      title: 'Email',
      description: 'Send us an email and we will respond within 24 hours',
      contact: 'contact@befit.com',
      link: 'mailto:contact@befit.com',
      color: '#FF6B6B',
    },
    {
      icon: <Phone size={32} />,
      title: 'Phone Call',
      description: 'Call us directly during business hours',
      contact: '+1 (555) 123-4567',
      link: 'tel:+15551234567',
      color: '#4ECDC4',
    },
    {
      icon: <MessageCircle size={32} />,
      title: 'WhatsApp',
      description: 'Quick chat support on WhatsApp',
      contact: '+1 (555) 987-6543',
      link: 'https://wa.me/15559876543',
      color: '#25D366',
    },
    {
      icon: <Facebook size={32} />,
      title: 'Facebook',
      description: 'Message us on Facebook Messenger',
      contact: '@BeFitFitness',
      link: 'https://facebook.com/BeFitFitness',
      color: '#1877F2',
    },
    {
      icon: <Instagram size={32} />,
      title: 'Instagram',
      description: 'Follow and DM us on Instagram',
      contact: '@befit_fitness',
      link: 'https://instagram.com/befit_fitness',
      color: '#E4405F',
    },
    {
      icon: <Twitter size={32} />,
      title: 'Twitter',
      description: 'Connect with us on Twitter',
      contact: '@BeFitOfficial',
      link: 'https://twitter.com/BeFitOfficial',
      color: '#1DA1F2',
    },
    {
      icon: <Linkedin size={32} />,
      title: 'LinkedIn',
      description: 'Connect with us professionally',
      contact: 'BeFit Fitness',
      link: 'https://linkedin.com/company/befit-fitness',
      color: '#0A66C2',
    },
    {
      icon: <MapPin size={32} />,
      title: 'Visit Us',
      description: 'Visit our gym location',
      contact: '123 Fitness St, Health City, HC 12345',
      link: 'https://maps.google.com',
      color: '#FF9500',
    },
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Simulate API call - replace with your actual backend endpoint
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
        phone: '',
      });

      // Reset success message after 5 seconds
      setTimeout(() => setSubmitted(false), 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <div className={styles.heroSection}>
        <h1 className={styles.heroTitle}>Get In Touch With Us</h1>
        <p className={styles.heroSubtitle}>
          Have questions? We'd love to hear from you. Reach out to our team
          using any of the methods below.
        </p>
      </div>

      {/* Contact Methods Grid */}
      <div className={styles.contactGrid}>
        {contactOptions.map((option, index) => (
          <div key={index} className={styles.contactCard}>
            <div
              className={styles.iconWrapper}
              style={{ backgroundColor: `${option.color}20` }}
            >
              <div style={{ color: option.color }}>{option.icon}</div>
            </div>
            <h3 className={styles.cardTitle}>{option.title}</h3>
            <p className={styles.cardDescription}>{option.description}</p>
            <a
              href={option.link}
              target={
                option.link?.startsWith('http') ? '_blank' : undefined
              }
              rel={option.link?.startsWith('http') ? 'noopener noreferrer' : undefined}
              className={styles.contactLink}
              style={{ borderBottomColor: option.color }}
            >
              <span>{option.contact}</span>
              <span className={styles.arrow}>→</span>
            </a>
          </div>
        ))}
      </div>

      {/* Business Hours Section */}
      <div className={styles.hoursSection}>
        <div className={styles.hoursCard}>
          <Clock size={28} className={styles.clockIcon} />
          <h3>Business Hours</h3>
          <div className={styles.hoursList}>
            <div className={styles.hoursItem}>
              <span className={styles.day}>Monday - Friday:</span>
              <span className={styles.time}>6:00 AM - 10:00 PM</span>
            </div>
            <div className={styles.hoursItem}>
              <span className={styles.day}>Saturday:</span>
              <span className={styles.time}>7:00 AM - 9:00 PM</span>
            </div>
            <div className={styles.hoursItem}>
              <span className={styles.day}>Sunday:</span>
              <span className={styles.time}>8:00 AM - 8:00 PM</span>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div className={styles.formSection}>
        <div className={styles.formContainer}>
          <h2 className={styles.formTitle}>Send us a Message</h2>
          <p className={styles.formSubtitle}>
            Fill out the form below and we'll get back to you as soon as possible
          </p>

          {submitted && (
            <div className={styles.successMessage}>
              <CheckCircle size={24} />
              <span>Thank you! Your message has been sent successfully.</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label htmlFor="name" className={styles.label}>
                  Full Name <span className={styles.required}>*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="John Doe"
                  className={styles.input}
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="email" className={styles.label}>
                  Email Address <span className={styles.required}>*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="john@example.com"
                  className={styles.input}
                />
              </div>
            </div>

            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label htmlFor="phone" className={styles.label}>
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+1 (555) 123-4567"
                  className={styles.input}
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="subject" className={styles.label}>
                  Subject <span className={styles.required}>*</span>
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="How can we help?"
                  className={styles.input}
                />
              </div>
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="message" className={styles.label}>
                Message <span className={styles.required}>*</span>
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Tell us more about your inquiry..."
                rows={5}
                className={styles.textarea}
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className={styles.submitButton}
            >
              {loading ? (
                <>
                  <span className={styles.spinner} />
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
        </div>
      </div>

      {/* Map Section */}
      <div className={styles.mapSection}>
        <h2>Find Us On The Map</h2>
        <div className={styles.mapContainer}>
          <iframe
            width="100%"
            height="400"
            style={{ border: 0, borderRadius: '12px' }}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1841562181157!2d-74.00629!3d40.71282!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a27aed5d8f1%3A0x1e0f9f8f8f8f8f8f!2sGym!5e0!3m2!1sen!2sus!4v1609459200000"
          />
        </div>
      </div>

      {/* FAQ Section */}
      <div className={styles.faqSection}>
        <h2>Frequently Asked Questions</h2>
        <div className={styles.faqGrid}>
          <div className={styles.faqItem}>
            <h4>How quickly do you respond?</h4>
            <p>
              We typically respond to all inquiries within 24 hours during
              business days.
            </p>
          </div>
          <div className={styles.faqItem}>
            <h4>Do you offer virtual consultations?</h4>
            <p>
              Yes! We offer free 15-minute virtual consultations with our
              fitness experts.
            </p>
          </div>
          <div className={styles.faqItem}>
            <h4>What's the best way to reach you?</h4>
            <p>
              For urgent matters, call us directly. For general inquiries, email
              or message us on social media.
            </p>
          </div>
          <div className={styles.faqItem}>
            <h4>Are there membership inquiry discounts?</h4>
            <p>
              Yes! New members who contact us get exclusive welcome discounts
              and special offers.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
