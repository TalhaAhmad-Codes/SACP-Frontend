import Navbar from "@/shared/components/Navbar"
import FooterSection from "@/features/landing-page/about/components/FooterSection"
import HeroSection from "@/features/landing-page/about/components/HeroSection"
import PlatfornSection from "@/features/landing-page/about/components/PlatformSection"
import TeamSection from "@/features/landing-page/about/components/Team"
import { FadeUp } from "@/shared/components/FadeUp"


function AboutPage(){
    return(
        <>
        <Navbar/>
                <main>
                <FadeUp>
                    <HeroSection/>
                </FadeUp>

                <FadeUp delay={0.05}>
                    <TeamSection/>
                </FadeUp>

                <FadeUp delay={0.1}>
                    <PlatfornSection/>
                </FadeUp>

                <FadeUp delay={0.15}>
                    <FooterSection/>
                </FadeUp>
                </main>


        </>
    )
}
export default AboutPage