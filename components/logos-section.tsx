'use client';

export default function LogosSection() {
  const logos = ['MEYDAN', 'SHAMS', 'DMCC', 'DDA', 'IFZA', 'RAKEZ'];

  return (
    <section className="bg-white py-12 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-8">
          <p className="text-xs md:text-sm font-bold text-gray-400 uppercase tracking-widest">
            Authorised Registered Agent For
          </p>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 opacity-50 transition-all duration-500 hover:opacity-100">
          {logos.map((logo) => (
            <span key={logo} className="text-lg md:text-2xl font-bold text-[#1B4D6B] tracking-wider">
              {logo}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
