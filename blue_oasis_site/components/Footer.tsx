
export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#0e0e0f] border-t border-white/[0.06]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-16 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          {/* Brand */}
          <div>
            <p className="font-light tracking-[0.25em] uppercase text-sm text-[#f2f2f0] mb-2">
              Blue Oasis
              <span className="opacity-40 ml-1 tracking-normal font-normal">
                5512
              </span>
            </p>
            {/* Address — visible on-page local SEO signal */}
            <address className="not-italic text-[#606065] text-xs font-light leading-relaxed mb-3">
              5512 21st St Ct W<br />
              Bradenton, FL 34207
            </address>
            <p className="text-[#606065] text-sm font-light leading-relaxed max-w-xs">
              A luxury vacation rental experience in Bradenton, FL.
              Book direct for the best rates and personal service.
            </p>
          </div>


          {/* Quick links */}
          <div>
            <p className="label text-[#606065] mb-6">explore</p>
            <div className="flex flex-col gap-3">
              {[
                { label: "The Space", href: "#the-space" },
                { label: "Gallery", href: "#gallery" },
                { label: "Amenities", href: "#amenities" },
                { label: "Location", href: "#location" },
                { label: "Book Direct", href: "https://rent.fairly.com/listing/13860451", external: true },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target={"external" in link && link.external ? "_blank" : undefined}
                  rel={"external" in link && link.external ? "noopener noreferrer" : undefined}
                  className="text-[#a0a1a5] text-sm font-light hover:text-[#f2f2f0] transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/[0.06] pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="label text-[#606065]">
            © {year} Blue Oasis 5512. All rights reserved.
          </p>
          <p className="label text-[#606065]">Bradenton, FL</p>
        </div>
      </div>
    </footer>
  );
}
