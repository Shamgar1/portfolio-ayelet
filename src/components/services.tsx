import { services } from "@/lib/content";

function PageIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M7 4.5h7.2L19 9.3V19a1.5 1.5 0 0 1-1.5 1.5h-10A1.5 1.5 0 0 1 6 19V6a1.5 1.5 0 0 1 1.5-1.5Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path d="M14 4.8V9h4.4M8.5 13h7M8.5 16.5h5" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}

function ChatIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M5 18.5 6.2 15A7.5 7.5 0 1 1 12 19.5H7.2L5 18.5Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <circle cx="9" cy="12" r="1" fill="currentColor" />
      <circle cx="12" cy="12" r="1" fill="currentColor" />
      <circle cx="15" cy="12" r="1" fill="currentColor" />
    </svg>
  );
}

function FlowIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M5 7h8M13 7l3-3M13 7l3 3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M19 17H11M11 17l-3-3M11 17l-3 3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <circle cx="6" cy="7" r="2" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="18" cy="17" r="2" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}

function LinkIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3.5" y="4.5" width="7.5" height="7.5" rx="1.8" stroke="currentColor" strokeWidth="1.8" />
      <rect x="13" y="12" width="7.5" height="7.5" rx="1.8" stroke="currentColor" strokeWidth="1.8" />
      <path d="M11 8.5h2.2A3.3 3.3 0 0 1 16.5 11.8V13" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function DashIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="4" y="5" width="16" height="14" rx="2.2" stroke="currentColor" strokeWidth="1.8" />
      <path d="M4 9.5h16M9 9.5v9.5" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}

function PortalIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 12.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" stroke="currentColor" strokeWidth="1.8" />
      <path d="M5.5 19.2c.7-2.6 3.2-4.4 6.5-4.4s5.8 1.8 6.5 4.4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <rect x="4" y="4" width="16" height="16" rx="4" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}

function AgentIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="5" y="8" width="14" height="11" rx="3" stroke="currentColor" strokeWidth="1.8" />
      <path d="M12 4.5V8M9.5 13h.01M14.5 13h.01M9.5 16h5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <circle cx="12" cy="4" r="1" fill="currentColor" />
    </svg>
  );
}

const icons = {
  landing: <PageIcon />,
  bots: <ChatIcon />,
  automations: <FlowIcon />,
  crm: <LinkIcon />,
  dashboards: <DashIcon />,
  portals: <PortalIcon />,
  agents: <AgentIcon />
};

export function Services() {
  return (
    <section className="section" id={services.id}>
      <div className="section-inner">
        <div className="section-head">
          <p className="eyebrow">{services.eyebrow}</p>
          <h2>{services.title}</h2>
          <p>{services.intro}</p>
        </div>
        <div className="services-grid">
          {services.items.map((item) => (
            <article className="service-card" key={item.id}>
              <div className={`service-icon service-icon--${item.accent}`}>{icons[item.id as keyof typeof icons]}</div>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
              {"stat" in item && item.stat ? (
                <a className="service-stat" href={item.statUrl} target="_blank" rel="noreferrer">
                  {item.stat}
                </a>
              ) : null}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
