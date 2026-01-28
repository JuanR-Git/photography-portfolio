import { google } from "googleapis";
import { Readable } from "stream";

// Types
export interface DriveProject {
  slug: string;
  title: string;
  date: string;
  coverUrl: string;
  folderId: string;
  updatedTime: string;
}

export interface DriveImage {
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
  images: DriveImage[];
  videos: string[];
}

// Initialize Google Drive client with service account
function getDriveClient() {
  const privateKey = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n");
  const clientEmail = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;

  if (!privateKey || !clientEmail) {
    throw new Error("Missing Google Drive credentials in environment variables");
  }

  const auth = new google.auth.JWT({
    email: clientEmail,
    key: privateKey,
    scopes: ["https://www.googleapis.com/auth/drive.readonly"],
  });

  return google.drive({ version: "v3", auth });
}

// Parse folder name: YYYY-MM-DD__Project-Title
function parseFolderName(name: string): { date: string; title: string; slug: string } | null {
  const match = name.match(/^(\d{4}-\d{2}-\d{2})__(.+)$/);
  if (!match) return null;

  const [, date, title] = match;
  const slug = title.toLowerCase().replace(/\s+/g, "-");

  return {
    date,
    title: title.replace(/-/g, " "),
    slug,
  };
}

// Parse file name for ordering: 001__filename.jpg
function parseFileName(name: string): { order: number; baseName: string } {
  const match = name.match(/^(\d+)__(.+)$/);
  if (match) {
    return {
      order: parseInt(match[1], 10),
      baseName: match[2],
    };
  }
  return {
    order: 999999,
    baseName: name,
  };
}

// Get all project folders from the parent folder
export async function getProjects(): Promise<DriveProject[]> {
  const drive = getDriveClient();
  const parentFolderId = process.env.GOOGLE_DRIVE_PARENT_FOLDER_ID;

  if (!parentFolderId) {
    throw new Error("Missing GOOGLE_DRIVE_PARENT_FOLDER_ID environment variable");
  }

  const response = await drive.files.list({
    q: `'${parentFolderId}' in parents and mimeType = 'application/vnd.google-apps.folder' and trashed = false`,
    fields: "files(id, name, modifiedTime)",
    orderBy: "name desc",
  });

  const folders = response.data.files || [];
  const projects: DriveProject[] = [];

  for (const folder of folders) {
    if (!folder.name || !folder.id) continue;

    const parsed = parseFolderName(folder.name);
    if (!parsed) continue;

    // Get cover image for this project
    const coverUrl = await getProjectCover(folder.id);

    projects.push({
      slug: parsed.slug,
      title: parsed.title,
      date: parsed.date,
      coverUrl,
      folderId: folder.id,
      updatedTime: folder.modifiedTime || new Date().toISOString(),
    });
  }

  return projects;
}

// Get cover image for a project folder
async function getProjectCover(folderId: string): Promise<string> {
  const drive = getDriveClient();

  // First, look for __cover.jpg
  const coverResponse = await drive.files.list({
    q: `'${folderId}' in parents and name = '__cover.jpg' and trashed = false`,
    fields: "files(id)",
  });

  if (coverResponse.data.files && coverResponse.data.files.length > 0) {
    const coverId = coverResponse.data.files[0].id;
    return `/api/media/${coverId}`;
  }

  // Otherwise, get first image sorted by name
  const imagesResponse = await drive.files.list({
    q: `'${folderId}' in parents and (mimeType = 'image/jpeg' or mimeType = 'image/png') and trashed = false`,
    fields: "files(id, name)",
    orderBy: "name",
    pageSize: 1,
  });

  if (imagesResponse.data.files && imagesResponse.data.files.length > 0) {
    const firstImageId = imagesResponse.data.files[0].id;
    return `/api/media/${firstImageId}`;
  }

  // No images found, return placeholder
  return "/placeholder-cover.jpg";
}

// Get project by slug
export async function getProjectBySlug(slug: string): Promise<ProjectDetail | null> {
  const projects = await getProjects();
  const project = projects.find((p) => p.slug === slug);

  if (!project) return null;

  const drive = getDriveClient();

  // Get all images in the folder
  const imagesResponse = await drive.files.list({
    q: `'${project.folderId}' in parents and (mimeType = 'image/jpeg' or mimeType = 'image/png') and trashed = false`,
    fields: "files(id, name, mimeType)",
    orderBy: "name",
  });

  const files = imagesResponse.data.files || [];

  // Filter out cover image and sort by order prefix
  const images: DriveImage[] = files
    .filter((file) => file.name !== "__cover.jpg")
    .map((file) => {
      const parsed = parseFileName(file.name || "");
      return {
        id: file.id!,
        name: parsed.baseName,
        url: `/api/media/${file.id}`,
        thumbUrl: `/api/media/${file.id}?thumb=true`,
        order: parsed.order,
      };
    })
    .sort((a, b) => a.order - b.order)
    .map(({ order, ...rest }) => rest);

  // Get banner image (use cover or first image)
  let bannerUrl = project.coverUrl;
  if (bannerUrl === "/placeholder-cover.jpg" && images.length > 0) {
    bannerUrl = images[0].url;
  }

  return {
    slug: project.slug,
    title: project.title,
    date: project.date,
    bannerUrl,
    images,
    videos: [], // V2 feature
  };
}

// Stream media file from Google Drive
export async function getMediaStream(
  fileId: string,
  thumbnail: boolean = false
): Promise<{ stream: Readable; mimeType: string; size: number }> {
  const drive = getDriveClient();

  // Get file metadata
  const metadata = await drive.files.get({
    fileId,
    fields: "mimeType, size, name",
  });

  const mimeType = metadata.data.mimeType || "application/octet-stream";
  const size = parseInt(metadata.data.size || "0", 10);

  // Get file content
  const response = await drive.files.get(
    {
      fileId,
      alt: "media",
    },
    {
      responseType: "stream",
    }
  );

  return {
    stream: response.data as Readable,
    mimeType,
    size,
  };
}

// Check if a file exists and is accessible
export async function checkFileAccess(fileId: string): Promise<boolean> {
  try {
    const drive = getDriveClient();
    await drive.files.get({
      fileId,
      fields: "id",
    });
    return true;
  } catch {
    return false;
  }
}
