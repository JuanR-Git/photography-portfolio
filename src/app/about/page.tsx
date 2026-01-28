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

const education = [
  {
    degree: "Bachelor of Fine Arts in Photography",
    school: "Toronto School of Visual Arts",
    year: "2015",
  },
  {
    degree: "Certificate in Commercial Photography",
    school: "George Brown College",
    year: "2016",
  },
  {
    degree: "Digital Marketing Certification",
    school: "HubSpot Academy",
    year: "2019",
  },
];

const experience = [
  {
    role: "Lead Photographer",
    company: "Reyes Photography Studio",
    years: "2018 - Present",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    role: "Senior Photographer",
    company: "Creative Lens Agency",
    years: "2016 - 2018",
    description: "Sed euismod nisl nec lacinia tincidunt, nunc nisl aliquam.",
  },
  {
    role: "Photography Assistant",
    company: "Studio 42",
    years: "2015 - 2016",
    description: "Praesent commodo cursus magna, vel scelerisque nisl.",
  },
];

const hobbies = [
  {
    icon: "🎸",
    title: "Music",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Playing guitar and exploring new genres.",
  },
  {
    icon: "✈️",
    title: "Travel",
    description: "Sed euismod nisl nec lacinia. Exploring new places and cultures through the lens.",
  },
  {
    icon: "📚",
    title: "Reading",
    description: "Praesent commodo cursus magna. Photography books and creative non-fiction.",
  },
  {
    icon: "🏃",
    title: "Fitness",
    description: "Donec sed odio dui. Morning runs and staying active to keep creative energy flowing.",
  },
];

export default function AboutPage() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const eduRef = useRef<HTMLDivElement>(null);
  const eduInView = useInView(eduRef, { once: true, margin: "-50px" });

  const hobbyRef = useRef<HTMLDivElement>(null);
  const hobbyInView = useInView(hobbyRef, { once: true, margin: "-50px" });

  return (
    <div className="min-h-screen bg-background">
      {/* Main About Section */}
      <section ref={sectionRef} className="pt-28 pb-20">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          {/* Page Title - Mobile Only */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="font-heading text-4xl font-semibold tracking-wide text-foreground text-center mb-12 lg:hidden"
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
                <h1 className="hidden lg:block font-heading text-4xl md:text-5xl font-semibold tracking-wide text-foreground mb-8">
                  ABOUT ME
                </h1>

                {/* Greeting */}
                <h2 className="font-heading text-2xl md:text-3xl font-medium text-foreground mb-6">
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
                <h3 className="font-heading text-xl md:text-2xl font-medium tracking-wide text-foreground mb-6">
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
                      <span className="w-1.5 h-1.5 bg-accent rounded-full flex-shrink-0" />
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Education & Experience Section */}
      <section ref={eduRef} className="py-20 bg-navy">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={eduInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="font-heading text-3xl md:text-4xl font-semibold tracking-wide text-foreground-light text-center mb-16"
          >
            EDUCATION & EXPERIENCE
          </motion.h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Education */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={eduInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="font-heading text-xl font-medium text-accent mb-8">
                Education
              </h3>
              <div className="space-y-6">
                {education.map((item, index) => (
                  <div key={index} className="border-l-2 border-accent/30 pl-6">
                    <p className="text-foreground-light font-medium">{item.degree}</p>
                    <p className="text-muted-light text-sm mt-1">{item.school}</p>
                    <p className="text-accent text-sm mt-1">{item.year}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Experience */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={eduInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h3 className="font-heading text-xl font-medium text-accent mb-8">
                Experience
              </h3>
              <div className="space-y-6">
                {experience.map((item, index) => (
                  <div key={index} className="border-l-2 border-accent/30 pl-6">
                    <p className="text-foreground-light font-medium">{item.role}</p>
                    <p className="text-muted-light text-sm mt-1">{item.company}</p>
                    <p className="text-accent text-sm mt-1">{item.years}</p>
                    <p className="text-muted-light text-sm mt-2">{item.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Beyond the Lens - Hobbies Section */}
      <section ref={hobbyRef} className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={hobbyInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-semibold tracking-wide text-foreground">
              BEYOND THE LENS
            </h2>
            <p className="text-muted mt-4 max-w-2xl mx-auto">
              When I&apos;m not behind the camera, you&apos;ll find me exploring other passions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {hobbies.map((hobby, index) => (
              <motion.div
                key={hobby.title}
                initial={{ opacity: 0, y: 30 }}
                animate={hobbyInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 border border-border rounded-lg hover:border-accent/50 transition-colors"
              >
                <span className="text-3xl mb-4 block">{hobby.icon}</span>
                <h3 className="font-heading text-lg font-medium text-foreground mb-2">
                  {hobby.title}
                </h3>
                <p className="text-muted text-sm leading-relaxed">
                  {hobby.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
