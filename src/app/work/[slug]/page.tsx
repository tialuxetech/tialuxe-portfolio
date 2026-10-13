import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { CSSProperties } from "react";
import { projects } from "@/data/projects";
import { ProjectGallery } from "@/components/ProjectGallery";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() { return projects.map(({ slug }) => ({ slug })); }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  return { title: project?.title ?? "Project", description: project?.summary };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) notFound();
  const nextProject = projects[(projects.findIndex((item) => item.slug === slug) + 1) % projects.length];

  return <main id="main" className="case-page"><div className="section-shell">
    <Link className="back-link" href="/work">← All work</Link>
    <div className="case-intro"><span className="section-kicker">{project.type} / {project.year}</span><h1>{project.title}<span>.</span></h1><p>{project.summary}</p><div className="case-actions">{project.url && <a className="button button-primary" href={project.url} target="_blank" rel="noreferrer">Visit live site <span aria-hidden="true">↗</span></a>}<Link className="inline-link" href="/#contact">Discuss a similar project ↗</Link></div></div>
    <div className={`case-hero${project.media ? " has-project-media" : ""}`} style={{ "--project-accent": project.accent } as CSSProperties}><div className="case-hero-inner"><span>PROJECT / {project.year}</span><strong>{project.title}</strong><span>{project.type}</span></div>{project.media ? <div className="case-hero-preview"><Image src={project.media.cover.src} alt={project.media.cover.alt} fill sizes="(max-width: 800px) 80vw, 50vw" /></div> : <span className="case-hero-symbol" aria-hidden="true">✳</span>}</div>
    {project.media && <ProjectGallery project={project} />}
    <div className="case-grid"><aside><span className="section-kicker">THE DETAILS</span><div className="case-meta"><span>Year</span><strong>{project.year}</strong></div><div className="case-meta"><span>Focus</span><strong>{project.type}</strong></div><div className="case-meta"><span>Tools</span><div className="stack-list">{project.stack.map((tool) => <span key={tool}>{tool}</span>)}</div></div></aside><div className="case-story"><section><span className="section-kicker">THE CONTEXT</span><h2>What needed to happen</h2><p>{project.context}</p></section><section><span className="section-kicker">MY CONTRIBUTION</span><h2>What I worked on</h2><ul>{project.contribution.map((item) => <li key={item}>{item}</li>)}</ul></section><section><span className="section-kicker">THE RESULT</span><h2>Where it led</h2><p>{project.outcome}</p></section></div></div>
    <div className="next-project"><span className="section-kicker">UP NEXT</span><Link href={`/work/${nextProject.slug}`}>{nextProject.title}<span aria-hidden="true">↗</span></Link></div>
  </div></main>;
}
