import { useCallback, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";

interface BlogPost {
  id: number;
  slug: string;
  category: string;
  title: string;
  description: string;
  author: string;
  image: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    slug: "functional-interior-design-trends",
    category: "Design Trends",
    title: "Functional Design Trends That Blend Style And Comfort",
    description:
      "Modern interior design is all about creating a sleek, functional, and aesthetically pleasing space that reflects contemporary living. Discover how thoughtful design transforms everyday spaces.",
    author: "AAKAR Studio",
    image: "/images/project-01.png",
  },
  {
    id: 2,
    slug: "innovative-interior-ideas",
    category: "Interior Design",
    title: "Innovative Interior Ideas To Refresh Your Living Space",
    description:
      "Explore creative interior ideas, contemporary materials, and thoughtful details that bring a fresh perspective to your home and make every corner meaningful.",
    author: "AAKAR Studio",
    image: "/images/project-02.png",
  },
  {
    id: 3,
    slug: "modern-home-interior-design",
    category: "Inspiration",
    title: "Transform Your Home With The Modern Interior Design Approach",
    description:
      "From carefully selected furniture to beautiful lighting, discover the elements that create a harmonious balance between functionality and modern aesthetics.",
    author: "AAKAR Studio",
    image: "/images/project-03.png",
  },
  {
    id: 4,
    slug: "choosing-the-right-materials",
    category: "Materials",
    title: "A Guide To Choosing The Right Materials For Your Home",
    description:
      "Explore natural stone, wood, textures, and finishes to understand how the right materials can elevate the character and longevity of your interiors.",
    author: "AAKAR Studio",
    image: "/images/project-04.png",
  },
  {
    id: 5,
    slug: "lighting-in-interior-design",
    category: "Lighting",
    title: "How Lighting Can Completely Transform Your Interiors",
    description:
      "Discover the relationship between natural light, ambient lighting, and architectural details to create warm, inviting, and visually balanced spaces.",
    author: "AAKAR Studio",
    image: "/images/project-05.png",
  },
];

export default function BlogSection() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Calculate the maximum scroll position
  const getMaxIndex = useCallback(() => {
    const track = trackRef.current;
    if (!track) return 0;

    const cards = Array.from(track.children) as HTMLElement[];

    if (!cards.length) return 0;

    const maxScroll = track.scrollWidth - track.clientWidth;

    return cards.reduce((lastIndex, card, index) => {
      return card.offsetLeft - track.offsetLeft <= maxScroll + 2
        ? index
        : lastIndex;
    }, 0);
  }, []);

  // Scroll to selected card
  const goToSlide = useCallback((index: number) => {
    const track = trackRef.current;
    if (!track) return;

    const cards = Array.from(track.children) as HTMLElement[];

    if (!cards.length) return;

    const maxScroll = track.scrollWidth - track.clientWidth;

    const targetIndex = Math.max(0, Math.min(index, cards.length - 1));

    const target = cards[targetIndex];

    const left = Math.min(target.offsetLeft - track.offsetLeft, maxScroll);

    track.scrollTo({
      left,
      behavior: "smooth",
    });

    setActiveIndex(targetIndex);
  }, []);

  const nextSlide = useCallback(() => {
    const maxIndex = getMaxIndex();

    if (activeIndex >= maxIndex) {
      goToSlide(0);
    } else {
      goToSlide(activeIndex + 1);
    }
  }, [activeIndex, getMaxIndex, goToSlide]);

  const prevSlide = useCallback(() => {
    const maxIndex = getMaxIndex();

    if (activeIndex <= 0) {
      goToSlide(maxIndex);
    } else {
      goToSlide(activeIndex - 1);
    }
  }, [activeIndex, getMaxIndex, goToSlide]);

  // Sync carousel state with manual scrolling
  const handleScroll = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;

    const cards = Array.from(track.children) as HTMLElement[];

    let closestIndex = 0;
    let minDistance = Infinity;

    cards.forEach((card, index) => {
      const distance = Math.abs(
        card.offsetLeft - track.offsetLeft - track.scrollLeft,
      );

      if (distance < minDistance) {
        minDistance = distance;
        closestIndex = index;
      }
    });

    setActiveIndex(closestIndex);
  }, []);

  // Auto slide
  useEffect(() => {
    if (isPaused) return;

    const interval = window.setInterval(() => {
      nextSlide();
    }, 5000);

    return () => window.clearInterval(interval);
  }, [isPaused, nextSlide]);

  return (
    <section
      className="relative overflow-hidden bg-[var(--bg-primary)] py-24 md:py-32 lg:py-36"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocusCapture={() => setIsPaused(true)}
      onBlurCapture={() => setIsPaused(false)}
      onTouchStart={() => setIsPaused(true)}
      onTouchEnd={() => setIsPaused(false)}
    >
      {/* Architectural Background */}
      <div className="pointer-events-none absolute inset-0 -z-0 opacity-30">
        <div className="process-grid-bg absolute inset-0" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-9">
        {/* Section Header */}
        <div className="mb-12 grid grid-cols-1 gap-8 lg:mb-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-12">
          {/* Section Label */}
          <div className="flex items-start">
            <div className="flex items-center gap-2 rounded-full border border-[var(--border-primary)] px-4 py-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-primary)]" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[var(--text-primary)]">
                Straight From The Newsroom
              </span>
            </div>
          </div>

          {/* Heading */}
          <div>
            <h2 className="max-w-[750px] font-heading text-[clamp(2.5rem,5vw,4.5rem)] font-semibold leading-[1.05] tracking-[-0.055em] text-[var(--text-primary)]">
              Take A Look At{" "}
              <span className="text-[var(--color-primary)]">
                Our Latest Blog
              </span>{" "}
              & Articles.
            </h2>

            <p className="mt-5 max-w-[530px] text-sm leading-[1.8] text-[var(--text-secondary)]">
              Discover design inspiration, expert insights, creative ideas, and
              practical advice to help you create spaces that feel truly yours.
            </p>
          </div>
        </div>

        {/* Blog Carousel */}
        <div
          ref={trackRef}
          onScroll={handleScroll}
          className="blog-carousel flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4 sm:gap-6 lg:gap-7"
          style={{
            scrollbarWidth: "none",
            WebkitOverflowScrolling: "touch",
          }}
        >
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="group w-[85%] flex-none snap-start sm:w-[48%] lg:w-[calc((100%-56px)/3)]"
            >
              {/* Blog Image */}
              <Link
                to={`/blog/${post.slug}`}
                className="relative block aspect-[4/3] overflow-hidden rounded-[16px] bg-[var(--bg-secondary)]"
              >
                <img
                  src={post.image}
                  alt={post.title}
                  loading="lazy"
                  draggable={false}
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Image Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />

                {/* Category Badge */}
                <span className="absolute left-4 top-4 rounded-full bg-[var(--color-primary)] px-4 py-2 text-[10px] font-semibold text-white shadow-sm">
                  {post.category}
                </span>

                {/* View Article */}
                <span className="absolute bottom-4 right-4 flex h-10 w-10 translate-y-3 items-center justify-center rounded-full bg-[var(--bg-surface)] text-[var(--text-primary)] opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  <ArrowUpRight size={18} />
                </span>
              </Link>

              {/* Blog Content */}
              <div className="pt-5">
                {/* Author */}
                <div className="mb-3 flex items-center gap-1.5 text-xs">
                  <span className="text-[var(--text-tertiary)]">By</span>

                  <span className="font-semibold text-[var(--color-primary)]">
                    {post.author}
                  </span>
                </div>

                {/* Title */}
                <Link to={`/blog/${post.slug}`}>
                  <h3 className="line-clamp-2 font-heading text-xl font-semibold leading-[1.25] tracking-[-0.04em] text-[var(--text-primary)] transition-colors duration-300 group-hover:text-[var(--color-primary)] sm:text-[22px]">
                    {post.title}
                  </h3>
                </Link>

                {/* Description */}
                <p className="mt-4 line-clamp-3 text-sm leading-[1.75] text-[var(--text-secondary)]">
                  {post.description}
                </p>

                {/* Read More */}
                <Link
                  to={`/blog/${post.slug}`}
                  className="mt-5 inline-flex items-center gap-2 text-xs font-semibold text-[var(--text-primary)] transition-colors hover:text-[var(--color-primary)]"
                >
                  Read Article
                  <ArrowUpRight size={15} />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Carousel Bottom Controls */}
        <div className="mt-10 flex items-center justify-between">
          {/* Progress */}
          <div className="flex items-center gap-3">
            <span className="text-sm font-semibold tabular-nums text-[var(--text-primary)]">
              {String(activeIndex + 1).padStart(2, "0")}
            </span>

            <div className="flex items-center gap-1.5">
              {blogPosts.map((post, index) => (
                <button
                  key={post.id}
                  onClick={() => goToSlide(index)}
                  aria-label={`Go to article ${index + 1}`}
                  className={`h-1 rounded-full transition-all duration-300 ${
                    activeIndex === index
                      ? "w-8 bg-[var(--color-primary)]"
                      : "w-3 bg-[var(--border-primary)]"
                  }`}
                />
              ))}
            </div>

            <span className="text-sm tabular-nums text-[var(--text-tertiary)]">
              {String(blogPosts.length).padStart(2, "0")}
            </span>
          </div>

          {/* Navigation */}
          <div className="flex gap-3">
            <button
              onClick={prevSlide}
              aria-label="Previous articles"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--border-primary)] text-[var(--text-primary)] transition-all duration-300 hover:border-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white"
            >
              <ArrowLeft size={18} />
            </button>

            <button
              onClick={nextSlide}
              aria-label="Next articles"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--border-primary)] text-[var(--text-primary)] transition-all duration-300 hover:border-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white"
            >
              <ArrowRight size={18} />
            </button>
          </div>
        </div>

        {/* All Articles CTA */}
        <div className="mt-12 flex justify-center">
          <Link
            to="/blog"
            className="group inline-flex items-center gap-3 border-b border-[var(--border-primary)] pb-2 text-sm font-semibold text-[var(--text-primary)] transition-colors hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]"
          >
            Explore All Articles
            <ArrowUpRight
              size={17}
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
