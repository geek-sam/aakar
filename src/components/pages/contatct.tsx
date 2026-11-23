import { useState, type FormEvent } from "react";
import { Link } from "react-router-dom";

import {
  ArrowUpRight,
  CheckCircle2,
  Clock3,
  Mail,
  MapPin,
  Phone,
  Send,
  ChevronDown,
  Camera,
  Book,
  Box,
} from "lucide-react";
import PageTitle from "../sections/Common/PageTitle";
import FaqSection from "../sections/Common/FaqSection";

type FormStatus = "idle" | "loading" | "success" | "error";

const contactInfo = [
  {
    icon: Mail,
    label: "Email Address",
    value: "hello@aakar.com",
    href: "mailto:hello@aakar.com",
  },
  {
    icon: Phone,
    label: "Phone Number",
    value: "+91 XXXXX XXXXX",
    href: "tel:+910000000000",
  },
  {
    icon: MapPin,
    label: "Our Location",
    value: "India",
    href: undefined,
  },
  {
    icon: Clock3,
    label: "Working Hours",
    value: "Monday – Saturday, 10 AM – 6 PM",
    href: undefined,
  },
];

const services = [
  "Residential Interior Design",
  "Commercial Interior Design",
  "Space Planning",
  "Furniture & Styling",
  "Renovation & Remodeling",
  "Other",
];

const budgetOptions = [
  "Below ₹5 Lakhs",
  "₹5 – ₹10 Lakhs",
  "₹10 – ₹20 Lakhs",
  "₹20 – ₹40 Lakhs",
  "₹40 Lakhs – ₹1 Crore",
  "Above ₹1 Crore",
  "Not Decided Yet",
];

export default function Contact() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (status === "loading") return;

    const form = event.currentTarget;
    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

    if (!accessKey) {
      setStatus("error");
      setMessage(
        "Web3Forms is not configured. Please add your access key to the environment variables.",
      );
      return;
    }

    setStatus("loading");
    setMessage("");

    const formData = new FormData(form);

    formData.append("access_key", accessKey);
    formData.append("subject", "New Project Enquiry - AAKAR");
    formData.append("from_name", "AAKAR Website");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (result.success) {
        setStatus("success");
        setMessage(
          "Your enquiry has been submitted successfully. Our team will get back to you soon.",
        );

        form.reset();
      } else {
        throw new Error(
          result.message || "Something went wrong. Please try again.",
        );
      }
    } catch (error) {
      setStatus("error");
      setMessage(
        error instanceof Error
          ? error.message
          : "Unable to submit your enquiry. Please try again.",
      );
    }
  };

  return (
    <main id="top" className="bg-[var(--bg-primary)]">
      {/* Page Title */}
      <PageTitle title="Contact Us" backgroundImage="/images/about-main.jpg" />

      {/* Contact Introduction */}
      <section className="py-20 md:py-28 lg:py-32">
        <div className="mx-auto max-w-[1800px] px-5 sm:px-8 lg:px-9">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_0.8fr] lg:items-end">
            {/* Heading */}
            <div>
              <div className="mb-7 flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-primary)]" />

                <span className="rounded-full border border-[var(--border-primary)] px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.15em] text-[var(--text-primary)]">
                  Let's Start A Conversation
                </span>
              </div>

              <h1 className="max-w-[850px] font-heading text-[clamp(2.8rem,6vw,6rem)] font-semibold leading-[1.02] tracking-[-0.06em] text-[var(--text-primary)]">
                Every Great Space
                <span className="block text-[var(--color-primary)]">
                  Starts With A
                </span>
                Conversation.
              </h1>
            </div>

            {/* Description */}
            <div className="max-w-[480px] lg:justify-self-end">
              <span className="mb-6 block h-px w-12 bg-[var(--color-primary)]" />

              <p className="text-base leading-[1.9] text-[var(--text-secondary)]">
                Have a vision for your home, workspace, or commercial property?
                We'd love to hear about it. Tell us a little about your project
                and let's explore what's possible together.
              </p>

              <p className="mt-5 text-sm leading-[1.9] text-[var(--text-tertiary)]">
                Share your ideas, requirements, and expectations. Our team will
                help you take the first step towards a thoughtfully designed
                space.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Details + Form */}
      <section className="pb-24 md:pb-32">
        <div className="mx-auto grid max-w-[1800px] grid-cols-1 gap-8 px-5 sm:px-8 lg:grid-cols-[0.72fr_1.28fr] lg:gap-10 lg:px-9">
          {/* Left Contact Information */}
          <div className="relative overflow-hidden rounded-[18px] bg-[var(--bg-dark)] p-7 text-white sm:p-10">
            {/* Background Decoration */}
            <div className="pointer-events-none absolute inset-0 opacity-15">
              <div className="process-grid-bg absolute inset-0" />
            </div>

            <div className="relative z-10">
              <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--color-tertiary)]">
                Contact Information
              </span>

              <h2 className="mt-6 max-w-[400px] font-heading text-3xl font-semibold leading-[1.15] tracking-[-0.04em] sm:text-4xl">
                Let's Bring Your
                <span className="block text-[var(--color-tertiary)]">
                  Vision To Life.
                </span>
              </h2>

              <p className="mt-5 max-w-[350px] text-sm leading-[1.9] text-white/55">
                Reach out to us through any of the channels below. We're here to
                understand your ideas and help make them happen.
              </p>

              {/* Contact Items */}
              <div className="mt-12 space-y-8">
                {contactInfo.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div key={item.label} className="flex items-start gap-4">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/15 bg-white/5 text-[var(--color-tertiary)]">
                        <Icon size={19} strokeWidth={1.6} />
                      </div>

                      <div className="min-w-0">
                        <span className="block text-[10px] font-medium uppercase tracking-wider text-white/45">
                          {item.label}
                        </span>

                        {item.href ? (
                          <a
                            href={item.href}
                            className="mt-2 block break-words text-sm font-medium text-white transition-colors hover:text-[var(--color-tertiary)]"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="mt-2 text-sm font-medium text-white">
                            {item.value}
                          </p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Social Links */}
              <div className="mt-14 border-t border-white/15 pt-8">
                <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-white/45">
                  Follow Our Journey
                </span>

                <div className="mt-5 flex gap-3">
                  {[
                    { icon: Camera, url: "https://instagram.com/" },
                    { icon: Book, url: "https://facebook.com/" },
                    { icon: Box, url: "https://linkedin.com/" },
                  ].map((social, index) => {
                    const Icon = social.icon;

                    return (
                      <a
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`Social profile ${index + 1}`}
                        className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white/70 transition-all duration-300 hover:border-[var(--color-tertiary)] hover:bg-[var(--color-tertiary)] hover:text-[var(--text-primary)]"
                      >
                        <Icon size={17} />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Right Contact Form */}
          <div className="rounded-[18px] border border-[var(--border-primary)] bg-[var(--bg-surface)] p-6 shadow-[var(--shadow-sm)] sm:p-9 lg:p-12">
            <div className="mb-9">
              <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[var(--color-primary)]">
                Project Enquiry
              </span>

              <h2 className="mt-3 font-heading text-3xl font-semibold tracking-[-0.04em] text-[var(--text-primary)] md:text-4xl">
                Tell Us About Your Project.
              </h2>

              <p className="mt-3 text-sm leading-relaxed text-[var(--text-secondary)]">
                Fill in the details below and we'll get in touch.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Honeypot Spam Protection */}
              <input
                type="checkbox"
                name="botcheck"
                className="hidden"
                tabIndex={-1}
                autoComplete="off"
              />

              {/* Name + Email */}
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="mb-2 block text-xs font-semibold text-[var(--text-primary)]"
                  >
                    Full Name{" "}
                    <span className="text-[var(--color-primary)]">*</span>
                  </label>

                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    placeholder="Enter your full name"
                    required
                    minLength={2}
                    maxLength={100}
                    autoComplete="name"
                    className="h-12 w-full rounded-lg border border-[var(--border-primary)] bg-[var(--bg-primary)] px-4 text-sm text-[var(--text-primary)] outline-none transition-colors placeholder:text-[var(--text-tertiary)] focus:border-[var(--color-primary)]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-email"
                    className="mb-2 block text-xs font-semibold text-[var(--text-primary)]"
                  >
                    Email Address{" "}
                    <span className="text-[var(--color-primary)]">*</span>
                  </label>

                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    placeholder="you@example.com"
                    required
                    maxLength={254}
                    autoComplete="email"
                    className="h-12 w-full rounded-lg border border-[var(--border-primary)] bg-[var(--bg-primary)] px-4 text-sm text-[var(--text-primary)] outline-none transition-colors placeholder:text-[var(--text-tertiary)] focus:border-[var(--color-primary)]"
                  />
                </div>
              </div>

              {/* Phone + Service */}
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="contact-phone"
                    className="mb-2 block text-xs font-semibold text-[var(--text-primary)]"
                  >
                    Phone Number
                  </label>

                  <input
                    id="contact-phone"
                    type="tel"
                    name="phone"
                    placeholder="+91 XXXXX XXXXX"
                    maxLength={20}
                    autoComplete="tel"
                    className="h-12 w-full rounded-lg border border-[var(--border-primary)] bg-[var(--bg-primary)] px-4 text-sm text-[var(--text-primary)] outline-none transition-colors placeholder:text-[var(--text-tertiary)] focus:border-[var(--color-primary)]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-service"
                    className="mb-2 block text-xs font-semibold text-[var(--text-primary)]"
                  >
                    Service Required{" "}
                    <span className="text-[var(--color-primary)]">*</span>
                  </label>

                  <div className="relative">
                    <select
                      id="contact-service"
                      name="service"
                      required
                      defaultValue=""
                      className="h-12 w-full appearance-none rounded-lg border border-[var(--border-primary)] bg-[var(--bg-primary)] px-4 pr-10 text-sm text-[var(--text-primary)] outline-none transition-colors focus:border-[var(--color-primary)]"
                    >
                      <option value="" disabled>
                        Select a service
                      </option>

                      {services.map((service) => (
                        <option key={service} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>

                    <ChevronDown
                      size={16}
                      className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[var(--text-tertiary)]"
                    />
                  </div>
                </div>
              </div>

              {/* Budget + Location */}
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="contact-budget"
                    className="mb-2 block text-xs font-semibold text-[var(--text-primary)]"
                  >
                    Approximate Budget
                  </label>

                  <div className="relative">
                    <select
                      id="contact-budget"
                      name="budget"
                      defaultValue=""
                      className="h-12 w-full appearance-none rounded-lg border border-[var(--border-primary)] bg-[var(--bg-primary)] px-4 pr-10 text-sm text-[var(--text-primary)] outline-none transition-colors focus:border-[var(--color-primary)]"
                    >
                      <option value="" disabled>
                        Select your budget
                      </option>

                      {budgetOptions.map((budget) => (
                        <option key={budget} value={budget}>
                          {budget}
                        </option>
                      ))}
                    </select>

                    <ChevronDown
                      size={16}
                      className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[var(--text-tertiary)]"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="contact-location"
                    className="mb-2 block text-xs font-semibold text-[var(--text-primary)]"
                  >
                    Project Location
                  </label>

                  <input
                    id="contact-location"
                    type="text"
                    name="location"
                    placeholder="City / Location"
                    maxLength={150}
                    autoComplete="address-level2"
                    className="h-12 w-full rounded-lg border border-[var(--border-primary)] bg-[var(--bg-primary)] px-4 text-sm text-[var(--text-primary)] outline-none transition-colors placeholder:text-[var(--text-tertiary)] focus:border-[var(--color-primary)]"
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="contact-message"
                  className="mb-2 block text-xs font-semibold text-[var(--text-primary)]"
                >
                  Tell Us About Your Project{" "}
                  <span className="text-[var(--color-primary)]">*</span>
                </label>

                <textarea
                  id="contact-message"
                  name="message"
                  rows={5}
                  placeholder="Share your ideas, requirements, preferred style, and any other details..."
                  required
                  minLength={10}
                  maxLength={3000}
                  className="w-full resize-y rounded-lg border border-[var(--border-primary)] bg-[var(--bg-primary)] px-4 py-4 text-sm leading-relaxed text-[var(--text-primary)] outline-none transition-colors placeholder:text-[var(--text-tertiary)] focus:border-[var(--color-primary)]"
                />
              </div>

              {/* Status Feedback */}
              {status !== "idle" && (
                <div
                  role="status"
                  aria-live="polite"
                  className={`flex items-start gap-3 rounded-lg p-4 text-sm ${
                    status === "success"
                      ? "bg-[var(--bg-success)] text-[var(--text-success)]"
                      : status === "error"
                        ? "bg-[var(--bg-error)] text-[var(--text-error)]"
                        : "bg-[var(--bg-secondary)] text-[var(--text-secondary)]"
                  }`}
                >
                  {status === "success" ? (
                    <CheckCircle2 size={19} className="shrink-0" />
                  ) : (
                    <span className="shrink-0">
                      {status === "loading" ? "..." : "!"}
                    </span>
                  )}

                  <span>
                    {status === "loading"
                      ? "Submitting your enquiry..."
                      : message}
                  </span>
                </div>
              )}

              {/* Submit */}
              <div className="flex flex-col gap-4 border-t border-[var(--border-primary)] pt-6 sm:flex-row sm:items-center sm:justify-between">
                <p className="max-w-[260px] text-[11px] leading-relaxed text-[var(--text-tertiary)]">
                  By submitting this form, you agree to be contacted regarding
                  your project enquiry.
                </p>

                <button
                  type="submit"
                  disabled={status === "loading" || status === "success"}
                  className="group inline-flex shrink-0 items-center justify-center gap-5 rounded-full bg-[var(--text-primary)] py-2 pl-7 pr-2 text-sm font-semibold text-white transition-all duration-300 hover:bg-[var(--color-primary)] disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {status === "loading" ? "Sending..." : "Send Enquiry"}

                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-tertiary)] text-[var(--text-primary)] transition-transform duration-300 group-hover:translate-x-1">
                    <Send size={17} />
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Visual Contact Section */}
      <section className="pb-24 md:pb-32">
        <div className="mx-auto max-w-[1800px] px-5 sm:px-8 lg:px-9">
          <div className="group relative min-h-[350px] overflow-hidden rounded-[18px] bg-[var(--bg-dark)] md:min-h-[460px]">
            <img
              src="/images/contact-interior.jpg"
              alt="Contemporary architectural interior designed by AAKAR"
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/35 to-black/10" />

            <div className="relative z-10 flex min-h-[350px] flex-col justify-center p-7 sm:p-12 md:min-h-[460px] md:p-16">
              <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--color-tertiary)]">
                Your Space. Your Story.
              </span>

              <h2 className="mt-6 max-w-[650px] font-heading text-[clamp(2.5rem,5vw,4.5rem)] font-semibold leading-[1.05] tracking-[-0.05em] text-white">
                Let's Create Something
                <span className="block text-[var(--color-tertiary)]">
                  Worth Coming Home To.
                </span>
              </h2>

              <Link
                to="/projects"
                className="group/link mt-8 inline-flex w-fit items-center gap-3 text-sm font-semibold text-white transition-colors hover:text-[var(--color-tertiary)]"
              >
                Explore Our Work
                <ArrowUpRight
                  size={18}
                  className="transition-transform group-hover/link:translate-x-1 group-hover/link:-translate-y-1"
                />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <FaqSection />
    </main>
  );
}
