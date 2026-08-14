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
      a: "Sim! Somos parceiros e garantidos pela BP Seguradora, uma instituição totalmente regulamentada pela SUSEP (Superintendência de Seguros Privados). O cantor Gusttavo Lima também confia e é nosso parceiro oficial."
    },
    {
      q: "Como funciona a Assistência 24 Horas?",
      a: "Você tem direito a guincho, socorro mecânico (pane seca e elétrica), chaveiro e troca de pneu. Tudo isso disponível em qualquer lugar do Brasil, bastando ligar para a central de atendimento 0800."
    }
  ];

  const [openIndex, setIndex] = useState<number | null>(0);

  return (
    <section id="duvidas" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Trust Section Embedded */}
        <div className="mb-24 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-light border border-gray-200 mb-6">
            <ShieldCheck className="text-green-main" size={20} />
            <span className="font-semibold text-text-dark">Segurança e Confiabilidade SUSEP</span>
          </div>
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark mb-10 max-w-2xl mx-auto">
            Todas as respostas que você precisa para rodar tranquilo.
          </h2>
          
          <div className="flex flex-wrap justify-center gap-6 md:gap-12 opacity-70">
            <div className="flex flex-col items-center gap-2"><Car size={32}/><span className="text-sm font-bold text-center">Carros, Motos e Caminhões</span></div>
            <div className="flex flex-col items-center gap-2"><Zap size={32}/><span className="text-sm font-bold">Rápido</span></div>
            <div className="flex flex-col items-center gap-2"><ShieldCheck size={32}/><span className="text-sm font-bold">Seguro</span></div>
          </div>
        </div>

        {/* FAQ */}
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold text-green-dark mb-10 text-center">
            Perguntas Frequentes
          </h2>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className={`border rounded-2xl overflow-hidden transition-colors ${openIndex === index ? 'border-green-main bg-green-main/5' : 'border-gray-200 bg-white hover:border-gray-300'}`}
              >
                <button 
                  className="w-full text-left px-6 py-5 flex justify-between items-center"
                  onClick={() => setIndex(openIndex === index ? null : index)}
                >
                  <span className="font-bold text-text-dark pr-8">{faq.q}</span>
                  <ChevronDown 
                    className={`shrink-0 text-gray-400 transition-transform ${openIndex === index ? 'rotate-180 text-green-main' : ''}`} 
                  />
                </button>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-5 pt-0 text-text-dark/70 leading-relaxed">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
