import { Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="bg-[#4A5157] text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Column 1: Brand */}
          <div className="space-y-6">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 max-w-md">
              <div className="h-11 w-full bg-white rounded-xl px-2.5 py-1.5 flex items-center justify-center shadow-xs border border-white/10">
                <img 
                  src="/iGreen seguros verde.webp" 
                  alt="iGreen Seguros" 
                  width={540}
                  height={166}
                  loading="lazy"
                  decoding="async"
                  className="max-h-6 max-w-full w-auto object-contain" 
                  onError={(e) => { e.currentTarget.style.display = 'none'; }} 
                />
              </div>
              <div className="h-11 w-full bg-white rounded-xl px-2.5 py-1.5 flex items-center justify-center shadow-xs border border-white/10">
                <img 
                  src="/iGreen - Conexão Green.webp" 
                  alt="iGreen Energy" 
                  width={428}
                  height={170}
                  loading="lazy"
                  decoding="async"
                  className="max-h-6 max-w-full w-auto object-contain" 
                  onError={(e) => { e.currentTarget.style.display = 'none'; }} 
                />
              </div>
              <div className="h-11 w-full bg-white rounded-xl px-2.5 py-1.5 flex items-center justify-center shadow-xs border border-white/10">
                <img 
                  src="/iGreen Telecom -  Logo Verde.webp" 
                  alt="iGreen Telecom" 
                  width={428}
                  height={170}
                  loading="lazy"
                  decoding="async"
                  className="max-h-6 max-w-full w-auto object-contain" 
                  onError={(e) => { e.currentTarget.style.display = 'none'; }} 
                />
              </div>
              <div className="h-11 w-full bg-white rounded-xl px-2.5 py-1.5 flex items-center justify-center shadow-xs border border-white/10">
                <img 
                  src="/BP - SEGURADORA.webp" 
                  alt="BP Seguradora" 
                  width={800}
                  height={450}
                  loading="lazy"
                  decoding="async"
                  className="max-h-6 max-w-full w-auto object-contain" 
                  onError={(e) => { e.currentTarget.style.display = 'none'; }} 
                />
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Ecossistema iGreen: Soluções completas em Seguro Auto garantido por seguradora SUSEP, Energia Solar por assinatura com economia direta na fatura e Telefonia Móvel 5G.
            </p>
          </div>

          {/* Column 2: Navegação */}
          <div>
            <h3 className="font-bold text-white mb-6 uppercase tracking-wider text-sm">Soluções & Navegação</h3>
            <ul className="space-y-3 text-gray-300 text-sm font-medium">
              <li><Link to="/" className="hover:text-white transition-colors">Início (Ecossistema)</Link></li>
              <li><Link to="/seguros" className="hover:text-white transition-colors">iGreen Seguros (Auto)</Link></li>
              <li><Link to="/energia" className="hover:text-white transition-colors">iGreen Energy (Solar)</Link></li>
              <li><Link to="/telecom" className="hover:text-white transition-colors">iGreen Telecom (5G)</Link></li>
              <li><Link to="/seguros#cotacao" className="hover:text-white transition-colors">Cotação Seguro Online</Link></li>
              <li><Link to="/privacidade" className="hover:text-white transition-colors">Política de Privacidade</Link></li>
            </ul>
          </div>

          {/* Column 3: Contato */}
          <div>
            <h3 className="font-bold text-white mb-6 uppercase tracking-wider text-sm">Contato</h3>
            <ul className="space-y-4 text-gray-300 text-sm font-medium">
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-bp-orange shrink-0" />
                <a 
                  href="https://wa.me/5521984458464" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  +55 21 98445-8464
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MapPin size={18} className="text-bp-orange shrink-0" />
                <span>Brasil</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Licenciado Autorizado */}
          <div>
            <h3 className="font-bold text-white mb-6 uppercase tracking-wider text-sm">Licenciado iGreen</h3>
            <p className="text-gray-300 text-sm leading-relaxed text-justify">
              Este site pertence a um Licenciado da iGreen, ecossistema completo de soluções inovadoras em energia sustentável, telecomunicações e seguros. A solução de seguro auto apresentada nesta página é comercializada por intermédio da iGreen Seguros, com apólices subscritas e emitidas pela BP Seguradora S.A., CNPJ 50.180.527/0001-13, seguradora oficial e regulamentada pela SUSEP (Código 01546).
            </p>
          </div>
        </div>
        
        {/* Legal Disclaimers & Copyright */}
        <div className="pt-8 border-t border-gray-600/50">
          <p className="text-gray-400 text-xs leading-relaxed text-justify mb-8">
            Este site é independente, de propriedade e responsabilidade de J. Renan M. S., inscrito no CNPJ 54.730.192/0001-10, atuando como Licenciado da iGreen. A comercialização dos seguros de automóvel é realizada por intermédio da iGreen Seguros. Operado por BP Seguradora S.A. | Código Susep 01546 | CNPJ 50.180.527/0001-13. A BP Seguradora S.A. é uma seguradora autorizada pela Superintendência de Seguros Privados (SUSEP), atuando de forma definitiva no mercado segurador nacional.
          </p>
          
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-gray-400 text-xs font-medium">
            <p>&copy; {new Date().getFullYear()} iGreen - Licenciado Autorizado. Todos os direitos reservados.</p>
            <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
               <Link to="/privacidade" className="hover:text-white transition-colors">LGPD e Privacidade</Link>
               <span className="hidden md:inline text-gray-600">|</span>
               <Link to="/termos" className="hover:text-white transition-colors">Termos de Uso</Link>
               <span className="hidden md:inline text-gray-600">|</span>
               <span>CNPJ Licenciado: 54.730.192/0001-10</span>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}
