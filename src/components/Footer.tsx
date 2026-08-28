import { Link } from 'react-router-dom';
import { Instagram, Linkedin, Youtube, ChevronRight } from 'lucide-react';
import logoImg from '../assets/logo.png';

const Footer = () => {
  return (
    <footer className="w-full bg-[#fcfcfc] border-t border-gray-100 py-16 px-6 md:px-12 font-body text-[#737373]">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12 mb-16">
          
          {/* Column 1: Logo & Info */}
          <div className="md:col-span-4 flex flex-col">
            <div className="flex items-center mb-6">
              <img src={logoImg} alt="Restaurantfurniture.in Logo" className="h-[48px] w-auto object-contain object-left" />
            </div>
            <div className="text-[14px] leading-relaxed mb-8 max-w-sm flex flex-col gap-2">
              <p>Address: 123 AA Lane, Industrial Area,<br />Jodhpur - 342001. Rajasthan (India)</p>
              <p>Phone: +91 98765 43210</p>
              <p>Email: info@aa.in</p>
            </div>
            <div className="flex items-center gap-5 text-gray-500">
              <a href="#" className="hover:text-[#1a1a1a] transition-colors"><Instagram className="w-[18px] h-[18px]" /></a>
              <a href="#" className="hover:text-[#1a1a1a] transition-colors"><Linkedin className="w-[18px] h-[18px]" /></a>
              <a href="#" className="hover:text-[#1a1a1a] transition-colors flex items-center justify-center w-[18px] h-[18px]">
                {/* Pinterest SVG */}
                <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                  <path d="M12 0a12 12 0 0 0-4.37 23.17c-.07-.84-.13-2.13.03-3.05.15-.84 1-4.22 1-4.22s-.26-.52-.26-1.28c0-1.2.7-2.1 1.56-2.1.73 0 1.08.55 1.08 1.2 0 .74-.47 1.84-.71 2.86-.2.85.43 1.54 1.26 1.54 1.52 0 2.68-1.6 2.68-3.9 0-2.03-1.46-3.46-3.56-3.46-2.45 0-3.89 1.84-3.89 3.73 0 .74.28 1.53.64 1.96.07.08.08.16.06.25-.06.26-.2.8-.23.93-.04.15-.13.18-.28.11-1.04-.49-1.69-2.03-1.69-3.26 0-2.66 1.93-5.1 5.57-5.1 2.92 0 5.19 2.08 5.19 4.86 0 2.9-1.83 5.24-4.37 5.24-.85 0-1.65-.44-1.92-.96l-.52 2c-.19.73-.7 1.65-1.05 2.2A12 12 0 1 0 12 0z"/>
                </svg>
              </a>
              <a href="#" className="hover:text-[#1a1a1a] transition-colors"><Youtube className="w-[18px] h-[18px]" /></a>
            </div>
          </div>

          {/* Column 2: Company */}
          <div className="md:col-span-2 flex flex-col pt-2">
            <h3 className="text-[#1a1a1a] font-semibold text-[15px] mb-5">Company</h3>
            <ul className="flex flex-col gap-3.5 text-[14px]">
              <li><Link to="/" className="hover:text-[#1a1a1a] transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-[#1a1a1a] transition-colors">About us</Link></li>
              <li><Link to="/manufacturing" className="hover:text-[#1a1a1a] transition-colors">Manufacturing</Link></li>
              <li><Link to="/projects" className="hover:text-[#1a1a1a] transition-colors">Projects</Link></li>
            </ul>
          </div>

          {/* Column 3: Product */}
          <div className="md:col-span-2 flex flex-col pt-2">
            <h3 className="text-[#1a1a1a] font-semibold text-[15px] mb-5">Product</h3>
            <ul className="flex flex-col gap-3.5 text-[14px]">
              <li><Link to="/products" className="hover:text-[#1a1a1a] transition-colors">Bar Chairs</Link></li>
              <li><Link to="/products" className="hover:text-[#1a1a1a] transition-colors">Indoor Chairs</Link></li>
              <li><Link to="/products" className="hover:text-[#1a1a1a] transition-colors">Lounge Chairs</Link></li>
              <li><Link to="/products" className="hover:text-[#1a1a1a] transition-colors">Tables</Link></li>
              <li><Link to="/products" className="hover:text-[#1a1a1a] transition-colors">Outdoor Furniture</Link></li>
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div className="md:col-span-4 flex flex-col pt-2">
            <h3 className="text-[#1a1a1a] font-semibold text-[15px] mb-4">Newsletter</h3>
            <p className="text-[14px] mb-6 leading-relaxed text-[#737373]">
              Get tips, product updates, and insights on working smarter with our commercial furniture.
            </p>
            <div className="relative flex items-center w-full max-w-sm">
              <input 
                type="email" 
                placeholder="Email address" 
                className="w-full bg-transparent border border-gray-200 rounded-full py-[10px] pl-4 pr-[120px] text-[14px] text-gray-900 outline-none focus:border-[#f97316] transition-colors"
              />
              <button className="absolute right-1 top-1 bottom-1 bg-[#f97316] hover:bg-[#ea580c] text-white text-[13px] font-medium px-5 rounded-full transition-colors flex items-center gap-1 shadow-sm">
                Subscribe <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Row */}
        <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4 text-[13px] text-[#9ca3af]">
          <div>
            © 2026 Restaurantfurniture.in. All rights reserved.
          </div>
          <div className="flex flex-wrap items-center gap-6">
            <Link to="/terms-and-privacy-policy" className="hover:text-[#737373] transition-colors">T&C and Privacy Policy</Link>
            <Link to="/return-and-refund-policy" className="hover:text-[#737373] transition-colors">Return & Refund Policy</Link>
            <Link to="/shipping-policy" className="hover:text-[#737373] transition-colors">Shipping Policy</Link>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
