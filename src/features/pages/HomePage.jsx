import Footer from "../../shared/components/Footer"
import Navbar from "../../shared/components/Navbar"
import ArchitectureSection from "../landing-page/components/Architecture"
import CTASection from "../landing-page/components/CTA"
import FeaturesSection from "../landing-page/components/Features"
import HeroSection from "../landing-page/components/heroSection"
import StatsSection from "../landing-page/components/Stats"

function HomePage(){
    return(
        <>
        <Navbar/>
        <main>
            <HeroSection/>
            <StatsSection/>
            <FeaturesSection/>
            <ArchitectureSection/>
            <CTASection/>
        </main>
        <Footer/>
        

        </>
    )
}
export default HomePage
