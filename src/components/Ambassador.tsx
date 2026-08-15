import { motion } from "motion/react";
import { Star, ArrowRight } from "lucide-react";

export function Ambassador() {
  const scrollToForm = () => {
    document.getElementById("cotacao")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-24 bg-green-dark relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-yellow-solar/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="bg-gradient-to-br from-white/10 to-transparent p-1 border border-white/10 rounded-[2.5rem]">
          <div className="bg-green-dark/50 backdrop-blur-md rounded-[2.4rem] p-8 md:p-16 flex flex-col md:flex-row items-center gap-12 text-center md:text-left">
            
            <div className="w-full md:w-1/2">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-solar/20 border border-yellow-solar/30 mb-6"
              >
                <Star className="text-yellow-400" size={18} fill="currentColor" />
                <span className="text-yellow-400 font-bold text-sm tracking-wider uppercase">O Seguro do Embaixador</span>
              </motion.div>
              
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight"
              >
                "Com a iGreen Seguros, não tem enrolação. Seu patrimônio tá 100% segurado."
              </motion.h2>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-xl text-green-light/80 mb-8 max-w-lg mx-auto md:mx-0"
              >
                Gusttavo Lima escolheu o seguro inteligente com garantia de seguradora SUSEP que cabe no bolso de todos os brasileiros. Seguro de verdade, sem consulta ao SPC/Serasa.
              </motion.p>
              
              <motion.button 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                onClick={scrollToForm}
                className="bg-yellow-solar hover:bg-yellow-400 text-green-dark px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 flex items-center justify-center md:justify-start gap-2 mx-auto md:mx-0"
              >
                COTAR SEGURO AGORA <ArrowRight size={20} />
              </motion.button>
            </div>
            
            <div className="w-full md:w-1/2 flex justify-center">
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-yellow-solar/40 to-green-main/40 flex items-center justify-center border-4 border-yellow-solar/50 shadow-[0_0_50px_rgba(255,201,40,0.2)] overflow-hidden"
              >
                <img 
                  src="/gustavo-lima.png" 
                  alt="Gusttavo Lima - Embaixador iGreen Seguros" 
                  className="w-full h-full object-cover object-top"
                  onError={(e) => {
                    // Fallback se a imagem não estiver disponível
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.nextElementSibling?.classList.remove('hidden');
                  }} 
                />
                <div className="hidden text-center text-white absolute inset-0 flex-col items-center justify-center bg-green-dark">
                  <Star size={64} className="text-yellow-solar mx-auto mb-2" fill="currentColor" />
                  <p className="font-extrabold text-2xl tracking-tighter">GUSTTAVO<br/>LIMA</p>
                </div>
              </motion.div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
