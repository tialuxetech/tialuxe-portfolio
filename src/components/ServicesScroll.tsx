"use client";

import { useEffect, useRef, type CSSProperties } from "react";

const services = [
  { number: "01", title: "WordPress & platforms", text: "Custom WordPress builds, memberships and the PHP work that makes a platform fit the people behind it.", tags: ["WORDPRESS", "PHP", "MEMBERSHIPS"], color: "#4f46e5", color2: "#7c3aed" },
  { number: "02", title: "Commerce experiences", text: "Stores and marketplaces that feel good to shop and make daily operations easier for the team running them.", tags: ["WOOCOMMERCE", "SHOPIFY", "DOKAN"], color: "#ef4444", color2: "#f97316" },
  { number: "03", title: "Modern front ends", text: "Responsive, considered interfaces for products that need the flexibility of React, Next.js and headless content.", tags: ["REACT", "NEXT.JS", "HEADLESS"], color: "#0d9488", color2: "#10b981" },
];

export function ServicesScroll() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let frame = 0;
    const desktop = window.matchMedia("(min-width: 851px)");

    const update = () => {
      if (!desktop.matches) { track.style.transform = ""; return; }
      const rect = section.getBoundingClientRect();
      const total = section.offsetHeight - window.innerHeight;
      const progress = Math.min(Math.max(-rect.top / total, 0), 1);
      const distance = track.scrollWidth - window.innerWidth;
      track.style.transform = `translate3d(${(-progress * Math.max(distance, 0)).toFixed(1)}px,0,0)`;
    };
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(frame);
      track.style.transform = "";
    };
  }, []);

  return <section id="services" ref={sectionRef} className="services-scroll" aria-labelledby="services-title">
    <div className="services-sticky">
      <div ref={trackRef} className="services-track">
        <div className="svc-intro">
          <div className="svc-intro-top"><span className="section-kicker">02 / WHAT I CAN DO FOR YOU</span><span className="svc-note">KEEP SCROLLING —<br />IT MOVES SIDEWAYS.</span></div>
          <h2 id="services-title">Digital things,<br /><em>done properly.</em></h2>
          <p>Three ways I help teams and businesses ship websites that are useful, fast and quietly beautiful. Swipe or keep scrolling to meet them.</p>
          <span className="svc-intro-hint" aria-hidden="true">→</span>
        </div>
        {services.map((service) => <article className="svc-panel" key={service.number} style={{ "--svc-color": service.color, "--svc-color-2": service.color2 } as CSSProperties}>
          <div className="svc-panel-top"><span className="svc-number">{service.number} / 03</span><span className="svc-arrow" aria-hidden="true">↗</span></div>
          <div className="svc-panel-body">
            <h3>{service.title}</h3>
            <p>{service.text}</p>
          </div>
          <div className="svc-tags">{service.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
        </article>)}
      </div>
    </div>
  </section>;
}
