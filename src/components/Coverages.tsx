import { motion } from "motion/react";
import { ShieldAlert, Car, Users, CloudRain, Wrench, Sparkles, CheckCircle2, ArrowRight } from "lucide-react";

export function Coverages() {
  const scrollToForm = () => {
    document.getElementById("cotacao")?.scrollIntoView({ behavior: "smooth" });
  };

  const coverages = [
    {
      icon: <ShieldAlert className="text-red-500" size={26} />,
      title: "Roubo e Furto",
      desc: "Indenização de até 100% da Tabela FIPE caso o veículo não seja recuperado.",
      highlight: "100% Tabela FIPE"
    },
    {
      icon: <Car className="text-bp-orange" size={26} />,
      title: "Colisão e Perda Total",
      desc: "Proteção financeira para reparos em caso de acidentes e batidas graves.",
      highlight: "Proteção Veicular Completa"
    },
    {
      icon: <Users className="text-blue-600" size={26} />,
      title: "Danos a Terceiros (RCF-V)",
      desc: "Cobertura para prejuízos materiais e corporais causados a outros veículos em acidentes.",
      highlight: "Tranquilidade no Trânsito"
    },
    {
      icon: <CloudRain className="text-cyan-600" size={26} />,
      title: "Fenômenos Naturais & Incêndio",
      desc: "Proteção contra alagamentos, enchentes, quedas de árvores, granizo e incêndio.",
      highlight: "Clima & Acidentes"
    },
    {
      icon: <Wrench className="text-green-main" size={26} />,
      title: "Assistência 24 Horas Nacional",
      desc: "Guincho com ampla quilometragem, socorro mecânico, chaveiro e troca de pneus em todo o Brasil.",
      highlight: "Socorro Imediato"
    },
    {
      icon: <Sparkles className="text-bp-purple" size={26} />,
      title: "Carro Reserva e Vidros",
      desc: "Opções de inclusão de carro reserva e proteção para vidros, faróis e retrovisores.",
      highlight: "Opcionais Disponíveis"
    }
  ];

  return (
    <section className="py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-bp-purple/10 text-bp-purple text-xs sm:text-sm font-extrabold mb-3">
            <span>Proteção Completa</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight mb-4">
            Proteção para os imprevistos que mais preocupam
          </h2>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
            Coberturas completas e transparentes para você rodar com total tranquilidade, sem letras miúdas.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {coverages.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.07 }}
              className="bg-gray-50/70 p-6 sm:p-7 rounded-3xl border border-gray-200/80 hover:border-green-main/50 hover:bg-white hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-white shadow-xs border border-gray-100 flex items-center justify-center">
                    {item.icon}
                  </div>
                  <span className="text-[11px] font-bold text-gray-500 bg-white px-2.5 py-1 rounded-full border border-gray-100">
                    {item.highlight}
                  </span>
                </div>
                
                <h3 className="text-lg font-black text-gray-900 mb-2">
                  {item.title}
                </h3>
                
                <p className="text-sm text-gray-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="mt-5 pt-4 border-t border-gray-200/60 flex items-center gap-2 text-xs font-bold text-green-dark">
                <CheckCircle2 size={15} className="text-green-main shrink-0" />
                <span>Cobertura garantida por apólice</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Micro Banner */}
        <div className="bg-gradient-to-r from-gray-900 via-green-dark to-bp-purple rounded-3xl p-6 sm:p-8 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-lg sm:text-xl font-extrabold">
              Quer saber quanto fica para o seu carro?
            </h4>
            <p className="text-xs sm:text-sm text-white/80">
              Cotação instantânea pelo modelo e placa, sem fidelidade.
            </p>
          </div>
          
          <button
            onClick={scrollToForm}
            className="w-full sm:w-auto bg-bp-orange hover:bg-bp-orange/90 text-white font-black px-7 py-3.5 rounded-xl text-sm sm:text-base transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 shrink-0 cursor-pointer"
          >
            <span>Ver Preço da Cotação</span>
            <ArrowRight size={18} />
          </button>
        </div>

        <p className="text-[11px] text-gray-400 text-center mt-4">
          * As coberturas, limites e franquias específicas dependem das opções selecionadas no plano no momento da contratação.
        </p>

      </div>
    </section>
  );
}
