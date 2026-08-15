import { useState } from "react";
import { motion } from "motion/react";
import { ShieldCheck, CheckCircle2, Star } from "lucide-react";

export function Hero() {
  const [videoFailed, setVideoFailed] = useState(false);

  const scrollToForm = () => {
    document.getElementById("cotacao")?.scrollIntoView({ behavior: "smooth" });
  };
  
  return (
    <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-24 overflow-hidden bg-gray-light">
      <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
        
        {/* Text Content */}
        <div className="w-full lg:w-[55%] flex flex-col items-start z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-bp-purple/10 text-bp-purple text-sm font-semibold mb-6"
          >
            <ShieldCheck size={16} className="text-bp-orange" />
            <span>Garantido pela BP Seguradora</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl lg:text-5xl xl:text-6xl font-extrabold text-green-dark leading-[1.1] mb-6 tracking-tight"
          >
            O seguro auto definitivo, escolhido pelo Embaixador.
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg lg:text-xl text-bp-gray mb-8 max-w-xl leading-relaxed"
          >
            Cobertura completa de seguro contra roubo, furto e assistência 24h em todo o Brasil. A escolha do Gusttavo Lima para manter seu veículo segurado de verdade, sem burocracia e sem análise de perfil.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col w-full sm:w-auto mb-8"
          >
            <button 
              onClick={scrollToForm}
              className="bg-bp-orange hover:bg-bp-orange/90 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 cursor-pointer"
            >
              FAZER COTAÇÃO GRATUITA
            </button>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm font-medium text-text-dark/70"
          >
            {[
              "Pagamento mensal via boleto",
              "Primeira parcela: Pix ou cartão de crédito",
              "Não temos fidelidade",
              "Sem análise de perfil",
              "Sem análise de condutor",
              "Qualquer motorista habilitado pode dirigir"
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2">
                <CheckCircle2 size={18} className="text-bp-purple shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Video / Visual Hero Presentation */}
        <div className="w-full lg:w-[45%] relative">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white bg-gradient-to-br from-bp-purple to-green-dark aspect-[4/3] flex items-center justify-center"
          >
            {!videoFailed ? (
              <video 
                className="w-full h-full object-cover"
                controls
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                onError={() => setVideoFailed(true)}
                aria-label="Vídeo oficial BP Seguradora com Gusttavo Lima"
              >
                <source src="/bp-video.mp4" type="video/mp4" />
              </video>
            ) : null}

            {/* Fallback Display with High-Res Brand & Ambassador Art */}
            {videoFailed && (
              <div className="relative w-full h-full flex flex-col items-center justify-between p-8 text-center text-white bg-gradient-to-br from-bp-purple via-[#372b6d] to-green-dark">
                {/* Top Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20">
                  <Star className="text-yellow-solar" size={16} fill="currentColor" />
                  <span className="text-xs font-bold uppercase tracking-wider text-yellow-solar">Embaixador Oficial</span>
                </div>

                {/* Central Visual Art */}
                <div className="flex flex-col items-center my-auto">
                  <div className="relative w-36 h-36 sm:w-44 sm:h-44 rounded-full overflow-hidden border-4 border-yellow-solar shadow-[0_0_35px_rgba(255,201,40,0.4)] mb-4 bg-white">
                    <img 
                      src="/gustavo-lima.png" 
                      alt="Gusttavo Lima - Embaixador iGreen Seguros e BP Seguradora" 
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <h3 className="text-2xl font-black text-white tracking-tight">
                    Gusttavo Lima
                  </h3>
                  <p className="text-sm text-green-light/80 font-semibold mt-1">
                    Garantia Oficial BP Seguradora • SUSEP 01546
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
