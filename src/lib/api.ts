import { LEAD_WEBHOOK_URL, WHATSAPP_NUMBER } from "./constants";

export interface UtmParams {
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_content?: string;
  utm_term?: string;
  gclid?: string;
  fbclid?: string;
  [key: string]: string | undefined;
}

export interface LeadData {
  plate: string;
  vehicleType: string;
  name: string;
  whatsapp: string;
  email?: string;
  planName?: string;
  estimatedPrice?: string;
  utms?: UtmParams;
}

export interface SubmitLeadResponse {
  success: boolean;
  recipientEmail?: string;
  message?: string;
}

export const submitLead = async (data: LeadData): Promise<SubmitLeadResponse> => {
  const cleanPhone = data.whatsapp.replace(/\D/g, "");
  const waUrl = `https://wa.me/55${cleanPhone}?text=${encodeURIComponent(`Olá ${data.name}! Recebi sua cotação de seguro para a placa ${data.plate} (${data.vehicleType}). Vamos finalizar sua apólice?`)}`;

  // Payload formatado e intuitivo para o Make.com (e-mail, Google Sheets, CRM)
  const makePayload = {
    evento: "nova_simulacao_seguro",
    placa: data.plate.toUpperCase(),
    tipo_veiculo: data.vehicleType,
    nome_cliente: data.name,
    whatsapp_cliente: data.whatsapp,
    email_cliente: data.email || "Não informado",
    link_whatsapp_cliente: waUrl,
    whatsapp_consultor: WHATSAPP_NUMBER,
    data_hora: new Date().toLocaleString("pt-BR", { timeZone: "America/Sao_Paulo" }),
    utm_source: data.utms?.utm_source || "Site iGreen Seguros",
    utm_medium: data.utms?.utm_medium || "",
    utm_campaign: data.utms?.utm_campaign || "",
    utm_content: data.utms?.utm_content || "",
    utm_term: data.utms?.utm_term || "",
    gclid: data.utms?.gclid || "",
    fbclid: data.utms?.fbclid || "",
  };

  // 1. Envia diretamente para o Make.com (funciona no Cloudflare Pages e qualquer hospedagem)
  if (LEAD_WEBHOOK_URL) {
    try {
      await fetch(LEAD_WEBHOOK_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(makePayload),
      });
      console.log("✅ Cotação enviada com sucesso para o Webhook do Make.com!");
    } catch (e) {
      console.warn("Aviso no envio do webhook:", e);
    }
  }

  // 2. Se houver servidor local/Node ativo
  try {
    fetch("/api/send-quote-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    }).catch(() => {});
  } catch {
    // Silencioso em caso de hospedagem 100% estática
  }

  return { 
    success: true, 
    recipientEmail: "jrenansoares@gmail.com",
    message: "Simulação registrada e enviada para o Make.com!" 
  };
};
