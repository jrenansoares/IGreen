import { Hero } from "../components/Hero";
import { TrustStrip } from "../components/TrustStrip";
import { QuoteForm } from "../components/QuoteForm";
import { Benefits } from "../components/Benefits";
import { Coverages } from "../components/Coverages";
import { HowItWorks } from "../components/HowItWorks";
import { Ambassador } from "../components/Ambassador";
import { BpCredibility } from "../components/BpCredibility";
import { Faq } from "../components/Faq";
import { FinalCta } from "../components/FinalCta";
import { StickyMobileCta } from "../components/StickyMobileCta";

export function Seguros() {
  return (
    <main className="relative">
      <Hero />
      <TrustStrip />
      <QuoteForm />
      <Benefits />
      <Coverages />
      <HowItWorks />
      <Ambassador />
      <BpCredibility />
      <Faq />
      <FinalCta />
      <StickyMobileCta />
    </main>
  );
}

