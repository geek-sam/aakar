import { Link } from "react-router-dom";
import { Home, ShieldCheck, Users, Star } from "lucide-react";

const studioStats = [
  {
    number: "2,252+",
    label: "Homes Delivered",
    icon: Home,
  },
  {
    number: "15 YRS",
    label: "Warranty",
    icon: ShieldCheck,
  },
  {
    number: "200+",
    label: "Skilled Professionals",
    icon: Users,
  },
  {
    number: "100%",
    label: "Client Satisfaction",
    icon: Star,
  },
];

export default function AboutSection() {
  return (
    <section className="relative overflow-hidden bg-[#F5F0E8] py-24 md:py-32 lg:py-40">
      <div className="mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-9">
        {/* Main About Grid */}
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
          {/* Left Content */}
          <div className="relative z-10">
            {/* Section Label */}
            <div className="mb-8 flex items-center gap-3">
              <span className="h-[1px] w-10 bg-[#A66F4D]" />

              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#A66F4D]">
                About Our Studio
              </span>
            </div>

            {/* Heading */}
            <h2 className="max-w-[650px] font-heading text-[clamp(2.8rem,5.5vw,5rem)] font-semibold leading-[1.02] tracking-[-0.055em] text-[#34332F]">
              We create
              <span className="mt-2 block text-[#A66F4D]">experiences.</span>
            </h2>

            {/* Description */}
            <div className="mt-9 max-w-[480px] space-y-5">
              <p className="text-base leading-[1.8] text-[var(--text-primary)]">
                At AAKAR, we believe every space has a story waiting to unfold.
                Our approach to interior design is rooted in understanding
                people, their lifestyles, and the way they experience their
                surroundings.
              </p>

              <p className="text-sm leading-[1.9] text-[var(--text-secondary)]">
                By bringing together contemporary aesthetics, thoughtful
                functionality, and timeless craftsmanship, we create interiors
                that feel personal, meaningful, and enduring.
              </p>
            </div>

            {/* CTA */}
            <div className="mt-10 flex items-center gap-6">
              <Link
                to="/about"
                className="group inline-flex items-center gap-5 rounded-full bg-[#34332F] py-2 pl-7 pr-2 text-sm font-medium text-white transition-colors duration-300 hover:bg-[#A66F4D]"
              >
                Discover Our Story
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#D8C5AA] text-xl transition-transform duration-300 group-hover:rotate-45">
                  ↗
                </span>
              </Link>

              <span className="hidden text-xs tracking-wide text-[#A66F4D] sm:block">
                EST. 2015
              </span>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative mx-auto w-full max-w-[680px]">
            {/* Main Image */}
            <div className="relative aspect-[5/4] overflow-hidden rounded-sm">
              <img
                src="/images/about-main.jpg"
                alt="Contemporary interior designed with natural materials"
                className="h-full w-full object-cover transition-transform duration-1000 hover:scale-105"
                loading="lazy"
              />

              {/* Image Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>

            {/* Floating Image Card */}
            <div className="absolute -bottom-8 -left-4 w-[65%] max-w-[310px] border border-[#DDD4C8] bg-[#EDE5D9] p-4 shadow-xl sm:-left-10 sm:p-5">
              <div className="aspect-[16/9] overflow-hidden">
                <img
                  src="/images/about-detail.png"
                  alt="Interior design material and architectural detail"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>

              <div className="mt-4 flex items-center justify-between gap-3">
                <div>
                  <span className="block text-[10px] uppercase tracking-[0.15em] text-[#A66F4D]">
                    Our Philosophy
                  </span>

                  <h3 className="mt-1 font-heading text-lg text-[#34332F]">
                    Beauty in Detail.
                  </h3>
                </div>

                <span className="text-2xl text-[#A66F4D]">↗</span>
              </div>
            </div>

            {/* Vertical Label */}
            <div className="absolute -right-5 top-10 hidden [writing-mode:vertical-rl] lg:block">
              <span className="text-[10px] font-medium uppercase tracking-[0.25em] text-[#A29B91]">
                Inspired by Life · Designed with Purpose
              </span>
            </div>
          </div>
        </div>

        {/* Studio Statistics */}
        <div className="mt-32 border-t border-[#DDD4C8] pt-10 md:mt-30">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-4 sm:gap-6">
            {studioStats.map((stat, index) => (
              <div
                key={stat.label}
                className="flex items-center justify-between border-b border-[#DDD4C8] pb-6 sm:border-b-0 sm:pb-0"
              >
                <div>
                  <h3 className="font-heading text-5xl font-semibold tracking-tight text-[#34332F] md:text-6xl">
                    {stat.number}
                  </h3>

                  <p className="mt-2 text-xs font-medium uppercase tracking-[0.12em] text-[#77736C]">
                    {stat.label}
                  </p>
                </div>

                {index !== studioStats.length - 1 && (
                  <span className="hidden h-12 w-px bg-[#DDD4C8] sm:block" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
