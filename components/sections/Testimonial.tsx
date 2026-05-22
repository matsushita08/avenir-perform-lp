"use client";

import Image from "next/image";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionTitle from "@/components/ui/SectionTitle";
import { content } from "@/config/content";

export default function Testimonial() {
  const { testimonial } = content;

  return (
    <SectionWrapper>
      <SectionTitle>{"お客様の声"}</SectionTitle>

      {/* profile card */}
      <div className="glass-card rounded-2xl p-6 mb-8 flex flex-col gap-1">
        <p className="text-sm font-semibold" style={{ color: "#C9A96E" }}>{testimonial.name}</p>
        <p className="text-sm" style={{ color: "#8B8B9E" }}>{testimonial.result}</p>
      </div>

      {/* timeline */}
      <div className="relative pl-8">
        <div className="absolute left-3 top-0 bottom-0 w-px" style={{ background: "linear-gradient(to bottom, #C9A96E, rgba(201,169,110,0.1))" }} />

        {testimonial.timeline.map((step, i) => (
          <div
            key={i}
            className="relative mb-10"
          >
            <div className="absolute -left-5 top-1 w-3 h-3 rounded-full border-2" style={{ borderColor: "#C9A96E", background: "#06060A" }} />
            <p className="text-xs font-bold tracking-widest mb-3" style={{ color: "#C9A96E" }}>{step.period}</p>
            <div className="glass-card rounded-xl p-5">
              <p className="text-base leading-8" style={{ color: "#8B8B9E" }}>
                {step.text.split("\n\n").map((para, pi) => (
                  <span key={pi}>
                    {para.split("\n").map((line, li) => (
                      <span key={li}>{line}{li < para.split("\n").length - 1 && <br />}</span>
                    ))}
                    {pi < step.text.split("\n\n").length - 1 && <><br /><br /></>}
                  </span>
                ))}
              </p>
              {/* 半年後のエピソードに写真を添える */}
              {i === 3 && (
                <div className="mt-4 relative rounded-xl overflow-hidden" style={{ height: "200px" }}>
                  <Image
                    src="/images/travel.jpg"
                    alt="北海道旅行のイメージ"
                    fill
                    className="object-cover"
                    style={{ filter: "brightness(0.85) saturate(1.1)" }}
                  />
                  <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(6,6,10,0.75) 0%, transparent 55%)" }} />
                  <p className="absolute bottom-3 right-4 text-xs" style={{ color: "rgba(201,169,110,0.9)" }}>北海道 / 1日8,000歩</p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
