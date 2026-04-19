"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import styles from "./Projects.module.css";

const projects = [
  {
    image: "/images/project1.png",
    title: "Automotive Excellence Pavilion",
    category: "Exhibition Stand",
    size: "450 sqm",
  },
  {
    image: "/images/project2.png",
    title: "Luxury Brand Showcase",
    category: "Brand Activation",
    size: "320 sqm",
  },
  {
    image: "/images/project3.png",
    title: "Tech Innovation Hub",
    category: "Exhibition Stand",
    size: "600 sqm",
  },
  {
    image: "/images/interior.png",
    title: "Corporate Headquarters",
    category: "Interior Design",
    size: "1200 sqm",
  },
  {
    image: "/images/project4.png",
    title: "International Trade Expo",
    category: "Exhibition Stand",
    size: "800 sqm",
  },
  {
    image: "/images/hero.png",
    title: "Premium Lounge Experience",
    category: "Brand Activation",
    size: "280 sqm",
  },
];

export default function Projects() {
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
      className={`section ${styles.projects}`}
      id="projects"
      ref={sectionRef}
    >
      <div className="container">
        <div className={styles.header}>
          <div>
            <span className="section-label">Portfolio</span>
            <h2 className="section-title">
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <p className="section-subtitle">
              A showcase of our finest work — each project a testament to our
              commitment to excellence and innovation.
            </p>
          </div>
        </div>

        <div className={styles.grid}>
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`${styles.card} ${isVisible ? "animate-fade-up" : ""}`}
              style={{ animationDelay: `${index * 0.1}s` }}
              id={`project-card-${index}`}
            >
              <div className={styles.cardImage}>
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  style={{ objectFit: "cover" }}
                  quality={80}
                />
                <div className={styles.cardOverlay}>
                  <div className={styles.cardInfo}>
                    <span className={styles.cardCategory}>
                      {project.category}
                    </span>
                    <h3 className={styles.cardTitle}>{project.title}</h3>
                    <span className={styles.cardSize}>{project.size}</span>
                  </div>
                  <button className={styles.cardBtn} aria-label={`View ${project.title}`}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
