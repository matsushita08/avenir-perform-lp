"use client";

import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionTitle from "@/components/ui/SectionTitle";
import CTAButton from "@/components/ui/CTAButton";
import { content } from "@/config/content";

export default function Pricing() {
  const { pricing } = content;
  const { plan } = pricing;

  return (
    <SectionWrapper id="pricing">
      <SectionTitle>{pricing.title}</SectionTitle>

      <div className="rounded-2xl overflow-hidden" style={{ border: "1px solid rgba(201,169,110,0.4)" }}>
        {/* header */}
        <div className="px-8 py-6 text-center" style={{ background: "linear-gradient(135deg, rgba(201,169,110,0.15) 0%, rgba(201,169,110,0.05) 100%)" }}>
          <p className="text-sm font-bold tracking-widest mb-2" style={{ color: "#C9A96E" }}>{plan.name}</p>
          <div className="flex items-baseline justify-center gap-2">
            <span className="text-5xl font-bold glow-text" style={{ color: "#E8C98A" }}>{plan.price}</span>
            <span className="text-base" style={{ color: "#8B8B9E" }}>{plan.duration}</span>
          </div>
          <p className="text-xs mt-2" style={{ color: "#8B8B9E" }}>{plan.note}</p>
        </div>

        {/* includes */}
        <div className="px-8 py-6" style={{ background: "rgba(255,255,255,0.02)" }}>
          <p className="text-xs font-bold tracking-widest mb-4" style={{ color: "#C9A96E" }}>INCLUDES</p>
          <ul className="space-y-2">
            {plan.includes.map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-sm" style={{ color: "#E8E8EC" }}>
                <span style={{ color: "#C9A96E" }}>✓</span>
                {item}
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-2 mt-6">
            {plan.badges.map((badge, i) => (
              <span key={i} className="text-xs px-3 py-1 rounded-full"
                style={{ background: "rgba(201,169,110,0.1)", border: "1px solid rgba(201,169,110,0.3)", color: "#C9A96E" }}>
                {badge}
              </span>
            ))}
          </div>
        </div>

        {/* cta */}
        <div className="px-8 py-6 text-center" style={{ borderTop: "1px solid rgba(201,169,110,0.15)" }}>
          <CTAButton href={pricing.ctaUrl} label={pricing.cta} />
          <p className="text-xs mt-4" style={{ color: "#8B8B9E" }}>{pricing.footer}</p>
        </div>
      </div>
    </SectionWrapper>
  );
}
