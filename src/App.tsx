
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ReactLenis } from '@studio-freight/react-lenis';
import AnnouncementBar from './components/AnnouncementBar';
import Header from './components/Header';
import CategoryNav from './components/CategoryNav';
import HeroSection from './components/HeroSection';
import ProductSection from './components/ProductSection';
import IntroductionSection from './components/IntroductionSection';
import AboutSection from './components/AboutSection';
import ManufacturingExcellence from './components/ManufacturingExcellence';

import AllProductsPage from './pages/AllProductsPage';
import ProductDetailPage from './pages/ProductDetailPage';
import ManufacturingPage from './pages/ManufacturingPage';
import ProjectsPage from './pages/ProjectsPage';
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
        <AboutSection />
        <ManufacturingExcellence />

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
        </Routes>
        <Footer />
      </Router>
    </ReactLenis>
  );
}

export default App;
