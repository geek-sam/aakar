// import { Link } from "react-router-dom";
// import FaqSection from "../sections/Common/FaqSection";
// import PageTitle from "../sections/Common/PageTitle";
// import HowWeWork from "../sections/Home/HowWeWork";
// import { MoveUpRight } from "lucide-react";

// const ServicesPage = () => {
//   return (
//     <main>
//       <PageTitle title="Services" backgroundImage="/images/about-main.jpg" />

//       <HowWeWork />
//       <FaqSection />
//       <section className="px-5 py-20 sm:px-8 sm:py-28 lg:px-9">
//         <div className="relative mx-auto max-w-[1800px] overflow-hidden bg-[var(--bg-dark)] px-7 py-16 text-center sm:px-12 sm:py-24">
//           <div className="process-grid-bg pointer-events-none absolute inset-0 opacity-20" />

//           <div className="relative mx-auto max-w-3xl">
//             <span className="mb-5 block text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-tertiary)]">
//               Let's create something meaningful
//             </span>

//             <h2 className="font-heading text-4xl leading-tight text-white sm:text-5xl lg:text-6xl">
//               Have a space in mind?
//               <br />
//               Let's talk about it.
//             </h2>

//             <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-white/65 sm:text-base">
//               Tell us about your project, your ideas, and what you envision.
//               We'll help you take the first step toward a thoughtfully designed
//               space.
//             </p>

//             <Link
//               to="/contact"
//               className="mt-9 inline-flex items-center gap-3 bg-[var(--color-primary)] px-7 py-4 text-sm font-semibold text-white transition-colors hover:bg-[var(--color-primary-hover)]"
//             >
//               Book a consultation
//               <MoveUpRight size={17} />
//             </Link>
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// };

// export default ServicesPage;

import { Link } from "react-router-dom";
import {
  ArrowDown,
  ArrowUpRight,
  Check,
  Home,
  Building2,
  RefreshCw,
  Palette,
} from "lucide-react";
import PageTitle from "../sections/Common/PageTitle";
import HowWeWork from "../sections/Home/HowWeWork";

const services = [
  {
    number: "01",
    title: "Residential Interiors",
    subtitle: "Spaces that feel like home.",
    description:
      "We create homes that reflect your personality and the way you live. Every element is thoughtfully considered, from spatial planning and material selection to the smallest finishing detail.",
    image: "/images/service-residential.png",
    icon: Home,
    features: [
      "Complete home interiors",
      "Living and dining spaces",
      "Bedroom and wardrobe design",
      "Modular kitchen solutions",
    ],
  },
  {
    number: "02",
    title: "Commercial Interiors",
    subtitle: "Spaces built around your vision.",
    description:
      "We design workspaces and commercial environments that balance visual identity with everyday functionality. Our approach creates purposeful spaces that support people, brands, and business.",
    image: "/images/service-commercial.png",
    icon: Building2,
    features: [
      "Office and workspace design",
      "Retail and showroom interiors",
      "Hospitality spaces",
      "Reception and common areas",
    ],
  },
  {
    number: "03",
    title: "Renovation & Remodeling",
    subtitle: "A fresh perspective on existing spaces.",
    description:
      "We reimagine existing spaces with a focus on better functionality, thoughtful details, and a refreshed aesthetic. From focused upgrades to complete transformations, we make every change purposeful.",
    image: "/images/service-renovation.png",
    icon: RefreshCw,
    features: [
      "Complete home renovation",
      "Kitchen and bathroom remodeling",
      "Layout modifications",
      "Material and finish upgrades",
    ],
  },
  {
    number: "04",
    title: "Design Consultation",
    subtitle: "Good ideas begin with a conversation.",
    description:
      "Get the right direction for your space with expert design guidance. We help you explore possibilities, understand materials, and make informed decisions based on your needs and budget.",
    image: "/images/service-consultation.png",
    icon: Palette,
    features: [
      "Space planning guidance",
      "Material and colour selection",
      "Furniture and decor advice",
      "Design and budget direction",
    ],
  },
];

// const process = [
//   {
//     number: "01",
//     title: "Discover",
//     description:
//       "We start by understanding your space, lifestyle, requirements, and aspirations.",
//     icon: Compass,
//   },
//   {
//     number: "02",
//     title: "Conceptualise",
//     description:
//       "We translate your ideas into a thoughtful design direction and spatial concept.",
//     icon: PencilRuler,
//   },
//   {
//     number: "03",
//     title: "Refine",
//     description:
//       "We bring the details together through layouts, materials, finishes, and selections.",
//     icon: Layers3,
//   },
//   {
//     number: "04",
//     title: "Deliver",
//     description:
//       "We coordinate the final stages with care and attention to the design details.",
//     icon: Check,
//   },
// ];

function ServiceItem({
  service,
  index,
}: {
  service: (typeof services)[number];
  index: number;
}) {
  const Icon = service.icon;
  const imageFirst = index % 2 === 0;

  return (
    <article
      id={service.number === "01" ? "residential" : undefined}
      className="grid items-center gap-8 lg:grid-cols-2 lg:gap-16"
    >
      <div
        className={`group relative rounded-[18px] min-h-[340px] overflow-hidden sm:min-h-[480px] ${
          imageFirst ? "lg:order-1" : "lg:order-2"
        }`}
      >
        <img
          src={service.image}
          alt={service.title}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-black/10" />

        <div className="absolute left-6 top-6 flex h-11 w-11 items-center justify-center border border-white/50 bg-white/15 text-white backdrop-blur-sm">
          <Icon size={20} strokeWidth={1.5} />
        </div>

        <span className="absolute bottom-6 right-6 font-heading text-5xl text-white/90">
          {service.number}
        </span>
      </div>

      <div
        className={`flex flex-col justify-center py-4 lg:py-10 ${
          imageFirst ? "lg:order-2" : "lg:order-1"
        }`}
      >
        <span className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-primary)]">
          {service.subtitle}
        </span>

        <h3 className="max-w-lg font-heading text-3xl leading-tight text-[var(--text-primary)] sm:text-4xl lg:text-5xl">
          {service.title}
        </h3>

        <p className="mt-6 max-w-xl text-sm leading-7 text-[var(--text-secondary)] sm:text-base">
          {service.description}
        </p>

        <div className="my-7 h-px w-full max-w-xl bg-[var(--border-primary)]" />

        <p className="mb-5 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--text-primary)]">
          What we take care of
        </p>

        <ul className="grid gap-x-6 gap-y-4 sm:grid-cols-2">
          {service.features.map((feature) => (
            <li
              key={feature}
              className="flex items-start gap-3 text-sm text-[var(--text-secondary)]"
            >
              <Check
                size={16}
                className="mt-0.5 shrink-0 text-[var(--color-primary)]"
              />
              {feature}
            </li>
          ))}
        </ul>

        <Link
          to="/contact"
          className="group mt-9 inline-flex w-fit items-center gap-3 border-b border-[var(--color-primary)] pb-2 text-sm font-semibold text-[var(--text-primary)] transition-colors hover:text-[var(--color-primary)]"
        >
          Discuss your project
          <ArrowUpRight
            size={17}
            className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
          />
        </Link>
      </div>
    </article>
  );
}

export default function Services() {
  return (
    <main className="overflow-hidden bg-[var(--bg-primary)]">
      {/* Page Banner */}
      <PageTitle
        title="Our Services"
        backgroundImage="/images/about-main.jpg"
      />

      {/* Introduction */}
      <section className="px-5 py-20 sm:px-8 sm:py-28 lg:px-9">
        <div className="mx-auto grid max-w-[1600px] gap-10 lg:grid-cols-[1fr_1fr] lg:items-end lg:gap-20">
          <div>
            <span className="mb-5 block text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-primary)]">
              What we do
            </span>

            <h2 className="max-w-2xl font-heading text-4xl leading-[1.15] text-[var(--text-primary)] sm:text-5xl lg:text-6xl">
              Creating spaces that make everyday living better.
            </h2>
          </div>

          <div className="max-w-xl lg:justify-self-end">
            <p className="text-base leading-8 text-[var(--text-secondary)] sm:text-lg">
              At AAKAR, we believe great design goes beyond aesthetics. It is
              about understanding people, making thoughtful choices, and
              creating spaces that work beautifully for the way we live.
            </p>

            <p className="mt-5 text-sm leading-7 text-[var(--text-secondary)]">
              From residential homes to commercial environments, our services
              bring together creativity, functionality, and craftsmanship to
              shape meaningful spaces.
            </p>

            <a
              href="#our-services"
              className="mt-8 inline-flex items-center gap-3 text-sm font-semibold text-[var(--text-primary)] transition-colors hover:text-[var(--color-primary)]"
            >
              Explore our services
              <ArrowDown size={17} />
            </a>
          </div>
        </div>
      </section>

      {/* Services Showcase */}
      <section
        id="our-services"
        className="scroll-mt-20 px-5 pb-20 sm:px-8 sm:pb-28 lg:px-9"
      >
        <div className="mx-auto max-w-[1600px]">
          <div className="mb-12 flex flex-col gap-4 border-b border-[var(--border-primary)] pb-7 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <span className="mb-3 block text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-primary)]">
                Our expertise
              </span>

              <h2 className="font-heading text-3xl text-[var(--text-primary)] sm:text-4xl">
                What we bring to life
              </h2>
            </div>

            <p className="max-w-sm text-sm leading-7 text-[var(--text-secondary)]">
              Considered design solutions, shaped around your space, needs, and
              aspirations.
            </p>
          </div>

          <div className="space-y-16 sm:space-y-24 lg:space-y-32">
            {services.map((service, index) => (
              <ServiceItem
                key={service.number}
                service={service}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <HowWeWork />

      {/* Design Philosophy */}
      <section className="px-5 py-20 sm:px-8 sm:py-28 lg:px-9">
        <div className="mx-auto grid max-w-[1600px] gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-20">
          <div className="group relative min-h-[400px] rounded-[18px] overflow-hidden sm:min-h-[560px]">
            <img
              src="/images/blog-05.png"
              alt="Warm contemporary interior with thoughtful material details"
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>

          <div className="lg:py-10">
            <span className="mb-4 block text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-primary)]">
              The AAKAR approach
            </span>

            <h2 className="max-w-lg font-heading text-4xl leading-tight text-[var(--text-primary)] sm:text-5xl">
              Good design is felt in the details.
            </h2>

            <p className="mt-6 max-w-xl text-sm leading-7 text-[var(--text-secondary)] sm:text-base">
              We look beyond what a space looks like. We consider how it feels,
              how it functions, and how it becomes part of your everyday life.
              Our design decisions are guided by purpose, balance, and a lasting
              sense of quality.
            </p>

            <div className="mt-9 space-y-5">
              {[
                "Personalised design, never one-size-fits-all.",
                "A balance of aesthetics and functionality.",
                "Thoughtful material and finish selection.",
                "Attention to detail from concept to completion.",
              ].map((item, index) => (
                <div
                  key={item}
                  className="flex items-start gap-4 border-b border-[var(--border-primary)] pb-5"
                >
                  <span className="font-heading text-sm text-[var(--color-primary)]">
                    0{index + 1}
                  </span>
                  <p className="text-sm leading-6 text-[var(--text-secondary)]">
                    {item}
                  </p>
                </div>
              ))}
            </div>

            <Link
              to="/about"
              className="group mt-8 inline-flex items-center gap-3 text-sm font-semibold text-[var(--text-primary)] transition-colors hover:text-[var(--color-primary)]"
            >
              Get to know us
              <ArrowUpRight
                size={17}
                className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
