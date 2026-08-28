import { motion } from 'framer-motion';

const BottomCTASection = () => {
  return (
    <section className="py-24 bg-[#3e4435] text-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] -right-[10%] w-[50%] h-[150%] bg-[#4a5240] rounded-full blur-[120px] opacity-50 mix-blend-screen"></div>
        <div className="absolute -bottom-[20%] -left-[10%] w-[50%] h-[150%] bg-[#2c3025] rounded-full blur-[120px] opacity-50 mix-blend-multiply"></div>
      </div>

      <div className="max-w-[1200px] mx-auto px-6 md:px-10 relative z-10 flex flex-col items-center justify-center text-center">
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl lg:text-6xl font-chillax mb-6 leading-[1.1] max-w-3xl"
        >
          Ready to outfit your venue?
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-lg md:text-xl text-white/90 max-w-xl mx-auto font-medium mb-10"
        >
          Contact our team today for a custom quote or to request samples.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="w-full max-w-lg mx-auto"
        >
          <form className="relative flex items-center w-full shadow-lg rounded-full">
            <input 
              type="email" 
              placeholder="hello@yourvenue.com" 
              className="w-full bg-white/10 backdrop-blur-sm border border-white/20 rounded-full py-4 pl-6 pr-[160px] text-base text-white placeholder-white/50 outline-none focus:border-[#ea580c] focus:bg-white/15 transition-all"
              required
            />
            <button 
              type="submit" 
              className="absolute right-1.5 top-1.5 bottom-1.5 bg-[#ea580c] hover:bg-[#c2410c] text-white text-[15px] font-semibold px-6 rounded-full transition-colors flex items-center justify-center gap-2"
            >
              Request Quote
            </button>
          </form>
          
          <div className="mt-5 flex items-center justify-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
            <p className="text-center text-[14px] text-white/70 font-medium">
              We reply within 24 hours.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BottomCTASection;
