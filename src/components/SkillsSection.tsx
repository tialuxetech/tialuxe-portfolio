"use client";

import { useState, type CSSProperties } from "react";
import { siWordpress, siCss, siJavascript, siNextdotjs, siTypescript, siElementor, siWoocommerce, siShopify, siReact, siPhp } from "simple-icons";

const skills = [
  { name: "WordPress", icon: siWordpress, category: "Platforms" },
  { name: "Elementor", icon: siElementor, category: "Visual building" },
  { name: "WooCommerce", icon: siWoocommerce, category: "Commerce" },
  { name: "Shopify", icon: siShopify, category: "Commerce" },
  { name: "Adalo", color: "#ff6d81", category: "App building" },
  { name: "CSS", icon: siCss, category: "Front end" },
  { name: "JavaScript", icon: siJavascript, category: "Front end" },
  { name: "TypeScript", icon: siTypescript, category: "Front end" },
  { name: "React", icon: siReact, category: "Front end" },
  { name: "Next.js", icon: siNextdotjs, color: "#c9f3de", category: "Front end" },
  { name: "PHP", icon: siPhp, category: "Back end" },
];

export function SkillsSection() {
  const [active, setActive] = useState<string | null>(null);

  return <section id="skills" className="skills-section section-shell section-space" aria-labelledby="skills-title">
    <div className="skills-heading">
      <div><span className="section-kicker">THE TOOLS BEHIND THE WORK</span><h2 id="skills-title">A flexible toolkit.<br /><em>A considered approach.</em></h2></div>
      <p>From custom WordPress builds to polished front ends, I pick the tools that make sense for the project.</p>
    </div>
    <div className="skills-grid">
      {skills.map((skill) => {
        const color = "icon" in skill && skill.icon ? `#${skill.icon.hex}` : skill.color;
        return <button className={`skill-tile${active === skill.name ? " is-active" : ""}`} data-skill={skill.name} key={skill.name} type="button" onClick={() => setActive(active === skill.name ? null : skill.name)} aria-pressed={active === skill.name} style={{ "--skill-color": color } as CSSProperties}>
          <span className="skill-mark" aria-hidden="true">{"icon" in skill && skill.icon ? <svg viewBox="0 0 24 24" fill="currentColor"><path d={skill.icon.path} /></svg> : <span className="adalo-mark">adalo<span>.</span></span>}</span>
          <span className="skill-name">{skill.name}</span>
          <span className="skill-category">{skill.category}</span>
        </button>;
      })}
    </div>
  </section>;
}
