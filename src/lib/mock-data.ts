// Mock data for development - will be replaced with Google Drive API data

export interface FeaturedImage {
  id: string;
  url: string;
  alt: string;
  aspectRatio: "portrait" | "landscape" | "square" | "tall";
}

export interface Project {
  slug: string;
  title: string;
  date: string;
  coverUrl: string;
  bannerUrl: string;
  category: string;
  images: ProjectImage[];
}

export interface ProjectImage {
  id: string;
  url: string;
  thumbUrl: string;
  name: string;
}

// High-quality Unsplash images for realistic mockups
export const heroImages: FeaturedImage[] = [
  { id: "h1", url: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=600&fit=crop", alt: "Portrait 1", aspectRatio: "portrait" },
  { id: "h2", url: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop", alt: "Portrait 2", aspectRatio: "square" },
  { id: "h3", url: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&h=600&fit=crop", alt: "Portrait 3", aspectRatio: "portrait" },
  { id: "h4", url: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=600&h=400&fit=crop", alt: "Portrait 4", aspectRatio: "landscape" },
  { id: "h5", url: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&h=700&fit=crop", alt: "Portrait 5", aspectRatio: "tall" },
  { id: "h6", url: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=600&fit=crop", alt: "Portrait 6", aspectRatio: "portrait" },
  { id: "h7", url: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop", alt: "Portrait 7", aspectRatio: "square" },
  { id: "h8", url: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400&h=600&fit=crop", alt: "Portrait 8", aspectRatio: "portrait" },
  { id: "h9", url: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=600&h=400&fit=crop", alt: "Portrait 9", aspectRatio: "landscape" },
  { id: "h10", url: "https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?w=400&h=700&fit=crop", alt: "Portrait 10", aspectRatio: "tall" },
  { id: "h11", url: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=400&h=600&fit=crop", alt: "Portrait 11", aspectRatio: "portrait" },
  { id: "h12", url: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop", alt: "Portrait 12", aspectRatio: "square" },
  { id: "h13", url: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=400&h=600&fit=crop", alt: "Portrait 13", aspectRatio: "portrait" },
  { id: "h14", url: "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=600&h=400&fit=crop", alt: "Portrait 14", aspectRatio: "landscape" },
  { id: "h15", url: "https://images.unsplash.com/photo-1504257432389-52343af06ae3?w=400&h=700&fit=crop", alt: "Portrait 15", aspectRatio: "tall" },
  { id: "h16", url: "https://images.unsplash.com/photo-1521119989659-a83eee488004?w=400&h=600&fit=crop", alt: "Portrait 16", aspectRatio: "portrait" },
  { id: "h17", url: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop", alt: "Portrait 17", aspectRatio: "square" },
  { id: "h18", url: "https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?w=400&h=600&fit=crop", alt: "Portrait 18", aspectRatio: "portrait" },
  { id: "h19", url: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=600&h=400&fit=crop", alt: "Portrait 19", aspectRatio: "landscape" },
  { id: "h20", url: "https://images.unsplash.com/photo-1517365830460-955ce3ccd263?w=400&h=700&fit=crop", alt: "Portrait 20", aspectRatio: "tall" },
];

export const featuredImages: FeaturedImage[] = [
  { id: "f1", url: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=600&h=900&fit=crop", alt: "Fashion portrait", aspectRatio: "tall" },
  { id: "f2", url: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&h=800&fit=crop", alt: "Editorial shot", aspectRatio: "portrait" },
  { id: "f3", url: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=800&h=600&fit=crop", alt: "Lifestyle", aspectRatio: "landscape" },
  { id: "f4", url: "https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?w=600&h=1000&fit=crop", alt: "Portrait study", aspectRatio: "tall" },
  { id: "f5", url: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&h=750&fit=crop", alt: "Beauty shot", aspectRatio: "portrait" },
  { id: "f6", url: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=600&fit=crop", alt: "Character portrait", aspectRatio: "square" },
  { id: "f7", url: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=600&h=900&fit=crop", alt: "Natural light", aspectRatio: "tall" },
  { id: "f8", url: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=600&h=800&fit=crop", alt: "Studio portrait", aspectRatio: "portrait" },
  { id: "f9", url: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&h=600&fit=crop", alt: "Environmental", aspectRatio: "landscape" },
  { id: "f10", url: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600&h=1000&fit=crop", alt: "Male portrait", aspectRatio: "tall" },
  { id: "f11", url: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=600&h=750&fit=crop", alt: "Street style", aspectRatio: "portrait" },
  { id: "f12", url: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=600&h=600&fit=crop", alt: "Artistic shot", aspectRatio: "square" },
  { id: "f13", url: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=600&h=900&fit=crop", alt: "Candid moment", aspectRatio: "tall" },
  { id: "f14", url: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&h=800&fit=crop", alt: "Professional headshot", aspectRatio: "portrait" },
  { id: "f15", url: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=800&h=600&fit=crop", alt: "Creative portrait", aspectRatio: "landscape" },
  { id: "f16", url: "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=600&h=1000&fit=crop", alt: "Dramatic lighting", aspectRatio: "tall" },
  { id: "f17", url: "https://images.unsplash.com/photo-1504257432389-52343af06ae3?w=600&h=750&fit=crop", alt: "Casual portrait", aspectRatio: "portrait" },
  { id: "f18", url: "https://images.unsplash.com/photo-1521119989659-a83eee488004?w=600&h=600&fit=crop", alt: "Intimate shot", aspectRatio: "square" },
  { id: "f19", url: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&h=900&fit=crop", alt: "Portrait classic", aspectRatio: "tall" },
  { id: "f20", url: "https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?w=600&h=800&fit=crop", alt: "Editorial beauty", aspectRatio: "portrait" },
];

// Helper to generate project images
const generateProjectImages = (basePhotos: string[], projectSlug: string): ProjectImage[] => {
  return basePhotos.map((photo, index) => ({
    id: `${projectSlug}-${index + 1}`,
    url: `https://images.unsplash.com/${photo}?w=800&h=1000&fit=crop`,
    thumbUrl: `https://images.unsplash.com/${photo}?w=400&h=500&fit=crop`,
    name: `${String(index + 1).padStart(3, "0")}_image.jpg`,
  }));
};

export const mockProjects: Project[] = [
  {
    slug: "nina-sky",
    title: "Nina Sky",
    date: "2019-09-01",
    coverUrl: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=600&h=800&fit=crop",
    bannerUrl: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=1600&h=600&fit=crop",
    category: "People",
    images: generateProjectImages([
      "photo-1516450360452-9312f5e86fc7",
      "photo-1493225457124-a3eb161ffa5f",
      "photo-1501386761578-eac5c94b800a",
      "photo-1470225620780-dba8ba36b745",
      "photo-1514525253161-7a46d19cd819",
      "photo-1429962714451-bb934ecdc4ec",
      "photo-1506157786151-b8491531f063",
      "photo-1524368535928-5b5e00ddc76b",
    ], "nina-sky"),
  },
  {
    slug: "new-orleans",
    title: "New Orleans",
    date: "2019-02-15",
    coverUrl: "https://images.unsplash.com/photo-1568454537842-d933259bb258?w=600&h=800&fit=crop",
    bannerUrl: "https://images.unsplash.com/photo-1571893544028-06b07af6dade?w=1600&h=600&fit=crop",
    category: "Travel",
    images: generateProjectImages([
      "photo-1568454537842-d933259bb258",
      "photo-1571893544028-06b07af6dade",
      "photo-1565299624946-b28f40a0ae38",
      "photo-1555992336-03a23c7b20ee",
      "photo-1541888946425-d81bb19240f5",
      "photo-1558618666-fcd25c85cd64",
      "photo-1569880153113-76e33fc52d5f",
      "photo-1560813962-ff3d8fcf59ba",
      "photo-1580489944761-15a19d654956",
    ], "new-orleans"),
  },
  {
    slug: "jeremy-jessica",
    title: "Jeremy + Jessica",
    date: "2019-01-20",
    coverUrl: "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&h=800&fit=crop",
    bannerUrl: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=1600&h=600&fit=crop",
    category: "Weddings",
    images: generateProjectImages([
      "photo-1519741497674-611481863552",
      "photo-1511285560929-80b456fea0bc",
      "photo-1522673607200-164d1b6ce486",
      "photo-1537633552985-df8429e8048b",
      "photo-1532712938310-34cb3982ef74",
      "photo-1519225421980-715cb0215aed",
      "photo-1507003211169-0a1dd7228f2d",
      "photo-1529636798458-92182e662485",
      "photo-1544078751-58fee2d8a03b",
      "photo-1591604466107-ec97de577aff",
    ], "jeremy-jessica"),
  },
  {
    slug: "urban-stories",
    title: "Urban Stories",
    date: "2019-01-10",
    coverUrl: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=600&h=800&fit=crop",
    bannerUrl: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=1600&h=600&fit=crop",
    category: "Urban & Street",
    images: generateProjectImages([
      "photo-1449824913935-59a10b8d2000",
      "photo-1480714378408-67cf0d13bc1b",
      "photo-1477959858617-67f85cf4f1df",
      "photo-1514565131-fce0801e5785",
      "photo-1519501025264-65ba15a82390",
      "photo-1486325212027-8081e485255e",
      "photo-1444723121867-7a241cacace9",
      "photo-1460472178825-e5240623afd5",
    ], "urban-stories"),
  },
  {
    slug: "flower-decor",
    title: "Flower Decor",
    date: "2019-08-05",
    coverUrl: "https://images.unsplash.com/photo-1487530811176-3780de880c2d?w=600&h=800&fit=crop",
    bannerUrl: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=1600&h=600&fit=crop",
    category: "People",
    images: generateProjectImages([
      "photo-1487530811176-3780de880c2d",
      "photo-1490750967868-88aa4486c946",
      "photo-1518882605630-8eb revealing-7bb",
      "photo-1455659817273-f96807779a8a",
      "photo-1508610048659-a06b669e3321",
      "photo-1469259943454-aa100abba749",
      "photo-1518882605630-8eb1d01213e4",
    ], "flower-decor"),
  },
  {
    slug: "close-up-series",
    title: "Close Up",
    date: "2019-07-12",
    coverUrl: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=600&h=800&fit=crop",
    bannerUrl: "https://images.unsplash.com/photo-1526510747491-58f928ec870f?w=1600&h=600&fit=crop",
    category: "People",
    images: generateProjectImages([
      "photo-1531746020798-e6953c6e8e04",
      "photo-1526510747491-58f928ec870f",
      "photo-1502823403499-6ccfcf4fb453",
      "photo-1517841905240-472988babdf9",
      "photo-1524504388940-b1c1722653e1",
      "photo-1544005313-94ddf0286df2",
      "photo-1534528741775-53994a69daeb",
      "photo-1494790108377-be9c29b29330",
      "photo-1529626455594-4ff0802cfb7e",
    ], "close-up-series"),
  },
  {
    slug: "couple-portraits",
    title: "Couple Portraits",
    date: "2019-06-18",
    coverUrl: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=600&h=800&fit=crop",
    bannerUrl: "https://images.unsplash.com/photo-1516589091380-5d8e87df6999?w=1600&h=600&fit=crop",
    category: "People",
    images: generateProjectImages([
      "photo-1522673607200-164d1b6ce486",
      "photo-1516589091380-5d8e87df6999",
      "photo-1529636798458-92182e662485",
      "photo-1519741497674-611481863552",
      "photo-1518049362265-d5b2a6467c5f",
      "photo-1519225421980-715cb0215aed",
      "photo-1507003211169-0a1dd7228f2d",
    ], "couple-portraits"),
  },
  {
    slug: "birthday-celebration",
    title: "Birthday",
    date: "2019-05-25",
    coverUrl: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=600&h=800&fit=crop",
    bannerUrl: "https://images.unsplash.com/photo-1464349153735-7db50ed83c84?w=1600&h=600&fit=crop",
    category: "People",
    images: generateProjectImages([
      "photo-1530103862676-de8c9debad1d",
      "photo-1464349153735-7db50ed83c84",
      "photo-1513151233558-d860c5398176",
      "photo-1504196606672-aef5c9cefc92",
      "photo-1527529482837-4698179dc6ce",
      "photo-1558636508-e0db3814bd1d",
      "photo-1485872299829-c673f5194813",
      "photo-1519671482749-fd09be7ccebf",
    ], "birthday-celebration"),
  },
];

// Helper function to get a project by slug
export function getProjectBySlug(slug: string): Project | undefined {
  return mockProjects.find((project) => project.slug === slug);
}
