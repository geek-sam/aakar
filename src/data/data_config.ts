interface HeroSlide {
  id: number;
  eyebrow: string;
  title: string[];
  accent: string;
  description: string;
  image: string;
  projectImage: string;
  projectTitle: string;
  projectDescription: string;
  projectLink: string;
}

export const slides: HeroSlide[] = [
  {
    id: 1,
    eyebrow: "FAST AND RELIABLE",
    title: ["The Art of", "Design"],
    accent: "Stunning Interior",
    description:
      "Whether it’s your home, office, or a commercial project, we are always dedicated to bringing your vision to life.",
    image: "/images/hero/hero-1.jpg",
    projectImage: "/images/project-01.png",
    projectTitle: "Project Excellence",
    projectDescription:
      "We create timeless and sustainable architectural designs",
    projectLink: "/projects/earth-and-essence",
  },
  {
    id: 2,
    eyebrow: "THOUGHTFUL BY DESIGN",
    title: ["Beyond", "Ordinary"],
    accent: "Beautiful Spaces",
    description:
      "Every corner tells a story. We transform everyday spaces into meaningful living experiences.",
    image: "/images/hero/hero-2.jpg",
    projectImage: "/images/project-02.png",
    projectTitle: "Modern Living",
    projectDescription:
      "A thoughtful balance of contemporary design and timeless materials.",
    projectLink: "/projects/the-modern-residence",
  },
  {
    id: 3,
    eyebrow: "CRAFTED WITH PURPOSE",
    title: ["Inspired by", "Tradition"],
    accent: "Made for Living",
    description:
      "Bringing together Indian craftsmanship, natural textures, and modern architectural expression.",
    image: "/images/hero/hero-3.jpg",
    projectImage: "/images/project-03.png",
    projectTitle: "The Quiet Retreat",
    projectDescription:
      "A serene residential experience inspired by natural elements.",
    projectLink: "/projects/the-quiet-retreat",
  },
];


interface ProcessStep {
  number: string;
  title: string;
  description: string;
  image: string;
}

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Discovery & Consultation",
    description:
      "We begin by understanding your vision, lifestyle, preferences, space requirements, and budget to establish a clear project direction.",
    image: "/images/process-consultation.jpg",
  },
  {
    number: "02",
    title: "Concept & Planning",
    description:
      "Our team develops creative concepts, space layouts, moodboards, and material selections that bring your ideas into focus.",
    image: "/images/process-planning.png",
  },
  {
    number: "03",
    title: "Design & Development",
    description:
      "We refine every detail through 3D visualizations, technical drawings, finishes, and carefully coordinated design specifications.",
    image: "/images/process-development.jpg",
  },
  {
    number: "04",
    title: "Execution & Handover",
    description:
      "From site coordination to final styling, we bring the design to life and ensure every detail meets the intended vision.",
    image: "/images/about-detail.png",
  },
];

interface Project {
  id: number;
  slug: string;
  title: string;
  category: string;
  location: string;
  year: string;
  image: string;
}

export const projects: Project[] = [
  {
    id: 1,
    slug: "industrial-elegance-condo",
    title: "Industrial Elegance Condo",
    category: "Residential",
    location: "Bhubaneswar, India",
    year: "2026",
    image: "/images/project-01.png",
  },
  {
    id: 2,
    slug: "serene-space-studio",
    title: "Serene Space Studio",
    category: "Residential",
    location: "Cuttack, India",
    year: "2026",
    image: "/images/project-02.png",
  },
  {
    id: 3,
    slug: "urban-zen-apartment",
    title: "Urban Zen Apartment",
    category: "Landscape",
    location: "Puri, India",
    year: "2025",
    image: "/images/project-03.png",
  },
  {
    id: 4,
    slug: "art-deco-revival",
    title: "Art Deco Revival",
    category: "Single Home",
    location: "Bhubaneswar, India",
    year: "2025",
    image: "/images/project-04.png",
  },
  {
    id: 5,
    slug: "golden-ratio-residence",
    title: "Golden Ratio Residence",
    category: "Single Home",
    location: "Rourkela, India",
    year: "2025",
    image: "/images/project-05.png",
  },
  {
    id: 6,
    slug: "nordic-living",
    title: "Nordic Living",
    category: "Luxury Interior",
    location: "Bhubaneswar, India",
    year: "2025",
    image: "/images/project-06.png",
  },
];

interface Testimonial {
  id: number;
  name: string;
  role: string;
  review: string;
  rating: number;
  image: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Ananya Sharma",
    role: "Homeowner",
    rating: 5,
    review:
      "A wonderful experience! The team understood exactly what we envisioned and translated our ideas into a beautiful, functional living space. Their attention to detail and professionalism made the entire journey seamless.",
    image: "/images/client-01.png",
  },
  {
    id: 2,
    name: "Rahul Mehta",
    role: "Business Owner",
    rating: 5,
    review:
      "I absolutely love my new modern living room! The clean lines, natural tones, and thoughtful details create such a calming and stylish atmosphere. Highly recommend their interior design expertise.",
    image: "/images/client-02.png",
  },
  {
    id: 3,
    name: "Priya Das",
    role: "Homeowner",
    rating: 5,
    review:
      "From concept to reality, the team turned our vision into a stunning, livable space. I couldn't be happier with the result. Every corner feels intentional and beautifully designed.",
    image: "/images/client-03.png",
  },
  {
    id: 4,
    name: "Arjun Patnaik",
    role: "Entrepreneur",
    rating: 5,
    review:
      "A wonderful experience from beginning to end. The team was knowledgeable, creative, and incredibly attentive throughout the process. Our new space feels exactly like home.",
    image: "/images/client-04.png",
  },
  {
    id: 5,
    name: "Meera Mohanty",
    role: "Homeowner",
    rating: 5,
    review:
      "Their ability to combine beautiful aesthetics with everyday functionality impressed us. The materials, lighting, and furniture choices came together perfectly.",
    image: "/images/client-05.png",
  },
];