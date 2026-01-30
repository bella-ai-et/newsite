import PageHeader from '@/components/page-header';
import Header from '@/components/header';
import Footer from '@/components/footer';
import CTASection from '@/components/cta-section';
import { Check, Building } from 'lucide-react';
import { FadeIn, ScaleOnHover } from '@/components/animations';

export default function MainlandPage() {
  const advantages = [
    "Trade Directly Within the UAE Market",
    "Bid for Government Contracts",
    "No Restrictions on Office Location",
    "Unlimited Visas (Based on Office Size)",
    "Wide Range of Business Activities",
    "Easy to Open Corporate Bank Accounts"
  ];

  return (
    <>
      <Header />
      <PageHeader
        title="Mainland Company Setup"
        subtitle="Unlimited Local Trade"
        description="Establish a strong presence in the local UAE market with a Mainland license."
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn direction="up">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Expand Without Boundaries</h2>
              <p className="text-slate-600 leading-relaxed">
                A Mainland company is an onshore entity licensed by the Department of Economy and Tourism (DET). It allows you to trade freely within the local UAE market and internationally without any restrictions.
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {advantages.map((adv, index) => (
              <FadeIn key={index} delay={index * 0.1} direction="up" className="h-full">
                <ScaleOnHover className="h-full">
                  <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 hover:border-blue-200 transition-colors h-full">
                    <Building className="w-8 h-8 text-blue-600 mb-4" />
                    <h3 className="font-bold text-slate-900 text-lg mb-2">{adv}</h3>
                  </div>
                </ScaleOnHover>
              </FadeIn>
            ))}
          </div>
          
          <FadeIn direction="up" delay={0.4}>
            <div className="bg-[#1B4D6B] rounded-2xl p-8 md:p-12 text-white text-center">
              <h3 className="text-2xl font-bold mb-4">Ready to Launch Your Mainland Business?</h3>
              <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
                We handle the entire process, from initial approval to trade license issuance and visa processing.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      <CTASection />
      <Footer />
    </>
  );
}
