
export interface BlogContentBlock {
  type: "paragraph" | "heading" | "quote" | "list";
  content: string;
  items?: string[];
}

export interface BlogPost {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
  featured?: boolean;
  tags: string[];
  content: BlogContentBlock[];
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
    featured: true,
    tags: ["Interior Design", "Functionality", "Home Styling"],
    content: [
      {
        type: "paragraph",
        content:
          "A beautiful home should do more than look impressive. It should support the way you live, move, relax, and connect with the people around you. Modern interior design increasingly focuses on bringing aesthetics and everyday functionality together.",
      },
      {
        type: "heading",
        content: "Designing Around Everyday Living",
      },
      {
        type: "paragraph",
        content:
          "The foundation of a functional interior is understanding how each space will be used. From the placement of furniture to the relationship between different rooms, every decision should make daily routines more comfortable.",
      },
      {
        type: "list",
        content: "Consider these principles when planning your space:",
        items: [
          "Choose furniture that suits the scale and purpose of the room.",
          "Maintain comfortable circulation paths between furniture.",
          "Introduce practical storage without overwhelming the design.",
          "Use flexible layouts that can adapt to changing needs.",
        ],
      },
      {
        type: "heading",
        content: "The Role Of Materials And Textures",
      },
      {
        type: "paragraph",
        content:
          "Natural wood, stone, textured fabrics, and carefully selected finishes bring depth and character to interiors. Combining materials thoughtfully creates visual interest while ensuring the space remains cohesive.",
      },
      {
        type: "quote",
        content:
          "Good design is not simply about what a space looks like. It is about how naturally it becomes part of your everyday life.",
      },
      {
        type: "heading",
        content: "Comfort Is The New Luxury",
      },
      {
        type: "paragraph",
        content:
          "Comfort comes from thoughtful lighting, ergonomic furniture, balanced proportions, and a sense of visual calm. A well-designed home makes these elements feel effortless.",
      },
      {
        type: "paragraph",
        content:
          "At AAKAR, we believe that the most successful interiors are those where beauty and usability work together. The result is a space that feels personal, practical, and timeless.",
      },
    ],
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
    tags: ["Living Room", "Home Styling", "Modern Design"],
    content: [
      {
        type: "paragraph",
        content:
          "Refreshing your living space does not always require a complete renovation. Sometimes, a few thoughtful changes in layout, lighting, materials, and styling can make a meaningful difference.",
      },
      {
        type: "heading",
        content: "Rethink Your Furniture Layout",
      },
      {
        type: "paragraph",
        content:
          "Furniture placement influences how a room feels and functions. Create natural conversation areas, keep circulation paths open, and avoid overcrowding the room with unnecessary pieces.",
      },
      {
        type: "heading",
        content: "Introduce Layers Of Lighting",
      },
      {
        type: "paragraph",
        content:
          "Combine ambient lighting with focused task lighting and decorative accent lights. This creates flexibility throughout the day and gives the room more depth after sunset.",
      },
      {
        type: "list",
        content: "Simple ways to refresh your living room:",
        items: [
          "Introduce cushions and fabrics with complementary textures.",
          "Use artwork to establish a focal point.",
          "Add greenery to bring natural character indoors.",
          "Choose a statement light fixture that suits the space.",
        ],
      },
      {
        type: "quote",
        content:
          "A thoughtful change in one detail can transform the experience of an entire room.",
      },
      {
        type: "heading",
        content: "Create A Cohesive Interior",
      },
      {
        type: "paragraph",
        content:
          "The key is to maintain consistency across colors, materials, and proportions. Rather than following every trend, choose details that complement your lifestyle and the architecture of your home.",
      },
    ],
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
    tags: ["Modern Home", "Architecture", "Inspiration"],
    content: [
      {
        type: "paragraph",
        content:
          "Modern interior design is about creating spaces that feel balanced, purposeful, and connected to the way people live. It brings together clean architectural lines, carefully selected materials, and practical solutions.",
      },
      {
        type: "heading",
        content: "Start With A Clear Design Direction",
      },
      {
        type: "paragraph",
        content:
          "Before selecting furniture or finishes, establish a clear direction for the home. Consider the mood you want to create, the colors you naturally gravitate towards, and how each room connects to the next.",
      },
      {
        type: "heading",
        content: "Balance Simplicity And Character",
      },
      {
        type: "paragraph",
        content:
          "Simple forms provide a calm foundation, while artwork, furniture, natural materials, and lighting add individuality. A successful modern interior avoids unnecessary decoration without feeling empty.",
      },
      {
        type: "list",
        content: "Elements that help establish a modern interior:",
        items: [
          "A balanced and restrained color palette.",
          "Furniture with considered proportions.",
          "Natural materials and tactile finishes.",
          "Layered lighting and intentional focal points.",
        ],
      },
      {
        type: "heading",
        content: "Make The Space Personal",
      },
      {
        type: "paragraph",
        content:
          "Modern design does not need to feel impersonal. Personal objects, cultural influences, artwork, and meaningful details help make a home feel genuinely yours.",
      },
    ],
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
    tags: ["Materials", "Wood", "Stone", "Finishes"],
    content: [
      {
        type: "paragraph",
        content:
          "Materials influence more than the appearance of an interior. They affect how a space feels, how it performs over time, and how much maintenance it requires.",
      },
      {
        type: "heading",
        content: "Natural Stone And Surface Finishes",
      },
      {
        type: "paragraph",
        content:
          "Marble, granite, and other natural stones introduce unique patterns and textures. Their suitability depends on the intended application, maintenance requirements, and overall design direction.",
      },
      {
        type: "heading",
        content: "The Warmth Of Wood",
      },
      {
        type: "paragraph",
        content:
          "Wood brings warmth and visual softness to contemporary interiors. It can be introduced through flooring, cabinetry, wall panels, furniture, and smaller decorative details.",
      },
      {
        type: "heading",
        content: "Consider Practical Requirements",
      },
      {
        type: "list",
        content: "Before finalizing materials, consider:",
        items: [
          "Durability and expected usage.",
          "Cleaning and maintenance requirements.",
          "Resistance to moisture and daily wear.",
          "Compatibility with surrounding finishes.",
          "Overall project budget and availability.",
        ],
      },
      {
        type: "quote",
        content:
          "The right material is one that looks beautiful and performs well in the environment where it belongs.",
      },
      {
        type: "paragraph",
        content:
          "A balanced material palette combines visual character with practical performance. Sampling materials together before making final selections helps ensure a cohesive result.",
      },
    ],
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
    tags: ["Lighting", "Architecture", "Home Design"],
    content: [
      {
        type: "paragraph",
        content:
          "Lighting is one of the most influential elements in interior design. It affects the mood of a room, highlights architectural features, and determines how materials and colors are experienced.",
      },
      {
        type: "heading",
        content: "Understand The Three Layers Of Lighting",
      },
      {
        type: "paragraph",
        content:
          "A considered lighting plan usually combines ambient, task, and accent lighting. Each layer serves a different purpose and works together to create a comfortable environment.",
      },
      {
        type: "list",
        content: "The three essential lighting layers:",
        items: [
          "Ambient lighting provides general illumination.",
          "Task lighting supports focused activities such as reading or cooking.",
          "Accent lighting highlights artwork, textures, and architectural details.",
        ],
      },
      {
        type: "heading",
        content: "Make The Most Of Natural Light",
      },
      {
        type: "paragraph",
        content:
          "Window placement, curtains, reflective surfaces, and furniture positioning can all influence how natural light moves through a room. Keeping openings unobstructed can help create brighter interiors.",
      },
      {
        type: "heading",
        content: "Choose Fixtures With Purpose",
      },
      {
        type: "paragraph",
        content:
          "Pendant lights, wall sconces, recessed fixtures, and floor lamps should complement the architecture and furniture. Their placement, scale, and light quality matter as much as their appearance.",
      },
    ],
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
    tags: ["Minimalism", "Design Trends", "Home Styling"],
    content: [
      {
        type: "paragraph",
        content:
          "Minimalist interiors are often associated with clean lines and restrained decoration, but the approach goes much deeper. It is about making deliberate choices and allowing every element to contribute to the space.",
      },
      {
        type: "heading",
        content: "Prioritize What Matters",
      },
      {
        type: "paragraph",
        content:
          "Start by identifying the furniture, objects, and functions that are essential to your everyday life. Removing unnecessary elements creates room for the details that genuinely matter.",
      },
      {
        type: "heading",
        content: "Use Materials To Add Depth",
      },
      {
        type: "paragraph",
        content:
          "A restrained palette does not have to feel flat. Natural wood, stone, linen, textured plaster, and subtle variations in finish introduce visual richness without creating clutter.",
      },
      {
        type: "list",
        content: "Practical principles of minimalist design:",
        items: [
          "Keep furniture proportions appropriate to the room.",
          "Choose a consistent and balanced color palette.",
          "Integrate storage to reduce visual clutter.",
          "Use lighting to emphasize important features.",
          "Select fewer, more meaningful decorative objects.",
        ],
      },
      {
        type: "quote",
        content:
          "Minimalism is not about having less for its own sake. It is about making space for what matters.",
      },
    ],
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
    tags: ["Indian Design", "Craftsmanship", "Culture"],
    content: [
      {
        type: "paragraph",
        content:
          "Indian interiors have a rich design vocabulary shaped by regional craftsmanship, natural materials, traditional patterns, and cultural influences. These elements can find a meaningful place in contemporary homes.",
      },
      {
        type: "heading",
        content: "Celebrate Indian Craftsmanship",
      },
      {
        type: "paragraph",
        content:
          "Handcrafted furniture, carved wooden details, woven textiles, metalwork, and traditional artwork can introduce individuality into modern spaces.",
      },
      {
        type: "heading",
        content: "Balance Tradition With Contemporary Forms",
      },
      {
        type: "paragraph",
        content:
          "Traditional elements do not need to dominate a room. A carefully selected piece of furniture, a handcrafted light fixture, or a textile can become a focal point against a simpler architectural background.",
      },
      {
        type: "list",
        content: "Ways to bring Indian influences into modern interiors:",
        items: [
          "Use handcrafted wooden furniture as a statement piece.",
          "Introduce regional textiles through cushions and upholstery.",
          "Explore traditional patterns in subtle applications.",
          "Display locally crafted artwork and decorative objects.",
          "Combine natural materials with contemporary furniture.",
        ],
      },
      {
        type: "heading",
        content: "Design That Reflects Your Identity",
      },
      {
        type: "paragraph",
        content:
          "The most meaningful interiors are not defined by a single style. They reflect the people who live in them. Combining personal memories, cultural references, and modern functionality creates spaces with lasting character.",
      },
    ],
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
    tags: ["Small Spaces", "Storage", "Urban Homes"],
    content: [
      {
        type: "paragraph",
        content:
          "Compact homes require careful planning. The objective is not simply to fit more furniture into a room, but to make each area work efficiently while maintaining a sense of openness.",
      },
      {
        type: "heading",
        content: "Choose Multifunctional Furniture",
      },
      {
        type: "paragraph",
        content:
          "Furniture that serves multiple purposes can make a meaningful difference. Storage beds, extendable dining tables, nesting tables, and adaptable workspaces help maximize usability.",
      },
      {
        type: "heading",
        content: "Make Storage Part Of The Architecture",
      },
      {
        type: "paragraph",
        content:
          "Built-in cabinetry, vertical storage, and carefully planned niches can reduce clutter without taking up unnecessary floor space.",
      },
      {
        type: "list",
        content: "Useful strategies for compact interiors:",
        items: [
          "Use vertical wall space for storage.",
          "Keep circulation areas clear.",
          "Select furniture with appropriate proportions.",
          "Use consistent finishes to create visual continuity.",
          "Plan lighting to avoid dark and crowded corners.",
        ],
      },
      {
        type: "quote",
        content:
          "A compact space can feel generous when every element has a clear purpose.",
      },
    ],
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
    tags: ["Wood", "Natural Materials", "Interior Design"],
    content: [
      {
        type: "paragraph",
        content:
          "Natural wood has a distinctive ability to bring warmth and texture into interior spaces. Its grains, tones, and finishes make it suitable for a wide range of design directions.",
      },
      {
        type: "heading",
        content: "Choose The Right Wood Finish",
      },
      {
        type: "paragraph",
        content:
          "Light finishes can create a softer, more relaxed appearance, while darker tones introduce depth and contrast. The choice should complement the surrounding flooring, wall colors, and furniture.",
      },
      {
        type: "heading",
        content: "Explore Different Applications",
      },
      {
        type: "list",
        content: "Wood can be incorporated through:",
        items: [
          "Flooring and wall cladding.",
          "Kitchen and wardrobe cabinetry.",
          "Furniture and shelving.",
          "Decorative ceiling details.",
          "Doors, frames, and architectural accents.",
        ],
      },
      {
        type: "heading",
        content: "Think Beyond Appearance",
      },
      {
        type: "paragraph",
        content:
          "Consider the intended application, durability, moisture exposure, maintenance, and finish quality before selecting a wood product. Different materials and engineered alternatives may be more suitable for different environments.",
      },
      {
        type: "paragraph",
        content:
          "When used thoughtfully, wood creates a connection between architecture and nature, bringing a sense of warmth that works across changing design trends.",
      },
    ],
  },
];

export const getBlogBySlug = (slug: string) =>
  blogPosts.find((post) => post.slug === slug);

export const getRelatedBlogs = (currentPost: BlogPost, limit = 3) => {
  return blogPosts
    .filter(
      (post) =>
        post.id !== currentPost.id &&
        post.category === currentPost.category
    )
    .concat(
      blogPosts.filter(
        (post) =>
          post.id !== currentPost.id &&
          post.category !== currentPost.category
      )
    )
    .slice(0, limit);
};
