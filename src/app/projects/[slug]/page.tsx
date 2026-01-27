import { notFound } from "next/navigation";
import { ProjectDetailClient } from "@/components/projects/ProjectDetailClient";

interface ProjectDetailPageProps {
  params: Promise<{ slug: string }>;
}

// Generate metadata for each project
export async function generateMetadata({ params }: ProjectDetailPageProps) {
  const { slug } = await params;

  // Format slug to title
  const title = slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return {
    title: `${title} | Carlos Reyes Photography`,
    description: `View the ${title} photography project by Carlos Reyes.`,
  };
}

export default async function ProjectDetailPage({
  params,
}: ProjectDetailPageProps) {
  const { slug } = await params;

  if (!slug) {
    notFound();
  }

  return <ProjectDetailClient slug={slug} />;
}
