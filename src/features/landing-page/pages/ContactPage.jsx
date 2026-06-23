import Navbar from "../../../shared/components/Navbar"
import { FadeUp } from "../../../shared/components/FadeUp"

import ContactSection from "../contact/components/ContactSection"
import ContactFooter from "../contact/components/Footer"


function ContactPage(){
    return(
        <>
        <Navbar/>
                <FadeUp>
                    <ContactSection/>
                </FadeUp>
             <FadeUp>
                 <ContactFooter/>
             </FadeUp>
       

        </>
    )
}
export default ContactPage