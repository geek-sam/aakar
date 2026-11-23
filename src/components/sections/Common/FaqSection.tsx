import { ArrowUpRight, ChevronDown } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const faqs = [
  {
    question: "How do I get started with AAKAR?",
    answer:
      "Simply fill out our consultation form or contact our team directly. We will understand your requirements, discuss your vision, and guide you through the next steps.",
  },
  {
    question: "Do you work on both residential and commercial projects?",
    answer:
      "Yes. We work on residential and commercial interior projects, including homes, apartments, offices, and other thoughtfully designed spaces.",
  },
  {
    question: "Can I discuss my project before committing?",
    answer:
      "Absolutely. An initial discussion helps us understand your expectations, project scope, timeline, and requirements before moving forward.",
  },
  {
    question: "How long does an interior design project take?",
    answer:
      "Timelines depend on project size, complexity, design requirements, and execution scope. We establish a project-specific timeline during the planning stage.",
  },
];

const FaqSection: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <>
      {/* FAQ Section */}
      <section className="bg-[var(--bg-secondary)] py-20 md:py-28">
        <div className="mx-auto grid max-w-[1500px] grid-cols-1 gap-12 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
          {/* FAQ Heading */}
          <div>
            <div className="mb-6 flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-primary)]" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.17em] text-[var(--color-primary)]">
                Common Questions
              </span>
            </div>

            <h2 className="font-heading text-[clamp(2.5rem,5vw,4rem)] font-semibold leading-[1.05] tracking-[-0.05em] text-[var(--text-primary)]">
              Before We
              <span className="block text-[var(--color-primary)]">
                Get Started.
              </span>
            </h2>

            <p className="mt-6 max-w-[380px] text-sm leading-[1.9] text-[var(--text-secondary)]">
              Here are a few things you might want to know before beginning your
              interior design journey with us.
            </p>

            <Link
              to="/contact"
              className="mt-8 inline-flex items-center gap-3 text-sm font-semibold text-[var(--color-primary)] hover:text-[var(--color-primary-hover)]"
            >
              Still Have Questions?
              <ArrowUpRight size={17} />
            </Link>
          </div>

          {/* FAQ Accordion */}
          <div className="border-t border-[var(--border-primary)]">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;

              return (
                <div
                  key={faq.question}
                  className="border-b border-[var(--border-primary)]"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-5 py-6 text-left"
                  >
                    <span className="flex items-center gap-4 font-heading text-base font-semibold text-[var(--text-primary)] sm:text-lg">
                      <span className="text-xs font-semibold text-[var(--color-primary)]">
                        0{index + 1}
                      </span>

                      {faq.question}
                    </span>

                    <span
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[var(--border-primary)] text-[var(--text-primary)] transition-all duration-300 ${
                        isOpen
                          ? "rotate-180 border-[var(--color-primary)] bg-[var(--color-primary)] text-white"
                          : ""
                      }`}
                    >
                      <ChevronDown size={17} />
                    </span>
                  </button>

                  <div
                    className={`grid transition-[grid-template-rows] duration-300 ${
                      isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="max-w-[650px] pb-7 pl-9 text-sm leading-[1.9] text-[var(--text-secondary)]">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default FaqSection;
