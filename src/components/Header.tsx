import { useState, useRef, useEffect } from 'react';
import { Search, PhoneCall, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import logoImg from '../../ChatGPT Image Aug 13, 2026, 05_27_28 PM.png';
import { allProducts } from '../data/products';

const Header = () => {
  const [activeItem, setActiveItem] = useState('Home');
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileSearchOpen, setIsMobileSearchOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  const navigate = useNavigate();
  const searchRef = useRef<HTMLDivElement>(null);

  const searchResults = searchQuery.trim() === '' 
    ? [] 
    : allProducts.filter(p => p.name.toLowerCase().includes(searchQuery.toLowerCase())).slice(0, 5);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsSearchFocused(false);
        setIsMobileSearchOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isMobileMenuOpen]);

  const handleProductClick = (slug: string) => {
    setSearchQuery('');
    setIsSearchFocused(false);
    setIsMobileSearchOpen(false);
    navigate(`/product/${slug}`);
  };

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/' },
    { name: 'Manufacturing', path: '/manufacturing' },
    { name: 'Product', path: '/products' },
    { name: 'Project', path: '/projects' }
  ];

  return (
    <>
      <header className={`w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'fixed top-0 bg-white/80 backdrop-blur-lg border-b border-gray-200/50 shadow-sm py-2' 
          : 'relative bg-white py-4 border-b border-gray-200'
      }`}>
        <div className="max-w-[1440px] mx-auto px-4 md:px-10 flex justify-between items-center flex-nowrap whitespace-nowrap relative">
          
          {/* Logo and Company Name (Left Side) */}
          <div className="flex items-center flex-shrink-0">
            <Link to="/" className="flex items-center gap-3 md:gap-6">
              <img src={logoImg} alt="Crown Commercial Furniture" className={`w-auto object-contain scale-[1.5] transition-all duration-300 ${isScrolled ? 'h-[30px]' : 'h-[40px]'} origin-left`} />
              <span className={`font-comfortaa tracking-widest text-gray-800 font-light hidden lg:block ml-2 transition-all duration-300 ${isScrolled ? 'text-lg' : 'text-xl'}`}>Restaurantfurniture.in</span>
            </Link>
          </div>

          {/* Navigation (Middle) - Hidden on Mobile */}
          <nav className="hidden lg:flex flex-1 justify-center px-4 overflow-x-auto scrollbar-none">
            <ul className="flex list-none justify-center m-0 p-1.5 font-comfortaa bg-gray-100/80 backdrop-blur-md border border-black/10 rounded-full shadow-[0_2px_8px_rgba(0,0,0,0.05)]">
              {navItems.map((item) => (
                <li key={item.name} className="relative z-10">
                  <Link 
                    to={item.path}
                    onClick={() => setActiveItem(item.name)}
                    className={`block px-5 py-2 text-[14px] font-medium rounded-full transition-colors duration-300 relative z-10 ${
                      activeItem === item.name 
                        ? 'text-gray-900' 
                        : 'text-gray-600 hover:text-gray-900 hover:bg-black/5'
                    }`}
                  >
                    {item.name}
                  </Link>
                  {activeItem === item.name && (
                    <motion.div
                      layoutId="active-nav-pill"
                      className="absolute inset-0 bg-white rounded-full shadow-[0_1px_4px_rgba(0,0,0,0.1)] -z-10"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                </li>
              ))}
            </ul>
          </nav>

          {/* Header Actions (Right Side) */}
          <div className="flex items-center gap-1 md:gap-5 flex-shrink-0 ml-auto" ref={searchRef}>
            
            {/* Desktop Search Bar */}
            <div className="relative hidden lg:flex items-center bg-gray-50 rounded-full py-2 px-4 gap-2 border border-transparent focus-within:border-accent focus-within:bg-white transition-colors">
              <Search className="text-gray-500 w-[18px] h-[18px]" />
              <input 
                type="text" 
                placeholder="Search products..." 
                className="border-none bg-transparent outline-none text-[14px] w-[160px] text-gray-800 placeholder-gray-500"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => setIsSearchFocused(true)}
              />
            </div>

            {/* Mobile Search Icon (Shows search input when tapped) */}
            <div className="relative lg:hidden">
              <button 
                className="p-2 rounded-full hover:bg-gray-100 transition-colors w-[40px] h-[40px] flex items-center justify-center flex-shrink-0"
                onClick={() => {
                  setIsMobileSearchOpen(!isMobileSearchOpen);
                  setIsSearchFocused(!isMobileSearchOpen);
                }}
              >
                <Search className="w-5 h-5 text-gray-800" />
              </button>
            </div>

            {/* Mobile Hamburger Menu Icon (Right Side on Mobile) */}
            <button 
              className="lg:hidden p-2 rounded-full hover:bg-gray-100 transition-colors w-[40px] h-[40px] flex items-center justify-center flex-shrink-0 ml-1"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <Menu className="w-6 h-6 text-gray-800" />
            </button>
            
            {/* Search Dropdown (Shared between mobile/desktop) */}
            <AnimatePresence>
              {isSearchFocused && (isMobileSearchOpen || window.innerWidth >= 1024) && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute top-full mt-4 right-4 left-4 lg:left-auto lg:w-[300px] bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden z-50"
                >
                  {/* Mobile Search Input (Inside dropdown) */}
                  <div className="lg:hidden p-3 border-b border-gray-100">
                    <div className="flex items-center bg-gray-50 rounded-lg px-3 py-2">
                      <Search className="w-4 h-4 text-gray-400 mr-2" />
                      <input
                        type="text"
                        autoFocus
                        placeholder="Search products..."
                        className="bg-transparent border-none outline-none text-sm w-full"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                      />
                    </div>
                  </div>

                  {searchQuery.trim() !== '' ? (
                    searchResults.length > 0 ? (
                      <div className="flex flex-col py-2 max-h-[60vh] overflow-y-auto">
                        {searchResults.map(product => (
                          <div 
                            key={product.id}
                            onClick={() => handleProductClick(product.slug)}
                            className="flex items-center gap-4 p-3 hover:bg-gray-50 cursor-pointer transition-colors"
                          >
                            <div className="w-12 h-12 rounded bg-gray-100 flex-shrink-0 flex items-center justify-center p-1" style={{ backgroundColor: product.bgColor }}>
                              <img src={product.image} alt={product.name} className="w-full h-full object-contain mix-blend-multiply" />
                            </div>
                            <div className="flex flex-col">
                              <span className="text-[14px] font-medium text-gray-900">{product.name}</span>
                              <span className="text-[12px] text-gray-500">{product.category}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="p-4 text-center text-[13px] text-gray-500">
                        No products found
                      </div>
                    )
                  ) : (
                    <div className="p-4 text-center text-[13px] text-gray-500 lg:hidden">
                      Type to search our catalog
                    </div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
            
            {/* CTA Button - Hidden on Mobile completely as requested */}
            <a href="tel:+919876543210" className="hidden lg:flex items-center justify-center gap-2 bg-[#1c1c1c] hover:bg-black text-white h-[48px] px-7 rounded-full text-[14px] font-semibold font-comfortaa transition-all hover:-translate-y-0.5 shadow-sm">
              <PhoneCall className="w-[18px] h-[18px]" />
              <span>Contact Sales</span>
            </a>
          </div>
        </div>
      </header>

      {/* Mobile Sidebar Overlay & Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[60] lg:hidden"
            />
            <motion.div 
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: "spring", damping: 25, stiffness: 250 }}
              className="fixed top-0 left-0 h-full w-[80%] max-w-[320px] bg-white z-[70] lg:hidden shadow-2xl flex flex-col"
            >
              <div className="p-5 flex justify-between items-center border-b border-gray-100">
                <span className="font-comfortaa font-bold text-lg text-gray-900 tracking-tight">Menu</span>
                <button 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
                >
                  <X className="w-5 h-5 text-gray-600" />
                </button>
              </div>
              <div className="flex-1 overflow-y-auto py-6 px-5 flex flex-col gap-2">
                {navItems.map(item => (
                  <Link
                    key={item.name}
                    to={item.path}
                    onClick={() => {
                      setActiveItem(item.name);
                      setIsMobileMenuOpen(false);
                    }}
                    className={`p-4 rounded-xl text-base font-medium tracking-wide transition-colors ${
                      activeItem === item.name 
                        ? 'bg-gray-100 text-gray-900' 
                        : 'text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className="p-5 border-t border-gray-100">
                <a href="tel:+919876543210" className="w-full flex items-center justify-center gap-2 bg-[#ea580c] text-white py-4 rounded-xl font-semibold tracking-wide">
                  <PhoneCall className="w-5 h-5" />
                  Call Us Now
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
