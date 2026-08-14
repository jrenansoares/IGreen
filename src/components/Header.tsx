import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const closeMenu = () => setIsMenuOpen(false);

  const navLinks = [
    { name: "Seguros", path: "/" },
    { name: "Energia", path: "/energia" },
    { name: "Telecom", path: "/telecom" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2" onClick={closeMenu}>
          {/* Logo iGreen Seguros */}
          <img src="/igreen-energy.png" alt="iGreen Seguros" className="h-8 object-contain" onError={(e) => {
            e.currentTarget.style.display = 'none';
            e.currentTarget.nextElementSibling?.classList.remove('hidden');
          }} />
          <div className="hidden flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-green-main flex items-center justify-center">
              <div className="w-4 h-4 rounded-full bg-white"></div>
            </div>
            <span className="text-2xl font-bold text-green-dark tracking-tight">iGreen <span className="font-light text-green-main">Seguros</span></span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`transition-colors hover:text-green-main ${
                location.pathname === link.path ? "text-green-main font-bold" : "text-text-dark"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <a 
            href="#cotacao"
            className="bg-green-main hover:bg-green-dark text-white px-6 py-2.5 rounded-full transition-colors shadow-md hover:shadow-lg font-semibold"
          >
            Fazer Cotação
          </a>
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden p-2 text-text-dark"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 right-0 bg-white border-t border-gray-100 shadow-lg p-4 flex flex-col gap-2">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={closeMenu}
              className={`w-full text-left p-3 font-medium rounded-lg ${
                location.pathname === link.path ? "bg-green-main/10 text-green-main font-bold" : "text-text-dark hover:bg-gray-light"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <a 
            href="#cotacao"
            onClick={closeMenu}
            className="w-full text-center bg-green-main text-white px-6 py-3 rounded-xl font-semibold shadow-md mt-2 block"
          >
            Fazer Cotação
          </a>
        </div>
      )}
    </header>
  );
}
