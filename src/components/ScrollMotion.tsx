"use client";

import { useEffect } from "react";

export function ScrollMotion() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const root = document.documentElement;
    const elements = document.querySelectorAll<HTMLElement>(".reveal-on-scroll");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => { if (entry.isIntersecting) { entry.target.classList.add("is-visible"); observer.unobserve(entry.target); } });
    }, { threshold: .08, rootMargin: "0px 0px -25px 0px" });
    elements.forEach((element) => observer.observe(element));
    root.classList.add("motion-ready");

    let frame = 0;
    const update = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => root.style.setProperty("--hero-shift", `${Math.min(window.scrollY * .13, 65)}px`));
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => { observer.disconnect(); window.removeEventListener("scroll", update); cancelAnimationFrame(frame); root.classList.remove("motion-ready"); root.style.removeProperty("--hero-shift"); };
  }, []);
  return null;
}
