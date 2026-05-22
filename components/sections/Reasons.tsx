"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionTitle from "@/components/ui/SectionTitle";
import { content } from "@/config/content";

export default function Reasons() {
  const { reasons } = content;

  return (
    <SectionWrapper>
      <SectionTitle>{reasons.title}</SectionTitle>

      <div className="space-y-6">
        {reasons.items.map((item, i) => (
          <div
            key={i}
            className="rounded-2xl p-6 relative overflow-hidden"
            style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(201,169,110,0.2)" }}
          >
            <div className="absolute top-4 right-5 text-5xl font-bold opacity-10" style={{ color: "#C9A96E" }}>
              {item.number}
            </div>
            <p className="text-xs font-bold tracking-widest mb-3" style={{ color: "#C9A96E" }}>
              REASON {item.number}
            </p>
            <p className="font-bold text-lg mb-3" style={{ color: "#E8E8EC" }}>{item.title}</p>
            <p className="text-sm leading-7" style={{ color: "#8B8B9E" }}>{item.description}</p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
