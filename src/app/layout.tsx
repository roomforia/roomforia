import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

/* ===== FONTS ===== */
const manrope = Manrope({
  subsets: ["latin", "cyrillic"],
  variable: "--font-manrope",
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

/* ===== META ===== */
export const metadata: Metadata = {
  title: "Roomforia",
  description: "AI интерьер за секунды",
};

/* ===== LAYOUT ===== */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="ru"
      suppressHydrationWarning
      className={manrope.variable}
      style={{ colorScheme: "light" }}
    >
      <head>
        <meta name="color-scheme" content="light only" />
      </head>
      <body
        className="bg-white text-[#1E1E1E] antialiased overflow-x-hidden"
        style={{
          color: "#1E1E1E",
          backgroundColor: "#ffffff",
          fontFamily: "var(--font-manrope), sans-serif",
        }}
      >
        {children}
      </body>
    </html>
  );
}
