import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DesignArena | مقارنة أكاديمية للتسويق الرقمي والتقليدي",
  description:
    "ملف بحثي منظم يوضح الاختلافات الجوهرية بين التسويق الرقمي والتسويق التقليدي اعتمادًا على مصادر أكاديمية موثوقة مع أمثلة تطبيقية.",
  keywords: [
    "التسويق الرقمي",
    "التسويق التقليدي",
    "بحث أكاديمي",
    "DesignArena",
    "دراسات حالة",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-slate-950 text-slate-50 antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
