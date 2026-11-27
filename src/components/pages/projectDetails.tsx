import { Link, Navigate, useParams } from "react-router-dom";
import { ArrowLeft, ArrowUpRight, MoveUpRight, Check } from "lucide-react";
import { projectDetails, projects } from "../../data/data_config";

export default function ProjectDetails() {
  const { slug } = useParams<{ slug: string }>();

  const project = projects.find((item) => item.slug === slug);
  const details = slug ? projectDetails[slug] : undefined;

  if (!project || !details) {
    return <Navigate to="/projects" replace />;
  }

  const relatedProjects = projects
    .filter(
      (item) =>
        item.slug !== project.slug && item.category === project.category,
    )
    .concat(
      projects.filter(
        (item) =>
          item.slug !== project.slug && item.category !== project.category,
      ),
    )
    .slice(0, 3);

  return (
    <main className="overflow-hidden bg-[var(--bg-primary)]">
      {/* Project Hero */}
      <section className="relative min-h-[620px] h-[78svh] max-h-[900px] overflow-hidden bg-[var(--bg-dark)]">
        <img
          src={project.image}
          alt={project.title}
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-black/20" />

        <div className="relative mx-auto flex h-full max-w-[1800px] flex-col justify-between px-5 pb-12 pt-32 sm:px-8 sm:pb-16 lg:px-9">
          <Link
            to="/projects"
            className="inline-flex w-fit items-center gap-2 text-sm text-white/85 transition-colors hover:text-white"
          >
            <ArrowLeft size={16} />
            Back to projects
          </Link>

          <div className="max-w-4xl">
            <div className="mb-5 flex flex-wrap items-center gap-3 text-xs font-medium uppercase tracking-[0.18em] text-white/75">
              <span>{project.category}</span>
              <span className="h-1 w-1 rounded-full bg-white/60" />
              <span>{project.location}</span>
              <span className="h-1 w-1 rounded-full bg-white/60" />
              <span>{project.year}</span>
            </div>

            <h1 className="font-heading text-5xl leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-8xl">
              {project.title}
            </h1>

            <p className="mt-6 max-w-2xl text-sm leading-7 text-white/75 sm:text-base">
              {project.description}
            </p>
          </div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="px-5 py-20 sm:px-8 sm:py-28 lg:px-9">
        <div className="mx-auto grid max-w-[1800px] gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
          <div>
            <span className="mb-5 block text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-primary)]">
              Project overview
            </span>

            <h2 className="max-w-md font-heading text-4xl leading-tight text-[var(--text-primary)] sm:text-5xl">
              A space shaped by purpose and detail.
            </h2>
          </div>

          <div className="max-w-2xl lg:justify-self-end">
            <p className="text-base leading-8 text-[var(--text-secondary)] sm:text-lg">
              {details.overview}
            </p>

            <div className="mt-10 grid grid-cols-2 gap-x-8 gap-y-7 border-t border-[var(--border-primary)] pt-7 sm:grid-cols-3">
              <div>
                <span className="block text-xs uppercase tracking-[0.15em] text-[var(--text-tertiary)]">
                  Category
                </span>
                <p className="mt-2 text-sm font-medium text-[var(--text-primary)]">
                  {project.category}
                </p>
              </div>

              <div>
                <span className="block text-xs uppercase tracking-[0.15em] text-[var(--text-tertiary)]">
                  Location
                </span>
                <p className="mt-2 text-sm font-medium text-[var(--text-primary)]">
                  {project.location}
                </p>
              </div>

              <div>
                <span className="block text-xs uppercase tracking-[0.15em] text-[var(--text-tertiary)]">
                  Year
                </span>
                <p className="mt-2 text-sm font-medium text-[var(--text-primary)]">
                  {project.year}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Design Concept */}
      <section className="bg-[var(--bg-secondary)] px-5 py-20 sm:px-8 sm:py-28 lg:px-9">
        <div className="mx-auto grid max-w-[1800px] gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <span className="mb-5 block text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-primary)]">
              The design concept
            </span>

            <h2 className="max-w-lg font-heading text-4xl leading-tight text-[var(--text-primary)] sm:text-5xl">
              Thoughtful choices. A distinctive identity.
            </h2>
          </div>

          <div className="max-w-2xl lg:justify-self-end">
            <p className="text-sm leading-8 text-[var(--text-secondary)] sm:text-base">
              {details.concept}
            </p>

            <div className="mt-9 border-t border-[var(--border-primary)] pt-7">
              <h3 className="mb-4 font-heading text-2xl text-[var(--text-primary)]">
                Our approach
              </h3>

              <p className="text-sm leading-8 text-[var(--text-secondary)]">
                {details.approach}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Project Gallery */}
      {/* <section className="px-5 py-20 sm:px-8 sm:py-28 lg:px-9">
        <div className="mx-auto max-w-[1800px]">
          <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <span className="mb-4 block text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-primary)]">
                Inside the project
              </span>

              <h2 className="font-heading text-4xl text-[var(--text-primary)] sm:text-5xl">
                A closer look.
              </h2>
            </div>

            <p className="max-w-sm text-sm leading-7 text-[var(--text-secondary)]">
              Explore the details, materials, and spaces that bring this project
              together.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {details.gallery.map((image, index) => (
              <div
                key={image}
                className={`group relative overflow-hidden bg-[var(--bg-secondary)] ${
                  index === 0 ? "sm:col-span-2" : ""
                }`}
              >
                <div
                  className={`overflow-hidden ${
                    index === 0 ? "aspect-[16/9]" : "aspect-[4/5]"
                  }`}
                >
                  <img
                    src={image}
                    alt={`${project.title} – project view ${index + 1}`}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Project Highlights */}
      <section className="bg-[var(--bg-secondary)] px-5 py-20 sm:px-8 sm:py-28 lg:px-9">
        <div className="mx-auto grid max-w-[1800px] gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
          <div>
            <span className="mb-5 block text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-primary)]">
              Design highlights
            </span>

            <h2 className="max-w-md font-heading text-4xl leading-tight text-[var(--text-primary)] sm:text-5xl">
              Details that make the difference.
            </h2>
          </div>

          <div className="lg:justify-self-end lg:w-full lg:max-w-2xl">
            {details.highlights.map((highlight, index) => (
              <div
                key={highlight}
                className="flex items-center gap-5 border-b border-[var(--border-primary)] py-6 first:border-t"
              >
                <span className="font-heading text-sm text-[var(--color-primary)]">
                  0{index + 1}
                </span>

                <p className="flex-1 text-sm text-[var(--text-primary)] sm:text-base">
                  {highlight}
                </p>

                <Check
                  size={17}
                  className="shrink-0 text-[var(--color-primary)]"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Projects */}
      {relatedProjects.length > 0 && (
        <section className="px-5 py-20 sm:px-8 sm:py-28 lg:px-9">
          <div className="mx-auto max-w-[1800px]">
            <div className="mb-10 flex items-end justify-between gap-5">
              <div>
                <span className="mb-4 block text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-primary)]">
                  Continue exploring
                </span>

                <h2 className="font-heading text-3xl text-[var(--text-primary)] sm:text-4xl">
                  Related projects
                </h2>
              </div>

              <Link
                to="/projects"
                className="hidden items-center gap-2 text-sm font-semibold text-[var(--text-primary)] transition-colors hover:text-[var(--color-primary)] sm:inline-flex"
              >
                View all projects
                <ArrowUpRight size={17} />
              </Link>
            </div>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {relatedProjects.map((item) => (
                <Link
                  key={item.id}
                  to={`/projects/${item.slug}`}
                  className="group"
                >
                  <div className="aspect-[4/5] overflow-hidden bg-[var(--bg-secondary)]">
                    <img
                      src={item.image}
                      alt={item.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>

                  <div className="flex items-start justify-between gap-4 pt-5">
                    <div>
                      <span className="text-xs uppercase tracking-[0.16em] text-[var(--color-primary)]">
                        {item.category}
                      </span>

                      <h3 className="mt-2 font-heading text-xl text-[var(--text-primary)] transition-colors group-hover:text-[var(--color-primary)]">
                        {item.title}
                      </h3>

                      <p className="mt-2 text-xs text-[var(--text-secondary)]">
                        {item.location}
                      </p>
                    </div>

                    <ArrowUpRight
                      size={19}
                      className="mt-1 shrink-0 text-[var(--text-secondary)] transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
                    />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="px-5 pb-20 sm:px-8 sm:pb-28 lg:px-9">
        <div className="relative mx-auto max-w-[1800px] overflow-hidden bg-[var(--bg-dark)] px-6 py-16 text-center sm:px-12 sm:py-24">
          <div className="process-grid-bg pointer-events-none absolute inset-0 opacity-20" />

          <div className="relative mx-auto max-w-3xl">
            <span className="mb-5 block text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-tertiary)]">
              Your project could be next
            </span>

            <h2 className="font-heading text-4xl leading-tight text-white sm:text-5xl lg:text-6xl">
              Have a vision
              <br />
              for your space?
            </h2>

            <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-white/65 sm:text-base">
              Let's discuss your ideas and create a space that reflects the way
              you live, work, and experience the world.
            </p>

            <Link
              to="/contact"
              className="mt-9 inline-flex items-center gap-3 bg-[var(--color-primary)] px-7 py-4 text-sm font-semibold text-white transition-colors hover:bg-[var(--color-primary-hover)]"
            >
              Start a project
              <MoveUpRight size={17} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
