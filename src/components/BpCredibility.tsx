import { motion } from "motion/react";
import { ShieldCheck, Award, Scale, Check, X, Star } from "lucide-react";

export function BpCredibility() {
  return (
    <section className="py-20 lg:py-24 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-bp-purple/10 text-bp-purple text-xs sm:text-sm font-extrabold mb-3">
            <ShieldCheck size={16} className="text-bp-orange" />
            <span>Segurança Jurídica & Regulamentação</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight mb-4">
            Seguro de verdade. Operado por Seguradora SUSEP.
          </h2>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
            Não arrisque seu patrimônio em soluções sem garantia legal. Conheça a diferença entre um Seguro Auto Oficial e uma associação informal.
          </p>
        </div>

        {/* Comparison Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
          
          {/* BP Seguradora (Official) */}
          <motion.div 
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-b from-green-50/60 to-white p-7 sm:p-9 rounded-3xl border-2 border-green-main/40 shadow-sm relative"
          >
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-green-100">
              <div>
                <span className="text-xs font-black uppercase tracking-wider text-green-dark bg-green-200/60 px-3 py-1 rounded-full">
                  Recomendado • Oficial
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-gray-900 mt-2">
                  iGreen Seguros & BP Seguradora
                </h3>
              </div>
              <div className="h-10 px-3 bg-white rounded-xl border border-gray-200 flex items-center justify-center shrink-0">
                <img 
                  src="/BP - SEGURADORA.webp" 
                  alt="BP Seguradora" 
                  width={800}
                  height={450}
                  loading="lazy"
                  decoding="async"
                  className="max-h-6 max-w-[90px] object-contain"
                  onError={(e) => { e.currentTarget.style.display = 'none'; }}
                />
              </div>
            </div>

            <ul className="space-y-4 text-sm sm:text-base text-gray-700 font-medium">
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-green-100 text-green-700 flex items-center justify-center shrink-0 mt-0.5">
                  <Check size={14} strokeWidth={3} />
                </div>
                <span><strong>Regulamentação SUSEP:</strong> Fiscalizada e autorizada pelo órgão máximo de seguros do Brasil (Código 01546).</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-green-100 text-green-700 flex items-center justify-center shrink-0 mt-0.5">
                  <Check size={14} strokeWidth={3} />
                </div>
                <span><strong>Apólice nominal garantida:</strong> Contrato com valor legal e reservas financeiras auditadas.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-green-100 text-green-700 flex items-center justify-center shrink-0 mt-0.5">
                  <Check size={14} strokeWidth={3} />
                </div>
                <span><strong>Sem fidelidade e mensal:</strong> Liberdade para cancelar a qualquer momento sem penalidades.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-green-100 text-green-700 flex items-center justify-center shrink-0 mt-0.5">
                  <Check size={14} strokeWidth={3} />
                </div>
                <span><strong>Indenização garantida por lei:</strong> Pagamento até 100% da FIPE em caso de sinistro sem rateio surpresa.</span>
              </li>
            </ul>
          </motion.div>

          {/* Associações / Proteção Veicular Informal */}
          <motion.div 
            initial={{ opacity: 0, x: 15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gray-50/80 p-7 sm:p-9 rounded-3xl border border-gray-200/80 shadow-xs relative"
          >
            <div className="mb-6 pb-4 border-b border-gray-200">
              <span className="text-xs font-bold uppercase tracking-wider text-gray-500 bg-gray-200 px-3 py-1 rounded-full">
                Outros Modelos
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-700 mt-2">
                Proteções Veiculares e Associações
              </h3>
            </div>

            <ul className="space-y-4 text-sm sm:text-base text-gray-500">
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-red-100 text-red-600 flex items-center justify-center shrink-0 mt-0.5">
                  <X size={14} strokeWidth={3} />
                </div>
                <span><strong>Não são seguradoras:</strong> Não possuem autorização nem fiscalização da SUSEP.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-red-100 text-red-600 flex items-center justify-center shrink-0 mt-0.5">
                  <X size={14} strokeWidth={3} />
                </div>
                <span><strong>Risco de rateio:</strong> Se houver muitos acidentes no mês, a mensalidade pode subir para cobrir os custos coletivos.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-red-100 text-red-600 flex items-center justify-center shrink-0 mt-0.5">
                  <X size={14} strokeWidth={3} />
                </div>
                <span><strong>Sem garantias de reservas:</strong> Não são obrigadas a manter capital de garantia para pagamento de sinistros.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-red-100 text-red-600 flex items-center justify-center shrink-0 mt-0.5">
                  <X size={14} strokeWidth={3} />
                </div>
                <span><strong>Contratos com fidelidade:</strong> Muitas cobram taxas abusivas ou multas em caso de cancelamento.</span>
              </li>
            </ul>
          </motion.div>

        </div>

        {/* Official Badges Footer */}
        <div className="max-w-3xl mx-auto text-center bg-gray-50 rounded-2xl p-4 sm:p-5 border border-gray-200/80 text-xs sm:text-sm text-gray-600 space-y-1">
          <p className="font-bold text-gray-900">
            Operado por BP Seguradora S.A. • CNPJ 50.180.527/0001-13 • Código SUSEP 01546
          </p>
          <p className="text-gray-500">
            Comercializado por iGreen Seguros. Garantia integral de apólice oficial emitida conforme normas da Superintendência de Seguros Privados.
          </p>
        </div>

      </div>
    </section>
  );
}
