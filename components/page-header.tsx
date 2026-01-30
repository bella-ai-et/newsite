import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { FadeIn } from '@/components/animations';

interface PageHeaderProps {
  title: string;
  subtitle: string;
  description?: string;
  backgroundImage?: string;
}

export default function PageHeader({ title, subtitle, description, backgroundImage }: PageHeaderProps) {
  return (
    <section className="relative py-24 lg:py-32 bg-[#1B4D6B] overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1B4D6B] to-[#0F2B3C] opacity-95" />
        {/* Abstract Pattern */}
        <svg
          className="absolute inset-0 opacity-10 pointer-events-none"
          width="100%"
          height="100%"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <path d="M0 100 C 20 0 50 0 100 100 Z" fill="none" stroke="white" strokeWidth="0.5" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <FadeIn direction="up">
          <div className="inline-block text-blue-200 uppercase tracking-widest text-sm font-semibold mb-4 border-b border-blue-400 pb-1">
            {subtitle}
          </div>
        </FadeIn>
        <FadeIn direction="up" delay={0.1}>
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            {title}
          </h1>
        </FadeIn>
        {description && (
          <FadeIn direction="up" delay={0.2}>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed">
              {description}
            </p>
          </FadeIn>
        )}
      </div>
    </section>
  );
}
