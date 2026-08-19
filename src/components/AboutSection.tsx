import { motion } from 'framer-motion';

const AboutSection = () => {
  const stats = [
    { number: '500+', label: 'VENUES FURNISHED' },
    { number: '99.2%', label: 'ON-TIME DELIVERY RATE' },
    { number: '3-Year', label: 'STRUCTURAL WARRANTY' },
    { number: '100%', label: 'B2B CERTIFIED MATERIALS' },
  ];

  return (
    <section className="w-full max-w-[1440px] mx-auto px-4 md:px-10 pt-4 md:pt-8 pb-16 md:pb-24">
      {/* The orange "pill" container */}
      <div className="bg-orange-400 text-white rounded-2xl p-10 md:p-16 lg:p-24 relative overflow-hidden">
        
        {/* Background Decor */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white opacity-10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>

        <div className="relative z-10">
          
          {/* Top Row: Headline (Left) & Content (Right) */}
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-24 mb-10 md:mb-12">
            
            {/* Left Side: Headline */}
            <div className="w-full lg:w-1/2">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              >
                <h2 className="text-[36px] md:text-[44px] lg:text-[52px] leading-[1.15] font-chillax font-light tracking-[-0.02em] text-white">
                  Built for High Traffic. Trusted by Leading Hospitality Brands.
                </h2>
              </motion.div>
            </div>

            {/* Right Side: Paragraph */}
            <div className="w-full lg:w-1/2 flex items-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              >
                <p className="text-white/90 text-[16px] md:text-[18px] leading-[1.8] font-light">
                  At Restaurant Furniture, we bridge the gap between architectural elegance and commercial endurance. Since our founding, we have partnered with over 500+ restaurants, luxury hotels, bustling cafes, and retail spaces to deliver heavy-duty, high-performance furniture that stands up to daily commercial wear while keeping your aesthetic sharp and inviting.
                </p>
              </motion.div>
            </div>
          </div>

          {/* Bottom Row: Numbers */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4 border-t border-white/20 pt-8 md:pt-10">
            {stats.map((stat, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: 0.2 + (index * 0.1), ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col lg:border-l first:border-l-0 border-white/20 lg:pl-8 first:pl-0"
              >
                <span className="text-[40px] md:text-[48px] font-chillax font-light text-white mb-2 leading-none">
                  {stat.number}
                </span>
                <span className="text-[12px] md:text-[13px] text-white/90 uppercase tracking-widest font-semibold leading-relaxed max-w-[140px]">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;
