import { process } from "@/lib/content";

const icons = {
  talk: (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M5 18.5 6.2 15A7.5 7.5 0 1 1 12 19.5H7.2L5 18.5Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
    </svg>
  ),
  find: (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="11" cy="11" r="6" stroke="currentColor" strokeWidth="1.8" />
      <path d="m15.5 15.5 4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  ),
  build: (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="4" y="5" width="16" height="14" rx="2.2" stroke="currentColor" strokeWidth="1.8" />
      <path d="m9 10-2 2 2 2M15 10l2 2-2 2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  launch: (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 3.5c3 2 4.5 5 4.5 8.5L14 16h-4l-2.5-4c0-3.5 1.5-6.5 4.5-8.5Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      <circle cx="12" cy="10" r="1.6" fill="currentColor" />
      <path d="M10 19.5h4M7.5 13 5 15.5V18l3-1.5M16.5 13l2.5 2.5V18l-3-1.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
};

export function Process() {
  return (
    <section className="section section-alt" id={process.id}>
      <div className="section-inner">
        <div className="section-head">
          <p className="eyebrow">{process.eyebrow}</p>
          <h2>{process.title}</h2>
          <p>{process.intro}</p>
        </div>
        <ol className="process-grid process-track">
          {process.steps.map((step, index) => (
            <li className={`process-step${index === process.steps.length - 1 ? " process-step--launch" : ""}`} key={step.n}>
              <span className="process-icon">{icons[step.icon]}</span>
              <span className="process-num" aria-hidden="true">
                {step.n}
              </span>
              <h3>{step.title}</h3>
              <p>{step.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
