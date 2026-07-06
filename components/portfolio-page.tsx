"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { Badge, Button, PhotoBlock, Section } from "@/components/ui";
import { projects } from "@/lib/data";
import { PageHero } from "@/components/simple-pages";

const categories = ["All", "Residential", "Commercial", "Before & After"] as const;
type PortfolioCategory = (typeof categories)[number];

function badgeTone(category: string) {
  if (category === "Commercial") return "navy";
  if (category === "Before & After") return "olive";
  return "gold";
}

export function PortfolioPage() {
  const [category, setCategory] = useState<PortfolioCategory>("All");
  const visibleProjects = useMemo(
    () => category === "All" ? projects : projects.filter((project) => project.category === category),
    [category]
  );

  return (
    <main>
      <PageHero eyebrow="Our Work" title="Transformative roofs, exceptional results." variant="portfolio" />
      <Section tone="light">
        <div className="mb-12 flex flex-wrap gap-3">
          {categories.map((item) => {
            const active = category === item;
            return (
              <button
                key={item}
                type="button"
                aria-pressed={active}
                onClick={() => setCategory(item)}
                className={`rounded-pill border px-5 py-2.5 font-sans text-[13px] font-semibold leading-none tracking-[0.04em] transition-[background-color,color,border-color] duration-[var(--duration-base)] ease-[var(--ease-standard)] ${
                  active
                    ? "border-navy-900 bg-navy-900 text-white"
                    : "border-[var(--border-default)] bg-transparent text-[var(--text-heading)] hover:border-navy-900 hover:bg-[var(--btn-secondary-bg-hover)]"
                }`}
              >
                {item}
              </button>
            );
          })}
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3" aria-live="polite">
          {visibleProjects.map((project) => (
            <Link
              key={project.slug}
              href={`/portfolio/${project.slug}`}
              className="group block animate-[portfolioCardIn_var(--duration-slow)_var(--ease-standard)_both] text-inherit"
            >
              <PhotoBlock
                caption={project.caption}
                className="h-[260px] rounded-lg transition-shadow duration-[var(--duration-base)] ease-[var(--ease-standard)] group-hover:shadow-card-hover"
              />
              <div className="flex items-start justify-between gap-3 pt-4">
                <div>
                  <div className="font-sans text-[17px] font-semibold leading-[1.3] text-[var(--text-heading)]">{project.title}</div>
                  <div className="mt-1 font-sans text-sm font-normal leading-[1.5] text-[var(--text-muted)]">{project.meta}</div>
                </div>
                <Badge tone={badgeTone(project.category)}>{project.category}</Badge>
              </div>
            </Link>
          ))}
        </div>
      </Section>
      <section className="bg-navy-900 px-6 py-[100px] text-center text-white md:px-10">
        <h2 className="m-0 mb-6 font-display text-[clamp(28px,3.6vw,40px)] font-semibold">Want results like these on your roof?</h2>
        <Button href="/contact" variant="accent" size="lg">Request an Inspection</Button>
      </section>
    </main>
  );
}
