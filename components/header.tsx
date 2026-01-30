'use client';

import { Phone } from 'lucide-react';

export default function Header() {
  return (
    <header className="absolute top-0 left-0 right-0 z-50">
      <nav className="max-w-7xl mx-auto px-6 py-8 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <div className="flex flex-col leading-none">
            <span className="text-2xl font-bold text-white tracking-tight">JOAB</span>
            <span className="text-sm font-semibold text-white/90 tracking-widest">SOLUTIONS</span>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="hidden lg:flex items-center gap-8 text-white/90 text-sm font-medium">
          <a href="#about" className="hover:text-white transition-colors">
            About Us
          </a>
          <div className="group relative">
            <button className="hover:text-white flex items-center gap-1 transition-colors">
              Start Your Company
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </button>
          </div>
          <div className="group relative">
            <button className="hover:text-white flex items-center gap-1 transition-colors">
              Support Services
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </button>
          </div>
          <a href="#contact" className="hover:text-white transition-colors">
            Contact Us
          </a>
        </div>

        {/* Phone Button */}
        <div className="flex items-center">
          <a
            href="tel:+971588364257"
            className="bg-white text-[#1B4D6B] px-6 py-2.5 rounded-full flex items-center gap-2 font-bold shadow-lg hover:bg-gray-100 transition-all transform hover:scale-105"
          >
            <Phone className="w-4 h-4" />
            +971 58 836 4257
          </a>
        </div>
      </nav>
    </header>
  );
}
