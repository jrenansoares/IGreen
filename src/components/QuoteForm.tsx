import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Loader2, CheckCircle2, AlertCircle, ArrowRight, Car, ShieldCheck, Truck } from "lucide-react";
import { formatPhone, formatPlate } from "../lib/utils";
import { submitLead, LeadData } from "../lib/api";
import { trackSimulationStart, trackSimulationComplete, trackLeadSubmit, trackWhatsAppClick } from "../lib/tracking";
import { WHATSAPP_NUMBER, CONSULTANT_NAME } from "../lib/constants";

type Step = "SIMULATION" | "PROCESSING" | "LEAD_CAPTURE" | "SUCCESS";

export function QuoteForm() {
  const [step, setStep] = useState<Step>("SIMULATION");
  const [formData, setFormData] = useState<LeadData>({
    plate: "",
    vehicleType: "CARRO",
    name: "",
    whatsapp: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handlePlateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, plate: formatPlate(e.target.value) });
    if (errors.plate) setErrors({ ...errors, plate: "" });
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, whatsapp: formatPhone(e.target.value) });
    if (errors.whatsapp) setErrors({ ...errors, whatsapp: "" });
  };

  const validateSimulation = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.plate || formData.plate.length < 8) newErrors.plate = "Informe uma placa válida (ex: ABC-1234).";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateLead = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name?.trim()) newErrors.name = "Informe seu nome.";
    if (!formData.whatsapp || formData.whatsapp.length < 14) newErrors.whatsapp = "WhatsApp inválido.";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSimulationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateSimulation()) return;
    
    trackSimulationStart();
    setStep("PROCESSING");
    
    // Simulate API call to fetch vehicle data by plate
    setTimeout(() => {
      trackSimulationComplete();
      setStep("LEAD_CAPTURE");
    }, 2000);
  };

  const handleLeadSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateLead()) return;
    
    setStep("PROCESSING");
    const success = await submitLead(formData);
    
    if (success) {
      trackLeadSubmit(formData);
      setStep("SUCCESS");
    } else {
      setStep("LEAD_CAPTURE");
      setErrors({ submit: "Ocorreu um erro. Tente novamente." });
    }
  };

  const handleWhatsAppClick = () => {
    trackWhatsAppClick();
    const text = `Olá! Acabei de fazer uma cotação no site da iGreen Seguros para a placa ${formData.plate} e gostaria de finalizar a contratação. Meu nome é ${formData.name}.`;
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  };

  return (
    <section id="cotacao" className="py-24 bg-bp-purple relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-bp-orange/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
      
      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white mb-6 border border-white/20 backdrop-blur-sm">
            <ShieldCheck size={18} />
            <span className="font-semibold text-sm">Cotação 100% Online e Gratuita</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
            Descubra o valor do seu seguro agora mesmo
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Sem burocracia, sem análise de perfil. Informe a placa do seu veículo e saiba quanto custa se proteger.
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
                className="space-y-8"
              >
                <div>
                  <label className="block text-sm font-bold text-green-dark mb-3 text-center uppercase tracking-wider">Qual o tipo de veículo?</label>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, vehicleType: "CARRO" })}
                      className={`flex-1 py-4 rounded-xl border-2 font-bold transition-all flex flex-col items-center gap-2 ${formData.vehicleType === "CARRO" ? 'border-green-main bg-green-light text-green-dark shadow-sm' : 'border-gray-200 text-text-dark/50 hover:border-gray-300'}`}
                    >
                      <Car size={32} />
                      CARRO
                    </button>
                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, vehicleType: "MOTO" })}
                      className={`flex-1 py-4 rounded-xl border-2 font-bold transition-all flex flex-col items-center gap-2 ${formData.vehicleType === "MOTO" ? 'border-green-main bg-green-light text-green-dark shadow-sm' : 'border-gray-200 text-text-dark/50 hover:border-gray-300'}`}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 16A3 3 0 1 0 5 22 3 3 0 1 0 5 16Z"/><path d="M19 16A3 3 0 1 0 19 22 3 3 0 1 0 19 16Z"/><path d="m10.5 9 1.5 3h4.5"/><path d="m6 8 2.5 4h3.5"/><path d="M15 9V4a2 2 0 0 1 2-2h1"/><path d="M5 8h4"/></svg>
                      MOTO
                    </button>
                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, vehicleType: "CAMINHÃO" })}
                      className={`flex-1 py-4 rounded-xl border-2 font-bold transition-all flex flex-col items-center gap-2 ${formData.vehicleType === "CAMINHÃO" ? 'border-green-main bg-green-light text-green-dark shadow-sm' : 'border-gray-200 text-text-dark/50 hover:border-gray-300'}`}
                    >
                      <Truck size={32} />
                      CAMINHÃO
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-green-dark mb-3 text-center uppercase tracking-wider">Digite a placa do veículo</label>
                  <input 
                    type="text"
                    value={formData.plate}
                    onChange={handlePlateChange}
                    placeholder="ABC-1234"
                    maxLength={8}
                    className={`w-full px-4 py-5 text-center text-3xl tracking-[0.2em] uppercase rounded-xl border-2 ${errors.plate ? 'border-red-500' : 'border-gray-200 focus:border-green-main'} font-extrabold outline-none transition-colors shadow-inner bg-gray-50`}
                  />
                  {errors.plate && <p className="text-red-500 text-sm mt-2 flex items-center justify-center gap-1"><AlertCircle size={14}/> {errors.plate}</p>}
                </div>

                <button 
                  type="submit"
                  className="w-full bg-bp-orange hover:bg-bp-orange/90 text-white py-5 rounded-xl font-bold text-xl transition-all shadow-lg hover:shadow-xl mt-4 flex items-center justify-center gap-2"
                >
                  VER VALOR DO SEGURO <ArrowRight size={24} />
                </button>
              </motion.form>
            )}

            {/* STEP 2: PROCESSING */}
            {step === "PROCESSING" && (
              <motion.div 
                key="processing"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="flex flex-col items-center justify-center py-12 text-center"
              >
                <Loader2 size={48} className="text-green-main animate-spin mb-6" />
                <h3 className="text-2xl font-bold text-green-dark mb-2">Buscando dados na Tabela FIPE...</h3>
                <p className="text-text-dark/70">Calculando a melhor condição para o seu veículo.</p>
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
                className="space-y-6"
              >
                <div className="text-center mb-8 bg-green-light p-6 rounded-2xl border border-green-main/20">
                  <h3 className="text-2xl font-bold text-green-dark mb-3">Veículo Encontrado!</h3>
                  <p className="text-text-dark font-medium leading-relaxed">
                    Temos uma excelente proposta de proteção para a placa <span className="font-bold text-green-dark">{formData.plate}</span>.
                  </p>
                  <p className="text-sm text-text-dark/70 mt-3">
                    Para visualizar os valores e coberturas, informe seus dados de contato:
                  </p>
                </div>

                <div>
                  <label className="block text-sm font-bold text-green-dark mb-2">Seu Nome</label>
                  <input 
                    type="text"
                    value={formData.name}
                    onChange={(e) => {
                      setFormData({ ...formData, name: e.target.value });
                      if (errors.name) setErrors({ ...errors, name: "" });
                    }}
                    placeholder="Como gostaria de ser chamado?"
                    className={`w-full px-4 py-4 rounded-xl border-2 ${errors.name ? 'border-red-500' : 'border-gray-200 focus:border-green-main'} text-lg font-medium outline-none transition-colors`}
                  />
                  {errors.name && <p className="text-red-500 text-sm mt-1 flex items-center gap-1"><AlertCircle size={14}/> {errors.name}</p>}
                </div>

                <div>
                  <label className="block text-sm font-bold text-green-dark mb-2">WhatsApp</label>
                  <input 
                    type="tel"
                    value={formData.whatsapp}
                    onChange={handlePhoneChange}
                    placeholder="(00) 00000-0000"
                    className={`w-full px-4 py-4 rounded-xl border-2 ${errors.whatsapp ? 'border-red-500' : 'border-gray-200 focus:border-green-main'} text-lg font-medium outline-none transition-colors`}
                  />
                  {errors.whatsapp && <p className="text-red-500 text-sm mt-1 flex items-center gap-1"><AlertCircle size={14}/> {errors.whatsapp}</p>}
                </div>
                
                {errors.submit && <p className="text-red-500 text-center font-medium p-3 bg-red-50 rounded-lg">{errors.submit}</p>}

                <button 
                  type="submit"
                  className="w-full bg-bp-orange hover:bg-bp-orange/90 text-white py-5 rounded-xl font-bold text-xl transition-all shadow-lg hover:shadow-xl mt-6 flex items-center justify-center gap-2"
                >
                  VER PROPOSTA COMPLETA <ArrowRight size={24} />
                </button>
                <p className="text-xs text-center text-gray-400 mt-4">Seus dados estão seguros. Ao continuar, você concorda com nossos termos de privacidade.</p>
              </motion.form>
            )}

            {/* STEP 4: SUCCESS */}
            {step === "SUCCESS" && (
              <motion.div 
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center py-8 text-center"
              >
                <div className="w-20 h-20 bg-green-light rounded-full flex items-center justify-center mb-6">
                  <CheckCircle2 size={40} className="text-green-main" />
                </div>
                <h3 className="text-3xl font-extrabold text-green-dark mb-4">Tudo pronto!</h3>
                <p className="text-lg text-text-dark/80 mb-8 max-w-md leading-relaxed">
                  Sua proposta já foi gerada e está pronta para ser finalizada. Fale agora mesmo com nosso time no WhatsApp para ativar sua proteção.
                </p>
                
                <button 
                  onClick={handleWhatsAppClick}
                  className="w-full bg-[#25D366] hover:bg-[#1DA851] text-white py-5 px-6 rounded-xl font-bold text-lg md:text-xl transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-3"
                >
                  {/* Custom WhatsApp Icon */}
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                  ATIVAR PROTEÇÃO NO WHATSAPP
                </button>
              </motion.div>
            )}

          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
