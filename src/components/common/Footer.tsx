import { useLayoutEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Camera, Bookmark, Video } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const footerLinks = {
  explore: [
    { label: "Home", path: "/" },
    { label: "About Us", path: "/about" },
    { label: "Our Projects", path: "/projects" },
    { label: "Our Services", path: "/services" },
    { label: "Gallery", path: "/gallery" },
  ],
  resources: [
    { label: "Our Process", path: "/#process" },
    { label: "Blog & Articles", path: "/blog" },
    { label: "Testimonials", path: "/#testimonials" },
    { label: "Contact Us", path: "/contact" },
  ],
};

const socialLinks = [
  { label: "Instagram", icon: Camera, href: "https://instagram.com/" },
  { label: "Facebook", icon: Bookmark, href: "https://facebook.com/" },
  { label: "LinkedIn", icon: Camera, href: "https://linkedin.com/" },
  { label: "YouTube", icon: Video, href: "https://youtube.com/" },
];

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const footer = footerRef.current;
    if (!footer) return;

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        // Main footer reveal
        const timeline = gsap.timeline({
          scrollTrigger: {
            trigger: footer,
            start: "top 78%",
            once: true,
          },
        });

        timeline
          .fromTo(
            "[data-footer-heading]",
            {
              y: 45,
              autoAlpha: 0,
            },
            {
              y: 0,
              autoAlpha: 1,
              duration: 0.9,
              ease: "power3.out",
            },
          )
          .fromTo(
            "[data-footer-reveal]",
            {
              y: 35,
              autoAlpha: 0,
            },
            {
              y: 0,
              autoAlpha: 1,
              duration: 0.75,
              stagger: 0.12,
              ease: "power3.out",
            },
            "-=0.45",
          )
          .fromTo(
            "[data-footer-brand]",
            {
              yPercent: 45,
              autoAlpha: 0,
            },
            {
              yPercent: 0,
              autoAlpha: 1,
              duration: 1.2,
              ease: "power4.out",
            },
            "-=0.35",
          );

        // Subtle parallax on the oversized wordmark
        gsap.to("[data-footer-brand]", {
          yPercent: -8,
          ease: "none",
          scrollTrigger: {
            trigger: footer,
            start: "top bottom",
            end: "bottom bottom",
            scrub: 1,
          },
        });
      });

      return () => mm.revert();
    }, footer);

    return () => ctx.revert();
  }, []);

  return (
    <footer
      ref={footerRef}
      className="relative overflow-hidden bg-[var(--bg-dark)] text-white"
    >
      {/* Main Footer */}
      <div className="mx-auto max-w-[1600px] px-5 pb-8 pt-20 sm:px-8 md:pt-28 lg:px-9 lg:pt-32">
        {/* Top CTA */}
        <div className="grid grid-cols-1 gap-8 border-b border-white/15 pb-16 md:pb-20 lg:grid-cols-[1.3fr_0.7fr] lg:items-end">
          <div data-footer-heading>
            <div className="mb-7 flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-tertiary)]" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/60">
                Let's Create Something Beautiful
              </span>
            </div>

            <h2 className="max-w-[850px] font-heading text-[clamp(2.8rem,6vw,6rem)] font-semibold leading-[1.02] tracking-[-0.06em]">
              Your Dream Space
              <span className="block text-[var(--color-tertiary)]">
                Starts Here.
              </span>
            </h2>
          </div>

          <div data-footer-reveal className="lg:justify-self-end">
            <p className="mb-7 max-w-[360px] text-sm leading-[1.9] text-white/60">
              Have a vision for your space? Let's turn your ideas into something
              meaningful. Get in touch with our team and take the first step.
            </p>

            <Link
              to="/contact"
              className="group inline-flex items-center gap-5 rounded-full bg-[var(--color-tertiary)] py-2 pl-7 pr-2 text-sm font-semibold text-[var(--text-primary)] transition-colors duration-300 hover:bg-[var(--color-primary)] hover:text-white"
            >
              Book a Consultation
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[var(--bg-dark)] text-white transition-transform duration-300 group-hover:rotate-45">
                <ArrowUpRight size={19} />
              </span>
            </Link>
          </div>
        </div>

        {/* Footer Information */}
        <div className="grid grid-cols-1 gap-12 py-16 sm:grid-cols-2 lg:grid-cols-[1.5fr_0.7fr_0.7fr_1fr] lg:gap-10 lg:py-20">
          {/* Brand Column */}
          <div data-footer-reveal className="max-w-[350px]">
            <Link
              to="/"
              className="inline-block font-heading text-4xl font-bold tracking-[-0.07em] text-white"
            >
              AAKAR<span className="text-[var(--color-tertiary)]">.</span>
            </Link>

            <p className="mt-6 text-sm leading-[1.9] text-white/55">
              Creating thoughtful spaces that bring together aesthetics,
              functionality, and timeless craftsmanship. Designed around you,
              made to last.
            </p>

            {/* Social Links */}
            <div className="mt-8 flex items-center gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;

                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={social.label}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/65 transition-all duration-300 hover:border-[var(--color-tertiary)] hover:bg-[var(--color-tertiary)] hover:text-[var(--text-primary)]"
                  >
                    <Icon size={17} strokeWidth={1.7} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Explore Links */}
          <div data-footer-reveal>
            <h3 className="mb-7 text-[11px] font-semibold uppercase tracking-[0.17em] text-[var(--color-tertiary)]">
              Explore
            </h3>

            <ul className="space-y-4">
              {footerLinks.explore.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    className="group inline-flex items-center gap-2 text-sm text-white/60 transition-colors duration-300 hover:text-white"
                  >
                    <span className="h-1 w-1 rounded-full bg-[var(--color-tertiary)] opacity-0 transition-opacity group-hover:opacity-100" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div data-footer-reveal>
            <h3 className="mb-7 text-[11px] font-semibold uppercase tracking-[0.17em] text-[var(--color-tertiary)]">
              Discover
            </h3>

            <ul className="space-y-4">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    className="group inline-flex items-center gap-2 text-sm text-white/60 transition-colors duration-300 hover:text-white"
                  >
                    <span className="h-1 w-1 rounded-full bg-[var(--color-tertiary)] opacity-0 transition-opacity group-hover:opacity-100" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div data-footer-reveal>
            <h3 className="mb-7 text-[11px] font-semibold uppercase tracking-[0.17em] text-[var(--color-tertiary)]">
              Get In Touch
            </h3>

            <p className="mb-5 max-w-[260px] text-sm leading-[1.8] text-white/60">
              Have a project in mind? We'd love to hear about it.
            </p>

            <Link
              to="/contact"
              className="group inline-flex items-center gap-3 border-b border-white/25 pb-2 text-sm font-medium text-white transition-colors hover:border-[var(--color-tertiary)] hover:text-[var(--color-tertiary)]"
            >
              Start a Conversation
              <ArrowUpRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </Link>
          </div>
        </div>

        {/* Large Brand Wordmark */}
        <div className="relative overflow-hidden border-t border-white/15 pt-8">
          <div className="overflow-hidden">
            <div
              data-footer-brand
              className="select-none text-center font-heading text-[22vw] font-bold leading-[0.8] tracking-[-0.09em] text-white/[0.07] sm:text-[21vw] lg:text-[20vw]"
            >
              AAKAR
            </div>
          </div>
        </div>

        {/* Copyright Bar */}
        <div className="flex flex-col items-center justify-between gap-5 border-t border-white/15 pt-7 text-center sm:flex-row sm:text-left">
          <p className="text-xs text-white/45">
            © {new Date().getFullYear()} AAKAR. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-6">
            <Link
              to="/privacy-policy"
              className="text-xs text-white/45 transition-colors hover:text-white"
            >
              Privacy Policy
            </Link>

            <Link
              to="/terms"
              className="text-xs text-white/45 transition-colors hover:text-white"
            >
              Terms & Conditions
            </Link>
          </div>

          <a
            href="#top"
            className="group inline-flex items-center gap-2 text-xs font-medium text-white/65 transition-colors hover:text-[var(--color-tertiary)]"
          >
            Back to Top
            <ArrowUpRight
              size={15}
              className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}
