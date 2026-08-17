import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown, ShieldCheck, Zap, Car, HelpCircle, CheckCircle2 } from "lucide-react";

export function Faq() {
  const faqs = [
    {
      q: "O iGreen Seguros é seguro de verdade ou proteção veicular?",
      a: "É Seguro Auto de verdade! Nossas apólices são emitidas e 100% garantidas pela BP Seguradora S.A., uma instituição seguradora autorizada e fiscalizada pela SUSEP (Superintendência de Seguros Privados) sob o código 01546. Não somos associação nem cooperativa de proteção veicular."
    },
    {
      q: "O seguro possui contrato de fidelidade ou multa rescisória?",
      a: "Não! O iGreen Seguros não possui fidelidade. Você paga a sua mensalidade mês a mês e pode cancelar quando quiser, sem cobrança de multas rescisórias ou burocracias."
    },
    {
      q: "Como funciona a forma de pagamento mensal?",
      a: "O pagamento é recorrente mensal via boleto bancário ou Pix, sem comprometer o limite total do seu cartão de crédito anual. A primeira parcela de ativação pode ser paga via Pix ou cartão."
    },
    {
      q: "A iGreen Seguros faz análise de perfil ou consulta SPC/Serasa?",
      a: "Não! O valor do seguro é calculado exclusivamente com base no valor da Tabela FIPE do veículo. Não fazemos distinção por idade do condutor, CEP de pernoite ou consulta a órgãos de restrição cadastral."
    },
    {
      q: "Qualquer motorista habilitado pode dirigir o veículo?",
      a: "Sim! A apólice protege o veículo. Desde que o condutor possua Carteira Nacional de Habilitação (CNH) válida e regularizada, o veículo estará plenamente coberto em qualquer situação de sinistro."
    },
    {
      q: "Como funciona a indenização de até 100% da Tabela FIPE?",
      a: "Em caso de roubo ou furto do veículo em que o mesmo não seja recuperado, ou em caso de perda total (PT), a BP Seguradora efetua o pagamento da indenização integral conforme a Tabela FIPE oficial do mês da ocorrência."
    },
    {
      q: "O seguro cobre colisão (batidas) e danos a terceiros?",
      a: "Sim! Além da proteção contra roubo, furto e fenômenos da natureza, oferecemos coberturas completas para colisão (acidentes), perda total e Danos Materiais/Corporais a Terceiros (RCF-V), além de assistência 24h completa."
    },
    {
      q: "Como funciona a Assistência 24 Horas em todo o Brasil?",
      a: "Você conta com guincho com ampla quilometragem, socorro mecânico emergencial (pane elétrica ou mecânica), chaveiro, troca de pneus e assistência a passageiros com atendimento em todo o território nacional."
    },
    {
      q: "Como faço minha cotação e em quanto tempo recebo a proposta?",
      a: "Basta preencher a placa e o tipo do seu veículo no simulador acima. Em menos de 1 minuto nossos consultores enviam os valores e opções de coberturas diretamente no seu WhatsApp para você ativar sem sair de casa."
    }
  ];

  const [openIndex, setIndex] = useState<number | null>(0);

  return (
    <section id="duvidas" className="py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Trust Badges */}
        <div className="mb-14 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gray-100 border border-gray-200 mb-4">
            <HelpCircle className="text-green-main" size={18} />
            <span className="font-extrabold text-gray-900 text-xs sm:text-sm">Tire Suas Dúvidas</span>
          </div>
          
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight mb-4 max-w-3xl mx-auto">
            Perguntas Frequentes sobre o Seguro Auto
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Transparência total para você tomar a melhor decisão para proteger seu patrimônio.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="max-w-3xl mx-auto space-y-3.5">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            const headingId = `faq-heading-${index}`;
            const panelId = `faq-panel-${index}`;
            return (
              <div 
                key={index} 
                className={`border rounded-2xl overflow-hidden transition-all duration-200 ${
                  isOpen 
                    ? 'border-green-main bg-green-50/40 shadow-xs' 
                    : 'border-gray-200/80 bg-white hover:border-gray-300'
                }`}
              >
                <button 
                  id={headingId}
                  type="button"
                  className="w-full text-left px-5 sm:px-6 py-4 sm:py-5 flex justify-between items-center cursor-pointer min-h-[56px] gap-4"
                  onClick={() => setIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                >
                  <span className="font-extrabold text-gray-900 text-base sm:text-lg leading-snug">
                    {faq.q}
                  </span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                    isOpen ? 'bg-green-main text-white' : 'bg-gray-100 text-gray-500'
                  }`}>
                    <ChevronDown 
                      size={18}
                      className={`transition-transform duration-200 ${
                        isOpen ? 'rotate-180' : ''
                      }`} 
                    />
                  </div>
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
                      <div className="px-5 sm:px-6 pb-5 pt-1 text-gray-700 text-sm sm:text-base leading-relaxed border-t border-green-100/60 mt-1">
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
    </section>
  );
}
