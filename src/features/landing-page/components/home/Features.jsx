import { memo } from "react";
import { FEATURES } from "@features/landing-page/data/home.data";
import { FadeUp } from "@shared/components/FadeUp";

const FeatureCard = memo(function FeatureCard({ f }) {
  const Icon = f.icon;

  return (
    <div
      className={`bg-white border border-border-surface rounded-2xl p-6 h-full
                     hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300
                     ${f.large ? "md:col-span-2" : "md:col-span-1"}`}
    >
      <div
        className={`w-10 h-10 ${f.iconBg} ${f.iconColor} rounded-xl flex items-center justify-center mb-4`}
      >
        <Icon className="w-5 h-5" strokeWidth={2} />
      </div>
      <h3
        className="text-[17px] font-bold text-heading mb-2"
        style={{ fontFamily: "'Newsreader', serif" }}
      >
        {f.title}
      </h3>
      <p className="text-[14px] text-[#434655] leading-relaxed mb-4">
        {f.desc}
      </p>
      {f.tags.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {f.tags.map((t) => (
            <span
              key={t}
              className="text-[12px] border border-[#c3c6d7] text-[#434655] px-3 py-1 rounded-full"
            >
              {t}
            </span>
          ))}
        </div>
      )}
      {f.notification && (
        <div className="mt-4 space-y-2">
          {f.notification.map((n) => (
            <div
              key={n.label}
              className={`bg-bg-features border-l-4 ${n.border} rounded-r-lg px-3 py-2`}
            >
              <p className="text-[13px] font-semibold text-heading">
                {n.label}
              </p>
              <p className="text-[12px] text-[#737686]">{n.sub}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
});

const FeaturesSection = memo(function FeaturesSection() {
  return (
    <section className="py-20 px-4 md:px-6 bg-bg-features">
      <div className="max-w-300 mx-auto">
        <FadeUp className="text-center mb-14">
          <h2
            className="text-main-heading-2 md:text-main-heading-2-md font-bold text-heading mb-4"
            style={{ fontFamily: "'Newsreader', serif" }}
          >
            Powerful Features for Academic Excellence
          </h2>
          <p className="text-[16px] text-[#434655] max-w-2xl mx-auto">
            SACP streamlines the entire institutional communication lifecycle
            through a robust set of intelligent tools.
          </p>
        </FadeUp>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {FEATURES.map((f, i) => (
            <FadeUp key={f.id} delay={i * 0.07}>
              <FeatureCard f={f} />
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
});

export default FeaturesSection;
