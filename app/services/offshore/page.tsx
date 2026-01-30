import PageHeader from '@/components/page-header';
import Header from '@/components/header';
import Footer from '@/components/footer';
import CTASection from '@/components/cta-section';
import { Shield, Globe, Lock } from 'lucide-react';

export default function OffshorePage() {
  return (
    <>
      <Header />
      <PageHeader
        title="Offshore Company Setup"
        subtitle="International Asset Protection"
        description="Secure your assets and manage international trade with a confidential structure."
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">What is an Offshore Company?</h2>
              <p className="text-slate-600 mb-6 leading-relaxed">
                An Offshore company is a legal business entity established in a jurisdiction that offers favorable tax and regulatory environments. It is primarily used for international trade, asset protection, and holding intellectual property.
              </p>
              <p className="text-slate-600 leading-relaxed border-l-4 border-blue-500 pl-4 bg-blue-50 py-2 pr-2">
                Note: Offshore companies cannot trade directly within the UAE local market.
              </p>
            </div>
            <div className="grid gap-6">
              <div className="flex gap-4 items-start">
                <div className="bg-blue-100 p-3 rounded-lg text-blue-600">
                  <Shield className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-1">Asset Protection</h3>
                  <p className="text-sm text-slate-600"> safeguard your assets from lawsuits and international judgments.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="bg-blue-100 p-3 rounded-lg text-blue-600">
                  <Lock className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-1">Confidentiality</h3>
                  <p className="text-sm text-slate-600">High level of privacy for directors and shareholders.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="bg-blue-100 p-3 rounded-lg text-blue-600">
                  <Globe className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-1">International Trade</h3>
                  <p className="text-sm text-slate-600">Ideal for facilitating international business transactions.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </>
  );
}
