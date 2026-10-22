import { WorkCarousel } from "@/components/work-carousel";
import { quietWork, work } from "@/lib/content";

export function Work() {
  return (
    <section className="section section-alt" id={work.id}>
      <div className="section-inner">
        <div className="section-head">
          <p className="eyebrow">{work.eyebrow}</p>
          <h2>{work.title}</h2>
          <p>{work.intro}</p>
        </div>
        {work.projects.map((project, index) => (
          <details className="work-item" key={project.id} open={index === 0}>
            <summary className="work-summary">
              <h3 className="work-project-title">{project.title}</h3>
              <span className="work-badge">{project.badge}</span>
              <span className="work-toggle">
                <span className="work-toggle-open">{work.closeLabel}</span>
                <span className="work-toggle-closed">{work.openLabel}</span>
              </span>
            </summary>
            <div className="work-layout">
              <div className="work-meta">
                <div className="work-block">
                  <h4>{work.problemLabel}</h4>
                  <p>{project.problem}</p>
                </div>
                <div className="work-block">
                  <h4>{work.builtLabel}</h4>
                  <p>{project.built}</p>
                </div>
                <div className="work-block">
                  <h4>{work.solvesLabel}</h4>
                  <p>{project.solves}</p>
                </div>
                {"recommendations" in project && project.recommendations ? (
                  <div className="work-block work-recs">
                    <h4>{work.recommendationsLabel}</h4>
                    <ol>
                      {project.recommendations.map((rec) => (
                        <li key={rec}>{rec}</li>
                      ))}
                    </ol>
                  </div>
                ) : null}
                {"url" in project && project.url ? (
                  <a className="work-link" href={project.url} target="_blank" rel="noreferrer">
                    {project.urlLabel ?? work.linkLabel}
                  </a>
                ) : null}
                {"note" in project && project.note ? <p className="work-note">{project.note}</p> : null}
              </div>
              <WorkCarousel shots={project.shots} />
            </div>
          </details>
        ))}
        <a className="work-mention" href={quietWork.url} target="_blank" rel="noreferrer">
          <img src="/work/todaango.png" alt="" />
          <span>
            {quietWork.label}: {quietWork.title}
          </span>
        </a>
      </div>
    </section>
  );
}
