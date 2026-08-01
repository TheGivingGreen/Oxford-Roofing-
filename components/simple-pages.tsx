import Link from "next/link";
import { Accordion, BeforeAfterComparison, Button, Card, Eyebrow, IconTile, PhotoBlock, Section } from "@/components/ui";
import { InspectionForm } from "@/components/inspection-form";
import { faqSections, projects, services } from "@/lib/data";
import { assetPath } from "@/lib/paths";
import styles from "./simple-pages.module.css";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  variant?: "default" | "portfolio";
  imageSrc?: string;
  imageAlt?: string;
  objectPosition?: string;
};

export function PageHero({ eyebrow, title, variant = "default", imageSrc, imageAlt = "", objectPosition = "center" }: PageHeroProps) {
  return (
    <section className={`relative flex items-end overflow-hidden bg-navy-900 ${imageSrc ? "" : "oxr-photo oxr-photo-dark"} ${variant === "portfolio" ? "min-h-[40vh]" : "min-h-[44vh]"}`}>
      {imageSrc ? <img src={assetPath(imageSrc)} alt={imageAlt} className="absolute inset-0 h-full w-full object-cover" style={{ objectPosition }} /> : null}
      {imageSrc ? <div className="pointer-events-none absolute inset-0 bg-navy-900/45" /> : null}
      <div className={`relative z-10 mx-auto w-full max-w-container px-6 text-white md:px-10 ${variant === "portfolio" ? "pb-14" : "pb-16"}`}>
        <div className="mb-5 font-sans text-xs font-semibold uppercase leading-none tracking-[0.18em] text-gold-400">{eyebrow}</div>
        <h1 className="m-0 max-w-narrow font-display text-[clamp(32px,4.6vw,50px)] font-semibold">{title}</h1>
      </div>
    </section>
  );
}

export function ServicesPage() {
  return (
    <main>
      <PageHero eyebrow="Services" title="Eight services. One standard of craft." imageSrc="/uploads/hero-residential-luxury-roof.png" imageAlt="Aerial view of a residential roof" objectPosition="center 58%" />
      <Section>
        <div className={styles.servicesGrid}>
          {services.map((service) => (
            <Link
              className={styles.serviceLink}
              key={service.slug}
              href={`/services/${service.slug}`}
            >
              <article className={styles.serviceNavCard}>
                <div className={styles.serviceCardBody}>
                  <IconTile>{service.icon}</IconTile>
                  <h2>{service.title}</h2>
                  <p>{service.short}</p>
                </div>
                <div className={styles.serviceCardAction} aria-hidden="true">
                  <span>View Service</span>
                  <span className={styles.serviceCardArrow}>→</span>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </Section>
      <Cta title="Not sure which service you need?" body="Start with a free inspection. We will tell you exactly what your roof needs." />
    </main>
  );
}

export function ServiceDetailPage({ slug }: { slug: string }) {
  const service = services.find((item) => item.slug === slug) ?? services[0];
  const heroMedia = serviceHeroMedia[service.slug] ?? serviceHeroMedia["residential-roofing"];
  return (
    <main>
      <PageHero eyebrow="Service" title={service.title} imageSrc={heroMedia.src} imageAlt={heroMedia.alt} objectPosition={heroMedia.objectPosition} />
      <Section>
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
          <div>
            <Eyebrow>Scope</Eyebrow>
            <h2 className="m-0 mb-6 font-display text-[clamp(28px,3.4vw,38px)] font-semibold text-[var(--text-heading)]">{service.description}</h2>
            <p className="m-0 mb-8 font-sans text-base leading-[1.7] text-[var(--text-body)]">Every project starts with a documented assessment, a fixed written scope, and a schedule that respects the property. We use the same brand standards across residential and commercial work: plainspoken recommendations, restrained communication, and clean site execution.</p>
            <div className="flex flex-col gap-[18px]">
              {["Photograph-backed inspection and written findings", "Material options matched to the building and budget", "Manufacturer warranty registration after final walkthrough"].map((item) => (
                <div key={item} className="flex items-start gap-3.5"><span className="oxr-check">✓</span><span className="font-sans text-[15px] font-medium leading-[1.5] text-[var(--text-heading)]">{item}</span></div>
              ))}
            </div>
          </div>
          <Card elevated padding="lg">
            <Eyebrow>Request Inspection</Eyebrow>
            <div className="mb-6 font-sans text-sm leading-[1.7] text-[var(--text-body)]">Tell us about the roof. Most estimates are delivered within 48 hours after inspection.</div>
            <Button href="/contact" variant="primary" size="lg">Start Request</Button>
          </Card>
        </div>
      </Section>
      <Cta title="Protect what you have built." body="Request a free inspection and a clear written recommendation." />
    </main>
  );
}

export function AboutPage() {
  return (
    <main>
      <PageHero eyebrow="About" title="A St. Louis roofing firm built on restraint, craft, and follow-through." imageSrc="/uploads/hero-residential-luxury-roof.png" imageAlt="Aerial view of a residential roof" objectPosition="center 58%" />
      <Section>
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <Eyebrow>Company</Eyebrow>
            <h2 className="m-0 mb-6 font-display text-[clamp(28px,3.4vw,38px)] font-semibold text-[var(--text-heading)]">Twenty years in the field changes how you work.</h2>
            <p className="m-0 mb-6 font-sans text-base leading-[1.7] text-[var(--text-body)]">Oxford was built around a few specific beliefs about how roofing work should be done. Inspection comes before recommendation. The plan is written down before the crew arrives. The people doing the work are Oxford’s people, not whoever was available that week. A finished roof should be something both the property owner and the contractor are genuinely proud of.</p>
            <p className="m-0 font-sans text-base leading-[1.7] text-[var(--text-body)]">More than twenty years in roofing has reinforced those beliefs. Oxford serves homeowners, building owners, and property managers who want quality work, clear communication, and a roofing company that stands behind the finished project.</p>
          </div>
          <PhotoBlock src="/uploads/photography-commercial-flat-roof-downtown-stl.png" alt="Roofing crew and materials on a commercial flat roof" className="min-h-[420px] rounded-lg" objectPosition="center" />
        </div>
      </Section>
      <Section tone="alt">
        <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <PhotoBlock src="/uploads/photography-residential-tearoff-kirkwood.png" alt="Oxford roofing crew completing a residential tear-off in Kirkwood" className="min-h-[440px] rounded-lg" objectPosition="center 45%" />
          <div>
            <Eyebrow>Our Crew</Eyebrow>
            <h2 className="m-0 mb-6 font-display text-[clamp(28px,3.4vw,38px)] font-semibold text-[var(--text-heading)]">The Same Crew, Every Time</h2>
            <p className="m-0 mb-6 font-sans text-base leading-[1.7] text-[var(--text-body)]">Oxford does not use subcontracted crews. Every residential, commercial, storm, repair, and replacement project stays with Oxford’s own team.</p>
            <p className="m-0 font-sans text-base leading-[1.7] text-[var(--text-body)]">Keeping the work inside one accountable company gives property owners a clear line of responsibility from the written plan through the completed roof. The crew is ours. The work is ours. We stand behind the result.</p>
          </div>
        </div>
      </Section>
      <Section>
        <div className="mx-auto max-w-[900px] text-center">
          <Eyebrow>The Oxford Approach</Eyebrow>
          <h2 className="m-0 mb-6 font-display text-[clamp(28px,3.4vw,38px)] font-semibold text-[var(--text-heading)]">Straightforward from inspection through the finished project.</h2>
          <p className="m-0 mx-auto max-w-narrow font-sans text-base leading-[1.7] text-[var(--text-body)]">Oxford’s approach has not changed. We inspect the roof before recommending anything. We explain what we find in plain language. We complete the work with our own crew using quality materials. We leave the property clean, and we stand behind the finished project.</p>
          <div className="mt-12 grid gap-6 text-left md:grid-cols-3">
            {["No subcontracted crews", "A written plan in place before work begins", "Your warranty registered promptly"].map((item) => <Card key={item} elevated><div className="font-sans text-lg font-semibold text-[var(--text-heading)]">{item}</div></Card>)}
          </div>
        </div>
      </Section>
      <Section tone="alt">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
          <div>
            <Eyebrow>St. Louis Roofing</Eyebrow>
            <h2 className="m-0 mb-6 font-display text-[clamp(28px,3.4vw,38px)] font-semibold text-[var(--text-heading)]">Experience across the properties and roof systems of St. Louis.</h2>
            <p className="m-0 mb-6 font-sans text-base leading-[1.7] text-[var(--text-body)]">Oxford works across residential and commercial properties throughout the greater St. Louis region. Our verified portfolio includes slate restoration in Ladue, TPO roofing in Clayton, standing seam metal in Webster Groves, hail restoration in Chesterfield, EPDM roofing in Maplewood, and a full tear-off in Kirkwood.</p>
            <p className="m-0 mb-8 font-sans text-base leading-[1.7] text-[var(--text-body)]">That range matters. Every property brings different architecture, roof geometry, materials, and operational needs. We start by understanding the building in front of us.</p>
            <Button href="/portfolio" variant="secondary">View Our Work</Button>
          </div>
          <PhotoBlock src="/uploads/ladue-synthetic-slate-restoration.png" alt="Completed synthetic slate roof restoration in Ladue" className="min-h-[440px] rounded-lg" objectPosition="center" />
        </div>
      </Section>
      <Cta
        title="If You’re Comparing Roofing Companies, Here’s What to Look For."
        body="Ask who will complete the work. Ask to see the written proposal before anything is signed. Ask what the warranty covers and how long the company has worked in roofing. Oxford’s answers are straightforward: our crew, a written proposal, a warranty we can explain, and more than twenty years in the field."
        buttonLabel="Schedule Your Inspection"
      />
    </main>
  );
}

export function PortfolioPage() {
  return (
    <main>
      <PageHero eyebrow="Portfolio" title="Finished roofs across St. Louis homes and commercial properties." imageSrc="/uploads/hero-residential-luxury-roof.png" imageAlt="Aerial view of a residential roof" objectPosition="center 58%" />
      <Section tone="alt">
        <div className="grid gap-8 md:grid-cols-3">
          {projects.map((project) => (
            <Link key={project.slug} href={`/portfolio/${project.slug}`}>
              <PhotoBlock src={project.image} alt={project.alt} objectPosition={project.objectPosition} className="h-[300px] rounded-lg" />
              <div className="pt-4 font-sans text-[17px] font-semibold leading-[1.3] text-[var(--text-heading)]">{project.title}</div>
              <div className="mt-1 font-sans text-sm leading-[1.5] text-[var(--text-muted)]">{project.meta}</div>
            </Link>
          ))}
        </div>
      </Section>
    </main>
  );
}

export function ProjectDetailPage({ slug }: { slug: string }) {
  const project = projects.find((item) => item.slug === slug) ?? projects[0];
  const isChesterfield = project.slug === "chesterfield-hail-restoration";
  return (
    <main>
      <PageHero eyebrow="Project" title={project.title} imageSrc={project.image} imageAlt={project.alt} objectPosition={project.objectPosition} />
      <Section>
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">
          {isChesterfield ? (
            <BeforeAfterComparison
              beforeSrc="/uploads/chesterfield-hail-restoration-before.png"
              afterSrc="/uploads/chesterfield-hail-restoration-after.png"
              beforeAlt="Residential roof before restoration"
              afterAlt="Residential roof after restoration"
            />
          ) : (
            <PhotoBlock src={project.image} alt={project.alt} objectPosition={project.objectPosition} className="min-h-[460px] rounded-lg" />
          )}
          <div>
            <Eyebrow>{project.meta}</Eyebrow>
            <h2 className="m-0 mb-6 font-display text-[clamp(28px,3.4vw,38px)] font-semibold text-[var(--text-heading)]">A documented installation with a clean finish and registered warranty.</h2>
            <p className="m-0 font-sans text-base leading-[1.7] text-[var(--text-body)]">This case study follows the design system's portfolio pattern: direct scope summary, restrained photography, and simple project facts without sales language.</p>
          </div>
        </div>
      </Section>
    </main>
  );
}

export function FinancingPage() {
  return (
    <main>
      <PageHero eyebrow="Financing" title="Roof financing with clear terms before work begins." imageSrc="/uploads/hero-residential-luxury-roof.png" imageAlt="Aerial view of a residential roof" objectPosition="center 58%" />
      <Section>
        <div className="mx-auto max-w-narrow text-center">
          <Eyebrow>Options</Eyebrow>
          <h2 className="m-0 mb-6 font-display text-[clamp(28px,3.4vw,38px)] font-semibold text-[var(--text-heading)]">Plan the project without delaying the roof.</h2>
          <p className="m-0 mb-8 font-sans text-base leading-[1.7] text-[var(--text-body)]">Oxford Roofing can connect qualified clients with financing options for replacement, restoration, and storm-related work.</p>
          <Button href="/contact" variant="primary" size="lg">Discuss Financing</Button>
        </div>
      </Section>
    </main>
  );
}

export function FAQPage() {
  return (
    <main>
      <PageHero eyebrow="FAQ" title="Clear answers before a crew steps on your roof." imageSrc="/uploads/webster-groves-standing-seam-metal.png" imageAlt="Aerial view of a standing-seam metal roof" objectPosition="center 55%" />
      <Section tone="alt">
        <div className="mx-auto max-w-narrow space-y-14">
          {faqSections.map((section, index) => (
            <section key={section.title} aria-labelledby={`faq-section-${index}`}>
              <Eyebrow>FAQ</Eyebrow>
              <h2 id={`faq-section-${index}`} className="m-0 mb-7 font-display text-[clamp(26px,3.2vw,36px)] font-semibold text-[var(--text-heading)]">{section.title}</h2>
              <Accordion items={section.items} idPrefix={`faq-${index}`} />
            </section>
          ))}
        </div>
      </Section>
    </main>
  );
}

export function ContactPage() {
  return (
    <main>
      <PageHero eyebrow="Contact" title="Request a roof inspection." imageSrc="/uploads/hero-residential-luxury-roof.png" imageAlt="Aerial view of a residential roof" objectPosition="center 58%" />
      <Section>
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <Eyebrow>Start Here</Eyebrow>
            <h2 className="m-0 mb-6 font-display text-[clamp(28px,3.4vw,38px)] font-semibold text-[var(--text-heading)]">Tell us what is happening with the roof.</h2>
            <p className="m-0 font-sans text-base leading-[1.7] text-[var(--text-body)]">Most estimates are delivered within 48 hours after inspection. For urgent storm damage, call directly.</p>
            <div className="mt-8 font-sans text-sm leading-[1.8] text-[var(--text-body)]">St. Louis, Missouri<br />(314) 555-0142<br />inspections@OxfordRoofingUSA.com</div>
          </div>
          <InspectionForm />
        </div>
      </Section>
    </main>
  );
}

export function LegalPage({ title }: { title: string }) {
  return (
    <main>
      <PageHero eyebrow={title} title={`${title} for Oxford Roofing.`} />
      <Section>
        <div className="mx-auto max-w-narrow">
          <h2 className="m-0 mb-6 font-display text-[clamp(28px,3.4vw,36px)] font-semibold text-[var(--text-heading)]">{title}</h2>
          <p className="m-0 mb-5 font-sans text-base leading-[1.7] text-[var(--text-body)]">This page is prepared as production-ready website content and should be reviewed by counsel before launch.</p>
          <p className="m-0 font-sans text-base leading-[1.7] text-[var(--text-body)]">Oxford Roofing uses contact information only to respond to service requests, schedule inspections, and communicate about roofing projects.</p>
        </div>
      </Section>
    </main>
  );
}

export function ThankYouPage() {
  return (
    <main>
      <PageHero eyebrow="Thank You" title="Your inspection request has been received." />
      <Section>
        <div className="mx-auto max-w-narrow text-center">
          <p className="m-0 mb-8 font-sans text-base leading-[1.7] text-[var(--text-body)]">A member of the Oxford Roofing team will follow up to schedule the next available inspection window.</p>
          <Button href="/" variant="primary" size="lg">Return Home</Button>
        </div>
      </Section>
    </main>
  );
}

function Cta({ title, body, buttonLabel = "Request an Inspection" }: { title: string; body: string; buttonLabel?: string }) {
  return (
    <section className="bg-navy-900 px-6 py-[100px] text-center text-white md:px-10">
      <h2 className="m-0 mb-6 font-display text-[clamp(28px,3.6vw,40px)] font-semibold">{title}</h2>
      <p className="m-0 mb-8 font-sans text-base leading-[1.6] text-white/75">{body}</p>
      <Button href="/contact" variant="accent" size="lg">{buttonLabel}</Button>
    </section>
  );
}

const serviceHeroMedia: Record<string, { src: string; alt: string; objectPosition: string }> = {
  "residential-roofing": {
    src: "/uploads/photography-residential-tearoff-kirkwood.png",
    alt: "Roofing crew performing a residential tear-off",
    objectPosition: "center 45%"
  },
  "commercial-roofing": {
    src: "/uploads/photography-commercial-flat-roof-downtown-stl.png",
    alt: "Roofing crew installing a commercial flat roof in downtown St. Louis",
    objectPosition: "center 55%"
  },
  "roof-replacement": {
    src: "/uploads/photography-residential-tearoff-kirkwood.png",
    alt: "Roofing crew removing shingles from a residential roof",
    objectPosition: "center 45%"
  },
  "roof-repair": {
    src: "/uploads/hero-residential-luxury-roof.png",
    alt: "Aerial view of a residential roof",
    objectPosition: "center 58%"
  },
  "storm-damage-restoration": {
    src: "/uploads/chesterfield-hail-restoration-before-after.png",
    alt: "Side-by-side before and after views of a residential roof restoration",
    objectPosition: "center"
  },
  "insurance-claims": {
    src: "/uploads/chesterfield-hail-restoration-before-after.png",
    alt: "Side-by-side before and after views of a residential roof restoration",
    objectPosition: "center"
  },
  "roof-inspections": {
    src: "/uploads/webster-groves-standing-seam-metal.png",
    alt: "Aerial view of a standing-seam metal roof",
    objectPosition: "center 55%"
  },
  "preventative-maintenance": {
    src: "/uploads/clayton-office-park-tpo-reroof.png",
    alt: "Aerial view of a commercial roof system",
    objectPosition: "center"
  }
};
