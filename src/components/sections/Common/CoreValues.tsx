import { Heart, Lightbulb, Gem, Compass, ArrowUpRight } from "lucide-react";

const coreValues = [
  {
    number: "01",
    title: "People First",
    subtitle: "Designed Around You",
    description:
      "Every great space begins with understanding the people who use it. We listen, observe, and translate your lifestyle, preferences, and aspirations into meaningful design experiences.",
    icon: Heart,
    keyword: "Understanding",
  },
  {
    number: "02",
    title: "Thoughtful Design",
    subtitle: "Purpose In Every Detail",
    description:
      "We believe good design goes beyond aesthetics. Every layout, material, and detail is carefully considered to create spaces that balance visual appeal with everyday functionality.",
    icon: Lightbulb,
    keyword: "Intentionality",
  },
  {
    number: "03",
    title: "Timeless Quality",
    subtitle: "Made To Last",
    description:
      "We value craftsmanship, material integrity, and attention to detail. Our focus is on creating enduring interiors that remain relevant and beautiful beyond changing trends.",
    icon: Gem,
    keyword: "Craftsmanship",
  },
  {
    number: "04",
    title: "Honest Collaboration",
    subtitle: "Built On Trust",
    description:
      "Transparency and collaboration guide everything we do. From the first conversation to final handover, we believe in clear communication and meaningful partnerships.",
    icon: Compass,
    keyword: "Trust",
  },
];

export default function CoreValuesSection() {
  return (
    <section className="relative overflow-hidden bg-[var(--bg-secondary)] py-24 md:py-32 lg:py-40">
      {/* Background Decoration */}
      <div className="pointer-events-none absolute -right-40 top-20 h-[500px] w-[500px] rounded-full border border-[var(--border-primary)] opacity-40" />

      <div className="pointer-events-none absolute -right-20 top-40 h-[350px] w-[350px] rounded-full border border-[var(--border-primary)] opacity-40" />

      <div className="relative z-10 mx-auto max-w-[1800px] px-5 sm:px-8 lg:px-9">
        {/* Section Header */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          {/* Left Label */}
          <div className="flex flex-col justify-between">
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-[var(--color-primary)]" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--color-primary)]">
                What We Believe In
              </span>
            </div>

            <div className="mt-8 hidden lg:block">
              <span className="font-heading text-8xl font-semibold tracking-[-0.08em] text-[var(--border-primary)]">
                04
              </span>

              <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--text-tertiary)]">
                Principles That Define Us
              </p>
            </div>
          </div>

          {/* Right Heading */}
          <div>
            <h2 className="max-w-[850px] font-heading text-[clamp(2.8rem,5.5vw,5rem)] font-semibold leading-[1.02] tracking-[-0.055em] text-[var(--text-primary)]">
              More Than Design.
              <span className="block text-[var(--color-primary)]">
                It's What We Stand For.
              </span>
            </h2>

            <div className="mt-8 flex flex-col justify-between gap-6 border-t border-[var(--border-primary)] pt-6 sm:flex-row sm:items-start">
              <p className="max-w-[560px] text-sm leading-[1.9] text-[var(--text-secondary)] md:text-base">
                Our values shape every decision we make, every space we create,
                and every relationship we build. They are the foundation of how
                we approach design and bring ideas to life.
              </p>

              <span className="shrink-0 text-[10px] font-medium uppercase tracking-[0.15em] text-[var(--text-tertiary)]">
                Our Philosophy / 01—04
              </span>
            </div>
          </div>
        </div>

        {/* Core Values Grid */}
        <div className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:mt-24 lg:grid-cols-4">
          {coreValues.map((value) => {
            const Icon = value.icon;

            return (
              <article
                key={value.number}
                className="group relative flex min-h-[390px] flex-col overflow-hidden rounded-[12px] border border-[var(--border-primary)] bg-[var(--bg-surface)] p-7 transition-all duration-500 hover:-translate-y-2 hover:border-[var(--color-primary)] hover:shadow-[var(--shadow-md)] sm:p-8 lg:min-h-[420px]"
              >
                {/* Top Row */}
                <div className="flex items-start justify-between">
                  <span className="font-heading text-sm font-semibold tracking-wider text-[var(--color-primary)]">
                    {value.number}
                  </span>

                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[var(--border-primary)] bg-[var(--bg-secondary)] text-[var(--color-primary)] transition-all duration-500 group-hover:border-[var(--color-primary)] group-hover:bg-[var(--color-primary)] group-hover:text-white">
                    <Icon size={21} strokeWidth={1.5} />
                  </div>
                </div>

                {/* Main Content */}
                <div className="relative z-10 mt-auto">
                  <span className="mb-4 inline-block rounded-full border border-[var(--border-primary)] px-3 py-1.5 text-[9px] font-semibold uppercase tracking-[0.14em] text-[var(--text-tertiary)]">
                    {value.keyword}
                  </span>

                  <h3 className="font-heading text-2xl font-semibold tracking-[-0.045em] text-[var(--text-primary)] transition-colors duration-300 group-hover:text-[var(--color-primary)] md:text-[27px]">
                    {value.title}
                  </h3>

                  <p className="mt-2 text-xs font-medium text-[var(--color-primary)]">
                    {value.subtitle}
                  </p>

                  <p className="mt-5 text-sm leading-[1.85] text-[var(--text-secondary)]">
                    {value.description}
                  </p>

                  <div className="mt-8 flex items-center justify-between border-t border-[var(--border-primary)] pt-5">
                    <span className="text-[9px] font-semibold uppercase tracking-[0.16em] text-[var(--text-tertiary)]">
                      AAKAR Philosophy
                    </span>

                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--bg-secondary)] text-[var(--color-primary)] transition-all duration-300 group-hover:rotate-45 group-hover:bg-[var(--color-primary)] group-hover:text-white">
                      <ArrowUpRight size={16} />
                    </span>
                  </div>
                </div>

                {/* Decorative Background Number */}
                <span className="pointer-events-none absolute -bottom-10 -right-2 select-none font-heading text-[170px] font-semibold leading-none tracking-[-0.1em] text-[var(--bg-secondary)] opacity-80 transition-all duration-500 group-hover:-translate-y-3 group-hover:text-[var(--color-primary)] group-hover:opacity-[0.07]">
                  {value.number}
                </span>
              </article>
            );
          })}
        </div>

        {/* Bottom Statement */}
        <div className="mt-16 flex flex-col items-start justify-between gap-6 border-t border-[var(--border-primary)] pt-8 sm:flex-row sm:items-center lg:mt-20">
          <p className="max-w-[650px] font-heading text-lg font-medium leading-[1.6] tracking-tight text-[var(--text-primary)] md:text-xl">
            These aren't just values we talk about.
            <span className="text-[var(--color-primary)]">
              {" "}
              They're principles we bring into every project.
            </span>
          </p>

          <a
            href="/contact"
            className="group inline-flex shrink-0 items-center gap-4 rounded-full bg-[var(--text-primary)] py-2 pl-6 pr-2 text-xs font-semibold text-white transition-colors duration-300 hover:bg-[var(--color-primary)]"
          >
            Let's Work Together
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[var(--color-tertiary)] text-[var(--text-primary)] transition-transform duration-300 group-hover:rotate-45">
              <ArrowUpRight size={17} />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
