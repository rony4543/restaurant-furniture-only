import { motion } from 'framer-motion';
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
      <div className="w-full relative z-10 max-w-[1440px] mx-auto px-6 md:px-10 pb-16 pt-32 md:pt-16 lg:pt-20 flex flex-col justify-end md:justify-start">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col text-left px-2 md:px-4 mt-auto md:mt-0"
        >
          <motion.h1 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-[42px] sm:text-[48px] md:text-[72px] lg:text-[90px] leading-[0.95] md:leading-[0.92] font-chillax font-light tracking-[-0.045em] text-white md:text-[#3e4435] drop-shadow-lg md:drop-shadow-none"
          >
            <span className="block">Elevate</span>
            <span className="block">Your Commercial</span>
            <span className="block">Space With</span>
            <span className="block">Premium Furniture.</span>
          </motion.h1>
          <p className="md:hidden text-white mt-4 text-sm font-medium drop-shadow-md">
            Built for high traffic, trusted by leading hospitality brands.
          </p>
        </motion.div>
      </div>
      
      {/* Dark gradient overlay for mobile text readability */}
      <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/80 via-black/30 to-transparent pointer-events-none md:hidden z-[5]"></div>
    </section>
  );
};

export default HeroSection;
