import { useEffect, Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { FloatingWhatsApp } from "./components/FloatingWhatsApp";
import { Home } from "./pages/Home";
import { trackPageView } from "./lib/tracking";

// Lazy loading das rotas secundárias para otimização de performance e code splitting
const Seguros = lazy(() => import("./pages/Seguros").then(m => ({ default: m.Seguros })));
const Energia = lazy(() => import("./pages/Energia").then(m => ({ default: m.Energia })));
const Telecom = lazy(() => import("./pages/Telecom").then(m => ({ default: m.Telecom })));
const Privacidade = lazy(() => import("./pages/Privacidade").then(m => ({ default: m.Privacidade })));
const Termos = lazy(() => import("./pages/Termos").then(m => ({ default: m.Termos })));
const NotFound = lazy(() => import("./pages/NotFound").then(m => ({ default: m.NotFound })));

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

function PageLoader() {
  return (
    <div className="min-h-[50vh] flex items-center justify-center">
      <div className="w-8 h-8 rounded-full border-3 border-green-main/30 border-t-green-main animate-spin" />
    </div>
  );
}

// Performance deployment synchronized
export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-white font-sans text-text-dark selection:bg-green-main/30 flex flex-col">
        <ScrollToTop />
        <PageTracker />
        <Header />
        
        <div className="flex-1">
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/seguros" element={<Seguros />} />
              <Route path="/energia" element={<Energia />} />
              <Route path="/telecom" element={<Telecom />} />
              <Route path="/privacidade" element={<Privacidade />} />
              <Route path="/termos" element={<Termos />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </div>

        <Footer />
        <FloatingWhatsApp />
      </div>
    </BrowserRouter>
  );
}


