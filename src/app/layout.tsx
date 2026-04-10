import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";

/* ===== FONTS ===== */
// DM Sans — ближайший бесплатный аналог Circular Std (используется на north2.net)
const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["300", "400", "500", "600", "700"],
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
      className={dmSans.variable}
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
          fontFamily: "var(--font-dm-sans), sans-serif",
        }}
      >
        {children}
      </body>
    </html>
  );
}
