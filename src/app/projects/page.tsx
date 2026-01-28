"use client";

import { useRef, useState, useMemo, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { motion, useInView } from "framer-motion";
import { FilterBar } from "@/components/projects/FilterBar";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { useProjects } from "@/lib/hooks/useProjects";
import { mockProjects } from "@/lib/mock-data";
import { getProjectCategory, type ProjectCategory } from "@/lib/types";

export default function ProjectsPage() {
  const headerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(headerRef, { once: true, margin: "-50px" });
  const router = useRouter();
  const searchParams = useSearchParams();

  // Get initial filter from URL query param
  const filterParam = searchParams.get("filter") as ProjectCategory | null;
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>(
    filterParam && ["all", "retail", "marketing", "headshots", "events"].includes(filterParam)
      ? filterParam
      : "all"
  );

  // Update URL when filter changes
  const handleFilterChange = (category: ProjectCategory) => {
    setActiveFilter(category);
    if (category === "all") {
      router.push("/projects", { scroll: false });
    } else {
      router.push(`/projects?filter=${category}`, { scroll: false });
    }
  };

  // Sync with URL changes
  useEffect(() => {
    const param = searchParams.get("filter") as ProjectCategory | null;
    if (param && ["all", "retail", "marketing", "headshots", "events"].includes(param)) {
      setActiveFilter(param);
    } else if (!param) {
      setActiveFilter("all");
    }
  }, [searchParams]);

  // Fetch projects from API
  const { data: apiProjects, isLoading, error } = useProjects();

  // Use API data if available, otherwise fall back to mock data
  const projects = apiProjects || mockProjects;

  // Filter projects by category
  const filteredProjects = useMemo(() => {
    if (activeFilter === "all") return projects;

    return projects.filter((project) => {
      // Use category from project if available, otherwise derive from slug
      const category = project.category
        ? project.category.toLowerCase()
        : getProjectCategory(project.slug);

      // Match category
      if (activeFilter === "retail") {
        return category === "retail" || category.includes("retail") || category.includes("store");
      }
      if (activeFilter === "marketing") {
        return category === "marketing" || category.includes("marketing") || category.includes("social") || category.includes("brand");
      }
      if (activeFilter === "headshots") {
        return category === "headshots" || category.includes("headshot") || category.includes("portrait");
      }
      if (activeFilter === "events") {
        return category === "events" || category.includes("event") || category.includes("wedding") || category.includes("party");
      }
      return true;
    });
  }, [projects, activeFilter]);

  return (
    <div className="min-h-screen pt-28 pb-16 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Page Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-semibold tracking-wide text-foreground">
            Portfolio
          </h1>
          <p className="text-muted mt-4 text-lg">2017 - Present</p>
          <p className="text-muted mt-2 italic">Snapshots through the Years</p>
        </motion.div>

        {/* Filter Bar */}
        <FilterBar
          activeFilter={activeFilter}
          onFilterChange={handleFilterChange}
        />

        {/* Loading State */}
        {isLoading && (
          <div className="flex justify-center items-center py-24">
            <div className="animate-spin rounded-full h-8 w-8 border-2 border-muted border-t-accent" />
          </div>
        )}

        {/* Error State */}
        {error && !apiProjects && (
          <div className="text-center py-12">
            <p className="text-muted">
              Unable to load projects from server. Showing cached content.
            </p>
          </div>
        )}

        {/* Projects Grid */}
        {!isLoading && (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 mt-12">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.slug} project={project} index={index} />
            ))}
          </div>
        )}

        {/* Empty State */}
        {!isLoading && filteredProjects.length === 0 && (
          <div className="text-center py-16">
            <p className="text-muted">No projects found in this category.</p>
          </div>
        )}
      </div>
    </div>
  );
}
