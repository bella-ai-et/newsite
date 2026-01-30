import Link from 'next/link';

export default function Services() {
  const services = [
    {
      title: 'Freezone Company Setup',
      description:
        'Efficient setup in leading UAE freezones with 100% foreign ownership and tax benefits.',
      icon: 'public',
    },
    {
      title: 'Mainland License',
      description:
        'Complete support for Dubai and UAE mainland business registration with local sponsorship assistance.',
      icon: 'apartment',
    },
    {
      title: 'Offshore Incorporation',
      description:
        'Secure offshore structures for international business, asset protection, and tax optimization.',
      icon: 'verified_user',
    },
    {
      title: 'PRO Services',
      description:
        'Expert document clearing, government liaison, and administrative support for all your operational needs.',
      icon: 'description',
    },
    {
      title: 'Visa Processing',
      description:
        'End-to-end residency, golden visa, and employee visa processing solutions for you and your team.',
      icon: 'badge',
    },
    {
      title: 'Corporate Banking',
      description:
        'Hassle-free corporate banking introduction and financial account opening with leading UAE banks.',
      icon: 'account_balance',
    },
  ];

  return (
    <section className="w-full bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-12">
        {/* Header */}
        <div className="mb-16 flex flex-col items-center gap-4 text-center">
          <span className="text-sm font-bold uppercase tracking-wider text-[#0f49bd]">
            Our Expertise
          </span>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight tracking-tight">
            Complete Business Solutions in UAE
          </h2>
          <p className="max-w-2xl text-lg text-[#4c669a] leading-relaxed">
            Navigate the complexities of business setup with our expert-led services tailored for your success in Dubai and beyond.
          </p>
        </div>

        {/* Service Grid */}
        <div className="mb-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="rounded-2xl border border-gray-200 bg-white p-8 hover:border-[#0f49bd] hover:shadow-lg transition-all duration-300"
            >
              <div className="mb-4 flex items-center justify-center w-12 h-12 rounded-xl bg-[#0f49bd]/10 text-[#0f49bd]">
                <span className="material-symbols-outlined text-2xl">
                  {service.icon}
                </span>
              </div>
              <h3 className="mb-3 text-xl font-bold text-gray-900">
                {service.title}
              </h3>
              <p className="text-base text-[#4c669a] leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="flex justify-center">
          <Link href="/services" className="bg-[#0f49bd] hover:bg-[#0d3a8f] text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-lg shadow-[#0f49bd]/20">
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
}
