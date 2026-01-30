import PageHeader from '@/components/page-header';
import Header from '@/components/header';
import Footer from '@/components/footer';
import ContactForm from '@/components/contact-form';
import { FadeIn, SlideIn } from '@/components/animations';

export default function ContactPage() {
  return (
    <>
      <Header />
      <PageHeader
        title="Contact Us"
        subtitle="Get in Touch"
        description="Ready to start your business journey? Our team is here to help you every step of the way."
      />

      <SlideIn direction="left">
        <ContactForm />
      </SlideIn>

      {/* Map Section or Additional Info could go here */}
      <section className="py-12 bg-white">
         <div className="max-w-7xl mx-auto px-6 text-center">
            <FadeIn direction="up" delay={0.2}>
              <h2 className="text-2xl font-bold mb-4">Visit Our Office</h2>
              <p className="text-slate-600 mb-8">AL GURG TOWER 3, Tayseer Business Center, Dubai, UAE</p>
              <div className="w-full h-96 bg-slate-100 rounded-xl overflow-hidden border border-slate-200 shadow-lg relative">
                 <iframe 
                   src="https://maps.google.com/maps?q=Tayseer+Business+Center+Al+Gurg+Tower+3+Dubai&t=&z=15&ie=UTF8&iwloc=&output=embed"
                   width="100%" 
                   height="100%" 
                   style={{ border: 0 }} 
                   allowFullScreen 
                   loading="lazy" 
                   referrerPolicy="no-referrer-when-downgrade"
                   title="Office Location"
                   className="absolute inset-0"
                 />
              </div>
            </FadeIn>
         </div>
      </section>

      <Footer />
    </>
  );
}
