import PageHeader from '@/components/page-header';
import Header from '@/components/header';
import Footer from '@/components/footer';
import CTASection from '@/components/cta-section';

export default function FAQPage() {
  const faqs = [
    {
      question: "What is the difference between Free Zone, Mainland, and Offshore?",
      answer: "Free Zone companies offer 100% foreign ownership and tax benefits but trade is restricted within the zone or internationally. Mainland companies can trade directly within the UAE market. Offshore companies are for international trade and asset protection only."
    },
    {
      question: "Can foreigners own 100% of a company in the UAE?",
      answer: "Yes. 100% foreign ownership is allowed in all Free Zones and for most commercial and industrial activities on the Mainland."
    },
    {
      question: "How long does it take to set up a company?",
      answer: "It typically takes 3-5 working days for Free Zone companies and 5-7 working days for Mainland companies, depending on approvals."
    },
    {
      question: "Do I need a physical office space?",
      answer: "For Mainland companies, a physical office (or Ejari) is usually required. Free Zone companies can often start with a 'Flexi-Desk' or virtual office package."
    },
    {
      question: "Is corporate tax applicable to my business?",
      answer: "UAE Corporate Tax (9%) applies to taxable income exceeding AED 375,000. However, Free Zone companies may benefit from 0% tax if they meet specific 'Qualifying Income' criteria."
    }
  ];

  return (
    <>
      <Header />
      <PageHeader
        title="Frequently Asked Questions"
        subtitle="Common Queries"
        description="Answers to the most common questions about doing business in the UAE."
      />

      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6 space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-slate-50 border border-slate-100 rounded-xl p-6 hover:shadow-md transition-shadow">
              <h3 className="text-lg font-bold text-slate-900 mb-3">{faq.question}</h3>
              <p className="text-slate-600 leading-relaxed">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </section>

      <CTASection />
      <Footer />
    </>
  );
}
