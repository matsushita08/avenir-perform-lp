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
            style={{ border: "1px solid rgba(201,169,110,0.2)" }}
          >
            <button
              onClick={() => setOpen(open === i ? null : i)}
              className="w-full text-left px-6 py-5 flex items-start justify-between gap-4"
              style={{ background: "rgba(255,255,255,0.02)" }}
            >
              <span className="text-sm font-medium leading-relaxed flex items-start gap-3" style={{ color: "#E8E8EC" }}>
                <span className="flex-shrink-0 font-bold text-xs pt-0.5" style={{ color: "#C9A96E" }}>Q.</span>
                {item.q}
              </span>
              <span className="flex-shrink-0 text-lg transition-transform" style={{ color: "#C9A96E", transform: open === i ? "rotate(45deg)" : "rotate(0deg)" }}>+</span>
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
                  <div className="px-6 pb-5 pt-2" style={{ borderTop: "1px solid rgba(201,169,110,0.1)" }}>
                    <p className="text-sm leading-7 pl-5" style={{ color: "#8B8B9E" }}>
                      <span className="font-bold mr-2" style={{ color: "#C9A96E" }}>A.</span>
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
