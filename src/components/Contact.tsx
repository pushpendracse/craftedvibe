"use client";

import { useRef, useEffect, useState } from "react";
import styles from "./Contact.module.css";

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setFormState({ name: "", email: "", phone: "", service: "", message: "" });
  };

  return (
    <section
      className={`section ${styles.contact}`}
      id="contact"
      ref={sectionRef}
    >
      <div className={styles.bgPatternLeft}></div>
      <div className={styles.bgPatternRight}></div>

      <div className="container">
        <div className={styles.contactGrid}>
          {/* Info Column */}
          <div
            className={`${styles.infoCol} ${isVisible ? "animate-fade-left" : ""}`}
          >
            <span className="section-label">Get in Touch</span>
            <h2 className="section-title">
              Let&apos;s Create Something{" "}
              <span className="text-gradient">Extraordinary</span>
            </h2>
            <p className={styles.infoDesc}>
              Ready to make an impact at your next exhibition or transform your
              space? Get in touch with us today and let&apos;s bring your vision to
              life.
            </p>

            <div className={styles.contactCards}>
              <div className={styles.contactCard}>
                <div className={styles.contactIcon}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                  </svg>
                </div>
                <div>
                  <h4 className={styles.contactCardTitle}>Call Us</h4>
                  <a href="tel:+919719630080" className={styles.contactCardText}>+91 9719630080</a>
                </div>
              </div>

              <div className={styles.contactCard}>
                <div className={styles.contactIcon}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                </div>
                <div>
                  <h4 className={styles.contactCardTitle}>WhatsApp</h4>
                  <a href="https://wa.me/919599642080" target="_blank" rel="noopener noreferrer" className={styles.contactCardText}>
                    +91 9599642080
                  </a>
                </div>
              </div>

              <div className={styles.contactCard}>
                <div className={styles.contactIcon}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" />
                  </svg>
                </div>
                <div>
                  <h4 className={styles.contactCardTitle}>Email Us</h4>
                  <p className={styles.contactCardText}>hello@craftedvibe.studio</p>
                </div>
              </div>

              <div className={styles.contactCard}>
                <div className={styles.contactIcon}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div>
                  <h4 className={styles.contactCardTitle}>Visit Us</h4>
                  <p className={styles.contactCardText}>
                    CraftedVibe Studio, New Delhi, India
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Column */}
          <div
            className={`${styles.formCol} ${isVisible ? "animate-fade-right" : ""}`}
          >
            <form
              className={styles.form}
              onSubmit={handleSubmit}
              id="contact-form"
            >
              <h3 className={styles.formTitle}>Send us a message</h3>

              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label htmlFor="contact-name" className={styles.formLabel}>
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="contact-name"
                    className={styles.formInput}
                    placeholder="John Doe"
                    value={formState.name}
                    onChange={(e) =>
                      setFormState({ ...formState, name: e.target.value })
                    }
                    required
                  />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="contact-email" className={styles.formLabel}>
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="contact-email"
                    className={styles.formInput}
                    placeholder="john@example.com"
                    value={formState.email}
                    onChange={(e) =>
                      setFormState({ ...formState, email: e.target.value })
                    }
                    required
                  />
                </div>
              </div>

              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label htmlFor="contact-phone" className={styles.formLabel}>
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="contact-phone"
                    className={styles.formInput}
                    placeholder="+91 98765 43210"
                    value={formState.phone}
                    onChange={(e) =>
                      setFormState({ ...formState, phone: e.target.value })
                    }
                  />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="contact-service" className={styles.formLabel}>
                    Service Needed
                  </label>
                  <select
                    id="contact-service"
                    className={styles.formInput}
                    value={formState.service}
                    onChange={(e) =>
                      setFormState({ ...formState, service: e.target.value })
                    }
                    required
                  >
                    <option value="">Select a service</option>
                    <option value="exhibition">Exhibition Stand Design</option>
                    <option value="interior">Interior Design</option>
                    <option value="brand">Brand Activation</option>
                    <option value="project">Project Management</option>
                  </select>
                </div>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="contact-message" className={styles.formLabel}>
                  Your Message
                </label>
                <textarea
                  id="contact-message"
                  className={`${styles.formInput} ${styles.formTextarea}`}
                  placeholder="Tell us about your project..."
                  rows={5}
                  value={formState.message}
                  onChange={(e) =>
                    setFormState({ ...formState, message: e.target.value })
                  }
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className={`btn btn-primary btn-lg ${styles.formBtn}`}
                id="contact-submit"
              >
                {submitted ? (
                  <>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    Message Sent!
                  </>
                ) : (
                  <>
                    Send Message
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" />
                    </svg>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
