"use client";

import Link from "next/link";
import type React from "react";
import { useState } from "react";
import { CloseIcon, MenuIcon } from "@/components/icons";
import { navLinks } from "@/lib/data";
import { assetPath } from "@/lib/paths";

type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "accent" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  type?: "button" | "submit";
  className?: string;
};

const buttonSizes = {
  sm: "px-4 py-2 text-[13px]",
  md: "px-[22px] py-[11px] text-sm",
  lg: "px-7 py-3.5 text-[15px]"
};

const buttonVariants = {
  primary: "border-[var(--btn-primary-bg)] bg-[var(--btn-primary-bg)] text-[var(--btn-primary-text)] hover:bg-[var(--btn-primary-bg-hover)] active:bg-[var(--btn-primary-bg-active)]",
  accent: "border-[var(--btn-accent-bg)] bg-[var(--btn-accent-bg)] text-[var(--btn-accent-text)] hover:bg-[var(--btn-accent-bg-hover)] active:bg-[var(--btn-accent-bg-active)]",
  secondary: "border-[var(--btn-secondary-border)] bg-transparent text-[var(--btn-secondary-text)] hover:border-[var(--btn-secondary-border-hover)] hover:bg-[var(--btn-secondary-bg-hover)]",
  ghost: "border-[var(--btn-ghost-border)] bg-transparent text-[var(--btn-ghost-text)] hover:bg-[var(--btn-ghost-bg-hover)]"
};

export function Button({ children, variant = "primary", size = "md", href, type = "button", className = "" }: ButtonProps) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-md border font-sans font-semibold tracking-[0.01em] transition-colors duration-[var(--duration-base)] ease-[var(--ease-standard)] ${buttonSizes[size]} ${buttonVariants[variant]} ${className}`;
  if (href) {
    return <Link href={href} className={classes}>{children}</Link>;
  }
  return <button type={type} className={classes}>{children}</button>;
}

export function Badge({ children, tone = "gold" }: { children: React.ReactNode; tone?: "navy" | "gold" | "olive" | "outline" | "outline-on-dark" }) {
  const tones = {
    navy: "bg-navy-900 text-white",
    gold: "border border-gold-300 bg-gold-50 text-[var(--text-gold)]",
    olive: "border border-olive-300 bg-olive-50 text-olive-800",
    outline: "border border-[var(--border-default)] bg-transparent text-navy-900",
    "outline-on-dark": "border border-white/40 bg-transparent text-white"
  };
  return <span className={`inline-flex whitespace-nowrap rounded-pill px-3 py-1 font-sans text-xs font-semibold uppercase tracking-[0.06em] ${tones[tone]}`}>{children}</span>;
}

export function Card({ children, padding = "md", elevated = false, className = "" }: { children: React.ReactNode; padding?: "sm" | "md" | "lg"; elevated?: boolean; className?: string }) {
  const paddingMap = { sm: "p-4", md: "p-6", lg: "p-8" };
  return <div className={`rounded-lg border border-[var(--border-subtle)] bg-[var(--surface)] ${elevated ? "shadow-card" : ""} ${paddingMap[padding]} ${className}`}>{children}</div>;
}

export function IconTile({ children }: { children: React.ReactNode }) {
  return <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-md bg-navy-900 text-gold-400">{children}</div>;
}

export function ServiceCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <Card elevated className="h-full">
      <IconTile>{icon}</IconTile>
      <div className="mb-1.5 font-sans text-lg font-semibold leading-[1.3] text-[var(--text-heading)]">{title}</div>
      <div className="font-sans text-sm leading-[1.6] text-[var(--text-body)]">{description}</div>
    </Card>
  );
}

export function StatCard({ value, label }: { value: string; label: string }) {
  return (
    <div className="px-4 py-6 text-center">
      <div className="font-display text-[40px] font-semibold text-navy-900">{value}</div>
      <div className="mt-1 font-sans text-[13px] uppercase tracking-[0.1em] text-[var(--text-muted)]">{label}</div>
    </div>
  );
}

export function TestimonialCard({ quote, name, role }: { quote: string; name: string; role: string }) {
  return (
    <Card elevated className="h-full">
      <div className="mb-2 font-display text-[32px] leading-none text-gold-400">"</div>
      <p className="m-0 font-sans text-base leading-[1.65] text-[var(--text-body)]">{quote}</p>
      <div className="mt-5 font-sans text-sm font-semibold text-[var(--text-heading)]">{name}</div>
      <div className="mt-1 font-sans text-xs uppercase tracking-[0.1em] text-[var(--text-muted)]">{role}</div>
    </Card>
  );
}

export function Section({ children, tone = "light", className = "" }: { children: React.ReactNode; tone?: "light" | "alt" | "dark"; className?: string }) {
  const tones = {
    light: "bg-[var(--bg-page)] text-[var(--text-body)]",
    alt: "bg-[var(--bg-page-alt)] text-[var(--text-body)]",
    dark: "bg-[var(--bg-page-dark)] text-white"
  };
  return (
    <section className={`${tones[tone]} px-6 py-20 md:px-10 md:py-[var(--space-section)] ${className}`}>
      <div className="mx-auto max-w-container">{children}</div>
    </section>
  );
}

export function Eyebrow({ children, onDark = false }: { children: React.ReactNode; onDark?: boolean }) {
  return <div className={`mb-4 font-sans text-[13px] font-semibold uppercase leading-none tracking-[0.18em] ${onDark ? "text-gold-400" : "text-[var(--text-gold)]"}`}>{children}</div>;
}

export function PhotoBlock({ caption, dark = false, className = "" }: { caption: string; dark?: boolean; className?: string }) {
  return <div className={`oxr-photo ${dark ? "oxr-photo-dark" : ""} ${className}`}><span className={`oxr-photo-cap ${dark ? "oxr-photo-cap-dark" : ""}`}>{caption}</span></div>;
}

export function NavBar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border-subtle)] bg-white/94 backdrop-blur">
      <div className="mx-auto flex h-[108px] max-w-container items-center justify-between px-6 md:px-10">
        <Link href="/" className="flex items-center">
          <img src={assetPath("/assets/oxford-roofing-logo-cropped.png")} alt="Oxford Roofing" className="h-20 w-auto" />
        </Link>
        <nav className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="font-sans text-[13px] font-semibold text-[var(--text-heading)] transition-colors hover:text-[var(--text-gold)]">
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="hidden lg:block">
          <Button href="/contact" size="sm">Request an Inspection</Button>
        </div>
        <button className="flex h-10 w-10 items-center justify-center rounded-md border border-[var(--border-subtle)] text-navy-900 lg:hidden" onClick={() => setOpen((value) => !value)} aria-label="Toggle navigation">
          {open ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>
      {open ? (
        <div className="border-t border-[var(--border-subtle)] bg-white px-6 py-5 lg:hidden">
          <nav className="mx-auto flex max-w-container flex-col gap-4">
            {navLinks.map((link) => <Link key={link.href} href={link.href} className="font-sans text-sm font-semibold text-[var(--text-heading)]" onClick={() => setOpen(false)}>{link.label}</Link>)}
            <Button href="/contact" size="md" className="mt-2 w-full">Request an Inspection</Button>
          </nav>
        </div>
      ) : null}
    </header>
  );
}

export function Footer() {
  return (
    <footer className="bg-navy-900 px-6 py-16 text-white md:px-10">
      <div className="mx-auto grid max-w-container gap-10 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <img src={assetPath("/assets/oxford-roofing-logo-cropped.png")} alt="Oxford Roofing" className="mb-6 h-20 w-auto" />
          <p className="m-0 max-w-sm font-sans text-sm leading-[1.7] text-white/70">Commercial and residential roofing for St. Louis homes, businesses, and property portfolios.</p>
        </div>
        <div>
          <div className="mb-4 font-sans text-xs font-semibold uppercase tracking-[0.18em] text-gold-400">Company</div>
          <div className="flex flex-col gap-3 font-sans text-sm text-white/72">
            <Link href="/about">About</Link>
            <Link href="/services">Services</Link>
            <Link href="/portfolio">Portfolio</Link>
            <Link href="/financing">Financing</Link>
          </div>
        </div>
        <div>
          <div className="mb-4 font-sans text-xs font-semibold uppercase tracking-[0.18em] text-gold-400">Support</div>
          <div className="flex flex-col gap-3 font-sans text-sm text-white/72">
            <Link href="/faq">FAQ</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/privacy">Privacy</Link>
            <Link href="/terms">Terms</Link>
          </div>
        </div>
        <div>
          <div className="mb-4 font-sans text-xs font-semibold uppercase tracking-[0.18em] text-gold-400">Contact</div>
          <div className="font-sans text-sm leading-[1.8] text-white/72">St. Louis, Missouri<br />(314) 555-0142<br />inspections@oxfordroofing.com</div>
        </div>
      </div>
      <div className="mx-auto mt-12 max-w-container border-t border-white/15 pt-6 font-sans text-xs text-white/55">© 2026 Oxford Roofing. Commercial and residential.</div>
    </footer>
  );
}

export function Accordion({ items }: { items: { question: string; answer: string }[] }) {
  const [openIndex, setOpenIndex] = useState(0);
  return (
    <div className="border-t border-[var(--border-subtle)]">
      {items.map((item, index) => (
        <div key={item.question} className="border-b border-[var(--border-subtle)]">
          <button className="flex w-full items-center justify-between gap-6 py-5 text-left font-sans text-base font-semibold text-[var(--text-heading)]" onClick={() => setOpenIndex(openIndex === index ? -1 : index)}>
            {item.question}
            <span className="text-xl text-[var(--text-gold)]">{openIndex === index ? "-" : "+"}</span>
          </button>
          {openIndex === index ? <p className="m-0 pb-6 font-sans text-sm leading-[1.7] text-[var(--text-body)]">{item.answer}</p> : null}
        </div>
      ))}
    </div>
  );
}

export function Input({ label, type = "text" }: { label: string; type?: string }) {
  return (
    <label className="block">
      <span className="mb-2 block font-sans text-sm font-semibold text-[var(--text-heading)]">{label}</span>
      <input type={type} className="h-12 w-full rounded-md border border-[var(--border-default)] bg-white px-4 font-sans text-sm text-[var(--text-heading)] transition-colors focus:border-gold-500 focus:outline-none" />
    </label>
  );
}

export function Select({ label, options }: { label: string; options: string[] }) {
  return (
    <label className="block">
      <span className="mb-2 block font-sans text-sm font-semibold text-[var(--text-heading)]">{label}</span>
      <select className="h-12 w-full rounded-md border border-[var(--border-default)] bg-white px-4 font-sans text-sm text-[var(--text-heading)] transition-colors focus:border-gold-500 focus:outline-none">
        {options.map((option) => <option key={option}>{option}</option>)}
      </select>
    </label>
  );
}
