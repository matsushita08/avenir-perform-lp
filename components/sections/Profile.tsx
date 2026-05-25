"use client";

import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionTitle from "@/components/ui/SectionTitle";
import { content } from "@/config/content";

export default function Profile() {
  const { profile } = content;
  const descLines = profile.description.split("\n\n");

  return (
    <SectionWrapper>
      <SectionTitle>{profile.title}</SectionTitle>

      <div className="glass-card rounded-2xl p-8">
        <div className="flex items-center gap-4 mb-6 pb-6" style={{ borderBottom: "1px solid rgba(201,169,110,0.15)" }}>
          <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0"
            style={{ border: "2px solid rgba(201,169,110,0.4)" }}>
            <img src="/images/profile.jpg" alt="院長 福島" className="w-full h-full object-cover object-top" />
          </div>
          <div>
            <p className="font-bold text-base" style={{ color: "#E8E8EC" }}>{profile.name}</p>
            <p className="text-sm mt-1 italic" style={{ color: "#C9A96E" }}>{profile.quote}</p>
          </div>
        </div>

        <div className="space-y-4 mb-6">
          {descLines.map((para, i) => (
            <p key={i} className="text-sm leading-8" style={{ color: "#8B8B9E" }}>
              {para.split("\n").map((line, j, arr) => (
                <span key={j}>{line}{j < arr.length - 1 && <br />}</span>
              ))}
            </p>
          ))}
        </div>

        {profile.credentials && (
          <div className="pt-5" style={{ borderTop: "1px solid rgba(201,169,110,0.15)" }}>
            <p className="text-xs font-bold tracking-widest mb-3" style={{ color: "#C9A96E" }}>CREDENTIALS</p>
            <div className="flex flex-wrap gap-2">
              {profile.credentials.map((c) => (
                <span key={c} className="text-xs px-3 py-1 rounded-full" style={{ background: "rgba(201,169,110,0.08)", border: "1px solid rgba(201,169,110,0.25)", color: "#C9A96E" }}>
                  {c}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </SectionWrapper>
  );
}
