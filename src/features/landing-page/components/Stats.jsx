import { memo } from "react";
import { STATS } from "../data/home.data";
import { FadeUp } from "../../../shared/components/FadeUp";

const StatsSection = memo(function StatsSection() {
  return (
    <section className="bg-[#1a2a3a] py-10 px-4 md:px-6">
      <div className="max-w-300 mx-auto">
        <FadeUp>
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
            {STATS.map((s) => (
              <div key={s.label} className="text-center px-6 py-2">
                <p className="text-[32px] md:text-[40px] font-bold text-white leading-none mb-1"
                  style={{ fontFamily: "'Newsreader', serif" }}>{s.value}</p>
                <p className="text-[13px] text-[#93adc8] font-medium">{s.label}</p>
              </div>
            ))}
          </div>
        </FadeUp>
      </div>
    </section>
  );
});

export default StatsSection;