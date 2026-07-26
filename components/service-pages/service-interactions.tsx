"use client";

import { useState } from "react";
import { assetPath } from "@/lib/paths";
import type { ServiceFaq } from "@/lib/approved-service-pages";
import styles from "./approved-service-page.module.css";

export function ServiceAccordion({
  items,
  slug,
}: {
  items: ServiceFaq[];
  slug: string;
}) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className={styles.accordion}>
      {items.map((item, index) => {
        const buttonId = `${slug}-faq-button-${index + 1}`;
        const panelId = `${slug}-faq-panel-${index + 1}`;
        const isOpen = openIndex === index;

        return (
          <article className={styles.faqItem} key={item.question}>
            <h3>
              <button
                className={styles.faqButton}
                id={buttonId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenIndex(isOpen ? -1 : index)}
              >
                <span>{item.question}</span>
                <span className={styles.faqIcon} aria-hidden="true" />
              </button>
            </h3>
            <div
              className={styles.faqAnswer}
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              hidden={!isOpen}
            >
              <p>{item.answer}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
}

type ComparisonProps = {
  beforeImage: string;
  afterImage: string;
  beforeAlt: string;
  afterAlt: string;
};

export function ServiceBeforeAfterComparison({
  beforeImage,
  afterImage,
  beforeAlt,
  afterAlt,
}: ComparisonProps) {
  const [position, setPosition] = useState(50);

  return (
    <div className={styles.comparisonFrame}>
      <img src={assetPath(afterImage)} alt={afterAlt} draggable={false} />
      <div
        className={styles.comparisonBefore}
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
      >
        <img src={assetPath(beforeImage)} alt={beforeAlt} draggable={false} />
      </div>
      <div
        className={styles.comparisonDivider}
        style={{ left: `${position}%` }}
        aria-hidden="true"
      />
      <input
        className={styles.comparisonRange}
        type="range"
        min="0"
        max="100"
        value={position}
        aria-label="Compare Chesterfield roof before and after restoration"
        onInput={(event) => setPosition(Number(event.currentTarget.value))}
        onChange={(event) => setPosition(Number(event.currentTarget.value))}
      />
      <span
        className={`${styles.comparisonLabel} ${styles.comparisonLabelBefore}`}
      >
        Before
      </span>
      <span
        className={`${styles.comparisonLabel} ${styles.comparisonLabelAfter}`}
      >
        After
      </span>
    </div>
  );
}
