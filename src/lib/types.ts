// API Response Types

export interface Project {
  slug: string;
  title: string;
  date: string;
  coverUrl: string;
  bannerUrl?: string;
  updatedTime?: string;
  category?: string;
}

export interface ProjectImage {
  id: string;
  name: string;
  url: string;
  thumbUrl: string;
}

export interface ProjectDetail {
  slug: string;
  title: string;
  date: string;
  bannerUrl: string;
  images: ProjectImage[];
  videos: string[];
}

// Category type for filtering - matching service categories + additional filters
export type ProjectCategory =
  | "all"
  | "retail"
  | "marketing"
  | "headshots"
  | "events"
  | "urban"
  | "people"
  | "food";

// Sort options
export type SortOption = "newest" | "oldest";

// Helper to extract category from project title/slug
export function getProjectCategory(slug: string): ProjectCategory {
  const lowerSlug = slug.toLowerCase();

  if (lowerSlug.includes("retail") || lowerSlug.includes("store") || lowerSlug.includes("shop")) {
    return "retail";
  }
  if (lowerSlug.includes("marketing") || lowerSlug.includes("social") || lowerSlug.includes("brand") || lowerSlug.includes("product")) {
    return "marketing";
  }
  if (lowerSlug.includes("headshot") || lowerSlug.includes("portrait") || lowerSlug.includes("corporate")) {
    return "headshots";
  }
  if (lowerSlug.includes("event") || lowerSlug.includes("party") || lowerSlug.includes("wedding") || lowerSlug.includes("birthday")) {
    return "events";
  }
  if (lowerSlug.includes("urban") || lowerSlug.includes("street") || lowerSlug.includes("city")) {
    return "urban";
  }
  if (lowerSlug.includes("people") || lowerSlug.includes("couple") || lowerSlug.includes("close")) {
    return "people";
  }
  if (lowerSlug.includes("food") || lowerSlug.includes("restaurant") || lowerSlug.includes("cuisine")) {
    return "food";
  }

  return "all";
}
