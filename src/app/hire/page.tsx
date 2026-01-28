"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

// FAQ data
const faqs = [
  {
    question: "What kind of photography services do you offer?",
    answer:
      "We offer a wide range of photography services including retail photography, marketing and social media content, professional headshots, and event photography. Each session is tailored to meet your specific needs and vision.",
  },
  {
    question: "What is your pricing structure for photography services?",
    answer:
      "Our pricing varies based on the type of session, duration, and deliverables. We offer competitive rates tailored to your specific project needs. Please use the contact form above for a personalized quote.",
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
      "Absolutely! We work closely with each client to understand their vision. Basic retouching is included in all projects, and additional editing requests can be accommodated for a small fee.",
  },
];

// FAQ Item Component
function FAQItem({
  faq,
  isOpen,
  onToggle,
}: {
  faq: (typeof faqs)[0];
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
          className={`ml-4 flex-shrink-0 w-6 h-6 flex items-center justify-center border rounded transition-all duration-300 ${
            isOpen
              ? "bg-accent text-white border-accent rotate-0"
              : "border-border text-muted group-hover:border-accent group-hover:text-accent"
          }`}
        >
          <svg
            className={`w-3 h-3 transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
          </svg>
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

// Contact Form Component
function ContactForm({ isInView }: { isInView: boolean }) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    website: "",
    photographyNeeds: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset after showing success
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        website: "",
        photographyNeeds: "",
      });
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <motion.form
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.2 }}
      onSubmit={handleSubmit}
      className="space-y-6"
    >
      {/* Name Fields - Side by Side */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label
            htmlFor="firstName"
            className="block text-sm font-medium text-foreground mb-2"
          >
            First Name <span className="text-accent">*</span>
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            required
            value={formData.firstName}
            onChange={handleChange}
            className="form-input"
            placeholder="John"
          />
        </div>
        <div>
          <label
            htmlFor="lastName"
            className="block text-sm font-medium text-foreground mb-2"
          >
            Last Name <span className="text-accent">*</span>
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            required
            value={formData.lastName}
            onChange={handleChange}
            className="form-input"
            placeholder="Doe"
          />
        </div>
      </div>

      {/* Email */}
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-foreground mb-2"
        >
          Email <span className="text-accent">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
          className="form-input"
          placeholder="john@example.com"
        />
      </div>

      {/* Website or Social */}
      <div>
        <label
          htmlFor="website"
          className="block text-sm font-medium text-foreground mb-2"
        >
          Website or Social Account
        </label>
        <input
          type="text"
          id="website"
          name="website"
          value={formData.website}
          onChange={handleChange}
          className="form-input"
          placeholder="@yourbrand or https://..."
        />
      </div>

      {/* Photography Needs */}
      <div>
        <label
          htmlFor="photographyNeeds"
          className="block text-sm font-medium text-foreground mb-2"
        >
          Tell me about your photography needs <span className="text-accent">*</span>
        </label>
        <textarea
          id="photographyNeeds"
          name="photographyNeeds"
          required
          rows={5}
          value={formData.photographyNeeds}
          onChange={handleChange}
          className="form-textarea"
          placeholder="Describe your project, timeline, and any specific requirements..."
        />
      </div>

      {/* Submit Button */}
      <motion.button
        type="submit"
        disabled={isSubmitting || isSubmitted}
        className={`w-full py-4 px-8 font-heading text-sm tracking-widest uppercase transition-all duration-300 ${
          isSubmitted
            ? "bg-green-600 text-white"
            : isSubmitting
              ? "bg-accent/70 text-white cursor-wait"
              : "bg-accent text-white hover:bg-accent-hover"
        }`}
        whileHover={!isSubmitting && !isSubmitted ? { scale: 1.01 } : {}}
        whileTap={!isSubmitting && !isSubmitted ? { scale: 0.99 } : {}}
      >
        {isSubmitted ? (
          <span className="flex items-center justify-center gap-2">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            Message Sent!
          </span>
        ) : isSubmitting ? (
          <span className="flex items-center justify-center gap-2">
            <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
            </svg>
            Sending...
          </span>
        ) : (
          "Send Message"
        )}
      </motion.button>
    </motion.form>
  );
}

export default function HirePage() {
  const formRef = useRef<HTMLElement>(null);
  const faqRef = useRef<HTMLElement>(null);

  const formInView = useInView(formRef, { once: true, margin: "-50px" });
  const faqInView = useInView(faqRef, { once: true, margin: "-50px" });

  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  return (
    <div className="min-h-screen pt-28 pb-20 bg-background">
      {/* Contact Form Section */}
      <section ref={formRef} className="max-w-2xl mx-auto px-6 lg:px-8 mb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={formInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="font-heading text-4xl md:text-5xl font-semibold tracking-wide text-foreground mb-4">
            LET&apos;S WORK TOGETHER
          </h1>
          <p className="text-muted max-w-xl mx-auto">
            Ready to bring your vision to life? Fill out the form below and I&apos;ll get back to you within 24 hours.
          </p>
        </motion.div>

        <ContactForm isInView={formInView} />
      </section>

      {/* FAQ Section */}
      <section ref={faqRef} className="py-20 bg-navy">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={faqInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="font-heading text-3xl md:text-4xl font-semibold tracking-wide text-foreground-light text-center mb-12"
          >
            FREQUENTLY ASKED QUESTIONS
          </motion.h2>

          <motion.div
            initial={{ opacity: 0 }}
            animate={faqInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-background/5 backdrop-blur-sm rounded-lg p-6 md:p-8"
          >
            {faqs.map((faq, index) => (
              <FAQItem
                key={index}
                faq={faq}
                isOpen={openFAQ === index}
                onToggle={() => setOpenFAQ(openFAQ === index ? null : index)}
              />
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
