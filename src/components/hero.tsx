import Image from "next/image";

import { Quiz } from "@/components/quiz";
import { hero } from "@/lib/content";

export function Hero() {
  return (
    <section className="hero">
      <div className="section-inner hero-grid">
        <div>
          <Image
            className="hero-avatar"
            src="/ayelet-logo.png"
            alt={hero.avatarAlt}
            width={480}
            height={480}
            priority
          />
          <p className="eyebrow">{hero.eyebrow}</p>
          <p className="hero-kicker">{hero.kicker}</p>
          <h1>
            {hero.headline.map((line, index) => (
              <span key={line}>
                {index > 0 ? <br /> : null}
                {line}
              </span>
            ))}
          </h1>
          <p className="lede">{hero.sub}</p>
          <p className="hero-quote">{hero.proof}</p>
          <a className="hero-stat" href={hero.stat.url} target="_blank" rel="noreferrer">
            <strong dir="ltr">{hero.stat.value}</strong>
            <span>
              {hero.stat.text}
              <small>{hero.stat.source}</small>
            </span>
          </a>
        </div>
        <Quiz />
      </div>
    </section>
  );
}
