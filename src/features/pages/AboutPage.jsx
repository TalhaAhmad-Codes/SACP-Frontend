import Navbar from "../../shared/components/Navbar"
import FooterSection from "../about/components/FooterSection"
import HeroSection from "../about/components/HeroSection"
import PlatfornSection from "../about/components/PlatformSection"
import TeamSection from "../about/components/Team"


function AboutPage(){
    return(
        <>
        <Navbar/>
        <main>
        <HeroSection/>
        <TeamSection/>
        <PlatfornSection/>
        <FooterSection/>
        </main>


        </>
    )
}
export default AboutPage