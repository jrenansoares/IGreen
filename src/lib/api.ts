import { LEAD_WEBHOOK_URL } from "./constants";

export interface LeadData {
  plate: string;
  vehicleType: string;
  name: string;
  whatsapp: string;
}

export const submitLead = async (data: LeadData): Promise<boolean> => {
  console.log("Submitting lead data:", data);
  
  if (!LEAD_WEBHOOK_URL) {
    // DEMO MODE
    console.log("DEMO MODE: Lead successfully registered in console.");
    return new Promise((resolve) => setTimeout(() => resolve(true), 1000));
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
