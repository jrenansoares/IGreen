import { ArrowRight, ShieldCheck, CheckCircle2, Lock } from "lucide-react";

export function FinalCta() {
  const scrollToForm = () => {
    document.getElementById("cotacao")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-20 lg:py-24 bg-gradient-to-br from-green-dark via-[#1a4031] to-bp-purple text-white relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-bp-orange/20 rounded-full blur-[90px]"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-green-main/20 rounded-full blur-[100px] translate-y-1/2 translate-x-1/4"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
        
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 mb-6 backdrop-blur-sm">
          <ShieldCheck size={16} className="text-yellow-solar" />
          <span className="text-xs sm:text-sm font-bold text-white uppercase tracking-wider">
            Simulação Rápida e Sem Compromisso
          </span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight tracking-tight">
          Proteja seu carro com Seguro Auto mensal e sem fidelidade.
        </h2>
        
        <p className="text-base sm:text-xl text-white/90 mb-10 max-w-2xl mx-auto font-normal leading-relaxed">
          Faça sua cotação em menos de 1 minuto e conheça as condições disponíveis para o seu veículo. Seguro de verdade com garantia da BP Seguradora.
        </p>
        
        <div className="flex flex-col items-center">
          <button 
            onClick={scrollToForm}
            className="bg-bp-orange hover:bg-bp-orange/90 active:scale-[0.99] text-white px-9 py-4.5 sm:py-5 rounded-2xl font-black text-lg sm:text-xl transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 flex items-center justify-center gap-3 w-full sm:w-auto cursor-pointer"
          >
            <span>Quero fazer minha cotação</span>
            <ArrowRight size={24} />
          </button>
          
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 mt-6 text-xs sm:text-sm text-white/80 font-medium">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 size={16} className="text-yellow-solar" />
              <span>Cotação 100% gratuita</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 size={16} className="text-yellow-solar" />
              <span>Sem fidelidade</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Lock size={16} className="text-yellow-solar" />
              <span>Dados protegidos pela LGPD</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
