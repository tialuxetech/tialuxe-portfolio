import type { Metadata } from "next";
import Link from "next/link";
import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/ProjectCard";

export const metadata: Metadata = { title: "Selected work", description: "Selected WordPress, commerce, and front end projects by Adetunji Tiamiyu." };

export default function WorkPage() {
  return <main id="main" className="work-page section-shell"><div className="page-intro"><span className="section-kicker">SELECTED WORK / 2024—NOW</span><h1>Useful things, <em>beautifully made.</em></h1><p>A selection of platforms, stores, and interfaces I&apos;ve helped bring to life. Each one had its own challenges, people, and reason to exist.</p></div><div className="projects-grid">{projects.map((project, index) => <ProjectCard key={project.slug} project={project} index={index} />)}</div><div className="work-page-end"><span>Have a project that belongs here?</span><Link className="inline-link" href="/#contact">Let&apos;s make it happen ↗</Link></div></main>;
}
