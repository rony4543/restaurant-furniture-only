
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ReactLenis } from '@studio-freight/react-lenis';
import AnnouncementBar from './components/AnnouncementBar';
import Header from './components/Header';
import CategoryNav from './components/CategoryNav';
import HeroSection from './components/HeroSection';
import ProductSection from './components/ProductSection';
import IntroductionSection from './components/IntroductionSection';
import ManufacturingExcellence from './components/ManufacturingExcellence';
import FAQSection from './components/FAQSection';
import BottomCTASection from './components/BottomCTASection';

import AllProductsPage from './pages/AllProductsPage';
import ProductDetailPage from './pages/ProductDetailPage';
import ManufacturingPage from './pages/ManufacturingPage';
import ProjectsPage from './pages/ProjectsPage';
import ReturnAndRefundPolicyPage from './pages/ReturnAndRefundPolicyPage';
import ShippingPolicyPage from './pages/ShippingPolicyPage';
import TermsAndPrivacyPolicyPage from './pages/TermsAndPrivacyPolicyPage';
import AboutUsPage from './pages/AboutUsPage';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

function HomePage() {
  return (
    <div className="min-h-screen flex flex-col relative bg-gray-50">
      <div className="relative w-full z-50 flex flex-col shadow-sm bg-white">
        <AnnouncementBar />
        <Header />
        <CategoryNav />
      </div>
      <main className="flex-grow">
        <HeroSection />
        <IntroductionSection />
        <ProductSection />
        <ManufacturingExcellence />
        <FAQSection />
        <BottomCTASection />
      </main>
    </div>
  );
}

function App() {
  return (
    <ReactLenis root>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/manufacturing" element={<ManufacturingPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/products" element={<AllProductsPage />} />
          <Route path="/product/:slug" element={<ProductDetailPage />} />
          <Route path="/return-and-refund-policy" element={<ReturnAndRefundPolicyPage />} />
          <Route path="/shipping-policy" element={<ShippingPolicyPage />} />
          <Route path="/terms-and-privacy-policy" element={<TermsAndPrivacyPolicyPage />} />
          <Route path="/about" element={<AboutUsPage />} />
        </Routes>
        <Footer />
      </Router>
    </ReactLenis>
  );
}

export default App;
