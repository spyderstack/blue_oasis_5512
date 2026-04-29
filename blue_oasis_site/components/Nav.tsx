"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { List, X, ArrowRight } from "@phosphor-icons/react";

const navLinks = [
  { label: "The Space", href: "#the-space" },
  { label: "Gallery", href: "#gallery" },
  { label: "Amenities", href: "#amenities" },
  { label: "Location", href: "#location" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 40);
      setHidden(y > lastScrollY.current && y > 160);
      lastScrollY.current = y;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navBg = scrolled
    ? "bg-[#0C1B33]/95 backdrop-blur-md shadow-lg shadow-black/20"
    : "bg-transparent";

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${navBg} ${
          hidden && !mobileOpen ? "-translate-y-full" : "translate-y-0"
        }`}
        style={{ height: "var(--nav-height)" }}
      >
        <div className="max-w-[1400px] mx-auto px-6 h-full flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="font-light tracking-[0.2em] uppercase text-sm text-white transition-colors hover:text-[#1AAEDB]"
          >
            Blue Oasis
            <span className="text-[#1AAEDB] font-semibold ml-1 tracking-wider">
              5512
            </span>
          </Link>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-normal tracking-[0.12em] uppercase text-xs text-white/70 hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA + hamburger */}
          <div className="flex items-center gap-3">
            <a
              href="#book"
              className="hidden md:inline-flex btn-primary text-xs px-5 py-3"
            >
              Book Direct
              <ArrowRight size={14} weight="bold" />
            </a>
            <button
              aria-label="Toggle menu"
              className="md:hidden p-1 text-white"
              onClick={() => setMobileOpen((v) => !v)}
            >
              {mobileOpen ? <X size={24} /> : <List size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-[#0C1B33] flex flex-col pt-[var(--nav-height)] px-6 pb-10">
          <div className="flex-1 flex flex-col justify-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-4xl font-light text-white tracking-tight hover:text-[#1AAEDB] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
          <a
            href="#book"
            onClick={() => setMobileOpen(false)}
            className="btn-primary w-full justify-center"
          >
            Book Direct
          </a>
        </div>
      )}
    </>
  );
}
