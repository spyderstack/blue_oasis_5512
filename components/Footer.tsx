'use client';

import Link from 'next/link';
import { Phone, EnvelopeSimple, MapPin, FacebookLogo, InstagramLogo } from '@phosphor-icons/react';

const navColumns = [
  {
    title: 'Explore',
    links: [
      { label: 'Projects', href: '#projects' },
      { label: 'Process', href: '#process' },
      { label: 'About', href: '#about' },
      { label: 'Careers', href: '#careers' },
    ],
  },
  {
    title: 'Services',
    links: [
      { label: 'Landscape Design', href: '#' },
      { label: 'Pool & Spa', href: '#' },
      { label: 'Outdoor Living', href: '#' },
      { label: 'Property Care', href: '#' },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-cedar-dark pt-20 md:pt-28 pb-8">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-14">
        {/* Mission Statement */}
        <div className="text-center mb-16 md:mb-24">
          <p className="font-epilogue text-cedar-white text-xl md:text-2xl lg:text-3xl font-light lowercase tracking-wide leading-relaxed max-w-3xl mx-auto">
            inspired by nature, guided by experience, defined by character
          </p>
        </div>

        {/* Grid: Contact + Navigation */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8 mb-16 md:mb-20">
          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="font-epilogue text-cedar-white text-[11px] tracking-[3px] uppercase mb-6">Contact</h3>
            <a href="tel:9058456853" className="flex items-center gap-3 text-cedar-gray hover:text-cedar-white transition-colors">
              <Phone size={16} weight="light" className="flex-shrink-0" />
              <span className="font-epilogue text-sm font-light">(905) 845-6853</span>
            </a>
            <a href="mailto:info@cedarsprings.net" className="flex items-center gap-3 text-cedar-gray hover:text-cedar-white transition-colors">
              <EnvelopeSimple size={16} weight="light" className="flex-shrink-0" />
              <span className="font-epilogue text-sm font-light">info@cedarsprings.net</span>
            </a>
            <div className="flex items-start gap-3 text-cedar-gray">
              <MapPin size={16} weight="light" className="flex-shrink-0 mt-0.5" />
              <span className="font-epilogue text-sm font-light">1456 Cornwall Road<br />Oakville, ON L6J 7T5</span>
            </div>
          </div>

          {/* Navigation Columns */}
          {navColumns.map((col) => (
            <div key={col.title} className="space-y-4">
              <h3 className="font-epilogue text-cedar-white text-[11px] tracking-[3px] uppercase mb-6">{col.title}</h3>
              {col.links.map((link) => (
                <Link key={link.label} href={link.href} className="block font-epilogue text-cedar-gray text-sm font-light hover:text-cedar-white transition-colors">
                  {link.label}
                </Link>
              ))}
            </div>
          ))}

          {/* Social */}
          <div className="space-y-6">
            <h3 className="font-epilogue text-cedar-white text-[11px] tracking-[3px] uppercase mb-6">Follow Us</h3>
            <div className="flex items-center gap-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 border border-cedar-gray/30 flex items-center justify-center text-cedar-gray hover:text-cedar-white hover:border-cedar-white transition-all">
                <FacebookLogo size={18} weight="regular" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 border border-cedar-gray/30 flex items-center justify-center text-cedar-gray hover:text-cedar-white hover:border-cedar-white transition-all">
                <InstagramLogo size={18} weight="regular" />
              </a>
            </div>
          </div>
        </div>

        <div className="h-px bg-cedar-gray/20 mb-8" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="font-epilogue text-cedar-gray/50 text-[11px] tracking-[1px]">
            © {new Date().getFullYear()} Cedar Springs Landscapes. All rights reserved.
          </span>
          <div className="flex items-center gap-6">
            <Link href="#" className="font-epilogue text-cedar-gray/50 text-[11px] tracking-[1px] hover:text-cedar-gray transition-colors">Privacy Policy</Link>
            <Link href="#" className="font-epilogue text-cedar-gray/50 text-[11px] tracking-[1px] hover:text-cedar-gray transition-colors">Accessibility</Link>
            <Link href="#" className="font-epilogue text-cedar-gray/50 text-[11px] tracking-[1px] hover:text-cedar-gray transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
