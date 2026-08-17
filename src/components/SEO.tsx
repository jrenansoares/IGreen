import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  ogType?: "website" | "article";
  ogImage?: string;
  ogTitle?: string;
  ogDescription?: string;
  twitterCard?: "summary" | "summary_large_image";
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
  noindex?: boolean;
  structuredData?: object | object[];
}

const DEFAULT_ORIGIN = "https://igreen.conexoes.workers.dev";
const DEFAULT_OG_IMAGE = `${DEFAULT_ORIGIN}/iGreen%20Verde%20Claro.png`;

function setMetaTag(selector: string, attributeName: string, attributeValue: string, content: string) {
  let element = document.querySelector(selector) as HTMLMetaElement | null;
  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attributeName, attributeValue);
    document.head.appendChild(element);
  }
  element.setAttribute("content", content);
}

function removeMetaTag(selector: string) {
  const element = document.querySelector(selector);
  if (element) {
    element.remove();
  }
}

export function SEO({
  title,
  description,
  canonical,
  ogType = "website",
  ogImage,
  ogTitle,
  ogDescription,
  twitterCard = "summary_large_image",
  twitterTitle,
  twitterDescription,
  twitterImage,
  noindex = false,
  structuredData
}: SEOProps) {
  const location = useLocation();

  useEffect(() => {
    // 1. Atualiza Document Title
    document.title = title;

    // 2. Meta Description
    setMetaTag('meta[name="description"]', "name", "description", description);

    // 3. Robots / Noindex
    if (noindex) {
      setMetaTag('meta[name="robots"]', "name", "robots", "noindex, nofollow");
    } else {
      setMetaTag('meta[name="robots"]', "name", "robots", "index, follow, max-image-preview:large");
    }

    // 4. Canonical Link
    const targetCanonical = canonical || `${DEFAULT_ORIGIN}${location.pathname === "/" ? "" : location.pathname}`;
    let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonicalLink) {
      canonicalLink = document.createElement("link");
      canonicalLink.setAttribute("rel", "canonical");
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute("href", targetCanonical);

    // 5. Open Graph Tags
    const resolvedOgImage = ogImage || DEFAULT_OG_IMAGE;
    const finalOgImage = resolvedOgImage.startsWith("http") ? resolvedOgImage : `${DEFAULT_ORIGIN}${resolvedOgImage.startsWith("/") ? "" : "/"}${resolvedOgImage}`;

    setMetaTag('meta[property="og:title"]', "property", "og:title", ogTitle || title);
    setMetaTag('meta[property="og:description"]', "property", "og:description", ogDescription || description);
    setMetaTag('meta[property="og:url"]', "property", "og:url", targetCanonical);
    setMetaTag('meta[property="og:type"]', "property", "og:type", ogType);
    setMetaTag('meta[property="og:image"]', "property", "og:image", finalOgImage);
    setMetaTag('meta[property="og:site_name"]', "property", "og:site_name", "iGreen");

    // 6. Twitter Card Tags
    const resolvedTwitterImage = twitterImage || resolvedOgImage;
    const finalTwitterImage = resolvedTwitterImage.startsWith("http") ? resolvedTwitterImage : `${DEFAULT_ORIGIN}${resolvedTwitterImage.startsWith("/") ? "" : "/"}${resolvedTwitterImage}`;

    setMetaTag('meta[name="twitter:card"]', "name", "twitter:card", twitterCard);
    setMetaTag('meta[name="twitter:title"]', "name", "twitter:title", twitterTitle || ogTitle || title);
    setMetaTag('meta[name="twitter:description"]', "name", "twitter:description", twitterDescription || ogDescription || description);
    setMetaTag('meta[name="twitter:image"]', "name", "twitter:image", finalTwitterImage);

    // 7. Dynamic JSON-LD Structured Data
    const scriptId = "route-structured-data";
    let scriptElement = document.getElementById(scriptId) as HTMLScriptElement | null;

    if (structuredData) {
      if (!scriptElement) {
        scriptElement = document.createElement("script");
        scriptElement.id = scriptId;
        scriptElement.type = "application/ld+json";
        document.head.appendChild(scriptElement);
      }
      scriptElement.textContent = JSON.stringify(structuredData);
    } else if (scriptElement) {
      scriptElement.remove();
    }

  }, [
    title,
    description,
    canonical,
    ogType,
    ogImage,
    ogTitle,
    ogDescription,
    twitterCard,
    twitterTitle,
    twitterDescription,
    twitterImage,
    noindex,
    structuredData,
    location.pathname
  ]);

  return null;
}
