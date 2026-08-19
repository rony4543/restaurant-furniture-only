import { useState } from 'react';
import { allProducts, Product } from '../data/products';
import RequestQuoteModal from './RequestQuoteModal';
import { Link } from 'react-router-dom';
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

  const featuredProductIds = [4, 7, 11, 13, 18, 37, 45, 48];
  const displayedProducts = featuredProductIds.map(id => allProducts.find(p => p.id === id)).filter(Boolean) as Product[];

  return (
    <section className="w-full max-w-[1440px] mx-auto px-3 md:px-10 py-14 md:py-20">
      {/* Section Header */}
      <div className="mb-6 md:mb-8 text-left">
        <h2 className="text-[36px] md:text-[52px] font-chillax font-light tracking-[-0.045em] text-[#3e4435] uppercase">Our Products</h2>
      </div>

      {/* Product Grid - 2x2 on Mobile, 4x2 on Desktop */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-3 md:gap-x-6 gap-y-6 md:gap-y-12">
        {displayedProducts.map((product, index) => (
          <Link to={`/product/${product.slug}`} key={product.slug} className={`flex flex-col group cursor-pointer ${index >= 4 ? 'hidden lg:flex' : ''}`}>
            {/* Image Container */}
            <div 
              className="aspect-square flex items-center justify-center p-4 md:p-8 relative overflow-hidden rounded-lg md:rounded-xl"
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

            <div className="pt-3 md:pt-4 flex flex-col gap-1 md:gap-1.5 h-full justify-between">
              <div>
                <h3 className="text-[12px] sm:text-[13px] font-semibold tracking-wider text-gray-900 uppercase leading-snug line-clamp-2 min-h-[32px]">
                  {product.name}
                </h3>
                
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-2 mt-1 md:mt-0">
                  <span className="text-[10px] font-mono text-gray-400 tracking-wider uppercase">
                    {product.code}
                  </span>
                  <span className="text-[9px] sm:text-[10px] font-medium tracking-wide text-gray-500 bg-gray-100 px-2 py-0.5 rounded-full uppercase whitespace-nowrap truncate w-fit">
                    {product.material}
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-3 w-full">
                <div 
                  onClick={(e) => handleGetQuote(e, product)}
                  className="w-full bg-[#1c1c1c] text-white text-center text-[10px] md:text-[11px] font-semibold tracking-widest uppercase py-2.5 md:py-3 rounded hover:bg-[#c49a6c] transition-colors cursor-pointer shadow-sm"
                >
                  Get Quote
                </div>
              </div>
            </div>
          </Link>
        ))}
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