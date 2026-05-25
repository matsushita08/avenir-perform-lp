"use client";

import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionTitle from "@/components/ui/SectionTitle";
import { content } from "@/config/content";

export default function Discover() {
  const { discover } = content;

  return (
    <SectionWrapper>
      <SectionTitle>{discover.title}</SectionTitle>

      {/* subtitle */}
      <p className="text-sm text-center mb-10 tracking-wide" style={{ color: "#3B6E47" }}>
        {discover.subtitle}
      </p>

      {/* カード一覧 */}
      <div className="space-y-4">
        {discover.items.map((item) => (
          <div
            key={item.number}
            className="glass-card rounded-2xl p-6 relative overflow-hidden"
          >
            {/* 背景に薄い番号 */}
            <span
              className="absolute right-4 top-1/2 -translate-y-1/2 font-bold select-none pointer-events-none"
              style={{
                fontSize: "5rem",
                lineHeight: 1,
                color: "rgba(59,110,71,0.07)",
              }}
            >
              {item.number}
            </span>

            <div className="relative z-10">
              {/* 番号 + タイトル */}
              <div className="flex items-center gap-3 mb-2">
                <span className="text-xs font-bold tracking-widest" style={{ color: "rgba(59,110,71,0.5)" }}>
                  {item.number}
                </span>
                <h3 className="text-base font-bold" style={{ color: "#3B6E47" }}>
                  {item.title}
                </h3>
              </div>
              {/* 説明文 */}
              <p className="text-sm leading-7" style={{ color: "#6B6B7B" }}>
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
