import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Noto_Naskh_Arabic } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const notoArabic = Noto_Naskh_Arabic({
  variable: "--font-noto-arabic",
  subsets: ["arabic"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Cerdas Menghafal - Hafal Ribuan Kosakata Arab dengan SRS",
  description: "Aplikasi penghafal mufrodat bahasa Arab berbasis Spaced Repetition System (SRS). Efektif, Islami, dan Modern.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <body
        className={`${jakarta.variable} ${notoArabic.variable} antialiased bg-background text-foreground font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
