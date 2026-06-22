import { memo } from "react";
import { Link } from "react-router-dom";
import { FadeUp } from "../../../shared/components/FadeUp";

const HeroSection = memo(function HeroSection() {
  return (
    <section className="relative bg-white pt-16 pb-0 px-4 md:px-6 overflow-hidden">
     
      {/* Radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%50%_at_50%-10%,rgba(0,74,198,0.07),transparent)] pointer-events-none" />

      <div className="max-w-300 mx-auto relative">
        {/* Badge */}
        <FadeUp delay={0} className="flex justify-center mb-6">
          <span className="inline-flex items-center gap-2 bg-[#dce9ff] border border-[#c3c6d7]/40 text-[#004ac6] text-[13px] font-semibold px-4 py-1.5 rounded-full">
            <span className="w-2 h-2 rounded-full bg-[#004ac6] animate-pulse" />
            Trusted by Modern Academic Institutions
          </span>
        </FadeUp>

        {/* Headline */}
        <FadeUp delay={0.1} className="text-center mb-5">
          <h1 className="text-[40px] md:text-[60px] lg:text-[68px] font-bold leading-tight tracking-tight text-[#0b1c30]"
            style={{ fontFamily: "'Newsreader', serif" }}>
            Smart Academic<br />Communication Platform
          </h1>
        </FadeUp>

        {/* Sub */}
        <FadeUp delay={0.2} className="text-center mb-9 max-w-2xl mx-auto">
          <p className="text-[16px] md:text-[18px] text-[#434655] leading-relaxed">
            An intelligent, automated, and centralized communication solution for academic
            institutions — powered by AI and modern distributed architecture.
          </p>
        </FadeUp>

        {/* CTAs */}
        <FadeUp delay={0.3} className="flex items-center justify-center gap-4 flex-wrap mb-14">
          <Link to="/about"
            className="bg-[#004ac6] hover:bg-[#003ea8] text-white font-semibold px-7 py-3.5 rounded-full
                       transition-all shadow-lg shadow-[#004ac6]/25 text-[15px] active:scale-[0.98]">
            Explore Features
          </Link>
          <Link to="/about"
            className="text-[#004ac6] font-semibold text-[15px] hover:underline transition-colors flex items-center gap-1">
            Meet the Team
            <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
          </Link>
        </FadeUp>

        {/* Dashboard Mockup */}
        <FadeUp delay={0.4}>
          <div className="relative mx-auto max-w-4xl">
            <div className="absolute inset-x-0 bottom-0 h-28 bg-linear-to-t from-white to-transparent z-10 pointer-events-none" />
            <div className="relative rounded-2xl overflow-hidden border border-[#e2e8f0] shadow-2xl shadow-[#0b1c30]/10">
              {/* Browser chrome */}
              <div className="flex items-center gap-2 px-4 py-3 bg-[#213145] border-b border-white/5">
                <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                <div className="w-3 h-3 rounded-full bg-[#28ca41]" />
                <div className="flex-1 mx-4 bg-[#1a2a3a] rounded-md h-5 flex items-center px-3">
                  <span className="text-[11px] text-white/30 font-mono">sacp.edu/dashboard</span>
                </div>
              </div>
              {/* Mock dashboard */}
              <div className="bg-[#0f1e2e] p-4 min-h-85 md:min-h-100 flex gap-3">
                {/* Sidebar */}
                <div className="w-36 shrink-0 bg-[#162030] rounded-xl p-3 space-y-2 hidden md:block">
                  {["Dashboard", "Notifications", "Records", "Workflows", "Analytics"].map((item, i) => (
                    <div key={item} className={`h-7 rounded-lg flex items-center px-2 text-[11px] font-medium
                      ${i === 0 ? "bg-[#004ac6] text-white" : "text-white/40"}`}>
                      {item}
                    </div>
                  ))}
                </div>
                {/* Content */}
                <div className="flex-1 space-y-3">
                  <div className="grid grid-cols-3 gap-2">
                    {[["Notifications Sent", "3,820", "+12%"], ["Delivery Rate", "98.4%", "+2%"], ["Active Workflows", "14", "+3"]].map(([l, v, t]) => (
                      <div key={l} className="bg-[#162030] rounded-xl p-3">
                        <p className="text-[10px] text-white/40 mb-1">{l}</p>
                        <p className="text-[18px] font-bold text-white leading-none">{v}</p>
                        <p className="text-[10px] text-emerald-400 mt-1">{t}</p>
                      </div>
                    ))}
                  </div>
                  <div className="bg-[#162030] rounded-xl p-3">
                    <p className="text-[11px] text-white/40 mb-3">Communication Volume — 2025</p>
                    <div className="flex items-end gap-1.5 h-24">
                      {[30, 55, 40, 70, 85, 60, 90, 75, 95, 65, 80, 100].map((h, i) => (
                        <div key={i} className="flex-1 rounded-sm bg-[#004ac6]/60 hover:bg-[#004ac6] transition-colors" style={{ height: `${h}%` }} />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
});

export default HeroSection;