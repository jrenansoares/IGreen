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
  utms?: UtmParams;
}

export const submitLead = async (data: LeadData): Promise<boolean> => {
  // Webhook submission or DEMO mode fallback
  if (!LEAD_WEBHOOK_URL) {
    // In demo mode, log the structured lead submission
    return new Promise((resolve) => setTimeout(() => resolve(true), 800));
  }

  try {
    const response = await fetch(LEAD_WEBHOOK_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    
    return response.ok;
  } catch (error) {
    console.error("Error submitting lead:", error);
    return false;
  }
};
