import Header from '@/components/header';
import Hero from '@/components/hero';
import LogosSection from '@/components/logos-section';
import WhyChooseUs from '@/components/why-choose-us';
import Services from '@/components/services';
import CTASection from '@/components/cta-section';
import ContactForm from '@/components/contact-form';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <LogosSection />
      <WhyChooseUs />
      <Services />
      <CTASection />
      <ContactForm />
      <Footer />
    </>
  );
}
