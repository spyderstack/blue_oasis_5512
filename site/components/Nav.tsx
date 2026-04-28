"use client";

import { useEffect, useRef, useState } from "react";
import { List, X } from "@phosphor-icons/react";
import { PROPERTY } from "@/lib/property-data";

const NAV_LINKS = [
  { href: "#photos", label: "Photos" },
  { href: "#amenities", label: "Amenities" },
  { href: "#location", label: "Location" },
  { href: "#rules", label: "House Rules" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 nav-transition ${
        scrolled ? "nav-solid border-b border-[var(--color-border)]" : "nav-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-16 lg:h-18 flex items-center justify-between gap-8">
        {/* Logo */}
        <a
          href="#"
          className="font-body text-[var(--color-text)] font-light tracking-[0.15em] text-sm uppercase no-underline"
        >
          <span className="text-[var(--color-teal)] font-medium">Blue Oasis</span>
          <span className="mx-1.5 text-[var(--color-muted)]">·</span>
          <span>5512</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs uppercase tracking-[0.12em] text-[var(--color-muted)] hover:text-[var(--color-text)] transition-colors duration-200 no-underline"
            >
              {link.label}
            </a>
          ))}
          <a
            href={PROPERTY.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-cta ml-4 px-5 py-2 rounded-full bg-[var(--color-teal)] text-[var(--color-bg)] text-xs font-medium uppercase tracking-[0.12em] hover:bg-[var(--color-teal-dim)] transition-colors duration-200 no-underline"
          >
            Book Direct
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          id="mobile-menu-btn"
          className="lg:hidden text-[var(--color-text)] p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={20} /> : <List size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          ref={menuRef}
          className="lg:hidden bg-[var(--color-surface)] border-t border-[var(--color-border)] px-6 py-6 flex flex-col gap-5"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="text-sm uppercase tracking-[0.12em] text-[var(--color-muted)] hover:text-[var(--color-text)] no-underline transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href={PROPERTY.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block w-fit px-6 py-2.5 rounded-full bg-[var(--color-teal)] text-[var(--color-bg)] text-xs font-medium uppercase tracking-[0.12em] no-underline"
          >
            Book Direct
          </a>
        </div>
      )}
    </header>
  );
}
