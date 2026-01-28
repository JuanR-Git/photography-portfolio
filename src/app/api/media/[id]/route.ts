import { NextRequest, NextResponse } from "next/server";
import { getMediaStream, checkFileAccess } from "@/lib/google-drive";

export const dynamic = "force-dynamic";

interface RouteParams {
  params: Promise<{ id: string }>;
}

export async function GET(request: NextRequest, { params }: RouteParams) {
  try {
    const { id } = await params;
    const { searchParams } = new URL(request.url);
    const isThumbnail = searchParams.get("thumb") === "true";

    // Verify file access
    const hasAccess = await checkFileAccess(id);
    if (!hasAccess) {
      return NextResponse.json(
        { error: "Media not found" },
        { status: 404 }
      );
    }

    // Get the media stream
    const { stream, mimeType, size } = await getMediaStream(id, isThumbnail);

    // Convert Node.js Readable stream to Web ReadableStream
    const webStream = new ReadableStream({
      async start(controller) {
        for await (const chunk of stream) {
          controller.enqueue(chunk);
        }
        controller.close();
      },
    });

    // Return the stream with appropriate headers
    return new NextResponse(webStream, {
      headers: {
        "Content-Type": mimeType,
        "Content-Length": size.toString(),
        "Cache-Control": "public, max-age=31536000, immutable",
        "X-Content-Type-Options": "nosniff",
      },
    });
  } catch (error) {
    console.error("Error streaming media:", error);
    return NextResponse.json(
      { error: "Failed to stream media" },
      { status: 500 }
    );
  }
}
