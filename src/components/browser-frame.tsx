import type { ReactNode } from "react";

type BrowserFrameProps = {
  url: string;
  children: ReactNode;
};

export function BrowserFrame({ url, children }: BrowserFrameProps) {
  return (
    <figure className="browser-frame">
      <div className="browser-chrome" aria-hidden="true">
        <span className="browser-dot" />
        <span className="browser-dot" />
        <span className="browser-dot" />
        <span className="browser-url">{url}</span>
      </div>
      <div className="browser-body">{children}</div>
    </figure>
  );
}
