'use client';

import Link from 'next/link';
import { FadeIn, ScaleOnHover } from './animations';
import { motion } from 'framer-motion';

export default function CTASection() {
  return (
    <section className="w-full bg-white py-16 lg:py-24 px-6 lg:px-12">
      <FadeIn direction="up">
        <div className="mx-auto max-w-6xl">
          <div className="bg-[#0f49bd] rounded-3xl p-10 lg:p-16 text-center relative overflow-hidden">
            {/* Decorative background blob */}
            <motion.div 
              animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full translate-x-1/2 -translate-y-1/2 -z-0" 
            />
            <motion.div 
              animate={{ scale: [1, 1.3, 1], opacity: [0.05, 0.1, 0.05] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-0 left-0 w-80 h-80 bg-white/10 rounded-full -translate-x-1/2 translate-y-1/2 -z-0" 
            />

            <div className="relative z-10 flex flex-col gap-6 items-center">
              <FadeIn direction="up" delay={0.2}>
                <h2 className="text-3xl lg:text-4xl font-extrabold text-white leading-tight max-w-3xl tracking-tight">
                  Ready to launch your business in Dubai?
                </h2>
              </FadeIn>
              <FadeIn direction="up" delay={0.3}>
                <p className="text-lg text-white/90 opacity-90 max-w-2xl leading-relaxed">
                  Join hundreds of successful entrepreneurs who chose JOAB Solutions for a seamless setup experience.
                </p>
              </FadeIn>

              {/* CTA Buttons */}
              <FadeIn direction="up" delay={0.4} className="pt-4 flex flex-col sm:flex-row gap-4">
                <ScaleOnHover>
                  <Link href="/contact" className="bg-white text-[#0f49bd] px-8 py-4 rounded-xl font-extrabold text-base hover:bg-gray-50 transition-colors duration-300 shadow-lg text-center inline-block">
                    Book a Free Consultation
                  </Link>
                </ScaleOnHover>
              </FadeIn>
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
