"use client";

import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionTitle from "@/components/ui/SectionTitle";
import { content } from "@/config/content";

export default function Testimonials() {
  const { testimonials } = content;

  return (
    <SectionWrapper>
      <SectionTitle>{testimonials.title}</SectionTitle>

      <p className="text-center text-xs mb-10 -mt-6" style={{ color: "rgba(139,139,158,0.65)" }}>
        {testimonials.note}
      </p>

      {testimonials.items.map((item, i) => (
        <div key={i} className="glass-card rounded-2xl p-6 mb-6">
          {/* header */}
          <div className="mb-4">
            <span className="text-base font-bold mr-3" style={{ color: "#3B6E47" }}>
              {item.age}
            </span>
            <span className="text-sm mr-3" style={{ color: "#6B6B7B" }}>
              {item.job}
            </span>
            <span className="text-sm italic" style={{ color: "#6B6B7B" }}>
              {item.issue}
            </span>
          </div>

          {/* body */}
          <div className="space-y-3">
            {item.text.split("\n\n").map((para, pi) => (
              <p key={pi} className="text-base leading-8" style={{ color: "#6B6B7B" }}>
                {para.split("\n").map((line, li, arr) => (
                  <span key={li}>
                    {line}
                    {li < arr.length - 1 && <br />}
                  </span>
                ))}
              </p>
            ))}
          </div>
        </div>
      ))}
    </SectionWrapper>
  );
}
