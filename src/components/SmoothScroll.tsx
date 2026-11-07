"use client";

import { useEffect } from "react";

type LenisLike = { raf(time: number): void; scrollTo(target: string | number, options?: { offset?: number }): void; destroy(): void };

export function SmoothScroll() {
  useEffect(() => {
    // Gentle inertial scrolling for mouse users only; touch keeps native momentum,
    // and reduced-motion users keep the browser's instant behavior.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (window.matchMedia("(pointer: coarse)").matches) return;

    let raf = 0;
    let destroyed = false;
    let lenis: LenisLike | null = null;
    let detachClick: (() => void) | null = null;

    import("lenis").then(({ default: Lenis }) => {
      if (destroyed) return;
      lenis = new Lenis({ duration: 1.05, easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) });
      const loop = (time: number) => { lenis?.raf(time); raf = requestAnimationFrame(loop); };
      raf = requestAnimationFrame(loop);

      const html = document.documentElement;
      html.style.scrollBehavior = "auto";

      // Route same-page anchor clicks through Lenis so nav links glide too.
      const onClick = (event: MouseEvent) => {
        if (event.defaultPrevented || event.metaKey || event.ctrlKey) return;
        const anchor = (event.target as HTMLElement).closest?.("a[href*='#']") as HTMLAnchorElement | null;
        if (!anchor) return;
        const url = new URL(anchor.href, location.href);
        if (!url.hash || url.pathname.replace(/\/$/, "") !== location.pathname.replace(/\/$/, "")) return;
        event.preventDefault();
        lenis?.scrollTo(url.hash, { offset: -84 });
      };
      document.addEventListener("click", onClick);
      detachClick = () => document.removeEventListener("click", onClick);
    });

    return () => {
      destroyed = true;
      cancelAnimationFrame(raf);
      detachClick?.();
      lenis?.destroy();
      document.documentElement.style.scrollBehavior = "";
    };
  }, []);

  return null;
}
