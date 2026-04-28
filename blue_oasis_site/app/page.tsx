import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import StatsBar from "@/components/StatsBar";
import TheSpace from "@/components/TheSpace";
import Gallery from "@/components/Gallery";
import Amenities from "@/components/Amenities";
import Location from "@/components/Location";
import BookCTA from "@/components/BookCTA";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <StatsBar />
        <TheSpace />
        <Gallery />
        <Amenities />
        <Location />
        <BookCTA />
      </main>
      <Footer />
    </>
  );
}
