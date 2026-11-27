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
  // {
  //   id: 9,
  //   slug: "the-botanica-boutique",
  //   title: "The Botanica Boutique",
  //   category: "Commercial",
  //   location: "Bhubaneswar, Odisha",
  //   year: "2024",
  //   image: "/images/project-09.png",
  //   description:
  //     "A contemporary boutique interior inspired by organic forms, natural textures, and an immersive retail experience.",
  //   area: "1,600 sq. ft.",
  //   style: "Organic Contemporary",
  // },
  // {
  //   id: 10,
  //   slug: "the-nest-residence",
  //   title: "The Nest Residence",
  //   category: "Residential",
  //   location: "Rourkela, Odisha",
  //   year: "2024",
  //   image: "/images/project-10.png",
  //   description:
  //     "A thoughtfully planned family home that combines warm finishes, practical storage, and comfortable everyday spaces.",
  //   area: "2,900 sq. ft.",
  //   style: "Warm Contemporary",
  // },
];

export const getProjectBySlug = (slug: string) =>
  projects.find((project) => project.slug === slug);

export const getRelatedProjects = (
  currentProject: Project,
  limit = 3
) =>
  projects
    .filter(
      (project) =>
        project.slug !== currentProject.slug &&
        project.category === currentProject.category
    )
    .concat(
      projects.filter(
        (project) =>
          project.slug !== currentProject.slug &&
          project.category !== currentProject.category
      )
    )
    .slice(0, limit);



export interface ProjectDetail {
  overview: string;
  concept: string;
  approach: string;
  highlights: string[];
  gallery: string[];
}

export const projectDetails: Record<string, ProjectDetail> = {
  "the-courtyard-residence": {
    overview:
      "A contemporary residence that brings natural materials, open spaces, and thoughtful detailing together. The home is designed to create a seamless relationship between shared living areas and private spaces while maintaining a warm and welcoming atmosphere.",
    concept:
      "Inspired by the idea of bringing the outdoors into everyday living, the design explores natural textures, open spatial connections, and a restrained contemporary palette. The overall aesthetic balances architectural simplicity with warmth and character.",
    approach:
      "The planning focuses on openness, natural light, and comfortable circulation. Material selections, furniture arrangements, and lighting are carefully coordinated to create a cohesive interior that responds to the family's lifestyle.",
    highlights: [
      "Open and connected living spaces",
      "Natural materials and warm finishes",
      "Thoughtful indoor-outdoor relationship",
      "Integrated storage and functional detailing",
    ],
    gallery: [
      "/images/project-01-detail-01.jpg",
      "/images/project-01-detail-02.jpg",
      "/images/project-01-detail-03.jpg",
    ],
  },

  "serene-living-apartment": {
    overview:
      "A warm and inviting apartment designed around comfort, simplicity, and everyday functionality. The interior creates a calm residential environment through balanced proportions, soft finishes, and practical design solutions.",
    concept:
      "The concept revolves around creating a peaceful retreat within an urban setting. Modern minimalism, subtle textures, and a warm neutral palette come together to establish a relaxed and timeless visual identity.",
    approach:
      "The design prioritises efficient space utilisation without compromising comfort. Furniture, lighting, and storage are thoughtfully arranged to maintain visual openness while making everyday activities convenient.",
    highlights: [
      "Warm and understated colour palette",
      "Space-efficient furniture planning",
      "Minimal and functional interiors",
      "Layered lighting and subtle textures",
    ],
    gallery: [
      "/images/project-02-detail-01.jpg",
      "/images/project-02-detail-02.jpg",
      "/images/project-02-detail-03.jpg",
    ],
  },

  "the-urban-workspace": {
    overview:
      "A collaborative office environment combining contemporary aesthetics with purposeful work zones. The workspace is designed to support productivity, interaction, and employee comfort through a well-organised spatial layout.",
    concept:
      "The design explores the balance between professional identity and a welcoming workplace atmosphere. Clean architectural lines, contemporary materials, and carefully defined zones establish a cohesive environment.",
    approach:
      "The planning focuses on circulation, workstation organisation, and the relationship between individual and collaborative areas. Lighting, furniture, and material choices support the practical demands of a modern office.",
    highlights: [
      "Clearly defined work and collaboration zones",
      "Efficient circulation and spatial planning",
      "Contemporary material palette",
      "Functional lighting and workstation design",
    ],
    gallery: [
      "/images/project-03-detail-01.jpg",
      "/images/project-03-detail-02.jpg",
      "/images/project-03-detail-03.jpg",
    ],
  },

  "the-artisan-cafe": {
    overview:
      "A hospitality space with warm textures, distinctive furniture, and an inviting atmosphere. The café is designed to create a memorable experience through its spatial character, material choices, and comfortable seating arrangements.",
    concept:
      "Drawing inspiration from modern rustic design, the concept combines natural textures, earthy tones, and contemporary detailing. The intention is to create a relaxed setting with a distinctive identity.",
    approach:
      "The layout considers customer movement, seating variety, and the relationship between service areas and dining spaces. Lighting and material combinations help establish an intimate and welcoming environment.",
    highlights: [
      "Warm and textured interior finishes",
      "Distinctive furniture and seating",
      "Comfortable dining arrangements",
      "Atmospheric lighting and material detailing",
    ],
    gallery: [
      "/images/project-04-detail-01.jpg",
      "/images/project-04-detail-02.jpg",
      "/images/project-04-detail-03.jpg",
    ],
  },

  "the-modern-villa": {
    overview:
      "A sophisticated family home balancing architectural character with refined interior detailing. The residence combines generous spaces, carefully selected finishes, and functional design elements to create an elevated living experience.",
    concept:
      "The design explores modern luxury through material richness, elegant proportions, and a restrained yet expressive palette. Every space is intended to feel distinctive while maintaining a consistent design language throughout the home.",
    approach:
      "The project brings together spatial planning, custom furniture, lighting, and carefully selected materials. Particular attention is given to the relationship between formal living spaces and more intimate family areas.",
    highlights: [
      "Refined contemporary luxury aesthetic",
      "Premium materials and finishes",
      "Custom furniture and detailing",
      "Balanced public and private spaces",
    ],
    gallery: [
      "/images/project-05-detail-01.jpg",
      "/images/project-05-detail-02.jpg",
      "/images/project-05-detail-03.jpg",
    ],
  },

  "heritage-reimagined": {
    overview:
      "A thoughtful transformation that preserves existing character while introducing modern comfort. The renovation brings renewed functionality to the property while respecting its original architectural identity.",
    concept:
      "The concept centres on the dialogue between old and new. Existing character and architectural details are complemented by contemporary interventions, creating an interior that feels both familiar and refreshed.",
    approach:
      "The design begins with understanding the existing structure and identifying opportunities for improvement. Updated layouts, finishes, and functional elements are introduced while retaining selected features that contribute to the property's identity.",
    highlights: [
      "Preservation of existing character",
      "Updated finishes and materials",
      "Improved spatial functionality",
      "Contemporary details within a heritage setting",
    ],
    gallery: [
      "/images/project-06-detail-01.jpg",
      "/images/project-06-detail-02.jpg",
      "/images/project-06-detail-03.jpg",
    ],
  },

  "the-pavilion-office": {
    overview:
      "A refined professional environment with a focus on natural light, circulation, and materiality. The office is planned to create a comfortable and organised workplace while maintaining a clear and understated design identity.",
    concept:
      "Inspired by architectural simplicity, the design uses clean forms, balanced materials, and natural light to create a calm and productive atmosphere. The concept emphasises clarity, openness, and purposeful spatial organisation.",
    approach:
      "The layout is developed around efficient movement and well-defined work areas. Material selections and lighting are coordinated to maintain visual consistency while supporting different workplace activities.",
    highlights: [
      "Natural light and open spatial planning",
      "Minimal contemporary design language",
      "Efficient workstation organisation",
      "Balanced material and lighting choices",
    ],
    gallery: [
      "/images/project-07-detail-01.jpg",
      "/images/project-07-detail-02.jpg",
      "/images/project-07-detail-03.jpg",
    ],
  },

  "the-white-house": {
    overview:
      "A light-filled home with understated elegance, balanced proportions, and carefully selected finishes. The interior creates a calm and welcoming atmosphere through simplicity, natural light, and thoughtful detailing.",
    concept:
      "The design is guided by modern minimalism, using light tones, clean lines, and subtle contrasts. Rather than relying on excessive decoration, the interior allows proportions, materials, and light to define its character.",
    approach:
      "The project focuses on maintaining visual continuity between rooms while ensuring that every area serves its intended purpose. Furniture, storage, and finishes are selected to support a clutter-free and comfortable lifestyle.",
    highlights: [
      "Light-filled and open interiors",
      "Understated material combinations",
      "Clean lines and balanced proportions",
      "Functional storage and furniture planning",
    ],
    gallery: [
      "/images/project-08-detail-01.jpg",
      "/images/project-08-detail-02.jpg",
      "/images/project-08-detail-03.jpg",
    ],
  },

  // "the-botanica-boutique": {
  //   overview:
  //     "A contemporary boutique interior inspired by organic forms, natural textures, and an immersive retail experience. The space brings together product presentation and an inviting atmosphere through a thoughtful relationship between architecture and display.",
  //   concept:
  //     "The concept takes inspiration from nature, exploring organic shapes, tactile materials, and a subtle connection to greenery. The result is a retail environment that feels fresh, distinctive, and visually engaging.",
  //   approach:
  //     "The spatial layout is organised around customer movement, product visibility, and display hierarchy. Natural finishes, considered lighting, and carefully positioned fixtures help create a cohesive shopping experience.",
  //   highlights: [
  //     "Organic-inspired design elements",
  //     "Natural textures and material finishes",
  //     "Thoughtful product display arrangements",
  //     "Customer-focused retail circulation",
  //   ],
  //   gallery: [
  //     "/images/project-09-detail-01.jpg",
  //     "/images/project-09-detail-02.jpg",
  //     "/images/project-09-detail-03.jpg",
  //   ],
  // },

  // "the-nest-residence": {
  //   overview:
  //     "A thoughtfully planned family home that combines warm finishes, practical storage, and comfortable everyday spaces. The residence is designed to support the changing needs of family life while maintaining a welcoming contemporary character.",
  //   concept:
  //     "The concept explores the feeling of home through warmth, simplicity, and functional design. A contemporary palette, natural textures, and comfortable furnishings create an environment that feels relaxed and personal.",
  //   approach:
  //     "The planning focuses on everyday usability, practical storage, and comfortable connections between shared and private spaces. Each room is designed with its own purpose while maintaining a consistent visual language across the residence.",
  //   highlights: [
  //     "Family-focused spatial planning",
  //     "Warm contemporary material palette",
  //     "Practical integrated storage",
  //     "Comfortable and connected living spaces",
  //   ],
  //   gallery: [
  //     "/images/project-10-detail-01.jpg",
  //     "/images/project-10-detail-02.jpg",
  //     "/images/project-10-detail-03.jpg",
  //   ],
  // },
};


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

interface BlogPost {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    slug: "functional-interior-design-trends",
    title: "Functional Design Trends That Blend Style And Comfort",
    excerpt:
      "Discover how thoughtful furniture, intelligent layouts, and carefully selected materials can transform everyday spaces into beautiful living environments.",
    category: "Design Trends",
    author: "AAKAR Studio",
    date: "November 18, 2026",
    readTime: "5 min read",
    image: "/images/blog-01.png",
  },
  {
    id: 2,
    slug: "innovative-interior-ideas",
    title: "Innovative Interior Ideas To Refresh Your Living Space",
    excerpt:
      "Explore creative interior ideas, contemporary materials, and thoughtful details that bring a fresh perspective to your home.",
    category: "Interior Design",
    author: "AAKAR Studio",
    date: "November 12, 2026",
    readTime: "6 min read",
    image: "/images/blog-02.png",
  },
  {
    id: 3,
    slug: "modern-home-interior-design",
    title: "Transform Your Home With Modern Interior Design",
    excerpt:
      "From carefully selected furniture to beautiful lighting, discover the elements that create a harmonious and timeless home.",
    category: "Inspiration",
    author: "AAKAR Studio",
    date: "November 08, 2026",
    readTime: "4 min read",
    image: "/images/blog-03.png",
  },
  {
    id: 4,
    slug: "choosing-interior-materials",
    title: "A Guide To Choosing The Right Materials For Your Home",
    excerpt:
      "Understand how natural stone, wood, textures, and finishes influence the character and longevity of your interiors.",
    category: "Materials",
    author: "AAKAR Studio",
    date: "October 28, 2026",
    readTime: "7 min read",
    image: "/images/blog-04.png",
  },
  {
    id: 5,
    slug: "lighting-in-interior-design",
    title: "How Lighting Can Completely Transform Your Interiors",
    excerpt:
      "Learn how ambient lighting, accent lights, and natural illumination can create atmosphere and elevate architectural details.",
    category: "Lighting",
    author: "AAKAR Studio",
    date: "October 20, 2026",
    readTime: "5 min read",
    image: "/images/blog-05.png",
  },
  {
    id: 6,
    slug: "minimalist-interior-design",
    title: "The Beauty Of Minimalism: Less Clutter, More Character",
    excerpt:
      "Explore the principles of minimalist interiors and learn how simplicity can create more meaningful and functional spaces.",
    category: "Design Trends",
    author: "AAKAR Studio",
    date: "October 14, 2026",
    readTime: "6 min read",
    image: "/images/blog-06.png",
  },
  {
    id: 7,
    slug: "indian-interior-design",
    title: "Blending Traditional Indian Elements With Modern Living",
    excerpt:
      "Discover ways to incorporate Indian craftsmanship, cultural details, and contemporary aesthetics into modern homes.",
    category: "Inspiration",
    author: "AAKAR Studio",
    date: "October 08, 2026",
    readTime: "8 min read",
    image: "/images/blog-07.png",
  },
  {
    id: 8,
    slug: "small-space-design",
    title: "Smart Interior Solutions For Compact Urban Homes",
    excerpt:
      "Make every square foot count with multifunctional furniture, intelligent storage, and space-conscious design.",
    category: "Interior Design",
    author: "AAKAR Studio",
    date: "September 28, 2026",
    readTime: "5 min read",
    image: "/images/blog-08.png",
  },
  {
    id: 9,
    slug: "wood-in-interior-design",
    title: "The Timeless Appeal Of Natural Wood In Interior Spaces",
    excerpt:
      "Explore wood finishes, textures, and applications that introduce warmth and natural character into contemporary interiors.",
    category: "Materials",
    author: "AAKAR Studio",
    date: "September 20, 2026",
    readTime: "4 min read",
    image: "/images/blog-09.png",
  },
];