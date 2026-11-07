import type { CSSProperties } from "react";

const steps = [
  { number: "01", title: "Listen & map it out", text: "Every project starts with your goals, your users, and the boring constraints too. We agree on the problem before anyone touches code.", bg: "#a7e8bd", ink: "#16301f", tag: "DISCOVERY" },
  { number: "02", title: "Design & build", text: "I design and build in the open — you see real progress early and often, and nothing ships that you have not already seen and approved.", bg: "#748ffc", ink: "#ffffff", tag: "BUILD" },
  { number: "03", title: "Launch & polish", text: "Launch day is not the finish line. I test on real devices, measure what matters, and keep polishing until it feels right everywhere.", bg: "#ffa94d", ink: "#4a2508", tag: "LAUNCH" },
  { number: "04", title: "Support & grow", text: "After launch I stick around: updates, fixes, SEO and performance care — so the site keeps working as hard as you do.", bg: "#63e6be", ink: "#0d3a2c", tag: "AFTER CARE" },
];

export function ProcessSection() {
  return <section id="process" className="process-section section-shell section-space" aria-labelledby="process-title">
    <div className="section-topline"><span className="section-kicker">03 / HOW WE WILL WORK</span><span className="section-note">CLEAR STEPS. NO SILENCE.</span></div>
    <h2 id="process-title">A simple process,<br /><em>seriously followed.</em></h2>
    <div className="process-stack">
      {steps.map((step) => <article className="process-card" key={step.number} style={{ "--process-bg": step.bg, "--process-ink": step.ink } as CSSProperties}>
        <span className="process-num" aria-hidden="true">{step.number}</span>
        <div><h3>{step.title}</h3><p>{step.text}</p></div>
        <span className="process-step-tag">{step.tag}</span>
      </article>)}
    </div>
  </section>;
}
