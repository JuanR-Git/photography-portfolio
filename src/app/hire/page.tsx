"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { motion, useInView, AnimatePresence } from "framer-motion";

// Package data
const packages = [
  {
    id: "mini",
    name: "MINI",
    price: 450,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec lacinia tincidunt.",
    features: [
      "1 location",
      "30min (up to 5 people)",
      "15 Detailed edits",
      "Print release",
    ],
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=500&fit=crop",
  },
  {
    id: "standard",
    name: "STANDARD",
    price: 550,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec lacinia tincidunt.",
    features: [
      "1 location",
      "Outfit change",
      "45min session",
      "25 Detailed edits",
      "Print release",
    ],
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&h=500&fit=crop",
  },
  {
    id: "premium",
    name: "PREMIUM",
    price: 850,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec lacinia tincidunt.",
    features: [
      "2 locations",
      "Multiple outfit changes",
      "90min session",
      "50 Detailed edits",
      "Print release",
      "Online gallery",
    ],
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&h=500&fit=crop",
  },
];

// Reviews data
const reviews = [
  {
    id: 1,
    quote:
      "Working with Carlos was an absolute pleasure. His attention to detail and creative eye made our project stand out.",
    author: "Sarah Johnson",
    initials: "SJ",
  },
  {
    id: 2,
    quote:
      "I have had the privilege of working with Carlos on multiple projects. His ability to capture emotion is truly impressive. A true professional.",
    author: "David Nguyen",
    initials: "DN",
  },
  {
    id: 3,
    quote:
      "I had the pleasure of working with Carlos for my business and couldn't be happier with the results. Highly recommended!",
    author: "Emily Davis",
    initials: "ED",
  },
  {
    id: 4,
    quote:
      "I recently worked with Carlos and was blown away by his talent and professionalism. A true gem in the photography world!",
    author: "Lisa Johnson",
    initials: "LJ",
  },
];

// FAQ data
const faqs = [
  {
    question: "What kind of photography services do you offer?",
    answer:
      "We offer a wide range of photography services including portrait photography, event photography, product photography, wedding photography, and more. Each session is tailored to meet your specific needs and vision.",
  },
  {
    question: "What is your pricing structure for photography services?",
    answer:
      "Our pricing varies based on the type of session, duration, and deliverables. We offer packages starting from $450 for mini sessions up to custom quotes for larger events. Please see our packages above or contact us for a personalized quote.",
  },
  {
    question: "Do you offer both indoor and outdoor photography services?",
    answer:
      "Yes! We are experienced in both indoor studio settings and outdoor locations. We can help you choose the best environment for your specific needs and desired aesthetic.",
  },
  {
    question: "How long does it take to receive the final photographs?",
    answer:
      "Turnaround time typically ranges from 2-4 weeks depending on the size of the project. Rush delivery is available for an additional fee. You'll receive a private online gallery with your edited images.",
  },
  {
    question: "Can I request specific editing or retouching for my photos?",
    answer:
      "Absolutely! We work closely with each client to understand their vision. Basic retouching is included in all packages, and additional editing requests can be accommodated for a small fee.",
  },
];

// Checkmark icon component
const CheckIcon = () => (
  <svg
    className="w-4 h-4 text-foreground flex-shrink-0"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

// Package Card Component
function PackageCard({
  pkg,
  index,
  isInView,
}: {
  pkg: (typeof packages)[0];
  index: number;
  isInView: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="border border-border bg-background hover:shadow-lg transition-shadow duration-300"
    >
      <div className="flex flex-col md:flex-row">
        {/* Content Side */}
        <div className="flex-1 p-6 md:p-8">
          <h3 className="font-heading text-2xl font-light tracking-wide text-foreground mb-3">
            {pkg.name}
          </h3>
          <p className="text-muted text-sm leading-relaxed mb-6">
            {pkg.description}
          </p>

          {/* Features List */}
          <ul className="space-y-3">
            {pkg.features.map((feature) => (
              <li key={feature} className="flex items-center gap-3 text-sm">
                <CheckIcon />
                <span className="text-muted">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Image & Price Side */}
        <div className="relative w-full md:w-64 lg:w-80 flex-shrink-0">
          <div className="relative aspect-[4/3] md:aspect-auto md:h-full">
            <Image
              src={pkg.image}
              alt={pkg.name}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 320px"
            />
            {/* Price Overlay */}
            <div className="absolute inset-0 flex items-center justify-center bg-foreground/20">
              <div className="bg-background/95 backdrop-blur-sm px-6 py-4 text-center">
                <p className="font-heading text-3xl font-light text-foreground">
                  ${pkg.price}
                </p>
                <p className="text-muted text-xs mt-1">USD</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// Review Card Component
function ReviewCard({
  review,
  index,
  isInView,
}: {
  review: (typeof reviews)[0];
  index: number;
  isInView: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="border border-border p-6 md:p-8"
    >
      <p className="text-muted italic leading-relaxed mb-6">
        &ldquo;{review.quote}&rdquo;
      </p>
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-foreground text-background flex items-center justify-center text-sm font-medium">
          {review.initials}
        </div>
        <span className="text-foreground font-medium">{review.author}</span>
      </div>
    </motion.div>
  );
}

// FAQ Item Component
function FAQItem({
  faq,
  index,
  isOpen,
  onToggle,
}: {
  faq: (typeof faqs)[0];
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-b border-border">
      <button
        onClick={onToggle}
        className="w-full py-5 flex items-center justify-between text-left group"
      >
        <span
          className={`text-sm md:text-base font-medium transition-colors ${isOpen ? "text-foreground" : "text-muted group-hover:text-foreground"}`}
        >
          {faq.question}
        </span>
        <span
          className={`ml-4 flex-shrink-0 w-6 h-6 flex items-center justify-center border border-border rounded transition-colors ${isOpen ? "bg-foreground text-background border-foreground" : ""}`}
        >
          {isOpen ? "−" : "+"}
        </span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="text-muted text-sm leading-relaxed pb-5">
              {faq.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// Mail Icon
const MailIcon = () => (
  <svg
    className="w-5 h-5"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={1.5}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
    />
  </svg>
);

// Instagram Icon
const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
  </svg>
);

// Twitter Icon
const TwitterIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

export default function HirePage() {
  const packagesRef = useRef<HTMLElement>(null);
  const reviewsRef = useRef<HTMLElement>(null);
  const faqRef = useRef<HTMLElement>(null);

  const packagesInView = useInView(packagesRef, { once: true, margin: "-50px" });
  const reviewsInView = useInView(reviewsRef, { once: true, margin: "-50px" });
  const faqInView = useInView(faqRef, { once: true, margin: "-50px" });

  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  return (
    <div className="min-h-screen pt-28 pb-20">
      {/* Photography Packages Section */}
      <section ref={packagesRef} className="max-w-5xl mx-auto px-6 lg:px-8 mb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={packagesInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h1 className="font-heading text-4xl md:text-5xl font-light tracking-wide text-foreground mb-4">
            PHOTOGRAPHY PACKAGES
          </h1>
          <p className="text-muted max-w-2xl">
            Explore my photography portfolio and see the world through my
            creative lens. Contact me if you would like to hire me.
          </p>
        </motion.div>

        <div className="space-y-6">
          {packages.map((pkg, index) => (
            <PackageCard
              key={pkg.id}
              pkg={pkg}
              index={index}
              isInView={packagesInView}
            />
          ))}
        </div>
      </section>

      {/* Reviews Section */}
      <section ref={reviewsRef} className="max-w-5xl mx-auto px-6 lg:px-8 mb-24">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={reviewsInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="font-heading text-3xl md:text-4xl font-light tracking-wide text-foreground text-center mb-12"
        >
          WHAT MY CLIENTS ARE SAYING ABOUT ME
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reviews.map((review, index) => (
            <ReviewCard
              key={review.id}
              review={review}
              index={index}
              isInView={reviewsInView}
            />
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section ref={faqRef} className="max-w-3xl mx-auto px-6 lg:px-8 mb-24">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={faqInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="font-heading text-3xl md:text-4xl font-light tracking-wide text-foreground mb-8"
        >
          FREQUENTLY ASKED QUESTIONS
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          animate={faqInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              faq={faq}
              index={index}
              isOpen={openFAQ === index}
              onToggle={() => setOpenFAQ(openFAQ === index ? null : index)}
            />
          ))}
        </motion.div>
      </section>

      {/* Contact CTA Section */}
      <section className="max-w-2xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="border border-border p-8 md:p-12 text-center"
        >
          <h3 className="font-heading text-2xl md:text-3xl font-light text-foreground mb-4">
            Questions or collaboration ideas?
          </h3>
          <p className="text-muted leading-relaxed mb-2">
            I would love to hear from you! Whether you have questions about my
            work, have ideas, or are interested in hiring me, please reach out.
          </p>
          <p className="text-muted text-sm mb-8">
            I usually respond within hours!
          </p>

          {/* Contact Links */}
          <div className="flex flex-wrap items-center justify-center gap-6">
            <a
              href="mailto:carlos@reyes.com"
              className="flex items-center gap-2 text-muted hover:text-foreground transition-colors"
            >
              <MailIcon />
              <span className="text-sm">carlos@reyes.com</span>
            </a>
            <a
              href="#"
              className="flex items-center gap-2 text-muted hover:text-foreground transition-colors"
            >
              <InstagramIcon />
              <span className="text-sm">@carlosphoto</span>
            </a>
            <a
              href="#"
              className="flex items-center gap-2 text-muted hover:text-foreground transition-colors"
            >
              <TwitterIcon />
              <span className="text-sm">@carlosph</span>
            </a>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
