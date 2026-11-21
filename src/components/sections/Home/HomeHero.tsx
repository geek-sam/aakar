import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { slides } from "../../../data/data_config";

export default function HomeHero() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const activeSlide = slides[activeIndex];

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(nextSlide, 5000);

    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <section
      className="relative isolate flex min-h-[100svh] w-full flex-col justify-end overflow-hidden bg-[#24211e] text-white"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background Images */}
      <div className="absolute inset-0 -z-20">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-[1200ms] ease-in-out ${
              activeIndex === index ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={slide.image}
              alt="Interior design showcase"
              className={`h-full w-full object-cover transition-transform duration-[6000ms] ease-out ${
                activeIndex === index ? "scale-100" : "scale-110"
              }`}
            />
          </div>
        ))}
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 -z-10 bg-black/55" />

      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black/65 via-black/15 to-black/20" />

      {/* Main Content */}
      <div className="relative mx-auto flex w-full max-w-[1600px] flex-1 flex-col justify-center px-5 pb-12 pt-28 sm:px-8 lg:px-9 lg:pb-16 lg:pt-32">
        {/* Eyebrow */}
        <div className="mb-8 flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-[#D8C5AA]" />

          <span className="text-[11px] font-bold uppercase tracking-[0.12em]">
            {activeSlide.eyebrow}
          </span>
        </div>

        {/* Heading and Project Card */}
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[1.8fr_1fr]">
          {/* Hero Heading */}
          <div key={activeSlide.id} className="animate-hero-content">
            <h1 className="max-w-[1050px] font-heading text-[clamp(3.3rem,8vw,7.5rem)] font-semibold leading-[0.96] tracking-[-0.065em]">
              {activeSlide.title[0]}
              <br />

              <span className="text-[#A66F4D]">{activeSlide.accent}</span>

              <br />

              {activeSlide.title[1]}
            </h1>
          </div>

          {/* Floating Project Card */}
          <div
            key={`card-${activeSlide.id}`}
            className="animate-hero-card hidden w-full max-w-[470px] justify-self-end rounded-[24px] border border-white/25 bg-white/30 p-4 shadow-2xl backdrop-blur-xl md:flex"
          >
            <div className="flex w-full items-center gap-5">
              <img
                src={activeSlide.projectImage}
                alt={activeSlide.projectTitle}
                className="h-32 w-[45%] shrink-0 rounded-xl object-cover"
              />

              <div className="flex flex-1 flex-col justify-between gap-3">
                <h3 className="text-lg font-bold tracking-tight">
                  {activeSlide.projectTitle}
                </h3>

                <p className="text-sm leading-snug text-white/90">
                  {activeSlide.projectDescription}
                </p>

                <Link
                  to={activeSlide.projectLink}
                  className="w-fit text-sm font-semibold underline underline-offset-4 transition-colors hover:text-[#D8C5AA]"
                >
                  Our Projects
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Content */}
        <div className="mt-14 flex flex-col justify-between gap-8 border-t border-white/30 pt-8 sm:mt-16 md:flex-row md:items-center">
          {/* Description */}
          <p
            key={`description-${activeSlide.id}`}
            className="animate-hero-content max-w-[440px] text-sm font-medium leading-[1.5] sm:text-base"
          >
            {activeSlide.description}
          </p>

          {/* CTA */}
          <Link
            to="/contact"
            className="group flex w-fit items-center gap-5 rounded-full border border-white/50 py-2 pl-7 pr-2 transition-all duration-300 hover:border-[#D8C5AA]"
          >
            <span className="text-sm font-semibold">Take Counsel</span>

            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#D8C5AA] text-xl text-white transition-transform duration-300 group-hover:rotate-45">
              ↗
            </span>
          </Link>
        </div>

        {/* Carousel Controls */}
        <div className="mt-10 mx-auto flex items-center">
          {/* Slide Counter */}

          {/* Navigation */}
          <div className="flex items-center gap-3">
            <button
              onClick={prevSlide}
              aria-label="Previous slide"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/40 text-lg transition-all hover:border-[#D8C5AA] hover:bg-[#D8C5AA]"
            >
              ←
            </button>

            <div className="flex items-center gap-3 text-xs font-medium tracking-widest">
              <span className="text-[#D8C5AA]">0{activeIndex + 1}</span>
              <span className="text-white/70">/</span>

              {/* <span className="h-px w-10 bg-white/50" /> */}

              <span className="text-white/70">0{slides.length}</span>
            </div>

            <button
              onClick={nextSlide}
              aria-label="Next slide"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/40 text-lg transition-all hover:border-[#D8C5AA] hover:bg-[#D8C5AA]"
            >
              →
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Project Preview */}
      <div className="absolute right-5 top-24 flex items-center gap-2 md:hidden">
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            onClick={() => setActiveIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`h-1 rounded-full transition-all duration-300 ${
              activeIndex === index ? "w-8 bg-[#D8C5AA]" : "w-3 bg-white/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
