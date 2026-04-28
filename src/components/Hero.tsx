"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./Hero.module.css";

const heroImages = [
  { src: "/images/hero.png", alt: "CraftedVibe Studio - Premium Exhibition Stand" },
  { src: "/images/hero.png", alt: "CraftedVibe Studio - Premium Exhibition Stand" },
  { src: "/images/hero.png", alt: "CraftedVibe Studio - Premium Exhibition Stand" },
  { src: "/images/hero.png", alt: "CraftedVibe Studio - Premium Exhibition Stand" },
  { src: "/images/hero.png", alt: "CraftedVibe Studio - Premium Exhibition Stand" },
  { src: "/images/hero.png", alt: "CraftedVibe Studio - Premium Exhibition Stand" }

];

export default function Hero() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className={styles.hero} id="home">
      <div className={styles.heroBg}>
        {heroImages.map((image, index) => (
          <Image
            key={index}
            src={image.src}
            alt={image.alt}
            fill
            priority={index === 0}
            unoptimized
            className={`${styles.heroImage} ${index === currentImage ? styles.active : ""}`}
          />
        ))}
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
