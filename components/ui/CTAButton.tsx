"use client";

interface Props {
  href: string;
  label: string;
  size?: "sm" | "lg";
}

export default function CTAButton({ href, label, size = "lg" }: Props) {
  const padding = size === "lg" ? "py-5 px-10 text-lg" : "py-3 px-7 text-base";
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`cta-btn inline-block rounded-full font-bold tracking-widest text-[#06060A] ${padding} transition-transform hover:scale-105 active:scale-95`}
      style={{ background: "linear-gradient(135deg, #C9A96E 0%, #E8C98A 50%, #C9A96E 100%)" }}
    >
      {label}
    </a>
  );
}
