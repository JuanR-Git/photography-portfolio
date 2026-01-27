"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import type { Project } from "@/lib/types";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  // Format the date nicely
  const formattedDate = new Date(project.date).toLocaleDateString("en-US", {
    month: "short",
    year: "numeric",
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
    >
      <Link
        href={`/projects/${project.slug}`}
        className="group block relative aspect-[3/4] overflow-hidden"
      >
        {/* Full-bleed Cover Image */}
        <div className="image-hover-container absolute inset-0">
          <Image
            src={project.coverUrl}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          />
        </div>

        {/* Title Ribbon Overlay at Bottom */}
        <div className="absolute bottom-0 left-0 right-0 bg-white/85 backdrop-blur-sm px-4 py-4 transition-all duration-300 group-hover:bg-white/95">
          <h3 className="font-heading text-lg font-medium text-foreground truncate">
            {project.title}
          </h3>
          <p className="text-muted text-sm mt-1">{formattedDate}</p>
        </div>
      </Link>
    </motion.div>
  );
}
