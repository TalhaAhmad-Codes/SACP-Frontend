import { memo } from "react";
import { ArrowRight } from "lucide-react";
import { ARCH_STEPS, TECH_TAGS } from "../data/home.data";
import { FadeUp } from "../../../shared/components/FadeUp";

const ArchitectureSection = memo(function ArchitectureSection() {
  return (
    <section className="py-20 px-4 md:px-6 bg-white">
      <div className="max-w-[1200px] mx-auto">
        <FadeUp className="text-center mb-14">
          <h2 className="text-[32px] md:text-[42px] font-bold text-[#0b1c30] mb-3"
            style={{ fontFamily: "'Newsreader', serif" }}>Platform Architecture</h2>
          <p className="text-[16px] text-[#434655]">How our intelligent engine powers institutional communication</p>
        </FadeUp>

        {/* Pipeline */}
        <FadeUp delay={0.1} className="flex items-start justify-center gap-0 flex-wrap md:flex-nowrap mb-14">
          {ARCH_STEPS.map((step, i) => {
            const Icon = step.icon; // component reference from arch.data.js
            return (
              <div key={step.id} className="flex items-center">
                <div className="flex flex-col items-center gap-2">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all
                    ${step.active ? "bg-[#004ac6] shadow-lg shadow-[#004ac6]/30 scale-110" : "bg-[#e5eeff] border border-[#c3d9ff]"}`}>
                    <Icon
                      className={`w-6 h-6 ${step.active ? "text-white" : "text-[#004ac6]"}`}
                      strokeWidth={2}
                    />
                  </div>
                  <span className="text-[12px] text-[#434655] font-medium text-center whitespace-nowrap">{step.label}</span>
                </div>
                {i < ARCH_STEPS.length - 1 && (
                  <div className="flex items-center mb-5 mx-3">
                    <div className="w-8 md:w-10 h-px bg-[#c3d9ff]" />
                    <ArrowRight className="w-3.5 h-3.5 text-[#c3d9ff] -ml-1" strokeWidth={2} />
                  </div>
                )}
              </div>
            );
          })}
        </FadeUp>

        {/* Tech card */}
        <FadeUp delay={0.2}>
          <div className="bg-[#1a2a3a] rounded-2xl p-6 md:p-8 grid md:grid-cols-2 gap-6 items-center">
            <div>
              <h3 className="text-[24px] font-bold text-white mb-4" style={{ fontFamily: "'Newsreader', serif" }}>
                Technical Foundation
              </h3>
              <div className="flex flex-wrap gap-2">
                {TECH_TAGS.map((tag) => (
                  <span key={tag} className="text-[13px] border border-white/20 text-white/80 px-3 py-1 rounded-full font-medium">{tag}</span>
                ))}
              </div>
            </div>
            <div className="bg-[#0f1e2e] rounded-xl p-5 border border-white/5">
              <div className="flex items-center gap-1.5 mb-3">
                <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#28ca41]" />
                <span className="ml-2 text-[11px] text-white/30 font-mono">CommunicationHub.cs</span>
              </div>
              <pre className="text-[12px] leading-relaxed overflow-x-auto" style={{ fontFamily:"'JetBrains Mono',monospace" }}>
                <span className="text-white/40">{"// SACP Rule Engine\n"}</span>
                <span className="text-[#7dd3fc]">{"public class "}</span>
                <span className="text-[#fde047]">{"CommunicationHub "}</span>
                <span className="text-white">{"{\n"}</span>
                <span className="text-[#7dd3fc]">{"  public async Task "}</span>
                <span className="text-[#86efac]">{"Process"}</span>
                <span className="text-white">{"(Event e) {\n"}</span>
                <span className="text-white/50">{"    var "}</span>
                <span className="text-white">{"cat = "}</span>
                <span className="text-[#f9a8d4]">{"await "}</span>
                <span className="text-[#86efac]">{"AI.Classify"}</span>
                <span className="text-white">{"(e.Content);\n"}</span>
                <span className="text-[#f9a8d4]">{"    return await "}</span>
                <span className="text-[#86efac]">{"Dispatch.To"}</span>
                <span className="text-white">{"(e.Recipients);\n"}</span>
                <span className="text-white">{"  }\n}"}</span>
              </pre>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
});

export default ArchitectureSection;