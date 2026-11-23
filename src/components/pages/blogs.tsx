import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Search,
  Clock3,
  CalendarDays,
} from "lucide-react";
import PageTitle from "../sections/Common/PageTitle";
import { blogPosts } from "../../data/data_config";

const categories = [
  "All Articles",
  "Interior Design",
  "Design Trends",
  "Inspiration",
  "Materials",
  "Lighting",
];

const POSTS_PER_PAGE = 6;

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState("All Articles");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const featuredPost = blogPosts[0];

  // Filter articles
  const filteredPosts = useMemo(() => {
    return blogPosts.slice(1).filter((post) => {
      const matchesCategory =
        activeCategory === "All Articles" || post.category === activeCategory;

      const query = searchQuery.toLowerCase().trim();

      const matchesSearch =
        !query ||
        post.title.toLowerCase().includes(query) ||
        post.excerpt.toLowerCase().includes(query) ||
        post.category.toLowerCase().includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  // Pagination
  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);

  const paginatedPosts = filteredPosts.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE,
  );

  const changeCategory = (category: string) => {
    setActiveCategory(category);
    setCurrentPage(1);
  };

  const changeSearch = (value: string) => {
    setSearchQuery(value);
    setCurrentPage(1);
  };

  return (
    <main id="top" className="bg-[var(--bg-primary)]">
      {/* Page Banner */}
      <PageTitle title="Our Blog" backgroundImage="/images/about-main.jpg" />

      {/* Featured Article */}
      <section className="py-20 md:py-28 lg:py-32">
        <div className="mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-9">
          {/* Section Heading */}
          <div className="mb-10 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <div className="mb-5 flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-primary)]" />

                <span className="text-[10px] font-semibold uppercase tracking-[0.17em] text-[var(--color-primary)]">
                  Editor's Pick
                </span>
              </div>

              <h2 className="font-heading text-3xl font-semibold tracking-[-0.045em] text-[var(--text-primary)] md:text-4xl">
                Featured{" "}
                <span className="text-[var(--color-primary)]">Story</span>
              </h2>
            </div>

            <p className="max-w-[380px] text-sm leading-[1.8] text-[var(--text-secondary)]">
              Handpicked ideas, insights, and inspiration from the world of
              interior design.
            </p>
          </div>

          {/* Featured Layout */}
          <article className="group grid overflow-hidden rounded-[18px] border border-[var(--border-primary)] bg-[var(--bg-surface)] lg:grid-cols-[1.15fr_0.85fr]">
            {/* Featured Image */}
            <Link
              to={`/blog/${featuredPost.slug}`}
              className="relative block aspect-[16/10] overflow-hidden lg:aspect-auto lg:min-h-[470px]"
            >
              <img
                src={featuredPost.image}
                alt={featuredPost.title}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />

              <span className="absolute left-6 top-6 rounded-full bg-[var(--color-primary)] px-4 py-2 text-[10px] font-semibold uppercase tracking-wide text-white">
                {featuredPost.category}
              </span>
            </Link>

            {/* Featured Content */}
            <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-14">
              <div className="flex flex-wrap items-center gap-4 text-xs text-[var(--text-tertiary)]">
                <span className="flex items-center gap-2">
                  <CalendarDays size={14} />
                  {featuredPost.date}
                </span>

                <span className="flex items-center gap-2">
                  <Clock3 size={14} />
                  {featuredPost.readTime}
                </span>
              </div>

              <h3 className="mt-7 font-heading text-3xl font-semibold leading-[1.15] tracking-[-0.045em] text-[var(--text-primary)] transition-colors group-hover:text-[var(--color-primary)] md:text-4xl xl:text-5xl">
                {featuredPost.title}
              </h3>

              <p className="mt-6 text-sm leading-[1.9] text-[var(--text-secondary)]">
                {featuredPost.excerpt}
              </p>

              <div className="mt-8 flex items-center justify-between border-t border-[var(--border-secondary)] pt-6">
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-[var(--text-tertiary)]">
                    Written by
                  </span>

                  <p className="mt-1 text-sm font-semibold text-[var(--text-primary)]">
                    {featuredPost.author}
                  </p>
                </div>

                <Link
                  to={`/blogs/${featuredPost.slug}`}
                  aria-label="Read featured article"
                  className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--text-primary)] text-white transition-all duration-300 hover:bg-[var(--color-primary)]"
                >
                  <ArrowUpRight size={21} />
                </Link>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* Latest Articles */}
      <section className="relative overflow-hidden bg-[var(--bg-secondary)] py-20 md:py-28">
        <div className="mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-9">
          {/* Section Heading */}
          <div className="mb-12 flex flex-col justify-between gap-7 lg:flex-row lg:items-end">
            <div>
              <div className="mb-5 flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-primary)]" />

                <span className="text-[10px] font-semibold uppercase tracking-[0.17em] text-[var(--color-primary)]">
                  Straight From The Newsroom
                </span>
              </div>

              <h2 className="font-heading text-[clamp(2.5rem,5vw,4.5rem)] font-semibold leading-[1.05] tracking-[-0.055em] text-[var(--text-primary)]">
                Explore Our Latest{" "}
                <span className="text-[var(--color-primary)]">Articles.</span>
              </h2>
            </div>

            {/* Search */}
            <div className="relative w-full lg:max-w-[340px]">
              <Search
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--text-tertiary)]"
              />

              <input
                type="search"
                value={searchQuery}
                onChange={(e) => changeSearch(e.target.value)}
                placeholder="Search articles..."
                aria-label="Search articles"
                className="h-12 w-full rounded-full border border-[var(--border-primary)] bg-[var(--bg-surface)] pl-12 pr-5 text-sm text-[var(--text-primary)] outline-none transition-colors placeholder:text-[var(--text-tertiary)] focus:border-[var(--color-primary)]"
              />
            </div>
          </div>

          {/* Category Filters */}
          <div className="mb-12 flex gap-3 overflow-x-auto pb-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => changeCategory(category)}
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

          {/* Article Grid */}
          {paginatedPosts.length > 0 ? (
            <div className="grid grid-cols-1 gap-x-7 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
              {paginatedPosts.map((post) => (
                <article key={post.id} className="group">
                  {/* Image */}
                  <Link
                    to={`/blogs/${post.slug}`}
                    className="relative block aspect-[4/3] overflow-hidden rounded-[15px] bg-[var(--bg-tertiary)]"
                  >
                    <img
                      src={post.image}
                      alt={post.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />

                    <span className="absolute left-4 top-4 rounded-full bg-[var(--color-primary)] px-4 py-2 text-[10px] font-semibold text-white">
                      {post.category}
                    </span>

                    <span className="absolute bottom-4 right-4 flex h-10 w-10 translate-y-3 items-center justify-center rounded-full bg-[var(--bg-surface)] text-[var(--text-primary)] opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                      <ArrowUpRight size={18} />
                    </span>
                  </Link>

                  {/* Metadata */}
                  <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 text-[11px] text-[var(--text-tertiary)]">
                    <span className="flex items-center gap-1.5">
                      <CalendarDays size={13} />
                      {post.date}
                    </span>

                    <span className="flex items-center gap-1.5">
                      <Clock3 size={13} />
                      {post.readTime}
                    </span>
                  </div>

                  {/* Title */}
                  <Link to={`/blogs/${post.slug}`}>
                    <h3 className="mt-4 line-clamp-2 font-heading text-xl font-semibold leading-[1.3] tracking-[-0.035em] text-[var(--text-primary)] transition-colors duration-300 group-hover:text-[var(--color-primary)] sm:text-2xl">
                      {post.title}
                    </h3>
                  </Link>

                  {/* Description */}
                  <p className="mt-3 line-clamp-3 text-sm leading-[1.8] text-[var(--text-secondary)]">
                    {post.excerpt}
                  </p>
                </article>
              ))}
            </div>
          ) : (
            /* Empty State */
            <div className="flex min-h-[280px] flex-col items-center justify-center rounded-[18px] border border-dashed border-[var(--border-primary)] bg-[var(--bg-surface)] px-5 text-center">
              <Search size={30} className="text-[var(--text-tertiary)]" />

              <h3 className="mt-5 font-heading text-xl font-semibold text-[var(--text-primary)]">
                No articles found
              </h3>

              <p className="mt-2 max-w-[350px] text-sm leading-relaxed text-[var(--text-secondary)]">
                Try another search term or select a different category.
              </p>

              <button
                onClick={() => {
                  changeSearch("");
                  changeCategory("All Articles");
                }}
                className="mt-5 text-sm font-semibold text-[var(--color-primary)] hover:underline"
              >
                Clear Filters
              </button>
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="mt-16 flex items-center justify-center gap-3">
              <button
                onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                disabled={currentPage === 1}
                aria-label="Previous page"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--border-primary)] text-[var(--text-primary)] transition-all hover:border-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white disabled:cursor-not-allowed disabled:opacity-30"
              >
                <ArrowLeft size={17} />
              </button>

              {Array.from({ length: totalPages }).map((_, index) => {
                const page = index + 1;

                return (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    aria-label={`Page ${page}`}
                    aria-current={currentPage === page ? "page" : undefined}
                    className={`flex h-11 w-11 items-center justify-center rounded-full text-sm font-semibold transition-all ${
                      currentPage === page
                        ? "bg-[var(--color-primary)] text-white"
                        : "border border-[var(--border-primary)] text-[var(--text-primary)] hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]"
                    }`}
                  >
                    {page}
                  </button>
                );
              })}

              <button
                onClick={() =>
                  setCurrentPage((p) => Math.min(totalPages, p + 1))
                }
                disabled={currentPage === totalPages}
                aria-label="Next page"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--border-primary)] text-[var(--text-primary)] transition-all hover:border-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white disabled:cursor-not-allowed disabled:opacity-30"
              >
                <ArrowRight size={17} />
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter / Contact CTA */}
      <section className="relative overflow-hidden bg-[var(--bg-primary)] py-24 md:py-32">
        <div className="mx-auto max-w-[1800px] px-5 sm:px-8 lg:px-9">
          <div className="relative overflow-hidden rounded-[20px] bg-[var(--bg-dark)] px-7 py-16 text-center sm:px-12 md:py-20">
            {/* Background Decoration */}
            <div className="pointer-events-none absolute inset-0 opacity-20">
              <div className="process-grid-bg absolute inset-0" />
            </div>

            <div className="relative z-10 mx-auto max-w-[720px]">
              <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--color-tertiary)]">
                Stay Inspired
              </span>

              <h2 className="mt-5 font-heading text-[clamp(2.3rem,5vw,4.5rem)] font-semibold leading-[1.05] tracking-[-0.05em] text-white">
                Great Spaces Begin With{" "}
                <span className="text-[var(--color-tertiary)]">
                  Great Ideas.
                </span>
              </h2>

              <p className="mx-auto mt-5 max-w-[490px] text-sm leading-[1.8] text-white/60">
                Have a space waiting to be transformed? Let's discuss your ideas
                and create something that feels uniquely yours.
              </p>

              <Link
                to="/contact"
                className="group mt-9 inline-flex items-center gap-4 rounded-full bg-[var(--color-tertiary)] py-2 pl-7 pr-2 text-sm font-semibold text-[var(--text-primary)] transition-colors duration-300 hover:bg-[var(--color-primary)] hover:text-white"
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
