import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import StatsBar from "@/components/StatsBar";
import TheSpace from "@/components/TheSpace";
import Gallery from "@/components/Gallery";
import Amenities from "@/components/Amenities";
import Bedrooms from "@/components/Bedrooms";
import Location from "@/components/Location";
import HouseRules from "@/components/HouseRules";
import BookCTA from "@/components/BookCTA";
import Footer from "@/components/Footer";
import RevealWrapper from "@/components/RevealWrapper";

export default function HomePage() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <StatsBar />
        <RevealWrapper>
          <TheSpace />
          <Gallery />
          <Amenities />
          <Bedrooms />
          <Location />
          <HouseRules />
          <BookCTA />
        </RevealWrapper>
      </main>
      <Footer />
    </>
  );
}
