'use client';

import Link from 'next/link';
import { Phone, ChevronDown } from 'lucide-react';
import { COMPANY_INFO, NAVIGATION } from '@/lib/data';
import { useState } from 'react';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 right-0 z-50">
      <nav className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center group">
          <div className="flex flex-col leading-none">
            <span className="text-2xl font-bold text-white tracking-tight group-hover:text-blue-100 transition-colors">JOAB</span>
            <span className="text-sm font-semibold text-white/90 tracking-widest group-hover:text-blue-100 transition-colors">SOLUTIONS</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8 text-white/90 text-sm font-medium">
          {NAVIGATION.main.map((item) => (
            item.children ? (
              <div key={item.title} className="group relative">
                <Link href={item.href} className="hover:text-white flex items-center gap-1 transition-colors py-2">
                  {item.title}
                  <ChevronDown className="w-4 h-4" />
                </Link>
                {/* Dropdown */}
                <div className="absolute top-full left-0 w-56 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 p-2">
                  {item.children.map((child) => (
                    <Link
                      key={child.title}
                      href={child.href}
                      className="block px-4 py-2.5 text-sm text-slate-600 hover:text-blue-600 hover:bg-slate-50 rounded-md transition-colors"
                    >
                      {child.title}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link key={item.title} href={item.href} className="hover:text-white transition-colors">
                {item.title}
              </Link>
            )
          ))}
        </div>

        {/* Phone Button */}
        <div className="hidden lg:flex items-center">
          <a
            href={`tel:${COMPANY_INFO.phone.main.replace(/\s/g, '')}`}
            className="bg-white text-[#1B4D6B] px-6 py-2.5 rounded-full flex items-center gap-2 font-bold shadow-lg hover:bg-gray-100 transition-all transform hover:scale-105"
          >
            <Phone className="w-4 h-4" />
            {COMPANY_INFO.phone.main}
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden text-white p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span className="material-symbols-outlined text-2xl">menu</span>
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-slate-900/95 lg:hidden">
          <div className="p-6 flex flex-col h-full">
            <div className="flex justify-between items-center mb-8">
              <span className="text-2xl font-bold text-white">JOAB</span>
              <button 
                className="text-white p-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span className="material-symbols-outlined text-2xl">close</span>
              </button>
            </div>
            <div className="flex flex-col gap-6 text-white text-lg font-medium">
              {NAVIGATION.main.map((item) => (
                <Link 
                  key={item.title} 
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="hover:text-blue-400 transition-colors"
                >
                  {item.title}
                </Link>
              ))}
            </div>
            <div className="mt-auto">
              <a
                href={`tel:${COMPANY_INFO.phone.main.replace(/\s/g, '')}`}
                className="bg-white text-[#1B4D6B] w-full py-3 rounded-full flex items-center justify-center gap-2 font-bold"
              >
                <Phone className="w-4 h-4" />
                Call Us
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
