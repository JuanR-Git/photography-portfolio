"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

// Hero images for crossfade carousel
const heroImages = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=1920&h=1080&fit=crop",
    alt: "Portrait photography",
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=1920&h=1080&fit=crop",
    alt: "Fashion photography",
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=1920&h=1080&fit=crop",
    alt: "Editorial photography",
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1519741497674-611481863552?w=1920&h=1080&fit=crop",
    alt: "Event photography",
  },
  {
    id: 5,
    url: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1920&h=1080&fit=crop",
    alt: "Headshot photography",
  },
];

export function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-advance carousel
  const nextImage = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % heroImages.length);
  }, []);

  useEffect(() => {
    const interval = setInterval(nextImage, 5500); // 5.5 seconds
    return () => clearInterval(interval);
  }, [nextImage]);

  // Handle dot click
  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  // Scroll to services section
  const scrollToServices = () => {
    const servicesSection = document.getElementById("services");
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative h-screen w-full bg-background-dark overflow-hidden">
      {/* Background Images with Crossfade */}
      {heroImages.map((image, index) => (
        <div
          key={image.id}
          className={`hero-image ${index === currentIndex ? "active" : "inactive"}`}
        >
          <Image
            src={image.url}
            alt={image.alt}
            fill
            className="object-cover"
            priority={index === 0}
            sizes="100vw"
          />
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-background-dark/60 via-background-dark/40 to-background-dark/70" />
        </div>
      ))}

      {/* Content Card */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="glass-card-dark px-10 py-12 md:px-16 md:py-14 text-center max-w-xl mx-4"
        >
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-semibold tracking-wide text-foreground-light">
            CARLOS REYES
          </h1>

          <div className="w-16 h-0.5 bg-accent mx-auto my-6" />

          <p className="text-foreground-light text-lg md:text-xl font-medium mb-2">
            Commercial & Portrait Photography
          </p>

          <p className="text-muted-light text-sm md:text-base mb-8 max-w-md mx-auto">
            Elevating brands and capturing moments with professional photography services in Toronto
          </p>

          {/* CTA Button */}
          <button
            onClick={scrollToServices}
            className="btn-primary px-8 py-3 text-sm font-medium tracking-wide rounded"
          >
            View Services
          </button>

          {/* Secondary Links */}
          <div className="flex items-center justify-center gap-6 mt-6">
            <a
              href="mailto:carlos@example.com"
              className="text-muted-light hover:text-foreground-light transition-colors text-sm"
            >
              Email
            </a>
            <span className="text-muted-light/50">|</span>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-light hover:text-foreground-light transition-colors text-sm"
            >
              LinkedIn
            </a>
          </div>
        </motion.div>
      </div>

      {/* Dot Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`hero-dot ${index === currentIndex ? "active" : ""}`}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="absolute bottom-24 left-1/2 -translate-x-1/2 z-20 scroll-indicator"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          className="text-foreground-light/60"
        >
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      </motion.div>
    </section>
  );
}
