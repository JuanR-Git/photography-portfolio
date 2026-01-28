"use client";

import { motion } from "framer-motion";
import type { ProjectCategory } from "@/lib/types";

const categories: { id: ProjectCategory; label: string }[] = [
  { id: "all", label: "All" },
  { id: "retail", label: "Retail" },
  { id: "marketing", label: "Marketing & Social" },
  { id: "headshots", label: "Headshots" },
  { id: "events", label: "Events" },
];

interface FilterBarProps {
  activeFilter: ProjectCategory;
  onFilterChange: (category: ProjectCategory) => void;
}

export function FilterBar({ activeFilter, onFilterChange }: FilterBarProps) {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-6 py-8 border-b border-border">
      {/* Category Filters */}
      <div className="flex items-center gap-4 overflow-x-auto pb-2 sm:pb-0">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => onFilterChange(category.id)}
            className={`text-sm font-medium whitespace-nowrap transition-all duration-300 ${
              activeFilter === category.id
                ? "text-accent"
                : "text-muted hover:text-foreground"
            }`}
          >
            {category.label}
            {activeFilter === category.id && (
              <motion.div
                layoutId="category-underline"
                className="h-0.5 bg-accent mt-1"
                initial={false}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              />
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
