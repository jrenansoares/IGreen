import { GOOGLE_ANALYTICS_ID, META_PIXEL_ID } from "./constants";

export const trackPageView = () => {
  console.log("Track: Page View");
  // Implement Google Analytics / Meta Pixel page view tracking here
};

export const trackSimulationStart = () => {
  console.log("Track: Simulation Start");
};

export const trackSimulationComplete = () => {
  console.log("Track: Simulation Complete");
};

export const trackLeadSubmit = (leadData: any) => {
  console.log("Track: Lead Submitted", leadData);
};

export const trackWhatsAppClick = () => {
  console.log("Track: WhatsApp Clicked");
};
