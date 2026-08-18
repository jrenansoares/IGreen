import { Menu, X } from "lucide-react";
import { useState } from "react";
import type React from "react";
import { Link, useLocation } from "react-router-dom";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const closeMenu = () => setIsMenuOpen(false);

  const getCurrentLogo = () => {
    switch (location.pathname) {
      case "/telecom":
        return { src: "/iGreen Telecom -  Logo Verde.png", alt: "iGreen Telecom", label: "Telecom", isSymbolOnly: false };
      case "/energia":
        return { src: "/iGreen - Conexão Green.png", alt: "iGreen Energy", label: "Energy", isSymbolOnly: false };
      case "/seguros":
        return { src: "/iGreen seguros verde.png", alt: "iGreen Seguros", label: "Seguros", isSymbolOnly: false };
      default:
        // Na Home ("/"), exibir apenas o símbolo da iGreen
        return { src: "/Cópia de G - Verde.png", alt: "iGreen", label: "", isSymbolOnly: true };
    }
  };

  const currentLogo = getCurrentLogo();

  const navLinks = [
    { name: "Início", path: "/" },
    { name: "Seguros", path: "/seguros" },
    { name: "Energia", path: "/energia" },
    { name: "Telecom", path: "/telecom" },
  ];

  const handleCotacaoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    closeMenu();
    if (location.pathname === "/seguros") {
      e.preventDefault();
      document.getElementById("cotacao")?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-xs border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
        <Link 
          to="/" 
          className="flex items-center gap-3" 
          onClick={closeMenu}
          aria-label={`${currentLogo.alt} - Página Inicial`}
        >
          {currentLogo.isSymbolOnly ? (
            /* Apenas o símbolo iGreen na Home */
            <div className="flex items-center gap-2.5">
              <img 
                src={currentLogo.src} 
                alt="iGreen" 
                width={40}
                height={40}
                decoding="async"
                className="h-10 w-10 object-contain"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.nextElementSibling?.classList.remove('hidden');
                }}
              />
              <div className="hidden w-10 h-10 rounded-2xl bg-gradient-to-br from-green-main to-green-dark flex items-center justify-center shadow-md shadow-green-main/20">
                <div className="w-4 h-4 rounded-full border-2 border-white flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-yellow-solar"></div>
                </div>
              </div>
              <span className="text-xl font-black text-green-dark tracking-tight hidden sm:inline">
                iGreen
              </span>
            </div>
          ) : (
            /* Logo Completa nas páginas internas */
            <div className="h-10 flex items-center">
              <img 
                key={currentLogo.src}
                src={currentLogo.src} 
                alt={currentLogo.alt} 
                width={175}
                height={36}
                decoding="async"
                className="max-h-9 max-w-[175px] w-auto object-contain" 
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.nextElementSibling?.classList.remove('hidden');
                }} 
              />
              <div className="hidden flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-green-main flex items-center justify-center">
                  <div className="w-4 h-4 rounded-full bg-white"></div>
                </div>
                <span className="text-2xl font-bold text-green-dark tracking-tight">
                  iGreen <span className="font-light text-green-main">{currentLogo.label}</span>
                </span>
              </div>
            </div>
          )}
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 font-medium" aria-label="Navegação Principal">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`transition-colors hover:text-green-main py-2 ${
                location.pathname === link.path ? "text-green-main font-bold" : "text-text-dark"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <a 
            href="/seguros#cotacao"
            onClick={handleCotacaoClick}
            className="bg-green-main hover:bg-green-dark text-white px-6 py-2.5 rounded-full transition-colors shadow-md hover:shadow-lg font-semibold min-h-[44px] flex items-center justify-center cursor-pointer"
          >
            Fazer Cotação
          </a>
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          type="button"
          className="md:hidden p-2.5 text-text-dark rounded-lg hover:bg-gray-100 transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center cursor-pointer"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Fechar menu de navegação" : "Abrir menu de navegação"}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <div 
          className="md:hidden absolute top-20 left-0 right-0 bg-white border-t border-gray-100 shadow-lg p-4 flex flex-col gap-2 animate-in fade-in slide-in-from-top-2 duration-200"
          role="dialog"
          aria-label="Menu móvel"
        >
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={closeMenu}
              className={`w-full text-left p-3.5 font-medium rounded-lg text-base ${
                location.pathname === link.path ? "bg-green-main/10 text-green-main font-bold" : "text-text-dark hover:bg-gray-50"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <a 
            href="/seguros#cotacao"
            onClick={handleCotacaoClick}
            className="w-full text-center bg-green-main text-white px-6 py-3.5 rounded-xl font-semibold shadow-md mt-2 block text-base"
          >
            Fazer Cotação
          </a>
        </div>
      )}
    </header>
  );
}
