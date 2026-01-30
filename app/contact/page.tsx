import PageHeader from '@/components/page-header';
import Header from '@/components/header';
import Footer from '@/components/footer';
import ContactForm from '@/components/contact-form';

export default function ContactPage() {
  return (
    <>
      <Header />
      <PageHeader
        title="Contact Us"
        subtitle="Get in Touch"
        description="Ready to start your business journey? Our team is here to help you every step of the way."
      />

      <ContactForm />

      {/* Map Section or Additional Info could go here */}
      <section className="py-12 bg-white">
         <div className="max-w-7xl mx-auto px-6 text-center">
            <h2 className="text-2xl font-bold mb-4">Visit Our Office</h2>
            <p className="text-slate-600 mb-8">AL GURG TOWER 3, Tayseer Business Center, Dubai, UAE</p>
            {/* Placeholder for Map */}
            <div className="w-full h-96 bg-slate-100 rounded-xl flex items-center justify-center text-slate-400 border border-slate-200">
               <span className="material-symbols-outlined text-6xl">map</span>
               <span className="ml-2">Google Map Placeholder</span>
            </div>
         </div>
      </section>

      <Footer />
    </>
  );
}
