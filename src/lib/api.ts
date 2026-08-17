import { LEAD_WEBHOOK_URL } from "./constants";

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
  emailSentToAdmin?: boolean;
  emailSentToCustomer?: boolean;
  recipientEmail?: string;
  message?: string;
}

export const submitLead = async (data: LeadData): Promise<SubmitLeadResponse> => {
  try {
    const response = await fetch("/api/send-quote-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      const result = await response.json();
      return {
        success: true,
        emailSentToAdmin: result.emailSentToAdmin,
        emailSentToCustomer: result.emailSentToCustomer,
        recipientEmail: result.recipientEmail,
        message: result.message,
      };
    }
  } catch (error) {
    console.error("Erro ao chamar API /api/send-quote-email:", error);
  }

  // Fallback se webhook adicional configurado
  if (LEAD_WEBHOOK_URL) {
    try {
      await fetch(LEAD_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
    } catch (e) {
      console.warn("Webhook secundário falhou:", e);
    }
  }

  return { success: true, message: "Simulação registrada com sucesso!" };
};

