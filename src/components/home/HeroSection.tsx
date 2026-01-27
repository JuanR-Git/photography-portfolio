"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { heroImages } from "@/lib/mock-data";

export function HeroSection() {
  // Assign drift animations in a pattern
  const getDriftClass = (index: number) => {
    const classes = ["drift-1", "drift-2", "drift-3"];
    return classes[index % 3];
  };

  return (
    <section className="relative h-screen w-full overflow-hidden bg-background">
      {/* Image Wall Background */}
      <div className="absolute inset-0 grid grid-cols-5 md:grid-cols-7 lg:grid-cols-10 gap-1 p-1 opacity-90">
        {heroImages.map((image, index) => (
          <div
            key={image.id}
            className={`relative overflow-hidden ${getDriftClass(index)} ${
              image.aspectRatio === "tall"
                ? "row-span-2"
                : image.aspectRatio === "landscape"
                  ? "col-span-2"
                  : ""
            }`}
          >
            <Image
              src={image.url}
              alt={image.alt}
              fill
              className="object-cover"
              sizes="(max-width: 640px) 20vw, (max-width: 1024px) 14vw, 10vw"
              priority={index < 10}
            />
          </div>
        ))}
      </div>

      {/* Subtle Overlay for Text Readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-transparent to-white/30" />

      {/* Center Card */}
      <div className="absolute inset-0 flex items-center justify-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="glass-card px-8 py-12 md:px-16 md:py-16 max-w-lg text-center shadow-2xl"
        >
          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="font-heading text-4xl md:text-5xl lg:text-6xl font-light tracking-wider text-foreground mb-4"
          >
            CARLOS REYES
          </motion.h1>

          {/* Decorative Line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="w-24 h-px bg-foreground mx-auto mb-6"
          />

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="text-muted text-sm md:text-base leading-relaxed mb-8"
          >
            Lorem ipsum dolor sit<br />
            amet consectetur adipiscing<br />
            elit sed do eiusmod
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="mailto:carlos@reyes.com"
              className="btn-outline px-6 py-3 text-sm font-medium w-full sm:w-auto"
            >
              EMAIL
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline px-6 py-3 text-sm font-medium w-full sm:w-auto"
            >
              LINKEDIN
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
      >
        {/* Dots */}
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-foreground" />
          <span className="w-2 h-2 rounded-full bg-foreground/30" />
          <span className="w-2 h-2 rounded-full bg-foreground/30" />
        </div>

        {/* Arrow */}
        <div className="scroll-indicator">
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            className="text-foreground"
          >
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </div>
      </motion.div>
    </section>
  );
}
