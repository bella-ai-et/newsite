import Link from 'next/link';
import { COMPANY_INFO, NAVIGATION } from '@/lib/data';

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
              {COMPANY_INFO.description}
            </p>
            {/* Social Icons */}
            <div className="flex gap-3 mt-2">
              <Link
                className="group w-9 h-9 flex items-center justify-center rounded-lg bg-slate-50 border border-slate-100 hover:border-blue-600/30 transition-all shadow-sm"
                href={COMPANY_INFO.social.linkedin}
              >
                <span className="material-symbols-outlined text-slate-500 group-hover:text-blue-600 text-xl">share</span>
              </Link>
              <Link
                className="group w-9 h-9 flex items-center justify-center rounded-lg bg-slate-50 border border-slate-100 hover:border-blue-600/30 transition-all shadow-sm"
                href={`mailto:${COMPANY_INFO.email}`}
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
              {NAVIGATION.services.map((item) => (
                <Link
                  key={item.title}
                  className="text-slate-600 text-xs hover:text-blue-600 transition-colors font-medium"
                  href={item.href}
                >
                  {item.title}
                </Link>
              ))}
            </nav>
          </div>

          {/* Company Column */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            <h4 className="text-slate-900 font-bold text-sm uppercase tracking-wider">Company</h4>
            <nav className="flex flex-col gap-4">
              {NAVIGATION.main.map((item) => (
                <Link
                  key={item.title}
                  className="text-slate-600 text-xs hover:text-blue-600 transition-colors font-medium"
                  href={item.href}
                >
                  {item.title}
                </Link>
              ))}
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
                    href={`mailto:${COMPANY_INFO.email}`}
                  >
                    {COMPANY_INFO.email}
                  </Link>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-blue-600 text-lg mt-0.5">call</span>
                  <div className="flex flex-col gap-1">
                    <Link
                      className="text-slate-600 text-xs hover:text-blue-600 transition-colors"
                      href={`tel:${COMPANY_INFO.phone.main.replace(/\s/g, '')}`}
                    >
                      {COMPANY_INFO.phone.main}
                    </Link>
                    <Link
                      className="text-slate-600 text-xs hover:text-blue-600 transition-colors"
                      href={`tel:${COMPANY_INFO.phone.secondary.replace(/\s/g, '')}`}
                    >
                      {COMPANY_INFO.phone.secondary}
                    </Link>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-blue-600 text-lg mt-0.5">location_on</span>
                  <p className="text-slate-600 text-xs leading-relaxed max-w-[250px]">
                    {COMPANY_INFO.address}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-xs">
            © {new Date().getFullYear()} {COMPANY_INFO.name}. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link className="text-slate-500 hover:text-blue-600 text-xs transition-colors" href="#">
              Privacy Policy
            </Link>
            <Link className="text-slate-500 hover:text-blue-600 text-xs transition-colors" href="#">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
