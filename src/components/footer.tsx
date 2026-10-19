import { footer } from "@/lib/content";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <span>{footer.credit}</span>
        <span>{year}</span>
      </div>
    </footer>
  );
}
