"use client";

import Image from "next/image";
import SectionWrapper from "@/components/ui/SectionWrapper";

const photos = [
  { src: "/images/session1.jpg", caption: "院内グループセッション" },
  { src: "/images/session2.jpg", caption: "マンツーマン指導" },
  { src: "/images/session3.jpg", caption: "動作分析・指導" },
  { src: "/images/session4.jpg", caption: "グループエクササイズ" },
  { src: "/images/session5.jpg", caption: "パフォーマンストレーニング" },
];

export default function Gallery() {
  return (
    <SectionWrapper>
      <p className="text-xs font-bold tracking-widest mb-6 text-center" style={{ color: "#C9A96E" }}>
        TRAINING GALLERY
      </p>

      <div className="flex gap-3 overflow-x-auto pb-3" style={{ scrollbarWidth: "none" }}>
        {photos.map((photo, i) => (
          <div
            key={i}
            className="relative flex-shrink-0 rounded-xl overflow-hidden"
            style={{ width: "200px", height: "260px" }}
          >
            <Image
              src={photo.src}
              alt={photo.caption}
              fill
              className="object-cover"
              style={{ filter: "brightness(0.75) saturate(0.9)" }}
            />
            <div
              className="absolute inset-0"
              style={{ background: "linear-gradient(to top, rgba(6,6,10,0.75) 0%, transparent 55%)" }}
            />
            <p
              className="absolute bottom-3 left-3 right-3 text-xs leading-5"
              style={{ color: "rgba(201,169,110,0.9)" }}
            >
              {photo.caption}
            </p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
