export const COMPANY_INFO = {
  name: "JoAB Solutions",
  tagline: "Your Trusted Partner for Business Setup in the UAE",
  description: "A professional business setup consultancy helping entrepreneurs start and grow companies in the UAE.",
  email: "info@joabsolutions.com",
  phone: {
    main: "+971 58 836 4257",
    secondary: "+971 52 644 2563",
  },
  address: "AL GURG TOWER 3, Tayseer Business Center, Dubai, UAE",
  workingHours: {
    weekdays: "Monday to Friday – 9:00 AM to 6:00 PM",
    saturday: "Saturday – 12:00 PM to 4:00 PM",
  },
  social: {
    linkedin: "#",
    instagram: "#",
    facebook: "#",
  },
};

export const NAVIGATION = {
  main: [
    { title: "Home", href: "/" },
    { title: "About Us", href: "/about" },
    {
      title: "Services",
      href: "/services",
      children: [
        { title: "Free Zone Setup", href: "/services/freezone" },
        { title: "Mainland Setup", href: "/services/mainland" },
        { title: "Offshore Setup", href: "/services/offshore" },
        { title: "Support Services", href: "/services#support" },
      ],
    },
    { title: "Process", href: "/process" },
    { title: "FAQ", href: "/faq" },
    { title: "Contact Us", href: "/contact" },
  ],
  services: [
    { title: "Free Zone Company Formation", href: "/services/freezone" },
    { title: "Mainland Company Formation", href: "/services/mainland" },
    { title: "Offshore Company Formation", href: "/services/offshore" },
    { title: "PRO & Visa Services", href: "/services#support" },
    { title: "Bank Account Opening", href: "/services#support" },
  ],
};
