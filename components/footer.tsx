import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-100">
      <div className="max-w-[1200px] mx-auto px-8 lg:px-12 pt-20 pb-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-20">
          {/* Brand Section */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <h2 className="text-blue-600 text-xl font-bold tracking-tight">JOAB SOLUTIONS</h2>
            <p className="text-slate-600 text-sm leading-relaxed max-w-sm">
              Professional business setup and consultancy firm dedicated to supporting entrepreneurs and growing companies in the UAE. From initial idea to fully operational company.
            </p>
            {/* Social Icons */}
            <div className="flex gap-3 mt-2">
              <Link
                className="group w-9 h-9 flex items-center justify-center rounded-lg bg-slate-50 border border-slate-100 hover:border-blue-600/30 transition-all shadow-sm"
                href="#"
              >
                <span className="material-symbols-outlined text-slate-500 group-hover:text-blue-600 text-xl">share</span>
              </Link>
              <Link
                className="group w-9 h-9 flex items-center justify-center rounded-lg bg-slate-50 border border-slate-100 hover:border-blue-600/30 transition-all shadow-sm"
                href="#"
              >
                <span className="material-symbols-outlined text-slate-500 group-hover:text-blue-600 text-xl">alternate_email</span>
              </Link>
              <Link
                className="group w-9 h-9 flex items-center justify-center rounded-lg bg-slate-50 border border-slate-100 hover:border-blue-600/30 transition-all shadow-sm"
                href="#"
              >
                <span className="material-symbols-outlined text-slate-500 group-hover:text-blue-600 text-xl">public</span>
              </Link>
            </div>
          </div>

          {/* Services Column */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            <h4 className="text-slate-900 font-bold text-sm uppercase tracking-wider">Services</h4>
            <nav className="flex flex-col gap-4">
              <Link
                className="text-slate-600 text-xs hover:text-blue-600 transition-colors font-medium"
                href="#"
              >
                Mainland Company Setup
              </Link>
              <Link
                className="text-slate-600 text-xs hover:text-blue-600 transition-colors font-medium"
                href="#"
              >
                Free Zone Formation
              </Link>
              <Link
                className="text-slate-600 text-xs hover:text-blue-600 transition-colors font-medium"
                href="#"
              >
                Visa Services
              </Link>
            </nav>
          </div>

          {/* Company Column */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            <h4 className="text-slate-900 font-bold text-sm uppercase tracking-wider">Company</h4>
            <nav className="flex flex-col gap-4">
              <Link
                className="text-slate-600 text-xs hover:text-blue-600 transition-colors font-medium"
                href="#"
              >
                About Us
              </Link>
              <Link
                className="text-slate-600 text-xs hover:text-blue-600 transition-colors font-medium"
                href="#"
              >
                Contact Us
              </Link>
            </nav>
          </div>

          {/* Get in Touch Column */}
          <div className="lg:col-span-4 flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <h4 className="text-slate-900 font-bold text-sm uppercase tracking-wider">Get in Touch</h4>
              <div className="flex flex-col gap-3">
                {/* Email */}
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-blue-600 text-lg mt-0.5">mail</span>
                  <Link
                    className="text-slate-600 text-xs hover:text-blue-600 transition-colors"
                    href="mailto:info@joabsolutions.com"
                  >
                    info@joabsolutions.com
                  </Link>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-blue-600 text-lg mt-0.5">call</span>
                  <div className="flex flex-col gap-1">
                    <Link
                      className="text-slate-600 text-xs hover:text-blue-600 transition-colors"
                      href="tel:+971588364257"
                    >
                      +971 58 836 4257
                    </Link>
                    <Link
                      className="text-slate-600 text-xs hover:text-blue-600 transition-colors"
                      href="tel:+971526442563"
                    >
                      +971 52 644 2563
                    </Link>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-blue-600 text-lg mt-0.5">location_on</span>
                  <p className="text-slate-600 text-xs leading-relaxed">
                    AL GURG TOWER 3, Tayseer Business Center, Dubai, UAE.
                  </p>
                </div>
              </div>
            </div>

            {/* Newsletter Subscription */}
            <div className="flex flex-col gap-4">
              <div className="relative max-w-sm">
                <input
                  className="w-full bg-slate-50 border-none rounded-xl pl-4 pr-32 py-3.5 text-xs focus:ring-2 focus:ring-blue-600/20 text-slate-900 placeholder:text-slate-400"
                  placeholder="Subscribe to newsletter"
                  type="email"
                />
                <button className="absolute right-1.5 top-1.5 bottom-1.5 bg-blue-600 hover:bg-blue-700 text-white font-bold px-5 rounded-lg text-xs transition-all shadow-md">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-400 text-xs font-medium tracking-tight">
            © 2026 JoAB Solutions. All rights reserved.
          </p>
          <div className="flex gap-8">
            <Link
              className="text-slate-400 text-xs hover:text-blue-600 font-bold uppercase tracking-wider transition-colors"
              href="#"
            >
              Privacy Policy
            </Link>
            <Link
              className="text-slate-400 text-xs hover:text-blue-600 font-bold uppercase tracking-wider transition-colors"
              href="#"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
