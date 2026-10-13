"use client";

import { useState } from "react";

const word = "different.";

export function HeroTitle() {
  const [active, setActive] = useState(false);

  function replay() {
    setActive(false);
    requestAnimationFrame(() => requestAnimationFrame(() => setActive(true)));
  }

  return <h1 id="hero-title" aria-label="The web should feel different.">
    The web<br />should <em>feel</em><br />
    <span className={`hero-outline interactive-word${active ? " is-active" : ""}`} role="button" tabIndex={0} aria-label="Animate the word different" onClick={replay} onKeyDown={(event) => { if (event.key === "Enter" || event.key === " ") { event.preventDefault(); replay(); } }}>
      {Array.from(word).map((letter, index) => <span className="interactive-letter" data-letter={letter} style={{ "--letter-index": index } as React.CSSProperties} aria-hidden="true" key={`${letter}-${index}`}>{letter}</span>)}
    </span>
  </h1>;
}
