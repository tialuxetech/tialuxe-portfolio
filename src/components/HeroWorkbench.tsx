"use client";

import { useRef, useState, useEffect, useCallback, type PointerEvent } from "react";

const modes = [
  { label: "Content", detail: "WordPress content", title: "A better web,", accent: "by design.", code: ["content.source = wordpress;", "voice = human + useful;", "publish( your_story );"] },
  { label: "Layout", detail: "Responsive system", title: "Ideas take", accent: "shape here.", code: ["display: grid;", "columns: fluid;", "breakpoints: considered;"] },
  { label: "Polish", detail: "Frontend craft", title: "Details make", accent: "it feel right.", code: ["motion: intentional;", "corners: generous;", "experience: memorable;"] },
];

const TAB_INTERVAL = 4000;
const RESUME_DELAY = 6000;

export function HeroWorkbench() {
  const [active, setActive] = useState(0);
  const scene = useRef<HTMLDivElement>(null);
  const mode = modes[active];
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const resumeRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const startAutoplay = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setActive(prev => (prev + 1) % modes.length);
    }, TAB_INTERVAL);
  }, []);

  useEffect(() => {
    startAutoplay();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (resumeRef.current) clearTimeout(resumeRef.current);
    };
  }, [startAutoplay]);

  function handleTabClick(index: number) {
    setActive(index);
    if (intervalRef.current) clearInterval(intervalRef.current);
    if (resumeRef.current) clearTimeout(resumeRef.current);
    resumeRef.current = setTimeout(startAutoplay, RESUME_DELAY);
  }

  function move(event: PointerEvent<HTMLDivElement>) {
    if (event.pointerType !== "mouse" || !scene.current) return;
    const rect = scene.current.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - .5;
    const y = (event.clientY - rect.top) / rect.height - .5;
    scene.current.style.setProperty("--tilt-x", `${-y * 5}deg`);
    scene.current.style.setProperty("--tilt-y", `${x * 5}deg`);
  }

  function reset() {
    scene.current?.style.setProperty("--tilt-x", "0deg");
    scene.current?.style.setProperty("--tilt-y", "0deg");
  }

  return <div className="builder-scene" ref={scene} onPointerMove={move} onPointerLeave={reset} data-mode={active} aria-label="Interactive website builder preview">
    <div className="builder-aura" aria-hidden="true" />
    <div className="builder-orbit" aria-hidden="true" />
    <div className="builder-window">
      <div className="builder-toolbar"><div className="builder-dots" aria-hidden="true"><i /><i /><i /></div><span>tialuxe / studio</span><span className="builder-toolbar-status"><i /> LIVE PREVIEW</span></div>
      <div className="builder-body">
        <div className="builder-sidebar"><div className="builder-sidebar-brand">T<span>.</span></div><span className="builder-sidebar-caption">BUILD</span><div className="builder-rail-icons" aria-hidden="true"><span>▦</span><span>◫</span><span>✳</span></div><span className="builder-sidebar-caption">01—03</span></div>
        <div className="builder-preview"><div className="builder-preview-top"><strong>tialuxe<span>.</span></strong><span>WORK &nbsp; ABOUT &nbsp; CONTACT</span><i aria-hidden="true">↗</i></div><div className="builder-preview-main" key={active}><span className="builder-preview-kicker">DIGITAL EXPERIENCES / 2026</span><h3>{mode.title}<br /><em>{mode.accent}</em></h3><span className="builder-preview-line" /><div className="builder-preview-art" aria-hidden="true"><span /><span /><span /></div></div><div className="builder-preview-bottom"><span>SCROLL TO EXPLORE</span><span>DESIGN × DEVELOPMENT</span></div></div>
      </div>
    </div>
    <div className="builder-inspector"><div className="builder-inspector-top"><span>✳ &nbsp; BUILDER MODE</span><span>↗</span></div><div className="builder-mode-tabs" aria-label="Preview build stages">{modes.map((item, index) => <button key={item.label} type="button" className={active === index ? "is-selected" : ""} aria-pressed={active === index} onClick={() => handleTabClick(index)}>{item.label}</button>)}</div><p>{mode.detail}</p><div className="builder-code" aria-hidden="true"><span>style.config</span>{mode.code.map((line, index) => <code key={line}><b>{`0${index + 1}`}</b>{line}</code>)}</div></div>
    <div className="builder-corner-label">CONTENT → CODE → EXPERIENCE</div>
  </div>;
}
