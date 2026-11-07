"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 65, suffix: "+", label: "Vendors onboarded in Chattels' first month", color: "#a12850" },
  { value: 300, suffix: "+", label: "Regular active users on the marketplace", color: "#e5752a" },
  { value: 4.8, suffix: "", decimals: 1, label: "Google rating behind Mallard's roofing work", color: "#0d9488" },
  { value: 6, suffix: "+", label: "Months of paying subscribers retained at True Faith Journal", color: "#4f46e5" },
];

export function StatsBand() {
  const [progress, setProgress] = useState<number | null>(null);
  const bandRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const band = bandRef.current;
    if (!band) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) { setProgress(1); return; }
    const observer = new IntersectionObserver((entries) => {
      if (!entries.some((entry) => entry.isIntersecting)) return;
      observer.disconnect();
      const start = performance.now();
      const duration = 1500;
      const tick = (now: number) => {
        const t = Math.min((now - start) / duration, 1);
        setProgress(1 - Math.pow(1 - t, 3));
        if (t < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    }, { threshold: .35 });
    observer.observe(band);
    return () => observer.disconnect();
  }, []);

  return <section className="stats-band section-space" aria-label="Results in numbers"><div className="section-shell stats-inner" ref={bandRef}>
    <div className="stats-heading reveal-on-scroll"><span className="section-kicker">PROOF, NOT PROMISES</span><h2>Numbers from<br /><em>real launches.</em></h2></div>
    <div className="stats-grid">{stats.map((stat) => <div className="stat reveal-on-scroll" key={stat.label} style={{ "--stat-color": stat.color } as React.CSSProperties}>
      <strong className="stat-value">{progress === null ? "0" : (stat.value * progress).toFixed(stat.decimals ?? 0)}{stat.suffix}</strong>
      <span className="stat-label">{stat.label}</span>
    </div>)}</div>
  </div></section>;
}
