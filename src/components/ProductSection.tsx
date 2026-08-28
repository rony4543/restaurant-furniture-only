import { useState } from 'react';
import { allProducts, Product } from '../data/products';
import RequestQuoteModal from './RequestQuoteModal';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const ProductSection = () => {
  const [selectedQuoteProduct, setSelectedQuoteProduct] = useState<Product | null>(null);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  const handleGetQuote = (e: React.MouseEvent, product: Product) => {
    e.preventDefault();
    e.stopPropagation();
    setSelectedQuoteProduct(product);
    setIsQuoteModalOpen(true);
  };

  const categoriesToDisplay = [
    "Bar Chairs",
    "Indoor Chairs",
    "Lounge Chairs",
    "Poufs",
    "Sofas, Benches & Booths"
  ];

  return (
    <section className="w-full max-w-[1440px] mx-auto px-3 md:px-10 py-14 md:py-20">
      {/* Section Header */}
      <div className="mb-10 md:mb-14 text-center">
        <h2 className="text-[36px] md:text-[52px] font-chillax font-light tracking-[-0.045em] text-[#3e4435] uppercase">Our Products</h2>
      </div>

      {/* Categorized Product Feed */}
      <div className="flex flex-col gap-8 md:gap-12">
        {categoriesToDisplay.map((category) => {
          const categoryProducts = allProducts.filter(p => p.category === category).slice(0, 4);
          
          return (
            <div key={category} className="flex flex-col">
              {/* Category Header */}
              <div className="flex items-center justify-between border-b border-gray-200 pb-3 md:pb-4 mb-6 md:mb-8">
                <h3 className="text-[22px] md:text-[32px] font-chillax font-light text-[#1c1c1c] tracking-tight">{category}</h3>
                <Link to="/products" className="text-[12px] md:text-[14px] font-medium text-[#c49a6c] hover:text-[#b0885c] uppercase tracking-wider transition-colors flex items-center gap-1">
                  View More <ArrowUpRight size={16} />
                </Link>
              </div>

              {/* Product Grid: 2 cols on mobile, 4 cols on desktop */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 lg:gap-x-6 lg:gap-y-6">
                {categoryProducts.map((product) => (
                  <motion.div 
                    key={product.slug} 
                    initial={{ scale: 0.95, opacity: 0.5 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ amount: 0.3 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="flex flex-col h-full"
                  >
                    <Link 
                      to={`/product/${product.slug}`} 
                      className="flex flex-col group cursor-pointer w-full h-full"
                    >
                      {/* Image Container */}
                    <div 
                      className="aspect-square flex items-center justify-center p-2 md:p-4 relative overflow-hidden rounded-lg md:rounded-xl"
                      style={{ backgroundColor: product.bgColor }}
                    >
                      <img 
                        src={product.image} 
                        alt={product.name} 
                        className="w-full h-full object-contain object-center group-hover:scale-105 transition-transform duration-500 ease-out mix-blend-multiply"
                      />

                      {/* View overlay arrow */}
                      <div className="absolute bottom-3 right-3 w-9 h-9 bg-white/90 backdrop-blur-sm border border-gray-200 rounded-full flex items-center justify-center opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 shadow-sm">
                        <ArrowUpRight size={16} className="text-[#1c1c1c]" />
                      </div>
                    </div>

                    <div className="pt-3 md:pt-4 flex flex-col gap-1 md:gap-1.5 flex-grow">
                      <div>
                        <h3 className="text-[14px] md:text-[16px] font-semibold tracking-wider text-gray-900 uppercase leading-snug line-clamp-2">
                          {product.name}
                        </h3>
                        
                        <div className="flex items-center gap-3 mt-1.5 md:mt-2">
                          <span className="text-[11px] font-mono text-gray-400 tracking-wider uppercase">
                            {product.code}
                          </span>
                          <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                          <span className="text-[11px] font-medium tracking-wide text-gray-500 uppercase">
                            {product.material}
                          </span>
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="mt-auto pt-2.5 w-full md:w-auto md:max-w-[200px]">
                        <div 
                          onClick={(e) => handleGetQuote(e, product)}
                          className="w-full bg-[#ea580c] text-white text-center text-[11px] md:text-[12px] font-semibold tracking-widest uppercase py-3 md:py-3.5 rounded-full hover:bg-[#c2410c] transition-colors cursor-pointer shadow-sm"
                        >
                          Get Quote
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* CTA Section */}
      <div className="mt-16 md:mt-20 text-center flex flex-col items-center justify-center bg-[#3e4435] text-white py-12 md:py-16 px-6 md:px-12 rounded-2xl relative overflow-hidden group">
        {/* Background Decorative Element */}
        <div className="absolute inset-0 opacity-10 pointer-events-none transition-transform duration-700 group-hover:scale-105">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="cta-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#cta-grid)" />
          </svg>
        </div>
        
        <h3 className="text-[26px] md:text-[40px] font-chillax font-light mb-4 relative z-10 tracking-tight">
          Explore Our Complete Commercial Catalog
        </h3>
        <p className="text-gray-300 max-w-2xl text-[14px] md:text-[17px] mb-8 font-light relative z-10 leading-relaxed">
          Browse all {allProducts.length} high-performance furniture solutions engineered for high-traffic restaurants, hotels, cafes, and retail spaces.
        </p>
        <Link to="/products" className="bg-[#c49a6c] hover:bg-[#b0885c] text-white px-8 md:px-10 py-4 rounded-full uppercase tracking-widest text-[12px] md:text-[13px] font-semibold transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(196,154,108,0.3)] relative z-10 inline-block">
          View All Products
        </Link>
      </div>

      <RequestQuoteModal 
        isOpen={isQuoteModalOpen} 
        onClose={() => setIsQuoteModalOpen(false)} 
        product={selectedQuoteProduct} 
      />
    </section>
  );
};

export default ProductSection;