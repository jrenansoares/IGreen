import { motion } from "motion/react";
import { CreditCard, FileText, Unlock, UserCheck, Users, ShieldCheck, Zap, Headphones } from "lucide-react";

export function Benefits() {
  const benefits = [
    {
      icon: <Unlock className="text-bp-purple" size={26} />,
      badge: "Liberdade Total",
      title: "Sem Fidelidade",
      desc: "Você não fica preso a contratos longos nem paga multa rescisória. Tenha a liberdade de manter o seguro pelo tempo que desejar."
    },
    {
      icon: <FileText className="text-green-main" size={26} />,
      badge: "Previsibilidade",
      title: "Pagamento Mensal",
      desc: "Pague mês a mês via boleto ou Pix, sem comprometer o limite total do seu cartão de crédito com parcelamentos anuais."
    },
    {
      icon: <Zap className="text-bp-orange" size={26} />,
      badge: "Agilidade",
      title: "Contratação 100% Digital",
      desc: "Processo rápido, direto e sem burocracia. Você faz a cotação em menos de 1 minuto e conclui a emissão pelo WhatsApp."
    },
    {
      icon: <Headphones className="text-blue-600" size={26} />,
      badge: "Em Todo o Brasil",
      title: "Assistência 24 Horas",
      desc: "Guincho, socorro mecânico, chaveiro, troca de pneus e assistência emergencial com cobertura em todo o território nacional."
    },
    {
      icon: <UserCheck className="text-green-main" size={26} />,
      badge: "Sem Burocracia",
      title: "Sem Análise de Perfil",
      desc: "O valor é calculado pelo modelo do veículo (Tabela FIPE). Não há restrições por idade do condutor, CEP ou histórico pessoal."
    },
    {
      icon: <ShieldCheck className="text-bp-purple" size={26} />,
      badge: "Garantia Oficial",
      title: "Operado por Seguradora SUSEP",
      desc: "Seguro de verdade emitido pela BP Seguradora (Código SUSEP 01546), garantindo solidez jurídica e indenização garantida."
    }
  ];

  return (
    <section className="py-20 lg:py-24 bg-gray-50/70 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-green-main/10 text-green-dark text-xs sm:text-sm font-extrabold mb-3">
            <span>Diferenciais Exclusivos</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight mb-4">
            Por que o iGreen Seguros é a escolha mais inteligente?
          </h2>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
            Economia, transparência e a segurança de uma apólice oficial emitida por seguradora regulamentada.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="bg-white p-7 sm:p-8 rounded-3xl border border-gray-200/70 shadow-xs hover:shadow-md hover:border-green-main/40 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center border border-gray-100 group-hover:scale-105 transition-transform">
                    {benefit.icon}
                  </div>
                  <span className="text-[11px] font-extrabold uppercase tracking-wider text-gray-500 bg-gray-100 px-2.5 py-1 rounded-full">
                    {benefit.badge}
                  </span>
                </div>
                
                <h3 className="text-lg sm:text-xl font-black text-gray-900 mb-2.5">
                  {benefit.title}
                </h3>
                
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  {benefit.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
