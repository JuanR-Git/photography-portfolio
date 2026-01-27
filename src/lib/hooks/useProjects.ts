"use client";

import { useQuery } from "@tanstack/react-query";
import type { Project, ProjectDetail } from "@/lib/types";

// Fetch all projects
async function fetchProjects(): Promise<Project[]> {
  const response = await fetch("/api/projects");

  if (!response.ok) {
    throw new Error("Failed to fetch projects");
  }

  return response.json();
}

// Fetch single project by slug
async function fetchProject(slug: string): Promise<ProjectDetail> {
  const response = await fetch(`/api/projects/${slug}`);

  if (!response.ok) {
    if (response.status === 404) {
      throw new Error("Project not found");
    }
    throw new Error("Failed to fetch project");
  }

  return response.json();
}

// Hook to get all projects
export function useProjects() {
  return useQuery({
    queryKey: ["projects"],
    queryFn: fetchProjects,
    staleTime: 60 * 1000, // 60 seconds
    gcTime: 5 * 60 * 1000, // 5 minutes (formerly cacheTime)
    refetchOnWindowFocus: false,
  });
}

// Hook to get single project
export function useProject(slug: string) {
  return useQuery({
    queryKey: ["project", slug],
    queryFn: () => fetchProject(slug),
    staleTime: 60 * 1000,
    gcTime: 5 * 60 * 1000,
    refetchOnWindowFocus: false,
    enabled: !!slug,
  });
}
