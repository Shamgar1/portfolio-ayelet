"use client";

import { contact, whatsapp, whatsappLink } from "@/lib/content";

export function Contact() {
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();
    const text = [contact.greeting, name ? `קוראים לי ${name}.` : "", message].filter(Boolean).join("\n");
    window.open(whatsappLink(text), "_blank", "noopener,noreferrer");
  }

  return (
    <section className="section" id={contact.id}>
      <div className="section-inner">
        <div className="contact-band">
          <div className="contact-copy">
            <p className="eyebrow">{contact.eyebrow}</p>
            <h2>{contact.title}</h2>
            <p>{contact.intro}</p>
            <p className="contact-phone" dir="ltr">
              {whatsapp.display}
            </p>
          </div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <input className="field" name="name" type="text" autoComplete="name" placeholder={contact.fields.name} aria-label={contact.fields.name} />
            <textarea className="field" name="message" rows={3} placeholder={contact.fields.message} aria-label={contact.fields.message} />
            <button type="submit" className="btn btn-whatsapp">
              {contact.submit}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
