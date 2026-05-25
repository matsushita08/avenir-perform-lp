"use client";

import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionTitle from "@/components/ui/SectionTitle";
import CTAButton from "@/components/ui/CTAButton";
import { content } from "@/config/content";

export default function Booking() {
  const { booking } = content;

  return (
    <SectionWrapper id="booking">
      <SectionTitle>{booking.title}</SectionTitle>

      {/* 料金ボックス */}
      <div className="glass-card rounded-2xl p-6 mb-8">
        <div className="text-center mb-4">
          <span className="text-4xl font-bold" style={{ color: "#E8C98A" }}>
            {booking.price}
          </span>
          <span className="text-sm ml-2" style={{ color: "#8B8B9E" }}>
            {booking.duration}
          </span>
          <p className="text-xs mt-1" style={{ color: "rgba(139,139,158,0.7)" }}>
            {booking.note}
          </p>
        </div>

        {/* badges */}
        <div className="flex flex-wrap justify-center gap-2 mb-5">
          {booking.badges.map((badge, i) => (
            <span
              key={i}
              className="text-xs px-3 py-1 rounded-full font-medium"
              style={{
                background: "rgba(201,169,110,0.12)",
                border: "1px solid rgba(201,169,110,0.35)",
                color: "#C9A96E",
              }}
            >
              {badge}
            </span>
          ))}
        </div>

        {/* includes */}
        <ul className="space-y-2">
          {booking.includes.map((item, i) => (
            <li key={i} className="flex items-start gap-2 text-sm" style={{ color: "#8B8B9E" }}>
              <span style={{ color: "#C9A96E", flexShrink: 0 }}>✓</span>
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* 予約の流れ */}
      <div className="mb-8">
        <h3
          className="text-base font-bold mb-5 tracking-wider"
          style={{ color: "#E8E8EC" }}
        >
          予約の流れ
        </h3>
        <div className="space-y-4">
          {booking.flow.map((f, i) => (
            <div key={i} className="flex items-start gap-4">
              <div
                className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold"
                style={{
                  background: "rgba(201,169,110,0.12)",
                  border: "1px solid rgba(201,169,110,0.5)",
                  color: "#C9A96E",
                }}
              >
                {i + 1}
              </div>
              <div className="pt-1">
                <span className="text-xs font-bold tracking-widest mr-2" style={{ color: "#C9A96E" }}>
                  {f.step}
                </span>
                <span className="text-sm" style={{ color: "#8B8B9E" }}>
                  {f.text}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 持ち物チェックリスト */}
      <div className="glass-card rounded-2xl p-6 mb-8">
        <h3
          className="text-base font-bold mb-4 tracking-wider"
          style={{ color: "#E8E8EC" }}
        >
          当日の持ち物
        </h3>
        <ul className="space-y-2">
          {booking.checklist.map((item, i) => (
            <li key={i} className="flex items-start gap-2 text-sm" style={{ color: "#8B8B9E" }}>
              <span style={{ color: "rgba(139,139,158,0.6)", flexShrink: 0 }}>□</span>
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* noSellNote */}
      <div
        className="rounded-xl px-5 py-4 mb-10 text-sm text-center"
        style={{
          background: "rgba(201,169,110,0.05)",
          border: "1px solid rgba(201,169,110,0.25)",
          color: "#C9A96E",
        }}
      >
        {booking.noSellNote}
      </div>

      {/* CTA */}
      <div className="text-center">
        <CTAButton href={booking.ctaUrl} label={booking.cta} size="lg" />
        <p className="text-xs mt-3" style={{ color: "rgba(139,139,158,0.65)" }}>
          {booking.note}
        </p>
      </div>
    </SectionWrapper>
  );
}
