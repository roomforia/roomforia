import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/providers/SmoothScroll";

/* ================= FONTS ================= */

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  weight: ["300", "400", "500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

/* ================= META ================= */

export const metadata: Metadata = {
  title: "Roomforia",
  description: "AI интерьер за секунды",
};

/* ================= LAYOUT ================= */

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${jakarta.variable} ${inter.variable}`}
      style={{ colorScheme: "light" }} // ✅ ключевой фикс Safari
    >
      <head>
        {/* ✅ фикс авто-темы iOS */}
        <meta name="color-scheme" content="light only" />
      </head>

      <body
        className="
          relative
          bg-[#F6F4F1] text-[#1E1E1E]
          antialiased
          overflow-x-hidden
          font-[var(--font-jakarta)]
        "
        style={{
          color: "#1E1E1E", // ✅ форс текста
          backgroundColor: "#F6F4F1", // ✅ форс фона
        }}
      >
        {/* ================= SMOOTH SCROLL ================= */}
        <SmoothScroll />

        {/* ================= GLOBAL BACKGROUND ================= */}
        <div className="fixed inset-0 -z-10 pointer-events-none">

          {/* BASE */}
          <div className="absolute inset-0 bg-[#F6F4F1]" />

          {/* SOFT DEPTH */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-black/[0.02]" />

          {/* TOP LIGHT */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-white/15 blur-[120px] rounded-full" />

          {/* BRAND GLOW */}
          <div className="absolute bottom-[-120px] right-[-120px] w-[500px] h-[500px] bg-[#C47A2C]/10 blur-3xl rounded-full" />

          {/* SIDE LIGHT */}
          <div className="absolute left-[-200px] top-[30%] w-[400px] h-[400px] bg-white/10 blur-3xl rounded-full" />
        </div>

        {/* ================= GRAIN ================= */}
        <div className="fixed inset-0 -z-10 opacity-[0.02] pointer-events-none mix-blend-overlay">
          <svg className="w-full h-full">
            <filter id="noise">
              <feTurbulence
                baseFrequency="0.7"
                numOctaves="2"
                stitchTiles="stitch"
              />
            </filter>
            <rect width="100%" height="100%" filter="url(#noise)" />
          </svg>
        </div>

        {children}
      </body>
    </html>
  );
}