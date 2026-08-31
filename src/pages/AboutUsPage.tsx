import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { ArrowRight, MapPin, Calendar, Phone, Mail, MessageCircle, Armchair, Scissors, Paintbrush, Truck, ChevronRight } from 'lucide-react';
import Header from '../components/Header';
import AnnouncementBar from '../components/AnnouncementBar';
import PageMeta from '../components/PageMeta';

const ease = [0.16, 1, 0.3, 1] as const;

/* ─── Data ─── */
const craftPillars = [
  {
    icon: Armchair,
    num: '01',
    title: 'Handcraft & Modern Technique',
    desc: 'We create our high quality and durable sofas by ensuring the perfect harmony of handcraft and modern techniques.',
    img: '/woodbeam_img_p6_2.jpeg',
  },
  {
    icon: Scissors,
    num: '02',
    title: 'Skillful Material Processing',
    desc: 'Carried out by an experienced and passionate team, our production process is shaped by skillful processing of carefully selected materials.',
    img: '/woodbeam_img_p6_3.jpeg',
  },
  {
    icon: Paintbrush,
    num: '03',
    title: 'Modern Precision & Detailing',
    desc: 'Using the latest modern technologies, we pay special attention to every detail of our designs.',
    img: '/woodbeam_img_p6_4.jpeg',
  },
  {
    icon: Truck,
    num: '04',
    title: 'Strict Quality Control',
    desc: 'Quality control steps are strictly followed in our production process as we maintain superior quality standards at every stage.',
    img: '/woodbeam_img_p6_5.jpeg',
  },
];



const stats = [
  { value: '500+', label: 'Venues Furnished' },
  { value: '24+', label: 'Years of Heritage (RAE)' },
  { value: '45', label: 'Day Bespoke Delivery' },
  { value: '100%', label: 'Made in India' },
];

/* ─── Component ─── */
const AboutUsPage: React.FC = () => {
  const { scrollYProgress: heroScroll } = useScroll();
  const heroY = useTransform(heroScroll, [0, 0.5], ['0%', '20%']);
  const heroOpacity = useTransform(heroScroll, [0, 0.35], [1, 0]);
  const [activeCraft, setActiveCraft] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-[#3e4435] selection:text-[#d3d7c5] flex flex-col">
      <PageMeta 
        title="About Woodbeam"
        description="Discover Woodbeam's heritage, our 4-step craft process, and our mission to create bespoke restaurant furniture for the hospitality industry."
        canonical="/about"
      />
      
      {/* ═══════════════════════════════════════
         TOP NAVIGATION (Fixed)
         ═══════════════════════════════════════ */}
      <div className="relative w-full z-50 flex flex-col bg-white shadow-sm">
        <AnnouncementBar />
        <Header />
      </div>

      <main className="flex-grow w-full">

        {/* ═══════════════════════════════════════
           SECTION 1 — HERO
           ═══════════════════════════════════════ */}
        <section className="relative w-full h-[75vh] sm:h-[85vh] md:h-screen overflow-hidden bg-[#0d0d0d]">
          <motion.div className="absolute inset-0 w-full h-full" style={{ y: heroY }}>
            <img
              src="/woodbeam_workshop_hero.png"
              alt="Woodbeam Bespoke Furniture Maker Workshop"
              className="w-full h-full object-cover"
            />
          </motion.div>
          {/* Black film overlay for text readability */}
          <div className="absolute inset-0 bg-black/45 pointer-events-none" />

          <motion.div
            className="absolute inset-0 flex flex-col items-center justify-center px-5 sm:px-6 z-10"
            style={{ opacity: heroOpacity }}
          >


            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.15, ease }}
              className="text-[36px] sm:text-[44px] md:text-[72px] lg:text-[92px] font-chillax font-light text-white uppercase tracking-[-0.03em] leading-[0.95] text-center mb-4 sm:mb-6"
            >
              About<br />
              <span className="text-[#c49a6c]">Woodbeam</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35, ease }}
              className="text-white/60 text-[14px] sm:text-[16px] md:text-[19px] max-w-2xl mx-auto text-center font-light leading-relaxed mb-8 sm:mb-10"
            >
              #affordableluxury — Handcrafted bespoke furniture from Jodhpur, serving restaurants, hotels, and commercial spaces across India.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5, ease }}
              className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-white/40 text-[10px] sm:text-xs uppercase tracking-widest"
            >
              <span className="flex items-center gap-1.5"><MapPin size={13} /> Jodhpur, Rajasthan</span>
              <span className="text-white/15">•</span>
              <span className="flex items-center gap-1.5"><Calendar size={13} /> Rooted in RAE, Est. 2001</span>
            </motion.div>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.8 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
          >
            <span className="text-white/30 text-[10px] uppercase tracking-[0.3em]">Scroll</span>
            <div className="w-px h-8 bg-gradient-to-b from-white/30 to-transparent" />
          </motion.div>
        </section>

        {/* ═══════════════════════════════════════
           SECTION 2 — BRAND STORY
           ═══════════════════════════════════════ */}
        <section className="py-14 sm:py-20 md:py-32 px-5 sm:px-6 md:px-10 max-w-[1440px] mx-auto w-full">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
            {/* Text */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.8, ease }}
              className="w-full lg:w-1/2 flex flex-col justify-center"
            >
              <span className="text-[#c49a6c] uppercase tracking-[0.25em] text-[11px] font-semibold mb-5 block">Our Heritage</span>
              <h2 className="text-[28px] sm:text-[34px] md:text-[46px] font-chillax font-light text-[#1a1a1a] leading-[1.08] mb-6 sm:mb-8 tracking-[-0.01em]">
                A Young &amp; Enthusiastic<br />Design Practice
              </h2>
              <div className="space-y-5 text-[#555] text-[15px] md:text-[16px] leading-[1.9] font-light">
                <p>
                  We are a young &amp; enthusiastic design practice manufacturing unique bespoke furniture.
                  Every piece we craft is a one-of-a-kind creation, made from handpicked &amp; carefully
                  sourced materials. Based out of Jodhpur, Rajasthan — we serve residential and commercial
                  clients across India.
                </p>
                <p>
                  Inspired by our parent company <strong className="text-[#1a1a1a] font-medium">RAE</strong>, established in 2001,
                  Woodbeam carries forward more than two decades of design heritage. Our dedicated hospitality
                  arm — <strong className="text-[#1a1a1a] font-medium">Restaurant Furniture</strong> — extends this
                  legacy into high-traffic commercial environments: restaurants, luxury hotels, bustling cafes,
                  and retail spaces.
                </p>
              </div>

              <div className="mt-10 flex items-center gap-8 pt-8 border-t border-gray-100">
                <div>
                  <span className="text-[36px] font-chillax font-light text-[#1a1a1a] leading-none block">24+</span>
                  <span className="text-[11px] text-[#999] uppercase tracking-widest font-medium">Years Heritage</span>
                </div>
                <div className="w-px h-12 bg-gray-200" />
                <div>
                  <span className="text-[36px] font-chillax font-light text-[#1a1a1a] leading-none block">500+</span>
                  <span className="text-[11px] text-[#999] uppercase tracking-widest font-medium">Venues Furnished</span>
                </div>
              </div>
            </motion.div>

            {/* Image: Cane Sideboard */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 1, delay: 0.15, ease }}
              className="w-full lg:w-1/2 relative"
            >
              <div className="relative rounded-xl overflow-hidden shadow-2xl group">
                <img
                  src="/woodbeam_img_p1_1.jpeg"
                  alt="Woodbeam signature bespoke sofa craftsmanship"
                  className="w-full h-[360px] sm:h-[500px] md:h-[600px] object-cover transition-transform duration-[1.4s] group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent pointer-events-none" />
                <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm px-5 py-3 shadow-lg">
                  <p className="text-[11px] uppercase tracking-[0.18em] text-[#1a1a1a] font-medium">#affordableluxury</p>
                </div>
              </div>
              {/* Decorative frame */}
              <div className="absolute -top-4 -right-4 w-full h-full border border-[#c49a6c]/20 rounded-xl -z-10" />
            </motion.div>
          </div>
        </section>

        {/* ═══════════════════════════════════════
           SECTION 3 — INSPIRATION & LEADERSHIP
           ═══════════════════════════════════════ */}
        <section className="py-14 sm:py-20 md:py-28 bg-white border-t border-gray-100">
          <div className="max-w-[1440px] mx-auto px-5 sm:px-6 md:px-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease }}
              className="text-center mb-16"
            >
              <span className="text-[#c49a6c] uppercase tracking-[0.25em] text-[11px] font-semibold mb-4 block">Industry Inspiration</span>
              <h2 className="text-[34px] md:text-[46px] font-chillax font-light text-[#1a1a1a] leading-tight">
                Inspired by Visionaries
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {[
                {
                  name: 'Vikas Gupta',
                  role: 'Founder — Three Sixty Leather',
                  img: '/woodbeam_img_p3_1.jpeg',
                  quote: 'A collaboration rooted in shared values of material excellence and uncompromising craft.',
                },
                {
                  name: 'Amaresh Anand',
                  role: 'Founder — AAD',
                  img: '/woodbeam_img_p3_2.jpeg',
                  quote: 'Design innovation driven by the belief that every commercial space deserves bespoke attention.',
                },
              ].map((leader, i) => (
                <motion.div
                  key={leader.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.1 * i, ease }}
                  className="group bg-[#FAF9F6] rounded-xl overflow-hidden border border-gray-100 hover:border-[#c49a6c]/30 transition-all duration-500 hover:shadow-lg"
                >
                  <div className="relative h-72 md:h-80 overflow-hidden">
                    <img
                      src={leader.img}
                      alt={`With ${leader.name}`}
                      className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className="absolute bottom-5 left-5">
                      <h3 className="text-white text-[20px] font-chillax font-normal leading-tight">{leader.name}</h3>
                      <p className="text-white/70 text-[12px] uppercase tracking-widest font-medium mt-1">{leader.role}</p>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-[#555] text-[14px] leading-[1.8] font-light italic">"{leader.quote}"</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════
           SECTION 4 — MISSION & VISION
           ═══════════════════════════════════════ */}
        <section className="py-0">
          <div className="flex flex-col lg:flex-row">
            {/* Mission — with Craftsman Image */}
            <div className="w-full lg:w-1/2 flex flex-col md:flex-row">
              <div className="w-full md:w-1/2 relative min-h-[240px] sm:min-h-[300px] md:min-h-[360px] overflow-hidden">
                <motion.img
                  src="/woodbeam_img_p4_1.jpeg"
                  alt="Woodbeam craftsman working with pneumatic nail gun"
                  className="absolute inset-0 w-full h-full object-cover"
                  initial={{ scale: 1.1 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.4, ease }}
                />
              </div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease }}
                className="w-full md:w-1/2 bg-[#1a1a1a] p-6 sm:p-10 md:p-12 lg:p-14 flex flex-col justify-center"
              >
                <span className="text-[#c49a6c] uppercase tracking-[0.25em] text-[10px] font-semibold mb-5 block">Our Mission</span>
                <h3 className="text-[22px] sm:text-[26px] md:text-[32px] font-chillax font-light text-white leading-[1.15] mb-4 sm:mb-6">
                  Simple, but<br />special.
                </h3>
                <p className="text-white/60 text-[14px] md:text-[15px] leading-[1.85] font-light">
                  Our style is simple, functional, and full of character. We assert that design does not
                  always have to be complex and fancy. Our mission is to show that simplicity of design
                  and functionality is a new elegance.
                </p>
              </motion.div>
            </div>

            {/* Vision — with Workshop Exterior */}
            <div className="w-full lg:w-1/2 flex flex-col md:flex-row-reverse">
              <div className="w-full md:w-1/2 relative min-h-[240px] sm:min-h-[300px] md:min-h-[360px] overflow-hidden">
                <motion.img
                  src="/woodbeam_img_p5_1.png"
                  alt="Woodbeam modern workshop with yellow signage"
                  className="absolute inset-0 w-full h-full object-cover"
                  initial={{ scale: 1.1 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.4, ease }}
                />
              </div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.1, ease }}
                className="w-full md:w-1/2 bg-[#111] p-6 sm:p-10 md:p-12 lg:p-14 flex flex-col justify-center"
              >
                <span className="text-[#c49a6c] uppercase tracking-[0.25em] text-[10px] font-semibold mb-5 block">The Vision</span>
                <h3 className="text-[22px] sm:text-[26px] md:text-[32px] font-chillax font-light text-white leading-[1.15] mb-4 sm:mb-6">
                  Vanguard of<br />modern design.
                </h3>
                <p className="text-white/60 text-[14px] md:text-[15px] leading-[1.85] font-light">
                  Committed to being the vanguard of modern furniture design, while honoring our
                  traditional craftsmanship. We envision a world where every furniture piece tells
                  a story of innovation, quality and sustainability.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════
           SECTION 5 — 4-STEP CRAFT PROCESS
           ═══════════════════════════════════════ */}
        <section className="py-14 sm:py-20 md:py-32 bg-[#FAF9F6]">
          <div className="max-w-[1440px] mx-auto px-5 sm:px-6 md:px-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease }}
              className="text-center mb-16 md:mb-20"
            >
              <span className="text-[#c49a6c] uppercase tracking-[0.25em] text-[10px] font-semibold mb-4 block">Our Process</span>
              <h2 className="text-[26px] sm:text-[34px] md:text-[46px] font-chillax font-light text-[#1a1a1a] leading-tight mb-4">
                Harmony of Handcraft<br />&amp; Modern Techniques
              </h2>
              <p className="text-[#777] text-[15px] md:text-[16px] font-light max-w-xl mx-auto leading-relaxed">
                Four pillars of production excellence that define every Woodbeam &amp; Restaurant Furniture creation.
              </p>
            </motion.div>

            {/* Interactive Grid — Left tabs, right content */}
            <div className="flex flex-col lg:flex-row gap-6 lg:gap-10 max-w-6xl mx-auto">
              {/* Tab List */}
              <div className="w-full lg:w-2/5 flex flex-col gap-3">
                {craftPillars.map((pillar, i) => {
                  const Icon = pillar.icon;
                  return (
                    <motion.button
                      key={pillar.title}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.08 * i, ease }}
                      onClick={() => setActiveCraft(i)}
                      className={`flex items-center gap-5 p-5 md:p-6 rounded-xl text-left transition-all duration-400 cursor-pointer group ${
                        activeCraft === i
                          ? 'bg-[#1a1a1a] shadow-xl'
                          : 'bg-white hover:bg-gray-50 border border-gray-100'
                      }`}
                    >
                      <div className={`w-11 h-11 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors duration-300 ${
                        activeCraft === i ? 'bg-[#c49a6c]' : 'bg-gray-100 group-hover:bg-[#c49a6c]/20'
                      }`}>
                        <Icon size={18} className={activeCraft === i ? 'text-white' : 'text-[#1a1a1a]'} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <span className={`text-[10px] uppercase tracking-[0.2em] font-semibold mb-1 block transition-colors duration-300 ${
                          activeCraft === i ? 'text-[#c49a6c]' : 'text-[#bbb]'
                        }`}>
                          Step {pillar.num}
                        </span>
                        <h4 className={`text-[15px] md:text-[16px] font-medium leading-snug transition-colors duration-300 ${
                          activeCraft === i ? 'text-white' : 'text-[#1a1a1a]'
                        }`}>
                          {pillar.title}
                        </h4>
                      </div>
                      <ChevronRight size={16} className={`flex-shrink-0 transition-all duration-300 ${
                        activeCraft === i ? 'text-[#c49a6c] translate-x-0' : 'text-gray-300 -translate-x-1 group-hover:translate-x-0'
                      }`} />
                    </motion.button>
                  );
                })}
              </div>

              {/* Active Content Panel */}
              <div className="w-full lg:w-3/5 relative">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeCraft}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.5, ease }}
                    className="rounded-xl overflow-hidden bg-white shadow-lg border border-gray-100"
                  >
                    <div className="relative h-64 md:h-80 overflow-hidden">
                      <img
                        src={craftPillars[activeCraft].img}
                        alt={craftPillars[activeCraft].title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                      <div className="absolute bottom-6 left-6">
                        <span className="text-[#c49a6c] text-[48px] font-chillax font-light leading-none">
                          {craftPillars[activeCraft].num}
                        </span>
                      </div>
                    </div>
                    <div className="p-8 md:p-10">
                      <h3 className="text-[22px] md:text-[26px] font-chillax font-light text-[#1a1a1a] mb-4 leading-snug">
                        {craftPillars[activeCraft].title}
                      </h3>
                      <p className="text-[#666] text-[15px] leading-[1.85] font-light">
                        {craftPillars[activeCraft].desc}
                      </p>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </section>



        {/* ═══════════════════════════════════════
           SECTION 7 — STATS BAR
           ═══════════════════════════════════════ */}
        <section className="bg-[#c49a6c]">
          <div className="max-w-[1440px] mx-auto grid grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.08 * i, ease }}
                className="flex flex-col items-center justify-center p-6 sm:p-10 md:p-12 border-r border-b border-white/10 last:border-r-0 lg:border-b-0"
              >
                <span className="text-[30px] sm:text-[40px] md:text-[52px] font-chillax font-light text-white mb-1 sm:mb-2 leading-none">
                  {stat.value}
                </span>
                <span className="text-[10px] md:text-[11px] text-white/80 uppercase tracking-[0.2em] font-semibold text-center">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ═══════════════════════════════════════
           SECTION 8 — CONTACT CTA
           ═══════════════════════════════════════ */}
        <section className="py-14 sm:py-20 md:py-28 bg-white">
          <div className="max-w-[1440px] mx-auto px-5 sm:px-6 md:px-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease }}
              className="text-center"
            >
              <span className="text-[#c49a6c] uppercase tracking-[0.25em] text-[10px] font-semibold mb-5 block">Get in Touch</span>
              <h2 className="text-[26px] sm:text-[34px] md:text-[46px] font-chillax font-light text-[#1a1a1a] leading-tight mb-4 sm:mb-5">
                Let&apos;s Create Something<br />Extraordinary Together
              </h2>
              <p className="text-[#777] text-[14px] sm:text-[15px] md:text-[16px] font-light max-w-xl mx-auto leading-relaxed mb-8 sm:mb-12">
                Whether you&apos;re furnishing a new restaurant, reimagining a hotel lobby, or outfitting a
                commercial space — our bespoke process starts with a single conversation.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
                <a
                  href="https://wa.me/919358581297"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 bg-[#1a1a1a] text-white text-[12px] sm:text-[13px] uppercase tracking-[0.15em] font-semibold hover:bg-[#333] transition-colors duration-300 flex items-center justify-center gap-2.5 group"
                >
                  <MessageCircle size={16} />
                  WhatsApp Us
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
                </a>
                <a
                  href="tel:+919358581297"
                  className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 border border-gray-200 text-[#1a1a1a] text-[12px] sm:text-[13px] uppercase tracking-[0.15em] font-semibold hover:border-[#c49a6c] hover:text-[#c49a6c] transition-all duration-300 flex items-center justify-center gap-2.5"
                >
                  <Phone size={16} />
                  +91 93585 81297
                </a>
              </div>

              <a
                href="mailto:woodbeamindia@gmail.com"
                className="text-[#999] text-[13px] tracking-wider hover:text-[#c49a6c] transition-colors duration-300 flex items-center justify-center gap-2"
              >
                <Mail size={14} />
                woodbeamindia@gmail.com
              </a>
            </motion.div>
          </div>
        </section>

      </main>
    </div>
  );
};

export default AboutUsPage;
