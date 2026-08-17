import { useState, useId } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Zap, 
  Leaf, 
  PiggyBank, 
  ShieldCheck, 
  Sparkles, 
  Check, 
  X, 
  ArrowRight, 
  MessageCircle, 
  Sun, 
  ChevronDown, 
  Building2, 
  Home, 
  TreePine, 
  FileText,
  Clock,
  TrendingDown,
  Award
} from "lucide-react";
import { trackWhatsAppClick, buildWhatsAppMessageWithUtm } from "../lib/tracking";
import { WHATSAPP_NUMBER } from "../lib/constants";

export function Energia() {
  const [billValue, setBillValue] = useState<number>(500);
  const [propertyType, setPropertyType] = useState<"residencial" | "comercial">("residencial");
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const sliderId = useId();

  // Cálculos dinâmicos de economia (média de 15% a 20%)
  const discountRate = propertyType === "comercial" ? 0.18 : 0.15;
  const monthlySavings = billValue * discountRate;
  const annualSavings = monthlySavings * 12;
  const treesEquivalent = Math.max(1, Math.round((billValue * 0.12) / 10));

  // FAQ
  const faqs = [
    {
      q: "Preciso fazer alguma obra, reforma ou instalar placas solares?",
      a: "Não! Absolutamente nada é instalado no seu imóvel e ninguém precisa ir até a sua casa. A iGreen gera energia limpa em fazendas solares próprias e parceiras e injeta diretamente na rede da sua distribuidora local em forma de créditos."
    },
    {
      q: "Posso ficar sem energia se faltar sol ou chover?",
      a: "Nunca! A sua concessionária de energia local (como Enel, Cemig, CPFL, Light, etc.) continua sendo a responsável física pela entrega dos fios e postes até o seu imóvel com a mesma segurança e estabilidade 24 horas por dia."
    },
    {
      q: "Moro de aluguel ou em apartamento. Posso aderir?",
      a: "Sim! Como não exige placas nem obras no telhado, qualquer pessoa ou empresa que tenha uma conta de luz no seu nome pode aderir à energia solar por assinatura, inclusive quem mora em apartamento ou imóvel alugado."
    },
    {
      q: "Existe algum contrato de fidelidade ou taxa de adesão?",
      a: "Zero adesão e zero fidelidade! Você não paga nada para entrar e tem total liberdade para cancelar a qualquer momento sem nenhuma multa rescisória."
    },
    {
      q: "Como recebo o desconto na prática?",
      a: "A energia injetada pela iGreen é convertida em créditos de kWh na sua conta. Você continua pagando as taxas mínimas e iluminação pública à distribuidora e usufrui do desconto garantido sobre a energia que consumiu."
    }
  ];

  const handleSimulateWhatsApp = () => {
    trackWhatsAppClick("energy_simulator_whatsapp");
    const propLabel = propertyType === "comercial" ? "Empresa / Comercial" : "Residencial";
    const baseText = `Olá! Fiz uma simulação de energia solar por assinatura para meu imóvel (${propLabel}) com conta média de R$ ${billValue.toLocaleString("pt-BR")}/mês e gostaria de economizar cerca de R$ ${monthlySavings.toLocaleString("pt-BR", { maximumFractionDigits: 0 })}/mês. Como posso aderir?`;
    const fullText = buildWhatsAppMessageWithUtm(baseText);
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(fullText)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const handleSendBillWhatsApp = (origin: string) => {
    trackWhatsAppClick(origin);
    const baseText = "Olá! Gostaria de enviar uma foto da minha conta de luz para fazer uma análise gratuita de desconto com a iGreen Energy.";
    const fullText = buildWhatsAppMessageWithUtm(baseText);
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(fullText)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const scrollToSimulator = () => {
    const el = document.getElementById("simulador-energia");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className="pt-20 bg-white text-gray-900 overflow-hidden">
      {/* 1. HERO SECTION DE ALTA CONVERSÃO */}
      <section className="relative bg-gradient-to-b from-[#062413] via-[#0A381E] to-[#062413] text-white py-14 md:py-22 px-4 overflow-hidden">
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#00A651_1px,transparent_1px)] [background-size:24px_24px]"></div>
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-green-main/20 blur-[130px] rounded-full pointer-events-none"></div>

        <div className="max-w-6xl mx-auto relative z-10 text-center">
          {/* Badge Oficial */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/15 px-3.5 h-9 rounded-full mb-6 shadow-md"
          >
            <div className="h-6 px-2.5 bg-white rounded-full flex items-center justify-center">
              <img 
                src="/iGreen - Conexão Green.png" 
                alt="iGreen Energy" 
                className="max-h-4 max-w-[110px] w-auto object-contain"
                onError={(e) => { e.currentTarget.style.display = 'none'; }}
              />
            </div>
            <span className="text-xs font-bold text-green-light uppercase tracking-wider">Energia Solar por Assinatura • Sem Obras</span>
          </motion.div>

          {/* Headline Principal */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-6 tracking-tight leading-[1.15]"
          >
            Economize até 20% na sua conta de luz <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-solar via-green-light to-green-main">
              sem gastar 1 centavo com placas
            </span>
          </motion.h1>

          {/* Subtítulo */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="text-base sm:text-lg md:text-xl text-gray-200 mb-8 max-w-3xl mx-auto font-normal leading-relaxed"
          >
            A iGreen conecta seu imóvel a fazendas solares parceiras. A energia limpa é injetada na sua distribuidora e vira <strong className="text-white">desconto automático mensal</strong>. Sem obras, sem investimento e sem fidelidade.
          </motion.p>

          {/* Botões Hero */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          >
            <button
              onClick={scrollToSimulator}
              className="w-full sm:w-auto bg-yellow-solar hover:bg-yellow-400 text-gray-950 text-base sm:text-lg font-black px-8 py-4 rounded-2xl shadow-xl shadow-yellow-solar/20 transition-all hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2.5 cursor-pointer"
            >
              <PiggyBank size={22} />
              Simular Minha Economia Agora
            </button>
            <button
              onClick={() => handleSendBillWhatsApp("hero_send_bill")}
              className="w-full sm:w-auto bg-white/10 hover:bg-white/15 text-white border border-white/20 text-base font-semibold px-6 py-4 rounded-2xl backdrop-blur-md transition-all hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2.5 cursor-pointer"
            >
              <MessageCircle size={20} className="text-[#25D366]" />
              Enviar Conta de Luz no WhatsApp
            </button>
          </motion.div>

          {/* 4 Pilares Rápidos */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-4xl mx-auto pt-6 border-t border-white/10 text-left"
          >
            <div className="p-3.5 rounded-xl bg-white/5 border border-white/5 flex items-center gap-3">
              <Sun size={24} className="text-yellow-solar shrink-0" />
              <div>
                <p className="text-xs text-gray-400 font-medium">Investimento</p>
                <p className="text-sm font-bold text-white">R$ 0 (Zero Custo)</p>
              </div>
            </div>
            <div className="p-3.5 rounded-xl bg-white/5 border border-white/5 flex items-center gap-3">
              <ShieldCheck size={24} className="text-green-main shrink-0" />
              <div>
                <p className="text-xs text-gray-400 font-medium">Instalação</p>
                <p className="text-sm font-bold text-white">Zero Obras no Imóvel</p>
              </div>
            </div>
            <div className="p-3.5 rounded-xl bg-white/5 border border-white/5 flex items-center gap-3">
              <TrendingDown size={24} className="text-yellow-solar shrink-0" />
              <div>
                <p className="text-xs text-gray-400 font-medium">Desconto Real</p>
                <p className="text-sm font-bold text-white">Até 20% Todo Mês</p>
              </div>
            </div>
            <div className="p-3.5 rounded-xl bg-white/5 border border-white/5 flex items-center gap-3">
              <Leaf size={24} className="text-green-main shrink-0" />
              <div>
                <p className="text-xs text-gray-400 font-medium">Contrato</p>
                <p className="text-sm font-bold text-white">Zero Fidelidade</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. SIMULADOR INTERATIVO DE ECONOMIA */}
      <section id="simulador-energia" className="py-16 md:py-24 bg-gray-50 px-4 scroll-mt-20">
        <div className="max-w-5xl mx-auto">
          
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-block text-xs font-black tracking-widest text-green-dark uppercase bg-green-light/60 px-3.5 py-1.5 rounded-full mb-3">
              Calculadora de Economia
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight mb-3">
              Quanto você vai economizar por ano?
            </h2>
            <p className="text-gray-600 text-base">
              Ajuste o valor médio da sua conta atual e veja o impacto financeiro imediato da energia solar por assinatura.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-gray-200 shadow-xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Controles da Simulação */}
              <div className="lg:col-span-6 space-y-6">
                
                {/* Tipo de Imóvel */}
                <div>
                  <label className="text-xs font-bold text-gray-700 uppercase tracking-wider block mb-2">
                    Tipo de Ligação:
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => setPropertyType("residencial")}
                      className={`p-3.5 rounded-xl border font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all cursor-pointer ${
                        propertyType === "residencial"
                          ? "bg-green-dark text-white border-green-dark shadow-sm"
                          : "bg-gray-50 text-gray-700 border-gray-200 hover:bg-gray-100"
                      }`}
                    >
                      <Home size={18} />
                      Residencial (CPF)
                    </button>
                    <button
                      type="button"
                      onClick={() => setPropertyType("comercial")}
                      className={`p-3.5 rounded-xl border font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all cursor-pointer ${
                        propertyType === "comercial"
                          ? "bg-green-dark text-white border-green-dark shadow-sm"
                          : "bg-gray-50 text-gray-700 border-gray-200 hover:bg-gray-100"
                      }`}
                    >
                      <Building2 size={18} />
                      Empresa / CNPJ
                    </button>
                  </div>
                </div>

                {/* Slider da Conta de Luz */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label htmlFor={sliderId} className="text-xs font-bold text-gray-700 uppercase tracking-wider">
                      Valor Médio da Conta de Luz:
                    </label>
                    <span className="text-xl sm:text-2xl font-black text-green-dark">
                      R$ {billValue.toLocaleString("pt-BR")}
                    </span>
                  </div>

                  <input 
                    id={sliderId}
                    type="range"
                    min={150}
                    max={5000}
                    step={50}
                    value={billValue}
                    onChange={(e) => setBillValue(Number(e.target.value))}
                    className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-green-main"
                  />

                  <div className="flex justify-between text-[11px] text-gray-400 mt-1 font-medium">
                    <span>R$ 150</span>
                    <span>R$ 2.500</span>
                    <span>R$ 5.000+</span>
                  </div>
                </div>

                {/* Atalhos Rápidos de Valores */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {[250, 450, 800, 1500, 3000].map((val) => (
                    <button
                      key={val}
                      type="button"
                      onClick={() => setBillValue(val)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-semibold border cursor-pointer transition-all ${
                        billValue === val 
                          ? "bg-green-light text-green-dark border-green-main/30 font-bold" 
                          : "bg-gray-50 text-gray-600 border-gray-200 hover:bg-gray-100"
                      }`}
                    >
                      R$ {val}
                    </button>
                  ))}
                </div>

              </div>

              {/* Card de Resultados da Economia */}
              <div className="lg:col-span-6 bg-gradient-to-br from-gray-900 via-[#0B2416] to-gray-950 text-white rounded-2xl p-6 sm:p-8 border border-white/10 shadow-xl space-y-6">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <span className="text-xs font-bold text-green-main uppercase tracking-wider flex items-center gap-1.5">
                    <Sparkles size={14} className="text-yellow-solar" />
                    Sua Estimativa de Desconto
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full bg-yellow-solar/20 text-yellow-solar text-xs font-extrabold border border-yellow-solar/30">
                    Até {propertyType === "comercial" ? "18%" : "15%"} OFF
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                    <p className="text-xs text-gray-400 mb-1">Economia por Mês</p>
                    <p className="text-2xl sm:text-3xl font-black text-green-light">
                      R$ {monthlySavings.toLocaleString("pt-BR", { maximumFractionDigits: 0 })}
                    </p>
                    <span className="text-[10px] text-gray-400">Todo mês na sua fatura</span>
                  </div>

                  <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                    <p className="text-xs text-gray-400 mb-1">Economia em 1 Ano</p>
                    <p className="text-2xl sm:text-3xl font-black text-yellow-solar">
                      R$ {annualSavings.toLocaleString("pt-BR", { maximumFractionDigits: 0 })}
                    </p>
                    <span className="text-[10px] text-gray-400">Dinheiro livre no seu bolso</span>
                  </div>
                </div>

                {/* Impacto Sustentável */}
                <div className="flex items-center gap-3 p-3 rounded-xl bg-green-main/10 border border-green-main/20 text-xs">
                  <TreePine size={22} className="text-green-main shrink-0" />
                  <span className="text-gray-200">
                    Equivale ao plantio de <strong className="text-white">{treesEquivalent} árvores</strong> e redução direta da pegada de carbono.
                  </span>
                </div>

                {/* Botão de Contratação */}
                <button
                  onClick={handleSimulateWhatsApp}
                  className="w-full bg-green-main hover:bg-green-dark text-white font-bold py-4 px-6 rounded-xl shadow-lg shadow-green-main/25 transition-all hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2 cursor-pointer text-sm sm:text-base"
                >
                  <MessageCircle size={18} className="text-yellow-solar" />
                  Quero Garantir Este Desconto no WhatsApp
                </button>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* 3. COMO FUNCIONA EM 3 PASSOS SIMPLES */}
      <section className="py-16 md:py-20 bg-white px-4">
        <div className="max-w-5xl mx-auto text-center">
          <span className="text-xs font-black tracking-widest text-green-dark uppercase bg-green-light/60 px-3.5 py-1.5 rounded-full mb-3 inline-block">
            Sem Burocracia
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight mb-4">
            Como Funciona a Energia Solar por Assinatura?
          </h2>
          <p className="text-gray-600 text-base max-w-xl mx-auto mb-12">
            O processo é 100% digital e não interfere no fornecimento elétrico do seu imóvel.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            <div className="bg-gray-50 p-8 rounded-3xl border border-gray-200/80 shadow-sm relative hover:border-green-main/40 transition-all">
              <div className="w-12 h-12 rounded-2xl bg-green-main text-white font-black text-xl flex items-center justify-center mb-6 shadow-md shadow-green-main/20">
                1
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Envie sua Conta de Luz</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Você nos envia uma foto recente da sua conta pelo WhatsApp para calcularmos sua cota exata de créditos.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-3xl border border-gray-200/80 shadow-sm relative hover:border-green-main/40 transition-all">
              <div className="w-12 h-12 rounded-2xl bg-green-main text-white font-black text-xl flex items-center justify-center mb-6 shadow-md shadow-green-main/20">
                2
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Conexão à Usina Solar</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                A iGreen conecta sua instalação à usina solar parceira e os créditos de energia são injetados na rede da sua concessionária.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-3xl border border-gray-200/80 shadow-sm relative hover:border-green-main/40 transition-all">
              <div className="w-12 h-12 rounded-2xl bg-green-main text-white font-black text-xl flex items-center justify-center mb-6 shadow-md shadow-green-main/20">
                3
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Desconto Todo Mês</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Os créditos abatem o valor do kWh consumido e você paga até 20% menos todos os meses sem nenhuma dor de cabeça.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. COMPARATIVO: IGREEN VS PAINEL SOLAR TRADICIONAL VS CONCESSIONÁRIA */}
      <section className="py-16 md:py-20 bg-gray-50 px-4 border-t border-gray-200">
        <div className="max-w-5xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-black tracking-widest text-green-dark uppercase bg-green-light/60 px-3.5 py-1.5 rounded-full mb-3 inline-block">
              Comparativo Real
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight mb-3">
              Por que a Assinatura Solar é Mais Inteligente?
            </h2>
            <p className="text-gray-600 text-base">
              Veja a diferença entre ter placas no telhado, continuar pagando a tarifa cheia ou assinar a iGreen Energy.
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-lg border border-gray-200 overflow-hidden">
            <div className="grid grid-cols-3 bg-gray-900 text-white p-4 sm:p-6 text-xs sm:text-sm font-bold tracking-wider uppercase">
              <div>Critério</div>
              <div className="text-center text-green-main flex items-center justify-center gap-1.5">
                <Sparkles size={16} className="hidden sm:inline text-yellow-solar" />
                iGreen Energy
              </div>
              <div className="text-center text-gray-400">Instalação de Placas</div>
            </div>

            <div className="divide-y divide-gray-100 text-xs sm:text-sm">
              <div className="grid grid-cols-3 p-4 sm:p-6 items-center bg-green-light/10">
                <div className="font-bold text-gray-900">Investimento Inicial</div>
                <div className="text-center font-bold text-green-dark flex items-center justify-center gap-1">
                  <Check size={18} className="text-green-main shrink-0" />
                  R$ 0 (Zero)
                </div>
                <div className="text-center text-gray-500">R$ 15.000 a R$ 45.000+</div>
              </div>

              <div className="grid grid-cols-3 p-4 sm:p-6 items-center">
                <div className="font-bold text-gray-900">Obras e Reformas</div>
                <div className="text-center font-bold text-green-dark flex items-center justify-center gap-1">
                  <Check size={18} className="text-green-main shrink-0" />
                  Nenhuma Obra
                </div>
                <div className="text-center text-gray-500">Furos, telhado e fios</div>
              </div>

              <div className="grid grid-cols-3 p-4 sm:p-6 items-center bg-green-light/10">
                <div className="font-bold text-gray-900">Manutenção e Limpeza</div>
                <div className="text-center font-bold text-green-dark flex items-center justify-center gap-1">
                  <Check size={18} className="text-green-main shrink-0" />
                  100% por nossa conta
                </div>
                <div className="text-center text-gray-500">Custo do proprietário</div>
              </div>

              <div className="grid grid-cols-3 p-4 sm:p-6 items-center">
                <div className="font-bold text-gray-900">Imóvel Alugado ou Apto</div>
                <div className="text-center font-bold text-green-dark flex items-center justify-center gap-1">
                  <Check size={18} className="text-green-main shrink-0" />
                  Totalmente Aceito
                </div>
                <div className="text-center text-gray-500">Inviável na maioria</div>
              </div>

              <div className="grid grid-cols-3 p-4 sm:p-6 items-center bg-green-light/10">
                <div className="font-bold text-gray-900">Início da Economia</div>
                <div className="text-center font-bold text-green-dark flex items-center justify-center gap-1">
                  <Check size={18} className="text-green-main shrink-0" />
                  Imediata no ciclo
                </div>
                <div className="text-center text-gray-500">Payback em 4 a 6 anos</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. FAQ OBJETIVO */}
      <section className="py-16 md:py-20 bg-white px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-xs font-black tracking-widest text-green-dark uppercase bg-green-light/60 px-3.5 py-1.5 rounded-full mb-3 inline-block">
              Tire Suas Dúvidas
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight mb-2">
              Perguntas Frequentes
            </h2>
            <p className="text-gray-500 text-sm">
              Tudo o que você precisa saber sobre a energia solar por assinatura da iGreen.
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
      <section className="py-16 bg-gradient-to-br from-[#062413] via-green-dark to-[#062413] text-white px-4 text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center mx-auto border border-white/20">
            <Sun size={28} className="text-yellow-solar" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight">
            Pronto para pagar menos na conta de luz?
          </h2>
          <p className="text-gray-200 text-base max-w-xl mx-auto">
            Envie uma foto da sua conta de luz agora mesmo. Faremos a simulação exata da sua economia sem nenhum compromisso.
          </p>
          <div className="pt-2">
            <button
              onClick={() => handleSendBillWhatsApp("final_energy_cta")}
              className="bg-yellow-solar hover:bg-yellow-400 text-gray-950 font-black text-base sm:text-lg px-8 py-4 rounded-2xl shadow-xl shadow-yellow-solar/20 transition-all hover:scale-105 active:scale-95 inline-flex items-center gap-3 cursor-pointer"
            >
              <MessageCircle size={22} />
              Enviar Conta de Luz no WhatsApp
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
