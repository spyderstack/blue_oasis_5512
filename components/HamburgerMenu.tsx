'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { X, FacebookLogo, InstagramLogo } from '@phosphor-icons/react';

const navItems = [
  { label: 'home', href: '/' },
  { label: 'projects', href: '#projects' },
  { label: 'process', href: '#process' },
  { label: 'about', href: '#about' },
  { label: 'careers', href: '#careers' },
  { label: 'property care', href: '#property-care' },
  { label: 'contact', href: '#contact' },
];

interface HamburgerMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function HamburgerMenu({ isOpen, onClose }: HamburgerMenuProps) {
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [onClose]);

  return (
    <div
      ref={menuRef}
      className={`fixed inset-0 z-[200] transition-all duration-700 ease-in-out ${
        isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-cedar-dark" />

      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 md:right-10 z-10 p-2 text-cedar-white hover:text-cedar-gray transition-colors cursor-pointer"
        aria-label="Close menu"
      >
        <X size={28} weight="light" />
      </button>

      {/* Navigation */}
      <nav className="relative z-10 h-full flex items-center justify-center">
        <ul className="flex flex-col items-center gap-6 md:gap-8">
          {navItems.map((item, index) => (
            <li
              key={item.label}
              className="transition-all duration-500"
              style={{
                /* Staggered entrance using original 0.25s delay increments */
                opacity: isOpen ? 1 : 0,
                transform: isOpen ? 'translateY(0)' : 'translateY(20px)',
                transitionDelay: isOpen ? `${index * 100 + 200}ms` : '0ms',
              }}
            >
              <Link
                href={item.href}
                onClick={onClose}
                className="text-cedar-white font-epilogue text-2xl md:text-4xl lg:text-5xl font-light tracking-wide lowercase hover:text-cedar-gray transition-colors duration-300"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Bottom social icons */}
      <div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-6"
        style={{
          opacity: isOpen ? 1 : 0,
          transform: isOpen ? 'translateY(0)' : 'translateY(20px)',
          transition: 'all 0.7s ease',
          transitionDelay: isOpen ? '900ms' : '0ms',
        }}
      >
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-cedar-gray hover:text-cedar-white transition-colors"
        >
          <FacebookLogo size={22} weight="regular" />
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-cedar-gray hover:text-cedar-white transition-colors"
        >
          <InstagramLogo size={22} weight="regular" />
        </a>
      </div>
    </div>
  );
}
