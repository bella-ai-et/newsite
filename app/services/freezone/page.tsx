import PageHeader from '@/components/page-header';
import Header from '@/components/header';
import Footer from '@/components/footer';
import CTASection from '@/components/cta-section';
import { Check, ArrowRight } from 'lucide-react';
import { FadeIn } from '@/components/animations';

export default function FreeZonePage() {
  const benefits = [
    "100% Foreign Ownership",
    "0% Corporate Tax (subject to criteria)",
    "Full Repatriation of Capital & Profits",
    "No Currency Restrictions",
    "Quick & Easy Setup Process",
    "Access to World-Class Infrastructure"
  ];

  const licenseTypes = [
    { title: "Commercial License", desc: "For trading and selling goods." },
    { title: "Service License", desc: "For professional services and consultancy." },
    { title: "E-commerce License", desc: "For online businesses and trading." },
    { title: "Industrial License", desc: "For manufacturing and production." },
  ];

  return (
    <>
      <Header />
      <PageHeader
        title="Free Zone Company Setup"
        subtitle="Global Business Hub"
        description="Enjoy 100% ownership and tax benefits with a UAE Free Zone company."
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16">
          <FadeIn direction="right">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Why Choose a Free Zone?</h2>
              <p className="text-slate-600 mb-8 leading-relaxed">
                UAE Free Zones are special economic areas designed to boost international business. They offer foreign entrepreneurs complete ownership of their companies along with a tax-friendly environment.
              </p>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-600 shrink-0">
                      <Check className="w-4 h-4" />
                    </div>
                    <span className="text-slate-700 font-medium">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
          <FadeIn direction="left" delay={0.2}>
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
              <h3 className="text-xl font-bold text-slate-900 mb-6">Available License Types</h3>
              <div className="space-y-6">
                {licenseTypes.map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 shrink-0 font-bold">
                      {index + 1}
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900">{item.title}</h4>
                      <p className="text-sm text-slate-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <CTASection />
      <Footer />
    </>
  );
}
