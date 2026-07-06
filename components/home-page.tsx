"use client";

import { useState } from "react";
import Link from "next/link";
import { Accordion, Button, Card, Eyebrow, IconTile, PhotoBlock, Section, ServiceCard, StatCard, TestimonialCard } from "@/components/ui";
import { faqItems, projects, services, whyCards } from "@/lib/data";

export function HomePage() {
  const [baPos, setBaPos] = useState(50);

  return (
    <main>
      <section className="oxr-photo oxr-photo-dark relative flex min-h-[calc(100svh-84px)] items-end md:min-h-[calc(100svh-96px)] lg:min-h-[88vh]">
        <div className="relative z-10 mx-auto w-full max-w-container px-6 pb-14 text-white md:px-10 md:pb-[88px]">
          <div className="mb-5 inline-flex items-center gap-2.5 md:mb-6">
            <span className="h-px w-7 bg-gold-500" />
            <span className="font-sans text-xs font-semibold uppercase tracking-[0.18em] text-gold-400">Commercial & Residential Roofing · St. Louis</span>
          </div>
          <h1 className="m-0 mb-5 max-w-[900px] font-display text-[clamp(34px,11vw,68px)] font-semibold leading-[1.08] tracking-[0.01em] md:mb-6">Built to outlast the weather it stops.</h1>
          <p className="m-0 mb-8 max-w-[560px] font-sans text-[17px] leading-[1.6] text-white/82 md:mb-10 md:text-[19px]">Forty years of roofing St. Louis homes and businesses. One crew sees every job from tear-off to final inspection — no subcontracted labor, no surprises on the invoice.</p>
          <div className="flex flex-wrap gap-4">
            <Button href="/contact" variant="accent" size="lg">Request an Inspection</Button>
            <Button href="/portfolio" variant="ghost" size="lg">View Our Work</Button>
          </div>
        </div>
      </section>

      <div className="border-b border-[var(--border-subtle)] bg-white">
        <div className="mx-auto flex max-w-container flex-wrap justify-between gap-8 px-6 py-7 md:px-10">
          {["Licensed & insured in Missouri and Illinois", "GAF Master Elite certified", "25-year manufacturer warranty", "4.9 / 5 from 312 Google reviews"].map((item, index) => (
            <div key={item} className={`flex-1 basis-[200px] font-sans text-sm font-medium leading-[1.4] text-[var(--text-body)] ${index > 0 ? "md:border-l md:border-[var(--border-subtle)] md:pl-8" : ""}`}>{item}</div>
          ))}
        </div>
      </div>

      <Section>
        <div className="mb-14 flex flex-wrap items-end justify-between gap-6">
          <div>
            <Eyebrow>Services</Eyebrow>
            <h2 className="m-0 max-w-[600px] font-display text-[clamp(28px,3.4vw,40px)] font-semibold text-[var(--text-heading)]">Every roof, one standard of craft.</h2>
          </div>
          <Button href="/services" variant="secondary">All Services</Button>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.slice(0, 4).map((service) => <Link key={service.slug} href={`/services/${service.slug}`}><ServiceCard icon={service.icon} title={service.title} description={service.description} /></Link>)}
        </div>
      </Section>

      <Section tone="alt">
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <Eyebrow>Why Oxford Roofing</Eyebrow>
            <h2 className="m-0 mb-6 font-display text-[clamp(28px,3.4vw,38px)] font-semibold text-[var(--text-heading)]">Roofing you can rely on, every shingle time.</h2>
            <p className="m-0 mb-8 font-sans text-base leading-[1.7] text-[var(--text-body)]">With four decades of hands-on experience, we bring the same crew, the same materials, and the same standard to every job — whether it is a single homeowner or a portfolio of commercial properties.</p>
            <div className="flex flex-col gap-[18px]">
              {["One crew, start to finish — never subcontracted", "Manufacturer-backed warranties up to 25 years", "Direct insurance claims assistance, no middlemen"].map((item) => (
                <div key={item} className="flex items-start gap-3.5"><span className="oxr-check">✓</span><span className="font-sans text-[15px] font-medium leading-[1.5] text-[var(--text-heading)]">{item}</span></div>
              ))}
            </div>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {whyCards.map((card) => (
              <Card key={card.title} elevated>
                <IconTile>{card.icon}</IconTile>
                <div className="mb-2 font-sans text-base font-semibold leading-[1.3] text-[var(--text-heading)]">{card.title}</div>
                <div className="font-sans text-sm leading-[1.6] text-[var(--text-body)]">{card.description}</div>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      <Section>
        <div className="mb-16 text-center">
          <Eyebrow>Our Process</Eyebrow>
          <h2 className="m-0 mx-auto max-w-[620px] font-display text-[clamp(28px,3.4vw,38px)] font-semibold text-[var(--text-heading)]">Four steps, no guesswork.</h2>
        </div>
        <div className="grid gap-8 md:grid-cols-4">
          {["Inspect & assess", "Propose & plan", "Install", "Inspect & warranty"].map((title, index) => (
            <div key={title} className="border-t-2 border-gold-500 pt-6">
              <div className="mb-3 font-display text-[32px] text-gold-500">0{index + 1}</div>
              <div className="mb-2 font-sans text-base font-semibold leading-[1.3] text-[var(--text-heading)]">{title}</div>
              <div className="font-sans text-sm leading-[1.6] text-[var(--text-body)]">{["A documented, photograph-backed walkthrough of your roof's condition.", "A fixed, itemized estimate — materials, timeline, and warranty terms in writing.", "One dedicated crew, daily site cleanup, most residential roofs done in under a week.", "Final walkthrough with you, then your warranty is registered the same week."][index]}</div>
            </div>
          ))}
        </div>
      </Section>

      <div className="grid md:grid-cols-2">
        <div className="flex flex-col justify-center bg-navy-900 px-6 py-16 text-white md:px-14 md:py-24">
          <Eyebrow onDark>Commercial</Eyebrow>
          <h3 className="m-0 mb-4 font-display text-3xl font-semibold">Roofs that do not interrupt business.</h3>
          <p className="m-0 mb-7 max-w-[420px] font-sans text-[15px] leading-[1.7] text-white/75">TPO, EPDM, and modified bitumen systems, scheduled around your operating hours, with minimal-downtime install plans.</p>
          <Button href="/services/commercial-roofing" variant="ghost">Commercial Roofing</Button>
        </div>
        <PhotoBlock caption="Photography — commercial flat roof, downtown St. Louis" className="min-h-[260px] md:min-h-[340px]" />
        <PhotoBlock caption="Photography — residential tear-off, Kirkwood" className="min-h-[260px] md:min-h-[340px] md:order-[-1]" />
        <div className="flex flex-col justify-center bg-slate-50 px-6 py-16 md:px-14 md:py-24">
          <Eyebrow>Residential</Eyebrow>
          <h3 className="m-0 mb-4 font-display text-3xl font-semibold text-[var(--text-heading)]">Roofs that raise a home's standard.</h3>
          <p className="m-0 mb-7 max-w-[420px] font-sans text-[15px] leading-[1.7] text-[var(--text-body)]">Architectural asphalt, standing-seam metal, and slate-look systems, matched to your home and installed to last decades.</p>
          <Button href="/services/residential-roofing" variant="secondary">Residential Roofing</Button>
        </div>
      </div>

      <Section tone="alt">
        <div className="mb-14 flex flex-wrap items-end justify-between gap-6">
          <div><Eyebrow>Our Work</Eyebrow><h2 className="m-0 font-display text-[clamp(28px,3.4vw,40px)] font-semibold text-[var(--text-heading)]">Featured projects.</h2></div>
          <Button href="/portfolio" variant="secondary">Full Portfolio</Button>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {projects.map((project) => (
            <Link key={project.slug} href={`/portfolio/${project.slug}`}>
              <PhotoBlock caption={project.caption} className="h-[220px] rounded-lg md:h-[260px]" />
              <div className="pt-4 font-sans text-[17px] font-semibold leading-[1.3] text-[var(--text-heading)]">{project.title}</div>
              <div className="mt-1 font-sans text-sm leading-[1.5] text-[var(--text-muted)]">{project.meta}</div>
            </Link>
          ))}
        </div>
      </Section>

      <Section>
        <div className="mb-12 text-center"><Eyebrow>Before & After</Eyebrow><h2 className="m-0 mx-auto max-w-[600px] font-display text-[clamp(28px,3.4vw,38px)] font-semibold text-[var(--text-heading)]">See the difference a proper install makes.</h2></div>
        <div className="mx-auto max-w-[900px]">
          <div className="relative h-[340px] overflow-hidden rounded-lg md:h-[460px]">
            <div className="oxr-photo absolute inset-0 bg-[repeating-linear-gradient(135deg,var(--slate-300)_0px,var(--slate-300)_2px,var(--slate-200)_2px,var(--slate-200)_46px)]" />
            <div className="absolute inset-0 overflow-hidden" style={{ clipPath: `inset(0 ${100 - baPos}% 0 0)` }}><div className="oxr-photo oxr-photo-dark absolute inset-0" /></div>
            <span className="absolute bottom-4 left-5 z-10 rounded-sm bg-white/85 px-2.5 py-1.5 font-sans text-[11px] font-semibold uppercase tracking-[0.14em] text-navy-900">Photography — before: worn three-tab shingles</span>
            <span className="absolute bottom-4 right-5 z-10 hidden rounded-sm bg-navy-900/75 px-2.5 py-1.5 font-sans text-[11px] font-semibold uppercase tracking-[0.14em] text-white md:block">Photography — after: architectural shingles, new flashing</span>
            <div className="absolute bottom-0 top-0 z-[2] w-0.5 bg-white shadow-[0_0_0_1px_rgba(3,35,77,0.2)]" style={{ left: `${baPos}%` }} />
            <input aria-label="Before and after position" type="range" className="oxr-ba-slider absolute left-0 right-0 top-1/2 m-0 -translate-y-1/2" min="0" max="100" value={baPos} onChange={(event) => setBaPos(Number(event.target.value))} />
          </div>
          <div className="mt-3 flex justify-between font-sans text-xs font-semibold uppercase leading-none tracking-[0.1em] text-[var(--text-muted)]"><span>Before</span><span>After</span></div>
        </div>
      </Section>

      <Section tone="alt">
        <div className="mb-12 text-center"><Eyebrow>Testimonials</Eyebrow><h2 className="m-0 mx-auto max-w-[600px] font-display text-[clamp(28px,3.4vw,38px)] font-semibold text-[var(--text-heading)]">Client stories from the roofs we have built.</h2></div>
        <div className="grid gap-6 md:grid-cols-3">
          <TestimonialCard quote="They found a ventilation issue our last roofer never mentioned, fixed it as part of the quote, and never nickel-and-dimed us." name="Dennis Callis" role="Homeowner, Kirkwood" />
          <TestimonialCard quote="We manage four commercial properties. Oxford is the only crew we trust to work around tenants without complaints." name="Paula Mora" role="Property Manager, Clayton" />
          <TestimonialCard quote="Handled our entire insurance claim after the hail storm. We paid our deductible and nothing else." name="Marcus Webb" role="Homeowner, Webster Groves" />
        </div>
      </Section>

      <Section>
        <div className="grid md:grid-cols-4">
          <StatCard value="40+" label="Years in St. Louis" />
          <StatCard value="6,200+" label="Roofs completed" />
          <StatCard value="4.9 / 5" label="Average rating" />
          <StatCard value="25-Yr" label="Warranty available" />
        </div>
      </Section>

      <Section tone="alt">
        <div className="mx-auto max-w-narrow">
          <div className="mb-12 text-center"><Eyebrow>FAQ</Eyebrow><h2 className="m-0 font-display text-[clamp(28px,3.4vw,36px)] font-semibold text-[var(--text-heading)]">Frequently asked questions.</h2></div>
          <Accordion items={faqItems} />
        </div>
      </Section>

      <section className="bg-navy-900 px-6 py-20 text-center text-white md:px-10 md:py-[120px]">
        <h2 className="m-0 mb-5 font-display text-[clamp(30px,4vw,46px)] font-semibold">Protect what you have built.</h2>
        <p className="m-0 mb-9 font-sans text-[17px] leading-[1.6] text-white/75">Request a free, no-obligation inspection — most estimates delivered within 48 hours.</p>
        <Button href="/contact" variant="accent" size="lg">Request a Free Estimate</Button>
        <div className="mt-5 font-sans text-[15px] font-medium leading-none text-white/60">Or call (314) 555-0142</div>
      </section>
    </main>
  );
}
