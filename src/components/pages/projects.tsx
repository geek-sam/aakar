import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  ArrowDown,
  MapPin,
  Maximize2,
  Search,
  Clock,
} from "lucide-react";

import PageTitle from "../sections/Common/PageTitle";
import { projectCategories, projects } from "../../data/data_config";

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All Projects");

  const [searchQuery, setSearchQuery] = useState("");

  const featuredProject = projects.find((project) => project.featured);

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesCategory =
        activeCategory === "All Projects" ||
        project.category === activeCategory;

      const query = searchQuery.toLowerCase().trim();

      const matchesSearch =
        !query ||
        project.title.toLowerCase().includes(query) ||
        project.location.toLowerCase().includes(query) ||
        project.style.toLowerCase().includes(query);

      return (
        matchesCategory && matchesSearch && project.id !== featuredProject?.id
      );
    });
  }, [activeCategory, searchQuery, featuredProject]);

  const stats = [
    { number: "200+", label: "Projects Delivered" },
    { number: "10+", label: "Years Of Experience" },
    { number: "150+", label: "Happy Clients" },
    { number: "100%", label: "Commitment To Quality" },
  ];

  return (
    <main id="top" className="bg-[var(--bg-primary)]">
      {/* Page Title */}
      <PageTitle
        title="Our Projects"
        backgroundImage="/images/projects-banner.png"
      />

      {/* Projects Introduction */}
      <section className="py-20 md:py-28 lg:py-32">
        <div className="mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-9">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
            {/* Section Label */}
            <div>
              <div className="mb-7 flex items-center gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-primary)]" />

                <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--color-primary)]">
                  Our Portfolio
                </span>
              </div>

              <h2 className="max-w-[700px] font-heading text-[clamp(2.8rem,5.5vw,5rem)] font-semibold leading-[1.02] tracking-[-0.055em] text-[var(--text-primary)]">
                Spaces That
                <span className="block text-[var(--color-primary)]">
                  Inspire Living.
                </span>
              </h2>
            </div>

            {/* Description */}
            <div className="flex flex-col justify-end lg:pl-10">
              <p className="max-w-[580px] text-base leading-[1.9] text-[var(--text-secondary)]">
                Every project begins with an idea and evolves into a space with
                its own character. Explore our collection of residential and
                commercial interiors, thoughtfully designed around people,
                purpose, and everyday experiences.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-6">
                <span className="text-xs font-semibold uppercase tracking-wider text-[var(--text-tertiary)]">
                  Explore Our Work
                </span>

                <ArrowDown size={18} className="text-[var(--color-primary)]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Project */}
      {featuredProject && (
        <section className="pb-24 md:pb-32">
          <div className="mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-9">
            <div className="mb-8 flex items-center justify-between">
              <span className="text-[10px] font-semibold uppercase tracking-[0.17em] text-[var(--color-primary)]">
                Featured Project
              </span>

              <span className="text-xs text-[var(--text-tertiary)]">
                01 / 01
              </span>
            </div>

            <article className="group relative min-h-[450px] overflow-hidden rounded-[18px] bg-[var(--bg-dark)] md:min-h-[650px]">
              <img
                src={featuredProject.image}
                alt={featuredProject.title}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-black/10" />

              {/* Category */}
              <span className="absolute left-6 top-6 rounded-full border border-white/40 bg-black/20 px-4 py-2 text-[10px] font-semibold uppercase tracking-wider text-white backdrop-blur-sm sm:left-10 sm:top-10">
                {featuredProject.category}
              </span>

              {/* Featured Details */}
              <div className="absolute inset-x-0 bottom-0 flex flex-col justify-between gap-8 p-7 sm:p-10 lg:flex-row lg:items-end lg:p-14">
                <div className="max-w-[700px]">
                  <div className="mb-5 flex flex-wrap items-center gap-4 text-xs text-white/75">
                    <span className="flex items-center gap-2">
                      <MapPin size={14} />
                      {featuredProject.location}
                    </span>

                    <span>{featuredProject.year}</span>

                    <span>{featuredProject.area}</span>
                  </div>

                  <h3 className="font-heading text-[clamp(2.5rem,5vw,5rem)] font-semibold leading-[1.05] tracking-[-0.055em] text-white">
                    {featuredProject.title}
                  </h3>

                  <p className="mt-5 max-w-[550px] text-sm leading-[1.8] text-white/70">
                    {featuredProject.description}
                  </p>
                </div>

                <Link
                  to={`/projects/${featuredProject.slug}`}
                  className="group/btn inline-flex w-fit shrink-0 items-center gap-4 rounded-full bg-[var(--color-tertiary)] py-2 pl-6 pr-2 text-sm font-semibold text-[var(--text-primary)] transition-colors hover:bg-white"
                >
                  Discuss A Project
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--bg-dark)] text-white transition-transform duration-300 group-hover/btn:rotate-45">
                    <ArrowUpRight size={18} />
                  </span>
                </Link>
              </div>
            </article>
          </div>
        </section>
      )}

      {/* Project Collection */}
      <section className="bg-[var(--bg-secondary)] py-20 md:py-28">
        <div className="mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-9">
          {/* Section Heading */}
          <div className="mb-12 flex flex-col justify-between gap-7 lg:flex-row lg:items-end">
            <div>
              <div className="mb-5 flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-primary)]" />

                <span className="text-[10px] font-semibold uppercase tracking-[0.17em] text-[var(--color-primary)]">
                  Selected Works
                </span>
              </div>

              <h2 className="font-heading text-[clamp(2.5rem,5vw,4.5rem)] font-semibold leading-[1.05] tracking-[-0.055em] text-[var(--text-primary)]">
                Explore Our
                <span className="text-[var(--color-primary)]"> Creations.</span>
              </h2>
            </div>

            {/* Search */}
            <div className="relative w-full lg:max-w-[320px]">
              <Search
                size={17}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--text-tertiary)]"
              />

              <input
                type="search"
                value={searchQuery}
                onChange={(event) => setSearchQuery(event.target.value)}
                placeholder="Search projects..."
                aria-label="Search projects"
                className="h-12 w-full rounded-full border border-[var(--border-primary)] bg-[var(--bg-surface)] pl-11 pr-5 text-sm text-[var(--text-primary)] outline-none transition-colors placeholder:text-[var(--text-tertiary)] focus:border-[var(--color-primary)]"
              />
            </div>
          </div>

          {/* Category Filters */}
          <div className="mb-12 flex gap-3 overflow-x-auto pb-3">
            {projectCategories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                aria-pressed={activeCategory === category}
                className={`shrink-0 rounded-full border px-5 py-3 text-xs font-semibold transition-all duration-300 ${
                  activeCategory === category
                    ? "border-[var(--text-primary)] bg-[var(--text-primary)] text-white"
                    : "border-[var(--border-primary)] bg-[var(--bg-surface)] text-[var(--text-secondary)] hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          {filteredProjects.length > 0 ? (
            <div className="grid grid-cols-1 gap-x-7 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
              {filteredProjects.map((project, index) => (
                <article key={project.id} className="group">
                  {/* Project Image */}
                  <div className="relative aspect-[4/5] overflow-hidden rounded-[15px] bg-[var(--bg-tertiary)]">
                    <img
                      src={project.image}
                      alt={project.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />

                    {/* Category */}
                    <span className="absolute left-4 top-4 rounded-full border border-white/60 bg-black/20 px-4 py-2 text-[10px] font-semibold uppercase tracking-wide text-white backdrop-blur-sm">
                      {project.category}
                    </span>

                    {/* Hover Action */}
                    <Link
                      to={`/projects/${project.slug}`}
                      aria-label={`Enquire about ${project.title}`}
                      className="absolute bottom-5 right-5 flex h-11 w-11 translate-y-3 items-center justify-center rounded-full bg-[var(--color-tertiary)] text-[var(--text-primary)] opacity-0 transition-all duration-300 hover:bg-white group-hover:translate-y-0 group-hover:opacity-100"
                    >
                      <ArrowUpRight size={19} />
                    </Link>

                    {/* Project Index */}
                    <span className="absolute bottom-5 left-5 text-xs font-semibold text-white/80">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  {/* Project Information */}
                  <div className="mt-5">
                    <div className="flex flex-wrap items-center justify-between gap-3 text-[11px] text-[var(--text-tertiary)]">
                      <span className="flex items-center gap-1.5">
                        <MapPin size={13} />
                        {project.location}
                      </span>

                      <span>{project.year}</span>
                    </div>

                    <h3 className="mt-3 font-heading text-xl font-semibold tracking-[-0.035em] text-[var(--text-primary)] transition-colors duration-300 group-hover:text-[var(--color-primary)] sm:text-2xl">
                      {project.title}
                    </h3>

                    <p className="mt-3 line-clamp-2 text-sm leading-[1.8] text-[var(--text-secondary)]">
                      {project.description}
                    </p>

                    <div className="mt-5 flex items-center justify-between border-t border-[var(--border-primary)] pt-4">
                      <span className="flex items-center gap-2 text-xs text-[var(--text-tertiary)]">
                        <Maximize2 size={13} />
                        {project.area}
                      </span>

                      <span className="text-xs font-medium text-[var(--color-primary)]">
                        {project.style}
                      </span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            /* Empty State */
            <div className="flex min-h-[300px] flex-col items-center justify-center rounded-[18px] border border-dashed border-[var(--border-primary)] bg-[var(--bg-surface)] px-5 text-center">
              <Search size={30} className="text-[var(--text-tertiary)]" />

              <h3 className="mt-5 font-heading text-xl font-semibold text-[var(--text-primary)]">
                No Projects Found
              </h3>

              <p className="mt-2 text-sm text-[var(--text-secondary)]">
                Try another search term or category.
              </p>

              <button
                onClick={() => {
                  setActiveCategory("All Projects");
                  setSearchQuery("");
                }}
                className="mt-5 text-sm font-semibold text-[var(--color-primary)] hover:underline"
              >
                Clear Filters
              </button>
            </div>
          )}

          {/* Results Count */}
          <div className="mt-14 border-t border-[var(--border-primary)] pt-6">
            <p className="text-xs text-[var(--text-tertiary)]">
              Showing{" "}
              <span className="font-semibold text-[var(--text-primary)]">
                {filteredProjects.length}
              </span>{" "}
              projects
            </p>
          </div>
        </div>
      </section>

      {/* Project Statistics */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-9">
          <div className="mb-12 max-w-[650px]">
            <span className="text-[10px] font-semibold uppercase tracking-[0.17em] text-[var(--color-primary)]">
              Our Journey In Numbers
            </span>

            <h2 className="mt-5 font-heading text-3xl font-semibold tracking-[-0.045em] text-[var(--text-primary)] md:text-4xl">
              Built On Experience.
              <span className="text-[var(--color-primary)]">
                {" "}
                Defined By Trust.
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="rounded-[15px] border border-[var(--border-primary)] border-t-[3px] border-t-[var(--color-primary)] bg-[var(--bg-surface)] px-6 py-10 text-center shadow-[var(--shadow-sm)] transition-transform duration-300 hover:-translate-y-1"
              >
                <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl border border-[var(--border-primary)] bg-[var(--bg-secondary)] text-[var(--color-primary)]">
                  {index === 0 && <Maximize2 size={23} />}
                  {index === 1 && <Clock size={23} />}
                  {index === 2 && <MapPin size={23} />}
                  {index === 3 && <ArrowUpRight size={23} />}
                </span>

                <h3 className="mt-5 font-heading text-4xl font-semibold tracking-[-0.04em] text-[var(--text-primary)] md:text-5xl">
                  {stat.number}
                </h3>

                <p className="mt-3 text-xs font-medium tracking-wide text-[var(--text-secondary)]">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project CTA */}
      <section className="pb-24 md:pb-32">
        <div className="mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-9">
          <div className="relative overflow-hidden rounded-[18px] bg-[var(--bg-dark)] px-7 py-16 text-center sm:px-12 md:py-24">
            <div className="pointer-events-none absolute inset-0 opacity-15">
              <div className="process-grid-bg absolute inset-0" />
            </div>

            <div className="relative z-10 mx-auto max-w-[800px]">
              <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--color-tertiary)]">
                Have A Project In Mind?
              </span>

              <h2 className="mt-6 font-heading text-[clamp(2.5rem,5vw,4.5rem)] font-semibold leading-[1.05] tracking-[-0.05em] text-white">
                Let's Design A Space
                <span className="block text-[var(--color-tertiary)]">
                  That Feels Like You.
                </span>
              </h2>

              <p className="mx-auto mt-6 max-w-[500px] text-sm leading-[1.9] text-white/60">
                Your ideas deserve thoughtful execution. Let's work together to
                create something meaningful, functional, and timeless.
              </p>

              <Link
                to="/contact"
                className="group mt-9 inline-flex items-center gap-4 rounded-full bg-[var(--color-tertiary)] py-2 pl-7 pr-2 text-sm font-semibold text-[var(--text-primary)] transition-colors duration-300 hover:bg-white"
              >
                Start Your Project
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--bg-dark)] text-white transition-transform duration-300 group-hover:rotate-45">
                  <ArrowUpRight size={18} />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
