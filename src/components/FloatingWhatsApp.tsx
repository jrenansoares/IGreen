import { MessageCircle } from "lucide-react";
import { trackWhatsAppClick, buildWhatsAppMessageWithUtm } from "../lib/tracking";
import { WHATSAPP_NUMBER } from "../lib/constants";

export function FloatingWhatsApp() {
  const handleClick = () => {
    trackWhatsAppClick("floating_button");
    const baseText = "Olá! Gostaria de falar com um consultor sobre o seguro auto da iGreen Seguros.";
    const fullText = buildWhatsAppMessageWithUtm(baseText);
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(fullText)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 pointer-events-none">
      <button 
        type="button"
        onClick={handleClick}
        className="pointer-events-auto bg-[#25D366] hover:bg-[#1DA851] text-white p-4 md:px-6 md:py-4 rounded-full shadow-2xl flex items-center gap-3 transition-transform hover:scale-105 active:scale-95 cursor-pointer min-w-[56px] min-h-[56px] justify-center"
        aria-label="Falar com consultor no WhatsApp"
      >
        <MessageCircle size={28} className="shrink-0" />
        <span className="hidden md:block font-bold text-lg">Falar com consultor</span>
      </button>
    </div>
  );
}
