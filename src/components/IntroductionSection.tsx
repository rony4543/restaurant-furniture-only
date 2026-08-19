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
          {/* Headline — same large size, slightly bolder weight */}
          <h2 className="text-[32px] md:text-[44px] lg:text-[52px] leading-[1.15] font-chillax font-medium tracking-[-0.025em] text-[#3e4435] text-left mb-5 md:mb-6">
            Engineered in Jodhpur.<br />Built for Global Hospitality.
          </h2>

          {/* Sub-headline — smaller, lighter, max-width for readability */}
          <p className="text-[20px] md:text-[26px] lg:text-[32px] leading-[1.45] font-chillax font-light tracking-[-0.01em] text-[#3e4435]/70 text-left">
            We craft contract-grade commercial furniture balancing architectural elegance, all-day dining comfort, and industrial-strength durability for hotels, cafes, and restaurants.
          </p>
        </motion.div>

        {/* Video Side */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="w-full lg:w-[45%] flex justify-center lg:justify-end mt-4 md:mt-0"
        >
           <div className="w-full max-w-[420px] lg:max-w-[350px] relative overflow-hidden flex items-start">
             <video 
               src="/videos/intro-video.mp4" 
               autoPlay 
               loop 
               muted 
               playsInline
               className="w-full h-auto block object-cover object-top rounded-xl md:rounded-none shadow-lg md:shadow-none"
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
