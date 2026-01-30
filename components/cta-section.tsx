export default function CTASection() {
  return (
    <section className="w-full bg-white py-16 lg:py-24 px-6 lg:px-12">
      <div className="mx-auto max-w-6xl">
        <div className="bg-[#0f49bd] rounded-3xl p-10 lg:p-16 text-center relative overflow-hidden">
          {/* Decorative background blob */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full translate-x-1/2 -translate-y-1/2 -z-0" />

          <div className="relative z-10 flex flex-col gap-6 items-center">
            <h2 className="text-3xl lg:text-4xl font-extrabold text-white leading-tight max-w-3xl tracking-tight">
              Ready to launch your business in Dubai?
            </h2>
            <p className="text-lg text-white/90 opacity-90 max-w-2xl leading-relaxed">
              Get clear guidance, transparent costs, and a custom setup plan designed for long-term stability and compliance.
            </p>

            {/* CTA Buttons */}
            <div className="pt-4 flex flex-col sm:flex-row gap-4">
              <button className="bg-white text-[#0f49bd] px-8 py-4 rounded-xl font-extrabold text-base hover:bg-gray-50 transition-colors duration-300 shadow-lg">
                Book a Free Consultation
              </button>
              <button className="bg-transparent border-2 border-white/30 text-white px-8 py-4 rounded-xl font-extrabold text-base hover:bg-white/10 transition-colors duration-300">
                View Pricing
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
