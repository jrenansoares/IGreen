import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { FloatingWhatsApp } from "./components/FloatingWhatsApp";
import { Seguros } from "./pages/Seguros";
import { Energia } from "./pages/Energia";
import { Telecom } from "./pages/Telecom";
import { Privacidade } from "./pages/Privacidade";
import { Termos } from "./pages/Termos";
import { trackPageView } from "./lib/tracking";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function PageTracker() {
  const { pathname } = useLocation();

  useEffect(() => {
    trackPageView(pathname);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-white font-sans text-text-dark selection:bg-green-main/30 flex flex-col">
        <ScrollToTop />
        <PageTracker />
        <Header />
        
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Seguros />} />
            <Route path="/energia" element={<Energia />} />
            <Route path="/telecom" element={<Telecom />} />
            <Route path="/privacidade" element={<Privacidade />} />
            <Route path="/termos" element={<Termos />} />
          </Routes>
        </div>

        <Footer />
        <FloatingWhatsApp />
      </div>
    </BrowserRouter>
  );
}

