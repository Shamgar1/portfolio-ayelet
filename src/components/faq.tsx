import { faq } from "@/lib/content";

export function Faq() {
  return (
    <section className="section section-alt" id={faq.id}>
      <div className="section-inner">
        <div className="section-head">
          <p className="eyebrow">{faq.eyebrow}</p>
          <h2>{faq.title}</h2>
        </div>
        <div className="faq-list">
          {faq.items.map((item) => (
            <details className="faq-item" key={item.q}>
              <summary>{item.q}</summary>
              <p>{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
