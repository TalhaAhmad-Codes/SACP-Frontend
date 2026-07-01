import Navbar from "@shared/components/Navbar";
import { FadeUp } from "@shared/components/FadeUp";
import ContactSection from "@features/landing-page/components/contact/ContactSection";
import Footer from "@shared/components/Footer";

function ContactPage() {
  return (
    <>
      <Navbar />
      <FadeUp>
        <ContactSection />
      </FadeUp>
      <FadeUp>
        <Footer />
      </FadeUp>
    </>
  );
}
export default ContactPage;
