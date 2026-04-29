import { InstagramLogo, Envelope } from "@phosphor-icons/react/dist/ssr";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#0e0e0f] border-t border-white/[0.06]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-16 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Brand */}
          <div>
            <p className="font-light tracking-[0.25em] uppercase text-sm text-[#f2f2f0] mb-4">
              Blue Oasis
              <span className="opacity-40 ml-1 tracking-normal font-normal">
                5512
              </span>
            </p>
            <p className="text-[#606065] text-sm font-light leading-relaxed max-w-xs">
              A luxury vacation rental experience in the heart of Miami Beach.
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

          {/* Contact */}
          <div>
            <p className="label text-[#606065] mb-6">contact</p>
            <div className="flex flex-col gap-4">
              <a
                href="mailto:hello@blueoasis5512.com"
                className="flex items-center gap-3 text-[#a0a1a5] text-sm font-light hover:text-[#f2f2f0] transition-colors"
              >
                <Envelope size={16} weight="light" className="text-[#c8b89a]" />
                hello@blueoasis5512.com
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-[#a0a1a5] text-sm font-light hover:text-[#f2f2f0] transition-colors"
              >
                <InstagramLogo
                  size={16}
                  weight="light"
                  className="text-[#c8b89a]"
                />
                @blueoasis5512
              </a>
            </div>

            <div className="mt-8 border border-white/[0.06] p-5">
              <p className="label text-[#606065] mb-1">minimum stay</p>
              <p className="text-[#f2f2f0] text-sm font-light">3 nights</p>
              <p className="label text-[#606065] mt-3 mb-1">instant booking</p>
              <p className="text-[#f2f2f0] text-sm font-light">
                Contact us for availability
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/[0.06] pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="label text-[#606065]">
            © {year} Blue Oasis 5512. All rights reserved.
          </p>
          <p className="label text-[#606065]">Miami Beach, FL</p>
        </div>
      </div>
    </footer>
  );
}
