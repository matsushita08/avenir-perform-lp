"use client";

import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionTitle from "@/components/ui/SectionTitle";
import { content } from "@/config/content";

export default function Steps() {
  const { steps } = content;

  return (
    <SectionWrapper>
      <SectionTitle>{steps.title}</SectionTitle>

      {/* subtitle */}
      <p className="text-sm text-center mb-10" style={{ color: "#8B8B9E" }}>
        {steps.subtitle}
      </p>

      {/* timeline */}
      <div className="relative pl-8">
        {/* 縦線 */}
        <div
          className="absolute left-3 top-0 bottom-0 w-px"
          style={{ background: "linear-gradient(to bottom, #C9A96E, rgba(201,169,110,0.1))" }}
        />

        {steps.items.map((item, i) => (
          <div key={i} className="relative mb-10 last:mb-0">
            {/* ドット */}
            <div
              className="absolute -left-5 top-1 w-3 h-3 rounded-full border-2"
              style={{ borderColor: "#C9A96E", background: "#06060A" }}
            />

            {/* ステップ番号 + 所要時間 */}
            <div className="flex items-center gap-3 mb-2">
              <span className="text-xs font-bold tracking-widest" style={{ color: "#C9A96E" }}>
                {item.step}
              </span>
              <span className="text-xs" style={{ color: "#8B8B9E" }}>
                {item.time}
              </span>
            </div>

            {/* カード */}
            <div className="glass-card rounded-xl p-5">
              <h3 className="text-base font-bold mb-3" style={{ color: "#E8E8EC" }}>
                {item.title}
              </h3>
              <div className="text-sm leading-7" style={{ color: "#8B8B9E" }}>
                {item.description.split("\n\n").map((para, pi) => (
                  <p key={pi} className={pi > 0 ? "mt-4" : ""}>
                    {para.split("\n").map((line, li) => (
                      <span key={li}>
                        {line}
                        {li < para.split("\n").length - 1 && <br />}
                      </span>
                    ))}
                  </p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* note */}
      <p className="text-xs text-center mt-10 tracking-wide" style={{ color: "#C9A96E" }}>
        {steps.note}
      </p>
    </SectionWrapper>
  );
}
