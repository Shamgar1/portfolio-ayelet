import { Contact } from "@/components/contact";
import { Faq } from "@/components/faq";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Process } from "@/components/process";
import { Services } from "@/components/services";
import { Work } from "@/components/work";

export default function HomePage() {
  return (
    <>
      <a className="skip-link" href="#main">
        דלגו לתוכן
      </a>
      <Header />
      <main id="main">
        <Hero />
        <Process />
        <Services />
        <Work />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
