import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { 
  ShieldCheck, 
  Zap, 
  Smartphone, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles, 
  Star, 
  PhoneCall, 
  Award,
  ChevronRight
} from "lucide-react";
import { SEO } from "../components/SEO";
import { WHATSAPP_NUMBER } from "../lib/constants";

export function Home() {
  const services = [
    {
      id: "seguros",
      path: "/seguros",
      category: "Seguro Auto & Veículos",
      badge: "Garantia BP Seguradora • SUSEP",
      badgeColor: "bg-bp-purple/10 text-bp-purple border-bp-purple/20",
      title: "iGreen Seguros",
      logo: "/iGreen seguros verde.png",
      logoAlt: "Logo iGreen Seguros",
      subtitle: "A escolha do Embaixador Gusttavo Lima",
      description: "Proteção completa contra roubo, furto, colisão e assistência 24h em todo o Brasil. Sem análise de perfil ou condutor e até 3x mais econômico.",
      highlights: [
        "Sem fidelidade: cancele quando quiser",
        "Pagamento mensal via boleto ou Pix",
        "Sem análise de condutor ou CEP",
        "Assistência 24h completa em todo o Brasil"
      ],
      ctaText: "Acessar iGreen Seguros",
      ctaBg: "bg-bp-orange hover:bg-bp-orange/90 text-white",
      accentBg: "from-[#2A1F5E] to-bp-purple",
      icon: <ShieldCheck className="text-bp-orange" size={32} />,
      tag: "Mais Procurado"
    },
    {
      id: "energia",
      path: "/energia",
      category: "Energia Solar por Assinatura",
      badge: "Desconto Direto na Conta",
      badgeColor: "bg-green-main/10 text-green-dark border-green-main/20",
      title: "iGreen Energy",
      logo: "/iGreen - Conexão Green.png",
      logoAlt: "Logo iGreen Energy",
      subtitle: "Economize na luz sem gastar com placas",
      description: "Reduza o valor da sua fatura mensal consumindo energia limpa de fazendas solares parceiras, sem obras, sem taxa de adesão e sem fidelidade.",
      highlights: [
        "Economia real e garantida todo mês",
        "Zero obras, reformas ou compra de placas",
        "Energia 100% sustentável e renovável",
        "Sem contrato de fidelidade ou taxas extras"
      ],
      ctaText: "Acessar iGreen Energy",
      ctaBg: "bg-green-main hover:bg-green-dark text-white",
      accentBg: "from-[#004D25] to-green-dark",
      icon: <Zap className="text-yellow-solar" size={32} />,
      tag: "Economia Verde"
    },
    {
      id: "telecom",
      path: "/telecom",
      category: "Telefonia Móvel 5G & Internet",
      badge: "Planos a partir de R$ 49,90/mês",
      badgeColor: "bg-blue-50 text-blue-700 border-blue-200",
      title: "iGreen Telecom",
      logo: "/iGreen Telecom -  Logo Verde.png",
      logoAlt: "Logo iGreen Telecom",
      subtitle: "Conexão de alta velocidade sem limites",
      description: "Planos móveis modernos com ultravelocidade 5G, WhatsApp ilimitado, internet cumulativa que não expira e a maior cobertura do Brasil.",
      highlights: [
        "WhatsApp liberado sem gastar da franquia",
        "Internet cumulativa: dados sobram pro mês seguinte",
        "Ligações e roaming nacional inclusos",
        "Cobertura 5G com portabilidade rápida"
      ],
      ctaText: "Acessar iGreen Telecom",
      ctaBg: "bg-gray-900 hover:bg-black text-white",
      accentBg: "from-gray-950 to-slate-800",
      icon: <Smartphone className="text-green-main" size={32} />,
      tag: "Super Conexão"
    }
  ];

  return (
    <main className="min-h-screen bg-gray-50 pt-24 pb-20">
      <SEO 
        title="iGreen | Soluções em Energia Solar por Assinatura, Seguro Auto e Telecom 5G"
        description="Conheça as soluções da iGreen: Economize até 18% na conta de luz sem obras, contrate Seguro Auto mensal sem fidelidade operado pela BP Seguradora e tenha planos de telefonia 5G com internet cumulativa."
        canonical="https://igreen.conexoes.workers.dev/"
        ogImage="/iGreen%20Verde%20Claro.png"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "iGreen",
          "url": "https://igreen.conexoes.workers.dev",
          "logo": "https://igreen.conexoes.workers.dev/iGreen%20Verde%20Claro.png",
          "description": "Ecossistema de soluções em energia solar por assinatura, seguros automotivos e telefonia móvel 5G.",
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+55-21-98445-8464",
            "contactType": "customer service",
            "availableLanguage": "Portuguese"
          }
        }}
      />
      
      {/* Hero Section */}
      <section className="relative px-4 pt-8 pb-16 lg:pt-12 lg:pb-24 overflow-hidden">
        {/* Decorative Background Blurs */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-green-main/10 rounded-full blur-[100px] pointer-events-none -z-10"></div>
        <div className="absolute top-1/3 right-10 w-[400px] h-[300px] bg-bp-purple/10 rounded-full blur-[90px] pointer-events-none -z-10"></div>
        
        <div className="max-w-6xl mx-auto text-center">
          
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-200/80 shadow-xs mb-6">
            <Sparkles size={16} className="text-green-main" />
            <span className="text-xs sm:text-sm font-bold text-gray-700 tracking-wide uppercase">
              Ecossistema de Soluções iGreen
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-[1.15] mb-6 tracking-tight">
            Escolha o serviço ideal para <br className="hidden sm:inline"/>
            <span className="bg-gradient-to-r from-green-dark via-green-main to-bp-purple bg-clip-text text-transparent">
              economizar, conectar e proteger
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed">
            Selecione uma das verticais abaixo para acessar a página exclusiva com simulações, planos detalhados e atendimento personalizado.
          </p>
        </div>

        {/* 3 Main Choice Cards */}
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 + index * 0.1 }}
                className="bg-white rounded-3xl overflow-hidden border border-gray-200/90 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col group hover:-translate-y-1.5 relative"
              >
                {/* Top Colored Header Banner */}
                <div className={`p-8 bg-gradient-to-br ${service.accentBg} text-white relative overflow-hidden`}>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-white/15 backdrop-blur-md text-white border border-white/20">
                      {service.category}
                    </span>
                    <span className="text-xs font-extrabold px-3 py-1 rounded-full bg-yellow-solar text-gray-950">
                      {service.tag}
                    </span>
                  </div>

                  <div className="flex flex-col gap-3 mb-2">
                    <div className="w-full max-w-[210px] h-14 bg-white rounded-2xl px-4 py-2 flex items-center justify-center shadow-md border border-white/40">
                      <img 
                        src={service.logo} 
                        alt={service.logoAlt} 
                        width={210}
                        height={56}
                        loading="lazy"
                        decoding="async"
                        className="max-h-8 max-w-full w-auto h-auto object-contain"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                        }}
                      />
                    </div>
                    <p className="text-sm text-white/90 font-medium">
                      {service.subtitle}
                    </p>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-8 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Badge */}
                    <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-bold border mb-5 ${service.badgeColor}`}>
                      <Star size={14} className="fill-current" />
                      <span>{service.badge}</span>
                    </div>

                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6">
                      {service.description}
                    </p>

                    {/* Highlights List */}
                    <div className="space-y-3 mb-8">
                      {service.highlights.map((item, i) => (
                        <div key={i} className="flex items-start gap-2.5 text-sm text-gray-700 font-medium">
                          <CheckCircle2 size={18} className="text-green-main shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Link Button */}
                  <Link
                    to={service.path}
                    className={`w-full py-4 px-6 rounded-2xl font-bold text-base flex items-center justify-center gap-3 transition-all shadow-md group-hover:shadow-lg ${service.ctaBg}`}
                  >
                    <span>{service.ctaText}</span>
                    <ArrowRight size={20} className="transform group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust & Guarantee Banner */}
      <section className="py-12 max-w-7xl mx-auto px-4">
        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-gray-200/80 shadow-md">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-gray-100">
            
            <div className="flex items-center gap-4 md:pr-6">
              <div className="w-12 h-12 rounded-2xl bg-green-main/10 flex items-center justify-center text-green-dark shrink-0">
                <Award size={28} />
              </div>
              <div>
                <h4 className="font-extrabold text-gray-900 text-base sm:text-lg">Regulamentação Oficial</h4>
                <p className="text-xs sm:text-sm text-gray-500 mt-0.5">Operações subscritas por seguradora SUSEP e parceiros homologados.</p>
              </div>
            </div>

            <div className="flex items-center gap-4 pt-6 md:pt-0 md:px-6">
              <div className="w-12 h-12 rounded-2xl bg-bp-purple/10 flex items-center justify-center text-bp-purple shrink-0">
                <Sparkles size={28} />
              </div>
              <div>
                <h4 className="font-extrabold text-gray-900 text-base sm:text-lg">Zero Burocracia</h4>
                <p className="text-xs sm:text-sm text-gray-500 mt-0.5">Contratações 100% digitais, sem contratos de fidelidade abusivos.</p>
              </div>
            </div>

            <div className="flex items-center gap-4 pt-6 md:pt-0 md:pl-6">
              <div className="w-12 h-12 rounded-2xl bg-bp-orange/10 flex items-center justify-center text-bp-orange shrink-0">
                <PhoneCall size={28} />
              </div>
              <div>
                <h4 className="font-extrabold text-gray-900 text-base sm:text-lg">Atendimento Humanizado</h4>
                <p className="text-xs sm:text-sm text-gray-500 mt-0.5">Consultores dedicados prontos para tirar dúvidas via WhatsApp.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Ambassador & Ecosystem Section */}
      <section className="py-12 max-w-7xl mx-auto px-4">
        <div className="bg-gradient-to-br from-green-dark via-[#006E35] to-bp-purple text-white rounded-3xl p-8 sm:p-12 shadow-xl relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-yellow-solar text-xs sm:text-sm font-bold mb-4 border border-white/15">
              <Star size={16} fill="currentColor" />
              <span>Embaixador Oficial: Gusttavo Lima</span>
            </div>
            <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4 text-white leading-tight">
              A confiança que você e sua família merecem
            </h3>
            <p className="text-white/80 text-base sm:text-lg leading-relaxed mb-6">
              A iGreen conecta soluções de ponta em sustentabilidade, comunicação móvel e proteção patrimonial. Junte-se a milhares de brasileiros que já reduziram seus custos mensais.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                to="/seguros"
                className="bg-white text-green-dark hover:bg-gray-100 font-bold px-6 py-3.5 rounded-xl text-sm sm:text-base transition-colors shadow-md inline-flex items-center gap-2"
              >
                <span>Conhecer Seguro Auto</span>
                <ChevronRight size={18} />
              </Link>
              <a 
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=Ol%C3%A1%2C%20gostaria%20de%20tirar%20d%C3%BAvidas%20sobre%20as%20solu%C3%A7%C3%B5es%20iGreen`}
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-bp-orange hover:bg-bp-orange/90 text-white font-bold px-6 py-3.5 rounded-xl text-sm sm:text-base transition-colors shadow-md inline-flex items-center gap-2"
              >
                <span>Falar com Consultor</span>
                <ArrowRight size={18} />
              </a>
            </div>
          </div>

          <div className="shrink-0 flex flex-col items-center">
            <div className="w-36 h-36 sm:w-44 sm:h-44 rounded-full overflow-hidden border-4 border-yellow-solar shadow-2xl bg-white">
              <img 
                src="/gustavo-lima.png" 
                alt="Gusttavo Lima - Embaixador iGreen" 
                width={512}
                height={768}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <span className="text-sm font-extrabold text-white mt-3 tracking-wide">
              Gusttavo Lima
            </span>
            <span className="text-xs text-yellow-solar font-semibold">
              Embaixador iGreen
            </span>
          </div>
        </div>
      </section>

    </main>
  );
}
