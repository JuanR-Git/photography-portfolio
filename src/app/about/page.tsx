"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

const cameraGear = [
  "Canon 5D Mark III",
  "Sigma 35mm f/1.4 Art",
  "Tamron 24-70mm f/2.8",
  "Canon 70-200mm f/2.8 IS",
  "Canon 50mm f/1.8 STM",
  "Canon Speedlite 430EX II",
];

export default function AboutPage() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section ref={sectionRef} className="min-h-screen pt-28 pb-20">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Page Title - Mobile Only */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="font-heading text-4xl font-light tracking-wide text-foreground text-center mb-12 lg:hidden"
        >
          ABOUT ME
        </motion.h1>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Column - Portrait */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col items-center lg:sticky lg:top-32"
          >
            <div className="relative w-full max-w-sm">
              {/* Portrait Image */}
              <div className="image-hover-container relative aspect-[3/4] w-full border border-border">
                <Image
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=800&fit=crop&crop=face"
                  alt="Carlos Reyes - Portrait"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
              </div>

              {/* Caption */}
              <div className="mt-4 py-3 border-t border-border text-center">
                <p className="text-muted text-sm italic">me</p>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-10"
          >
            {/* About Me Section */}
            <div>
              {/* Title - Desktop Only */}
              <h1 className="hidden lg:block font-heading text-4xl md:text-5xl font-light tracking-wide text-foreground mb-8">
                ABOUT ME
              </h1>

              {/* Greeting */}
              <h2 className="font-heading text-2xl md:text-3xl font-light text-foreground mb-6">
                Hello there, I&apos;m Carlos
              </h2>

              {/* Bio Paragraphs */}
              <div className="space-y-4 text-muted leading-relaxed">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  euismod, nisl nec lacinia tincidunt, nunc nisl aliquam nisl,
                  eget aliquam nunc nisl sit amet nisl. Sed euismod, nisl nec
                  lacinia tincidunt, nunc nisl aliquam nisl.
                </p>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur et. Donec sed odio dui. Donec ullamcorper nulla
                  non metus auctor fringilla. Maecenas sed diam eget risus
                  varius blandit sit amet non magna.
                </p>
                <p>
                  Cras mattis consectetur purus sit amet fermentum. Fusce
                  dapibus, tellus ac cursus commodo, tortor mauris condimentum
                  nibh, ut fermentum massa justo sit amet risus.
                </p>
              </div>
            </div>

            {/* Camera Gear Section */}
            <div>
              <h3 className="font-heading text-xl md:text-2xl font-light tracking-wide text-foreground mb-6">
                MY CAMERA GEAR
              </h3>

              <ul className="space-y-3">
                {cameraGear.map((item, index) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                    className="flex items-center gap-3 text-muted"
                  >
                    <span className="w-1.5 h-1.5 bg-foreground rounded-full flex-shrink-0" />
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
