import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Menu, X } from 'lucide-react';
import Header from '../components/Header';
import AnnouncementBar from '../components/AnnouncementBar';

import { Link, useLocation } from 'react-router-dom';
import { allProducts, categoryList, colorList, Product } from '../data/products';
import RequestQuoteModal from '../components/RequestQuoteModal';
import usePageMeta from '../hooks/usePageMeta';

const ProductExplorer = () => {
  const location = useLocation();
  // State for active filters
  const [selectedCategories, setSelectedCategories] = useState<string[]>(
    location.state?.category ? [location.state.category] : []
  );
  const [selectedColors, setSelectedColors] = useState<string[]>(['Brown']);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const [selectedQuoteProduct, setSelectedQuoteProduct] = useState<Product | null>(null);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  const handleGetQuote = (e: React.MouseEvent, product: Product) => {
    e.preventDefault();
    e.stopPropagation();
    setSelectedQuoteProduct(product);
    setIsQuoteModalOpen(true);
  };

  // Removed handleBuyNowClick to allow Link navigation

  // Filter products based on selected categories (if any selected, otherwise show all)
  const displayedProducts = allProducts.filter(p => {
    if (selectedCategories.length === 0) return true;
    return selectedCategories.includes(p.category);
  });

  const toggleCategory = (catName: string) => {
    setSelectedCategories(prev => 
      prev.includes(catName) ? prev.filter(c => c !== catName) : [...prev, catName]
    );
  };

  const toggleColor = (colorName: string) => {
    setSelectedColors(prev => 
      prev.includes(colorName) ? prev.filter(c => c !== colorName) : [...prev, colorName]
    );
  };

  const clearAllFilters = () => {
    setSelectedCategories([]);
    setSelectedColors([]);
  };

  // Disable body scroll when mobile menu open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => { document.body.style.overflow = 'auto'; };
  }, [isMobileMenuOpen]);

  usePageMeta({
    title: selectedCategories.length === 1 ? selectedCategories[0] : 'All Products',
    description: `Browse the full ${allProducts.length}-product Crown Commercial Furniture catalog — horeca seating, tables, outdoor furniture and more for restaurants, hotels, cafes and retail. Bulk B2B pricing.`,
    canonical: '/products',
  });

  return (
    <div className="min-h-screen flex flex-col bg-[#faf9f6]">
      <div className="relative w-full z-40 flex flex-col shadow-sm bg-white border-b border-gray-100">
        <AnnouncementBar />
        <Header />
      </div>

      {/* Mobile Browse Button */}
      <div className="md:hidden sticky top-0 z-30 bg-[#faf9f6]/90 backdrop-blur-md border-b border-gray-200 px-4 py-3">
        <button 
          onClick={() => setIsMobileMenuOpen(true)}
          className="w-full flex items-center justify-between bg-white border border-gray-200 px-5 py-3 rounded-xl shadow-sm text-[14px] font-medium tracking-wide text-gray-900"
        >
          <span>Browse Filters</span>
          <Menu size={18} className="text-gray-500" />
        </button>
      </div>

      <main className="flex-grow max-w-[1800px] mx-auto w-full px-4 md:px-8 lg:px-12 py-8 md:py-16 flex flex-col md:flex-row gap-8 lg:gap-12 relative">
        
        {/* Left Sidebar - Filter Sidebar (Desktop) */}
        <aside className="hidden md:flex flex-col w-[260px] flex-shrink-0 font-sans">
          <div className="sticky top-8 flex flex-col gap-4">
            
            {/* Active Filters Section */}
            {(selectedCategories.length > 0 || selectedColors.length > 0) && (
              <div className="flex flex-col gap-1.5">
                {selectedCategories.map(cat => (
                  <div key={cat} className="flex items-center justify-between bg-white px-4 py-3 rounded shadow-sm border border-gray-100/50">
                    <span className="text-[12px] text-gray-700 font-medium tracking-wide">{cat}</span>
                    <button onClick={() => toggleCategory(cat)}><X size={14} className="text-gray-400 hover:text-gray-700" /></button>
                  </div>
                ))}
                {selectedColors.map(col => (
                  <div key={col} className="flex items-center justify-between bg-white px-4 py-3 rounded shadow-sm border border-gray-100/50">
                    <div className="flex items-center gap-2.5">
                      <span className="text-[12px] text-gray-700 font-medium tracking-wide">{col} Color</span>
                    </div>
                    <button onClick={() => toggleColor(col)}><X size={14} className="text-gray-400 hover:text-gray-700" /></button>
                  </div>
                ))}
                
                <button onClick={clearAllFilters} className="w-full mt-2 bg-gray-200/70 hover:bg-gray-300 text-gray-800 text-[12px] font-semibold tracking-wide py-3 rounded transition-colors">
                  Remove All Filters
                </button>
              </div>
            )}

            {/* Filter Blocks Container */}
            <div className="flex flex-col bg-white rounded shadow-sm border border-gray-100/50 mt-2">
              
              {/* Category Block */}
              <div className="flex flex-col border-b border-gray-100/60 p-6">
                <div className="flex items-center justify-between mb-5">
                  <h4 className="text-[11px] font-bold tracking-widest text-gray-600 uppercase">Category</h4>
                  <button onClick={() => setSelectedCategories([])} className="flex items-center gap-1 text-[10px] font-bold tracking-widest text-gray-400 hover:text-gray-700 uppercase transition-colors">
                    <X size={10} /> Clear
                  </button>
                </div>
                
                <div className="flex flex-col gap-4">
                  {categoryList.map((cat, idx) => {
                    const isChecked = selectedCategories.includes(cat.name);
                    return (
                      <label key={idx} className="flex items-center gap-3.5 cursor-pointer group">
                        <input 
                          type="checkbox" 
                          className="hidden" 
                          checked={isChecked}
                          onChange={() => toggleCategory(cat.name)}
                        />
                        <div className={`w-4 h-4 rounded-sm flex items-center justify-center border transition-colors ${
                          isChecked 
                            ? 'bg-[#2d323c] border-[#2d323c]' 
                            : 'border-gray-300 bg-white group-hover:border-gray-400'
                        }`}>
                          {isChecked && <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>}
                        </div>
                        <span className="text-[13px] tracking-wide text-gray-500 group-hover:text-gray-800 transition-colors">
                          {cat.name} <span className="text-gray-400">({cat.count})</span>
                        </span>
                      </label>
                    );
                  })}
                </div>
              </div>

              {/* Color Block */}
              <div className="flex flex-col p-6">
                <div className="flex items-center justify-between mb-5">
                  <h4 className="text-[11px] font-bold tracking-widest text-gray-600 uppercase">Color</h4>
                  <button onClick={() => setSelectedColors([])} className="flex items-center gap-1 text-[10px] font-bold tracking-widest text-gray-400 hover:text-gray-700 uppercase transition-colors">
                    <X size={10} /> Clear
                  </button>
                </div>
                
                <div className="flex flex-col gap-4">
                  {colorList.map((color, idx) => {
                    const isChecked = selectedColors.includes(color.name);
                    return (
                      <label key={idx} className="flex items-center gap-3.5 cursor-pointer group">
                        <input 
                          type="checkbox" 
                          className="hidden" 
                          checked={isChecked}
                          onChange={() => toggleColor(color.name)}
                        />
                        <div className={`w-4 h-4 rounded-sm flex items-center justify-center border transition-colors ${
                          isChecked
                            ? 'bg-[#2d323c] border-[#2d323c]' 
                            : 'border-gray-300 bg-white group-hover:border-gray-400'
                        }`}>
                          {isChecked && <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>}
                        </div>
                        <div className={`w-3.5 h-3.5 rounded-full shadow-inner border border-gray-200/50 ${color.hex}`} />
                        <span className="text-[13px] tracking-wide text-gray-500 group-hover:text-gray-800 transition-colors">
                          {color.name} <span className="text-gray-400">({color.count})</span>
                        </span>
                      </label>
                    );
                  })}
                </div>
              </div>

            </div>
          </div>
        </aside>

        {/* Right Product Showcase */}
        <div className="flex-1 min-w-0">
          
          {/* Product Header */}
          <div className="mb-10 flex flex-col border-b border-gray-200/70 pb-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
              <div className="flex flex-col gap-2 max-w-xl">
                <h1 className="text-3xl md:text-[36px] font-chillax font-light text-gray-900 uppercase tracking-tight">
                  {selectedCategories.length === 1 ? selectedCategories[0] : (selectedCategories.length > 1 ? 'Multiple Categories' : 'All Products')}
                </h1>
                <p className="text-[14px] leading-relaxed text-gray-500 font-light">
                  Explore our collection of premium manufacturing options for B2B hospitality.
                </p>
              </div>
              
              <div className="flex items-center gap-6 text-[13px] text-gray-500 uppercase tracking-wider font-medium">
                <span className="font-mono">{displayedProducts.length < 10 ? `0${displayedProducts.length}` : displayedProducts.length} Products</span>
                <div className="h-4 w-[1px] bg-gray-300"></div>
                <button className="flex items-center gap-2 hover:text-gray-900 transition-colors">
                  Sort <ChevronDown size={14} />
                </button>
              </div>
            </div>
          </div>

          {/* Product Grid - 4x4 layout */}
          {displayedProducts.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-12">
              <AnimatePresence mode="popLayout">
                {displayedProducts.map((product) => (
                  <motion.div 
                    key={product.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    className="flex flex-col group cursor-pointer"
                  >
                    <Link to={`/product/${product.slug}`} className="flex flex-col h-full">
                      {/* Editorial Image Box */}
                    <div 
                      className="aspect-[4/5] flex items-center justify-center p-6 relative overflow-hidden rounded-xl transition-all duration-500 group-hover:shadow-lg border border-transparent group-hover:border-gray-200/50"
                      style={{ backgroundColor: product.bgColor }}
                    >
                      <img 
                        src={product.image} 
                        alt={product.name} 
                        className="w-full h-full object-contain object-center transition-transform duration-700 ease-out group-hover:scale-105 group-hover:-translate-y-1 mix-blend-multiply"
                      />
                    </div>
                    
                    {/* Card Details */}
                    <div className="pt-4 flex flex-col gap-2 px-1">
                      <div className="flex flex-col gap-1">
                        <h3 className="text-[13px] font-chillax font-medium tracking-wide text-gray-900 uppercase leading-snug">
                          {product.name}
                        </h3>
                        <div className="flex justify-between items-center mt-1">
                          <span className="text-[11px] font-mono text-gray-400 tracking-wider">
                            {product.code}
                          </span>
                          {/* Material Circles */}
                          <div className="flex items-center gap-1 shrink-0">
                            {product.colors.map((color, index) => (
                              <div 
                                key={index} 
                                className="w-2.5 h-2.5 rounded-full border border-gray-200 shadow-sm"
                                style={{ backgroundColor: color }}
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                      
                      {/* Action Buttons */}
                      <div className="mt-4 w-full">
                        <div 
                          onClick={(e) => handleGetQuote(e, product)}
                          className="w-full bg-[#ea580c] text-white text-center text-[10px] md:text-[11px] font-semibold tracking-widest uppercase py-3 rounded hover:bg-[#c2410c] transition-colors cursor-pointer shadow-sm"
                        >
                          Get Quote
                        </div>
                      </div>
                    </div>
                    </Link>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          ) : (
            <div className="py-20 text-center flex flex-col items-center">
              <p className="text-gray-500 text-lg mb-4">No products found matching these filters.</p>
              <button onClick={clearAllFilters} className="text-sm font-semibold tracking-wide uppercase border border-gray-300 px-6 py-2 rounded-lg hover:bg-gray-100 transition">
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </main>

      {/* Mobile Drawer (Left Sidebar) */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[60] md:hidden"
            />
            <motion.div 
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: "spring", damping: 25, stiffness: 250 }}
              className="fixed top-0 left-0 h-full w-[85%] max-w-[320px] bg-white z-[70] md:hidden shadow-2xl flex flex-col overflow-hidden"
            >
              <div className="flex items-center justify-between p-5 border-b border-gray-100 bg-gray-50/50">
                <h2 className="font-chillax text-lg uppercase tracking-widest font-medium text-gray-900">Filters</h2>
                <button 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 bg-white border border-gray-200 rounded-full text-gray-500 hover:text-gray-900 shadow-sm transition-colors"
                >
                  <X size={18} />
                </button>
              </div>
              
              <div className="flex-1 overflow-y-auto px-6 py-6 font-sans">
                <div className="mb-8">
                  <h4 className="text-[12px] font-bold tracking-widest text-gray-400 uppercase mb-5">Category</h4>
                  <div className="flex flex-col gap-5">
                    {categoryList.map((cat, idx) => {
                      const isChecked = selectedCategories.includes(cat.name);
                      return (
                        <label key={idx} className="flex items-center gap-4 cursor-pointer">
                          <input 
                            type="checkbox" 
                            className="hidden" 
                            checked={isChecked}
                            onChange={() => toggleCategory(cat.name)}
                          />
                          <div className={`w-6 h-6 rounded flex items-center justify-center border transition-all duration-200 shadow-sm ${
                            isChecked ? 'bg-gray-900 border-gray-900' : 'border-gray-300 bg-white'
                          }`}>
                            {isChecked && <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>}
                          </div>
                          <span className={`text-[15px] ${isChecked ? 'text-gray-900 font-semibold' : 'text-gray-600'}`}>
                            {cat.name} <span className="text-gray-400 text-[13px] ml-1">({cat.count})</span>
                          </span>
                        </label>
                      );
                    })}
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-[12px] font-bold tracking-widest text-gray-400 uppercase mb-5">Color</h4>
                  <div className="flex flex-col gap-5">
                    {colorList.map((color, idx) => {
                      const isChecked = selectedColors.includes(color.name);
                      return (
                        <label key={idx} className="flex items-center gap-4 cursor-pointer">
                          <input 
                            type="checkbox" 
                            className="hidden" 
                            checked={isChecked}
                            onChange={() => toggleColor(color.name)}
                          />
                          <div className={`w-6 h-6 rounded flex items-center justify-center border transition-all duration-200 shadow-sm ${
                            isChecked ? 'bg-gray-900 border-gray-900' : 'border-gray-300 bg-white'
                          }`}>
                            {isChecked && <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>}
                          </div>
                          <div className={`w-5 h-5 rounded-full shadow-inner border border-gray-200/50 ${color.hex}`} />
                          <span className={`text-[15px] ${isChecked ? 'text-gray-900 font-semibold' : 'text-gray-600'}`}>
                            {color.name} <span className="text-gray-400 text-[13px] ml-1">({color.count})</span>
                          </span>
                        </label>
                      );
                    })}
                  </div>
                </div>
              </div>
              
              <div className="p-5 border-t border-gray-100 flex gap-3 bg-white shadow-[0_-4px_10px_rgba(0,0,0,0.02)]">
                <button onClick={clearAllFilters} className="flex-1 py-3.5 bg-gray-50 hover:bg-gray-100 border border-gray-200 text-gray-700 rounded-xl text-[14px] font-semibold tracking-wide transition-colors">
                  Clear
                </button>
                <button onClick={() => setIsMobileMenuOpen(false)} className="flex-[2] py-3.5 bg-gray-900 hover:bg-gray-800 text-white rounded-xl text-[14px] font-semibold tracking-wide shadow-md transition-colors">
                  Show Results ({displayedProducts.length})
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
      
      {/* Request Quote Modal */}
      <RequestQuoteModal 
        isOpen={isQuoteModalOpen} 
        onClose={() => setIsQuoteModalOpen(false)} 
        product={selectedQuoteProduct} 
      />
    </div>
  );
};

export default ProductExplorer;
