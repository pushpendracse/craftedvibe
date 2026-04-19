"use client";

import { useRef, useEffect, useState } from "react";
import styles from "./WhyUs.module.css";

const reasons = [
  {
    number: "01",
    title: "Creative & Custom Solutions",
    description:
      "We design unique, brand-focused exhibits that reflect your identity and make your brand unforgettable at every event.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Seamless Execution",
    description:
      "From concept to installation, we handle every detail with precision. Our project management ensures flawless delivery, on time, every time.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Innovative Expertise",
    description:
      "Our team brings cutting-edge design thinking and technical expertise to every project, pushing boundaries in exhibition and interior design.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Unparalleled Quality",
    description:
      "Premium materials, meticulous craftsmanship, and rigorous quality control ensure every project meets the highest standards of excellence.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    number: "05",
    title: "End-to-End Partner",
    description:
      "We're not just designers — we're your strategic partners. From initial consultation to post-event analytics, we're with you every step.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
  },
  {
    number: "06",
    title: "Global Reach",
    description:
      "With experience across international exhibitions and events, we understand diverse markets and cultural nuances to deliver impactful designs.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
      </svg>
    ),
  },
];

export default function WhyUs() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

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

  return (
    <section
      className={`section ${styles.whyUs}`}
      id="why-us"
      ref={sectionRef}
    >
      <div className={styles.bgOrb}></div>
      <div className="container">
        <div className={styles.header}>
          <span className="section-label">Why Choose Us</span>
          <h2 className="section-title">
            Why Clients Trust <br />
            <span className="text-gradient">CraftedVibe Studio</span>
          </h2>
          <p className="section-subtitle">
            When it comes to exhibitions and events, standing out is everything.
            Here&apos;s why brands choose us as their trusted partner.
          </p>
        </div>

        <div className={styles.grid}>
          {reasons.map((reason, index) => (
            <div
              key={reason.number}
              className={`${styles.card} ${isVisible ? "animate-fade-up" : ""}`}
              style={{ animationDelay: `${index * 0.1}s` }}
              id={`why-card-${index}`}
            >
              <div className={styles.cardTop}>
                <span className={styles.cardNumber}>{reason.number}</span>
                <div className={styles.cardIconWrap}>{reason.icon}</div>
              </div>
              <h3 className={styles.cardTitle}>{reason.title}</h3>
              <p className={styles.cardDesc}>{reason.description}</p>
              <div className={styles.cardLine}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
