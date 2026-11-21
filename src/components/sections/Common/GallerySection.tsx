import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

interface GalleryItem {
  id: number;
  title: string;
  category: string;
  image: string;
}

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    title: "Modern Kitchen",
    category: "Kitchen Design",
    image: "/images/project-01.png",
  },
  {
    id: 2,
    title: "Minimal Living",
    category: "Living Room",
    image: "/images/project-02.png",
  },
  {
    id: 3,
    title: "Elegant Dining",
    category: "Dining Interior",
    image: "/images/project-03.png",
  },
  {
    id: 4,
    title: "Luxury Bedroom",
    category: "Bedroom Design",
    image: "/images/project-04.png",
  },
  {
    id: 5,
    title: "Contemporary Spaces",
    category: "Residential",
    image: "/images/project-05.png",
  },
  {
    id: 6,
    title: "Timeless Details",
    category: "Interior Styling",
    image: "/images/project-06.png",
  },
  {
    id: 7,
    title: "Modern Kitchen",
    category: "Kitchen Design",
    image: "/images/project-01.png",
  },
  {
    id: 8,
    title: "Minimal Living",
    category: "Living Room",
    image: "/images/project-02.png",
  },
];

export default function GallerySection() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Navigate to a gallery image
  const goToSlide = useCallback((index: number) => {
    const track = trackRef.current;
    if (!track) return;

    const cards = Array.from(track.children) as HTMLElement[];

    if (!cards.length) return;

    const nextIndex = (index + galleryItems.length) % galleryItems.length;

    const target = cards[nextIndex];

    track.scrollTo({
      left: target.offsetLeft - track.offsetLeft,
      behavior: "smooth",
    });

    setActiveIndex(nextIndex);
  }, []);

  const nextSlide = useCallback(() => {
    goToSlide(activeIndex + 1);
  }, [activeIndex, goToSlide]);

  const prevSlide = useCallback(() => {
    goToSlide(activeIndex - 1);
  }, [activeIndex, goToSlide]);

  // Sync active index with manual scrolling and swiping
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

    setActiveIndex((previous) =>
      previous === closestIndex ? previous : closestIndex,
    );
  }, []);

  // Autoplay
  useEffect(() => {
    if (isPaused) return;

    const interval = window.setInterval(() => {
      setActiveIndex((current) => {
        const next = (current + 1) % galleryItems.length;

        const track = trackRef.current;

        if (track) {
          const target = track.children[next] as HTMLElement;

          if (target) {
            track.scrollTo({
              left: target.offsetLeft - track.offsetLeft,
              behavior: "smooth",
            });
          }
        }

        return next;
      });
    }, 3000);

    return () => window.clearInterval(interval);
  }, [isPaused]);

  return (
    <section
      className="relative isolate min-h-[650px] overflow-hidden bg-[var(--bg-dark)] py-20 text-white md:min-h-[700px] md:py-24 lg:min-h-[780px] lg:py-28"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocusCapture={() => setIsPaused(true)}
      onBlurCapture={() => setIsPaused(false)}
      onTouchStart={() => setIsPaused(true)}
      onTouchEnd={() => setIsPaused(false)}
    >
      {/* Background Image */}
      <div className="absolute inset-0 -z-20">
        <img
          src="/images/gallery-background.png"
          alt=""
          aria-hidden="true"
          className="h-full w-full object-cover"
        />
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 -z-10 bg-black/35" />

      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/60 via-black/35 to-black/40" />

      {/* Main Layout */}
      <div className="mx-auto grid max-w-[1600px] grid-cols-1 items-center gap-12 px-5 sm:px-8 lg:grid-cols-[0.85fr_1.65fr] lg:gap-10 lg:px-9">
        {/* Left Content */}
        <div className="relative z-10 max-w-[470px]">
          {/* Section Label */}
          <div className="mb-7 flex items-start">
            <div className="flex items-center gap-2 rounded-full border border-[var(--border-primary)] px-4 py-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-tertiary)]" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[var(--text-tertiary)]">
                Our Gallery
              </span>
            </div>
          </div>

          {/* Heading */}
          <h2 className="font-heading text-[clamp(3.5rem,7vw,7rem)] font-semibold leading-[0.98] tracking-[-0.06em] text-white">
            Interior
            <br />
            design
          </h2>

          {/* Description */}
          <p className="mt-7 max-w-[390px] text-sm leading-[1.8] text-white/80 sm:text-base">
            Explore our collection of thoughtfully designed interiors. Every
            space reflects our passion for craftsmanship, aesthetics, and
            meaningful living.
          </p>

          {/* Gallery CTA */}
          <Link
            to="/projects"
            className="group mt-8 inline-flex items-center gap-3 text-sm font-semibold text-white transition-colors hover:text-[var(--color-tertiary)]"
          >
            Explore Our Projects
            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/40 transition-all duration-300 group-hover:border-[var(--color-primary)] group-hover:bg-[var(--color-primary)]">
              <ArrowUpRight size={17} />
            </span>
          </Link>
        </div>

        {/* Right Gallery */}
        <div className="min-w-0">
          {/* Image Carousel */}
          <div
            ref={trackRef}
            onScroll={handleScroll}
            className="gallery-carousel flex snap-x snap-mandatory gap-5 overflow-x-auto pb-3 sm:gap-6 lg:gap-8"
            style={{
              scrollbarWidth: "none",
              WebkitOverflowScrolling: "touch",
            }}
          >
            {galleryItems.map((item) => (
              <Link
                to="/projects"
                key={item.id}
                className="group w-[72vw] max-w-[310px] flex-none snap-start text-center sm:w-[42vw] lg:w-[310px]"
              >
                {/* Gallery Image */}
                <div className="relative aspect-[4/5] overflow-hidden rounded-[20px] bg-[var(--bg-secondary)]">
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    draggable={false}
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />

                  {/* Image Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-100" />

                  {/* Category */}
                  <span className="absolute left-4 top-4 rounded-full border border-white/40 bg-black/20 px-3 py-1.5 text-[9px] font-semibold uppercase tracking-wider text-white backdrop-blur-sm">
                    {item.category}
                  </span>

                  {/* Hover Icon */}
                  <div className="absolute bottom-4 right-4 flex h-10 w-10 translate-y-3 items-center justify-center rounded-full bg-[var(--color-primary)] text-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    <ArrowUpRight size={19} />
                  </div>
                </div>

                {/* Image Title */}
                <div className="mt-4 flex items-center justify-between gap-2 text-left">
                  <h3 className="font-heading text-lg font-semibold tracking-tight text-white transition-colors duration-300 group-hover:text-[var(--color-tertiary)] sm:text-xl">
                    {item.title}
                  </h3>

                  <span className="text-xs text-white/50">0{item.id}</span>
                </div>
              </Link>
            ))}
          </div>

          {/* Carousel Controls */}
          <div className="mt-10 flex items-center justify-end">
            {/* Progress */}
            {/* <div className="flex items-center gap-3">
              <span className="text-sm font-semibold tabular-nums text-white">
                {String(activeIndex + 1).padStart(2, "0")}
              </span>

              <div className="flex items-center gap-1.5">
                {galleryItems.map((item, index) => (
                  <button
                    key={item.id}
                    onClick={() => goToSlide(index)}
                    aria-label={`View gallery image ${index + 1}`}
                    className={`h-1 rounded-full transition-all duration-300 ${
                      activeIndex === index
                        ? "w-8 bg-[var(--color-tertiary)]"
                        : "w-3 bg-white/30 hover:bg-white/70"
                    }`}
                  />
                ))}
              </div>

              <span className="text-sm tabular-nums text-white/50">
                {String(galleryItems.length).padStart(2, "0")}
              </span>
            </div> */}

            {/* Navigation */}
            <div className="flex items-center gap-3">
              <button
                onClick={prevSlide}
                aria-label="Previous gallery image"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/30 text-white transition-all duration-300 hover:border-[var(--color-primary)] hover:bg-[var(--color-primary)]"
              >
                <ArrowLeft size={19} />
              </button>

              <button
                onClick={nextSlide}
                aria-label="Next gallery image"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/30 text-white transition-all duration-300 hover:border-[var(--color-primary)] hover:bg-[var(--color-primary)]"
              >
                <ArrowRight size={19} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
