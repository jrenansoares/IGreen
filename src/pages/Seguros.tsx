import { Hero } from "../components/Hero";
import { Benefits } from "../components/Benefits";
import { QuoteForm } from "../components/QuoteForm";
import { Ambassador } from "../components/Ambassador";
import { Faq } from "../components/Faq";
import { FinalCta } from "../components/FinalCta";

export function Seguros() {
  return (
    <main>
      <Hero />
      <Benefits />
      <QuoteForm />
      <Ambassador />
      <Faq />
      <FinalCta />
    </main>
  );
}
