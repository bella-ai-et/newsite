'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FadeIn, StaggerContainer, ScaleOnHover } from './animations';
import { motion } from 'framer-motion';

export default function WhyChooseUs() {
  const features = [
    {
      title: 'Trusted & Established',
      description: "Established in 2022, we have quickly become a trusted partner for business setup in the UAE.",
      icon: 'verified',
    },
    {
      title: 'Transparent Pricing',
      description: 'No hidden fees or surprise costs. We provide clear, upfront investment roadmaps.',
      icon: 'payments',
    },
    {
      title: '100% Ownership Solutions',
      description: 'Maximize your control with tailored mainland and free zone setup structures.',
      icon: 'account_balance',
    },
  ];

  return (
    <section className="w-full bg-gradient-to-b from-gray-50 to-white py-16 lg:py-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-12">
        <div className="grid gap-12 lg:gap-16 lg:grid-cols-2 items-center">
          {/* Left Content */}
          <div className="flex flex-col gap-8 order-2 lg:order-1">
            <div className="flex flex-col gap-4">
              <FadeIn direction="up">
                <span className="text-sm font-bold uppercase tracking-wider text-[#0f49bd]">
                  Why Choose Us
                </span>
              </FadeIn>
              <FadeIn direction="up" delay={0.1}>
                <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight tracking-tight">
                  Expert Guidance for Your Business Success in Dubai
                </h1>
              </FadeIn>
              <FadeIn direction="up" delay={0.2}>
                <p className="text-lg text-[#4c669a] leading-relaxed max-w-xl">
                  We simplify the complexities of UAE company formation, allowing you to focus on growing your business while we handle the rest.
                </p>
              </FadeIn>
            </div>

            {/* Feature Cards */}
            <StaggerContainer className="flex flex-col gap-6">
              {features.map((feature, index) => (
                <FadeIn key={index} direction="up" delay={0}>
                  <div className="flex gap-4 group cursor-default">
                    <ScaleOnHover>
                      <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#0f49bd]/10 flex items-center justify-center text-[#0f49bd] group-hover:bg-[#0f49bd] group-hover:text-white transition-all duration-300">
                        <span className="material-symbols-outlined text-2xl">
                          {feature.icon}
                        </span>
                      </div>
                    </ScaleOnHover>
                    <div className="flex flex-col gap-1">
                      <h3 className="text-xl font-bold text-gray-900">
                        {feature.title}
                      </h3>
                      <p className="text-base text-[#4c669a] leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </StaggerContainer>

            {/* CTA Button */}
            <FadeIn direction="up" delay={0.4} className="pt-4">
              <ScaleOnHover>
                <Link href="/process" className="inline-block bg-[#0f49bd] hover:bg-[#0d3a8f] text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-lg shadow-[#0f49bd]/20">
                  Learn More About Our Process
                </Link>
              </ScaleOnHover>
            </FadeIn>
          </div>

          {/* Right Image Section */}
          <FadeIn direction="left" delay={0.3} className="relative order-1 lg:order-2">
            <div className="aspect-[4/5] w-full bg-slate-200 rounded-2xl overflow-hidden shadow-2xl relative z-10">
              <Image
                src="/office-interior.jpg"
                alt="Modern business office with Dubai skyline view"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Decorative Blobs */}
            <motion.div 
              animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -bottom-6 -right-6 w-64 h-64 bg-[#0f49bd]/10 rounded-full blur-3xl -z-0" 
            />
            <motion.div 
              animate={{ rotate: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
              className="absolute -top-6 -left-6 w-32 h-32 bg-[#0f49bd]/20 rounded-xl -z-0" 
            />

            {/* Floating Badge */}
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8, type: "spring", stiffness: 100 }}
              viewport={{ once: true }}
              className="absolute bottom-10 -left-10 bg-white p-6 rounded-2xl shadow-xl z-20 hidden xl:block border border-gray-100"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 bg-green-100 rounded-full text-green-600">
                  <span className="material-symbols-outlined">trending_up</span>
                </div>
                <div>
                  <p className="text-2xl font-extrabold text-gray-900">500+</p>
                  <p className="text-sm text-[#4c669a]">Companies Setup</p>
                </div>
              </div>
            </motion.div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
