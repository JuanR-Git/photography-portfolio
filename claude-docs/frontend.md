## Implementation Design Decisions

Finalized: 2026-01-27 (Major Redesign)

### Site Purpose
Commercial service-selling site for photography services. Portfolio is supporting content for credibility.

### Visual System

**Aesthetic**: Bold & Confident + Warm & Approachable

**Typography**
- Headings: Playfair Display (bold, commanding serif)
- Body/UI: DM Sans (clean, legible)

**Color Palette**
- Light Background: #FDFCFA (warm off-white)
- Dark Sections: #1e2a3a (deep navy)
- Foreground (on light): #1a1a2e (warm charcoal)
- Foreground (on dark): #FDFCFA (warm off-white)
- Muted Text: #6b7280 (warm gray)
- Accent: #c9a86c (warm gold for CTAs, links, highlights)
- Border: #e5e2dd (warm subtle dividers)

### Page Structures

#### Home Page
1. Hero - Deep navy, crossfading full-bleed images, dot indicators, centered card with CTA
2. Services - 4 alternating cards (Retail, Marketing/Social Media, Headshots, Events)
3. Testimonials - Deep navy background, 2x2 review grid
4. Featured Portfolio - Light background, masonry grid

#### Projects Page
- Filters: All, Retail, Marketing/Social Media, Headshots, Events
- URL query param support for deep linking
- Gold accent for active filter

#### About Page
1. Bio with portrait
2. Camera gear
3. Education & Experience (two columns)
4. Personal Hobbies ("Beyond the Lens")

#### Hire Page
1. Contact Form (First Name, Last Name, Email, Website/Social, Photography needs)
2. FAQ Accordion

### Component Specifications

**Hero Section**
- 100vh height, deep navy background
- Single image displayed, crossfade transition (1s duration)
- Auto-advance every 5-6 seconds
- Dot indicators at bottom (clickable, gold for active)
- Centered frosted glass card
- "View Services" CTA button scrolls to Services

**Services Section**
- 4 horizontal cards stacked vertically
- Alternating: odd cards (navy bg, image left), even cards (light bg, image right)
- Image side ~40%, clickable opens modal with 4-5 sample images
- Content side ~60%: title, description, "View Projects →" link
- Links navigate to /projects?filter=[category]

**Testimonials**
- Deep navy background
- 2x2 grid of cards with warm white background
- Keep existing review content

**Contact Form**
- Light background
- Fields: First Name*, Last Name*, Email*, Website/Social, Photography needs*
- Gold submit button "Send Message"
- Clean, spacious design

### Animations
- Crossfade for hero images (1s)
- Scroll fade-in for sections (400ms)
- Image hover zoom (scale 1.05)
- Modal transitions (200ms)

### Responsive Strategy
- Mobile: Single column, hamburger nav
- Tablet: Adjusted layouts
- Desktop: Full layouts as designed

---

## Wireframes (Reference Only - Outdated)

See docs/plans/2026-01-27-major-redesign.md for current design specifications.
