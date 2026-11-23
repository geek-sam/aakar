import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import PageTitle from "../sections/Common/PageTitle";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  CalendarDays,
  Clock3,
  Link2,
  ChevronRight,
  BookOpen,
  Book,
} from "lucide-react";

import { getBlogBySlug, getRelatedBlogs } from "../../data/blogData";

export default function BlogDetails() {
  const { slug } = useParams<{ slug: string }>();
  const [copied, setCopied] = useState(false);

  const post = slug ? getBlogBySlug(slug) : undefined;

  if (!post) {
    return (
      <main className="flex min-h-[70vh] flex-col items-center justify-center bg-[var(--bg-primary)] px-5 text-center">
        <span className="text-[var(--color-primary)]">
          <BookOpen size={42} strokeWidth={1.4} />
        </span>

        <h1 className="mt-6 font-heading text-3xl font-semibold text-[var(--text-primary)]">
          Article Not Found
        </h1>

        <p className="mt-3 text-sm text-[var(--text-secondary)]">
          The article you're looking for may have been moved or no longer
          exists.
        </p>

        <Link
          to="/blog"
          className="mt-8 inline-flex items-center gap-3 rounded-full bg-[var(--text-primary)] px-7 py-4 text-sm font-semibold text-white transition-colors hover:bg-[var(--color-primary)]"
        >
          <ArrowLeft size={17} />
          Back To Blog
        </Link>
      </main>
    );
  }

  const relatedPosts = getRelatedBlogs(post, 3);

  const headings = post.content.filter((block) => block.type === "heading");

  const shareUrl = typeof window !== "undefined" ? window.location.href : "";

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  const renderContent = () => {
    return post.content.map((block, index) => {
      switch (block.type) {
        case "heading":
          return (
            <h2
              key={index}
              id={`section-${index}`}
              className="scroll-mt-28 mb-5 mt-12 font-heading text-2xl font-semibold leading-tight tracking-[-0.04em] text-[var(--text-primary)] md:text-3xl"
            >
              {block.content}
            </h2>
          );

        case "paragraph":
          return (
            <p
              key={index}
              className="mb-6 text-[15px] leading-[2] text-[var(--text-secondary)]"
            >
              {block.content}
            </p>
          );

        case "quote":
          return (
            <blockquote
              key={index}
              className="my-10 border-l-[3px] border-[var(--color-primary)] bg-[var(--bg-secondary)] px-6 py-7 sm:px-9"
            >
              <span className="mb-3 block font-heading text-5xl leading-none text-[var(--color-primary)]">
                “
              </span>

              <p className="font-heading text-xl font-medium leading-[1.6] tracking-[-0.02em] text-[var(--text-primary)] md:text-2xl">
                {block.content}
              </p>
            </blockquote>
          );

        case "list":
          return (
            <div key={index} className="mb-8">
              <p className="mb-5 text-[15px] leading-[1.9] text-[var(--text-secondary)]">
                {block.content}
              </p>

              <ul className="space-y-4">
                {block.items?.map((item, itemIndex) => (
                  <li
                    key={itemIndex}
                    className="flex items-start gap-4 text-sm leading-[1.9] text-[var(--text-secondary)]"
                  >
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[var(--color-primary)]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          );

        default:
          return null;
      }
    });
  };

  return (
    <main id="top" className="bg-[var(--bg-primary)]">
      {/* Page Title */}
      <PageTitle
        title="Journal"
        backgroundImage="/images/blog-banner.jpg"
        breadcrumbs={[
          { label: "Home", path: "/" },
          { label: "Blog", path: "/blog" },
          { label: "Article" },
        ]}
      />

      {/* Article Header */}
      <section className="pt-16 md:pt-24">
        <div className="mx-auto max-w-[1100px] px-5 sm:px-8">
          {/* Category */}
          <div className="mb-7 flex items-center gap-3">
            <span className="rounded-full bg-[var(--bg-secondary)] px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.12em] text-[var(--color-primary)]">
              {post.category}
            </span>

            <span className="h-1 w-1 rounded-full bg-[var(--text-tertiary)]" />

            <span className="text-xs text-[var(--text-tertiary)]">
              {post.readTime}
            </span>
          </div>

          {/* Title */}
          <h1 className="max-w-[1000px] font-heading text-[clamp(2.5rem,5.5vw,5rem)] font-semibold leading-[1.08] tracking-[-0.055em] text-[var(--text-primary)]">
            {post.title}
          </h1>

          {/* Excerpt */}
          <p className="mt-7 max-w-[800px] text-base leading-[1.9] text-[var(--text-secondary)] md:text-lg">
            {post.excerpt}
          </p>

          {/* Metadata */}
          <div className="mt-9 flex flex-wrap items-center justify-between gap-6 border-y border-[var(--border-primary)] py-6">
            <div className="flex flex-wrap items-center gap-6">
              {/* Author */}
              <div>
                <span className="block text-[10px] uppercase tracking-wider text-[var(--text-tertiary)]">
                  Written By
                </span>

                <p className="mt-1 text-sm font-semibold text-[var(--text-primary)]">
                  {post.author}
                </p>
              </div>

              <span className="hidden h-9 w-px bg-[var(--border-primary)] sm:block" />

              {/* Date */}
              <div>
                <span className="block text-[10px] uppercase tracking-wider text-[var(--text-tertiary)]">
                  Published On
                </span>

                <p className="mt-1 flex items-center gap-2 text-sm text-[var(--text-primary)]">
                  <CalendarDays
                    size={14}
                    className="text-[var(--color-primary)]"
                  />
                  {post.date}
                </p>
              </div>

              <span className="hidden h-9 w-px bg-[var(--border-primary)] sm:block" />

              {/* Read Time */}
              <div>
                <span className="block text-[10px] uppercase tracking-wider text-[var(--text-tertiary)]">
                  Reading Time
                </span>

                <p className="mt-1 flex items-center gap-2 text-sm text-[var(--text-primary)]">
                  <Clock3 size={14} className="text-[var(--color-primary)]" />
                  {post.readTime}
                </p>
              </div>
            </div>

            {/* Share */}
            <div className="flex items-center gap-3">
              <span className="mr-1 text-[10px] font-semibold uppercase tracking-wider text-[var(--text-tertiary)]">
                Share
              </span>

              <button
                onClick={copyLink}
                aria-label="Copy article link"
                title="Copy article link"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border-primary)] text-[var(--text-secondary)] transition-all hover:border-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white"
              >
                <Link2 size={15} />
              </button>

              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
                target="_blank"
                rel="noreferrer"
                aria-label="Share on Facebook"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border-primary)] text-[var(--text-secondary)] transition-all hover:border-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white"
              >
                <Book size={15} />
              </a>

              <a
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`}
                target="_blank"
                rel="noreferrer"
                aria-label="Share on LinkedIn"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border-primary)] text-[var(--text-secondary)] transition-all hover:border-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white"
              >
                <Book size={15} />
              </a>

              {copied && (
                <span
                  role="status"
                  className="text-xs text-[var(--color-primary)]"
                >
                  Link copied
                </span>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Article Cover */}
      <section className="mx-auto max-w-[1500px] px-5 pt-12 sm:px-8 md:pt-16 lg:px-9">
        <div className="relative aspect-[16/9] overflow-hidden rounded-[16px] bg-[var(--bg-secondary)] md:rounded-[22px]">
          <img
            src={post.image}
            alt={post.title}
            className="h-full w-full object-cover"
          />
        </div>
      </section>

      {/* Article Content + Sidebar */}
      <section className="py-20 md:py-28">
        <div className="mx-auto grid max-w-[1250px] grid-cols-1 gap-14 px-5 sm:px-8 lg:grid-cols-[1fr_280px] lg:gap-20">
          {/* Main Article */}
          <article className="min-w-0">
            {/* Introduction */}
            <div className="mb-10 border-b border-[var(--border-primary)] pb-8">
              <span className="mb-4 block text-[10px] font-semibold uppercase tracking-[0.17em] text-[var(--color-primary)]">
                The Story
              </span>

              <p className="text-base leading-[2] text-[var(--text-secondary)]">
                {
                  post.content.find((block) => block.type === "paragraph")
                    ?.content
                }
              </p>
            </div>

            {/* Article Body */}
            <div className="article-content">{renderContent()}</div>

            {/* Tags */}
            <div className="mt-16 border-t border-[var(--border-primary)] pt-8">
              <span className="mb-5 block text-[10px] font-semibold uppercase tracking-[0.17em] text-[var(--text-tertiary)]">
                Article Tags
              </span>

              <div className="flex flex-wrap gap-3">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-[var(--border-primary)] px-4 py-2 text-xs text-[var(--text-secondary)] transition-colors hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Article Footer */}
            <div className="mt-10 flex flex-col justify-between gap-6 rounded-[14px] bg-[var(--bg-secondary)] p-6 sm:flex-row sm:items-center sm:p-8">
              <div>
                <span className="text-[10px] font-semibold uppercase tracking-wider text-[var(--color-primary)]">
                  Enjoyed This Article?
                </span>

                <h3 className="mt-2 font-heading text-xl font-semibold text-[var(--text-primary)]">
                  Discover More Design Stories.
                </h3>
              </div>

              <Link
                to="/blogs"
                className="inline-flex shrink-0 items-center gap-3 rounded-full bg-[var(--text-primary)] py-2 pl-6 pr-2 text-sm font-semibold text-white transition-colors hover:bg-[var(--color-primary)]"
              >
                All Articles
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[var(--color-tertiary)] text-[var(--text-primary)]">
                  <ArrowUpRight size={17} />
                </span>
              </Link>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="space-y-10 lg:sticky lg:top-28 lg:self-start">
            {/* Table of Contents */}
            <div className="rounded-[14px] border border-[var(--border-primary)] bg-[var(--bg-surface)] p-6">
              <div className="mb-6 flex items-center gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-primary)]" />

                <h3 className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--text-primary)]">
                  In This Article
                </h3>
              </div>

              <ul className="space-y-4">
                {headings.map((heading) => {
                  const originalIndex = post.content.indexOf(heading);

                  return (
                    <li key={originalIndex}>
                      <a
                        href={`#section-${originalIndex}`}
                        className="group flex items-start gap-3 text-sm leading-relaxed text-[var(--text-secondary)] transition-colors hover:text-[var(--color-primary)]"
                      >
                        <ChevronRight
                          size={15}
                          className="mt-0.5 shrink-0 text-[var(--color-primary)]"
                        />

                        {heading.content}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Studio CTA */}
            <div className="relative overflow-hidden rounded-[14px] bg-[var(--bg-dark)] p-7 text-white">
              <span className="text-[10px] font-semibold uppercase tracking-[0.17em] text-[var(--color-tertiary)]">
                AAKAR Studio
              </span>

              <h3 className="mt-5 font-heading text-2xl font-semibold leading-tight">
                Have A Space To Transform?
              </h3>

              <p className="mt-4 text-sm leading-[1.8] text-white/60">
                Let's turn your ideas into a thoughtfully designed space.
              </p>

              <Link
                to="/contact"
                className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-tertiary)] transition-colors hover:text-white"
              >
                Talk To Our Team
                <ArrowUpRight size={16} />
              </Link>
            </div>

            {/* Back to Blog */}
            <Link
              to="/blogs"
              className="group flex items-center justify-between border-b border-[var(--border-primary)] pb-5 text-sm font-semibold text-[var(--text-primary)]"
            >
              <span className="flex items-center gap-3">
                <ArrowLeft
                  size={17}
                  className="transition-transform group-hover:-translate-x-1"
                />
                Back To All Articles
              </span>

              <ArrowUpRight size={16} className="text-[var(--color-primary)]" />
            </Link>
          </aside>
        </div>
      </section>

      {/* Related Articles */}
      <section className="bg-[var(--bg-secondary)] py-20 md:py-28">
        <div className="mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-9">
          <div className="mb-12 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <span className="mb-5 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.17em] text-[var(--color-primary)]">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-primary)]" />
                Keep Exploring
              </span>

              <h2 className="font-heading text-3xl font-semibold tracking-[-0.045em] text-[var(--text-primary)] md:text-4xl">
                Related{" "}
                <span className="text-[var(--color-primary)]">Stories.</span>
              </h2>
            </div>

            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--text-primary)] transition-colors hover:text-[var(--color-primary)]"
            >
              View All Articles
              <ArrowUpRight size={17} />
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {relatedPosts.map((related) => (
              <article key={related.id} className="group">
                <Link
                  to={`/blog/${related.slug}`}
                  className="relative block aspect-[4/3] overflow-hidden rounded-[15px] bg-[var(--bg-tertiary)]"
                >
                  <img
                    src={related.image}
                    alt={related.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  <span className="absolute left-4 top-4 rounded-full bg-[var(--color-primary)] px-4 py-2 text-[10px] font-semibold text-white">
                    {related.category}
                  </span>
                </Link>

                <div className="mt-5 flex items-center gap-4 text-[11px] text-[var(--text-tertiary)]">
                  <span>{related.date}</span>
                  <span>{related.readTime}</span>
                </div>

                <Link to={`/blog/${related.slug}`}>
                  <h3 className="mt-3 font-heading text-xl font-semibold leading-[1.35] tracking-tight text-[var(--text-primary)] transition-colors group-hover:text-[var(--color-primary)]">
                    {related.title}
                  </h3>
                </Link>

                <Link
                  to={`/blog/${related.slug}`}
                  className="mt-5 inline-flex items-center gap-2 text-xs font-semibold text-[var(--text-primary)] transition-colors hover:text-[var(--color-primary)]"
                >
                  Read Article
                  <ArrowRight size={15} />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
