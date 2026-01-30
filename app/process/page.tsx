
import Header from '@/components/header';
import Footer from '@/components/footer';
import CTASection from '@/components/cta-section';
import { FadeIn } from '@/components/animations';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import PageHeader from '@/components/page-header';

export default function ProcessPage() {
  const steps = [
    {
      step: "01",
      title: "Initial Consultation",
      description: "We discuss your business activities, goals, and budget to recommend the best jurisdiction (Free Zone, Mainland, or Offshore) for your unique needs."
    },
    {
      step: "02",
      title: "Documentation & Compliance",
      description: "Our team helps you prepare all necessary documents, ensuring they meet UAE regulatory standards and compliance requirements from the start."
    },
    {
      step: "03",
      title: "License Application",
      description: "We submit your application to the relevant authorities (DET or Free Zone Authority) and handle all follow-ups to ensure a smooth approval process."
    },
    {
      step: "04",
      title: "Approval & Registration",
      description: "Once approved, you receive your trade license and official company documents, marking the formal legal establishment of your business."
    },
    {
      step: "05",
      title: "Visa & Bank Account",
      description: "We assist with visa processing for you and your team, and provide expert guidance through the corporate bank account opening process."
    }
  ];

  return (
    <>
      <Header />
      <PageHeader
        title="Our Process"
        subtitle="Our Methodology"
        description="The Path to Your Business Success. We simplify the complex process of business setup in the UAE with a structured, five-step approach designed for efficiency and compliance."
      />
      
      <main className="max-w-7xl mx-auto px-4 py-20 overflow-hidden">
        {/* Header Section Removed - Replaced by PageHeader */}

        <div className="relative">
          {/* Central Line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-blue-600/20 -translate-x-1/2">
            <div className="sticky top-1/2 w-0.5 h-32 bg-blue-600"></div>
          </div>

          <div className="space-y-12 md:space-y-24">
            {steps.map((item, index) => (
              <FadeIn 
                key={index} 
                direction={index % 2 === 0 ? "right" : "left"} 
                delay={index * 0.1}
                className="relative flex flex-col md:flex-row items-center justify-center"
              >
                {/* Left Side (Content for odd, spacer for even) */}
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-16 order-2 md:order-1' : 'md:pr-16 hidden md:block text-right'}`}>
                  {index % 2 === 0 && (
                    <div className="relative bg-white p-8 rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 overflow-hidden group hover:border-blue-600/30 transition-colors duration-300">
                      <span className="absolute -top-4 -left-2 text-8xl font-black text-blue-600/5 group-hover:text-blue-600/10 transition-colors select-none pointer-events-none leading-none">
                        {item.step}
                      </span>
                      <div className="relative z-10">
                        <h3 className="text-2xl font-bold mb-4 text-slate-900">{item.title}</h3>
                        <p className="text-slate-600 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  )}
                </div>

                {/* Center Number */}
                <div className={`z-20 flex items-center justify-center w-10 h-10 rounded-full bg-blue-600 text-white font-bold mb-8 md:mb-0 shrink-0 ${index % 2 === 0 ? 'order-1 md:order-2' : ''}`}>
                  {index + 1}
                </div>

                {/* Right Side (Spacer for odd, content for even) */}
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pl-16 hidden md:block order-3' : 'md:pl-16'}`}>
                  {index % 2 !== 0 && (
                    <div className="relative bg-white p-8 rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 overflow-hidden group hover:border-blue-600/30 transition-colors duration-300">
                      <span className="absolute -top-4 -right-2 text-8xl font-black text-blue-600/5 group-hover:text-blue-600/10 transition-colors select-none pointer-events-none leading-none">
                        {item.step}
                      </span>
                      <div className="relative z-10">
                        <h3 className="text-2xl font-bold mb-4 text-slate-900">{item.title}</h3>
                        <p className="text-slate-600 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </FadeIn>
            ))}
          </div>

          {/* CTA Button at the bottom */}
          <FadeIn direction="up" delay={0.6} className="mt-20 flex justify-center">
             <Link href="/contact" className="bg-blue-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-700 transition-all shadow-xl shadow-blue-600/20 inline-flex items-center gap-2">
                Start Your Journey
                <ArrowRight className="w-5 h-5" />
             </Link>
          </FadeIn>
        </div>
      </main>

      <CTASection />
      <Footer />
    </>
  );
}
