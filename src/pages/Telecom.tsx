import { motion } from "framer-motion";
import { Wifi, PhoneCall, Globe, Smartphone } from "lucide-react";

export function Telecom() {
  const plans = [
    {
      name: "Plano Smart",
      gb: "15GB",
      price: "49,90",
      features: ["WhatsApp Ilimitado", "Ligações Nacionais Ilimitadas", "Cobertura 4G/5G"]
    },
    {
      name: "Plano Pro",
      gb: "30GB",
      price: "69,90",
      popular: true,
      features: ["Apps Sociais Ilimitados", "Ligações Nacionais Ilimitadas", "Roaming Nacional Grátis", "Cobertura 4G/5G"]
    },
    {
      name: "Plano Ultra",
      gb: "50GB",
      price: "99,90",
      features: ["Internet Cumulativa", "Apps Sociais Ilimitados", "Ligações Nacionais Ilimitadas", "Roaming Nacional Grátis", "Cobertura 4G/5G"]
    }
  ];

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="bg-green-dark text-white py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1512428559087-560fa5ceab42?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center"></div>
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-6 tracking-tight"
          >
            Conectividade sem limites com <br/><span className="text-green-main">iGreen Telecom</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
          >
            Os melhores planos de celular para você estar sempre online. Maior cobertura do Brasil, velocidade 5G e benefícios exclusivos.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex justify-center gap-6 text-green-main mt-8"
          >
             <div className="flex flex-col items-center"><Wifi size={40}/><span className="text-sm mt-2 text-white">5G Super Rápido</span></div>
             <div className="flex flex-col items-center"><PhoneCall size={40}/><span className="text-sm mt-2 text-white">Ligações Ilimitadas</span></div>
             <div className="flex flex-col items-center"><Globe size={40}/><span className="text-sm mt-2 text-white">Maior Cobertura</span></div>
          </motion.div>
        </div>
      </section>

      {/* Plans Section */}
      <section className="py-20 bg-gray-50 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-green-dark">Escolha o plano ideal para você</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">Planos desenhados para o seu estilo de vida, sem letras miúdas.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {plans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`bg-white rounded-3xl p-8 border ${plan.popular ? 'border-green-main shadow-xl relative' : 'border-gray-100 shadow-md'} flex flex-col`}
              >
                {plan.popular && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-green-main text-white px-4 py-1 rounded-full text-sm font-bold tracking-wide">
                    MAIS ESCOLHIDO
                  </div>
                )}
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-2 mb-6 text-green-dark">
                  <span className="text-5xl font-extrabold">{plan.gb}</span>
                </div>
                <div className="mb-8">
                  <span className="text-gray-500 font-medium">Por apenas</span>
                  <div className="text-3xl font-bold text-gray-900">R$ {plan.price}<span className="text-lg text-gray-500 font-normal">/mês</span></div>
                </div>
                
                <ul className="flex-1 space-y-4 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-600">
                      <Smartphone className="text-green-main shrink-0" size={20} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-4 rounded-xl font-bold transition-colors ${plan.popular ? 'bg-green-main text-white hover:bg-green-dark' : 'bg-green-dark text-white hover:bg-green-main'}`}>
                  Assinar Agora
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
    </main>
  );
}
