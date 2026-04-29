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
  const [atBottom, setAtBottom] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      const maxScroll =
        document.documentElement.scrollHeight - window.innerHeight;

      setScrolled(y > 20);
      setAtBottom(y >= maxScroll - 80);
      setHidden(y > lastScrollY.current && y > 120);
      lastScrollY.current = y;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navBg = atBottom
    ? "bg-white"
    : scrolled
      ? "bg-[#111112]/95 backdrop-blur-md"
      : "bg-transparent";

  const textColor =
    atBottom ? "text-[#111112]" : "text-[#f2f2f0]";
  const borderColor =
    scrolled && !atBottom
      ? "border-b border-white/5"
      : atBottom
        ? "border-b border-black/10"
        : "border-b border-transparent";

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${navBg} ${borderColor} ${hidden && !mobileOpen ? "-translate-y-full" : "translate-y-0"
          }`}
        style={{ height: "var(--nav-height)" }}
      >
        <div className="max-w-[1400px] mx-auto px-6 h-full flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className={`font-light tracking-[0.25em] uppercase text-sm ${textColor} transition-colors`}
          >
            Blue Oasis
            <span className="opacity-40 ml-1 tracking-normal font-normal">
              5512
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="font-light text-sm md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`font-normal tracking-[0.25em] uppercase text-sm ${textColor} transition-colors hover:opacity-100 opacity-80`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA + hamburger */}
          <div className="flex items-center gap-4">
            <a
              href="#book"
              className={`hidden md:inline-flex btn-outline text-xs ${atBottom
                ? "border-black/30 text-[#111112] hover:bg-black/5"
                : ""
                }`}
            >
              Book Direct
              <ArrowRight size={14} weight="bold" />
            </a>
            <button
              aria-label="Toggle menu"
              className={`md:hidden p-1 ${textColor}`}
              onClick={() => setMobileOpen((v) => !v)}
            >
              {mobileOpen ? <X size={24} /> : <List size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-[#111112] flex flex-col pt-[var(--nav-height)] px-6 pb-10">
          <div className="flex-1 flex flex-col justify-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-3xl font-light text-[#f2f2f0] tracking-tight hover:opacity-70 transition-opacity"
              >
                {link.label}
              </a>
            ))}
          </div>
          <a
            href="#book"
            onClick={() => setMobileOpen(false)}
            className="btn-solid w-full justify-center"
          >
            Book Direct
          </a>
        </div>
      )}
    </>
  );
}
