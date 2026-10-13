import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";
import type { Project } from "@/data/projects";

export function ProjectCard({ project, index = 0 }: { project: Project; index?: number }) {
  return <article className="project-card reveal-on-scroll">
    <Link href={`/work/${project.slug}`} aria-label={`Read about ${project.title}`}>
      <div className={`project-visual${project.media ? " has-project-media" : ""}`} style={{ "--project-accent": project.accent } as CSSProperties}>
        <span className="project-visual-index">0{index + 1} / FEATURED PROJECT</span>
        {project.media && <div className="project-orbit-media"><Image src={project.media.cover.src} alt={project.media.cover.alt} fill sizes="(max-width: 600px) 65vw, 32vw" /></div>}
        <div className="project-visual-type">{project.type}</div><strong>{project.title}</strong>
        <span className="visual-corner" aria-hidden="true">↗</span>
      </div>
      <div className="project-info"><div><span className="project-type">{project.type} <b>·</b> {project.year}</span><h3>{project.title}</h3><p>{project.summary}</p></div><span className="project-arrow" aria-hidden="true">↗</span></div>
    </Link>
  </article>;
}
