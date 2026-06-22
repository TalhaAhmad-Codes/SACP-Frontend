import { memo } from "react";
import { Link } from "react-router-dom";
import { FadeUp } from "../../../shared/components/FadeUp";

const CTASection = memo(function CTASection() {
  return (
    <section className="py-20 px-4 md:px-6 bg-[#f8f9ff]">
      <div className="max-w-300 mx-auto">
        <FadeUp>
          <div className="bg-white border border-[#e2e8f0] rounded-3xl px-8 py-16 text-center shadow-sm">
            <h2 className="text-[32px] md:text-[42px] font-bold text-[#0b1c30] mb-4"
              style={{ fontFamily: "'Newsreader', serif" }}>
              Ready to Transform Your Institution?
            </h2>
            <p className="text-[16px] text-[#434655] max-w-xl mx-auto mb-8 leading-relaxed">
              Join the future of academic communication. Deploy SACP and experience intelligent automation.
            </p>
            <Link to="/contact"
              className="inline-block bg-[#004ac6] hover:bg-[#003ea8] text-white font-bold
                         px-10 py-4 rounded-full text-[16px] transition-all shadow-lg shadow-[#004ac6]/25 active:scale-[0.98]">
              Get Started Now
            </Link>
          </div>
        </FadeUp>
      </div>
    </section>
  );
});

export default CTASection;