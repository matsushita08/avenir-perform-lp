"use client";

import Image from "next/image";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { content } from "@/config/content";

export default function Gallery() {
  const { photos } = content.gallery;

  return (
    <SectionWrapper>
      <p className="text-xs font-bold tracking-widest mb-6 text-center" style={{ color: "#C9A96E" }}>
        TRAINING GALLERY
      </p>

      <div className="flex gap-3 overflow-x-auto pb-3 no-scrollbar">
        {photos.map((photo) => (
          <div
            key={photo.src}
            className="relative flex-shrink-0 rounded-xl overflow-hidden"
            style={{ width: "200px", height: "260px" }}
          >
            <Image
              src={photo.src}
              alt={photo.caption}
              fill
              sizes="200px"
              loading="lazy"
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
