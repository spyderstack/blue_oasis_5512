import { InstagramLogo, Envelope, ArrowRight } from "@phosphor-icons/react/dist/ssr";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#080F1C] border-t border-white/[0.06]">
      {/* Top accent strip */}
      <div className="h-0.5 bg-gradient-to-r from-[#1AAEDB]/0 via-[#1AAEDB] to-[#1AAEDB]/0" />

      <div className="max-w-[1400px] mx-auto px-6 md:px-16 pt-20 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Brand */}
          <div>
            <p className="font-light tracking-[0.2em] uppercase text-base text-white mb-2">
              Blue Oasis
              <span className="text-[#1AAEDB] font-semibold ml-1">5512</span>
            </p>
            <p className="text-[#4A637F] text-sm font-light leading-relaxed max-w-xs mb-6">
              A luxury vacation rental experience in the heart of Miami Beach.
              Book direct for the best rates and personal service.
            </p>
            <a href="#book" className="btn-primary text-xs px-5 py-3 inline-flex">
              Book Direct
              <ArrowRight size={13} weight="bold" />
            </a>
          </div>

          {/* Links */}
          <div>
            <p className="label text-[#1AAEDB] mb-6 tracking-[0.2em]">explore</p>
            <div className="flex flex-col gap-3">
              {[
                { label: "The Space", href: "#the-space" },
                { label: "Gallery", href: "#gallery" },
                { label: "Amenities", href: "#amenities" },
                { label: "Location", href: "#location" },
                { label: "Book Direct", href: "#book" },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-[#8FA3BF] text-sm font-light hover:text-white transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <p className="label text-[#1AAEDB] mb-6 tracking-[0.2em]">contact</p>
            <div className="flex flex-col gap-4">
              <a
                href="mailto:hello@blueoasis5512.com"
                className="flex items-center gap-3 text-[#8FA3BF] text-sm font-light hover:text-white transition-colors"
              >
                <Envelope size={15} weight="light" className="text-[#1AAEDB]" />
                hello@blueoasis5512.com
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-[#8FA3BF] text-sm font-light hover:text-white transition-colors"
              >
                <InstagramLogo size={15} weight="light" className="text-[#1AAEDB]" />
                @blueoasis5512
              </a>
            </div>

            <div className="mt-8 p-5 border border-white/08 rounded-sm">
              <div className="flex gap-6">
                <div>
                  <p className="label text-[#4A637F] mb-1 tracking-[0.12em]">min. stay</p>
                  <p className="text-white text-sm font-light">3 nights</p>
                </div>
                <div>
                  <p className="label text-[#4A637F] mb-1 tracking-[0.12em]">check-in</p>
                  <p className="text-white text-sm font-light">4:00 PM</p>
                </div>
                <div>
                  <p className="label text-[#4A637F] mb-1 tracking-[0.12em]">check-out</p>
                  <p className="text-white text-sm font-light">11:00 AM</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/[0.06] pt-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="label text-[#4A637F] tracking-[0.12em]">
            © {year} Blue Oasis 5512. All rights reserved.
          </p>
          <p className="label text-[#4A637F] tracking-[0.12em]">Miami Beach, FL</p>
        </div>
      </div>
    </footer>
  );
}
