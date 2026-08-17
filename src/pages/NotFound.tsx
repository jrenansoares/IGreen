import { Link } from "react-router-dom";
import { ArrowLeft, Home, ShieldCheck, Zap, Smartphone } from "lucide-react";
import { SEO } from "../components/SEO";

export function NotFound() {
  return (
    <main className="min-h-[75vh] flex items-center justify-center pt-28 pb-20 px-4 bg-gray-50">
      <SEO 
        title="Página Não Encontrada | iGreen"
        description="A página que você está procurando não foi encontrada. Conheça as soluções iGreen em energia solar por assinatura, seguro auto e telecom 5G."
        noindex={true}
      />
      <div className="max-w-lg w-full bg-white rounded-3xl p-8 sm:p-10 border border-gray-200 shadow-xl text-center">
        <div className="w-16 h-16 rounded-2xl bg-green-light flex items-center justify-center mx-auto mb-6">
          <span className="text-2xl font-black text-green-dark">404</span>
        </div>

        <h1 className="text-2xl sm:text-3xl font-black text-gray-900 mb-3 tracking-tight">
          Página não encontrada
        </h1>

        <p className="text-sm sm:text-base text-gray-600 mb-8 leading-relaxed">
          O endereço que você tentou acessar não existe ou foi movido. Navegue pelas nossas soluções disponíveis abaixo:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8 text-left">
          <Link 
            to="/seguros" 
            className="p-3 rounded-xl border border-gray-200 hover:border-bp-purple hover:bg-bp-purple/5 transition-all flex items-center gap-2 text-xs font-bold text-gray-800"
          >
            <ShieldCheck size={16} className="text-bp-purple shrink-0" />
            <span>Seguro Auto</span>
          </Link>
          <Link 
            to="/energia" 
            className="p-3 rounded-xl border border-gray-200 hover:border-green-main hover:bg-green-light/40 transition-all flex items-center gap-2 text-xs font-bold text-gray-800"
          >
            <Zap size={16} className="text-green-dark shrink-0" />
            <span>Energia Solar</span>
          </Link>
          <Link 
            to="/telecom" 
            className="p-3 rounded-xl border border-gray-200 hover:border-blue-500 hover:bg-blue-50 transition-all flex items-center gap-2 text-xs font-bold text-gray-800"
          >
            <Smartphone size={16} className="text-blue-600 shrink-0" />
            <span>Telecom 5G</span>
          </Link>
        </div>

        <Link
          to="/"
          className="w-full bg-green-main hover:bg-green-dark text-white font-bold py-3.5 px-6 rounded-xl transition-all shadow-md flex items-center justify-center gap-2 text-sm sm:text-base"
        >
          <Home size={18} />
          <span>Voltar para a Página Inicial</span>
        </Link>
      </div>
    </main>
  );
}
