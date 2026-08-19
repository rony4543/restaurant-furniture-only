import { motion } from 'framer-motion';
import bento1 from '../assets/bento_images/bento-1.jpeg';
import bento2 from '../assets/bento_images/bento-2.jpeg';
import bento3 from '../assets/bento_images/bento-3.jpeg';
import bento4 from '../assets/bento_images/bento-4.jpeg';

const ManufacturingBento = () => {
  return (
    <div className="w-full max-w-[1440px] mx-auto mt-24 mb-10 px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold font-comfortaa text-gray-900 mb-4">
          Our Manufacturing Process
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto font-body">
          Experience the journey of raw materials transforming into masterpieces. We combine cutting-edge technology with traditional craftsmanship to deliver unparalleled quality.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:auto-rows-[250px]">
        {/* Item 1: Large Block (Full width on mobile, Top) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-2xl overflow-hidden group col-span-2 md:col-span-2 md:row-span-2 h-[220px] md:h-auto"
        >
          <img src={bento1} alt="Precision Engineering" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent flex flex-col justify-end p-6 md:p-8 transition-opacity duration-300">
            <h3 className="text-xl md:text-2xl font-bold text-white mb-2 font-comfortaa">Precision Engineering</h3>
            <p className="text-gray-200 text-xs md:text-base opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity duration-300 md:transform md:translate-y-4 group-hover:translate-y-0 line-clamp-2 md:line-clamp-none">
              State-of-the-art machinery ensuring millimeter-perfect accuracy for every joint and curve. Our advanced facility maximizes efficiency without compromising detail.
            </p>
          </div>
        </motion.div>

        {/* Item 2: Horizontal Block (Half width on mobile) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="relative rounded-2xl overflow-hidden group col-span-1 md:col-span-2 md:row-span-1 h-[180px] md:h-auto"
        >
          <img src={bento2} alt="Quality Materials" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-4 md:p-6 transition-opacity duration-300">
            <h3 className="text-base md:text-xl font-bold text-white mb-1 md:mb-2 font-comfortaa">Quality Materials</h3>
            <p className="text-gray-200 text-[10px] md:text-sm opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity duration-300 md:transform md:translate-y-4 group-hover:translate-y-0 line-clamp-2">
              Sourcing only the finest, sustainably harvested woods and premium metals for lasting durability and stunning aesthetics.
            </p>
          </div>
        </motion.div>

        {/* Item 3: Small Square (Half width on mobile) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="relative rounded-2xl overflow-hidden group col-span-1 md:col-span-1 md:row-span-1 h-[180px] md:h-auto"
        >
          <img src={bento3} alt="Hand-Finished Excellence" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-4 md:p-5 transition-opacity duration-300">
            <h3 className="text-base md:text-lg font-bold text-white mb-1 font-comfortaa">Hand-Finished</h3>
            <p className="text-gray-200 text-[10px] md:text-xs opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity duration-300 md:transform md:translate-y-4 group-hover:translate-y-0 line-clamp-2">
              Expert artisans meticulously polish and finish each piece by hand.
            </p>
          </div>
        </motion.div>

        {/* Item 4: Small Square (Full width on mobile, Bottom) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="relative rounded-2xl overflow-hidden group col-span-2 md:col-span-1 md:row-span-1 h-[200px] md:h-auto"
        >
          <img src={bento4} alt="Rigorous Testing" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-5 transition-opacity duration-300">
            <h3 className="text-lg font-bold text-white mb-1 font-comfortaa">Quality Control</h3>
            <p className="text-gray-200 text-xs opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity duration-300 md:transform md:translate-y-4 group-hover:translate-y-0 line-clamp-2">
              Every product undergoes strict testing to guarantee lasting strength.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ManufacturingBento;
