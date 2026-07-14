import Link from "next/link";
import { Accordion, BeforeAfterComparison, Button, Card, Eyebrow, Input, PhotoBlock, Section, Select, ServiceCard } from "@/components/ui";
import { faqItems, projects, services } from "@/lib/data";
import { assetPath } from "@/lib/paths";

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
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => <Link key={service.slug} href={`/services/${service.slug}`}><ServiceCard icon={service.icon} title={service.title} description={service.short} /></Link>)}
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
            <h2 className="m-0 mb-6 font-display text-[clamp(28px,3.4vw,38px)] font-semibold text-[var(--text-heading)]">Four decades in the field changes how you work.</h2>
            <p className="m-0 mb-6 font-sans text-base leading-[1.7] text-[var(--text-body)]">Oxford Roofing serves homeowners, building owners, and property managers who want a roof installed correctly, documented clearly, and warranted without confusion.</p>
            <p className="m-0 font-sans text-base leading-[1.7] text-[var(--text-body)]">The work is direct: inspect the roof, explain the finding, build the system, clean the site, and stand behind the result.</p>
          </div>
          <PhotoBlock src="/uploads/photography-commercial-flat-roof-downtown-stl.png" alt="Roofing crew and materials on a commercial flat roof" className="min-h-[420px] rounded-lg" objectPosition="center" />
        </div>
      </Section>
      <Section tone="alt">
        <div className="grid gap-6 md:grid-cols-3">
          {["No subcontracted crews", "Written scopes before work begins", "Warranty terms registered promptly"].map((item) => <Card key={item} elevated><div className="font-sans text-lg font-semibold text-[var(--text-heading)]">{item}</div></Card>)}
        </div>
      </Section>
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
        <div className="mx-auto max-w-narrow"><Accordion items={faqItems} /></div>
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
            <div className="mt-8 font-sans text-sm leading-[1.8] text-[var(--text-body)]">St. Louis, Missouri<br />(314) 555-0142<br />inspections@oxfordroofing.com</div>
          </div>
          <Card elevated padding="lg">
            <form className="grid gap-5">
              <div className="grid gap-5 md:grid-cols-2"><Input label="First name" /><Input label="Last name" /></div>
              <div className="grid gap-5 md:grid-cols-2"><Input label="Email" type="email" /><Input label="Phone" type="tel" /></div>
              <Select label="Project type" options={["Residential roofing", "Commercial roofing", "Storm damage", "Inspection", "Not sure"]} />
              <label className="block"><span className="mb-2 block font-sans text-sm font-semibold text-[var(--text-heading)]">Project notes</span><textarea className="min-h-32 w-full rounded-md border border-[var(--border-default)] bg-white p-4 font-sans text-sm text-[var(--text-heading)] focus:border-gold-500 focus:outline-none" /></label>
              <Button type="submit" variant="primary" size="lg">Submit Request</Button>
            </form>
          </Card>
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

function Cta({ title, body }: { title: string; body: string }) {
  return (
    <section className="bg-navy-900 px-6 py-[100px] text-center text-white md:px-10">
      <h2 className="m-0 mb-6 font-display text-[clamp(28px,3.6vw,40px)] font-semibold">{title}</h2>
      <p className="m-0 mb-8 font-sans text-base leading-[1.6] text-white/75">{body}</p>
      <Button href="/contact" variant="accent" size="lg">Request an Inspection</Button>
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
