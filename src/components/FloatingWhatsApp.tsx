import { MessageCircle } from "lucide-react";
import { trackWhatsAppClick } from "../lib/tracking";
import { WHATSAPP_NUMBER } from "../lib/constants";

export function FloatingWhatsApp() {
  const handleClick = () => {
    trackWhatsAppClick();
    const text = "Olá! Gostaria de falar com um consultor sobre o seguro auto da iGreen Seguros.";
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 pointer-events-none">
      
      {/* Sticky Mobile CTA (Visible only on very small screens if needed, but the WhatsApp button is better) */}
      <button 
        onClick={handleClick}
        className="pointer-events-auto bg-[#25D366] hover:bg-[#1DA851] text-white p-4 md:px-6 md:py-4 rounded-full shadow-2xl flex items-center gap-3 transition-transform hover:scale-105"
        aria-label="Falar com consultor no WhatsApp"
      >
        <MessageCircle size={28} />
        <span className="hidden md:block font-bold text-lg">Falar com consultor</span>
      </button>

    </div>
  );
}
