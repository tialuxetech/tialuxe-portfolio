"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import type { Project } from "@/data/projects";

export function ProjectGallery({ project }: { project: Project }) {
  const [index, setIndex] = useState(0);
  const viewport = useRef<HTMLDivElement>(null);
  const gallery = project.media?.gallery ?? [];
  const image = gallery[index];

  useEffect(() => { if (viewport.current) viewport.current.scrollTop = 0; }, [index]);
  if (!image) return null;

  return <section className="project-gallery" aria-labelledby="gallery-title">
    <div className="gallery-heading"><div><span className="section-kicker">A CLOSER LOOK</span><h2 id="gallery-title">See the work <em>up close.</em></h2></div><p>Explore the project imagery. The full homepage can be scrolled inside the frame.</p></div>
    <div className="gallery-tabs" role="group" aria-label="Choose project image">{gallery.map((item, itemIndex) => <button key={item.src} type="button" className={index === itemIndex ? "is-selected" : ""} aria-pressed={index === itemIndex} onClick={() => setIndex(itemIndex)}><span>0{itemIndex + 1}</span>{item.label}</button>)}</div>
    <div className="gallery-stage" style={{ "--project-accent": project.accent } as React.CSSProperties}><div className="gallery-browser"><div className="gallery-browser-top"><div className="builder-dots" aria-hidden="true"><i /><i /><i /></div><span>{project.title.toLowerCase().replaceAll(" ", "-")}.preview</span><span>↗</span></div><div className={`gallery-viewport${image.scroll ? " is-scrollable" : ""}`} ref={viewport} key={image.src} tabIndex={image.scroll ? 0 : undefined} aria-label={image.scroll ? `Scroll through ${image.label}` : undefined}><Image src={image.src} alt={image.alt} width={image.width} height={image.height} sizes="(max-width: 800px) 100vw, 90vw" /></div></div></div>
    <div className="gallery-foot"><span>{image.scroll ? "SCROLL INSIDE THE FRAME TO EXPLORE THE FULL PAGE" : image.label.toUpperCase()}</span><a href={image.src} target="_blank" rel="noreferrer">Open full image ↗</a></div>
  </section>;
}
