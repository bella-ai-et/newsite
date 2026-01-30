import PageHeader from '@/components/page-header';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { COMPANY_INFO } from '@/lib/data';
import { CheckCircle2, Target, Users, ShieldCheck } from 'lucide-react';
import CTASection from '@/components/cta-section';

export default function AboutPage() {
  const values = [
    {
      title: "Transparency",
      description: "We believe in clear communication and honest guidance. No hidden costs or surprises.",
      icon: <CheckCircle2 className="w-6 h-6 text-blue-600" />,
    },
    {
      title: "Efficiency",
      description: "We value your time. Our streamlined processes ensure your business is set up quickly and correctly.",
      icon: <Target className="w-6 h-6 text-blue-600" />,
    },
    {
      title: "Client-First Approach",
      description: "Your success is our priority. We tailor our solutions to meet your specific business needs.",
      icon: <Users className="w-6 h-6 text-blue-600" />,
    },
    {
      title: "Regulatory Expertise",
      description: "Deep knowledge of UAE laws and regulations to ensure your business remains compliant.",
      icon: <ShieldCheck className="w-6 h-6 text-blue-600" />,
    },
  ];

  return (
    <>
      <Header />
      <PageHeader
        title="About JoAB Solutions"
        subtitle="Our Story & Vision"
        description="We are a professional business setup and consultancy firm dedicated to supporting entrepreneurs and companies in the UAE."
      />

      {/* Intro Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              Empowering Business Growth in the UAE
            </h2>
            <div className="space-y-4 text-slate-600 leading-relaxed">
              <p>
                Established in 2022, <strong>{COMPANY_INFO.name}</strong> has quickly become a trusted partner for entrepreneurs looking to start their journey in Dubai and across the UAE.
              </p>
              <p>
                We provide end-to-end business setup assistance, guiding clients from the initial idea to a fully operational company. Our services simplify complex procedures through clear consultation, structured documentation support, and coordination with authorized entities.
              </p>
              <p>
                Beyond company formation, we support post-setup needs such as business bank account opening, corporate tax registration, and ongoing compliance assistance. Our focus is long-term stability, compliance, and clarity for our clients.
              </p>
            </div>
          </div>
          <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl bg-slate-100">
            {/* Placeholder for an office or team image */}
             <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/10 to-transparent"></div>
             <div className="flex items-center justify-center h-full text-slate-400 bg-slate-200">
                <span className="material-symbols-outlined text-6xl">business</span>
             </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Core Values</h2>
            <p className="text-slate-600">
              The principles that guide our work and our relationship with every client.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-6">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{value.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </>
  );
}
