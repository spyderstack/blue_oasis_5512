import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery | Blue Oasis 5512 Luxury Vacation Rental",
  description: "View photos of Blue Oasis Retreat 5512. A luxury 3-bedroom vacation rental in Bradenton, FL with a private pool and modern interiors.",
};

export default function GalleryPage() {
  return (
    <>
      <Nav />
      <main className="pt-24 md:pt-32 min-h-screen bg-[#0e0e0f]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-16 pt-12">
          <h1 className="text-4xl md:text-5xl font-light text-[#f2f2f0] tracking-tight mb-4">
            Photo Gallery
          </h1>
          <p className="text-[#a0a1a5] font-light max-w-2xl mb-12">
            Explore every corner of Blue Oasis 5512. From the sun-drenched private pool 
            to our meticulously designed living spaces.
          </p>
        </div>
        <Gallery />
      </main>
      <Footer />
    </>
  );
}
