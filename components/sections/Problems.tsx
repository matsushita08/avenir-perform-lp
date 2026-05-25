"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionTitle from "@/components/ui/SectionTitle";
import { content } from "@/config/content";

export default function Problems() {
  const { problems } = content;
  const outroLines = problems.outro.split("\n");

  return (
    <SectionWrapper>
      <SectionTitle>{problems.intro}</SectionTitle>

      <div className="space-y-3 mb-10">
        {problems.items.map((item, i) => (
          <div
            key={i}
            className="glass-card rounded-lg px-5 py-4 flex items-start gap-3"
          >
            <span className="mt-0.5 w-5 h-5 rounded border flex-shrink-0 flex items-center justify-center text-xs font-bold"
              style={{ borderColor: "#C9A96E", color: "#C9A96E" }}>
              □
            </span>
            <span className="text-base leading-relaxed" style={{ color: "#E8E8EC" }}>{item}</span>
          </div>
        ))}
      </div>

      <div className="text-center py-8 px-6 rounded-xl" style={{ background: "rgba(201, 169, 110, 0.06)", border: "1px solid rgba(201, 169, 110, 0.3)" }}>
        <p className="text-lg leading-relaxed font-medium" style={{ color: "#E8E8EC" }}>
          {outroLines.map((line, i) => (
            <span key={i}>
              {line}
              {i < outroLines.length - 1 && <br />}
            </span>
          ))}
        </p>
      </div>
    </SectionWrapper>
  );
}
