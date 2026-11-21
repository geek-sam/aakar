import { useCallback, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { projects } from "../../../data/data_config";

export default function ProjectsSection() {
  const trackRef = useRef<HTMLDivElement>(null);

  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Navigate to a specific project
  const goToSlide = useCallback((index: number) => {
    const track = trackRef.current;
    if (!track) return;

    const nextIndex = (index + projects.length) % projects.length;

    const target = track.children[nextIndex] as HTMLElement;

    if (!target) return;

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

  // Update active slide during touch / manual scrolling
  const handleScroll = () => {
    const track = trackRef.current;
    if (!track) return;

    const children = Array.from(track.children) as HTMLElement[];

    let closestIndex = 0;
    let minDistance = Infinity;

    children.forEach((child, index) => {
      const distance = Math.abs(
        child.offsetLeft - track.offsetLeft - track.scrollLeft,
      );

      if (distance < minDistance) {
        minDistance = distance;
        closestIndex = index;
      }
    });

    setActiveIndex((previous) =>
      previous === closestIndex ? previous : closestIndex,
    );
  };

  // Automatic carousel
  useEffect(() => {
    if (isPaused) return;

    const interval = window.setInterval(() => {
      setActiveIndex((current) => {
        const next = (current + 1) % projects.length;

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
    }, 4500);

    return () => window.clearInterval(interval);
  }, [isPaused]);

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
      {/* Background Decoration */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.18]"
        style={{
          backgroundImage:
            "radial-gradient(var(--border-primary) 0.7px, transparent 0.7px)",
          backgroundSize: "24px 24px",
        }}
      />

      {/* Section Introduction */}
      <div className="relative mx-auto mb-14 grid max-w-[1600px] grid-cols-1 gap-8 px-5 sm:px-8 md:mb-16 lg:grid-cols-[0.8fr_1.2fr] lg:gap-12 lg:px-9">
        {/* Left Label */}
        <div className="flex items-start">
          <div className="flex items-center gap-2 rounded-full border border-[var(--border-primary)] px-4 py-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-primary)]" />

            <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[var(--text-primary)]">
              Our Projects
            </span>
          </div>
        </div>

        {/* Right Heading */}
        <div className="max-w-[720px]">
          <h2 className="font-heading text-[clamp(2.5rem,5vw,4.5rem)] font-semibold leading-[1.05] tracking-[-0.055em] text-[var(--text-primary)]">
            Creative{" "}
            <span className="text-[var(--color-primary)]">
              projects that define
            </span>{" "}
            our style
          </h2>

          <p className="mt-6 max-w-[540px] text-sm leading-[1.8] text-[var(--text-secondary)] md:text-base">
            Our portfolio showcases a diverse range of projects, from
            beautifully crafted residential spaces to functional and stylish
            commercial interiors.
          </p>
        </div>
      </div>

      {/* Projects Carousel */}
      <div className="relative">
        {/* Carousel Track */}
        <div
          ref={trackRef}
          onScroll={handleScroll}
          className="projects-carousel flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 pb-4 sm:gap-6 sm:px-8 lg:gap-7 lg:px-9"
          style={{
            scrollbarWidth: "none",
            WebkitOverflowScrolling: "touch",
          }}
        >
          {projects.map((project) => (
            <article
              key={project.id}
              className="group w-[78vw] max-w-[320px] flex-none snap-start sm:w-[42vw] lg:w-[320px] "
            >
              {/* Project Image */}
              <Link
                to={`/projects/${project.slug}`}
                className="relative block aspect-[4/4.8] overflow-hidden rounded-[14px] bg-[var(--bg-secondary)]"
                aria-label={`View ${project.title}`}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  draggable={false}
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Image Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-black/10 opacity-70 transition-opacity duration-500 group-hover:opacity-100" />

                {/* Category Badge */}
                <div className="absolute left-4 top-4">
                  <span className="rounded-full border border-white/50 bg-black/10 px-3 py-1.5 text-[9px] font-semibold uppercase tracking-wide text-white backdrop-blur-sm">
                    {project.category}
                  </span>
                </div>

                {/* View Project Icon */}
                <div className="absolute bottom-4 right-4 flex h-10 w-10 translate-y-3 items-center justify-center rounded-full bg-[var(--color-primary)] text-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  <ArrowUpRight size={19} />
                </div>
              </Link>

              {/* Project Information */}
              <div className="mt-4 flex items-start justify-between gap-3">
                <div className="min-w-0">
                  <Link
                    to={`/projects/${project.slug}`}
                    className="inline-block"
                  >
                    <h3 className="font-heading text-xl font-semibold leading-tight tracking-[-0.04em] text-[var(--text-primary)] transition-colors duration-300 group-hover:text-[var(--color-primary)] sm:text-[22px]">
                      {project.title}
                    </h3>
                  </Link>

                  <div className="mt-2 flex flex-col gap-0.5 text-xs leading-relaxed text-[var(--text-secondary)]">
                    <span>{project.location}</span>
                    <span>{project.year}</span>
                  </div>
                </div>

                <Link
                  to={`/projects/${project.slug}`}
                  aria-label={`Open ${project.title}`}
                  className="mt-1 text-[var(--text-tertiary)] transition-colors hover:text-[var(--color-primary)]"
                >
                  <ArrowUpRight size={20} />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Carousel Controls */}
        <div className="mx-auto mt-10 flex max-w-[1600px] items-center justify-between px-5 sm:px-8 lg:px-9">
          {/* Progress Indicator */}
          <div className="flex items-center gap-3">
            <span className="text-sm font-semibold tabular-nums text-[var(--text-primary)]">
              {String(activeIndex + 1).padStart(2, "0")}
            </span>

            <div className="flex gap-1.5">
              {projects.map((project, index) => (
                <button
                  key={project.id}
                  onClick={() => goToSlide(index)}
                  aria-label={`Go to project ${index + 1}`}
                  className={`h-1 rounded-full transition-all duration-300 ${
                    activeIndex === index
                      ? "w-8 bg-[var(--color-primary)]"
                      : "w-3 bg-[var(--border-primary)] hover:bg-[var(--color-secondary)]"
                  }`}
                />
              ))}
            </div>

            <span className="text-sm tabular-nums text-[var(--text-tertiary)]">
              {String(projects.length).padStart(2, "0")}
            </span>
          </div>

          {/* Navigation Buttons */}
          <div className="flex items-center gap-3">
            <button
              onClick={prevSlide}
              aria-label="Previous projects"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--border-primary)] text-[var(--text-primary)] transition-all duration-300 hover:border-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white"
            >
              <ArrowLeft size={18} />
            </button>

            <button
              onClick={nextSlide}
              aria-label="Next projects"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--border-primary)] text-[var(--text-primary)] transition-all duration-300 hover:border-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white"
            >
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>

      {/* View All Projects */}
      <div className="relative mt-12 flex justify-center">
        <Link
          to="/projects"
          className="group inline-flex items-center gap-4 border-b border-[var(--border-primary)] pb-2 text-sm font-semibold text-[var(--text-primary)] transition-colors hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]"
        >
          Explore All Projects
          <ArrowUpRight
            size={17}
            className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
          />
        </Link>
      </div>
    </section>
  );
}
