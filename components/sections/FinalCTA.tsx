"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";
import CTAButton from "@/components/ui/CTAButton";
import { content } from "@/config/content";

export default function FinalCTA() {
  const { finalCta, footer } = content;
  const descLines = finalCta.description.split("\n\n");
  const quoteLines = finalCta.quote.split("\n");

  return (
    <SectionWrapper id="cta">
      <div className="text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl md:text-3xl font-bold mb-8 glow-text"
          style={{ color: "#E8E8EC" }}
        >
          {finalCta.title}
        </motion.h2>

        <div className="space-y-4 mb-10">
          {descLines.map((para, i) => (
            <p key={i} className="text-base leading-8" style={{ color: "#8B8B9E" }}>
              {para.split("\n").map((line, j) => (
                <span key={j}>{line}{j < para.split("\n").length - 1 && <br />}</span>
              ))}
            </p>
          ))}
        </div>

        <div className="rounded-xl px-6 py-6 mb-10" style={{ background: "rgba(201,169,110,0.06)", border: "1px solid rgba(201,169,110,0.25)" }}>
          <p className="text-base italic leading-relaxed" style={{ color: "#C9A96E" }}>
            {quoteLines.map((line, i) => (
              <span key={i}>{line}{i < quoteLines.length - 1 && <br />}</span>
            ))}
          </p>
        </div>

        <CTAButton href={finalCta.ctaUrl} label={finalCta.cta} size="lg" />
      </div>

      {/* footer info */}
      <div className="mt-16 pt-8 text-center space-y-1" style={{ borderTop: "1px solid rgba(201,169,110,0.15)" }}>
        <p className="text-sm font-bold" style={{ color: "#C9A96E" }}>{footer.name}</p>
        <p className="text-xs" style={{ color: "#8B8B9E" }}>{footer.address}</p>
        <p className="text-xs" style={{ color: "#8B8B9E" }}>{footer.conditions}</p>
        <p className="text-xs" style={{ color: "#8B8B9E" }}>{footer.firstSession}</p>
        <p className="text-xs mt-4" style={{ color: "rgba(139,139,158,0.4)" }}>© 2024 Avenir Perform. All rights reserved.</p>
      </div>
    </SectionWrapper>
  );
}
