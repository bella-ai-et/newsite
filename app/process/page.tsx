import PageHeader from '@/components/page-header';
import Header from '@/components/header';
import Footer from '@/components/footer';
import CTASection from '@/components/cta-section';

export default function ProcessPage() {
  const steps = [
    {
      step: 1,
      title: "Initial Consultation",
      description: "We discuss your business activities, goals, and budget to recommend the best jurisdiction (Free Zone, Mainland, or Offshore)."
    },
    {
      step: 2,
      title: "Documentation & Compliance",
      description: "Our team helps you prepare all necessary documents, ensuring they meet UAE regulatory standards."
    },
    {
      step: 3,
      title: "License Application",
      description: "We submit your application to the relevant authorities (DET or Free Zone Authority) and handle all follow-ups."
    },
    {
      step: 4,
      title: "Approval & Registration",
      description: "Once approved, you receive your trade license and official company documents."
    },
    {
      step: 5,
      title: "Visa & Bank Account",
      description: "We assist with visa processing for you and your team, and guide you through corporate bank account opening."
    }
  ];

  return (
    <>
      <Header />
      <PageHeader
        title="How It Works"
        subtitle="Our Process"
        description="We’ve simplified the company formation process into five clear steps."
      />

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
            {steps.map((item, index) => (
              <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                {/* Icon/Number */}
                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-blue-600 text-slate-500 group-[.is-active]:text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 font-bold">
                  {item.step}
                </div>
                
                {/* Content */}
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 bg-slate-50 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="font-bold text-slate-900 text-lg mb-2">{item.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
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
