"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";

const items = ["WORDPRESS", "COMMERCE", "NEXT.JS", "PRODUCT THINKING", "GOOD DETAILS"];

export function ExpertiseTicker() {
  const viewportRef = useRef<HTMLDivElement>(null);
  const cycleRef = useRef<HTMLDivElement>(null);
  const [layout, setLayout] = useState({ width: 0, copies: 2 });

  useEffect(() => {
    const viewport = viewportRef.current;
    const cycle = cycleRef.current;
    if (!viewport || !cycle) return;

    const measure = () => {
      const width = cycle.getBoundingClientRect().width;
      if (width > 0) {
        setLayout({ width, copies: Math.max(2, Math.ceil(viewport.clientWidth / width) + 1) });
      }
    };
    const observer = new ResizeObserver(measure);
    observer.observe(viewport);
    observer.observe(cycle);
    measure();
    return () => observer.disconnect();
  }, []);

  const group = (copy: number) => <div className="ticker-group" key={copy} ref={copy === 0 ? cycleRef : undefined} aria-hidden={copy > 0}>
    {items.map((item) => <span key={item}>{item}<i aria-hidden="true">✳</i></span>)}
  </div>;

  return <div className="ticker" aria-label="Areas of expertise" ref={viewportRef}>
    <div className={`ticker-track${layout.width ? " is-ready" : ""}`} style={{ "--ticker-cycle": `${layout.width}px`, "--ticker-duration": `${Math.max(18, layout.width / 42)}s` } as CSSProperties}>
      {Array.from({ length: layout.copies }, (_, copy) => group(copy))}
    </div>
  </div>;
}
