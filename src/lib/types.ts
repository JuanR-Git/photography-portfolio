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

// Category type for filtering
export type ProjectCategory = "all" | "wedding" | "portrait" | "event" | "commercial";

// Helper to extract category from project title/slug
export function getProjectCategory(slug: string): ProjectCategory {
  const lowerSlug = slug.toLowerCase();

  if (lowerSlug.includes("wedding") || lowerSlug.includes("engagement")) {
    return "wedding";
  }
  if (lowerSlug.includes("portrait") || lowerSlug.includes("headshot")) {
    return "portrait";
  }
  if (lowerSlug.includes("event") || lowerSlug.includes("party") || lowerSlug.includes("corporate")) {
    return "event";
  }
  if (lowerSlug.includes("commercial") || lowerSlug.includes("product") || lowerSlug.includes("brand")) {
    return "commercial";
  }

  return "all";
}
