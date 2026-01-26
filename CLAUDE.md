# Claude Project Memory — Photography Portfolio

This file defines the permanent rules, context, and constraints for this project.
All development must follow this document unless explicitly overridden.

---

## 1. Project Summary

This project is a public photography portfolio built with:

- React
- TypeScript
- Next.js (App Router)
- Tailwind CSS
- TanStack Query

Content is synchronized from a private Google Drive folder using a Service Account.

Clients upload images via Google Drive.
The website automatically reflects changes.

Primary routes:

- /projects
- /projects/[slug]
- /about
- /hire (future)

---

## 2. Storage & Data Source Rules

### Google Drive Integration

- Use Service Account authentication only.
- Never require end-user OAuth.
- Never expose Drive credentials.
- Never expose raw Drive URLs publicly.

### Folder Structure

Parent Folder:
Photography Site Albums/

Album Folder Format:
YYYY-MM-DD__Project-Title

Example:
2026-01-25__Winter-Portraits

Slug:
Derived from Project-Title (lowercase, dash-separated).

### File Rules

Allowed:
- JPG
- PNG

Disallowed:
- RAW
- HEIC
- Unsupported formats

Ordering:
001__filename.jpg

Cover:
__cover.jpg (optional)

If missing, use first sorted image.

### Videos (V2)

- MP4/MOV
- Separate display section
- Not mixed into main grid

---

## 3. API & Backend Rules

### Required API Routes

- GET /api/projects
- GET /api/projects/[slug]
- GET /api/media/[id]

All Drive access must occur server-side.

Media must be proxied via /api/media.

Do not expose Drive IDs directly to clients unless proxied.

---

## 4. Frontend Architecture

### Routing

Use Next.js App Router.

Primary pages:

- /projects → album grid
- /projects/[slug] → gallery
- /about
- /hire (future)

### Layout

Global layout must include:

- Navbar
- Footer
- QueryClientProvider

---

## 5. Gallery Display Rules

### Featured Sections (Home)

- Use CSS columns
- Preserve natural aspect ratio
- No forced cropping

### Project Gallery (/projects/[slug])

- Uniform grid
- Fixed portrait aspect ratio
- object-fit: cover
- Cropping allowed

### Modal Viewer

Must support:

- Left/right arrows
- Swipe gestures (mobile)
- ESC close
- Keyboard navigation
- Circular navigation

---

## 6. Data Fetching Rules

Use TanStack Query.

Required hooks:

- useProjects()
- useProject(slug)

Defaults:

- staleTime: 60–120s
- cacheTime: ≥ 5 min
- refetchOnWindowFocus: false

Manual refresh must invalidate queries.

---

## 7. Security Constraints

- No secrets in repository.
- All credentials via environment variables.
- No public Drive sharing required.
- No client-side Drive SDK usage.
- No right-click download features.

---

## 8. Coding Standards

- Strict TypeScript
- ESLint + Prettier
- Modular components
- Typed API responses
- No `any` unless justified
- Avoid large monolithic files

---

## 9. Repository Etiquette

### Branching

- One branch per feature
- No direct pushes to main
- Use PRs for major changes

### Naming

feature/<name>  
fix/<name>  
refactor/<name>

### Commits

Use clear messages:

feat: add gallery modal  
fix: handle empty album  
refactor: split api layer

---

## 10. Documentation Rules

Maintain:

- claude-docs/architecture.md
- claude-docs/changelog.md
- claude-docs/status.md
- claude-docs/frontend.md

Update docs after:

- New major feature
- Architectural change
- API change

---

## 11. Development Workflow

### Plan First

For non-trivial tasks:

1. Use plan mode
2. List assumptions
3. Ask clarifying questions
4. Propose steps
5. Wait for approval

### Feature Workflow

Research → Plan → Implement → Test

### Issue Workflow

Use GitHub issues as source of truth.

### Multi-Agent Workflow

Use git worktrees for parallel features.

---

## 12. Regression Prevention

When recurring mistakes occur:

- Add explicit rule here
- Update documentation
- Add tests if possible

---

## 13. Performance Rules

- Use Next/Image
- Lazy load galleries
- Avoid unnecessary re-renders
- Cache aggressively

---

## 14. Quality Bar

Before marking a task complete:

- TypeScript passes
- Lint passes
- Build succeeds
- UI tested on mobile + desktop
- No Drive permission leaks
- No broken routes

---

## 15. Prohibited Actions

Do NOT:

- Hardcode credentials
- Bypass API layer
- Fetch Drive from client
- Mix videos into image grid
- Change folder conventions
- Remove proxy layer
- Push directly to main

---

End of Project Memory
