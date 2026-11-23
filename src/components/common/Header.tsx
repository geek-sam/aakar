import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

const navigation = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Projects", path: "/projects" },
  { label: "Services", path: "/services" },
  { label: "Blogs", path: "/blogs" },
  { label: "Contact", path: "/contact" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);

  // Detect scroll position
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when modal or mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isConsultationOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isConsultationOpen]);

  // Close mobile navigation on route change
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      <header
        className={`sticky top-0 z-50 -mb-[80px] w-full transition-all duration-500 ${
          isScrolled
            ? "border-b border-black/5 bg-[#F5F0E8]/85 shadow-sm backdrop-blur-xl"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-[80px] max-w-[1600px] items-center justify-between px-5 sm:px-8 lg:px-9">
          {/* Logo */}
          <Link
            to="/"
            onClick={closeMenu}
            className="group relative z-50 flex flex-col leading-none"
          >
            <span
              className={`text-[9px] font-semibold tracking-[0.35em] transition-colors duration-300 ${
                isScrolled ? "text-[#77736C]" : "text-white/70"
              }`}
            >
              INTERIOR DESIGN STUDIO
            </span>

            <span
              className={`mt-1 font-heading text-2xl font-bold tracking-[-0.06em] transition-colors duration-300 ${
                isScrolled ? "text-[#34332F]" : "text-white"
              }`}
            >
              AAKAR<span className="text-[#D2A65E]">.</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-9 lg:flex">
            {navigation.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === "/"}
                className={({ isActive }) =>
                  `relative py-2 text-[13px] font-medium transition-colors duration-300 after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-[#D2A65E] after:transition-transform after:duration-300 hover:after:scale-x-100 ${
                    isScrolled
                      ? "text-[#34332F] hover:text-[#A66F4D]"
                      : "text-white/85 hover:text-white"
                  } ${isActive ? "after:scale-x-100" : ""}`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          {/* Desktop CTA */}
          <button
            onClick={() => setIsConsultationOpen(true)}
            className={`hidden items-center gap-3 rounded-full py-2 pl-6 pr-2 text-sm font-semibold transition-all duration-300 lg:flex ${
              isScrolled
                ? "bg-[#34332F] text-white hover:bg-[#A66F4D]"
                : "border border-white/50 text-white hover:bg-white hover:text-[#34332F]"
            }`}
          >
            Let's Talk
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#D2A65E] text-lg text-white transition-transform duration-300 group-hover:rotate-45">
              ↗
            </span>
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            className={`relative z-50 flex h-11 w-11 flex-col items-center justify-center gap-[6px] rounded-full border transition-all duration-300 lg:hidden ${
              isScrolled || isMenuOpen
                ? "border-[#34332F]/20"
                : "border-white/40"
            }`}
          >
            <span
              className={`h-[1.5px] w-5 transition-all duration-300 ${
                isScrolled || isMenuOpen ? "bg-[#34332F]" : "bg-white"
              } ${isMenuOpen ? "translate-y-[3.75px] rotate-45" : ""}`}
            />

            <span
              className={`h-[1.5px] w-5 transition-all duration-300 ${
                isScrolled || isMenuOpen ? "bg-[#34332F]" : "bg-white"
              } ${isMenuOpen ? "-translate-y-[3.75px] -rotate-45" : ""}`}
            />
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`absolute left-0 top-full w-full overflow-hidden border-b border-black/5 bg-[#F5F0E8]/95 backdrop-blur-2xl transition-all duration-500 lg:hidden ${
            isMenuOpen
              ? "visible max-h-[500px] opacity-100"
              : "invisible max-h-0 opacity-0"
          }`}
        >
          <nav className="flex flex-col px-6 pb-8 pt-5">
            {navigation.map((item, index) => (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === "/"}
                onClick={closeMenu}
                className={({ isActive }) =>
                  `flex items-center justify-between border-b border-[#34332F]/10 py-4 text-xl font-medium transition-colors ${
                    isActive ? "text-[#A66F4D]" : "text-[#34332F]"
                  }`
                }
              >
                <span>{item.label}</span>
                <span className="text-sm">0{index + 1}</span>
              </NavLink>
            ))}

            <button
              onClick={() => {
                closeMenu();
                setIsConsultationOpen(true);
              }}
              className="mt-6 flex w-full items-center justify-between rounded-full bg-[#34332F] px-6 py-4 text-sm font-semibold text-white"
            >
              Book a Consultation
              <span className="text-lg text-[#D2A65E]">↗</span>
            </button>
          </nav>
        </div>
      </header>

      {/* Consultation Modal */}
      {isConsultationOpen && (
        <ConsultationModal onClose={() => setIsConsultationOpen(false)} />
      )}
    </>
  );
}

/* =========================================
   CONSULTATION MODAL
========================================= */

function ConsultationModal({ onClose }: { onClose: () => void }) {
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Close modal with Escape key
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;

    if (!form.reportValidity()) return;

    setIsSubmitting(true);

    const formData = new FormData(form);

    const name = formData.get("name");
    const email = formData.get("email");
    const phone = formData.get("phone");
    const project = formData.get("project");
    const budget = formData.get("budget");
    const message = formData.get("message");

    const subject = encodeURIComponent(`Consultation Request - ${name}`);

    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nProject: ${project}\nBudget: ${budget}\n\nMessage:\n${message}`,
    );

    window.location.href = `mailto:hello@studioaakar.in?subject=${subject}&body=${body}`;

    setIsSubmitting(false);
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-black/60 px-4 py-8 backdrop-blur-md"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div className="relative my-auto w-full max-w-[650px] animate-hero-content rounded-2xl bg-[#F5F0E8] p-6 shadow-2xl sm:p-10">
        {/* Close */}
        <button
          onClick={onClose}
          aria-label="Close consultation form"
          className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full border border-[#34332F]/15 text-xl text-[#34332F] transition-colors hover:bg-[#34332F] hover:text-white"
        >
          ×
        </button>

        {/* Modal Heading */}
        <div className="mb-8 pr-10">
          <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#A66F4D]">
            Let's Get Started
          </span>

          <h2 className="mt-3 font-heading text-4xl tracking-tight text-[#34332F] sm:text-5xl">
            Let's talk about your space.
          </h2>

          <p className="mt-3 text-sm leading-relaxed text-[#77736C]">
            Tell us a little about your project. Our team will get in touch to
            discuss your requirements.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="consult-name" className="form-label">
                Full Name *
              </label>
              <input
                id="consult-name"
                name="name"
                required
                placeholder="Your name"
                className="form-input"
              />
            </div>

            <div>
              <label htmlFor="consult-email" className="form-label">
                Email Address *
              </label>
              <input
                id="consult-email"
                name="email"
                type="email"
                required
                placeholder="you@example.com"
                className="form-input"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="consult-phone" className="form-label">
                Phone Number
              </label>
              <input
                id="consult-phone"
                name="phone"
                type="tel"
                placeholder="+91 00000 00000"
                className="form-input"
              />
            </div>

            <div>
              <label htmlFor="consult-project" className="form-label">
                Project Type *
              </label>
              <select
                id="consult-project"
                name="project"
                defaultValue=""
                required
                className="form-input"
              >
                <option value="" disabled>
                  Select project
                </option>
                <option>Residential</option>
                <option>Commercial</option>
                <option>Office Interior</option>
                <option>Renovation</option>
                <option>Other</option>
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="consult-budget" className="form-label">
              Estimated Budget
            </label>
            <select
              id="consult-budget"
              name="budget"
              defaultValue=""
              className="form-input"
            >
              <option value="" disabled>
                Select your budget
              </option>
              <option>Below ₹5 Lakhs</option>
              <option>₹5 – ₹10 Lakhs</option>
              <option>₹10 – ₹20 Lakhs</option>
              <option>₹20 – ₹50 Lakhs</option>
              <option>Above ₹50 Lakhs</option>
              <option>Not Decided Yet</option>
            </select>
          </div>

          <div>
            <label htmlFor="consult-message" className="form-label">
              Tell Us About Your Project
            </label>
            <textarea
              id="consult-message"
              name="message"
              rows={3}
              placeholder="Share your ideas, requirements, or project location..."
              className="form-input resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="flex w-full items-center justify-between rounded-full bg-[#34332F] px-7 py-4 text-sm font-semibold text-white transition-colors hover:bg-[#A66F4D] disabled:opacity-50"
          >
            {isSubmitting ? "Preparing..." : "Request Consultation"}
            <span className="text-xl text-[#D2A65E]">↗</span>
          </button>

          <p className="text-center text-xs text-[#77736C]">
            By submitting, you agree to be contacted regarding your interior
            design enquiry.
          </p>
        </form>
      </div>
    </div>
  );
}
