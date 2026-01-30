'use client';

import { FadeIn } from '@/components/animations';
import { motion } from 'framer-motion';

export default function LogosSection() {
  const logos = [
    'MEYDAN', 
    'SHAMS', 
    'DMCC', 
    'DDA', 
    'IFZA', 
    'RAKEZ',
    'JAFZA',
    'DIFC / ADGM',
    'SPC',
    'Dubai South',
    'Masdar City'
  ];
  // Ensure we have enough items to cover wider screens by repeating the base list
  const filledLogos = [...logos, ...logos];

  return (
    <section className="bg-white py-12 border-b border-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-10">
        <FadeIn direction="up">
          <div className="text-center">
            <p className="text-xs md:text-sm font-bold text-gray-400 uppercase tracking-widest">
              Authorised Registered Agent For
            </p>
          </div>
        </FadeIn>
      </div>

      <div className="relative flex">
        {/* Gradient masks for smooth edges */}
        <div className="absolute left-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <motion.div
          className="flex gap-16 items-center whitespace-nowrap"
          animate={{
            x: "-50%"
          }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 60,
            ease: "linear",
          }}
        >
          {/* Render the list twice to ensure seamless looping */}
          {[...filledLogos, ...filledLogos].map((logo, index) => (
            <span 
              key={index} 
              className="text-lg md:text-2xl font-bold text-[#1B4D6B] tracking-wider opacity-50 hover:opacity-100 transition-opacity duration-300 cursor-default"
            >
              {logo}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
