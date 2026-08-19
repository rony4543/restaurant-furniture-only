import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from '../components/Header';
import AnnouncementBar from '../components/AnnouncementBar';

const projects = [
  {
    id: 1,
    name: "The Green Kitchen",
    subtitle: "",
    image: "/projects/green-kitchen.png"
  },
  {
    id: 2,
    name: "The North Table",
    subtitle: "Pradhikaran Nigdi, Pune",
    image: "/projects/north-table.png"
  },
  {
    id: 3,
    name: "Hunan",
    subtitle: "Bel Road, Bangalore",
    image: "/projects/hunan.webp"
  }
];

const ProjectsPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Automatically switch slides every 2 seconds
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
    }, 2000); // 2 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-black">
      <div className="relative w-full z-50 flex flex-col shadow-sm bg-white">
        <AnnouncementBar />
        <Header />
      </div>
      <div className="w-full flex-grow overflow-hidden relative flex items-center justify-center">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="absolute inset-0 w-full h-full"
        >
          {/* Background Image */}
          <div 
            className="absolute inset-0 w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url('${projects[currentIndex].image}')` }}
          />
          {/* Dark Overlay for Text Readability */}
          <div className="absolute inset-0 bg-black/40" />
        </motion.div>
      </AnimatePresence>

      {/* Project Name and Details */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4">
        <AnimatePresence mode="wait">
          <motion.div
            key={`text-${currentIndex}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="flex flex-col items-center"
          >
            <h1 className="text-white text-[48px] md:text-[72px] lg:text-[96px] font-chillax font-light tracking-wide uppercase leading-tight text-shadow-lg">
              {projects[currentIndex].name}
            </h1>
            {projects[currentIndex].subtitle && (
              <p className="text-white/80 mt-2 text-[16px] md:text-[20px] font-sans tracking-widest uppercase">
                {projects[currentIndex].subtitle}
              </p>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Indicators (Optional but good for UX) */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {projects.map((_, idx) => (
          <div 
            key={idx}
            className={`h-1 rounded-full transition-all duration-500 ${idx === currentIndex ? 'w-10 bg-white' : 'w-4 bg-white/40'}`}
          />
        ))}
      </div>
    </div>
    </div>
  );
};

export default ProjectsPage;
