import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Avenir Perform（アヴニール パフォーム）| 慢性痛・神経・運動の専門施術院",
  description: "旅行も、ゴルフも、まだ諦めなくていい。神経×運動×予防の3つからアプローチし、歳を重ねても人生を楽しめる身体へ。千葉県浦安市の完全マンツーマン施術院。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
