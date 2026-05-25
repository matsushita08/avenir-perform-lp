"use client";

import Image from "next/image";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionTitle from "@/components/ui/SectionTitle";
import { content } from "@/config/content";

export default function About() {
  const { about } = content;
  const descLines = about.philosophy.split("\n\n");
  const taglines = about.tagline.split("\n");

  return (
    <SectionWrapper>
      <SectionTitle>{about.title}</SectionTitle>

      <div className="space-y-4 mb-10">
        {descLines.map((para, i) => (
          <p key={i} className="text-base leading-8" style={{ color: "#6B6B7B" }}>
            {para.split("\n").map((line, j) => (
              <span key={j}>{line}{j < para.split("\n").length - 1 && <br />}</span>
            ))}
          </p>
        ))}
      </div>

      <p className="text-sm mb-5" style={{ color: "#3B6E47" }}>そして最終的に目指すのは、</p>

      {/* ゴルフ画像 */}
      <div className="relative rounded-2xl overflow-hidden mb-6" style={{ height: "160px" }}>
        <Image src="/images/golf.jpg" alt="ゴルフを楽しむシニア" fill className="object-cover" style={{ filter: "brightness(0.6) saturate(1.1)" }} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(6,6,10,0.8) 0%, rgba(6,6,10,0.2) 100%)" }} />
        <p className="absolute bottom-3 left-4 text-xs" style={{ color: "rgba(59,110,71,0.8)" }}>ゴルフを、また楽しめる日へ。</p>
      </div>

      <div className="space-y-2 mb-10">
        {about.goals.map((goal, i) => (
          <div
            key={i}
            className="flex items-center gap-3 py-3 px-4 rounded-lg"
            style={{ borderLeft: "2px solid #3B6E47" }}
          >
            <span className="text-lg font-medium" style={{ color: "#1C1C1E" }}>{goal}</span>
          </div>
        ))}
      </div>

      <div className="text-center py-8 px-6 rounded-2xl" style={{ background: "linear-gradient(135deg, rgba(59,110,71,0.08) 0%, rgba(59,110,71,0.03) 100%)", border: "1px solid rgba(59,110,71,0.3)" }}>
        <p className="text-lg font-bold leading-relaxed" style={{ color: "#4D8A5E" }}>
          {taglines.map((line, i) => (
            <span key={i}>{line}{i < taglines.length - 1 && <br />}</span>
          ))}
        </p>
      </div>
    </SectionWrapper>
  );
}
