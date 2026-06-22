import { memo } from "react";
import { GraduationCap } from "lucide-react";

// memo() — Footer is fully static, never needs to re-render
const Footer = memo(function Footer() {
  const PLATFORM = ["Features", "Tech Stack", "Documentation", "Research Edition"];
  const COMPANY  = ["About Us", "Privacy Policy", "Terms of Service", "Contact Support"];

  return (
    <footer className="bg-[#213145] text-white">
      <div className="max-w-300 mx-auto px-4 md:px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">

         
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 bg-[#004ac6] rounded-lg flex items-center justify-center">
                <GraduationCap className="w-[18px] h-[18px] text-white strokeWidth={2}"/>
              </div>
              <span className="text-[20px] font-bold" style={{ fontFamily: "'Newsreader', serif" }}>
                SACP
              </span>
            </div>
            <p className="text-[14px] text-[#93adc8] leading-relaxed max-w-xs">
              Transforming academic communication through intelligent automation
              and centralized management for modern institutions.
            </p>
          </div>

         
          <div>
            <p className="text-[12px] font-bold uppercase tracking-widest text-white mb-4">Platform</p>
            <ul className="space-y-3">
              {PLATFORM.map((l) => (
                <li key={l}>
                  <p href="#" className="text-[14px] text-[#93adc8] hover:text-white transition-colors">{l}</p>
                </li>
              ))}
            </ul>
          </div>

         
          <div>
            <p className="text-[12px] font-bold uppercase tracking-widest text-white mb-4">Company</p>
            <ul className="space-y-3">
              {COMPANY.map((l) => (
                <li key={l}>
                  <p href="#" className="text-[14px] text-[#93adc8] hover:text-white transition-colors">{l}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>

       
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[13px] text-[#93adc8] text-center md:text-left">
            © 2025 Smart Academic Communication Platform. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {["Twitter", "LinkedIn", "GitHub"].map((s) => (
              <p key={s} href="#" className="text-[13px] text-[#93adc8] hover:text-white transition-colors font-medium">
                {s}
              </p>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
});

export default Footer;