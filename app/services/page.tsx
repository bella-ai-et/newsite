import PageHeader from '@/components/page-header';
import Header from '@/components/header';
import Footer from '@/components/footer';
import Link from 'next/link';
import { ArrowRight, Building2, Globe, Briefcase, FileText, CreditCard, Scale } from 'lucide-react';
import CTASection from '@/components/cta-section';

export default function ServicesPage() {
  const mainServices = [
    {
      title: "Free Zone Company Formation",
      description: "Ideal for international business with 100% foreign ownership and tax benefits.",
      href: "/services/freezone",
      icon: <Globe className="w-8 h-8 text-white" />,
      features: ["100% Foreign Ownership", "Tax Advantages", "Fast Setup"],
    },
    {
      title: "Mainland Company Formation",
      description: "Trade directly within the UAE local market and bid for government contracts.",
      href: "/services/mainland",
      icon: <Building2 className="w-8 h-8 text-white" />,
      features: ["Access UAE Market", "Government Contracts", "Scalable Operations"],
    },
    {
      title: "Offshore Company Formation",
      description: "Secure your assets and manage international trade with a UAE offshore entity.",
      href: "/services/offshore",
      icon: <Briefcase className="w-8 h-8 text-white" />,
      features: ["Asset Protection", "International Trade", "Confidentiality"],
    },
  ];

  const supportServices = [
    { title: "Visa & PRO Services", icon: <FileText className="w-6 h-6" /> },
    { title: "Bank Account Opening", icon: <CreditCard className="w-6 h-6" /> },
    { title: "Corporate Tax & VAT", icon: <Scale className="w-6 h-6" /> },
    { title: "Accounting & Bookkeeping", icon: <FileText className="w-6 h-6" /> },
    { title: "Office Space Solutions", icon: <Building2 className="w-6 h-6" /> },
    { title: "Legal Services", icon: <Scale className="w-6 h-6" /> },
  ];

  return (
    <>
      <Header />
      <PageHeader
        title="Our Services"
        subtitle="Comprehensive Business Solutions"
        description="From company registration to operational support, we provide everything you need to succeed in the UAE."
      />

      {/* Main Formation Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900">Company Formation Options</h2>
            <p className="text-slate-600 mt-4">Choose the right jurisdiction for your business goals.</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {mainServices.map((service, index) => (
              <div key={index} className="group bg-slate-50 rounded-2xl p-8 border border-slate-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-blue-600/20 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{service.title}</h3>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-slate-700 font-medium">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  href={service.href}
                  className="inline-flex items-center gap-2 text-blue-600 font-bold hover:gap-3 transition-all"
                >
                  Learn More <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Services */}
      <section id="support" className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
           <div className="grid lg:grid-cols-2 gap-16 items-center">
             <div>
               <h2 className="text-3xl font-bold mb-6">Essential Support Services</h2>
               <p className="text-slate-300 mb-8 leading-relaxed">
                 Business setup is just the beginning. We ensure your company remains compliant and operational with our full suite of corporate services.
               </p>
               <div className="grid sm:grid-cols-2 gap-6">
                 {supportServices.map((service, index) => (
                   <div key={index} className="flex items-center gap-4 bg-white/5 p-4 rounded-lg hover:bg-white/10 transition-colors border border-white/5">
                     <div className="text-blue-400">
                       {service.icon}
                     </div>
                     <span className="font-medium">{service.title}</span>
                   </div>
                 ))}
               </div>
             </div>
             <div className="relative h-[500px] bg-slate-800 rounded-2xl overflow-hidden">
                {/* Abstract graphic or image placeholder */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20"></div>
                <div className="flex items-center justify-center h-full text-slate-600">
                  <span className="material-symbols-outlined text-8xl">support_agent</span>
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
