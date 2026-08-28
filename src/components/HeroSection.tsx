import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import heroVideo from '../Drone_camera_moving_around_chair_202608160217.mp4';

const HeroSection = () => {
  return (
    <section 
      className="relative w-full min-h-[calc(100vh-120px)] flex overflow-hidden"
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover scale-110 pointer-events-none"
        src={heroVideo}
      />
      <div className="w-full relative z-10 max-w-[1440px] mx-auto px-6 md:px-10 pb-16 pt-24 md:pt-16 lg:pt-20 flex flex-col justify-start">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col text-left px-2 md:px-4 mt-0"
        >
          <motion.h1 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-[58px] sm:text-[64px] md:text-[68px] lg:text-[76px] leading-[1.0] md:leading-[0.95] font-chillax font-light tracking-[-0.045em] text-white md:text-[#3e4435] drop-shadow-lg md:drop-shadow-none max-w-4xl w-[90%] md:w-full"
          >
            <span className="block">Bulk Dining Furniture</span>
            <span className="block">for Distinctive</span>
            <span className="block text-white md:text-[#ea580c] drop-shadow-md md:drop-shadow-none">Hospitality Interiors</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="text-white md:text-[#3e4435] mt-5 md:mt-6 text-[19px] sm:text-[21px] md:text-[24px] font-medium drop-shadow-md md:drop-shadow-none leading-snug max-w-2xl w-[75%] sm:w-[70%] md:w-full"
          >
            Discover contract-grade seating and tables engineered for high-traffic venues.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 flex flex-col sm:flex-row flex-wrap gap-4 items-start"
          >
            <Link to="/products" className="bg-[#ea580c] text-white px-10 py-4 rounded-full font-medium hover:bg-[#c2410c] transition-colors flex items-center justify-center gap-2 shadow-lg w-[80%] sm:w-auto">
              Browse Collections <span>▶︎</span>
            </Link>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Dark gradient overlay for mobile text readability (Moved to top) */}
      <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-black/60 via-black/20 to-transparent pointer-events-none md:hidden z-[5]"></div>
    </section>
  );
};

export default HeroSection;
