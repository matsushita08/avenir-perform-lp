"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import CTAButton from "@/components/ui/CTAButton";
import { content } from "@/config/content";

export default function Hero() {
  const { hero } = content;
  const lines = hero.headline.split("\n");
  const subLines = hero.subheadline.split("\n");

  return (
    <section className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6 text-center">

      {/* 背景画像（半透明オーバーレイ） */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* メイン：老夫婦歩行 */}
        <Image
          src="/images/couple.jpg"
          alt=""
          fill
          className="object-cover"
          style={{ opacity: 0.28, filter: "blur(0.5px) grayscale(20%)" }}
          priority
        />
        {/* グラデーション：上下を暗く締める */}
        <div className="absolute inset-0" style={{
          background: "linear-gradient(to bottom, #06060A 0%, transparent 25%, transparent 75%, #06060A 100%)"
        }} />
        {/* 全体を少し暗くする */}
        <div className="absolute inset-0" style={{ background: "rgba(6,6,10,0.38)" }} />
      </div>

      {/* サブ：右下に男性写真を小さく配置 */}
      <div className="absolute bottom-0 right-0 w-48 md:w-64 h-64 md:h-80 overflow-hidden pointer-events-none"
        style={{ maskImage: "linear-gradient(to top, transparent 0%, rgba(0,0,0,0.6) 40%, rgba(0,0,0,0.6) 80%, transparent 100%), linear-gradient(to right, transparent 0%, rgba(0,0,0,0.8) 30%)", WebkitMaskImage: "linear-gradient(to top, transparent 0%, rgba(0,0,0,0.5) 50%, transparent 100%)" }}>
        <Image
          src="/images/hero.png"
          alt=""
          fill
          className="object-cover object-top"
          style={{ opacity: 0.2 }}
        />
      </div>
      {/* logo / brand */}
      <motion.p
        initial={{ opacity: 0, letterSpacing: "0.3em" }}
        animate={{ opacity: 1, letterSpacing: "0.5em" }}
        transition={{ duration: 1.2, delay: 0.2 }}
        className="text-xs font-semibold tracking-[0.5em] mb-10"
        style={{ color: "#C9A96E" }}
      >
        AVENIR PERFORM
      </motion.p>

      {/* headline */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.5 }}
        className="text-4xl md:text-6xl font-bold leading-tight mb-8 glow-text"
      >
        {lines.map((line, i) => (
          <span key={i}>
            {line}
            {i < lines.length - 1 && <br />}
          </span>
        ))}
      </motion.h1>

      {/* subheadline */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.9 }}
        className="text-lg md:text-xl leading-relaxed mb-14"
        style={{ color: "#8B8B9E" }}
      >
        {subLines.map((line, i) => (
          <span key={i}>
            {line}
            {i < subLines.length - 1 && <br />}
          </span>
        ))}
      </motion.p>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 1.3 }}
        className="flex flex-col items-center gap-3"
      >
        <CTAButton href={hero.ctaUrl} label={hero.cta} />
        <p className="text-xs" style={{ color: "rgba(201,169,110,0.6)" }}>{hero.note}</p>
      </motion.div>

      {/* scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 flex flex-col items-center gap-2"
        style={{ color: "#8B8B9E" }}
      >
        <span className="text-xs tracking-widest">SCROLL</span>
        <div className="float-anim w-px h-8" style={{ background: "linear-gradient(to bottom, #C9A96E, transparent)" }} />
      </motion.div>
    </section>
  );
}
