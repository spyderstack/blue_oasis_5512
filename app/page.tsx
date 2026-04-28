import HeroSlideshow from "@/components/HeroSlideshow";
import IntroSection from "@/components/IntroSection";
import FeaturedProjects from "@/components/FeaturedProjects";
import ProcessSection from "@/components/ProcessSection";
import CTASection from "@/components/CTASection";

export default function Home() {
  return (
    <>
      <HeroSlideshow />
      <IntroSection />
      <FeaturedProjects />
      <ProcessSection />
      <CTASection />
    </>
  );
}
