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
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.ico" },
    ],
    apple: { url: "/apple-touch-icon.png" },
    other: [
      { rel: "manifest", url: "/site.webmanifest" },
    ],
  },
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
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
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
