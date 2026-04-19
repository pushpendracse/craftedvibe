"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import styles from "./About.module.css";

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      className={`section ${styles.about}`}
      id="about"
      ref={sectionRef}
    >
      <div className={styles.bgAccent}></div>
      <div className={`container ${styles.aboutGrid}`}>
        {/* Image Column */}
        <div
          className={`${styles.imageCol} ${isVisible ? "animate-fade-left" : ""}`}
        >
          <div className={styles.imageWrapper}>
            <Image
              src="/images/team.png"
              alt="CraftedVibe Studio team at work"
              width={580}
              height={700}
              quality={85}
              style={{ objectFit: "cover", borderRadius: "20px" }}
            />
            <div className={styles.imageAccent}></div>
          </div>
          <div className={styles.experienceBadge}>
            <span className={styles.expNumber}>10+</span>
            <span className={styles.expText}>Years of<br />Excellence</span>
          </div>
        </div>

        {/* Text Column */}
        <div
          className={`${styles.textCol} ${isVisible ? "animate-fade-right" : ""}`}
        >
          <span className="section-label">About Us</span>
          <h2 className="section-title">
            Building <span className="text-gradient">Immersive</span> Brand
            Experiences
          </h2>
          <p className={styles.description}>
            CraftedVibe Studio is a standout company with a truly talented team.
            We have been serving as a trusted stand builder for brands, also
            specializing in interior designing with our own unique designs.
          </p>
          <p className={styles.description}>
            With our many successful projects and 20,000+ square meters of
            exhibit space designed, CraftedVibe Studio is the trusted partner for
            brands looking to make an impact.
          </p>

          <div className={styles.missionVision}>
            <div className={styles.mvCard}>
              <div className={styles.mvIcon}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" /><path d="M12 16v-4M12 8h.01" />
                </svg>
              </div>
              <h3 className={styles.mvTitle}>Our Mission</h3>
              <p className={styles.mvText}>
                To craft unique, strategic, visually striking exhibition
                solutions that elevate brands and create lasting impressions.
              </p>
            </div>
            <div className={styles.mvCard}>
              <div className={styles.mvIcon}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" /><circle cx="12" cy="12" r="3" />
                </svg>
              </div>
              <h3 className={styles.mvTitle}>Our Vision</h3>
              <p className={styles.mvText}>
                To be the trusted and innovative global partner for brands
                seeking impactful, immersive, and results-driven exhibit design.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
