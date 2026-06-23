import Navbar from "../../shared/components/Navbar"
import FooterSection from "../about/components/FooterSection"
import HeroSection from "../about/components/HeroSection"
import PlatfornSection from "../about/components/PlatformSection"
import TeamSection from "../about/components/Team"
import { FadeUp } from "../../shared/components/FadeUp"


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