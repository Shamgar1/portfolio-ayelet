import { process } from "@/lib/content";

export function Process() {
  return (
    <section className="section section-alt" id={process.id}>
      <div className="section-inner">
        <div className="section-head">
          <p className="eyebrow">{process.eyebrow}</p>
          <h2>{process.title}</h2>
          <p>{process.intro}</p>
        </div>
        <ol className="process-grid">
          {process.steps.map((step) => (
            <li className="process-step" key={step.n}>
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
