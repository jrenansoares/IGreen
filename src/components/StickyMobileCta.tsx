import { useEffect, useState } from "react";
import { ArrowRight, ShieldCheck } from "lucide-react";

export function StickyMobileCta() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Exibe a barra sticky quando o usuário rola além de 350px
      const formElement = document.getElementById("cotacao");
      const formTop = formElement ? formElement.getBoundingClientRect().top : 1000;
      
      // Se estiver muito próximo ou dentro do formulário, oculta para não poluir
      if (window.scrollY > 350 && (formTop > 100 || formTop < -500)) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToForm = () => {
    document.getElementById("cotacao")?.scrollIntoView({ behavior: "smooth" });
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-gray-200/90 p-3 px-4 shadow-2xl md:hidden transition-all duration-300 animate-in slide-in-from-bottom-5">
      <div className="flex items-center justify-between gap-3 max-w-md mx-auto">
        <div className="min-w-0 pr-1">
          <p className="text-xs font-black text-gray-900 leading-tight truncate">
            Seguro Auto Mensal
          </p>
          <p className="text-[11px] text-green-dark font-bold leading-tight truncate flex items-center gap-1 mt-0.5">
            <ShieldCheck size={12} className="shrink-0 text-green-main" />
            <span>Sem fidelidade • SUSEP</span>
          </p>
        </div>

        <button
          onClick={scrollToForm}
          className="bg-bp-orange hover:bg-bp-orange/90 active:scale-95 text-white font-black text-xs sm:text-sm px-4 py-2.5 rounded-xl shadow-md flex items-center gap-1.5 shrink-0 cursor-pointer"
        >
          <span>Fazer Cotação</span>
          <ArrowRight size={15} />
        </button>
      </div>
    </div>
  );
}
