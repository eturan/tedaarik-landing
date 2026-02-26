import { useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Index from "./pages/Index";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import GizlilikPolitikasi from "./pages/GizlilikPolitikasi";
import KullanimSartlari from "./pages/KullanimSartlari";
import CerezPolitikasi from "./pages/CerezPolitikasi";
import MesafeliSatisSozlesmesi from "./pages/MesafeliSatisSozlesmesi";
import TeslimatVeIade from "./pages/TeslimatVeIade";
import OnBilgilendirme from "./pages/OnBilgilendirme";
import KabulVeOnay from "./pages/KabulVeOnay";
import Hakkimizda from "./pages/Hakkimizda";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/gizlilik-politikasi" element={<GizlilikPolitikasi />} />
          <Route path="/kullanim-sartlari" element={<KullanimSartlari />} />
          <Route path="/cerez-politikasi" element={<CerezPolitikasi />} />
          <Route path="/mesafeli-satis-sozlesmesi" element={<MesafeliSatisSozlesmesi />} />
          <Route path="/teslimat-ve-iade" element={<TeslimatVeIade />} />
          <Route path="/on-bilgilendirme" element={<OnBilgilendirme />} />
          <Route path="/kabul-ve-onay" element={<KabulVeOnay />} />
          <Route path="/hakkimizda" element={<Hakkimizda />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
