import React, { useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Header from '../components/Header';
import AnnouncementBar from '../components/AnnouncementBar';

// Import our generated assets
import heroImg from '../assets/images/about-hero.jpg';
import craftImg from '../assets/images/about-craft.jpg';

const AboutUsPage: React.FC = () => {
  // Parallax effect for the hero section
  const { scrollYProgress: heroScroll } = useScroll();
  const heroY = useTransform(heroScroll, [0, 1], ['0%', '30%']);

  // Reset scroll on load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF9F6]">
      {/* Navigation */}
      <div className="relative w-full z-50 flex flex-col bg-white shadow-sm">
        <AnnouncementBar />
        <Header />
      </div>

      {/* Main Content */}
      <main className="flex-grow w-full">
        
        {/* Section 1: Hero / Brand Mission */}
        <section className="relative w-full h-[80vh] md:h-screen overflow-hidden bg-black">
          <motion.div 
            className="absolute inset-0 w-full h-full"
            style={{ y: heroY }}
          >
            <img 
              src={heroImg} 
              alt="Luxury Restaurant Interior" 
              className="w-full h-full object-cover opacity-60"
            />
          </motion.div>
          
          <div className="absolute inset-0 flex flex-col items-center justify-center px-4 z-10">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-center"
            >
              <h1 className="text-[48px] md:text-[80px] lg:text-[100px] font-chillax font-light text-white uppercase tracking-[-0.02em] leading-none mb-6">
                Redefining <br className="hidden md:block"/> Spaces
              </h1>
              <p className="text-[16px] md:text-[20px] text-gray-200 max-w-2xl mx-auto font-light leading-relaxed">
                We craft timeless furniture that transforms restaurants into extraordinary dining experiences. Merging classic elegance with modern durability.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Section 2: Our Story (Complex Wireframe Grid) */}
        <section className="py-20 md:py-32 px-4 md:px-10 max-w-[1440px] mx-auto w-full">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
            
            {/* Text Content */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="w-full lg:w-1/2 flex flex-col"
            >
              <span className="text-[#c49a6c] uppercase tracking-widest text-sm font-medium mb-4 block">Our Heritage</span>
              <h2 className="text-[36px] md:text-[52px] font-chillax font-light text-[#3e4435] uppercase leading-tight mb-8">
                A Legacy of Excellence
              </h2>
              <div className="space-y-6 text-[#4a4a4a] text-lg font-light leading-relaxed">
                <p>
                  Born from a passion for exceptional design and meticulous craftsmanship, our journey began with a simple vision: to create furniture that doesn't just fill a room, but defines it.
                </p>
                <p>
                  For over two decades, we have partnered with the world's most visionary restaurateurs and designers, bringing their culinary concepts to life through bespoke seating and tables. Every curve, every joint, and every finish is a testament to our dedication to the art of furniture making.
                </p>
              </div>
            </motion.div>

            {/* Image Grid */}
            <div className="w-full lg:w-1/2 relative h-[500px] md:h-[600px]">
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="absolute top-0 right-0 w-[80%] h-[70%] z-10"
              >
                <img src={craftImg} alt="Craftsmanship" className="w-full h-full object-cover shadow-2xl" />
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="absolute bottom-0 left-0 w-[60%] h-[50%] z-20 bg-[#3e4435] p-8 flex items-center justify-center shadow-xl"
              >
                <p className="text-white font-chillax text-[24px] md:text-[32px] leading-tight text-center">
                  "Where art meets utility in perfect harmony."
                </p>
              </motion.div>
              {/* Decorative wireframe element */}
              <div className="absolute top-10 left-10 w-[70%] h-[80%] border border-[#c49a6c]/30 z-0"></div>
            </div>
          </div>
        </section>

        {/* Section 3: Manufacturing & Quality */}
        <section className="py-20 md:py-32 bg-white w-full border-t border-gray-100">
          <div className="max-w-[1440px] mx-auto px-4 md:px-10">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16 md:mb-24"
            >
              <h2 className="text-[36px] md:text-[52px] font-chillax font-light text-[#3e4435] uppercase mb-6">Our Craft</h2>
              <p className="text-lg text-[#666] max-w-2xl mx-auto font-light">Built to withstand the rigorous demands of hospitality without ever compromising on aesthetics.</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
              {[
                { title: "Premium Materials", desc: "We source only the highest grade solid woods, commercial-grade fabrics, and durable metals.", delay: 0 },
                { title: "Precision Engineering", desc: "Advanced manufacturing techniques ensure every piece meets exacting tolerances for stability.", delay: 0.2 },
                { title: "Hand Finishing", desc: "Our artisans meticulously finish each item by hand, bringing out the natural beauty of the materials.", delay: 0.4 }
              ].map((feature, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: feature.delay }}
                  className="flex flex-col p-8 bg-[#FAF9F6] border border-gray-100 hover:border-[#c49a6c]/50 transition-colors duration-300 group"
                >
                  <div className="w-12 h-12 rounded-full bg-[#3e4435] flex items-center justify-center text-white mb-6 group-hover:bg-[#c49a6c] transition-colors duration-300">
                    <span className="font-chillax text-xl">{idx + 1}</span>
                  </div>
                  <h3 className="text-[24px] font-chillax font-light text-[#1c1c1c] mb-4">{feature.title}</h3>
                  <p className="text-[#666] font-light leading-relaxed">{feature.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

      </main>
      
      {/* Using a placeholder for Footer since it's not imported yet, assuming they have one, I will check later or leave it out if they don't */}
    </div>
  );
};

export default AboutUsPage;
