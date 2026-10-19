import type { ReactNode } from "react";

type PhoneFrameProps = {
  children: ReactNode;
};

export function PhoneFrame({ children }: PhoneFrameProps) {
  return (
    <figure className="phone-frame">
      <div className="phone-notch" aria-hidden="true" />
      <div className="phone-body">{children}</div>
    </figure>
  );
}
