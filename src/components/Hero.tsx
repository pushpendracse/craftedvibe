"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import styles from "./Hero.module.css";

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current) return;
      const scrollY = window.scrollY;
      const overlay = heroRef.current.querySelector(
        `.${styles.heroOverlay}`
      ) as HTMLElement;
      if (overlay) {
        overlay.style.opacity = `${0.6 + scrollY * 0.001}`;
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className={styles.hero} id="home" ref={heroRef}>
      <div className={styles.heroBg}>
        <Image
          src="/images/hero1.jpg"
          alt="CraftedVibe Studio - Premium Exhibition Stand"
          fill
          priority
          quality={90}
          sizes="100vw"
          style={{ objectFit: "cover" }}
        />
        <div className={styles.heroOverlay}></div>
      </div>

      {/* Decorative elements */}
      <div className={styles.heroDecoLine}></div>
      <div className={styles.heroDecoCircle}></div>

      <div className={`container ${styles.heroContent}`}>
        <div className={styles.heroTextBlock}>
          <div className={`${styles.heroLabel} animate-fade-up`}>
            <span className={styles.heroDot}></span>
            Exhibition Design &amp; Interior Solutions
          </div>

          <h1 className={`${styles.heroTitle} animate-fade-up delay-1`}>
            We <span className="text-gradient">Craft</span> Experiences
            <br />
            That <span className="text-gradient">Captivate</span>
          </h1>

          <p className={`${styles.heroDescription} animate-fade-up delay-2`}>
            CraftedVibe Studio is a standout company with a truly talented team.
            Trusted stand builders for brands and interior designers with our own
            unique designs — delivering innovative, expert, and unparalleled
            quality.
          </p>

          <div className={`${styles.heroActions} animate-fade-up delay-3`}>
            <a href="#projects" className="btn btn-primary btn-lg">
              View Our Work
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
            <a href="#contact" className="btn btn-outline btn-lg">
              Get in Touch
            </a>
          </div>

          <div className={`${styles.heroStats} animate-fade-up delay-4`}>
            <div className={styles.heroStat}>
              <span className={styles.heroStatValue}>20,000+</span>
              <span className={styles.heroStatLabel}>Sqm Designed</span>
            </div>
            <div className={styles.heroStatDivider}></div>
            <div className={styles.heroStat}>
              <span className={styles.heroStatValue}>150+</span>
              <span className={styles.heroStatLabel}>Projects Done</span>
            </div>
            <div className={styles.heroStatDivider}></div>
            <div className={styles.heroStat}>
              <span className={styles.heroStatValue}>50+</span>
              <span className={styles.heroStatLabel}>Happy Brands</span>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.heroScrollIndicator}>
        <div className={styles.scrollMouse}>
          <div className={styles.scrollWheel}></div>
        </div>
        <span>Scroll to explore</span>
      </div>
    </section>
  );
}
