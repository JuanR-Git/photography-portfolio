import { NextResponse } from "next/server";
import { getProjects } from "@/lib/google-drive";

export const dynamic = "force-dynamic";
export const revalidate = 60; // Revalidate every 60 seconds

export async function GET() {
  try {
    const projects = await getProjects();

    // Return projects without internal folderId
    const publicProjects = projects.map(({ folderId, ...rest }) => rest);

    return NextResponse.json(publicProjects, {
      headers: {
        "Cache-Control": "public, s-maxage=60, stale-while-revalidate=120",
      },
    });
  } catch (error) {
    console.error("Error fetching projects:", error);
    return NextResponse.json(
      { error: "Failed to fetch projects" },
      { status: 500 }
    );
  }
}
