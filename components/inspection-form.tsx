"use client";

import { useState } from "react";
import styles from "./home-page.module.css";

export function InspectionForm() {
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const body = new URLSearchParams();

    formData.forEach((value, key) => {
      if (typeof value === "string") body.append(key, value);
    });

    setStatus("submitting");

    try {
      const response = await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: body.toString(),
      });

      if (!response.ok) throw new Error("Form submission failed");

      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form
      className={styles.heroForm}
      name="hero-inspection"
      method="POST"
      data-netlify="true"
      netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
    >
      <input type="hidden" name="form-name" value="hero-inspection" />
      <label className={styles.honeypot} aria-hidden="true">
        Do not fill this out
        <input name="bot-field" tabIndex={-1} autoComplete="off" />
      </label>

      <div className={styles.heroFormEyebrow}>Request an inspection</div>
      <h2>Get a fast, obligation-free estimate.</h2>
      <p>Tell us the best times to schedule your free inspection.</p>

      <div className={styles.heroFieldGrid}>
        <label className={styles.heroFieldName}>
          <span>Name</span>
          <input type="text" name="name" autoComplete="name" required />
        </label>
        <label className={styles.heroFieldEmail}>
          <span>Email address</span>
          <input type="email" name="email" autoComplete="email" required />
        </label>
        <label className={styles.heroFieldPhone}>
          <span>Phone number</span>
          <input
            type="tel"
            name="phone"
            autoComplete="tel"
            inputMode="tel"
            required
          />
        </label>
        <label className={styles.heroFieldAddress}>
          <span>Property address</span>
          <input
            type="text"
            name="property-address"
            autoComplete="street-address"
            placeholder="Street address"
            required
          />
        </label>
        <label className={styles.heroFieldZip}>
          <span>ZIP code</span>
          <input
            type="text"
            name="zip"
            autoComplete="postal-code"
            inputMode="numeric"
            required
          />
        </label>
      </div>

      <label className={styles.heroInspectionTime}>
        <span>Best time for your free roof inspection?</span>
        <textarea
          name="inspection-time"
          rows={3}
          placeholder="Share the days and times that work best for you"
        />
      </label>

      <label className={styles.heroConsent}>
        <input type="checkbox" name="consent" value="yes" required />
        <span>
          I consent. By completing this form, you’re giving Oxford Roofing
          permission to follow up by phone, email, or text.
        </span>
      </label>

      <button
        className={styles.heroSubmit}
        type="submit"
        disabled={status === "submitting"}
      >
        {status === "submitting" ? "Submitting" : "Submit Now"}
      </button>
      <div
        className={styles.heroFormStatus}
        role="status"
        aria-live="polite"
      >
        {status === "success"
          ? "Thank you. Your request has been received."
          : status === "error"
            ? "We could not send your request. Please try again."
            : ""}
      </div>
    </form>
  );
}
