"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionTitle from "@/components/ui/SectionTitle";
import { content } from "@/config/content";

export default function Insight() {
  const { insight } = content;
  const bodyLines = insight.body.split("\n\n");
  const conclusionLines = insight.conclusion.split("\n");

  return (
    <SectionWrapper>
      <SectionTitle>{insight.title}</SectionTitle>

      <div className="space-y-4 mb-10">
        {bodyLines.map((para, i) => (
          <p key={i} className="text-base leading-8" style={{ color: "#8B8B9E" }}>
            {para.split("\n").map((line, j) => (
              <span key={j}>{line}{j < para.split("\n").length - 1 && <br />}</span>
            ))}
          </p>
        ))}
      </div>

      <p className="text-base mb-6" style={{ color: "#8B8B9E" }}>
        慢性的な痛みの多くは、身体の構造的な問題だけでなく
      </p>

      <div className="space-y-3 mb-10">
        {insight.points.map((point, i) => (
          <div
            key={i}
            className="flex items-center gap-4 rounded-lg px-6 py-4"
            style={{ background: "rgba(201, 169, 110, 0.08)", border: "1px solid rgba(201, 169, 110, 0.25)" }}
          >
            <span className="text-xl font-bold" style={{ color: "#C9A96E" }}>「</span>
            <span className="text-lg font-semibold" style={{ color: "#E8C98A" }}>{point}</span>
            <span className="text-xl font-bold" style={{ color: "#C9A96E" }}>」</span>
          </div>
        ))}
      </div>

      <p className="text-base mb-8" style={{ color: "#8B8B9E" }}>が深く関わっています。</p>

      <div className="text-center py-6 px-6 rounded-xl" style={{ border: "1px solid rgba(201, 169, 110, 0.3)", background: "rgba(201, 169, 110, 0.04)" }}>
        <p className="text-lg font-bold leading-relaxed" style={{ color: "#E8E8EC" }}>
          {conclusionLines.map((line, i) => (
            <span key={i}>{line}{i < conclusionLines.length - 1 && <br />}</span>
          ))}
        </p>
      </div>
    </SectionWrapper>
  );
}
