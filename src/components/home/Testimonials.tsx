"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const testimonials = [
  {
    id: 1,
    quote:
      "Working with Carlos was an absolute pleasure. His attention to detail and creative eye made our product photos stand out from the competition.",
    author: "Sarah Johnson",
    role: "Marketing Director, TechBrand Co.",
    initials: "SJ",
  },
  {
    id: 2,
    quote:
      "I have had the privilege of working with Carlos on multiple projects. His ability to capture emotion and tell a story through his lens is truly impressive.",
    author: "David Nguyen",
    role: "CEO, Lifestyle Media",
    initials: "DN",
  },
  {
    id: 3,
    quote:
      "Carlos delivered exceptional headshots for our entire executive team. Professional, efficient, and the results exceeded our expectations.",
    author: "Emily Davis",
    role: "HR Director, Finance Corp",
    initials: "ED",
  },
  {
    id: 4,
    quote:
      "Our corporate event was beautifully documented. Carlos has an incredible talent for capturing candid moments that tell the real story.",
    author: "Michael Chen",
    role: "Events Manager, Global Events",
    initials: "MC",
  },
];

export function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section ref={sectionRef} className="py-24 md:py-32 bg-navy">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold tracking-wide text-foreground-light">
            WHAT CLIENTS SAY
          </h2>
          <p className="text-muted-light mt-4 max-w-2xl mx-auto">
            Trusted by brands and professionals across industries
          </p>
        </motion.div>

        {/* Testimonial Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-background rounded-lg p-6 md:p-8 shadow-lg"
            >
              {/* Quote */}
              <div className="mb-6">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="text-accent mb-4"
                >
                  <path
                    d="M10 8H6C4.89543 8 4 8.89543 4 10V14C4 15.1046 4.89543 16 6 16H8C8 18.2091 6.20914 20 4 20M20 8H16C14.8954 8 14 8.89543 14 10V14C14 15.1046 14.8954 16 16 16H18C18 18.2091 16.2091 20 14 20"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
                <p className="text-foreground-dark leading-relaxed">
                  {testimonial.quote}
                </p>
              </div>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                  <span className="text-accent font-medium text-sm">
                    {testimonial.initials}
                  </span>
                </div>
                <div>
                  <p className="font-medium text-foreground-dark">
                    {testimonial.author}
                  </p>
                  <p className="text-muted-dark text-sm">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
