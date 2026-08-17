import { motion } from "motion/react";
import { Search, FileText, CheckCircle, ArrowRight } from "lucide-react";

export function HowItWorks() {
  const scrollToForm = () => {
    document.getElementById("cotacao")?.scrollIntoView({ behavior: "smooth" });
  };

  const steps = [
    {
      num: "01",
      icon: <Search className="text-green-main" size={26} />,
      title: "Informe a placa",
      desc: "Digite a placa e o tipo do seu veículo em nosso formulário rápido para identificarmos a Tabela FIPE oficial."
    },
    {
      num: "02",
      icon: <FileText className="text-bp-orange" size={26} />,
      title: "Receba sua proposta",
      desc: "Nossa equipe localiza a melhor condição com mensalidade justa, sem exigência de fidelidade ou análise de perfil."
    },
    {
      num: "03",
      icon: <CheckCircle className="text-bp-purple" size={26} />,
      title: "Ative 100% online",
      desc: "Validação ágil e contratação digital via WhatsApp. Sem vistoria demorada, você já sai com seu veículo protegido."
    }
  ];

  return (
    <section className="py-20 lg:py-24 bg-gray-50/80 border-t border-gray-200/60">
      <div className="max-w-7xl mx-auto px-4">
        
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-green-main/10 text-green-dark text-xs sm:text-sm font-extrabold mb-3">
            <span>Passo a Passo Simples</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight mb-4">
            Como funciona a contratação
          </h2>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
            Menos de 2 minutos para cotar e sem sair de casa para ativar.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative mb-12">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-8 rounded-3xl border border-gray-200/80 shadow-xs relative flex flex-col justify-between group hover:shadow-md transition-shadow"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-gray-50 border border-gray-100 flex items-center justify-center">
                    {step.icon}
                  </div>
                  <span className="text-2xl font-black text-gray-200 group-hover:text-green-main/40 transition-colors">
                    {step.num}
                  </span>
                </div>

                <h3 className="text-xl font-extrabold text-gray-900 mb-3">
                  {step.title}
                </h3>
                
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  {step.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-gray-100 flex items-center gap-1.5 text-xs font-bold text-gray-500">
                <span>Etapa {step.num} de 03</span>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <button
            onClick={scrollToForm}
            className="inline-flex items-center gap-2 bg-green-dark hover:bg-black text-white font-extrabold px-8 py-4 rounded-xl text-base sm:text-lg transition-all shadow-md hover:shadow-xl cursor-pointer"
          >
            <span>Iniciar Minha Cotação Agora</span>
            <ArrowRight size={20} />
          </button>
        </div>

      </div>
    </section>
  );
}
