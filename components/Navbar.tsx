'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import HamburgerMenu from './HamburgerMenu';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const lastScrollY = useRef(0);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 80) {
        setIsScrolled(true);
        // Hide on scroll down, show on scroll up (matching original behavior)
        if (currentScrollY > lastScrollY.current && currentScrollY > 200) {
          setIsHidden(true);
        } else {
          setIsHidden(false);
        }
      } else {
        setIsScrolled(false);
        setIsHidden(false);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        ref={headerRef}
        className={`fixed left-0 right-0 z-50 ${
          isScrolled ? 'bg-cedar-dark' : 'bg-transparent'
        }`}
        style={{
          /* Original uses top positioning with 1s ease-in-out for hide/show */
          top: isHidden ? '-120px' : '0px',
          transition: 'top 1s ease-in-out, background-color 0.4s ease',
        }}
      >
        <div className="flex items-center justify-between px-6 md:px-10 lg:px-14 py-5">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 z-10">
            <span className="text-cedar-white font-epilogue text-[13px] font-normal tracking-[3px] uppercase">
              Cedar Springs
            </span>
          </Link>

          {/* CTA + Hamburger */}
          <div className="flex items-center gap-6 md:gap-10">
            {/* CTA Button — hidden on mobile */}
            <Link
              href="#contact"
              className={`hidden md:inline-flex items-center gap-3 px-6 py-3 text-[10px] font-normal tracking-[2.5px] uppercase border transition-all duration-400 ${
                isScrolled
                  ? 'border-cedar-gray/40 text-cedar-white hover:bg-cedar-white hover:text-cedar-dark hover:border-cedar-white'
                  : 'border-cedar-white/30 text-cedar-white hover:bg-cedar-white hover:text-cedar-dark hover:border-cedar-white'
              }`}
            >
              Start Your Backyard Resort
            </Link>

            {/* Hamburger */}
            <button
              onClick={() => setMenuOpen(true)}
              className="flex flex-col gap-[7px] p-2 cursor-pointer group"
              aria-label="Open menu"
              id="hamburger-open"
            >
              <span className="block w-7 h-[1.5px] bg-cedar-white transition-all duration-300 group-hover:w-5" />
              <span className="block w-7 h-[1.5px] bg-cedar-white transition-all duration-300" />
            </button>
          </div>
        </div>

        {/* Bottom border when at top */}
        <div
          className={`h-px transition-opacity duration-500 ${
            isScrolled ? 'opacity-0' : 'opacity-20'
          } bg-cedar-white`}
        />
      </header>

      <HamburgerMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
