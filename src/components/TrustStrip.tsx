import { ShieldCheck, CalendarCheck, Clock, FileCheck, CheckCircle2 } from "lucide-react";

export function TrustStrip() {
  const trustItems = [
    {
      icon: <ShieldCheck className="text-green-main shrink-0" size={20} />,
      label: "Operado pela BP Seguradora",
      sub: "Código SUSEP 01546",
    },
    {
      icon: <CalendarCheck className="text-bp-orange shrink-0" size={20} />,
      label: "Pagamento Mensal",
      sub: "Boleto, Pix ou Cartão",
    },
    {
      icon: <CheckCircle2 className="text-bp-purple shrink-0" size={20} />,
      label: "Sem Fidelidade",
      sub: "Cancele quando quiser",
    },
    {
      icon: <Clock className="text-green-main shrink-0" size={20} />,
      label: "Assistência 24 Horas",
      sub: "Cobertura Nacional",
    },
    {
      icon: <FileCheck className="text-blue-600 shrink-0" size={20} />,
      label: "Contratação 100% Digital",
      sub: "Sem Burocracia",
    },
  ];

  return (
    <section className="bg-white border-y border-gray-200/80 py-5 shadow-xs relative z-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 items-center justify-between">
          {trustItems.map((item, idx) => (
            <div 
              key={idx} 
              className={`flex items-center gap-3 p-2 rounded-xl transition-colors ${
                idx === 4 ? "col-span-2 md:col-span-1" : ""
              }`}
            >
              <div className="w-10 h-10 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center shrink-0">
                {item.icon}
              </div>
              <div className="min-w-0">
                <p className="text-xs sm:text-sm font-extrabold text-gray-900 leading-tight truncate">
                  {item.label}
                </p>
                <p className="text-[11px] sm:text-xs text-gray-500 font-medium leading-tight mt-0.5 truncate">
                  {item.sub}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
