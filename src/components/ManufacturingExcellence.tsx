import { motion } from 'framer-motion';
import { Layers, TreePine, Shield } from 'lucide-react';

const features = [
  {
    icon: Layers,
    title: 'Precision Metalworking',
    description: 'Heavy-gauge CNC-bent steel with anti-corrosion electrostatic powder coatings engineered for 10+ years of daily commercial use.',
  },
  {
    icon: TreePine,
    title: 'Sustainably Sourced Hardwoods',
    description: 'Kiln-dried North Indian Sheesham, Teak, and European Oak treated for extreme temperature stability and long-term structural integrity.',
  },
  {
    icon: Shield,
    title: 'Contract-Grade Textiles',
    description: '100,000+ Martindale rub count fabrics engineered for stain and spill resistance in high-turnover hospitality spaces.',
  },
];

const ManufacturingExcellence = () => {
  return (
    <section className="w-full max-w-[1440px] mx-auto px-4 md:px-10 pb-16 md:pb-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="text-center mb-12"
      >
        <h2 className="text-[32px] md:text-[40px] font-chillax font-medium tracking-[-0.02em] text-[#1c1c1c] mb-3">
          Manufacturing Excellence
        </h2>
        <p className="text-[16px] md:text-[18px] text-[#888] font-light max-w-[520px] mx-auto">
          Material standards that meet the demands of high-traffic commercial environments
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
            className="bg-white border border-[#e8e5e0] rounded-2xl p-8 md:p-10 group hover:border-[#c49a6c]/40 hover:shadow-[0_8px_30px_rgba(196,154,108,0.08)] transition-all duration-500"
          >
            <div className="w-12 h-12 rounded-xl bg-[#F4F1EA] flex items-center justify-center mb-6 group-hover:bg-[#c49a6c]/10 transition-colors duration-500">
              <feature.icon className="w-5 h-5 text-[#c49a6c]" strokeWidth={1.5} />
            </div>
            <h3 className="text-[18px] md:text-[20px] font-semibold text-[#1c1c1c] mb-3 tracking-tight">
              {feature.title}
            </h3>
            <p className="text-[15px] text-[#777] leading-[1.7] font-light">
              {feature.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ManufacturingExcellence;
