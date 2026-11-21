import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

interface Breadcrumb {
  label: string;
  path?: string;
}

interface PageTitleProps {
  title: string;
  backgroundImage?: string;
  breadcrumbs?: Breadcrumb[];
}

export default function PageTitle({
  title,
  backgroundImage = "/images/page-banner.jpg",
  breadcrumbs,
}: PageTitleProps) {
  const items = breadcrumbs ?? [{ label: "Home", path: "/" }, { label: title }];

  return (
    <section
      className="relative isolate flex min-h-[380px] items-center justify-center overflow-hidden bg-[var(--bg-dark)] px-5 pb-12 pt-32 text-center sm:min-h-[420px] lg:min-h-[448px]"
      style={{
        backgroundImage: `url("${backgroundImage}")`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Dark Background Overlay */}
      <div className="absolute inset-0 -z-10 bg-black/60" />

      {/* Additional Gradient */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/20 via-transparent to-black/30" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex w-full max-w-[1000px] flex-col items-center">
        {/* Page Heading */}
        <h1 className="font-heading text-[clamp(3rem,7vw,6rem)] font-semibold leading-[1.05] tracking-[-0.055em] text-white">
          {title}
        </h1>

        {/* Breadcrumb Navigation */}
        <nav
          aria-label="Breadcrumb"
          className="mt-9 flex flex-wrap items-center justify-center gap-3"
        >
          {items.map((item, index) => {
            const isLast = index === items.length - 1;

            return (
              <div
                key={`${item.label}-${index}`}
                className="flex items-center gap-3"
              >
                {index > 0 && (
                  <ChevronRight
                    size={17}
                    strokeWidth={2.5}
                    className="text-[var(--color-tertiary)]"
                  />
                )}

                {isLast ? (
                  <span
                    aria-current="page"
                    className="text-[12px] font-semibold uppercase tracking-wide text-white"
                  >
                    {item.label}
                  </span>
                ) : (
                  <Link
                    to={item.path ?? "/"}
                    className="text-[12px] font-semibold uppercase tracking-wide text-white/75 transition-colors duration-300 hover:text-[var(--color-tertiary)]"
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            );
          })}
        </nav>
      </div>
    </section>
  );
}
