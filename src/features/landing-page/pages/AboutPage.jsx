import Navbar from "@shared/components/Navbar";
// import FooterSection from "@features/landing-page/about/components/FooterSection"
import HeroSection from "@features/landing-page/components/about/HeroSection";
import PlatfornSection from "@features/landing-page/components/about/PlatformSection";
import TeamSection from "@features/landing-page/components/about/Team";
import { FadeUp } from "@shared/components/FadeUp";
import Footer from "@shared/components/Footer";

function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        <FadeUp>
          <HeroSection />
        </FadeUp>

        <FadeUp delay={0.05}>
          <TeamSection />
        </FadeUp>

        <FadeUp delay={0.1}>
          <PlatfornSection />
        </FadeUp>

        <FadeUp delay={0.15}>
          <Footer />
        </FadeUp>
      </main>
    </>
  );
}
export default AboutPage;
