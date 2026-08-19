import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, X } from 'lucide-react';
import { allProducts } from '../data/products';

const categories = [
  { name: 'Bar Chairs', filter: (p: any) => p.category === 'Bar Chairs' },
  { name: 'Indoor Chairs', filter: (p: any) => p.category === 'Indoor Chairs' },
  { name: 'Lounge Chairs', filter: (p: any) => p.category === 'Lounge Chairs' },
  { name: 'Tables', filter: (p: any) => p.category.includes('Tables') },
  { name: 'Outdoor Furniture', filter: (p: any) => p.category.includes('Outdoor') },
];

const CategoryNav = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const navRef = useRef<HTMLDivElement>(null);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setActiveCategory(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleCategory = (catName: string) => {
    if (activeCategory === catName) {
      setActiveCategory(null);
    } else {
      setActiveCategory(catName);
    }
  };

  return (
    <div ref={navRef} className="w-full bg-white border-b border-gray-100 relative z-40 hidden md:block shadow-sm">
      <div className="max-w-[1440px] mx-auto px-10 flex justify-center relative">
        <ul className="flex space-x-12">
          {categories.map((cat) => (
            <li key={cat.name} className="py-3">
              <button 
                onClick={() => toggleCategory(cat.name)}
                className={`flex items-center gap-1.5 text-[13px] font-semibold transition-colors font-comfortaa uppercase tracking-wider ${activeCategory === cat.name ? 'text-accent' : 'text-gray-700 hover:text-accent'}`}
              >
                {cat.name}
                {activeCategory === cat.name ? (
                  <X className="w-4 h-4" />
                ) : (
                  <ChevronDown className="w-4 h-4" />
                )}
              </button>
              
              {/* Dropdown Menu (Amazon/Flipkart Style) */}
              <AnimatePresence>
                {activeCategory === cat.name && (
                  <motion.div 
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 5 }}
                    transition={{ duration: 0.15 }}
                    className="absolute left-0 top-[100%] w-full bg-white shadow-xl border-t border-gray-100 p-8 rounded-b-xl"
                  >
                     <div className="max-w-[1440px] mx-auto">
                        <div className="mb-6 flex justify-between items-center border-b border-gray-100 pb-2">
                           <h3 className="text-lg font-comfortaa font-bold text-gray-900">{cat.name}</h3>
                           <div className="flex items-center gap-4">
                             <Link to="/products" className="text-sm font-medium text-accent hover:underline" onClick={() => setActiveCategory(null)}>View All</Link>
                             <button onClick={() => setActiveCategory(null)} className="text-gray-400 hover:text-gray-900 p-1 transition-colors">
                               <X className="w-5 h-5" />
                             </button>
                           </div>
                        </div>
                        
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-3 max-h-[400px] overflow-y-auto pr-4 scrollbar-thin scrollbar-thumb-gray-200 scrollbar-track-transparent">
                          {allProducts.filter(cat.filter).map((product) => (
                            <Link 
                              key={product.id} 
                              to={`/product/${product.slug}`}
                              className="group flex items-center gap-3 p-2 hover:bg-gray-50 rounded-lg transition-colors"
                              onClick={() => setActiveCategory(null)}
                            >
                              <div className="w-[50px] h-[50px] flex-shrink-0 bg-gray-100 rounded p-1 overflow-hidden flex items-center justify-center transition-transform group-hover:scale-105" style={{ backgroundColor: product.bgColor }}>
                                <img src={product.image} alt={product.name} className="w-full h-full object-contain mix-blend-multiply" />
                              </div>
                              <span className="text-[13px] font-medium text-gray-700 group-hover:text-accent transition-colors line-clamp-2">
                                {product.name}
                              </span>
                            </Link>
                          ))}
                        </div>
                     </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CategoryNav;
