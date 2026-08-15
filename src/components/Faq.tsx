import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown, ShieldCheck, Zap, Car } from "lucide-react";

export function Faq() {
  const faqs = [
    {
      q: "A iGreen Seguros faz análise de perfil ou consulta SPC/Serasa?",
      a: "Não! Acreditamos que a proteção deve ser acessível. O valor do seguro é baseado apenas no modelo do veículo (Tabela FIPE), não importando sua idade, CEP ou restrições de crédito."
    },
    {
      q: "Como funciona a indenização de 100% da Tabela FIPE?",
      a: "Em caso de roubo ou furto do seu veículo, e caso ele não seja recuperado, a BP Seguradora garante o pagamento de 100% do valor do veículo com base na Tabela FIPE do mês do sinistro."
    },
    {
      q: "O seguro cobre batidas e acidentes (Colisão)?",
      a: "O foco do nosso seguro principal é a cobertura contra Roubo e Furto, que é o maior risco para os brasileiros, além da Assistência 24h completa (Guincho, pane, chaveiro). Consulte nossos especialistas sobre adicionais disponíveis para o seu perfil."
    },
    {
      q: "A iGreen Seguros é confiável?",
      a: "Sim! Somos parceiros e garantidos pela BP Seguradora, uma instituição totalmente regulamentada pela SUSEP (Superintendência de Seguros Privados). O cantor Gusttavo Lima também confia e é nosso embaixador oficial."
    },
    {
      q: "Como funciona a Assistência 24 Horas?",
      a: "Você tem direito a guincho, socorro mecânico (pane seca e elétrica), chaveiro e troca de pneu. Tudo isso disponível em qualquer lugar do Brasil, bastando ligar para a central de atendimento 0800."
    }
  ];

  const [openIndex, setIndex] = useState<number | null>(0);

  return (
    <section id="duvidas" className="py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Trust Section Embedded */}
        <div className="mb-16 md:mb-20 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-light border border-gray-200 mb-5">
            <ShieldCheck className="text-green-main" size={20} />
            <span className="font-semibold text-text-dark text-sm sm:text-base">Segurança e Confiabilidade SUSEP</span>
          </div>
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark mb-8 max-w-2xl mx-auto leading-tight">
            Todas as respostas que você precisa para rodar tranquilo.
          </h2>
          
          <div className="flex flex-wrap justify-center gap-6 md:gap-12 opacity-80">
            <div className="flex flex-col items-center gap-2">
              <Car size={32} className="text-green-dark" />
              <span className="text-sm font-bold text-center">Carros, Motos e Caminhões</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Zap size={32} className="text-bp-orange" />
              <span className="text-sm font-bold">Rápido e sem burocracia</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <ShieldCheck size={32} className="text-bp-purple" />
              <span className="text-sm font-bold">100% Regulamentado</span>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className="max-w-3xl mx-auto">
          <h3 className="text-3xl md:text-4xl font-extrabold text-green-dark mb-8 text-center tracking-tight">
            Perguntas Frequentes
          </h3>
          
          <div className="space-y-3.5">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              const headingId = `faq-heading-${index}`;
              const panelId = `faq-panel-${index}`;
              return (
                <div 
                  key={index} 
                  className={`border rounded-2xl overflow-hidden transition-colors ${
                    isOpen ? 'border-green-main bg-green-main/5 shadow-xs' : 'border-gray-200 bg-white hover:border-gray-300'
                  }`}
                >
                  <button 
                    id={headingId}
                    type="button"
                    className="w-full text-left px-5 sm:px-6 py-4 sm:py-5 flex justify-between items-center cursor-pointer min-h-[56px]"
                    onClick={() => setIndex(isOpen ? null : index)}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                  >
                    <span className="font-bold text-text-dark pr-4 text-base sm:text-lg">{faq.q}</span>
                    <ChevronDown 
                      className={`shrink-0 text-gray-400 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-green-main' : ''
                      }`} 
                    />
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div 
                        id={panelId}
                        role="region"
                        aria-labelledby={headingId}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 sm:px-6 pb-5 pt-1 text-text-dark/80 text-sm sm:text-base leading-relaxed">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
