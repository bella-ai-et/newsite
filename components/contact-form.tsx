'use client';

import React from "react"

import { FormEvent, useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    service: '',
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('[v0] Form submitted:', formData);
    // Handle form submission here
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden bg-gradient-to-b from-white to-slate-50 py-12 md:py-20 lg:py-32">
      {/* Main Container */}
      <div className="layout-container flex h-full grow flex-col items-center justify-center px-4 md:px-10 lg:px-40">
        {/* CTA Content Wrapper */}
        <div className="layout-content-container flex flex-col w-full max-w-[1200px] bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* Left Column: Branding & Form */}
            <div className="lg:col-span-8 p-8 md:p-12 lg:p-16">
              <div className="max-w-[640px]">
                <div className="flex flex-col gap-2 mb-10">
                  <h1 className="text-slate-900 text-3xl md:text-5xl font-extrabold leading-tight tracking-tight">
                    Launch Your Business Today
                  </h1>
                  <p className="text-slate-600 text-lg font-normal leading-normal">
                    Get a free consultation from our experts and scale your operations globally.
                  </p>
                </div>

                {/* Contact Form */}
                <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Name Field */}
                    <label className="flex flex-col flex-1">
                      <p className="text-slate-900 text-sm font-semibold pb-2">Full Name</p>
                      <input
                        className="flex w-full rounded-lg text-slate-900 border border-gray-200 bg-gray-50 focus:ring-2 focus:ring-blue-600 focus:border-transparent h-14 placeholder:text-gray-400 p-4 text-base font-normal transition-all"
                        placeholder="e.g. John Doe"
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        required
                      />
                    </label>

                    {/* Email Field */}
                    <label className="flex flex-col flex-1">
                      <p className="text-slate-900 text-sm font-semibold pb-2">Email Address</p>
                      <input
                        className="flex w-full rounded-lg text-slate-900 border border-gray-200 bg-gray-50 focus:ring-2 focus:ring-blue-600 focus:border-transparent h-14 placeholder:text-gray-400 p-4 text-base font-normal transition-all"
                        placeholder="name@company.com"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </label>
                  </div>

                  {/* Service Dropdown */}
                  <label className="flex flex-col w-full">
                    <p className="text-slate-900 text-sm font-semibold pb-2">Service Interested In</p>
                    <select
                      className="flex w-full rounded-lg text-slate-900 border border-gray-200 bg-gray-50 focus:ring-2 focus:ring-blue-600 focus:border-transparent h-14 p-4 text-base font-normal transition-all appearance-none"
                      style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath fill='%230f49bd' d='M7 10l5 5 5-5z'/%3E%3C/svg%3E")`,
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'right 1rem center',
                        backgroundSize: '24px',
                        paddingRight: '2.5rem',
                      }}
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                    >
                      <option disabled value="">
                        Select a service
                      </option>
                      <option value="business-setup">Business Setup &amp; Licensing</option>
                      <option value="consulting">Strategic Consulting</option>
                      <option value="financial">Financial Advisory</option>
                      <option value="it-solutions">Digital Solutions</option>
                    </select>
                  </label>

                  <div className="flex flex-col gap-3 mt-4">
                    <button
                      className="flex w-full md:w-max min-w-[200px] cursor-pointer items-center justify-center rounded-lg h-14 px-8 bg-blue-600 text-white text-base font-bold leading-normal tracking-wide hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/20"
                      type="submit"
                    >
                      Submit Request
                    </button>
                    <p className="text-xs text-gray-400 italic">
                      * We value your privacy. Your information is never shared.
                    </p>
                  </div>
                </form>
              </div>
            </div>

            {/* Right Column: Direct Contact Info */}
            <div className="lg:col-span-4 bg-blue-50 p-8 md:p-12 lg:p-16 flex flex-col justify-center border-t lg:border-t-0 lg:border-l border-gray-100">
              <div className="flex flex-col gap-8">
                <div>
                  <h3 className="text-slate-900 text-xl font-bold leading-tight mb-2">Ready to Start?</h3>
                  <p className="text-slate-600 text-sm">
                    Our team is ready to assist you right now. Reach out via your preferred method.
                  </p>
                </div>

                {/* Contact Item: Phone */}
                <div className="flex items-center gap-4 group cursor-pointer">
                  <div className="bg-blue-600 text-white rounded-xl w-14 h-14 flex items-center justify-center shadow-md transition-transform group-hover:scale-105">
                    <span className="material-symbols-outlined text-2xl">call</span>
                  </div>
                  <div className="flex flex-col">
                    <p className="text-slate-900 text-lg font-bold leading-none mb-1">+971 58 836 4257</p>
                    <p className="text-slate-500 text-sm font-medium">Direct Voice Call</p>
                  </div>
                </div>

                {/* Contact Item: WhatsApp */}
                <div className="flex items-center gap-4 group cursor-pointer">
                  <div className="bg-green-500 text-white rounded-xl w-14 h-14 flex items-center justify-center shadow-md transition-transform group-hover:scale-105">
                    <span className="material-symbols-outlined text-2xl">chat</span>
                  </div>
                  <div className="flex flex-col">
                    <p className="text-slate-900 text-lg font-bold leading-none mb-1">WhatsApp Chat</p>
                    <p className="text-slate-500 text-sm font-medium">Instant Messaging</p>
                  </div>
                </div>

                {/* Divider */}
                <div className="h-px bg-gray-200 w-full"></div>

                {/* Response Time */}
                <div className="flex flex-col gap-2">
                  <p className="text-slate-900 text-sm font-bold flex items-center gap-2">
                    <span className="material-symbols-outlined text-blue-600 text-sm">schedule</span>
                    Response Time: &lt; 2 Hours
                  </p>
                  <p className="text-slate-500 text-xs">
                    Available Sunday to Thursday, 9:00 AM — 6:00 PM (GMT+4)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Accents */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 opacity-30 pointer-events-none overflow-hidden">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>
      </div>
    </div>
  );
}
