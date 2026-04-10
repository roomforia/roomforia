import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";

/* ===== FONTS ===== */
const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  weight: ["300", "400", "500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
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
      className={`${jakarta.variable} ${inter.variable}`}
      style={{ colorScheme: "light" }}
    >
      <head>
        <meta name="color-scheme" content="light only" />
      </head>
      <body
        className="bg-white text-[#1E1E1E] antialiased font-[var(--font-jakarta)] overflow-x-hidden"
        style={{
          color: "#1E1E1E",
          backgroundColor: "#ffffff",
        }}
      >
        {children}
      </body>
    </html>
  );
}