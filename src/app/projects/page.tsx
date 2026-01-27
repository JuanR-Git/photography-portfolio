"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FilterBar } from "@/components/projects/FilterBar";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { mockProjects } from "@/lib/mock-data";

export default function ProjectsPage() {
  const headerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(headerRef, { once: true, margin: "-50px" });

  return (
    <div className="min-h-screen pt-28 pb-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Page Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-light tracking-wide text-foreground">
            All Projects
          </h1>
          <p className="text-muted mt-4 text-lg">2017 - Present</p>
          <p className="text-muted mt-2 italic">Snapshots through the Years</p>
        </motion.div>

        {/* Filter Bar */}
        <FilterBar />

        {/* Projects Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 mt-12">
          {mockProjects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
