import { useState } from "react";

interface Partner {
  id: number;
  name: string;
  logo: string;
  width?: string;
}

const partners: Partner[] = [
  {
    id: 1,
    name: "Asian Paints",
    logo: "/images/partners/asian-paints.svg",
    width: "145px",
  },
  {
    id: 2,
    name: "Hettich",
    logo: "/images/partners/hettich.svg",
    width: "120px",
  },
  {
    id: 3,
    name: "Hafele",
    logo: "/images/partners/hafele.svg",
    width: "125px",
  },
  {
    id: 4,
    name: "Greenply",
    logo: "/images/partners/greenply.svg",
    width: "145px",
  },
  {
    id: 5,
    name: "CenturyPly",
    logo: "/images/partners/centuryply.svg",
    width: "140px",
  },
  {
    id: 6,
    name: "Kajaria",
    logo: "/images/partners/kajaria.svg",
    width: "125px",
  },
  {
    id: 7,
    name: "Jaquar",
    logo: "/images/partners/jaquar.svg",
    width: "115px",
  },
  {
    id: 8,
    name: "Hindware",
    logo: "/images/partners/hindware.svg",
    width: "135px",
  },
];

export default function PartnersSection() {
  const [isPaused, setIsPaused] = useState(false);

  // Duplicate logos for a seamless marquee
  const marqueeItems = [...partners, ...partners];

  return (
    <section className="partners-section overflow-hidden bg-[var(--bg-primary)] py-16 md:py-20">
      <div className="mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-9">
        {/* Section Header */}
        <div className="mb-12 flex flex-col items-center text-center">
          <div className="mb-5 flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-primary)]" />

            <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--text-secondary)]">
              Our Collaborations
            </span>
          </div>

          <h2 className="font-heading text-2xl font-semibold tracking-[-0.04em] text-[var(--text-primary)] sm:text-3xl md:text-4xl">
            Trusted By{" "}
            <span className="text-[var(--color-primary)]">Our Partners</span>
          </h2>

          <p className="mt-3 max-w-[440px] text-sm leading-relaxed text-[var(--text-secondary)]">
            We collaborate with trusted brands and industry leaders to bring
            quality, innovation, and craftsmanship to every space.
          </p>
        </div>
      </div>

      {/* Logo Marquee */}
      <div
        className="partners-marquee"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className={`partners-track ${isPaused ? "is-paused" : ""}`}>
          {marqueeItems.map((partner, index) => (
            <div
              key={`${partner.id}-${index}`}
              className="partner-logo group flex h-24 w-[190px] shrink-0 items-center justify-center px-8 sm:w-[230px] md:w-[260px]"
              aria-hidden={index >= partners.length}
            >
              <img
                src={partner.logo}
                alt={index < partners.length ? partner.name : ""}
                style={{ maxWidth: partner.width }}
                draggable={false}
                className="max-h-12 w-full object-contain opacity-50 grayscale transition-all duration-500 group-hover:opacity-100 group-hover:grayscale-0"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Divider */}
      <div className="mx-auto mt-12 max-w-[1600px] px-5 sm:px-8 lg:px-9">
        <div className="h-px w-full bg-[var(--border-primary)]" />
      </div>
    </section>
  );
}
