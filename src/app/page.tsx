import Link from "next/link";
import Image from "next/image";
import { siWhatsapp, siTelegram, siUpwork } from "simple-icons";
import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/ProjectCard";
import { ContactForm } from "@/components/ContactForm";
import { HeroTitle } from "@/components/HeroTitle";
import { HeroWorkbench } from "@/components/HeroWorkbench";
import { ScrollMotion } from "@/components/ScrollMotion";
import { ExpertiseTicker } from "@/components/ExpertiseTicker";
import { SkillsSection } from "@/components/SkillsSection";
import { ServicesScroll } from "@/components/ServicesScroll";
import { StatsBand } from "@/components/StatsBand";
import { ProcessSection } from "@/components/ProcessSection";

const phonePath = "M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.61 21 3 13.39 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.58a1 1 0 0 1-.25 1.01l-2.2 2.2Z";

function ChannelIcon({ path }: { path: string }) {
  return <span className="channel-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><path d={path} /></svg></span>;
}

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
      <div className="hero-bottomline"><span>SCROLL TO EXPLORE</span><span>01 / 06</span></div>
    </section>

    <ExpertiseTicker />

    <section id="about" className="about-section section-shell section-space" aria-labelledby="about-title"><div className="section-heading reveal-on-scroll"><span className="section-kicker">01 / THE PERSON BEHIND THE PIXELS</span><h2 id="about-title">Thoughtful builds.<br /><em>Real world impact.</em></h2><figure className="about-portrait"><Image src="/adetunji-headshot.png" alt="Portrait of Adetunji Tiamiyu, the developer behind Tialuxe Tech" width={560} height={560} /><figcaption>ADETUNJI TIAMIYU<br /><span>THE DEVELOPER BEHIND TIALUXE TECH</span></figcaption></figure></div><div className="about-content reveal-on-scroll"><p className="lead">Good websites don&apos;t just look good. They make life easier for the people using them.</p><p>I&apos;m Adetunji, a developer working across WordPress, commerce and modern front ends. I care about how a site moves, how it reads, how it works on a phone, and what happens after launch.</p><p>My approach is collaborative and practical: understand the problem, choose the right tools, and keep polishing until the experience feels right.</p><Link className="inline-link" href="/#contact">A little about your idea? <span aria-hidden="true">↗</span></Link></div></section>

    <StatsBand />

    <ServicesScroll />

    <SkillsSection />

    <ProcessSection />

    <section id="work" className="work-section section-shell section-space" aria-labelledby="work-title"><div className="section-topline"><span className="section-kicker">04 / SELECTED WORK</span><Link className="inline-link" href="/work">All projects <span aria-hidden="true">↗</span></Link></div><h2 id="work-title">Made to work.<br /><em>Made to matter.</em></h2><div className="projects-grid">{projects.map((project, index) => <ProjectCard key={project.slug} project={project} index={index} />)}</div></section>

    <section className="experience-section section-space" aria-labelledby="experience-title"><div className="section-shell experience-layout"><div><span className="section-kicker">05 / THE PATH SO FAR</span><h2 id="experience-title">Curiosity is<br /><em>the constant.</em></h2><p>Independent work and product teams have taught me to keep the experience clear, useful and human.</p></div><div className="experience-list"><div className="experience-item"><span>2025 — NOW</span><div><h3>Frontend Developer</h3><p>Blue Collar Crypto · Next.js and headless WordPress</p></div><span aria-hidden="true">↗</span></div><div className="experience-item"><span>2024 — 2025</span><div><h3>Lead Web Developer</h3><p>Chattels · WordPress and multi vendor commerce</p></div><span aria-hidden="true">↗</span></div><div className="experience-item"><span>2021 — NOW</span><div><h3>Freelance Web & App Developer</h3><p>WordPress, Shopify and custom client projects</p></div><span aria-hidden="true">↗</span></div></div></div></section>

    <section id="contact" className="contact-section section-shell section-space" aria-labelledby="contact-title"><div className="contact-panel"><div className="contact-intro"><span className="section-kicker">06 / YOUR TURN</span><h2 id="contact-title">Let&apos;s make<br /><em>something click.</em></h2><p>Tell me what you&apos;re building, what&apos;s stuck, or what you wish your website could do better. I&apos;ll read every message and get back to you.</p><div className="contact-direct">PREFER EMAIL? <a href="mailto:adetunjitiamiyu5@gmail.com">ADETUNJITIAMIYU5@GMAIL.COM ↗</a></div>
      <div className="contact-channels">
        <span className="contact-channels-label">OR REACH ME DIRECTLY</span>
        <div className="channel-row">
          <div className="channel-card">
            <ChannelIcon path={phonePath} />
            <div className="channel-body"><strong>Call me</strong><a href="tel:+2348155356235">0815 535 6235</a><a href="tel:+2349123818080">0912 381 8080</a></div>
          </div>
          <a className="channel-card" href="https://wa.me/2348155356235" target="_blank" rel="noreferrer">
            <ChannelIcon path={siWhatsapp.path} />
            <div className="channel-body"><strong>WhatsApp</strong><span>Chat or voice note</span></div>
          </a>
          <a className="channel-card" href="https://t.me/Tialuxe" target="_blank" rel="noreferrer">
            <ChannelIcon path={siTelegram.path} />
            <div className="channel-body"><strong>Telegram</strong><span>Direct message</span></div>
          </a>
          <a className="channel-card" href="https://www.upwork.com/freelancers/~013ae07ba88a85fa2c" target="_blank" rel="noreferrer">
            <ChannelIcon path={siUpwork.path} />
            <div className="channel-body"><strong>Upwork</strong><span>Hire me there</span></div>
          </a>
        </div>
      </div>
    </div><ContactForm /></div></section>
  </main>;
}
