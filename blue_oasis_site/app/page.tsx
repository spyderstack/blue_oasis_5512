import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import StatsBar from "@/components/StatsBar";
import TheSpace from "@/components/TheSpace";
import Gallery from "@/components/Gallery";
import Amenities from "@/components/Amenities";
import Location from "@/components/Location";
import BookCTA from "@/components/BookCTA";
import Footer from "@/components/Footer";

/**
 * SEO Notes:
 * - <main> wraps all primary content (semantic landmark for crawlers)
 * - Each section has id= for deep-linking and anchor signals
 * - <h1> lives in Hero, all subsequent headings are <h2> (enforced per component)
 * - Address is rendered in visible text in Location section (on-page signal)
 */
export default function HomePage() {
  return (
    <>
      <Nav />
      <main id="main-content" aria-label="Blue Oasis 5512 vacation rental">
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
