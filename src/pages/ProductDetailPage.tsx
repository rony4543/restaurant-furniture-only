import { useState, useEffect, useCallback } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ChevronDown, ChevronUp, Star, ChevronLeft } from 'lucide-react';
import Header from '../components/Header';
import AnnouncementBar from '../components/AnnouncementBar';
import { allProducts, Product } from '../data/products';
import RequestQuoteModal from '../components/RequestQuoteModal';
import usePageMeta, { SITE_URL } from '../hooks/usePageMeta';

const ProductDetailPage = () => {
  const { slug } = useParams();
  const product = allProducts.find(
    p => p.slug === slug || p.id === Number(slug)
  );

  const [activeImage, setActiveImage] = useState(0);
  const [openAccordion, setOpenAccordion] = useState<string | null>('description');
  const [selectedColor, setSelectedColor] = useState(product?.colors[0] || '#000');
  const [quantity, setQuantity] = useState(1);
  const [selectedQuoteProduct, setSelectedQuoteProduct] = useState<Product | null>(null);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const images = product?.images?.length ? product.images : product ? [product.image] : [];

  useEffect(() => {
    setActiveImage(0);
    window.scrollTo(0, 0);
  }, [slug]);

  const handleQuoteClick = (e: React.MouseEvent, productToQuote: Product) => {
    e.preventDefault();
    e.stopPropagation();
    setSelectedQuoteProduct(productToQuote);
    setIsQuoteModalOpen(true);
  };

  const nextImage = useCallback(() => {
    setActiveImage(prev => (prev + 1) % images.length);
  }, [images.length]);

  const prevImage = useCallback(() => {
    setActiveImage(prev => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [nextImage, prevImage]);

  usePageMeta({
    title: product ? product.name : 'Product',
    description: product
      ? `${product.name} (${product.code}) — ${product.material}, engineered for high-traffic ${product.category.toLowerCase()}. Built for restaurants, hotels, cafes & retail. Get a bulk B2B quote.`
      : undefined,
    image: product ? `${SITE_URL}/assets/${encodeURIComponent(product.image)}` : undefined,
    canonical: product ? `/product/${product.slug}` : undefined,
    keywords: product
      ? `${product.name}, ${product.category}, restaurant furniture, hotel furniture, commercial furniture, ${product.material}, horeca seating`
      : undefined,
  });

  if (!product) {
    return <Navigate to="/products" replace />;
  }

  const faqs = [
    {
      question: "Is this available for bulk/wholesale orders?",
      answer: "Yes, this product is available in bulk with volume-based pricing. Contact us for a custom quote based on your quantity and timeline."
    },
    {
      question: "Can I get a custom finish or upholstery color?",
      answer: "Most items support custom finishes, fabric, and branding options for larger orders. Minimum order quantities may apply."
    },
    {
      question: "What's the typical lead time for large orders?",
      answer: "Standard lead time is 3–5 weeks depending on quantity and customization. Rush production may be available — ask your account manager."
    },
    {
      question: "Is this suitable for outdoor or high-traffic use?",
      answer: `${product.name} is built for ${product.category.toLowerCase().includes('outdoor') ? 'outdoor exposure' : 'daily commercial use'} — with ${product.material.toLowerCase()}, it holds up under heavy, continuous traffic. Check the specs tab for details.`
    },
    {
      question: "Do you offer samples before a bulk order?",
      answer: "Yes, single-unit samples can be purchased before committing to a bulk order so you can check quality and finish in person."
    }
  ];

  const relatedProducts = allProducts
    .filter(p => p.category === product.category && p.slug !== product.slug)
    .slice(0, 4);

  const toggleAccordion = (section: string) => {
    setOpenAccordion(openAccordion === section ? null : section);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#faf9f6] font-sans">
      <div className="relative w-full z-40 flex flex-col shadow-sm bg-white border-b border-gray-100">
        <AnnouncementBar />
        <Header />
      </div>

      <main className="flex-grow max-w-[1440px] mx-auto w-full px-4 md:px-8 lg:px-12 py-6 md:py-8">
        {/* Breadcrumbs */}
        <nav className="flex flex-wrap items-center gap-2 text-[12px] md:text-[13px] text-gray-400 mb-6 md:mb-8 tracking-wide">
          <Link to="/" className="hover:text-gray-900 transition-colors">Home</Link>
          <ChevronRight size={14} className="shrink-0" />
          <Link to="/products" className="hover:text-gray-900 transition-colors">Catalog</Link>
          <ChevronRight size={14} className="shrink-0" />
          <Link to="/products" state={{ category: product.category }} className="hover:text-gray-900 transition-colors">
            {product.category}
          </Link>
          <ChevronRight size={14} className="shrink-0" />
          <span className="text-gray-900 font-medium truncate">{product.name}</span>
        </nav>

        {/* Top Section - Product Details */}
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-20 mb-20">
          {/* Left - Image Gallery */}
          <div className="w-full lg:w-1/2 flex flex-col">
            <div 
              className="relative aspect-square flex items-center justify-center rounded-xl overflow-hidden mb-4 select-none touch-pan-y"
              style={{ backgroundColor: product.bgColor }}
            >
              <AnimatePresence mode="wait">
                <motion.img 
                  key={activeImage}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.25, ease: 'easeOut' }}
                  src={images[activeImage]} 
                  alt={`${product.name} — view ${activeImage + 1}`} 
                  className="w-full h-full object-contain mix-blend-multiply p-6 md:p-10"
                  draggable={false}
                />
              </AnimatePresence>

              {images.length > 1 && (
                <>
                  <button 
                    onClick={prevImage}
                    aria-label="Previous image"
                    className="absolute left-3 md:left-4 p-2.5 text-gray-700 hover:text-gray-900 transition-colors bg-white/80 hover:bg-white backdrop-blur-sm rounded-full shadow-sm border border-gray-200/60 z-10"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <button 
                    onClick={nextImage}
                    aria-label="Next image"
                    className="absolute right-3 md:right-4 p-2.5 text-gray-700 hover:text-gray-900 transition-colors bg-white/80 hover:bg-white backdrop-blur-sm rounded-full shadow-sm border border-gray-200/60 z-10"
                  >
                    <ChevronRight size={20} />
                  </button>
                  <span className="absolute bottom-4 right-4 bg-black/55 text-white text-[11px] font-medium tracking-wider px-3 py-1 rounded-full backdrop-blur-sm z-10">
                    {activeImage + 1} / {images.length}
                  </span>
                </>
              )}
            </div>

            {/* Thumbnails */}
            {images.length > 1 && (
              <div className="flex gap-3 overflow-x-auto pb-2 -mx-1 px-1">
                {images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImage(i)}
                    aria-label={`View image ${i + 1}`}
                    className={`shrink-0 w-16 md:w-20 aspect-square rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                      activeImage === i 
                        ? 'border-[#1c1c1c] opacity-100' 
                        : 'border-transparent opacity-60 hover:opacity-90'
                    }`}
                    style={{ backgroundColor: product.bgColor }}
                  >
                    <img src={img} alt="" className="w-full h-full object-contain mix-blend-multiply p-1.5" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right - Product Info */}
          <div className="w-full lg:w-1/2 flex flex-col pt-2 lg:pt-4">
            <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#c49a6c] mb-3">
              {product.code} — {product.category}
            </span>
            <h1 className="text-[22px] md:text-[32px] font-chillax font-bold text-gray-900 uppercase tracking-wide leading-snug mb-6 md:mb-8">
              {product.name}
            </h1>

            {/* Accordions */}
            <div className="flex flex-col border-t border-gray-200">
              <div className="border-b border-gray-200">
                <button 
                  onClick={() => toggleAccordion('description')}
                  className="w-full flex items-center justify-between py-4 md:py-5 text-[14px] text-gray-900 font-medium tracking-wide hover:text-gray-600 transition-colors"
                >
                  Description
                  {openAccordion === 'description' ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                </button>
                <motion.div 
                  initial={false}
                  animate={{ height: openAccordion === 'description' ? 'auto' : 0, opacity: openAccordion === 'description' ? 1 : 0 }}
                  className="overflow-hidden"
                >
                  <p className="pb-6 text-[14px] leading-relaxed text-gray-600 pr-2 md:pr-8">
                    The {product.name} is a {product.category.toLowerCase()} crafted from {product.material.toLowerCase()}, engineered for the daily demands of restaurants, hotels, cafes, and retail spaces. Clean lines, commercial-grade build, and finishes chosen to stay presentable through years of heavy use.
                  </p>
                </motion.div>
              </div>

              <div className="border-b border-gray-200">
                <button 
                  onClick={() => toggleAccordion('details')}
                  className="w-full flex items-center justify-between py-4 md:py-5 text-[14px] text-gray-900 font-medium tracking-wide hover:text-gray-600 transition-colors"
                >
                  Product details
                  {openAccordion === 'details' ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                </button>
                <motion.div 
                  initial={false}
                  animate={{ height: openAccordion === 'details' ? 'auto' : 0, opacity: openAccordion === 'details' ? 1 : 0 }}
                  className="overflow-hidden"
                >
                  <div className="pb-6 text-[14px] leading-relaxed text-gray-600 flex flex-col gap-1">
                    <span><span className="font-medium text-gray-800">Product Code:</span> {product.code}</span>
                    <span><span className="font-medium text-gray-800">Category:</span> {product.category}</span>
                    <span><span className="font-medium text-gray-800">Material:</span> {product.material}</span>
                    <span className="mt-1">Manufactured with high-grade commercial materials built for high-traffic use. Custom finishes and upholstery available for bulk orders.</span>
                  </div>
                </motion.div>
              </div>

              <div className="border-b border-gray-200 mb-8">
                <button 
                  onClick={() => toggleAccordion('shipping')}
                  className="w-full flex items-center justify-between py-4 md:py-5 text-[14px] text-gray-900 font-medium tracking-wide hover:text-gray-600 transition-colors"
                >
                  Shipping & Returns
                  {openAccordion === 'shipping' ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                </button>
                <motion.div 
                  initial={false}
                  animate={{ height: openAccordion === 'shipping' ? 'auto' : 0, opacity: openAccordion === 'shipping' ? 1 : 0 }}
                  className="overflow-hidden"
                >
                  <p className="pb-6 text-[14px] leading-relaxed text-gray-600">
                    Ships within 4-6 weeks for custom orders. Returns accepted within 14 days of delivery.
                  </p>
                </motion.div>
              </div>
            </div>

            {/* Selectors */}
            <div className="flex items-center gap-6 md:gap-8 mb-8 flex-wrap">
              <div className="flex items-center gap-3">
                <span className="text-[13px] text-gray-700 font-medium">Color:</span>
                <div className="relative">
                  <select 
                    className="appearance-none border border-gray-300 rounded px-4 py-1.5 pr-8 text-[13px] bg-transparent focus:outline-none focus:border-gray-500 cursor-pointer"
                    value={selectedColor}
                    onChange={(e) => setSelectedColor(e.target.value)}
                  >
                    {product.colors.map(c => <option key={c} value={c}>{c}</option>)}
                  </select>
                  <ChevronDown size={14} className="absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500" />
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-[13px] text-gray-700 font-medium">Quantity:</span>
                <div className="relative">
                  <select 
                    className="appearance-none border border-gray-300 rounded px-4 py-1.5 pr-8 text-[13px] bg-transparent focus:outline-none focus:border-gray-500 cursor-pointer"
                    value={quantity}
                    onChange={(e) => setQuantity(Number(e.target.value))}
                  >
                    {[1,2,3,4,5,10,20].map(n => <option key={n} value={n}>{n}</option>)}
                  </select>
                  <ChevronDown size={14} className="absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500" />
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 max-w-md">
              <button 
                onClick={(e) => handleQuoteClick(e, product)}
                className="flex-1 bg-[#1c1c1c] hover:bg-black text-white text-[12px] font-semibold tracking-widest uppercase py-4 px-6 rounded transition-colors shadow-sm"
              >
                Request Sample
              </button>
              <button 
                onClick={(e) => handleQuoteClick(e, product)}
                className="flex-1 bg-[#ea580c] hover:bg-[#c2410c] text-white text-[12px] font-semibold tracking-widest uppercase py-4 px-6 rounded transition-colors shadow-sm"
              >
                Get Bulk Quote
              </button>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-20">
          <div className="flex flex-col items-center mb-10 text-center max-w-2xl mx-auto">
            <h2 className="text-[18px] md:text-[24px] font-chillax tracking-[0.1em] font-bold uppercase text-gray-900 mb-4">
              Have questions before ordering in bulk?
            </h2>
            <p className="text-[14px] text-gray-600 leading-relaxed">
              Here's what hotel and restaurant buyers most often ask about the {product.name}.
            </p>
          </div>

          <div className="max-w-3xl mx-auto flex flex-col gap-3 md:gap-4">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className="bg-white border border-gray-200 rounded-[20px] md:rounded-[32px] overflow-hidden transition-all duration-300 shadow-sm hover:shadow-md"
              >
                <button 
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex items-center justify-between px-5 md:px-8 py-4 md:py-5 text-left focus:outline-none"
                >
                  <span className="text-[13px] md:text-[15px] font-medium text-gray-900 pr-6 tracking-wide">{faq.question}</span>
                  <div className={`shrink-0 flex items-center justify-center w-8 h-8 rounded-full border transition-colors duration-300 ${openFaq === index ? 'bg-[#c49a6c] border-[#c49a6c] text-white' : 'border-gray-300 text-gray-500 hover:border-gray-400'}`}>
                    {openFaq === index ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                  </div>
                </button>
                <motion.div 
                  initial={false}
                  animate={{ height: openFaq === index ? 'auto' : 0, opacity: openFaq === index ? 1 : 0 }}
                  className="overflow-hidden"
                >
                  <div className="px-5 md:px-8 pb-6 pt-1 text-[13px] md:text-[14px] leading-relaxed text-gray-600">
                    {faq.answer}
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>

        {/* You Might Also Like */}
        {relatedProducts.length > 0 && (
          <div className="mt-16 mb-20">
            <div className="flex items-center gap-6 mb-10">
              <h2 className="text-[16px] md:text-[22px] font-chillax tracking-[0.2em] uppercase text-gray-900 shrink-0">
                You Might Also Like
              </h2>
              <div className="h-[1px] bg-gray-300 flex-grow"></div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
              {relatedProducts.map((rel) => (
                <Link to={`/product/${rel.slug}`} key={rel.slug} className="flex flex-col group/card cursor-pointer">
                  <div 
                    className="aspect-[4/5] flex items-center justify-center p-4 md:p-6 mb-3 overflow-hidden relative"
                    style={{ backgroundColor: rel.bgColor }}
                  >
                    <img src={rel.image} alt={rel.name} className="w-full h-full object-contain mix-blend-multiply group-hover/card:scale-105 transition-transform duration-700" />
                  </div>
                  <h3 className="text-[12px] md:text-[14px] text-gray-800 mb-2 truncate">{rel.name}</h3>
                  <div className="mt-auto w-full pt-3">
                    <div 
                      onClick={(e) => handleQuoteClick(e, rel)}
                      className="w-full bg-[#ea580c] text-white text-center text-[9px] md:text-[11px] font-semibold tracking-widest uppercase py-2.5 rounded hover:bg-[#c2410c] transition-colors cursor-pointer"
                    >
                      Get Quote
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Reviews Section */}
        <div className="mt-12 mb-24">
          <div className="flex items-center gap-6 mb-10">
            <h2 className="text-[16px] md:text-[22px] font-chillax tracking-[0.2em] font-bold uppercase text-gray-900 shrink-0">
              Reviews
            </h2>
            <div className="h-[2px] bg-gray-900 flex-grow"></div>
          </div>

          <div className="overflow-hidden w-full relative">
            <div className="flex gap-8 md:gap-12 w-max animate-marquee">
              {[0, 1].map((setIdx) => (
                <div key={setIdx} className="flex gap-8 md:gap-12 shrink-0">
                  <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start relative group cursor-pointer w-[320px] md:w-[600px] bg-white p-6 md:p-8 border border-gray-200">
                    <div className="w-[60px] md:w-[80px] h-[60px] md:h-[80px] border border-gray-900 flex items-center justify-center shrink-0">
                      <span className="text-[16px] md:text-[18px] font-medium tracking-widest text-gray-900 uppercase">AV</span>
                    </div>
                    <div className="flex flex-col gap-2 shrink-0 md:w-[130px]">
                      <span className="text-[14px] font-medium text-gray-900">Alex V.</span>
                      <span className="text-[13px] text-gray-500 mb-1">June 1, 2026</span>
                      <div className="flex gap-1 text-gray-900">
                        {[0,1,2,3].map(i => <Star key={i} size={14} fill="currentColor" />)}
                        <Star size={14} className="text-gray-300" />
                      </div>
                    </div>
                    <div className="flex-grow pl-0 md:pl-6 md:border-l border-gray-300">
                      <p className="text-[13px] leading-relaxed text-gray-600">
                        Convenience with high back and waist support, with armrests. Standard adjustment mechanism. The lowest price among analogues. As usual, it was delivered quickly and without any problems. Highly recommend for commercial use.
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start relative group cursor-pointer w-[320px] md:w-[600px] bg-white p-6 md:p-8 border border-gray-200">
                    <div className="w-[60px] md:w-[80px] h-[60px] md:h-[80px] border border-gray-900 flex items-center justify-center shrink-0 bg-gray-50">
                      <span className="text-[16px] md:text-[18px] font-medium tracking-widest text-gray-900 uppercase">MK</span>
                    </div>
                    <div className="flex flex-col gap-2 shrink-0 md:w-[130px]">
                      <span className="text-[14px] font-medium text-gray-900">Maria K.</span>
                      <span className="text-[13px] text-gray-500 mb-1">August 12, 2026</span>
                      <div className="flex gap-1 text-gray-900">
                        {[0,1,2,3,4].map(i => <Star key={i} size={14} fill="currentColor" />)}
                      </div>
                    </div>
                    <div className="flex-grow pl-0 md:pl-6 md:border-l border-gray-300">
                      <p className="text-[13px] leading-relaxed text-gray-600">
                        Beautiful minimalist design that perfectly matched our hotel lobby. The craftsmanship is excellent and the materials feel incredibly premium. Will be ordering more.
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      
      {/* Request Quote Modal */}
      <RequestQuoteModal 
        isOpen={isQuoteModalOpen} 
        onClose={() => setIsQuoteModalOpen(false)} 
        product={selectedQuoteProduct} 
      />
    </div>
  );
};

export default ProductDetailPage;