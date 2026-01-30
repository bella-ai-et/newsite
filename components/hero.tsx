'use client';

import { ArrowRight, Shield, BadgeCheck } from 'lucide-react';
import Image from 'next/image';

export default function Hero() {
  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#1B4D6B]">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        {/* Background image */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#1B4D6B] to-[#0F2B3C] opacity-95" />
        
        {/* Decorative SVG patterns */}
        <svg
          className="absolute inset-0 opacity-10 pointer-events-none"
          height="100%"
          preserveAspectRatio="none"
          viewBox="0 0 1000 1000"
          width="100%"
        >
          <path d="M0,500 Q250,200 500,500 T1000,500" fill="none" stroke="white" strokeWidth="2" />
          <path d="M0,300 Q250,100 500,300 T1000,300" fill="none" stroke="white" strokeWidth="1" />
          <circle cx="200" cy="200" fill="none" r="100" stroke="white" strokeWidth="1" />
        </svg>
      </div>

      {/* Main content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-16 items-center">
        {/* Left Content */}
        <div className="text-left space-y-8">
          <div>
            <div className="inline-block text-white/80 uppercase tracking-widest text-sm font-semibold mb-4 border-l-4 border-white pl-4">
              From Idea to Reality
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
              Your Gateway to Dubai Business Success
            </h1>
            <p className="text-xl text-white/70 mt-6 max-w-xl leading-relaxed">
              Partner with JOAB Solutions, the premier business setup company in Dubai. Your trusted, award-winning partner for seamless incorporation.
            </p>
          </div>

          {/* CTA Button */}
          <div>
            <button className="bg-white text-[#1B4D6B] px-12 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all shadow-2xl transform hover:-translate-y-1 inline-flex items-center gap-2">
              Start Here
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>

          {/* Trust badges */}
          <div className="flex items-center gap-8 text-white/70 pt-4">
            <div className="flex items-center gap-2">
              <BadgeCheck className="w-5 h-5 text-white/80" />
              <span className="text-sm font-medium">DET Licensed</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-white/80" />
              <span className="text-sm font-medium">100% Secure Process</span>
            </div>
          </div>
        </div>

        {/* Right - Circular Image */}
        <div className="relative flex justify-center lg:justify-end">
          <div className="relative w-80 h-80 md:w-[480px] md:h-[480px]">
            {/* Circular image container */}
            <div className="w-full h-full rounded-full overflow-hidden border-[16px] border-white/5 shadow-2xl relative">
              <Image
                src="/burj-khalifa.jpg"
                alt="Burj Khalifa Dubai"
                width={480}
                height={480}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1B4D6B]/60 to-transparent" />
            </div>

            {/* Decorative circles */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-white/20 backdrop-blur-md rounded-full" />
            <div className="absolute top-1/2 -left-12 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full" />
            <div className="absolute bottom-12 right-0 w-14 h-14 bg-white/15 backdrop-blur-md rounded-full" />
          </div>
        </div>
      </div>
    </main>
  );
}
