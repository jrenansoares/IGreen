import { motion } from "framer-motion";
import { Zap, Leaf, PiggyBank, ShieldCheck } from "lucide-react";

export function Energia() {
  const benefits = [
    {
      icon: <PiggyBank className="text-green-main" size={32} />,
      title: "Economia Garantida",
      description: "Reduza o valor da sua conta de luz todos os meses sem precisar de obras."
    },
    {
      icon: <Leaf className="text-green-main" size={32} />,
      title: "Energia Limpa",
      description: "Consuma energia de fontes renováveis e ajude a preservar o meio ambiente."
    },
    {
      icon: <Zap className="text-green-main" size={32} />,
      title: "Sem Fidelidade",
      description: "Você não fica preso a contratos abusivos. Liberdade total para você."
    },
    {
      icon: <ShieldCheck className="text-green-main" size={32} />,
      title: "Zero Risco",
      description: "A sua distribuidora continua entregando a energia normalmente."
    }
  ];

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="bg-green-dark text-white py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center"></div>
        <div className="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 text-center md:text-left">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-bold mb-6 tracking-tight"
            >
              Economize na conta de luz com <span className="text-green-main">Energia Renovável</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-gray-300 mb-8 max-w-2xl"
            >
              Transforme a forma como você consome energia. Mais barato, mais limpo e sem necessidade de instalações.
            </motion.p>
            <motion.a 
              href="#cotacao"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block bg-green-main hover:bg-white hover:text-green-dark text-white px-8 py-4 rounded-full font-bold text-lg transition-colors shadow-lg"
            >
              Simular Economia
            </motion.a>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-green-dark">Por que escolher a iGreen Energy?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">Benefícios exclusivos para você e para o planeta.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-gray-100"
              >
                <div className="w-16 h-16 bg-green-main/10 rounded-xl flex items-center justify-center mb-6">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-green-dark mb-3">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Cotação Form Placeholder - we can use the same generic CTA for now or a specific one */}
      <section id="cotacao" className="py-20 bg-white px-4">
         <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-green-dark">Descubra o quanto você pode economizar</h2>
            <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 shadow-sm">
                <p className="text-gray-600 mb-6">Deixe seu contato para recebermos uma simulação gratuita e sem compromisso.</p>
                <form className="flex flex-col gap-4">
                  <input type="text" placeholder="Seu Nome" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-main/50" />
                  <input type="tel" placeholder="Seu Telefone / WhatsApp" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-main/50" />
                  <input type="text" placeholder="Valor médio da conta (R$)" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-main/50" />
                  <button className="w-full bg-green-dark text-white font-bold py-4 rounded-xl hover:bg-green-main transition-colors mt-2">
                    Quero minha simulação
                  </button>
                </form>
            </div>
         </div>
      </section>
    </main>
  );
}
