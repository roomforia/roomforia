import type { Metadata } from "next";
import { Geologica } from "next/font/google";
import "./globals.css";

/* ===== FONTS ===== */
const geologica = Geologica({
  subsets: ["latin", "cyrillic"],
  variable: "--font-geologica",
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

/* ===== META ===== */
export const metadata: Metadata = {
  title: "Roomforia",
  description: "AI интерьер за секунды",
  metadataBase: new URL("https://roomforia.com"),
  openGraph: {
    title: "Roomforia — AI-дизайн интерьера за секунды",
    description: "Загрузите фото комнаты — получите готовый дизайн и список мебели с реальными товарами",
    url: "https://roomforia.com",
    siteName: "Roomforia",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Roomforia — AI-дизайн интерьера",
      },
    ],
    locale: "ru_RU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Roomforia — AI-дизайн интерьера за секунды",
    description: "Загрузите фото комнаты — получите готовый дизайн и список мебели с реальными товарами",
    images: ["/og-image.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
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
      className={geologica.variable}
      style={{ colorScheme: "light" }}
    >
      <head>
        <meta name="color-scheme" content="light only" />
        <meta name="theme-color" content="#111111" />
      </head>
      <body
        className="bg-white text-[#1E1E1E] antialiased overflow-x-hidden"
        style={{
          color: "#1E1E1E",
          backgroundColor: "#ffffff",
          fontFamily: "var(--font-geologica), sans-serif",
        }}
      >
        {children}
      </body>
    </html>
  );
}
