import Image from 'next/image';

export default function WhyChooseUs() {
  const features = [
    {
      title: 'End-to-End Support',
      description: "From company registration to banking and compliance, we handle every step of your business setup journey.",
      icon: 'verified',
    },
    {
      title: 'Transparent Process',
      description: 'No hidden fees or surprise costs. Clear documentation, structured guidance, and upfront pricing.',
      icon: 'payments',
    },
    {
      title: '100% Ownership Solutions',
      description: 'Full foreign ownership options across Free Zone, Mainland, and Offshore structures tailored to your needs.',
      icon: 'account_balance',
    },
  ];

  return (
    <section className="w-full bg-gradient-to-b from-gray-50 to-white py-16 lg:py-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-12">
        <div className="grid gap-12 lg:gap-16 lg:grid-cols-2 items-center">
          {/* Left Content */}
          <div className="flex flex-col gap-8 order-2 lg:order-1">
            <div className="flex flex-col gap-4">
              <span className="text-sm font-bold uppercase tracking-wider text-[#0f49bd]">
                Why Choose Us
              </span>
              <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight tracking-tight">
                Expert Guidance for Your Business Success in Dubai
              </h1>
              <p className="text-lg text-[#4c669a] leading-relaxed max-w-xl">
                Starting a business in the UAE does not have to be complicated. JoAB Solutions provides structured consultation, documentation support, and coordination with authorized entities.
              </p>
            </div>

            {/* Feature Cards */}
            <div className="flex flex-col gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-4 group">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#0f49bd]/10 flex items-center justify-center text-[#0f49bd] group-hover:bg-[#0f49bd] group-hover:text-white transition-all duration-300">
                    <span className="material-symbols-outlined text-2xl">
                      {feature.icon}
                    </span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <h3 className="text-xl font-bold text-gray-900">
                      {feature.title}
                    </h3>
                    <p className="text-base text-[#4c669a] leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <button className="bg-[#0f49bd] hover:bg-[#0d3a8f] text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-lg shadow-[#0f49bd]/20">
                Learn More About Our Process
              </button>
            </div>
          </div>

          {/* Right Image Section */}
          <div className="relative order-1 lg:order-2">
            <div className="aspect-[4/5] w-full bg-slate-200 rounded-2xl overflow-hidden shadow-2xl relative z-10">
              <Image
                src="/office-interior.jpg"
                alt="Modern business office with Dubai skyline view"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Decorative Blobs */}
            <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-[#0f49bd]/10 rounded-full blur-3xl -z-0" />
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-[#0f49bd]/20 rounded-xl -z-0" />

            {/* Floating Badge */}
            <div className="absolute bottom-10 -left-10 bg-white p-6 rounded-2xl shadow-xl z-20 hidden xl:block border border-gray-100">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-green-100 rounded-full text-green-600">
                  <span className="material-symbols-outlined">trending_up</span>
                </div>
                <div>
                  <p className="text-2xl font-extrabold text-gray-900">Since 2022</p>
                  <p className="text-sm text-[#4c669a]">Trusted by Entrepreneurs</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
