import { motion } from 'framer-motion';

const IntroductionSection = () => {
  return (
    <section className="w-full max-w-[1440px] mx-auto px-4 md:px-10 py-16 md:py-24">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-16">
        {/* Text Side */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="w-full lg:w-[55%]"
        >
          {/* Headline */}
          <h2 className="text-[32px] md:text-[44px] lg:text-[52px] leading-[1.15] font-chillax font-medium tracking-[-0.025em] text-[#3e4435] text-left mb-5 md:mb-6">
            Built for high traffic,<br className="hidden md:block"/> trusted by leading hospitality brands.
          </h2>

          {/* Sub-headline */}
          <p className="text-[18px] md:text-[22px] lg:text-[26px] leading-[1.45] font-chillax font-light tracking-[-0.01em] text-[#3e4435]/80 text-left mb-8 md:mb-12">
            We craft contract-grade commercial furniture balancing architectural elegance, all-day dining comfort, and industrial-strength durability.
          </p>

          {/* Stats Grid - 2x2 on all screens */}
          <div className="grid grid-cols-2 gap-y-8 gap-x-4 md:gap-x-8">
            <div className="flex flex-col border-l-2 border-[#c49a6c] pl-4">
              <span className="text-[32px] md:text-[40px] font-chillax font-bold text-[#1c1c1c] leading-none mb-1">500+</span>
              <span className="text-[10px] md:text-[12px] text-gray-500 uppercase tracking-widest font-semibold">Projects Completed</span>
            </div>
            <div className="flex flex-col border-l-2 border-[#c49a6c] pl-4">
              <span className="text-[32px] md:text-[40px] font-chillax font-bold text-[#1c1c1c] leading-none mb-1">12+</span>
              <span className="text-[10px] md:text-[12px] text-gray-500 uppercase tracking-widest font-semibold">Years Experience</span>
            </div>
            <div className="flex flex-col border-l-2 border-[#c49a6c] pl-4">
              <span className="text-[32px] md:text-[40px] font-chillax font-bold text-[#1c1c1c] leading-none mb-1">50k+</span>
              <span className="text-[10px] md:text-[12px] text-gray-500 uppercase tracking-widest font-semibold">Items Delivered</span>
            </div>
            <div className="flex flex-col border-l-2 border-[#c49a6c] pl-4">
              <span className="text-[32px] md:text-[40px] font-chillax font-bold text-[#1c1c1c] leading-none mb-1">100%</span>
              <span className="text-[10px] md:text-[12px] text-gray-500 uppercase tracking-widest font-semibold">Client Rating</span>
            </div>
          </div>
        </motion.div>

        {/* Video Side */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="w-full lg:w-[45%] flex lg:justify-end"
        >
           <div className="w-full max-w-[350px] relative overflow-hidden flex items-start">
             <video 
               src="/videos/intro-video.mp4" 
               autoPlay 
               loop 
               muted 
               playsInline
               className="w-full h-auto block object-cover object-top"
               style={{ 
                 clipPath: 'inset(0 0 18% 0)',
                 marginBottom: '-18%' 
               }} // Crops the bottom text out by masking and reducing container height
             />
           </div>
        </motion.div>
      </div>
    </section>
  );
};

export default IntroductionSection;
