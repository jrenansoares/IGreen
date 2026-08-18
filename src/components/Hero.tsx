import { useState } from "react";
import { motion } from "motion/react";
import { ShieldCheck, CheckCircle2, Star, ArrowRight, Sparkles } from "lucide-react";

export function Hero() {
  const [videoFailed, setVideoFailed] = useState(false);

  const scrollToForm = () => {
    document.getElementById("cotacao")?.scrollIntoView({ behavior: "smooth" });
  };
  
  return (
    <section className="relative pt-28 pb-14 lg:pt-36 lg:pb-20 overflow-hidden bg-gradient-to-b from-gray-50 via-white to-gray-50">
      {/* Decorative ambient gradients */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-green-main/10 rounded-full blur-[100px] pointer-events-none -z-10" />
      <div className="absolute top-24 right-4 w-[400px] h-[300px] bg-bp-purple/10 rounded-full blur-[90px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row items-center gap-10 lg:gap-12">
        
        {/* Text Content */}
        <div className="w-full lg:w-[54%] flex flex-col items-start z-10">
          
          {/* Badges Bar */}
          <div className="flex flex-wrap items-center gap-2.5 mb-5">
            <div className="h-8 px-3 bg-white rounded-full shadow-xs border border-gray-200/90 flex items-center justify-center">
              <img 
                src="/iGreen seguros verde.png" 
                alt="iGreen Seguros" 
                width={1080}
                height={332}
                decoding="async"
                className="max-h-4 max-w-[110px] w-auto object-contain"
                onError={(e) => { e.currentTarget.style.display = 'none'; }}
              />
            </div>
            
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-bp-purple/10 text-bp-purple text-xs font-bold border border-bp-purple/20">
              <ShieldCheck size={14} className="text-bp-orange shrink-0" />
              <span>Operado pela BP Seguradora • SUSEP 01546</span>
            </div>
          </div>
          
          {/* Main Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-extrabold text-gray-900 leading-[1.12] mb-5 tracking-tight">
            Seguro Auto mensal e <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-green-dark via-green-main to-bp-purple bg-clip-text text-transparent">
              sem fidelidade.
            </span>
          </h1>
          
          {/* Subheadline */}
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-7 max-w-xl leading-relaxed font-normal">
            Proteja seu veículo com o <strong className="text-gray-900 font-bold">iGreen Seguros</strong>, operado pela <strong className="text-bp-purple font-bold">BP Seguradora</strong>. Pagamento mensal, contratação digital, assistência 24 horas e <strong className="text-green-dark font-bold">liberdade para cancelar quando quiser</strong>.
          </p>
          
          {/* Main CTA */}
          <div className="flex flex-col w-full sm:w-auto mb-6">
            <button 
              onClick={scrollToForm}
              className="bg-bp-orange hover:bg-bp-orange/90 active:scale-[0.99] text-white px-8 py-4 sm:py-4.5 rounded-2xl font-black text-lg sm:text-xl transition-all shadow-lg hover:shadow-2xl hover:-translate-y-0.5 cursor-pointer flex items-center justify-center gap-3 group"
            >
              <span>Quero fazer minha cotação</span>
              <ArrowRight size={22} className="transform group-hover:translate-x-1 transition-transform" />
            </button>
            <p className="text-xs text-gray-500 font-medium mt-2.5 text-center sm:text-left">
              🔒 Cotação sem compromisso • Seguro mensal • Sem fidelidade
            </p>
          </div>
          
          {/* Value Props Matrix */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 text-xs sm:text-sm font-semibold text-gray-700 w-full pt-4 border-t border-gray-100"
          >
            {[
              "Sem fidelidade: cancele quando quiser",
              "Pagamento mensal via boleto ou Pix",
              "Assistência 24h completa em todo o Brasil",
              "Sem análise de condutor ou CEP",
              "Qualquer motorista habilitado pode dirigir",
              "Seguro regulamentado pela SUSEP"
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-green-main shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Video / Visual Hero Presentation */}
        <div className="w-full lg:w-[46%] relative">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.45 }}
            className="relative rounded-3xl sm:rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white bg-gradient-to-br from-bp-purple to-green-dark aspect-[4/3] flex items-center justify-center"
          >
            {!videoFailed ? (
              <video 
                className="w-full h-full object-cover"
                controls
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                onError={() => setVideoFailed(true)}
                aria-label="Vídeo oficial BP Seguradora com Gusttavo Lima"
              >
                <source src="/bp-video.mp4" type="video/mp4" />
              </video>
            ) : null}

            {/* Fallback Display with High-Res Brand & Ambassador Art */}
            {videoFailed && (
              <div className="relative w-full h-full flex flex-col items-center justify-between p-6 sm:p-8 text-center text-white bg-gradient-to-br from-bp-purple via-[#372b6d] to-green-dark">
                {/* Top Badge */}
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20">
                  <Star className="text-yellow-solar" size={15} fill="currentColor" />
                  <span className="text-xs font-bold uppercase tracking-wider text-yellow-solar">Embaixador Oficial</span>
                </div>

                {/* Central Visual Art */}
                <div className="flex flex-col items-center my-auto">
                  <div className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden border-4 border-yellow-solar shadow-[0_0_35px_rgba(255,201,40,0.4)] mb-3 bg-white">
                    <img 
                      src="/gustavo-lima.png" 
                      alt="Gusttavo Lima - Embaixador iGreen Seguros e BP Seguradora" 
                      width={1024}
                      height={1536}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight">
                    Gusttavo Lima
                  </h3>
                  <p className="text-xs sm:text-sm text-green-light/80 font-semibold mt-1">
                    Operado por BP Seguradora • SUSEP 01546
                  </p>
                </div>

                {/* Bottom CTA Button */}
                <button
                  onClick={scrollToForm}
                  className="w-full bg-bp-orange hover:bg-bp-orange/90 text-white py-3.5 px-6 rounded-xl font-bold text-sm sm:text-base transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                >
                  <ShieldCheck size={20} />
                  <span>SIMULAR MEU SEGURO AGORA</span>
                </button>
              </div>
            )}
          </motion.div>
        </div>
        
      </div>
    </section>
  );
}
