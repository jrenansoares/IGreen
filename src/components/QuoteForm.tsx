import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Loader2, CheckCircle2, AlertCircle, ArrowRight, Car, ShieldCheck, Truck, Mail, Send } from "lucide-react";
import { formatPhone, formatPlate, isValidPlate, isValidPhone } from "../lib/utils";
import { submitLead, LeadData, SubmitLeadResponse } from "../lib/api";
import { trackSimulationStart, trackSimulationComplete, trackLeadSubmit, trackWhatsAppClick } from "../lib/tracking";
import { WHATSAPP_NUMBER } from "../lib/constants";
import { getStoredUtms, buildWhatsAppMessageWithUtm } from "../lib/tracking";

type Step = "SIMULATION" | "PROCESSING" | "LEAD_CAPTURE" | "SUCCESS";

export function QuoteForm() {
  const [step, setStep] = useState<Step>("SIMULATION");
  const [formData, setFormData] = useState<LeadData>({
    plate: "",
    vehicleType: "CARRO",
    name: "",
    whatsapp: "",
    email: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitResult, setSubmitResult] = useState<SubmitLeadResponse | null>(null);

  const handlePlateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPlate(e.target.value);
    setFormData((prev) => ({ ...prev, plate: formatted }));
    if (errors.plate) setErrors((prev) => ({ ...prev, plate: "" }));
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhone(e.target.value);
    setFormData((prev) => ({ ...prev, whatsapp: formatted }));
    if (errors.whatsapp) setErrors((prev) => ({ ...prev, whatsapp: "" }));
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setFormData((prev) => ({ ...prev, name: val }));
    if (errors.name) setErrors((prev) => ({ ...prev, name: "" }));
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setFormData((prev) => ({ ...prev, email: val }));
    if (errors.email) setErrors((prev) => ({ ...prev, email: "" }));
  };

  const validateSimulation = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.plate || !isValidPlate(formData.plate)) {
      newErrors.plate = "Informe uma placa válida (ex: ABC-1234 ou ABC1D23).";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateLead = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name || formData.name.trim().length < 2) {
      newErrors.name = "Informe seu nome completo ou primeiro nome.";
    }
    if (!formData.whatsapp || !isValidPhone(formData.whatsapp)) {
      newErrors.whatsapp = "Informe um WhatsApp válido com DDD (ex: (11) 98888-7777).";
    }
    if (formData.email && formData.email.trim().length > 0 && !formData.email.includes("@")) {
      newErrors.email = "Informe um endereço de e-mail válido.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSimulationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateSimulation()) return;

    trackSimulationStart({
      vehicleType: formData.vehicleType,
    });
    setStep("PROCESSING");

    // Simulando busca na base veicular
    setTimeout(() => {
      trackSimulationComplete({
        vehicleType: formData.vehicleType,
      });
      setStep("LEAD_CAPTURE");
    }, 1500);
  };

  const handleLeadSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateLead()) return;

    setIsSubmitting(true);
    const utms = getStoredUtms();
    const payload: LeadData = {
      ...formData,
      utms,
    };

    const response = await submitLead(payload);
    setIsSubmitting(false);

    if (response.success) {
      trackLeadSubmit(payload);
      setSubmitResult(response);
      setStep("SUCCESS");
    } else {
      setErrors({ submit: "Ocorreu um erro ao registrar sua solicitação. Tente novamente ou use o WhatsApp." });
    }
  };

  const handleWhatsAppClick = () => {
    trackWhatsAppClick("pos_cotacao");
    const emailInfo = formData.email ? ` (E-mail: ${formData.email})` : "";
    const baseMessage = `Olá! Acabei de fazer uma cotação no site da iGreen Seguros para a placa ${formData.plate} (${formData.vehicleType}) e gostaria de finalizar a contratação do meu seguro. Meu nome é ${formData.name}${emailInfo}.`;
    const fullMessage = buildWhatsAppMessageWithUtm(baseMessage);
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(fullMessage)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="cotacao" className="py-20 lg:py-24 bg-bp-purple relative overflow-hidden">
      {/* Background decoration */}
      <div 
        aria-hidden="true" 
        className="absolute top-0 right-0 w-[800px] h-[800px] bg-bp-orange/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none"
      />

      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <div className="text-center mb-10 md:mb-12">
          <div className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white mb-5 border border-white/20 backdrop-blur-sm">
            <ShieldCheck size={18} className="text-bp-orange shrink-0" />
            <span className="font-semibold text-sm">Cotação de Seguro 100% Online e Gratuita</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-5 leading-tight tracking-tight">
            Descubra o valor do seu seguro agora mesmo
          </h2>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
            Sem burocracia, sem análise de perfil. Informe a placa do seu veículo e receba sua proposta de seguro auto em instantes.
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-2xl p-6 md:p-10 max-w-2xl mx-auto border border-gray-100">
          <AnimatePresence mode="wait">
            
            {/* STEP 1: SIMULATION */}
            {step === "SIMULATION" && (
              <motion.form 
                key="simulation"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                onSubmit={handleSimulationSubmit}
                className="space-y-7"
                noValidate
              >
                <div>
                  <label className="block text-sm font-bold text-green-dark mb-3 text-center uppercase tracking-wider">
                    Qual o tipo de veículo?
                  </label>
                  <div className="grid grid-cols-3 gap-2 sm:gap-4">
                    <button
                      type="button"
                      onClick={() => setFormData((prev) => ({ ...prev, vehicleType: "CARRO" }))}
                      className={`min-h-[56px] py-3.5 px-2 rounded-xl border-2 font-bold transition-all flex flex-col items-center justify-center gap-1.5 cursor-pointer ${
                        formData.vehicleType === "CARRO" 
                          ? 'border-green-main bg-green-light text-green-dark shadow-sm ring-2 ring-green-main/20' 
                          : 'border-gray-200 text-text-dark/60 hover:border-gray-300 bg-white'
                      }`}
                    >
                      <Car size={26} />
                      <span className="text-xs sm:text-sm">CARRO</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setFormData((prev) => ({ ...prev, vehicleType: "MOTO" }))}
                      className={`min-h-[56px] py-3.5 px-2 rounded-xl border-2 font-bold transition-all flex flex-col items-center justify-center gap-1.5 cursor-pointer ${
                        formData.vehicleType === "MOTO" 
                          ? 'border-green-main bg-green-light text-green-dark shadow-sm ring-2 ring-green-main/20' 
                          : 'border-gray-200 text-text-dark/60 hover:border-gray-300 bg-white'
                      }`}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 16A3 3 0 1 0 5 22 3 3 0 1 0 5 16Z"/>
                        <path d="M19 16A3 3 0 1 0 19 22 3 3 0 1 0 19 16Z"/>
                        <path d="m10.5 9 1.5 3h4.5"/>
                        <path d="m6 8 2.5 4h3.5"/>
                        <path d="M15 9V4a2 2 0 0 1 2-2h1"/>
                        <path d="M5 8h4"/>
                      </svg>
                      <span className="text-xs sm:text-sm">MOTO</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setFormData((prev) => ({ ...prev, vehicleType: "CAMINHÃO" }))}
                      className={`min-h-[56px] py-3.5 px-2 rounded-xl border-2 font-bold transition-all flex flex-col items-center justify-center gap-1.5 cursor-pointer ${
                        formData.vehicleType === "CAMINHÃO" 
                          ? 'border-green-main bg-green-light text-green-dark shadow-sm ring-2 ring-green-main/20' 
                          : 'border-gray-200 text-text-dark/60 hover:border-gray-300 bg-white'
                      }`}
                    >
                      <Truck size={26} />
                      <span className="text-xs sm:text-sm">CAMINHÃO</span>
                    </button>
                  </div>
                </div>

                <div>
                  <label htmlFor="input-placa" className="block text-sm font-bold text-green-dark mb-2 text-center uppercase tracking-wider">
                    Digite a placa do veículo
                  </label>
                  <input 
                    id="input-placa"
                    name="plate"
                    type="text"
                    inputMode="text"
                    autoCapitalize="characters"
                    autoCorrect="off"
                    spellCheck="false"
                    value={formData.plate}
                    onChange={handlePlateChange}
                    placeholder="ABC-1234"
                    maxLength={8}
                    className={`w-full px-4 py-4 text-center text-2xl sm:text-3xl tracking-[0.2em] uppercase rounded-xl border-2 ${
                      errors.plate ? 'border-red-500 bg-red-50/30' : 'border-gray-200 focus:border-green-main focus:bg-white'
                    } font-extrabold outline-none transition-colors shadow-inner bg-gray-50`}
                    aria-required="true"
                    aria-invalid={!!errors.plate}
                    aria-describedby={errors.plate ? "plate-error" : undefined}
                  />
                  {errors.plate && (
                    <p id="plate-error" className="text-red-600 text-sm mt-2 flex items-center justify-center gap-1 font-medium">
                      <AlertCircle size={15} className="shrink-0" /> {errors.plate}
                    </p>
                  )}
                </div>

                <button 
                  type="submit"
                  className="w-full bg-bp-orange hover:bg-bp-orange/90 text-white min-h-[56px] py-4 px-6 rounded-xl font-bold text-lg sm:text-xl transition-all shadow-lg hover:shadow-xl active:scale-[0.99] flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>VER VALOR DO SEGURO</span>
                  <ArrowRight size={22} />
                </button>
              </motion.form>
            )}

            {/* STEP 2: PROCESSING */}
            {step === "PROCESSING" && (
              <motion.div 
                key="processing"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="flex flex-col items-center justify-center py-10 text-center"
              >
                <Loader2 size={46} className="text-green-main animate-spin mb-5" />
                <h3 className="text-2xl font-bold text-green-dark mb-2">Consultando tabela veicular...</h3>
                <p className="text-text-dark/70 text-sm sm:text-base">Localizando as melhores condições de seguro para o seu veículo.</p>
              </motion.div>
            )}

            {/* STEP 3: LEAD CAPTURE */}
            {step === "LEAD_CAPTURE" && (
              <motion.form 
                key="lead"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                onSubmit={handleLeadSubmit}
                className="space-y-5"
                noValidate
              >
                <div className="text-center mb-6 bg-green-light p-5 rounded-2xl border border-green-main/20">
                  <h3 className="text-xl sm:text-2xl font-bold text-green-dark mb-2">Veículo Encontrado!</h3>
                  <p className="text-text-dark font-medium text-sm sm:text-base">
                    Temos uma proposta de seguro auto personalizada para a placa <strong className="text-green-dark font-black">{formData.plate}</strong>.
                  </p>
                  <p className="text-xs sm:text-sm text-text-dark/70 mt-2">
                    Informe seu nome e WhatsApp para visualizar valores e coberturas:
                  </p>
                </div>

                <div>
                  <label htmlFor="input-nome" className="block text-sm font-bold text-green-dark mb-1.5">
                    Seu Nome
                  </label>
                  <input 
                    id="input-nome"
                    name="name"
                    type="text"
                    autoComplete="name"
                    autoCapitalize="words"
                    value={formData.name}
                    onChange={handleNameChange}
                    placeholder="Como gostaria de ser chamado?"
                    className={`w-full px-4 py-3.5 rounded-xl border-2 ${
                      errors.name ? 'border-red-500 bg-red-50/30' : 'border-gray-200 focus:border-green-main'
                    } text-base font-medium outline-none transition-colors`}
                    aria-required="true"
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? "name-error" : undefined}
                  />
                  {errors.name && (
                    <p id="name-error" className="text-red-600 text-sm mt-1.5 flex items-center gap-1 font-medium">
                      <AlertCircle size={14} className="shrink-0" /> {errors.name}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="input-whatsapp" className="block text-sm font-bold text-green-dark mb-1.5">
                    WhatsApp (com DDD)
                  </label>
                  <input 
                    id="input-whatsapp"
                    name="whatsapp"
                    type="tel"
                    inputMode="tel"
                    autoComplete="tel"
                    value={formData.whatsapp}
                    onChange={handlePhoneChange}
                    placeholder="(11) 99999-9999"
                    className={`w-full px-4 py-3.5 rounded-xl border-2 ${
                      errors.whatsapp ? 'border-red-500 bg-red-50/30' : 'border-gray-200 focus:border-green-main'
                    } text-base font-medium outline-none transition-colors`}
                    aria-required="true"
                    aria-invalid={!!errors.whatsapp}
                    aria-describedby={errors.whatsapp ? "whatsapp-error" : undefined}
                  />
                  {errors.whatsapp && (
                    <p id="whatsapp-error" className="text-red-600 text-sm mt-1.5 flex items-center gap-1 font-medium">
                      <AlertCircle size={14} className="shrink-0" /> {errors.whatsapp}
                    </p>
                  )}
                </div>

                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <label htmlFor="input-email" className="block text-sm font-bold text-green-dark">
                      Seu E-mail
                    </label>
                    <span className="text-xs text-gray-500 font-medium">(Opcional para receber cópia)</span>
                  </div>
                  <div className="relative">
                    <input 
                      id="input-email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      value={formData.email || ""}
                      onChange={handleEmailChange}
                      placeholder="seuemail@exemplo.com"
                      className={`w-full pl-11 pr-4 py-3.5 rounded-xl border-2 ${
                        errors.email ? 'border-red-500 bg-red-50/30' : 'border-gray-200 focus:border-green-main'
                      } text-base font-medium outline-none transition-colors`}
                      aria-invalid={!!errors.email}
                      aria-describedby={errors.email ? "email-error" : undefined}
                    />
                    <Mail size={18} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
                  </div>
                  {errors.email && (
                    <p id="email-error" className="text-red-600 text-sm mt-1.5 flex items-center gap-1 font-medium">
                      <AlertCircle size={14} className="shrink-0" /> {errors.email}
                    </p>
                  )}
                </div>
                
                {errors.submit && (
                  <p className="text-red-600 text-center font-medium p-3 bg-red-50 rounded-lg text-sm">
                    {errors.submit}
                  </p>
                )}

                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-bp-orange hover:bg-bp-orange/90 text-white min-h-[56px] py-4 px-6 rounded-xl font-bold text-lg sm:text-xl transition-all shadow-lg hover:shadow-xl active:scale-[0.99] mt-4 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 size={22} className="animate-spin" />
                      <span>PROCESSANDO E ENVIANDO COTAÇÃO...</span>
                    </>
                  ) : (
                    <>
                      <span>VER PROPOSTA & ENVIAR COTAÇÃO</span>
                      <ArrowRight size={22} />
                    </>
                  )}
                </button>
                <p className="text-xs text-center text-gray-400 mt-3 leading-relaxed">
                  Seus dados estão protegidos conforme a LGPD. Ao continuar, você concorda com nossos Termos de Uso e Política de Privacidade.
                </p>
              </motion.form>
            )}

            {/* STEP 4: SUCCESS */}
            {step === "SUCCESS" && (
              <motion.div 
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center py-4 text-center"
              >
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-green-light rounded-full flex items-center justify-center mb-4 border-2 border-green-main/30">
                  <CheckCircle2 size={38} className="text-green-main" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-green-dark mb-2">Simulação Realizada!</h3>
                <p className="text-base sm:text-lg text-text-dark/80 mb-5 max-w-md leading-relaxed">
                  Sua proposta para a placa <strong className="text-green-dark">{formData.plate}</strong> foi gerada com sucesso.
                </p>

                {/* Notificação de Envio por E-mail */}
                <div className="w-full bg-gray-50 rounded-2xl p-4 mb-6 border border-gray-200/80 text-left text-xs sm:text-sm space-y-2">
                  <div className="flex items-center gap-2 font-bold text-gray-900">
                    <Send size={16} className="text-green-main shrink-0" />
                    <span>Notificação Automática Disparada:</span>
                  </div>
                  <div className="text-gray-600 pl-6 space-y-1">
                    <p>• Dados da cotação enviados para o consultor responsável (<strong className="text-gray-900">{submitResult?.recipientEmail || "jrenansoares@gmail.com"}</strong>).</p>
                    {formData.email && (
                      <p>• Cópia de confirmação enviada para <strong className="text-gray-900">{formData.email}</strong>.</p>
                    )}
                  </div>
                </div>
                
                <button 
                  onClick={handleWhatsAppClick}
                  className="w-full bg-[#25D366] hover:bg-[#1DA851] text-white min-h-[56px] py-4 px-6 rounded-xl font-bold text-lg md:text-xl transition-all shadow-lg hover:shadow-xl active:scale-[0.99] flex items-center justify-center gap-3 cursor-pointer"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                  <span>CONTRATAR SEGURO NO WHATSAPP</span>
                </button>
              </motion.div>
            )}

          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
