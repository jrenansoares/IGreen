import { useState } from "react";
import { motion } from "framer-motion";
import { 
  Wifi, 
  Check, 
  Zap, 
  ShieldCheck, 
  Sparkles, 
  QrCode, 
  Repeat, 
  ShoppingBag, 
  ChevronDown,
  MessageCircle,
  Award,
  PhoneCall,
  Play
} from "lucide-react";
import { trackWhatsAppClick, buildWhatsAppMessageWithUtm } from "../lib/tracking";
import { WHATSAPP_NUMBER } from "../lib/constants";

export function Telecom() {
  const [withPortability, setWithPortability] = useState<boolean>(true);
  const [videoFailed, setVideoFailed] = useState<boolean>(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // Planos oficiais iGreen Telecom
  const plans = [
    {
      id: "start",
      name: "Plano Start",
      baseGb: 6,
      bonusGb: 5,
      portPrice: "54,90",
      normalPrice: "59,90",
      recommendedFor: "Essencial para o dia a dia e mensagens",
      highlight: false,
      badge: null,
      features: [
        "WhatsApp Ilimitado (não gasta dados)",
        "Internet que acumula para o próximo mês",
        "Ligações ilimitadas p/ todo Brasil",
        "iGreen Club com até 70% de desconto",
        "Rede 5G & 4G com cobertura nacional",
        "Zero fidelidade e sem multas"
      ]
    },
    {
      id: "mega",
      name: "Plano Mega",
      baseGb: 10,
      bonusGb: 5,
      portPrice: "59,90",
      normalPrice: "64,90",
      recommendedFor: "Redes sociais diárias, Waze e GPS",
      highlight: false,
      badge: "Custo-Benefício",
      features: [
        "WhatsApp Ilimitado (não gasta dados)",
        "Internet que acumula para o próximo mês",
        "Ligações ilimitadas p/ todo Brasil",
        "iGreen Club com até 70% de desconto",
        "Rede 5G & 4G com cobertura nacional",
        "Zero fidelidade e sem multas"
      ]
    },
    {
      id: "giga",
      name: "Plano Giga",
      baseGb: 15,
      bonusGb: 5,
      portPrice: "69,90",
      normalPrice: "74,90",
      recommendedFor: "O mais vendido: Streaming, vídeos e fotos",
      highlight: true,
      badge: "MAIS ESCOLHIDO",
      features: [
        "WhatsApp Ilimitado (não gasta dados)",
        "Internet que acumula para o próximo mês",
        "Ligações ilimitadas p/ todo Brasil",
        "iGreen Club com até 70% de desconto",
        "Rede 5G & 4G com cobertura nacional",
        "Zero fidelidade e sem multas",
        "Prioridade na ativação e suporte"
      ]
    },
    {
      id: "ultra",
      name: "Plano Ultra",
      baseGb: 23,
      bonusGb: 5,
      portPrice: "79,90",
      normalPrice: "84,90",
      recommendedFor: "Trabalho móvel, reuniões e jogos",
      highlight: false,
      badge: "Alta Franquia",
      features: [
        "WhatsApp Ilimitado (não gasta dados)",
        "Internet que acumula para o próximo mês",
        "Ligações ilimitadas p/ todo Brasil",
        "iGreen Club com até 70% de desconto",
        "Rede 5G & 4G com cobertura nacional",
        "Zero fidelidade e sem multas"
      ]
    },
    {
      id: "infinity",
      name: "Plano Infinity",
      baseGb: 45,
      bonusGb: 5,
      portPrice: "99,90",
      normalPrice: "104,90",
      recommendedFor: "Máxima performance + Roaming Internacional",
      highlight: false,
      badge: "Completo",
      features: [
        "WhatsApp Ilimitado (não gasta dados)",
        "Internet que acumula para o próximo mês",
        "Ligações ilimitadas p/ todo Brasil",
        "Roaming Mercosul (Argentina e Uruguai)",
        "iGreen Club com até 70% de desconto",
        "Rede 5G & 4G com máxima velocidade",
        "Zero fidelidade e sem multas"
      ]
    }
  ];

  const faqs = [
    {
      q: "Como funciona a internet acumulativa?",
      a: "Toda a internet que você não usar no mês é automaticamente somada à franquia do mês seguinte. Você nunca perde os gigas que já pagou."
    },
    {
      q: "Como ganho os +5GB de bônus de portabilidade?",
      a: "Basta solicitar a migração do seu número atual de qualquer operadora para a iGreen Telecom. O processo é 100% digital, gratuito e você ganha +5GB mensais vitalícios."
    },
    {
      q: "Como funciona a ativação com eSIM (Chip Virtual)?",
      a: "Se o seu aparelho for compatível (iPhone, Samsung Galaxy, Motorola, etc.), enviamos o QR Code diretamente no seu WhatsApp. Você escaneia e sua linha 5G já fica ativa em minutos. Se preferir o Chip Físico, enviamos para sua casa."
    },
    {
      q: "Tem contrato de fidelidade ou multa?",
      a: "Nenhum plano iGreen Telecom possui fidelidade. Você tem total liberdade de trocar de plano ou cancelar a qualquer momento sem nenhuma multa."
    },
    {
      q: "O que é o iGreen Club incluso no plano?",
      a: "É um clube exclusivo que dá até 70% de desconto e cashback em mais de 66.000 parceiros no Brasil (farmácias como Raia e Drogasil, cinemas, restaurantes e grandes e-commerces)."
    }
  ];

  const handleHirePlan = (planName: string, totalGb: string, price: string) => {
    trackWhatsAppClick(`plan_${planName.toLowerCase().replace(/\s+/g, "_")}`);
    const portText = withPortability ? "COM PORTABILIDADE (+5GB BÔNUS)" : "NOVO NÚMERO";
    const baseText = `Olá! Quero contratar o ${planName} (${totalGb} por R$ ${price}/mês) da iGreen Telecom (${portText}).`;
    const fullText = buildWhatsAppMessageWithUtm(baseText);
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(fullText)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const handleGeneralContact = (origin: string) => {
    trackWhatsAppClick(origin);
    const baseText = "Olá! Gostaria de tirar dúvidas e ativar minha linha da iGreen Telecom.";
    const fullText = buildWhatsAppMessageWithUtm(baseText);
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(fullText)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const scrollToPlans = () => {
    const el = document.getElementById("planos-telecom");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className="pt-20 bg-white text-gray-900 overflow-hidden">
      {/* 1. HERO COM VÍDEO OFICIAL E ALTA CONVERSÃO */}
      <section className="relative bg-gradient-to-b from-gray-950 via-[#0B1A12] to-gray-900 text-white py-12 md:py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#00A651_1px,transparent_1px)] [background-size:24px_24px]"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* Coluna Esquerda: Proposta de Valor e Ação */}
            <div className="lg:col-span-7 text-center lg:text-left">
              {/* Badge de Marca */}
              <motion.div 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/15 px-3.5 h-9 rounded-full mb-6 shadow-md"
              >
                <div className="h-6 px-2 bg-white rounded-full flex items-center justify-center">
                  <img 
                    src="/iGreen Telecom -  Logo Verde.png" 
                    alt="iGreen Telecom" 
                    className="max-h-4 max-w-[100px] w-auto object-contain"
                    onError={(e) => { e.currentTarget.style.display = 'none'; }}
                  />
                </div>
                <span className="text-xs font-bold text-green-light uppercase tracking-wider">Telefonia 5G • Sem Fidelidade</span>
              </motion.div>

              {/* Título de Alto Impacto */}
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-black mb-5 tracking-tight leading-[1.15]"
              >
                Chega de perder internet no fim do mês. Conecte-se ao <br className="hidden sm:inline" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-main via-emerald-400 to-green-light">
                  5G da iGreen Telecom
                </span>
              </motion.h1>

              {/* Proposta de Valor Objetiva */}
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 }}
                className="text-base sm:text-lg text-gray-300 mb-8 max-w-2xl font-normal leading-relaxed"
              >
                Tenha <strong className="text-white">internet que acumula</strong> para o mês seguinte, <strong className="text-white">WhatsApp 100% livre</strong> sem gastar franquia, ligações ilimitadas e ativação imediata via <strong className="text-white">eSIM Digital</strong> ou Chip Físico.
              </motion.p>

              {/* Botões de Ação Direta */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="flex flex-col sm:flex-row items-center gap-4 mb-8"
              >
                <button
                  onClick={scrollToPlans}
                  className="w-full sm:w-auto bg-green-main hover:bg-green-dark text-white text-base font-bold px-8 py-4 rounded-2xl shadow-xl shadow-green-main/30 transition-all hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2.5 cursor-pointer"
                >
                  <Zap size={20} className="text-yellow-solar" />
                  Ver Planos a partir de R$ 54,90
                </button>
                <button
                  onClick={() => handleGeneralContact("hero_fast_esim")}
                  className="w-full sm:w-auto bg-white/10 hover:bg-white/15 text-white border border-white/20 text-base font-semibold px-6 py-4 rounded-2xl backdrop-blur-md transition-all hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2.5 cursor-pointer"
                >
                  <MessageCircle size={20} className="text-[#25D366]" />
                  Ativar no WhatsApp
                </button>
              </motion.div>

              {/* Pilares de Confiança Rápidos */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-left pt-6 border-t border-white/10">
                <div className="flex items-center gap-2 text-xs text-gray-300">
                  <Repeat size={16} className="text-green-main shrink-0" />
                  <span>Gigas Acumulativos</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-gray-300">
                  <ShieldCheck size={16} className="text-green-main shrink-0" />
                  <span>Sem Fidelidade</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-gray-300">
                  <Sparkles size={16} className="text-green-main shrink-0" />
                  <span>+5GB Portabilidade</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-gray-300">
                  <QrCode size={16} className="text-green-main shrink-0" />
                  <span>eSIM Instantâneo</span>
                </div>
              </div>
            </div>

            {/* Coluna Direita: Vídeo Oficial TELECOM.mp4 */}
            <div className="lg:col-span-5 w-full">
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white/20 bg-gray-900 aspect-video w-full max-w-2xl mx-auto flex items-center justify-center"
              >
                {!videoFailed ? (
                  <video 
                    className="w-full h-full object-cover"
                    controls
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="auto"
                    onError={() => setVideoFailed(true)}
                    aria-label="Vídeo oficial iGreen Telecom"
                  >
                    <source src="/TELECOM.mp4" type="video/mp4" />
                  </video>
                ) : (
                  <div className="p-8 text-center text-white flex flex-col items-center justify-center h-full bg-gradient-to-br from-gray-900 via-green-dark to-gray-950">
                    <div className="w-16 h-16 rounded-full bg-green-main/20 flex items-center justify-center mb-4 text-green-main border border-green-main/40">
                      <Wifi size={32} />
                    </div>
                    <h3 className="text-xl font-bold mb-2">iGreen Telecom 5G</h3>
                    <p className="text-sm text-gray-300 mb-6">Conexão ultrarrápida com internet que acumula e sem fidelidade.</p>
                    <button
                      onClick={scrollToPlans}
                      className="bg-green-main hover:bg-green-dark text-white px-6 py-3 rounded-xl font-bold text-sm"
                    >
                      Conhecer Planos
                    </button>
                  </div>
                )}
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. GRADE DE PLANOS OFICIAIS (ALTA CONVERSÃO) */}
      <section id="planos-telecom" className="py-16 md:py-24 bg-gray-50 px-4 scroll-mt-20">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="inline-block text-xs font-black tracking-widest text-green-dark uppercase bg-green-light/60 px-3.5 py-1.5 rounded-full mb-3">
              Planos Inteligentes 5G
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight mb-3">
              Escolha o Plano Perfeito para Você
            </h2>
            <p className="text-gray-600 text-base sm:text-lg">
              Sem surpresas na fatura e com internet acumulativa em todas as opções.
            </p>

            {/* Toggle Portabilidade vs Novo Número */}
            <div className="mt-8 inline-flex p-1.5 bg-gray-200/80 rounded-2xl shadow-inner border border-gray-300/60 max-w-md w-full">
              <button
                type="button"
                onClick={() => setWithPortability(true)}
                className={`flex-1 py-3 px-4 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center justify-center gap-2 cursor-pointer ${
                  withPortability 
                    ? "bg-green-main text-white shadow-md" 
                    : "text-gray-700 hover:text-gray-900"
                }`}
              >
                <Sparkles size={16} className={withPortability ? "text-yellow-solar" : "text-green-main"} />
                <span>Portabilidade (+5GB Bônus)</span>
              </button>
              <button
                type="button"
                onClick={() => setWithPortability(false)}
                className={`flex-1 py-3 px-4 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center justify-center gap-2 cursor-pointer ${
                  !withPortability 
                    ? "bg-gray-900 text-white shadow-md" 
                    : "text-gray-700 hover:text-gray-900"
                }`}
              >
                <span>Novo Número</span>
              </button>
            </div>

            {withPortability && (
              <p className="mt-3 text-xs sm:text-sm font-semibold text-green-dark flex items-center justify-center gap-1.5">
                <Check size={16} className="text-green-main" />
                Mantenha seu número atual e ganhe +5GB todo mês de forma vitalícia!
              </p>
            )}
          </div>

          {/* Cards dos 5 Planos */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {plans.map((plan, index) => {
              const totalGb = withPortability ? plan.baseGb + plan.bonusGb : plan.baseGb;
              const currentPrice = withPortability ? plan.portPrice : plan.normalPrice;

              return (
                <motion.div
                  key={plan.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.06 }}
                  className={`relative rounded-3xl p-6 flex flex-col justify-between transition-all duration-300 ${
                    plan.highlight
                      ? "bg-gradient-to-b from-gray-900 to-gray-950 text-white border-2 border-green-main shadow-2xl shadow-green-main/20 scale-[1.02] xl:-translate-y-2 z-10"
                      : "bg-white text-gray-900 border border-gray-200 shadow-md hover:shadow-xl hover:border-green-main/40"
                  }`}
                >
                  {plan.badge && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                      <span className={`px-3 py-1 rounded-full text-[11px] font-extrabold uppercase tracking-wider shadow-sm flex items-center gap-1 whitespace-nowrap ${
                        plan.highlight
                          ? "bg-green-main text-white"
                          : "bg-green-light text-green-dark border border-green-main/30"
                      }`}>
                        {plan.highlight && <Award size={12} className="text-yellow-solar" />}
                        {plan.badge}
                      </span>
                    </div>
                  )}

                  <div>
                    {/* Cabeçalho do Card */}
                    <div className="mb-3 mt-1">
                      <h3 className={`text-xl font-black ${plan.highlight ? "text-white" : "text-gray-900"}`}>
                        {plan.name}
                      </h3>
                      <p className={`text-xs mt-1 min-h-[32px] ${plan.highlight ? "text-gray-300" : "text-gray-500"}`}>
                        {plan.recommendedFor}
                      </p>
                    </div>

                    {/* Destaque da Franquia */}
                    <div className={`p-4 rounded-2xl mb-4 text-center ${
                      plan.highlight ? "bg-white/10 border border-white/10" : "bg-green-light/40 border border-green-main/10"
                    }`}>
                      <div className="flex items-baseline justify-center gap-1">
                        <span className={`text-4xl font-black tracking-tight ${plan.highlight ? "text-green-main" : "text-green-dark"}`}>
                          {totalGb}
                        </span>
                        <span className={`text-lg font-bold ${plan.highlight ? "text-gray-200" : "text-gray-700"}`}>GB</span>
                      </div>
                      {withPortability ? (
                        <span className="text-[11px] font-bold text-green-main uppercase tracking-wider block mt-0.5">
                          ({plan.baseGb}GB + 5GB Bônus)
                        </span>
                      ) : (
                        <span className={`text-[11px] font-medium block mt-0.5 ${plan.highlight ? "text-gray-400" : "text-gray-500"}`}>
                          Franquia regular mensal
                        </span>
                      )}
                    </div>

                    {/* Preço */}
                    <div className="mb-5">
                      <span className={`text-xs block ${plan.highlight ? "text-gray-400" : "text-gray-500"}`}>
                        Mensalidade
                      </span>
                      <div className="flex items-baseline gap-1">
                        <span className={`text-sm font-semibold ${plan.highlight ? "text-gray-300" : "text-gray-600"}`}>R$</span>
                        <span className={`text-3xl font-black tracking-tight ${plan.highlight ? "text-white" : "text-gray-900"}`}>
                          {currentPrice}
                        </span>
                        <span className={`text-xs ${plan.highlight ? "text-gray-400" : "text-gray-500"}`}>/mês</span>
                      </div>
                    </div>

                    {/* Lista de Recursos */}
                    <div className="space-y-2.5 pt-4 border-t border-gray-100 dark:border-white/10 mb-6">
                      {plan.features.map((feature, fIdx) => (
                        <div key={fIdx} className="flex items-start gap-2 text-xs">
                          <Check size={15} className="text-green-main shrink-0 mt-0.5" />
                          <span className={plan.highlight ? "text-gray-200" : "text-gray-600"}>
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Botão de Contratação */}
                  <button
                    onClick={() => handleHirePlan(plan.name, `${totalGb}GB`, currentPrice)}
                    className={`w-full py-3.5 px-4 rounded-xl font-bold text-sm transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer shadow-md hover:scale-[1.02] active:scale-[0.98] ${
                      plan.highlight
                        ? "bg-green-main hover:bg-green-dark text-white shadow-green-main/30"
                        : "bg-gray-900 hover:bg-green-dark text-white"
                    }`}
                  >
                    <MessageCircle size={16} className="shrink-0" />
                    <span>Contratar no WhatsApp</span>
                  </button>
                </motion.div>
              );
            })}
          </div>

          {/* Garantia & Atendimento Personalizado */}
          <div className="mt-12 bg-white rounded-2xl p-6 border border-gray-200 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6 max-w-4xl mx-auto">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-green-light flex items-center justify-center shrink-0">
                <ShieldCheck size={26} className="text-green-dark" />
              </div>
              <div>
                <h4 className="text-base font-bold text-gray-900">Zero Fidelidade e Sem Burocracia</h4>
                <p className="text-xs text-gray-500">Mude de plano ou cancele quando quiser sem multas ou pegadinhas.</p>
              </div>
            </div>
            <button 
              onClick={() => handleGeneralContact("plans_help_button")}
              className="text-sm font-bold text-green-dark hover:text-green-main flex items-center gap-1.5 cursor-pointer underline underline-offset-4 shrink-0"
            >
              Falar com um Consultor no WhatsApp
            </button>
          </div>

        </div>
      </section>

      {/* 3. OS 4 GRANDES DIFERENCIAIS DE ALTA CONVERSÃO */}
      <section className="py-16 md:py-20 bg-white px-4 border-t border-gray-100">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-black tracking-widest text-green-dark uppercase bg-green-light/60 px-3.5 py-1.5 rounded-full mb-3 inline-block">
              Vantagens Reais
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight mb-3">
              Por que escolher a iGreen Telecom?
            </h2>
            <p className="text-gray-600 text-base">
              Desenvolvida para entregar liberdade, economia e conexão sem interrupções.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-gray-50 border border-gray-200/80 hover:border-green-main/40 transition-all">
              <div className="w-12 h-12 rounded-xl bg-green-main text-white flex items-center justify-center mb-4 shadow-md shadow-green-main/20">
                <Repeat size={24} />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Internet Acumulativa</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Sobrou internet no fim do mês? Ela acumula 100% para o mês seguinte. Você nunca perde o que pagou.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-gray-50 border border-gray-200/80 hover:border-green-main/40 transition-all">
              <div className="w-12 h-12 rounded-xl bg-green-main text-white flex items-center justify-center mb-4 shadow-md shadow-green-main/20">
                <MessageCircle size={24} />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">WhatsApp 100% Livre</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Envie mensagens, fotos, vídeos e faça chamadas de voz e vídeo sem consumir um único mega do seu pacote.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-gray-50 border border-gray-200/80 hover:border-green-main/40 transition-all">
              <div className="w-12 h-12 rounded-xl bg-green-main text-white flex items-center justify-center mb-4 shadow-md shadow-green-main/20">
                <QrCode size={24} />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">eSIM Instantâneo</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Ativação rápida via QR Code diretamente no seu celular ou envio expresso do Chip Físico tradicional.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-gray-50 border border-gray-200/80 hover:border-green-main/40 transition-all">
              <div className="w-12 h-12 rounded-xl bg-green-main text-white flex items-center justify-center mb-4 shadow-md shadow-green-main/20">
                <ShoppingBag size={24} />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">iGreen Club Grátis</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Economize até 70% em farmácias, cinemas, restaurantes e grandes lojas. A economia paga a sua fatura!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. PASSO A PASSO DA PORTABILIDADE */}
      <section className="py-16 bg-gray-50 px-4 border-t border-gray-200">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-xs font-black tracking-widest text-green-dark uppercase bg-green-light/60 px-3.5 py-1.5 rounded-full mb-3 inline-block">
            Sem Complicação
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight mb-8">
            Traga seu número em 3 passos simples
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-green-main text-white font-bold flex items-center justify-center mb-4">
                1
              </div>
              <h4 className="text-base font-bold text-gray-900 mb-1">Escolha seu Plano</h4>
              <p className="text-xs text-gray-600">Selecione a franquia desejada e nos chame no WhatsApp.</p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-green-main text-white font-bold flex items-center justify-center mb-4">
                2
              </div>
              <h4 className="text-base font-bold text-gray-900 mb-1">Ative via eSIM ou Chip</h4>
              <p className="text-xs text-gray-600">Receba o QR Code digital no mesmo dia ou receba o chip em casa.</p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-green-main text-white font-bold flex items-center justify-center mb-4">
                3
              </div>
              <h4 className="text-base font-bold text-gray-900 mb-1">Ganhe +5GB Todo Mês</h4>
              <p className="text-xs text-gray-600">Portabilidade concluída sem ficar sem sinal e com bônus vitalício.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. FAQ OBJETIVO */}
      <section className="py-16 md:py-20 bg-white px-4 border-t border-gray-100">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight mb-2">
              Dúvidas Frequentes
            </h2>
            <p className="text-gray-500 text-sm">
              Tudo o que você precisa saber de forma clara e rápida.
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div 
                  key={idx}
                  className="rounded-2xl border border-gray-200 overflow-hidden bg-white"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full p-4 sm:p-5 text-left font-bold text-gray-900 text-sm sm:text-base flex items-center justify-between gap-4 hover:bg-gray-50 cursor-pointer"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown 
                      size={18} 
                      className={`text-gray-500 transition-transform duration-200 shrink-0 ${isOpen ? "rotate-180 text-green-main" : ""}`} 
                    />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 text-xs sm:text-sm text-gray-600 leading-relaxed border-t border-gray-100 pt-3">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. CTA FINAL DE ALTA CONVERSÃO */}
      <section className="py-16 bg-gradient-to-br from-gray-900 via-green-dark to-gray-950 text-white px-4 text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center mx-auto border border-white/20">
            <Zap size={28} className="text-yellow-solar" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight">
            Pronto para economizar e ter 5G de verdade?
          </h2>
          <p className="text-gray-300 text-base max-w-xl mx-auto">
            Ative agora sua linha com a iGreen Telecom. Portabilidade rápida, sem fidelidade e com +5GB de bônus todo mês.
          </p>
          <div className="pt-2">
            <button
              onClick={() => handleGeneralContact("final_telecom_cta")}
              className="bg-green-main hover:bg-green-dark text-white font-black text-base sm:text-lg px-8 py-4 rounded-2xl shadow-xl shadow-green-main/30 transition-all hover:scale-105 active:scale-95 inline-flex items-center gap-3 cursor-pointer"
            >
              <MessageCircle size={22} className="text-yellow-solar" />
              Contratar no WhatsApp Agora
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
