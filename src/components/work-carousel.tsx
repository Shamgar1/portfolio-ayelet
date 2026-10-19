"use client";

import { useState } from "react";

import { BrowserFrame } from "@/components/browser-frame";

type Shot = {
  src: string;
  alt: string;
  url: string;
};

export function WorkCarousel({ shots }: { shots: Shot[] }) {
  const [index, setIndex] = useState(0);
  const shot = shots[index];

  if (!shot) {
    return null;
  }

  const go = (next: number) => {
    setIndex((next + shots.length) % shots.length);
  };

  return (
    <div className="carousel">
      <BrowserFrame url={shot.url}>
        <img className="work-shot" src={shot.src} alt={shot.alt} />
      </BrowserFrame>
      {shots.length > 1 ? (
        <div className="carousel-nav">
          <button className="carousel-btn" type="button" aria-label="הבא" onClick={() => go(index + 1)}>
            ‹
          </button>
          <div className="carousel-dots">
            {shots.map((item, i) => (
              <button
                className={`carousel-dot${i === index ? " is-active" : ""}`}
                type="button"
                key={item.src}
                aria-label={`תמונה ${i + 1}`}
                onClick={() => setIndex(i)}
              />
            ))}
          </div>
          <button className="carousel-btn" type="button" aria-label="הקודם" onClick={() => go(index - 1)}>
            ›
          </button>
          <span className="carousel-count">
            {index + 1} / {shots.length}
          </span>
        </div>
      ) : null}
    </div>
  );
}
