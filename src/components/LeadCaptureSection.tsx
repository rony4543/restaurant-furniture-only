import { useState } from 'react';
import { motion } from 'framer-motion';

const venueTypes = ['Restaurant', 'Hotel', 'Cafe', 'Retail', 'Co-Working Space', 'Other'];

const LeadCaptureSection = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [selectedVenue, setSelectedVenue] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 4000);
  };

  return (
    <section className="w-full max-w-[1440px] mx-auto px-4 md:px-10 pb-16 md:pb-24">
      <div className="bg-[#F4F1EA] rounded-2xl p-8 md:p-16 lg:p-20 relative overflow-hidden">
        
        {/* Subtle decorative elements */}
        <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-[#c49a6c] opacity-[0.06] rounded-full blur-[80px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[250px] h-[250px] bg-[#c49a6c] opacity-[0.04] rounded-full blur-[60px] translate-y-1/2 -translate-x-1/3 pointer-events-none"></div>

        <div className="relative z-10 max-w-[720px] mx-auto">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="text-center mb-10"
          >
            <h2 className="text-[28px] md:text-[38px] lg:text-[44px] font-chillax font-medium tracking-[-0.02em] text-[#1c1c1c] leading-[1.15] mb-4">
              Planning a New Venue<br className="hidden md:block" /> or Renovation?
            </h2>
            <p className="text-[16px] md:text-[18px] text-[#666] font-light leading-[1.6] max-w-[560px] mx-auto">
              Partner with our Jodhpur manufacturing team for custom finishes, bulk pricing, and 3D space planning.
            </p>
          </motion.div>

          {isSubmitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-12"
            >
              <div className="w-14 h-14 bg-green-500/15 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-[20px] font-medium text-[#1c1c1c] mb-2">Request Received!</h3>
              <p className="text-[14px] text-[#888]">Our trade specialist will reach out within 24 hours.</p>
            </motion.div>
          ) : (
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              onSubmit={handleSubmit}
              className="flex flex-col gap-4"
            >
              {/* Full Name */}
              <input
                type="text"
                required
                placeholder="Full Name"
                className="w-full bg-white border border-[#ddd] rounded-xl px-5 py-4 text-[15px] text-[#1c1c1c] placeholder-[#aaa] focus:outline-none focus:border-[#c49a6c] focus:ring-1 focus:ring-[#c49a6c]/30 transition-colors"
              />

              {/* Email / Phone row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  required
                  placeholder="Business Email / Phone"
                  className="w-full bg-white border border-[#ddd] rounded-xl px-5 py-4 text-[15px] text-[#1c1c1c] placeholder-[#aaa] focus:outline-none focus:border-[#c49a6c] focus:ring-1 focus:ring-[#c49a6c]/30 transition-colors"
                />
                
                {/* Venue Type dropdown */}
                <div className="relative">
                  <select
                    required
                    value={selectedVenue}
                    onChange={(e) => setSelectedVenue(e.target.value)}
                    className={`w-full bg-white border border-[#ddd] rounded-xl px-5 py-4 text-[15px] focus:outline-none focus:border-[#c49a6c] focus:ring-1 focus:ring-[#c49a6c]/30 transition-colors appearance-none cursor-pointer ${selectedVenue ? 'text-[#1c1c1c]' : 'text-[#aaa]'}`}
                  >
                    <option value="" disabled>Venue Type</option>
                    {venueTypes.map(type => (
                      <option key={type} value={type} className="text-[#1c1c1c]">{type}</option>
                    ))}
                  </select>
                  <svg className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#aaa] pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-[#1c1c1c] hover:bg-[#c49a6c] text-white font-semibold text-[13px] tracking-widest uppercase py-4 rounded-xl transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg mt-2"
              >
                Connect With Our Trade Specialist
              </button>
            </motion.form>
          )}
        </div>
      </div>
    </section>
  );
};

export default LeadCaptureSection;
