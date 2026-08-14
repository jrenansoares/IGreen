import { ArrowRight, ShieldCheck } from "lucide-react";

export function FinalCta() {
  const scrollToForm = () => {
    document.getElementById("cotacao")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-24 bg-bp-purple text-white relative overflow-hidden">
      {/* Abstract Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-bp-orange/30 rounded-full blur-[80px]"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-green-main/20 rounded-full blur-[100px] translate-y-1/2 translate-x-1/4"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-8 leading-tight">
          Não deixe seu veículo desprotegido.
        </h2>
        
        <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-2xl mx-auto font-medium leading-relaxed">
          Faça sua cotação gratuita agora e descubra como é barato proteger o seu patrimônio.
        </p>
        
        <div className="flex flex-col items-center">
          <button 
            onClick={scrollToForm}
            className="bg-bp-orange hover:bg-bp-orange/90 text-white px-10 py-5 rounded-2xl font-extrabold text-xl md:text-2xl transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 flex items-center justify-center gap-3 w-full sm:w-auto"
          >
            FAZER COTAÇÃO GRATUITA <ArrowRight size={28} />
          </button>
          
          <div className="flex items-center gap-2 mt-6 text-white/80 font-medium">
            <ShieldCheck size={18} />
            <span>Processo online, rápido e sem burocracia.</span>
          </div>
        </div>
      </div>
    </section>
  );
}
