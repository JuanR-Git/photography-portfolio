"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const categories = [
  { id: "all", label: "All" },
  { id: "travel", label: "Travel" },
  { id: "people", label: "People" },
  { id: "urban", label: "Urban & Street" },
  { id: "weddings", label: "Weddings" },
];

interface FilterBarProps {
  onSortChange?: (sort: "newest" | "oldest") => void;
  onCategoryChange?: (category: string) => void;
}

export function FilterBar({ onSortChange, onCategoryChange }: FilterBarProps) {
  const [sortOrder, setSortOrder] = useState<"newest" | "oldest">("newest");
  const [activeCategory, setActiveCategory] = useState("all");

  const handleSortChange = (order: "newest" | "oldest") => {
    setSortOrder(order);
    onSortChange?.(order);
  };

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    onCategoryChange?.(category);
  };

  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-6 py-8 border-b border-border">
      {/* Sort Toggle */}
      <div className="flex items-center gap-4">
        <button
          onClick={() => handleSortChange("newest")}
          className={`text-sm font-medium transition-all duration-300 ${
            sortOrder === "newest"
              ? "text-foreground"
              : "text-muted hover:text-foreground"
          }`}
        >
          Newest ↑
          {sortOrder === "newest" && (
            <motion.div
              layoutId="sort-underline"
              className="h-px bg-foreground mt-1"
              initial={false}
            />
          )}
        </button>

        <button
          onClick={() => handleSortChange("oldest")}
          className={`text-sm font-medium transition-all duration-300 ${
            sortOrder === "oldest"
              ? "text-foreground"
              : "text-muted hover:text-foreground"
          }`}
        >
          Oldest ↓
          {sortOrder === "oldest" && (
            <motion.div
              layoutId="sort-underline"
              className="h-px bg-foreground mt-1"
              initial={false}
            />
          )}
        </button>
      </div>

      {/* Divider */}
      <div className="hidden sm:block w-px h-6 bg-border" />

      {/* Category Filters */}
      <div className="flex items-center gap-4 overflow-x-auto pb-2 sm:pb-0">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => handleCategoryChange(category.id)}
            className={`text-sm font-medium whitespace-nowrap transition-all duration-300 ${
              activeCategory === category.id
                ? "text-foreground"
                : "text-muted hover:text-foreground"
            }`}
          >
            {category.label}
            {activeCategory === category.id && (
              <motion.div
                layoutId="category-underline"
                className="h-px bg-foreground mt-1"
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
