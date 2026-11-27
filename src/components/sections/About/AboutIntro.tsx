import { Link } from "react-router-dom";
import { ArrowUpRight, Eye, Compass, MoveUpRight } from "lucide-react";

export default function AboutIntroSection() {
  return (
    <section className="relative overflow-hidden bg-[var(--bg-primary)] py-24 md:py-32 lg:py-40">
      <div className="mx-auto max-w-[1800px] px-5 sm:px-8 lg:px-9">
        {/* Brand History */}
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-24">
          {/* Left Content */}
          <div className="relative z-10">
            {/* Section Label */}
            <div className="mb-8 flex items-center gap-3">
              <span className="h-px w-10 bg-[var(--color-primary)]" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--color-primary)]">
                Our Story
              </span>
            </div>

            {/* Heading */}
            <h2 className="max-w-[700px] font-heading text-[clamp(2.8rem,5.5vw,5rem)] font-semibold leading-[1.02] tracking-[-0.055em] text-[var(--text-primary)]">
              Every Space Has
              <span className="block text-[var(--color-primary)]">
                A Story To Tell.
              </span>
              We Help Create It.
            </h2>

            {/* Brand History */}
            <div className="mt-9 max-w-[620px] space-y-5">
              <p className="text-base leading-[1.95] text-[var(--text-secondary)]">
                AAKAR was founded on a simple belief: the spaces around us
                should be a reflection of who we are and how we live. We see
                interior design as more than arranging furniture or selecting
                finishes. It is about understanding people, their aspirations,
                and the experiences they want their spaces to create.
              </p>

              <p className="text-sm leading-[1.95] text-[var(--text-secondary)]">
                Our approach brings together thoughtful planning, contemporary
                aesthetics, material exploration, and an appreciation for
                craftsmanship. We believe that every detail contributes to the
                larger experience, and every project deserves a design approach
                that feels personal and purposeful.
              </p>

              <p className="text-sm leading-[1.95] text-[var(--text-secondary)]">
                From the first conversation to the final details, our focus
                remains on creating environments that balance beauty with
                functionality and feel meaningful long after the project is
                complete.
              </p>
            </div>

            {/* Brand Statement */}
            <div className="mt-10 border-l-[2px] border-[var(--color-primary)] py-2 pl-6">
              <p className="max-w-[480px] font-heading text-xl font-medium italic leading-[1.6] tracking-[-0.02em] text-[var(--text-primary)] md:text-2xl">
                "We don't just design spaces. We shape experiences around the
                way people live."
              </p>
            </div>

            {/* CTA */}
            <div className="mt-10 flex items-center gap-6">
              <Link
                to="/projects"
                className="group inline-flex items-center gap-5 rounded-full bg-[var(--text-primary)] py-2 pl-7 pr-2 text-sm font-medium text-white transition-colors duration-300 hover:bg-[var(--color-primary)]"
              >
                Explore Our Work
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-tertiary)] text-[var(--text-primary)] transition-transform duration-300 group-hover:rotate-45">
                  <ArrowUpRight size={18} />
                </span>
              </Link>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative mx-auto w-full max-w-[700px]">
            {/* Main Image */}
            <div className="relative aspect-[4/5] overflow-hidden rounded-sm bg-[var(--bg-secondary)]">
              <img
                src="/images/about-story.png"
                alt="Contemporary interior architecture with natural materials and warm lighting"
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-1000 hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>

            {/* Floating Image Detail */}
            <div className="absolute -bottom-8 -left-4 w-[65%] max-w-[320px] border border-[var(--border-primary)] bg-[var(--bg-surface)] p-3 shadow-[var(--shadow-md)] sm:-left-10 sm:p-5">
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src="/images/about-story-detail.png"
                  alt="Interior material selection and architectural craftsmanship"
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="mt-4 flex items-center justify-between gap-3">
                <div>
                  <span className="block text-[9px] font-semibold uppercase tracking-[0.15em] text-[var(--color-primary)]">
                    Our Approach
                  </span>

                  <h3 className="mt-1 font-heading text-lg font-semibold text-[var(--text-primary)]">
                    Designed With Purpose.
                  </h3>
                </div>

                <span className="text-[var(--color-primary)]">
                  <MoveUpRight size={21} />
                </span>
              </div>
            </div>

            {/* Vertical Label */}
            <div className="absolute -right-5 top-10 hidden [writing-mode:vertical-rl] lg:block">
              <span className="text-[9px] font-medium uppercase tracking-[0.25em] text-[var(--text-tertiary)]">
                Thoughtful Spaces · Meaningful Experiences
              </span>
            </div>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="mt-32 border-t border-[var(--border-primary)] pt-16 md:mt-44 md:pt-20">
          {/* Section Heading */}
          <div className="mb-12 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div>
              <div className="mb-6 flex items-center gap-3">
                <span className="h-px w-10 bg-[var(--color-primary)]" />

                <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--color-primary)]">
                  Our Purpose & Direction
                </span>
              </div>

              <h2 className="font-heading text-[clamp(2.5rem,5vw,4.5rem)] font-semibold leading-[1.05] tracking-[-0.055em] text-[var(--text-primary)]">
                What Drives Us.
                <span className="text-[var(--color-primary)]">
                  {" "}
                  Where We Aspire.
                </span>
              </h2>
            </div>

            <p className="max-w-[390px] text-sm leading-[1.9] text-[var(--text-secondary)]">
              Our mission guides what we do today. Our vision shapes the future
              we want to create through thoughtful design.
            </p>
          </div>

          {/* Mission & Vision Cards */}
          <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
            {/* Mission */}
            <article className="group relative overflow-hidden rounded-[16px] border border-[var(--border-primary)] bg-[var(--bg-surface)] p-8 transition-all duration-500 hover:-translate-y-1 hover:border-[var(--color-primary)] hover:shadow-[var(--shadow-md)] md:p-12">
              <div className="flex items-center justify-between">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[var(--bg-secondary)] text-[var(--color-primary)] transition-all duration-300 group-hover:bg-[var(--color-primary)] group-hover:text-white">
                  <Compass size={25} strokeWidth={1.5} />
                </div>

                <span className="font-heading text-6xl font-semibold tracking-[-0.08em] text-[var(--bg-tertiary)]">
                  01
                </span>
              </div>

              <div className="mt-12">
                <span className="text-[10px] font-semibold uppercase tracking-[0.17em] text-[var(--color-primary)]">
                  Our Mission
                </span>

                <h3 className="mt-4 font-heading text-3xl font-semibold tracking-[-0.045em] text-[var(--text-primary)] md:text-4xl">
                  Designing For Better Living.
                </h3>

                <p className="mt-6 max-w-[520px] text-sm leading-[1.95] text-[var(--text-secondary)]">
                  To create thoughtful, functional, and aesthetically meaningful
                  spaces that enhance everyday living. Through creativity,
                  collaboration, and craftsmanship, we aim to transform
                  individual visions into environments that inspire and endure.
                </p>
              </div>
            </article>

            {/* Vision */}
            <article className="group relative overflow-hidden rounded-[16px] border border-[var(--border-primary)] bg-[var(--bg-dark)] p-8 text-white transition-all duration-500 hover:-translate-y-1 hover:shadow-[var(--shadow-md)] md:p-12">
              <div className="flex items-center justify-between">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-white/15 bg-white/5 text-[var(--color-tertiary)] transition-all duration-300 group-hover:bg-[var(--color-tertiary)] group-hover:text-[var(--text-primary)]">
                  <Eye size={25} strokeWidth={1.5} />
                </div>

                <span className="font-heading text-6xl font-semibold tracking-[-0.08em] text-white/10">
                  02
                </span>
              </div>

              <div className="mt-12">
                <span className="text-[10px] font-semibold uppercase tracking-[0.17em] text-[var(--color-tertiary)]">
                  Our Vision
                </span>

                <h3 className="mt-4 font-heading text-3xl font-semibold tracking-[-0.045em] text-white md:text-4xl">
                  Shaping A More Thoughtful World.
                </h3>

                <p className="mt-6 max-w-[520px] text-sm leading-[1.95] text-white/60">
                  To become a trusted name in interior design, known for
                  creating distinctive spaces that bring together innovation,
                  timeless aesthetics, and responsible craftsmanship. We aspire
                  to make thoughtful design more meaningful to the way people
                  experience life.
                </p>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
