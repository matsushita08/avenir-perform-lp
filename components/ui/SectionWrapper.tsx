"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
  id?: string;
}

export default function SectionWrapper({ children, className = "", id }: Props) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px", amount: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className={`relative z-10 px-6 py-20 max-w-3xl mx-auto ${className}`}
    >
      {children}
    </motion.section>
  );
}
