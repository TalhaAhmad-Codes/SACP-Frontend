

import ContactForm from "@/features/landing-page/contact/components/ContactForm";


function ContactSection() {
  return (
    <section className="bg-gray-50/50 py-16 px-4 sm:px-6 lg:py-24 lg:px-8">
      <div className="max-w-7xl mx-auto">

  
        <div className="max-w-3xl mb-12 sm:mb-16">
          <span className="inline-block text-xs font-bold tracking-widest text-blue-600 uppercase bg-blue-50 px-2.5 py-1 rounded mb-4">
            Support Center
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-950 tracking-tight mb-4">
            Get in Touch with Our <br /> Global Support Team
          </h2>
          <p className="text-base text-gray-600 leading-relaxed max-w-2xl">
            Whether you are an individual researcher or a representative of a large academic institution,
            we are here to streamline your communication needs.
          </p>
        </div>

       
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          <div className="lg:col-span-7">
            <div className="w-full h-full bg-gray-50/50 p-6 rounded-2xl">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection