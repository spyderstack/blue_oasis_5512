"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { List, X, ArrowRight, Phone } from "@phosphor-icons/react";

const navLinks = [
  { label: "The Space", href: "#the-space" },
  { label: "Gallery", href: "#gallery" },
  { label: "Amenities", href: "#amenities" },
  { label: "Location", href: "#location" },
];

const FAIRLY_URL = "https://rent.fairly.com/listing/13860451";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [atBottom, setAtBottom] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const lastScrollY = useRef(0);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      const maxScroll =
        document.documentElement.scrollHeight - window.innerHeight;
      setScrolled(y > 20);
      setAtBottom(y >= maxScroll - 80);
      // Only hide nav when scrolling down, never when mobile menu is open
      setHidden(y > lastScrollY.current && y > 120 && !mobileOpen);
      lastScrollY.current = y;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [mobileOpen]);

  const navBg = atBottom
    ? "bg-white"
    : scrolled
      ? "bg-[#111112]/95 backdrop-blur-md"
      : "bg-transparent";

  const textColor = atBottom ? "text-[#111112]" : "text-[#f2f2f0]";

  const borderColor =
    scrolled && !atBottom
      ? "border-b border-white/5"
      : atBottom
        ? "border-b border-black/10"
        : "border-b border-transparent";

  const closeMobile = () => setMobileOpen(false);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500
          ${navBg} ${borderColor}
          ${hidden && !mobileOpen ? "-translate-y-full" : "translate-y-0"}`}
        style={{ height: "var(--nav-height)" }}
        aria-label="Main navigation"
      >
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 h-full flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className={`font-light tracking-[0.2em] uppercase text-sm ${textColor} transition-colors shrink-0`}
            aria-label="Blue Oasis 5512 — home"
          >
            Blue Oasis
            <span className="opacity-40 ml-1 tracking-normal font-normal">5512</span>
          </Link>

          {/* Spacer — pushes right group to the far edge on mobile */}
          <div className="flex-1 md:flex-none" />

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-8 mr-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`font-normal tracking-[0.12em] uppercase text-xs ${textColor} transition-all hover:opacity-100 opacity-70`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA + mobile hamburger */}
          <div className="flex items-center gap-3">

            {/* Desktop "Book Direct" — hidden on mobile via wrapper div (avoids CSS specificity conflict with btn-outline) */}
            <div className="hidden md:block">
              <a
                href={FAIRLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`btn-outline text-xs py-2.5 px-5 ${
                  atBottom ? "border-black/30 text-[#111112] hover:bg-black/5" : ""
                }`}
              >
                Book Direct
                <ArrowRight size={13} weight="bold" />
              </a>
            </div>

            {/* Hamburger — 44×44px touch target, mobile only */}
            <button
              id="mobile-menu-toggle"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
              className={`md:hidden flex items-center justify-center w-11 h-11 -mr-2 ${textColor} transition-colors`}
              onClick={() => setMobileOpen((v) => !v)}
            >
              {mobileOpen ? <X size={22} weight="bold" /> : <List size={22} weight="bold" />}
            </button>
          </div>
        </div>
      </nav>

      {/* ── Mobile full-screen menu ──────────────────────────────────────── */}
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-40 bg-black/60 transition-opacity duration-300 md:hidden
          ${mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        onClick={closeMobile}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        className={`fixed top-0 right-0 bottom-0 z-50 w-[85vw] max-w-sm
          bg-[#111112] flex flex-col
          transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]
          md:hidden
          ${mobileOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Drawer header */}
        <div
          className="flex items-center justify-between px-6 border-b border-white/[0.06]"
          style={{ height: "var(--nav-height)" }}
        >
          <span className="font-light tracking-[0.2em] uppercase text-sm text-[#f2f2f0]">
            Blue Oasis <span className="opacity-40">5512</span>
          </span>
          <button
            onClick={closeMobile}
            aria-label="Close menu"
            className="flex items-center justify-center w-11 h-11 -mr-2 text-[#f2f2f0]"
          >
            <X size={22} weight="bold" />
          </button>
        </div>

        {/* Nav links */}
        <nav className="flex-1 flex flex-col justify-center px-8 gap-1">
          {navLinks.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              onClick={closeMobile}
              className="flex items-center justify-between py-4 border-b border-white/[0.06] group"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <span className="text-2xl font-light text-[#f2f2f0] group-hover:text-[#a6d7dd] transition-colors">
                {link.label}
              </span>
              <ArrowRight
                size={16}
                className="text-white/20 group-hover:text-[#a6d7dd] transition-colors"
              />
            </a>
          ))}
        </nav>

        {/* Bottom CTAs */}
        <div className="px-6 pb-10 pt-6 flex flex-col gap-3 border-t border-white/[0.06]">

          <a
            href="tel:+19419999999"
            onClick={closeMobile}
            className="flex items-center justify-center gap-2 w-full py-3.5 border border-white/[0.12] text-[#a0a1a5] text-xs uppercase tracking-[0.1em] hover:border-white/30 hover:text-[#f2f2f0] transition-colors"
          >
            <Phone size={14} />
            Call or Text Host
          </a>
        </div>
      </div>
    </>
  );
}
