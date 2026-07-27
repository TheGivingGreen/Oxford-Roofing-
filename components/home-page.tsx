"use client";

import Link from "next/link";
import {
  Accordion,
  BeforeAfterComparison,
  Button,
  Card,
  Eyebrow,
  IconTile,
  PhotoBlock,
  Section,
  ServiceCard,
  StatCard,
  TestimonialCard,
} from "@/components/ui";
import { projects, services, whyCards } from "@/lib/data";
import { assetPath } from "@/lib/paths";
import styles from "./home-page.module.css";

const homeServiceDescriptions: Record<string, string> = {
  "residential-roofing":
    "From inspections and repairs to full replacements, Oxford handles residential roofing for St. Louis homes the right way. We document what we find, explain what it means, and build what we agree to.",
  "commercial-roofing":
    "TPO, EPDM, low-slope systems, and flat-roof projects for St. Louis businesses and property portfolios. Managed around your tenants and your timeline.",
  "roof-replacement":
    "A complete, documented path from your existing roof's condition to an approved new system. Nothing gets built until you understand exactly what you're approving.",
  "roof-repair":
    "When the problem is contained, a well-defined repair is the right answer. Oxford identifies the affected area, puts the plan in writing, and fixes what needs fixing.",
};

const homeWhyDescriptions = [
  "We show up, communicate clearly, and do what we say we will do.",
  "With more than 20 years in roofing, we know what to look for and how to solve it.",
  "We explain what your roof needs, what it doesn’t, and what everything will cost.",
  "We use quality materials and proven installation methods to build roofs that last.",
];

const homeWhyTitles = ["Reliability", "Experience", "Honesty", "Craft"];

const homeFaqItems = [
  {
    question: "How is a residential roof-replacement schedule established?",
    answer:
      "Once a project is approved and the materials are confirmed, Oxford works with you to schedule a start date. Timing depends on crew availability, material lead times, and the scope of the project. You'll have a confirmed schedule in writing before work begins, not a vague window.",
  },
  {
    question: "Can Oxford help with an insurance claim?",
    answer:
      "Oxford documents the roof's post-storm condition, produces an accurate written estimate, and can meet your adjuster on site when needed. Coverage decisions belong to your insurer, but thorough contractor documentation gives you a clear record to bring to that conversation. See our Insurance Claims Assistance page for more.",
  },
  {
    question: "What warranty comes with a new roof?",
    answer:
      "Workmanship is covered for a minimum of 10 years. Manufacturer warranties run up to 25 years depending on the material and system installed.",
  },
  {
    question: "Does Oxford handle commercial roofing?",
    answer:
      "Yes. Oxford works with commercial property owners and managers across the St. Louis metro on TPO, EPDM, and low-slope roofing systems. The Clayton Office Park and Maplewood Retail Center projects in our portfolio are both verified commercial work. See our Commercial Roofing page for the full picture.",
  },
  {
    question: "What does a roof inspection include?",
    answer:
      "Oxford inspects every accessible roof plane, edge, penetration, transition, and adjoining component. We document what we find with photographs and a written record. Inspections are free, with no obligation. You'll know what the roof looks like before any work is proposed.",
  },
];

export function HomePage() {
  return (
    <main className={styles.home}>
      <section className={styles.hero} aria-labelledby="home-title">
        <video
          className={styles.heroVideo}
          src={assetPath(
            "/videos/hero-modern-luxury-residential-roof-drone.mp4",
          )}
          poster={assetPath("/uploads/hero-residential-luxury-roof.png")}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden="true"
        />
        <div className={styles.heroOverlay} />
        <div className={styles.heroInner}>
          <div className={styles.heroEyebrow}>
            <span />
            <span>Commercial &amp; Residential Roofing · St. Louis</span>
          </div>
          <h1 id="home-title">Built to outlast the weather it stops.</h1>
          <p>
            Oxford has been working on St. Louis roofs since before most of our
            current customers moved into their homes. Commercial, residential,
            storm, replacement, and repair. We've done it all, and we've done
            it here.
          </p>
          <div className={styles.heroActions}>
            <Button href="/contact" variant="accent" size="lg">
              Request an Inspection
            </Button>
            <Button href="/portfolio" variant="ghost" size="lg">
              View Our Work
            </Button>
          </div>
        </div>
      </section>

      <section className={styles.trustBand} aria-label="Oxford Roofing facts">
        <div className={styles.trustInner}>
          {[
            "20+ years of experience",
            "900+ roofs completed",
            "Commercial and residential roofing",
            "Licensed in Missouri and Illinois.",
          ].map((item) => (
            <div className={styles.trustItem} key={item}>
              {item}
            </div>
          ))}
        </div>
      </section>

      <Section tone="alt" className={styles.whySection}>
        <div className={styles.whyLayout}>
          <div className={styles.whyCopy}>
            <Eyebrow>WHY OXFORD ROOFING</Eyebrow>
            <h2>Roofing built on trust.</h2>
            <p>
              Every property is different. Oxford inspects the roof, explains
              what we find, and outlines the work clearly before it begins.
            </p>
            <div className={styles.whyList}>
              {[
                "A clear record of your roof’s condition",
                "A written plan everyone understands",
                "Recommendations that fit your home or business",
              ].map((item) => (
                <div key={item}>
                  <span className="oxr-check">✓</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className={styles.whyGrid}>
            {whyCards.map((card, index) => (
              <Card className={styles.whyCard} key={card.title} elevated>
                <IconTile>{card.icon}</IconTile>
                <h3>{homeWhyTitles[index]}</h3>
                <p>{homeWhyDescriptions[index]}</p>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      <Section className={styles.servicesSection}>
        <div className={styles.sectionHeadingRow}>
          <div>
            <Eyebrow>Services</Eyebrow>
            <h2>Complete roofing services for St. Louis.</h2>
            <p>
              From repairs and storm damage to full roof replacements, Oxford
              Roofing serves homes and businesses across the St. Louis area.
              We’ll help you understand what your roof needs and find the right
              solution for your property.
            </p>
          </div>
          <Button href="/services" variant="secondary">
            All Services
          </Button>
        </div>
        <div className={styles.serviceGrid}>
          {services.slice(0, 4).map((service) => (
            <Link
              className={styles.serviceLink}
              key={service.slug}
              href={`/services/${service.slug}`}
            >
              <ServiceCard
                icon={service.icon}
                title={service.title}
                description={
                  homeServiceDescriptions[service.slug] ?? service.description
                }
              />
            </Link>
          ))}
        </div>
      </Section>

      <Section className={styles.processSection}>
        <header className={styles.centeredHeading}>
          <Eyebrow>Our Process</Eyebrow>
          <h2>Four steps, no guesswork.</h2>
        </header>
        <div className={styles.processGrid}>
          {[
            {
              title: "Free Consultation",
              body: "Tell us what’s happening with your roof. We’ll answer your initial questions and schedule an inspection at a convenient time.",
            },
            {
              title: "Detailed Roof Inspection",
              body: "We inspect your roof, document what we find, explain its condition clearly, and walk you through your options.",
            },
            {
              title: "Professional Project Execution",
              body: "Once approved, our skilled crew handles permits and completes your project efficiently with quality materials.",
            },
            {
              title: "Final Walkthrough & Warranty",
              body: "We review the completed work with you, answer any remaining questions, and explain your warranty.",
            },
          ].map((step, index) => (
            <article className={styles.processStep} key={step.title}>
              <div className={styles.processNumber}>0{index + 1}</div>
              <h3>{step.title}</h3>
              <p>{step.body}</p>
            </article>
          ))}
        </div>
      </Section>

      <section className={styles.serviceSplit}>
        <div className={styles.splitCopyDark}>
          <Eyebrow onDark>Commercial</Eyebrow>
          <h2>Roofs that keep your business moving.</h2>
          <p>
            Oxford Roofing protects commercial properties with durable, energy
            efficient roofing systems. From TPO installation to comprehensive
            roof repair, we provide reliable service, transparent pricing, and
            expert craftsmanship while minimizing disruption to your business.
          </p>
          <Button href="/services/commercial-roofing" variant="ghost">
            Commercial Roofing
          </Button>
        </div>
        <PhotoBlock
          src="/uploads/photography-commercial-flat-roof-downtown-stl.png"
          alt="Roofing crew installing a commercial flat roof in downtown St. Louis"
          className={`${styles.splitPhoto} ${styles.splitPhotoCommercial}`}
          objectPosition="center"
        />
        <PhotoBlock
          src="/uploads/photography-residential-tearoff-kirkwood.png"
          alt="Roofing crew performing a residential tear-off"
          className={`${styles.splitPhoto} ${styles.splitPhotoResidential}`}
          objectPosition="center"
        />
        <div className={styles.splitCopyLight}>
          <Eyebrow>Residential</Eyebrow>
          <h2>Roofs that protect what matters most.</h2>
          <p>
            Oxford Roofing provides St. Louis homeowners with durable, high
            quality roofing systems. From storm damage and roof repairs to
            complete replacements, we provide honest guidance, quality
            materials, and expert craftsmanship from start to finish.
          </p>
          <Button href="/services/residential-roofing" variant="secondary">
            Residential Roofing
          </Button>
        </div>
      </section>

      <Section tone="alt" className={styles.projectsSection}>
        <div className={styles.sectionHeadingRow}>
          <div>
            <Eyebrow>Our Work</Eyebrow>
            <h2>Featured projects.</h2>
          </div>
          <Button href="/portfolio" variant="secondary">
            Full Portfolio
          </Button>
        </div>
        <div className={styles.projectGrid}>
          {projects.map((project) => (
            <Link
              className={styles.projectLink}
              key={project.slug}
              href={`/portfolio/${project.slug}`}
            >
              <PhotoBlock
                src={project.image}
                alt={project.alt}
                objectPosition={project.objectPosition}
                className={styles.projectImage}
              />
              <h3>{project.title}</h3>
              <p>{project.meta}</p>
            </Link>
          ))}
        </div>
      </Section>

      <Section className={styles.comparisonSection}>
        <header className={styles.centeredHeading}>
          <Eyebrow>Before &amp; After</Eyebrow>
          <h2>See the difference a proper install makes.</h2>
        </header>
        <div className={styles.comparisonFrame}>
          <BeforeAfterComparison
            beforeSrc="/uploads/chesterfield-hail-restoration-before.png"
            afterSrc="/uploads/chesterfield-hail-restoration-after.png"
            beforeAlt="Residential roof before restoration"
            afterAlt="Residential roof after restoration"
          />
        </div>
      </Section>

      <Section tone="alt" className={styles.testimonialSection}>
        <header className={styles.centeredHeading}>
          <Eyebrow>Testimonials</Eyebrow>
          <h2>Client stories from the roofs we have built.</h2>
        </header>
        <div className={styles.testimonialGrid}>
          <TestimonialCard
            quote="They found a ventilation issue our last roofer never mentioned, fixed it as part of the quote, and never nickel-and-dimed us."
            name="Dennis Callis"
            role="Homeowner, Kirkwood"
          />
          <TestimonialCard
            quote="We manage four commercial properties. Oxford is the only crew we trust to work around tenants without complaints."
            name="Paula Mora"
            role="Property Manager, Clayton"
          />
          <TestimonialCard
            quote="Handled our entire insurance claim after the hail storm. We paid our deductible and nothing else."
            name="Marcus Webb"
            role="Homeowner, Webster Groves"
          />
        </div>
      </Section>

      <Section tone="dark" className={styles.statsSection}>
        <div className={styles.statsGrid}>
          <StatCard value="20+" label="Years of experience" />
          <StatCard value="900+" label="Roofs completed" />
          <StatCard value="9" label="Approved counties" />
          <StatCard value="2" label="States represented" />
        </div>
      </Section>

      <Section className={styles.faqSection}>
        <div className={styles.faqLayout}>
          <header>
            <Eyebrow>FAQ</Eyebrow>
            <h2>Frequently asked questions.</h2>
            <p>
              Clear boundaries around the roofing decision, the proposed work,
              and the information that still requires confirmation.
            </p>
          </header>
          <Accordion items={homeFaqItems} idPrefix="home-faq" />
        </div>
      </Section>

      <section className={styles.finalCta} aria-labelledby="home-cta-title">
        <div>
          <Eyebrow onDark>Book Now</Eyebrow>
          <h2 id="home-cta-title">
            <span className="block md:relative md:left-1/2 md:w-max md:-translate-x-1/2 md:whitespace-nowrap">
              Concerned about your roof?
            </span>
            <span className="block md:relative md:left-1/2 md:w-max md:-translate-x-1/2 md:whitespace-nowrap">
              Let us take a closer look.
            </span>
          </h2>
          <p>
            Whether you have a leak, storm damage, an aging roof, or simply need
            a professional opinion, Oxford Roofing will inspect your roof,
            explain what we find, and help you understand your options. Get the
            clear answers and peace of mind you need to move forward with
            confidence.
          </p>
          <Button href="/contact" variant="accent" size="lg">
            Request a Free Consultation
          </Button>
        </div>
      </section>
    </main>
  );
}
