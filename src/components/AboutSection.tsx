import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, Calendar, Armchair, Scissors, Paintbrush, Truck } from 'lucide-react';

/* ─── Version Switcher Pill ─── */
type Version = 'editorial' | 'bento';

/* ─── Shared Data ─── */
const stats = [
  { number: '500+', label: 'VENUES FURNISHED' },
  { number: '99.2%', label: 'ON-TIME DELIVERY' },
  { number: '3-Year', label: 'STRUCTURAL WARRANTY' },
  { number: '100%', label: 'CERTIFIED MATERIALS' },
];

const craftPillars = [
  {
    icon: Armchair,
    title: 'Handcraft & Modern Technique',
    desc: 'We create our high quality and durable sofas by ensuring the perfect harmony of handcraft and modern techniques.',
    img: '/woodbeam_img_p6_2.jpeg',
  },
  {
    icon: Scissors,
    title: 'Skillful Material Selection',
    desc: 'Carried out by an experienced and passionate team, our production process is shaped by skillful processing of carefully selected materials.',
    img: '/woodbeam_img_p6_3.jpeg',
  },
  {
    icon: Paintbrush,
    title: 'Modern Precision Detailing',
    desc: 'Using the latest modern technologies, we pay special attention to every detail of our designs.',
    img: '/woodbeam_img_p6_4.jpeg',
  },
  {
    icon: Truck,
    title: 'Strict Quality Control',
    desc: 'Quality control steps are strictly followed in our production process as we maintain superior quality standards at every stage.',
    img: '/woodbeam_img_p6_5.jpeg',
  },
];

const timelineSteps = [
  { day: 'Day 1', label: 'Discussion & Design', sub: 'Material & Fabric Selection' },
  { day: 'Day 18', label: 'Crafting & Molding', sub: 'Sawing, Shaving & Joinery' },
  { day: 'Day 30', label: 'Color & Coating', sub: 'Finishing & Upholstery' },
  { day: 'Day 45', label: 'Packing & Delivery', sub: 'White-Glove Installation' },
];

const ease = [0.16, 1, 0.3, 1] as const;

/* ═══════════════════════════════════════════════════════
   VERSION 1 — DesignBook Editorial
   ═══════════════════════════════════════════════════════ */
const EditorialVersion = () => (
  <motion.div
    key="editorial"
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.6, ease }}
  >
    {/* ── Hero Split ── */}
    <div className="flex flex-col lg:flex-row gap-0 mb-0">
      {/* Left — Brand Story */}
      <div className="w-full lg:w-1/2 bg-[#1a1a1a] p-6 sm:p-10 md:p-14 lg:p-20 flex flex-col justify-center relative overflow-hidden">
        {/* Soft glow */}
        <div className="absolute -top-32 -right-32 w-80 h-80 bg-[#c49a6c]/10 rounded-full blur-3xl pointer-events-none" />

        <motion.span
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease }}
          className="text-[#c49a6c] uppercase tracking-[0.25em] text-[11px] md:text-xs font-medium mb-6 block"
        >
          #affordableluxury
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease }}
          className="text-[28px] sm:text-[32px] md:text-[42px] lg:text-[50px] font-chillax font-light text-white leading-[1.1] mb-6 sm:mb-8 tracking-[-0.02em]"
        >
          ABOUT<br />
          <span className="text-[#c49a6c]">WOODBEAM</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15, ease }}
          className="text-white/75 text-[14px] sm:text-[15px] md:text-[17px] leading-[1.8] font-light max-w-lg mb-6 sm:mb-8"
        >
          We are a young &amp; enthusiastic design practice manufacturing unique bespoke furniture.
          Every piece we craft is a one-of-a-kind creation, made from handpicked &amp; carefully sourced
          materials. Based out of Jodhpur, Rajasthan — we serve across India, turning spaces into
          stories.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3, ease }}
          className="flex flex-wrap items-center gap-2 sm:gap-3 text-[#c49a6c]/80 text-[10px] sm:text-xs uppercase tracking-widest font-medium"
        >
          <MapPin size={14} />
          <span>Jodhpur, Rajasthan</span>
          <span className="mx-2 text-white/20">•</span>
          <Calendar size={14} />
          <span>Rooted in RAE, Est. 2001</span>
        </motion.div>
      </div>

      {/* Right — Hero Image (Cane Sideboard from PDF Page 2) */}
      <div className="w-full lg:w-1/2 relative min-h-[280px] sm:min-h-[360px] md:min-h-[520px] overflow-hidden group">
        <motion.img
          src="/woodbeam_img_p2_1.png"
          alt="Woodbeam signature cane sideboard with brass accents"
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.2s] group-hover:scale-105"
          initial={{ scale: 1.08, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease }}
        />
        {/* Overlay badge */}
        <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 bg-white/95 backdrop-blur-sm px-5 py-3 shadow-lg">
          <p className="text-[11px] uppercase tracking-[0.2em] text-[#1a1a1a] font-medium">
            Restaurant Furniture — Hospitality Division
          </p>
        </div>
      </div>
    </div>

    {/* ── Mission & Vision Split ── */}
    <div className="flex flex-col md:flex-row gap-0">
      {/* Mission */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease }}
        className="w-full md:w-1/2 bg-[#FAF9F6] p-6 sm:p-10 md:p-14 lg:p-16 flex flex-col justify-center md:border-r border-gray-100"
      >
        <span className="text-[#c49a6c] uppercase tracking-[0.2em] text-[11px] font-semibold mb-4 block">Our Mission</span>
        <h3 className="text-[24px] sm:text-[28px] md:text-[34px] font-chillax font-light text-[#1a1a1a] leading-tight mb-4 sm:mb-5">
          Simple, but special.
        </h3>
        <p className="text-[#555] text-[15px] md:text-[16px] leading-[1.85] font-light">
          Our style is simple, functional, and full of character. We assert that design does not
          always have to be complex and fancy. Our mission is to show that simplicity of design
          and functionality is a new elegance.
        </p>
      </motion.div>

      {/* Vision */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.1, ease }}
        className="w-full md:w-1/2 bg-white p-6 sm:p-10 md:p-14 lg:p-16 flex flex-col justify-center"
      >
        <span className="text-[#c49a6c] uppercase tracking-[0.2em] text-[11px] font-semibold mb-4 block">The Vision</span>
        <h3 className="text-[24px] sm:text-[28px] md:text-[34px] font-chillax font-light text-[#1a1a1a] leading-tight mb-4 sm:mb-5">
          Vanguard of modern design.
        </h3>
        <p className="text-[#555] text-[15px] md:text-[16px] leading-[1.85] font-light">
          Committed to being the vanguard of modern furniture design, while honoring our
          traditional craftsmanship. We envision a world where every furniture piece tells a story
          of innovation, quality and sustainability.
        </p>
      </motion.div>
    </div>

    {/* ── Stats Bar ── */}
    <div className="bg-[#1a1a1a] grid grid-cols-2 lg:grid-cols-4">
      {stats.map((stat, i) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 * i, ease }}
          className="flex flex-col items-center justify-center p-5 sm:p-8 md:p-10 border-r border-b border-white/5 last:border-r-0"
        >
          <span className="text-[28px] sm:text-[36px] md:text-[44px] font-chillax font-light text-white mb-1 sm:mb-2 leading-none">
            {stat.number}
          </span>
          <span className="text-[10px] md:text-[11px] text-[#c49a6c] uppercase tracking-[0.2em] font-semibold text-center">
            {stat.label}
          </span>
        </motion.div>
      ))}
    </div>
  </motion.div>
);

/* ═══════════════════════════════════════════════════════
   VERSION 2 — Interactive Bento Showcase
   ═══════════════════════════════════════════════════════ */
const BentoVersion = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <motion.div
      key="bento"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.6, ease }}
    >
      {/* ── Header Row: Dual Brand Badges ── */}
      <div className="bg-[#1a1a1a] px-5 sm:px-8 md:px-14 lg:px-20 py-10 sm:py-14 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_#c49a6c10_0%,_transparent_60%)] pointer-events-none" />

        <div className="relative z-10 flex flex-col lg:flex-row gap-10 lg:gap-20 items-start lg:items-end justify-between mb-12">
          <div className="flex-1">
            <div className="flex flex-wrap gap-3 mb-8">
              <span className="px-4 py-1.5 border border-[#c49a6c]/40 text-[#c49a6c] text-[10px] uppercase tracking-[0.25em] font-semibold">
                Woodbeam — Parent Brand
              </span>
              <span className="px-4 py-1.5 border border-white/20 text-white/70 text-[10px] uppercase tracking-[0.25em] font-semibold">
                Restaurant Furniture — Hospitality Arm
              </span>
            </div>
            <h2 className="text-[26px] sm:text-[32px] md:text-[44px] lg:text-[52px] font-chillax font-light text-white leading-[1.08] tracking-[-0.02em]">
              Bespoke Furniture,<br />
              <span className="text-[#c49a6c]">Handcrafted in Jodhpur.</span>
            </h2>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease }}
            className="text-white/60 text-[15px] md:text-[16px] leading-[1.9] font-light max-w-md lg:text-right"
          >
            From RAE (Est. 2001) to Woodbeam — we bring two decades of craftsmanship heritage
            to every commercial and hospitality space across India.
          </motion.p>
        </div>

        {/* Stats Row */}
        <div className="relative z-10 grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/5 rounded-xl overflow-hidden">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.08 * i, ease }}
              className="bg-[#1a1a1a] flex flex-col items-center p-4 sm:p-6 md:p-8 hover:bg-[#222] transition-colors duration-300"
            >
              <span className="text-[24px] sm:text-[32px] md:text-[40px] font-chillax font-light text-white mb-1 leading-none">{stat.number}</span>
              <span className="text-[9px] md:text-[10px] text-[#c49a6c] uppercase tracking-[0.2em] font-semibold text-center">{stat.label}</span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ── 4 Craft Pillars Bento Grid ── */}
      <div className="bg-[#FAF9F6] px-4 md:px-8 lg:px-14 py-14 md:py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease }}
          className="text-center mb-12"
        >
          <span className="text-[#c49a6c] uppercase tracking-[0.25em] text-[10px] font-semibold mb-3 block">Our Process</span>
          <h3 className="text-[22px] sm:text-[28px] md:text-[38px] font-chillax font-light text-[#1a1a1a] leading-tight">
            Harmony of Handcraft &amp; Modern Techniques
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 max-w-6xl mx-auto">
          {craftPillars.map((pillar, i) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.08 * i, ease }}
                className="group relative bg-white rounded-xl overflow-hidden border border-gray-100 hover:border-[#c49a6c]/40 transition-all duration-500 hover:shadow-xl"
              >
                <div className="flex flex-col sm:flex-row">
                  {/* Image */}
                  <div className="w-full sm:w-2/5 h-48 sm:h-auto relative overflow-hidden">
                    <img
                      src={pillar.img}
                      alt={pillar.title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent sm:bg-gradient-to-r" />
                  </div>
                  {/* Content */}
                  <div className="flex-1 p-6 md:p-8 flex flex-col justify-center">
                    <div className="w-10 h-10 rounded-lg bg-[#1a1a1a] flex items-center justify-center mb-4 group-hover:bg-[#c49a6c] transition-colors duration-300">
                      <Icon size={18} className="text-white" />
                    </div>
                    <h4 className="text-[18px] md:text-[20px] font-chillax font-normal text-[#1a1a1a] mb-3 leading-snug">
                      {pillar.title}
                    </h4>
                    <p className="text-[#666] text-[14px] leading-[1.75] font-light">
                      {pillar.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* ── Bespoke 45-Day Timeline ── */}
      <div className="bg-[#1a1a1a] px-5 sm:px-6 md:px-14 lg:px-20 py-10 sm:py-14 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_#c49a6c08_0%,_transparent_50%)] pointer-events-none" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease }}
          className="text-center mb-6 relative z-10"
        >
          <span className="text-[#c49a6c] uppercase tracking-[0.25em] text-[10px] font-semibold mb-3 block">Bespoke Journey</span>
          <h3 className="text-[24px] sm:text-[28px] md:text-[38px] font-chillax font-light text-white leading-tight mb-3">
            You tell. We make.
          </h3>
          <p className="text-white/50 text-[14px] md:text-[15px] font-light max-w-xl mx-auto leading-relaxed">
            Provide us with your ideas, sketches, or concepts — our artisans translate them into reality in just 45 days.
          </p>
        </motion.div>

        {/* Timeline Steps */}
        <div className="relative z-10 max-w-4xl mx-auto mt-12">
          {/* Progress Bar */}
          <div className="hidden md:block absolute top-7 left-0 right-0 h-[2px] bg-white/10 mx-20">
            <motion.div
              className="h-full bg-[#c49a6c]"
              initial={{ width: '0%' }}
              whileInView={{ width: `${(activeStep / (timelineSteps.length - 1)) * 100}%` }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease }}
            />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4">
            {timelineSteps.map((step, i) => (
              <motion.button
                key={step.day}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * i, ease }}
                onClick={() => setActiveStep(i)}
                className={`flex flex-col items-center text-center group cursor-pointer transition-all duration-300 ${
                  i <= activeStep ? 'opacity-100' : 'opacity-40'
                }`}
              >
                {/* Dot */}
                <div className={`w-[14px] h-[14px] rounded-full border-2 mb-5 transition-all duration-300 ${
                  i <= activeStep
                    ? 'bg-[#c49a6c] border-[#c49a6c] shadow-[0_0_12px_#c49a6c60]'
                    : 'bg-transparent border-white/30 group-hover:border-[#c49a6c]/60'
                }`} />
                <span className="text-[#c49a6c] font-chillax text-[13px] font-medium mb-1">{step.day}</span>
                <span className="text-white text-[14px] md:text-[15px] font-medium mb-1">{step.label}</span>
                <span className="text-white/40 text-[12px] font-light">{step.sub}</span>
              </motion.button>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3, ease }}
          className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10"
        >
          <a
            href="https://wa.me/919358581297"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3.5 bg-[#c49a6c] text-white text-[13px] uppercase tracking-[0.15em] font-semibold hover:bg-[#b0895c] transition-colors duration-300 flex items-center gap-2"
          >
            Start Your Bespoke Order
            <ArrowRight size={15} />
          </a>
          <a
            href="mailto:woodbeamindia@gmail.com"
            className="text-white/50 text-[13px] tracking-wider uppercase hover:text-[#c49a6c] transition-colors duration-300 font-light"
          >
            woodbeamindia@gmail.com
          </a>
        </motion.div>
      </div>
    </motion.div>
  );
};

/* ═══════════════════════════════════════════════════════
   MAIN ABOUT SECTION COMPONENT
   ═══════════════════════════════════════════════════════ */
const AboutSection = () => {
  const [version, setVersion] = useState<Version>('editorial');

  return (
    <section id="about-section" className="w-full max-w-[1440px] mx-auto px-3 sm:px-4 md:px-10 pt-4 md:pt-8 pb-10 sm:pb-16 md:pb-24">
      {/* Version Switcher */}
      <div className="flex items-center justify-between mb-6 md:mb-8">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease }}
          className="flex items-center gap-2"
        >
          <span className="text-[#999] text-[11px] uppercase tracking-[0.15em] font-medium hidden sm:inline">View:</span>
          <div className="flex bg-gray-100 rounded-full p-[3px]">
            <button
              onClick={() => setVersion('editorial')}
              className={`px-4 md:px-5 py-1.5 rounded-full text-[11px] md:text-[12px] uppercase tracking-wider font-semibold transition-all duration-300 ${
                version === 'editorial'
                  ? 'bg-[#1a1a1a] text-white shadow-sm'
                  : 'text-[#888] hover:text-[#555]'
              }`}
            >
              Editorial
            </button>
            <button
              onClick={() => setVersion('bento')}
              className={`px-4 md:px-5 py-1.5 rounded-full text-[11px] md:text-[12px] uppercase tracking-wider font-semibold transition-all duration-300 ${
                version === 'bento'
                  ? 'bg-[#1a1a1a] text-white shadow-sm'
                  : 'text-[#888] hover:text-[#555]'
              }`}
            >
              Interactive
            </button>
          </div>
        </motion.div>

        <Link
          to="/about"
          className="text-[#c49a6c] text-[12px] md:text-[13px] uppercase tracking-[0.15em] font-semibold hover:text-[#b0895c] transition-colors duration-300 flex items-center gap-1.5 group"
        >
          Full Story
          <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
        </Link>
      </div>

      {/* Content Container */}
      <div className="rounded-xl sm:rounded-2xl overflow-hidden shadow-xl sm:shadow-2xl shadow-black/8">
        <AnimatePresence mode="wait">
          {version === 'editorial' ? <EditorialVersion /> : <BentoVersion />}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default AboutSection;
