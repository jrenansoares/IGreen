import { GOOGLE_ANALYTICS_ID, META_PIXEL_ID } from "./constants";
import { UtmParams } from "./api";

// Declare global types for dataLayer, gtag and fbq
declare global {
  interface Window {
    dataLayer?: Record<string, any>[];
    gtag?: (...args: any[]) => void;
    fbq?: (...args: any[]) => void;
  }
}

const UTM_STORAGE_KEY = "igreen_utm_params";

/**
 * Captures UTM and click-id parameters from the current URL and persists them in storage.
 */
export const captureAndStoreUtms = (): UtmParams => {
  if (typeof window === "undefined") return {};

  try {
    const urlParams = new URLSearchParams(window.location.search);
    const utmKeys = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term", "gclid", "fbclid"];
    const captured: UtmParams = {};

    let hasUtm = false;
    utmKeys.forEach((key) => {
      const val = urlParams.get(key);
      if (val) {
        captured[key] = val;
        hasUtm = true;
      }
    });

    if (hasUtm) {
      sessionStorage.setItem(UTM_STORAGE_KEY, JSON.stringify(captured));
      try {
        localStorage.setItem(UTM_STORAGE_KEY, JSON.stringify(captured));
      } catch {
        // ignore localStorage errors (e.g. private mode limits)
      }
      return captured;
    }

    return getStoredUtms();
  } catch (err) {
    console.warn("Failed to capture UTMs:", err);
    return {};
  }
};

/**
 * Retrieves persisted UTMs from sessionStorage or localStorage.
 */
export const getStoredUtms = (): UtmParams => {
  if (typeof window === "undefined") return {};

  try {
    const fromSession = sessionStorage.getItem(UTM_STORAGE_KEY);
    if (fromSession) {
      return JSON.parse(fromSession);
    }
    const fromLocal = localStorage.getItem(UTM_STORAGE_KEY);
    if (fromLocal) {
      return JSON.parse(fromLocal);
    }
  } catch (err) {
    console.warn("Failed to read stored UTMs:", err);
  }
  return {};
};

/**
 * Builds a clean tracking ref to append to WhatsApp messages.
 */
export const buildWhatsAppMessageWithUtm = (baseMessage: string): string => {
  const utms = getStoredUtms();
  const parts: string[] = [];

  if (utms.utm_source) parts.push(`origem: ${utms.utm_source}`);
  if (utms.utm_campaign) parts.push(`campanha: ${utms.utm_campaign}`);

  if (parts.length > 0) {
    return `${baseMessage}\n\n[Ref: ${parts.join(" | ")}]`;
  }
  return baseMessage;
};

/**
 * Safe helper to push events to GTM / GA4 / Meta Pixel
 */
const sendAnalyticsEvent = (eventName: string, params: Record<string, any> = {}) => {
  if (typeof window === "undefined") return;

  const utms = getStoredUtms();
  const eventPayload = {
    event: eventName,
    ...params,
    ...utms,
    timestamp: new Date().toISOString(),
  };

  // 1. Google Tag Manager Data Layer
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(eventPayload);

  // 2. Google Analytics (gtag) if present
  if (typeof window.gtag === "function") {
    try {
      window.gtag("event", eventName, params);
    } catch {
      // ignore
    }
  }

  // 3. Meta Pixel (fbq) standard mapping
  if (typeof window.fbq === "function") {
    try {
      if (eventName === "page_view") {
        window.fbq("track", "PageView");
      } else if (eventName === "generate_lead") {
        window.fbq("track", "Lead", {
          content_name: params.vehicle_type || "Seguro Auto",
          status: "success",
        });
      } else if (eventName === "contact" || eventName === "whatsapp_click") {
        window.fbq("track", "Contact", {
          content_name: params.origin || "WhatsApp Button",
        });
      } else if (eventName === "simulation_start") {
        window.fbq("trackCustom", "SimulationStart", params);
      }
    } catch {
      // ignore
    }
  }
};

export const trackPageView = (pagePath?: string) => {
  captureAndStoreUtms();
  sendAnalyticsEvent("page_view", {
    page_path: pagePath || (typeof window !== "undefined" ? window.location.pathname : "/"),
    page_title: typeof document !== "undefined" ? document.title : "iGreen Seguros",
  });
};

export const trackSimulationStart = (meta?: { vehicleType?: string }) => {
  sendAnalyticsEvent("simulation_start", {
    vehicle_type: meta?.vehicleType || "CARRO",
  });
};

export const trackSimulationComplete = (meta?: { vehicleType?: string }) => {
  sendAnalyticsEvent("simulation_complete", {
    vehicle_type: meta?.vehicleType || "CARRO",
  });
};

/**
 * Emits lead submission event WITHOUT exposing PII (name/phone) to third-party analytics.
 */
export const trackLeadSubmit = (leadData: { vehicleType: string; plate?: string }) => {
  // Anonymize plate prefix (only 3 letters) to prevent full PII leak to public trackers
  const platePrefix = leadData.plate ? leadData.plate.slice(0, 3) : undefined;

  sendAnalyticsEvent("generate_lead", {
    vehicle_type: leadData.vehicleType,
    plate_prefix: platePrefix,
    lead_category: "seguro_auto",
  });
};

export const trackWhatsAppClick = (origin: string = "floating_button") => {
  sendAnalyticsEvent("contact", {
    origin,
    channel: "whatsapp",
  });
};
