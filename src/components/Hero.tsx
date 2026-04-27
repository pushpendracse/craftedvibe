"use client";

import Image from "next/image";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero} id="home">
      <div className={styles.heroBg}>
        <Image
          // src="https://drive.google.com/file/d/1C2IlIenvzhT7TX4Xk_f9lO8OZl4aLgDf/view?usp=drive_link"
          src="/images/hero.png"
          alt="CraftedVibe Studio - Premium Exhibition Stand"
          fill
          priority
          unoptimized
          className={styles.heroVideo}
        />
      </div>

      {/* Decorative elements */}
      <div className={styles.heroDecoLine}></div>
      <div className={styles.heroDecoCircle}></div>

      <div className={styles.heroContent}>
        <div className={styles.heroTextBlock}>
          <h1 className={`${styles.heroTitle} ${styles.heroLineOne} animate-fade-up delay-1`}>
            <span className={styles.heroTitleLine}>
              We <span className={styles.heroHighlightText}>Craft</span> Experiences
            </span>
            <span className={styles.heroTitleLine}>
              That <span className={styles.heroHighlightText}>Captivate</span>
            </span>
          </h1>

          <p className={`${styles.heroDescription} ${styles.heroLineTwo} animate-fade-up delay-2`}>
            Exhibition Design &amp; Interior Solutions. We Craft Experiences That
            Captivate. CraftedVibe Studio is a standout company with a truly
            talented team. Trusted stand builders for brands and interior
            designers with unique designs - delivering innovative, expert, and
            unparalleled quality.
          </p>

          <div className={`${styles.heroActions} ${styles.heroLineThree} animate-fade-up delay-3`}>
            <a href="#projects" className={`btn btn-primary btn-lg ${styles.heroPrimaryBtn}`}>
              View Our Work
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
            <a href="#contact" className={`btn btn-outline btn-lg ${styles.heroSecondaryBtn}`}>
              Get in Touch
            </a>
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
