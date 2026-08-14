import { motion } from "motion/react";
import { ShieldCheck, CheckCircle2 } from "lucide-react";

export function Hero() {
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
            Proteção completa contra roubo e furto e assistência 24h. A escolha do Gusttavo Lima para proteger o que é seu, sem burocracia e sem análise de perfil.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col w-full sm:w-auto mb-8"
          >
            <button 
              onClick={scrollToForm}
              className="bg-bp-orange hover:bg-bp-orange/90 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
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

        {/* Image / Video */}
        <div className="w-full lg:w-[45%] relative">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="relative rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white bg-black aspect-video lg:aspect-[4/3] flex items-center justify-center"
          >
            <video 
              className="w-full h-full object-cover"
              controls
              autoPlay
              muted
              playsInline
              preload="metadata"
              controlsList="nodownload"
              poster="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=2000&auto=format&fit=crop"
            >
              <source src="/bp-video.mp4" type="video/mp4" />
              Seu navegador não suporta a tag de vídeo.
            </video>
          </motion.div>
        </div>
        
      </div>
    </section>
  );
}
