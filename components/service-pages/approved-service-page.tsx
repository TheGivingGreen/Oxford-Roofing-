import Link from "next/link";
import { assetPath } from "@/lib/paths";
import {
  serviceTerritory,
  type ApprovedServicePageData,
} from "@/lib/approved-service-pages";
import {
  ServiceAccordion,
  ServiceBeforeAfterComparison,
} from "./service-interactions";
import styles from "./approved-service-page.module.css";

function twoDigit(index: number) {
  return String(index + 1).padStart(2, "0");
}

function Eyebrow({
  children,
  dark = false,
}: {
  children: React.ReactNode;
  dark?: boolean;
}) {
  return (
    <p className={`${styles.eyebrow} ${dark ? styles.eyebrowDark : ""}`}>
      {children}
    </p>
  );
}

function Hero({ data }: { data: ApprovedServicePageData }) {
  const proofId = `${data.slug}-proof`;
  const heroClass = `${styles.hero} ${styles[`hero_${data.hero.variant}`]}`;

  const copy = (
    <div className={styles.heroCopy}>
      <div className={styles.heroCopyInner}>
        <Eyebrow dark={data.hero.variant !== "light-split"}>
          {data.hero.eyebrow}
        </Eyebrow>
        <p className={styles.serviceLabel}>{data.hero.label}</p>
        <h1 id={`${data.slug}-title`}>{data.hero.title}</h1>
        <p className={styles.lead}>{data.hero.lead}</p>
        <div className={styles.heroActions}>
          <Link
            className={`${styles.button} ${styles.buttonGold}`}
            href="/contact"
          >
            {data.hero.ctaLabel ?? "Request an Inspection"}
          </Link>
          <Link
            className={`${styles.button} ${styles.buttonGhost}`}
            href={data.hero.proofHref ?? `#${proofId}`}
          >
            {data.hero.proofLabel}
          </Link>
        </div>
      </div>
    </div>
  );

  const image = (
    <figure className={styles.heroFigure}>
      <img src={assetPath(data.hero.image)} alt={data.hero.alt} />
      <figcaption className={styles.imageCaption}>
        {data.hero.caption}
      </figcaption>
    </figure>
  );

  return (
    <section className={heroClass} aria-labelledby={`${data.slug}-title`}>
      {data.hero.variant === "commercial-panel" ? image : null}
      {copy}
      {data.hero.variant !== "commercial-panel" ? image : null}
    </section>
  );
}

function ExperienceStrip() {
  return (
    <section
      className={styles.proofBand}
      aria-label="Oxford Roofing experience"
    >
      <div className={`${styles.container} ${styles.proofInner}`}>
        <div className={styles.proofItem}>
          <div className={styles.proofValue}>20+</div>
          <div className={styles.proofLabel}>Years of experience</div>
        </div>
        <div className={styles.proofItem}>
          <div className={styles.proofValue}>900+</div>
          <div className={styles.proofLabel}>Roofs completed</div>
        </div>
      </div>
    </section>
  );
}

function DecisionSection({ data }: { data: ApprovedServicePageData }) {
  return (
    <section
      className={styles.section}
      aria-labelledby={`${data.slug}-decision-title`}
    >
      <div className={styles.container}>
        <header className={styles.sectionHeader}>
          <div>
            <Eyebrow>{data.decision.eyebrow}</Eyebrow>
            <h2 id={`${data.slug}-decision-title`}>{data.decision.title}</h2>
          </div>
          <p className={styles.lead}>{data.decision.lead}</p>
        </header>
        <div className={styles.criteriaGrid}>
          {data.decision.criteria.map((criterion, index) => (
            <article className={styles.criterion} key={criterion.title}>
              <div className={styles.criterionNumber}>{twoDigit(index)}</div>
              <div>
                <h3>{criterion.title}</h3>
                <p>{criterion.body}</p>
              </div>
            </article>
          ))}
        </div>
        {data.decision.note ? (
          <p className={styles.sectionNote}>{data.decision.note}</p>
        ) : null}
      </div>
    </section>
  );
}

function PrinciplesSection({ data }: { data: ApprovedServicePageData }) {
  return (
    <section
      className={`${styles.section} ${styles.sectionNavy}`}
      aria-labelledby={`${data.slug}-principles-title`}
    >
      <div className={styles.container}>
        <header className={styles.principlesHeading}>
          <Eyebrow dark>{data.principles.eyebrow}</Eyebrow>
          <h2 id={`${data.slug}-principles-title`}>{data.principles.title}</h2>
        </header>
        <div className={styles.principles}>
          {data.principles.items.map((principle, index) => (
            <article className={styles.principle} key={principle.title}>
              <div className={styles.principleNumber}>{twoDigit(index)}</div>
              <h3>{principle.title}</h3>
              <p>{principle.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ScopeSection({ data }: { data: ApprovedServicePageData }) {
  const media = data.scope.placeholder ? (
    <div
      className={styles.photoPlaceholder}
      role="img"
      aria-label={data.scope.placeholder.ariaLabel}
    >
      <span>
        <span className={styles.placeholderKicker}>
          {data.scope.placeholder.kicker}
        </span>
        <span className={styles.placeholderTitle}>
          {data.scope.placeholder.title}
        </span>
        <span className={styles.placeholderNote}>
          {data.scope.placeholder.note}
        </span>
      </span>
    </div>
  ) : data.scope.image ? (
    <figure
      className={`${styles.scopeMedia} ${data.scope.caption ? styles.scopeMediaCaptioned : ""}`}
    >
      <img src={assetPath(data.scope.image)} alt={data.scope.alt ?? ""} />
      {data.scope.caption ? (
        <figcaption className={styles.scopeCaption}>
          {data.scope.caption}
        </figcaption>
      ) : null}
    </figure>
  ) : null;

  return (
    <section
      className={styles.section}
      aria-labelledby={`${data.slug}-scope-title`}
    >
      <div
        className={`${styles.container} ${styles.scopeLayout} ${data.scope.reverse ? styles.scopeLayoutReverse : ""} ${media ? "" : styles.scopeLayoutTextOnly}`}
      >
        {media}
        <div className={styles.scopeCopy}>
          <Eyebrow>{data.scope.eyebrow}</Eyebrow>
          <h2 id={`${data.slug}-scope-title`}>{data.scope.title}</h2>
          <p className={styles.lead}>{data.scope.lead}</p>
          <ol className={styles.scopeList}>
            {data.scope.items.map((item, index) => (
              <li key={item}>
                <span>{twoDigit(index)}</span>
                {item}
              </li>
            ))}
          </ol>
          {data.scope.note ? (
            <p className={styles.scopeNote}>{data.scope.note}</p>
          ) : null}
        </div>
      </div>
    </section>
  );
}

function ProcessSection({ data }: { data: ApprovedServicePageData }) {
  return (
    <section
      className={`${styles.section} ${styles.sectionAlt}`}
      aria-labelledby={`${data.slug}-process-title`}
    >
      <div className={styles.container}>
        <header className={styles.processHeader}>
          <Eyebrow>{data.process.eyebrow}</Eyebrow>
          <h2 id={`${data.slug}-process-title`}>{data.process.title}</h2>
          {data.process.lead ? (
            <p className={styles.lead}>{data.process.lead}</p>
          ) : null}
        </header>
        <div
          className={`${styles.processGrid} ${data.process.compact ? styles.processGridCompact : ""}`}
        >
          {data.process.steps.map((step, index) => (
            <article className={styles.processStep} key={step.title}>
              <div className={styles.processNumber}>{twoDigit(index)}</div>
              <h3>{step.title}</h3>
              <p>{step.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectProof({ data }: { data: ApprovedServicePageData }) {
  const proof = data.proof;
  const sectionId = `${data.slug}-proof`;

  if (!proof) {
    return null;
  }

  if (proof.kind === "single") {
    return (
      <section
        className={styles.singleProof}
        id={sectionId}
        aria-labelledby={`${data.slug}-proof-title`}
      >
        <figure>
          <img src={assetPath(proof.image)} alt={proof.alt} />
        </figure>
        <div className={styles.singleProofCopy}>
          <Eyebrow dark>{proof.eyebrow}</Eyebrow>
          <h2 id={`${data.slug}-proof-title`}>{proof.title}</h2>
          <p className={styles.projectMeta}>{proof.meta}</p>
          <p>{proof.body}</p>
          <Link
            className={`${styles.button} ${styles.buttonGhost}`}
            href={proof.href}
          >
            View Project
          </Link>
        </div>
      </section>
    );
  }

  if (proof.kind === "comparison") {
    return (
      <section
        className={styles.projectSection}
        id={sectionId}
        aria-labelledby={`${data.slug}-proof-title`}
      >
        <div className={`${styles.container} ${styles.comparisonLayout}`}>
          <ServiceBeforeAfterComparison
            beforeImage={proof.beforeImage}
            afterImage={proof.afterImage}
            beforeAlt={proof.beforeAlt}
            afterAlt={proof.afterAlt}
          />
          <div className={styles.comparisonCopy}>
            <Eyebrow dark>{proof.eyebrow}</Eyebrow>
            <h2 id={`${data.slug}-proof-title`}>{proof.title}</h2>
            <p className={styles.projectMeta}>{proof.meta}</p>
            <p className={styles.lead}>{proof.body}</p>
            <Link
              className={`${styles.button} ${styles.buttonGold}`}
              href={proof.href}
            >
              View Project
            </Link>
          </div>
        </div>
      </section>
    );
  }

  if (proof.kind === "placeholder") {
    return (
      <section
        className={styles.proofPlaceholder}
        id={sectionId}
        aria-labelledby={`${data.slug}-proof-title`}
      >
        <div className={`${styles.container} ${styles.proofPlaceholderInner}`}>
          <div>
            <Eyebrow dark>{proof.eyebrow}</Eyebrow>
            <h2 id={`${data.slug}-proof-title`}>{proof.title}</h2>
            <p className={styles.lead}>{proof.body}</p>
          </div>
          <aside className={styles.proofPlaceholderNote}>
            <p className={styles.placeholderKicker}>{proof.kicker}</p>
            <p>{proof.note}</p>
          </aside>
        </div>
      </section>
    );
  }

  return (
    <section
      className={styles.projectSection}
      id={sectionId}
      aria-labelledby={`${data.slug}-proof-title`}
    >
      <div className={styles.container}>
        <header className={styles.sectionHeader}>
          <div>
            <Eyebrow dark>{proof.eyebrow}</Eyebrow>
            <h2 id={`${data.slug}-proof-title`}>{proof.title}</h2>
          </div>
          {proof.body ? <p className={styles.lead}>{proof.body}</p> : null}
        </header>
        <div className={styles.projectGrid}>
          {proof.projects.map((project) => (
            <article className={styles.projectCard} key={project.title}>
              <figure>
                <img src={assetPath(project.image)} alt={project.alt} />
              </figure>
              <div className={styles.projectCardCopy}>
                <h3>{project.title}</h3>
                <p className={styles.projectMeta}>{project.meta}</p>
                <Link className={styles.projectLink} href={project.href}>
                  View Project
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function TerritorySection({ data }: { data: ApprovedServicePageData }) {
  return (
    <section
      className={styles.territorySection}
      aria-labelledby={`${data.slug}-territory-title`}
    >
      <div className={styles.container}>
        <header className={styles.territoryIntro}>
          <Eyebrow>Complete Oxford service territory</Eyebrow>
          <h2 id={`${data.slug}-territory-title`}>
            {data.hero.label} across the greater St. Louis region.
          </h2>
          <p className={styles.lead}>
            {data.territoryLead ??
              "Oxford’s approved territory includes the following Missouri and Illinois communities."}
          </p>
        </header>
        {serviceTerritory.map((state) => (
          <section
            className={styles.stateRegion}
            aria-labelledby={`${data.slug}-${state.state.toLowerCase()}-title`}
            key={state.state}
          >
            <div className={styles.stateHeading}>
              <h3 id={`${data.slug}-${state.state.toLowerCase()}-title`}>
                {state.state} Service Areas
              </h3>
            </div>
            <div className={styles.countyGrid}>
              {state.counties.map((county) => (
                <section
                  className={styles.countyGroup}
                  key={`${state.state}-${county.county}`}
                >
                  <h4>{county.county}</h4>
                  <p className={styles.countyState}>{state.state}</p>
                  <ul className={styles.locationList}>
                    {county.communities.map((community) => (
                      <li
                        data-community
                        key={`${state.state}-${county.county}-${community}`}
                      >
                        {community}
                      </li>
                    ))}
                  </ul>
                </section>
              ))}
            </div>
          </section>
        ))}
        <div className={styles.territoryTail}>
          <h3>Don’t see your town listed?</h3>
          <p>
            Our service area is always growing. If you’re in or near the greater
            St. Louis region, there’s a good chance Oxford Roofing can help.
            Contact us and we’ll confirm whether your property is within our
            current service area.
          </p>
        </div>
      </div>
    </section>
  );
}

function FaqSection({ data }: { data: ApprovedServicePageData }) {
  return (
    <section
      className={styles.faqSection}
      aria-labelledby={`${data.slug}-faq-title`}
    >
      <div className={`${styles.container} ${styles.faqLayout}`}>
        <header className={styles.faqIntro}>
          <Eyebrow>{data.faq.eyebrow}</Eyebrow>
          <h2 id={`${data.slug}-faq-title`}>{data.faq.title}</h2>
          {data.faq.lead ? <p className={styles.lead}>{data.faq.lead}</p> : null}
        </header>
        <ServiceAccordion items={data.faq.items} slug={data.slug} />
      </div>
    </section>
  );
}

function FinalCta({ data }: { data: ApprovedServicePageData }) {
  return (
    <section
      className={styles.finalCta}
      aria-labelledby={`${data.slug}-cta-title`}
    >
      <div className={`${styles.container} ${styles.finalCtaInner}`}>
        <Eyebrow dark>{data.cta.eyebrow}</Eyebrow>
        <h2 id={`${data.slug}-cta-title`}>{data.cta.title}</h2>
        <p className={styles.lead}>{data.cta.body}</p>
        <Link
          className={`${styles.button} ${styles.buttonGold}`}
          href="/contact"
        >
          {data.cta.buttonLabel ?? "Request an Inspection"}
        </Link>
      </div>
    </section>
  );
}

export function ApprovedServicePage({
  data,
}: {
  data: ApprovedServicePageData;
}) {
  return (
    <main className={styles.root}>
      <Hero data={data} />
      <ExperienceStrip />
      <DecisionSection data={data} />
      <PrinciplesSection data={data} />
      <ScopeSection data={data} />
      <ProcessSection data={data} />
      <ProjectProof data={data} />
      <TerritorySection data={data} />
      <FaqSection data={data} />
      <FinalCta data={data} />
    </main>
  );
}
