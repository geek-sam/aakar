import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  Lightbulb,
  Layers3,
  Gem,
  Users,
  MoveUpRight,
} from "lucide-react";

const advantages = [
  {
    number: "01",
    title: "Thoughtful Design",
    description:
      "We create spaces that reflect your personality, lifestyle, and everyday needs. Every design decision has a purpose.",
    icon: Lightbulb,
  },
  {
    number: "02",
    title: "Attention to Detail",
    description:
      "From material selection to the smallest finishing touches, we believe exceptional interiors are built on details.",
    icon: Layers3,
  },
  {
    number: "03",
    title: "Quality Craftsmanship",
    description:
      "We bring together carefully selected materials, skilled professionals, and thoughtful execution to deliver lasting spaces.",
    icon: Gem,
  },
  {
    number: "04",
    title: "Client-First Approach",
    description:
      "Your vision remains at the heart of our process. We collaborate closely to make every step transparent and meaningful.",
    icon: Users,
  },
];

export default function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden bg-[var(--bg-secondary)] py-24 md:py-32 lg:py-36">
      <div className="mx-auto max-w-[1800px] px-5 sm:px-8 lg:px-9">
        {/* Section Header */}
        <div className="mb-14 flex flex-col justify-between gap-8 lg:mb-20 lg:flex-row lg:items-end">
          <div className="max-w-[760px]">
            {/* Label */}
            <div className="mb-7 flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-primary)]" />

              <span className="rounded-full border border-[var(--border-primary)] px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.15em] text-[var(--text-primary)]">
                Why Choose AAKAR
              </span>
            </div>

            {/* Heading */}
            <h2 className="font-heading text-[clamp(2.8rem,5.5vw,5rem)] font-semibold leading-[1.02] tracking-[-0.055em] text-[var(--text-primary)]">
              More than just
              <span className="block text-[var(--color-primary)]">
                beautiful spaces.
              </span>
              A better experience.
            </h2>
          </div>

          {/* Supporting Text */}
          <div className="max-w-[420px] lg:pb-2">
            <span className="mb-5 block h-px w-12 bg-[var(--color-primary)]" />

            <p className="text-sm leading-[1.9] text-[var(--text-secondary)] md:text-base">
              Choosing the right design partner makes all the difference. At
              AAKAR, we combine creative thinking, thoughtful planning, and
              attention to detail to make your journey as rewarding as the space
              we create.
            </p>

            {/* <Link
              to="/about"
              className="group mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-primary)] transition-colors hover:text-[var(--color-primary-hover)]"
            >
              Know More About Us
              <ArrowUpRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </Link> */}
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:gap-8">
          {/* Left Image */}
          <div className="group relative min-h-[450px] overflow-hidden rounded-[18px] bg-[var(--bg-tertiary)] lg:min-h-[620px]">
            <img
              src="/images/process-development.jpg"
              alt="AAKAR contemporary interior design and craftsmanship"
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
            />

            {/* Image Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />

            {/* Image Content */}
            <div className="absolute bottom-0 left-0 right-0 p-7 sm:p-10">
              <span className="mb-4 block text-[10px] font-semibold uppercase tracking-[0.2em] text-white/70">
                The AAKAR Philosophy
              </span>

              <h3 className="max-w-[440px] font-heading text-3xl font-semibold leading-[1.15] tracking-[-0.04em] text-white sm:text-4xl">
                Designed with purpose.
                <span className="block text-[var(--color-tertiary)]">
                  Crafted to inspire.
                </span>
              </h3>

              <div className="mt-7 flex items-center gap-3">
                <span className="h-px w-10 bg-[var(--color-tertiary)]" />

                <span className="text-[10px] font-medium uppercase tracking-[0.15em] text-white/80">
                  Spaces That Feel Like You
                </span>
              </div>
            </div>

            {/* Floating Detail */}
            <div className="absolute right-5 top-5 flex h-12 w-12 items-center justify-center rounded-full border border-white/40 bg-black/20 text-white backdrop-blur-md">
              <MoveUpRight size={20} />
            </div>
          </div>

          {/* Right Feature Cards */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {advantages.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.number}
                  className="group relative flex min-h-[265px] flex-col overflow-hidden rounded-[16px] border border-[var(--border-primary)] bg-[var(--bg-surface)] p-6 transition-all duration-500 hover:-translate-y-1 hover:border-[var(--color-primary)] hover:shadow-[var(--shadow-md)] sm:p-7"
                >
                  {/* Card Top */}
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold tracking-widest text-[var(--color-primary)]">
                      {item.number}
                    </span>

                    <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[var(--border-secondary)] bg-[var(--bg-secondary)] text-[var(--color-primary)] transition-all duration-300 group-hover:bg-[var(--color-primary)] group-hover:text-white">
                      <Icon size={22} strokeWidth={1.7} />
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="mt-auto pt-12">
                    <h3 className="font-heading text-xl font-semibold tracking-[-0.035em] text-[var(--text-primary)] sm:text-2xl">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm leading-[1.8] text-[var(--text-secondary)]">
                      {item.description}
                    </p>
                  </div>

                  {/* Decorative Number */}
                  <span className="pointer-events-none absolute -bottom-5 -right-1 font-heading text-[100px] font-bold leading-none tracking-[-0.08em] text-[var(--bg-tertiary)] opacity-50 transition-colors duration-500 group-hover:text-[var(--color-tertiary)]">
                    {item.number}
                  </span>
                </article>
              );
            })}
          </div>
        </div>

        {/* Bottom Statement */}
        <div className="mt-14 flex flex-col items-center justify-between gap-6 border-t border-[var(--border-primary)] pt-8 sm:flex-row">
          <p className="max-w-[550px] text-sm leading-relaxed text-[var(--text-secondary)]">
            Every great space begins with the right conversation. Let's make
            something meaningful together.
          </p>

          <Link
            to="/contact"
            className="group inline-flex shrink-0 items-center gap-5 rounded-full bg-[var(--text-primary)] py-2 pl-7 pr-2 text-sm font-medium text-white transition-colors duration-300 hover:bg-[var(--color-primary)]"
          >
            Start Your Project
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-tertiary)] text-[var(--text-primary)] transition-transform duration-300 group-hover:rotate-45">
              <ArrowUpRight size={19} />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
