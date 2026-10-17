import type { Metadata } from "next";
import { IBM_Plex_Sans_Thai, Mitr } from "next/font/google";
import "./globals.css";

const body = IBM_Plex_Sans_Thai({
  variable: "--font-body",
  subsets: ["thai", "latin"],
  weight: ["400", "500", "600"],
});

const heading = Mitr({
  variable: "--font-heading",
  subsets: ["thai", "latin"],
  weight: ["400", "500", "600"],
});

const title = "Earthtones | ของใช้ส่วนตัวสายธรรมชาติ อ่อนโยนต่อคุณและโลก";
const description =
  "Earthtones ผลิตภัณฑ์ Personal Care & Wellness แนว Eco-Friendly ทั้งเจลอาบน้ำ แชมพู โลชั่น น้ำมันหอมระเหย และ Refill Station ลดขยะพลาสติก ทักไลน์สั่งซื้อได้เลย";

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    siteName: "Earthtones",
    locale: "th_TH",
    type: "website",
    images: [{ url: "/images/aroma-roller-set.jpg", width: 1254, height: 1254, alt: "Earthtones Aroma Roller Set" }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/images/aroma-roller-set.jpg"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="th" className={`${body.variable} ${heading.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
