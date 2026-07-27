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
    "Residential roof systems shaped by the home, its geometry, and the approved project scope.",
  "commercial-roofing":
    "Low-slope and flat-roof planning grounded in the building context and written scope.",
  "roof-replacement":
    "A documented path from the existing roof condition to an approved replacement system.",
  "roof-repair":
    "A clearly bounded review of localized roof conditions and proposed repair work.",
};

const homeWhyDescriptions = [
  "A written scope gives the project a clear reference point from condition review through completion.",
  "More than 20 years of experience and more than 900 completed roofs inform Oxford’s roofing perspective.",
  "Recommendations should follow the documented roof condition and the work approved for the property.",
  "Roof surfaces, edges, flashing details, penetrations, and transitions are considered as parts of one system.",
];

const homeFaqItems = [
  {
    question: "How is a residential roof-replacement schedule established?",
    answer:
      "The schedule depends on the property, roof configuration, approved scope, material availability, and other project conditions. Oxford’s exact timing practices require confirmation and should be stated in the written proposal.",
  },
  {
    question: "What does Insurance Claims Assistance mean?",
    answer:
      "Oxford’s defensible role is limited to roofing-contractor activities it confirms, such as documenting visible roof conditions and defining proposed roofing work. Coverage, policy interpretation, negotiation, and claim decisions remain outside that contractor role.",
  },
  {
    question: "What warranty applies to roofing work?",
    answer:
      "No warranty term is stated here. Any applicable workmanship, product, or manufacturer terms must be confirmed in Oxford’s written proposal and final project documents.",
  },
  {
    question: "Does Oxford work on commercial low-slope roofs?",
    answer:
      "Oxford’s verified portfolio includes a TPO membrane project at Clayton Office Park and an EPDM membrane project at Maplewood Retail Center. Additional systems and availability require confirmation.",
  },
  {
    question: "What does a roof inspection include?",
    answer:
      "Oxford’s inspection access, methods, photographs, report format, fees, and deliverables require confirmation. The agreed scope should identify the property context and visible roof areas included in the review.",
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
            More than 20 years of roofing experience across St. Louis-area homes
            and businesses, with more than 900 roofs completed.
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
            "Approved Missouri and Illinois territory",
          ].map((item) => (
            <div className={styles.trustItem} key={item}>
              {item}
            </div>
          ))}
        </div>
      </section>

      <Section className={styles.servicesSection}>
        <div className={styles.sectionHeadingRow}>
          <div>
            <Eyebrow>Services</Eyebrow>
            <h2>Every roof, one standard of craft.</h2>
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

      <Section tone="alt" className={styles.whySection}>
        <div className={styles.whyLayout}>
          <div className={styles.whyCopy}>
            <Eyebrow>Why Oxford Roofing</Eyebrow>
            <h2>Roofing you can rely on, every shingle time.</h2>
            <p>
              More than 20 years of roofing experience informs a deliberate
              approach: understand the property, document the visible condition,
              and define the proposed work before it begins.
            </p>
            <div className={styles.whyList}>
              {[
                "Documented conditions before work is defined",
                "A written scope as the project reference point",
                "Residential and commercial roof context considered",
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
                <h3>{card.title}</h3>
                <p>{homeWhyDescriptions[index]}</p>
              </Card>
            ))}
          </div>
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
              title: "Inspect & assess",
              body: "Review the property context and visible roof conditions included in the confirmed assessment scope.",
            },
            {
              title: "Propose & plan",
              body: "Define the proposed work, project-specific details, and applicable sequence in writing.",
            },
            {
              title: "Install",
              body: "Use the accepted written scope as the reference point for the approved roofing work.",
            },
            {
              title: "Review",
              body: "Review the completed work and the project information Oxford confirms as applicable.",
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
          <h2>Roofs that do not interrupt business.</h2>
          <p>
            Commercial low-slope and flat-roof planning based on the roof asset,
            building context, and approved project scope.
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
          <h2>Roofs that raise a home&apos;s standard.</h2>
          <p>
            Residential roofing shaped by the home, roof geometry, visible
            condition, and the system approved for that property.
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
          <Eyebrow onDark>Begin with the roof</Eyebrow>
          <h2 id="home-cta-title">Protect what you have built.</h2>
          <p>
            Request a property-specific review and a clearly defined next
            roofing step.
          </p>
          <Button href="/contact" variant="accent" size="lg">
            Request an Inspection
          </Button>
        </div>
      </section>
    </main>
  );
}
