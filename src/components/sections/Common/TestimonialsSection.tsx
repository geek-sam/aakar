import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, Star } from "lucide-react";
import { testimonials } from "../../../data/data_config";

const overallRating = "4.80";
const totalReviews = "120+";

export default function TestimonialsSection() {
  const trackRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<number | null>(null);

  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Calculate carousel positions
  const getCardPositions = useCallback(() => {
    const track = trackRef.current;
    if (!track) return [];

    const cards = Array.from(track.children) as HTMLElement[];

    const maxScroll = track.scrollWidth - track.clientWidth;

    return cards
      .map((card, index) => ({
        index,
        left: card.offsetLeft - track.offsetLeft,
      }))
      .filter((position) => position.left <= maxScroll + 2);
  }, []);

  // Scroll to selected card
  const goToSlide = useCallback(
    (index: number) => {
      const track = trackRef.current;
      if (!track) return;

      const positions = getCardPositions();
      if (!positions.length) return;

      const targetIndex = (index + positions.length) % positions.length;

      const target = positions[targetIndex];

      track.scrollTo({
        left: target.left,
        behavior: "smooth",
      });

      setActiveIndex(targetIndex);
    },
    [getCardPositions],
  );

  const nextSlide = useCallback(() => {
    goToSlide(activeIndex + 1);
  }, [activeIndex, goToSlide]);

  const prevSlide = useCallback(() => {
    goToSlide(activeIndex - 1);
  }, [activeIndex, goToSlide]);

  // Sync index with touch and manual scrolling
  const handleScroll = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;

    const positions = getCardPositions();

    if (!positions.length) return;

    let closest = positions[0];
    let minDistance = Infinity;

    positions.forEach((position) => {
      const distance = Math.abs(position.left - track.scrollLeft);

      if (distance < minDistance) {
        minDistance = distance;
        closest = position;
      }
    });

    setActiveIndex((previous) =>
      previous === closest.index ? previous : closest.index,
    );
  }, [getCardPositions]);

  // Autoplay
  useEffect(() => {
    if (isPaused) return;

    intervalRef.current = window.setInterval(() => {
      setActiveIndex((current) => {
        const positions = getCardPositions();
        const next = (current + 1) % positions.length;

        const track = trackRef.current;

        if (track && positions[next]) {
          track.scrollTo({
            left: positions[next].left,
            behavior: "smooth",
          });
        }

        return next;
      });
    }, 5000);

    return () => {
      if (intervalRef.current) {
        window.clearInterval(intervalRef.current);
      }
    };
  }, [isPaused, getCardPositions]);

  return (
    <section
      className="relative overflow-hidden bg-[var(--bg-secondary)] py-20 md:py-28 lg:py-32"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocusCapture={() => setIsPaused(true)}
      onBlurCapture={() => setIsPaused(false)}
      onTouchStart={() => setIsPaused(true)}
      onTouchEnd={() => setIsPaused(false)}
    >
      <div className="mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-9">
        {/* HEADER */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[0.8fr_2.2fr] lg:gap-12">
          {/* Section Label */}
          <div className="relative flex items-start lg:border-r lg:border-[var(--border-primary)]">
            <div className="flex h-fit items-center gap-2 rounded-full border border-[var(--border-primary)] px-4 py-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-primary)]" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[var(--text-primary)]">
                Our Clients Say
              </span>
            </div>
          </div>

          {/* Heading and Rating */}
          <div>
            {/* Heading */}
            <h2 className="max-w-[850px] font-heading text-[clamp(2.5rem,5vw,4.5rem)] font-semibold leading-[1.05] tracking-[-0.055em] text-[var(--text-primary)]">
              Here's what{" "}
              <span className="text-[var(--color-primary)]">
                warm words <br />
                our clients
              </span>{" "}
              say.
            </h2>

            {/* Rating Summary */}
            <div className="mt-8 grid grid-cols-1 items-center gap-6 border-t border-[var(--border-primary)] pt-6 md:grid-cols-[auto_1fr_auto] md:gap-8">
              {/* Overall Rating */}
              <div className="flex items-center gap-3">
                <span className="font-body text-5xl font-bold tracking-[-0.06em] text-[var(--text-primary)]">
                  {overallRating}
                </span>

                <div className="flex flex-col gap-1.5">
                  <div className="flex items-center gap-0.5 rounded-full bg-[var(--color-primary)] px-2 py-1 text-white">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        size={12}
                        fill="currentColor"
                        strokeWidth={1}
                      />
                    ))}
                  </div>

                  <span className="text-xs text-[var(--text-secondary)]">
                    {totalReviews} reviews
                  </span>
                </div>
              </div>

              {/* Featured Review */}
              <p className="max-w-[380px] text-sm font-semibold leading-[1.65] text-[var(--text-primary)]">
                From concept to reality, the team turned our vision into a
                stunning, livable space. I couldn't be happier with this!
              </p>

              {/* Navigation */}
              <div className="flex items-center gap-3 md:justify-end">
                <button
                  onClick={prevSlide}
                  aria-label="Previous testimonial"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--border-primary)] bg-[var(--bg-surface)] text-[var(--text-primary)] transition-all duration-300 hover:border-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white"
                >
                  <ArrowLeft size={19} />
                </button>

                <button
                  onClick={nextSlide}
                  aria-label="Next testimonial"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--border-primary)] bg-[var(--bg-surface)] text-[var(--text-primary)] transition-all duration-300 hover:border-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white"
                >
                  <ArrowRight size={19} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* TESTIMONIAL CAROUSEL */}
      <div className="mt-14">
        <div
          ref={trackRef}
          onScroll={handleScroll}
          className="testimonials-track flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 pb-2 sm:gap-6 sm:px-8 lg:gap-7 lg:px-9"
          style={{
            scrollbarWidth: "none",
            WebkitOverflowScrolling: "touch",
          }}
        >
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.id}
              className="flex min-h-[300px] w-[85vw] flex-none snap-start flex-col justify-between rounded-[20px] bg-[var(--bg-surface)] p-6 transition-all duration-300 sm:w-[390px] sm:p-7 lg:w-[407px] lg:p-8"
            >
              {/* Rating */}
              <div>
                <div className="mb-6 flex items-center gap-0.5 text-[var(--color-primary)]">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star
                      key={i}
                      size={19}
                      fill="currentColor"
                      strokeWidth={1}
                    />
                  ))}
                </div>

                {/* Review */}
                <p className="line-clamp-5 text-[15px] leading-[1.55] text-[var(--text-primary)]">
                  "{testimonial.review}"
                </p>
              </div>

              {/* Client Profile */}
              <div className="mt-8 flex items-center gap-4">
                <div className="h-[58px] w-[58px] shrink-0 overflow-hidden rounded-full bg-[var(--bg-secondary)]">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                </div>

                <div>
                  <h3 className="text-base font-bold tracking-tight text-[var(--text-primary)]">
                    {testimonial.name}
                  </h3>

                  <p className="mt-1 text-sm text-[var(--text-secondary)]">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
