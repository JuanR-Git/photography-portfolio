import { notFound } from "next/navigation";
import { getProjectBySlug, mockProjects } from "@/lib/mock-data";
import { ProjectDetail } from "@/components/projects/ProjectDetail";

interface ProjectDetailPageProps {
  params: Promise<{ slug: string }>;
}

// Generate static params for all projects
export async function generateStaticParams() {
  return mockProjects.map((project) => ({
    slug: project.slug,
  }));
}

// Generate metadata for each project
export async function generateMetadata({ params }: ProjectDetailPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.title} | Carlos Reyes Photography`,
    description: `View the ${project.title} photography project by Carlos Reyes.`,
  };
}

export default async function ProjectDetailPage({
  params,
}: ProjectDetailPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return <ProjectDetail project={project} />;
}
