"use client";

import { useState, type FormEvent } from "react";

export function ContactForm() {
  const [state, setState] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [error, setError] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) return;
    setState("sending");
    setError("");
    try {
      const response = await fetch("/api/contact", { method: "POST", body: new FormData(form) });
      const result = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(result.error || "Your message could not be sent right now.");
      form.reset();
      setState("sent");
    } catch (caught) {
      setError(caught instanceof Error ? caught.message : "Your message could not be sent right now.");
      setState("error");
    }
  }

  return <form className="contact-form" onSubmit={handleSubmit}>
    <div className="form-heading"><span>START A PROJECT</span><span>↗</span></div>
    <div className="form-fields"><label>Your name <input name="name" type="text" autoComplete="name" placeholder="How should I call you?" maxLength={100} required /></label><label>Email address <input name="email" type="email" autoComplete="email" placeholder="you@example.com" maxLength={254} required /></label></div>
    <label>What can I help with? <select name="service" defaultValue="" required><option value="" disabled>Choose a starting point</option><option>WordPress or a custom platform</option><option>Commerce or online store</option><option>React or Next.js front end</option><option>Something else</option></select></label>
    <label>Tell me a little about it <textarea name="message" placeholder="The idea, the challenge, the timeline — anything useful to know..." rows={5} minLength={10} maxLength={5000} required /></label>
    <div className="form-trap" aria-hidden="true"><label>Leave this field empty<input name="website" tabIndex={-1} autoComplete="off" /></label></div>
    <button className="button button-primary form-submit" type="submit" disabled={state === "sending"}>{state === "sending" ? "Sending…" : "Send the details"}<span aria-hidden="true">↗</span></button>
    <p className="form-feedback" role="status" aria-live="polite">{state === "sent" ? "Thanks — your message is on its way. I’ll reply by email." : state === "error" ? <>{error} You can also <a href="mailto:adetunjitiamiyu5@gmail.com">email me directly</a>.</> : "No long brief needed. A few sentences are enough to start."}</p>
  </form>;
}
