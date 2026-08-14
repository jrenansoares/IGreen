import { motion } from "motion/react";
import { CreditCard, FileText, Unlock, UserCheck, Users, ShieldCheck } from "lucide-react";

export function Benefits() {
  const benefits = [
    {
      icon: <FileText className="text-green-main" size={28} />,
      title: "PAGAMENTO MENSAL VIA BOLETO",
      desc: "Facilidade para pagar mês a mês no boleto, sem precisar comprometer o limite do seu cartão de crédito."
    },
    {
      icon: <CreditCard className="text-bp-orange" size={28} />,
      title: "PRIMEIRA PARCELA FACILITADA",
      desc: "Pague a sua primeira parcela via Pix ou Cartão de Crédito de forma rápida e segura para ativar sua cobertura."
    },
    {
      icon: <Unlock className="text-bp-purple" size={28} />,
      title: "NÃO TEMOS FIDELIDADE",
      desc: "Você não fica preso a contratos abusivos. Fique o tempo que quiser e cancele quando precisar."
    },
    {
      icon: <UserCheck className="text-green-main" size={28} />,
      title: "SEM ANÁLISE DE PERFIL",
      desc: "O preço é o mesmo para o seu carro. Não fazemos análise de condutor, CEP ou histórico."
    },
    {
      icon: <Users className="text-bp-orange" size={28} />,
      title: "QUALQUER MOTORISTA HABILITADO",
      desc: "O seguro cobre o carro. Portanto, qualquer motorista habilitado pode dirigir seu veículo e estar protegido."
    },
    {
      icon: <ShieldCheck className="text-bp-purple" size={28} />,
      title: "GARANTIA BP SEGURADORA",
      desc: "A tranquilidade de ter seu veículo protegido por uma seguradora registrada e regulamentada."
    }
  ];

  return (
    <section className="py-24 bg-gray-light">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-green-dark mb-6">
            Por que somos a melhor escolha para o seu veículo?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center mb-6 border border-gray-100">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold text-text-dark mb-3">{benefit.title}</h3>
              <p className="text-text-dark/70 leading-relaxed">{benefit.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
