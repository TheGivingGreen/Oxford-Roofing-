import { Button, Section } from "@/components/ui";

export default function NotFound() {
  return (
    <main>
      <Section tone="alt">
        <div className="mx-auto max-w-narrow text-center">
          <div className="mb-4 font-sans text-xs font-semibold uppercase tracking-[0.18em] text-[var(--text-gold)]">404</div>
          <h1 className="m-0 mb-6 font-display text-[clamp(32px,4.6vw,50px)] font-semibold text-[var(--text-heading)]">Page not found.</h1>
          <p className="m-0 mb-8 font-sans text-base leading-[1.7] text-[var(--text-body)]">The page may have moved, or the roofline may have changed.</p>
          <Button href="/" variant="primary" size="lg">Return Home</Button>
        </div>
      </Section>
    </main>
  );
}
