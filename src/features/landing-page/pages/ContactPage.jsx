import Navbar from "../../../shared/components/Navbar"
import { FadeUp } from "../../../shared/components/FadeUp"

import ContactSection from "../contact/components/ContactSection"
// import ContactFooter from "../contact/components/Footer"
import Footer from "../../../shared/components/Footer"


function ContactPage(){
    return(
        <>
        <Navbar/>
                <FadeUp>
                    <ContactSection/>
                </FadeUp>
             <FadeUp>
                 <Footer/>
             </FadeUp>
       

        </>
    )
}
export default ContactPage