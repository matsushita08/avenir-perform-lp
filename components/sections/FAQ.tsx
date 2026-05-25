"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionTitle from "@/components/ui/SectionTitle";
import { content } from "@/config/content";

export default function FAQ() {
  const { faq } = content;
  const [open, setOpen] = useState<number | null>(null);

  return (
    <SectionWrapper>
      <SectionTitle>{faq.title}</SectionTitle>

      <div className="space-y-3">
        {faq.items.map((item, i) => (
          <div
            key={i}
            className="rounded-xl overflow-hidden"
            style={{ border: "1px solid rgba(59,110,71,0.2)" }}
          >
            <button
              onClick={() => setOpen(open === i ? null : i)}
              className="w-full text-left px-6 py-5 flex items-start justify-between gap-4"
              style={{ background: "rgba(255,255,255,0.02)" }}
            >
              <span className="text-sm font-medium leading-relaxed flex items-start gap-3" style={{ color: "#1C1C1E" }}>
                <span className="flex-shrink-0 font-bold text-xs pt-0.5" style={{ color: "#3B6E47" }}>Q.</span>
                {item.q}
              </span>
              <span className="flex-shrink-0 text-lg transition-transform" style={{ color: "#3B6E47", transform: open === i ? "rotate(45deg)" : "rotate(0deg)" }}>+</span>
            </button>

            <AnimatePresence>
              {open === i && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-5 pt-2" style={{ borderTop: "1px solid rgba(59,110,71,0.1)" }}>
                    <p className="text-sm leading-7 pl-5" style={{ color: "#6B6B7B" }}>
                      <span className="font-bold mr-2" style={{ color: "#3B6E47" }}>A.</span>
                      {item.a}
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
