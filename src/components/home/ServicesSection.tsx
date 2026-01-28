"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { ImageModal } from "@/components/shared/ImageModal";

// Service data with sample images for each
const services = [
  {
    id: "retail",
    title: "Retail",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod nisl nec lacinia tincidunt. Vivamus auctor, nunc eget ultricies lacinia, nisl nisl aliquam nisl.",
    filterParam: "retail",
    galleryImages: [
      { id: "r1", url: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&h=1200&fit=crop", alt: "Retail 1" },
      { id: "r2", url: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=1200&h=1200&fit=crop", alt: "Retail 2" },
      { id: "r3", url: "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?w=1200&h=1200&fit=crop", alt: "Retail 3" },
      { id: "r4", url: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&h=1200&fit=crop", alt: "Retail 4" },
    ],
  },
  {
    id: "marketing",
    title: "Marketing & Social Media",
    description:
      "Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Nullam quis risus eget urna mollis ornare vel eu leo. Cras mattis consectetur purus sit amet fermentum.",
    filterParam: "marketing",
    galleryImages: [
      { id: "m1", url: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=1200&h=1200&fit=crop", alt: "Marketing 1" },
      { id: "m2", url: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1200&h=1200&fit=crop", alt: "Marketing 2" },
      { id: "m3", url: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=1200&h=1200&fit=crop", alt: "Marketing 3" },
      { id: "m4", url: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1200&h=1200&fit=crop", alt: "Marketing 4" },
      { id: "m5", url: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1200&h=1200&fit=crop", alt: "Marketing 5" },
    ],
  },
  {
    id: "headshots",
    title: "Headshots",
    description:
      "Aenean lacinia bibendum nulla sed consectetur. Donec sed odio dui. Maecenas faucibus mollis interdum. Cras justo odio, dapibus ac facilisis in, egestas eget quam.",
    filterParam: "headshots",
    galleryImages: [
      { id: "h1", url: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&h=1200&fit=crop", alt: "Headshot 1" },
      { id: "h2", url: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=1200&h=1200&fit=crop", alt: "Headshot 2" },
      { id: "h3", url: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=1200&h=1200&fit=crop", alt: "Headshot 3" },
      { id: "h4", url: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=1200&h=1200&fit=crop", alt: "Headshot 4" },
    ],
  },
  {
    id: "events",
    title: "Events",
    description:
      "Vestibulum id ligula porta felis euismod semper. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Sed posuere consectetur est at lobortis.",
    filterParam: "events",
    galleryImages: [
      { id: "e1", url: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&h=1200&fit=crop", alt: "Event 1" },
      { id: "e2", url: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=1200&h=1200&fit=crop", alt: "Event 2" },
      { id: "e3", url: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=1200&h=1200&fit=crop", alt: "Event 3" },
      { id: "e4", url: "https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=1200&h=1200&fit=crop", alt: "Event 4" },
      { id: "e5", url: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=1200&h=1200&fit=crop", alt: "Event 5" },
    ],
  },
];

// Auto-scrolling image component
function AutoScrollImage({
  images,
  onImageClick
}: {
  images: { id: string; url: string; alt: string }[];
  onImageClick: () => void;
}) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div
      className="relative aspect-[4/5] w-full cursor-pointer overflow-hidden"
      onClick={onImageClick}
    >
      {images.map((image, index) => (
        <div
          key={image.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={image.url.replace("1200&h=1200", "800&h=1000")}
            alt={image.alt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 320px"
          />
        </div>
      ))}

      {/* Gallery indicator overlay */}
      <div className="absolute inset-0 bg-black/0 hover:bg-black/20 transition-colors duration-300 flex items-center justify-center opacity-0 hover:opacity-100">
        <div className="bg-black/60 text-white px-4 py-2 rounded-full text-sm flex items-center gap-2">
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <circle cx="8.5" cy="8.5" r="1.5" />
            <path d="M21 15l-5-5L5 21" />
          </svg>
          View Gallery ({images.length})
        </div>
      </div>

      {/* Image dots indicator */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
              index === currentIndex ? "bg-white w-4" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export function ServicesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  // Modal state
  const [modalOpen, setModalOpen] = useState(false);
  const [currentServiceIndex, setCurrentServiceIndex] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openGallery = (serviceIndex: number) => {
    setCurrentServiceIndex(serviceIndex);
    setCurrentImageIndex(0);
    setModalOpen(true);
  };

  const currentGalleryImages = services[currentServiceIndex]?.galleryImages || [];

  return (
    <>
      <section
        id="services"
        ref={sectionRef}
        className="py-24 md:py-32 bg-background"
      >
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold tracking-wide text-foreground">
              SERVICES
            </h2>
            <p className="text-muted mt-4 max-w-2xl mx-auto">
              Professional photography services tailored to elevate your brand and capture your vision
            </p>
          </motion.div>

          {/* Service Cards - Contained layout */}
          <div className="space-y-6">
            {services.map((service, index) => {
              const isReversed = index % 2 !== 0;

              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="border border-border bg-background hover:shadow-lg transition-shadow duration-300"
                >
                  <div className={`flex flex-col ${isReversed ? "md:flex-row-reverse" : "md:flex-row"}`}>
                    {/* Image Side */}
                    <div className="w-full md:w-64 lg:w-80 flex-shrink-0">
                      <AutoScrollImage
                        images={service.galleryImages}
                        onImageClick={() => openGallery(index)}
                      />
                    </div>

                    {/* Content Side */}
                    <div className="flex-1 p-6 md:p-8 flex flex-col justify-center">
                      <h3 className="font-heading text-2xl font-semibold text-foreground mb-3">
                        {service.title}
                      </h3>
                      <p className="text-muted mb-6 leading-relaxed">
                        {service.description}
                      </p>
                      <Link
                        href={`/projects?filter=${service.filterParam}`}
                        className="link-accent inline-flex items-center gap-2 group w-fit"
                      >
                        View Projects
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          className="transition-transform group-hover:translate-x-1"
                        >
                          <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Image Modal */}
      <ImageModal
        images={currentGalleryImages}
        currentIndex={currentImageIndex}
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        onNavigate={setCurrentImageIndex}
      />
    </>
  );
}
