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
import { SEO } from "../components/SEO";

export function Seguros() {
  return (
    <main className="relative">
      <SEO 
        title="iGreen Seguros | Seguro Auto Mensal sem Fidelidade • BP Seguradora"
        description="Seguro Auto iGreen operado pela BP Seguradora (SUSEP 01546). Pagamento mensal via boleto ou Pix, sem fidelidade, assistência 24h em todo o Brasil e contratação 100% digital. Faça sua cotação."
        canonical="https://igreen.conexoes.workers.dev/seguros"
        ogImage="/iGreen%20Verde%20Claro.png"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "InsuranceAgency",
          "name": "iGreen Seguros",
          "description": "Seguro de Automóvel comercializado por intermédio da iGreen Seguros e garantido pela BP Seguradora S.A. (SUSEP 01546).",
          "url": "https://igreen.conexoes.workers.dev/seguros",
          "logo": "https://igreen.conexoes.workers.dev/iGreen%20seguros%20verde.png",
          "telephone": "+55-21-98445-8464",
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "BR"
          }
        }}
      />
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


