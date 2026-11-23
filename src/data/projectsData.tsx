export interface Project {
  id: number;
  slug: string;
  title: string;
  category: "Residential" | "Commercial" | "Office" | "Renovation";
  location: string;
  year: string;
  image: string;
  description: string;
  area: string;
  featured?: boolean;
  style: string;
}

export const projectCategories = [
  "All Projects",
  "Residential",
  "Commercial",
  "Office",
  "Renovation",
];

export const projects: Project[] = [
  {
    id: 1,
    slug: "the-courtyard-residence",
    title: "The Courtyard Residence",
    category: "Residential",
    location: "Bhubaneswar, Odisha",
    year: "2026",
    image: "/images/project-01.png",
    description:
      "A contemporary residence that brings natural materials, open spaces, and thoughtful detailing together.",
    area: "3,200 sq. ft.",
    featured: true,
    style: "Contemporary",
  },
  {
    id: 2,
    slug: "serene-living-apartment",
    title: "Serene Living Apartment",
    category: "Residential",
    location: "Cuttack, Odisha",
    year: "2026",
    image: "/images/project-02.png",
    description:
      "A warm and inviting apartment designed around comfort, simplicity, and everyday functionality.",
    area: "1,850 sq. ft.",
    style: "Modern Minimal",
  },
  {
    id: 3,
    slug: "the-urban-workspace",
    title: "The Urban Workspace",
    category: "Office",
    location: "Bhubaneswar, Odisha",
    year: "2025",
    image: "/images/project-03.png",
    description:
      "A collaborative office environment combining contemporary aesthetics with purposeful work zones.",
    area: "4,500 sq. ft.",
    style: "Contemporary",
  },
  {
    id: 4,
    slug: "the-artisan-cafe",
    title: "The Artisan Café",
    category: "Commercial",
    location: "Puri, Odisha",
    year: "2025",
    image: "/images/project-04.png",
    description:
      "A hospitality space with warm textures, distinctive furniture, and an inviting atmosphere.",
    area: "2,100 sq. ft.",
    style: "Modern Rustic",
  },
  {
    id: 5,
    slug: "the-modern-villa",
    title: "The Modern Villa",
    category: "Residential",
    location: "Bhubaneswar, Odisha",
    year: "2025",
    image: "/images/project-05.png",
    description:
      "A sophisticated family home balancing architectural character with refined interior detailing.",
    area: "5,000 sq. ft.",
    style: "Modern Luxury",
  },
  {
    id: 6,
    slug: "heritage-reimagined",
    title: "Heritage Reimagined",
    category: "Renovation",
    location: "Puri, Odisha",
    year: "2025",
    image: "/images/project-06.png",
    description:
      "A thoughtful transformation that preserves existing character while introducing modern comfort.",
    area: "2,700 sq. ft.",
    style: "Contemporary Heritage",
  },
  {
    id: 7,
    slug: "the-pavilion-office",
    title: "The Pavilion Office",
    category: "Office",
    location: "Bhubaneswar, Odisha",
    year: "2024",
    image: "/images/project-07.png",
    description:
      "A refined professional environment with a focus on natural light, circulation, and materiality.",
    area: "3,800 sq. ft.",
    style: "Minimal Contemporary",
  },
  {
    id: 8,
    slug: "the-white-house",
    title: "The White House",
    category: "Residential",
    location: "Cuttack, Odisha",
    year: "2024",
    image: "/images/project-08.png",
    description:
      "A light-filled home with understated elegance, balanced proportions, and carefully selected finishes.",
    area: "2,400 sq. ft.",
    style: "Modern Minimal",
  },
];

export const getProjectBySlug = (slug: string) =>
  projects.find((project) => project.slug === slug);
