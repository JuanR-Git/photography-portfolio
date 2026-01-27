"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { featuredImages } from "@/lib/mock-data";
import { ImageModal } from "@/components/shared/ImageModal";

// Height variations for visual interest in masonry
const heightPattern = [
  "h-[280px]", // short
  "h-[380px]", // tall
  "h-[320px]", // medium
  "h-[420px]", // extra tall
  "h-[300px]", // medium-short
  "h-[360px]", // medium-tall
  "h-[280px]", // short
  "h-[400px]", // tall
  "h-[340px]", // medium
  "h-[280px]", // short
  "h-[380px]", // tall
  "h-[320px]", // medium
];

function getHeightClass(index: number): string {
  return heightPattern[index % heightPattern.length];
}

export function FeaturedPortfolio() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  // Modal state
  const [modalOpen, setModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Convert featured images to modal format
  const modalImages = featuredImages.map((img) => ({
    id: img.id,
    url: img.url.replace(/w=\d+&h=\d+/, "w=1200&h=1200"), // Higher res for modal
    alt: img.alt,
  }));

  const openModal = (index: number) => {
    setCurrentImageIndex(index);
    setModalOpen(true);
  };

  return (
    <>
      <section ref={sectionRef} className="py-24 md:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-light tracking-wide text-foreground">
              FEATURED PORTFOLIO
            </h2>
          </motion.div>

          {/* Masonry Grid */}
          <div className="masonry-grid">
            {featuredImages.map((image, index) => (
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
                    src={image.url}
                    alt={image.alt}
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
        </div>
      </section>

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
