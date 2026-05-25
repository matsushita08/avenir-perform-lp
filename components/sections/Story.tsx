"use client";

import SectionWrapper from "@/components/ui/SectionWrapper";
import { content } from "@/config/content";

export default function Story() {
  const { story } = content;
  const titleLines = story.title.split("\n");
  const paragraphs = story.body.split("\n\n");

  return (
    <SectionWrapper>
      {/* タイトル */}
      <div className="mb-10 relative">
        <h2 className="text-2xl md:text-3xl font-bold leading-snug" style={{ color: "#3B6E47" }}>
          {titleLines.map((line, i) => (
            <span key={i}>
              {line}
              {i < titleLines.length - 1 && <br />}
            </span>
          ))}
        </h2>
        {/* 右端の縦装飾ライン */}
        <div
          className="absolute right-0 top-0 bottom-0 w-px"
          style={{ background: "linear-gradient(to bottom, rgba(59,110,71,0.5), rgba(59,110,71,0.05))" }}
        />
      </div>

      {/* 本文 */}
      <div className="space-y-6 pl-4" style={{ borderLeft: "1px solid rgba(59,110,71,0.15)" }}>
        {paragraphs.map((para, pi) => {
          const lines = para.split("\n");
          const isLast = pi === paragraphs.length - 1;

          // 最後の段落の最後の文をゴールド強調
          if (isLast) {
            const lastLineIdx = lines.length - 1;
            return (
              <p key={pi} className="text-base leading-8" style={{ color: "#6B6B7B" }}>
                {lines.map((line, li) => (
                  <span key={li}>
                    {li === lastLineIdx
                      ? <span style={{ color: "#4D8A5E", fontWeight: 600 }}>{line}</span>
                      : line
                    }
                    {li < lines.length - 1 && <br />}
                  </span>
                ))}
              </p>
            );
          }

          return (
            <p key={pi} className="text-base leading-8" style={{ color: "#6B6B7B" }}>
              {lines.map((line, li) => (
                <span key={li}>
                  {line}
                  {li < lines.length - 1 && <br />}
                </span>
              ))}
            </p>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
