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
            <div className="flex items-center gap-3 bg-white rounded-xl py-3 px-4 w-max">
              <img 
                src="/igreen-energy.png" 
                alt="iGreen Seguros" 
                className="h-7 object-contain" 
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.nextElementSibling?.classList.remove('hidden');
                }} 
              />
              <div className="hidden text-xl font-black text-gray-800 tracking-tight">
                iGREEN<span className="text-green-main">SEGUROS</span>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Tecnologia veicular revolucionária e seguro contra roubo, furto, colisão e assistência 24h sem burocracia. Até 3x mais barato que seguros tradicionais.
            </p>
          </div>

          {/* Column 2: Navegação */}
          <div>
            <h3 className="font-bold text-white mb-6 uppercase tracking-wider text-sm">Navegação</h3>
            <ul className="space-y-4 text-gray-300 text-sm font-medium">
              <li><Link to="/" className="hover:text-white transition-colors">Página Inicial</Link></li>
              <li><Link to="/#cotacao" className="hover:text-white transition-colors">Cotação Online</Link></li>
              <li><Link to="/#diferenciais" className="hover:text-white transition-colors">Diferenciais</Link></li>
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
            <h3 className="font-bold text-white mb-6 uppercase tracking-wider text-sm">Licenciado Autorizado</h3>
            <p className="text-gray-300 text-sm leading-relaxed text-justify">
              Este site pertence a um Licenciado Autorizado da iGreen Seguros. As imagens, marcas e informações exibidas são de propriedade da iGreen e BP Seguradora e usadas de acordo com as diretrizes de parceria. Seguro auto oferecido pela iGreen Seguros, licenciado autorizado, com produtos subscritos pela BP Seguradora S.A., CNPJ 50.180.527/0001-13, supervisionada pela SUSEP.
            </p>
          </div>
        </div>
        
        {/* Legal Disclaimers & Copyright */}
        <div className="pt-8 border-t border-gray-600/50">
          <p className="text-gray-400 text-xs leading-relaxed text-justify mb-8">
            Este site é independente, de propriedade e responsabilidade de J. Renan M. S., inscrito no CNPJ 54.730.192/0001-10. A comercialização dos produtos de proteção é realizada por intermédio da iGreen Seguros. Operado por BP Seguradora S.A. | Código Susep 01546 | CNPJ 50.180.527/0001-13. A BP Seguradora S.A. é uma seguradora autorizada pela Superintendência de Seguros Privados (SUSEP), atuando de forma definitiva no segmento. A iGreen Seguros e a BP Seguradora fazem parte da nossa rede de soluções para garantir a sua tranquilidade.
          </p>
          
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-gray-400 text-xs font-medium">
            <p>&copy; {new Date().getFullYear()} iGreen Seguros - Licenciado Autorizado. Todos os direitos reservados.</p>
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
