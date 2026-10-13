import Link from "next/link";
import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/ProjectCard";
import { ContactForm } from "@/components/ContactForm";
import { HeroTitle } from "@/components/HeroTitle";
import { HeroWorkbench } from "@/components/HeroWorkbench";
import { ScrollMotion } from "@/components/ScrollMotion";
import { ExpertiseTicker } from "@/components/ExpertiseTicker";
import { SkillsSection } from "@/components/SkillsSection";

const services = [
  { number: "01", title: "WordPress & platforms", text: "Custom WordPress builds, memberships and the PHP work that makes a platform fit the people behind it.", tags: "WORDPRESS / PHP / MEMBERSHIPS" },
  { number: "02", title: "Commerce experiences", text: "Stores and marketplaces that feel good to shop and make daily operations easier for the team running them.", tags: "WOOCOMMERCE / SHOPIFY / DOKAN" },
  { number: "03", title: "Modern front ends", text: "Responsive, considered interfaces for products that need the flexibility of React, Next.js and headless content.", tags: "REACT / NEXT.JS / HEADLESS" },
];

export default function Home() {
  return <main id="main"><ScrollMotion />
    <section className="hero section-shell" aria-labelledby="hero-title">
      <div className="hero-topline"><span><span className="status-dot" /> AVAILABLE FOR SELECT PROJECTS</span><span>INDEPENDENT DEVELOPER / LAGOS, NG</span></div>
      <div className="hero-grid">
        <div className="hero-copy">
          <p className="hero-overline">ADETUNJI TIAMIYU <span>—</span> TIALUXE TECH</p>
          <HeroTitle />
          <p className="hero-description">I build useful digital experiences with the details, personality and care that make people want to stay.</p>
          <div className="hero-actions"><Link className="button button-primary" href="/work">Explore selected work <span aria-hidden="true">↗</span></Link><Link className="button button-text" href="/#contact">Start a conversation <span aria-hidden="true">↗</span></Link></div>
        </div>
        <HeroWorkbench />
      </div>
      <div className="hero-bottomline"><span>SCROLL TO EXPLORE</span><span>01 / 05</span></div>
    </section>

    <ExpertiseTicker />

    <section id="about" className="about-section section-shell section-space" aria-labelledby="about-title"><div className="section-heading reveal-on-scroll"><span className="section-kicker">01 / THE PERSON BEHIND THE PIXELS</span><h2 id="about-title">Thoughtful builds.<br /><em>Real world impact.</em></h2></div><div className="about-content reveal-on-scroll"><p className="lead">Good websites don&apos;t just look good. They make life easier for the people using them.</p><p>I&apos;m Adetunji, a developer working across WordPress, commerce and modern front ends. I care about how a site moves, how it reads, how it works on a phone, and what happens after launch.</p><p>My approach is collaborative and practical: understand the problem, choose the right tools, and keep polishing until the experience feels right.</p><Link className="inline-link" href="/#contact">A little about your idea? <span aria-hidden="true">↗</span></Link></div></section>

    <section id="services" className="services-section section-space" aria-labelledby="services-title"><div className="section-shell"><div className="section-topline"><span className="section-kicker">02 / WHAT I CAN DO FOR YOU</span><span className="section-note">THE RIGHT TOOLS. THE RIGHT FEEL.</span></div><h2 id="services-title">Digital things,<br /><em>done properly.</em></h2><div className="services-grid">{services.map((service) => <article className="service-card" key={service.number}><div className="service-card-top"><span>{service.number} / 03</span><span aria-hidden="true">↗</span></div><div><h3>{service.title}</h3><p>{service.text}</p></div><span className="service-tags">{service.tags}</span></article>)}</div></div></section>

    <SkillsSection />

    <section id="work" className="work-section section-shell section-space" aria-labelledby="work-title"><div className="section-topline"><span className="section-kicker">03 / SELECTED WORK</span><Link className="inline-link" href="/work">All projects <span aria-hidden="true">↗</span></Link></div><h2 id="work-title">Made to work.<br /><em>Made to matter.</em></h2><div className="projects-grid">{projects.map((project, index) => <ProjectCard key={project.slug} project={project} index={index} />)}</div></section>

    <section className="experience-section section-space" aria-labelledby="experience-title"><div className="section-shell experience-layout"><div><span className="section-kicker">04 / THE PATH SO FAR</span><h2 id="experience-title">Curiosity is<br /><em>the constant.</em></h2><p>Independent work and product teams have taught me to keep the experience clear, useful and human.</p></div><div className="experience-list"><div className="experience-item"><span>2025 — NOW</span><div><h3>Frontend Developer</h3><p>Blue Collar Crypto · Next.js and headless WordPress</p></div><span aria-hidden="true">↗</span></div><div className="experience-item"><span>2024 — 2025</span><div><h3>Lead Web Developer</h3><p>Chattels · WordPress and multi vendor commerce</p></div><span aria-hidden="true">↗</span></div><div className="experience-item"><span>2021 — NOW</span><div><h3>Freelance Web & App Developer</h3><p>WordPress, Shopify and custom client projects</p></div><span aria-hidden="true">↗</span></div></div></div></section>

    <section id="contact" className="contact-section section-shell section-space" aria-labelledby="contact-title"><div className="contact-panel"><div className="contact-intro"><span className="section-kicker">05 / YOUR TURN</span><h2 id="contact-title">Let&apos;s make<br /><em>something click.</em></h2><p>Tell me what you&apos;re building, what&apos;s stuck, or what you wish your website could do better. I&apos;ll read every message and get back to you.</p><div className="contact-direct">PREFER EMAIL? <a href="mailto:adetunjitiamiyu5@gmail.com">ADETUNJITIAMIYU5@GMAIL.COM ↗</a></div></div><ContactForm /></div></section>
  </main>;
}
