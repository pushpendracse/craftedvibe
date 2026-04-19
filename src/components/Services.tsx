"use client";

import { useRef, useEffect, useState } from "react";
import styles from "./Services.module.css";

const services = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="14" y="14" width="7" height="7" /><rect x="3" y="14" width="7" height="7" />
      </svg>
    ),
    title: "Exhibition Stand Design",
    description:
      "Custom-built exhibition stands that captivate audiences and amplify your brand presence at trade shows and expos worldwide.",
    features: ["3D Visualization", "Custom Fabrication", "Brand Integration"],
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" /><polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
    title: "Interior Design",
    description:
      "Transform spaces into extraordinary experiences with our bespoke interior design solutions for commercial and residential projects.",
    features: ["Space Planning", "Material Curation", "Turnkey Delivery"],
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
    title: "Brand Activation",
    description:
      "Create memorable brand experiences with immersive activations that connect with your audience and leave a lasting impression.",
    features: ["Event Concepts", "Interactive Spaces", "Audience Engagement"],
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20V10M18 20V4M6 20v-4" />
      </svg>
    ),
    title: "Project Management",
    description:
      "Seamless execution from concept to installation — we handle every detail so you can focus on what matters most: your brand.",
    features: ["Timeline Planning", "On-site Management", "Quality Assurance"],
  },
];

export default function Services() {
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
      className={`section ${styles.services}`}
      id="services"
      ref={sectionRef}
    >
      <div className={styles.bgGrid}></div>
      <div className="container">
        <div className={styles.header}>
          <span className="section-label">What We Do</span>
          <h2 className="section-title">
            Our <span className="text-gradient">Services</span>
          </h2>
          <p className="section-subtitle">
            From concept to completion, we deliver comprehensive exhibition and
            interior design solutions that elevate your brand.
          </p>
        </div>

        <div className={styles.grid}>
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`${styles.card} ${isVisible ? "animate-fade-up" : ""}`}
              style={{ animationDelay: `${index * 0.15}s` }}
              id={`service-card-${index}`}
            >
              <div className={styles.cardIcon}>{service.icon}</div>
              <h3 className={styles.cardTitle}>{service.title}</h3>
              <p className={styles.cardDescription}>{service.description}</p>
              <ul className={styles.cardFeatures}>
                {service.features.map((f) => (
                  <li key={f} className={styles.feature}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
              <div className={styles.cardGlow}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
