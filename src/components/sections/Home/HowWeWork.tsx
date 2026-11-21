import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { processSteps } from "../../../data/data_config";

export default function HowWeWork() {
  return (
    <section className="process-section relative isolate overflow-hidden bg-[var(--bg-secondary)] py-24 md:py-32 lg:py-36">
      {/* Architectural Grid Background */}
      <div className="process-grid-bg pointer-events-none absolute inset-0 -z-10" />

      <div className="relative mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-9">
        {/* Section Header */}
        <div className="mb-16 grid grid-cols-1 gap-8 lg:mb-20 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          {/* Heading */}
          <div>
            <div className="mb-7 flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-primary)]" />

              <span className="rounded-full border border-[var(--border-primary)] px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.15em] text-[var(--text-primary)]">
                How We Work
              </span>
            </div>

            <h2 className="max-w-[760px] font-heading text-[clamp(2.6rem,5.5vw,5rem)] font-semibold leading-[1.05] tracking-[-0.055em] text-[var(--text-primary)]">
              A thoughtful{" "}
              <span className="text-[var(--color-primary)]">
                design process
              </span>{" "}
              for exceptional results.
            </h2>
          </div>

          {/* Description */}
          <div className="max-w-[460px] lg:justify-self-end lg:pb-2">
            <span className="mb-4 block h-px w-12 bg-[var(--color-primary)]" />

            <p className="text-sm leading-[1.9] text-[var(--text-secondary)] md:text-base">
              Every remarkable space begins with a thoughtful process. From the
              first conversation to the final finishing touches, we bring
              clarity, creativity, and precision to every stage of your journey.
            </p>
          </div>
        </div>

        {/* Process Cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {processSteps.map((step, index) => (
            <article
              key={step.number}
              className={`process-card group relative flex flex-col overflow-hidden rounded-[16px] border border-[var(--border-secondary)] bg-[var(--bg-surface)] p-2 shadow-[var(--shadow-sm)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[var(--shadow-lg)] ${
                index % 2 === 1 ? "lg:translate-y-10" : "lg:-translate-y-1"
              }`}
            >
              {/* Image */}
              <div className="relative aspect-[4/2.3] overflow-hidden rounded-[10px] bg-[var(--bg-tertiary)]">
                <img
                  src={step.image}
                  alt={step.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Image Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/15 to-transparent" />

                {/* Step Badge */}
                <span className="absolute left-3 top-3 rounded-full border border-white/50 bg-black/15 px-3 py-1.5 text-[9px] font-semibold uppercase tracking-wider text-white backdrop-blur-sm">
                  Step {step.number}
                </span>
              </div>

              {/* Card Content */}
              <div className="relative flex flex-1 flex-col px-3 pb-5 pt-6 sm:px-4 sm:pb-7">
                <h3 className="relative z-10 max-w-[90%] font-heading text-xl font-semibold leading-snug tracking-[-0.035em] text-[var(--text-primary)] sm:text-[21px]">
                  <span className="text-[var(--color-primary)]">
                    {step.number}.
                  </span>{" "}
                  {step.title}
                </h3>

                <p className="relative z-10 mt-4 max-w-[95%] text-sm leading-[1.75] text-[var(--text-secondary)]">
                  {step.description}
                </p>

                {/* Background Step Number */}
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute bottom-0 right-2 font-heading text-[76px] font-bold leading-none tracking-[-0.08em] text-[var(--bg-tertiary)] opacity-70 transition-colors duration-500 group-hover:text-[var(--color-tertiary)]"
                >
                  {step.number}
                </span>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="relative mt-20 flex flex-col items-center justify-center gap-5 text-center lg:mt-28 lg:flex-row lg:gap-2">
          <p className="text-sm text-[var(--text-secondary)]">
            Your dream space starts with a conversation.
          </p>

          <Link
            to="/contact"
            className="group inline-flex items-center gap-1 text-sm font-semibold text-[var(--color-primary)] transition-colors hover:text-[var(--color-primary-hover)]"
          >
            Let's Begin Today
            <ArrowUpRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
