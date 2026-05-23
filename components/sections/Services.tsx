"use client";

import Image from "next/image";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionTitle from "@/components/ui/SectionTitle";
import { content } from "@/config/content";

export default function Services() {
  const { services } = content;

  return (
    <SectionWrapper>
      <SectionTitle>{services.title}</SectionTitle>

      {/* 施術イメージ */}
      <div className="relative rounded-2xl overflow-hidden mb-8" style={{ height: "180px" }}>
        <Image src="/images/session1.jpg" alt="施術イメージ" fill className="object-cover" style={{ filter: "brightness(0.5) saturate(0.85)", objectPosition: "center 40%" }} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to right, rgba(6,6,10,0.8), rgba(6,6,10,0.3))" }} />
        <div className="absolute inset-0 flex items-center px-8">
          <p className="text-lg font-bold leading-9" style={{ color: "#E8C98A" }}>
            「なぜ痛むのか」を丁寧に探り、<br />
            <span style={{ color: "#E8E8EC" }}>身体の根本から変えていく。</span>
          </p>
        </div>
      </div>

      <div className="space-y-5">
        {services.items.map((item, i) => (
          <div
            key={i}
            className="glass-card rounded-xl p-6 flex gap-5"
          >
            <span className="text-3xl font-bold flex-shrink-0 leading-none" style={{ color: "rgba(201,169,110,0.3)", fontVariantNumeric: "tabular-nums" }}>
              {item.number}
            </span>
            <div>
              <p className="font-bold text-base mb-2" style={{ color: "#E8C98A" }}>{item.title}</p>
              <p className="text-sm leading-7" style={{ color: "#8B8B9E" }}>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
