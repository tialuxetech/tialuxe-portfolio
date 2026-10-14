"use client";

import { useState, useEffect, useRef, useCallback } from "react";

const word = "different.";
const STEP_DELAY = 420;
const LOOP_PAUSE = 1200;

export function HeroTitle() {
  const [activeIndex, setActiveIndex] = useState(-1);
  const nextIndexRef = useRef(0);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const step = useCallback(() => {
    if (timerRef.current) clearTimeout(timerRef.current);

    timerRef.current = setTimeout(() => {
      const current = nextIndexRef.current;

      if (current >= word.length) {
        setActiveIndex(-1);
        nextIndexRef.current = 0;
        timerRef.current = setTimeout(() => {
          step();
        }, LOOP_PAUSE);
        return;
      }

      setActiveIndex(current);
      nextIndexRef.current = current + 1;
      step();
    }, STEP_DELAY);
  }, []);

  useEffect(() => {
    timerRef.current = setTimeout(() => {
      step();
    }, 600);
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [step]);

  function handleLetterInteract(index: number) {
    if (timerRef.current) clearTimeout(timerRef.current);
    setActiveIndex(index);
    nextIndexRef.current = (index + 1) % (word.length + 1);
    timerRef.current = setTimeout(() => {
      step();
    }, STEP_DELAY);
  }

  return (
    <h1 id="hero-title" aria-label="The web should feel different.">
      The web<br />should <em>feel</em><br />
      <span className="hero-outline interactive-word">
        {Array.from(word).map((letter, index) => (
          <span
            className={`interactive-letter${index === activeIndex ? " is-filled" : ""}`}
            style={{ "--letter-index": index } as React.CSSProperties}
            aria-hidden="true"
            key={`${letter}-${index}`}
            onMouseEnter={() => handleLetterInteract(index)}
            onClick={() => handleLetterInteract(index)}
          >
            {letter}
          </span>
        ))}
      </span>
    </h1>
  );
}
