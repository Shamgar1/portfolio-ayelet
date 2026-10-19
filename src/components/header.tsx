import { headerCta, nav } from "@/lib/content";

export function Header() {
  return (
    <header className="site-header">
      <div className="header-inner">
        <nav className="site-nav" aria-label="ניווט ראשי">
          {nav.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
        <a className="header-cta" href="#work">
          {headerCta}
        </a>
      </div>
    </header>
  );
}
