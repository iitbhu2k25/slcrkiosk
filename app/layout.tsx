import { ReactNode } from "react";
import { Inter } from "next/font/google";
import TopBar from "@/components/layout/TopBar";
import Header from "@/components/layout/Header";
import MainNav from "@/components/layout/MainNav";
import Footer from "@/components/layout/Footer";
import ScreensaverWrapper from "@/components/ScreensaverWrapper";
import HomeButton from "@/components/kiosk/HomeButton";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: "SLCR - Smart Laboratory on Clean Rivers",
  description:
    "Indo-Danish initiative for sustainable river rejuvenation and innovative wastewater treatment technologies in Varanasi.",
  keywords: [
    "SLCR",
    "Clean Rivers",
    "Varanasi",
    "India Denmark",
    "Jal Shakti",
    "Namami Gange",
    "Water Technology",
  ],
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        {/* PWA Manifest */}
        <link rel="manifest" href="/manifest.json" />

        {/* Theme Color */}
        <meta name="theme-color" content="#0f172a" />

        {/* iOS PWA Support */}
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <link rel="apple-touch-icon" href="/icons/icon-192x192.png" />
      </head>
      <body className={`${inter.className} antialiased`}>
        {/* Screensaver - activates after 10 seconds of inactivity */}
        <ScreensaverWrapper idleTimeout={10000} />

        {/* Floating Home Button - visible on all pages except homepage */}
        <HomeButton />

        {/* Main Content - Full Screen */}
        <main id="main-content" tabIndex={-1} className="focus:outline-none">
          {children}
        </main>
      </body>
    </html>
  );
}
