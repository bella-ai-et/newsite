'use client';

import Link from 'next/link';
import { Phone, ChevronDown, Globe } from 'lucide-react';
import { COMPANY_INFO, NAVIGATION } from '@/lib/data';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ScaleOnHover } from './animations';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 right-0 z-50">
      <nav className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center group">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="flex flex-col leading-none"
          >
            <div className="flex items-center text-2xl font-bold text-white tracking-tight group-hover:text-blue-100 transition-colors">
              J<Globe className="w-5 h-5 mx-[1px]" strokeWidth={2.5} />AB
            </div>
            <span className="text-sm font-semibold text-white/90 tracking-widest group-hover:text-blue-100 transition-colors">SOLUTIONS</span>
          </motion.div>
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
                <div className="absolute top-full left-0 w-56 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 p-2 origin-top">
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
              <motion.div key={item.title} whileHover={{ y: -2 }}>
                <Link href={item.href} className="hover:text-white transition-colors relative">
                  {item.title}
                </Link>
              </motion.div>
            )
          ))}
        </div>

        {/* Phone Button */}
        <div className="hidden lg:flex items-center">
          <ScaleOnHover>
            <a
              href={`tel:${COMPANY_INFO.phone.main.replace(/\s/g, '')}`}
              className="bg-white text-[#1B4D6B] px-6 py-2.5 rounded-full flex items-center gap-2 font-bold shadow-lg hover:bg-gray-100 transition-all"
            >
              <Phone className="w-4 h-4" />
              {COMPANY_INFO.phone.main}
            </a>
          </ScaleOnHover>
        </div>

        {/* Mobile Menu Button */}
        <motion.button 
          whileTap={{ scale: 0.9 }}
          className="lg:hidden text-white p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span className="material-symbols-outlined text-2xl">menu</span>
        </motion.button>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-50 bg-slate-900/95 lg:hidden"
          >
            <div className="p-6 flex flex-col h-full">
              <div className="flex justify-between items-center mb-8">
                <div className="flex items-center text-2xl font-bold text-white">
                  J<Globe className="w-6 h-6 mx-[1px]" strokeWidth={2.5} />AB
                </div>
                <motion.button 
                  whileTap={{ scale: 0.9 }}
                  className="text-white p-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span className="material-symbols-outlined text-2xl">close</span>
                </motion.button>
              </div>
              <div className="flex flex-col gap-6 text-white text-lg font-medium">
                {NAVIGATION.main.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.1 * index }}
                  >
                    <Link 
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="hover:text-blue-400 transition-colors block"
                    >
                      {item.title}
                    </Link>
                  </motion.div>
                ))}
              </div>
              <div className="mt-auto">
                <a
                  href={`tel:${COMPANY_INFO.phone.main.replace(/\s/g, '')}`}
                  className="bg-white text-[#1B4D6B] w-full py-3 rounded-full flex items-center justify-center gap-2 font-bold"
                >
                  <Phone className="w-4 h-4" />
                  Call Us Now
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
