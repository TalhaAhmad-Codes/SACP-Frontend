import Footer from "@shared/components/Footer";
import Navbar from "@shared/components/Navbar";
import ArchitectureSection from "@features/landing-page/components/home/Architecture";
import CTASection from "@features/landing-page/components/home/CTA";
import FeaturesSection from "@features/landing-page/components/home/Features";
import HeroSection from "@features/landing-page/components/home/HeroSection";
import StatsSection from "@features/landing-page/components/home/Stats";

function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <StatsSection />
        <FeaturesSection />
        <ArchitectureSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
export default HomePage;
