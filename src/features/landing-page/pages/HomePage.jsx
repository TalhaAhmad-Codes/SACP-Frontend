import Footer from "../../../shared/components/Footer"
import Navbar from "../../../shared/components/Navbar"
import ArchitectureSection from "../components/Architecture"
import CTASection from "../components/CTA"
import FeaturesSection from "../components/Features"
import HeroSection from "../components/HeroSection"
import StatsSection from "../components/Stats"

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
