"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import type { Project } from "@/lib/mock-data";
import { ImageModal } from "@/components/shared/ImageModal";

// Height variations for visual interest in masonry
const heightPattern = [
  "h-[260px]",
  "h-[360px]",
  "h-[300px]",
  "h-[400px]",
  "h-[280px]",
  "h-[340px]",
  "h-[260px]",
  "h-[380px]",
  "h-[320px]",
  "h-[260px]",
  "h-[360px]",
  "h-[300px]",
];

function getHeightClass(index: number): string {
  return heightPattern[index % heightPattern.length];
}

interface ProjectDetailProps {
  project: Project;
}

export function ProjectDetail({ project }: ProjectDetailProps) {
  const galleryRef = useRef<HTMLElement>(null);
  const isInView = useInView(galleryRef, { once: true, margin: "-50px" });

  // Modal state
  const [modalOpen, setModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Format the date
  const formattedDate = new Date(project.date).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  // Convert project images to modal format
  const modalImages = project.images.map((img) => ({
    id: img.id,
    url: img.url.replace(/w=\d+&h=\d+/, "w=1400&h=1400"),
    alt: img.name,
  }));

  const openModal = (index: number) => {
    setCurrentImageIndex(index);
    setModalOpen(true);
  };

  return (
    <>
      <div className="min-h-screen">
        {/* Back Navigation */}
        <div className="fixed top-24 left-6 z-40">
          <Link
            href="/projects"
            className="flex items-center gap-2 text-muted hover:text-foreground transition-colors bg-background/80 backdrop-blur-sm px-3 py-2 rounded"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            <span className="text-sm font-medium">Portfolio</span>
          </Link>
        </div>

        {/* Banner Section */}
        <section className="relative h-[50vh] md:h-[60vh] w-full">
          {/* Banner Image */}
          <Image
            src={project.bannerUrl}
            alt={project.title}
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />

          {/* Title Card */}
          <div className="absolute inset-x-0 bottom-0 flex justify-center pb-12 md:pb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="glass-card px-8 py-6 md:px-12 md:py-8 text-center max-w-lg mx-4"
            >
              <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-light tracking-wide text-foreground">
                {project.title}
              </h1>
              <p className="text-muted mt-3">{formattedDate}</p>
              <p className="text-muted text-sm mt-2 italic">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Gallery Section */}
        <section ref={galleryRef} className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            {/* Masonry Grid */}
            <div className="masonry-grid">
              {project.images.map((image, index) => (
                <motion.div
                  key={image.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.03 }}
                  className="masonry-item"
                >
                  <div
                    className={`image-hover-container relative cursor-pointer group ${getHeightClass(index)}`}
                    onClick={() => openModal(index)}
                  >
                    <Image
                      src={image.thumbUrl}
                      alt={image.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    />

                    {/* Subtle Overlay on Hover */}
                    <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors duration-300" />
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Empty State */}
            {project.images.length === 0 && (
              <div className="text-center py-16">
                <p className="text-muted">No images in this project yet.</p>
              </div>
            )}
          </div>
        </section>
      </div>

      {/* Image Modal */}
      <ImageModal
        images={modalImages}
        currentIndex={currentImageIndex}
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        onNavigate={setCurrentImageIndex}
      />
    </>
  );
}
