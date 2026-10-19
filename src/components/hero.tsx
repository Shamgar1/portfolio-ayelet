import { hero } from "@/lib/content";

export function Hero() {
  return (
    <section className="hero">
      <div className="section-inner hero-grid">
        <div>
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
          <p className="hero-quote">{hero.quote}</p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="#work">
              {hero.cta}
            </a>
          </div>
        </div>
        <aside className="hero-panel">
          <p className="hero-panel-label">{hero.panelLabel}</p>
          {hero.prompts.map((prompt, index) => (
            <div className="hero-chip" key={prompt.title}>
              <span className={`chip-icon chip-icon--${index === 1 ? "navy" : "sky"}`} aria-hidden="true">
                {index + 1}
              </span>
              <div>
                <strong>{prompt.title}</strong>
                <span>{prompt.hint}</span>
              </div>
            </div>
          ))}
          <p className="hero-panel-reply">{hero.panelReply}</p>
        </aside>
      </div>
    </section>
  );
}
