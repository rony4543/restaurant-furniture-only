import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronDown } from 'lucide-react';
import { Product } from '../data/products';

interface RequestQuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  product?: Product | null;
}

const RequestQuoteModal: React.FC<RequestQuoteModalProps> = ({ isOpen, onClose, product }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  const handleClose = () => {
    onClose();
    setTimeout(() => {
      setIsSubmitted(false);
      setIsChecked(false);
    }, 300);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isChecked) return;
    setIsSubmitted(true);
    setTimeout(() => {
      handleClose();
    }, 3000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex justify-center items-center overflow-y-auto p-4 custom-scrollbar font-inter">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-[620px] bg-[#222222] border border-[#333] rounded-[20px] shadow-2xl my-auto z-10 overflow-hidden"
          >
            <button
              onClick={handleClose}
              className="absolute top-5 right-5 text-[#888] hover:text-white transition-colors"
            >
              <X size={20} />
            </button>

            {isSubmitted ? (
              <div className="p-12 text-center flex flex-col items-center justify-center min-h-[400px]">
                <div className="w-16 h-16 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h2 className="text-[22px] text-white font-medium mb-3">Request Sent Successfully!</h2>
                <p className="text-[13px] text-[#888]">
                  Thank you for your interest in {product?.name}. Our furniture team will contact you shortly.
                </p>
              </div>
            ) : (
              <div className="p-8">
                <h2 className="text-[22px] text-white font-semibold mb-2 mt-1">
                  Request Pricing for {product ? `This ${product.name}` : 'This Product'}
                </h2>
                <p className="text-[13px] text-[#888] leading-relaxed mb-6 pr-6">
                  Share your project requirements and our furniture team will contact you with pricing, availability, delivery and customisation options.
                </p>

                <hr className="border-t border-[#333] mb-8" />

                <form onSubmit={handleSubmit} className="flex flex-col gap-8">
                  {/* Full Name */}
                  <div className="relative">
                    <input type="text" required className="w-full bg-transparent border-b border-[#444] pb-2 text-[14px] text-white placeholder-transparent focus:border-white focus:outline-none peer" id="fullName" placeholder="Full Name" />
                    <label htmlFor="fullName" className="absolute left-0 top-0 text-[13px] text-[#888] -translate-y-5 peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-5 transition-all pointer-events-none">Full Name <span className="text-[#ff0a0a]">*</span></label>
                  </div>

                  <div className="grid grid-cols-2 gap-8">
                    <div className="relative">
                      <input type="email" required className="w-full bg-transparent border-b border-[#444] pb-2 text-[14px] text-white placeholder-transparent focus:border-white focus:outline-none peer" id="email" placeholder="Email Address" />
                      <label htmlFor="email" className="absolute left-0 top-0 text-[13px] text-[#888] -translate-y-5 peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-5 transition-all pointer-events-none">Email Address <span className="text-[#ff0a0a]">*</span></label>
                    </div>
                    <div className="relative">
                      <input type="text" required className="w-full bg-transparent border-b border-[#444] pb-2 text-[14px] text-white placeholder-transparent focus:border-white focus:outline-none peer" id="location" placeholder="Location / City" />
                      <label htmlFor="location" className="absolute left-0 top-0 text-[13px] text-[#888] -translate-y-5 peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-5 transition-all pointer-events-none">Location / City <span className="text-[#ff0a0a]">*</span></label>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-8">
                    <div className="relative flex items-end">
                      <select required className="w-full bg-transparent border-b border-[#444] pb-2 text-[14px] text-white focus:border-white focus:outline-none appearance-none cursor-pointer">
                        <option value="in" className="text-black">India (+91)</option>
                        <option value="us" className="text-black">US (+1)</option>
                        <option value="uk" className="text-black">UK (+44)</option>
                      </select>
                      <ChevronDown size={14} className="absolute right-0 bottom-3 text-[#888] pointer-events-none" />
                    </div>
                    <div className="relative">
                      <input type="tel" required className="w-full bg-transparent border-b border-[#444] pb-2 text-[14px] text-white placeholder-transparent focus:border-white focus:outline-none peer" id="mobile" placeholder="Mobile Number" />
                      <label htmlFor="mobile" className="absolute left-0 top-0 text-[13px] text-[#888] -translate-y-5 peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-5 transition-all pointer-events-none">Mobile Number <span className="text-[#ff0a0a]">*</span></label>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-8">
                    <div className="relative">
                      <select required defaultValue="" className="w-full bg-transparent border-b border-[#444] pb-2 text-[14px] text-white focus:border-white focus:outline-none appearance-none cursor-pointer peer">
                        <option value="" disabled className="text-[#888] hidden">Delivery Timeline *</option>
                        <option value="immediate" className="text-black">Immediate</option>
                        <option value="1m" className="text-black">Within 1 Month</option>
                        <option value="3m" className="text-black">1 - 3 Months</option>
                      </select>
                      <ChevronDown size={14} className="absolute right-0 bottom-3 text-[#888] pointer-events-none" />
                      <label className="absolute left-0 top-0 text-[13px] text-[#888] -translate-y-5 transition-all pointer-events-none">Delivery Timeline <span className="text-[#ff0a0a]">*</span></label>
                    </div>
                    <div className="relative">
                      <input type="text" className="w-full bg-transparent border-b border-[#444] pb-2 text-[14px] text-white placeholder-transparent focus:border-white focus:outline-none peer" id="company" placeholder="Company Name (Optional)" />
                      <label htmlFor="company" className="absolute left-0 top-0 text-[13px] text-[#888] -translate-y-5 peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-5 transition-all pointer-events-none">Company Name (Optional)</label>
                    </div>
                  </div>

                  <div className="relative mt-2">
                    <textarea rows={1} className="w-full bg-transparent border-b border-[#444] pb-2 text-[14px] text-white placeholder-transparent focus:border-white focus:outline-none peer resize-none" id="reqs" placeholder="Additional Requirements" />
                    <label htmlFor="reqs" className="absolute left-0 top-0 text-[13px] text-[#888] -translate-y-5 peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-5 transition-all pointer-events-none">Additional Requirements (Colors, Finishes, Dimensions...)</label>
                    <div className="absolute right-0 bottom-2 pointer-events-none">
                      <svg width="6" height="6" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 0L0 6M4 0L0 4M2 0L0 2" stroke="#666" strokeWidth="0.5"/>
                      </svg>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 mt-4">
                    <div className="relative flex items-center justify-center">
                      <input 
                        type="checkbox" 
                        id="agree" 
                        required 
                        checked={isChecked}
                        onChange={e => setIsChecked(e.target.checked)}
                        className="w-[18px] h-[18px] appearance-none rounded-[4px] border border-[#ff0a0a] bg-transparent checked:bg-[#ff0a0a] cursor-pointer transition-colors m-0" 
                      />
                      {isChecked && (
                        <svg className="absolute w-3 h-3 text-white pointer-events-none" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      )}
                    </div>
                    <label htmlFor="agree" className="text-[13px] text-[#ff0a0a] cursor-pointer select-none">
                      I agree to be contacted regarding this product enquiry. *
                    </label>
                  </div>

                  <button 
                    type="submit" 
                    disabled={!isChecked}
                    className="w-full bg-[#ff0a0a] hover:bg-[#e60909] disabled:bg-[#ff0a0a]/50 disabled:cursor-not-allowed text-white font-medium text-[14px] tracking-wider py-[15px] rounded-full mt-2 transition-colors uppercase"
                  >
                    Request My Price
                  </button>
                </form>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

export default RequestQuoteModal;
